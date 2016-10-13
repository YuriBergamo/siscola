//buscar as noticias
import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {PadraoService} from './padrao.service.ts';

@Injectable()
export class EscolaService extends PadraoService{
    
    private urlEscolas = "escolas/";
    
    constructor(public http:Http){
        super(http);
    }
    
    public buscarNoticias(idEscola:number){
        let finalUrl = this.urlEscolas + idEscola + "/noticias";
        return super.get(finalUrl);
    }
}