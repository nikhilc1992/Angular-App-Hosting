import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'myAngularApp';
  course = 'fullstack';
  buttonactive=false;

  constructor (){

    setTimeout( ()=>{
      this.buttonactive=true;
    },10000)
  }

  changecourse(){

    this.course='MEAN STACK'
  }

  

  ngOnInit() {
  }

}
