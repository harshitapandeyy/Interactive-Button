let butt = document.querySelector('button');
butt.addEventListener('click',() => {
    r = getRandom();
    g = getRandom();
    b = getRandom();
    document.getElementById('bh').style.setProperty('background-color', "rgb(" + r + "," + g + "," + b + ")"); 
});
function getRandom() {
    return Math.floor(Math.random() * 256);
}