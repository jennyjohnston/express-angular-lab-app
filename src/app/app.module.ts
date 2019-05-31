import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './items/cart.component';
import { Api } from './services/api.service';

const appRoutes: Routes = [
  { path: 'cart-component', component: CartComponent }]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
