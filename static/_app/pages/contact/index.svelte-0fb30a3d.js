import{S as e,i as s,s as a,k as t,e as l,t as n,V as c,d as i,n as o,c as r,a as d,g as m,b as f,f as u,H as h,D as v,Z as p,E,J as g,U as w,X as y,Y as b,_ as F,$ as A,Q as x}from"../../chunks/vendor-cb2cc937.js";function T(e){let s,a,F,A,T,I,L,N,O,S,j,B,D,P,M,U,V,_,k,H,R,X,Y,C,G,J,Z,q,K,Q;return{c(){s=t(),a=l("section"),F=l("h1"),A=n("Get in touch"),T=t(),I=l("form"),L=l("div"),N=l("label"),O=n("Name"),S=t(),j=l("input"),B=t(),D=l("div"),P=l("label"),M=n("Email"),U=t(),V=l("input"),_=t(),k=l("div"),H=l("label"),R=n("Message"),X=t(),Y=l("textarea"),C=t(),G=l("input"),this.h()},l(e){c('[data-svelte="svelte-sjfq5j"]',document.head).forEach(i),s=o(e),a=r(e,"SECTION",{class:!0});var t=d(a);F=r(t,"H1",{class:!0});var l=d(F);A=m(l,"Get in touch"),l.forEach(i),T=o(t),I=r(t,"FORM",{method:!0,class:!0});var n=d(I);L=r(n,"DIV",{class:!0});var f=d(L);N=r(f,"LABEL",{for:!0,class:!0});var u=d(N);O=m(u,"Name"),u.forEach(i),S=o(f),j=r(f,"INPUT",{type:!0,id:!0,name:!0,class:!0}),f.forEach(i),B=o(n),D=r(n,"DIV",{class:!0});var h=d(D);P=r(h,"LABEL",{for:!0,class:!0});var v=d(P);M=m(v,"Email"),v.forEach(i),U=o(h),V=r(h,"INPUT",{type:!0,id:!0,name:!0,class:!0}),h.forEach(i),_=o(n),k=r(n,"DIV",{class:!0});var p=d(k);H=r(p,"LABEL",{for:!0,class:!0});var E=d(H);R=m(E,"Message"),E.forEach(i),X=o(p),Y=r(p,"TEXTAREA",{type:!0,id:!0,name:!0,class:!0}),d(Y).forEach(i),p.forEach(i),C=o(n),G=r(n,"INPUT",{class:!0,type:!0,value:!0}),n.forEach(i),t.forEach(i),this.h()},h(){document.title="Eli Bates - About",f(F,"class","svelte-1lsdnw3"),f(N,"for","nameField"),f(N,"class","svelte-1lsdnw3"),f(j,"type","text"),f(j,"id","nameField"),f(j,"name","nameField"),f(j,"class","svelte-1lsdnw3"),f(L,"class","form-field svelte-1lsdnw3"),f(P,"for","emailField"),f(P,"class","svelte-1lsdnw3"),f(V,"type","text"),f(V,"id","emailField"),f(V,"name","emailField"),f(V,"class","svelte-1lsdnw3"),f(D,"class","form-field svelte-1lsdnw3"),f(H,"for","messageField"),f(H,"class","svelte-1lsdnw3"),f(Y,"type","text"),f(Y,"id","messageField"),f(Y,"name","messageField"),f(Y,"class","svelte-1lsdnw3"),f(k,"class","form-field svelte-1lsdnw3"),f(G,"class","g-recaptcha svelte-1lsdnw3"),f(G,"type","submit"),G.value="Submit",f(I,"method","post"),f(I,"class","contact-form svelte-1lsdnw3"),f(a,"class","page main svelte-1lsdnw3")},m(t,l){u(t,s,l),u(t,a,l),h(a,F),h(F,A),h(a,T),h(a,I),h(I,L),h(L,N),h(N,O),h(L,S),h(L,j),h(I,B),h(I,D),h(D,P),h(P,M),h(D,U),h(D,V),h(I,_),h(I,k),h(k,H),h(H,R),h(k,X),h(k,Y),h(I,C),h(I,G),e[2](I),q=!0,K||(Q=v(I,"submit",p(e[1])),K=!0)},p:E,i(e){q||(g((()=>{Z&&Z.end(1),J||(J=y(a,x,{duration:2e3})),J.start()})),q=!0)},o(e){J&&J.invalidate(),Z=w(a,b,{duration:0}),q=!1},d(t){t&&i(s),t&&i(a),e[2](null),t&&Z&&Z.end(),K=!1,Q()}}}function I(e,s,a){var t=this&&this.__awaiter||function(e,s,a,t){return new(a||(a=Promise))((function(l,n){function c(e){try{o(t.next(e))}catch(s){n(s)}}function i(e){try{o(t.throw(e))}catch(s){n(s)}}function o(e){var s;e.done?l(e.value):(s=e.value,s instanceof a?s:new a((function(e){e(s)}))).then(c,i)}o((t=t.apply(e,s||[])).next())}))};let l;return[l,function(e){F.load("6LcOXScbAAAAAETO2r_-0Z8bFyY4kBIH9KRr942M").then((s=>{s.execute("submit").then((s=>{console.log(e),console.log(s);const a=new FormData(l);!function(e){t(this,void 0,void 0,(function*(){const s=yield fetch("https://elibates.com:5000/contact",{method:"POST",headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify(e)});(yield s.json()).success&&(console.log("reset form"),alert("Your message has been sent!"),l.reset())}))}({name:a.get("nameField")+"",email:a.get("emailField")+"",message:a.get("messageField")+"",captcha:s})}))}))},function(e){A[e?"unshift":"push"]((()=>{l=e,a(0,l)}))}]}export default class extends e{constructor(e){super(),s(this,e,I,T,a,{})}}
