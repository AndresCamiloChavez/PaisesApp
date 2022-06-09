import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interfaz.pais';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  constructor(private paiseService: PaisService) { }

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];

  regionActiva: string = '';
  paises: Country[] = [];

  activarRegion(region: string){
    if(region != this.regionActiva){
      this.regionActiva = region;
      this.paises = [];
      this.paiseService.getPaisesByRegion(region).subscribe(dataPaises =>{
        this.paises = dataPaises;
      });
    }
    
    console.log('valor de la region activa', this.regionActiva  );
    // TODO: hacer el llamdado del servicio
  }

}
