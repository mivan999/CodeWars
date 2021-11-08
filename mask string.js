// return masked string
2
function maskify(cc) {
3
if(cc==undefined) return;
4
  if(!!cc){
5
  let startStr="";
6
let rez="";
7
​
8
    switch (cc.length) {
9
      case 0:{
10
        rez= "";
11
        console.log(rez);
12
      break;
13
      }
14
      case 1:{
15
        rez= cc;
16
        return rez;
17
      }  
18
      case 2:{
19
        rez= cc;
20
        return rez;
21
      } 
22
      case 3:{
23
        rez= cc;
24
        return rez;
25
      } 
26
      default:{
27
        for(i=0;i<cc.length-4;i++){
28
          startStr+="#";
29
        }
30
        rez= startStr+cc.substring(cc.length-4,cc.length);
31
      } 
32
      return rez;
33
    } 
34
​
35
}
36
​
37
}
38
​
