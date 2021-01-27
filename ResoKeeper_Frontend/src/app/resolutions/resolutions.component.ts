import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface resolutionResponse{
  title: string;
}

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {
  create_resolutions_form: FormGroup;
  resolutions: resolutionResponse[]=[];
  is_loaded: boolean=false;

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

    this.testData().then(()=>{
      this.is_loaded=true;
    })
  }

  testData(): Promise<resolutionResponse[]> {
    const URL = "http://localhost:3000/resolutions";
    return fetch(URL, {method: "GET"})
      .then(res => res.json())
      .then(resolutions => {
        this.resolutions=resolutions;
        return resolutions;
      })
  }

}
