const timeLines = document.querySelectorAll (".time-line")
const hoursHand = document.querySelector (".hours")
const minutesHand = document.querySelector (".minutes")
const secondsHand = document.querySelector (".seconds")

const hours = new Date ().getHours ()
const minutes = new Date ().getMinutes ()
const seconds = new Date ().getSeconds ()

console.log ({hours, minutes, seconds})

function renderTimelines () {
    for (let i = 0; i < timeLines.length; i++) {
        if (i === 0 || i === 3) {
            timeLines[i].style.width = `475px`
        }

        timeLines[i].style.backgroundColor = `#f1faee`
        timeLines[i].style.opacity = `1`
        timeLines[i].style.transform = `translate(-50%, -50%) rotate(${i * 30}deg)`
    }
}

function setTime () {
    hoursHand.style.transform = `translate(-50%, -100%) rotate(${hours * 30}deg)`
    minutesHand.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`
    secondsHand.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`
}

renderTimelines()
setTime ()
