function pigIt(str){
  let rez=str.split(" ").map(e=>{
    let shifted=""
     console.log(e)
     if(e==="!"||e==="?"||e==="."||e===",") {return e}
      shifted=e.split("").shift();
   
    e=e+shifted+"ay";
    let rezul=e.slice(1)
    
   
    return rezul
  });  
  return rez.join(" ")
}
