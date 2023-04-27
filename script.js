//count up to 10
{
for (let a = 1; a <= 10; a++) {
    console.log(a);
}
console.log("Counted up to 10 through for loop")
}

//count down from 10
{
for (let a = 10; a >=1; a--) {
    console.log(a);
}
console.log("Counted down from 10 through for loop")
}

//while loop up to 10
{
let count = 1;
while (count <= 10) {
    console.log(count);
    count++;
}
console.log("Counted up to 10 through while loop")
}

//while loop down from 10
{
let count1 = 10;
while (count1 >= 1) {
    console.log(count1);
    count1--;
}
console.log("Counted down from 10 through while loop")
}

//do while loop up to 10
{
let count = 1;
do {
    console.log(count);
    count++;
} while (count <= 10)
console.log("Counted up to 10 through do while loop")
}

//do while looop down from 10
{
let count = 10;
do {
    console.log(count);
    count--;
} while (count >= 1)
console.log("Counted down from 10 through do while loop")
}

//array for of loop counting up to 10
{
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let number of numbers) {
    console.log(number)
}
console.log("Counted up to 10 through a for of loop with an array")
}

//Extended Challenge
let word = "planet";
let space = " ";
do (
    console.log (word + (space * (10 - word.length)))
)
while (word.length < 10)