import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) { }

  newThemeHandler(form: NgForm): void {
    if (form.invalid) { return; }
    const { themeName, postText } = form.value;

    this.themeService.createTheme(themeName, postText)
      .subscribe(() => {
        this.router.navigate(['/theme/recent'])
      })
  }
}