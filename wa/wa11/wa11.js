const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['https://www.researchgate.net/publication/378987676/figure/fig4/AS:11431281229591412@1710563761635/480-pixels-Fig-6-1280-x-720-pixels-Fig-7-1920-x-1080-pixels.jpg', 'https://i.redd.it/wallpapers-selection-640x480-enjoy-v0-q4nv8g0rob9a1.png?width=640&format=png&auto=webp&s=cab199e2ec0e45bb7e8d1e30e7a39463c8ed1cc4', 'https://www.irational.org/APD/cyber/640x480.gif', 'https://i.redd.it/wallpapers-selection-640x480-enjoy-v0-gr7o5jzqob9a1.png?width=640&format=png&auto=webp&s=091805d7fb33b08c01904963269c8a12f23d0641', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Neisse_bei_skerbersdorf_640x480.jpg'];

/* Declaring the alternative text for each image file */
const altArray = ['pretty sky', 'mario and frends', '640 x 480', 'arcade', 'river'];

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[i]);
    newImage.setAttribute('alt', altArray[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
        }
    )
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light'); 
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    }
    else {
        btn.setAttribute('class', 'dark'); 
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
} )



