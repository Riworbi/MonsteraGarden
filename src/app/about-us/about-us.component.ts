import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { CommonModule } from '@angular/common'; // Import CommonModule here
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {

  ngOnInit(): void {
    this.animateButton(0);
  }

  public isScrollBelow(value: number ) : boolean{
    return scrollY > value;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    if(scrollY > 100){
      this.animateButton(0);
    } 
  }

  public animateButton(rotateVal: Number): void {
    anime({
      targets: '.text_hide',
      delay: 1300,
      duration: 550,
      opacity: 1,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.text_box',
      width: '150vh',
      height: '500px',
      left: 0,
      delay: 1000,
      duration: 500,
      easing: 'easeInOutQuad'
    });
    anime({
      targets: '.text_header',
      left: 0,
      delay: 1000,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  }

}
