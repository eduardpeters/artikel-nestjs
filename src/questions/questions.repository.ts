import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GetQuestionsFilterDto } from './dto/get-questions-filter.dto';
import { Categories } from 'src/common/types/Categories.enum';

@Injectable()
export class QuestionsRepository {
  private readonly logger = new Logger(QuestionsRepository.name, {
    timestamp: true,
  });

  constructor(private databaseService: DatabaseService) {}

  async getQuestions(filterDto: GetQuestionsFilterDto) {
    const { category = Categories.ALL, amount = 10 } = filterDto;
    let whereClause = '';
    const values = [amount];
    if (category !== Categories.ALL) {
      whereClause = ` WHERE articles = $2`;
      values.push(category === Categories.NOUNS ? 0 : 1);
    }
    const queryText = `SELECT id, text, article FROM questions${whereClause} ORDER BY random() LIMIT $1;`;
    return await this.databaseService.executeQuery(queryText, values);
  }
}
