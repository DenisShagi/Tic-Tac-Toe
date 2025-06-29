import  { useState } from 'react'
import './App.css'

const SYMBOL_X = 'X'
const SYMBOL_O = 'O'

type Symbol = typeof SYMBOL_X | typeof SYMBOL_O;
type Cell = Symbol | null

const computeWinner = (cells: Cell[]): number[] | undefined => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]
		if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
			return [a, b, c]
		}
	}
}
function App() {
	const [cells, setCells] = useState<Cell[]>(Array(9).fill(null))
	const [currentStep, setCurrentState] = useState<Symbol>(SYMBOL_O)
	const [winnerSeq, setWinnerSeq] = useState<number[] | undefined>()
	const getSymbolClassName = (symbol: string) => {
		if (symbol === SYMBOL_O) return 'symbol--o'
		if (symbol === SYMBOL_X) return 'symbol--x'
		return ''
	}

	const renderSymbol = (symbol: string) => (
		<span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
	)
	const winnerSymbol = winnerSeq ? cells[winnerSeq[0]] : undefined
	const handleCellClick = (idx: number) => {
		if (cells[idx] || winnerSeq)  {
			return
		}
		const cellsCopy = cells.slice()
		cellsCopy[idx] = currentStep

		const winner = computeWinner(cellsCopy)

		setCells(cellsCopy)
		setCurrentState(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O)
		setWinnerSeq(winner)
	}

	const resetState = () => {
		setCells(Array(9).fill(null))
		setWinnerSeq(undefined)
	}
	return (
		<div className='game'>
			<div className='game-info'>
				{winnerSeq ? 'Победитель' : 'Ход'}{' '}
				{renderSymbol(winnerSymbol ?? currentStep)}
			</div>
			<div className='game-field'>
				{cells.map((symbol, idx) => {
					const isWinner = winnerSeq?.includes(idx)
					return (
						<button
							key={idx}
							className={`cell ${isWinner ? `cell--win` : ''}`}
							onClick={() => handleCellClick(idx)}
						>
							{symbol ? renderSymbol(symbol) : null}
						</button>
					)
				})}
			</div>
			<div className='reset-btn-container'>
			<button onClick={resetState}>Сбросить</button>
			</div>
		</div>
	)
}

export default App
