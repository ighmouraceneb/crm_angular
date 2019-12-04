import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	background = '#f5f6fa';
 	header = 'CRM';
  	titre = 'gestion des relations clients';

}
