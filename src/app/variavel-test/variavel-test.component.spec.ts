import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariavelTestComponent } from './variavel-test.component';

describe('VariavelTestComponent', () => {
  let component: VariavelTestComponent;
  let fixture: ComponentFixture<VariavelTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariavelTestComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VariavelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Criar aplicativo', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar o valor inicial da variavel', () => {
    expect(component.Variavel()).toEqual("valor inicial")
  })

});
