(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var a=i(1),c=i.n(a),n=i(9),s=i.n(n),r=(i(14),i(15),i(16),i.p+"static/media/mainportrait.2be15b17.png"),l=(i(17),i.p+"static/media/github.895050b2.svg"),o=i.p+"static/media/linkedin.64c918fa.svg",d=i.p+"static/media/twitter.d73e4478.svg",h=i(0);var u=function(){return Object(h.jsxs)("div",{className:"social-container",children:[Object(h.jsx)("a",{href:"https://github.com/dirklo",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:l,alt:"github link"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/rick-moore-5b587a99/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:o,alt:"linkedin link"})}),Object(h.jsx)("a",{href:"https://twitter.com/rickstachemoore",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:d,alt:"twitter link"})})]})},j=i(2),b=i(3),m=i(5),p=i(4),g=(i(19),function(t){Object(m.a)(i,t);var e=Object(p.a)(i);function i(){return Object(j.a)(this,i),e.apply(this,arguments)}return Object(b.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"intro-container",children:[Object(h.jsx)("p",{id:"top",children:"-Introduction-"}),Object(h.jsxs)("p",{id:"middle",children:["Full-Stack",Object(h.jsx)("br",{}),"Web Developer"]}),Object(h.jsx)("p",{id:"bottom",children:"Creative web product designer, with experience in React/Redux, Ruby on Rails, NodeJS/Express, Python, HTML5, CSS3"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"http://nowhere.com",children:"My Story >"})]})}}]),i}(a.Component)),O=(i(20),function(t){Object(m.a)(i,t);var e=Object(p.a)(i);function i(){return Object(j.a)(this,i),e.apply(this,arguments)}return Object(b.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"nav-bar",children:[Object(h.jsx)("a",{href:"#projects",children:"Projects"}),Object(h.jsx)("a",{href:"#resume",children:"Resume"}),Object(h.jsx)("a",{href:"#contact",children:"Contact"})]})}}]),i}(a.Component));function x(){return Object(h.jsxs)("div",{className:"title_container",children:[Object(h.jsx)("h1",{children:"Rick Moore"}),Object(h.jsx)("img",{src:r,id:"main-portrait",alt:"main portrait"}),Object(h.jsx)("div",{id:"rect1"}),Object(h.jsx)("div",{id:"diamond",className:"slow"}),Object(h.jsx)("div",{id:"diamond2",className:"slower"}),Object(h.jsx)(u,{}),Object(h.jsx)(g,{}),Object(h.jsx)(O,{})]})}i(21),i(22);var v=function(t){return Object(h.jsx)("div",{className:"project-card",children:Object(h.jsxs)("div",{className:"card__content",children:[Object(h.jsxs)("div",{className:"card__front",children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("img",{src:t.titleImg.url,alt:t.title,height:t.titleImg.height})}),Object(h.jsx)("div",{className:"techs-list",children:t.techs.map((function(t){return Object(h.jsx)("img",{src:t.img,alt:t.name,height:t.height},t.name)}))})]}),Object(h.jsxs)("div",{className:"card__back",children:[Object(h.jsx)("p",{className:"card__body",children:t.description}),Object(h.jsx)("div",{className:"links-list",children:t.links.map((function(t){return Object(h.jsx)("a",{href:t.url,rel:"noreferrer",target:"_blank",children:t.type},t.type)}))})]})]})})},f=i.p+"static/media/pantam.8de9c3f7.png",y=i.p+"static/media/chartsource.437f5ef5.png",k=i.p+"static/media/quizit.389882f4.png",N=i.p+"static/media/javascript.081325c6.svg",S=i.p+"static/media/rails.bec848e2.png",w=i.p+"static/media/ruby.724766cb.svg",C=[{title:"Pantam",titleImg:{url:f,height:"80px"},techs:[{name:"javascript",img:N,height:"85px"},{name:"rails",img:S,height:"75px"}],links:[{type:"Code",url:"https://github.com/dirklo/hang-pan-frontend"},{type:"Demo",url:"https://youtu.be/36xpt6U-q0g"},{type:"Live App",url:"https://dirklo.github.io/hang-pan-frontend/"}],description:"Virtual Instrument that users can perform in-browser. Utilized JavaScript and the Web Audio API to create a playable instrument. Created database logic with Ruby on Rails as an API, allowing users to save their settings."},{title:"Chart Source",titleImg:{url:y,height:"40px"},techs:[{name:"ruby",img:w,height:"75px"},{name:"rails",img:S,height:"75px"}],links:[{type:"Code",url:"https://github.com/dirklo/chart-source"},{type:"Demo",url:"https://youtu.be/WjS2R5mJihA"},{type:"Live App",url:"https://chart-source.herokuapp.com/"}],description:"Allows band-leaders to upload their PDF chart library, create setlists and share those with a team. Utilized Ruby on Rails, Active-record and Active-Storage to maintain a PostgreSQL database. Leveraged Omniauth to allow users to sign in using Facebook or Github. Used Cocoon gem for dynamic forms to allow scalable uploads. Utilized SortableJS and Stimulus to allow for drag and drop functionality that persists to the database."},{title:"Quit It",titleImg:{url:k,height:"80px"},techs:[{name:"ruby",img:w,height:"75px"},{name:"sinatra",img:i.p+"static/media/sinatra.5c61ac4b.png",height:"75px"}],links:[{type:"Code",url:"https://github.com/dirklo/quiz-it"},{type:"Demo",url:"https://youtu.be/_Yxp_dMFs2I"},{type:"Live App",url:"https://quiz-it-three.herokuapp.com/"}],description:"Users can create their own multiple-choice quizzes and share them with their students or friends. Built using Ruby, Sinatra, and JavaScript. Utilized Bcrypt for users to sign in securely. Fully utilized Active-record to maintain a PostgreSQL database."}],F=function(t){Object(m.a)(i,t);var e=Object(p.a)(i);function i(){return Object(j.a)(this,i),e.apply(this,arguments)}return Object(b.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"projects-container",children:C.map((function(t){return Object(h.jsx)(v,{title:t.title,titleImg:t.titleImg,techs:t.techs,links:t.links,description:t.description},t.title)}))})}}]),i}(a.Component),A=(i(23),i(6)),I=i(8),_=(i(24),function(t){Object(m.a)(i,t);var e=Object(p.a)(i);function i(){var t;return Object(j.a)(this,i),(t=e.call(this)).handleOnChange=function(e){t.setState(Object(I.a)(Object(I.a)({},t.state),{},Object(A.a)({},e.target.name,e.target.value)))},t.handleOnSubmit=function(e){e.preventDefault(),console.log(t.state)},t.activateField=function(e){t.setState(Object(A.a)({},"".concat(e.target.name,"Active"),!0))},t.disableField=function(e){t.setState(Object(A.a)({},"".concat(e.target.name,"Active"),!1))},t.disableFocus=function(e){""===e.target.value&&t.disableField(e)},t.state={contactName:"",email:"",message:"",contactNameActive:!1,emailActive:!1},t}return Object(b.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"contact-form",onSubmit:this.handleOnSubmit,children:[Object(h.jsxs)("div",{className:"input-div",children:[Object(h.jsx)("label",{className:this.state.contactNameActive?"active":"",htmlFor:"contactName",children:"Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"contactName",id:"contactName",onChange:this.handleOnChange,onFocus:this.activateField,onBlur:this.disableFocus,value:this.state.contactName,placeholder:" "})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"input-div",children:[Object(h.jsx)("label",{className:this.state.emailActive?"active":"",htmlFor:"email",children:"Email"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"email",name:"email",id:"email",onChange:this.handleOnChange,onFocus:this.activateField,onBlur:this.disableFocus,value:this.state.email,placeholder:" "})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"message",children:"Message"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{name:"message",id:"message",onChange:this.handleOnChange,value:this.state.message})]})}}]),i}(a.Component));function R(){return Object(h.jsx)("div",{className:"contact-container",children:Object(h.jsx)(_,{})})}var z=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{}),Object(h.jsx)(F,{}),Object(h.jsx)(R,{})]})},P=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,26)).then((function(e){var i=e.getCLS,a=e.getFID,c=e.getFCP,n=e.getLCP,s=e.getTTFB;i(t),a(t),c(t),n(t),s(t)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root")),P()}],[[25,1,2]]]);
//# sourceMappingURL=main.0fe1fe06.chunk.js.map