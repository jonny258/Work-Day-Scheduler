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

function saveCard() { 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  for(let i=0; i<timeCard.length; i++){
    console.log(this.className)
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
};

saveCard()
