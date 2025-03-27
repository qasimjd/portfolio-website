"use server";

import prisma from "@/lib/prisma";

export async function getProjects() {
  try {
    return await prisma.project.findMany();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
