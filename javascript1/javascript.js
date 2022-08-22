let  user = {
    firstname:'giorgi',
    
    
    lastname: 'smith',
    
    
    age: 25,
    
    
    studentstatus: 'active'
    
    
    };
console.log(typeof studentstatus);
console.log(user.studentstatus);
// homework2
let studentinfo = ['giorgi', 'smith', 25, 'active']
console.log(studentinfo[0]);
console.log(studentinfo[1]);
console.log(studentinfo[2]);
console.log(studentinfo[3]);
// homework3
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let i=0; i<numbers.length; i++){
if (numbers[i]>=5){
    console.log(numbers[i])
}
}
// homework4
let userx = {
    name: 'Giorgi',
    age: 20,
    studentStatus: 'active'
}
if (userx.age <= 18 && userx.studentStatus == 'active'){
    console.log('hello');}
else if (userx.name == 'Levani'){
    console.log('hello Giorgi');}
else if(userx.studentStatus == 'active' || userx.age < 25){
    console.log('Hello World');}
else{
    console.log('error');
}

// homework5

let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];
var array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

for (i=0; i<array.length; i++){
    if (typeof array[i] === 'string'){
        console.log(array[i]);
    }
for (var item of array){
    if (typeof item == 'string')
    console.log(item);
}

// homework6

let arrayx = [32, 10, 'hello', null, 'hello2', 50 ]
var array = [32, 10, 'hello', null, 'hello2', 50 ]

for (let i=0; i<arrayx.length; i++){
    if (typeof arrayx[i] != 'string'){
        console.log(arrayx[i]);
    }
for (var item of array){
    if(item % 5 == 0 && typeof item == 'number')
    console.log(item)
}

// homework7

let arrayy = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];
var array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

for (let i=0; i<arrayy.length; i++){
    if (arrayy[i] >= 0){
        console.log(arrayy[i]);
    }
for (let i = 0; i < array.length; i++) {
    const numbers = array[i];

for (let x = 0; x < numbers.length; x++) {
    const positive = numbers[x];
    if (positive > 0)
    console.log(positive);
}
}


// additional1

let array1 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
var array = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10 ]

for(let i=0; i<array1.length; i++){
    if(array1[i] % 2 == 0){
        console.log(array1[i]);
    }
for (let x of array){
    if(x % 2 == 0)
    console.log(x)
}

// additional2

let array2 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
var array = [ 2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10 ]

for(let i=0; i<array2.length; i++){
    if(array2[i] % 2 != 0){
        console.log(array2[i]);
    }
for (let x of array){
    if(x % 2 == 1)
    console.log(x)
}
