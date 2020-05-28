import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import {AgendaComponent} from './agenda/agenda.component';
import {EventoComponent} from './evento/evento.component';
import {InvitadosComponent} from './invitados/invitados.component';
import {EspaciosComponent} from './espacios/espacios.component';


const routes: Routes = [ 
  { path: 'agenda', component: AgendaComponent },
  { path: 'evento', component: EventoComponent },
  { path: 'invitados', component: InvitadosComponent },
  { path: 'espacios', component: EspaciosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
