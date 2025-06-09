import{d as n,R as l,j as e,C as o,S as d,B as j}from"./index-NPM7xUzc.js";import{F as f}from"./index-D65pO_WP.js";const g=n("section")`
  position: relative;
  padding: 0rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 0rem 0 4rem;
  }
`,w=n("p")`
  margin: 1.5rem 0 2rem 0;
`,u=n(l)`
  flex-direction: ${({direction:i="left"})=>i==="left"?"row":"row-reverse"};
`,y=n("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,v=n("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,b=n("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,C=n("p")`
  font-size: 13px;
`,B=n("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,I=({icon:i,title:p,content:x,section:a,button:c,id:m,direction:r})=>{const h=t=>{document.getElementById(t).scrollIntoView({behavior:"smooth"})};return e.jsx(g,{children:e.jsx(f,{direction:r,triggerOnce:!0,children:e.jsxs(u,{justify:"space-between",align:"middle",id:m,direction:r,children:[e.jsx(o,{lg:11,md:11,sm:12,xs:24,children:e.jsx(d,{src:i,width:"100%",height:"100%"})}),e.jsx(o,{lg:11,md:11,sm:11,xs:24,children:e.jsxs(y,{children:[e.jsx("h6",{style:{marginBottom:"12px"},children:p}),e.jsx(w,{children:x}),r==="right"?e.jsx(B,{children:typeof c=="object"&&c.map((t,s)=>e.jsx(j,{color:t.color,onClick:()=>h("about"),children:t.title},s))}):e.jsx(v,{children:e.jsx(l,{justify:"space-between",children:typeof a=="object"&&a.map((t,s)=>e.jsxs(o,{span:11,children:[e.jsx(d,{src:t.icon,width:"60px",height:"60px"}),e.jsx(b,{children:t.title}),e.jsx(C,{children:t.content})]},s))})})]})})]})})})};export{I as default};
