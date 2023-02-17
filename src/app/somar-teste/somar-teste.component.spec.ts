import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomarTesteComponent } from './somar-teste.component';

describe('SomarTesteComponent', () => {
  let component: SomarTesteComponent;
  let fixture: ComponentFixture<SomarTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomarTesteComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SomarTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // beforeEach(() => {
  //   component = new MeuComponenteComponent();
  // });

  it('deve criar o aplicativo', () => {
    expect(component).toBeTruthy();
  });

  it('deve somar dois números corretamente', () => {
    expect(component.somar(2, 3)).toEqual(5);
  });
});
