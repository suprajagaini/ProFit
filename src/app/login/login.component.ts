import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // loginForm!: FormGroup;
  // constructor() {}
  // ngOnInit(){
  //  this.loginForm = new FormGroup(
  //   {
  //   email: new FormControl('',[Validators.required,Validators.email]),
  //   password : new FormControl('',[Validators.required,Validators.minLength(6)])
  //  }
  //  )
  // }
  // onLogin(){}
  // }
  

  emailId: any;
  password: any;

  constructor() {
  }

  ngOnInit(){
  }

  loginSubmit() {  
    
    if (this.emailId == 'Supraja' && this.password == 'Supraja') {
      alert('Welcome to ProFit Home Page');

      console.log("EmailId : " + this.emailId);
      console.log("Password: " + this.password);

    } else {
      alert('Invalid Credentials');
    }
    
  }
  login(loginForm: any) {
    console.log(loginForm);

    if (loginForm.emailId === 'Supraja' && loginForm.password === 'Supraja') {
      alert('Welcome to ProFit Home Page');

      console.log("EmailId : " + this.emailId);
      console.log("Password: " + this.password);
    } else {
      alert('Invalid Credentials');
    }

  }








}