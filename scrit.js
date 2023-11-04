//Q1.Do the below programs in anonymous function & IIFE:-
//ANONEMES FUNCTIONS PROGRAMS
//a.Print odd numbers in an array:-
var output1 = [];
var array1 = function (arr1) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 !== 0) {
            output1.push(arr1[i]);
        }
    }
    return output1;
}
console.log(array1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
//______________________________end of 1________________________________________________
//``````````````````````````````````````````````````````````````````````````````
//b.Convert all the strings to title caps in a string array:-
var output2 = [];
var array2 = function (arr2) {
    for (var i = 0; i < arr2.length; i++) {
        var j = arr2[i].charAt(0).toUpperCase() + arr2[i].slice(1);
        output2.push(j)
    }
    return output2;
}
console.log(array2(["welcome", "hello", "everyone"]))

//______________________________end of 2________________________________________________
//``````````````````````````````````````````````````````````````````````````````
//c.Sum of all numbers in an array:-
var output3 = [];
var sum = 0;
var array3 = function (arr3) {
    for (var i = 0; i < arr3.length; i++) {
        sum = sum + arr3[i];
    }
    output3.push(sum)
    return output3;
}
console.log(array3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
//_______________________________end of 3_______________________________________________
//``````````````````````````````````````````````````````````````````````````````
//d.Return all the prime numbers in an array:-
var output4 = [];
var array4 = function (arr4) {
    for (var i = 0; i < arr4.length; i++) {
        var f = 0;
        if (arr4[i] < 3) {
            output4.push(arr4[i]);
        }
        else {
            for (var j = 2; j < arr4[i]; j++) {
                if (arr4[i] % j == 0) {
                    f = 1;
                    break;
                }
            }
            if (f == 0) {
                output4.push(arr4[i]);
            }
        }
    }
    return output4;
}
console.log(array4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 23]));
//__________________________________end of 4____________________________________________
//``````````````````````````````````````````````````````````````````````````````
//e.Return all the palindromes in an array:-
var output5 = []
var array5 = function (arr5) {
    for (var i = 0; i < arr5.length; i++) {
        var letter = arr5[i].split("");
        var converString = letter.join("");
        var revers = []
        for (var j = converString.length - 1; j >= 0; j--) {
            revers.push(converString[j]);
        }
        var reversString = revers.join("");
        if (converString === reversString) {
            output5.push(arr5[i]);
        }
    }
    return output5;
}
console.log(array5(["level", "12321", "abcd", "amma", "appa"]));
//____________________________________end of 5__________________________________________
//``````````````````````````````````````````````````````````````````````````````

// f.Return median of two sorted arrays of the same size.
var output7=[]
var array7=function(arra,arrb){
  var arrc=[...arra,...arrb];
  var arr7=arrc.sort((a,b)=>a-b);
  console.log(arr7);
  var n=Math.floor(arr7.length/2);
  if(arr7.length%2!==0){
    output7.push(arr7[n]);
  }
  else{
    output7.push((arr7[n-1]+arr7[n])/2)
  }
  return output7;
}
console.log(array7([1,2,3,4,5],[6,7,8,9.10]));

//____________________________________end of 6__________________________________________
//``````````````````````````````````````````````````````````````````````````````

// g.Remove duplicates from an array

// ____________________________________end of 7__________________________________________
// ``````````````````````````````````````````````````````````````````````````````

// h.Rotate an array by k times
var array8=function(arr8,k){
    for(var i=0;i<k;i++){
      arr8.push(arr8[i])  
    }
    for(var i=0;i<k;i++){
        arr8.shift(arr8[i])
    }
   return arr8;
}
console.log(array8([1,2,3,4,5],3));
// ____________________________________end of 8__________________________________________
// ``````````````````````````````````````````````````````````````````````````````
//-----------------------------------------------------------------------------------------------------------------



