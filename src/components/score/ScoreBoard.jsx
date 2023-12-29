import { useState } from "react"

export default function ScoreBoard() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div>
      <div className="main-container">
        <div className="container">
            <div className="current-score-board">
                <h3>Current score</h3>
                <div className="score">
                    <span className="current-score">{currentScore}</span>
                </div>
            </div>
            <div className="best-score-board">
                <h3>Best score</h3>
                <div className="score">
                    <span className="best-score">{bestScore}</span>
                </div>
            </div>
        </div>
        <div className="reset">
            <button className="reset-button">Reset</button>
        </div>
      </div>
    </div>
  )
}