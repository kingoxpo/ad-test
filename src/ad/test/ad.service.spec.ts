import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { AdService } from '../ad.service';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AdService', () => {
  let service: AdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AdService>(AdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getTestAd', () => {
    const testParams = {
      unit: 'PUBLIC_TEST_UNIT_ID_375_80',
      uid: 'test-user-123',
      pf: 'android',
      lcl: 'ko-KR',
    };

    const mockResponse = {
      data: {
        ad: {
          id: 'test-ad-123',
          type: 'banner',
          content: 'Test Ad Content',
        },
      },
    };

    it('should successfully fetch test ad', async () => {
      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await service.getTestAd(testParams);

      expect(result).toEqual(mockResponse.data);
      expect(mockedAxios.get).toHaveBeenCalledWith('/request', {
        baseURL: 'https://api-v2.adrop.io',
        headers: {
          Authorization: expect.any(String),
        },
        params: testParams,
      });
    });

    it('should handle API errors properly', async () => {
      const errorResponse = {
        response: {
          status: 400,
          data: 'Invalid parameters',
        },
      };

      mockedAxios.get.mockRejectedValueOnce(errorResponse);

      await expect(service.getTestAd(testParams)).rejects.toThrow();
    });
  });
});
