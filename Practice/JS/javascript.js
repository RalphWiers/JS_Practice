let welcome = document.getElementById("welcome");
welcome.addEventListener("click", prom);
function prom(){
let person = prompt("Please enter your name", "Harry Potter");
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}
document.getElementById("line").innerHTML = text;
}

let greeting1 = document.getElementById("button1");
greeting1.addEventListener("click", function() {
alert("Hello World");
});

let greeting2 = document.getElementById("button2");
greeting2.addEventListener("click", greeting);
function greeting() {
  alert("hoi");
}

let greeting3 = document.getElementById("button3");
greeting3.addEventListener("click", function() {
  alert("Hoi Wereld");
});



let btnw = document.getElementById("warningBoxButton");
let btnc = document.getElementById("chatBoxButton");
btnw.addEventListener('click', () => displayMessageBox('Your inbox is almost full — delete some mails', 'warning'));
btnc.addEventListener('click', () => displayMessageBox('Brian: Hi there, how are you today?','chat'));

function displayMessageBox(msgText, msgType) {
  let block = document.getElementById("textblock");
  let panel = document.createElement('div');
  panel.setAttribute('class','msgBox');
  block.appendChild(panel);

  let msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  let closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));

  if (msgType === 'warning') {
    msg.style.backgroundImage = 'url(icons/warning.png)';
    panel.style.backgroundColor = 'red';
  } else if (msgType === 'chat') {
    msg.style.backgroundImage = 'url(icons/chat.png)';
    panel.style.backgroundColor = 'aqua';
  } else {
    msg.style.paddingLeft = '20px';
  }
  }

  let input = document.querySelector('.numberInput');
  let para = document.querySelector('.pinput');
  function squared(num) {
    return num * num;
  }
  function cubed(num) {
    return num * num * num;
  }
  function factorial(num) {
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num - 1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
  }
  input.addEventListener('change', () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
      para.textContent = 'You need to enter a number!';
    } else {
      para.textContent = `${num} squared is ${squared(num)}. `;
      para.textContent += `${num} cubed is ${cubed(num)}. `;
      para.textContent += `${num} factorial is ${factorial(num)}. `;
      para.textContent += `${num} squared is ${squared(num)}. ${num} cubed is ${cubed(num)}. `
    }
  });

  function favoriteanimal(animal) {
    console.log(animal + "is my favorite animal!");
  }

  favoriteanimal('Goat ');

  let Johnbutton = document.getElementById("John");
  let Bobbutton = document.getElementById("Bob");

  let userName = 'John';  
  function callname() {
    let message = "Hello" + userName;
    alert(message);
  }

  function changename() {
    let userName = ' Bob';
    let message = "Hello" + userName;
    alert(message);
  }

  Johnbutton.addEventListener("click", callname);
  Bobbutton.addEventListener("click", changename);

/*  function changename(parameter,parameter1 = no text given)
  changename(argument,argument2)
  als argument2 niet gecalled wordt dan komt daar no text given te staan
  parameter1 = anotherfunction() is ook mogelijk, dan wordt een andere functie gecalled als 1 er niet is. */

  let agebutton = document.getElementById("agebutton");
  agebutton.addEventListener('click', askage);

  function askage() {
    let age = prompt('How old are you?', 18);
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }
  