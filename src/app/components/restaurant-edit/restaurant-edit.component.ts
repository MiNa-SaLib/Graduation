import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { RestaurantsService } from '../../Services/restaurants.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-edit',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './restaurant-edit.component.html',
  styleUrl: './restaurant-edit.component.css',
})
export class RestaurantEditComponent {
  restaurants: any;
  constructor(private restaurantService: RestaurantsService) {}
  ngOnInit(): void {
    this.getAllRestaurants();
  }
  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe((data) => {
      // console.log(data[1].images[0].image);

      this.restaurants = data;
    });
  }
}
