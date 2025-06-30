import GameInfo from './components/game-info'
import { useGameState } from './hooks/game-state'
import GameCell from './components/game-cell'
import './App.css'
function App() {
	const {
		cells,
		currentStep,
		winnerSeq,
		winnerSymbol,
		isDraw,
		handleCellClick,
		handleResetClick,
	} = useGameState()

	return (
		<div className='game'>
			<GameInfo
				isDraw={isDraw}
				winnerSymbol={winnerSymbol}
				currentStep={currentStep}
			/>
			<div className='game-field'>
				{cells.map((symbol, idx) => (
					<GameCell
						key={idx}
						symbol={symbol}
						isWinner={!!winnerSeq?.includes(idx)}
						onClick={() => handleCellClick(idx)}
					/>
				))}
			</div>
			<button className='reset' onClick={handleResetClick}>
				Сбросить
			</button>
		</div>
	)
}

export default App
