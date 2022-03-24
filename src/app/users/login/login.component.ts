import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  errmsg:any;
  errmsgshow=false; 
  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }
 
  loginSubmit()
  {
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value,'loginvalue##');
      
    }else
    {
      this.errmsgshow=true;
      this.errmsg = 'All Field Required !!!';
    }
  }

}
