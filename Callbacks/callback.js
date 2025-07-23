// Callback = a function that is passed as an argument to another function
/*
              Used to handle asynchronous operations:
              1. Reading a file
              2. Network requests
              3. Interacting with databases

              "Hey, when you're done, call this next."
 */

//hello(wait);
sum(displayPage,5,5);


function hello(callback,callback1){
    console.log("Hello!")
    callback();
    callback1();
    sum()
}

function goodbye(){
    console.log("goodbye!")
}

function wait(){
    console.log("wait!")
}

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result)
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}


