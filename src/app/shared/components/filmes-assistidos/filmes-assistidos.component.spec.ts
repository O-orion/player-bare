import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesAssistidosComponent } from './filmes-assistidos.component';

describe('FilmesAssistidosComponent', () => {
  let component: FilmesAssistidosComponent;
  let fixture: ComponentFixture<FilmesAssistidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmesAssistidosComponent]
    });
    fixture = TestBed.createComponent(FilmesAssistidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
