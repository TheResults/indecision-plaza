import { Component } from "@angular/core";
import { FinderService } from "./finder.service";

@Component({
    selector: "food-finder",
    templateUrl: "./food-finder.component.html",
})
export class FoodFinderComponent {
  public foodOptions;
  constructor(private foodSvc: FinderService) { }

  findFood(){
    this.foodSvc.getNearbyFood().forEach((elem)=>{
      console.log(elem);
    })
  }
}