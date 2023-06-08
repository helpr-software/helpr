import { formattedUser } from "~/types/User";
import pkg, { User } from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
export default prisma;

export function formatUser(user: User): formattedUser {
  return {
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    createdAt: user.createdAt,
  };
}
