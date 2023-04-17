import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  students:{name:string,age:string}[] = [];

  getStudentData(data:any){

    if(data.name.length > 3 && data.age > 20 && data.age < 40)
    this.students.push(data);

    return this.students;
  }

}
