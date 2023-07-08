import { Component } from '@angular/core';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss']
})
export class InsertarComponent {
  public title: string = '';
  public price: number = 0;
  public description: string = '';
  public image: string = '';
  public category: string = '';

  insertProduct() {
    fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(
        {
          title: this.title,
          price: this.price,
          description: this.description,
          image: this.image,
          category: this.category
        }
      )
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
  }
}