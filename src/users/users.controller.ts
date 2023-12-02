/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { User } from "./interfaces/user.interface";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: User) {
    await this.usersService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get()
  async findById(@Param("id") id: number): Promise<User> {
    return await this.usersService.findById(id);
  }

  @Put(":id")
  async update(@Param("id") id: number, @Body() user: User) {
    await this.usersService.update(id, user);
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    await this.usersService.delete(id);
  }
}
