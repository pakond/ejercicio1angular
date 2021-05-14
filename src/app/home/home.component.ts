import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../userinterface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaUsuarios: UserInterface[] = []
  detalleUsuario: UserInterface = null
  

  constructor() { }

  ngOnInit(): void {
    const user1: UserInterface = { name: 'Pau', id: 1 };
    const user2: UserInterface = { name: 'Pep', id: 2 };
    const user3: UserInterface = { name: 'Pol', id: 3 };
    this.listaUsuarios.push(user1);
    this.listaUsuarios.push(user2);
    this.listaUsuarios.push(user3);
  }

  listarUsuario(usuario: UserInterface): void {
    this.detalleUsuario = usuario
  }

}
