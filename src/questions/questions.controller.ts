import { Controller, Get } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  getQuestions() {
    return this.questionsService.getQuestions();
  }
}
