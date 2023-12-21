import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  getArticles() {
    return 'hello world';
  }
}
