import {Escola} from './escola.ts';
import {Turma} from './turma.ts';

export class Aluno{
    public id:number;
    public email:string;
    public senha:string;
    public nome:string;
    public sexo:string;
    public dataNascimento:Date;
    public fotoPerfil:string;
    public token:string;
    public escola:Escola;
    public turma:Turma;

    constructor(json?){
        this.escola = new Escola();
        if(json){
            this.id = json.id;
            this.email = json.email;
            this.senha = json.senha;
            this.nome = json.nome;
            this.sexo = json.sexo;
            this.dataNascimento = json.dataNascimento;
            this.fotoPerfil = json.fotoPerfil;
            this.token = json.token;
            this.escola =  new Escola(json.escola);
            this.turma = new Turma(json.turma);
        }
    }

}
