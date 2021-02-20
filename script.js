var containerEle = document.body.querySelector(".container");

var num1=Number(prompt("What is your bill?"));

var num2=.07;

var num3=(num1*num2);

var num4=(num3+num1);

var num5=.05;

var num6=(num4*num5);

var num7=(num6+num4);

var num8=("Your final bill is $")+num7

containerEle.innerHTML=num8;