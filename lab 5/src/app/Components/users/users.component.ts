import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users:any;
  deletedId:any;

  constructor(public usersService:UsersService, private router:Router){}

  ngOnInit(): void {
    this.usersService.GetAllUsers().subscribe({
      next: (data)=> {
        this.users = data;
      },
      error: (err)=>{console.log(err);}
    })
  }

  confirmDelete(event:any){

    this.deletedId = event.target.id;
  }

  deleteEvent(e:any){

    console.log("dddd");

    this.usersService.deleteUser(this.deletedId).subscribe();
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/users']);
  });

  }



}
