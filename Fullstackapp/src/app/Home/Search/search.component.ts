import { Component } from "@angular/core";
import { ICity } from "src/app/model/location.model";
import { IRest } from "src/app/model/rest.model";
import { HomeService } from "src/app/services/home.services";
@Component
({

    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css',]
})
export class SearchComponent{
    title:string = "Find Best Place Near You";
    cities:ICity[]= []
    restaurants:IRest[]=[]
    disabled:boolean = true
    
    // anything that need to declare
    constructor(private homeService:HomeService){
      console.log(">>>>>inside constructor")
    }

    // when the component will load
    ngOnInit():void{
      console.log(">>>>>inside ngOnInit")
      this.homeService.getCityData()
      .subscribe((data:ICity[]) =>  this.cities = data)
    }

    handleCity(event:Event){
      console.log((event.target as HTMLInputElement).value)
      if((event.target as HTMLInputElement).value !== "default"){
        this.disabled = false
        let stateId = Number((event.target as HTMLInputElement).value)
        try{
          this.homeService.getRestWrtCity(stateId)
          .subscribe((data:IRest[]) =>  this.restaurants = data)
        }catch(err){
          console.log(err)
        }
      }else{
        this.disabled = true
      }
    }
}