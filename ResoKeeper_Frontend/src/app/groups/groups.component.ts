import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  create_groups_form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.create_groups_form=new FormGroup({
      type: new FormControl('', Validators.required),
      resolution_name: new FormControl('', Validators.required),
      group_name: new FormControl('',Validators.required),
      progress_end: new FormControl(Validators.required),
      progress_start: new FormControl(Validators.required),
      daily_min: new FormControl(Validators.required),
      daily_goal: new FormControl(Validators.required)
    });
  }

  
}
