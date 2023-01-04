import React from "react";
import ReactDOM  from "react-dom/client";
const heading1=React.createElement('h1',{className:'div',key:1},"Hello World");
const heading2=React.createElement('h1',{className:'program',key:2},"My First Program");
const root=ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render([heading1,heading2]);