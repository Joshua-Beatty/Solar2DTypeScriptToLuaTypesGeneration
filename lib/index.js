var A=Object.create;var b=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty;var z=(e,r,s,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of U(r))!q.call(e,a)&&a!==s&&b(e,a,{get:()=>r[a],enumerable:!(n=C(r,a))||n.enumerable});return e};var B=(e,r,s)=>(s=e!=null?A(L(e)):{},z(r||!e||!e.__esModule?b(s,"default",{value:e,enumerable:!0}):s,e));var l=require("read-text-file"),m=require("readdir"),P=B(require("write"));function v(e){return e=="Numbers"?"Number":e=="Table"?"any":e}function G(e){var d,g,x,w,y,_,$,T,h,O,S;let r=e+"index.markdown";console.log(e);let s=(0,l.readSync)(r),n={};n.name=(d=/# (.+)/.exec(s))==null?void 0:d[1],n.parent=(g=/> __Parent__ +?\[(.+)\]\[/.exec(s))==null?void 0:g[1],n.overview=(x=/## Overview.+?#/s.exec(s))==null?void 0:x[0].replace("## Overview","").replace("#","").trim();let a=((w=s.match(/#### \[[^\]]+?\.([^\]]+?)\]/g))==null?void 0:w.map(t=>{var o;return(o=/.+?\.(.+?)\]/.exec(t))==null?void 0:o[1]}))||[];n.properties=[];for(let t of a){let o=e+(t==null?void 0:t.replace("_",""))+".markdown",c=(0,l.readSync)(o),f=(y=/> __Type__ +?\[(.+)\]\[/.exec(c))==null?void 0:y[1],u=(_=/## Overview.+?#/s.exec(c))==null?void 0:_[0].replace("## Overview","").replace("#","").trim();n.properties.push({type:f,name:t,overview:u})}let j=(($=s.match(/#### \[.+?\:(.+?)\]/g))==null?void 0:$.map(t=>{var o;return(o=/.+?:(.+?)\(\)\]/.exec(t))==null?void 0:o[1]}))||[];n.functions=[];for(let t of j){let o=e+t+".markdown";console.log(o);let c=(0,l.readSync)(o),f=(T=/> __Return value__ +?\[(.+)\]\[/.exec(c))==null?void 0:T[1],u=(h=/## Overview.+?#/s.exec(c))==null?void 0:h[0].replace("## Overview","").replace("#","").trim(),R=[],k=c.match(new RegExp(`(	|    )object:${t}(.+)`,"g"))||[];for(let D of k){let F=((O=/\(.+\)/.exec(D))==null?void 0:O[0].replace("(","").replace(")","").split(",").map(p=>p.trim()))||[],E=[];for(let p of F){console.log(p);let N=(S=new RegExp(`#####.+${p}.+
_\\[(.+?)\\]`).exec(c))==null?void 0:S[1];E.push({type:N,name:p})}R.push(E)}n.functions.push({return:f,name:t,validArgs:R,overview:u})}let i=`interface ${n.name} `;n.parent&&!["Userdata"].includes(n.parent)?i+=`extends ${n.parent} {
`:i+=`{
`;for(let t of n.properties)i+=`/** ${t.overview} */
${t.name}?: ${v(t.type)};
`;for(let t of n.functions){i+=`/** ${t.overview} */
`;for(let o of t.validArgs)i+=`${t.name}(${o.map(c=>`${c.name}: ${v(c.type)}`).join(", ")}): ${v(t.return||"void")};
`}return i+="}",i}var H=["*/"],J=m.INCLUDE_DIRECTORIES,K=(0,m.readSync)("./docs/type/",H,J),I=[];for(let e of K){let r="./docs/type/"+e;I.push(`// ***${e}***

`+G(r))}P.default.sync("foo.d.ts",I.join(`


`),{overwrite:!0});
//# sourceMappingURL=index.js.map
