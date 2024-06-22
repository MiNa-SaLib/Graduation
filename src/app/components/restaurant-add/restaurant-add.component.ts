import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { RestaurantsService } from '../../Services/restaurants.service';

@Component({
  selector: 'app-restaurant-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './restaurant-add.component.html',
  styleUrl: './restaurant-add.component.css',
})
export class RestaurantAddComponent {
  //
  formData: FormData;
  image: any;
  restaurantData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantsService
  ) {
    this.formData = new FormData();
    this.restaurantData = this.formBuilder.group({
      Name: [''],
      Phone: [''],
      Email: [''],
      HasDelivery: [''],
      Street: [''],
      City: [''],
      DescriptionOfPlace: [''],
      LinkOfPlace: [''],
      Latitude: [''],
      Longitude: [''],
      StartWork: [''],
      EndWork: [''],
      imageFiles: [''],
    });
  }
  processFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    this.formData.append('file', file, file.name);
    this.image = this.formData.get('file');
  }

  send(
    Name: any,
    Email: any,
    Phone: any,
    LinkOfPlace: any,
    DescriptionOfPlace: any,
    StartWork: any,
    EndWork: any,
    City: any,
    Street: any,
    imageFiles: any,
    HasDelivery: any,
    Longitude: any,
    Latitude: any
  ) {
    //  this.formData.append('Name', Name.value);
    let obj = {
      Name: this.formData.append('Name', Name.value),
      Phone: this.formData.append('Phone', Phone.value),
      Email: this.formData.append('Email', Email.value),
      HasDelivery: this.formData.append('HasDelivery', HasDelivery.value),
      Street: this.formData.append('Street', Street.value),
      City: this.formData.append('City', City.value),
      DescriptionOfPlace: this.formData.append(
        'DescriptionOfPlace',
        DescriptionOfPlace.value
      ),
      LinkOfPlace: this.formData.append('LinkOfPlace', LinkOfPlace.value),
      Latitude: this.formData.append('Latitude', Latitude.value),
      Longitude: this.formData.append('Longitude', Longitude.value),
      StartWork: this.formData.append('StartWork', StartWork.value),
      EndWork: this.formData.append('EndWork', EndWork.value),
      imageFiles: this.image,
    };
    // console.log(this.image);
    // console.log(this.formData.get('Name'));
    this.restaurantService.createRestaurants(this.formData).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
