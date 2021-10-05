const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const xmas ='25 December 2021'

function countdown(){
    const xmasDate = new Date(xmas)
    const currentDate = new Date()
    
    const totalSeconds = (xmasDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor (totalSeconds / 3600) % 24
    const minutes = Math.floor (totalSeconds / 60) % 60
    const seconds = Math.floor (totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
    
}

function formatTime (time){
    return time < 10 ? (`0${time}`) : time;
}

//initial call

setInterval(countdown, 1000)

countdown()