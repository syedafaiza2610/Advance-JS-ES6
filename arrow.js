// same as function
// function check() {
    
// }
// const check = () => {
// console.log("Its my first arrow function")
// }
// check();

// const addOne = (num) => {
//     return num + 1
//     }
//     const a = addOne(10)
//     console.log(a)

//     const add1 = (num) => num + 1 // implisit 
        
//         const b = add1(10)
//         console.log(b)
        // const addOne = (num) =>  num * num 
        //     const a = addOne(6)
        //     console.log(a)

        let num = prompt("Enter Your number");
        const check = (num) => num % 2
        const result = check(num)
        console.log(result)
        if (result === 0) {
            console.log("Even Number")
        } else {
            console.log("Odd Number")
        }
