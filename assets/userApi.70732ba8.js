import{c as s}from"./index.30597a5a.js";const d=async({username:e,password:t})=>await(await fetch("https://mevn-todolist-backend.onrender.com"+"/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,username:e})})).json(),l=()=>{const e=s(null),t=s(!1),n=s(null);function a(){e.value=null,t.value=!0,n.value=null,fetch("https://mevn-todolist-backend.onrender.com"+"/user").then(o=>o.json()).then(o=>{e.value=o,t.value=!1}).catch(o=>{n.value=!0,t.value=!1})}return a(),{data:e,loading:t,err:n,retry:a}},i=async e=>await(await fetch("https://mevn-todolist-backend.onrender.com"+"/user",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})})).json();export{d as c,i as d,l as u};
