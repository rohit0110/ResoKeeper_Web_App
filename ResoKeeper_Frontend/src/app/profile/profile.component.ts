import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { AuthService } from '../auth.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string;
  constructor(
    private server: ServerService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(!this.authService.isLoggedIn) {
      this.router.navigate(["/log-in"]);
      return;
    }
    this.username=this.authService.getUsername();
  }
}
