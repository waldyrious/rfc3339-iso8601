(this["webpackJsonprfc3339-iso8601"]=this["webpackJsonprfc3339-iso8601"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var r=c(3),n=c.n(r),s=c(8),i=c.n(s),a=(c(14),c(1)),j=c(2),o=(c(15),[0,31,59,90,120,151,181,212,243,273,304,334]);function x(e){var t,c=e.getUTCMonth()>1&&((t=e.getUTCFullYear())%4===0&&(t%400===0||t%100!==0))?1:0;return o[e.getUTCMonth()]+e.getUTCDate()+c}function h(e){var t,c,r;if(e.getUTCMonth()<2){var n=e.getUTCFullYear()-1,s=d(n/4)-d(n/100)+d(n/400);r=s-(d((n-1)/4)-d((n-1)/100)+d((n-1)/400));var i=e.getUTCDate()-1+d(31*e.getUTCMonth());t=i+3-(i+(c=(n+s)%7)-0)%7}else{var a=e.getUTCFullYear(),j=d(a/4)-d(a/100)+d(a/400),o=(r=j-(d((a-1)/4)-d((a-1)/100)+d((a-1)/400)))+1,x=e.getUTCDate()+d((153*d(e.getUTCMonth()-2)+2)/5)+58+r;t=x+3-(x+(c=(a+j)%7)-o)%7}return t<0?53-d((c-r)/5):t>364+r?1:d(t/7)+1}function l(e){var t,c;if(e.getUTCMonth()<2){var r=e.getUTCFullYear()-1,n=d(r/4)-d(r/100)+d(r/400);c=n-(d((r-1)/4)-d((r-1)/100)+d((r-1)/400));var s=e.getUTCDate()-1+d(31*e.getUTCMonth());t=s+3-(s+(r+n)%7-0)%7}else{var i=e.getUTCFullYear(),a=d(i/4)-d(i/100)+d(i/400),j=(c=a-(d((i-1)/4)-d((i-1)/100)+d((i-1)/400)))+1,o=e.getUTCDate()+d((153*d(e.getUTCMonth()-2)+2)/5)+58+c;t=o+3-(o+(i+a)%7-j)%7}return t<0?e.getUTCFullYear()-1:t>364+c?e.getUTCFullYear()+1:e.getUTCFullYear()}function b(e){var t;if(e.getUTCMonth()<2){var c=e.getUTCFullYear()-1,r=d(c/4)-d(c/100)+d(c/400);t=(e.getUTCDate()-1+d(31*e.getUTCMonth())+(c+r)%7-0)%7}else{var n=e.getUTCFullYear(),s=d(n/4)-d(n/100)+d(n/400),i=s-(d((n-1)/4)-d((n-1)/100)+d((n-1)/400)),a=i+1;t=(e.getUTCDate()+d((153*d(e.getUTCMonth()-2)+2)/5)+58+i+(n+s)%7-a)%7}return t+1}function d(e){return 0|e}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return m(e,t,-t.getTimezoneOffset())}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;isNaN(c)&&(c=-t.getTimezoneOffset());var r=0!==c?new Date(+t+60*c*1e3):t,n="";return e.replace(/%(\u2212?)(.\d)?([a-z])/gi,(function(e,t,s,i){if(s){var a=s[0],j=+s[1];switch(i){case"L":n=f(r.getUTCFullYear()%1e3/1e3,j).substr(1);break;case"C":n=f(r.getUTCFullYear()%100/100,j).substr(1);break;case"X":n=f(r.getUTCFullYear()%10/10,j).substr(1);break;case"Y":n=f(r.getUTCMonth()/12,j).substr(1);break;case"M":n=f((r.getUTCDate()-1)/(365/12),j).substr(1);break;case"D":n=f(r.getUTCHours()/24,j).substr(1);break;case"V":n=f(h(r)/52,j).substr(1);break;case"W":n=f((b(r)-1)/7,j).substr(1);break;case"w":case"O":n=f(r.getUTCHours()/24,j).substr(1);break;case"h":n=f(r.getUTCMinutes()/60,j).substr(1);break;case"m":n=f(r.getUTCSeconds()/60,j).substr(1);break;case"s":n=f(r.getUTCMilliseconds()/1e3,j).substr(1);break;case"u":n=(0).toFixed(j).substr(1);break;case"Z":case"z":n="";break;default:n=""}n=n.replace(".",a)}switch(i){case"L":return(r.getUTCFullYear()/1e3|0).toString()+n;case"C":return(r.getUTCFullYear()/100|0).toString().padStart(2,"0")+n;case"X":return(r.getUTCFullYear()/10|0).toString().padStart(3,"0")+n;case"Y":return r.getUTCFullYear().toString().padStart(4,"0")+n;case"M":return u(r.getUTCMonth()+1)+n;case"D":return u(r.getUTCDate())+n;case"V":return l(r).toString().padStart(2,"0")+n;case"W":return u(h(r))+n;case"w":return b(r).toString()+n;case"O":return x(r).toString().padStart(3,"0")+n;case"h":return u(r.getUTCHours())+n;case"m":return u(r.getUTCMinutes())+n;case"s":return u(r.getUTCSeconds())+n;case"u":return(1e3*r.getUTCMilliseconds()).toString().padStart(6,"0")+n;case"Z":var o=-c/60|0;return"".concat(o<0?"+":t||"-").concat(Math.abs(o).toString().padStart(2,"0"));case"z":var d=c%60;return Math.abs(d).toString().padStart(2,"0");default:return e}}))}function u(e){return e.toString().padStart(2,"0")}function f(e,t){var c=Math.pow(10,t);return(Math.floor(e*c)/c).toFixed(t)}var T=c(7),M=c(9),y=c(0);var Y=function(e){var t=e.date,c=Object(M.a)(e,["date"]);return Object(y.jsxs)("svg",Object(T.a)(Object(T.a)({viewBox:"14.726 53.645 220.993 190.91",xmlns:"http://www.w3.org/2000/svg"},c),{},{children:[Object(y.jsx)("circle",{cx:134.327,cy:148.288,r:72.135,fill:"none",stroke:"#00f",strokeWidth:.265}),Object(y.jsxs)("text",{x:170,y:78.692,fill:"#00f",className:"key-label",children:["ISO 8601",Object(y.jsx)("tspan",{x:170.8,dy:6,style:{fontSize:"0.4em"},children:"ISO 8601-1:2019"})]}),Object(y.jsxs)("g",{id:"rfc",transform:"translate(0 6)",children:[Object(y.jsx)("circle",{cx:75,cy:120,r:50,fill:"none",stroke:"#f0f",strokeWidth:.372}),Object(y.jsx)("text",{x:23.692,y:71.5,fill:"#f0f",className:"key-label",children:"RFC 3339"}),Object(y.jsx)("text",{x:58,y:84,children:m("%Y-%M-%D_%h:%m:%sZ",t)}),Object(y.jsx)("text",{x:50,y:90,children:m("%Y-%M-%D_%h:%m:%.3sZ",t)}),Object(y.jsx)("text",{x:44,y:96,children:m("%Y-%M-%DT%h:%m:%s-00:00",t)})]}),Object(y.jsxs)("g",{id:"rfc-html",children:[Object(y.jsx)("text",{x:41,y:122,children:m("%Y-%M-%D %h:%m:%sZ",t)}),Object(y.jsx)("text",{x:34,y:128,children:m("%Y-%M-%D %h:%m:%.3sZ",t)})]}),Object(y.jsxs)("g",{id:"all",children:[Object(y.jsx)("text",{x:70,y:114,children:O("%Y-%M-%D",t)}),Object(y.jsx)("text",{x:75,y:120,children:m("%h:%m:%sZ",t)}),Object(y.jsx)("text",{x:75,y:124,children:m("%h:%m:%.3sZ",t)}),Object(y.jsx)("text",{x:75,y:128,children:O("%h:%m:%s%Z:%z",t)}),Object(y.jsx)("text",{x:75,y:132,children:O("%h:%m:%.3s%Z:%z",t)}),Object(y.jsx)("text",{x:75.087,y:138,children:m("%Y-%M-%DT%h:%m:%sZ",t)}),Object(y.jsx)("text",{x:79.087,y:142,children:m("%Y-%M-%DT%h:%m:%.3sZ",t)}),Object(y.jsx)("text",{x:71.963,y:146,children:m("%Y-%M-%DT%h:%m:%s+00:00",t)}),Object(y.jsx)("text",{x:67.098,y:150,children:m("%Y-%M-%Dt%h:%m:%s+00:00",t)}),Object(y.jsx)("text",{x:76,y:154,children:O("%Y-%M-%DT%h:%m:%s%Z:%z",t)}),Object(y.jsx)("text",{x:72,y:158,children:O("%Y-%M-%DT%h:%m:%.3s%Z:%z",t)})]}),Object(y.jsxs)("g",{id:"rfc-iso",children:[Object(y.jsx)("text",{x:84,y:99,children:m("%Y-%M-%Dt%h:%m:%sz",t)}),Object(y.jsx)("text",{x:82,y:103,children:O("%Y-%M-%Dt%h:%m:%s%Z:%z",t)})]}),Object(y.jsxs)("g",{id:"iso",children:[Object(y.jsx)("text",{x:123.106,y:80,children:O("%Y-%M-%DT%h:%m",t)}),Object(y.jsx)("text",{x:118.106,y:84,children:O("%Y-%M",t)}),Object(y.jsx)("text",{x:138.106,y:84,children:O("%h:%m:%s",t)}),Object(y.jsx)("text",{x:113.587,y:88,children:O("%Y-%M-%DT%,1h",t)}),Object(y.jsx)("text",{x:143.414,y:88,children:O("%Y-%M-%DT%.1h",t)}),Object(y.jsx)("text",{x:126.139,y:92,children:O("%Y-%M-%DT%h:%m:%s",t)}),Object(y.jsx)("text",{x:119.369,y:96,children:O("%Y-%M-%DT%h:%,1m",t)}),Object(y.jsx)("text",{x:150.677,y:96,children:O("%Y-%M-%DT%h:%.1m",t)}),Object(y.jsx)("text",{x:120,y:100,children:O("T%h:%m:%s",t)}),Object(y.jsx)("text",{x:140,y:100,children:m("T%h:%m:%sZ",t)}),Object(y.jsx)("text",{x:160,y:100,children:O("T%h:%m:%s%Z:%z",t)}),Object(y.jsx)("text",{x:164,y:104,children:O("T%h:%m:%s%Z",t)}),Object(y.jsx)("text",{x:120,y:104,children:O("%Y",t)}),Object(y.jsx)("text",{x:132,y:104,children:O("%X",t)}),Object(y.jsx)("text",{x:144,y:104,children:O("%C",t)}),Object(y.jsx)("text",{x:156,y:104,children:O("%L",t)}),Object(y.jsx)("text",{x:144.889,y:108,children:m("%Y-%M-%DT%h:%m:%s\u221201:00",t,-60)}),Object(y.jsx)("text",{x:125.009,y:108,children:O("%Y-%O",t)}),Object(y.jsx)("text",{x:123.413,y:112,children:O("%Y-%OT%h:%m",t)}),Object(y.jsx)("text",{x:153.413,y:112,children:O("%Y-%OT%h:%m:%s",t)}),Object(y.jsx)("text",{x:149.971,y:116,children:O("%Y-%OT%.1h",t)}),Object(y.jsx)("text",{x:126.913,y:116,children:O("%V-W%W",t)}),Object(y.jsx)("text",{x:133.259,y:120,children:O("%V-W%W-%w",t)}),Object(y.jsx)("text",{x:160.336,y:120,children:O("%V-W%W-%wT%h:%m",t)}),Object(y.jsx)("text",{x:169.336,y:124,children:O("%V-W%W-%wT%h:%m:%s",t)}),Object(y.jsx)("text",{x:129.087,y:124,children:O("%Y-%M-%DT%h:%m:%.3s",t)}),Object(y.jsx)("text",{x:124.336,y:128,children:O("%Y/P2M",t)}),Object(y.jsx)("text",{x:144.336,y:128,children:O("%Y-%M/P2M",t)}),Object(y.jsx)("text",{x:164.336,y:128,children:O("%Y-%M-%D/P2M",t)}),Object(y.jsx)("text",{x:129.336,y:132,children:O("%Y-%M-%DT%h/PT2M",t)}),Object(y.jsx)("text",{x:164.336,y:132,children:O("%Y-%M-%DT%h:%m/PT2M",t)}),Object(y.jsx)("text",{x:125.336,y:136,children:O("%Y-%M-%DT%h:%m:%s/P3D",t)}),Object(y.jsx)("text",{x:169.336,y:136,children:O("%Y-%M-%DT%h:%m:%s/PT2M",t)}),Object(y.jsx)("text",{x:120.336,y:140,children:O("%Y-%O/P2M",t)}),Object(y.jsx)("text",{x:144.336,y:140,children:O("%Y-W%W/P2M",t)}),Object(y.jsx)("text",{x:169.336,y:140,children:O("%Y-W%W-%w/P2M",t)}),Object(y.jsx)("text",{x:116.336,y:144,children:O("%Y-%OT%h/PT2M",t)}),Object(y.jsx)("text",{x:149.336,y:144,children:O("%Y-W%W-%wT%h:%m/PT2M",t)}),Object(y.jsx)("text",{x:184.336,y:144,children:O("%Y-%M/12",t)}),Object(y.jsx)("text",{x:114.336,y:148,children:O("%Y-%OT%h:%m:%s/PT3H",t)}),Object(y.jsx)("text",{x:154.336,y:148,children:O("%Y-W%W-%wT%h:%m:%s/PT2M",t)}),Object(y.jsx)("text",{x:109.336,y:152,children:O("%Y-%M-%D/28",t)}),Object(y.jsx)("text",{x:134.336,y:152,children:O("%Y-%M-%D/%Y-12-31",t)}),Object(y.jsx)("text",{x:169.336,y:152,children:O("%Y-%M-%DT%h/23",t)}),Object(y.jsx)("text",{x:104.336,y:156,children:O("%Y-%M-%DT%h:%m/59",t)}),Object(y.jsx)("text",{x:164.336,y:156,children:O("%Y-%M-%DT%h:%m:%s/59",t)}),Object(y.jsx)("text",{x:120,y:190,children:"P1Y"}),Object(y.jsx)("text",{x:130,y:190,children:"P1,5Y"}),Object(y.jsx)("text",{x:140,y:190,children:"P1.5Y"}),Object(y.jsx)("text",{x:90,y:198,children:"P2M"}),Object(y.jsx)("text",{x:100,y:198,children:"P2,5M"}),Object(y.jsx)("text",{x:120,y:198,children:"P2.5M"}),Object(y.jsx)("text",{x:140,y:198,children:"P1Y2M"}),Object(y.jsx)("text",{x:100,y:206,children:"P1Y2,5M"}),Object(y.jsx)("text",{x:110,y:206,children:"P1Y2.5M"}),Object(y.jsx)("text",{x:130,y:206,children:"P1Y2.5MT4H"}),Object(y.jsx)("text",{x:100,y:214,children:O("R2/%Y-%O/P1Y2.5MT4H",t)}),Object(y.jsx)("text",{x:120,y:222,children:O("R/%Y-W%W-%wT%h/PT45M",t)}),Object(y.jsxs)("g",{id:"iso-mutual",transform:"translate(20 -18)",children:[Object(y.jsx)("circle",{cx:150.327,cy:186.288,r:30.135,fill:"none",stroke:"#666",strokeWidth:.372,strokeDasharray:"4 4"}),Object(y.jsxs)("text",{x:157.192,y:230,fill:"#666",className:"key-label",style:{fontSize:8},children:["By Mutual Agreement",Object(y.jsx)("tspan",{x:157.192,dy:8,style:{fontSize:5},children:"(e.g. agreement on six-digit years)"}),Object(y.jsx)("tspan",{x:157.192,dy:7,style:{fontSize:4},children:"ISO 8601-2:2019"})]}),Object(y.jsx)("text",{x:136,y:164,children:O("+00%C",t)}),Object(y.jsx)("text",{x:148,y:164,children:O("+00%Y",t)}),Object(y.jsx)("text",{x:154,y:168,children:O("+00%Y-%M",t)}),Object(y.jsx)("text",{x:128,y:168,children:O("+00%Y-%M-%D",t)}),Object(y.jsx)("text",{x:148,y:172,children:O("+00%Y-%M-%DT%h",t)}),Object(y.jsx)("text",{x:124,y:176,children:O("+00%Y-%M-%DT%h:%m",t)}),Object(y.jsx)("text",{x:148,y:180,children:O("+00%Y-%M-%DT%h:%m:%s",t)}),Object(y.jsx)("text",{x:124,y:184,children:O("+00%V-W%W-%wT%h",t)}),Object(y.jsx)("text",{x:148,y:188,children:O("+00%V-W%W-%wT%h:%m",t)}),Object(y.jsx)("text",{x:124,y:192,children:O("+00%Y-%OT%h",t)}),Object(y.jsx)("text",{x:150,y:192,children:O("+00%Y-%OT%h:%m",t)}),Object(y.jsx)("text",{x:140,y:196,children:O("+00%Y-%OT%h:%m%Z:%z",t)}),Object(y.jsx)("text",{x:128,y:200,children:O("+00%Y-%OT%h:%m:%s",t)}),Object(y.jsx)("text",{x:144,y:204,children:O("+00%Y%OT%h%m%s",t)}),Object(y.jsx)("text",{x:136,y:208,children:m("+00%Y%M%DT%h%m%sZ",t)})]})]}),Object(y.jsxs)("g",{id:"html",transform:"translate(-10 4)",children:[Object(y.jsx)("circle",{cx:90,cy:155,r:48,fill:"none",stroke:"#3c790a",strokeWidth:.265}),Object(y.jsxs)("text",{x:50,y:202,fill:"#3c790a",className:"key-label",children:["HTML",Object(y.jsx)("tspan",{x:50,dy:6,style:{fontSize:"0.4em"},children:"Living Standard"})]}),Object(y.jsx)("text",{x:60,y:170,children:m("--%M-%D",t)})]})]}))},D=["%h:%m:%sZ","%h:%m:%.1sZ","%h:%m:%.3sZ","%h:%m:%s.%uZ","%h:%m:%s+00:00","%h:%m:%.1s+00:00","%h:%m:%.3s+00:00","%h:%m:%s.%u+00:00"],p=["%Y-%M-%DT%h:%m:%s%Z:%z","%Y-%M-%DT%h:%m:%.3s%Z:%z","%Y-%M-%DT%h:%m:%s.%u%Z:%z"],g=["%Y-%M-%D","%V-W%W-%w","%Y-%O"],v=["%h","%,1h","%.1h","%h:%m","%h:%,1m","%h:%.1m","%h:%m:%s","%h:%m:%,3s","%h:%m:%.3s","%h:%m:%s,%u","%h:%m:%s.%u"],Z=[].concat(v,Object(a.a)(v.map((function(e){return"T"+e})))),z=Object(a.a)(new Set([].concat(Object(a.a)(Z),Object(a.a)(Z.map((function(e){return e.replace(/[-:]/g,"")})))))),C=z.map((function(e){return e+"Z"})).filter((function(e){return!D.includes(e)})),U=V(g,v).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1];return"".concat(c,"T").concat(r)})),P=U.map((function(e){return e.replace(/[-:]/g,"")})),S=[].concat(Object(a.a)(U),Object(a.a)(P)),w=["%Y-%M-%DT%h:%m:%s%Z:%z","%Y-%M-%DT%h:%m:%.3s%Z:%z"],W=[].concat(Object(a.a)(S),Object(a.a)(S.map((function(e){return e+"%Z"}))),Object(a.a)(U.map((function(e){return e+"%Z:%z"}))),Object(a.a)(P.map((function(e){return e+"%Z%z"})))).filter((function(e){return!p.includes(e)})),k=["P1Y","P1,5Y","P1.5Y","P1M","P1,5M","P1.5M","P1W","P1D","PT1H","PT1M","PT1S","P1Y1M","P1Y1D","P1Y1M1D","P1DT1H","P1MT1M","P1DT1M","P1WT1M","P1WT1M1S"],F=["P1Y","P1M","P1D"],N=[].concat(Object(a.a)(V(g,F).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1];return"".concat(c,"/").concat(r)}))),Object(a.a)(V(g,g).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1];return"".concat(c,"/").concat(r)}))),Object(a.a)(V(F,g).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1];return"".concat(c,"/").concat(r)}))),Object(a.a)(V(U,["P1DT1H"]).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1];return"".concat(c,"/").concat(r)}))),Object(a.a)(V(g,["P1Y"]).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1];return"R/".concat(c,"/").concat(r)}))),Object(a.a)(V(g,g).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1];return"R/".concat(c,"/").concat(r)}))),Object(a.a)(V(g,["P1Y"]).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1];return"R10/".concat(c,"/").concat(r)}))),Object(a.a)(V(g,g).map((function(e){var t=Object(j.a)(e,2),c=t[0],r=t[1];return"R10/".concat(c,"/").concat(r)})))),I=[].concat(Object(a.a)(["%Y-%M-%D"].map((function(e){return{format:e,rfc:!0,iso:!0}}))),Object(a.a)(["%L","%C","%X","%Y","%Y-%M","%Y-%O","%V-W%W","%V-W%W-%w","%Y%M%D","%Y%O","%VW%W","%VW%W%w"].map((function(e){return{format:e,rfc:!1,iso:!0}})))),R=[].concat(Object(a.a)(["%h:%m:%s-00:00","%h:%m:%.3s-00:00"].map((function(e){return{format:e,timezone:0,rfc:!0,iso:!1}}))),Object(a.a)(D.map((function(e){return{format:e,timezone:0,rfc:!0,iso:!0}}))),Object(a.a)(["%h:%m:%s%Z:%z","%h:%m:%.1s%Z:%z","%h:%m:%.3s%Z:%z","%h:%m:%s.%u%Z:%z"].map((function(e){return{format:e,timezone:NaN,rfc:!0,iso:!0}}))),Object(a.a)(z.map((function(e){return{format:e,timezone:NaN,rfc:!1,iso:!0}}))),Object(a.a)(C.map((function(e){return{format:e,timezone:0,rfc:!1,iso:!0}})))),H=[].concat(Object(a.a)(["%Y-%M-%D %h:%m:%sZ","%Y-%M-%D_%h:%m:%sZ","%Y-%M-%D %h:%m:%sz","%Y-%M-%D_%h:%m:%sz","%Y-%M-%D %h:%m:%.3sZ","%Y-%M-%D_%h:%m:%.3sZ","%Y-%M-%D %h:%m:%.3sz","%Y-%M-%D_%h:%m:%.3sz","%Y-%M-%D %h:%m:%s-00:00","%Y-%M-%D %h:%m:%.3s-00:00","%Y-%M-%DT%h:%m:%s-00:00","%Y-%M-%DT%h:%m:%.3s-00:00"].map((function(e){return{format:e,timezone:0,rfc:!0,iso:!1}}))),Object(a.a)(["%Y-%M-%DT%h:%m:%sZ","%Y-%M-%DT%h:%m:%.3sZ","%Y-%M-%DT%h:%m:%s+00:00","%Y-%M-%DT%h:%m:%.3s+00:00","%Y-%M-%DT%h:%m:%s.%u+00:00"].map((function(e){return{format:e,timezone:0,rfc:!0,iso:!0}}))),Object(a.a)(p.map((function(e){return{format:e,timezone:NaN,rfc:!0,iso:!0}}))),Object(a.a)(w.map((function(e){return{format:e.replace("T","t"),timezone:NaN,rfc:!0,iso:!0}}))),Object(a.a)(w.map((function(e){return{format:e,timezone:-720,rfc:!0,iso:!0}}))),Object(a.a)(w.map((function(e){return{format:e,timezone:525,rfc:!0,iso:!0}}))),Object(a.a)(["%Y-%M-%DT%h%\u2212Z","%Y-%M-%DT%h:%m%\u2212Z","%Y-%M-%DT%h:%m:%s%\u2212Z","%Y-%M-%DT%h:%m:%,3s%\u2212Z","%Y-%M-%DT%h:%m:%.3s%\u2212Z","%Y-%M-%DT%h%\u2212Z:%z","%Y-%M-%DT%h:%m%\u2212Z:%z","%Y-%M-%DT%h:%m:%s%\u2212Z:%z","%Y-%M-%DT%h:%m:%,3s%\u2212Z:%z","%Y-%M-%DT%h:%m:%.3s%\u2212Z:%z","%Y%M%DT%h%\u2212Z","%Y%M%DT%h%m%\u2212Z","%Y%M%DT%h%m%s%\u2212Z","%Y%M%DT%h%m%,3s%\u2212Z","%Y%M%DT%h%m%.3s%\u2212Z","%Y%M%DT%h%\u2212Z%z","%Y%M%DT%h%m%\u2212Z%z","%Y%M%DT%h%m%s%\u2212Z%z","%Y%M%DT%h%m%,3s%\u2212Z%z","%Y%M%DT%h%m%.3s%\u2212Z%z"].map((function(e){return{format:e,timezone:-720,rfc:!1,iso:!0}}))),Object(a.a)(W.map((function(e){return{format:e,timezone:NaN,rfc:!1,iso:!0}}))));function V(e,t){return e.map((function(e){return t.map((function(t){return[e,t]}))})).flat()}var L=function(){var e=Object(r.useState)((function(){return new Date})),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)("both"),i=Object(j.a)(s,2),o=i[0],x=i[1];Object(r.useEffect)((function(){var e=setInterval((function(){return n(new Date)}),1e3);return function(){return clearTimeout(e)}}),[]);var h={background:"#E5E5E5",textAlign:"left"};function l(){var e="rfc3339"===o||"both"===o,t="iso8601"===o||"both"===o,r=[];r.push("# Dates"),r.push.apply(r,Object(a.a)(I.filter((function(c){return c.rfc&&e||c.iso&&t})).map((function(e){return O(e.format,c)})))),r.push("# Times"),r.push.apply(r,Object(a.a)(R.filter((function(c){return c.rfc&&e||c.iso&&t})).map((function(e){return m(e.format,c,e.timezone)})))),r.push("# Date-Times"),r.push.apply(r,Object(a.a)(H.filter((function(c){return c.rfc&&e||c.iso&&t})).map((function(e){return m(e.format,c,e.timezone)})))),function(e,t){var c=new Blob([e]),r=URL.createObjectURL(c),n=document.createElement("a");n.download=t,n.href=r,document.body.append(n),n.click(),document.body.removeChild(n),setTimeout((function(){return URL.revokeObjectURL(r)}),0)}(r.join("\n"),"date-test-values-".concat(e?"rfc3339":"").concat(e&&t?"-":"").concat(t?"iso8601":"",".txt"))}return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{children:"RFC 3339 vs ISO 8601"}),Object(y.jsx)(Y,{date:c}),Object(y.jsx)("h2",{children:"Format Listing"}),Object(y.jsx)("p",{style:{marginBottom:0},children:"Notes:"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"This table is not exhaustive."}),Object(y.jsx)("li",{children:"This page targets ISO 8601-1:2019 and ISO 8601-2:2019 editions. Previous editions and drafts contain key differences."}),Object(y.jsxs)("li",{children:["Both standards are case-insensitive so every ",Object(y.jsx)("code",{children:"T"}),", ",Object(y.jsx)("code",{children:"W"}),", ",Object(y.jsx)("code",{children:"P"}),", ",Object(y.jsx)("code",{children:"R"}),", or ",Object(y.jsx)("code",{children:"Z"})," could be ",Object(y.jsx)("code",{children:"t"}),", ",Object(y.jsx)("code",{children:"w"}),", ",Object(y.jsx)("code",{children:"p"}),", ",Object(y.jsx)("code",{children:"r"}),", or ",Object(y.jsx)("code",{children:"z"})," respectively."]}),Object(y.jsxs)("li",{children:["RFC 3339 allows for other characters to replace ",Object(y.jsx)("code",{children:"T"})," but only gives a space character as an example."]}),Object(y.jsx)("li",{children:"ISO 8601 allows decimal fractions of the smallest time value. These are represented here by a single fractional digit but the standard allows arbitrary precision."}),Object(y.jsx)("li",{children:"ISO 8601 prefers commas to dots for decimal separation but they are interchangeable in all formats."}),Object(y.jsx)("li",{children:'ISO 8601 recommends U+2212 MINUS "\u2212" for timezones west of Greenwich. The formatter defaults to U+2D HYPHEN MINUS "-" which is valid under both standards.'}),Object(y.jsxs)("li",{children:["ISO 8601-1:2019 permits omitting the ",Object(y.jsx)("code",{children:"T"})," in the ",Object(y.jsx)("em",{children:"time of day"})," representations (",Object(y.jsx)("b",{children:"Times"}),")*. However, a ",Object(y.jsx)("code",{children:"T"})," (or ",Object(y.jsx)("code",{children:"t"}),") is always required for ",Object(y.jsx)("em",{children:"date and time of day"})," representations (",Object(y.jsx)("b",{children:"Date-Times"}),"). Previous editions also allowed omitting the ",Object(y.jsx)("code",{children:"T"})," in Date-Times but it was never permitted to ",Object(y.jsx)("em",{children:"insert"})," alternative characters (e.g. space or underscore). [* When unambiguous]"]}),Object(y.jsx)("li",{children:"The format key is given below the table."})]}),Object(y.jsxs)("table",{className:"App-FormatTable",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Format"}),Object(y.jsx)("th",{children:"Now"}),Object(y.jsx)("th",{children:"RFC 3339"}),Object(y.jsx)("th",{children:"ISO 8601"})]})}),Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("th",{colSpan:4,style:h,children:"Dates"})}),I.map((function(e){return Object(y.jsx)(E,{format:e.format,now:c,rfc:e.rfc,iso:e.iso},e.format)}))]}),Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("th",{colSpan:4,style:h,children:"Times"})}),R.map((function(e){return Object(y.jsx)(E,{format:e.format,now:c,timezone:e.timezone,rfc:e.rfc,iso:e.iso},e.format)}))]}),Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("th",{colSpan:4,style:h,children:"Date-Times"})}),H.map((function(e,t){return Object(y.jsx)(E,{format:e.format,now:c,timezone:e.timezone,rfc:e.rfc,iso:e.iso},t)}))]}),Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("th",{colSpan:4,style:h,children:"Periods"})}),k.map((function(e){return Object(y.jsx)(E,{format:e,now:c,iso:!0},e)}))]}),Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("th",{colSpan:4,style:h,children:"Ranges"})}),N.map((function(e){return Object(y.jsx)(E,{format:e,now:c,iso:!0},e)}))]})]}),Object(y.jsx)("h3",{children:"Format Key"}),Object(y.jsx)("pre",{style:{backgroundColor:"#F4F4F4"},children:Object(y.jsx)("code",{children:"\n%L - Millennium\n%C - Century\n%X - Decade\n%Y - Year\n%M - Month\n%D - Day\n%V - Week Year\n%W - Week\n%w - Week Day\n%O - Ordinal Day\n\n%h - Hour\n%m - Minute\n%s - Second\n%u - Microsecond\n\n%Z - Zone Hour including +/-\n%z - Zone Minute\n\n%[,.]3x - Value including fraction with given precision, using either comma or dot.\n%\u2212Z     - Use U+2212 for negative timezone hours (ISO recommended)\n"})}),Object(y.jsxs)("p",{onChange:function(e){return x(e.target.value)},children:[Object(y.jsx)("button",{onClick:function(){return l()},children:"Download test file"}),Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"radio",name:"test-file-includes",value:"rfc3339",checked:"rfc3339"===o}),"RFC 3339"]}),Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"radio",name:"test-file-includes",value:"iso8601",checked:"iso8601"===o}),"ISO 8601"]}),Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"radio",name:"test-file-includes",value:"both",checked:"both"===o}),"Union"]})]}),Object(y.jsx)("p",{children:Object(y.jsx)("a",{href:"https://github.com/IJMacD/rfc3339-iso8601",children:"Source on GitHub"})})]})};function E(e){var t=e.format,c=e.now,r=e.timezone,n=void 0===r?NaN:r,s=e.rfc,i=void 0!==s&&s,a=e.iso,j=void 0!==a&&a;return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("code",{children:t})}),Object(y.jsx)("td",{children:isNaN(n)?O(t,c):m(t,c,n)}),Object(y.jsx)("td",{children:i&&"\u2714\ufe0f"}),Object(y.jsx)("td",{children:j&&"\u2714\ufe0f"})]})}i.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(L,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4f006e29.chunk.js.map