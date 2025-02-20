// looking for 5
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

cont arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//               A           B          C

// O(n) just go through each number and check
// O(log n) splits down the middle and checks 2 arrays


const arr2 = [2, 5, 10, 4, 7, 1, 9, 3, 6, 8];

// O(1), O(log n), O(n), O(n log n), O(n^2)


// O(1)
function name(a, b):
    return a+b;

// O(n)
for (let i = 0; i < n; i++) {
    //some stuff
}

// O(n^2)
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        //some stuff
    }
}

const n = 5;
const b = 10;

// O(log n)
if (n < 5) {
    //blah
}

if (n > b) {
    //blah
}

// O(n log n)
for (let i = 0; i < n; i++) {
    if (n > 5) {
        //blah
    }

    if (n < b) {
        //blah
    }
}




const sum = (data: number[]) => {
    let total = 0;
    for (let i = 0; i < 1000; i++) {
      total = total + data[i];
    }
  };

// A. O(1) B. O(log n) C. O(n) D. O(n log n) E. O(n^2)


const sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        total += 1;
      }
    }
    return total;
  };

 // A. O(1) B. O(log n) C. O(n) D. O(n log n) E. O(n^2)


 function difference(n) => {
    let total = 0;
    for (let i = 0; i < n; i++) {
        if (n < total) {
            return n;
        }
        if (n > total) {
            total++;
        }
    }
    return total;
  };

 // A. O(1) B. O(log n) C. O(n) D. O(n log n) E. O(n^2) 


 function doSomething(n) {
    const counter = 90;

    if (counter >= 70) {
        for (let i = 0; i < 80; i++) {
            counter++;
        }
    }
  };

 // A. O(1) B. O(log n) C. O(n) D. O(n log n) E. O(n^2)

// const list = [6, 5, 10, 4, 7, 1, 9, 3, 6, 8];
// counter = 0
 function smallestNum(list, counter) {
    currNum = list[counter];

    if (currNum < list[counter + 1]) {
        return currNum;
    }
    else {
        smallestNum(list, counter + 1);
    }
 }




// It takes a linked list of numbers and returns the difference between the
// largest and smallest values in the list. The list contains at least one item, so you don't need
// to check for an empty list. Each list node has a data and a next field. For example, passing in
// the list [3, 7, 5, 2, 9] will yield 7, because the max value is 9, min is 2, and 9-2 = 7.


 function findRangeInLinkedList(list) { 
    let maxNum = list.data; 
    let minNum = list.data;
    let cursor = list;

    while (cursor) {
        if (cursor.data > maxNum) {
            maxNum = cursor.data;
        }
        else if (cursor.data < minNum) {
            minNum = cursor.data;
        }
        cursor = cursor.next;
    }

    return maxNum - minNum;
 }