import { Component } from '@angular/core';
import { monsteraCareArticle, MonsteraCareTips } from '../../articles/Guide';
import { CommonModule } from '@angular/common';
import anime from 'animejs';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.scss',
})
export class GuideComponent {
  article: MonsteraCareTips = monsteraCareArticle;

  hoveredSectionIndex: number | null = null;

  mouseOver(index: number) {
    this.hoveredSectionIndex = index;
  }

  mouseLeave(index: number) {
    this.hoveredSectionIndex = null;
  }
}
