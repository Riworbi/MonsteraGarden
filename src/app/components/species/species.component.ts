import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  googleQuery,
  MonsteraSpiece,
  monsteraSpieces,
} from '../../articles/Species';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss',
})
export class SpeciesComponent implements OnInit, OnDestroy {
  constructor() {}

  spiecies: MonsteraSpiece = monsteraSpieces;
  query: string = googleQuery;

  sizeOfArray: number = 0;

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
