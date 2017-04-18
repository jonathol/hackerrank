/*
Given an array of n integers and a number, d, perform d left rotations on the array.
Then print the updated array as a single line of space-separated integers.

Sample Input

5 4
1 2 3 4 5

Sample Output

5 1 2 3 4
*/


function processData(input) {
    //Enter your code here
    var tempInput = input.split("\n");

    var inputs = tempInput.map(function(el){
        return el.split(" ").map(Number);
    });

    var n = inputs[0][0];
    var d = inputs[0][1];

    var point = calcNewPosition(n,d);

    var newArr = inputs[1].slice(point,n).concat(inputs[1].slice(0,point));
    var ans = newArr.join(" ");

    console.log(ans);
}

function calcNewPosition(n,d) {
    return d%n;
}
