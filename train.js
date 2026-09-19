

// I task =========

const numbersList = [1, 9, 3, 4, 5, 9, 3, 9];

// Function definition
function findMostFrequent(list) {
  let frequencyMap = {};
  let maxCount = 0;
  let mostFrequentNumber = null;

  // for loop 
  for (let i = 0; i < list.length; i++) {
    let currentNumber = list[i];

    if (frequencyMap[currentNumber] === undefined) {
      frequencyMap[currentNumber] = 1;
    } else {
      frequencyMap[currentNumber]++;
    }

    if (frequencyMap[currentNumber] > maxCount) {
      maxCount = frequencyMap[currentNumber];
      mostFrequentNumber = currentNumber;
    }
  }

  return mostFrequentNumber;
}

// Testing
console.log(findMostFrequent(numbersList)); // 4


// // H task

// let first01 = [1, -4, 2, 0, -1, 3];
// const second02 = [-4, 2, -6, 5];


// function getPositive(arr){
//     let new_arr = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > 0) {
//             new_arr.push(arr[i]);
//         }
//     }
//     return new_arr.join("");
// }

// console.log(getPositive(first01));
// console.log(getPositive(second02));



// G -Task

// // Function Declaration
// let arr = [5, 27, 12, 27, 8];

// function getHighestIndex(arr){
//     const str = String(Math.max(...arr));
//     return str[1];
// }


// // Function Declaration
// function getHighestIndex1(arr){
//   const arr1 = arr.sort((a, b) => b - a);
//   let str = String(arr1[0]);
//   return str[1];
// }

// // testing
// console.log(getHighestIndex(arr))
// console.log(getHighestIndex1(arr));


// E Task

// function getReverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(getReverse("uzbekistan"));
// console.log(getReverse("vatanim"));
// console.log(getReverse("korea"));
// console.log(getReverse("osiyo"));



// F task
 

// function findDoubler(str) {
//   const javob = new Set();
//   for (let char of str) {
//     if (res.has(char)) {
//       return true;
//     }
//     res.add(char);
//   }
//   return false;
// }

// console.log(findDoublers("airport")); // true qaytadi, chunki bizda takrorlangan ikkta harf bor 'r'.
// console.log(findDoublers("travel")); //  false qaytadi, sababi takrorlangan harf yo'q!


function findDoublers(str) {
  const res = new Set();
  for (let char of str) {
    if (res.has(char)) {
      return true;
    }
    res.add(char);
  }
  return false;
}

console.log(findDoublers("wednesday")); // true ("d" ikki marta takrorlangan)
console.log(findDoublers("monday")); // false (barcha harflar noyob)

// Men bu yerda nima bo'lganini qayta taxlil qilishim kerak


// console.log(`train task ishga tushdi`);
// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "to'g'ri boshliq tanlang va ko'proq o'rganing", // 20-30
//   "mustaqil ishlarshni boshlang", // 30 - 40
//   "siz kuchli bo'lgan narsalarni qiling", // 40 - 50
//   "yoshlarga investitsiya qilish", // 50 -60
//   "dam oling, endi foydasi yo'q", // 60
// ];


// 


// // callback function example

/* 
function maslahatBering(a, callBack) {
  if (typeof a !== "number") callBack("insert a number", null);
  else if (a <= 20) callBack(null, list[0]);
  else if (a > 20 && a <= 30) callBack(null, list[1]);
  else if (a > 30 && a <= 40) callBack(null, list[2]);
  else if (a > 40 && a <= 50) callBack(null, list[3]);
  else if (a > 50 && a <= 60) callBack(null, list[4]);
  else {
    setTimeout(function() {callBack(null, list[5]);}, 5000)
  }
}

console.log("passed here: 0");
maslahatBering(65, (err, data) => {
  if(err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here: 1");
*/

// // asynchronous function
// async function maslahatBering(a, callBack) {
//   if (typeof a !== "number") callBack("insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }


// then/catch
/*
console.log("passed here: 0");
maslahatBering(20)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here: 1");
*/

// // asynchronous/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(75);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// Extra tasks
// // 1. Function Declaration
// function countLetters(str, char) {
//     let count = 0;
//     for (const letter of str) {
//       if (letter === char) {
//         count = count + 1;
//       }
//     }
//     return count;
//   }
  
//   // 2. Function Expression
//   const countLetters2 = function(str, char) {
//     let count = 0;
//     for (const letter of str) {
//       if (letter === char) {
//         count += 1;
//       }
//     }
//     return count;
//   }
  
//   // 3. Arrow Function
//   const countLetters3 = (str, char) => {
//     let count = 0;
//     for (const letter of str) {
//       if (letter === char) count += 1;
//     }
//     return count;
//   }
  
  //console.log(countLetters("i'm_mike", "m"));
  //console.log(countLetters2("bilolbek", "b"));
  //console.log(countLetters3("kuchbirlikda", "k"));

 
  