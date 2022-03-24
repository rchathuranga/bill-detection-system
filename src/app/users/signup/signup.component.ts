import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
   errmsg:any;
   errmsgshow=false;

  signupForm = new FormGroup ({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)

  });

  ngOnInit(): void {
  }
   
  signupSubmit()
  {
    if(this.signupForm.valid)
     {
       console.log(this.signupForm.value,'signupform###');
       this.errmsgshow=false;
     }
     else
     {
        this.errmsgshow = true;
        this.errmsg = 'All Feild Required !!';
     }
  }

}
