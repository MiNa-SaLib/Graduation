import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pharmacies',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './pharmacies.component.html',
  styleUrl: './pharmacies.component.css',
})
export class PharmaciesComponent {}
