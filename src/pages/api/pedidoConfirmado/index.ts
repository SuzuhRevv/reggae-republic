import { NextResponse } from 'next/server';
import { PrismaClient, PedidoConfirmado } from '@prisma/client';

const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    throw new Error("Database Connection Unsuccessful");
  }
}

export async function createPedidoConfirmado(

  produto: string,
  setor: string,
  valor: number,
  quantidade: number,
  formaPagamento: string,
  numeroCartao: string,
  nome: string,
  numeroParcelas: number,

): Promise<PedidoConfirmado> {
  return prisma.pedidoConfirmado.create({
    data: {
      produto,
      setor,
      valor,
      quantidade,
      formaPagamento,
      numeroCartao,
      nome,
      numeroParcelas, 
    },
  });
}

export async function POST(req: Request, res: NextResponse) {
  try {
    const { produto, setor, valor, quantidade, formaPagamento, numeroCartao, nome, numeroParcelas } = await req.json(); //O nome deve vir do usuário autenticado
    await main();

    const pedidoConfirmado = await createPedidoConfirmado(produto, setor, valor, quantidade, formaPagamento, numeroCartao, nome, numeroParcelas);

    return NextResponse.json({ message: "Success", pedidoConfirmado }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
