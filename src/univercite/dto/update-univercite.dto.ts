import { PartialType } from '@nestjs/mapped-types';
import { CreateUniverciteDto } from './create-univercite.dto';

export class UpdateUniverciteDto extends PartialType(CreateUniverciteDto) {}
