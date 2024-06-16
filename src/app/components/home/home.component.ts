import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.animateHeader(2);
  }

  public animateHeader(stagger: Number): void {
    anime({
      targets: '.header-josefin',
      translateX: 250,
      rotate: 540,
    });
  }
}
