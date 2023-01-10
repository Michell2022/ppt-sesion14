import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

  public titulo = 'Data Binding Interpolation';

  verOcultar = true;

  leerEntrada!:string;

  textoInfo!:string;

  // FUNCION PARA OCULTAR Y MOSTRAR + CAMBIO DE NOMBRE A UN BOTON PARA VER INFO 
  buttonName = 'Ocultar';
  cambiador = true;

  toggle() {
    
    if (this.buttonName === 'Ocultar') {
      this.cambiador=false;
      this.buttonName = 'Mostrar';
    } else if(this.buttonName === 'Mostrar') {
      this.buttonName = 'Ocultar';
      this.cambiador=true;
    }
  }


}
