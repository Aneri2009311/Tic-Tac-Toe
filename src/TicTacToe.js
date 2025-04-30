import React, { useState } from 'react'

function TicTacToe() {

  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  let [count, setCount] = useState(0);

  const tictac = (e, num) => {

    // if (data[num] !== "") return; // prevent overriding

    const newData = [...data];

    if (count % 2 === 0) {
      e.target.innerHTML = `<h1>X</h1>`;
      newData[num] = "X";
      setCount(++count);
    }
    else {
      e.target.innerHTML = `<h1>0</h1>`;
      newData[num] = "0";
      setCount(++count);
    }
    setData(newData)

    checkWin(newData);
  }


  const checkWin = (newData) => {
    console.log(newData);
    /////////////////// X win condition //////////////////////

    /// 0 1 2
    if (newData[0] === "X" && newData[1] === "X" && newData[2] === "X") {
      document.getElementById("winner").innerText = "X is Win";
    }
    /// 3 4 5
    else if (newData[3] === "X" && newData[4] === "X" && newData[5] === "X") {
      document.getElementById("winner").innerText = "X is Win";
    }
    /// 6 7 8
    else if (newData[6] === "X" && newData[7] === "X" && newData[8] === "X") {
      document.getElementById("winner").innerText = "X is Win";
    }
    /// 0 3 6
    else if (newData[0] === "X" && newData[3] === "X" && newData[6] === "X") {
      document.getElementById("winner").innerText = "X is Win";
    }
    /// 1 4 7
    else if (newData[1] === "X" && newData[4] === "X" && newData[7] === "X") {
      document.getElementById("winner").innerText = "X is Win";
    }
    /// 2 5 8
    else if (newData[2] === "X" && newData[5] === "X" && newData[8] === "X") {
      document.getElementById("winner").innerText = "X is Win";
    }
    /// 0 4 8
    else if (newData[0] === "X" && newData[4] === "X" && newData[8] === "X") {
      document.getElementById("winner").innerText = "X is Win";
    }
    /// 6 4 2
    else if (newData[6] === "X" && newData[4] === "X" && newData[2] === "X") {
      document.getElementById("winner").innerText = "X is Win";
    }

    //////////////// 0 win condition //////////////////////
    else if (newData[0] === "0" && newData[1] === "0" && newData[2] === "0") {
      document.getElementById("winner").innerText = "0 is Win";
    }
    else if (newData[3] === "0" && newData[4] === "0" && newData[5] === "0") {
      document.getElementById("winner").innerText = "0 is Win";
    }
    /// 6 7 8
    else if (newData[6] === "0" && newData[7] === "0" && newData[8] === "0") {
      document.getElementById("winner").innerText = "0 is Win";
    }
    /// 0 3 6
    else if (newData[0] === "0" && newData[3] === "0" && newData[6] === "0") {
      document.getElementById("winner").innerText = "0 is Win";
    }
    /// 1 4 7
    else if (newData[1] === "0" && newData[4] === "0" && newData[7] === "0") {
      document.getElementById("winner").innerText = "0 is Win";
    }
    /// 2 5 8
    else if (newData[2] === "0" && newData[5] === "0" && newData[8] === "0") {
      document.getElementById("winner").innerText = "0 is Win";
    }
    /// 0 4 8
    else if (newData[0] === "0" && newData[4] === "0" && newData[8] === "0") {
      document.getElementById("winner").innerText = "0 is Win";
    }
    /// 6 4 2
    else if (newData[6] === "0" && newData[4] === "0" && newData[2] === "0") {
      document.getElementById("winner").innerText = "0 is Win";
    }
    else if (count === 9) {
      document.getElementById("winner").innerText = "Draw";
    }


  }
  function reset() {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });


    document.getElementById("winner").innerText = "Winner :";
  }

  return (
    <div className='container'>
      {/* <h1 className='title'>Tic Tac Toe Game</h1> */}
      <div className='board'>
        <div className='row1'>
          <div className='boxes' onClick={(e) => { tictac(e, 0) }}></div>
          <div className='boxes' onClick={(e) => { tictac(e, 1) }}></div>
          <div className='boxes' onClick={(e) => { tictac(e, 2) }}></div>
        </div>
        <div className='row2'>
          <div className='boxes' onClick={(e) => { tictac(e, 3) }}></div>
          <div className='boxes' onClick={(e) => { tictac(e, 4) }}></div>
          <div className='boxes' onClick={(e) => { tictac(e, 5) }}></div>
        </div>
        <div className='row3'>
          <div className='boxes' onClick={(e) => { tictac(e, 6) }}></div>
          <div className='boxes' onClick={(e) => { tictac(e, 7) }}></div>
          <div className='boxes' onClick={(e) => { tictac(e, 8) }}></div>
        </div>
      </div>
      <h1 className='m-st2' id="winner">Winner : </h1>
      <button className='reset' onClick={reset}>Play Again</button>
    </div>
  )
}

export default TicTacToe
