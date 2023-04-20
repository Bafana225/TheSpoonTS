import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
  
    // Vérifiez si l'email et le mot de passe sont corrects
    if (email === 'admin@gmail.com' && password === '123') {
      // Si l'utilisateur est admin, redirigez-le vers la page d'accueil de l'administrateur
      this.router.navigate(['/home']);
    } else if (email === 'user@gmail.com' && password === '123') {
      // Si l'utilisateur est un simple utilisateur, redirigez-le vers la page d'accueil de l'utilisateur
      this.router.navigate(['/home']);
    } else {
      // Si les informations d'identification sont incorrectes, afficher une boîte de dialogue et effacer les champs de saisie
      alert('Email ou mot de passe incorrect');
      (<HTMLInputElement>document.getElementById('email')).value = '';
      (<HTMLInputElement>document.getElementById('password')).value = '';
    }
  }
  
}
