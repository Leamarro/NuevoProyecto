import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

 @Input() numero:number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar( valor: number) {
    if (this.numero >= 100 && valor > 0){
      return
    } else {
      if (this.numero <= 0 && valor < 0){
        return
      }
    }
    this.numero = this.numero + valor;
  }

}

