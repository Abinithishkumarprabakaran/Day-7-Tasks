// Get all the countries from the Asia continent /region using the Filter function

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function(){
    let data = request.response;
    let arr = JSON.parse(data);
    let res = arr.filter((ele) =>{
        if(ele.region == "Asia"){
            return ele.name.common;
        }})
    let result = res.map((ele) => ele.name.common);
    console.log(result);
}

// Get all the countries with a population of less than 2 lakhs using Filter function

let request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function(){
    let data = request.response;
    let arr = JSON.parse(data);
    let res = arr.filter((ele) => ele.population < 200000);
    let result = res.map((ele) => ele.name.common);
    console.log(result);
}

let request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function(){
    let data = request2.response;
    let arr = JSON.parse(data);
    let res = arr.forEach(elem => {
        if(!(elem.name.common == undefined || elem.capital == undefined || elem.flag == undefined)){
            console.log(`name: ${elem.name.common}, capital: ${elem.capital[0]}, flag: ${elem.flag}`);
        }
    });
}

// Print the total population of countries using reduce function

let request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function(){
    let data = request3.response;
    let arr = JSON.parse(data);
    let res = arr.reduce((acc,cv) => acc+cv.population,0);
    console.log(`The total population is: ${res}`);
}


// Print the country which uses US Dollars as currency.
let request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all", true);
request4.send();
request4.onload = function(){
    let data = request4.response;
    let arr = JSON.parse(data);
    for(let i = 0; i<arr.length; i++){
        if(arr[i].currencies === "USD"){
            console.log(arr[i].currencies);
        }
    }
}

