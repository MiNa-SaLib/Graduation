import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  userName: any;
  isScreenWide: boolean;
  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isScreenWide = true;
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.userName = localStorage.getItem('KadmatakUserName');
      ///define your code with window object…..
      this.isScreenWide = window.innerWidth <= 1200;
    }
  }
  ngOnInit(): void {
    this.checkScreenWidth();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
    console.log(window.innerWidth);
  }

  private checkScreenWidth(): void {
    if (this.isBrowser) {
      ///define your code with window object…..
      this.isScreenWide = window.innerWidth <= 1200;
    } // Adjust the width as needed
  }
}
