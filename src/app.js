let who = ["My dog", "My grandma", "My sister", "My cat"];
let action = ["ate", "peed on", "broke", "messed up"];
let what = ["my homework", "my phone", "my car", "my pendrive"];
let when = [
  "while I was sleeping.",
  "while I was at work.",
  "while I was playing videogames.",
  "while I was exercising."
];

let currentExcuse = {
  who: "",
  action: "",
  what: "",
  when: ""
};

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function updateDisplay() {
  const excuseElement = document.getElementById("excuse");
  excuseElement.style.opacity = 0;

  setTimeout(() => {
    excuseElement.innerHTML = `${currentExcuse.who} ${currentExcuse.action} ${currentExcuse.what} ${currentExcuse.when}`;
    excuseElement.style.opacity = 1;
  }, 200);
}

function gen() {
  currentExcuse.who = getRandom(who);
  currentExcuse.action = getRandom(action);
  currentExcuse.what = getRandom(what);
  currentExcuse.when = getRandom(when);
  updateDisplay();
}

function changePart(part) {
  if (part === "who") currentExcuse.who = getRandom(who);
  else if (part === "action") currentExcuse.action = getRandom(action);
  else if (part === "what") currentExcuse.what = getRandom(what);
  else if (part === "when") currentExcuse.when = getRandom(when);
  updateDisplay();
}

window.onload = function () {
  gen();
};

window.gen = gen;
window.changePart = changePart;