import { Component } from '@angular/core';
import { DadosComponent } from "../dados/dados.component";

@Component({
  selector: 'app-tirardado',
  imports: [DadosComponent],
  templateUrl: './tirardado.component.html',
  styleUrl: './tirardado.component.css'
})
export class TirardadoComponent {
  n1: number=0
  n2: number=0
  n3: number=0
  Contador: number=0

  res: string="Tira para jugar"

  tirar(){
    this.n1=Math.floor(Math.random()*6)+1
    this.n2=Math.floor(Math.random()*6)+1
    this.n3=Math.floor(Math.random()*6)+1

    if(this.n1==this.n2 && this.n1==this.n3){
      this.res="Felicidades, GANASTE :)"
      this.Contador=0
    
    }else{
      this.res="PERDISTE :( vuelve a intentar"
      this.Contador=this.Contador+1
    }
    

  }


}
