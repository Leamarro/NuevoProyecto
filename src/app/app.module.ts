
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';

//rutas




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
