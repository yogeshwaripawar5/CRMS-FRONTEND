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

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent,
    WatermarkComponent,
    BranchInputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
