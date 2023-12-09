import { Injectable } from '@nestjs/common';
import { GetQuestionsFilterDto } from './dto/get-questions-filter.dto';
import { QuestionsRepository } from './questions.repository';

@Injectable()
export class QuestionsService {
  constructor(private questionsRepository: QuestionsRepository) {}

  async getQuestions(filterDto: GetQuestionsFilterDto) {
    return this.questionsRepository.getQuestions(filterDto);
  }

  async getNextQuestion() {
    return [];
  }
}
