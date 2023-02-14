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
const sections = document.querySelectorAll("section");

let iconClickChecker = false;
if (iconClickChecker == false) {
  month.style.opacity = "1";
  year.style.opacity = "0.4";
}
// toggles between month and year
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
goBackBTN_remover();
var quesionNo = 0;
function goNext() {
  quesionNo++;
  if (sections.length > quesionNo) {
    // remove the active class from the all parts of the document.
    document.querySelector(".active").classList.remove("active");
    sections[quesionNo].classList.add("active");
  }
  nextBTN_remover();
  goBackBTN_remover();
}
confirm.addEventListener("click", goNext);

back.addEventListener("click", goBack);

function goBack() {
  quesionNo--;
  if (sections.length > quesionNo) {
    // remove the active class from the all parts of the document.
    document.querySelector(".active").classList.remove("active");
    sections[quesionNo].classList.add("active");
  }

  nextBTN_remover();
  goBackBTN_remover();
}
function nextBTN_remover() {
  if (
    sections[quesionNo].className == "step_four active" ||
    sections[quesionNo].className == "step_five active"
  ) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }
}
function goBackBTN_remover() {
  if (step_one.className == "step_one active") {
    back.style.display = "none";
  } else {
    back.style.display = "block";
  }
}
// side_box
const list = document.querySelectorAll("#list")

for(let i = 0; i<list.length; i++){
 const item = list[i];

 item.addEventListener("click", ()=>{
  const item_data = item.firstChild.data 
  console.log(item_data)
  document.querySelector(".clicked").classList.remove("clicked")
  item.classList.add("clicked")
  document.querySelector(".active").classList.remove("active");
  sections[item_data -1].classList.add("active")

 })
}

