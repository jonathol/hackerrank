/*
Sample Input

4
1 4 3 2

Sample Output

2 3 4 1
*/

function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);

  for (var i=n-1; i>=0; i--){
      process.stdout.write(arr[i] + " ");
  }
}
