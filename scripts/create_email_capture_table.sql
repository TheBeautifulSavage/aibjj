create table if not exists "EmailCapture" (
  "id" text primary key default gen_random_uuid()::text,
  "email" text not null unique,
  "source" text not null default 'site',
  "intent" text not null default 'free-training',
  "createdAt" timestamptz not null default now(),
  "updatedAt" timestamptz not null default now()
);

create index if not exists "EmailCapture_source_idx" on "EmailCapture" ("source");
create index if not exists "EmailCapture_createdAt_idx" on "EmailCapture" ("createdAt");

create table if not exists email_captures (
  email text primary key,
  source text not null default 'site',
  intent text not null default 'free-training',
  captured_at timestamptz not null default now()
);
