import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  implements OnInit {

  private isArrowOn = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleOnArrow() : void {
    if(this.isArrowOn){
      this.isArrowOn = false;
      this.animateButtonElements('0vh');
      this.animateButton(90);
  
    } else {
      this.isArrowOn = true;
      this.animateButtonElements('-120vh');
      this.animateButton(0);
    }
  }

  public animateButtonElements(value: String) : void {
    anime({
      targets: '.navbar_button_element',
      right: value,
      delay: anime.stagger(100)
    });
  }
  
  public animateButton(rotateVal: Number) : void {
    anime({
      targets: '.navbar_button',
      rotateZ: rotateVal,
      duration: 380,
      easing: 'easeOutElastic(1, 50)'
    });
  }
}
