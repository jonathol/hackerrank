/*
Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Sample Output

19
*/

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
