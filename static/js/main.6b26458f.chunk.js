(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(4),r=n.n(o),i=n(5),s=n(6),d=n(7),b=n(11),l=n(10),u=n(0),j=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h1",{children:t}),n]})},h=n(3),O=n.n(h),v=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("div",{className:O.a.container,children:t.map((function(e){return Object(u.jsx)("button",{type:"button",name:e,className:O.a.button,onClick:n,children:e},e)}))})},p=n(8),f=n.n(p),x=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(u.jsxs)("ul",{className:f.a.container,children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",n]}),Object(u.jsxs)("li",{children:["Bad: ",a]}),Object(u.jsxs)("li",{children:["Total: ",c]}),Object(u.jsxs)("li",{children:["Positive feedback: ",o," %"]})]})},k=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},g=n(9),m=n.n(g),_=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return n?Math.round(t/n*100):0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(u.jsxs)("div",{className:m.a.container,children:[Object(u.jsx)(j,{title:"Please, leave a feedback",children:Object(u.jsx)(v,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),c>0?Object(u.jsx)(j,{title:"Statistics",children:Object(u.jsx)(x,{good:t,neutral:n,bad:a,total:c,positivePercentage:o})}):Object(u.jsx)(k,{message:"No feedback has been given"})]})}}]),n}(a.Component);n(17);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={container:"FeedbackOptions_container__1OCeq",button:"FeedbackOptions_button__Q7iOw"}},8:function(e,t,n){e.exports={container:"Statistics_container__3ypCP"}},9:function(e,t,n){e.exports={container:"App_container__2k9Zp"}}},[[18,1,2]]]);
//# sourceMappingURL=main.6b26458f.chunk.js.map