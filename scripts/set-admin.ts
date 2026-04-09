// Run with: npx tsx scripts/set-admin.ts
import { prisma } from '../src/lib/prisma'
async function main() {
  const user = await prisma.user.update({
    where: { email: 'hulljessej@gmail.com' },
    data: { role: 'ADMIN' }
  })
  console.log('Admin set for:', user.email, '| Role:', user.role)
}
main()
  .then(() => process.exit(0))
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
