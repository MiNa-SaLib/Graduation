import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { WorkSpaceService } from '../../../Services/work-space.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-space-edit-specific',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './work-space-edit-specific.component.html',
  styleUrl: './work-space-edit-specific.component.css',
})
export class WorkSpaceEditSpecificComponent {
  formData: FormData;
  image: any;
  workSpaceData: FormGroup;
  workSpaceID: any;
  workSpaceGet: any;
  constructor(
    private formBuilder: FormBuilder,
    private workSpaceService: WorkSpaceService,
    private router: ActivatedRoute,
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
      this.workSpaceID = data.get('id');
      this.workSpaceService
        .getWorkspaceById(this.workSpaceID)
        .subscribe((Data) => {
          console.log(Data);
          this.workSpaceGet = Data;
          console.log(this.workSpaceGet.name);
          this.workSpaceData.patchValue({
            Name: this.workSpaceGet?.name,
            Street: this.workSpaceGet?.street,
            PhoneNumber: this.workSpaceGet?.phoneNumber,
            City: this.workSpaceGet?.city,
            DescriptionOfPlace: this.workSpaceGet?.descriptionOfPlace,
            StartWork: this.workSpaceGet?.startWork,
            EndWork: this.workSpaceGet?.endWork,
            Latitude: this.workSpaceGet?.latitude,
            Longitude: this.workSpaceGet?.longitude,
            LinkOfPlace: this.workSpaceGet?.linkOfPlace,
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
    this.workSpaceService
      .updateWorkspace(
        this.workSpaceGet.id,
        this.workSpaceGet.images[0].id,
        this.formData
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.navigate.navigate(['/adminPanel/workSpace']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  Delete() {
    this.workSpaceService.delete(this.workSpaceID).subscribe((res) => {
      console.log(res);
      this.navigate.navigate(['/adminPanel/workSpace']);
    });
  }
}
