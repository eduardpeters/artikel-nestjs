import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GetQuestionsFilterDto } from './dto/get-questions-filter.dto';
import { Categories } from 'src/common/types/Categories.enum';

@Injectable()
export class QuestionsService {
  constructor(private databaseService: DatabaseService) {}

  async getQuestions(filterDto: GetQuestionsFilterDto) {
    const { category = Categories.ALL, amount = 10 } = filterDto;
    let whereClause = '';
    const values = [amount];
    if (category !== Categories.ALL) {
      whereClause = ` WHERE a.category = $2`;
      values.push(category === Categories.NOUNS ? 0 : 1);
    }
    const queryText = `SELECT q.text, a.name AS article, ARRAY(SELECT articles.name FROM articles) AS choices FROM questions q JOIN articles a ON q.article = a.id${whereClause} LIMIT $1;`;
    return await this.databaseService.executeQuery(queryText, values);
  }

  async getNextQuestion() {
    const queryText =
      'SELECT id, text, ARRAY(SELECT name FROM articles) as choices FROM questions;';
    return await this.databaseService.executeQuery(queryText);
  }
}
