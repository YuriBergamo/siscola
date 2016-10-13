import {Component, OnInit} from '@angular/core';
import {NavController} from "ionic-angular";
import {Agenda} from "../../models/agenda";
import {AlunoService} from "../../services/aluno.service";


@Component({
    selector:"evento-agenda",
    templateUrl:"evento.agenda.component.html"
})

export class EventoAgendaComponent implements OnInit{

    private agendaAtual:Agenda;

    ngOnInit(){
      this.agendaAtual = new Agenda();
      this.agendaAtual.dataInicioAgenda = new Date().toISOString("DD-MM-YYYY");
      this.agendaAtual.dataFinalAgenda = new Date().toISOString("DD-MM-YYYY");
    }

    constructor(private navController:NavController, private alunoService:AlunoService){

    }


    public salvar(){
        if(this.alunoService.alunoLogado != null){
            this.agendaAtual.aluno = this.alunoService.alunoLogado;
            console.log(this.agendaAtual);

            this.alunoService.gravarAgendamento(this.agendaAtual).subscribe(
              (sucess) => {

                  this.navController.pop();
              },
              (erro) => console.log("ERRO GRAVAR AGENDA")
            );
        }

    }



}
