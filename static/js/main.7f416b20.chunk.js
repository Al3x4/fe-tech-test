(this["webpackJsonpfe-tech-test"]=this["webpackJsonpfe-tech-test"]||[]).push([[0],{198:function(e,t,l){},200:function(e,t,l){"use strict";l.r(t);var s=l(1),a=l.n(s),n=l(80),c=l.n(n),r=l(56),i=(l(198),l(199),function(e){e&&e instanceof Function&&l.e(5).then(l.bind(null,204)).then((function(t){var l=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;l(e),s(e),a(e),n(e),c(e)}))}),o=l(0),d=Object(s.lazy)((function(){return Promise.all([l.e(3),l.e(4)]).then(l.bind(null,205))}));c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(s.Suspense,{fallback:r.b,children:Object(o.jsx)(d,{})})}),document.getElementById("root")),i()},35:function(e,t,l){"use strict";var s=l(58),a=l(57),n=l.n(a),c=l(0),r={animation:!1,plugins:{legend:{position:"right",align:"center",labels:{boxWidth:7,usePointStyle:!0,pointStyle:"circle"}}}};t.a=function(e){var t=e.data,l=e.options;return Object(c.jsx)(s.b,{type:"doughnut",data:t,options:n()(r,l)})}},54:function(e,t,l){"use strict";var s=l(0);t.a=function(e){var t=e.data,l=e.handleClick,a=t.description,n=t.name,c=t.prevTotalViews,r=t.totalViews,i=t.videoImage,o=a.match(/\(([^)]+)\)/g),d=[];o&&(d.push(o[0].slice(1,o[0].length-1)),d.push(o[1].slice(1,o[1].length-6)));var x=c.total-r.total;return Object(s.jsx)("div",{className:"w-full md:w-6/12 lg:w-4/12 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1",role:"button",onClick:function(){return l({visible:!0,data:t})},children:Object(s.jsxs)("div",{className:"w-full rounded flex flex-col lg:flex-row bg-white shadow-md my-14 ",children:[Object(s.jsx)("div",{className:"w-6/12 h-56 lg:h-64 mx-auto lg:w-3/5 -mt-14 lg:ml-6 mb-6 rounded-md overflow-hidden shadow-md",children:Object(s.jsx)("img",{className:"object-cover h-full w-full",src:i,alt:n})}),Object(s.jsxs)("div",{className:"w-10/12 lg:w-2/3 mx-auto mb-4 lg:m-4 lg:mb-6 text-center md:text-left flex flex-col justify-between",children:[Object(s.jsx)("h5",{className:"text-blueGray-400 uppercase font-bold text-md",children:n}),Object(s.jsxs)("div",{className:"text-blue-500 uppercase font-light text-4xl mt-4",children:[Object(s.jsx)("span",{className:"block text-xs text-blueGray-400 font-bold",children:"Total views"}),r.total]}),Object(s.jsxs)("div",{className:"text-sm text-white mt-4",children:[Object(s.jsxs)("span",{className:"".concat(x>0?"bg-emerald-400":"bg-pink-500"," mr-2 px-2 py-1 rounded-full whitespace-nowrap"),children:[Object(s.jsx)("i",{className:"fas ".concat(x>0?"fa-arrow-up":"fa-arrow-down")})," ",x]}),Object(s.jsx)("span",{className:"whitespace-nowrap text-blueGray-400",children:"Since last month"})]})]})]})})}},55:function(e,t,l){"use strict";var s=l(35),a=l(19),n=l(0);t.a=function(e){var t=e.data,l=e.setModal,c=t.description,r=t.genre,i=t.name,o=t.prevTotalViews,d=t.provider,x=t.totalViews,m=t.videoImage,b=c.match(/\(([^)]+)\)/g),u=[];b&&(u.push(b[0].slice(1,b[0].length-1)),u.push(b[1].slice(1,b[1].length-6)));var j=o.total-x.total,f=function(e,t){var l={datasets:[{data:[],backgroundColor:["#2563EB","#DB2777","#8B5CF6"],borderWidth:5,borderColor:"transparent"}],labels:Object.keys(e[t]).filter((function(e){return"total"!==e}))};return l.datasets[0].data=Object.keys(o).filter((function(e){return"total"!==e})).map((function(l){return e[t][l]})),l};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{id:"modal-parent",className:"justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none",onClick:function(e){if("modal-parent"===e.target.id)return l({data:t,visible:!1})},children:Object(n.jsx)("div",{className:"relative my-6 mx-4 md:mx-auto max-w-3xl px-2",children:Object(n.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-full mx-auto bg-white outline-none focus:outline-none mt-48 md:mt-24",children:[Object(n.jsxs)("div",{className:"w-full h-10 flex items-center justify-end p-1",children:[Object(n.jsx)(a.b,{to:{pathname:"/content/".concat(t.name.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")),state:t},className:"w-8 h-8 rounded text-2xl  flex items-center justify-around  text-blueGray-400 hover:text-blueGray-800",children:Object(n.jsx)("span",{children:Object(n.jsx)("i",{className:"fas fa-plus-circle"})})}),Object(n.jsx)("div",{role:"button",onClick:function(){return l({data:t,visible:!1})},className:"w-8 h-8 rounded text-2xl  flex items-center justify-around  text-blueGray-400 hover:text-blueGray-800",children:Object(n.jsx)("span",{children:Object(n.jsx)("i",{className:"fas fa-times-circle"})})})]}),Object(n.jsxs)("div",{className:"relative p-6 flex flex-col md:flex-row",children:[Object(n.jsx)("div",{className:"w-6/12 md:w-1/3 rounded-md overflow-hidden -mt-24 shadow",children:Object(n.jsx)(a.b,{to:{pathname:"/content/".concat(t.name.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")),state:t},children:Object(n.jsx)("img",{src:m,alt:i})})}),Object(n.jsxs)("div",{className:"mt-4 mx-4 w-11/12 md:w-2/3 flex flex-col justify-between  flex-grow ",children:[Object(n.jsxs)("div",{className:"w-full flex items-top justify-between flex-grow",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h5",{className:"text-blueGray-800 uppercase font-bold text-4xl",children:i}),Object(n.jsxs)("div",{className:"text-sm text-blueGray-400 font-bold",children:[u[0]," "]}),Object(n.jsxs)("div",{className:"text-sm text-blueGray-400 font-bold",children:[u[1]," minutes"]})]}),Object(n.jsxs)("div",{className:"text-blue-500 uppercase font-light text-3xl md:text-5xl text-right ",children:[Object(n.jsx)("span",{className:"block text-sm text-blueGray-400 font-bold px-1",children:"Total views"}),x.total,Object(n.jsxs)("div",{className:"text-sm text-white mt-4",children:[Object(n.jsxs)("span",{className:"".concat(j>0?"bg-emerald-400":"bg-pink-500"," px-2 py-1 rounded-full whitespace-nowrap"),children:[Object(n.jsx)("i",{className:"fas ".concat(j>0?"fa-arrow-up":"fa-arrow-down")})," ",j]}),Object(n.jsx)("span",{className:"block whitespace-nowrap text-blueGray-400 text-xs lowercase mt-2",children:"from last month"})]})]})]}),Object(n.jsxs)("div",{className:"w-full flex flex-col items-start justify-between",children:[Object(n.jsx)("div",{className:"text-sm text-blueGray-400 font-bold",children:d}),Object(n.jsx)("div",{className:"text-sm text-blueGray-100 flex flex-wrap",children:r.map((function(e){return Object(n.jsx)("span",{className:"text-xs leading-5 font-semibold mr-1 mt-2 rounded-full bg-blueGray-400 px-2 ",children:e})}))})]})]})]}),Object(n.jsx)("p",{className:"mb-6 mx-6 px-2 text-blueGray-500 text-xs md:text-base leading-relaxed border-l-8 border-blueGray-200",children:c}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"flex flex-col md:flex-row w-full items-center justify-around",children:[Object(n.jsxs)("div",{className:"w-full md:w-1/3 px-6 py-6 text-blue-500 text-bold text-lg",children:["Total views ",x.total,Object(n.jsx)("div",{className:"w-36 h-20 md:w-40 overflow-hidden flex items-center justify-around mt-2",children:Object(n.jsx)(s.a,{data:f(t,"totalViews"),options:{plugins:{legend:{position:"right",align:"center"}}}})})]}),Object(n.jsxs)("div",{className:"w-full md:w-1/3 px-6 py-6 text-blue-500 text-bold text-lg",children:["Prev total ",o.total,Object(n.jsx)("div",{className:"w-36 h-20 md:w-40 overflow-hidden flex items-center justify-around mt-2",children:Object(n.jsx)(s.a,{data:f(t,"prevTotalViews"),options:{plugins:{legend:{position:"right",align:"center"}}}})})]})]})]})})}),Object(n.jsx)("div",{className:"opacity-50 fixed inset-0 z-40 bg-black"})]})}},56:function(e,t,l){"use strict";l.d(t,"b",(function(){return a})),l.d(t,"a",(function(){return o}));var s=l(0),a=function(){return Object(s.jsxs)("div",{className:"bg-gray-100 w-full h-screen p-8 flex flex-wrap",children:[Object(s.jsx)("div",{className:"w-full h-56 animate-pulse mb-4 bg-blueGray-300"}),Object(s.jsx)("div",{className:"w-full h-56 animate-pulse mb-4 bg-blueGray-300"}),Object(s.jsx)("div",{className:"w-full h-56 animate-pulse mb-4 bg-blueGray-300"}),Object(s.jsx)("div",{className:"w-full h-56 animate-pulse mb-4 bg-blueGray-300"})]})},n=(l(54),l(21)),c=l(1),r=l(19),i=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),l=t[0],a=t[1],i=Object(c.useState)([{path:"/",component:"Overview",icon:"fa-tv"},{path:"/content",component:"Content",icon:"fa-video"}]),o=Object(n.a)(i,1)[0];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 md:px-0 ",children:Object(s.jsxs)("div",{className:"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto",children:[Object(s.jsx)("button",{className:"w-12 h-12 cursor-pointer  text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",type:"button",onClick:function(){return a(!l)},children:l?Object(s.jsx)("i",{className:"fas fa-times"}):Object(s.jsx)("i",{className:"fas fa-hamburger"})}),Object(s.jsx)(r.b,{className:"md:block text-left md:py-3 md:px-6  text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",to:"/",children:"FE Tech Test"}),Object(s.jsx)("div",{className:"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow-sm absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded \n              ".concat(l?"bg-white mt-16 mx-3 py-3 px-7":"hidden"),children:Object(s.jsx)("ul",{className:"md:flex-col md:min-w-full flex flex-col list-none",children:o.map((function(e){return Object(s.jsx)("li",{className:"items-center",children:Object(s.jsxs)(r.b,{className:"text-xs uppercase py-3 px-6 font-bold block text-blueGray-600 transition duration-200 ease-in-out transform  hover:text-blueGray-900 hover:bg-indigo-100",activeClassName:"bg-indigo-100",exact:!0,to:e.path,children:[Object(s.jsx)("i",{className:"fas ".concat(e.icon," opacity-75 mr-2 text-sm")})," ",e.component]})})}))})})]})})})},o=function(e){var t=e.children;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{}),Object(s.jsx)("div",{className:"relative md:ml-64",children:Object(s.jsx)("div",{className:"w-full",children:t})})]})};l(55)}},[[200,1,2]]]);
//# sourceMappingURL=main.7f416b20.chunk.js.map