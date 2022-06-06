import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = '';
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject(); //es como un observable pero un poco especial

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)// no emitas el subscribe hasta que pase 300ms 
    )
    .subscribe(valor =>{
      console.log('Debouncer:',valor);
      this.onDebounce.emit(valor);
    })

  }

  teclaPresionada(event: any){
    this.debouncer.next(this.termino); // añadiendo el valor observable 
  }
  buscar(){
    this.onEnter.emit(this.termino);
  }

}
