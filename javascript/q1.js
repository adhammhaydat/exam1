function greaterThan(arr ,num){
  let total=0;
for (let i = 0; i < arr.length; i++) {
  if(arr[i]>num){
    total++;
  }
  
}
console.log(total);  
}
greaterThan([4,2,3,1,10,9,3],5);