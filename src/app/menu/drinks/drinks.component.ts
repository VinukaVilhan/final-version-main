import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinksService } from 'src/app/services/drinks.service';
import { Drinks } from 'src/app/shared/models/drinks';
@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  notFoundRedirectUrl = '/menu/drinks';

  drinks: Drinks[] = [];
  constructor(private drinksService: DrinksService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.drinks = this.drinksService.getAllDrinksBySearchTerm(params.searchTerm)
      else if (params.tag)
        this.drinks = this.drinksService.getAllDrinksByTag(params.tag)
      else
        this.drinks = drinksService.getAll();
    })

  }
  ngOnInit(): void {

  }
}
