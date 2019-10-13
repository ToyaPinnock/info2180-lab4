window.onload = function() {
    
    var squares= document.getElementById("board")
    var divs= squares.getElementsByTagName("div");
    for ( var i=0; i<divs.length; i++){
    divs[i].classList.add("square");

    }


   // document.querySelector('div').setAttribute('class', square);
    
    //var squares= document.getElementById("Board")
    //var divsquare= squares.getElementsByTagName('div');
    //console.log(divsquare);
    //var stylesquares= squares.classList.add('square');
};