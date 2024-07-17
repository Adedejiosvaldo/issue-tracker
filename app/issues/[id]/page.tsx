import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: { id: string };
}

const IsueDetails = async ({ params }: Props) => {
  if (typeof params.id !== "string") notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) {
    notFound();
  }
  return (
    <div>
      <h1>{issue.title}</h1>
      <p>{issue.description}</p>
      <p>{issue.createdAt.toLocaleDateString()}</p>
    </div>
  );
};

export default IsueDetails;
