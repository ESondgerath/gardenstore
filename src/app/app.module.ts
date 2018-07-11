import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
