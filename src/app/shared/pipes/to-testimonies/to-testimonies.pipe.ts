import { Pipe, PipeTransform } from '@angular/core';
import { ResultadoAPI } from '@app/core/models/resultapi.model';
import { Testimony } from '@app/core/models/testimony.model';

@Pipe({
  name: 'toTestimonies'
})
export class ToTestimoniesPipe implements PipeTransform {

  transform(resultado: ResultadoAPI): Testimony[] {
    return resultado.result.testimony;
  }

}
