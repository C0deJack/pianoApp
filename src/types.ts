export type Key = 'A' | 'B' | 'C'| 'D' | 'E' | 'F' | 'G';

export interface RandomNotesObject {
	asc: number;
	color: 'w' | 'B';
	key: Key[];
	keyNumber: number;
	oct: number;

}

export interface RandomNotes extends Array<RandomNotesObject>{}
