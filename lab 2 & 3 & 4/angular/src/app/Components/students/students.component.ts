import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent {
  students:any = [
    {name:'ahmed',age:25,phone:'01066362555',address:'cairo',email:'ahmed@test.com'},
    {name:'mohammed',age:20,phone:'01066362556',address:'alex',email:'mohammed@test.com'},
    {name:'samy',age:24,phone:'01066362557',address:'alex',email:'samy@test.com'},
    {name:'sara',age:28,phone:'01066362558',address:'alex',email:'sara@test.com'},
    {name:'asmaa',age:22,phone:'01066362559',address:'cairo',email:'asmaa@test.com'},
  ]
}
