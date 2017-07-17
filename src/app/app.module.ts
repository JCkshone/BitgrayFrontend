import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Routes
import { APP_ROUTING } from './app.routes'

//Services
import { GlobalService } from './services/global.service';

import { AppComponent } from './app.component';
import { EmulatorComponent } from './components/emulator/emulator.component';
import { FormRechargeComponent } from './components/form-recharge/form-recharge.component';
import { NavigatorComponent } from './components/commons/navigator/navigator.component';
import { CostParameterComponent } from './components/cost-parameter/cost-parameter.component';

@NgModule({
  declarations: [
    AppComponent,
    EmulatorComponent,
    FormRechargeComponent,
    NavigatorComponent,
    CostParameterComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdSelectModule,
    BrowserAnimationsModule
  ],
  providers: [
    GlobalService,
    HttpModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
