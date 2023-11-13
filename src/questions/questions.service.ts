import { Injectable } from '@nestjs/common';
import { Articles } from 'src/common/types/Articles.enum';

@Injectable()
export class QuestionsService {
  questions = [
    {
      text: 'Auto',
      article: Articles.DAS,
      choices: [Articles.DER, Articles.DIE, Articles.DAS],
    },
    {
      text: 'Lampe',
      article: Articles.DIE,
      choices: [Articles.DER, Articles.DIE, Articles.DAS],
    },
    {
      text: 'Regen',
      article: Articles.DER,
      choices: [Articles.DER, Articles.DIE, Articles.DAS],
    },
  ];
  getQuestions() {
    return this.questions;
  }
}
