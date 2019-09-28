import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // import client

@Injectable({
  providedIn: 'root'
})
export class ApiService { // name of service provider

  constructor(private http:HttpClient) { }

  addCourse (data) {

    return this.http.post("https://dummyapilist.herokuapp.com/addcourse",data)

  }

  viewCourses(){
    return this.http.get("http://dummyapilist.herokuapp.com/getcourses")
  }
}
