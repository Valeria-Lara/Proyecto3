import { Component, OnInit } from '@angular/core';
import { Evento} from './evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  evento : any = [

    new Evento  (1, 'Alejandra Arias', '04/05/20', '10:00 am', 'Auditoria Nacional')
    
    
    
      ];
    

  constructor() { }

  ngOnInit(): void {
  }

}
