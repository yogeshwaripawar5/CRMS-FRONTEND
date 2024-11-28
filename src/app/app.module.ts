import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './COMPONENT/spinner/spinner.component';
import { HeaderComponent } from './COMPONENT/header/header.component';
import { WatermarkComponent } from './COMPONENT/watermark/watermark.component';
import { BranchInputFormComponent } from './COMPONENT/branch-input-form/branch-input-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BranchInputFormUpdateComponent } from './COMPONENT/branch-input-form-update/branch-input-form-update.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoViewComponent } from './COMPONENT/ro-view/ro-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent,
    WatermarkComponent,
    BranchInputFormComponent,
    BranchInputFormUpdateComponent,
    LoginComponent,
    RoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
