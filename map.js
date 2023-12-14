// const num = [4,9,16,25]; 
// console.log(num.map(Math.sqrt));
// const num = [4,9,16,25];
// num.map(Math.sqrt)
// console.log(num)


// const arr = [4,16,25];
//  console.log(arr.map((item) => item + 1))
// const arr = ["Faiza","Saira","Saba"];
//  console.log(arr.map((item) => "Hello" + " " + item))

// const str = ["Faiza","Saira","Saba"];
// res = str.map((item) => { 
//     return item + 1
// })
// console.log(res)
 
// const names = ["Faiza","Saira","Saba"];
// const resp = names.map((item , i) => console.log(`The Value = ${item} address = ${i}`))
// console.log(resp)

// const  numArr =[80, 70 , 60 , 90, 40, 48, 50];
// const result = numArr.filter((item) => item > 70)
// console.log(result)

// const  num =[80, 70 , 60 , 90, 40, 48, 50];
// let sum = 0;
// num.map((item) => { 
//     sum = sum + item
// })
// let avg = sum / num.length;
// console.log(avg.toFixed)

const  num =[80, 70 , 60 , 90, 40, 48, 50,11,47];
let sum = 0;
num.map((item) => { 
    sum = sum + item
})
let avg = sum / num.length;
console.log(avg.toFixed(2))
const re = num.filter((item) => item % 2 === 0)// even
console.log(re)
const res = num.filter((item) => item % 2 != 0 && item > 20) // odd 
console.log(res)