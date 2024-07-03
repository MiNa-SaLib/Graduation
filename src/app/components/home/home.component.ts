import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../Services/categories.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
  cat: any[] = [] as {}[];
  // firstName: any;
  // lastName: any;
  // email: any;
  // city: any;
  // phone: any;

  constructor(private categories: CategoriesService, private router: Router) {
    // categories.getuser().subscribe((res) => {
    //   localStorage.setItem('KFIRSTNAME', res.firstName);
    //   localStorage.setItem('KEMAIL', res.email);
    //   localStorage.setItem('KPHONE', res.phone);
    //   localStorage.setItem('KCITY', res.city);
    //   this.firstName = localStorage.getItem('KFIRSTNAME');
    //   this.email = localStorage.getItem('KEMAIL');
    //   this.phone = localStorage.getItem('KPHONE');
    //   this.city = localStorage.getItem('KCITY');
    // });
    //
    this.getAllDoctors();
    this.getAllPlayStations();
    this.getAllRestaurants();
  }

  ngAfterViewInit(): void {}
  ngOnInit(): void {}

  getAllPlayStations() {
    this.categories.getAllPlayStations().subscribe((data) => {
      this.cat.push({ name: 'بلاي ستيشن', count: data.length });
    });
  }
  getAllDoctors() {
    this.categories.getAllDoctors().subscribe((data) => {
      this.cat.push({ name: 'دكاترة', count: data.length });
    });
  }
  getAllRestaurants() {
    this.categories.getAllRestaurants().subscribe((data) => {
      this.cat.push({ name: 'مطاعم', count: data.length });
    });
  }
  // logOut() {
  //   localStorage.clear();
  //   this.router.navigate(['']);
  // }
}
