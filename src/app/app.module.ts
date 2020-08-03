import { CfModule } from './cf/cf.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactFormComponent } from './react-form/react-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
