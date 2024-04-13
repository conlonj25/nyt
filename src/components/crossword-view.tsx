'use client';

import { range, chunk } from 'lodash';
import LetterBox from './letter-box';

type CrosswordViewProps = {
	cols: number;
	rows: number;
	grid: string[];
};

const CrosswordView = ({ cols, rows, grid }: CrosswordViewProps) => {
	const gridChunked = chunk(grid, cols);
	const tableElements = gridChunked.map((row, i) => {
		return (
			<tr className="border" key={`crossword-row-${i}`}>
				{row.map((col, j) => (
					<LetterBox
						key={`crossword-row-${i}-col${j}`}
						letter={col}
					/>
				))}
			</tr>
		);
	});

	return (
		<>
			<h1>Crossword View</h1>
			<table className="border">{tableElements}</table>
		</>
	);
};

export default CrosswordView;
