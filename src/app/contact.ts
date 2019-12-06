export class Contact {
	constructor(
		public first_name: string,
		public last_name: string,
		public gender: string,
		public email: string,
		public company?: string //?is optional
		){}
}
