import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, of, Subscription } from 'rxjs';
import { ControllerService } from '../../controller/controller.service';
import { Plant } from '../../model/plant';
import { CacheService } from '../../cache/cache.service';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss',
})
export class SpeciesComponent implements OnInit, OnDestroy {
  constructor(public controller: ControllerService, public cache: CacheService) { }


  plants: Observable<Plant[]> = of();
  sizeOfArray: number = 0;


  ngOnInit(): void {
    this.controller.getTrefle().pipe(map(((array: Plant[]) => { if (!this.cache.get("plants")) this.cache.set("plants", array) }))).subscribe();
    console.log(this.cache.get("plants"));
  }

  ngOnDestroy(): void {
  }

}
