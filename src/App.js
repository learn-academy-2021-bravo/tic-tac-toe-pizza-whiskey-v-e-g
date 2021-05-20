import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      playerOne: false,
    }
  
  }
  
  changePlayer= () => {
    this.setState({playerOne:!this.state.playerOne})
  }

  playerIcon = (index) =>  {
    const {squares, playerOne} = this.state;
    squares[index] = playerOne ? "🍕" : "🥃"

    }
  

//We need a method
//our func need a (value, index)
//we need player 1 na d play2
//we need to intializer 

  render(){
   
    return(
      <>
        <h1>Tic Tac Toe</h1>
      {/* if player one is true, show "player one it's your turn"  */}
      {this.state.playerOne && <p>Player one it's your turn</p>}
      {this.state.playerOne == false && <p>Player two it's your turn</p>}

        <div className="gameBoard">
          {this.state.squares.map((value, index) => { 
          return(
          <Square 
          value={value} index={index} key={index} playerIcon={this.playerIcon} player={this.changePlayer}/>)}
          )}
    
        </div>
      </>
    )
  }
}



export default App
