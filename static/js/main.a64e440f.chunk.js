(this.webpackJsonpeuchre=this.webpackJsonpeuchre||[]).push([[0],{100:function(e,a,r){},207:function(e,a){},209:function(e,a){},230:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(11),c=r.n(o),s=(r(99),r(100),r(12)),l=r(29),m=r(86),i=r.n(m),u=r(92),d=r(1),b=r(87),g=r.n(b),p=r(88),f=r.n(p),h=r(47),v=r.n(h),y=r(89),E=r.n(y),O=function(e,a){return!a.header&&a.column.startsWith("game")?parseInt(e.trim()):e},j=g()({S2020:"\nname,game1,game2,game3,game4,game5,game6,game7,game8,game9,game10,game11,game12,game13,game14,game15\nPete,0,    8,    9,    6,    8,    6,    4,    8,    8,    5,     9,     8,     9,     7,     8     \nBecky,2,   8,    8,    2,    8,    7,    6,    8,    9,    8,     8,     1,     8,     11,    8\nMarcia,1,  6,    9,    8,    7,    8,    8,    8,    3,    1,     0,     8,     8,     11,    5\nJimmy,9,   8,    9,    6,    2,    7,    8,    1,    7,    8,     8,     1,     4,     8,     8\nJulius,8,  8,    4,    8,    8,    8,    4,    8,    8,    7,     8,     7,     2,     3,     8\nAlex,9,    2,    5,    8,    3,    8,    8,    8,    3,    5,     5,     1,     8,     8,     2\nPatrick,2, 3,    8,    4,    2,    8,    8,    2,    5,    7,     5,     9,     8,     7,     8\nDeena,4,   6,    9,    4,    8,    7,    2,    6,    7,    8,     3,     8,     6,     3,     2\nAmy,4,     8,    6,    8,    8,    9,    4,    8,    8,    1,     9,     9,     8,     7,     9\nTerri,8,   8,    5,    8,    7,    8,    6,    8,    4,    9,     3,     1,     6,     9,     5\nJR,8,      8,    6,    6,    8,    5,    8,    6,    8,    8,     0,     4,     9,     9,     8\nDoug,8,    4,    6,    8,    3,    9,    8,    8,    5,    8,     3,     9,     6,     8,     5\nSkip,1,    8,    8,    2,    3,    5,    2,    1,    8,    9,     8,     9,     2,     8,     9\nJamie,8,   4,    4,    8,    8,    8,    4,    2,    9,    7,     8,     8,     4,     5,     5\nRich,0,    3,    8,    6,    3,    7,    8,    6,    4,    7,     3,     7,     8,     7,     5\nWebs,8,    2,    6,    8,    8,    8,    6,    6,    8,    8,     8,     4,     6,     5,     5\n"},(function(e,a){var r=f()(e,{columns:!0,cast:O}).map((function(e){var a=v()(e,(function(e,a,r){return r.startsWith("game")?(e[parseInt(r.slice(4))-1]=a,e):e}),[]);return{stats:{totalScore:E()(a),gamesWon:v()(a,(function(e,a){return e+(a>=8?1:0)}),0)},orderedGames:a,name:e.name}}));r.sort((function(e,a){return e.stats.totalScore>a.stats.totalScore}));var t="S"===a.slice(0,1)?"Summer":"Winter",n=a.slice(1);return{longName:"".concat(t," ").concat(n),shortName:a,playerData:r,gamesPlayedTo:8}})),P=function(e){for(var a={},r=0,t=Object.values(e);r<t.length;r++){t[r].playerData.forEach((function(e){var r=e.name,t=e.stats;a.hasOwnProperty(r)||(a[r]={totalGamesWon:0,eloScore:100,firstPlaceFinishes:0,secondPlaceFinishes:0,thirdPlaceFinishes:0,averagePlace:0,name:r}),a[r].totalGamesWon+=t.gamesWon}))}return a}(j),N=r(8),S=r(15),w=function(e){var a=e.data,r=(e.className,Object(N.a)(e,["data","className"]),Object(t.useMemo)((function(){return[{Header:"Player",accessor:"name"},{Header:"Games Won",accessor:"totalGamesWon"},{Header:"Elo Score",accessor:"eloScore"},{Header:"\ud83e\udd47",accessor:"firstPlaceFinishes"},{Header:"\ud83e\udd48",accessor:"secondPlaceFinishes"},{Header:"\ud83e\udd49",accessor:"thirdPlaceFinishes"},{Header:"Average Place",accessor:"averagePlace"}]}),[])),o=Object(S.useTable)({columns:r,data:Object.values(a),initialState:{sortBy:[{id:"totalGamesWon",desc:!0}]},disableSortRemove:!0},S.useSortBy),c=o.getTableProps,s=o.getTableBodyProps,l=o.headerGroups,m=o.rows,i=o.prepareRow;return n.a.createElement("table",Object.assign({},c(),{className:"w-full border border-gray-900"}),n.a.createElement("thead",{className:" -mt-8 h-8 bg-gray-400"},l.map((function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer"}),e.render("Header"),n.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""))})))}))),n.a.createElement("tbody",s(),m.map((function(e){return i(e),n.a.createElement("tr",Object.assign({},e.getRowProps(),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer even:bg-gray-300 odd:bg-gray-100"}),e.cells.map((function(e){return n.a.createElement("td",Object.assign({},e.getCellProps(),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r"}),e.render("Cell"))})))}))))},x=function(e){var a=e.data;Object(N.a)(e,["data"]);return n.a.createElement("div",{className:"overflow-x-auto"},n.a.createElement(w,{data:a}))},H=r(93),T=function(e){var a=e.data,r=(e.className,Object(N.a)(e,["data","className"]),Object.entries(a[0].orderedGames).reduce((function(e,a){var r=Object(l.a)(a,2),t=r[0],n=(r[1],parseInt(t)+1);return e[t]={Header:"G".concat(n),accessor:function(e){return e.orderedGames[t]}},e}),[])),o=Object(t.useMemo)((function(){return[{Header:"Player",accessor:"name"},{Header:"Total",accessor:"stats.totalScore",id:"totalScore"}].concat(Object(H.a)(r))}),[a]),c=Object(S.useTable)({columns:o,data:a,initialState:{sortBy:[{id:"totalScore",desc:!0}]},disableSortRemove:!0},S.useSortBy),s=c.getTableProps,m=c.getTableBodyProps,i=c.headerGroups,u=c.rows,d=c.prepareRow;return n.a.createElement("table",Object.assign({},s(),{className:"w-all border border-gray-900"}),n.a.createElement("thead",{className:" -mt-8 h-8 bg-gray-400"},i.map((function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer"}),e.render("Header"),n.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""))})))}))),n.a.createElement("tbody",m(),u.map((function(e){return d(e),n.a.createElement("tr",Object.assign({},e.getRowProps(),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer even:bg-gray-300 odd:bg-gray-100"}),e.cells.map((function(e){return n.a.createElement("td",Object.assign({},e.getCellProps(),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r"}),e.render("Cell"))})))}))))},G=function(e){var a=e.data;Object(N.a)(e,["data"]);return n.a.createElement("div",null,n.a.createElement("div",{className:"overflow-x-auto"},n.a.createElement(T,{data:a})))},W=Object(d.e)((function(){var e=Object(d.d)(),a=e.location.hash,r=""===a?"AllTime":a.slice(1),t="AllTime"===r?P:j[r],o=Object.entries(j).sort((function(e,a){return e[1].shortName>a[1].shortName?1:-1})),c=i()([{label:"All Time Scores",value:"AllTime"}],o.map((function(e){var a=Object(l.a)(e,2),r=a[0];return{label:a[1].longName,value:r}}))),m={option:function(e){return Object(s.a)(Object(s.a)({},e),{},{cursor:"pointer",color:"#1a202c",backgroundColor:null,":hover":Object(s.a)(Object(s.a)({},e[":hover"]),{},{backgroundColor:"#cbd5e0"})})},control:function(e){return Object(s.a)(Object(s.a)({},e),{},{cursor:"pointer"})}},b=function(e){var a=e.children;return n.a.createElement("span",{className:"text-red-500"},a)};return n.a.createElement("div",{className:"align-center bg-gray-100 text-gray-900 min-h-100vh flex flex-col items-center"},n.a.createElement("div",{className:"w-10/12 max-w-3xl mx-auto flex flex-col"},n.a.createElement("header",{className:"w-full font-bold mb-8 pt-4"},n.a.createElement("h1",{className:"text-4xl float-left"},"Euchre Stats",n.a.createElement("span",{className:"text-xl ml-2"},"\u2660 ",n.a.createElement(b,null,"\u2665")," \u2666 ",n.a.createElement(b,null,"\u2663")))),n.a.createElement(u.a,{options:c,defaultValue:c[0],className:"float-left w-64 mb-8",onChange:function(a){var t=a.value;t!==r&&e.push({hash:t})},styles:m}),"AllTime"===r?n.a.createElement(x,{data:t}):n.a.createElement(G,{data:t.playerData})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=r(46),k=function(){return n.a.createElement(B.a,null,n.a.createElement(W,null))};c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,a,r){e.exports=r(230)},99:function(e,a,r){}},[[94,1,2]]]);
//# sourceMappingURL=main.a64e440f.chunk.js.map