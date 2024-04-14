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

	const gridColsClassName = `grid grid-cols-[repeat(${cols},_minmax(0,_1fr))]`;

	return (
		<>
			<div className={gridColsClassName}>{tableElements}</div>
		</>
	);
};

export default CrosswordView;
