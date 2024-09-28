let numCount = document.getElementById("countDisplay");
let dec = document.getElementById("dec");
let inc = document.getElementById("inc");
let clr = document.getElementById("clr");
let error = document.querySelector(".error-message");

let count = 1;

function displyCount() {
  numCount.textContent = count;
  dec.disabled = count === 0 ? true : false;
  error.style.display = count > 0 ? "none" : "block";
  console.log(error);
  clr.style.display = count === 0 ? "none" : "block";
}

function incCount() {
  count++;
  displyCount();
}

function decCount() {
  if (count > 0) {
    count--;
    displyCount();
  } else {
    error.style.display = "block";
  }
}

function clrDisplay() {
  count = 0;
  displyCount();
}

inc.addEventListener("click", incCount);
dec.addEventListener("click", decCount);
clr.addEventListener("click", clrDisplay);

displyCount();
