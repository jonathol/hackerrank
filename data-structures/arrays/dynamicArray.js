/*
Sample Input

2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1

Sample Output

7
3
*/

function processData(input) {
    //Enter your code here
    var tempInputs = input.split("\n");
    var inputs = tempInputs.map(function(el) {
        return el.split(" ").map(Number);
    });
    var lastAns = 0;
    var n = inputs[0][0];
    var q = inputs[0][1];
    var seqList = [];
    for (var i=1; i<=n; i++) {
        seqList.push([]);
    }
    for (var i=1; i<=q; i++) {
        if (inputs[i][0] === 1){
            queryOne(seqList, n, lastAns, inputs[i][1], inputs[i][2]);
        } else {
            lastAns = queryTwo(seqList, n, lastAns, inputs[i][1], inputs[i][2]);
            console.log(lastAns);
        }

    }
}

function queryOne(seqList, n, lastAns, x, y){
    var seq = (x^lastAns)%n;
    seqList[seq].push(y);
}

function queryTwo(seqList, n, lastAns, x, y){
    var seq = (x^lastAns)%n;
    var el = y%(seqList[seq].length);
    var newAns = seqList[seq][el];
    return newAns;
}
