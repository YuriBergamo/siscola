export class Escola{
    public id:number;
    public nome:string;
    
    constructor(json?){
        if(json){
            this.id = json.id;
            this.nome = json.nome;
        }        
    }
}