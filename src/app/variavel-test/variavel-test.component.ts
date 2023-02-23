import { Component } from '@angular/core';

@Component({
  selector: 'app-variavel-test',
  templateUrl: './variavel-test.component.html',
  styleUrls: ['./variavel-test.component.scss']
})
export class VariavelTestComponent {
    Variavel(variavel1 = "valor inicial"):string{
      return variavel1;
    }
}
