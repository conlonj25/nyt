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
	// const tableElements = gridChunked.map((row, i) => {
	// 	return (
	// 		<tr className="border" key={`crossword-row-${i}`}>
	// 			{row.map((col, j) => (
	// 				<LetterBox
	// 					key={`crossword-row-${i}-col${j}`}
	// 					letter={col}
	// 				/>
	// 			))}
	// 		</tr>
	// 	);
	// });

	const tableElements = grid.map((x, i) => (
		<LetterBox key={`crossword-element-${i}`} letter={x} />
	));

	return (
		<>
			<div className="grid grid-cols-12">{tableElements}</div>
		</>
	);
};

export default CrosswordView;
