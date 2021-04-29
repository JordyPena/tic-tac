import Square from "./Square.js"
import { useState } from "react";

const Board = () => {
  //initial state containing an array of 9 nulls
  //corresponding to the 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  let status = (xIsNext ? "Player1 (X) where would you like to move?" : "Player2 (O) where would you like to move?");

  const spaceClicked = (i) => {
    // use slice to create a copy of the squares array to modify 
    //insteaad of modifying the existing array.
    const newSquares = squares.slice();
    //return early by ignoring a click if someone has won the game or if 
    // a square is already filled

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    
  }

  const renderSquare = (index) => {
    return (

      <Square value={squares[index]} onClick={() => spaceClicked(index)} />
    )      
  }

  //given an array of 9 squares this function
  //will check for a winner and return x
  // o or null as appropriate
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares)
  if (winner === "X") {
    status = "Winner: Player1 (X)";
  } else if (winner === "O"){
    status = "Winner: Player2 (O)";
  } else {
    status = (xIsNext ? "Player1 (X) where would you like to move?" : "Player2 (O) where would you like to move?");
  }

  return (
    <div>
      <h3>Welcome! here is your board</h3>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* calling renderSquare function and passing a number as a param */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board;