import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent  {

  termino: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  constructor() { }
  buscar(){
    this.onEnter.emit(this.termino);
  }
}
