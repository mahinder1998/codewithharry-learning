let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler(){
    // Instantiate (insttant karna) an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
        // here is 2 method (1, 'GET', 2. Post)

        // GET REQUEST
        //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true);

        // POST REQUEST
        xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
        xhr.getResponseHeader('Content-type', 'application/json');


    // what to do on progress, this is optional(if you want use o r not)
    xhr.onprogress = function(){
        //console.log("On progress");
    }

    // readystatechange(this is old method)
    // xhr.onreadystatechange = function(){
    //     console.log("ready state is", xhr.readyState);
    // }


    // what to do when response is ready
    xhr.onload = function(){
        // if(this.status === 200){
        //     console.log(this.responseText)
        // }else{
        //     console.error("Some error occured");
        // }

        // with ternory operator
        this.status === 200 ? console.log(this.responseText) : console.error("Some error occured");
    }

    // send the requqest
    // xhr.send();

        let parms = `{"name":"mahi","salary":"222","age":"23"}`;
        xhr.send(parms);


    console.log("We are Done");
}


const popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler(){
    // initiate(create) xhr object
    const xhr = new XMLHttpRequest();

    // opecn xhr object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);

    // What to do when reponse is ready
    xhr.onload = function(){

        if(this.status === 200){
            let obj = JSON.parse(this.responseText);

            console.log(obj.data, "obj")
            let list = document.querySelector("#list");
            let str = "";
            for(key in obj){
                str += `<li>${obj[key]}</li>`
            }
            list.innerHTML= str;
        }else{
            console.error("Some error occured")
        }
    }

    // send 
    xhr.send();

    //
    console.log("welcoem to my chanel")
}