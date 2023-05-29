import prisma from "~/server/database/client";
import { isString } from "@vueuse/core";
import { Role } from "@prisma/client";
import { H3Event } from "h3";

export async function getUser(query: { id?: number; email?: string }) {
  return await prisma.user.findUnique({ where: query });
}

export async function getUserByAccessToken(accessToken: string) {
  const user = await prisma.user.findUnique({
    where: {
      accessToken,
    },
  });
  if (!user) return null;
  return user;
}

export async function adminCheck(event: H3Event): Promise<boolean> {
  const accessToken = getCookie(event, "authToken");
  const hasAccessToken = isString(accessToken);
  if (!hasAccessToken) return false;
  const user = await getUserByAccessToken(accessToken);
  if (!user) return false;
  return user.role === Role.ADMIN;
}