import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {path:'listing/:id',component:ListingComponent},
  {path:'',component:HomeComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  providers:[],
  exports:[RouterModule]
})

export class AppRoutingModule{}
