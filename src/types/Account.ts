export interface Account {
	id: string; // unique id
	name: string; // custom name (e.g. "My favorite card")
	type: string; // cash, card, crypto, etc.
	currency: string; // USD, EUR, ...
	// balance: integer — stored in the smallest currency unit (e.g., cents).
	// Always an integer, no floating point.
	// To get the exact balance, divide by 100.
	balance: number;
	initialBalance: number;
	status: string; // active, inactive
	createdDate: string;
	closedDate: string;
	lastTransactionDate: string;
	note: string; // custom notes
}
