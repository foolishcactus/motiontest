import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Motion } from '@capacitor/motion';
import { PluginListenerHandle } from '@capacitor/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  
  rotateVar: number;

  constructor() {
    this.rotateVar = 0;
  }

  

  handleButtonClick(){
    console.log("Button clicked");
    Motion.addListener('orientation', event => {
      this.updateArrowPosition(event.alpha);
      console.log("Testing:", event)
      console.log("Alpha", event.alpha);
      console.log("Gamma", event.gamma);
      console.log("Beta", event.gamma);
    });
  }

  updateArrowPosition(zHeading: number){
    this.rotateVar = -1 * zHeading;
  }

  rotateCheck(){
    console.log("rotate fired");
    this.rotateVar = Math.random() * 100;
    console.log(this.rotateVar);
  }



  stopListeningClick(){
    Motion.removeAllListeners();
  }

  private async handleButton2Click(){
      try {
        
      } catch (e) {
        // Handle error
        return;
      }
    
      // Once the user approves, can start listening:
      
};

// Stop the acceleration listener
stopAcceleration = () => {
  
};

// Remove all listeners
removeListeners = () => {
  Motion.removeAllListeners();
};

}
