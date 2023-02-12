let count = 0
let minuteCount = 60
let count2 = 0
let hourCount = 24
let hour2 = 0
const timer = () => {
    const minute = document.querySelector(".minute")
    const hour = document.querySelector(".hour")
    const second = document.querySelector(".second")

    if (count <= 59) {
        count++
        second.innerText =  `${count}`
    }

    if (count2 <= 59) {
        if (count % minuteCount == 0) {
          count2++;
          minute.innerText = `${count2}`;
          count = 1;
        }
      }

      if (hour2 <= 23) {
        if (count2 == 60) {
          hour2++;
          hour.innerText = `${hour2}`;
          count2 = 1;
          count = 1;
        }
      }
}

const button = document.querySelector(".start-button")

button.addEventListener("click", () => {
    const buttonAttr = button.getAttribute("data-start");
    if (buttonAttr === "false") {
      setInterval(timer, 1000);
      button.setAttribute("data-start", true);
    } else if (buttonAttr === "true") {
      console.log("clear");
      clearInterval(timer);
      button.setAttribute("data-start", false);
    }
  });