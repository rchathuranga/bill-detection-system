import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Service } from 'bonjour';
import {ApiserviceService} from '../apiservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private:Service:ApiserviceService,private router:Router) { }
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
    
        // call api signup
       this.service.signup(this.signupForm.value).subscribe((res)=>{
          console.log(res,'res##');
          if(res.status==true)
          {
             this.router.navigate(['tutorial']);
          }
          else
          {
            this.errmsgshow = true;
            this.errmsg = res.msg;
          }
        });
       
     }
     else
     {
        this.errmsgshow = true;
        this.errmsg = 'All Feild Required !!';
     }
  }

}
