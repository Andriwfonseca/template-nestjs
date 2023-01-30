import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [
    SampleModule,
  ],
  providers: [],
})
export class AppModule { }
