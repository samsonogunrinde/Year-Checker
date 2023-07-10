let year = ""
let response = ""
const inputs = document.getElementById("inputs")
const yearBtn = document.getElementById("year-btn")
const resp = document.getElementById("resp")

yearBtn.addEventListener("click", function() {
  year = Number(inputs.value)

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        response = " a Leap year"
      } else {
        response = " not a Leap year"
      }

    } else {
      response = " a Leap year"
    }

  } else {
    response = " not a Leap year"
  }
  resp.style.display = "block"
  resp.textContent = year + " is" + response
})
