import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller/controller.service';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [],
  templateUrl: './species.component.html',
  styleUrl: './species.component.scss'
})
export class SpeciesComponent implements OnInit {
  

  constructor(public controller : ControllerService) {}

  ngOnInit(): void {
    this.controller.getTrefle();
  }

}
