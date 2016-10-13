import {Component, OnInit} from '@angular/core'
import {AlunoService} from "../../services/aluno.service";
import {NavController} from "ionic-angular";
import {EventoAgendaComponent} from "./evento.agenda.component";

@Component({
    selector:"agenda",
    templateUrl:"agenda.component.html"
})

export class AgendaComponent implements OnInit{

    public dataSelecionada = new Date().toISOString("DD-MM-YYYY");
    public listaAgendamentosPorData = [];
    public listaAgendamentosGeral = [];

    ngOnInit(){
      this.getAgendamentos();
    }
    constructor(private alunoService:AlunoService, private navController:NavController){

    }

    public getAgendamentos(){
        this.alunoService.buscarAgendamentos(1).subscribe(
            (agendamentos) =>{
                  console.log(agendamentos);
                  for(let i=0; i<agendamentos.length; i++){
                    let agendamentoAtual = agendamentos[i];
                    let agenda ={
                      "dataAgenda": agendamentoAtual.dataInicioAgenda,
                      "agenda":agendamentoAtual
                    };

                    let dataSelecionadaFormatada = new Date(this.dataSelecionada).toLocaleDateString();
                    let dataAgendamentoFormatada = new Date(agenda.dataAgenda).toLocaleDateString();

                    console.log("Comparacao 1",dataSelecionadaFormatada);
                    console.log("Comparacao 2",dataAgendamentoFormatada);
                    console.log("Comparacao",dataSelecionadaFormatada === dataAgendamentoFormatada);

                    if(dataSelecionadaFormatada === dataAgendamentoFormatada){
                      this.listaAgendamentosPorData.push(agenda);
                    }
                    this.listaAgendamentosGeral.push(agenda);
                  }
            }
        )
    }

    public atualizarAgendamentos(){
      this.listaAgendamentosPorData = [];
      for(let i=0; i<this.listaAgendamentosGeral.length; i++){
        let agendamentoAtual = this.listaAgendamentosGeral[i];
        let dataSelecionadaFormatada = new Date(this.dataSelecionada).toLocaleDateString();
        let dataAgendamentoFormatada = new Date(agendamentoAtual.dataAgenda).toLocaleDateString();

        console.log("Comparacao 1",dataSelecionadaFormatada);
        console.log("Comparacao 2",dataAgendamentoFormatada);
        console.log("Comparacao",dataSelecionadaFormatada === dataAgendamentoFormatada);

        if(dataSelecionadaFormatada === dataAgendamentoFormatada){
          this.listaAgendamentosPorData.push(agendamentoAtual);
        }
      }
    }

    public exibirTodos(){
      this.listaAgendamentosPorData = this.listaAgendamentosGeral;
    }


    public addAgendamento(){
        this.navController.push(EventoAgendaComponent);
    }

    addDia(){

        this.dataSelecionada = new Date(this.dataSelecionada);
        this.dataSelecionada.setDate(this.dataSelecionada.getDate() + 1);
        this.dataSelecionada = new Date().toISOString("DD-MM-YYYY");

    }

    removeDia(){
        this.dataSelecionada = new Date(this.dataSelecionada);
        this.dataSelecionada.setDate(this.dataSelecionada.getDate() -1);
        this.dataSelecionada = new Date().toISOString("DD-MM-YYYY");
    }
}
