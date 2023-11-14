import { Categories } from 'src/common/types/Categories.enum';

export class GetQuestionsFilterDto {
  category?: Categories;
  amount?: number;
}
