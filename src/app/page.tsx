'use client';

import { getDataFromGithub } from '@/actions/getDataFromGithub';
import CrosswordView from '@/components/crossword-view';
import { useState } from 'react';

const getDataFromLocalStorage = (): GithubResponse | null => {
	const localStorageValue = localStorage.getItem('nyt-crossword');

	if (localStorageValue) {
		return JSON.parse(localStorageValue);
	}

	return null;
};

export default function Home() {
	const [data, setData] = useState<GithubResponse | null>(
		getDataFromLocalStorage()
	);

	localStorage.setItem('nyt-crossword', JSON.stringify(data));

	if (!data) {
		getDataFromGithub().then(setData);
	}

	const onClick = () => {
		getDataFromGithub().then((newData) => {
			setData(newData);
		});
	};

	return (
		<main className="flex flex-col items-center justify-between gap-5 p-24">
			<button onClick={onClick}>Refresh</button>
			{data && (
				<>
					<CrosswordView
						cols={data.size.cols}
						rows={data.size.rows}
						grid={data.grid}
						gridnums={data.gridnums}
					/>
					<div className="p-5 rounded-md bg-emerald-600">
						<div className="text-2xl">Clues Across</div>
						<div className="text-sm">{data.clues.across}</div>
					</div>
					<div className="p-5 rounded-md bg-emerald-600">
						<div className="text-2xl">Clues Down</div>
						<div className="text-sm">{data.clues.across}</div>
					</div>
				</>
			)}
		</main>
	);
}
