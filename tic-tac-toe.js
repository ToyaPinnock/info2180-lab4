window.onload = function() {
    document.getElementsByClassName('btn')[0].addEventListener('click', reset);
    start();
    //stop();

}




function start() {
    var squares = document.getElementById("board");
    var divs = squares.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add("square");

    }

    var squares1 = document.getElementById("board").getElementsByClassName('square');
    //var  track=Array.from(Array(9).keys());
    var x = true;

    for (var k = 0; k < squares1.length; k++) {

        squares1[k].addEventListener("mouseover", mouseover);
        squares1[k].addEventListener("mouseout", mouseout);

        function mouseover() {
            this.classList.add("hover");

        }

        function mouseout() {
            this.classList.remove('hover');;

        }
        squares1[k].addEventListener("click", myFunction);

        function myFunction(e) {

            //console.log('triggered my function for e: ', e)

            if (this.innerHTML == "") {
                if (x == true) {
                    this.innerHTML = "X";
                    this.classList.add("X");
                    x = false;
                    checking("X");

                } else if (x == false) {
                    this.innerHTML = "O";
                    this.classList.add("O");
                    x = true;
                    checking("O");
                }
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

    for (var i = 0; i < wins.length; i++) {
        for (var k = 0; k < wins[i].length; k++) {
            if (wins[i][k].innerText == value) {
                count += 1;

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
    stop();


}

function stop() {
    var stops = "Congratulations! X is the Winner!";
    var stops1 = "Congratulations! O is the Winner!";

    if (document.getElementById('status').innerHTML == stops) {
        document.getElementById('status').innerHTML = 'Congratulations! X is the Winner!';
        document.getElementById('status').classList.add('you-won');
        var div = document.getElementById("board")
        var divs = div.getElementsByTagName("div")
        for (var i = 0; i < divs.length; i++) {
            divs[i].innerHTML = "";

        }



    }
    if (document.getElementById('status').innerHTML == stops1) {
        document.getElementById('status').innerHTML = 'Congratulations! O is the Winner!';
        document.getElementById('status').classList.add('you-won');
        var div = document.getElementById("board")
        var divs = div.getElementsByTagName("div")
        for (var i = 0; i < divs.length; i++) {
            divs[i].innerHTML = "";

        }


    }
}

function reset() {
    document.getElementById('status').classList.remove('you-won');
    document.getElementById('status').innerHTML = 'Move your mouse over a square and click to play an X or an O.';
    var div = document.getElementById("board").getElementsByTagName("div")
    for (var i = 0; i < div.length; i++) {
        div[i].innerHTML = "";


    }


}