(this.webpackJsonpsaladbowl=this.webpackJsonpsaladbowl||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/correct.7e864110.wav"},27:function(e,t,a){e.exports=a.p+"static/media/pass.5e94467d.flac"},28:function(e,t,a){e.exports=a.p+"static/media/over.4dfa7ee1.wav"},29:function(e,t,a){e.exports=a.p+"static/media/timeSound1.39f4e7ef.wav"},30:function(e,t,a){e.exports=a.p+"static/media/saladbowl.2306fee0.png"},31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),l=a.n(r);a(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(3),i=a(7),c=(a(37),a(9)),m=a(18),u=a(12),d=a(13),p=a(15),h=a(14),v=a(10),E=a(16),f=a(6);function b(e){var t=e.teamA,a=e.teamB,n=e.startRound,r=e.toggleInput;return s.a.createElement("div",{className:"round-screen-container"},s.a.createElement("i",{className:"fas fa-cogs",onClick:r("pause")}),s.a.createElement("div",{className:"round-screen"},function(){var t=e.round,a=1===t?"Verbal Clues":2===t?"Charades":"One Word";return s.a.createElement("div",{className:"round-container"},s.a.createElement("div",{className:"round"},"Round ",t),s.a.createElement("div",null,s.a.createElement("strong",null,a)," Round"))}(),function(){var t=e.playingTeam,a=e.teamA,n=e.teamB,r=t?a.name:n.name;return"s"===r[r.length-1]?s.a.createElement("div",null,s.a.createElement("strong",null,r),"' Turn"):s.a.createElement("div",null,s.a.createElement("strong",null,r),"'s Turn")}(),s.a.createElement("div",{className:"round-screen-scores"},s.a.createElement("div",{className:"team-scores"},s.a.createElement("div",null,"Team: ",t.name),s.a.createElement("div",null,"Points: ",t.points)),s.a.createElement("div",{className:"team-scores"},s.a.createElement("div",null,"Team: ",a.name),s.a.createElement("div",null,"Points: ",a.points)))),s.a.createElement("div",{className:"btn round-screen-btn",onClick:n},"Start Your Turn"))}function y(e){var t=e.teamA,a=e.teamB;return s.a.createElement("div",{className:"end-screen-container"},s.a.createElement("div",{className:"round-screen"},s.a.createElement("h3",null,function(){var t=e.teamA,a=e.teamB;return t.points===a.points?"It is a Draw!":t.points>a.points?"".concat(t.name," Wins!"):"".concat(a.name," Wins!")}()),s.a.createElement("div",{className:"round-screen-scores"},s.a.createElement("div",null,s.a.createElement("div",null,"Team: ",t.name),s.a.createElement("div",null,"Points: ",t.points)),s.a.createElement("div",null,s.a.createElement("div",null,"Team: ",a.name),s.a.createElement("div",null,"Points: ",a.points)))),s.a.createElement("div",{className:"end-screen-btn-container"},s.a.createElement(o.b,{to:"/"},s.a.createElement("div",{className:"btn round-screen-btn"},"Back to Menu"))))}function w(e){var t,a=e.modal,n=e.teamA,r=e.teamB,l=e.startRound,o=e.playingTeam,i=e.round,c=e.toggleInput;if(!a)return null;switch(a){case"roundScreen":t=s.a.createElement(b,{teamA:n,teamB:r,startRound:l,playingTeam:o,round:i,toggleInput:c});break;case"endScreen":t=s.a.createElement(y,{teamA:n,teamB:r,startRound:l,playingTeam:o});break;default:return null}return s.a.createElement("div",{className:"modal-background"},s.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},t))}var g=a(26),N=a.n(g),k=a(27),O=a.n(k),S=a(28),j=a.n(S),A=a(29),I=a.n(A);function T(e){var t=Object(n.useState)(0),a=Object(f.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(0),i=Object(f.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)(""),p=Object(f.a)(d,2),h=p[0],v=p[1],E=Object(n.useState)(e.words),b=Object(f.a)(E,2),y=b[0],g=b[1],k=Object(n.useState)(e.time),S=Object(f.a)(k,2),A=S[0],T=S[1],B=Object(n.useState)("roundScreen"),C=Object(f.a)(B,2),R=C[0],W=C[1],x=Object(n.useState)(e.first),P=Object(f.a)(x,2),F=P[0],M=P[1],J=Object(n.useState)(1),Y=Object(f.a)(J,2),D=Y[0],q=Y[1],G=Object(n.useRef)(),H=e.teamAName,L=e.teamBName,Q=e.toggleInput,V=e.pause,U=e.sound;Object(n.useEffect)((function(){A<1&&(W("roundScreen"),g([h].concat(Object(c.a)(y))),clearInterval(G.current.timer),G.current.ticker.pause(),M(!F),T(e.time),U&&new Audio(j.a).play())}));var $=function(){3===D?(W("endScreen"),G.current.ticker.pause()):(W("roundScreen"),q(D+1),g(e.words),G.current.ticker.pause()),clearInterval(G.current.timer),M(!F),T(e.time),g(e.words)},z={name:H,points:r},K={name:L,points:m};return s.a.createElement("div",{className:"play-main"+(V?" hide":"")},s.a.createElement(w,{modal:R,startRound:function(){!function(){T(e.time);var t=new Audio(I.a);t.addEventListener("ended",(function(){t.play()})),G.current={ticker:t},U&&t.play();var a=setInterval((function(){T((function(e){return e-1}))}),1e3);G.current.timer=a}(),W(null),function(){for(var e=Object(c.a)(y),t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}var s=e.pop();g(e),v(s)}()},teamA:z,teamB:K,playingTeam:F,round:D,toggleInput:Q}),s.a.createElement("div",{className:"play-container"},s.a.createElement("h1",{className:"play-timer"},A),s.a.createElement("h2",{className:"play-display-word"},h),s.a.createElement("div",{className:"play-btn-container"},s.a.createElement("button",{className:"btn play-btns",onClick:function(){var e=Object(c.a)(y);if(F?l(r+1):u(m+1),0===e.length)$();else{var t=e.pop();v(t),g(e)}U&&new Audio(N.a).play()}},"Correct"),s.a.createElement("button",{className:"btn play-btns",onClick:function(){var e=Object(c.a)(y);e.unshift(h);var t=e.pop();v(t),g(e),U&&new Audio(O.a).play()}},"Pass"))))}var B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={display:!0,teamAName:sessionStorage.getItem("teamAName")||"Red Team",teamBName:sessionStorage.getItem("teamBName")||"Blue Team",words:JSON.parse(sessionStorage.getItem("words"))||[],showAnswers:!1,first:"random",time:sessionStorage.getItem("time")||60,pause:!1,sound:!1},a.updateFirst=a.updateFirst.bind(Object(v.a)(a)),a.updateInput=a.updateInput.bind(Object(v.a)(a)),a.toggleInput=a.toggleInput.bind(Object(v.a)(a)),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"updateInput",value:function(e){var t=this;return function(a){a.preventDefault();var n=a.target.value;t.setState(Object(m.a)({},e,n),(function(){return sessionStorage.setItem(e,n)}))}}},{key:"toggleInput",value:function(e){var t=this;return function(a){a.preventDefault(),t.setState(Object(m.a)({},e,!t.state[e]))}}},{key:"addWord",value:function(e){var t=this;if(e.preventDefault(),0===e.currentTarget[0].value.length)alert("Answer can not be blank");else{var a=e.currentTarget[0].value;this.setState({words:[].concat(Object(c.a)(this.state.words),[a])},(function(){return sessionStorage.setItem("words",JSON.stringify(t.state.words))})),e.currentTarget[0].value=""}}},{key:"removeWord",value:function(e){var t=this;return function(){var a=t.state.words;a.splice(e,1),t.setState({words:a},(function(){return sessionStorage.setItem("words",JSON.stringify(a))}))}}},{key:"displayAnswers",value:function(){var e=this,t=this.state,a=t.words;return t.showAnswers?s.a.createElement("div",null,s.a.createElement("div",{className:"answers-bank",onClick:this.toggleInput("showAnswers")},"Hide Answer Bank"),"Answers: ",a.length,a.map((function(t,a){return s.a.createElement("div",{className:"answers-bank-word",key:a,onClick:e.removeWord(a).bind(e)},t)})).reverse()):s.a.createElement("div",{className:"answers-bank",onClick:this.toggleInput("showAnswers")},"Show Answer Bank")}},{key:"startResume",value:function(){var e=this.state,t=e.display;0===e.words.length?alert("Your answer bank is looking pretty empty"):t?this.setState({display:!1}):this.setState({pause:!1})}},{key:"updateFirst",value:function(e){var t;"true"===e.target.value&&(t=!0),"false"===e.target.value&&(t=!1),"random"===e.target.value&&(t="random"),this.setState({first:t})}},{key:"reset",value:function(){sessionStorage.clear(),this.setState({words:[],time:60,teamAName:"Red Team",teamBName:"Blue Team"})}},{key:"displaySound",value:function(){var e=this.state.sound;return s.a.createElement("div",{className:"sound-effects",onClick:this.toggleInput("sound")},s.a.createElement("i",{className:"fas"+(e?" fa-volume-up":" fa-volume-mute")}))}},{key:"displayQuestion",value:function(){return this.state.pause?null:s.a.createElement("div",{className:"question-mark"},s.a.createElement(o.b,{to:"/how-to"},s.a.createElement("i",{className:"fas fa-question"})))}},{key:"displayReset",value:function(){return this.state.pause?null:s.a.createElement("div",{className:"question-mark",onClick:this.reset.bind(this)},s.a.createElement("i",{className:"fas fa-trash"}))}},{key:"displayFirst",value:function(){return this.state.pause?null:s.a.createElement("div",{className:"first-team",onChange:this.updateFirst},s.a.createElement("h4",null,"Who goes first?"),s.a.createElement("div",{className:"options-radio"},s.a.createElement("input",{type:"radio",name:"first",value:!0}),"Team 1"),s.a.createElement("div",{className:"options-radio"},s.a.createElement("input",{type:"radio",name:"first",value:!1}),"Team 2"),s.a.createElement("div",{className:"options-radio"},s.a.createElement("input",{type:"radio",name:"first",value:"random",defaultChecked:!0}),"Random"))}},{key:"displayAnswerBank",value:function(){return this.state.pause?null:s.a.createElement("div",{className:"options-display-right"},s.a.createElement("form",{className:"options-form-answers",onSubmit:this.addWord.bind(this)},s.a.createElement("label",{className:"btn-label"},"Add to the Answer Bank"),s.a.createElement("section",null,s.a.createElement("input",{type:"text",className:"options-input",placeholder:"Add to the answers"}),s.a.createElement("input",{type:"submit",className:"btn",value:"Add Word/Phrase"}))),s.a.createElement("div",{className:"answers-bank-container"},this.displayAnswers()))}},{key:"displayOptions",value:function(){var e=this.state,t=e.display,a=e.pause;return t||a?s.a.createElement("div",{className:"options-display"},s.a.createElement("div",{className:"options-btn-container"},this.displaySound(),this.displayQuestion(),this.displayReset()),s.a.createElement("div",{className:"options-display-left"},s.a.createElement("form",{className:"options-form team-names",onSubmit:this.startResume.bind(this)},s.a.createElement("label",{className:"btn-label"},"Team 1's Name: "),s.a.createElement("input",{type:"text",className:"options-input",value:this.state.teamAName,onChange:this.updateInput("teamAName")}),s.a.createElement("label",{className:"btn-label"},"Team 2's Name: "),s.a.createElement("input",{type:"text",className:"options-input",value:this.state.teamBName,onChange:this.updateInput("teamBName")}),this.displayFirst(),s.a.createElement("div",{className:"time-limit"},s.a.createElement("h4",null,"Turn Timer"),s.a.createElement("input",{type:"number",className:"options-input",value:this.state.time,onChange:this.updateInput("time")})),s.a.createElement("input",{type:"submit",className:"btn",value:a?"Resume Game":"Start Game"}))),this.displayAnswerBank()):null}},{key:"displayPlay",value:function(){var e=this.state,t=e.display,a=e.teamAName,n=e.teamBName,r=e.words,l=e.first,o=e.time,i=e.pause,c=e.sound;if(t)return null;var m=l;"random"===m&&(m=0===Math.floor(2*Math.random()));return s.a.createElement(T,{time:o,first:m,teamAName:a,teamBName:n,words:r,pause:i,sound:c,toggleInput:this.toggleInput})}},{key:"render",value:function(){return s.a.createElement("div",{className:"options-main"},this.displayOptions(),this.displayPlay())}}]),t}(s.a.Component),C=a(30),R=a.n(C),W=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"start-screen"},s.a.createElement("header",{className:"start-screen-header"},"Salad Bowl"),s.a.createElement("div",{className:"start-screen-nonheader"},s.a.createElement("div",{className:"start-screen-btn-container"},s.a.createElement(o.b,{to:"options"},"Set Up a Game"),s.a.createElement(o.b,{to:"how-to"},"How To Play")),s.a.createElement("div",{className:"saladbowl-container"},s.a.createElement("img",{src:R.a,className:"saladbowl",alt:""}))))}}]),t}(s.a.Component);function x(){return s.a.createElement("div",{className:"how-to"},s.a.createElement("header",null,s.a.createElement("strong",null," How To Play")),s.a.createElement("p",null,"1. Fill the answer bank. Every player should add the same amount of answers (Suggested: 3 - 7 answers per player). Answers can be anything from nouns to common expressions (Suggested: Limit it to 5 words per answer; Try not to pick something too obscure for the player base). ",s.a.createElement("br",null)),s.a.createElement("p",null,"2. Split into two teams. Each team sets up their own rotation of players."),s.a.createElement("p",null,"3. The player who's turn it is, is given a word and must get their team to guess the word based on the rules of the particular round. Once the word is guessed correctly, their team earns a point, and the player is given a new word until the time limit runs out."),s.a.createElement("p",{className:"indent"},"a) Round 1, Verbal Clues: You must make your team guess the word by telling them clues, without actually saying any part of the answer."),s.a.createElement("p",{className:"indent"},"b) Round 2, Charades: You must make your team guess the word by acting out the word, without saying anything."),s.a.createElement("p",{className:"indent"},"c) Round 3, One Word: You must make your team guess the word by only saying one word, that word can not be any part of the answer."),s.a.createElement("p",null,"4. The teams alternate turns."),s.a.createElement("p",null,"5. A round ends when all the answers in the answer bank have been guessed correctly."),s.a.createElement("p",null,"6. The team with the most points at the end of three rounds wins."),s.a.createElement(o.b,{className:"back-btn",to:"/"},"Back to the Menu"))}var P=function(){return s.a.createElement("div",null,s.a.createElement(i.c,null,s.a.createElement(i.a,{exact:!0,path:"/",component:W}),s.a.createElement(i.a,{path:"/how-to",component:x}),s.a.createElement(i.a,{path:"/options",component:B})))};var F=function(){return s.a.createElement(o.a,null,s.a.createElement(P,null))};l.a.render(s.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.ded24515.chunk.js.map