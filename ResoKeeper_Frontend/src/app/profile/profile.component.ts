import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string;
  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.server.request('GET', '/log_in_form').subscribe((user: any) => {
      console.log(user);
      if(user) {
        this.username = user.username;
      }
    });
  }

}
