import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  id:any;
  user:any;
  constructor(public UsersSevice:UsersService, id:ActivatedRoute){

    this.id = id.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.UsersSevice.GetUserById(this.id).subscribe({
      next: (data)=> {
        this.user = data;

      },
      error: (err)=> {console.log(err);
      }
    });
  }


}
