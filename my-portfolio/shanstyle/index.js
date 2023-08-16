//   ========================================================================    starts to js    ====================================================>

// trim

// if else

// prompt

// ternary operator

// slice , substring , substr

// REPLACE

// toUpperCase

// function

// function expressions

// return keywords

// Anonymous function

// Arrow function

// switch statement

// while loop statement

// do-while loop statement

// for loop

// for loop  +  Array

// for in loop

// for of loop

// forEach

// forEach +  fat Arrow

// replace

// indexOf

// lestindexOf

// includes

// index search

// fate arrow function + find

// findIndex

// filter

// sort

// push

// pop

// unshift

// shift

// concat

// flat

// Array.isArray

// spread operator

// splice

// calclator

// ====================================================================      trim      ======================================================>



// let us = "     shan     ";
// console.log(us.length);
// console.log(us.trimStart().length);
// let us2 = "umar";
// const full = us.concat(" ali ", us2)
//  console.log(full.length);
//  const num = us.trim();
//  console.log(num.length);



// ====================================================================     if else     =====================================================>

// var tomr = "rain";
// if (tomr == "rain") {
//     console.log('take a raincoat');
// }
// else {
//     console.log('no need to take a raincoat');
// }

//  var y = 2020;
//  if (y % 4 === 0) {
//     if (y % 100 === 0) {
//         if (y % 400 === 0) {
//             console.log("the y " + y + " is a leap y");
//         }else{
//             console.log("the y " + y + " is not a leap y");
//         }
//     }else{
//         console.log("the y " + y + " is a leap y");
//     }
//  }else{
//     console.log("the y " + y + " is not a leap y");
//  }
// ========================================================================     prompt     ===================================================>
// ==========
// let x = prompt("fhjfryrytro dukmbfrhv  gff   io  0uyukjkg vrptb7t78t  y vr  r ty fryt");                                                                ==
// if (x.startsWith("shan")) {
//     document.write("dshfgfuewy ih 8yu iuu yhoi h98h98h 98h ");
// }
// else{
//     alert(jfdoiugids);
// }

// ====================================================         ternary operator       =====================================


// var age = 77; console.log((age >= 18)? "you can vote": "you can't vote");



//-----------------------------------------============    slice , substring , substr     ===============---------------------------------->



//  ----------------------------======   slice    =====---------------------------->

// let e = "I am a humen";
// let w = e.slice(3, 9);
// console.log(w);



// <-----  slice  -----> //


// let e = "I am a humen";
// let w = e.slice(-9, -3);
// console.log(w);

// -------------------------=========   substr  =========--------------------------->

// let x = "I am a humen";
// let y = x.substr(3 , 7);
// console.log(y);


// -----------------------==========     substring    =========--------------------->

// let x = "I am a humen"
// let a = x.substring(7 , 12);
// console.log(a);


// -------------------------------------------------------      REPLACE     ----------------------------------------------------------------->

// let x = "shan ALI umar shan ALI umar shan ALI umar shan ALI umar shan ALI umar shan ALI umar shan ALI umar shan ALI umar "

// console.log(x.replaceAll("shan" , "sum"));






// -----------------------------------------------------       toUpperCase     ---------------------------------------------------------->

// let x = "hjfoiuwy ihfoiywes fhilkjgslijlvjn fj ijs oefjijf poia upoias ";
// console.log(x.toUpperCase());


// ------------------------------------------------------       function       ----------------------------------------------------------------->


// function sum(a,b) {
//     var umn = a+b;
//     console.log(umn);
// }
// sum();
// sum(233,23434);
// sum(233,3124);
// sum(233,2313);
// sum(0,3434);
// sum(321,44443);
// -----------------------------==================     function expressions       ==================------------------------------------------>


// function sum(a,b) {
//         var umn = a+b;
//         console.log(umn);
//     }
//     var num = sum(12,123);


// ------------------------------===================       return keywords        ===============-------------------------------------------->


// function sum(a,b) {
//     return umn = a+b;
//     }
//     var num = sum(12,123);
//       console.log("shan ali umar ka roll number "  +  num);


