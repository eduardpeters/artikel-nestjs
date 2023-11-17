import { Inject, Injectable, Logger } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
  //Query hint: SELECT q.text, a.name, ARRAY(SELECT articles.name FROM articles) FROM questions q JOIN articles a ON q.article = a.id;
  private readonly logger = new Logger(DatabaseService.name);

  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

  async executeQuery(queryText: string, values: any[] = []): Promise<any[]> {
    this.logger.debug(`Executing query: ${queryText} (${values})`);
    const result = await this.pool.query(queryText, values);
    this.logger.debug(`Executed query, result size: ${result.rows.length}`);
    return result.rows;
  }
}
