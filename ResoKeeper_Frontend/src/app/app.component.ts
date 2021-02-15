import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ResoKeeper';
  constructor() {}
}
