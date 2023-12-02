/* eslint-disable prettier/prettier */
export interface User {
  id: number;
  accessLevelId: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date
}
