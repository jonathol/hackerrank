// Arrays - DS
function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);

  for (var i=n-1; i>=0; i--){
      process.stdout.write(arr[i] + " ");
  }
}

//2D Array - DS
function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var max = findSum(arr, 0, 0);

    for (var i=0; i<4; i++){
        for (var j=0; j<4; j++){
            var temp = findSum(arr,i,j);
           if (max < temp) {
               max = temp;
           }
        }
    }
    process.stdout.write(max.toString());
}

function findSum(arr, i, j){
    return arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
}

// Dynamic Array
function processData(input) {
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

//Left Rotation
function processData(input) {
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

// Sparse Arrays
function processData(input) {
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
