import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DragDropFileUploadDirective } from './drag-drop-file-upload.directive';
import {ReactiveFormsModule} from "@angular/forms";
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DragDropFileUploadDirective,
    ResultComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
