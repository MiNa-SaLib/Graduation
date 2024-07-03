import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RestaurantsService } from '../../Services/restaurants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './restaurant-add.component.html',
  styleUrl: './restaurant-add.component.css',
})
export class RestaurantAddComponent {
  formData: FormData;
  image: any;
  restaurantData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantsService,
    private navigate: Router
  ) {
    this.formData = new FormData();
    this.restaurantData = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      Email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      HasDelivery: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      City: ['', [Validators.required]],
      DescriptionOfPlace: ['', [Validators.required]],
      LinkOfPlace: [
        '',
        [
          Validators.pattern(
            /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/
          ),
        ],
      ],
      Latitude: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/),
        ],
      ],
      Longitude: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/),
        ],
      ],
      StartWork: ['', [Validators.required]],
      EndWork: ['', [Validators.required]],
      imageFiles: ['', [Validators.required]],
    });
  }
  processFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    this.formData.append('imageFiles', file, file.name);
    this.image = this.formData.get('imageFiles');
  }

  send() {
    this.formData.append('Name', this.restaurantData.controls['Name'].value);
    this.formData.append('Phone', this.restaurantData.controls['Phone'].value);
    this.formData.append('Email', this.restaurantData.controls['Email'].value);
    this.formData.append(
      'HasDelivery',
      this.restaurantData.controls['HasDelivery'].value
    );
    this.formData.append(
      'Street',
      this.restaurantData.controls['Street'].value
    );
    this.formData.append('City', this.restaurantData.controls['City'].value);
    this.formData.append(
      'DescriptionOfPlace',
      this.restaurantData.controls['DescriptionOfPlace'].value
    );
    this.formData.append(
      'LinkOfPlace',
      this.restaurantData.controls['LinkOfPlace'].value
    );
    this.formData.append(
      'Latitude',
      this.restaurantData.controls['Latitude'].value
    );
    this.formData.append(
      'Longitude',
      this.restaurantData.controls['Longitude'].value
    );
    this.formData.append(
      'StartWork',
      this.restaurantData.controls['StartWork'].value
    );
    this.formData.append(
      'EndWork',
      this.restaurantData.controls['EndWork'].value
    );
    this.restaurantService.createRestaurants(this.formData).subscribe(
      (res) => {
        console.log(res);
        this.navigate.navigate(['/adminPanel/restaurant']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
