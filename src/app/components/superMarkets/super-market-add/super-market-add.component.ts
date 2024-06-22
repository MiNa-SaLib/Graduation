import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SuperMarketsService } from '../../../Services/super-markets.service';

@Component({
  selector: 'app-super-market-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './super-market-add.component.html',
  styleUrl: './super-market-add.component.css',
})
export class SuperMarketAddComponent {
  constructor(private http: HttpClient) {}
  // form: FormGroup;
  // constructor(private image: HttpClient, private formBuilder: FormBuilder) {
  //   this.form = this.formBuilder.group({
  //     image: [''],
  //   });
  // }
  // send() {
  //   this.image
  //     .post('https://api.imgur.com/3/image', this.form.get('image')?.value)
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  // }
  processFile(event: any) {
    console.log(event);

    let file = event.target.files[0];
    console.log(file);
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.http
      .post('https://api.imgur.com/3/image', formData)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
