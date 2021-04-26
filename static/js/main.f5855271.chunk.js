(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var a=i(1),c=i.n(a),n=i(9),s=i.n(n),r=(i(15),i(2)),l=i(3),o=i(5),u=i(4),d=(i(16),i(17),i.p+"static/media/mainportrait.2be15b17.png"),h=(i(18),i.p+"static/media/github.895050b2.svg"),b=i.p+"static/media/linkedin.64c918fa.svg",j=i.p+"static/media/twitter.d73e4478.svg",m=i(0);var p=function(){return Object(m.jsxs)("div",{className:"social-container",children:[Object(m.jsx)("a",{href:"https://github.com/dirklo",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:h,alt:"github link"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/rick-moore-5b587a99/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:b,alt:"linkedin link"})}),Object(m.jsx)("a",{href:"https://twitter.com/rickstachemoore",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:j,alt:"twitter link"})})]})};i(20);var g=function(){return Object(m.jsxs)("div",{className:"intro-container",children:[Object(m.jsx)("p",{id:"top",children:"-Introduction-"}),Object(m.jsxs)("p",{id:"middle",children:["Full-Stack",Object(m.jsx)("br",{}),"Web Developer"]}),Object(m.jsx)("p",{id:"bottom",children:"Creative web product designer, with experience in React/Redux, Ruby on Rails, NodeJS/Express, Python, HTML5, CSS3"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"http://nowhere.com",children:"My Story >"})]})},O=(i(21),function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"nav-bar",children:[Object(m.jsx)("a",{href:"#projects",children:"Projects"}),Object(m.jsx)("a",{href:"#resume",children:"Resume"}),Object(m.jsx)("a",{href:"#contact",children:"Contact"})]})}}]),i}(a.Component)),x=i(10),f=i.n(x);function v(){return Object(a.useEffect)((function(){new f.a(".slow",{speed:-5,center:!1,wrapper:null,round:!0,vertical:!0,horizontal:!1})}),[]),Object(m.jsxs)("div",{className:"title_container slow",children:[Object(m.jsx)("h1",{children:"Rick Moore"}),Object(m.jsx)("img",{src:d,id:"main-portrait",alt:"main portrait"}),Object(m.jsx)("div",{id:"rect1"}),Object(m.jsx)("div",{id:"diamond",className:"slow"}),Object(m.jsx)("div",{id:"diamond2",className:"slower"}),Object(m.jsx)(p,{}),Object(m.jsx)(g,{}),Object(m.jsx)(O,{})]})}i(23),i(24);var y=function(t){return Object(m.jsx)("div",{className:"project-card",children:Object(m.jsxs)("div",{className:"card__content",children:[Object(m.jsxs)("div",{className:"card__front",children:[Object(m.jsx)("div",{className:"bg-img",children:Object(m.jsx)("img",{src:t.bgImg.url,alt:"project"})}),Object(m.jsx)("div",{className:"title",children:Object(m.jsx)("img",{src:t.titleImg.url,alt:t.title,height:t.titleImg.height})}),Object(m.jsx)("div",{className:"techs-list",children:t.techs.map((function(t){return Object(m.jsx)("img",{src:t.img,alt:t.name,height:t.height},t.name)}))})]}),Object(m.jsxs)("div",{className:"card__back",children:[Object(m.jsx)("h2",{children:t.title}),Object(m.jsx)("p",{className:"card__body",children:t.description}),Object(m.jsx)("div",{className:"bullets-list",children:Object(m.jsx)("ul",{children:t.bullets.map((function(t,e){return Object(m.jsx)("li",{children:t},e)}))})}),Object(m.jsx)("div",{className:"links-list",children:t.links.map((function(t){return Object(m.jsx)("a",{href:t.url,rel:"noreferrer",target:"_blank",children:t.type},t.type)}))})]})]})})},k=i.p+"static/media/pantam.8de9c3f7.png",N=i.p+"static/media/pantamBg.ef86f36a.jpg",w=i.p+"static/media/chartsource.437f5ef5.png",S=i.p+"static/media/chartsourceBg.b87b2f32.jpg",C=i.p+"static/media/quizit.389882f4.png",I=i.p+"static/media/quizitBg.d850aa91.jpg",F=i.p+"static/media/javascript.081325c6.svg",A=i.p+"static/media/rails.bec848e2.png",R=i.p+"static/media/ruby.724766cb.svg",_=[{title:"Pantam",titleImg:{url:k,height:"80px"},bgImg:{url:N},techs:[{name:"javascript",img:F,height:"85px"},{name:"rails",img:A,height:"75px"}],links:[{type:"Code",url:"https://github.com/dirklo/hang-pan-frontend"},{type:"Demo",url:"https://youtu.be/36xpt6U-q0g"},{type:"Live App",url:"https://dirklo.github.io/hang-pan-frontend/"}],description:"Virtual Instrument that users can perform in-browser.",bullets:["Built with vanilla JavaScript and Ruby on Rails.","Web Audio API - In-browser audio sampling and effects processing.","Asynchronous JavaScript - Database communication implemented with fetch and headless Rails API."]},{title:"Chart Source",titleImg:{url:w,height:"40px"},bgImg:{url:S},techs:[{name:"ruby",img:R,height:"75px"},{name:"rails",img:A,height:"75px"}],links:[{type:"Code",url:"https://github.com/dirklo/chart-source"},{type:"Demo",url:"https://youtu.be/WjS2R5mJihA"},{type:"Live App",url:"https://chart-source.herokuapp.com/"}],description:"Platform for Band-leaders to upload their PDF chart library, create and share setlists with a team.",bullets:["Built with Ruby on Rails and a PostgreSQL database.","Omniauth - Multi-platform login.","Cocoon - dynamic forms.","SortableJS and Stimulus - drag and drop effects."]},{title:"Quit It",titleImg:{url:C,height:"80px"},bgImg:{url:I},techs:[{name:"ruby",img:R,height:"75px"},{name:"sinatra",img:i.p+"static/media/sinatra.5c61ac4b.png",height:"75px"}],links:[{type:"Code",url:"https://github.com/dirklo/quiz-it"},{type:"Demo",url:"https://youtu.be/_Yxp_dMFs2I"},{type:"Live App",url:"https://quiz-it-three.herokuapp.com/"}],description:"Tool for educators to create their own multiple-choice quizzes and share with their students.",bullets:["Built with Ruby, Sinatra, and vanilla JavaScript.","Bcrypt - Secure user sign-in.","Active-Record - Maintains a PostgreSQL database."]}],B=function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"projects-container",children:_.map((function(t){return Object(m.jsx)(y,{title:t.title,titleImg:t.titleImg,bgImg:t.bgImg,techs:t.techs,links:t.links,description:t.description,bullets:t.bullets},t.title)}))})}}]),i}(a.Component),P=(i(25),i(6)),M=i(8),D=(i(26),function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(){var t;return Object(r.a)(this,i),(t=e.call(this)).handleOnChange=function(e){t.setState(Object(M.a)(Object(M.a)({},t.state),{},Object(P.a)({},e.target.name,e.target.value)))},t.handleOnSubmit=function(e){e.preventDefault(),console.log(t.state)},t.activateField=function(e){t.setState(Object(P.a)({},"".concat(e.target.name,"Active"),!0))},t.disableField=function(e){t.setState(Object(P.a)({},"".concat(e.target.name,"Active"),!1))},t.disableFocus=function(e){""===e.target.value&&t.disableField(e)},t.state={contactName:"",email:"",message:"",contactNameActive:!1,emailActive:!1},t}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"contact-form",onSubmit:this.handleOnSubmit,children:[Object(m.jsxs)("div",{className:"input-div",children:[Object(m.jsx)("label",{className:this.state.contactNameActive?"active":"",htmlFor:"contactName",children:"Name"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",name:"contactName",id:"contactName",onChange:this.handleOnChange,onFocus:this.activateField,onBlur:this.disableFocus,value:this.state.contactName,placeholder:" "})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"input-div",children:[Object(m.jsx)("label",{className:this.state.emailActive?"active":"",htmlFor:"email",children:"Email"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",onChange:this.handleOnChange,onFocus:this.activateField,onBlur:this.disableFocus,value:this.state.email,placeholder:" "})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{htmlFor:"message",children:"Message"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("textarea",{name:"message",id:"message",onChange:this.handleOnChange,value:this.state.message})]})}}]),i}(a.Component));function J(){return Object(m.jsx)("div",{className:"contact-container",children:Object(m.jsx)(D,{})})}var L=function(t){Object(o.a)(i,t);var e=Object(u.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){document.title="Rick Moore Portfolio"}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(v,{}),Object(m.jsx)(B,{}),Object(m.jsx)(J,{})]})}}]),i}(a.Component),z=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,28)).then((function(e){var i=e.getCLS,a=e.getFID,c=e.getFCP,n=e.getLCP,s=e.getTTFB;i(t),a(t),c(t),n(t),s(t)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root")),z()}],[[27,1,2]]]);
//# sourceMappingURL=main.f5855271.chunk.js.map