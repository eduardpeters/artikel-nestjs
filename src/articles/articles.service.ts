import { Injectable } from '@nestjs/common';
import { GetArticlesFilterDto } from './dto/get-articles-filter.dto';

@Injectable()
export class ArticlesService {
  getArticles(filterDto: GetArticlesFilterDto) {
    console.log(filterDto);
    return 'hello world';
  }
}
