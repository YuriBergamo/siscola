import {Component} from '@angular/core';
import {Aluno} from '../../models/aluno.ts';
import {LoginService} from "../../services/login.service";
import {AlunoService} from "../../services/aluno.service";
import {NavController} from "ionic-angular";
import {TabsNoticiasComponent} from "../noticias/tabs/tabs.noticias.component";


@Component({
    selector:"login",
    templateUrl:"login.component.html"
})
export class LoginComponent{

    public aluno:Aluno = new Aluno();

    constructor(private loginService:LoginService, private alunoService:AlunoService, private navController:NavController){
    }

    logar(){
        /*this.loginService.login(this.aluno.email, this.aluno.senha).subscribe(
          (sucess) =>{
              //this.alunoService.alunoLogado = new Aluno(sucess);
              this.navController.setRoot(TabsNoticiasComponent);
          },
          (erro) => console.log("Erro LOgin")
        );*/

        this.navController.setRoot(TabsNoticiasComponent);
    }

}
