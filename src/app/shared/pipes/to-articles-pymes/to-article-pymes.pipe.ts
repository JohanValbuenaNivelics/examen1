import { Pipe, PipeTransform } from '@angular/core';
import { ArticlesPymesTest } from '@app/core/models/articulo-pymes-test.model';
import { ResultadoAPI } from '@app/core/models/resultapi.model';

@Pipe({
  name: 'toArticlePymes'
})
export class ToArticlePymesPipe implements PipeTransform {

  transform(resultado: ResultadoAPI): ArticlesPymesTest[] {

    return resultado.result.articles_pymes_test;
  }

}
