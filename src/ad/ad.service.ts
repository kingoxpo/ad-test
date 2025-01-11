import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

export interface AdRequestParams {
  unit: string;
  uid: string;
  pf: string;
  lcl: string;
}

@Injectable()
export class AdService {
  private readonly baseURL: string;
  private readonly appKey: string;

  constructor(private configService: ConfigService) {
    this.baseURL = 'https://api-v2.adrop.io';
    this.appKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjAxSEQ1UTNaOEdYTk5XRjQ2NENOV0NNQlM0OjAxSEZCTU1HRkZXUU5OMk5aVkpCNU5GUFZaIiwia2V5VHlwZSI6MSwiaWF0IjoxNzAwMTI0MDQ5LCJleHAiOjI1MzQwMjEyODAwMH0.J877rLr4xvUWqcEzsesEp_KNzO8XnHaJeESPXdABubQ';
  }

  async getTestAd(params: AdRequestParams) {
    try {
      const response = await axios.get('/request', {
        baseURL: this.baseURL,
        headers: {
          Authorization: this.appKey,
        },
        params: {
          unit: params.unit,
          uid: params.uid,
          pf: params.pf,
          lcl: params.lcl,
        },
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new HttpException(
          error.response?.data || 'Ad request failed',
          error.response?.status || 500,
        );
      }
      throw new HttpException('Internal server error', 500);
    }
  }
}
