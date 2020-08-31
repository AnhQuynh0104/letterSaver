window.onload = function(){
    let numQuote = document.getElementById("numQuote"),
    add = document.getElementById("add"),
    myBar = document.querySelector(".myBar"),
    length = 1;

    add.onclick = function(){
        length += 1;
        numQuote.innerHTML = length;
        myBar.style.width = length*10 + "%"; 
        if(length <= 10){
            addQuote();
            
        }
        else{
            length = 9;
            alert("Too many quotes! Delete some before adding new ones!");
        }
    }
    function addQuote(){
        let ul = document.getElementById("quote-group");
        let val = document.getElementById("myTextarea").value;
        let li = document.createElement("item");
        li.innerHTML = val;
        li.classList.add("quoteItem");
        ul.appendChild(li);
        document.getElementById("myTextarea").value = "";
        li.onclick = function(){
            li.style.display = "none";
            length -= 1;
            numQuote.innerHTML = length;
            myBar.style.width = length*10 + "%";
        }
        li.onmouseover = function(){
            li.style.background = "rgb(253, 209, 216)";
        }
        li.onmouseout = function(){
            li.style.background = "white";
        }
    }

}