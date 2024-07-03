import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SuperMarketsService } from '../../../Services/super-markets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-market-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './super-market-add.component.html',
  styleUrl: './super-market-add.component.css',
})
export class SuperMarketAddComponent {
  formData: FormData;
  image: any;
  superMarketData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private superMarketService: SuperMarketsService,
    private navigate: Router
  ) {
    this.formData = new FormData();
    this.superMarketData = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Street: ['', [Validators.required]],
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
          Validators.pattern(/^(-?\d{1,2}(\.\d+)?|90(\.0+)?)$/),
        ],
      ],
      files: ['', [Validators.required]],
      // Email: [''],
      // HasDelivery: [''],
      // LinkOfPlace: [''],
    });
  }
  processFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    this.formData.append('files', file, file.name);
    this.image = this.formData.get('files');
  }

  send() {
    this.formData.append('Name', this.superMarketData.controls['Name'].value);
    this.formData.append(
      'PhoneNumber',
      this.superMarketData.controls['PhoneNumber'].value
    );
    this.formData.append(
      'Street',
      this.superMarketData.controls['Street'].value
    );
    this.formData.append('City', this.superMarketData.controls['City'].value);
    this.formData.append(
      'DescriptionOfPlace',
      this.superMarketData.controls['DescriptionOfPlace'].value
    );
    this.formData.append(
      'Latitude',
      this.superMarketData.controls['Latitude'].value
    );
    this.formData.append(
      'Longitude',
      this.superMarketData.controls['Longitude'].value
    );
    this.formData.append(
      'StartWork',
      this.superMarketData.controls['StartWork'].value
    );
    this.formData.append(
      'EndWork',
      this.superMarketData.controls['EndWork'].value
    );
    this.superMarketService.createSuperMarket(this.formData).subscribe(
      (res) => {
        console.log(res);
        this.navigate.navigate(['/adminPanel/superMarket']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
