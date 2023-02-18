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
const addsOn_service_name = document.querySelectorAll(".addsOn_service_name");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const fn_p1 = document.querySelector(".fn_p1");
const fn_p2 = document.querySelector(".fn_p2");
const fn_p3 = document.querySelector(".fn_p3");
const itemOne = document.querySelector(".itemOne");
const itemTwo = document.querySelector(".itemTwo");
const itemThree = document.querySelector(".itemThree");
const total_price = document.querySelector(".total_price");
const name_input = document.querySelector(".name_input");
const email_input = document.querySelector(".email_input");
const phoneNO_input = document.querySelector(".phoneNO_input");
const pop_up_TXT = document.querySelectorAll(".pop_up_TXT");

console.log(pop_up_TXT);
freeMo.forEach((Element) => {
  Element.style.display = "block";
});

let iconClickChecker = false;
if (iconClickChecker == false) {
  month.style.opacity = "1";
  year.style.opacity = "0.4";
}
free_month_hide();
// toggles between month and year
icon.addEventListener("click", () => {
  if (iconClickChecker == false) {
    icon.style.transform = "translate(30px,0)";
    iconClickChecker = true;
    month.style.opacity = "0.4";
    year.style.opacity = "1";
    yeraly_price();
    free_month_show();
    addsOn_price_changer();
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
function addsOn_price_changer() {
  itemOne.textContent = "+$10/yr";
  itemTwo.textContent = "+$20/yr";
  itemThree.textContent = "+$20/yr";
}
next.addEventListener("click", goNext);
goBackBTN_remover();
var quesionNo = 0;
function goNext() {
  tester();
  quesionNo++;
  form_valiadtor();
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
// form validator
function form_valiadtor() {
  if (
    name_input.value == "" ||
    email_input.value == "" ||
    phoneNO_input.value == ""
  ) {
    quesionNo = 0;
    counter--;
    pop_up_TXT_maker();
  }
  Email_checker();
  phoneNumber_checker();
}
// pop_up_TXT[0].style.display = "block"
function pop_up_TXT_maker() {
  if (name_input.value == "") {
    pop_up_TXT[0].style.display = "block";
  }
  if (email_input.value == "") {
    pop_up_TXT[1].style.display = "block";
  }
  if (phoneNO_input.value == "") {
    pop_up_TXT[2].style.display = "block";
  }
}
function Email_checker() {
  if (!email_input.value.includes("@gmail")) {
    pop_up_TXT[1].style.display = "block";
    pop_up_TXT[1].textContent = "Enter valid email address";
    quesionNo = 0;
    counter--;
  }
}


function phoneNumber_checker() {
  let isnumber = parseInt(phoneNO_input.value)
  if (Number.isInteger(isnumber) !== true) {
    pop_up_TXT[2].style.display = "block";
    pop_up_TXT[2].textContent = "Enter your real number";
    quesionNo = 0;
    counter--;
  }
  if(Number.isInteger(isnumber)){
    pop_up_TXT[2].style.display = "none";
  }
}
//
function nextBTN_remover() {
  if (
    sections[quesionNo].className == "step_four active" ||
    sections[quesionNo].className == "step_five active"
  ) {
    totalMaker();
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

// main functionality
let namer;
let price;
let numbersOnly_arr = [];
function tester() {
  services.forEach((item) => {
    item.addEventListener("click", () => {
      namer = item.childNodes[3].childNodes[0].data;
      price = item.childNodes[3].childNodes[2].innerHTML;
      splitter(price);
      finish_name.textContent = namer;
      finish_price.textContent = price;
      mo_yr_changer(price);
    });
  });
}
// changes mo and yr
function mo_yr_changer(price) {
  if (price !== undefined) {
    const araying = price.split("/");
    if (araying[1] == "mo") {
      total_price.textContent = `$${sum}/mo`;
    } else {
      total_price.textContent = `$${sum}/yr`;
    }
  }
}
let addsOn_name_arr = [];
let addsOn_price_arr = [];
checkBox.forEach((item) => {
  // console.log(item.className)
  item.addEventListener("click", () => {
    if (item.checked == true) {
      const addsOn_name =
        item.nextSibling.nextElementSibling.childNodes[1].innerHTML;
      const addsOn_price = item.nextElementSibling.nextElementSibling.innerHTML;
      addsOn_name_arr.push(addsOn_name);
      addsOn_price_arr.push(addsOn_price);
      one.textContent = addsOn_name_arr[0];
      fn_p1.textContent = addsOn_price_arr[0];
      splitter(addsOn_price);

      // console.log(addsOn_price_arr[0]);

      if (addsOn_name_arr.length > 1 && addsOn_price_arr.length > 1) {
        two.textContent = addsOn_name_arr[1];
        fn_p2.textContent = addsOn_price_arr[1];
        three.textContent = addsOn_name_arr[2];
        fn_p3.textContent = addsOn_price_arr[2];
      }
    }
  });
});

function splitter(sub_arr) {
  const converter = sub_arr.split("");
  if (converter.includes("+") && converter.length == 6) {
    numbersOnly_arr.push(converter[2]);
  } else if (sub_arr == "$9/mo") {
    numbersOnly_arr.push(converter[1]);
  } else if (converter.length == 7 && !converter.includes("+")) {
    const joiner = converter[1] + converter[2] + converter[3];
    numbersOnly_arr.push(joiner);
  } else if (converter.length == 7 && converter.includes("+")) {
    const combiner1 = converter[2] + converter[3];
    numbersOnly_arr.push(combiner1);
  } else {
    const combiner = converter[1] + converter[2];
    numbersOnly_arr.push(combiner);
  }
  // console.log(converter);
}
console.log(numbersOnly_arr);
let sum = 0;
function totalMaker() {
  numbersOnly_arr.forEach((item) => {
    const numbrer = parseInt(item);
    sum += numbrer;
  });
  mo_yr_changer(price);

  console.log(sum);
}

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