// ------------------------------===================       Anonymous function      ================----------------------------------------->


// var suu = function(a,b) {
//     return umn = a+b;
//     }
//     var num = suu(23,3432);
//     var num1 = suu(23,32);
//     console.log("shan ali umar ka roll number " + num , num1);


// -------------------------------====================      Arrow function       ==================---------------------------------------->



// const sum = () => `the Arrow functionis anser of ${(a = 2)+(b =3)}`
// console.log(sum());



// -----------------------------------------------------        switch statement       ----------------------------------------------------->



// var area = "circle";
// var PI = 3.142, l = 5 , b = 4 , r = 3;

// if (area == "circle") {
//     console.log("the area of the circle is : " +  PI*r**2);
// }else if (area == "trinagle") {
//     console.log("the area of the trinagle is : " +  (l*b)/2);
// } else if (area == "rectangle") {
//     console.log("the area of the rectangle is : " +  (l*b));
// } else{
//     console.log("please enter valid data");
// }



// =============================================            switch statement             =========================================================



// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;

// switch (area) {

//     case "circle":
//         console.log("the area of the circle is : " + PI * r ** 2);
//         break;

//     case "trinagle":
//         console.log("the area of the trinagle is : " +  (l*b)/2);
//         break;

//         case "rectangle":
//             console.log("the area of the rectangle is : " +  (l*b));
//             break;

//     default:console.log("please enter valid data");
//         break;
// }



// --------------------------------------------===========     while loop statement      =========--------------------------------------


//  var num = 1;
//  while (num <= 10) {
//     console.log(num);
//     num++
//  }


// -------------------------------------=================      do-while loop statement     ==================------------------------->



//  var num = 1;
//   do{
//     console.log(num);
//     num++;
//  }while (num <= 10);



// --------------------------------------------===============       for loop       ===========--------------------------------------------->

// for (var num = 1; num <= 10; num++) {
//     var sum = 8;
//     console.log(sum + " * " + num + " = " + num*sum );
// }


// ------------------------------------------===============  for loop  +  Array  ==============-------------------------------------------->


// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];
// for (var t = 0;  t<ew.length; t++) {
//     console.log(ew[t]);
// }


// --------------------------------------------===============       for in loop       ===========--------------------------------------------->



// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];

// for (let element in ew) {
//     console.log(element)
// }


// --------------------------------------------===============       for of loop       ===========----------------------------------------->

// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];

// for (let element of ew) {
//     console.log(element)
// }


// --------------------------------------------===============       forEach       ===========----------------------------------------->


// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];
// ew.forEach(function (element , index , Array) {
//     console.log(element , index);
// })



// --------------------------------------------===============       forEach + fat Arrow       ===========----------------------------------------->



// const ew = ['shan ','ali ' , 'umar ' , 'num' , 'amir'];
// ew.forEach( (element , index , Array) => {
//     console.log(element , index);
// })



// ========================================================     replace      ==============================================================>


// let x = "shan ali umar  amir shan";
// let y = x.replace("shan","weeee").replace( "amir","weertyui");
// console.log(y);



// ------------------------------------------==================   indexOf    ==============----------------------------------------->


// let x = "i am a student.i am a boy";

// let y = x.indexOf("am");
// console.log(y);


// ---------------------------------


// let x = "i am a student.i am a boy";

// let y = x.indexOf("am" ,4);
// console.log(y);


//------------------------------------------==================    lestindexOf    ==============----------------------------------------->


// let x = "i am a student.i am a boy";

// let y = x.lastIndexOf("am");
// console.log(y);

// ---------------------------------


// let x = "i am a student.i am a boy";

// let y = x.lastIndexOf("am" ,4);
// console.log(y);



//------------------------------------------==================    includes   ==============----------------------------------------->

// var sum = ['shan ' , 'ali', ' umar'];

// console.log(sum.includes('ali'));



//------------------------------------------==================    index search    ==============----------------------------------------->


// let x = "i am a student.i am a boy";

