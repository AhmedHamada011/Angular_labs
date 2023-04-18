import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ErrorComponent } from './Components/error/error.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailsComponent},
  {path:'adduser',component:AddUserComponent},
  {path:'users/:id/edit',component:UpdateUserComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
