import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-perspective',
  templateUrl: './personal-perspective.component.html',
  styleUrls: ['./personal-perspective.component.css']
})
export class PersonalPerspectiveComponent {
currentYear: any;
constructor() {
  this.currentYear=new Date().getFullYear();
}

}
