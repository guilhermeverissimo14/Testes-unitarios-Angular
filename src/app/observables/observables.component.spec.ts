import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesComponent } from './observables.component';

describe('ObservablesComponent', () => {
  let component: ObservablesComponent;
  let fixture: ComponentFixture<ObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Criar aplicativo', () => {
    expect(component).toBeTruthy();
  });

  it('Retonar nomes', () => {
    component.getData().subscribe(data => {
      expect(data.length).toEqual(2)
      expect(data[0].name).toEqual('Joaquim');
      expect(data[1].name).toEqual('Luan');
    });
  });
});
