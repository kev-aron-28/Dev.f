class Game{
    constructor(){
        this.board = new Array(6);
        this.turn = 0;
        this.col1 = [...document.getElementById("column-1").children].slice(1);
        this.col2 = [...document.getElementById("column-2").children].slice(1);
        this.col3 = [...document.getElementById("column-3").children].slice(1); 
        this.col4 = [...document.getElementById("column-4").children].slice(1);
        this.col5 = [...document.getElementById("column-5").children].slice(1);
        this.col6 = [...document.getElementById("column-6").children].slice(1);
        this.col7 = [...document.getElementById("column-7").children].slice(1);
    }

    initArray(){
        for(let i = 0; i < 13; i++){
            this.board[i] = new Array(6);
        }

        for(let k = 0; k < 13; k++){
            for(let p = 0; p < 6; p++ ){
                this.board[k][p] = null;
            }
        }
    }
    
    paintCol1(){
        this.col1[this.col1.length - 1].style.background = this.changeColor(this.turn); 
        this.board[3][this.col1.length-1] = this.turn;
        this.check(3, this.col1.length-1);
        this.col1.pop();
    }
    paintCol2(){
        this.col2[this.col2.length-1].style.background = this.changeColor(this.turn);          
        this.board[4][this.col2.length-1] = this.turn;
        this.check(4, this.col2.length-1);
       this.col2.pop();
    }
    paintCol3(){
        this.col3[this.col3.length-1].style.background = this.changeColor(this.turn);
        this.board[5][this.col3.length-1] = this.turn;
        this.check(5, this.col3.length-1);
        this.col3.pop();
    }
    paintCol4(){
        this.col4[this.col4.length-1].style.background = this.changeColor(this.turn);
        this.board[6][this.col4.length-1] = this.turn;
        this.check(6, this.col4.length - 1);
        this.col4.pop();
    }
    paintCol5(){
        this.col5[this.col5.length-1].style.background = this.changeColor(this.turn);
        this.board[7][this.col5.length-1] = this.turn;
        this.check(7, this.col5.length-1);
        this.col5.pop();
    }
    paintCol6(){
        this.col6[this.col6.length-1].style.background = this.changeColor(this.turn);
        this.board[8][this.col6.length-1] = this.turn;
        this.check(8, this.col6.length-1);
        this.col6.pop();
    }
    paintCol7(){
        this.col7[this.col7.length-1].style.background = this.changeColor(this.turn);
        this.board[9][this.col7.length-1] = this.turn;   
        this.check(9, this.col7.length-1);
        this.col7.pop();
    }
    changeColor(turn){
        if(turn){
            this.turn = 0;
            return "orange";
        } else { 
            this.turn = 1;
            return "red";
        }
    }
    
    async check(x,y){
        //Top 
        if(x >= this.board.length){
            return;
        }

        let topRows = [];
        let bottomRows = [];
        let rightRows = [];
        let leftRows = [];
        let topRightCorner = [];
        let topLeftCorner = [];
        let bottomRightCorner = [];
        let bottomLeftCorner = [];
        for(let i = 1; i <= 3; i++) { 
            if(this.board[x][y-i] == this.turn){
                topRows.push(true);
            } else {
                topRows.push(false);
            }
        }
        console.log("Top " + topRows);
        //Bottom
        for(let j = 1; j <= 3; j++){
            if(this.board[x][y+j] == this.turn){
                bottomRows.push(true);
            } else {
                bottomRows.push(false);
            }
        }
        console.log("Bottom " + bottomRows);
        //Right
        for(let k = 1; k <= 3; k++){
            if(this.board[x+k][y] == this.turn){
                rightRows.push(true);
            } else {
                rightRows.push(false);
            }
        }
        console.log("Right " + rightRows)
        //Left
        for(let p = 1; p <= 3; p++){
            if(this.board[x-p][y] == this.turn){
                leftRows.push(true);
            } else {
                leftRows.push(false);
            }
        }
        console.log(`Left: ${leftRows}`)
        // Top-Right-Corner
        for(let a = 1; a <= 3; a++){
            if(this.board[x+a][y-a] == this.turn){
                topRightCorner.push(true);
            } else {
                topRightCorner.push(false);
            }
        }

        console.log(`Top right corner : ${topRightCorner}`)

        //Top-Left-Corner
        for(let b = 1; b <= 3; b++){
            if(this.board[x-b][y-b] == this.turn){
                topLeftCorner.push(true);
            } else {
                topLeftCorner.push(false);
            }
        }

        console.log(`Top left rigth corner ${topLeftCorner}`)

        //Bottom-rigth-corner
        for(let c = 1; c <= 3; c++){
            if(this.board[x+c][y+c] == this.turn){
               bottomRightCorner.push(true); 
            } else {
                bottomRightCorner.push(false);
            }
        }
        console.log(`Bottom right corner ${bottomRightCorner}`)
        //Bottom-left-corner
        for(let d = 1; d <= 3; d++){
            if(this.board[x-d][y+d] == this.turn){
                bottomLeftCorner.push(true);
            } else {
                bottomLeftCorner.push(false);
            }
        }
        console.log(`Bottom left corner ${bottomLeftCorner}`)
        try{
            let result = await this.winOrLose(topRows, bottomRows, leftRows, rightRows, topRightCorner, topLeftCorner, bottomRightCorner, bottomLeftCorner);
            this.showNotification(result);

        } catch(e){
            console.log(e);
        }
    }

    winOrLose(top, bot, left, right, tRcorner, tLcorner, bRcorner, bLcorner){
        if(!top.includes(false) || !bot.includes(false) || !left.includes(false) || !right.includes(false) || !tRcorner.includes(false) || !tLcorner.includes(false) || !tRcorner.includes(false) || !bRcorner.includes(false) || !bLcorner.includes(false)){
            return "ganaste";
        } else {
            return "continua";
        }
    }

    showNotification(m){
        const winner = this.turn ? "Rojo" : "Naranja";
        if(m == "ganaste"){
            alert("Gano el jugador " + winner );
        } else {
            if(this.col1.length <= 0 && this.col2.length <= 0 && this.col3.length <= 0 && this.col4.length <= 0 && this.col5.length <= 0 && this.col6.length <= 0 && this.col7.length <= 0){
            alert("Empate");
            } else {
                return;
            }
        }
    }
}

const game = new Game();
game.initArray();
