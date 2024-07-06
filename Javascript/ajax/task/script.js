// Get fruit
const fruitBtn = document.querySelector(".fruitBtn");

fruitBtn.addEventListener("click", fruitHandler);

function fruitHandler(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", 'fruits.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            //console.log("data is added", this.responseText)
            let fruit = JSON.parse(this.responseText);
            let fruitList = document.querySelector(".fruit-list");
            
            let fruitItem = ''; 
           for(let i = 0; i < fruit.length; i++){
            fruitItem+= `<li>${fruit[i]}</li>`
           }
           fruitList.innerHTML = fruitItem;
           
        }else{
            console.log("some error occuring");
        }
    }
    xhr.send();

    ///
    console.log("hello")

}


// get veg
const vegBtn = document.querySelector(".vegBtn");

vegBtn.addEventListener("click", vegHandler);

function vegHandler(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", 'veg.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            //console.log("data is added", this.responseText)
            let fruit = JSON.parse(this.responseText);
            let fruitList = document.querySelector(".veg-list");
            
            let fruitItem = ''; 
           for(let i = 0; i < fruit.length; i++){
            fruitItem+= `<li>${fruit[i]}</li>`
           }
           fruitList.innerHTML = fruitItem;
           
        }else{
            console.log("some error occuring");
        }
    }
    xhr.send();

    ///
    console.log("hello")

}