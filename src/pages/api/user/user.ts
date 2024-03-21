import { NextResponse } from 'next/server';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    throw new Error("Database Connection Unsuccessful");
  }
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  return prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
}

export async function GET(req: Request, res: NextResponse) {
  try {
    await main();
    const users = await prisma.user.findMany();
    return NextResponse.json({ message: "Success", users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
