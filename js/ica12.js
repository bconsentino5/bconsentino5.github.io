
function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
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
            document.getElementById('joke').innerHTML = myData.joke;
        })
        .catch(error => {
            console.log(error);
            alert('error');
        })
}

getJoke();

document.getElementById("generate").addEventListener("click", e=> {
    getJoke();
});