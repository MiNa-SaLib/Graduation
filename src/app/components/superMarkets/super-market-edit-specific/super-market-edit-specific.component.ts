import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SuperMarketsService } from '../../../Services/super-markets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-super-market-edit-specific',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './super-market-edit-specific.component.html',
  styleUrl: './super-market-edit-specific.component.css',
})
export class SuperMarketEditSpecificComponent {
  formData: FormData;
  image: any;
  superMarketData: FormGroup;
  superMarketID: any;
  superMarketGet: any;

  constructor(
    private formBuilder: FormBuilder,
    private superMarketService: SuperMarketsService,
    private router: ActivatedRoute,
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
      file: ['', Validators.required],
      // Email: [''],
      // HasDelivery: [''],
      // LinkOfPlace: [''],
    });
    this.router.paramMap.subscribe((data) => {
      this.superMarketID = data.get('id');
      this.superMarketService
        .getSuperMarketById(this.superMarketID)
        .subscribe((Data) => {
          console.log(Data);
          this.superMarketGet = Data;
          console.log(this.superMarketGet.name);
          this.superMarketData.patchValue({
            Name: this.superMarketGet?.name,
            Street: this.superMarketGet?.street,
            PhoneNumber: this.superMarketGet?.phoneNumber,
            City: this.superMarketGet?.city,
            DescriptionOfPlace: this.superMarketGet?.descriptionOfPlace,
            StartWork: this.superMarketGet?.startWork,
            EndWork: this.superMarketGet?.endWork,
            Latitude: this.superMarketGet?.latitude,
            Longitude: this.superMarketGet?.longitude,
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
    this.superMarketService
      .updateSupermarket(
        this.superMarketGet.id,
        this.superMarketGet.images[0].id,
        this.formData
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.navigate.navigate(['/adminPanel/superMarket']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  Delete() {
    this.superMarketService.delete(this.superMarketID).subscribe((res) => {
      console.log(res);
      this.navigate.navigate(['/adminPanel/superMarket']);
    });
  }
}
