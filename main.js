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
const list = document.querySelectorAll("#list");
const service__price = document.querySelectorAll(".service__price");
const freeMo = document.querySelectorAll(".freeMo");
const change = document.querySelector(".change");
const services = document.querySelectorAll(".service_type");
const checkBox = document.querySelectorAll(".checkBox");
const finish_name = document.querySelector(".finish_name");
const finish_price = document.querySelector(".finish_price");
const addsOn_service_name = document.querySelectorAll(".addsOn_service_name")

// console.log(classes)
freeMo.forEach((Element) => {
  Element.style.display = "block";
});

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
    yeraly_price();
    free_month_show();
  } else if (iconClickChecker == true) {
    icon.style.transform = "translate(1px,0)";
    month.style.opacity = "1";
    year.style.opacity = "0.4";
    monthly_price();
    free_month_hide();
    iconClickChecker = false;
  }
});
function yeraly_price() {
  service__price[0].firstChild.data = "$90/yr";
  service__price[1].firstChild.data = "$120/yr";
  service__price[2].firstChild.data = "$150/yr";
}
function monthly_price() {
  service__price[0].firstChild.data = "$9/mo";
  service__price[1].firstChild.data = "$12/mo";
  service__price[2].firstChild.data = "$15/mo";
}
function free_month_show() {
  freeMo.forEach((item) => {
    item.style.display = "block";
  });
}
function free_month_hide() {
  freeMo.forEach((item) => {
    item.style.display = "none";
  });
}
next.addEventListener("click", goNext);
goBackBTN_remover();
var quesionNo = 0;
function goNext() {
  tester();
  quesionNo++;
  if (sections.length > quesionNo) {
    // remove the active class from the all parts of the document.
    document.querySelector(".active").classList.remove("active");
    sections[quesionNo].classList.add("active");
  }
  nextBTN_remover();
  goBackBTN_remover();
  listBg_changer(list);
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
change.addEventListener("click", () => {
  quesionNo = 0;
  document.querySelector(".active").classList.remove("active");
  sections[quesionNo + 1].classList.add("active");
  goNext();
});
let namer;
let price;


// main functionality
function tester() {
  services.forEach((item) => {
    item.addEventListener("click", () => {
      namer = item.childNodes[3].childNodes[0].data;
      price = item.childNodes[3].childNodes[2].innerHTML;
      finish_name.textContent = namer;
      finish_price.textContent = price;
      if (price !== undefined) {
        const  araying = price.split("/")
        // arr.push(araying)
        console.log(araying)
         if(araying[1]== "mo"){
           finish_name.textContent = `${namer} (monthly)`;
         }else{
          finish_name.textContent = `${namer} (yearly)`;
         }
       }
    });
  });
}

const classes = [];
checkBox.forEach((item) => {
  // console.log(item.className)
  item.addEventListener("click", () => {
    if (item.checked == true) {
      // addsOn_service_name.forEach(element =>{
      //   console.log(element.textContent)
      // })
      console.log(item.nextSibling.nextElementSibling.childNodes[1].innerHTML)
      classes.push(item.className);
      document.body.style.background = "black";
    } else {
      document.body.style.background = "white";
    }
  });
});

// side_box
for (let i = 0; i < list.length; i++) {
  const item = list[i];

  item.addEventListener("click", () => {
    const item_data = item.firstChild.data;
    console.log(item_data);
    //remove it first the other elelment
    document.querySelector(".clicked").classList.remove("clicked");
    item.classList.add("clicked");

    document.querySelector(".active").classList.remove("active");
    sections[item_data - 1].classList.add("active");
  });
}
let counter = 0;
function listBg_changer(divs) {
  // list.forEach(element=>{

  // })

  if (divs.length > counter) {
    counter++;
    document.querySelector(".clicked").classList.remove("clicked");
    divs[counter].classList.add("clicked");
  }
}
