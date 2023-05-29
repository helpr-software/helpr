import { Role } from "@prisma/client";

export type User = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  avatar: string;
  accessToken?: string;
  role: Role;
  createdAt: string;
  updatedAt?: string;
};
