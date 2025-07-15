import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NumberOnly } from '../directives/number-only';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ReactiveFormsModule, NumberOnly],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    query: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(150)])
  })
  isSubmit: boolean = false;
  success: boolean = false;
  onSubmit() {
    this.isSubmit = true
    if (this.contactForm.valid) {
      this.success = true
      setTimeout(() => {
        this.success = false;
        this.isSubmit = false;
        this.contactForm.reset();

      }, 2000);
    }


  }
  textLength: any = 0;
  getLength() {
    this.textLength = this.contactForm.get('query')?.value?.length
  }
}
