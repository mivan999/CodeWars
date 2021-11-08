var uniqueInOrder=function(iterable){
  let l=iterable.length;
  if(iterable){let rez=[iterable[0]];
  let j=1;
  for(i=1;i<l;i++){
    if (iterable[i]!==iterable[i-1]){
      rez[j]=iterable[i];
      j+=1;
      }
  }
               
return rez;}
  else return [];
     
}
