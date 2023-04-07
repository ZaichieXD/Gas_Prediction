import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBoxComponent } from './inner-box.component';

describe('InnerBoxComponent', () => {
  let component: InnerBoxComponent;
  let fixture: ComponentFixture<InnerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
