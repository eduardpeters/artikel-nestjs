import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GetQuestionsFilterDto } from './dto/get-questions-filter.dto';

@Injectable()
export class QuestionsService {
  constructor(private databaseService: DatabaseService) {}

  async getQuestions(filterDto: GetQuestionsFilterDto) {
    const { category = 'ALL', amount = 10 } = filterDto;
    const queryText = 'SELECT * FROM questions';
    return await this.databaseService.executeQuery(queryText);
  }
}
