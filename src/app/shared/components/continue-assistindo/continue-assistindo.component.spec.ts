import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueAssistindoComponent } from './continue-assistindo.component';

describe('ContinueAssistindoComponent', () => {
  let component: ContinueAssistindoComponent;
  let fixture: ComponentFixture<ContinueAssistindoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinueAssistindoComponent]
    });
    fixture = TestBed.createComponent(ContinueAssistindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
