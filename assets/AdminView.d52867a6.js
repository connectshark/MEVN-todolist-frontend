import{b as E,d as V}from"./taskApi.47d380d6.js";import{u as I,d as S}from"./userApi.70732ba8.js";import{u as U,k as q,s as A,o,d as n,e as t,h as s,g as d,w as g,F as k,l as m,m as u,n as p,t as i,p as a}from"./index.30597a5a.js";const B={class:"bg-amber-50 min-h-[90vh] grid grid-cols-2 gap-4 p-4"},L=t("h2",null,"\u6240\u6709\u4EFB\u52D9",-1),R={key:0},F={class:"text-xs"},O=["onClick"],$={key:1},M=t("h2",null,"\u6240\u6709\u4F7F\u7528\u8005",-1),W={key:0},j={class:"text-xs"},z=["onClick"],G={key:1},Q={__name:"AdminView",setup(H){U();const{data:b,err:v,retry:_,loading:x}=E(),{data:w,err:C,retry:y,loading:f}=I(),T=async l=>{await V(l),updateState()},N=async l=>{await S(l),updateState()};return(l,r)=>{const c=q("router-link"),h=A("auto-animate");return o(),n("main",B,[t("div",null,[L,s(x)?(o(),n("div",R,"loading")):d("",!0),g((o(),n("ul",null,[(o(!0),n(k,null,m(s(b),e=>(o(),n("li",{key:e._id,class:"bg-gray-50 mb-2 p-3"},[t("p",null,"OWNER: "+i(e.owner),1),t("p",null,[a("ID: "),t("span",F,i(e._id),1)]),t("p",null,"CONTENT: "+i(e.content),1),t("p",null,[u(c,{to:{path:"/task/update",query:{taskId:e.id,redirect:"/admin"}},class:"bg-amber-500 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},{default:p(()=>[a("\u66F4\u65B0\u4EFB\u52D9 ")]),_:2},1032,["to"]),t("button",{onClick:D=>T(e.id),class:"bg-slate-500 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},"\u522A\u9664\u4EFB\u52D9 ",8,O)])]))),128))])),[[h]]),s(v)?(o(),n("div",$,[t("button",{onClick:r[0]||(r[0]=(...e)=>s(_)&&s(_)(...e)),class:"bg-sky-600 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},"\u91CD\u65B0\u6574\u7406")])):d("",!0)]),t("div",null,[M,s(f)?(o(),n("div",W,"loading")):d("",!0),g((o(),n("ul",null,[(o(!0),n(k,null,m(s(w),e=>(o(),n("li",{key:e._id,class:"bg-gray-50 mb-2 p-3"},[t("p",null,"NAME: "+i(e.username),1),t("p",null,[a("ID: "),t("span",j,i(e._id),1)]),t("p",null,"ACTIVE: "+i(e.active),1),t("p",null,[u(c,{to:{path:"/task/new",query:{owner:e._id,redirect:"/admin"}},class:"bg-amber-500 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},{default:p(()=>[a("\u70BA\u4F7F\u7528\u8005\u65B0\u589E\u4EFB\u52D9 ")]),_:2},1032,["to"]),t("button",{onClick:D=>N(e._id),class:"bg-slate-500 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},"\u522A\u9664\u9019\u500B\u4F7F\u7528\u8005 ",8,z)])]))),128))])),[[h]]),s(C)?(o(),n("div",G,[t("button",{onClick:r[1]||(r[1]=(...e)=>s(y)&&s(y)(...e)),class:"bg-sky-600 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},"\u91CD\u65B0\u6574\u7406")])):d("",!0),t("div",null,[u(c,{to:{path:"/signup",query:{redirect:"/admin"}},class:"bg-sky-600 text-white inline-block py-3 px-5 rounded-lg hover:opacity-80 transition-colors"},{default:p(()=>[a("\u5275\u5EFA\u4F7F\u7528\u8005 ")]),_:1})])])])}}};export{Q as default};
