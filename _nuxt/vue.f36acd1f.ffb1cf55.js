import{bH as o,k as u,bw as f,n as v,v as d,aK as l,aI as i,ak as h,bI as m}from"./entry.1f11dde8.js";function b(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:m(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),h()&&(d(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{b as u};