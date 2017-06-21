import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe, FilterHeroe } from '../../services/Heroes.service';


@Component({
  selector: 'app-heroes-filtered',
  templateUrl: './heroes-filtered.component.html',
  styleUrls: ['./heroes-filtered.component.css']
})
export class HeroesFilteredComponent implements OnInit{
	filter:FilterHeroe;
	heroesFilterd:Heroe[];

  	constructor( 
                  private _activatedRoute:ActivatedRoute,
                  private _heroesService:HeroesService,
                  private _router:Router ) { 
  		this._activatedRoute.params.subscribe( params => {
  			this.filter = {
  				'key': params['key'] ,
  				'value': params['value']
  			};
  		});	

      this._router.events.subscribe((val) => {
        this.getFilteredHeroes();
      });
    }

    ngOnInit() {
      this.getFilteredHeroes();
  	}

    getFilteredHeroes(){
      this.heroesFilterd = this._heroesService.getFilteredHeroes( this.filter );
      console.log(this.heroesFilterd);
    }

}
