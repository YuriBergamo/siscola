import {Component} from "@angular/core/src/metadata/directives";
import { ViewChild } from '@angular/core';
import {Slides, NavController} from "ionic-angular";

import {LoginComponent} from "../login/login.component";

/**
 * Created by profsyst on 14/10/16.
 */

@Component({
    selector:'tutorial',
    templateUrl:'tutorial.html'
})
export class TutorialComponent{
    @ViewChild('slider') slider: Slides;
    constructor(private navController:NavController){

    }

    proximoSlide(){
        this.slider.slideNext();
    }


    public comecar(){
        this.navController.setRoot(LoginComponent);
        //this.goToNextPageWithoutBack(LoginComponent);
    }

    private goToNextPageWithoutBack(page:any, params?:any) {
      this.navController.push(page, params).then(() => {
        this.removeCurrentViewFromHistory();
      });
    }

    private removeCurrentViewFromHistory() {
      const index = this.navController.getActive().index;
      this.navController.remove(0, index);
    }

}
