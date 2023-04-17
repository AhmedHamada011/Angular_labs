import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { StudentsComponent } from './Components/students/students.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { Routes, RouterModule } from '@angular/router';

let routes:Routes = [

  {path:'',component:RegisterationComponent},
  {path:'students',component:StudentsComponent},
  {path:'students/:id',component:StudentDetailsComponent},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    StudentsComponent,
    HeaderComponent,
    FooterComponent,
    RegisterationComponent,
    StudentDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
