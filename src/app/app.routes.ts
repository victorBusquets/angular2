import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';

const APP_ROUTES:Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'heroe/:id', component: HeroeDetailComponent },
	{ path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);