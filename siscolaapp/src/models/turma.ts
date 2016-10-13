import {Escola} from './escola.ts';

export class Turma{
    public id:number;
    public nome:string;
    public escola:Escola;
    
    constructor(json?){
        if(json){
            this.id = json.id;
            this.nome = json.nome;
            this.escola = new Escola(json.escola);
        }
    }
}