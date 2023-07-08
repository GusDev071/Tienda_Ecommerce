import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ConsumeApiService } from '../../services/consume-api.service';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';
import { DialogSuccessComponent } from '../dialog-success/dialog-success.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  // Aquí se inicializa el objeto product
  product: Product = {
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    image: 'No se ha seleccionado',
  };

  // Aquí se inicializa el objeto route, consumeApiService y dialog
  // route es para obtener el ID del producto seleccionado desde la ruta
  constructor(
    private route: ActivatedRoute,
    private consumeApiService: ConsumeApiService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el ID del producto seleccionado desde la ruta
    const productId = this.route.snapshot.paramMap.get('id');

    // Obtener los datos del producto utilizando el ID
    if (productId) {
      this.consumeApiService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    }
  }

  // Aquí se obtiene la imagen seleccionada, donde event.target.files[0] es la imagen seleccionada
  seleccionarImagen(event: any) {
    const file = event.target.files[0]; //obtiene el primer archivo en la lista
    this.product.image = file.name; //obtiene el nombre del archivo
  
    const reader = new FileReader(); //FileReader es un objeto que permite leer archivos como datos de URL
    reader.readAsDataURL(file); //Aqui lee el archivo como una URL de datos
    reader.onload = () => {
      this.product.image = reader.result as string; //Asigna el resuiltado de la lectura a la imagen como una cadena
    };
    reader.onerror = (error) => {
      console.error('Error al leer el archivo:', error); //Muestra un error si no se puede leer el archivo en la consola
    };
  }
  

  guardar() {
    // Validar que todos los campos estén llenos
    if (
      !this.product.title ||
      !this.product.price ||
      !this.product.category ||
      !this.product.description ||
      this.product.image === 'No se ha seleccionado'
    ) {
      // Muestra un dialog de error si no se llenaron todos los campos
      this.dialog.open(DialogErrorComponent, {
        data: { message: 'Todos los campos son obligatorios' },
      });
      return;
    }

    if (this.product.id) {
      // Actualizar el producto existente
      this.consumeApiService.updateProduct(this.product).subscribe(
        (response) => {
          console.log(response);
          // Muestra un dialog de éxito si se actualizó el producto
          const dialogRef = this.dialog.open(DialogSuccessComponent, {
            data: { message: 'El producto ha sido actualizado exitosamente' },
          });
          dialogRef.afterClosed().subscribe(() => {
            // Navegar a la ruta del DashboardComponent y pasar como parámetro el producto actualizado
            this.router.navigate([
              '/dashboard',
              { product: JSON.stringify(this.product) },
            ]);
          });
        },
        (error) => {
          console.error(error);
          // Muestra un dialog de error si no se actualizó el producto
          this.dialog.open(DialogErrorComponent, {
            data: { message: 'Ocurrió un error al actualizar el producto' },
          });
        }
      );
    } else {
      // Agregar un nuevo producto
      this.consumeApiService.addProduct(this.product).subscribe(
        (response) => {
          console.log(response);
          // Muestra un dialog de éxito si se guardó el producto
          const dialogRef = this.dialog.open(DialogSuccessComponent, {
            data: { message: 'El producto ha sido guardado exitosamente' },
          });
          dialogRef.afterClosed().subscribe(() => {
            // Navegar a la ruta del DashboardComponent y pasar como parámetro el producto agregado
            this.router.navigate([
              '/dashboard',
              { product: JSON.stringify(this.product) },
            ]);
          });
        },
        (error) => {
          console.error(error);
          // Muestra un dialog de error si no se guardó el producto
          this.dialog.open(DialogErrorComponent, {
            data: { message: 'Ocurrió un error al guardar el producto' },
          });
        }
      );
    }
  }
}
