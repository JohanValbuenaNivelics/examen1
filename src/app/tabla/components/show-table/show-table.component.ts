import { Component, OnInit } from '@angular/core';
import { UsuariosDefaultService } from '@core/services/usuariosDefault/usuarios-default.service';
import { FuenteDeUsuariosService } from '@app/core/services/fuenteDeUsuarios/fuente-de-usuarios.service';
import { Observable } from 'rxjs';
import { User } from '@app/core/models/users.model';
@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss']
})
export class ShowTableComponent implements OnInit {

  lista!: User[];

  displayedColumns: string[] = ['name', 'company', 'country', 'city','hobby','gender','Date'];

  constructor(
    private usuariosDefault: UsuariosDefaultService,
    private fuenteUsers: FuenteDeUsuariosService

  ) {

  this.fuenteUsers.lista$.subscribe((lista)=> {
    this.lista = lista;
  })

   }

   llenarDefault(){
     const defaultarray :User[] = this.usuariosDefault.getDefault()
     defaultarray.forEach(usuario => {
       this.fuenteUsers.addLista(usuario);
     });
   }

  ngOnInit(): void {

  }

}
