import type { Symbol, Cell } from '../components/types'

export const SYMBOL_X: Symbol = 'X'
export const SYMBOL_O: Symbol = 'O'

export const computeWinner = (cells: Cell[]): number[] | undefined => {
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
