(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4130a073"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"b580bc4e"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/todo-vuex/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={name:"App"},c=i,s=(n("5c0b"),n("2877")),u=Object(s["a"])(c,r,o,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home"},[n("h1",{staticClass:"home-heading"},[e._v("My assignments")]),n("button",{staticClass:"home-button",on:{click:e.chengeAddForm}},[e._v("add note")]),n("todo-data",{directives:[{name:"show",rawName:"v-show",value:e.changeActive,expression:"changeActive"}]}),n("ul",{staticClass:"home-list"},e._l(e.allTasks,(function(t,a){return n("home-item",{key:t.id,attrs:{idx:a,id:t.id,title:t.title,todoArr:t.todoArr,mainArr:e.allTasks,confirm:t.confirm}})})),1)],1)},f=[],h=n("5530"),v=(n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"home-list__item item"},[n("h3",{staticClass:"item__heading"},[e._v(e._s(e.title))]),n("ul",{staticClass:"item__list"},e._l(e.showArr,(function(e){return n("home-todo",{key:e.name,attrs:{todo:e.name,active:e.active}})})),1),n("p",[e._v("...")]),n("button",{staticClass:"item__btn-edit item__btn",on:{click:function(t){return e.editTask(e.id)}}},[e._v(" Edit ")]),n("button",{staticClass:"item__btn-delete item__btn",on:{click:function(t){return e.confirmDelete(e.id)}}},[e._v(" Delete ")]),e.confirm?n("the-confirmation",[n("p",[e._v("Are you sure you want to delete the task?")]),n("button",{on:{click:function(t){return e.deleteTask(e.id)}}},[e._v("Yes")]),n("button",{on:{click:function(t){return e.confirmDelete(e.id)}}},[e._v("Cancel")])]):e._e()],1)}),p=[],g=(n("a9e3"),n("fb6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("input",{attrs:{type:"checkbox",name:"interest",value:"coding",disabled:""},domProps:{checked:!0===e.active}}),n("label",{attrs:{for:"coding"}},[e._v(e._s(e.todo))])])}),b=[],k={props:["todo","active"]},A=k,T=Object(s["a"])(A,g,b,!1,null,"e77dcaf6",null),O=T.exports,j=n("a3ac"),_=n("2f62"),w={data:function(){return{showArr:[]}},components:{HomeTodo:O,TheConfirmation:j["a"]},props:{mainArr:Array,todoArr:Array,id:String,title:String,confirm:Boolean,idx:Number},mounted:function(){this.showArr=this.todoArr.slice(0,2)},methods:Object(h["a"])(Object(h["a"])({},Object(_["b"])(["delTask","confirmDelTask","showTodoFirst","saveTask","taskEdit"])),{},{deleteTask:function(e){this.delTask(e),this.saveTask()},confirmDelete:function(e){this.confirmDelTask(e)},editTask:function(e){this.$router.push({name:"TheEdit",params:{id:e}}),this.taskEdit(e)}})},y=w,S=(n("cc89"),Object(s["a"])(y,v,p,!1,null,null,null)),E=S.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.submitData.apply(null,arguments)}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredTitle,expression:"enteredTitle"}],attrs:{type:"text",placeholder:"enter a title for the note"},domProps:{value:e.enteredTitle},on:{input:function(t){t.target.composing||(e.enteredTitle=t.target.value)}}})]),n("form",{on:{submit:function(t){return t.preventDefault(),e.addTasks.apply(null,arguments)}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.enteredTask.name,expression:"enteredTask.name"}],attrs:{type:"text",placeholder:"enter tasks"},domProps:{value:e.enteredTask.name},on:{input:function(t){t.target.composing||e.$set(e.enteredTask,"name",t.target.value)}}}),n("button",[e._v("Add task")])])]),e._m(0)])},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",[e._v("Save")])])}],C={data:function(){return{enteredTitle:"",enteredTask:{name:"",active:!1}}},computed:Object(_["c"])(["tasksArr"]),methods:Object(h["a"])(Object(h["a"])({},Object(_["b"])(["createNewTask","changeAddTask","saveTask"])),{},{submitData:function(){this.createNewTask({id:(new Date).toISOString(),title:this.enteredTitle,todoArr:this.tasksArr,confirm:!1}),this.changeAddTask(),this.saveTask(),this.enteredTitle=""},addTasks:function(){this.tasksArr.push(this.enteredTask),this.enteredTask={name:"",active:!1}}})},N=C,P=Object(s["a"])(N,D,x,!1,null,null,null),I=P.exports,$={components:{HomeItem:E,TodoData:I},computed:Object(_["c"])(["allTasks","changeActive","tasksArr"]),mounted:function(){this.showTask(),this.saveTask()},methods:Object(h["a"])(Object(h["a"])({},Object(_["b"])(["showTask","changeAddTask","saveTask"])),{},{chengeAddForm:function(){this.changeAddTask(),this.tasksArr.splice(0,this.tasksArr.length)}})},F=$,J=(n("94f3"),Object(s["a"])(F,m,f,!1,null,"3312c6ed",null)),M=J.exports;a["a"].use(d["a"]);var L=[{path:"/",name:"TheHome",component:M},{path:"/edit/:id",name:"TheEdit",component:function(){return n.e("about").then(n.bind(null,"e6b4"))}}],B=new d["a"]({routes:L}),H=B;n("4de4"),n("7db0"),n("e9c4"),n("c740");a["a"].use(_["a"]);var U=new _["a"].Store({state:{mainArr:[{id:"shop",title:"shop",todoArr:[{name:"milk",active:!1},{name:"eggs",active:!1},{name:"pepsi",active:!1},{name:"apple",active:!1}],confirm:!1},{id:"to do list",title:"to do list",todoArr:[{name:"breakfast",active:!1},{name:"wash the car",active:!1},{name:"go to work",active:!1},{name:"buy product",active:!1}],confirm:!1}],isActive:!1,obj:{},showArr:[],changeObj:{},active:!1,tasksArr:[]},mutations:{createNewTask:function(e,t){e.mainArr.push(t)},changeAddTask:function(e){e.isActive=!e.isActive},delTask:function(e,t){e.mainArr=e.mainArr.filter((function(e){return e.id!==t}))},confirmDelTask:function(e,t){e.obj=e.mainArr.find((function(e){return e.id===t})),e.obj.confirm=!e.obj.confirm},showTodoFirst:function(e,t){e.showArr=e.mainArr[t].todoArr.slice(0,2)},saveTask:function(e){var t=JSON.stringify(e.mainArr);localStorage.setItem("mainArr",t)},parseMainArr:function(e){if(localStorage.getItem("mainArr"))try{e.mainArr=JSON.parse(localStorage.getItem("mainArr"))}catch(t){localStorage.removeItem("mainArr")}},taskEdit:function(e,t){e.changeObj=e.mainArr.find((function(e){return e.id===t}))},chengeActiveChecked:function(e,t){e.changeObj.todoArr[t].active=!e.changeObj.todoArr[t].active},changeTask:function(e,t){var n=t.id,a=t.item;e.changeObj.todoArr.splice(n,1,a)},todoDel:function(e,t){e.changeObj.todoArr.splice(t,1)},todoAdd:function(e,t){e.changeObj.todoArr.push(t)},changeActiveAdd:function(e){e.active=!e.active},confirmDel:function(e){e.changeObj.confirm=!e.changeObj.confirm},saveObj:function(e){var t=e.mainArr.findIndex((function(t){return t.id===e.changeObj.id}));e.mainArr.splice(t,1,e.changeObj)},todoDeleteEdit:function(e){var t=e.mainArr.findIndex((function(t){return t.id===e.changeObj.id}));e.mainArr.splice(t,1)},changeUndo:function(e){var t=JSON.parse(localStorage.getItem("mainArr"));console.log(t),e.changeObj=t.find((function(t){return t.id===e.changeObj.id})),console.log(e.changeObj)},localStSave:function(e){var t=JSON.stringify(e.changeObj);localStorage.setItem("changeObj",t)},localStParse:function(e){if(localStorage.getItem("changeObj"))try{e.changeObj=JSON.parse(localStorage.getItem("changeObj"))}catch(t){localStorage.removeItem("changeObj")}}},actions:{createNewTask:function(e,t){e.commit("createNewTask",t)},changeAddTask:function(e){e.commit("changeAddTask")},delTask:function(e,t){e.commit("delTask",t)},confirmDelTask:function(e,t){e.commit("confirmDelTask",t)},showTodoFirst:function(e,t){e.commit("showTodoFirst",t)},saveTask:function(e){e.commit("saveTask")},taskEdit:function(e,t){e.commit("taskEdit",t)},chengeActiveChecked:function(e,t){e.commit("chengeActiveChecked",t)},changeTask:function(e,t){var n=t.id,a=t.item;e.commit("changeTask",{id:n,item:a})},todoDel:function(e,t){e.commit("todoDel",t)},todoAdd:function(e,t){e.commit("todoAdd",t)},changeActiveAdd:function(e){e.commit("changeActiveAdd")},confirmDel:function(e){e.commit("confirmDel")},saveObj:function(e){e.commit("saveObj")},todoDeleteEdit:function(e){e.commit("todoDeleteEdit")},localStSave:function(e){e.commit("localStSave")},localStParse:function(e){e.commit("localStParse")},showTask:function(e){e.commit("parseMainArr")},changeUndo:function(e){e.commit("changeUndo")}},getters:{allTasks:function(e){return e.mainArr},changeActive:function(e){return e.isActive},showArrTodo:function(e){return e.showArr},editTask:function(e){return e.changeObj},activeAdd:function(e){return e.active},tasksArr:function(e){return e.tasksArr}}});a["a"].config.productionTip=!1,new a["a"]({router:H,store:U,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},9446:function(e,t,n){},"94f3":function(e,t,n){"use strict";n("e690")},"9c0c":function(e,t,n){},a3ac:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dialog",{attrs:{open:""}},[e._t("default")],2)},r=[],o=(n("cdd4"),n("2877")),i={},c=Object(o["a"])(i,a,r,!1,null,"308aa19a",null);t["a"]=c.exports},cc89:function(e,t,n){"use strict";n("9446")},cdd4:function(e,t,n){"use strict";n("faf3")},e690:function(e,t,n){},faf3:function(e,t,n){}});
//# sourceMappingURL=app.d121db3e.js.map