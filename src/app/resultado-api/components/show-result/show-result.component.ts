import { Component, OnInit } from '@angular/core';
import { ResultadoAPI } from '@app/core/models/resultapi.model';
import { ApiTestService } from '@app/core/services/api-test.service';
// import observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss'],
})
export class ShowResultComponent implements OnInit {
  resultado$: Observable<ResultadoAPI>;

  constructor(private apiTestService: ApiTestService) {
    this.resultado$ = this.apiTestService.getResult();
  }

  ngOnInit() {}
}
