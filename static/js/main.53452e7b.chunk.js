(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,,function(e,a,t){},,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/video-1.229f5279.mp4"},function(e,a,t){e.exports=t.p+"static/media/img-9.523a89f6.jpg"},function(e,a,t){e.exports=t.p+"static/media/img-10.4143d240.jpg"},function(e,a,t){e.exports=t.p+"static/media/img-3.65b53910.jpg"},function(e,a,t){e.exports=t.p+"static/media/img-4.0ec923fc.jpg"},function(e,a,t){e.exports=t.p+"static/media/img-8.d211c298.jpg"},function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(16),r=t.n(c),s=(t(29),t(1)),i=t(2),m=t(13),o=(t(30),["btn--primary","btn--outline","btn--test"]),u=["btn--medium","btn--large"];function E(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,i=o.includes(c)?c:o[0],m=u.includes(r)?r:u[0];return l.a.createElement(s.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(i," ").concat(m),onClick:n,type:t},a))}t(36);function b(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),i=Object(m.a)(r,2),o=i[0],u=i[1],b=function(){return c(!1)},d=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(n.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),l.a.createElement("div",{className:"navbar"},l.a.createElement("nav",{className:"navbar-nav"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(s.b,{to:"/",className:"navbar-logo",onClick:b},"Mark.B ",l.a.createElement("i",{className:"fab fa-typo3"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/",className:"nav-links",onClick:b},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/services",className:"nav-links",onClick:b},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/products",className:"nav-links",onClick:b},"Products")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/sign-up",className:"nav-links-mobile",onClick:b},"Sign Up"))),o&&l.a.createElement(E,{buttonStyle:"btn--outline"},"Sign Up"))))}t(8),t(37);var d=t(18),p=t.n(d);function f(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:"muted",src:p.a,type:"video/mp4"}),l.a.createElement("h1",null,"ADVENTURE AWAITS"),l.a.createElement("p",null,"What are you waiting for?"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(E,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"GET STARTED"),l.a.createElement(E,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large"},"WATCH TRAILER ",l.a.createElement("i",{className:"far fa-play-circle"}))))}function v(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(s.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))}t(38);var N=t(19),g=t.n(N),h=t(20),k=t.n(h),_=t(21),S=t.n(_),y=t(22),w=t.n(y),x=t(23),C=t.n(x);function A(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Check out these EPIC Destinations!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(v,{src:g.a,text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),l.a.createElement(v,{src:k.a,text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(v,{src:S.a,text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),l.a.createElement(v,{src:w.a,text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),l.a.createElement(v,{src:C.a,text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})))))}t(39);function T(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join the Adventure newsletter to receive our best vacation deals"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(E,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(s.b,{to:"/sign-up"},"How it works"),l.a.createElement(s.b,{to:"/"},"Testimonials"),l.a.createElement(s.b,{to:"/"},"Careers"),l.a.createElement(s.b,{to:"/"},"Investors"),l.a.createElement(s.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(s.b,{to:"/"},"Contact"),l.a.createElement(s.b,{to:"/"},"Support"),l.a.createElement(s.b,{to:"/"},"Destinations"),l.a.createElement(s.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(s.b,{to:"/"},"Submit Video"),l.a.createElement(s.b,{to:"/"},"Ambassadors"),l.a.createElement(s.b,{to:"/"},"Agency"),l.a.createElement(s.b,{to:"/"},"Influencer")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(s.b,{to:"/"},"Instagram"),l.a.createElement(s.b,{to:"/"},"Facebook"),l.a.createElement(s.b,{to:"/"},"Youtube"),l.a.createElement(s.b,{to:"/"},"Twitter")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(s.b,{to:"/",className:"social-logo"},"Mark.B",l.a.createElement("i",{className:"fab fa-typo3"}))),l.a.createElement("small",{className:"website-rights"},"Mark.B \xa9 2021"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(s.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement(s.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement(s.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{className:"fab fa-youtube"})),l.a.createElement(s.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement(s.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{className:"fab fa-linkedin"}))))))}function I(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(A,null),l.a.createElement(T,null))}function j(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"services"},"SERVICES"),l.a.createElement(T,null))}function R(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"products"},"PRODUCTS"),l.a.createElement(T,null))}function U(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE"),l.a.createElement(T,null))}function B(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(b,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(I,null)),l.a.createElement(i.a,{exact:!0,path:"/adventure-site/"},l.a.createElement(I,null)),l.a.createElement(i.a,{exact:!0,path:"/services"},l.a.createElement(j,null)),l.a.createElement(i.a,{exact:!0,path:"/products"},l.a.createElement(R,null)),l.a.createElement(i.a,{exact:!0,path:"/sign-up"},l.a.createElement(U,null)))))}r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.53452e7b.chunk.js.map