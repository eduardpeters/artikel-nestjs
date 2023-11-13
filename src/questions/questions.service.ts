import { Injectable } from '@nestjs/common';
import { Articles } from 'src/common/types/Articles.enum';
import { GetQuestionsFilterDto } from './dto/get-questions-filter.dto';
import { Categories } from 'src/common/types/Categories.enum';

@Injectable()
export class QuestionsService {
  questions = [
    {
      text: 'Auto',
      article: Articles.DAS,
      choices: [Articles.DER, Articles.DIE, Articles.DAS],
      category: Categories.NOUNS,
    },
    {
      text: 'Lampe',
      article: Articles.DIE,
      choices: [Articles.DER, Articles.DIE, Articles.DAS],
      category: Categories.NOUNS,
    },
    {
      text: 'Regen',
      article: Articles.DER,
      choices: [Articles.DER, Articles.DIE, Articles.DAS],
      category: Categories.NOUNS,
    },
  ];
  getQuestions(filterDto: GetQuestionsFilterDto) {
    const { category = 'ALL', amount = 10 } = filterDto;
    console.log(category, amount);
    return this.questions;
  }
}
