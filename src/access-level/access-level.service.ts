/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { AccessLevel } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccessLevelService {
constructor(private prismaService: PrismaService) {}
    async create(accessLevel: AccessLevel): Promise<AccessLevel> {
        return await this.prismaService.accessLevel.create({data: accessLevel})
    }

    async findAll(): Promise<AccessLevel[]> {
    return await this.prismaService.accessLevel.findMany({
        where: {deletedAt: {not: null,}}
        });
    }

    async findById(id: number): Promise<AccessLevel> {
        return await this.prismaService.accessLevel.findUnique({where: {id}});
    }

    async update(id: number, accessLevel: AccessLevel): Promise<void> {
        await this.prismaService.user.update({
        where: {id}, 
        data: accessLevel,
    });
        return 
    }

    async delete(id: number): Promise<void> {
    await this.prismaService.accessLevel.update({
        where: {id},
        data: {
            deletedAt: new Date()
        }
        })
    
    } 
}
