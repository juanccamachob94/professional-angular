import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: `title.component.html`
})
export class TitleComponent {
  public name : string = 'Juan';
  public edad : number;
  public edades : number[];

  constructor() {
    // this.name = 'Juan';
    // this.edad = 20;
  }

  ngOnInit() {
    this.name = 'Juan';
    this.edad = 20;
  }

  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`
  }
}
