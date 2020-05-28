import { Component, OnInit } from '@angular/core';
import { Invitados } from './invitados';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.component.html',
  styleUrls: ['./invitados.component.css']
})
export class InvitadosComponent implements OnInit {

  invitados : any = [


    new Invitados (1, 'Raul Juarez Armendariz', 'Concierto', '10:00 pm', 'Plaza', '15')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
