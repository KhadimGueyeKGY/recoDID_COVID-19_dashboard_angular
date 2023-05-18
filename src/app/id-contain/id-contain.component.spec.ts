import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdContainComponent } from './id-contain.component';

describe('IdContainComponent', () => {
  let component: IdContainComponent;
  let fixture: ComponentFixture<IdContainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdContainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
