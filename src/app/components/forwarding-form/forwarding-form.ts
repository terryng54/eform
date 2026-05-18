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
    { value: 'Wang Yan House', label: '宏仁閣 Wang Yan House' },
    { value: 'Wang Kin House', label: '宏建閣 Wang Kin House' },
    { value: 'Wang Chi House', label: '宏緻閣 Wang Chi House' },
    { value: 'Wang Sun House', label: '宏新閣 Wang Sun House' },
    { value: 'Wang Cheong House', label: '宏昌閣 Wang Cheong House' },
    { value: 'Wang Tai House', label: '宏泰閣 Wang Tai House' },
    { value: 'Wang Shing House', label: '宏盛閣 Wang Shing House' },
    { value: 'Wang Tao House', label: '宏道閣 Wang Tao House' }
  ];
  

  constructor(private fb: FormBuilder) {
    this.forwardingForm = this.fb.group({
      applicantName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.email]],
      telNo: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      hkidPassport: ['', [
        Validators.required, 
        Validators.pattern('^[a-zA-Z][0-9]{3}$')
      ]],
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

