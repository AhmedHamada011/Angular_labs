import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {


  constructor(public usersService:UsersService, private router:Router){}

  name:any;
  validationform = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    age: new FormControl(null,[Validators.min(20), Validators.max(40)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required, Validators.minLength(11)]),
  })

  add(){

    if(this.validationform.valid){
      let name = this.validationform.controls["name"].value;
      let age = this.validationform.controls["age"].value;
      let email = this.validationform.controls["email"].value;
      let phone = this.validationform.controls["phone"].value;

      this.usersService.AddNewUser({name,age,email,phone}).subscribe();

      alert("added successfully");
      this.router.navigateByUrl('/users');

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

  get phoneValid(){
    return this.validationform.controls["phone"].valid;
  }

}
