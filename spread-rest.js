// page 151  js to professional
// spread operator  syntax ...

// const one = [1,2,3]
// const two = [4,5,6]
// const three = one + two
// console.log(three)
// var combineArray = [...one,...two]
// console.log(combineArray)

// const one = ["Faiza" ,"Saira"]
// const two = ["Sami"]
// const three = one + two
// console.log(three)
// var combineArray = [...one,...two]
// console.log(combineArray)

// let a = 9;
// let b = a;
// b = 8 // value
// const stu = ["abc" ,"efg"]
// const newArr = stu // reference assignment mean same name 2
// newArr.push('xyz')
// console.log(stu)
// const correctArr = [...stu]
// correctArr.push('xyz')
// console.log(correctArr)
// const nums = [12,34,456,46]
// function sum(x,y,z) {
//     return x+y+z
// }
// let result = sum(...nums)
// console.log(result)
function display(...p2 ) { // ..p2 is lye dya hai taky user jitny bhi argument dale wo ...p2 me store hoty rahen
    document.write( ...p2)
}
display('Hi I need To print you' , 'Hello I am Faiza' ,'abcd')

function displayArr(arr,...p) {
    console.log(arr,...p)
}
displayArr(1,2,3)














