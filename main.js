// const slide = document.querySelector(".slide");
const icon = document.querySelector(".icon");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const next = document.querySelector(".next");
const back = document.querySelector(".back");
const step_one = document.querySelector(".step_one");
const step_two = document.querySelector(".stept_two");
const step_three = document.querySelector(".step_three");
const step_four = document.querySelector(".step_four");
const step_five = document.querySelector(".step_five");
const confirm = document.querySelector("#confirm");

let iconClickChecker = false;
if (iconClickChecker == false) {
  month.style.opacity = "1";
  year.style.opacity = "0.4";
}
icon.addEventListener("click", () => {
  if (iconClickChecker == false) {
    icon.style.transform = "translate(30px,0)";
    iconClickChecker = true;
    month.style.opacity = "0.4";
    year.style.opacity = "1";
  } else if (iconClickChecker == true) {
    icon.style.transform = "translate(1px,0)";
    month.style.opacity = "1";
    year.style.opacity = "0.4";
    iconClickChecker = false;
  }
});

next.addEventListener("click", goNext);

function goNext() {
  if (step_one.style.display !== "none") {
    step_one.style.display = "none";
    step_two.style.display = "block";
    back.style.display = "block";
  } else if (step_two.style.display !== "none") {
    step_two.style.display = "none";
    step_three.style.display = "block";
  } else if (step_three.style.display !== "none") {
    step_three.style.display = "none";
    step_four.style.display = "block";
    next.style.display = "none";
  }
  // else if(step_four.style.display !== "none"){
  //   step_three.style.display = "none"
  //   step_four.style.display = "block"
  // }
}
confirm.addEventListener("click", () => {
  step_four.style.display = "none";
  step_five.style.display = "block";
});
back.addEventListener("click", goBack);
function goBack() {
  if (step_five.style.display !== "none") {
    step_five.style.display = "none";
    step_four.style.display = "block";
    next.style.display = "block";
  } else if (step_four.style.display !== "none") {
    step_four.style.display = "none";
    step_three.style.display = "block"
  } 
  if (step_three.style.display === "block") {
    step_three.style.display = "none";
    step_two.style.display = "block";
  } else if (step_two.style.display !== "none") {
    step_two.style.display = "none";
    step_one.style.display = "block";
  } else if (step_one.style.display !== "none") {
    back.style.display = "none";
  }
}
