import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocalStorageService } from '../../local-storage/local-storage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {}

  public toggleOnArrow(): void {
    this.setBarActivated(!this.getBarActivated());
    if (this.getBarActivated()) {
      this.animateButtonElements('0vh');
      this.animateButton(90);
    } else {
      this.animateButtonElements('-120vh');
      this.animateButton(0);
    }
  }

  public animateButtonElements(value: String): void {
    anime({
      targets: '.navbar_button_element',
      right: value,
      delay: anime.stagger(100),
    });
  }

  public animateButton(rotateVal: Number): void {
    anime({
      targets: '.navbar_button',
      rotateZ: rotateVal,
      duration: 380,
      easing: 'easeOutElastic(1, 50)',
    });
  }

  public setBarActivated(value: boolean) {
    this.localStorage.setCache('BarActivated', value.toString());
  }

  public getBarActivated(): boolean {
    return this.localStorage.getCache('BarActivated') === 'true' ? true : false;
  }
}
