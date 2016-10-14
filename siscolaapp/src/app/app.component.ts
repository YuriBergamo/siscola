import { Component, ViewChild } from '@angular/core';
import { IonicApp, Platform, MenuController, Nav } from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import { TabsNoticiasComponent } from '../pages/noticias/tabs/tabs.noticias.component';
import { GradeComponent } from '../pages/grade/grade.component';
import { AgendaComponent } from '../pages/agenda/agenda.component';
import { EventoAgendaComponent } from '../pages/agenda/evento.agenda.component';
import {AlunoService} from "../services/aluno.service";
import {Aluno} from "../models/aluno";
import {LoginComponent} from "../pages/login/login.component";
import {TutorialComponent} from "../pages/tutorial/tutorial.component";


@Component({
    templateUrl:"app.component.html"
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage = TutorialComponent;
    private menusPrincipais = [
        {"nome":"Notícias", "icon":"paper", "view":TabsNoticiasComponent, "disable":false},
        {"nome":"Grade de Horário", "icon":"time", "view":GradeComponent, "disable":false},
        {"nome":"Agenda", "icon":"calendar", "view":AgendaComponent, "disable":false},
        {"nome":"Notificações", "icon":"alarm", "view":null, "disable":true},
        {"nome":"Boletim", "icon":"bookmarks", "view":null, "disable":true},
        {"nome":"Monitor de Pontos", "icon":"clipboard", "view":null, "disable":true}
    ];

    private menusExtras = [
      {"nome":"Configuração", "icon":"settings", "view":null, "disable":false},
      {"nome":"Tutorial", "icon":"book", "view":TutorialComponent, "disable":false},
      {"nome":"Sair", "icon":"exit", "view":LoginComponent, "disable":false}
    ];



    constructor(platform:Platform, public menuCtrl:MenuController, private alunoService:AlunoService) {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          StatusBar.styleDefault();
          this.alunoService.buscarAluno(1).subscribe(
            (alunoWS) => this.alunoService.alunoLogado = new Aluno(alunoWS),
            (error) => console.log("Erro aluno")
          );

          /*NativeStorage.getItem('siscola')
            .then(
              data => {
                  if(data.tutorial){
                    rootPage = LoginComponent;
                  }else if(data.login){
                    rootPage = TabsNoticiasComponent;
                  }else{
                    rootPage = TutorialComponent;
                  }
              },
              error => console.error(error)
            );*/
        });
    }

    mudaMenu(page){
        this.menuCtrl.close();
        this.nav.setRoot(page.view);
    }


}
