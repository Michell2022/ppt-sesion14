import { Component } from '@angular/core';

@Component({
  selector: 'app-hijoppt15',
  templateUrl: './hijoppt15.component.html',
  styleUrls: ['./hijoppt15.component.css']
})
export class Hijoppt15Component {

  //VARIABLE INICIALIZADA CON EL TITULO
  titulo = 'Data Binding Interpolation';

  //ESTA VARIABLE CONTENDRA EL TEXTO QUE SE MOSTRARA EN EL TEXTAREA
  textoInfo: string = "El two-way data binding en Angular nos permite modificar el valor de una propiedad de "+
                      "forma bidireccional, de forma que cuando nosotros modificamos el valor de una propiedad "+
                      "en la vista el valor también se actualiza en el modeo de datos.";

  // FUNCION PARA OCULTAR Y MOSTRAR + CAMBIO DE NOMBRE A UN BOTON PARA VER INFO 
  buttonName = 'Ocultar';
  cambiador = true;

  toggle() {

    if (this.buttonName === 'Ocultar') {
      this.cambiador = false;
      this.buttonName = 'Mostrar';
    } else if (this.buttonName === 'Mostrar') {
      this.buttonName = 'Ocultar';
      this.cambiador = true;
    }
  }
}
