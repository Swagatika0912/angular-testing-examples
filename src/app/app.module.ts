import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ItemComponent } from './item/item.component';
import { ProductComponent } from './product/product.component';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducers/product.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ItemComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({product: addProductReducer}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
