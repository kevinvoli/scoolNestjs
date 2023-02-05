import { Module } from '@nestjs/common';
import { UniverciteService } from './univercite.service';
import { UniverciteController } from './univercite.controller';

@Module({
  controllers: [UniverciteController],
  providers: [UniverciteService],
})
export class UniverciteModule {}
