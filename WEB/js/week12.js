let ourObject = {
    "name": "bella",
    "job": "student",
    "age": 20,
    "pets": [{"name": "luna", "type": "cat", "age": 6}]
}

console.log(ourObject);

// fetch('uri endpoint of API') 
//     .then(res => {
//         if (res.ok){
//             console.log(res)
//         }
//     })
// }
    
let myData = {};

function fetchData() {
    fetch('https://catfact.ninja/fact')
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        else {
            console.log(res);
        }
        
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById('fact').innerHTML = myData.fact;
    })
    .catch(error => {
        console.log(error);
    })
}

fetchData();

document.getElementById("generate").addEventListener("click", e=> {
    fetchData();
});

console.log(myData);

let name = "bella";

let myString = `hello ${name}!`;

console.log(myString);