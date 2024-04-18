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
      anime({
        targets: '.navbar_button',
        rotateZ: 90,
        duration: 380,
        easing: 'easeOutElastic(1, 50)'
      });
    } else {
      this.isArrowOn = true;
      anime({
        targets: '.navbar_button',
        rotateZ: 0,
        duration: 380,
        easing: 'easeOutElastic(1, 50)'
      });
    }
  }
}
