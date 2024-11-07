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
   
    
    const editbtn = document.createElement("i");
    editbtn.classList.add("fa-solid" , "fa-pencil");
    editbtn.addEventListener("click", () => edittask(li));


    ul.append(li);
    li.append(delbtn); 
    li.append(editbtn);             
    input.value = "";            
}


function deltask(list) {
    list.style.display = "none";
}


function edittask(list)
{
  input.value = list.innerText;
}






 





