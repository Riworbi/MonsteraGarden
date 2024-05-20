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

  hideContact : boolean | undefined;

  ngOnInit(): void {
    this.animateAboutUs();
  }

  public isScrollBelow(value: number ) : boolean{
    return scrollY > value;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    if(scrollY > 110){
      this.hideContact= true;
     } else {
      this.hideContact = false;
     } 
  }

  animateAboutUs() {
    this.textAnimation('.text_hide_about_us');
    this.boxAnimation('.text_box_about_us');
    this.headerAnimation('.text_header_about_us');
  }

  textAnimation(target: string) {
    anime({
      targets: target,
      delay: 1300,
      duration: 550,
      opacity: 1,
      easing: 'easeInOutQuad'
    });
  }

  boxAnimation(target: string) {
    anime({
      targets: target,
      width: '150vh',
      height: '500px',
      left: 0,
      delay: 1000,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  }

  headerAnimation(target: string) {
    anime({
      targets: target,
      left: 0,
      delay: 1000,
      duration: 500,
      easing: 'easeInOutQuad'
    });
  }

}
