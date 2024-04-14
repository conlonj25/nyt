'use server';

import { random } from 'lodash';

export const getDataFromGithub = async (): Promise<GithubResponse> => {
	const year = random(1976, 2017);
	const month = random(1, 12).toString().padStart(2, '0');
	const day = random(1, 31).toString().padStart(2, '0');

	const url = `https://raw.githubusercontent.com/doshea/nyt_crosswords/master/${year}/${month}/${day}.json`;

	const res = await fetch(url);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};
