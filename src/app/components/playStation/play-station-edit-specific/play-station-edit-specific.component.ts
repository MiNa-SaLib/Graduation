import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PlayStationService } from '../../../Services/play-station.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-play-station-edit-specific',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './play-station-edit-specific.component.html',
  styleUrl: './play-station-edit-specific.component.css',
})
export class PlayStationEditSpecificComponent {
  formData: FormData;
  image: any;
  playStationData: FormGroup;
  playStationID: any;
  playStationGet: any;
  constructor(
    private formBuilder: FormBuilder,
    private playStationService: PlayStationService,
    private router: ActivatedRoute,
    private navigate: Router
  ) {
    this.formData = new FormData();
    this.playStationData = this.formBuilder.group({
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
      PriceOfHour: ['', [Validators.required]],
      // HasDelivery: [''],
    });

    this.router.paramMap.subscribe((data) => {
      this.playStationID = data.get('id');
      this.playStationService
        .getPlayStationByID(this.playStationID)
        .subscribe((Data) => {
          console.log(Data);
          this.playStationGet = Data;
          console.log(this.playStationGet.name);
          this.playStationData.patchValue({
            Name: this.playStationGet?.name,
            Street: this.playStationGet?.street,
            PhoneNumber: this.playStationGet?.phoneNumber,
            City: this.playStationGet?.city,
            DescriptionOfPlace: this.playStationGet?.descriptionOfPlace,
            StartWork: this.playStationGet?.startWork,
            EndWork: this.playStationGet?.endWork,
            Latitude: this.playStationGet?.latitude,
            Longitude: this.playStationGet?.longitude,
            LinkOfPlace: this.playStationGet?.linkOfPlace,
            PriceOfHour: this.playStationGet?.priceOfHour,
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
    this.formData.append('Name', this.playStationData.controls['Name'].value);
    this.formData.append(
      'PriceOfHour',
      this.playStationData.controls['PriceOfHour'].value
    );
    this.formData.append(
      'LinkOfPlace',
      this.playStationData.controls['LinkOfPlace'].value
    );
    this.formData.append(
      'PhoneNumber',
      this.playStationData.controls['PhoneNumber'].value
    );
    this.formData.append(
      'Street',
      this.playStationData.controls['Street'].value
    );
    this.formData.append('City', this.playStationData.controls['City'].value);
    this.formData.append(
      'DescriptionOfPlace',
      this.playStationData.controls['DescriptionOfPlace'].value
    );
    this.formData.append(
      'Latitude',
      this.playStationData.controls['Latitude'].value
    );
    this.formData.append(
      'Longitude',
      this.playStationData.controls['Longitude'].value
    );
    this.formData.append(
      'StartWork',
      this.playStationData.controls['StartWork'].value
    );
    this.formData.append(
      'EndWork',
      this.playStationData.controls['EndWork'].value
    );
    this.playStationService
      .updatePlayStation(
        this.playStationGet.id,
        this.playStationGet.images[0].id,
        this.formData
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.navigate.navigate(['/adminPanel/playStation']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  Delete() {
    this.playStationService.delete(this.playStationID).subscribe((res) => {
      console.log(res);
      this.navigate.navigate(['/adminPanel/playStation']);
    });
  }
}
