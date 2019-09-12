import React from 'react';

class Shifumi extends React.Component {

state = {
    player: null,
    computer: null,
    round: 0,
    playerScore: 0,
    computerScore: 0
  }

inputChoice(choice) {
  this.setState(() => {
    return {
      player: choice,
      computer: ["rock", "paper", "scissors"][Math.floor(Math.random()*3)],
      round: this.state.round + 1
    }
  }, () => this.compareChoice())
};

compareChoice() {
  let computer = this.state.computer
  let player = this.state.player

  if (
      (player === 'rock' && computer === 'scissors')
      || (player === 'paper' && computer === 'rock')
      || (player === 'scissors' && computer === 'paper')
    ) {
      this.setState({
        playerScore: this.state.playerScore + 1
      })
    }
    else if ( player !== computer) {
      this.setState({
        computerScore : this.state.computerScore + 1
      })
    }
}


 render() {
   const btn = {
     padding: '0.5rem 1rem',
     margin: '1rem',
   }

   return (
     <div style={{ backgroundColor: 'cadetblue', padding: '3rem' }}>
      Please select an action !
       <div >
         <button style={btn} onClick={()=>this.inputChoice('rock')}>Rock</button>
         <button style={btn} onClick={()=>this.inputChoice('paper')}>Paper</button>
         <button style={btn} onClick={()=>this.inputChoice('scissors')}>Scissors</button>
       </div>
       <div style={{ margin: '1rem' }}>
         <table>
         <div>
         </div>
           <tr>
             <th style={{ padding: '0 1rem' }}>Player's choice</th>
             <th>Computer's choice</th>
           </tr>
           <tr>
             <td>{this.state.player}</td>
             <td>{this.state.computer}</td>
           </tr>
         </table>
         <table>
           <tr>
             <th>Player Score</th>
             <th>Computer Score</th>
           </tr>
           <tr>
             <td>{this.state.playerScore}</td>
            <td>{this.state.computerScore}</td>
           </tr>
         </table>
      </div>
      <div>
        <p> Round: {this.state.round}</p>
      </div>
     </div>
   );
 }

  }

export default Shifumi;
