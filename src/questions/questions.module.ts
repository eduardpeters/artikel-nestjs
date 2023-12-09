import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { QuestionsRepository } from './questions.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService, QuestionsRepository],
  imports: [DatabaseModule],
})
export class QuestionsModule {}
