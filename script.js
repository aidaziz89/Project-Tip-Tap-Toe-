//TIC TOE TAP:
    //1. Player can choose either be Player 1 or Player 2
    //2. Player 1 will go with X token
    //3. Player 2 will go with O token
    //4. There has 9 box, each row has 3 boxes and 3 columns.
    //5. Button "Play Again" for playing more times.
    //6. Button "Reset" to refresh back the games.
    //7. How to Win:
    //  a) If Player 1(X) or Player 2(O) has 3 same value horizontally, vertically or diagonally.
    //  b) If win, there will be black background to the spot which the player make move that makes he/she win.
    //  c) Everytime, a winner win, next player will start new games.
    //  d) On scoreboard, the players can see how many X or O that they already won.


   

    var player = 1
    var nextPlayer = document.querySelector('h3') 
    var perClick = 0
    var arrayX = []
    var arrayO = []
    var xScore = document.querySelector('.xScore')
    var oScore = document.querySelector('.oScore')
    var up1 = document.querySelector('.up1')
    var up2 = document.querySelector('.up2')
    var up3 = document.querySelector('.up3')
    var mid1 = document.querySelector('.mid1')
    var mid2 = document.querySelector('.mid2')
    var mid3 = document.querySelector('.mid3')
    var bot1 = document.querySelector('.bot1')
    var bot2 = document.querySelector('.bot2')
    var bot3 = document.querySelector('.bot3')
    var button = document.querySelector('.restart') 
    
    var allBoxContainer = document.querySelectorAll('div')

    for(var i = 0; i < allBoxContainer.length; i++){
        var box = allBoxContainer[i]

        box.addEventListener('click', function(event){
            if(event.target.textContent == "") {
                if(nextPlayer.textContent == "It's A Drawn Games!" || nextPlayer.textContent == "Player 1 (X) Win!" || nextPlayer.textContent == "Player 2 (O) Win!"){
                    arrayX = ""
                    xScore.textContent = arrayX
                    arrayO = ""
                    oScore.textContent = arrayO
                    return
                }
                if(player == 1) {
                    event.target.textContent = "X"
                    player = 2
                    nextPlayer.textContent = "Next Player: Player 2 (O)"
                    perClick++
                }  
                else if (player == 2) {
                    event.target.textContent = "O"
                    player = 1
                    nextPlayer.textContent = "Next Player: Player 1 (X)"
                    perClick++
                } 
            }
              
            if (perClick == 9){
                nextPlayer.textContent = "It's A Drawn Games!"
            }
            
        })

        box.addEventListener('click', function(){
            if(up1.textContent == "X" && up2.textContent == "X" && up3.textContent == "X"){
                nextPlayer.textContent = "Player 1 (X) Win!"
                up1.style.backgroundColor = "black"
                up2.style.backgroundColor = "black"
                up3.style.backgroundColor = "black"
                arrayX.push(xScore.textContent = "X")
                xScore.textContent = arrayX
            } 
            else if(up1.textContent == "X" && mid1.textContent == "X" && bot1.textContent == "X"){
                nextPlayer.textContent = "Player 1 (X) Win!"
                up1.style.backgroundColor = "black"
                mid1.style.backgroundColor = "black"
                bot1.style.backgroundColor = "black"
                arrayX.push(xScore.textContent = "X")
                xScore.textContent = arrayX

            } 
            else if (up1.textContent == "X" && mid2.textContent == "X" && bot3.textContent == "X"){
                nextPlayer.textContent = "Player 1 (X) Win!"
                up1.style.backgroundColor = "black"
                mid2.style.backgroundColor = "black"
                bot3.style.backgroundColor = "black"
                arrayX.push(xScore.textContent = "X")
                xScore.textContent = arrayX
            } 
            else if (up2.textContent == "X" && mid2.textContent == "X" && bot2.textContent == "X"){
                nextPlayer.textContent = "Player 1 (X) Win!"
                up2.style.backgroundColor = "black"
                mid2.style.backgroundColor = "black"
                bot2.style.backgroundColor = "black"
                arrayX.push(xScore.textContent = "X")
                xScore.textContent = arrayX
            } 
            else if(up3.textContent == "X" && mid3.textContent == "X" && bot3.textContent == "X"){
                nextPlayer.textContent = "Player 1 (X) Win!"
                up3.style.backgroundColor = "black"
                mid3.style.backgroundColor = "black"
                bot3.style.backgroundColor = "black"
                arrayX.push(xScore.textContent = "X")
                xScore.textContent = arrayX
            } 
            else if(up3.textContent == "X" && mid2.textContent == "X" && bot1.textContent == "X"){
                nextPlayer.textContent = "Player 1 (X) Win!"
                up3.style.backgroundColor = "black"
                mid2.style.backgroundColor = "black"
                bot1.style.backgroundColor = "black"
                arrayX.push(xScore.textContent = "X")
                xScore.textContent = arrayX
            } 
            else if(mid1.textContent == "X" && mid2.textContent == "X" && mid3.textContent == "X") {
                nextPlayer.textContent = "Player 1 (X) Win!"
                mid1.style.backgroundColor = "black"
                mid2.style.backgroundColor = "black"
                mid3.style.backgroundColor = "black"
                arrayX.push(xScore.textContent = "X")
                xScore.textContent = arrayX
            } 
            else if(bot1.textContent == "X" && bot2.textContent == "X" && bot3.textContent == "X"){
                nextPlayer.textContent = "Player 1 (X) Win!"
                bot1.style.backgroundColor = "black"
                bot2.style.backgroundColor = "black"
                bot3.style.backgroundColor = "black"
                arrayX.push(xScore.textContent = "X")
                xScore.textContent = arrayX
            }
            
        })

        box.addEventListener('click', function(){
           if(up1.textContent == "O" && up2.textContent == "O" && up3.textContent == "O"){
                nextPlayer.textContent = "Player 2 (O) Win!"
                up1.style.backgroundColor = "black"
                up2.style.backgroundColor = "black"
                up3.style.backgroundColor = "black"
                arrayO.push(oScore.textContent = "O")
                oScore.textContent = arrayO
            } 
            else if(up1.textContent == "O" && mid1.textContent == "O" && bot1.textContent == "O"){
                nextPlayer.textContent = "Player 2 (O) Win!"
                up1.style.backgroundColor = "black"
                mid1.style.backgroundColor = "black"
                bot1.style.backgroundColor = "black"
                oScore.textContent = "O"
                arrayO.push(oScore.textContent = "O")
                oScore.textContent = arrayO
            } 
            else if (up1.textContent == "O" && mid2.textContent == "O" && bot3.textContent == "O"){
                nextPlayer.textContent = "Player 2 (O) Win!"
                up1.style.backgroundColor = "black"
                mid2.style.backgroundColor = "black"
                bot3.style.backgroundColor = "black"
                oScore.textContent = "O"
                arrayO.push(oScore.textContent = "O")
                oScore.textContent = arrayO
            } 
            else if (up2.textContent == "O" && mid2.textContent == "O" && bot2.textContent == "O"){
                nextPlayer.textContent = "Player 2 (O) Win!"
                up2.style.backgroundColor = "black"
                mid2.style.backgroundColor = "black"
                bot2.style.backgroundColor = "black"
                oScore.textContent = "O"
                arrayO.push(oScore.textContent = "O")
                oScore.textContent = arrayO
            } 
            else if(up3.textContent == "O" && mid3.textContent == "O" && bot3.textContent == "O"){
                nextPlayer.textContent = "Player 2 (O) Win!"
                up3.style.backgroundColor = "black"
                mid3.style.backgroundColor = "black"
                bot3.style.backgroundColor = "black"
                oScore.textContent = "O"
                arrayO.push(oScore.textContent = "O")
                oScore.textContent = arrayO
            } 
            else if(up3.textContent == "O" && mid2.textContent == "O" && bot1.textContent == "O"){
                nextPlayer.textContent = "Player 2 (O) Win!"
                up3.style.backgroundColor = "black"
                mid2.style.backgroundColor = "black"
                bot1.style.backgroundColor = "black"
                oScore.textContent = "O"
                arrayO.push(oScore.textContent = "O")
                oScore.textContent = arrayO
            } 
            else if(mid1.textContent == "O" && mid2.textContent == "O" && mid3.textContent == "O") {
                nextPlayer.textContent = "Player 2 (O) Win!"
                mid1.style.backgroundColor = "black"
                mid2.style.backgroundColor = "black"
                mid3.style.backgroundColor = "black"
                oScore.textContent = "O"
                arrayO.push(oScore.textContent = "O")
                oScore.textContent = arrayO
            } 
            else if(bot1.textContent == "O" && bot2.textContent == "O" && bot3.textContent == "O"){
                nextPlayer.textContent = "Player 2 (O) Win!"
                bot1.style.backgroundColor = "black"
                bot2.style.backgroundColor = "black"
                bot3.style.backgroundColor = "black"
                oScore.textContent = "O"
                arrayO.push(oScore.textContent = "O")
                oScore.textContent = arrayO
            }

        })

        button.addEventListener('click', function(){
            up1.textContent = "" 
            up2.textContent = "" 
            up3.textContent = "" 
            mid1.textContent = "" 
            mid2.textContent = "" 
            mid3.textContent = ""
            bot1.textContent = ""
            bot2.textContent = ""
            bot3.textContent = ""
            perClick = 0
            up1.style.backgroundColor = ""
            up2.style.backgroundColor = ""
            up3.style.backgroundColor = ""
            mid1.style.backgroundColor = ""
            mid2.style.backgroundColor = ""
            mid3.style.backgroundColor = ""
            bot1.style.backgroundColor = ""
            bot1.style.backgroundColor = ""
            bot2.style.backgroundColor = ""
            bot3.style.backgroundColor = ""

            if(player == 2){
                nextPlayer.textContent = "Start New Game. Player 2 (O)"
            } else{
                nextPlayer.textContent = "Start New Game. Player 1 (X)"
            }
        })
    }
  