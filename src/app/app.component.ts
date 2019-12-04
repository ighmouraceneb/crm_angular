import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [
  	trigger('headerAnimation',[
  		state('inactive', style({
  			transform: 'scale(1)'
  		})),
  		state('active', style({
  			transform: 'scale(1.5)'
  		})),
  		transition('active <=> inactive', animate('500ms ease-in-out')),
  		
  	])
  ]
})
export class AppComponent {
	background = '#f5f6fa';
 	header = 'CRM';
  	titre = 'gestion des relations clients';
  	headerState = 'inactive';

  	animateHeader() {
  		this.headerState = (this.headerState === 'inactive'? 'active' : 'inactive');
  	}

}
