import { Injectable } from '@nestjs/common';
import { Articles } from 'src/common/types/Articles.enum';
import { GetQuestionsFilterDto } from './dto/get-questions-filter.dto';
import { Categories } from 'src/common/types/Categories.enum';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class QuestionsService {
  constructor(private databaseService: DatabaseService) {}

  questions = [
    {
      text: 'Auto',
      article: Articles.DAS,
      choices: [Articles.DER, Articles.DIE, Articles.DAS],
      category: Categories.NOUNS,
    },
    {
      text: 'Lampe',
      article: Articles.DIE,
      choices: [Articles.DER, Articles.DIE, Articles.DAS],
      category: Categories.NOUNS,
    },
    {
      text: 'Regen',
      article: Articles.DER,
      choices: [Articles.DER, Articles.DIE, Articles.DAS],
      category: Categories.NOUNS,
    },
  ];
  async getQuestions(filterDto: GetQuestionsFilterDto) {
    const { category = 'ALL', amount = 10 } = filterDto;
    const queryText = 'SELECT * FROM questions';
    return await this.databaseService.executeQuery(queryText);
  }
}
