import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyjavaComponent } from './myjava/myjava.component';
import { MaterialModule } from './material.module';
import { MyjavascriptComponent } from './myjavascript/myjavascript.component';
import { DemolaComponent } from './demola/demola.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyjavaComponent,
    MyjavascriptComponent,
    DemolaComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
