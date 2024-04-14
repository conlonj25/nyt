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
			{!blackout && (
				<input
					className="border-none text-center focus:outline-none"
					type="text"
					value={letter}
					size={1}
					maxLength={1}
				></input>
			)}
		</div>
	);
};

export default LetterBox;
