import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forwarding-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  templateUrl: './forwarding-form.html',
})
export class ForwardingFormComponent {
  submitted = false;
  forwardingForm: FormGroup;

  // Mapping the houses from the PDF [cite: 15-31]
  houses = [
    'Wang Yan House',
    'Wang Kin House',
    'Wang Chi House',
    'Wang Sun House',
    'Wang Cheong House',
    'Wang Tai House',
    'Wang Shing House',
    'Wang Tao House',
  ];

  constructor(private fb: FormBuilder) {
    this.forwardingForm = this.fb.group({
      applicantName: ['', Validators.required],
      email: ['', [Validators.email]],
      telNo: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      hkidPassport: ['', [Validators.required, Validators.maxLength(4)]], // Alphabet + 3 digits
      houseName: ['', Validators.required],
      floor: ['', Validators.required],
      flat: ['', Validators.required],
      newAddress: ['', Validators.required],
      declarationAgreed: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    // 2. Set it to true when the user clicks the submit button
    this.submitted = true; 

    if (this.forwardingForm.valid) {
      console.log('Form is valid! Sending data...', this.forwardingForm.value);
      // Here you would connect to your Spring Boot backend later
    }
  }

// This getter returns true if the user has touched a field and it's currently wrong
get hasLiveErrors(): boolean {
  return this.forwardingForm.invalid && 
         (this.forwardingForm.dirty || this.forwardingForm.touched);
}

// Helper for individual field styling
isFieldInvalid(fieldName: string): boolean {
  const control = this.forwardingForm.get(fieldName);
  return !!(control && control.invalid && (control.dirty || control.touched));
}

// Add a getter for easier access to controls in the HTML
get f() { return this.forwardingForm.controls; }
}

