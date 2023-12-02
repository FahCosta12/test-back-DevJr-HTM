/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientService {
constructor(private prismaService: PrismaService) {}
    async create(client: Client): Promise<Client> {
    return await this.prismaService.client.create({data:client})
    }

    async findAll(): Promise<Client[]> {
    return await this.prismaService.client.findMany({
        where: {deletedAt: {not: null,}}
        });
    }

    async findById(id: number): Promise<Client> {
    return await this.prismaService.client.findUnique({where: {id}});
    }

    async update(id: number, client: Client): Promise<void> {
        await this.prismaService.user.update({
            where: {id}, 
            data: client,
            })
        return 
    }

    async delete(id: number): Promise<void> {
        await this.prismaService.client.update({
            where: {id},
            data: {
                deletedAt: new Date()
            }
        })
    }
}
