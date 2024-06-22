import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RestaurantsService } from '../../../Services/restaurants.service';
import { DoctorsService } from '../../../Services/doctors.service';
import { CommonModule } from '@angular/common';
import { json } from 'express';

@Component({
  selector: 'app-doctors-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './doctors-add.component.html',
  styleUrl: './doctors-add.component.css',
})
export class DoctorsAddComponent {
  doctorData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private doctorsService: DoctorsService
  ) {
    this.doctorData = this.formBuilder.group({
      name: [''],
      street: [''],
      city: [''],
      descriptionOfPlace: [''],
      linkOfPlace: [''],
      phoneNumber: [''],
      startWork: [''],
      endWork: [''],
      specialization: [''],
      latitude: [''],
      longitude: [''],
      // hasDelivery: new FormControl(''),
      // imageFiles: new FormArray([]),
    });
  }

  send() {
    let obj = {
      name: this.doctorData.get('name')?.value,
      phoneNumber: this.doctorData.get('phoneNumber')?.value,
      specialization: this.doctorData.get('specialization')?.value,
      street: this.doctorData.get('street')?.value,
      city: this.doctorData.get('city')?.value,
      descriptionOfPlace: this.doctorData.get('descriptionOfPlace')?.value,
      linkOfPlace: this.doctorData.get('linkOfPlace')?.value,
      latitude: parseFloat(this.doctorData.get('latitude')?.value),
      longitude: parseFloat(this.doctorData.get('longitude')?.value),
      startWork: this.doctorData.get('startWork')?.value,
      endWork: this.doctorData.get('endWork')?.value,
    };

    // formData.forEach((key, ele) => console.log(key, ele));
    console.log(JSON.stringify(obj));
    this.doctorsService.createDoctor(JSON.stringify(obj)).subscribe(
      (res) => {
        console.log(res.message);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
