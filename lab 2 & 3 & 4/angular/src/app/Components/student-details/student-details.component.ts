import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent {

  id:any = 0;
  constructor(route:ActivatedRoute){
    this.id = route.snapshot.params["id"];

  }

}
