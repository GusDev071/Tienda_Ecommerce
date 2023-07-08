import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-joyeria',
  templateUrl: './joyeria.component.html',
  styleUrls: ['./joyeria.component.scss']
})
export class JoyeriaComponent implements OnInit {

  jewelryProducts: any[];
  lowestPrice: number;

  constructor(private http: HttpClient) {
    this.jewelryProducts = [];
    this.lowestPrice = 0;
  }

  ngOnInit(): void {
    this.getJewelryProducts();
  }

  getJewelryProducts(): void {
    this.http.get<any[]>('https://fakestoreapi.com/products/category/jewelery')
      .subscribe(products => {
        this.jewelryProducts = products;
        this.jewelryProducts.sort((a, b) => a.price - b.price);
        this.lowestPrice = this.jewelryProducts[0].price;
      });
  }
}