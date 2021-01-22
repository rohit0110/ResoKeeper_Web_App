import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  sign_up_form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.sign_up_form=new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      cpassword: new FormControl('',Validators.required),
    });
  }

 
}
