import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.scss']
})
export class RopaComponent implements OnInit{
    ropaProducts: any[];
    lowestPrice: number;

  constructor(private http: HttpClient) {
    this.ropaProducts = [];
    this.lowestPrice = 0;
    }

    ngOnInit(): void {
    this.getRopaProducts();
    }

    getRopaProducts(): void {
    this.http.get<any[]>('https://fakestoreapi.com/products/category/clothing')
        .subscribe(products => {
        this.ropaProducts = products;
        this.ropaProducts.sort((a, b) => a.price - b.price);
        this.lowestPrice = this.ropaProducts[0].price;
        });
    }
}
