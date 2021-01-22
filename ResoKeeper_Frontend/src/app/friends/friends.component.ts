import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  find_friends_form=new FormGroup({
    searched_user: new FormControl('')
  });
}
