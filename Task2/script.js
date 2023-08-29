// //Synchronous Javascrip: It executes line by line from top to down
// console.log("I")
// console.log("love")
// console.log("Anime")
// console.log("so much")


// // Asynchronous Js: Every line executes on its own
// console.log("I")
// console.log("love")
// setTimeout(() => {
//     console.log("Anime")
// },4000)
// console.log("so much")


// //Callback : Calling a function inside other function
// function one (call_two) {
//     console.log("Step 1 complete call step 2");
//     call_two()
// }
// function two (){
//     console.log("step 2");
// }

// // one();
// // two();
// one(two);

// Starting the program

// let stocks = {
//     Flavours : ["Anjeer","Badam","Pista","Khajur"],
//     Ingredents:["vermiclli","Milk","Ice cream","Sabja Seed","Rose syrup","Jelly"]
// };





// let order = (Flavours, call_production) => {
//    setTimeout(() => { 
    
//     call_production();
// }, 2000);//(`${stocks.Flavours[Flavours]} was selected`);
// }

let production = () => {
    setTimeout( () => {
        console.log("The production has started")

        setTimeout(() => {
            console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} are being added`)

            setTimeout( () => {
                console.log("Water and Milk are added successfully")

                setTimeout( ()=> {
                    console.log(`${stocks.Toppings[2]} is selected`)

                    setTimeout( ()=> {
                        console.log("Topping has been added and Faluda is ready to serve")
                    },3000 )
                },1000)
            },2000)
        },1000)

    
    },2000)
}

// order( 0,production);
