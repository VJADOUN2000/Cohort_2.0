
// JS mei aise words jinse kuch ko sakta hai wo saare keywords js kay keywords hai
// jaise let, var, const, if, else, for, while, function, return, switch, case, break


//1. let, var, const

// a=18;
// var a =18;
// let a =18;
// const a= 18;
// var a;
// let a;
// const a; // const ko bina value diye declare nahi kar sakte

//console.log(a)
let a =15;
// var a= 18; // var ko baar baar declare kar sakte hai



//primitive and referene value

//strings, number, null, udefined, symbol,boolean, bigint -> aise value jinko copy karne mal tumhe real value mil jaye
 

//object, array, function -> inko copy kare par apko real value nahi milegi but reference milega parent ka

// {},[],()


//Stringd

//"" -> Double quotes
// '' -> Single quotes
//`` -> backticks


`Vikrant`


//symbol  -> unique immutable value

let s1 = Symbol("ID");
let s2 = Symbol("ID");

// console.log(s1===s2);

// console.log(typeof s1);

Number.MAX_SAFE_INTEGER


//bigint

let c =9007199254740991n;

console.log(typeof c);


//object, array, function 

let name ={
    first: "Jadoun"
};

let name1 = name;

name1.first="Vikrant";

console.log(name1);
console.log(name);


/// Dynamic typing  -> JS mei static typing nahi hai kyuki yaha par dynamic typing hai matlab ki aap js mei data types ki value change kar sakte hu kaise :

let i = 12;
i =true;
i = [45,45,54]
i = null;
i = undefined;
i = {
    name: "JADOUN"
};

console.log(i);


// typeof quirks (e.g., typeof null === 'object' )

//NaN ==NaN


//0.1+0.3

// type coercion (== or ===)

// == -> loosly check  (checks value only)
// === -> strictly check (check value + data type only) -> always use this

// "Vikrant" + 45 -> "Vikrant45"  ----> only with addition

// "45" * 2 -> 90 -> 


// truthy and falsy value


// "", 0 , false , null, undefined , document.all -> falsy

//rest values are ---> truthy


//true + false --> 1