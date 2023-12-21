import { Injectable } from '@nestjs/common';
import { GetArticlesFilterDto } from './dto/get-articles-filter.dto';
import { ArticlesRepository } from './articles.repository';

@Injectable()
export class ArticlesService {
  constructor(private articlesRepository: ArticlesRepository) {}

  async getArticles(filterDto: GetArticlesFilterDto) {
    return await this.articlesRepository.getArticles(filterDto);
  }
}
