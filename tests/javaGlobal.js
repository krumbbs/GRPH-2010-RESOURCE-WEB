//Copied agian + edited w/ video:
/*
const slider = document.querySelector('.test1 input');

slider.addEventListener ('input', function () {
    const hue = slider.value 
    root.style.setProperty ('--typeBodyColor', `oklch(0.2276 0.1 ${hue})`)
})  
*/ 
const slider = document.querySelector('.test1 input');
const root = document.querySelector(':root'); 

slider.addEventListener ('input', () => {
    const hue = slider.value 
    root.style.setProperty ('--typeBodyColor', `oklch(0.2276 0.1 ${hue})`) //IT WORKS?? 
})  
