import { Injectable } from '@angular/core';
import { User } from '@app/core/models/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosDefaultService {

  defaultUsers: User[]= [{
    id: 1,
    name: 'Johan',
    company:'NIvelics',
    country: 'Colombia',
    city:'Bogota',
    hobby:'Modelado 3D',
    gender: 'M',
    date: new  Date("1999-04-07")
  },
  {
    id: 2,
    name: 'Yair',
    company:'independiente',
    country: 'Colombia',
    city:'Bogota',
    hobby:'Ver anime',
    gender: 'M',
    date: new  Date("1994-11-19")
  },
  {
    id: 3,
    name: 'Niksuro senpai',
    company:'Nivelics',
    country: 'Colombia',
    city:'Bogota',
    hobby:'Strimear',
    gender: 'M',
    date: new  Date("1997-05-05")
  },
  {
    id: 4,
    name: 'Laura',
    company:'Babaria',
    country: 'Colombia',
    city:'Pereira',
    hobby:'escuchar coreanos',
    gender: 'F',
    date: new  Date("1998-06-30")
  },
]

  getDefault(){
    return this.defaultUsers;
  }

  constructor() { }
}
