import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShorterComponent } from './home-shorter.component';

describe('HomeShorterComponent', () => {
  let component: HomeShorterComponent;
  let fixture: ComponentFixture<HomeShorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
