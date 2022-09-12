const currentTimeDisplay = document.getElementById("current-time-display")
const alarmTimeDisplay = document.getElementById("alarm-time-display")
const alarmMessageDisplay = document.getElementById("alarm-message-display")
document.getElementById("set-alarm-button").addEventListener("click", setAlarm)
let currentTime = null
let alarmTime = null
let compareTIme = null
const audio = new Audio('bells.mp3');

function renderCurrentTime() {
    setInterval(() => {
        currentTime = new Date().toLocaleTimeString();
        currentTimeDisplay.textContent = currentTime;
        alarmChecker()
    }, 1000) // update the time every 1000 milliseconds (second)   
}
renderCurrentTime()

function setAlarm() {
    event.preventDefault() // prevents it from resetting time since we are using a form
    let wakeyHours = document.getElementById("hours-input").value
    let wakeyMins = document.getElementById("minutes-input").value
    let time = null

    if (wakeyMins / 10 < 1) {
        wakeyMins = wakeyMins
    }
    if (wakeyHours / 10 < 1) {
        wakeyHours = wakeyHours
    }

    // creates a new date where the useful thing is 
    // the hour and minutes and not the year.
    time = `${wakeyHours}:${wakeyMins}`
    alarmTime = new Date('2022-01-01 ' + time).toLocaleTimeString()
    alarmTimeDisplay.textContent = alarmTime

}

function alarmChecker() {
    console.log(alarmTime, currentTime)
    
    if (alarmTime == currentTime) {
        console.log('alarm ring')
        ringTheAlarm()
    }
}


function ringTheAlarm() {
    audio.play()
}