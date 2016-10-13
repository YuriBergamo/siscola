//buscar os agendamentos e grade do aluno
import {Injectable} from '@angular/core'
import { Http, Response } from '@angular/http';
import {PadraoService} from './padrao.service.ts';

@Injectable()
export class LoginService extends PadraoService{
    
    public finalUrl ="login";
    
    constructor(public http:Http){
        super(http);        
    }
    
    public login(login:string, senha:string){
        let login  = {
            "login":login,
            "senha":senha
        }
        return super.post(login,this.finalUrl);
    }      
}