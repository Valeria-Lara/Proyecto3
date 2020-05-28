import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { EventoComponent } from './evento/evento.component';
import { InvitadosComponent } from './invitados/invitados.component';
import { EspaciosComponent } from './espacios/espacios.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    EventoComponent,
    InvitadosComponent,
    EspaciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
