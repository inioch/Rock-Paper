
let oppChooseText = document.getElementById('h4')
let oppChoose = ""
//wybór kamien papier nożyce 1 2 3
let chooseValue = Math.floor(Math.random()*3+1)
let clickedBtn
oppChooseText.innerText = `Opponent choose: ${oppChoose}`
let btn = document.getElementsByTagName('button')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', Check)
}
function restart() { 
    window.location.reload()
}



//sprawdzanie wartości klikniecia w object i porównanie
function Check(e) {
    clickedBtn = e.target.innerText
    //porównanie Rock
    if(chooseValue == 1){
        oppChoose = "Rock"
        oppChooseText.innerText = `Opponent choose: ${oppChoose}`
        if(clickedBtn == "Rock"){
            alert("Won")
            window.location.reload()
        }
        if(clickedBtn == "Paper"){
            alert("Lose")
            window.location.reload()
        }
        if(clickedBtn == "Scissors"){
            alert("Lose")
            window.location.reload()
        }
    }
    //porównanie Paper
    else if(chooseValue == 2){
        oppChoose = "Paper"
        oppChooseText.innerText = `Opponent choose: ${oppChoose}`
        if(clickedBtn == "Rock"){
            alert("Lose")
            window.location.reload()
        }
        if(clickedBtn == "Paper"){
            alert("Won")
            window.location.reload()
        }
        if(clickedBtn == "Scissors"){
            alert("Lose")
            window.location.reload()
        }
    }
      //porównanie Scissors
    else if(chooseValue == 3){
        oppChoose = "Scissors"
        oppChooseText.innerText = `Opponent choose: ${oppChoose}`
        if(clickedBtn == "Rock"){
            alert("Lose")
            window.location.reload()
        }
        if(clickedBtn == "Paper"){
            alert("Lose")
            window.location.reload()
        }

        if(clickedBtn == "Scissors"){
            alert("Won")
            window.location.reload()
        }
    }
    
}
