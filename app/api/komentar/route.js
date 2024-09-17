import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const komentar = await prisma.komentar.findMany();
  return NextResponse.json(komentar , {
    status: 200,
    headers: {
      'Cache-Control': 'no-store'
    }
  });
}

export async function POST(request) {
  const { name, message } = await request.json();
  
  if (!name || !message) {
    return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
  }

  const newKomentar = await prisma.komentar.create({
    data: {
      name,
      message,
    },
  });

  return NextResponse.json(newKomentar, {
    status: 201,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}