import { Component, ViewChild } from '@angular/core';
import { IonicApp, Platform, NavController, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsNoticiasComponent } from '../pages/noticias/tabs/tabs.noticias.component';
import { GradeComponent } from '../pages/grade/grade.component';
import { AgendaComponent } from '../pages/agenda/agenda.component';
import { EventoAgendaComponent } from '../pages/agenda/evento.agenda.component';


@Component({
    templateUrl:"app.component.html"  
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    
    rootPage = TabsNoticiasComponent;
    private pages = [
        {"nome":"Notícias", "icon":"calendar", "view":TabsNoticiasComponent},
        {"nome":"Grade de Horário", "icon":"calendar", "view":GradeComponent},
        {"nome":"Agenda", "icon":"calendar", "view":AgendaComponent},
        {"nome":"Notificações", "icon":"calendar", "view":null},
        {"nome":"Boletim", "icon":"calendar", "view":null},
        {"nome":"Monitor de Pontos", "icon":"calendar", "view":null},
        {"nome":"Configuração", "icon":"calendar", "view":null},
        {"nome":"Sair", "icon":"calendar", "view":null}
    ];

    constructor(platform:Platform, menu:MenuController) {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          StatusBar.styleDefault();
        });
    }
    
    mudaMenu(page){
        this.nav.setRoot(page.view);
    }
}
