import {Component, OnInit} from "@angular/core";
import { EscolaService } from '../../../services/escola.service';


@Component({
    selector:"novas-noticias",
    templateUrl:"novas.noticias.component.html"
})

export class NovasNoticiasComponent implements OnInit{


    private listaNoticias = [];
    private id = 1;

    ngOnInit(){
        this.getNoticias();
    }
    constructor(private escolaService:EscolaService){

    }

    public getNoticias(){
        this.escolaService.buscarNoticias(1).subscribe(
                noticias => this.listaNoticias = noticias,
                erro => console.log("ERRO NOTICIAS")
            );
    }

    public buscarProximaImg(){

        let retorno = "assets/img/noticia"+ this.id+".jpg";
        return retorno;

    }




}
