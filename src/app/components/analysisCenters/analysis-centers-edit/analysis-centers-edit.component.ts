import { Component, OnInit } from '@angular/core';
import { AnalysisCentersService } from '../../../Services/analysis-centers.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-analysis-centers-edit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './analysis-centers-edit.component.html',
  styleUrl: './analysis-centers-edit.component.css',
})
export class AnalysisCentersEditComponent implements OnInit {
  center: any;
  constructor(private analysisCentersService: AnalysisCentersService) {}
  ngOnInit(): void {
    this.getAllAnalysisCenters();
  }
  getAllAnalysisCenters() {
    this.analysisCentersService.getAllAnalysisCenters().subscribe((data) => {
      this.center = data;
      console.log(data);
    });
  }
}
