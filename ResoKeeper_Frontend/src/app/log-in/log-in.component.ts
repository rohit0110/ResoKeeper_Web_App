import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  log_in_form: FormGroup;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.log_in_form=new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    let formData: any =new FormData();
    formData.append("username",this.log_in_form.get('username')!.value);
    formData.append("password",this.log_in_form.get('password')!.value);
    const URL = "http://localhost:3000/log_in_form"
    this.http.post(URL, formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
