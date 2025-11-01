//practice Questions and also error handling while taking input foem user using prompt

//1. print 1 to 10 

// for(let i=1;i<=10;i++){
//     console.log(i)
// }


//2. Print only even number from 1 to 25

// for(let i=1;i<=25;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }


//3. ask a user number and check if its postitive or negative

// let num =prompt("Enter number");

// if(num>0){
//     console.log("Positive");
// }

// else{
//     console.log("Negative");
// }


//4. ask if elgibile for vote or not

let age  = prompt("Enter your age");

if(age>=18){
    console.log("Eligible for Vote")
}

else{
    console.log("Not Elgibile")
}

//handling errors in loops


let num = prompt("Enter Number");

if(num ===null){
    console.error("You click on Cancelled button");
}
else{
    if(num.trim()===""){
        console.error("Empty spaces are not allowed")
    }
    else{
        num = Number(num.trim());
        if(isNaN(num)){
            console.warn("only Number are allowed");
        }

        else{
            console.log("this is definitly number ")
        }
    }

    
}