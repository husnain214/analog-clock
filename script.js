const timeLines = document.querySelectorAll (".time-line")
const hoursHand = document.querySelector (".hourHand")
const minutesHand = document.querySelector (".minHand")
const secondsHand = document.querySelector (".secHand")

function renderTimelines () {
    for (let i = 0; i < timeLines.length; i++) {
        if (i === 0 || i === 3) {
            timeLines[i].style.width = `475px`
        }

        timeLines[i].style.backgroundColor = `var(--timeLine)`
        timeLines[i].style.opacity = `1`
        timeLines[i].style.transform = `translate(-50%, -50%) rotate(${i * 30}deg)`
    }
}

function setTime () {
    const currentDate = new Date ()
    
    const hours = currentDate.getHours ()
    const minutes = currentDate.getMinutes ()
    const seconds = currentDate.getSeconds ()

    console.log ({hours, minutes, seconds})

    secondsHand.style.transform = `translate(-50%, -96%) rotate(${seconds * 6}deg)`
    minutesHand.style.transform = `translate(-50%, -95%) rotate(${(minutes * 6) + seconds / 10}deg)`
    hoursHand.style.transform = `translate(-50%, -95%) rotate(${(hours * 30) + (minutes / 2)}deg)`
}

function animate () {
    setTimeout (setTime, 1000)

    requestAnimationFrame(animate)
}

renderTimelines ()
animate()
