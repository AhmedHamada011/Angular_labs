import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly usersClient:HttpClient) {}

  private readonly Base_URL = "http://localhost:3000/users";


  GetAllUsers(){
    return this.usersClient.get(this.Base_URL);
  }

  GetUserById(id:any){
    return this.usersClient.get(this.Base_URL + "/" + id);
  }

  AddNewUser(newUser:any){
    return this.usersClient.post(this.Base_URL,newUser);
  }

  updateUser(id:any, user:any){
    return this.usersClient.put(this.Base_URL + "/" + id,user);
  }

  deleteUser(id:any){
    return this.usersClient.delete(this.Base_URL + "/" + id);
  }
}
