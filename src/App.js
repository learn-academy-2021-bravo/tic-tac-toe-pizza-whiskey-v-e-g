import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerOne: " ",
      playerTwo: " "
    }
  
  }

//We need a method
//our func need a (value, index)
//we need player 1 na d play2
//we need to intializer 



  // handleGamePlay = (index) => {
  //   const { board,  tresureLocation} = this.state
  //   if(index === tresureLocation){
  //     board[index] = " 🐛"
  //     this.setState({board: board})
  //   }else{
  //     board[index]  = "🦋"
  //   this.setState({ board: board })
  //   //the this.setState is coming from the state data
  //   }
  //}

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameBoard">
          {this.state.squares.map((value, index) => { 
          return(<Square value={value} index={index} key={index}/>)}
          )}
    
        </div>
      </>
    )
  }
}



export default App
