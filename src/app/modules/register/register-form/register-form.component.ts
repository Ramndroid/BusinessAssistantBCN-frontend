import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoginFormComponent } from '../../login/login-form/login-form.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, 
              private router: Router,
              private f: FormBuilder, 
              private auth: AuthenticationService,
              private modalService: NgbModal) { }

    registerForm!: FormGroup;
    submitted = false;

  ngOnInit(): void {
    this.changingRegisterQueryParams();
    this.createRegisterForm();
  }

  private changingRegisterQueryParams() {
    const queryParams: Params = {
      home: 'register'
    };
    this.router.navigate(
      [],
      {
        queryParams: queryParams,
      });
  }

  // Close Register Modal and navigates to URL /home
  public closeRegisterForm() {
    this.activeModal.close(RegisterFormComponent);
    this.router.navigate(['/home']);
  }

  public createRegisterForm() {
    this.registerForm = this.f.group({
      email: [" ", [Validators.required, Validators.pattern(/^[^@\s]+@[^@\s]+\.[^@\s]{2,3}$/)]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9]+$/)]]
    });
  }

    // Getter method to access formcontrols
    get getControl(): { [key: string]: AbstractControl; } {
      return this.registerForm.controls;
    }

  public submitForm() {
    this.submitted = true;

    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return
    }

    const body = this.registerForm.value;

    this.auth.register(body)
      .subscribe(resp => {
        console.log(resp);
      })

    this.registerForm.reset();
    this.submitted = false;
    this.activeModal.close(RegisterFormComponent);
  }

}