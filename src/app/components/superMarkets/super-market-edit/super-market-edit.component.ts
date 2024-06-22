import { Component, OnInit } from '@angular/core';
import { SuperMarketsService } from '../../../Services/super-markets.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-super-market-edit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './super-market-edit.component.html',
  styleUrl: './super-market-edit.component.css',
})
export class SuperMarketEditComponent implements OnInit {
  superMarket: any;
  constructor(private superMarketServices: SuperMarketsService) {}
  ngOnInit(): void {
    this.getAllSuperMarkets();
  }
  getAllSuperMarkets() {
    this.superMarketServices.getAllSuperMarkets().subscribe((data) => {
      this.superMarket = data;
      console.log(data);
    });
  }
}
