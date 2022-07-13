/* const {frutas,dinero}= require("./frutas")
const cowsay= require("cowsay")

frutas.forEach(element => {
    console.count(element)
})
console.log(dinero)


console.log(cowsay.say({
    text:'hola mondillo animal',
    e:'go',
    T:'W'
    }));

 const naan=(num1,num2)=>(num1*num2-6)
 
 console.log(naan(20,15));
    
const mensaje=nombre=>'hola soy'+ nombre
console.log(mensaje('juanito'));
const numero= (num=3)=>num*6

console.log(numero())
// templete string

const hilo= (n1)=>`soy el numero: ${n1}`
console.log(hilo(25));
// objeto

const obj={
    dir:"calle 21 56",
    name:'emmanuel',
    pais:'colombia'
}
obj.far={deporte:"tenis",
der:false,vara:['casa','burro']}

const {vara}=obj
console.log(vara);
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 25, 30, 40, 50];

console.log(rest,b);
// expected output: Array [30,40,50] */



fetch('https://randomuser.me/api/');

   then(res=>res.json())
   then(data=>{console.log(data);})

   console.log(data);