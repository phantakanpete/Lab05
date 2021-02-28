var night = false;

function toggleFunction() {
    night ? Daymode() : Nightmode();
  }

function Daymode(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    
    var headOne = document.querySelector('h1');
    headOne.innerHTML = " ";
    headOne.innerHTML = "GOOD MORNING";

    var headTwo = document.querySelector('h2');
    headTwo.innerHTML = " ";
    headTwo.innerHTML = "This is day time!";

    var textColor = document.querySelector('#one');
    textColor.style.color = "red";

    var textName = document.querySelector('#two');
    textName.innerHTML = " ";
    textName.innerHTML = "night";

    var textButton = document.querySelector('button');
    textButton.innerHTML = " ";
    textButton.innerHTML = "Activate the night mode";

    night = false;
}

function Nightmode(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    
    var headOne = document.querySelector('h1');
    headOne.innerHTML = " ";
    headOne.innerHTML = "GOOD EVENING";

    var headTwo = document.querySelector('h2');
    headTwo.innerHTML = " ";
    headTwo.innerHTML = "This is night time!";

    var textColor = document.querySelector('#one');
    textColor.style.color = "blue";

    var textName = document.querySelector('#two');
    textName.innerHTML = " ";
    textName.innerHTML = "day";

    var textButton = document.querySelector('button');
    textButton.innerHTML = " ";
    textButton.innerHTML = "Activate the day mode";

    night = true;
}

const clickedNight = document.querySelector('button');
clickedNight.addEventListener("click", toggleFunction);

