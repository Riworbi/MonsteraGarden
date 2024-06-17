import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CacheService } from '../../cache/cache.service';
import { ControllerService } from '../../controller/controller.service';
import { Plant } from '../../model/plant';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss',
})
export class SpeciesComponent implements OnInit, OnDestroy {
  constructor(
    public controller: ControllerService,
    public cache: CacheService
  ) {}

  plants: Plant[] = [];
  sizeOfArray: number = 0;

  ngOnInit(): void {
    if (this.plants.length === 0) {
      this.controller.getTrefle().subscribe(
        (plants) => {
          this.plants = plants;
          console.log('Plants loaded successfully:', this.plants);
        },
        (error) => {
          console.error('Error loading plants:', error);
        }
      );
    }
  }

  ngOnDestroy(): void {}
}
