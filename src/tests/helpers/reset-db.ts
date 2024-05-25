
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function clearDb() {
    //deleting all tables
  await prisma.$transaction([
    prisma.request.deleteMany(),
  ])
}