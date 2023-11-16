import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports: [DatabaseModule],
})
export class QuestionsModule {}
