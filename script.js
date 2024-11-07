const btn = document.querySelector("#btn");
const input = document.querySelector("input");
const ul = document.querySelector("ul");






btn.addEventListener("click", addtask);
function addtask() {
    const li = document.createElement("li");
    const span = document.createElement("span")
    li.innerText = input.value;  


    const delbtn = document.createElement("i");
    delbtn.classList.add("fa-solid" , "fa-trash");
    delbtn.addEventListener("click", () => deltask(li));
   
  


    ul.append(li);
    li.append(delbtn); 
    input.value = "";            
}


function deltask(list) {
    list.style.display = "none";
}









 





