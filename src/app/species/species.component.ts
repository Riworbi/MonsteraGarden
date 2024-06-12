import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, Subscription } from 'rxjs';
import { ControllerService } from '../controller/controller.service';
import { Plant } from '../model/plant';
import { CacheService } from '../cache/cache.service';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss',
})
export class SpeciesComponent implements OnInit {
  constructor(public controller: ControllerService, cacheService: CacheService) {}

  plants: Observable<Plant[]> = of();
  sizeOfArray: number = 0;
  cacheSubscription: Subscription;


  getHalfLength(): number {
    var result: number;
    this.plants
      .pipe(
        map((array) => {
          return array.length / 2;
        })
      )
      .subscribe((item) => {
        this.sizeOfArray = item;
      });
    console.log(this.sizeOfArray);
    return this.sizeOfArray;
  }

  ngOnInit(): void {
    this.cache
    this.plants = this.controller.getTrefle();
    this.getHalfLength();
  }
}
