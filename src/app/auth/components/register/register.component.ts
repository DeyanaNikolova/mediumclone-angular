import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    udername: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}
}
