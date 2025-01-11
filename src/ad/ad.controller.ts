import { Controller, Get, Query } from '@nestjs/common';
import { AdService, AdRequestParams } from './ad.service';

@Controller('ad')
export class AdController {
  constructor(private readonly adService: AdService) {}

  @Get()
  async getTestAd(@Query() params: AdRequestParams) {
    return this.adService.getTestAd(params);
  }
}
