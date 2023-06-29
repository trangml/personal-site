(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(1523),r=n(6842),s=n(7892),a=n.n(s),o=n(184),u=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Multi-Task Reinforcement Learning: Single-Agent to Multi-Agent Systems",subtitle:"M.S. Thesis at Virginia Tech",link:"https://vtechworks.lib.vt.edu/handle/10919/113085",image:"/images/projects/multi-task_drones.png",date:"2021-10-05",desc:"Thesis work on multi-task reinforcement learning. Used novel multi-task incremental learning algorithmIL-SOAR (Incremental Learning with Second-Order Approximation Regularization) to mitigate some of the effects of catastrophic forgetting."},{title:"DARPA Gamebreaker",subtitle:"Heron Systems Gamebreaker AI Exploration Program breaks the game",link:"https://www.youtube.com/watch?v=tt5nxCi423U",image:"/images/projects/heron_starcraft.gif",date:"2021-10-05",desc:"Used machine learning to quantitatively assess game balance in Starcraft II to identify parameters which control balance. Developed and analyzed massive datasets for machine learning using SC2, and programmed an interactive dashboard. Trained a model with accurately predicted the win probabilities using only army compositions. "},{title:"DARPA ADT",subtitle:"Heron Systems AI Fighter Jet Agent destroys the competition",link:"https://www.youtube.com/watch?v=IIdE5XFTA88",image:"/images/projects/heron_adt.jpg",date:"2020-06-26",desc:"Developed AI fighter jet technology that beat out other competitors and an elite Air Force pilot. Contributed novel agents and reward schemes for training our agent in a RL league. Winner of the DARPA ADT competition. "},{title:"The Clicker Band",subtitle:"An Assistive Device made to help a wheelchair-bound student. 1st Place, SourceAmerica Competiton",link:"https://www.youtube.com/watch?v=O4sNfvVjaj8&t=3s",image:"/images/projects/winners_source.jpg",date:"2019-06-26",desc:"Developed a wearable assistive technology device which allowed helped a student with disability use his computer. Winner of the SourceAmerica Design Challenge with ~$5000 in prize money. "}],h=function(){return(0,o.jsx)(r.Z,{title:"Projects",description:"Learn about Matthew Trang's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"Some of the projects that I've worked on"})]})}),c.map((function(t){return(0,o.jsx)(u,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",l="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},v={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+p(i,2,"0")+":"+p(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:o,D:d,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",y={};y[w]=$;var M=function(t){return t instanceof j},D=function t(e,n,i){var r;if(!e)return w;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(r=s),n&&(y[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,r=o}return!i&&r&&(w=r),r||!i&&w},S=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new j(n)},b=v;b.l=D,b.i=M,b.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function $(t){this.$L=D(t.locale,null,!0),this.parse(t)}var p=$.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return b},p.isValid=function(){return!(this.$d.toString()===f)},p.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return S(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<S(t)},p.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,i=!!b.u(e)||e,h=b.p(t),f=function(t,e){var r=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,$=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case l:return i?f(1,0):f(31,11);case c:return i?f(1,$):f(0,$+1);case u:var w=this.$locale().weekStart||0,y=(g<w?g+7:g)-w;return f(i?p-y:p+(6-y),$);case o:case d:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case r:return m(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=b.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[d]=h+"Date",n[c]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var g=this.clone().set(d,1);g.$d[f](m),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[b.p(t)]()},p.add=function(i,h){var d,f=this;i=Number(i);var m=b.p(h),g=function(t){var e=S(f);return b.w(e.date(e.date()+Math.round(t*i)),f)};if(m===c)return this.set(c,this.$M+i);if(m===l)return this.set(l,this.$y+i);if(m===o)return g(1);if(m===u)return g(7);var $=(d={},d[s]=e,d[a]=n,d[r]=t,d)[m]||1,p=this.$d.getTime()+i*$;return b.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=b.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},l=function(t){return b.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:b.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:b.s(s,2,"0"),h:l(1),hh:l(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:r};return i.replace(g,(function(t,e){return e||m[t]||r.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,d,f){var m,g=b.p(d),$=S(i),p=($.utcOffset()-this.utcOffset())*e,v=this-$,w=b.m(this,$);return w=(m={},m[l]=w/12,m[c]=w,m[h]=w/3,m[u]=(v-p)/6048e5,m[o]=(v-p)/864e5,m[a]=v/n,m[s]=v/e,m[r]=v/t,m)[g]||v,f?w:b.a(w)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return y[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=D(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return b.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},$}(),k=j.prototype;return S.prototype=k,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",c],["$y",l],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,j,S),t.$i=!0),S},S.locale=D,S.isDayjs=M,S.unix=function(t){return S(1e3*t)},S.en=y[w],S.Ls=y,S.p={},S}()}}]);
//# sourceMappingURL=161.0d255130.chunk.js.map