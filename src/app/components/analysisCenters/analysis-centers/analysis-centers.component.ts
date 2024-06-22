import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-analysis-centers',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './analysis-centers.component.html',
  styleUrl: './analysis-centers.component.css',
})
export class AnalysisCentersComponent {}
