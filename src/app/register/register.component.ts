import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  person: any;
  
  constructor() {
    this.person = [
      {Id:101, Name:"Supraja", gender:'Female',   country:'IND', doj:'11-24-2018', emailId:'supraja@gmail.com', password:'123'}, 
      {Id:102, Name:"Pavani",  gender:'Female',   country:'IND', doj:'10-25-2017', emailId:'pavani@gmail.com',  password:'123'}, 
      {Id:103, Name:"Bharath", gender:'Male', country:'IND', doj:'09-26-2016', emailId:'bharath@gmail.com', password:'123'}, 
      {Id:104, Name:"Manisha", gender:'Male',   country:'IND', doj:'08-27-2015', emailId:'manisha@gmail.com', password:'123'}, 
      // {Id:105, Name:"",   salary:6767.67, gender:'Male',   country:'IND', doj:'07-28-2014', emailId:'gopi@gmail.com',   password:'123'}
    ];
  }
  
  ngOnInit(){
  }
   Registration(regFrom: any) {
    console.log(regFrom);
    this.person.push(regFrom);
    console.log(this.person);
  }

}



