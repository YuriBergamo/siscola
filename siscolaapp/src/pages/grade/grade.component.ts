import {Component, OnInit} from "@angular/core";

import { AlunoService } from '../../services/aluno.service';

@Component({
    selector:"grade",
    templateUrl:"grade.component.html"
})

export class GradeComponent implements OnInit{
    public dia;

    private listaSegunda = [];
    private listaTerca = [];
    private listaQuarta = [];
    private listaQuinta = [];
    private listaSexta = [];
    private listaSabado = [];

    ngOnInit(){
        this.alunoService.buscarGrade(1).subscribe(
          (sucess)=> this.setarListaGrade(sucess),
          (error) => console.log("ERRO GRADE", error)
        );

    }
    constructor(private alunoService:AlunoService){

    }

    public setarListaGrade(listaService){
        console.log("SETAR", listaService);
        for(let i=0; i<listaService.length; i++){
            let itemGrade = listaService[i];
            if(itemGrade.diaSemana === "A_SEG"){
                this.listaSegunda.push(itemGrade);

            }else if(itemGrade.diaSemana === "B_TER"){
                this.listaTerca.push(itemGrade);

            }else if(itemGrade.diaSemana === "C_QUA"){
                this.listaQuarta.push(itemGrade);

            }else if(itemGrade.diaSemana === "D_QUI"){
                this.listaQuinta.push(itemGrade);

            }else if(itemGrade.diaSemana === "E_SEX"){
                this.listaSexta.push(itemGrade);

            }else if(itemGrade.diaSemana === "F_SAB"){
                this.listaSabado.push(itemGrade);
            }
        }

        this.dia="1";

    }





}
