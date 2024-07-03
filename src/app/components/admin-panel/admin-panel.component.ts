import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebareComponent } from '../sidebare/sidebare.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { CategoriesService } from '../../Services/categories.service';
@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebareComponent,
    RouterOutlet,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent implements OnInit {
  userName: any;
  isScreenWide: boolean;
  isBrowser: boolean;
  userInfo: any;
  firstName: any;
  lastName: any;
  email: any;
  city: any;
  phone: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private catService: CategoriesService,
    private router: Router
  ) {
    catService.getuser().subscribe((res) => {
      localStorage.setItem('KFIRSTNAME', res.firstName);
      localStorage.setItem('KEMAIL', res.email);
      localStorage.setItem('KPHONE', res.phone);
      localStorage.setItem('KCITY', res.city);
      this.firstName = localStorage.getItem('KFIRSTNAME');
      this.email = localStorage.getItem('KEMAIL');
      this.phone = localStorage.getItem('KPHONE');
      this.city = localStorage.getItem('KCITY');
    });
    this.isScreenWide = true;
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      ///define your code with window object…..
      this.isScreenWide = window.innerWidth > 1200;
    }
  }
  ngOnInit(): void {
    this.checkScreenWidth();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    if (this.isBrowser) {
      ///define your code with window object…..
      this.isScreenWide = window.innerWidth > 1200; // Adjust the width as needed
    }
  }
  logOut() {
    localStorage.clear();
    // window.location.reload();
    this.router.navigate(['']);
  }
}
