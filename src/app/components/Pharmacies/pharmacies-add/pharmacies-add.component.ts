import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PharmaciesService } from '../../../Services/pharmacies.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacies-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pharmacies-add.component.html',
  styleUrl: './pharmacies-add.component.css',
})
export class PharmaciesAddComponent {
  formData: FormData;
  image: any;
  pharmacyData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private pharmacyService: PharmaciesService,
    private navigate: Router
  ) {
    this.formData = new FormData();
    this.pharmacyData = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Street: ['', Validators.required],
      PhoneNumber: ['', [Validators.required]],
      City: ['', [Validators.required]],
      DescriptionOfPlace: ['', [Validators.required]],
      StartWork: ['', [Validators.required]],
      EndWork: ['', [Validators.required]],
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
      files: ['', [Validators.required]],
      LinkOfPlace: [
        '',
        [
          Validators.pattern(
            /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/
          ),
        ],
      ],
      // Email: [''],
      // HasDelivery: [''],
    });
  }
  processFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    this.formData.append('files', file, file.name);
    this.image = this.formData.get('files');
  }

  send() {
    this.formData.append('Name', this.pharmacyData.controls['Name'].value);
    this.formData.append(
      'LinkOfPlace',
      this.pharmacyData.controls['LinkOfPlace'].value
    );
    this.formData.append(
      'PhoneNumber',
      this.pharmacyData.controls['PhoneNumber'].value
    );
    this.formData.append('Street', this.pharmacyData.controls['Street'].value);
    this.formData.append('City', this.pharmacyData.controls['City'].value);
    this.formData.append(
      'DescriptionOfPlace',
      this.pharmacyData.controls['DescriptionOfPlace'].value
    );
    this.formData.append(
      'Latitude',
      this.pharmacyData.controls['Latitude'].value
    );
    this.formData.append(
      'Longitude',
      this.pharmacyData.controls['Longitude'].value
    );
    this.formData.append(
      'StartWork',
      this.pharmacyData.controls['StartWork'].value
    );
    this.formData.append(
      'EndWork',
      this.pharmacyData.controls['EndWork'].value
    );
    this.pharmacyService.createPharmacy(this.formData).subscribe(
      (res) => {
        console.log(res);
        this.navigate.navigate(['/adminPanel/pharmacies']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
