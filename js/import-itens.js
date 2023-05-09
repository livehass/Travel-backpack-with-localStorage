/*i will come back for these later, for now i dont have the knowledge, to make this work
send.addEventListener("click", (e)=>{
    var xhr = new XMLHttpRequest();
    xhr.open("get", "https://gist.githubusercontent.com/livehass/5c1e00347a8961031a193cbff7e504b9/raw/a47a257a4af216066822b9d87356205b4ba48f6e/my-list.json")

    xhr.addEventListener("load", (e)=>{
        
        
       createElement(e, e);
    })
    xhr.send();
    console.log()
})
*/
const send = document.querySelector(".send2");
import data from '/./myitens.json';


send.addEventListener("submit", (e)=>{
    localStorage.setItem("data", JSON.stringify(data));
    
});



