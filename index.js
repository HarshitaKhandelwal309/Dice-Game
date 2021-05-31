let randNum1 = Math.floor(Math.random()* 6)+1
// console.log(randNum);

let randomSource = "images/dice" + randNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",  randomSource );

let randNum2 = Math.floor(Math.random()* 6)+1
// console.log(randNum);

let randomSource1 = "images/dice" + randNum2 + ".png";
console.log(randomSource1);

document.querySelectorAll("img")[1].setAttribute("src",  randomSource1);

if(randNum1 > randNum2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randNum2 > randNum1)
{
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else

{
    document.querySelector("h1").innerHTML = "Match Draw !" ; 
}

