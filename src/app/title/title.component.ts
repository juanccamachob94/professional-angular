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
  // public isAvailable :boolean = true;
  // public css_classes :string[] = ['active', 'shadow'];

  public moreInformation : boolean = false;
  public category :string; // mobile web other
  public topics :string[];

  constructor() {
    // this.name = 'Juan';
    // this.edad = 20;
  }

  ngOnInit() {
    this.name = 'Juan';
    this.edad = 20;
    this.category = 'web';
    this.topics = [
      'Fundamentos',
      'Componentes',
      'Directivas',
      'Animaciones',
      'Servicios',
      'RxJS',
      'Binding'
    ];

    // setTimeout(() => this.name = 'pruebax', 3000);
    // setTimeout(() => this.isAvailable = false, 3000);
    // setTimeout(() => this.css_classes = ['shadow'], 3000);
  }

  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`
  }
}
