import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsNoticiasComponent } from '../pages/noticias/tabs/tabs.noticias.component';
import { NovasNoticiasComponent } from '../pages/noticias/tabs/novas.noticias.component';
import { GradeComponent } from '../pages/grade/grade.component';
import { AgendaComponent } from '../pages/agenda/agenda.component';

@NgModule({
  declarations: [
    MyApp,
    TabsNoticiasComponent,
    NovasNoticiasComponent,
    GradeComponent,
    AgendaComponent
      
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsNoticiasComponent,
    NovasNoticiasComponent,
    GradeComponent,
    AgendaComponent
  ],
  providers: [
   
  ]
})
export class AppModule {}
