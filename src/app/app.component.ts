import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1Ex2';
  imgURL="https://w0.peakpx.com/wallpaper/747/327/HD-wallpaper-tanjiro-pic-fan-art-anime-demon-slayer-kimetsu-no-yaiba.jpg"

  nomClass="rouge";
  isActif="true";
  onClick(){
    console.log("Boutton cliqué")
  }

  isDetail:boolean=false;
  afficher(){
    this.isDetail=true;
  }
  cacher(){
    this.isDetail=false;
  }
}
