/* eslint-disable react/prop-types */
// import { useState } from "react"

export default function ScoreBoard({ scores, setScores}) {
  function resetScores() {
    setScores.setCurrentScore(0);
    setScores.setBestScore(0);
  }
  return (
    <div>
      <div className="main-container">
        <div className="container">
            <div className="current-score-board">
                <h3>Current score</h3>
                <div className="score">
                    <span className="current-score">{scores.currentScore}</span>
                </div>
            </div>
            <div className="best-score-board">
                <h3>Best score</h3>
                <div className="score">
                    <span className="best-score">{scores.bestScore}</span>
                </div>
            </div>
        </div>
        <div className="reset">
            <button className="reset-button" onClick={resetScores}>Reset</button>
        </div>
      </div>
    </div>
  )
}