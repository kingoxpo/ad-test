import { Test, TestingModule } from '@nestjs/testing';
import { AdController } from '../ad.controller';
import { AdService } from '../ad.service';

describe('AdController', () => {
  let controller: AdController;
  let service: AdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdController],
      providers: [
        {
          provide: AdService,
          useValue: {
            getTestAd: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AdController>(AdController);
    service = module.get<AdService>(AdService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getTestAd', () => {
    const testParams = {
      unit: 'PUBLIC_TEST_UNIT_ID_375_80',
      uid: 'test-user-123',
      pf: 'android',
      lcl: 'ko-KR',
    };

    it('should call service.getTestAd with correct parameters', async () => {
      await controller.getTestAd(testParams);
      expect(service.getTestAd).toHaveBeenCalledWith(testParams);
    });
  });
});
