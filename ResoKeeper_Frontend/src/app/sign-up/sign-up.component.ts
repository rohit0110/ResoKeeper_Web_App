import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  sign_up_form: FormGroup;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.sign_up_form=new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      cpassword: new FormControl('',Validators.required),
    });
  }

  onSubmit() {
    let data: any = {
      name: this.sign_up_form.get("name")!.value,
      email: this.sign_up_form.get("email")!.value,
      username: this.sign_up_form.get("username")!.value,
      password: this.sign_up_form.get("password")!.value
    };
    // formData.append("name",this.sign_up_form.get("name")!.value);
    // formData.append("email",this.sign_up_form.get("email")!.value);
    // formData.append("username", this.sign_up_form.get("username")!.value);
    // formData.append("password", this.sign_up_form.get("password")!.value);
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    // console.log(formData.get("username"));
    const URL = "http://localhost:3000/sign_up_form";
    this.http.post(URL,JSON.stringify(data),{headers: headers}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
