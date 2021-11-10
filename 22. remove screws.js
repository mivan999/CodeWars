function sc(screws){
  let sum=0;
  let r=0;
  let sw=0;
  let m=0;
  let ar=screws.split("")
  m=screws.length-1;
  r=screws.length;
  for (let i=0;i<screws.length-1;i++){
    if(ar[i]!==ar[i+1]) sw+=5;
  }
  sum=r+sw+m;
  return sum;
}
