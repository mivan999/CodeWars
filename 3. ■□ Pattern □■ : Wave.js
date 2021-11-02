let numArray=[1,2,3,3,2,1,1,2,3,4,5,6,7];
let rez=[]
let maxEl=Math.max.apply(null, numArray)
let sRez=""

function arraySum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
        }
    return sum;
    }
for (var j= 0; j < numArray.length-1; j++) {
    if(arraySum(rez)==numArray.length){
        break
    }
    let i=0;   
    let s=""; 
    numArray.forEach(e=>
        {
             if(e==maxEl-j) 
             {rez[i]=1
               
            }
             else if(rez[i]!=1) {
                 rez[i]=0
                 
                }
             i++
             
         }
     )
     rez.forEach(e=>{
         if(e==1) s=s+"■"
         else s=s+"□"
     })
    sRez=sRez+s+"\n"
    if(maxEl==1) break;
 }
 console.log(sRez);


