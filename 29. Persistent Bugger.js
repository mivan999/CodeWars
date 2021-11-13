function persistence(num) {
    if(num<10) return 0;
 let rez=(a)=>{
  let ar=""
   if(ar<10) console.log(ar)
    ar=String(a).split("").map(e=>Number(e)).reduce((a,b)=>a*b)
    return ar 
 }
 let rezz=String(num).length
 let s=num
 i=0
 while(rezz>=2){
   s=rez(s)
   rezz=String(s).length
   i++
 }
   
 return i
