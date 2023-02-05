import { Test, TestingModule } from '@nestjs/testing';
import { UniverciteService } from './univercite.service';

describe('UniverciteService', () => {
  let service: UniverciteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniverciteService],
    }).compile();

    service = module.get<UniverciteService>(UniverciteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
