import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showPassword: boolean = false;

  constructor(private router:Router) { }
  
  // routerLink(){
  //   this.router.navigate(['NavbarComponent'])
  // }
 

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  loginform = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required])
  });


  resetdata() {
    this.loginform.reset();
    console.log(this.loginform.value);
  }
  ngOnInit(): void {

  }

 
  
}