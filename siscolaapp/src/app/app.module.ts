import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

import { TabsNoticiasComponent } from '../pages/noticias/tabs/tabs.noticias.component';
import { NovasNoticiasComponent } from '../pages/noticias/tabs/novas.noticias.component';
import { GradeComponent } from '../pages/grade/grade.component';
import { AgendaComponent } from '../pages/agenda/agenda.component';
import { EventoAgendaComponent } from '../pages/agenda/evento.agenda.component';
import { LoginComponent } from '../pages/login/login.component';

import { EscolaService } from '../services/escola.service';
import { AlunoService } from '../services/aluno.service';
import { LoginService } from '../services/login.service';

@NgModule({
  declarations: [
    MyApp,
    TabsNoticiasComponent,
    NovasNoticiasComponent,
    GradeComponent,
    AgendaComponent,
    EventoAgendaComponent,
    LoginComponent
      
  ],
  imports: [
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsNoticiasComponent,
    NovasNoticiasComponent,
    GradeComponent,
    AgendaComponent,
    EventoAgendaComponent,
    LoginComponent
  ],
  providers: [
      EscolaService,
      AlunoService,
      LoginService
  ]
})
export class AppModule {}
