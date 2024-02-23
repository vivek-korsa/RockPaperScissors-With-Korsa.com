/*const profile = {
    fullname:"vivek",
    surname:"korsa",
    collage:"griet",
    year:1,
    roomno:3209,
};
console.log(profile.year);
//multiple of 5
let num = prompt("enter a number:");
if (num%5===0)
{
    console.log(num,"is a multiple of 5");
}
else
{
    console.log(num,"is not a multiple of 5");
}
//marks and grades
let marks = prompt("enter your marks from 0-100:");
let grade;

if (marks>=90 && marks<=100)
{
    grade="A";
}
else if ( marks>=70 && marks<=89)
{
    grade="B";
}
else if (marks>=60 && marks<=79)
{
    grade="C";
}
else if ( marks>50 && marks<=69)
{
    grade="c";
}
else
{
    grade="fail";
}
console.log("your grade is:",grade);
//even numbers
for (let i=1;i<=10;i++)
if(i%2===0)
{
    console.log(i);
}
// guess the number
let mynumber = 21;
let usernumber = prompt("enter your number:");
while(usernumber!=mynumber)
{
usernumber = prompt("try again:");
}
console.log("yes your are right");
//using fullname length 
let fullname= prompt("enter fullname without spaces");
username='@'+fullname+fullname.length;
console.log(username);
//avg of marks in class
let scores=[70.99,79,78,68.8,50];
console.log("marks of students:");
sum=0;
for (let mark of scores)
{
console.log(mark);
sum+=mark;
}
console.log(`sum of marks =${sum}`);
avg=sum/5;
console.log(`average marks =${avg}`);
let item=[100,200,300,400];
console.log("product prices:")
console.log(item);
console.log("discount of 10% on each product");
discount=0;
for(i=0;i<=3;i++){
discount=item[i]-10*item[i]/100
console.log(discount);}
//same code using otherway

let cost=[100,200];
for(i=0;i<=1;i++){
let products=["watch","chain"];
for (let product of products)
{
    console.log(`${product} price =`,cost[i]);
    i++;}
    for(i=0;i<=1;i++)
    for (let product of products){
    let offer=cost[i]/10; 
    cost[i]=cost[i]-offer;
    console.log(`${product} offer price=`,cost[i]);
    i++;
    }
}
//how to find vowels
function countvowels(str){
    let count=0;
for (let char of str){
    if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
    }
}
return count;
}
//by using arrow to get the same code
const countvow=(str)=>{
    let count=0;
for (let char of str){
    if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
    }
}
return count;
}
//how to use forEach()

let arr= [1,2,3,4,5,6];
arr.forEach((val)=>{
console.log(val);
});*/
//finding squares of numbers using arrays
let arrays=[1,2,3,4,5];
arrays.forEach((val)=>{
    console.log(val,val*val);
});
//in ither way
let nums=[6,7,8,9];
let calcsquare=(num)=>{
    console.log(num,num*num);
}
nums.forEach(calcsquare);
// filtering the numbers
let numbers=[90,92,78,87,93,67,89]
let nintyplus=numbers.filter((val)=>{
return val>90;});
console.log(nintyplus);
//sum of n numbers and their product
let n=prompt("enter your number:");
let a=[];
for (let i=1;i<=n;i++)
a[i-1]=i;
{
    console.log(a);
}
let sum=a.reduce((pre,curr)=>{
    return pre+curr;
});
console.log(sum);
let factorial=a.reduce((pre,curr)=>{
    return pre*curr;
});