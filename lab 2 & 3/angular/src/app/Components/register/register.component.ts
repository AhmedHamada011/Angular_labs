import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name="";
  age="";

  @Output() registerEvent = new EventEmitter();

  register(){

    this.registerEvent.emit({name:this.name,age:this.age})
  }


}
