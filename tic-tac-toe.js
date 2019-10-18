

window.onload = function() {
document.getElementsByClassName('btn')[0].addEventListener('click', reset);
function reset(){
document.getElementById('status').classList.remove('you-won');
document.getElementById('status').innerHTML = 'Move your mouse over a square and click to play an X or an O.';

}    
    var squares = document.getElementById("board");
    var divs = squares.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add("square");
        
    }
    
    
var squares1 = document.getElementById("board").getElementsByClassName('square');
//var  track=Array.from(Array(9).keys());
var x=true;

    for (var k = 0; k < squares1.length; k++) {
        
        squares1[k].addEventListener("mouseover", mouseover);
        squares1[k].addEventListener("mouseout", mouseout);
        function mouseover(){
            this.classList.add("hover");
            
        }
        
        function mouseout(){
            this.classList.remove('hover');;
            
        }
        squares1[k].addEventListener("click", myFunction);
        function myFunction(){
        
            if (this.innerHTML==""){
            if (x==true){
                this.innerHTML="X";
                this.classList.add("X");
                x=false;
                checking("X");

            }else if (x==false) {
                this.innerHTML="O";
                this.classList.add("O");
                x =true;
                checking("O");
            }
        }
    }
}
function checking(value) {
  var squares2 = document.getElementById("board").getElementsByClassName('square');
  
  var wins = [
      [squares2[0], squares2[1], squares2[2]],
      [squares2[3], squares2[4], squares2[5]],
      [squares2[6], squares2[7], squares2[8]],

      [squares2[0], squares2[3], squares2[6]],
      [squares2[1], squares2[4], squares2[7]],
      [squares2[2], squares2[5], squares2[8]],

      [squares2[0], squares2[4], squares2[8]],
      [squares2[6], squares2[4], squares2[2]]
    ];

  var count = 0;

  for (var i=0; i<wins.length; i++) {
    for (var k=0; k<wins[i].length; k++) {
      if (wins[i][k].innerText == value) {
        count += 1;
        console.log('count = '+count);
      }
    }

    if (count < 3) {
      count = 0;
    }
    if (count == 3) {
      document.getElementById('status').innerHTML = 'Congratulations! ' + value + ' is the Winner!';
      document.getElementById('status').classList.add('you-won');
      break;
    }
  }

}

/*
var squares2 = document.getElementById("board").getElementsByClassName('square');
        var i= 0;
        for (var m = 0; m < squares2.length; m++){
            squares2[m].id=i;
            
            i++;
        
        squares2[m].addEventListener("click",turnclick);
        function turnclick(){
            var x= " ";
            if (this.innerHTML=="X") {
                checking(this.id);
                
                
                
            }
            if (this.innerHTML=="O") {
               checking(this.id);
                
            }
            
    }
        }
function checking(value){  
//console.log(value);
var wincombos=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]
var count=0;
for (var t = 0; t< wincombos.length; t++) {
    //console.log(wincombos[t]);
    for (var l = 0; l < wincombos[l].length; l++){
        if (wincombos[t][l]== value){
            //console.log(wincombos[t][l]);
            count+= 1;
            console.log('count=' +count);
        }

    }
   

}      
}        
*/
























}