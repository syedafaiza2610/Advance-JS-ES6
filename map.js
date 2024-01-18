// const num = [4,9,16,25]; 
// console.log(num.map(Math.sqrt));
// const num = [4,9,16,25];
// num.map(Math.sqrt)
// console.log(num)

// const arr = ["one","two","three"]
// const obj =[
//     {id:1, name: "SMIT"},
//     {id:2, name: "navtac"}
  
// ]
// const newArr = arr.map((item,index) => `${item} is at ${index}`)
// console.log(newArr);
// console.log(arr)
// console.log(obj.map((item) => item.name))


const arr = ["one","two","three"]
const obj =[
    {id:1, name: "SMIT"},
    {id:2, name: "navtac"},
    {id:2, name: "aptech"},
    {id:2, name: "areena"}
]

// const newArr = obj.map((item,index) => (`${item.name} is the name `))
// console.log((obj.filter((item) => item.name.length > 4)))

const long = obj.filter((item) =>{
    return item.name.length > 4
})
long.map((item) => console.log(item.name))



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

// const  num =[80, 70 , 60 , 90, 40, 48, 50,11,47];
// let sum = 0;
// num.map((item) => { 
//     sum = sum + item
// })
// let avg = sum / num.length;
// console.log(avg.toFixed(2))
// const re = num.filter((item) => item % 2 === 0)// even
// console.log(re)
// const res = num.filter((item) => item % 2 != 0 && item > 20) // odd 
// console.log(res)
// const students = [
//     {id: 1 , name: "Faiza" , marks:74},
//     {id: 2 , name: "Saba" , marks:68},
//     {id: 3 , name: "Abc" , marks:76}
// ]
// const result3 = students.filter((item) => item.marks > 70)
// console.log(result3)







