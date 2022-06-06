import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/interfaz.pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  hayError: boolean = false;
  termino: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  sugerencias(event: any){

  }
  buscarPaisPorCapital(event: string){
    this.paisService.getPaisPorCapital(event).subscribe(respPaises =>{
      this.paises = respPaises;
    })
  }

}
