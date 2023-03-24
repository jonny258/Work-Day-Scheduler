const timeCard = $('.timeCard');
const currentDay = $('#currentDay')

currentDay.text(dayjs().format('M-DD-YYYY'))

let currentHour = 0;
let pastHour = 0;
function timeCardColor(){
  currentHour = (dayjs().format('H'))
  //This checks if there has been a change in the hour and if there was it changes the color of the cards
  if(currentHour !== pastHour){
    for(let i=0; i<timeCard.length; i++){
      // I subtract 9 to sink up the index number with the hour
      if(i < currentHour - 9)
        timeCard[i].className = "row time-block past timeCard"
      if(i === currentHour - 9){
        timeCard[i].className = "row time-block present timeCard"
      }
      if(i > currentHour - 9){
        timeCard[i].className = "row time-block future timeCard"
      }
    }
    pastHour=currentHour;
  }
}
timeCardColor()
//Checks every minute
setInterval(timeCardColor, 60000)

//Pulls the saved values from local storage 
function init(){
  for(let i=0; i<timeCard.length; i++){
    if(localStorage.getItem(timeCard[i].id) !== null){
      timeCard[i].children[1].value = localStorage.getItem(timeCard[i].id)
    }
  }
}

//Creates a click listener on all of the save buttons
function saveCard() { 
  for(let i=0; i<timeCard.length; i++){
    $(timeCard[i].children[2]).on("click", function(){
      //Creates a unique item in local storage with the id
      localStorage.setItem(timeCard[i].id, $(timeCard[i].children[1]).val())
    })
  }
};

init()
saveCard()