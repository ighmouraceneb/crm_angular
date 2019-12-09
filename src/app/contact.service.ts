import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Contact, contacts} from './contact';


@Injectable({//Décorateur qui marque une classe comme disponible pour être fournie et injectée comme dépendance.
  providedIn: 'root'//le service est injecté à la racine à l'initialisation de l'app
})
export class ContactService {//class ContactService : un service qui nous permet la Récupération des data et insertions des nouvelles données

  constructor() {}

  getContacts(): Observable<Contact[]> {
  	return of(contacts).pipe();
  }

  addContact(contact:Contact) {
  	const newContacts = contacts.unshift(contact);
  	return of(newContacts).pipe();
  }
}
