import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component'; 
import { FooterComponent } from './Footer/footer.component';
import { HomeComponent } from './Home/home.component';
import { SearchComponent } from './Home/Search/search.component';
import { QuickSearchComponent } from './Home/QuickSearch/quicksearch.component';
import { MyUpperPipe } from './pipe/Myupper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    QuickSearchComponent,
    MyUpperPipe
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
