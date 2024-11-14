let myData = {};

function fetchData() {
    // Returns a random integer from 0 to 3000:
    num = Math.floor(Math.random() * 3000);
    fetch(`https://corsproxy.io/?https://xkcd.com/${num}/info.0.json`)

    .then (res => {
        if (res.ok) {
            return res.json();
        }

        else {
            console.log(res);
        }
    })
    .then(res => {
        myData = res;
        console.log(myData);

        document.getElementById("title").innerHTML = myData.title;
        // display comic
        document.getElementById('comic').src = myData.img;
        // display alt text
        document.getElementById('comic').alt = myData.alt;
        // display date
        document.getElementById("date").innerHTML = myData.month + "/" + myData.day + "/" + myData.year;
    })
    .catch(error => {
        console.log(error);
    })
}

fetchData();

document.getElementById("random").addEventListener("click", e=> {
    fetchData();
});

