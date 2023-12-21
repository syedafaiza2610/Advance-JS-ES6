 // this means current chz
// console.log(this)
//  console.log(location.pathname)
//  function check() {
//     console.log(this)
//  }
//  check();
// let obj = {
//     name : "Haroon",
//     displayName : function(){
//         console.log(this.name)
//     }
// }
let obj1 = {
    name : 123,
    foo : function () {
        console.log(this.name);
        function chk (){
            console.log(this)
        }
        chk()
        // setTimeout(function(){
        //     console.log(window)
        // }, 2000);
    }
}
obj1.foo()
// obj.displayName()
// setTimeout((check )
//     , 3000);
    // setTimeout(() => console.log("Arrow function is also called lamda function")
    //     , 1000);
