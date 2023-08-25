import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaN2';

  abrirHeader(){
    if(document.getElementById("nav-header")!.style.top == "40px"){
      document.getElementById("nav-header")!.style.position = "fixed";
      document.getElementById("nav-header")!.style.top = "-1000px";
    }else{
      document.getElementById("nav-header")!.style.top = "40px";
    }
  }
}
