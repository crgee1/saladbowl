(this.webpackJsonpsaladbowl=this.webpackJsonpsaladbowl||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/correct.7e864110.wav"},26:function(e,t,a){e.exports=a.p+"static/media/pass.5e94467d.flac"},27:function(e,t,a){e.exports=a.p+"static/media/over.4dfa7ee1.wav"},28:function(e,t,a){e.exports=a.p+"static/media/saladbowl.2306fee0.png"},29:function(e,t,a){e.exports=a(41)},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(22),o=a.n(r);a(34),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(9),l=a(11),m=(a(35),a(14)),c=a(17),u=a(2),d=a(3),p=a(5),h=a(4),v=a(13),y=a(6),b=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"displayName",value:function(){var e=this.props,t=e.playingTeam,a=e.teamA,n=e.teamB,r=t?a.name:n.name;return"s"===r[r.length-1]?s.a.createElement("div",null,s.a.createElement("strong",null,r),"' Turn"):s.a.createElement("div",null,s.a.createElement("strong",null,r),"'s Turn")}},{key:"displayRound",value:function(){var e=this.props.round,t=1===e?"Verbal Clues":2===e?"Charades":"One Word";return s.a.createElement("div",{className:"round-container"},s.a.createElement("div",{className:"round"},"Round ",e),s.a.createElement("div",null,s.a.createElement("strong",null,t)," Round"))}},{key:"render",value:function(){var e=this.props,t=e.teamA,a=e.teamB,n=e.startRound,r=e.toggleInput;return s.a.createElement("div",{className:"round-screen-container"},s.a.createElement("i",{className:"fas fa-cogs",onClick:r("pause")}),s.a.createElement("div",{className:"round-screen"},this.displayRound(),this.displayName(),s.a.createElement("div",{className:"round-screen-scores"},s.a.createElement("div",{className:"team-scores"},s.a.createElement("div",null,"Team: ",t.name),s.a.createElement("div",null,"Points: ",t.points)),s.a.createElement("div",{className:"team-scores"},s.a.createElement("div",null,"Team: ",a.name),s.a.createElement("div",null,"Points: ",a.points)))),s.a.createElement("div",{className:"btn round-screen-btn",onClick:n},"Start Your Turn"))}}]),t}(s.a.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"winner",value:function(){var e=this.props,t=e.teamA,a=e.teamB;return t.points===a.points?"It is a Draw!":t.points>a.points?"".concat(t.name," Wins!"):"".concat(a.name," Wins!")}},{key:"render",value:function(){var e=this.props,t=e.teamA,a=e.teamB;return s.a.createElement("div",{className:"end-screen-container"},s.a.createElement("div",{className:"round-screen"},s.a.createElement("h3",null,this.winner()),s.a.createElement("div",{className:"round-screen-scores"},s.a.createElement("div",null,s.a.createElement("div",null,"Team: ",t.name),s.a.createElement("div",null,"Points: ",t.points)),s.a.createElement("div",null,s.a.createElement("div",null,"Team: ",a.name),s.a.createElement("div",null,"Points: ",a.points)))),s.a.createElement("div",{className:"end-screen-btn-container"},s.a.createElement(i.b,{to:"/"},s.a.createElement("div",{className:"btn round-screen-btn"},"Back to Menu"))))}}]),t}(s.a.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.modal,a=e.teamA,n=e.teamB,r=e.startRound,o=e.playingTeam,i=e.round,l=e.toggleInput;if(!t)return null;switch(t){case"roundScreen":this.component=s.a.createElement(b,{teamA:a,teamB:n,startRound:r,playingTeam:o,round:i,toggleInput:l});break;case"endScreen":this.component=s.a.createElement(f,{teamA:a,teamB:n,startRound:r,playingTeam:o});break;default:return null}return s.a.createElement("div",{className:"modal-background"},s.a.createElement("div",{className:"modal-child",onClick:function(e){return e.stopPropagation()}},this.component))}}]),t}(s.a.Component),E=a(25),g=a.n(E),N=a(26),k=a.n(N),O=a(27),S=a.n(O),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={teamAPoints:0,teamBPoints:0,word:"",modal:"roundScreen",words:a.props.words,playingTeam:a.props.first,round:1},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"startTimer",value:function(){var e=this,t=this.props,a=t.time,n=t.sound;this.setState({time:a}),this.timer=setInterval((function(){e.state.time>1?e.setState((function(e){return{time:e.time-1}})):(e.setState({modal:"roundScreen",time:a,playingTeam:!e.state.playingTeam}),n&&new Audio(S.a).play(),clearInterval(e.timer))}),1e3)}},{key:"closeModal",value:function(){this.setState({modal:null})}},{key:"shuffleWords",value:function(){for(var e=Object(m.a)(this.props.words),t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}var s=e.pop();this.setState({word:s,words:e})}},{key:"correctWord",value:function(){var e=this.state,t=e.words,a=e.playingTeam,n=e.teamAPoints,s=e.teamBPoints,r=Object(m.a)(t);if(0===r.length)this.endRound();else{var o=r.pop();a?this.setState({word:o,words:r,teamAPoints:n+1}):this.setState({word:o,words:r,teamBPoints:s+1})}this.props.sound&&new Audio(g.a).play()}},{key:"endRound",value:function(){var e=this.state,t=e.playingTeam,a=e.teamAPoints,n=e.teamBPoints,s=e.round;t?this.setState({teamAPoints:a+1,time:0}):this.setState({teamBPoints:n+1,time:0}),3===s?(this.setState({modal:"endScreen",time:this.props.time,playingTeam:!t}),clearInterval(this.timer)):(this.setState({modal:"roundScreen",time:this.props.time,playingTeam:!t,round:s+1}),clearInterval(this.timer),this.shuffleWords())}},{key:"passWord",value:function(){var e=Object(m.a)(this.state.words);e.unshift(this.state.word);var t=e.pop();this.setState({word:t,words:e}),this.props.sound&&new Audio(k.a).play()}},{key:"reset",value:function(){var e=this;return function(){e.setState({words:e.props.words})}}},{key:"startRound",value:function(){this.startTimer(),this.closeModal(),this.shuffleWords()}},{key:"render",value:function(){var e=this.props,t=e.teamAName,a=e.teamBName,n=e.toggleInput,r=e.pause,o=this.state,i=o.teamAPoints,l=o.teamBPoints,m=o.modal,c=o.playingTeam,u=o.round,d={name:t,points:i},p={name:a,points:l};return s.a.createElement("div",{className:"play-main"+(r?" hide":"")},s.a.createElement(w,{modal:m,startRound:this.startRound.bind(this),teamA:d,teamB:p,playingTeam:c,round:u,toggleInput:n}),s.a.createElement("div",{className:"play-container"},s.a.createElement("h1",{className:"play-timer"},this.state.time),s.a.createElement("h2",{className:"play-display-word"},this.state.word),s.a.createElement("div",{className:"play-btn-container"},s.a.createElement("button",{className:"btn play-btns",onClick:this.correctWord.bind(this)},"Correct"),s.a.createElement("button",{className:"btn play-btns",onClick:this.passWord.bind(this)},"Pass"))))}}]),t}(s.a.Component),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={display:!0,teamAName:sessionStorage.getItem("teamAName")||"Red Team",teamBName:sessionStorage.getItem("teamBName")||"Blue Team",words:JSON.parse(sessionStorage.getItem("words"))||[],showAnswers:!1,first:"random",time:sessionStorage.getItem("time")||60,pause:!1,sound:!1},a.updateFirst=a.updateFirst.bind(Object(v.a)(a)),a.updateInput=a.updateInput.bind(Object(v.a)(a)),a.toggleInput=a.toggleInput.bind(Object(v.a)(a)),a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"updateInput",value:function(e){var t=this;return function(a){a.preventDefault();var n=a.target.value;t.setState(Object(c.a)({},e,n),(function(){return sessionStorage.setItem(e,n)}))}}},{key:"toggleInput",value:function(e){var t=this;return function(a){a.preventDefault(),t.setState(Object(c.a)({},e,!t.state[e]))}}},{key:"addWord",value:function(e){var t=this;if(e.preventDefault(),0===e.currentTarget[0].value.length)alert("Answer can not be blank");else{var a=e.currentTarget[0].value;this.setState({words:[].concat(Object(m.a)(this.state.words),[a])},(function(){return sessionStorage.setItem("words",JSON.stringify(t.state.words))})),e.currentTarget[0].value=""}}},{key:"removeWord",value:function(e){var t=this;return function(){var a=t.state.words;a.splice(e,1),t.setState({words:a},(function(){return sessionStorage.setItem("words",JSON.stringify(a))}))}}},{key:"displayAnswers",value:function(){var e=this,t=this.state,a=t.words;return t.showAnswers?s.a.createElement("div",null,s.a.createElement("div",{className:"answers-bank",onClick:this.toggleInput("showAnswers")},"Hide Answer Bank"),"Answers: ",a.length,a.map((function(t,a){return s.a.createElement("div",{className:"answers-bank-word",key:a,onClick:e.removeWord(a).bind(e)},t)})).reverse()):s.a.createElement("div",{className:"answers-bank",onClick:this.toggleInput("showAnswers")},"Show Answer Bank")}},{key:"startResume",value:function(){var e=this.state,t=e.display;0===e.words.length?alert("You're answer bank is looking pretty empty"):t?this.setState({display:!1}):this.setState({pause:!1})}},{key:"updateFirst",value:function(e){var t;"true"===e.target.value&&(t=!0),"false"===e.target.value&&(t=!1),"random"===e.target.value&&(t="random"),this.setState({first:t})}},{key:"displaySound",value:function(){var e=this.state.sound;return s.a.createElement("div",{className:"sound-effects",onClick:this.toggleInput("sound")},s.a.createElement("i",{className:"fas"+(e?" fa-volume-up":" fa-volume-mute")}))}},{key:"displayOptions",value:function(){var e=this.state,t=e.display,a=e.pause;return t||a?s.a.createElement("div",{className:"options-display"},this.displaySound(),s.a.createElement("div",{className:"options-display-left"},s.a.createElement("form",{className:"options-form team-names",onSubmit:this.startResume.bind(this)},s.a.createElement("label",{className:"btn-label"},"Team 1's Name: "),s.a.createElement("input",{type:"text",className:"options-input",value:this.state.teamAName,onChange:this.updateInput("teamAName")}),s.a.createElement("label",{className:"btn-label"},"Team 2's Name: "),s.a.createElement("input",{type:"text",className:"options-input",value:this.state.teamBName,onChange:this.updateInput("teamBName")}),s.a.createElement("div",{className:"first-team",onChange:this.updateFirst},s.a.createElement("h4",null,"Who goes first?"),s.a.createElement("div",{className:"options-radio"},s.a.createElement("input",{type:"radio",name:"first",value:!0}),"Team 1"),s.a.createElement("div",{className:"options-radio"},s.a.createElement("input",{type:"radio",name:"first",value:!1}),"Team 2"),s.a.createElement("div",{className:"options-radio"},s.a.createElement("input",{type:"radio",name:"first",value:"random",defaultChecked:!0}),"Random")),s.a.createElement("div",{className:"time-limit"},s.a.createElement("h4",null,"Turn Timer"),s.a.createElement("input",{type:"number",className:"options-input",value:this.state.time,onChange:this.updateInput("time")})),s.a.createElement("input",{type:"submit",className:"btn",value:a?"Resume Game":"Start Game"}))),s.a.createElement("div",{className:"options-display-right"},s.a.createElement("form",{className:"options-form-answers",onSubmit:this.addWord.bind(this)},s.a.createElement("label",{className:"btn-label"},"Add to the Answer Bank"),s.a.createElement("section",null,s.a.createElement("input",{type:"text",className:"options-input",placeholder:"Add to the answers"}),s.a.createElement("input",{type:"submit",className:"btn",value:"Add Word/Phrase"}))),s.a.createElement("div",{className:"answers-bank-container"},this.displayAnswers()))):null}},{key:"displayPlay",value:function(){var e=this.state,t=e.display,a=e.teamAName,n=e.teamBName,r=e.words,o=e.first,i=e.time,l=e.pause,m=e.sound;if(t)return null;var c=o;"random"===c&&(c=0===Math.floor(2*Math.random()));return s.a.createElement(j,{time:i,first:c,teamAName:a,teamBName:n,words:r,pause:l,sound:m,toggleInput:this.toggleInput})}},{key:"render",value:function(){return s.a.createElement("div",{className:"options-main"},this.displayOptions(),this.displayPlay())}}]),t}(s.a.Component),T=a(28),I=a.n(T),B=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"start-screen"},s.a.createElement("header",{className:"start-screen-header"},"Salad Bowl"),s.a.createElement("div",{className:"start-screen-nonheader"},s.a.createElement("div",{className:"start-screen-btn-container"},s.a.createElement(i.b,{to:"options"},"Set Up a Game"),s.a.createElement(i.b,{to:"how-to"},"How To Play")),s.a.createElement("div",{className:"saladbowl-container"},s.a.createElement("img",{src:I.a,className:"saladbowl",alt:""}))))}}]),t}(s.a.Component),C=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"how-to"},s.a.createElement("p",null,"1. Fill the answer bank. Every player should add the same amount of answers (Suggested: 3 - 7 answers per player). Answers can be anything from nouns to common expressions (Suggested: Limit it to 5 words per answer; Try not to pick something too obscure for the player base). ",s.a.createElement("br",null)),s.a.createElement("p",null,"2. Split into two teams. Each team sets up their own rotation of players."),s.a.createElement("p",null,"3. The player who's turn it is, is given a word and must get their team to guess the word based on the rules of the particular round. Once the word is guessed correctly, their team earns a point, and the player is given a new word until the time limit runs out."),s.a.createElement("p",{className:"indent"},"a) Round 1, Verbal Clues: You must make your team guess the word by telling them clues, without actually saying any part of the answer."),s.a.createElement("p",{className:"indent"},"b) Round 2, Charades: You must make your team guess the word by acting out the word, without saying anything."),s.a.createElement("p",{className:"indent"},"c) Round 3, One Word: You must make your team guess the word by only saying one word only, that word can not be the any part of the answer."),s.a.createElement("p",null,"4. The teams alternate turns."),s.a.createElement("p",null,"5. A round ends when all the answers in the answer bank have been guessed correctly."),s.a.createElement("p",null,"6. The team with the most points at the end of three rounds wins."),s.a.createElement(i.b,{className:"back-btn",to:"/"},"Back to the Menu"))}}]),t}(s.a.Component),P=function(){return s.a.createElement("div",null,s.a.createElement(l.c,null,s.a.createElement(l.a,{exact:!0,path:"/",component:B}),s.a.createElement(l.a,{path:"/how-to",component:C}),s.a.createElement(l.a,{path:"/options",component:A})))};var R=function(){return s.a.createElement(i.a,null,s.a.createElement(P,null))};o.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.860ecfbb.chunk.js.map