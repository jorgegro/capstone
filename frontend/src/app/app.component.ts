import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onLogoutClick(){
     this.authService.logout();
     swal({
      type: 'success',
      title: 'You are logged out!',
      timer: 3000,
    });
    this.router.navigate(['/login']);
    return false;
  }
}
