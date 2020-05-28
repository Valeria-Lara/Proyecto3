import { Component, OnInit } from '@angular/core';
import {Espacios} from './espacios';

@Component({
  selector: 'app-espacios',
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent implements OnInit {

  espacios : any = [

    new Espacios  (1, 'boda', '08/01/21', '7:30 am', 'fecha limite: 01/03/21')
    
    
    
      ];

  constructor() { }

  ngOnInit(): void {
  }

}
