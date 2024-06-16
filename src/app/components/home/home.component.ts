import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private readonly scroller: ViewportScroller) {}

  showSecondBox: boolean | undefined;
  showThirdBox: boolean | undefined;
  scrollIconWasClicked: boolean | undefined;

  @HostListener('window:scroll', []) onWindowScroll() {
    console.log(scrollY);
    this.isSecondBox();
    this.isThirdBox();
  }

  private isSecondBox(): void {
    if (scrollY > 400) {
      this.showSecondBox = true;
    } else {
      this.showSecondBox = false;
    }
  }

  private isThirdBox(): void {
    if (scrollY > 800) {
      this.showThirdBox = true;
    } else {
      this.showThirdBox = false;
    }
  }

  public scrollDown(x: number, y: number): void {
    this.scroller.scrollToPosition([x, y]);
    this.scrollIconWasClicked = true;
  }
}
