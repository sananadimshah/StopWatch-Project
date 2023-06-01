const clock = document.querySelector(".clock");

let sec = 0,
  min = 0,
  hr = 0,
  intervalId;

const startStopwatch = () => {
  intervalId = setInterval(() => {
    if (sec < 59) {
      sec++;
    } else if (min >= 59) {
      hr++;
      min = 0;
    } else {
      sec = 0;
      min++;
    }
    const second = String(sec).padStart(2, "0");
    const minutes = String(min).padStart(2, "0");
    const hours = String(hr).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${second}`;
  }, 1000);
};

const stopStartwatch = () => {
  clearInterval(intervalId);
};
