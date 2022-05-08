// PROBLEM - 1
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 5;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);



// PROBLEM - 2

function cube(n){
  result = (n*n*n);
  console.log(result);
}
cube(2);


// PROBLEM - 3
let i,
a = 20.00
area = 1
for(i=1;i<=a;i++)
{
 
    area = (1.73*a*a)/4
    
}
result = ((area*100)/100)
console.log(result.toFixed(2));

// PROBLEM - 4


var month = 8 ;

if (month >= 1 && month <= 12){
    var dt = new Date();


var year = dt.getFullYear();
daysInMonth = new Date(year, month, 0).getDate();
console.log(daysInMonth);
}else {
    console.log("input is not in range");
}


// PROBLEM - 5


function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr.toFixed(2) + ' \xB0F.';
    console.log(message);
}


cToF(12);


// PROBLEM - 6

const number = 10;

let sum = 0;


for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);


// PROBLEM - 7


function n_term(n){
  if(n<1){
      console.log("ERROR")
  }else{
   var result = n*n;
   console.log(result);
   }
   }
  n_term(18);


// PROBLEM - 8

function removeSpaces() {
  var originalText = 
     "Lorem Ipsum";

 removedSpacesText = 
     originalText.split(" ").join("");

 console.log(removedSpacesText.length)
}
removeSpaces()


// PROBLEM - 9


let root1, root2;


let a = 1;
let b = 5;
let c = 6;


let discriminant = b * b - 4 * a * c;


if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log("The roots of quadratic equation are "+ root1.toFixed(2)  + " and "  + root2.toFixed(2));
}


else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

   
    console.log("The roots of quadratic equation are "+ root1.toFixed(2) + " and "  + root2.toFixed(2));
}


// PROBLEM - 10


let arr = [ 3 ,9 ,1 ,44 ,6 ]
let w = [];
let k = 0;

for(let i = 0;i<arr.length;i++){
  if(i%2==0){
   w[k]=arr[i];
   k++;
  } 
}w.sort(function(a,b){return a-b});
k=0;
for(let i = 0;i<arr.length;i++){
  if(i%2==0){
   arr[i]=w[k];
   k++;
  } 
}
console.log(arr)




// PROBLEM - 11


function sort(arr){
  const  counts = {};
  arr.forEach((x)=>{
      counts[x] = (counts[x]||0)+1;
  });
  let a = [];
  let i = 0;
  for(let key in counts){
      a[i]= counts[key]
      ++i;
  }
  const key = Object.keys(counts)
  for(let i = 0;i<a.length;i++){
      for(let j =i+1;j<key.length;j++){
          if(a[i]==a[j]){
              if(key[i]<key[j]){
                  let temp;
                  temp = key[i];
                  key[i]=key[j];
                  key[j] = temp;
              }
          }
      }
  }
  console.log(key);
}

const arr = [3,3,4,4,7,8]
sort(arr)
   



// PROBLEM - 12
 


let n = 5;

var k = 0;
var k1 = 0;
let count = 0;
for(let i = 1;i<=n;i++){
   k = 0;
   k1 = i;
  while(k1>0){
    k = k*10+k1%10;
    k1=Math.floor(k1/10);

  }

  if(k==i){
   
    count++;
  }
}
console.log(count);

// PROBLEM - 13


let n = 5;
let w;
for(i = 0;i<n;i++){
  w = (n*n)+n;
//   console.log(w);
}
console.log(w);
 


// PROBLEM - 14

let n = 5;
var k = 0;
var k1 = 0;
let count = 0;
for(let i = 1;i<=n;i++){
   k = 0;
   k1 = i;
  while(k1>0){
    k = k*10+k1%10;
    k1=Math.floor(k1/10);

  }

  if(k==i){
   
    count++;
  }
}
console.log(count);



// PROBLEM - 15


function evaluatePostfix(exp)
{
  
    let stack = [];

   
    for (let i = 0; i < exp.length; i++)
    {
        let c = exp[i];

        if (c == ' ')
        {
            continue;
        }

       
        else if (c >= '0' && c <= '9')
        {
            let n = 0;

          
            while (c >= '0' && c <= '9')
            {
                n = n * 10 + (c - '0');
                i++;
                c = exp[i];
            }
            i--;

            
            stack.push(n);
        }

       
        else
        {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c)
            {
                case '+':
                stack.push(val2 + val1);
                break;

                case '-':
                stack.push(val2 - val1);
                break;

                case '/':
                stack.push(parseInt(val2 / val1, 10));
                break;

                case '*':
                stack.push(val2 * val1);
                break;
            }
        }
    }
    return stack.pop();
}
 
let exp = "5 3 1 * + 9 -";
console.log(evaluatePostfix(exp));




