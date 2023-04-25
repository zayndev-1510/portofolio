const button=document.querySelector(".navbar__ham");
const menu=document.querySelector(".navbar__links")

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
 function init() {
    loadJSON(function(response) {
     // Parse JSON string into object
       var actual_JSON = JSON.parse(response);
       console.log(actual_JSON)
    });
   }
button.addEventListener("click",()=>{
    button.classList.toggle("open");
    menu.classList.toggle("navbar__open")
})
menu.addEventListener("click",()=>{
    button.classList.toggle("open");
    menu.classList.toggle("navbar__open")
})
