(this["webpackJsonpnomad-react-app"]=this["webpackJsonpnomad-react-app"]||[]).push([[0],{36:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(28),r=a.n(c),i=a(8),o=a(2),l=(a(36),a(1));var d=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},j=a(11),m=a(12),u=a(14),b=a(13),p=(a(38),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location.state;return void 0===e?null:Object(l.jsx)("div",{className:"detail__container",children:Object(l.jsx)("div",{className:"detail__background__image",style:{backgroundImage:"url("+e.backposter+")",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(l.jsxs)("div",{className:"detail__contents",children:[Object(l.jsxs)("span",{children:[e.title,", ",e.year]}),Object(l.jsx)("span",{children:e.summary})]})})})}}]),a}(s.a.Component)),h=a(17),v=a.n(h),O=a(29),x=a(30),g=a.n(x);a(58);var _=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,c=e.poster,r=e.backposter,o=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:c,backposter:r,genres:o}},children:[Object(l.jsx)("img",{src:c,alt:n,title:n}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:n}),Object(l.jsx)("h5",{className:"movie__year",children:a}),Object(l.jsx)("ul",{className:"movie__genres",children:o.map((function(e,t){return Object(l.jsxs)("li",{className:"genres__genre",children:[" ",e," "]},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[s.slice(0,180)," ..."]})]})]})})},f=(a(67),"https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"),y=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(O.a)(v.a.mark((function t(){var a,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get(f);case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:a.map((function(e){return Object(l.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,backposter:e.large_cover_image,genres:e.genres},e.id)}))})})}}]),a}(s.a.Component);a(68);var k=function(e){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/about",children:"About"})]})};a(69);var N=function(e){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(l.jsx)(o.a,{path:"/about",exact:!0,component:d}),Object(l.jsx)(o.a,{path:"/movie/:id",component:p})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.bc091470.chunk.js.map