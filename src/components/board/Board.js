import React, { useState } from "react";
import Square from "../squares/Square";

export default function Board({ title, color }) {
  // Create a state which will tag the 9 squares as array items thus giving index positions
  // Empty squares will be tagged as null
  // Clicked squares will either be X or O
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Define a state to keep track of the player
  const [isNext, setIsNext] = useState(true);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [a, b, c] = WIN_CONDITIONS[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  // This function should create a copy of our squares array.
  // We can create copies of arrays using array spreading or array.map()
  // Then, this method utilizes the copy to add the value (X or O) to the clicked square.
  // If the value is added, we then need to inform React that our component has an update by updating the state.
  function handleClick(i) {
    // Returning early to stop overwriting if a square is already clicked.
    if (squares[i] || checkWinner(squares)) {
      return;
    }

    // Copy the squares array using array spreading
    const nextSquares = [...squares];

    // Switching players
    nextSquares[i] = isNext ? "X" : "O";

    // Update the state with the new squares array and switch the player
    setSquares(nextSquares);
    setIsNext(!isNext);
  }

  const winner = checkWinner(squares);

  return (
    <>
      <h4 style={{ color: color }}>{title}</h4>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      {winner && <p>{`Winner: ${winner}`}</p>}
    </>
  );
}
