import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component'; // Import TodoComponent

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent // Declare TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
