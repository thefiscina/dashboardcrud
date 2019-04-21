import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemAprovarComponent } from './postagem-aprovar.component';

describe('PostagemAprovarComponent', () => {
  let component: PostagemAprovarComponent;
  let fixture: ComponentFixture<PostagemAprovarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagemAprovarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemAprovarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
