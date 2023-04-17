import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styles: [
  ]
})
export class RegisterationComponent {

  validationform = new FormGroup(
    {
      name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
      age: new FormControl(null,[Validators.min(20), Validators.max(40)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
    }
  )

  add(){
    console.log(this.validationform);

    if(this.validationform.valid){
      alert("student added successfully");
    }
  }

  get nameValid(){
    return this.validationform.controls["name"].valid;
  }

  get ageValid(){
    return this.validationform.controls["age"].valid;
  }

  get emailValid(){
    return this.validationform.controls["email"].valid;
  }

}
