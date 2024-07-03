import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AnalysisCentersService } from '../../../Services/analysis-centers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-center-edit-specific',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './center-edit-specific.component.html',
  styleUrl: './center-edit-specific.component.css',
})
export class CenterEditSpecificComponent {
  formData: FormData;
  image: any;
  centerData: FormGroup;
  centerID: any;
  centerGet: any;
  constructor(
    private formBuilder: FormBuilder,
    private centerService: AnalysisCentersService,
    private router: ActivatedRoute,
    private router2: Router
  ) {
    this.formData = new FormData();
    this.centerData = this.formBuilder.group({
      Name: [this.centerGet?.name, [Validators.required]],
      PhoneNumber: [this.centerGet?.phone, [Validators.required]],

      Street: [this.centerGet?.street, [Validators.required]],
      City: [this.centerGet?.city, [Validators.required]],
      DescriptionOfPlace: [
        this.centerGet?.descriptionOfPlace,
        [Validators.required],
      ],
      LinkOfPlace: [
        this.centerGet?.linkOfPlace,
        [
          Validators.pattern(
            /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/
          ),
        ],
      ],
      Latitude: [
        this.centerGet?.latitude,
        [
          Validators.required,
          Validators.pattern(/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/),
        ],
      ],
      Longitude: [
        this.centerGet?.longitude,
        [
          Validators.required,
          Validators.pattern(/^(-?\d{1,3}(\.\d+)?|180(\.0+)?)$/),
        ],
      ],
      StartWork: [this.centerGet?.startWork, [Validators.required]],
      EndWork: [this.centerGet?.endWork, [Validators.required]],
      file: ['', [Validators.required]],
    });
    this.router.paramMap.subscribe((data) => {
      this.centerID = data.get('id');
      this.centerService
        .getAnalysisCenterByID(this.centerID)
        .subscribe((Data) => {
          console.log(Data);
          this.centerGet = Data;
          console.log(this.centerGet.name);
          this.centerData.patchValue({
            Name: this.centerGet?.name, //
            PhoneNumber: this.centerGet?.phoneNumber, //
            Street: this.centerGet?.street, //
            City: this.centerGet?.city, //
            DescriptionOfPlace: this.centerGet?.descriptionOfPlace, //
            LinkOfPlace: this.centerGet?.linkOfPlace, //
            Latitude: this.centerGet?.latitude, //
            Longitude: this.centerGet?.longitude, //
            StartWork: this.centerGet?.startWork, //
            EndWork: this.centerGet?.endWork, //
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
    this.formData.append('Name', this.centerData.controls['Name'].value);
    this.formData.append(
      'PhoneNumber',
      this.centerData.controls['PhoneNumber'].value
    );

    this.formData.append('Street', this.centerData.controls['Street'].value);
    this.formData.append('City', this.centerData.controls['City'].value);
    this.formData.append(
      'DescriptionOfPlace',
      this.centerData.controls['DescriptionOfPlace'].value
    );
    this.formData.append(
      'LinkOfPlace',
      this.centerData.controls['LinkOfPlace'].value
    );
    this.formData.append(
      'Latitude',
      this.centerData.controls['Latitude'].value
    );
    this.formData.append(
      'Longitude',
      this.centerData.controls['Longitude'].value
    );
    this.formData.append(
      'StartWork',
      this.centerData.controls['StartWork'].value
    );
    this.formData.append('EndWork', this.centerData.controls['EndWork'].value);
    this.centerService
      .updateAnalysisCenter(
        this.centerGet.id,
        this.centerGet.images[0].id,
        this.formData
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.router2.navigate(['/adminPanel/analysisCenter']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  Delete() {
    this.centerService.delete(this.centerID).subscribe((res) => {
      console.log(res);
      this.router2.navigate(['/adminPanel/analysisCenter']);
    });
  }
}
