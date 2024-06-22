import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../Services/categories.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
  categories: any[] = [];
  index: number = 0;
  constructor(private httpClint: HttpClient, private serv: CategoriesService) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {}
}
