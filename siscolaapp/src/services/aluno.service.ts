//buscar os agendamentos e grade do aluno
import {Injectable} from '@angular/core'
import { Http, Response } from '@angular/http';
import {PadraoService} from './padrao.service.ts';
import {Aluno} from "../models/aluno";
import {Agenda} from "../models/agenda";

@Injectable()
export class AlunoService extends PadraoService{

    public finalUrl ="alunos/";
    public alunoLogado:Aluno = new Aluno();

    constructor(public http:Http){
        super(http);
    }

    public buscarAluno(idAluno:number){
        let url = this.finalUrl + idAluno;
        return super.get(url);
    }

    public buscarAgendamentos(idAluno:number){
        let url = this.finalUrl  + idAluno + "/agendamentos";
        return super.get(url);
    }

    public buscarGrade(idAluno:number){
        let url = this.finalUrl + idAluno + "/grade";
        return super.get(url);
    }

    public gravarAgendamento(agenda:Agenda){
        let url= "agendamentos";
        return super.post(agenda, url);
    }
}
