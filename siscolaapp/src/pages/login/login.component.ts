import {Component} from '@angular/core';
import {Aluno} from '../../models/aluno.ts';


@Component({
    selector:"login",
    templateUrl:"login.component.html"
})
export class LoginComponent{

    public aluno:Aluno = new Aluno();

    constructor(){
    }


}
