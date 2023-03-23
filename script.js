// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// const AM9 = $('hour-9')
// const AM10 = $('hour-10')
// const AM11 = $('hour-11')
// const PM12 = $('hour-12')
// const PM1 = $('hour-13')
// const PM2 = $('hour-14')
// const PM3 = $('hour-15')
// const PM4 = $('hour-16')
// const PM5 = $('hour-17')

const timeCard = $('.timeCard');
console.log(timeCard)



const currentDay = $('#currentDay')
currentDay.text(dayjs().format('H'))

let currentHour = 0;
let pastHour = 0;

function timeCardColor(){
  //currentHour = (dayjs().format('H'))
  currentHour = 15
  //This checks if there has been a change in the hour and if there was it changes the color of the cards
  if(currentHour !== pastHour){
    for(let i=0; i<timeCard.length; i++){
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

function init(){
  for(let i=0; i<timeCard.length; i++){
    if(localStorage.getItem(timeCard[i].id) !== null){
      timeCard[i].children[1].value = localStorage.getItem(timeCard[i].id)
    }
  }
}


function saveCard() { 
  for(let i=0; i<timeCard.length; i++){
    
    // addEventListener NOT jQuery
    timeCard[i].children[2].addEventListener("click", function(){
      // .value NOT jQuery
      console.log(timeCard[i].children[1].value + timeCard[i].id)
      localStorage.setItem(timeCard[i].id, timeCard[i].children[1].value)

    })

  }
};
init()
saveCard()
