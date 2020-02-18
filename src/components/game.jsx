import React, {Component} from 'react';
import Board from './board';

const calculateWinner = () => {
    return
}
class Game extends Component {

    state = {
        history: [{squares: Array(9).fill(null)}],
        stepNumber: 0,
        xIsNext: true
    };

    handleClick = i => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if(calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'x' : 'o'
        this.setState({
            history: history.concat([{squares}]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        return(
            <div>
                <h1>Game Component</h1>
                <Board onClick={this.handleClick} squares={this.state.history[0]}/>
            </div>  
        );
    }
}

export default Game;