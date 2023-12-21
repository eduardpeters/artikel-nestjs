import { Controller, Get, Query } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { GetArticlesFilterDto } from './dto/get-articles-filter.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Get()
  getArticles(@Query() filterDto: GetArticlesFilterDto) {
    return this.articlesService.getArticles(filterDto);
  }
}
