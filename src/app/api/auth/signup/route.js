import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prisma";

export async function POST(req) {
    try {
        const data = await req.json();

        const userExists = await prisma.user.findUnique({ where: { email: data.email } })
        if (userExists) return NextResponse.json({ error: "User already exists" }, { status: 400 });

        const usernameExists = await prisma.user.findUnique({ where: { username: data.username } });
        if (usernameExists) return NextResponse.json({ error: "Username already exists" }, { status: 400 });

        const user = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: await bcrypt.hash(data.password, 10)
            }
        });

        delete user.password;

        return NextResponse.json({ signup: user });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}