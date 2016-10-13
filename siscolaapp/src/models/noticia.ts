import {Escola} from './escola.ts';

export class Noticia{
    public id:number;
    public dataHoraNoticia:Date;
    public título:string;
    public descricao:string;
    public imagem:string;
    public escola:Escola;
    
    constructor(json?){
        if(json){
            this.id = json.id;
            this.dataHoraNoticia = json.dataHoraNoticia;
            this.titulo = json.titulo;
            this.descricao = json.descricao;
            this.imagem = json.imagem;
            this.escola = new Escola(json.escola);
        }
    }

}