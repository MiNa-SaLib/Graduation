import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RestaurantsService } from '../../Services/restaurants.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
})
export class RestaurantComponent {}
