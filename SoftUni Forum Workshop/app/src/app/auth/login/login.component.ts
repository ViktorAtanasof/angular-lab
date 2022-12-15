import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  appEmailDomains = appEmailDomains;

  constructor(private router: Router, private authService: AuthService) { 
  }
  
  loginHandler(form: NgForm): void {
    if(form.invalid) { return; }
    const { email, password} = form.value;
    this.authService.login(email!, password!)
    .subscribe(user => {
      this.router.navigate(['/theme/recent']);
    });

    this.router.navigate(['/']);
  }

}
