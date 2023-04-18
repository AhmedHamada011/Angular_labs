import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {


  id:any;
  user:any;
  validationform:any;
  constructor(public usersService:UsersService, id:ActivatedRoute,private router:Router){

    this.id = id.snapshot.params["id"];

  }

  ngOnInit(): void {
    this.usersService.GetUserById(this.id).subscribe({
      next: (data)=> {
        this.user = data;

        this.validationform = new FormGroup({
          name:new FormControl(this.user.name,[Validators.required]),
          age: new FormControl(this.user.age,[Validators.min(20), Validators.max(40)]),
          email: new FormControl(this.user.email,[Validators.required,Validators.email]),
          phone:new FormControl(this.user.phone,[Validators.required, Validators.minLength(11)]),
        });

      },
      error: (err)=> {console.log(err);
      }
    });
  }

  update(){

    if(this.validationform.valid){
      let name = this.validationform.controls["name"].value;
      let age = this.validationform.controls["age"].value;
      let email = this.validationform.controls["email"].value;
      let phone = this.validationform.controls["phone"].value;

      console.log({name,age,email,phone})

      this.usersService.updateUser(this.id,{name,age,email,phone}).subscribe();

      alert("updated sucessfully");
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
