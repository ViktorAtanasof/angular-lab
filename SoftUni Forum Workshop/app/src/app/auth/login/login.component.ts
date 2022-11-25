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
    this.authService.user = {
      username: 'Peter'
    } as any;

    this.router.navigate(['/']);
  }

}
