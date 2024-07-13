import { NextRequest, NextResponse } from "next/server";
import IssueSchema from "../../ValidationSchemas";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validator = IssueSchema.safeParse(body);

  if (!validator.success) {
    return NextResponse.json(validator.error.errors, { status: 400 });
  }

  const issue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(issue, { status: 201 });
}
