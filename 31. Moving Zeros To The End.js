var moveZeros = function (arr) {
  let remov=[]

    let rez=[]  
 const mov=(a)=>{
     console.log("mov "+ a)
 }
 let z=arr.length
  for(let i=0;i<z;i++){
    if(arr[i]!==0){
        rez.push(arr[i])
        console.log(rez)
    }
    if(arr[i]===0) {
     remov.push(i)

    }

    }   
   
    for(let i=0;i<remov.length;i++){
    rez.push(0)
    }

   return rez
}
