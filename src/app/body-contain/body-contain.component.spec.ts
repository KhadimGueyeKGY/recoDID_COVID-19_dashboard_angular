import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContainComponent } from './body-contain.component';

describe('BodyContainComponent', () => {
  let component: BodyContainComponent;
  let fixture: ComponentFixture<BodyContainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
