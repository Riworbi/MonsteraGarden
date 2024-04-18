import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundVideoComponent } from './background-video/background-video.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,BackgroundVideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MonsteraGarden';
}
