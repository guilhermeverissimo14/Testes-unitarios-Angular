import { Component } from '@angular/core';

@Component({
  selector: 'app-variavel-test',
  templateUrl: './variavel-test.component.html',
  styleUrls: ['./variavel-test.component.scss']
})
export class VariavelTestComponent {
    variavel1: string = "atualizando";
    Variavel(variavel2 = "valor inicial"):string{
      return variavel2;
    }
}
