import { range, chunk } from 'lodash';

type LetterBoxProps = {
	letter: string;
};

const LetterBox = ({ letter }: LetterBoxProps) => {
	const blackout = letter === '.' ? 'bg-black' : '';
	return <td className={`border ${blackout}`}>{letter}</td>;
};

export default LetterBox;
