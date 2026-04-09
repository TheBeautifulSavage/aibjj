/**
 * db.ts - Supabase REST API wrapper that mimics common Prisma patterns
 * Used as a drop-in replacement for prisma on Vercel (which can't reach IPv6 Postgres directly)
 */
import { supabase } from "./supabase";

type OrderBy = Record<string, "asc" | "desc" | string>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyOrder(query: any, orderBy: OrderBy | OrderBy[]): any {
  const orders = Array.isArray(orderBy) ? orderBy : [orderBy];
  for (const o of orders) {
    for (const [col, dir] of Object.entries(o)) {
      query = query.order(col, { ascending: dir === "asc" });
    }
  }
  return query;
}

// Apply where conditions to a supabase query
// Supports: { field: value }, { field: { contains, mode, gte, lte, not, in, gt, lt } }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyWhere(query: any, where: Record<string, any>): any {
  for (const [key, val] of Object.entries(where)) {
    if (key === "OR") {
      // OR conditions — use supabase's or() with comma-separated filters
      // Build an OR string from conditions
      const orParts: string[] = [];
      for (const cond of val as Record<string, unknown>[]) {
        for (const [field, fval] of Object.entries(cond)) {
          if (field === "OR") continue; // nested OR not supported
          if (typeof fval === "object" && fval !== null) {
            const fv = fval as Record<string, unknown>;
            if (fv.contains) orParts.push(`${field}.ilike.%${fv.contains}%`);
          } else {
            orParts.push(`${field}.eq.${fval}`);
          }
        }
      }
      if (orParts.length > 0) {
        query = query.or(orParts.join(","));
      }
      continue;
    }
    if (key === "AND") {
      for (const cond of val as Record<string, unknown>[]) {
        query = applyWhere(query, cond);
      }
      continue;
    }
    if (typeof val === "object" && val !== null && !Array.isArray(val)) {
      const ops = val as Record<string, unknown>;
      if ("contains" in ops) {
        // case-insensitive if mode=insensitive
        query = query.ilike(key, `%${ops.contains}%`);
      } else if ("startsWith" in ops) {
        query = query.ilike(key, `${ops.startsWith}%`);
      } else if ("endsWith" in ops) {
        query = query.ilike(key, `%${ops.endsWith}`);
      } else if ("not" in ops && ops.not === null) {
        query = query.not(key, "is", null);
      } else if ("not" in ops) {
        query = query.neq(key, ops.not);
      } else if ("in" in ops) {
        query = query.in(key, ops.in as unknown[]);
      } else if ("gte" in ops && "lte" in ops) {
        query = query.gte(key, ops.gte).lte(key, ops.lte);
      } else if ("gte" in ops) {
        query = query.gte(key, ops.gte);
      } else if ("lte" in ops) {
        query = query.lte(key, ops.lte);
      } else if ("gt" in ops) {
        query = query.gt(key, ops.gt);
      } else if ("lt" in ops) {
        query = query.lt(key, ops.lt);
      }
    } else if (val === null) {
      query = query.is(key, null);
    } else if (Array.isArray(val)) {
      query = query.in(key, val);
    } else {
      query = query.eq(key, val);
    }
  }
  return query;
}

type SelectSpec = Record<string, boolean | Record<string, unknown>>;

function buildSelect(select?: SelectSpec): string {
  if (!select) return "*";
  const parts: string[] = [];
  for (const [key, val] of Object.entries(select)) {
    if (val === true || val === false) {
      if (val) parts.push(key);
    } else if (typeof val === "object" && val !== null) {
      // nested select — not fully supported, just include the field
      parts.push(key);
    }
  }
  return parts.length > 0 ? parts.join(",") : "*";
}

export type DbFindManyArgs = {
  where?: Record<string, unknown>;
  select?: SelectSpec;
  orderBy?: OrderBy | OrderBy[];
  take?: number;
  skip?: number;
  include?: Record<string, boolean | Record<string, unknown>>;
};

export type DbFindOneArgs = {
  where: Record<string, unknown>;
  select?: SelectSpec;
  include?: Record<string, boolean | Record<string, unknown>>;
  orderBy?: OrderBy | OrderBy[];
};

export type DbCountArgs = {
  where?: Record<string, unknown>;
};

export type DbCreateArgs = {
  data: Record<string, unknown>;
  select?: SelectSpec;
  include?: Record<string, boolean | Record<string, unknown>>;
};

export type DbUpdateArgs = {
  where: Record<string, unknown>;
  data: Record<string, unknown>;
  select?: SelectSpec;
  include?: Record<string, unknown>;
};

export type DbUpsertArgs = {
  where: Record<string, unknown>;
  create: Record<string, unknown>;
  update: Record<string, unknown>;
  select?: SelectSpec;
  include?: Record<string, boolean | Record<string, unknown>>;
};

export type DbDeleteArgs = {
  where: Record<string, unknown>;
};

export type DbDeleteManyArgs = {
  where?: Record<string, unknown>;
};

