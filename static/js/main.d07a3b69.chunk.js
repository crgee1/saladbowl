(this.webpackJsonpsaladbowl=this.webpackJsonpsaladbowl||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/saladbowl.2306fee0.png"},26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),i=a.n(r);a(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(10),o=a(11),c=(a(32),a(13)),m=a(22),u=a(2),d=a(3),p=a(5),h=a(4),v=a(15),b=a(6),f=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"displayName",value:function(e){return"s"===e[e.length-1]?s.a.createElement("div",null,"It is ",e,"' Turn"):s.a.createElement("div",null,"It is ",e,"'s Turn")}},{key:"render",value:function(){var e=this.props,t=e.teamA,a=e.teamB,n=e.startRound,r=e.playingTeam?t.name:a.name;return s.a.createElement("div",{className:"round-screen-container"},s.a.createElement("div",{className:"round-screen"},this.displayName(r),s.a.createElement("div",{className:"round-screen-scores"},s.a.createElement("div",null,s.a.createElement("div",null,"Team: ",t.name),s.a.createElement("div",null,"Points: ",t.points)),s.a.createElement("div",null,s.a.createElement("div",null,"Team: ",a.name),s.a.createElement("div",null,"Points: ",a.points)))),s.a.createElement("div",{className:"btn round-screen-btn",onClick:n},"Start Your Turn"))}}]),t}(s.a.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"winner",value:function(){var e=this.props,t=e.teamA,a=e.teamB;return t.points===a.points?"It is a Draw!":t.points>a.points?"".concat(t.name," Wins!"):"".concat(a.name," Wins!")}},{key:"render",value:function(){return s.a.createElement("div",{className:"end-screen-container"},s.a.createElement("div",{className:"round-screen"},s.a.createElement("h3",null,this.winner())),s.a.createElement("div",{className:"end-screen-btn-container"},s.a.createElement("div",{className:"btn round-screen-btn"},s.a.createElement(l.b,{to:"/"},"Back to Menu"))))}}]),t}(s.a.Component),E=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.modal,a=e.teamA,n=e.teamB,r=e.startRound,i=e.playingTeam;if(!t)return null;switch(t){case"roundScreen":this.component=s.a.createElement(f,{teamA:a,teamB:n,startRound:r,playingTeam:i});break;case"endScreen":this.component=s.a.createElement(y,{teamA:a,teamB:n,startRound:r,playingTeam:i});break;default:return null}return s.a.createElement("div",{className:"modal-background"},s.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},this.component))}}]),t}(s.a.Component),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={teamAPoints:0,teamBPoints:0,word:"",modal:"roundScreen",words:a.props.words,time:a.props.time,playingTeam:a.props.first,round:1},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"startTimer",value:function(){var e=this;this.timer=setInterval((function(){e.state.time>1?e.setState((function(e){return{time:e.time-1}})):(e.setState({modal:"roundScreen",time:e.props.time,playingTeam:!e.state.playingTeam}),clearInterval(e.timer))}),1e3)}},{key:"closeModal",value:function(){this.setState({modal:null})}},{key:"shuffleWords",value:function(){for(var e=Object(c.a)(this.props.words),t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}var s=e.pop();this.setState({word:s,words:e})}},{key:"correctWord",value:function(){var e=this.state,t=e.words,a=e.playingTeam,n=e.teamAPoints,s=e.teamBPoints,r=Object(c.a)(t);if(0===r.length)this.endRound();else{var i=r.pop();a?this.setState({word:i,words:r,teamAPoints:n+1}):this.setState({word:i,words:r,teamBPoints:s+1})}}},{key:"endRound",value:function(){var e=this.state,t=e.playingTeam,a=e.teamAPoints,n=e.teamBPoints,s=e.round;t?this.setState({teamAPoints:a+1,time:0}):this.setState({teamBPoints:n+1,time:0}),3===s?(this.setState({modal:"endScreen",time:this.props.time,playingTeam:!t}),clearInterval(this.timer)):(this.setState({modal:"roundScreen",time:this.props.time,playingTeam:!t,round:s+1}),clearInterval(this.timer),this.shuffleWords())}},{key:"passWord",value:function(){var e=Object(c.a)(this.state.words);e.unshift(this.state.word);var t=e.pop();this.setState({word:t,words:e})}},{key:"reset",value:function(){var e=this;return function(){e.setState({words:e.props.words})}}},{key:"startRound",value:function(){this.startTimer(),this.closeModal(),this.shuffleWords()}},{key:"render",value:function(){var e=this.props,t=e.teamAName,a=e.teamBName,n=this.state,r=n.teamAPoints,i=n.teamBPoints,l=n.modal,o=n.playingTeam,c={name:t,points:r},m={name:a,points:i};return s.a.createElement("div",{className:"play-main"},s.a.createElement(E,{modal:l,startRound:this.startRound.bind(this),teamA:c,teamB:m,playingTeam:o}),s.a.createElement("div",{className:"play-container"},s.a.createElement("h1",{className:"play-timer"},this.state.time),s.a.createElement("h2",{className:"play-display-word"},this.state.word),s.a.createElement("div",{className:"play-btn-container"},s.a.createElement("button",{className:"btn play-btns",onClick:this.correctWord.bind(this)},"Correct"),s.a.createElement("button",{className:"btn play-btns",onClick:this.passWord.bind(this)},"Pass"))))}}]),t}(s.a.Component),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={display:!0,teamAName:"Red Team",teamBName:"Blue Team",words:[],showAnswers:!1,first:"random",time:60},a.index=0,a.updateFirst=a.updateFirst.bind(Object(v.a)(a)),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"handleInput",value:function(e){var t=this;return function(a){a.preventDefault(),t.setState(Object(m.a)({},e,a.target.value))}}},{key:"handleSubmitPlay",value:function(){this.setState({display:!1})}},{key:"addWord",value:function(e){var t=this;e.preventDefault(),this.setState({words:[].concat(Object(c.a)(this.state.words),[e.currentTarget[0].value])},(function(){return t.index++})),e.currentTarget[0].value=""}},{key:"removeWord",value:function(e){var t=this;return function(){var a=t.state.words;a.splice(e,1),t.setState({words:a})}}},{key:"displayAnswers",value:function(){var e=this,t=this.state,a=t.words;return t.showAnswers?s.a.createElement("div",null,s.a.createElement("div",{className:"answers-bank",onClick:this.updateAnswers.bind(this)},"Hide Answer Bank"),"Answers: ",a.length,a.map((function(t,a){return s.a.createElement("div",{className:"answers-bank-word",key:a,onClick:e.removeWord(a).bind(e)},t)})).reverse()):s.a.createElement("div",{className:"answers-bank",onClick:this.updateAnswers.bind(this)},"Show Answer Bank")}},{key:"updateFirst",value:function(e){var t;"true"===e.target.value&&(t=!0),"false"===e.target.value&&(t=!1),"random"===e.target.value&&(t="random"),this.setState({first:t})}},{key:"updateAnswers",value:function(){this.setState({showAnswers:!this.state.showAnswers})}},{key:"updateTimer",value:function(e){this.setState({time:e.currentTarget.value})}},{key:"displayOptions",value:function(){return this.state.display?s.a.createElement("div",{className:"options-display"},s.a.createElement("div",{className:"options-display-left"},s.a.createElement("form",{className:"options-form team-names",onSubmit:this.handleSubmitPlay.bind(this)},s.a.createElement("label",{className:"btn_label"},"Team 1's Name: "),s.a.createElement("input",{type:"text",className:"options-input",placeholder:"Red Team",onChange:this.handleInput("teamAName").bind(this)}),s.a.createElement("label",{className:"btn_label"},"Team 2's Name: "),s.a.createElement("input",{type:"text",className:"options-input",placeholder:"Blue Team",onChange:this.handleInput("teamBName").bind(this)}),s.a.createElement("div",{className:"first-team",onChange:this.updateFirst},s.a.createElement("h4",null,"Who goes's first?"),s.a.createElement("div",{className:"options-radio"},s.a.createElement("input",{type:"radio",name:"first",value:!0}),"Team 1"),s.a.createElement("div",{className:"options-radio"},s.a.createElement("input",{type:"radio",name:"first",value:!1}),"Team 2"),s.a.createElement("div",{className:"options-radio"},s.a.createElement("input",{type:"radio",name:"first",value:"random",defaultChecked:!0}),"Random")),s.a.createElement("div",{className:"time-limit"},s.a.createElement("h4",null,"Turn Timer"),s.a.createElement("input",{type:"number",defaultValue:"60",onChange:this.updateTimer.bind(this)})),s.a.createElement("input",{type:"submit",className:"btn",value:"Start Game"}))),s.a.createElement("div",{className:"options-display-right"},s.a.createElement("form",{className:"options-form-answers",onSubmit:this.addWord.bind(this)},s.a.createElement("label",null,"Add to the Answer Bank"),s.a.createElement("section",null,s.a.createElement("input",{type:"text",className:"options-input",placeholder:"Add to the answers"}),s.a.createElement("input",{type:"submit",className:"btn",value:"Add Word/Phrase"}))),s.a.createElement("div",{className:"answers-bank-container"},this.displayAnswers()))):null}},{key:"displayPlay",value:function(){var e=this.state,t=e.display,a=e.teamAName,n=e.teamBName,r=e.words,i=e.first,l=e.time;if(t)return null;var o=i;"random"===o&&(o=0===Math.floor(2*Math.random()));return s.a.createElement(w,{time:l,first:o,teamAName:a,teamBName:n,words:r})}},{key:"render",value:function(){return s.a.createElement("div",{className:"options-main"},this.displayOptions(),this.displayPlay())}}]),t}(s.a.Component),k=a(25),O=a.n(k),j=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"start-screen"},s.a.createElement("div",{className:"start-screen-btn-container"},s.a.createElement(l.b,{to:"options"},"Set Up a Game"),s.a.createElement(l.b,{to:"how-to"},"How To Play")),s.a.createElement("div",{className:"saladbowl-container"},s.a.createElement("img",{src:O.a,className:"saladbowl",alt:""})))}}]),t}(s.a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"how-to"},"TBD")}}]),t}(s.a.Component),T=function(){return s.a.createElement("div",null,s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:j}),s.a.createElement(o.a,{path:"/how-to",component:g}),s.a.createElement(o.a,{path:"/options",component:N})))};var A=function(){return s.a.createElement(l.a,null,s.a.createElement(T,null))};i.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.d07a3b69.chunk.js.map