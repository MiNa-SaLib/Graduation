import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-play-stations',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './play-stations.component.html',
  styleUrl: './play-stations.component.css',
})
export class PlayStationsComponent {}
