import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../../../Services/doctors.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctors-edit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctors-edit.component.html',
  styleUrl: './doctors-edit.component.css',
})
export class DoctorsEditComponent implements OnInit {
  doctors: any;
  constructor(private doctorsService: DoctorsService) {}
  ngOnInit(): void {
    this.getAllDoctors();
  }
  getAllDoctors() {
    this.doctorsService.getAllDoctors().subscribe((data) => {
      this.doctors = data;
      console.log(data);
    });
  }
}
