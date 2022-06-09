import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interfaz.pais';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscarPorPais(paisName: string){

    this.paisesSugeridos = [];
    this.termino = paisName;
    this.hayError = false;
    this.paisService.getPaisByName(this.termino).subscribe( data =>{
      this.paises = data;
      console.log('Valor de los datos ', data);
    }, error =>{
      this.paises = []
      this.hayError = true;
      console.error('Ocurrió un error',error);
    })
  }
  sugerencias(value: any){
    this.hayError = false;
    this.paisService.getPaisByName(value).subscribe( dataPaises =>{
      this.paisesSugeridos = [];
      if(dataPaises.length>0){
        this.paisesSugeridos = dataPaises.splice(0,3);
      }
    });

  }

}
