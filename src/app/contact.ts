export class Contact {
	constructor(
		public first_name: string,
		public last_name: string,
		public gender: string,
		public email: string,
		public company?: string //?is optional
		){}
}


export const contacts:Contact[] =  [
	{
		"first_name" : "Manny",
		"last_name" : "Manny",
		"email" : "m@mail.com",
		"gender" : "male",
		"company" : "Linkedin"
	},
	{
		"first_name" : "Mary",
		"last_name" : "Marine",
		"email" : "mary@mail.com",
		"gender" : "female",
		"company" : "Linkedin"
	}
];

export const companies = ['Linkedin', 'Manny Designs', 'Apple', 'Other'];
