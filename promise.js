 //declaring function
//  function sum(a,b) {
//     return a+b
// }
//     console.log(sum(3,4))
  

 /* promise is made and consumed ya to complete hoga ya to fail hoga
 promise is asynchronous*/
//  console.log('first')
//  setTimeout(() => console.log('second'), 2000);
//  console.log('third')
//  setTimeout(() => console.log('fourth'), 1000);

//how to declare promise it is a object
// let a = 1223
// const myPromise = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve('sucess'),2000)
//     // if (a == 10) resolve('resolve') 
//     // else reject('reject')
// })

// myPromise
// .then((res) => console.log("I am Fulfiled",res)) // hamesha resolve dena hoga 
// .catch((res) => console.log("I am Failure",res))
// // new Promise((resolve, reject) => {
//     resolve()
// })
fetch('https://github.com/syedafaiza2610/Meal-App.git')
.then(data => data.json())
.then(data => console.log(data))
.catch(data => console.log('not running'))