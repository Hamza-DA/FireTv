(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var l=a(40),n=a.n(l),r=a(1),c=a.n(r),o=a(8),s=(a(52),a(53),a(55),a(57),a(4));var i=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],n=Object(r.useState)(""),i=Object(s.a)(n,2),m=i[0],u=i[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"fixed top-12 left-8 -translate-y-1/2  z-50 flex items-center text-white font-semibold text-2xl"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-6 h-6 fill-white mt-[2px]"},c.a.createElement("path",{d:"M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z",clipRule:"evenodd"})),"tv"),c.a.createElement("nav",{className:"w-fit bg-gray-800 backdrop-blur-2xl bg-opacity-50 rounded-full fixed top-12 right-8 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 z-50 "},c.a.createElement("ul",{className:"flex items-center justify-around"},c.a.createElement("ul",{className:"hidden md:flex"},c.a.createElement("li",{className:"flex items-center align-middle justify-center "},c.a.createElement(o.c,{to:"/movie",end:!0,className:function(e){return e.isActive?"duration-100 px-6 py-2 text-gray-800 bg-white rounded-full text-lg font-semibold scale-110 shadow-md":"duration-100 px-6 py-2 text-white text-sm font-semibold rounded-full"}},"Movies")),c.a.createElement("li",{className:"flex items-center align-middle justify-center "},c.a.createElement(o.c,{to:"/tv",end:!0,className:function(e){return e.isActive?"duration-100 px-6 py-2 text-gray-800 bg-white rounded-full text-lg font-semibold scale-110 shadow-md":"duration-100 px-6 py-2 text-white text-sm font-semibold rounded-full"}},"Tv Shows")),c.a.createElement("li",{className:"flex items-center align-middle justify-center px-6 py-2 text-white text-sm font-semibold"},"Favourites")),c.a.createElement("li",{onMouseOver:function(){return l(!0)},onMouseLeave:function(){return l(!1)},className:"flex align-middle justify-center  px-6 py-2 text-white text-sm font-semibold"},c.a.createElement("input",{onChange:function(e){u(e.target.value)},value:m,type:"text",className:"".concat(a||""!==m?"w-full md:w-[12rem]":"w-full md:w-0"," duration-150 ease-in-out block bg-transparent outline-none text-white"),placeholder:"Search..."}),c.a.createElement(o.b,{to:"/search?q=".concat(m)},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,className:"w-6 h-6 stroke-white"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})))))),c.a.createElement("ul",{className:"md:hidden md:p-0 flex justify-between md:justify-center items-center bg-gray-800 backdrop-blur-2xl bg-opacity-50 rounded-full fixed bottom-12 left-1/2 translate-y-1/2 -translate-x-1/2 z-50\r w-[80%] md:w-auto "},c.a.createElement("li",{className:"flex align-middle justify-center "},c.a.createElement(o.c,{to:"/movie",end:!0,className:function(e){return e.isActive?"duration-100 px-4 py-1 text-gray-800 bg-white rounded-full text-lg font-semibold scale-110 shadow-md":"duration-100 px-4 py-1 text-white text-sm font-semibold rounded-full"}},"Movies")),c.a.createElement("li",{className:"flex align-middle justify-center "},c.a.createElement(o.c,{to:"/tv",end:!0,className:function(e){return e.isActive?"duration-100 px-4 py-1 text-gray-800 bg-white rounded-full text-lg font-semibold scale-110 shadow-md":"duration-100 px-4 py-1 text-white text-sm font-semibold rounded-full"}},"Tv Shows")),c.a.createElement("li",{className:"px-4 flex align-middle justify-center text-white text-sm font-semibold"},"Favourites")))},m=a(0),u=a(9);var d=function(e){var t=e.media;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"relative h-[100vh]"},c.a.createElement("div",{className:"relative h-[100vh]"},c.a.createElement("div",{className:"bg-gradient-to-t from-black to-transparent absolute w-full h-full "}),c.a.createElement("img",{src:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path),className:"block w-full h-full object-cover"})),c.a.createElement("div",{className:"absolute top-[35%] -translate-y-1/2 text-center"},c.a.createElement("div",{className:"flex-col w-auto z-20 px-8"},c.a.createElement("h1",{className:"max-w-[12ch] md:max-w-full text-white text-left font-Display mb-3 text-3xl sm:text-5xl font-medium leading-none w-full"},t.title),c.a.createElement("div",{className:"flex items-center mb-1 text-sm gap-2"},c.a.createElement("span",{className:"flex items-center mr-3 text-gray-200 uppercase"},t.release_date),c.a.createElement("span",{className:"flex items-center mr-3 text-gray-200 uppercase"},t.runtime),c.a.createElement("span",{className:"flex items-center mr-3 text-gray-200"},t.original_language)),c.a.createElement("p",{className:"text-gray-300 md:max-w-[80ch]  text-left leading-relaxed md:text-sm text-xs tracking-wide font-normal"},t.overview)))))};a(63);var f=function(e){var t=e.type,a=(e.source,e.title),l=e.SelectedSeason,n=e.SelectedEpisode,o=Object(r.useState)([]),i=Object(s.a)(o,2),m=i[0],d=i[1];return Object(r.useEffect)(function(){window.scrollTo(0,0),"movie"===t&&""!==a?u.a.get("https://mediacentr.herokuapp.com/movie/".concat(a.replaceAll(" ","-"))).then(function(e){d(e.data)}).catch(function(e){return console.log(e)}):"tv"===t&&null!==n&&null!==l&&u.a.get("https://mediacentr.herokuapp.com/tv/".concat(a.replaceAll(" ","-"),"-").concat(l,"x").concat(n)).then(function(e){d(e.data),console.log(e.data)}).catch(function(e){return console.log(e)})},[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"z-10 relative ".concat("tv"===t?"mt-16":"-mt-[40vh]")},c.a.createElement("h2",{className:"pl-8 font-semibold text-white text-3xl"},"Watch"),c.a.createElement("iframe",{allowfullscreen:"",src:m.iframeSrc,className:"px-8 w-full aspect-video h-auto",frameBorder:"0",allow:"autoplay"})))},p=a(18),h=a.n(p);var x=function(e){var t=e.episodes,a=e.selectEpisode,l=e.selectedEpisode;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"grid grid-cols-4 md:grid-cols-6 gap-4 w-full"},t.map(function(e,t){return c.a.createElement("button",{onClick:function(){a(t)},key:t,className:"shadow-xl ".concat(l===t+1?"bg-green-700":"bg-gray-700","  px-2 py-3 relative  w-full h-auto  backdrop-blur-2xl bg-opacity-50 rounded-xl")},c.a.createElement("h3",{className:"text-white text-base flex items-center"},c.a.createElement("span",{className:"hidden md:block"},"Episode")," ",t+1))})))};var v=function(){var e="1925562cef1131735cd1028a38b06f84",t=(Object(m.k)(),Object(m.p)()),a=t.id,l=t.type,n=Object(r.useState)([]),o=Object(s.a)(n,2),i=o[0],p=o[1],h=Object(r.useState)(""),v=Object(s.a)(h,2),g=v[0],b=v[1],w=Object(r.useState)([]),E=Object(s.a)(w,2),y=E[0],N=E[1],k=Object(r.useState)(null),j=Object(s.a)(k,2),S=j[0],O=j[1],T=Object(r.useState)(null),F=Object(s.a)(T,2),z=F[0],L=F[1];return Object(r.useEffect)(function(){u.a.get("https://api.themoviedb.org/3/".concat(l,"/").concat(a,"?api_key=").concat(e,"&language=en-US")).then(function(e){b(e.data.title||e.data.name),p(e.data)}).catch(function(e){return console.log(e)})},[y,S,z]),c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{media:i}),"tv"===l&&c.a.createElement("div",{className:"-mt-[40vh] z-10 relative px-8 flex flex-col md:flex-row gap-16"},c.a.createElement("div",{className:"flex flex-col"},c.a.createElement("h2",{className:" font-semibold mb-4 text-white text-3xl"},"Seasons"),i&&function(t){for(var l=[],n=0;n<t;n++)l.push(n);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"relative grid md:grid-cols-2 grid-cols-4  gap-4 md:w-60  overflow-y-auto"},l.map(function(t,l){return c.a.createElement("button",{key:l,onClick:function(){return function(t){O(t+1),u.a.get("https://api.themoviedb.org/3/tv/".concat(a,"/season/").concat(t+1,"?api_key=").concat(e,"&language=en-US")).then(function(e){return N(e.data.episodes)}).catch(function(e){return console.log(e)})}(l)},className:"w-auto shadow-xl flex gap-2 pl-3 py-3 bg-gray-800 backdrop-blur-2xl bg-opacity-50 rounded-xl"},c.a.createElement("h3",{className:"text-white text-base flex items-center"},c.a.createElement("span",{className:"hidden md:block"},"Season")," ",t+1))})))}(i.number_of_seasons)),c.a.createElement("div",{className:"w-full"},c.a.createElement("h2",{className:" font-semibold mb-4 text-white text-3xl"},"Episodes"),c.a.createElement(x,{selectedEpisode:z,selectEpisode:function(e){L(e+1)},episodes:y}))),g&&c.a.createElement(f,{type:l,title:g,SelectedEpisode:z,SelectedSeason:S}))};var g=function(e){var t=e.movie,a=e.index,l=e.type;return c.a.createElement(o.b,{key:a,to:"/".concat(l,"/").concat(t.id)},c.a.createElement("div",{className:"gap-4 overflow-hidden w-full px-2 md:w-48 h-auto flex-shrink-0 relative duration-100 shadow-md"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:"Props.title",className:"rounded-2xl mb-2 object-cover w-full h-48 md:h-60 border-gray-200 border-opacity-20 border-[0.5px] border-solid"}),c.a.createElement("h2",{className:"font-[inter] ml-1 text-left text-base font-bold text-white"},t.title||t.name)))};var b=function(){var e=function(){var e=Object(m.k)().search;return c.a.useMemo(function(){return new URLSearchParams(e)},[e])}().get("q"),t=Object(r.useState)([]),a=Object(s.a)(t,2),l=a[0],n=a[1];return Object(r.useEffect)(function(){u.a.get("https://api.themoviedb.org/3/search/multi?api_key=".concat("1925562cef1131735cd1028a38b06f84","&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then(function(e){n(e.data)}).catch(function(e){return console.log(e)})},[e]),c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"pt-16"},c.a.createElement("h2",{className:"pl-8 font-semibold m-4 text-white text-3xl"},"Result for : ".concat(e)),c.a.createElement("div",{className:"px-8 flex flex-row gap-2 flex-wrap justify-evenly items-start"},l.results&&l.results.map(function(e,t){return c.a.createElement(g,{type:e.media_type,movie:e,key:t})}))))};var w=function(e){var t=e.Title,a=e.data,l=e.ref1,n=e.ref2,r=e.type,o={className:"px-4 md:p-0",dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,slidesToShow:6,slidesToScroll:1,nextArrow:c.a.createElement(function(e){var t=e.onClick;return c.a.createElement("div",{className:"hidden md:flex z-10 bg-gradient-to-l from-black to-transparent w-40 h-full absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center",onClick:t},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,className:"w-10 h-10 stroke-white"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})))},null),prevArrow:c.a.createElement(function(e){var t=e.onClick;return c.a.createElement("div",{className:"hidden md:flex z-10 bg-gradient-to-r from-black to-transparent w-40 h-full absolute left-0 top-1/2 -translate-y-1/2  items-center justify-center",onClick:t},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,className:"w-10 h-10 stroke-white"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})))},null),pauseOnHover:!0,swipeToSlide:!0,responsive:[{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mt-20 z-10 relative"},c.a.createElement("h2",{className:"pl-8 font-semibold m-4 text-white text-3xl"},t),c.a.createElement(h.a,Object.assign({ref:n,asNavFor:l},o),a&&a.map(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{type:r,key:t,movie:e}))}))))};var E=a(33);var y=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),a=t[0],l=t[1],n=Object(r.useState)(),o=Object(s.a)(n,2),i=o[0],f=o[1],p={className:"px-4",dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:1e4,slidesToShow:6,slidesToScroll:1,nextArrow:c.a.createElement(function(e){var t=e.onClick;return c.a.createElement("div",{className:" hidden md:flex z-10 w-40 h-full absolute right-0 top-1/2 -translate-y-1/2  items-center justify-center",onClick:t},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,className:"w-10 h-10 stroke-white"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})))},null),prevArrow:c.a.createElement(function(e){var t=e.onClick;return c.a.createElement("div",{className:"hidden md:flex z-10 w-40 h-full absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center",onClick:t},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,className:"w-10 h-10 stroke-white"},c.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})))},null),pauseOnHover:!0,swipeToSlide:!0,responsive:[{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]},x=Object(m.p)().type,v="1925562cef1131735cd1028a38b06f84",b=Object(r.useState)([]),y=Object(s.a)(b,2),N=y[0],k=y[1],j=Object(r.useState)([]),S=Object(s.a)(j,2),O=S[0],T=S[1];Object(r.useEffect)(function(){F()},[x]);var F=function(){var e=u.a.get("https://api.themoviedb.org/3/".concat(x,"/popular?api_key=").concat(v,"&language=en-US")),t=u.a.get("https://api.themoviedb.org/3/trending/".concat(x,"/week?api_key=").concat(v));u.a.all([e,t]).then(u.a.spread(function(e,t){T(Object(E.a)({},e.data,{type:x})),k(Object(E.a)({},t.data,{type:x}))})).catch(function(e){console.log(e)})};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"carouselExampleCaptions",class:"h-[100vh] -mb-[40vh] overflow-hidden carousel slide carousel-fade relative","data-bs-ride":"carousel"},c.a.createElement(h.a,Object.assign({ref:function(e){return l(e)},asNavFor:i},{dots:!1,infinite:!0,autoplay:!0,fade:!0,swipeToSlide:!1,autoplaySpeed:1e4,slidesToShow:1,slidesToScroll:1,pauseOnHover:!1}),O.results&&O.results.map(function(e,t){return c.a.createElement("div",{key:t,class:"relative w-full h-full"},c.a.createElement(d,{media:e})," ")}))),c.a.createElement("div",{className:" z-10 relative"},c.a.createElement("h2",{className:"pl-8 font-semibold m-4 text-white text-3xl"},"Popular"),c.a.createElement(h.a,Object.assign({ref:function(e){return f(e)},asNavFor:a},p),O.results&&O.results.map(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{type:x,key:t,movie:e}))}))),c.a.createElement(w,{Title:"Trending",data:N.results,type:x}))};var N=function(){var e=Object(m.k)().pathname;return console.log(e),c.a.createElement("div",{className:"bg-black"},c.a.createElement(i,null),c.a.createElement(m.d,null,c.a.createElement(m.b,{path:"",element:c.a.createElement(m.a,{to:"/movie",replace:!0})}),c.a.createElement(m.b,{path:"/:type",exact:!0,element:c.a.createElement(y,null)}),c.a.createElement(m.b,{path:"/:type/:id",element:c.a.createElement(v,null)}),c.a.createElement(m.b,{path:"/search",element:c.a.createElement(b,null)})))};n.a.createRoot(document.getElementById("root")).render(c.a.createElement(o.a,null,c.a.createElement(N,null)))},44:function(e,t,a){e.exports=a(100)},57:function(e,t,a){}},[[44,2,1]]]);
//# sourceMappingURL=main.cb7a2803.chunk.js.map