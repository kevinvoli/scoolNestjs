import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Univercite } from 'src/univercite/entities/univercite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Univercite])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
