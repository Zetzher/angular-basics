import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  lastHeroDeleted: string = '';

  borrarHeroe(): void {
    this.lastHeroDeleted = this.heroes.shift() || '';
  }
}
