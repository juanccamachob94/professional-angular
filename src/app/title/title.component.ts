import { Component } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: `title.component.html`
})
export class TitleComponent {
  public name : string = 'Juan';
  public edad : number;
  public edades : number[];

  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`
  }
}
