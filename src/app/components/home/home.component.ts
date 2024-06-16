import { Component, HostListener, } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {
 
  showSecondBox : boolean | undefined;
  showThirdBox : boolean | undefined;


  @HostListener("window:scroll", []) onWindowScroll() {
    console.log(scrollY)
    this.isSecondBox();
    this.isThirdBox();
  }
 
  private isSecondBox() : void{
    if(scrollY > 200){
      this.showSecondBox= true;
     } else {
      this.showSecondBox = false;
     } 
  }

  private isThirdBox() : void{
    if(scrollY > 600){
      this.showThirdBox= true;
     } else {
      this.showThirdBox = false;
     } 
  }
}
