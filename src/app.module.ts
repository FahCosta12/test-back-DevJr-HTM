import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AccessLevelModule } from './access-level/access-level.module';
import { ClientModule } from './client/client.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, AccessLevelModule, ClientModule, PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
