console.log('Loaded!');
//change the text of the main text division
var element = document.getElementById('main-text'

);
element.innerHTML = 'new value';
// moving the image
var img = document.getElementById('madi');
var marginLeft= 0;
function moveRight() {
    marginLeft=marginLeft+10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick= function(){
    
    
};