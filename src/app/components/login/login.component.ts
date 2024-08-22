import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';
  
  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    // Implement your login logic
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: result => {
        console.log(result);
        
        if (result) {
          this.loginError = '';
          // go to the app development page
          this.router.navigate(['/home']);
        }
      },
      error: err => {
        this.loginError = err;
      }
    });

    // this.router.navigate(['/home']); // Redirect to the home page or any other component
  }
}
