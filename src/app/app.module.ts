import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AbouthComponent } from './abouth/abouth.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminprofileComponent } from './admin/adminprofile/adminprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AbouthComponent,
    UserdashboardComponent,
    UserprofileComponent,
    AdmindashboardComponent,
    AdminprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
