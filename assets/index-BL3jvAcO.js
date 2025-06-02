import{d as n,j as e,R as o,C as l,B as c}from"./index-B253kMnh.js";import{S as m}from"./index-sVtSaeAA.js";const a=n("section")`
  position: relative;
  padding: 0rem 0 0rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 0rem 0 0rem;
  }
`,x=n("p")`
  padding: 0.75rem 0 0.75rem;
`,p=n("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`,u=({title:i,content:s,button:t})=>{const d=r=>{document.getElementById(r).scrollIntoView({behavior:"smooth"})};return e.jsx(a,{children:e.jsx(m,{direction:"up",triggerOnce:!0,children:e.jsx(o,{justify:"center",align:"middle",children:e.jsx(p,{children:e.jsxs(l,{lg:24,md:24,sm:24,xs:24,children:[e.jsx("h6",{children:i}),e.jsx(x,{children:s}),t&&e.jsx(c,{name:"submit",onClick:()=>d("mission"),children:t})]})})})})})};export{u as default};
