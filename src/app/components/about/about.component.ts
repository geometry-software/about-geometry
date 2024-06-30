import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [fadeInOnEnterAnimation()]
})
export class AboutComponent {

  constructor(private snackBar: MatSnackBar) { }

  readonly phone = '+5548991081987';
  readonly email = 'hellogeometrysoftware@gmail.com';
  readonly git = 'https://github.com/geometry-software';
  readonly address = 'Rua Manoel Severino de Oliveira, 635, Florianópolis, SC, Brasil';
  readonly addressLink = 'https://maps.app.goo.gl/xz22LxsavzD7TDjYA';
  readonly linkedin = 'https://www.linkedin.com/in/msafronov204';

  copy(text: string, type: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open(`${type} copied`, '', {
        panelClass: 'snackbar',
        duration: 2000,
      })
    })
  }

  redirect(link: string) {
    window.open(link, '_blank')?.focus();
  }

}
