import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { workerData } from 'worker_threads';
import { CategoriesService } from '../../../Services/categories.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userData: FormGroup;
  formData: FormData;
  data: any;
  roles: any;
  WrongData: any;
  constructor(
    private formGroup: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cat: CategoriesService
  ) {
    this.formData = new FormData();
    this.userData = this.formGroup.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  send() {
    this.formData.set('UserName', this.userData.controls['UserName'].value);
    this.formData.set('Password', this.userData.controls['Password'].value);
    console.log(this.formData.get('UserName'));
    console.log(this.formData.get('Password'));

    this.http
      .post(
        'http://graduationbroject.runasp.net/api/Account/login',
        this.formData
      )
      .subscribe(
        (res) => {
          this.data = res;
          console.log(this.data);

          this.roles = this.data.roles;
          if (this.roles) {
            if (
              this.roles[0] === 'Admin' ||
              this.roles[0] === 'admin' ||
              this.roles[1] === 'Admin' ||
              this.roles[1] === 'admin'
            ) {
              localStorage.setItem(
                'KadmatakUserName',
                this.userData.controls['UserName'].value
              );
              localStorage.setItem('token', this.data.token);
              localStorage.setItem('roles', this.roles[0]);

              this.router.navigate(['/adminPanel']).then(() => {
                window.location.reload();
              });
              // window.location.href = 'http://graduationbroject.runasp.net/admin';
            } else if (this.roles[0] === 'User' || this.roles[0] === 'user') {
              this.WrongData = 'غير مسموح لهذا المستخدم';

              // window.location.href = 'http://graduationbroject.runasp.net/user';
            }
          } else {
            this.WrongData = this.data.message;
          }
        },
        (error) => {}
      );
  }
}
