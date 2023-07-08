import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ConsumeApiService {
  //Aqui se inicializa la url de la API
  url_api = 'https://fakestoreapi.com/products';

  //Aqui se inicializa el objeto http de tipo HttpClient para poder hacer las peticiones a la API
  constructor(private http: HttpClient) {}

  //Aqui se crean los metodos para poder hacer las peticiones a la API
  //Se crea un metodo para obtener todos los productos
  getProducts() {
    return this.http.get<Product[]>(this.url_api);
  }

  //Se crea un metodo para obtener un producto por su id
  getProductById(id: string) {
    return this.http.get<Product>(`${this.url_api}/${id}`);
  }

  //Se crea un metodo para agregar un producto con ayuda del metodo post
  addProduct(product: Product) {
    return this.http.post(this.url_api, product);
  }

  //Se crea un metodo para actualizar un producto con ayuda del metodo put y se le pasa el id del producto
  updateProduct(product: Product) {
    return this.http.put(`${this.url_api}/${product.id}`, product);
  }

  //Se crea un metodo para eliminar un producto con ayuda del metodo delete y se le pasa el id del producto
  deleteProduct(id: number) {
    return this.http.delete(`${this.url_api}/${id}`);
  }
}
