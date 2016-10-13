import { Component, ViewChild } from '@angular/core';
import { IonicApp, Platform, NavController, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsNoticiasComponent } from '../pages/noticias/tabs/tabs.noticias.component';
import { GradeComponent } from '../pages/grade/grade.component';
import { AgendaComponent } from '../pages/agenda/agenda.component';
import { EventoAgendaComponent } from '../pages/agenda/evento.agenda.component';
import {AlunoService} from "../services/aluno.service";
import {Aluno} from "../models/aluno";


@Component({
    templateUrl:"app.component.html"
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage = TabsNoticiasComponent;
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
      {"nome":"Sair", "icon":"exit", "view":null, "disable":false}
    ];

    private alunoLogado:Aluno = new Aluno();

    constructor(platform:Platform, menu:MenuController, private alunoService:AlunoService) {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          StatusBar.styleDefault();
          this.alunoService.buscarAluno(1).subscribe(
            (alunoWS) => this.alunoLogado = new Aluno(alunoWS),
            (error) => console.log("Erro aluno")
          )
        });
    }

    mudaMenu(page){
        this.nav.setRoot(page.view);
    }


}
