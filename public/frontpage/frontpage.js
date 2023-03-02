// array of weekdays
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function to update the selected day label
function updateLabel() {
    const selectedDay = document.getElementById("weekday").value;
    document.getElementById("selected-day-label").textContent = `Selected day is ${selectedDay}`;
    document.getElementById("selected-day-label").style.display = "block";
}

// function to check if selected day matches current day
function isCurrentDay() {
    const selectedDay = document.getElementById("weekday").value;
    const currentDay = weekdays[new Date().getDay()];
    return selectedDay === currentDay;
}

// function to check current day when submit button is pressed
function checkCurrentDay() {
    const isSameDay = isCurrentDay();
    const selectedDay = document.getElementById("weekday").value;
    if (isSameDay) {
        document.getElementById("selected-day-label").textContent = `Today is ${selectedDay}!`;
    } else {
        document.getElementById("selected-day-label").textContent = `Selected day is not today.`;
    }
    document.getElementById("selected-day-label").style.display = "block";
}