function makeTable(table: string) {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async findMany(args: DbFindManyArgs = {}): Promise<any[]> {
      const { where, orderBy, take, skip, select } = args;
      let q = supabase.from(table).select(buildSelect(select as SelectSpec));
      if (where) q = applyWhere(q, where);
      if (orderBy) q = applyOrder(q as unknown as ReturnType<typeof supabase.from>, orderBy as OrderBy) as typeof q;
      if (skip !== undefined) q = q.range(skip, skip + (take ?? 1000) - 1);
      else if (take !== undefined) q = q.limit(take);
      const { data, error } = await q;
      if (error) throw new Error(`DB findMany ${table}: ${error.message}`);
      return (data ?? []) as any[];
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async findUnique(args: DbFindOneArgs): Promise<any> {
      const { where, select } = args;
      let q = supabase.from(table).select(buildSelect(select as SelectSpec));
      q = applyWhere(q as unknown as ReturnType<typeof supabase.from>, where as Record<string, unknown>) as typeof q;
      q = q.limit(1) as typeof q;
      const { data, error } = await q;
      if (error) throw new Error(`DB findUnique ${table}: ${error.message}`);
      return data?.[0] ?? null;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async findFirst(args: DbFindOneArgs): Promise<any> {
      return this.findUnique(args);
    },

    async count(args: DbCountArgs = {}) {
      const { where } = args;
      let q = supabase.from(table).select("*", { count: "exact", head: true });
      if (where) q = applyWhere(q as unknown as ReturnType<typeof supabase.from>, where as Record<string, unknown>) as typeof q;
      const { count, error } = await q;
      if (error) throw new Error(`DB count ${table}: ${error.message}`);
      return count ?? 0;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async create(args: DbCreateArgs): Promise<any> {
      const { data, select } = args;
      const { data: result, error } = await supabase
        .from(table)
        .insert(data)
        .select(buildSelect(select as SelectSpec))
        .single();
      if (error) throw new Error(`DB create ${table}: ${error.message} (hint: ${error.hint})`);
      return result;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async update(args: DbUpdateArgs): Promise<any> {
      const { where, data, select } = args;
      let q = supabase.from(table).update(data).select(buildSelect(select as SelectSpec));
      q = applyWhere(q as unknown as ReturnType<typeof supabase.from>, where as Record<string, unknown>) as typeof q;
      const { data: result, error } = await q.single();
      if (error) throw new Error(`DB update ${table}: ${error.message}`);
      return result;
    },

    async updateMany(args: { where?: Record<string, unknown>; data: Record<string, unknown> }) {
      const { where, data } = args;
      let q = supabase.from(table).update(data);
      if (where) q = applyWhere(q as unknown as ReturnType<typeof supabase.from>, where as Record<string, unknown>) as typeof q;
      const { error } = await q;
      if (error) throw new Error(`DB updateMany ${table}: ${error.message}`);
      return { count: 0 };
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async upsert(args: DbUpsertArgs): Promise<any> {
      const { where, create, update, select } = args;
      // Try update first, then create
      const existing = await this.findFirst({ where });
      if (existing) {
        return this.update({ where, data: update, select });
      } else {
        return this.create({ data: create, select });
      }
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async delete(args: DbDeleteArgs): Promise<any> {
      const { where } = args;
      let q = supabase.from(table).delete().select("*");
      q = applyWhere(q as unknown as ReturnType<typeof supabase.from>, where as Record<string, unknown>) as typeof q;
      const { data, error } = await q;
      if (error) throw new Error(`DB delete ${table}: ${error.message}`);
      return data?.[0] ?? null;
    },

    async createMany(args: { data: Record<string, unknown>[] }): Promise<{ count: number }> {
      const { data: result, error } = await supabase.from(table).insert(args.data).select("id");
      if (error) throw new Error(`DB createMany ${table}: ${error.message}`);
      return { count: result?.length ?? 0 };
    },

    async deleteMany(args: DbDeleteManyArgs = {}) {
      const { where } = args;
      let q = supabase.from(table).delete();
      if (where) q = applyWhere(q as unknown as ReturnType<typeof supabase.from>, where as Record<string, unknown>) as typeof q;
      else q = q.neq("id", ""); // delete all
      const { error } = await q;
      if (error) throw new Error(`DB deleteMany ${table}: ${error.message}`);
      return { count: 0 };
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async groupBy(args: { by: string[]; where?: Record<string, unknown> }): Promise<any[]> {
      // Supabase doesn't have a direct groupBy; fetch and group in JS
      const items = await this.findMany({ where: args.where });
      const grouped = new Map<string, typeof items[0][]>();
      for (const item of items) {
        const key = args.by.map(f => (item as Record<string, unknown>)[f]).join("|");
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key)!.push(item);
      }
      return Array.from(grouped.values()).map(group => group[0]);
    },
  };
}

// Export a prisma-compatible object
export const db = {
  user: makeTable("User"),
  account: makeTable("Account"),
  session: makeTable("Session"),
  verificationToken: makeTable("VerificationToken"),
  course: makeTable("Course"),
  lesson: makeTable("Lesson"),
  technique: makeTable("Technique"),
  review: makeTable("Review"),
  gamePlan: makeTable("GamePlan"),
  chatSession: makeTable("ChatSession"),
  chatMessage: makeTable("ChatMessage"),
  competition: makeTable("Competition"),
  journalEntry: makeTable("JournalEntry"),
  purchase: makeTable("Purchase"),
  beltPromotion: makeTable("BeltPromotion"),
  affiliateApplication: makeTable("AffiliateApplication"),
  creatorProfile: makeTable("CreatorProfile"),
  learningPath: makeTable("LearningPath"),
  learningPathEnrollment: makeTable("LearningPathEnrollment"),
  blogPost: makeTable("BlogPost"),
  blogQueue: makeTable("BlogQueue"),
  techniqueBookmark: makeTable("TechniqueBookmark"),
  lessonProgress: makeTable("LessonProgress"),
  passwordResetToken: makeTable("PasswordResetToken"),
  trainingLog: makeTable("TrainingLog"),
  // Alias for Purchase used in some places
  get purchases() { return makeTable("Purchase"); },
};

export default db;
