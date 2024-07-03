import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RestaurantsService } from '../../Services/restaurants.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-edit-specific',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './restaurant-edit-specific.component.html',
  styleUrl: './restaurant-edit-specific.component.css',
})
export class RestaurantEditSpecificComponent {
  formData: FormData;
  image: any;
  restaurantData: FormGroup;
  restaurantID: any;
  restaurantGet: any;
  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantsService,
    private router: ActivatedRoute,
    private navigate: Router
  ) {
    this.formData = new FormData();
    this.restaurantData = this.formBuilder.group({
      Name: [this.restaurantGet?.name, [Validators.required]],
      Phone: [this.restaurantGet?.phone, [Validators.required]],
      Email: [
        this.restaurantGet?.email,
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      HasDelivery: [this.restaurantGet?.hasDelivery, [Validators.required]],
      Street: [this.restaurantGet?.street, [Validators.required]],
      City: [this.restaurantGet?.city, [Validators.required]],
      DescriptionOfPlace: [
        this.restaurantGet?.descriptionOfPlace,
        [Validators.required],
      ],
      LinkOfPlace: [
        this.restaurantGet?.linkOfPlace,
        [
          Validators.pattern(
            /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/
          ),
        ],
      ],
      Latitude: [
        this.restaurantGet?.latitude,
        [
          Validators.required,
          Validators.pattern(/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/),
        ],
      ],
      Longitude: [
        this.restaurantGet?.longitude,
        [
          Validators.required,
          Validators.pattern(/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/),
        ],
      ],
      StartWork: [this.restaurantGet?.startWork, [Validators.required]],
      EndWork: [this.restaurantGet?.endWork, [Validators.required]],
      file: ['', [Validators.required]],
    });

    this.router.paramMap.subscribe((data) => {
      this.restaurantID = data.get('id');
      this.restaurantService
        .getRestaurantByID(this.restaurantID)
        .subscribe((resData) => {
          console.log(resData);
          this.restaurantGet = resData;
          console.log(this.restaurantGet.name);
          this.restaurantData.patchValue({
            Name: this.restaurantGet?.name,
            Phone: this.restaurantGet?.phone,
            Email: this.restaurantGet?.email,
            HasDelivery: this.restaurantGet?.hasDelivery,
            Street: this.restaurantGet?.street,
            City: this.restaurantGet?.city,
            DescriptionOfPlace: this.restaurantGet?.descriptionOfPlace,
            LinkOfPlace: this.restaurantGet?.linkOfPlace,
            Latitude: this.restaurantGet?.latitude,
            Longitude: this.restaurantGet?.longitude,
            StartWork: this.restaurantGet?.startWork,
            EndWork: this.restaurantGet?.endWork,
          });
        });
    });
  }
  processFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    this.formData.append('file', file, file.name);
    this.image = this.formData.get('file');
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
    this.restaurantService
      .updateRestaurant(
        this.restaurantGet.id,
        this.restaurantGet.images[0].id,
        this.formData
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.navigate.navigate(['/adminPanel/restaurant']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  Delete() {
    this.restaurantService.delete(this.restaurantID).subscribe((res) => {
      console.log(res);
      this.navigate.navigate(['/adminPanel/restaurant']);
    });
  }
}
