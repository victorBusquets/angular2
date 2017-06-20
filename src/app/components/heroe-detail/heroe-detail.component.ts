import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/Heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent {
	heroe:Heroe;

  	constructor( private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) { 
  		this._activatedRoute.params.subscribe( params => {
  			this.heroe = this._heroesService.getHeroe( params['id'] );
  		} );	
  	}

}
