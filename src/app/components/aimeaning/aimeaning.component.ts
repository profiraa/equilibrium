import { Component } from '@angular/core';

@Component({
  selector: 'app-aimeaning',
  templateUrl: './aimeaning.component.html',
  styleUrls: ['./aimeaning.component.css']
})
export class AImeaningComponent {
  
currentYear: any;
constructor() {
  this.currentYear=new Date().getFullYear();
}
}

