import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlayStationService } from '../../../Services/play-station.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-station-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './play-station-add.component.html',
  styleUrl: './play-station-add.component.css',
})
export class PlayStationAddComponent {
  formData: FormData;
  image: any;
  playStationData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private playStationService: PlayStationService,
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
      files: ['', [Validators.required]],
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
  }
  processFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    this.formData.append('files', file, file.name);
    this.image = this.formData.get('files');
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
    this.playStationService.createPlayStation(this.formData).subscribe(
      (res) => {
        console.log(res);
        this.navigate.navigate(['/adminPanel/playStation']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
