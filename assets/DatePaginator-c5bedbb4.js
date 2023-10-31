import{P as i,aF as k,o as D,l as a,m as g,r as x,am as N,aa as P}from"./index-2ffefb19.js";import{P as S}from"./PeriodPaginator-155b6a6f.js";const v="_tableHeader_uoho2_1",O="_tools_uoho2_18",R="_periodTypeWrapper_uoho2_33",C="_periodType_uoho2_33",$="_periodLeft_uoho2_80",q="_periodRight_uoho2_86",L="_activePeriod_uoho2_92",W="_weekday_uoho2_108",H="_clickable_uoho2_126",I="_dayNum_uoho2_130",E="_selectedDay_uoho2_136",e={tableHeader:v,tools:O,periodTypeWrapper:R,periodType:C,periodLeft:$,periodRight:q,activePeriod:L,weekday:W,clickable:H,dayNum:I,selectedDay:E};function T(){const s=k(),{pathname:n}=window.location,{t}=D(),c=d=>{s(d==="month"?`/calendar/month/${new Date().toISOString().slice(0,7)}`:`/calendar/day/${new Date().toISOString().slice(0,10)}`)};return a.jsxs("div",{className:e.periodTypeWrapper,children:[a.jsx("button",{className:g(e.periodType,e.periodLeft,n.includes("month")?e.activePeriod:null),onClick:()=>{c("month")},children:t("calendar.periodSelect.month")}),a.jsx("button",{className:g(e.periodType,e.periodRight,n.includes("day")?e.activePeriod:null),onClick:()=>{c("day")},children:t("calendar.periodSelect.day")})]})}T.propTypes={currentDate:i.instanceOf(Date).isRequired};function M({prevDate:s,nextDate:n,currentDate:t,onChangeCalendar:c,mode:d}){const{t:u}=D(),y=u("calendar.months",{returnObjects:!0}),{pathname:h}=window.location,p=`${h.includes("day")?t.getDate():""} ${y[t.getMonth()]} ${t.getFullYear()}`;return a.jsxs("div",{className:e.tools,children:[a.jsx(S,{nameOfDate:p,prevDate:s,nextDate:n,onChangeCalendar:c,mode:d,currentDate:t}),a.jsx(T,{currentDate:t})]})}M.propTypes={prevDate:i.func.isRequired,nextDate:i.func.isRequired,currentDate:i.instanceOf(Date).isRequired,onChangeCalendar:i.func,mode:i.string};const F=({currentDate:s,isDateShown:n})=>{const[t,c]=x.useState([]),d=N(`(max-width: ${P(475)})`),u=k(),{t:y,i18n:{language:h}}=D(),p=y("calendar.weekdays",{returnObjects:!0});x.useEffect(()=>{function o(l){const r=[],w=h==="en"?"en-US":"uk-UA",j=p.indexOf(l.toLocaleString(w,{weekday:"short"}));for(let _=0;_<7;_++){const f=new Date(l);f.setDate(l.getDate()-(j-_)),r.push(f)}return r}const m=o(s);c(m)},[s]);const b=o=>{o.setDate(o.getDate()),u(`/calendar/day/${o.toISOString().slice(0,10)}`)};return a.jsx("ul",{className:e.tableHeader,children:p.map((o,m)=>{const l=t[m],r=new Date(l);return a.jsxs("li",{className:g(e.weekday,n&&e.clickable),onClick:()=>{n&&b(r)},children:[a.jsx("p",{className:e.dayNum,children:d?o[0]:o}),n&&a.jsx("span",{className:s.getDate()===r.getDate()?e.selectedDay:null,children:r.getDate().toString()})]},o)})})};F.propTypes={currentDate:i.instanceOf(Date).isRequired,isDateShown:i.bool.isRequired};export{M as C,F as D};
