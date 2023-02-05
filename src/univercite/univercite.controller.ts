import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UniverciteService } from './univercite.service';
import { CreateUniverciteDto } from './dto/create-univercite.dto';
import { UpdateUniverciteDto } from './dto/update-univercite.dto';

@Controller('univercite')
export class UniverciteController {
  constructor(private readonly univerciteService: UniverciteService) {}

  @Post()
  create(@Body() createUniverciteDto: CreateUniverciteDto) {
    return this.univerciteService.create(createUniverciteDto);
  }

  @Get()
  findAll() {
    return this.univerciteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.univerciteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUniverciteDto: UpdateUniverciteDto,
  ) {
    return this.univerciteService.update(+id, updateUniverciteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.univerciteService.remove(+id);
  }
}
