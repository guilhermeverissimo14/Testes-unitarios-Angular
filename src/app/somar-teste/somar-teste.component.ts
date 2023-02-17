import { Component } from '@angular/core';

@Component({
  selector: 'app-somar-teste',
  templateUrl: './somar-teste.component.html',
  styleUrls: ['./somar-teste.component.scss']
})
export class SomarTesteComponent {
  somar(a: number, b: number): number {
    return a + b;
  }
}
