import { Controller, Get, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { GetQuestionsFilterDto } from './dto/get-questions-filter.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  getQuestions(@Query() filterDto: GetQuestionsFilterDto) {
    return this.questionsService.getQuestions(filterDto);
  }
}
