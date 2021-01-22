import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {
  create_resolutions_form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.create_resolutions_form=new FormGroup({
        type: new FormControl('', Validators.required),
        resolution_name: new FormControl('', Validators.required),
        progress_end: new FormControl(Validators.required),
        progress_start: new FormControl(Validators.required),
        daily_min: new FormControl(Validators.required),
        daily_goal: new FormControl(Validators.required)
    });
  }
}
