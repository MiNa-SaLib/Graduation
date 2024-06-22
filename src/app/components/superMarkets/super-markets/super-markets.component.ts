import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-super-markets',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './super-markets.component.html',
  styleUrl: './super-markets.component.css',
})
export class SuperMarketsComponent {}
