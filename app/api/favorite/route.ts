import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const { petId } = await req.json();

  const currentUserId = await prisma.user
    .findUnique({
      where: { email: currentUserEmail },
    })
    .then((user) => user?.id!);

  const record = await prisma.favorites.create({
    data: {
      userId: currentUserId,
      petId,
    },
  });

  return NextResponse.json(record);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const petId = req.nextUrl.searchParams.get("petId");

  const currentUserId = await prisma.user
    .findUnique({
      where: { email: currentUserEmail },
    })
    .then((user) => user?.id!);

  const record = await prisma.favorites.delete({
    where: {
      userId_petId: {
        userId: currentUserId,
        petId: petId!,
      },
    },
  });
  return NextResponse.json(record);
}
