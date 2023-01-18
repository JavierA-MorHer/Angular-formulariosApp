import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre:string;
  favoritos: Favorito[]
}

interface Favorito{
  id:number;
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego:string=''

  persona:Persona = {
    nombre:'Javier',
    favoritos:[
      {id:1, nombre:'The Last Of Us'},
      {id:2, nombre:'FIFA'},
    ]
  }


  
  guardar( miFormulario:NgForm){
    console.log( miFormulario.invalid )
  }

  agregar( ){
   const nuevoFavorito:Favorito = {
    id: this.persona.favoritos.length + 1,
    nombre: this.nuevoJuego
   }

   this.persona.favoritos.push( {...nuevoFavorito} );
   this.nuevoJuego = ''
  }

  eliminar(i:number){
    this.persona.favoritos.splice(i,1)
  }

}
