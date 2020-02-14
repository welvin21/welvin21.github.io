(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/sort.42469ab7.gif"},106:function(e,t,a){e.exports=a(163)},111:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(4),r=a.n(l),o=(a(111),a(38)),s=[{title:"Home",id:"home"},{title:"About",id:"about"},{title:"Projects",id:"projects"}],c=[{title:"github",url:"https://github.com/welvin21"},{title:"linkedin",url:"https://www.linkedin.com/in/welvin-bun-11067b170"},{title:"instagram",url:"https://www.instagram.com/welvin_21/"}],m=function(){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header-left"},s.map((function(e){return i.a.createElement("p",{className:"item",key:e.title,onClick:function(){document.getElementById(e.id).scrollIntoView()}},e.title)})),i.a.createElement("p",{className:"item",key:"resume",onClick:function(){return window.open("/assets/resume.html","_blank","noopener")}},"Resume")),i.a.createElement("div",{className:"header-right"},c.map((function(e){return i.a.createElement(o.a,{className:"social-icon",type:e.title,key:e.title,onClick:function(){window.open(e.url,"_blank","noopener")}})}))))},p=function(){return i.a.createElement("div",{className:"home",id:"home"},i.a.createElement("div",{className:"quote"},'"The stars will never be won by little minds, we must be big as space itself"',i.a.createElement("br",null),i.a.createElement("p",{className:"robert"},"-Robert A. Heinlein-")))},u=a(87),d=a.n(u),h=function(){return i.a.createElement("div",{className:"description"},i.a.createElement("h1",null,"Hi everyone! I'm Welvin"),i.a.createElement("p",null,"A Computer Science sophomore at The University of Hong Kong."),i.a.createElement("p",null,"I enjoy taking complex problems and turning them into simple and efficient solutions. I also love the logic of coding and always aim to be better at it, be it developing an application, building a machine learning model, or solving a competitive programming problem."),i.a.createElement("p",null,"I like physics and everything related to space exploration."),i.a.createElement("p",null,"In my leisure time, I read science-fiction books and play the guitar. "))},g=[{title:"github",url:"https://github.com/welvin21"},{title:"linkedin",url:"https://www.linkedin.com/in/welvin-bun-11067b170"},{title:"instagram",url:"https://www.instagram.com/welvin_21/"}],b=function(){return i.a.createElement("div",{className:"about",id:"about"},i.a.createElement("div",{className:"content"},i.a.createElement("img",{src:d.a,className:"mypic",alt:"mypic"}),i.a.createElement(h,null),i.a.createElement("div",{className:"social"},i.a.createElement("hr",null),g.map((function(e){return i.a.createElement(o.a,{className:"social-icon",type:e.title,key:e.title,onClick:function(){return function(e){window.open(e.url,"_blank","noopener")}(e)}})})))))},w=a(101),v=a(179),f=a(186),y=a(185),E=a(181),k=a(182),N=a(183),x=a(184),j=a(187),C=(a(155),Object(v.a)((function(e){return{picture:{width:"100%",borderTopLeftRadius:5,borderTopRightRadius:5},buttons:{marginBottom:10,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridGap:10}}}))),I=function(e){var t=e.project,a=t.pic,l=t.title,r=t.desc,o=t.url,s=t.github,c=t.tags,m=Object(n.useState)(!1),p=Object(w.a)(m,2),u=p[0],d=p[1],h=C();return i.a.createElement("div",{className:"project-card"},i.a.createElement("div",null,i.a.createElement("img",{className:h.picture,src:a,alt:l})),i.a.createElement(f.a,{style:{padding:"0px 10px"},in:u,collapsedHeight:1,timeout:1e3},i.a.createElement("div",{style:{paddingTop:10}},c.map((function(e){return function(e){var t="magenta";return["python","javascript","java","c++"].includes(e)?t="blue":["react","react-native","express","redux"].includes(e)||e.toLowerCase().includes("api")?t="green":["firebase","AWS","azure"].includes(e)&&(t="orange"),i.a.createElement(x.a,{key:e,className:"tag",color:t},e)}(e)}))),i.a.createElement("h2",{style:{color:"#4d4d4d",marginBottom:0}},l),i.a.createElement("p",{style:{paddingBottom:10,marginTop:5}},r),i.a.createElement("div",{className:h.buttons},i.a.createElement(y.a,{variant:"outlined",color:"primary",size:"small",disableElevation:!0,style:{fontSize:"min(100%, 16px)"},onClick:function(){window.open(o,"_blank","noopener")}},"See more"),i.a.createElement(y.a,{variant:"outlined",size:"small",disableElevation:!0,startIcon:i.a.createElement(E.a,null),style:{fontSize:"min(100%, 16px)"},onClick:function(){s?window.open(s,"_blank","noopener"):j.a.error({message:"Code is not available for this project.",description:"Please kindly check my other projects!"})}},"Code"))),i.a.createElement(y.a,{fullWidth:!0,onClick:function(){return d(!u)}},u?i.a.createElement(k.a,null):i.a.createElement(N.a,null)))},S=a(95),A=a.n(S),_=a(96),W=a.n(_),T=a(97),z=a.n(T),B=a(98),R=a.n(B),H=a(99),P=a.n(H),J=a(100),L=[{pic:a.n(J).a,title:"SortIt",desc:"Sorting algorithms visualizer to make learning process easier for everyone.",url:"https://sort.welvin21.com",github:"https://github.com/welvin21/sortit",tags:["javascript","react","redux"]},{pic:R.a,title:"Digibot",desc:"Virtual banking assistant focusing on bot interactions to make loan application process easier. Comprises text, voice, and click-based user interactions with well-designed UI.",url:"https://rebrand.ly/chappuishalder",github:null,tags:["javascript","react-native","AWS"]},{pic:A.a,title:"Smart Laundry System",desc:"A washing machine tracker application by RCTech Club. Aims to ease the life of R.C. Lee hall residents by providing them the ability to track the status of each washing machines on the 16th floor anywhere, anytime.",url:"https://sls.rctech.club",github:"https://github.com/rcltech/sls",tags:["python","javascript","react","AWS","firebase","arduino"]},{pic:z.a,title:"Navis",desc:"A centralized system to make data communication in the credit insurance escalation process faster.",url:"https://www.navis-app.co",github:"https://github.com/welvin21/navis",tags:["javascript","react","express","firebase"]},{pic:P.a,title:"Personal Assistant",desc:"Speech recognition powered python script to automate your daily tasks such as checking the weather reports, opening web applications, or surfing through wikipedia.",url:"https://www.github.com/welvin21/personal_assistant",github:"https://github.com/welvin21/personal_assistant",tags:["python","wikipediaAPI","openweathermapAPI","pyttsx3"]},{pic:W.a,title:"Modular Integrated Greenwall",desc:"Modular greenwall which implements sustainability development practice. Well-equipped with soil moisturizer sensor which supports self-watering functionality.",url:"https://docs.google.com/presentation/d/1JWOyxk2L_tOsoNyJBNX-x5kVGDJEj3iK6HNTSZsYVww/edit?usp=sharing",github:null,tags:["arduino"]}],O=function(){return i.a.createElement("div",{className:"projects-container",id:"projects"},i.a.createElement("h1",{style:{color:"#fff"}},"Past works"),i.a.createElement("div",{className:"projects"},L.map((function(e){return i.a.createElement(I,{key:e.title,project:e})}))))},V=function(){return i.a.createElement("div",{className:"footer"},"\xa9 2019 Welvin Bun. All rights reserved.")},G=(a(162),function(){return i.a.createElement("div",null,i.a.createElement(m,null),i.a.createElement(p,null),i.a.createElement(b,null),i.a.createElement(O,null),i.a.createElement(V,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,t,a){e.exports=a.p+"static/media/mypic.04ce06ac.png"},95:function(e,t,a){e.exports=a.p+"static/media/sls.c1e1fbd5.png"},96:function(e,t,a){e.exports=a.p+"static/media/greenwall.cd71a39a.png"},97:function(e,t,a){e.exports=a.p+"static/media/navis.12ed73ae.png"},98:function(e,t,a){e.exports=a.p+"static/media/digibot.ad2dd561.png"},99:function(e,t,a){e.exports=a.p+"static/media/personal-assistant.9eb0574b.png"}},[[106,1,2]]]);
//# sourceMappingURL=main.a03e460d.chunk.js.map