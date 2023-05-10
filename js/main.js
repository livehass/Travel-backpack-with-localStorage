const form = document.getElementById("newItem");
const list = document.getElementById("list");
//get the itens from local storage or the array.
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((e) => {
    createElement(e)
});

//send the form
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const name = e.target.elements['name'];
    const quantity = e.target.elements['quantity'];

    const exist = itens.find(e => e.name === name.value)
    console.log(exist)
    //object item
    const currentItem = {
        "name": name.value,
        "quantity": quantity.value
    }
    if(exist){
        currentItem.id = exist.id
        updateElement(currentItem);
        itens[itens.findIndex(e => e.id === exist.id)] = currentItem;
    }else{
        currentItem.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;
        createElement(currentItem);
        itens.push(currentItem);
        
    }
    localStorage.setItem("itens", JSON.stringify(itens));
    name.value ="";
    quantity.value ="";
})
function createElement(item){
    const newItem = document.createElement('li');
    newItem.classList.add("item");
    const numberItem = document.createElement('strong');
    numberItem.innerHTML = item.quantity;
    numberItem.dataset.id = item.id;
    newItem.appendChild(numberItem);
    newItem.innerHTML += item.name;
    newItem.appendChild(buttonDelete(item.id));
    list.appendChild(newItem);
}
function updateElement(item){document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantity}
function buttonDelete(id){
    const buttonElement = document.createElement("button");
    buttonElement.innerText = "X";
    buttonElement.classList.add("button1");
    buttonElement.addEventListener("click", function(){
    deleteElement(this.parentNode, id)})
    return buttonElement;
}
function deleteElement(tag, id){
    tag.remove();
    itens.splice(itens.findIndex(e => e.id === id), 1);
    localStorage.setItem("itens", JSON.stringify(itens));
}



