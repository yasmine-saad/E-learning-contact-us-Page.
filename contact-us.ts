import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
    contactForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            message: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.contactForm.valid) {
            console.log('Form Submitted', this.contactForm.value);
            // Handle form submission, e.g., send to API
        }
    }
}
