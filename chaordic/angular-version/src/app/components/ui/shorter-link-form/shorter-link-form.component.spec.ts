import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorterLinkFormComponent } from './shorter-link-form.component';

describe('ShorterLinkFormComponent', () => {
  let component: ShorterLinkFormComponent;
  let fixture: ComponentFixture<ShorterLinkFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorterLinkFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorterLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
