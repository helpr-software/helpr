export type User = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  avatar: string;
  accessToken?: string;
  role: number;
  createdAt: string;
  updatedAt?: string;
};
