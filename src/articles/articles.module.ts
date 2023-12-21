import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
