import{aL as c,aM as b,aN as x,R,r as s,ac as k,aJ as S,P as n}from"./index-2ffefb19.js";function v(e=c){const r=e===c?b:x(e);return function(){const{store:o}=r();return o}}const I=v();function C(e=c){const r=e===c?I:v(e);return function(){return r().dispatch}}const L=C(),j=R["useId".toString()]||(()=>{});function E(){const e=j();return e?`mantine-${e.replace(/:/g,"")}`:""}function V(e){const r=E(),[t,o]=s.useState(r);return k(()=>{o(S())},[]),typeof e=="string"?e:typeof window>"u"?r:t}function W({value:e,defaultValue:r,finalValue:t,onChange:o=()=>{}}){const[d,l]=s.useState(r!==void 0?r:t),a=i=>{l(i),o==null||o(i)};return e!==void 0?[e,o,!0]:[d,a,!1]}var D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},$=Object.defineProperty,N=Object.defineProperties,T=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&p(e,t,r[t]);if(u)for(var t of u(r))h.call(r,t)&&p(e,t,r[t]);return e},U=(e,r)=>N(e,T(r)),z=(e,r)=>{var t={};for(var o in e)m.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&u)for(var o of u(e))r.indexOf(o)<0&&h.call(e,o)&&(t[o]=e[o]);return t},A=(e,r,t)=>{const o=s.forwardRef((d,l)=>{var a=d,{color:i="currentColor",size:f=24,stroke:w=2,children:g}=a,O=z(a,["color","size","stroke","children"]);return s.createElement("svg",_(U(_({ref:l},D),{width:f,height:f,stroke:i,strokeWidth:w,className:`tabler-icon tabler-icon-${e}`}),O),[...t.map(([y,P])=>s.createElement(y,P)),...g||[]])});return o.propTypes={color:n.string,size:n.oneOfType([n.string,n.number]),stroke:n.oneOfType([n.string,n.number])},o.displayName=`${r}`,o};export{V as a,W as b,A as c,L as u};