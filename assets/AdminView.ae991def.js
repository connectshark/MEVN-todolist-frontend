import{b as w,d as v}from"./taskApi.2af5f8c8.js";import{u as f,c as N,j as C,k as T,l as V,o,d as s,e,F as h,m,i as g,g as E,n as u,p,t as l,q as i,x as I}from"./index.70324625.js";const q={class:"bg-amber-50 min-h-[90vh] grid grid-cols-2 gap-4 p-4"},A=e("h2",null,"\u6240\u6709\u4EFB\u52D9",-1),U={key:0},B={class:"text-xs"},D=["onClick"],S=e("h2",null,"\u6240\u6709\u4F7F\u7528\u8005",-1),F={class:"text-xs"},M=["onClick"],L={__name:"AdminView",setup(O){const r=f(),c=N([]),y=C(()=>c.value.map(n=>{const _=r.users.find(a=>a._id===n.owner);return{id:n._id,ownerName:_.username,ownerId:n.owner,content:n.content}})),b=async n=>{await v(n),d()},k=async n=>{await I(n),d()},d=async()=>{await r.updateUsers();const n=await w();console.log(n),c.value=n};return T(d),(n,_)=>{const a=V("router-link");return o(),s("main",q,[e("div",null,[A,c.value.length>0?(o(),s("ul",U,[(o(!0),s(h,null,m(g(y),t=>(o(),s("li",{key:t._id,class:"bg-gray-50 mb-2 p-3"},[e("p",null,"OWNER: "+l(t.ownerName),1),e("p",null,[i("ID: "),e("span",B,l(t.id),1)]),e("p",null,"CONTENT: "+l(t.content),1),e("p",null,[u(a,{to:{path:"/task/update",query:{taskId:t.id,redirect:"/admin"}},class:"bg-amber-500 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},{default:p(()=>[i("\u66F4\u65B0\u4EFB\u52D9 ")]),_:2},1032,["to"]),e("button",{onClick:x=>b(t.id),class:"bg-slate-500 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},"\u522A\u9664\u4EFB\u52D9 ",8,D)])]))),128))])):E("",!0)]),e("div",null,[S,e("ul",null,[(o(!0),s(h,null,m(g(r).users,t=>(o(),s("li",{key:t._id,class:"bg-gray-50 mb-2 p-3"},[e("p",null,"NAME: "+l(t.username),1),e("p",null,[i("ID: "),e("span",F,l(t._id),1)]),e("p",null,"ACTIVE: "+l(t.active),1),e("p",null,[u(a,{to:{path:"/task/new",query:{owner:t._id,redirect:"/admin"}},class:"bg-amber-500 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},{default:p(()=>[i("\u70BA\u4F7F\u7528\u8005\u65B0\u589E\u4EFB\u52D9 ")]),_:2},1032,["to"]),e("button",{onClick:x=>k(t._id),class:"bg-slate-500 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},"\u522A\u9664\u9019\u500B\u4F7F\u7528\u8005 ",8,M)])]))),128))]),e("div",null,[u(a,{to:{path:"/signup",query:{redirect:"/admin"}},class:"bg-sky-600 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},{default:p(()=>[i("\u5275\u5EFA\u4F7F\u7528\u8005 ")]),_:1})])])])}}};export{L as default};