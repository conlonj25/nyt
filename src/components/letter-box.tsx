import { range, chunk } from 'lodash';

type LetterBoxProps = {
	letter: string;
};

const LetterBox = ({ letter }: LetterBoxProps) => {
	const blackout = letter === '.' ? 'bg-black' : '';
	return (
		<div
			className={`w-10 h-10 flex items-center justify-center border ${blackout}`}
		>
			{letter}
		</div>
	);
};

export default LetterBox;
