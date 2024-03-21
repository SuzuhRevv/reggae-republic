import { NextApiRequest, NextApiResponse } from "next";
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { PrismaClient } from "@prisma/client";

const registerUserSchema = z.object({
    email: z.string().email('Email inválido'),
    name: z.string().min(3, 'Nome inválido'),
    password: z.string().min(5, 'A senha deve conter no mínimo 5 caracteres'),
});

const prisma = new PrismaClient();

export default async function RegisterUser(
    req: NextApiRequest, res: NextApiResponse
) {
    const { email, name, password } = registerUserSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        return res.status(400).json({ user: null, message: 'O usuário já existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    });

    return res.status(200).json({ user: newUser, message: 'Usuário criado com sucesso' });
}
