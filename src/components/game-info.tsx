import GameSymbol from './game-symbol'
import type { Symbol } from './types'

interface GameInfoProps {
	isDraw?: boolean;
	winnerSymbol?: Symbol;
	currentStep: Symbol
}

const GameInfo = ({ isDraw, winnerSymbol, currentStep }: GameInfoProps) => {
	if (isDraw) {
		return <div className='game-info'>Ничья</div>
	}
	if (winnerSymbol) {
		return (
			<div className='game-info'>
				Победитель: <GameSymbol symbol={winnerSymbol} />
			</div>
		)
	}
	return (
		<div className='game-info'>
			Ход: <GameSymbol symbol={currentStep} />
		</div>
	)
}

export default GameInfo
