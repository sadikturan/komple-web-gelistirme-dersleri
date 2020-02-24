import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { InputEmailDirective } from './input-email.directive';

@NgModule({
  declarations: [
    ProductComponent,
    InputEmailDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
