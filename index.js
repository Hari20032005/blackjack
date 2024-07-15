let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards =[firstCard,secondCard]
let hasBlackJack =false
let isAlive = true
let message =""
let messageEl = document.getElementById("message-el");
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("card-el")
let start=0
let player = {
    name: "per",
    chips:143
    
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": "+player.chips
function getRandomCard(){
    let no = Math.random()*13+1
return Math.floor(no)
}
function startGame(){
    start=1
    
    renderGame()
}
function renderGame(){
    cardsEl.textContent="cards: "
    for(let count=0;count<cards.length;count++){
    cardsEl.textContent+=cards[count]+" "
    }
    sumEl.textContent=sum
    if(sum <=20){
        message="Do you want to draw a new card? 😅"}
    else if(sum ===21){ 
        message="wow, you got blackjack 🥳"
    hasBlackJack = true}
    else{
        message="you are out!"    
        isAlive = false
    }
    messageEl.textContent=message
}
function newCard(){
    if(start===1){
    if(isAlive===true && hasBlackJack===false){
    let card = getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()}
    }

}