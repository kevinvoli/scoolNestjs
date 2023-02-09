import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUniverciteDto } from 'src/univercite/dto/create-univercite.dto';
import { UpdateUniverciteDto } from 'src/univercite/dto/update-univercite.dto';
import { Univercite } from 'src/univercite/entities/univercite.entity';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Univercite) private univercite: Repository<Univercite>,
  ) {}
  create(user: User): Promise<User> {
    const newUser = this.userRepository.create({ ...user });
    return this.userRepository.save(newUser);
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
