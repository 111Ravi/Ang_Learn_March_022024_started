import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component'; 
import { FooterComponent } from './Footer/footer.component';
import { HomeComponent } from './Home/home.component';
import { SearchComponent } from './Home/Search/search.component';
import { QuickSearchComponent } from './Home/QuickSearch/quicksearch.component';
import { MyUpperPipe } from './pipe/myupper.pipe';
import { HomeService } from './services/home.services';
import { ListingComponent } from './listing/listing.component';
import { AppRoutingModule } from './app-routing.module';
import { listingService } from './services/listing.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    QuickSearchComponent,
    MyUpperPipe,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HomeService,
  listingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
