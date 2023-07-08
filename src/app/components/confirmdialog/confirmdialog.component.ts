import { Component, Inject } from '@angular/core';
//Aqui se importa el MatDialogRef y MAT_DIALOG_DATA, el primero es para pasar el dialogo y el segundo es para pasar los datos
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
})
export class ConfirmdialogComponent {
  //Aqui se inicializa el objeto data y se inyecta en el constructor
  constructor(
    public dialogRef: MatDialogRef<ConfirmdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  //Aqui se cierra el dialogo
  onNoClick(): void {
    this.dialogRef.close();
  }
}
