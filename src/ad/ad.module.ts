import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdController } from './ad.controller';
import { AdService } from './ad.service';

@Module({
  imports: [ConfigModule],
  controllers: [AdController],
  providers: [AdService],
})
export class AdModule {}
