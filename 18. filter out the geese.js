function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
let lbirds=birds.length;
let lgeese=geese.length;
for (i=0;i<lbirds;i++){
 // console.log(birds[i])
  geese.forEach(e=>{
 
  if(birds[i]==e) {birds.splice(i,1);
    i-=1;} 

})

     }
  return birds;
