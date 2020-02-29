import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private rs: RegisterService, private router: Router) { }


  submitData(userObj) {
    console.log(userObj);
    // make a call to doRegister and subscribe the observable retuen by it
    this.rs.doRegister(userObj).subscribe((data) => {
      console.log(data);
      if (data['message']=="user created successifully") {
          // tslint:disable-next-line:align
     alert(data["message"]);
     // tslint:disable-next-line:semicolon
    // redurect to login page
    this.router.navigate(['/login']);
      }
   else {
     alert(data['message']);
   }
    });

  }
}

