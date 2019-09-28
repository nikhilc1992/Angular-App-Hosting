import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms'; //  ??????????
import { NavbarComponent } from './navbar/navbar.component';
import { Routes,RouterModule } from '@angular/router'; // ?????????
import { HomeComponent } from './home/home.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { HttpClientModule } from '@angular/common/http'

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'add',component:AddcourseComponent},
  {path:'view',component:ViewcourseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddcourseComponent,
    ViewcourseComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule // ??????????
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
