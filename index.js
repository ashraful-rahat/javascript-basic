for( num= 0; num <= 100; num++){
    if(num / 2===0){
        console.log(num);
    }
};


for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}


let sum =0;
for( let i = 0; i<= 20; i++){
   sum= sum+i
   console.log(sum);
}



function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))



function price(chips,coke){
    var sum = chips+coke;
     console.log(sum);
}
price(15,35);

function iseven(number){
    const remainder = number%2;
    console.log(remainder);
    if( remainder===0){
        // console.log("number is even");

    }
    else{
        console.log("number is odd");
        
    }
}
 iseven(91);

function iseven(number){
    const remainder = number%2;
    console.log(remainder);
     if( remainder===0){
         console.log("number is even");
      return true;
    }
     else{
         console.log("number is odd");
         return false;
        
    }
}
iseven(99);
console.log(iseven);



var carName='bmw';


function myfunction(){
    var carName = "volvo";
    console.log(carName);
}
myfunction();
console.log(carName);

//   (array er modde jog kora)

 function getSumAarry(numbers){
    let sum=0;
    for(let i=0; i< myNumbers.length; i++){
        const index=i; 
        const element=numbers[index];
        sum=sum+element;
        console.log(index,element,sum);
    }
    return sum;
 }

 const myNumbers1 =[12,18,24,72,98,45,65];
 getSumAarry(myNumbers1);


//  even number er array) (
 
function getSumAarry(numbers){
    
    for(let i=0; i< myNumbers.length; i++){
        const index=i; 
        const element=numbers[index];
         if(element % 2 === 0){
            console.log(index,element);

         }
   
    }
    
 }

const myNumbers2 =[12,18,24,72,98,45,65];
getSumAarry(myNumbers2);

 
//  (even number er array)

 

 function getSumAarry(numbers){
    
    for(let i=0; i< myNumbers.length; i++){
        const index=i; 
        const element=numbers[index];
         if(element % 2 !== 0){
            console.log(index,element);

         }
   
    }
    
 }
 const myNumbers =[12,18,24,72,98,45,65];
 getSumAarry(myNumbers);



// newww
//  array theke niye gun kora  

 function multiNumber(numbers){
    let result =1;
    for(let i = 1; i<= numbers; i++){
        result= result * i
    }
    return result;

 }
 const result = multiNumber(9);
 console.log(result);




function positive_negative(x, y)
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));



function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);