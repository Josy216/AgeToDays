const minute = document.getElementById("minute");
const display = document.getElementById("demo");
const togle = document.querySelector(".display");
const btn = document.querySelector("button");

btn.addEventListener("click", function minuteConvertor() {
  togle.style.display = "block";
  let converted = minute.value * 365;
  display.innerHTML = `${minute.value} year is: ${converted} days `;
});
