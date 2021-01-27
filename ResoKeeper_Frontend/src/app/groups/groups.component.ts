import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

interface groupResponse{
  title: string;
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  create_groups_form: FormGroup;
  groups: groupResponse[]=[];
  is_loaded: boolean=false;
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

    this.testData().then(()=>{
      this.is_loaded=true;
    })
  }

  testData(): Promise<groupResponse[]> {
    const URL = "http://localhost:3000/groups";
    return fetch(URL, {method: "GET"})
      .then(res=>res.json())
      .then(groups=>{
        this.groups=groups;
        return groups;
      })
  }
}
