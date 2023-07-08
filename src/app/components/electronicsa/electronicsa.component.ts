import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-electronicsa',
  templateUrl: './electronicsa.component.html',
  styleUrls: ['./electronicsa.component.scss']
})
export class ElectronicsaComponent implements OnInit {
    electronicsProducts: any[];
    lowestPrice: number;

  constructor(private http: HttpClient) {
    this.electronicsProducts = [];
    this.lowestPrice = 0;
   }

  ngOnInit(): void {
    this.getElectronicsProducts();
  }

  getElectronicsProducts(): void {
    this.http.get<any[]>('https://fakestoreapi.com/products/category/electronics')
      .subscribe(products => {
        this.electronicsProducts = products;
        this.electronicsProducts.sort((a, b) => a.price - b.price);
        this.lowestPrice = this.electronicsProducts[0].price;
      });
  }

}

