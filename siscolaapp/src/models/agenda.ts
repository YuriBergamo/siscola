import {Aluno} from "./aluno";
/**
 * Created by profsyst on 13/10/16.
 */
export class Agenda{
  public id:number;
  public aluno:Aluno;
  public dataInicioAgenda;
  public horaInicioAgenda;
  public dataFinalAgenda;
  public horaFinalAgenda;
  public assunto;
  public descricao;
  public local;
  public status;


  constructor(json?){
    if(json){
      this.id = json.id;
      this.aluno = new Aluno(json.aluno);
      this.dataInicioAgenda = json.dataInicioAgenda;
      this.horaInicioAgenda = json.horaInicioAgenda;
      this.dataFinalAgenda = json.dataFinalAgenda;
      this.horaFinalAgenda = json.horaFinalAgenda;
      this.assunto = json.assunto;
      this.descricao = json.descricao;
      this.local = json.local;
      this.status = json.status;
    }

  }

}
