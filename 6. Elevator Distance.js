function elevatorDistance(array) {
  let rez=0;
for(i=0;i<array.length-1;i++){
  rez=rez+Math.abs(array[i]-array[i+1]);
  
}
return rez;
}
