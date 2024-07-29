import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, MatIconModule, ReactiveFormsModule],
  template: `
    <section class="flex justify-center h-screen w-screen bg-[#e3eff0]">
    <section class="flex flex-col w-7/12 h-full">
      <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold mb-4">Sign up</h2>
          <form [formGroup]="signupForm">
            <div class="mb-4">
              <!-- <label class="block text-sm font-medium text-gray-700">First Name</label> -->
              <input type="text" id="firstname" name="firstname" class="form-control mt-1 p-2 w-full border rounded-md" placeholder="First Name" formControlName="firstname">
            </div>
            <div class="mb-4">
              <!-- <label class="block text-sm font-medium text-gray-700">Last Name</label> -->
              <input type="text" id="lastname" name="lastname" class="form-control mt-1 p-2 w-full border rounded-md" placeholder="Last Name" formControlName="lastname">
            </div>
            <div class="mb-4">
              <!-- <label f class="block text-sm font-medium text-gray-700">Email</label> -->
              <input type="email" id="email" name="email" class="form-control mt-1 p-2 w-full border rounded-md" placeholder="Email" formControlName="email">
            </div>
            <div class="mb-4">
              <!-- <label class="block text-sm font-medium text-gray-700">Password</label> -->
              <input type="password" id="password" name="password" class="form-control mt-1 p-2 w-full border rounded-md" placeholder="Password" formControlName="password">
            </div>
            <div class="mb-4">
              <!-- <label class="block text-sm font-medium text-gray-700">Confirm Password</label> -->
              <input type="password" id="confirmpassword" name="confirmpassword" class="form-control mt-1 p-2 w-full border rounded-md" placeholder="Confirm password" formControlName="confirmpassword">
            </div>
            <p class="text-center mb-4">By signing up, I accept the Terms & Privacy policies</p>
            <button type="submit" (click)="submitSignupData()" class="bg-[#0f3438] w-full text-white px-4 py-2 rounded-md hover:bg-[#3f686c]">Signup Free</button>
          </form>
          <p class="mt-4 text-center font-bold">OR</p>
          <!-- Google login button (you can customize this) -->
          <button class="flex items-center justify-center gap-3 mt-4 w-full bg-white text-black px-4 py-2 rounded border">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/></svg>
              <span>Sign in with Google</span>
            </button>
          <a [routerLink]="['/login']">
            <p class="mt-4 text-center">Already have an account? Login here</p>
          </a>
        </div>
      </div>
    </section>
    </section>
  `,
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;
  constructor() {
    this.signupForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmpassword: new FormControl(''),
    });
  }
  submitSignupData(){
    console.log(this.signupForm.value);
    // You can save the data to the database here.
  }
}
