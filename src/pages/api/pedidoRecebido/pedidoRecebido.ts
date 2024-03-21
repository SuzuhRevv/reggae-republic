import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, PedidoRecebido } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const pedidosRecebidos = await prisma.pedidoRecebido.findMany();
      res.status(200).json({ pedidosRecebidos });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving data', error });
    }
  } else if (req.method === 'POST') {
    try {
      const { quantidade, data, dataEvento, formaPagamento, parcelas, statusCompra } = req.body;

      await prisma.pedidoRecebido.create({
        data: {
          descricao: 'Descrição: Ingresso República do Reggae 2023 - 20 anos de Resistência',
          quantidade,
          data: new Date(data),
          dataEvento: new Date(dataEvento),
          formaPagamento,
          parcelas,
          statusCompra,
        },
      });

      res.status(201).json({ message: 'Success' });
    } catch (error) {
      res.status(500).json({ message: 'Error', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
