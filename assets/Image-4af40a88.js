import{w as h,u as x,r as p,a as B,R as _,B as d,c as V,T as D}from"./index-2ffefb19.js";function J(r){return typeof r=="object"&&r!==null?"base"in r?r.base:void 0:r}var k={root:"m-9e117634"};const y=k;var F=Object.defineProperty,T=Object.defineProperties,$=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,u=(r,e,s)=>e in r?F(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,o=(r,e)=>{for(var s in e||(e={}))g.call(e,s)&&u(r,s,e[s]);if(n)for(var s of n(e))O.call(e,s)&&u(r,s,e[s]);return r},v=(r,e)=>T(r,$(e)),q=(r,e)=>{var s={};for(var t in r)g.call(r,t)&&e.indexOf(t)<0&&(s[t]=r[t]);if(r!=null&&n)for(var t of n(r))e.indexOf(t)<0&&O.call(r,t)&&(s[t]=r[t]);return s};const z={},A=V((r,{radius:e,fit:s})=>({root:{"--image-radius":e===void 0?void 0:D(e),"--image-object-fit":s}})),P=h((r,e)=>{const s=x("Image",z,r),t=s,{classNames:b,className:E,style:w,styles:j,unstyled:I,vars:S,onError:l,src:a,radius:C,fit:G,fallbackSrc:c}=t,i=q(t,["classNames","className","style","styles","unstyled","vars","onError","src","radius","fit","fallbackSrc"]),[N,f]=p.useState(!a);p.useEffect(()=>f(!a),[a]);const m=B({name:"Image",classes:y,props:s,className:E,style:w,classNames:b,styles:j,unstyled:I,vars:S,varsResolver:A});return N&&c?_.createElement(d,o(v(o({component:"img",src:c},m("root")),{onError:l,mod:"fallback"}),i)):_.createElement(d,o(v(o({component:"img",ref:e},m("root")),{src:a,onError:R=>{l==null||l(R),f(!0)}}),i))});P.classes=y;P.displayName="@mantine/core/Image";export{P as I,J as g};