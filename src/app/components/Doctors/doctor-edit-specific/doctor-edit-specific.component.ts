import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { DoctorsService } from '../../../Services/doctors.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctor-edit-specific',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './doctor-edit-specific.component.html',
  styleUrl: './doctor-edit-specific.component.css',
})
export class DoctorEditSpecificComponent {
  formData: FormData;
  image: any;
  doctorData: FormGroup;
  doctorID: any;
  doctorGet: any;
  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorsService,
    private router: ActivatedRoute,
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
      file: ['', [Validators.required]],
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
    this.router.paramMap.subscribe((data) => {
      this.doctorID = data.get('id');
      this.doctorService.getDoctorByID(this.doctorID).subscribe((Data) => {
        console.log(Data);
        this.doctorGet = Data;
        console.log(this.doctorGet.name);
        this.doctorData.patchValue({
          Name: this.doctorGet?.name,
          Street: this.doctorGet?.street,
          PhoneNumber: this.doctorGet?.phoneNumber,
          City: this.doctorGet?.city,
          DescriptionOfPlace: this.doctorGet?.descriptionOfPlace,
          StartWork: this.doctorGet?.startWork,
          EndWork: this.doctorGet?.endWork,
          Latitude: this.doctorGet?.latitude,
          Longitude: this.doctorGet?.longitude,
          LinkOfPlace: this.doctorGet?.linkOfPlace,
          specialization: this.doctorGet?.specialization,
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
    this.doctorService
      .updateDoctor(
        this.doctorGet.id,
        this.doctorGet.images[0].id,
        this.formData
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.navigate.navigate(['/adminPanel/doctors']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  Delete() {
    this.doctorService.delete(this.doctorID).subscribe((res) => {
      console.log(res);
      this.navigate.navigate(['/adminPanel/doctors']);
    });
  }
}
