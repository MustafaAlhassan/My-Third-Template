// To Increase the bars of our skills section
let ourSkills = document.querySelector(".our-skills");
let progressSpan = document.querySelectorAll(".progress span");

// To Count the date down of Events Section
let eventDate = new Date("Jul 1, 2030 23:59:59").getTime();
let countDown = setInterval(() => {
  let currentDate = new Date().getTime();
  let dateDiff = eventDate - currentDate;

  document.querySelector(".events .unit .days").innerHTML = Math.floor(
    dateDiff / (1000 * 60 * 60 * 24)
  );
  document.querySelector(".events .unit .hours").innerHTML = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  document.querySelector(".events .unit .minutes").innerHTML = Math.floor(
    (dateDiff % (1000 * 60 * 60)) / (1000 * 60)
  );
  document.querySelector(".events .unit .seconds").innerHTML = Math.floor(
    (dateDiff % (1000 * 60)) / 1000
  );
}, 1000);

// To Increase the number of stats section
let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .box .number");
let started = false;

function increaseNum(number) {
  let goal = number.dataset.goal;
  let count = setInterval(() => {
    number.textContent++;
    if (number.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.onscroll = function () {
  if (window.scrollY > ourSkills.offsetTop + 50) {
    progressSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY > stats.offsetTop - 150) {
    if (!started) {
      numbers.forEach((number) => increaseNum(number));
    }
    started = true;
  }
};
