/*
Sample Input

4
aba
baba
aba
xzxb
3
aba
xzxb
ab
Sample Output

2
1
0
*/

function processData(input) {
    //Enter your code here
    var inputs = input.split("\n");


    var n = parseInt(inputs[0]);

    var q = parseInt(inputs[n+1]);

    var words = {};

    for (var i=1; i<=n; i++) {
        if (words[inputs[i]] >= 1) {
            words[inputs[i]] += 1;
        } else {
            words[inputs[i]] = 1;
        }
    }


    for (var i=1; i<=q; i++) {
        console.log(words[inputs[(n+1)+i]]||0);
    }

} 
