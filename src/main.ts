/// <reference types="@angular/localize" />

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { ForwardingFormComponent } from './app/components/forwarding-form/forwarding-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ForwardingFormComponent],
  template: `
    <nav class="navbar navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Hongkong Post e-form</span>
      </div>
    </nav>
    
    <main>
      <app-forwarding-form></app-forwarding-form>
    </main>

    <footer class="text-center mt-5 mb-3 text-muted">
      <small>&copy; 5.2026 Terry Ng Version (0.1)</small>
    </footer>
  `,
})
export class App {
  // The logic is now encapsulated within the ForwardingFormComponent
}

bootstrapApplication(App);
