import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http'

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

  constructor(
    private http: HttpClient
  ) { }

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

  onSubmit() {
    let formData: any = new FormData();
    let type: string = this.create_resolutions_form.get('type')!.value;
    formData.append("resolution_name",this.create_resolutions_form.get('resolution_name')!.value);
    formData.append("resolution_name",type);
    if( type === "progress") {
      formData.append("progress_end", this.create_resolutions_form.get('progress_start')!.value);
      formData.append("progress_end", this.create_resolutions_form.get('progress_end')!.value);
    }
    else {
      formData.append("daily_min", this.create_resolutions_form.get('daily_min')!.value);
      formData.append("daily_goal", this.create_resolutions_form.get('daily_goal')!.value);
    }
    const URL = "http://localhost:3000/resolutions/create";
    this.http.post(URL,formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
