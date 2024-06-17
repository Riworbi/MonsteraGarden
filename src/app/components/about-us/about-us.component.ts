import { CommonModule } from '@angular/common'; // Import CommonModule here
import { Component, HostListener, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  showContact: boolean | undefined;

  ngOnInit(): void {
    this.showContact = false;
    this.animateAboutUs();
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    if (scrollY > 110) {
      this.showContact = true;
    } else {
      this.showContact = false;
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
      easing: 'easeInOutQuad',
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
      easing: 'easeInOutQuad',
    });
  }

  headerAnimation(target: string) {
    anime({
      targets: target,
      left: 0,
      delay: 1000,
      duration: 500,
      easing: 'easeInOutQuad',
    });
  }
}
