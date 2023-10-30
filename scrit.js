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
console.log(array4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,17,19,23]));
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
var output6 = []
var array6 = function (arr6) {
    for (var i = 0; i < arr6.length; i++) {
        if (arr6[i]) {
            output6.push(arr6[i])
        }
    }
    return output6;
}
array6([1, 3, 1, 9, 7]);
array6([2, 4, 8, 5, 6]);
var outPut = output6.sort();
console.log(outPut);

//____________________________________end of 6__________________________________________
//``````````````````````````````````````````````````````````````````````````````

// g.Remove duplicates from an array
// ____________________________________end of 7__________________________________________
// ``````````````````````````````````````````````````````````````````````````````

// h.Rotate an array by k times
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
//______________________________end of 2________________________________________________
//``````````````````````````````````````````````````````````````````````````````
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
//__________________________________end of 4____________________________________________
//``````````````````````````````````````````````````````````````````````````````
//e.Return all the palindromes in an array:-
// var output5 = []
// (function (arr5) {
//     for (var i = 0; i < arr5.length; i++) {
//         var letter = arr5[i].split("");
//         var converString = letter.join("");
//         var revers = []
//         for (var j = converString.length - 1; j >= 0; j--) {
//             revers.push(converString[j]);
//         }
//         var reversString = revers.join("");
//         if (converString === reversString) {
//             output5.push(arr5[i]);
//         }
//     }
//     console.log(output5) ;
// })
// (["level","123321","abcd","amma","appa"]);
//____________________________________end of 5__________________________________________
//``````````````````````````````````````````````````````````````````````````````

// f.Return median of two sorted arrays of the same size.
// var output66 = []
//     (function (arr66) {
//         for (var i = 0; i < arr66.length; i++) {
//             if (arr66[i]) {
//                 output6.push(arr66[i])
//             }
//         }
//         console.log(output66, sort());
//     })
//     ([1, 3, 1, 9, 7]);
//     ([2,4,8,5,6]);


//____________________________________end of 6__________________________________________
//``````````````````````````````````````````````````````````````````````````````

// g.Remove duplicates from an array
// ____________________________________end of 7__________________________________________
// ``````````````````````````````````````````````````````````````````````````````

// h.Rotate an array by k times
// ____________________________________end of 8__________________________________________
// ``````````````````````````````````````````````````````````````````````````````
//-----------------------------------------------------------------------------------------------------------------
