import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particular-resolution',
  templateUrl: './particular-resolution.component.html',
  styleUrls: ['./particular-resolution.component.scss']
})
export class ParticularResolutionComponent implements OnInit {
  is_editing: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
