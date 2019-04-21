import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarColaboradorComponent } from './cadastrar-colaborador.component';

describe('CadastrarColaboradorComponent', () => {
  let component: CadastrarColaboradorComponent;
  let fixture: ComponentFixture<CadastrarColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
