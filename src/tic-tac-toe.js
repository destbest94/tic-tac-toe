class TicTacToe {
    constructor() {
        this.player = true;
        this.winner = null;
        this.finish = false;
        this.turns = 0;
        this.fields = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

    }

    getCurrentPlayerSymbol() {
        return this.player ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) != null) return;

        this.fields[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.turns++;
        this.player = !this.player;
        
        //Horizontal
        if (this.fields[0][0] && this.fields[0][0] == this.fields[0][1] && this.fields[0][0] == this.fields[0][2]) {
            this.winner = this.fields[0][0];
            this.finish = true;
            return;
        }

        if (this.fields[1][0] && this.fields[1][0] == this.fields[1][1] && this.fields[1][0] == this.fields[1][2]) {
            this.winner = this.fields[1][0];
            this.finish = true;
            return;
        }
        
        if (this.fields[2][0] && this.fields[2][0] == this.fields[2][1] && this.fields[2][0] == this.fields[2][2]) {
            this.winner = this.fields[2][0];
            this.finish = true;
            return;
        }
        
        //Vertical
        if (this.fields[0][0] && this.fields[0][0] == this.fields[1][0] && this.fields[0][0] == this.fields[2][0]) {
            this.winner = this.fields[0][0];
            this.finish = true;
            return;
        }

        if (this.fields[0][1] && this.fields[0][1] == this.fields[1][1] && this.fields[0][1] == this.fields[2][1]) {
            this.winner = this.fields[0][1];
            this.finish = true;
            return;
        }
        
        if (this.fields[0][2] && this.fields[0][2] == this.fields[1][2] && this.fields[0][2] == this.fields[2][2]) {
            this.winner = this.fields[0][2];
            this.finish = true;
            return;
        }

        //Diagonal
        if (this.fields[0][0] && this.fields[0][0] == this.fields[1][1] && this.fields[0][0] == this.fields[2][2]) {
            this.winner = this.fields[0][0];
            this.finish = true;
            return;
        }

        if (this.fields[0][2] && this.fields[0][2] == this.fields[1][1] && this.fields[0][2] == this.fields[2][0]) {
            this.winner = this.fields[0][2];
            this.finish = true;
            return;
        }
    }

    isFinished() {
        if (this.finish || this.noMoreTurns())
            return true;
        
            return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if (this.turns >= 9) return true;

        return false;
    }

    isDraw() {
        if (this.winner == null && this.turns >= 9) return true;

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.fields[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
