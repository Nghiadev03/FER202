// let person = {
//     name: "john",
//     age: 30,
//     greet: function(){
//         console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old`);
//     }
// }
// person.greet();

// function example(){
//     let x=10;

//     if(true){
//         var y=20;
//         console.log(x);
//         console.log(y);
//     }
//     console.log(x);
//     console.log(y);
//     }
//     example();

// function example(){
//     const PI = 3.14159;

//     if(true){
//         const MAX_VALUE =200;
//         console.log(PI);
//         console.log(MAX_VALUE);
//     }
//     console.log(PI);
//     console.log(MAX_VALUE);
// }
// example();

// function sum(...numbers){
//     let total=0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4,5));
// console.log(sum(100,900));

// function greet(name='Dang'){
//     console.log(`Hello, ${name}`);
// }
// greet();
// greet('Nghia');

// function createFullName(firstName,lastName ='Dang'){
//     console.log(`${firstName} ${lastName}`);
// }
// createFullName('Nghia');
// createFullName('Dang','Nhan');

// function getSumNum(a,b) {
//     const customPromise = new Promise((resolve,reject)=>{
//         const sum= a+b ;
//         if(sum<5){
//             resolve ("Let's go")
        
//         }else{
//             reject(new Error('Opps!.. Number must be less than 5'))
//         }
//     })
//     return customPromise

// }
// getSumNum(1,3).then(data => {
//     console.log(data)
// })
// .catch(err =>{
//     console.log(err)
// })
class Rectangle{
    constructor(width,height){
        this.height=height;
        this.width=width;
    }
    getArea(){
        return this.width*this.height;
    }
}
const rect= new Rectangle(5,10);
console.log(rect.getArea());