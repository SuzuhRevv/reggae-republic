import { NextApiResponse } from 'next';
import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: NextApiResponse) {
  const router = useRouter();
  const { id } = router.query;

  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await prisma.pedidoRecebido.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({ message: 'Success' });
  } catch (err) {
    return res.status(500).json({ message: 'Error', error: err });
  } finally {
    await prisma.$disconnect();
  }
}
