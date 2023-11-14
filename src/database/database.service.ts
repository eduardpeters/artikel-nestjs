import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  //Query hint: SELECT q.text, a.name, ARRAY(SELECT articles.name FROM articles) FROM questions q JOIN articles a ON q.article = a.id;
}
