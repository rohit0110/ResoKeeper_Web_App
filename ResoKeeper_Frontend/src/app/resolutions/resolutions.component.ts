import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http'

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

  //ASK PRAECEP HOW TO BE EFFICIENT
  onSubmit() {
    let data: any = {
      title: this.create_resolutions_form.get('resolution_name')!.value,
      type: this.create_resolutions_form.get('type')!.value,
      pro_goal: this.create_resolutions_form.get('progress_end')!.value,
      cal_goal: this.create_resolutions_form.get('daily_goal')!.value,
      username: "Sicarus"
    };
    if ( data.type === "progress") {
      data.cal_goal= 0;
    }
    else {
      data.pro_goal= 0;
    }
    let headers = new HttpHeaders();
    headers=headers.append("Content-type","application/json");
    const URL = "http://localhost:3000/resolutions/create";
    this.http.post(URL,JSON.stringify(data),{headers: headers}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
