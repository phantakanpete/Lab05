function updateList(event) {
    if(event.keyCode === 13 || event.which === 13){
        let li = document.createElement("li");
        let txtvalue = document.getElementById("userInput").value;
        let txt = document.createTextNode(txtvalue);
        li.appendChild(txt);
        if (txtvalue === '') {
            alert("Can't add without text");
        } 
        else {
            document.getElementById("ul").appendChild(li);
        }
        document.getElementById("userInput").value = "";
        
        let span = document.createElement("span");
        span.innerHTML = '<i class="far fa-trash-alt"></i>';
        span.className = "close";
        li.appendChild(span);

        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            }
        }
    }
}

const inputData = document.querySelector('input');
inputData.addEventListener("keyup", updateList);

const lists = document.querySelector('ul');
lists.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);