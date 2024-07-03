import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { WorkSpaceService } from '../../../Services/work-space.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-space-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './work-space-add.component.html',
  styleUrl: './work-space-add.component.css',
})
export class WorkSpaceAddComponent {
  formData: FormData;
  image: any;
  workSpaceData: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private workSpaceService: WorkSpaceService,
    private navigate: Router
  ) {
    this.formData = new FormData();
    this.workSpaceData = this.formBuilder.group({
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
    this.formData.append('Name', this.workSpaceData.controls['Name'].value);
    this.formData.append(
      'LinkOfPlace',
      this.workSpaceData.controls['LinkOfPlace'].value
    );
    this.formData.append(
      'PhoneNumber',
      this.workSpaceData.controls['PhoneNumber'].value
    );
    this.formData.append('Street', this.workSpaceData.controls['Street'].value);
    this.formData.append('City', this.workSpaceData.controls['City'].value);
    this.formData.append(
      'DescriptionOfPlace',
      this.workSpaceData.controls['DescriptionOfPlace'].value
    );
    this.formData.append(
      'Latitude',
      this.workSpaceData.controls['Latitude'].value
    );
    this.formData.append(
      'Longitude',
      this.workSpaceData.controls['Longitude'].value
    );
    this.formData.append(
      'StartWork',
      this.workSpaceData.controls['StartWork'].value
    );
    this.formData.append(
      'EndWork',
      this.workSpaceData.controls['EndWork'].value
    );
    this.workSpaceService.createWorkSpace(this.formData).subscribe(
      (res) => {
        console.log(res);
        this.navigate.navigate(['/adminPanel/workSpace']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
