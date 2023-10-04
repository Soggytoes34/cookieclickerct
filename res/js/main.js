//console.log; - vypisuje do konzole
console.log("ahoj světe");
/*
let myNumber = 16;
console.log(myNumber);
myNumber = 4;
console.log(myNumber);
const PI = 3.14;
console.log(PI);
PI = 4;
console.log(PI)
*/
const godmode = document.getElementById("godmode");
const dog = document.getElementById("dog");
const counter = document.getElementById("counter");
let numberOfCookies = 0;
const upgrade = document.getElementById("upgrade");
const autoclicker = document.getElementById("autoclicker")
let clickIncrease = 1;
//.onclick - na kliknuti
// () => arrow funkce
// {} - scope
dog.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;    
    //++ pricte jednicku - inkrement
    numberOfCookies += clickIncrease;
    console.log(numberOfCookies);
    counter.innerHTML =  numberOfCookies;
}

 

upgrade.onclick = () => {
    if (numberOfCookies >= 50) {
        //odectu cenu upgradu
        numberOfCookies = numberOfCookies - 50;
      //numberOFCookies = numberOfCookies - 50
        counter.innerHTML =  numberOfCookies;
        //zvednu pocet na kliknuti
        clickIncrease++;
    }

}
autoclicker.onclick = () => {
    if (numberOfCookies >= 100) {
        numberOfCookies -= 100
        counter.innerHTML = "Cookies: " + numberOfCookies
        //opakovani po case pro pridani susenky
    setInterval(() => {
        numberOfCookies += 1;
        counter.innerHTML = "Cookies: " + numberOfCookies
    }, 1000); //musim mit argumenty
    }
}

godmode.onclick = () => {
   numberOfCookies += 9999;
   counter.innerText = "Cookies: " + numberOfCookies
}
 