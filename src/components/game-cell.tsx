import type { Symbol } from './types'

import GameSymbol from './game-symbol'
interface GameCellProps {
	isWinner?: boolean
	symbol: Symbol | null
	onClick: () => void
}

const GameCell = ({ isWinner, onClick, symbol }: GameCellProps) => {
	return (
		<button className={`cell ${isWinner ? `cell--win` : ''}`} onClick={onClick}>
			{symbol ? <GameSymbol symbol={symbol} /> : null}
		</button>
	)
}

export default GameCell
