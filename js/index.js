const HoursEl = document.getElementById("Hours");
const MinutesEl = document.getElementById("Minutes");
const SecondEl = document.getElementById("Seconds");
const AmPmEl = document.getElementById("AmPm");


function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AmPm = "AM"

    if(h > 12) {
        h = h - 12
        AmPm = "PM"
    }

    h = h < 10 ? "0" + h : h
     m = m < 10 ? "0" + m : m
     s = s < 10 ? "0" + s : s

    HoursEl.innerText = h
    MinutesEl.innerText = m
    SecondEl.innerText = s
    AmPmEl.innerText = AmPm

    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock()