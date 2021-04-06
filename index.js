/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let newTime = time.replace(/\D/g,'')

  if (newTime < 1200 ) {
    return "Good Morning"
  }
  if (newTime > 1200 && newTime < 1700) {
    return "Good Afternoon"
  }
  if (newTime > 1700) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let newGreeting = document.getElementById('greeting')
  newGreeting.innerHTML = `${string}`
}