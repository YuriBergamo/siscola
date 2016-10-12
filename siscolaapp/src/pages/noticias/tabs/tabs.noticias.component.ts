import { Component } from '@angular/core';
import {NovasNoticiasComponent} from './novas.noticias.component';



@Component({
  templateUrl: 'tabs.noticias.component.html'
})
export class TabsNoticiasComponent{
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NovasNoticiasComponent;
  tab2Root: any = NovasNoticiasComponent;

  constructor() {

  }
}
