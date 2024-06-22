import { Component, OnInit } from '@angular/core';
import { PharmaciesService } from '../../../Services/pharmacies.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pharmacies-edit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pharmacies-edit.component.html',
  styleUrl: './pharmacies-edit.component.css',
})
export class PharmaciesEditComponent implements OnInit {
  pharmacies: any;
  constructor(private pharmaciesService: PharmaciesService) {}
  ngOnInit(): void {
    this.getAllPharmacies();
  }
  getAllPharmacies() {
    this.pharmaciesService.getAllPharmacies().subscribe((data) => {
      this.pharmacies = data;
    });
  }
}
