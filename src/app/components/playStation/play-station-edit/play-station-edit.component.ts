import { Component, OnInit } from '@angular/core';
import { PlayStationService } from '../../../Services/play-station.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-play-station-edit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './play-station-edit.component.html',
  styleUrl: './play-station-edit.component.css',
})
export class PlayStationEditComponent implements OnInit {
  playStation: any;
  constructor(private playStationService: PlayStationService) {}
  ngOnInit(): void {
    this.getAllRestaurants();
  }
  getAllRestaurants() {
    this.playStationService.getAllPlayStations().subscribe((data) => {
      this.playStation = data;
    });
  }
}
