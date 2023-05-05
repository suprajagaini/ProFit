import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  emailId: any;
  password: any;

  constructor() {
  }

  ngOnInit(){
  }

  loginSubmit() {  
    if (this.emailId == 'supraja' && this.password == 'supraja') {
      alert('Welcome to Fitness Home Page');

      console.log("EmailId : " + this.emailId);
      console.log("Password: " + this.password);

    } else {
      alert('Invalid Credentials');
    }
  }


  login(loginForm: any) {
    console.log(loginForm);

  
    if (loginForm.emailId === 'supraja' && loginForm.password === 'supraja') {
      alert('Welcome to Fitness Home Page');

      console.log("EmailId : " + this.emailId);
      console.log("Password: " + this.password);
    } else {
      alert('Invalid Credentials');
    }

  }

}
