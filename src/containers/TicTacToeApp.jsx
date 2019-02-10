import React from "react";
// import containers and components
import Grid from "../components/grid";
import ResetButton from "../components/resetButton";

class TicTacToeApp extends React.Component {

    constructor(props) {
        super(props);
        // bind functions here
        this.initialiseGameState=this.initialiseGameState.bind(this);
        this.switchPlayer=this.switchPlayer.bind(this);
        this.clickCell=this.clickCell.bind(this);
        this.setCell=this.setCell.bind(this);
        this.cellEmpty=this.cellEmpty.bind(this);
        this.checkForAWinner=this.checkForAWinner.bind(this);
        this.checkArrayEqual=this.checkArrayEqual.bind(this);
        this.getHorizontalLine=this.getHorizontalLine.bind(this);
        this.getVerticalLine=this.getVerticalLine.bind(this);
        this.getDiagonalLines=this.getDiagonalLines.bind(this);
        this.resetState=this.resetState.bind(this);
        this.resetInGameState=this.resetInGameState.bind(this);

        //state location
        this.state = {
            // player 1 is equal to "player1" and player 2 is equal to "player2"
            // this needs to come from a stored global value
            playerTurn: "player1",
            winner: "no-winner",
            // TODO break this out to its own class and determine how to interact with its state
            gameState: [],
            numberOfPlayers: 2,
        };
    };

    // use this to initialse the grid method
    // only when the component loads
    componentDidMount () {
        this.initialiseGameState(3);
    }
    
    resetState () {
        this.setState({gameState: [],playerTurn: "player1",winner: "no-winner"}, 
        this.resetInGameState);
    }
    resetInGameState () {
        this.initialiseGameState(3);
    }
    
    initialiseGameState (width) {
        // validate the input 
        if (typeof width !== "number"){
            throw new Error ("Width must be a number")
        }
        if (width < 3 || width > 5) {
            throw new Error ("Width must be between 3 and 5")
        }

        // start with creating the rows
        for (let y=0; y < 3; y++) {
            // initialise each row with an empty array of 0s
            let eachRow = new Array(3).fill("not-selected");
            let tempGameState = this.state.gameState;
            tempGameState.push(eachRow);
            // ADAM fix this, it will not reset state before setting again
            // understand how to do this. You are not using best practice
            this.setState({gameState: tempGameState})
        }
        console.log(this.state.gameState)
    }

    switchPlayer () {
        if (this.state.playerTurn==="player1") {
            this.setState({playerTurn:"player2"})
        }   
        else if (this.state.playerTurn==="player2") {
            this.setState({playerTurn:"player1"})
        }
    }

    setCell (value) {
        const [ x, y ] = value.split('_');
        if (this.cellEmpty(x,y)) {
            let tempState = this.state.gameState;
            if (tempState[x][y]=="not-selected") {
                tempState[x][y]=this.state.playerTurn;
                this.setState({gameState:tempState})
                return true;
            }
            else {
                return false;
            }
        }
    }

    cellEmpty (x, y) {
        if (this.state.gameState[x][y]==="not-selected") {
            return true;
        }
        else {
            return false;
        }
    }

    clickCell (value) {
        console.log("click cell: "+value)
        if (this.state.winner === "no-winner") {
            if (this.state.playerTurn==="player1") {
                console.log("inside player 1")
                if (this.setCell(value)) {
                    this.checkForAWinner();
                    this.switchPlayer();
                }
            }
            else if (this.state.playerTurn==="player2" && this.state.numberOfPlayers===2) {
                console.log("inside player 1")
                if (this.setCell(value)) {
                    this.checkForAWinner();
                    this.switchPlayer();
                }
            }
        }
    }
    checkArrayEqual (arr) {
        return arr.every( v => v === arr[0] && v !== "not-selected" );
    } 

    getHorizontalLine (arr, index) {
        return arr[index];
    }

    getVerticalLine (arr, index) {
        return  arr.map(x => x[index]);
    }

    getDiagonalLines (arr) {
        let diagonals = { left: [], right: [] };
        for (let i=0; i<arr.length; i++){
            diagonals.left.push(arr[i][i]);
            diagonals.right.push(arr[arr.length-i-1][i]);
            console.log(diagonals.right);
        }
        return diagonals;
    }


    checkForAWinner () {
        let playerWon;
        let array = this.state.gameState;
        let diagonals = this.getDiagonalLines(array)
        if (this.checkArrayEqual(diagonals.left)) {
            this.setState({winner: diagonals.left[0]+"Winner"})
        }
        else if (this.checkArrayEqual(diagonals.right)) {
            this.setState({winner: diagonals.right[0]+"Winner"})
        }
        else {
            for (let i=0;i<array.length;i++) {
                let horizonalArray = this.getHorizontalLine(array, i);
                let veticalArray = this.getVerticalLine(array, i);
                if (this.checkArrayEqual(horizonalArray)) {
                    this.setState({winner: horizonalArray[0]+"Winner"})    
                    break;                
                }
                if (this.checkArrayEqual(veticalArray)) {
                    this.setState({winner: veticalArray[0]+"Winner"})
                    break;  
                }
            }
        }
    }

    render () {
        return (
            <div id="app-wrapper" className={this.state.winner}>
                <Grid playerTurn={this.state.playerTurn} clickCell={this.clickCell} gameState={this.state.gameState}/>
                <ResetButton resetState={this.resetState}/>
            </div>
        )
    }
}

export default TicTacToeApp;