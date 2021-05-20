import React, { Component } from 'react'


class Square extends Component{


handleClick = () =>{
  this.props.playerIcon(this.props.index)
  this.props.player()

}


  render(){
    return(
      <>
        <div className="square" onClick={ this.handleClick}>
          {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
