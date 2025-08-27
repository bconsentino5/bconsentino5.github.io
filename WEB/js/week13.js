// char position property
let char = {};
char = document.getElementById('char').getBoundingClientRect();

// obstacle position property
let obst = {};
obst = document.querySelector('.obstacle').getBoundingClientRect();

let charProp = {};
charProp.jumpHeight = 0;
charProp.elem = document.getElementById('char');
charProp.maxJump = 80;
charProp.falling = false;
charProp.hangtime = 0;
charProp.maxHang = 4;

console.log(char.x);
console.log(char.right < obst.left);

setInterval(() => {
    char = document.getElementById('char').getBoundingClientRect();
    obst = document.querySelector('.obstacle').getBoundingClientRect();
    if (char.right >= obst.left && char.bottom > obst.y) {
        alert('you lose');
        document.querySelector(".obstacle").style.animation = "none";
    }
    
}, 100) //milliseconds

document.addEventListener('keydown', e => {
    if (e.code == 'Space') {
        jumping();
    }
})

function jumping() {
    let jump = setInterval(() => {
        if (charProp.jumpHeight < charProp.maxJump && charProp.falling == false) {
            charProp.jumpHeight += 10;
            if (charProp.jumpHeight >= charProp.maxJump) {
                charProp.falling = true;
            }
        }
        else if (charProp.falling == true) {
            if (charProp.hangtime < charProp.maxHang) {
                charProp.jumpHeight = charProp.maxJump;
                charProp.hangtime += 1;
            }
            else if (charProp.hangtime >= charProp.maxHang) {
                charProp.jumpHeight -= 10;
            }
            
            if (charProp.jumpHeight <= 0) {
                charProp.falling = false;
                clearInterval(jump);
            }
        }
        charProp.elem.style.bottom = `${charProp.jumpHeight}px`;
    }, 100)
    
}