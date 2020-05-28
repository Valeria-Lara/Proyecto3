import { Component, OnInit } from '@angular/core';
import { Agenda } from './agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  agenda : any = [

new Agenda (1, 'Alejandra Arias', '04/05/20', '10:00 am')



  ];

  constructor() { }

  ngOnInit(): void {
  }

}
