import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ServerService } from '../server.service';
import { Observable } from 'rxjs/internal/Observable';

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
  username: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private server: ServerService
  ) { }

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.create_resolutions_form=new FormGroup({
        type: new FormControl('', Validators.required),
        resolution_name: new FormControl('', Validators.required),
        progress_end: new FormControl(Validators.required),
        daily_goal: new FormControl(Validators.required),
    });

    // this.getResolutions().then(()=>{
    //   this.is_loaded=true;
    // })

    if(this.getResolutions()!==[]) {
      this.is_loaded = true;
    }
  }
  
  //GET LIST OF ALL RESOLUTIONS MADE BY USER
  getResolutions(): resolutionResponse[] {
    const URL = "/resolutions";
    this.server.getData(URL).subscribe(
      (res) => {
        this.resolutions = res;
        //return this.resolutions;
      },
      (error) => console.log(error)
    );
    return this.resolutions;
    //return <resolutionResponse[]>;
      // return fetch(URL, {method: "GET", headers: {"Content-Type": "application/json", }})
      // .then(res=> res.json())
      // .then(resolutions => {
      //   this.resolutions = resolutions;
      //   return resolutions;
      // });
   
  } 

  //SUBMIT DATA
  onSubmit() {
    let data: any = {
      title: this.create_resolutions_form.get('resolution_name')!.value,
      type: this.create_resolutions_form.get('type')!.value,
      pro_goal: this.create_resolutions_form.get('progress_end')!.value,
      cal_goal: this.create_resolutions_form.get('daily_goal')!.value,
      username: this.username
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
