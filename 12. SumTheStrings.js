function sumStr(a,b) {
if(!!parseInt(a)&&!!parseInt(b)){
    let sum
    sum=(parseInt(a)+parseInt(b))
    return sum.toString();
    }  
    if(!!parseInt(a)&& b=="") return a;
    if(!!parseInt(b)&& a=="") return b;
    if(a=="0" ) return b;
    if(b=="0" ) return a;
  if(a=="0" && b=="") return "0";
    if(b=="0" && a=="") return "0";
    
    if(a=="" && b=="") return "0";
      }
