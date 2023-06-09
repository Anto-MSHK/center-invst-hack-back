import { Module } from '@nestjs/common';
import { UsersService } from './UsersService';
import { UsersController } from './UsersController';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtService],
  exports: [UsersService],
  imports: [SequelizeModule.forFeature([User])],
})
export class UsersModule {}
