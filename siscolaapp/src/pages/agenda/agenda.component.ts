import {Component, OnInit} from '@angular/core'
import {AlunoService} from "../../services/aluno.service";

@Component({
    selector:"agenda",
    templateUrl:"agenda.component.html"
})

export class AgendaComponent implements OnInit{

    public dataSelecionada = new Date().toISOString("DD-MM-YYYY")

    ngOnInit(){

    }
    constructor(private alunoService:AlunoService){

    }

    public getAgendamentos(){

    }
}
