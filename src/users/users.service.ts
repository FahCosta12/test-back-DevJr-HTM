/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
constructor(private prismaService: PrismaService) {}
  async create(user: User): Promise<User> {
    return await this.prismaService.user.create({data:user})
  }

  async findAll(): Promise<User[]> {
    return await this.prismaService.user.findMany({
      where: {deletedAt: {not: null,}}
        });
  }

  async findById(id: number): Promise<User> {
    return await this.prismaService.user.findUnique({where: {id}});
  }

  async update(id: number, user: User): Promise<void> {
    await this.prismaService.user.update({
      where: {id}, 
      data: user,
        })
        return 
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.user.update({
      where: {id},
      data: {
        deletedAt: new Date()
      }
    })
    
  }
}
