import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm ={
    producto:'a',
    precio:0,
    existencias:0
  }


  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls?.['producto']?.invalid 
           && this.miFormulario?.controls?.['producto']?.touched
  }

  precioValido():boolean{
    return this.miFormulario?.controls?.['precio']?.invalid 
           && this.miFormulario?.controls?.['producto']?.touched

  }


  guardar( miFormulario:NgForm ){

    // console.log(miFormulario.value)
    this.miFormulario.resetForm({
      precio: 0,
      existencias:0
    });
  }

}
