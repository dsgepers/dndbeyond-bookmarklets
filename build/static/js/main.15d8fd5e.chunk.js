(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=(n(23),n(2)),s=n(3),l=n(5),u=n(4),m=n(6),p=n(15),d=n.n(p),h=(n(24),n(16)),f=n.n(h),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).conditions={1:""},n.modifiers={8:-1,9:-1,10:0,11:0,12:1,13:1,14:2,15:2,16:3,17:3,18:4,19:4,20:5,21:5,22:6,23:6,24:7},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return f.a.get(e.props.link).then(function(t){return e.setState({player:t})})},1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.player.character.classes.reduce(function(e,t){return e+t}),t=this.state.player.character.baseHitPoints+this.modifiers[this.state.player.character.stats[3].value]*e,n=t-this.state.player.removedHitPoints;return r.a.createElement("div",{className:"Player"},"Name: ",this.state.player.character.name,r.a.createElement("br",null),"HP: ",n," / ",t)}}]),t}(a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log(this.props.links),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),this.props.links.map(function(e,t){return r.a.createElement(k,{key:t,link:e})}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log(document.getElementById("bookmarklet-root")),c.a.render(r.a.createElement(v,{links:JSON.parse(document.getElementById("bookmarklet-root").getAttribute("data-links"))}),document.getElementById("bookmarklet-root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.15d8fd5e.chunk.js.map