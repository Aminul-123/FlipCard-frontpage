// const people =[
//     {
//         name: "Alex", age: 14
//     },
//     {
//         name: "john", age: 30,
//     },
//     {
//         name:"Rajen", age: 65,
//     },
//     {
//         name:"hussain", age : 45,
//     },
//     {
//         name: "Rajen", age : 39,
//     },
//     {
//         name:" motiur", age: 32,
//     }

// ];
// const res= people.find((men) =>men.name ==="Rajen");
// console.log(res);

//Reduce Method
// syntax 
//  Array.reduce (function (p, c)  {

//  }, initial value);
// const number= [2,4,5,6];
// const res = number.reduce(function (p, c) {
//         return p*c;
// },1);
// console.log(res);
// console.log(2* 4*5*6);

// const people =[
//     {
//         name:"alex", age :20
//     },
//     {
//         name:"huxn", age :30,
//     },
//     {
//         name: "ali", age : 32,
//     },
//     {
//         name: "johnWebDev ____123", age : 21
//     }
// ];
// const res= people.reduce( (p,c) => (c.name.length > p ? c.name.length : p ), 1);
//     // if (c.age> p) {
//     //     return c.age;
//     // } else {
//     //     return p;
//     // }
    
// console.log(res);

//MAP data structure
// const map =new Map();
// const keyOne= "string";
// const keyTwo= {};
// const keyThree = function () {};
// map.set(keyOne, "value of key one");
// map.set(keyTwo, "value of key Two");
// map.set(keyThree, "value of keyThree");
// map.set("keyThree", "Value of KeyThree");
// console.log(map);

// const map =new Map([
//     ["key1", "value of keyOne"],
//     ["key2", 2],
//     [3, "value of 3"],
//     [true, "true or false"]
// ]);
// console.log(map);
// console.log(map.get("key1"));
// console.log(map.get("key2"));
// console.log(map.get(3));
// console.log(map.get(true));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.delete("key2"));
// console.log(map.size);

// iterating over map
// for(let [key, mapvalue] of map) {
//     console.log(`${key}, -------- ${mapvalue}`);
// }
// for (let allKey of map.keys()) {
//     console.log(" ",allKey);
// } 

// for(let value of map.values()) {
//     console.log(value);
// }

//SET data structure
// const initialValue= new Set([2, 3, 4, 7, 2, 7, 4, "myName", "Your Name", "Alex"]);
// console.log(initialValue);
// const set  =new Set();
// set.add("apple");
// set.add("banana");
// set.add("orange");
// set.add("apple");
// console.log(set);
// console.log(set.has("apple"));
// console.log(set.has("grape"));
// set.delete("orange");
// console.log(set);
// set.clear();
// console.log(set);
// set.add("string");
// set.add({
//     name:"huxn",
//     age:23,
// });
// set.add(10);
// console.log(set.keys());
// console.log(set.values());

// console.log(set.size);
// console.log(document.body);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.head);

// const h1 =document.getElementsByTagName("h1");
// console.log(h1);
// const h2 =document.getElementsByClassName("cls");
// console.log(h2);
// console.log(document.getElementById("inp"));
// console.log(document.querySelector(".cls"));
// const h1 = document.querySelector("h1");
// console.log(h1.innerText);
// console.log(h1.textContent);
// console.log(h1.innerHTML);
// h1.innerHTML= "<em> First heading</em>"
//gettinfg and setting attribute
// const a =document.querySelector("a");
// const input = document.querySelector("input");
// console.log(a);
// console.log(a.href);
// console.log(input.placeholder);
// console.log(input.type);

//set attribute
// a.href="https://www.youtube.com/@HuxnWebDev";
// console.log((input.value="hello"));
// console.log(input.type="password");
// console.log((input.placeholder=`please provide 
//       a strong password`));
// console.log(input.getAttribute("type"));
// console.log(input.setAttribute("type", "text"));
// console.log(input.setAttribute("placeholder", "type....."));

