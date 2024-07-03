import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PharmaciesService } from '../../../Services/pharmacies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pharmacy-edit-specific',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pharmacy-edit-specific.component.html',
  styleUrl: './pharmacy-edit-specific.component.css',
})
export class PharmacyEditSpecificComponent {
  formData: FormData;
  image: any;
  pharmacyData: FormGroup;
  pharmacyID: any;
  pharmacyGet: any;
  constructor(
    private formBuilder: FormBuilder,
    private pharmacyService: PharmaciesService,
    private router: ActivatedRoute,
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
      file: ['', Validators.required],
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
    this.router.paramMap.subscribe((data) => {
      this.pharmacyID = data.get('id');
      this.pharmacyService
        .getPharmacyById(this.pharmacyID)
        .subscribe((Data) => {
          console.log(Data);
          this.pharmacyGet = Data;
          console.log(this.pharmacyGet.name);
          this.pharmacyData.patchValue({
            Name: this.pharmacyGet?.name,
            Street: this.pharmacyGet?.street,
            PhoneNumber: this.pharmacyGet?.phoneNumber,
            City: this.pharmacyGet?.city,
            DescriptionOfPlace: this.pharmacyGet?.descriptionOfPlace,
            StartWork: this.pharmacyGet?.startWork,
            EndWork: this.pharmacyGet?.endWork,
            Latitude: this.pharmacyGet?.latitude,
            Longitude: this.pharmacyGet?.longitude,
            LinkOfPlace: this.pharmacyGet?.linkOfPlace,
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
    this.pharmacyService
      .updatePharmacy(
        this.pharmacyGet.id,
        this.pharmacyGet.images[0].id,
        this.formData
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.navigate.navigate(['/adminPanel/pharmacies']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  Delete() {
    this.pharmacyService.delete(this.pharmacyID).subscribe((res) => {
      console.log(res);
      this.navigate.navigate(['/adminPanel/pharmacies']);
    });
  }
}