//IIEF
//({})()
var output11 = [];
(function (arr11) {
    for (var i = 0; i < arr11.length; i++) {
        if (arr11[i] % 2 !== 0) {
            output11.push(arr11[i]);
        }
    }
    console.log(output11);
})
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// ____________________________________end of 1 __________________________________________
// ``````````````````````````````````````````````````````````````````````````````
//b.Convert all the strings to title caps in a string array:-
var output22 = [];
(function (arr22) {
    for (var i = 0; i < arr22.length; i++) {
        var j = arr22[i].charAt(0).toUpperCase() + arr22[i].slice(1);
        output22.push(j)
    }
    console.log(output22)
})(["hii", "welcome", "everyone"])
// //______________________________end of 2________________________________________________
// //``````````````````````````````````````````````````````````````````````````````
//c.Sum of all numbers in an array:-
var output33 = [];
var sum1 = 0;
(function (arr33) {
    for (var i = 0; i < arr33.length; i++) {
        sum1 = sum1 + arr33[i];
    }
    output33.push(sum1)
    console.log(output33);
})
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
//_______________________________end of 3_______________________________________________
//``````````````````````````````````````````````````````````````````````````````
//d.Return all the prime numbers in an array:-
var output44 = [];
(function (arr44) {
    for (var i = 0; i < arr44.length; i++) {
        var f = 0;
        if (arr44[i] < 3) {
            output44.push(arr44[i]);
        }
        else {
            for (var j = 2; j < arr44[i]; j++) {
                if (arr44[i] % j == 0) {
                    f = 1;
                    break;
                }
            }
            if (f == 0) {
                output44.push(arr44[i]);
            }
        }
    }
    console.log(output44);
})
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// //__________________________________end of 4____________________________________________
// //``````````````````````````````````````````````````````````````````````````````
// //e.Return all the palindromes in an array:-
var output55 = [];
(function (arr55) {
    for (var i = 0; i < arr55.length; i++) {
        var string1 = arr55[i].split("");
        var str1 = string1.join("");
        //  console.log(str1);
        var string2 = string1.reverse();
        var rstr1 = string2.join("");
        //  console.log(rstr1)
        if (str1 === rstr1) {
            output55.push(arr55[i]);
        }
    }
    console.log(output55)
})
    (["level", "welcome", "amma", "appa"])
// //____________________________________end of 5__________________________________________
// //``````````````````````````````````````````````````````````````````````````````

// f.Return median of two sorted arrays of the same size.



// //____________________________________end of 6__________________________________________
// //``````````````````````````````````````````````````````````````````````````````

// // g.Remove duplicates from an array
// // ____________________________________end of 7__________________________________________
// // ``````````````````````````````````````````````````````````````````````````````
// // h.Rotate an array by k times
(function(arr83,k){
  for(var i=0;i<k;i++){
    arr83.push(arr83[i])  
  }
  for(var i=0;i<k;i++){
      arr83.shift(arr83[i])
  }
 console.log(arr83); 
})
([1,2,3,4,5],3);
// // ____________________________________end of 8__________________________________________
// // ``````````````````````````````````````````````````````````````````````````````
// //-----------------------------------------------------------------------------------------------------------------
//Arrow function:-
//a.Print odd numbers in an array:-
var output1 = [];
var array1 = (arr1) => {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] % 2 !== 0) {
            output1.push(arr1[i]);
        }
    }
    return output1;
}
console.log(array1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
//______________________________end of 1________________________________________________
//``````````````````````````````````````````````````````````````````````````````
//b.Convert all the strings to title caps in a string array:-
var output2 = [];
var array2 = (arr2) => {
    for (var i = 0; i < arr2.length; i++) {
        var j = arr2[i].charAt(0).toUpperCase() + arr2[i].slice(1);
        output2.push(j)
    }
    return output2;
}
console.log(array2(["welcome", "hello", "everyone"]))

//______________________________end of 2________________________________________________
//``````````````````````````````````````````````````````````````````````````````
//c.Sum of all numbers in an array:-
var output3 = [];
var sum = 0;
var array3 = (arr3) => {
    for (var i = 0; i < arr3.length; i++) {
        sum = sum + arr3[i];
    }
    output3.push(sum)
    return output3;
}
console.log(array3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
//_______________________________end of 3_______________________________________________
//``````````````````````````````````````````````````````````````````````````````
//d.Return all the prime numbers in an array:-
var output4 = [];
var array4 = (arr4) => {
    for (var i = 0; i < arr4.length; i++) {
        var f = 0;
        if (arr4[i] < 3) {
            output4.push(arr4[i]);
        }
        else {
            for (var j = 2; j < arr4[i]; j++) {
                if (arr4[i] % j == 0) {
                    f = 1;
                    break;
                }
            }
            if (f == 0) {
                output4.push(arr4[i]);
            }
        }
    }
    return output4;
}
console.log(array4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 23]));
//__________________________________end of 4____________________________________________
//``````````````````````````````````````````````````````````````````````````````
//e.Return all the palindromes in an array:-
var output5 = []
var array5 = (arr5) => {
    for (var i = 0; i < arr5.length; i++) {
        var letter = arr5[i].split("");
        var converString = letter.join("");
        var revers = []
        for (var j = converString.length - 1; j >= 0; j--) {
            revers.push(converString[j]);
        }
        var reversString = revers.join("");
        if (converString === reversString) {
            output5.push(arr5[i]);
        }
    }
    return output5;
}
console.log(array5(["level", "12321", "abcd", "amma", "appa"]));