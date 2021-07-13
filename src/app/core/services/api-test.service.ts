import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// pipe map
import { map } from 'rxjs/operators';
import { ResultadoAPI } from '../models/resultapi.model';

@Injectable({
  providedIn: 'root',
})
export class ApiTestService {
  constructor(private http: HttpClient) {}

  getResult() {
    return this.http
      .get(`${environment.api_url}`)
      .pipe(map((respuesta: any) => respuesta as ResultadoAPI));
  }


}
