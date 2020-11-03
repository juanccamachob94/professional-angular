import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-title',
  templateUrl: `title.component.html`,
  // styles: ['h1 { font-family: Roboto;}']
  styleUrls: ['title.component.scss']
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
