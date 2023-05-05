import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private service: ServiceService, private router:Router) {}
  ngOnInit() {}

  userReg(regForm: any) {
    this.service.register(regForm).subscribe((data1: any) => {
      if(data1!=null){
        this.router.navigate(['login'])
      }else{
        alert("error");
      }
    });
  }
}

