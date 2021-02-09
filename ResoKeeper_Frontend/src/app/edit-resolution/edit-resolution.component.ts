import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit-resolution',
  templateUrl: './edit-resolution.component.html',
  styleUrls: ['./edit-resolution.component.scss']
})
export class EditResolutionComponent implements OnInit {
  new_title: string="";
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  editResolution() {
    let data: any={
      new_title: this.new_title,
      title: "Resolution 1"
    }
    const URL = "http://localhost:3000/resolutions";
    let headers=new HttpHeaders();
    headers=headers.append("Content-Type","application/json");
    this.http.patch(URL,JSON.stringify(data), {headers: headers}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
