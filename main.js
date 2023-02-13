// const slide = document.querySelector(".slide");
const icon = document.querySelector(".icon");
const month = document.querySelector(".month");
const year = document.querySelector(".year")
let iconClickChecker = false;

icon.addEventListener("click", () => {
  if (iconClickChecker == false) {
    icon.style.transform = "translate(30px,0)";
    iconClickChecker = true;
  } else if (iconClickChecker == true) {
    icon.style.transform = "translate(1px,0)";
    iconClickChecker = false;
  }
});
if(iconClickChecker == false){
    month.style.opacity = "1"
    year.style.opacity = "0.4"
}else if(iconClickChecker == true){
    console.log(iconClickChecker)
    month.style.opacity = "0.4"
    year.style.opacity = "1"
}
