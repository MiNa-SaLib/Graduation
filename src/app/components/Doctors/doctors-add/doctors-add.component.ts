import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DoctorsService } from '../../../Services/doctors.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './doctors-add.component.html',
  styleUrl: './doctors-add.component.css',
})
export class DoctorsAddComponent {
  formData: FormData;
  image: any;
  doctorData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorsService,
    private navigate: Router
  ) {
    this.formData = new FormData();
    this.doctorData = this.formBuilder.group({
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
      specialization: ['', [Validators.required]],
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
    this.formData.append('Name', this.doctorData.controls['Name'].value);
    this.formData.append(
      'specialization',
      this.doctorData.controls['specialization'].value
    );
    this.formData.append(
      'LinkOfPlace',
      this.doctorData.controls['LinkOfPlace'].value
    );
    this.formData.append(
      'PhoneNumber',
      this.doctorData.controls['PhoneNumber'].value
    );
    this.formData.append('Street', this.doctorData.controls['Street'].value);
    this.formData.append('City', this.doctorData.controls['City'].value);
    this.formData.append(
      'DescriptionOfPlace',
      this.doctorData.controls['DescriptionOfPlace'].value
    );
    this.formData.append(
      'Latitude',
      this.doctorData.controls['Latitude'].value
    );
    this.formData.append(
      'Longitude',
      this.doctorData.controls['Longitude'].value
    );
    this.formData.append(
      'StartWork',
      this.doctorData.controls['StartWork'].value
    );
    this.formData.append('EndWork', this.doctorData.controls['EndWork'].value);
    this.doctorService.createDoctor(this.formData).subscribe(
      (res) => {
        console.log(res);
        this.navigate.navigate(['/adminPanel/doctors']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
