import CrosswordView from '@/components/crossword-view';
import { random } from 'lodash';

async function getData() {
	const year = random(1976, 2017);
	const month = random(1, 12).toString().padStart(2, '0');
	const day = random(1, 31).toString().padStart(2, '0');

	const url = `https://raw.githubusercontent.com/doshea/nyt_crosswords/master/${year}/${month}/${day}.json`;

	const res = await fetch(url);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Home() {
	const data = (await getData()) as GithubResponse;

	return (
		<main className="flex flex-col items-center justify-between gap-5 p-24">
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
		</main>
	);
}
