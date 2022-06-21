import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signinForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.buildBasicForm();
  }

  buildBasicForm() {
    this.signinForm = this.fb.group({
      email: ['test@example.com', Validators.required],
      password: ['1234', Validators.required],
    });
  }

  signin() {
    this.auth.signin(this.signinForm.value).subscribe(
      (res) => {
        this.router.navigateByUrl('/image/add-image');
      },
      (err) => {
        err == 'invalidEmail'
          ? this.signinForm.controls['email'].setErrors({ invalidEmail: true })
          : this.signinForm.controls['password'].setErrors({
              invalidPassword: true,
            });
      }
    );
  }
}
