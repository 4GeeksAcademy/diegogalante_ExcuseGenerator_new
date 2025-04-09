function gen() {
  //write your code here
    let who = ["My dog", "My grandma", "My sister", "My cat"];
    let action = ["ate", "peed on", "broke", "messed up",];
    let what = ["my homework", "my phone", "my car", "my pendrive"];
    let when = ["while I was sleeping.", "while I was at work.", "while I was playing videogames.", "while I was exercising."];

    let excuse = 
      who[Math.floor(Math.random() * who.length)]  + " " + 
      action[Math.floor(Math.random() * action.length)]  + " " + 
      what[Math.floor(Math.random() * what.length)] + " " + 
      when[Math.floor(Math.random() * when.length)];
 
    document.getElementById("excuse").innerHTML = excuse;
  }

  window.onload = function() {
    
    gen();
  };

window.gen = gen
