import Square from "./Square.js"
import { useState } from "react";

const Board = () => {
  //initial state containing an array of 9 nulls
  //corresponding to the 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const status = (xIsNext ? "Player1 (X) where would you like to move?" : "Player2 (O) where would you like to move?");

  const spaceClicked = (i) => {
    // use slice to create a copy of the squares array to modify 
    //insteaad of modifying the existing array.
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    
  }

  const renderSquare = (index) => {
    return (

      <Square value={squares[index]} onClick={() => spaceClicked(index)} />
    )
      
      
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