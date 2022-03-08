function msg() {
    alert("Hello Ralph");
}


function change() {
    let words = "HelloHello"
    document.getElementById("Bad").style.fontSize = "35px";
    alert(words);
}

    let fahrenheit = -35;
    function toCelsius() {
        return (5/9) * (fahrenheit) 
      } 
    
      let text = fahrenheit + " " + "naar celcius is" + " " + toCelsius();
      document.getElementById("temperature").innerHTML = text;


      </div>
      <button id="button1">hello</button>
      <button id="button2">hi</button>
</div>


    let greeting1 = document.getElementById("button1");
    greeting1.addEventListener("click", function() {
    alert("Hello World");
    });

    let greeting2 = document.getElementById("button2");
    greeting2.addEventListener("click", greeting);
    function greeting() {
        alert("hoi");
    }

