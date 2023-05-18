import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyIdComponent } from './body-id.component';

describe('BodyIdComponent', () => {
  let component: BodyIdComponent;
  let fixture: ComponentFixture<BodyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
