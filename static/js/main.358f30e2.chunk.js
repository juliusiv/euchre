(this.webpackJsonpeuchre=this.webpackJsonpeuchre||[]).push([[0],{180:function(e,a,t){e.exports=t(330)},185:function(e,a,t){},186:function(e,a,t){},271:function(e,a){},273:function(e,a){},330:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(40),c=t.n(o),s=(t(185),t(186),t(44)),l=t(66),m=t(165),i=t.n(m),u=t(176),d=t(166),b=t.n(d),p=t(167),g=t.n(p),f=t(63),h=t.n(f),v=t(43),y=t.n(v),E=function(e,a){return!a.header&&a.column.startsWith("game")?parseInt(e.trim()):e},O=b()({S2020:"\nname,game1,game2,game3,game4,game5,game6,game7,game8,game9,game10,game11,game12,game13,game14,game15\nPete,0,    8,    9,    6,    8,    6,    4,    8,    8,    5,     9,     8,     9,     7,     8     \nBecky,2,   8,    8,    2,    8,    7,    6,    8,    9,    8,     8,     1,     8,     11,    8\nMarcia,1,  6,    9,    8,    7,    8,    8,    8,    3,    1,     0,     8,     8,     11,    5\nJimmy,9,   8,    9,    6,    2,    7,    8,    1,    7,    8,     8,     1,     4,     8,     8\nJulius,8,  8,    4,    8,    8,    8,    4,    8,    8,    7,     8,     7,     2,     3,     8\nAlex,9,    2,    5,    8,    3,    8,    8,    8,    3,    5,     5,     1,     8,     8,     2\nPatrick,2, 3,    8,    4,    2,    8,    8,    2,    5,    7,     5,     9,     8,     7,     8\nDeena,4,   6,    9,    4,    8,    7,    2,    6,    7,    8,     3,     8,     6,     3,     2\nAmy,4,     8,    6,    8,    8,    9,    4,    8,    8,    1,     9,     9,     8,     7,     9\nTerri,8,   8,    5,    8,    7,    8,    6,    8,    4,    9,     3,     1,     6,     9,     5\nJR,8,      8,    6,    6,    8,    5,    8,    6,    8,    8,     0,     4,     9,     9,     8\nDoug,8,    4,    6,    8,    3,    9,    8,    8,    5,    8,     3,     9,     6,     8,     5\nSkip,1,    8,    8,    2,    3,    5,    2,    1,    8,    9,     8,     9,     2,     8,     9\nJamie,8,   4,    4,    8,    8,    8,    4,    2,    9,    7,     8,     8,     4,     5,     5\nRich,0,    3,    8,    6,    3,    7,    8,    6,    4,    7,     3,     7,     8,     7,     5\nWebs,8,    2,    6,    8,    8,    8,    6,    6,    8,    8,     8,     4,     6,     5,     5\n"},(function(e,a){var t=g()(e,{columns:!0,cast:E}).map((function(e){var a=h()(e,(function(e,a,t){return t.startsWith("game")?(e[parseInt(t.slice(4))-1]=a,e):e}),[]);return{stats:{totalScore:y()(a),gamesWon:h()(a,(function(e,a){return e+(a>=8?1:0)}),0)},orderedGames:a,name:e.name}}));t.sort((function(e,a){return e.stats.totalScore>a.stats.totalScore}));var r="S"===a.slice(0,1)?"Summer":"Winter",n=a.slice(1);return{longName:"".concat(r," ").concat(n),shortName:a,playerData:t,gamesPlayedTo:8}})),j=function(e){for(var a={},t=0,r=Object.values(e);t<r.length;t++){r[t].playerData.forEach((function(e){var t=e.name,r=e.stats;a.hasOwnProperty(t)||(a[t]={totalGamesWon:0,eloScore:100,firstPlaceFinishes:0,secondPlaceFinishes:0,thirdPlaceFinishes:0,averagePlace:0,name:t}),a[t].totalGamesWon+=r.gamesWon}))}return a}(O),S=t(24),P=t(51),N=function(e){var a=e.data,t=(e.className,Object(S.a)(e,["data","className"]),Object(r.useMemo)((function(){return[{Header:"Player",accessor:"name"},{Header:"Games Won",accessor:"totalGamesWon"},{Header:"Elo Score",accessor:"eloScore"},{Header:"\ud83e\udd47",accessor:"firstPlaceFinishes"},{Header:"\ud83e\udd48",accessor:"secondPlaceFinishes"},{Header:"\ud83e\udd49",accessor:"thirdPlaceFinishes"},{Header:"Average Place",accessor:"averagePlace"}]}),[])),o=Object(P.useTable)({columns:t,data:Object.values(a),initialState:{sortBy:[{id:"totalGamesWon",desc:!0}]},disableSortRemove:!0},P.useSortBy),c=o.getTableProps,s=o.getTableBodyProps,l=o.headerGroups,m=o.rows,i=o.prepareRow;return n.a.createElement("table",Object.assign({},c(),{className:"w-full border border-gray-900"}),n.a.createElement("thead",{className:" -mt-8 h-8 bg-gray-400"},l.map((function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer"}),e.render("Header"),n.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""))})))}))),n.a.createElement("tbody",s(),m.map((function(e){return i(e),n.a.createElement("tr",Object.assign({},e.getRowProps(),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer even:bg-gray-300 odd:bg-gray-100"}),e.cells.map((function(e){return n.a.createElement("td",Object.assign({},e.getCellProps(),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r"}),e.render("Cell"))})))}))))},w=function(e){var a=e.data;Object(S.a)(e,["data"]);return n.a.createElement("div",{className:"overflow-x-auto"},n.a.createElement(N,{data:a}))},x=t(177),T=function(e){var a=e.data,t=(e.className,Object(S.a)(e,["data","className"]),Object.entries(a[0].orderedGames).reduce((function(e,a){var t=Object(l.a)(a,2),r=t[0],n=(t[1],parseInt(r)+1);return e[r]={Header:"G".concat(n),accessor:function(e){return e.orderedGames[r]}},e}),[])),o=Object(r.useMemo)((function(){return[{Header:"Player",accessor:"name"},{Header:"Total",accessor:"stats.totalScore",id:"totalScore"}].concat(Object(x.a)(t))}),[a]),c=Object(P.useTable)({columns:o,data:a,initialState:{sortBy:[{id:"totalScore",desc:!0}]},disableSortRemove:!0},P.useSortBy),s=c.getTableProps,m=c.getTableBodyProps,i=c.headerGroups,u=c.rows,d=c.prepareRow;return n.a.createElement("table",Object.assign({},s(),{className:"w-all border border-gray-900"}),n.a.createElement("thead",{className:" -mt-8 h-8 bg-gray-400"},i.map((function(e){return n.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer"}),e.render("Header"),n.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""))})))}))),n.a.createElement("tbody",m(),u.map((function(e){return d(e),n.a.createElement("tr",Object.assign({},e.getRowProps(),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r cursor-pointer even:bg-gray-300 odd:bg-gray-100"}),e.cells.map((function(e){return n.a.createElement("td",Object.assign({},e.getCellProps(),{className:"pl-2 pr-2 pt-1 pb-1 border-gray-900 border-b border-r"}),e.render("Cell"))})))}))))},H=t(338),G=t(340),k=t(336),W=["#1a202c","#718096","#c53030","#dd6b20","#f6e05e","#b7791f","#c6f6d5","#2f855a","#319795","#90cdf4","#3182ce","#4c51bf","#805ad5","#ed64a6","#7b341e"],B=function(e){var a=e.data,t=(Object(S.a)(e,["data"]),Object(r.useMemo)((function(){return a.map((function(e,a){var t=h()(e.orderedGames,(function(e,a,t){return e.push({x:t+1,y:e[t].y+a}),e}),[{x:0,y:0}]);return{name:e.name,cumulativeScores:t,color:W[a]}}))}),[a]));return n.a.createElement("div",null,n.a.createElement("h3",{className:"text-3xl font-bold pb-4"},"Scores Over Time"),n.a.createElement(H.a,{width:550,height:300,padding:{top:0,left:35,right:0,bottom:35}},n.a.createElement(G.a,{x:60,y:20,orientation:"horizontal",gutter:15,style:{border:{stroke:"black"},labels:{fontSize:10}},itemsPerRow:4,data:t.map((function(e){return{name:e.name,symbol:{fill:e.color}}}))}),t.map((function(e){var a=e.name,t=e.color,r=e.cumulativeScores;return n.a.createElement(k.a,{key:a,style:{data:{stroke:t}},data:r})}))))},R=function(e){var a=e.data;Object(S.a)(e,["data"]);return n.a.createElement("div",null,n.a.createElement(T,{data:a}),n.a.createElement("div",{className:"pt-8"},n.a.createElement(B,{data:a})))},A=function(){var e=Object(r.useState)("AllTime"),a=Object(l.a)(e,2),t=a[0],o=a[1],c="AllTime"===t?j:O[t],m=Object.entries(O).sort((function(e,a){return e[1].shortName>a[1].shortName?1:-1})),d=i()([{label:"All Time Scores",value:"AllTime"}],m.map((function(e){var a=Object(l.a)(e,2),t=a[0];return{label:a[1].longName,value:t}}))),b={option:function(e){return Object(s.a)(Object(s.a)({},e),{},{cursor:"pointer",color:"#1a202c",backgroundColor:null,":hover":Object(s.a)(Object(s.a)({},e[":hover"]),{},{backgroundColor:"#cbd5e0"})})},control:function(e){return Object(s.a)(Object(s.a)({},e),{},{cursor:"pointer"})}},p=function(e){var a=e.children;return n.a.createElement("span",{className:"text-red-500"},a)};return n.a.createElement("div",{className:"align-center bg-gray-100 text-gray-900 min-h-100vh flex flex-col items-center"},n.a.createElement("div",{className:"w-10/12 max-w-3xl mx-auto flex flex-col"},n.a.createElement("header",{className:"w-full font-bold mb-8 pt-4"},n.a.createElement("h1",{className:"text-4xl float-left"},"Euchre Stats",n.a.createElement("span",{className:"text-xl ml-2"},"\u2660 ",n.a.createElement(p,null,"\u2665")," \u2666 ",n.a.createElement(p,null,"\u2663")))),n.a.createElement(u.a,{options:d,defaultValue:d[0],className:"float-left w-64 mb-8",onChange:function(e){var a=e.value;return o(a)},styles:b}),"AllTime"===t?n.a.createElement(w,{data:c}):n.a.createElement(R,{data:c.playerData})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[180,1,2]]]);
//# sourceMappingURL=main.358f30e2.chunk.js.map