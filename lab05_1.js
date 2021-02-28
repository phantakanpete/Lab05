function boxClicked(){
    alert(this.innerHTML + " said: why you clicked me");
    this.style.background = "black";
    this.style.color = "white";
}

function textClicked(){
    let headOne = document.querySelector('h1');
    headOne.innerHTML = " ";
    headOne.innerHTML = "Hi";
    let headTwo = document.querySelector('h2');
    headTwo.innerHTML = " ";
    headTwo.innerHTML = "Hi";
}

const clickOne = document.querySelector('#one');
clickOne.addEventListener("click", boxClicked);

const clickTwo = document.querySelector('#two');
clickTwo.addEventListener("click", boxClicked);

const clickThree = document.querySelector('#three');
clickThree.addEventListener("click", boxClicked);

const clickFour = document.querySelector('#four');
clickFour.addEventListener("click", boxClicked);

const clickText = document.querySelector('h1');
clickText.addEventListener("click", textClicked);

const clickTexts = document.querySelector('h2');
clickTexts.addEventListener("click", textClicked);