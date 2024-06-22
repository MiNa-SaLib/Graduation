import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-work-space',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './work-space.component.html',
  styleUrl: './work-space.component.css',
})
export class WorkSpaceComponent {}
