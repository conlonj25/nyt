'use client';

import { range, zip } from 'lodash';
import LetterBox from './letter-box';

type CrosswordViewProps = {
	cols: number;
	rows: number;
	grid: string[];
	gridnums: number[];
};

const CrosswordView = ({ cols, rows, grid, gridnums }: CrosswordViewProps) => {
	const gridData = zip(grid, gridnums);
	const tableElements = gridData.map(([letter, gridNum], i) => (
		<LetterBox
			key={`crossword-element-${i}`}
			letter={letter}
			gridNum={gridNum}
		/>
	));

	return (
		<>
			<div className="grid grid-cols-12">{tableElements}</div>
		</>
	);
};

export default CrosswordView;
