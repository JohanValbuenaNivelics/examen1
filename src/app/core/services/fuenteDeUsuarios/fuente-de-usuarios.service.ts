import { Injectable } from '@angular/core';
import { User } from '@app/core/models/users.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuenteDeUsuariosService {
  private usuarios: User[]=[];
  private lista = new BehaviorSubject<User[]>([]);
  // observable
  lista$ = this.lista.asObservable();

  constructor() { }

  addLista(newUser: User){
    this.usuarios = [...this.usuarios, newUser];
    // notifica el cambio
    this.lista.next(this.usuarios);
  }

}
