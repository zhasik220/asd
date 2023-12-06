import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarDisplayComponent} from './car-display/car-display.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {VehicleInputComponent} from "./form-vechile/car-input/vehicle-input.component";
import {CarWrapperComponent} from './car-wrapper/car-wrapper.component';
import {CarEditComponent} from './car-edit/car-edit.component';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthInterceptor} from "./services/auth.interceptor";
import {AppRoutingModule} from "./app-routing.module";
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CarWrapperComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    VehicleInputComponent,
    CarDisplayComponent,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    CarEditComponent,
    RouterModule,
    AppRoutingModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
