import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private rs: RegisterService) { }


  submitData(userObj) {
    console.log(userObj);
    this.rs.doRegister(userObj).subscribe((data) => {
     // tslint:disable-next-line:align
     alert(data["message"]);
    // tslint:disable-next-line:semicolon
    })

  }
}

