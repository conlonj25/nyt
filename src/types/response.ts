type GithubResponse = {
	acrossmap?: any;
	admin: boolean;
	answers: Answers;
	author: string;
	autowrap?: any;
	bbars?: any;
	circles?: any;
	clues: Answers;
	code?: any;
	copyright: string;
	date: string;
	dow: string;
	downmap?: any;
	editor: string;
	grid: string[];
	gridnums: number[];
	hold?: any;
	id?: any;
	id2?: any;
	interpretcolors?: any;
	jnotes?: any;
	key?: any;
	mini?: any;
	notepad?: any;
	publisher: string;
	rbars?: any;
	shadecircles?: any;
	size: Size;
	title: string;
	track?: any;
	type?: any;
};

type Size = {
	cols: number;
	rows: number;
};

type Answers = {
	across: string[];
	down: string[];
};
