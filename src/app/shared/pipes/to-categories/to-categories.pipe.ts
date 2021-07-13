import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '@app/core/models/category.model';
import { ResultadoAPI } from '@app/core/models/resultapi.model';


@Pipe({
  name: 'toCategories'
})
export class ToCategoriesPipe implements PipeTransform {

  transform(resultado: ResultadoAPI):  Category[] {

    return resultado.result.categories;
  }

}
