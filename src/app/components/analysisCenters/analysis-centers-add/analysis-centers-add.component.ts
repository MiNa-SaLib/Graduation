import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AnalysisCentersService } from '../../../Services/analysis-centers.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-analysis-centers-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './analysis-centers-add.component.html',
  styleUrl: './analysis-centers-add.component.css',
})
export class AnalysisCentersAddComponent {
  formData: FormData;
  image: any;
  centerData: FormGroup;
  res: any;
  constructor(
    private formBuilder: FormBuilder,
    private centerService: AnalysisCentersService,
    private router: Router
  ) {
    this.formData = new FormData();
    this.centerData = this.formBuilder.group({
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
    this.formData.set('Name', this.centerData.controls['Name'].value);
    this.formData.set(
      'LinkOfPlace',
      this.centerData.controls['LinkOfPlace'].value
    );
    this.formData.set(
      'PhoneNumber',
      this.centerData.controls['PhoneNumber'].value
    );
    this.formData.set('Street', this.centerData.controls['Street'].value);
    this.formData.set('City', this.centerData.controls['City'].value);
    this.formData.set(
      'DescriptionOfPlace',
      this.centerData.controls['DescriptionOfPlace'].value
    );
    this.formData.set('Latitude', this.centerData.controls['Latitude'].value);
    this.formData.set('Longitude', this.centerData.controls['Longitude'].value);
    this.formData.set('StartWork', this.centerData.controls['StartWork'].value);
    this.formData.set('EndWork', this.centerData.controls['EndWork'].value);
    this.centerService.createAnalysisCenters(this.formData).subscribe(
      (res) => {
        console.log(res);
        this.res = res.message;
        this.router.navigate(['/adminPanel/analysisCenter']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
