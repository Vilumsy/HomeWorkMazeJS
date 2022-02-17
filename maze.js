(function() {
    var mazeArray = [
        [1, -1, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 2],
        [1, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1]
    ];
    
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var currentPos = {row: 0, column: 0};
    
    function loopArray(){
    
      mazeArray.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            drawRectangles(column, columnIndex, rowIndex);
        })
      })
    }
     loopArray();
    
    function drawRectangles(value, column, row){
    
        if(value === 1){
          ctx.fillStyle = "#03fc66";
        }
    
        if(value === 0){
          ctx.fillStyle = "#FFFFFF";
        }
        if(value === 2){
            ctx.fillStyle = "#FF0000";
          }
    
        if(value === -1){
            ctx.fillStyle = "#000000";
            currentPos.column=column;
            currentPos.row=row;
          }
    
        ctx.fillRect(column*40, row*40, 40, 40);
    
    
    }
    
    function startOver(){

        var txt;
        if (confirm("Do you want to start again?")) {
            mazeArray[currentPos.row][currentPos.column]=2;
            mazeArray[0][1]=-1;
            loopArray();
        } else {
          window.removeEventListener("keydown",move);
        }
        
      

    }
    
    function move(event)
    {   
        loopArray();
        try{
            switch(event.keyCode){
                case 37: 
                case 65:
                    if((mazeArray[currentPos.row][currentPos.column-1])==0){
                        mazeArray[currentPos.row][currentPos.column]=0;
                        mazeArray[currentPos.row][currentPos.column-1]=-1;
                        loopArray();
                    }else if((mazeArray[currentPos.row][currentPos.column-1])==2){
                        mazeArray[currentPos.row][currentPos.column]=0;
                        mazeArray[currentPos.row][currentPos.column-1]= -1;
                        loopArray();
                        setTimeout(() => {alert("YOU FINISHESD THE MAZE"), 50000000});
                        setTimeout(() => {startOver(), 100000000});
                        loopArray();
                    } else
                        alert("cannot do");
                    
                    // console.log("leftArrow"); 
                    break;
                case 38: 
                case 87:
                    if((mazeArray[currentPos.row -1][currentPos.column])==0){
                        mazeArray[currentPos.row][currentPos.column]=0;
                        mazeArray[currentPos.row -1][currentPos.column]=-1;
                        loopArray();
                    }else if((mazeArray[currentPos.row-1][currentPos.column])==2){
                        mazeArray[currentPos.row][currentPos.column]=0;
                        mazeArray[currentPos.row-1][currentPos.column]=-1;
                        loopArray();
                        setTimeout(() => {alert("YOU FINISHESD THE MAZE"), 50000000});
                        setTimeout(() => {startOver(), 100000000});
                        loopArray();
                    }else 
                        alert("cannot do"); 
                    
                    // console.log("upArrow"); 
                    break;
                case 39: 
                case 68:
                    if((mazeArray[currentPos.row][currentPos.column+1])==0){
                        mazeArray[currentPos.row][currentPos.column]=0;
                        mazeArray[currentPos.row][currentPos.column+1]=-1;
                        loopArray();
                    }else if((mazeArray[currentPos.row][currentPos.column+1])==2){
                        mazeArray[currentPos.row][currentPos.column]=0;
                        mazeArray[currentPos.row][currentPos.column+1]=-1;
                        loopArray();
                        setTimeout(() => {alert("YOU FINISHESD THE MAZE"), 50000000});
                        setTimeout(() => {startOver(), 100000000});
                        loopArray();
                        
                    } else 
                        alert("cannot do");
                    
                    // console.log("rightArrow"); 
                    break;
                case 40: 
                case 83:
                    
                    if((mazeArray[currentPos.row +1][currentPos.column])==0){
                        mazeArray[currentPos.row][currentPos.column]=0;
                        mazeArray[currentPos.row +1][currentPos.column]=-1;
                        loopArray();
                    }else if((mazeArray[currentPos.row+1][currentPos.column-1])==2){
                        mazeArray[currentPos.row][currentPos.column]=0;
                        mazeArray[currentPos.row+1][currentPos.column]=-1;
                        loopArray();
                        setTimeout(() => {alert("YOU FINISHESD THE MAZE"), 50000000});
                        setTimeout(() => {startOver(), 100000000});
                        loopArray();
                    } else 
                        alert("cannot do");
                    
                    // console.log("downArrow"); 
                    break;
                default:
                    return;
            }
        }catch(e) {
            if (e instanceof TypeError) {
                alert("Cant go any higher!");
            }
            else{
                logMyError(e);
            }
            
        }
    
    }
    window.addEventListener("keydown", move);
    
    return{
        movingfunc:move,
        
    }




})();


