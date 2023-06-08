import { Role } from "~/types/Role";

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

export type formattedUser = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  avatar: string;
  createdAt: Date;
};
