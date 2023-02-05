import { Test, TestingModule } from '@nestjs/testing';
import { UniverciteController } from './univercite.controller';
import { UniverciteService } from './univercite.service';

describe('UniverciteController', () => {
  let controller: UniverciteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniverciteController],
      providers: [UniverciteService],
    }).compile();

    controller = module.get<UniverciteController>(UniverciteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
