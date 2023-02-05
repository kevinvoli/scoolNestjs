import { Injectable } from '@nestjs/common';
import { CreateUniverciteDto } from './dto/create-univercite.dto';
import { UpdateUniverciteDto } from './dto/update-univercite.dto';

@Injectable()
export class UniverciteService {
  create(createUniverciteDto: CreateUniverciteDto) {
    return 'This action adds a new univercite';
  }

  findAll() {
    return `This action returns all univercite`;
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
