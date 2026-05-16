import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardingForm } from './forwarding-form';

describe('ForwardingForm', () => {
  let component: ForwardingForm;
  let fixture: ComponentFixture<ForwardingForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForwardingForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardingForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
