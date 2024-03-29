import { Component,OnInit } from "@angular/core";
import { IMeal } from "src/app/model/meal.model";
import { HomeService } from "src/app/services/home.services";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
@Component
({

    selector:'app-quicksearch',
    templateUrl:'./quicksearch.component.html',
    styleUrls:['./quicksearch.component.css',]
})
export class QuickSearchComponent implements OnInit{

    constructor(
        private homeService:HomeService,
        private http: HttpClient
        ){}
        mealData:IMeal[] =[];

        ngOnInit(){
            this.getDataFromApi().subscribe((result) => {
                this.mealData = result
            })
        }
    
        getDataFromApi():Observable<any[]>{
            const apiUrl =  "http://3.17.216.66:4000/quickSearch";
    
            return this.http.get(apiUrl).pipe(
                map((response: any) => {
                    return response
                })
            )
        }

}

