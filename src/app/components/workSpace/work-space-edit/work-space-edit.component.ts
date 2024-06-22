import { Component, OnInit } from '@angular/core';
import { WorkSpaceService } from '../../../Services/work-space.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-work-space-edit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './work-space-edit.component.html',
  styleUrl: './work-space-edit.component.css',
})
export class WorkSpaceEditComponent implements OnInit {
  workSpace: any;
  constructor(private workSpaceService: WorkSpaceService) {}
  ngOnInit(): void {
    this.getAllWorkSpace();
  }
  getAllWorkSpace() {
    this.workSpaceService.getAllWorkSpace().subscribe((data) => {
      this.workSpace = data;
      console.log(data);
    });
  }
}
