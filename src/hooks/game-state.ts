import { useState } from 'react'
import type { Symbol, Cell } from '../components/types'
import { SYMBOL_X, SYMBOL_O, computeWinner } from '../shared/utils'

export function useGameState() {
	const [cells, setCells] = useState<Cell[]>(Array(9).fill(null))
	const [currentStep, setCurrentState] = useState<Symbol>(SYMBOL_O)
	const [winnerSeq, setWinnerSeq] = useState<number[] | undefined>()
	const [isDraw, setIsDraw] = useState<boolean>(false)

	const winnerSymbol: Symbol | undefined =
		winnerSeq && cells[winnerSeq[0]] !== null
			? (cells[winnerSeq[0]] as Symbol)
			: undefined

	const handleCellClick = (idx: number) => {
		if (cells[idx] || winnerSeq) {
			return
		}

		const cellsCopy = cells.slice()
		cellsCopy[idx] = currentStep

		const winner = computeWinner(cellsCopy)
		setCells(cellsCopy)
		setWinnerSeq(winner)
		if (!cellsCopy.includes(null) && !winner) {
			setIsDraw(true)
		}
		setCurrentState(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O)
	}

	const handleResetClick = () => {
		setCells(Array(9).fill(null))
		setWinnerSeq(undefined)
		setIsDraw(false)
	}

	return {
		cells,
		currentStep,
		winnerSeq,
		winnerSymbol,
		isDraw,
		handleCellClick,
		handleResetClick,
	}
}
