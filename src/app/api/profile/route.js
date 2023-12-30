import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/libs/prisma";

export async function GET() {
    const session = await getServerSession(authOptions);

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    return NextResponse.json(user);
}