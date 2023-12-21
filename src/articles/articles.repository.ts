import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { GetArticlesFilterDto } from './dto/get-articles-filter.dto';
import { Categories } from 'src/common/types/Categories.enum';

@Injectable()
export class ArticlesRepository {
  private readonly logger = new Logger(ArticlesRepository.name, {
    timestamp: true,
  });

  constructor(private databaseService: DatabaseService) {}

  async getArticles(filterDto: GetArticlesFilterDto) {
    const { category = Categories.ALL } = filterDto;
    let whereClause = '';
    const values = [];
    if (category !== Categories.ALL) {
      whereClause = ` WHERE category = $1`;
      values.push(category === Categories.NOUNS ? 0 : 1);
    }
    const queryText = `SELECT id, name FROM articles${whereClause};`;
    try {
      const articles = await this.databaseService.executeQuery(
        queryText,
        values,
      );
      return articles;
    } catch (error) {
      this.logger.error(
        `Failed to get articles. Filters: ${JSON.stringify(filterDto)}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }
}
