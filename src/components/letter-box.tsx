import { range, chunk } from 'lodash';

type LetterBoxProps = {
	letter: string | undefined;
	gridNum: number | undefined;
};

const LetterBox = ({ letter, gridNum }: LetterBoxProps) => {
	const isNumbered = gridNum !== 0;
	const isBlackout = letter === '.';
	const blackoutClassName = isBlackout ? 'bg-black' : '';

	return (
		<div
			className={`w-10 h-10 flex items-center justify-center border ${blackoutClassName} relative`}
		>
			{!isBlackout && (
				<>
					{isNumbered && (
						<span className="text-[8px] absolute top-0 left-0">
							{gridNum}
						</span>
					)}
					<input
						className="border-none text-center focus:outline-none"
						type="text"
						value={letter}
						size={1}
						maxLength={1}
					></input>
				</>
			)}
		</div>
	);
};

export default LetterBox;
