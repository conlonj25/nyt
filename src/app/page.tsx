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
		<main className="flex flex-col items-center justify-between p-24">
			<div className="flex flex-row">
				<CrosswordView
					cols={data.size.cols}
					rows={data.size.rows}
					grid={data.grid}
				/>
				<div className="flex flex-col gap-2">
					<h1>Clues Across</h1>
					<div>
						{data.clues.across.map((el, i) => {
							return `${el}                           `;
						})}
					</div>
					<h1>Clues Down</h1>
					<div>{data.clues.across}</div>
				</div>
			</div>
		</main>
	);
}
