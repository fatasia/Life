import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchtoComponent } from './matchto.component';

describe('MatchtoComponent', () => {
  let component: MatchtoComponent;
  let fixture: ComponentFixture<MatchtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