// let y = x.search("am");
// console.log(y);


//------------------------------------------=============  fate arrow function + find  ============--------------------------------------->


// var sum = [200,300,400,500,600,700];

// console.log(sum.find((Element) => Element<400));


//------------------------------------------===================      findIndex     ===================--------------------------------------->


// var sum = [200,300,400,500,600,700];

// const num = sum.findIndex((Element) => Element>400);
// console.log(num);

// <----------------------------------=============>    <===========---------------------------------------->

// var sum = [200,300,400,500,600,700];

// console.log(sum.findIndex((Element) => Element>400));


//------------------------------------------==================        filter       ===================--------------------------------------->



// var sum = [200,300,400,500,600,700];
// console.log(sum.filter((Element) => Element<500));



//------------------------------------------==================          sort       ==============----------------------------------------->


// var sum = ['Shan','Ali','Umar','Amir'];
// console.log(sum.sort());


// <========-------=====    number  ====--------=========>


// const sum = [200,300,400,500,150,100,230,9000];

// console.log(sum.sort());



//------------------------------------------==================          push       ==============----------------------------------------->


// var sum = ['Shan', 'Ali', 'Umar', 'Amir'];

// sum.push('amir');
// console.log(sum);



//------------------------------------------==================          pop       ==============----------------------------------------->


// var sum = ['Shan', 'Ali', 'Umar', 'Amir'];

// sum.pop('amir');
// console.log(sum);


//------------------------------------------==================      unshift       ==============----------------------------------------->

// 0322 4724734

// var sum = ['Shan', 'Ali', 'Umar', 'Amir'];

// sum.unshift('amir');
// console.log(sum);




//------------------------------------------==================      shift       ==============----------------------------------------->

// 0322 4724734

// var sum = ['Shan', 'Ali', 'Umar', 'Amir'];

// sum.shift();
// console.log(sum);


//------------------------------------------==================      concat       ==============----------------------------------------->


// const num = ['shan','ali', 'umar'];
// const sum = ['amir','munir' ,'ali' ];

// const nus = num.concat(sum);
// console.log(nus);

// <-----------------------------------------==============          flat          ===============-------------------------------------->

// let num = [1,2,34,[34,45,456,[3748,85785]]];

// let sum = num.flat(Infinity);
// console.log(sum);




// <-----------------------------------------==============      Array.isArray        ===============-------------------------------------->


// let num = 'shan  ali umar 17 number of good';

// let sum = Array.isArray(num);

// console.log(sum);


// <---------------------------------=================   ...   sptread opertor    ...    ==================------------------------------>


// let num = [1,2,3,4,5,6,78,90];
// let sum = [12,23,34,234,45,65,67,76,8];
// console.log(...num, ...sum);


// <-----------------------------------------=================      splice        ==================-------------------------------------->


// const months = ['june', 'july', 'march', 'jan'];
// months.splice(months.length-2, 1, "Dec");
// console.log(months);


// <-----------------------------------------=================      Object        ==================-------------------------------------->


// let User = {
//     Username : "shan ali umar",
//     Age : 17    
// }
// User.UserObject = function (){
//     console.log(`Hello ${this.Username} your age is ${this.Age}`);
// }
// console.log(User.UserObject());



// -------------------------------------------=================  calclator  ==============------------------------------------------------>


// let x = parseInt(prompt("Enter Youe 1st number")), y = parseInt(prompt("Enter Youe 2nd number")), z = prompt("Chose operater" + " ,  + " + " ,  - " + " ,  / " + " , * " + " , > " + " ,  < ");


// switch (z) {
//     case "+":
//         document.write(x + y);
//         break;
//     case "-":
//         document.write(x - y);
//         break;
//     case "*":
//         document.write(x * y);
//         break;
//     case "/":
//         document.write(x / y);
//         break;
//     case ">":
//         document.write(x > y);
//         break;
//     case "<":
//         document.write(x < y);
//         break;
//     default:
//         document.write(fail);
//         break;
// }


//<==================================================================          ==========================================================>







 





















