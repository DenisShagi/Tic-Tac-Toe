import type { Symbol } from './types'
interface GameSymbolProps {
	symbol: Symbol
}

const getSymbolClassName = (symbol: string) => {
	if (symbol === 'O') return 'symbol--o'
	if (symbol === 'X') return 'symbol--x'
	return ''
}

const GameSymbol = ({ symbol }: GameSymbolProps) => {
	return (
		<span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
	)
}

export default GameSymbol