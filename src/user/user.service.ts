import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUniverciteDto } from 'src/univercite/dto/create-univercite.dto';
import { UpdateUniverciteDto } from 'src/univercite/dto/update-univercite.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} univercite`;
  }

  update(id: number, updateUniverciteDto: UpdateUniverciteDto) {
    return `This action updates a #${id} univercite`;
  }

  remove(id: number) {
    return `This action removes a #${id} univercite`;
  }
}
