(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{6842:function(e,l,a){Promise.resolve().then(a.bind(a,4872))},4872:function(e,l,a){"use strict";a.d(l,{default:function(){return I}});var s,r,n=a(7437),t=a(2265),o=a(6463),i=a(8726),c=a(7269),d=a(126);let u=async()=>(0,c.WY)("GET","/challs"),x=e=>{let{challId:l,limit:a,offset:s}=e;return(0,c.WY)("GET","/challs/".concat(encodeURIComponent(l),"/solves"),{limit:a,offset:s})},f=async(e,l)=>{if(void 0===l||0===l.length)return Promise.resolve({error:"Flag can't be empty"});let a=await(0,c.WY)("POST","/challs/".concat(encodeURIComponent(e),"/submit"),{flag:l});return(0,c._y)({resp:a,valid:["goodFlag"]})};var m=a(8729),h=a(5758),p=a(2098),g=a(458),b=a(1426),j={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function v(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function w(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N(e,l){var a,s,r,n,t,o=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,i=[],c="",d=l||{},u=0;function x(e){var l=j[e[1]||""],a=i[i.length-1]==e;return l?l[1]?(a?i.pop():i.push(e),l[0|a]):l[0]:e}function f(){for(var e="";i.length;)e+=x(i[i.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,l,a){return d[l.toLowerCase()]=a,""}).replace(/^\n+|\n+$/g,"");r=o.exec(e);)s=e.substring(u,r.index),u=o.lastIndex,a=r[0],s.match(/[^\\](\\\\)*\\$/)||((t=r[3]||r[4])?a='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+v(w(t).replace(/^\n+|\n+$/g,""))+"</code></pre>":(t=r[6])?(t.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),n=N(v(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==t?t="blockquote":(t=t.match(/\./)?"ol":"ul",n=n.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),a="<"+t+">"+n+"</"+t+">"):r[8]?a='<img src="'+w(r[8])+'" alt="'+w(r[7])+'">':r[10]?(c=c.replace("<a>",'<a href="'+w(r[11]||d[s.toLowerCase()])+'">'),a=f()+"</a>"):r[9]?a="<a>":r[12]||r[14]?a="<"+(t="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+N(r[12]||r[15],d)+"</"+t+">":r[16]?a="<code>"+w(r[16])+"</code>":(r[17]||r[1])&&(a=x(r[17]||"--"))),c+=s+a;return(c+e.substring(u)+f()).replace(/^\n+|\n+$/g,"")}let y=e=>e.split(/(?:\r?\n){2,}/).map(e=>[" ","	","#","-","*"].some(l=>e.startsWith(l))?N(e):"<p>".concat(N(e),"</p>")).join("\n\n");function S(e){let{content:l}=e;return(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:y(l)}})}var C=a(9320);function k(e){let{solves:l,userId:a}=e;return(0,n.jsxs)("div",{className:"overflow-auto custom-scrollbar",children:[(0,n.jsx)("div",{className:"sticky top-0 bg-surface-panel border-b-2 border-dashed mb-2 px-4 py-1",children:(0,n.jsxs)("div",{className:"flex flex-row w-full",children:[(0,n.jsx)("span",{className:"w-[8ch] shrink-0",children:(0,n.jsx)("strong",{children:"#"})}),(0,n.jsx)("span",{className:"min-w-0 flex-auto",children:(0,n.jsx)("strong",{children:"Team"})}),(0,n.jsx)("span",{className:"w-1/4 shrink-0",children:(0,n.jsx)("strong",{children:"Solve time"})})]})}),(0,n.jsx)("div",{className:"flex flex-col break-words",children:l.map((e,l)=>{let s=a&&e.userId===a;return(0,n.jsxs)(m.r,{href:"/profile?id=".concat(e.userId),onClick:()=>(0,b.N)("none"),className:"flex flex-row w-full px-4 ".concat(s?"bg-button-normal hover:bg-button-normalhover text-white":"hover:bg-surface-panelalt hover:text-surface-textalt"),children:[(0,n.jsx)("span",{className:"w-[8ch] shrink-0",children:l+1}),(0,n.jsx)("span",{className:"min-w-0 flex-auto",children:e.userName}),(0,n.jsx)("span",{className:"w-1/4 shrink-0",children:h.SY(e.createdAt)})]},e.id)})})]})}function E(e){let{challenge:l,closeChallengeDialog:a,attemptRefresh:s,solved:r,userId:o}=e,[i,c]=(0,t.useState)(null),[d,u]=(0,t.useState)(null),[m,h]=(0,t.useState)(null),[b,j]=(0,t.useState)(!0),[v,w]=(0,t.useState)(""),[N,y]=(0,t.useState)(r),E=l.files.length>0;(0,t.useEffect)(()=>{(async()=>{try{let e=await x({challId:l.id,limit:3e3,offset:0});e.error&&c(e.error),"goodChallengeSolves"===e.kind&&h(e.data.solves)}catch(e){}})()},[l,N]);let _=async e=>{e.preventDefault(),(async()=>{j(!0);let e=await f(l.id,v);j(""===v),e.error?c(e.error):(c(null),y(!0),u("The flag is correct!"),s())})()};return(0,n.jsx)(C.Z,{open:!0,onClose:a,children:(0,n.jsxs)("div",{className:"flex flex-col gap-4 m-4 items-center",children:[(0,n.jsxs)("div",{className:"relative panel flex flex-col gap-4 mx-auto h-fit w-full",children:[(0,n.jsx)("button",{className:"absolute top-4 right-4 text-xl rotate-n hover:scale-125",onClick:a,"aria-label":"Close",children:(0,n.jsx)(g.Eh,{})}),(0,n.jsx)("p",{className:"text-3xl leading-3 py-2 inline-flex font-bold",children:l.name}),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row gap-1 sm:gap-4 sm:items-center",children:[(0,n.jsxs)("div",{className:"flex flex-row gap-3 items-center",children:[(0,n.jsxs)("span",{className:"flex flex-row",children:[(0,n.jsx)("span",{className:"h-3 w-3 bg-surface-text rounded-full"}),(0,n.jsx)("svg",{className:"w-auto h-3",fill:"currentColor",viewBox:"0 0 100 85",children:(0,n.jsx)("polygon",{points:"50 0, 100 85, 0 85"})}),(0,n.jsx)("span",{className:"h-3 w-3 bg-surface-text"})]}),(0,n.jsxs)("span",{className:"inline-flex flex-c align-middle leading-4",children:[(0,n.jsx)("strong",{children:l.points}),"\xa0Passengers"]})]}),(0,n.jsxs)("div",{className:"flex flex-row gap-3 items-center",children:[(0,n.jsx)(g.v6,{height:16,width:16,fill:"currentColor"}),(0,n.jsxs)("span",{className:"inline-flex flex-c align-middle leading-4",children:[l.solves," Solve",1!==l.solves?"s":""]})]})]}),(0,n.jsx)("p",{children:l.author?(0,n.jsxs)("span",{children:["Author: ",l.author]}):null})]}),(0,n.jsx)("p",{children:(0,n.jsx)(S,{content:l.description})}),E?(0,n.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,n.jsx)("p",{className:"font-bold text-xl",children:"Downloads"}),(0,n.jsx)("ul",{className:"flex flex-row flex-wrap gap-2",children:l.files.map((e,l)=>(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:e.url,className:"flex flex-row gap-2 px-2 py-1 bg-surface-panelalt text-surface-textalt hover:!bg-button-normal hover:!text-white !no-underline",download:!0,children:[(0,n.jsx)("span",{className:"inline-block rotate-s",children:(0,n.jsx)(g.Eh,{})}),(0,n.jsx)("span",{children:e.name})]})},l))})]}):null,(0,n.jsxs)("form",{className:"flex flex-col gap-2 mt-4",onSubmit:e=>_(e),children:[(0,n.jsx)("label",{htmlFor:"flagSubmit",className:"text-xl font-semibold",children:"Submit flag"}),(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,n.jsx)("input",{className:"px-2 py-1 bg-surface-main focus-visible:ring-offset-4 focus-visible:ring-offset-surface-panel grow ".concat(i?"border-2 border-red-500":N?"border-2 border-green-500":""),...N?{autoFocus:!1}:{autoFocus:!0},required:!0,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",id:"flagSubmit",...N?{placeholder:"Challenge is solved!"}:{placeholder:"uiuctf{...}"},type:"text",onChange:e=>{w(e.target.value),j(!e.target.value)}}),(0,n.jsx)(p.b,{type:"submit",direction:"hidden",disabled:b,children:"Submit"})]}),i?(0,n.jsx)("span",{className:"text-red-500",children:i}):null,d?(0,n.jsx)("span",{className:"text-green-500",children:d}):null]})]}),m?(0,n.jsxs)("div",{className:"fade-in-up relative z-50 panel-nolinks flex flex-col gap-4 mx-auto h-fit w-full max-w-prose pointer-events-auto",children:[(0,n.jsxs)("p",{className:"text-3xl leading-3 py-2 inline-flex font-bold",children:["Solves (",m.length,")"]}),(0,n.jsx)(k,{solves:m,userId:o})]}):null]})})}let _={pwn:{display_name:"Pwn",color:"red"},rev:{display_name:"Reverse Engineering",color:"orange"},crypto:{display_name:"Cryptography",color:"yellow"},misc:{display_name:"Miscellaneous",color:"green"},web:{display_name:"Web",color:"blue"},forensics:{display_name:"Forensics",color:"purple"},osint:{display_name:"OSINT",color:"purple"}};function T(e){let{category:l,challenges:a,solves:s}=e,r=(0,o.useRouter)(),t={"--color-train-line":"rgb(var(--rgb-trainline-".concat(l.color,"))")},i=(null==s?void 0:s.filter(e=>a.some(l=>l.id===e.id)).length)||0;return(0,n.jsxs)("div",{style:t,className:"w-full panel-nolinks",children:[(0,n.jsx)("h2",{className:"text-3xl py-2 inline-flex font-bold",children:l.display_name}),s?(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:i})," of ",(0,n.jsx)("b",{children:a.length})," stations in service"]}):null,(0,n.jsxs)("div",{className:"flex flex-col ml-3 mt-4",children:[(0,n.jsx)("span",{className:"relative h-0 w-8 border-t-8 border-[var(--color-train-line)] -left-3"}),(0,n.jsx)("ul",{className:"grid grid-cols-1 border-dotted border-[var(--color-train-line)] border-l-8",children:a.map(e=>{let l=null==s?void 0:s.some(l=>l.id===e.id);return(0,n.jsx)("button",{className:"group relative -left-2 text-left",onClick:()=>r.replace("?id=".concat(e.id),{scroll:!1}),children:(0,n.jsxs)("li",{className:"relative border-l-8 ".concat(l?"border-[var(--color-train-line)]":"border-transparent"," px-8 py-4"),children:[l?(0,n.jsx)("span",{className:"absolute h-12 w-12 -left-7 top-1/2 -translate-y-1/2 transition-transform group-hover:scale-125",children:(0,n.jsx)(g.Ux,{})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:"absolute h-8 w-8 -left-5 top-1/2 -translate-y-1/2 transition-transform group-hover:scale-125 bg-surface-main border-surface-text border-[0.4rem] rounded-full"})}),(0,n.jsx)("p",{className:"text-lg leading-6 font-semibold mb-1",children:e.name}),(0,n.jsxs)("span",{className:"flex flex-row gap-2 items-center",children:[(0,n.jsxs)("span",{className:"flex flex-row",children:[(0,n.jsx)("span",{className:"h-3 w-3 bg-surface-text rounded-full"}),(0,n.jsx)("svg",{className:"w-auto h-3",fill:"currentColor",viewBox:"0 0 100 85",children:(0,n.jsx)("polygon",{points:"50 0, 100 85, 0 85"})}),(0,n.jsx)("span",{className:"h-3 w-3 bg-surface-text"})]}),(0,n.jsx)("span",{className:"inline-flex flex-col align-middle leading-4",children:(0,n.jsx)("span",{children:e.points})})]})]})},e.id)})}),(0,n.jsx)("span",{className:"relative h-0 w-8 border-t-8 border-[var(--color-train-line)] -left-3"})]})]})}var P=a(9966);let L=["pwn","rev","crypto","osint","web","misc"];function I(){let[e,l]=(0,t.useState)([]),[a,s]=(0,t.useState)(void 0),[r,c]=(0,t.useState)([]),[x,f]=(0,t.useState)(null),[m,h]=(0,t.useState)(0),[p,g]=(0,t.useState)(null),[b,j]=(0,t.useState)(!1),v=(0,o.useRouter)(),w=(0,o.useSearchParams)(),N=(0,o.usePathname)(),y=(0,t.useCallback)(()=>{g(null),v.replace(N,{scroll:!1})},[v,N]),S=(0,t.useCallback)(()=>{j(!b)},[b]);(0,t.useEffect)(()=>{(async()=>{try{let e=await(0,d.c2)();e.error&&i.ZP.error(e.error),e.data&&(s(e.data.id),c(e.data.solves))}catch(e){}})(),(async()=>{let e=await u();if("badToken"===e.kind){i.ZP.error(e.error),v.push("/login");return}if("badNotStarted"===e.kind){h(1);return}if("goodChallenges"===e.kind){l(e.data),h(3);return}h(2),f(e.message)})()},[v,b]),(0,t.useEffect)(()=>{if(w.has("id")){let l=w.get("id"),s=e.find(e=>e.id===l),n=r.some(e=>e.id===l);s&&g({challenge:s,closeChallengeDialog:y,attemptRefresh:S,solved:n,userId:a})}},[w,e,r,a,y,S]);let C=e.reduce((e,l)=>(e[l.category]||(e[l.category]=[]),e[l.category].push(l),e),{}),k=Object.keys(C).sort((e,l)=>{let a=L.indexOf(e),s=L.indexOf(l);return-1===a&&-1===s?e.localeCompare(l):-1===a?1:-1===s?-1:a-s});return 0===m?(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)("div",{className:"panel flex flex-col gap-4 mx-auto max-w-prose",children:(0,n.jsx)("p",{className:"font-bold text-4xl",children:"Loading..."})})}):1===m?(0,n.jsx)("div",{className:"container mx-auto grow",children:(0,n.jsxs)("div",{className:"panel flex flex-col gap-4 mx-auto max-w-prose",children:[(0,n.jsx)("p",{className:"font-bold text-4xl",children:"UIUCTF 2024 has not started yet."}),(0,n.jsx)("p",{children:"Challenges will be available once the competition starts."})]})}):2===m?(0,n.jsx)("div",{className:"container mx-auto grow",children:(0,n.jsxs)("div",{className:"panel flex flex-col gap-4 mx-auto max-w-prose",children:[(0,n.jsx)("p",{className:"font-bold text-4xl",children:"Error"}),(0,n.jsx)("p",{children:"There was an error loading the challenges. Please try again later."}),(0,n.jsx)("p",{children:x})]})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"text-4xl font-bold mb-2",children:"Challenges"}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8",children:k.map(e=>(0,n.jsx)(T,{category:_[e]||{display_name:e,color:"brown"},challenges:C[e],solves:r},e))}),p?(0,n.jsx)(E,{...p}):null,(0,n.jsx)(P.Z,{})]})}(s=r||(r={}))[s.Pending=0]="Pending",s[s.NotStarted=1]="NotStarted",s[s.Error=2]="Error",s[s.Loaded=3]="Loaded"},9966:function(e,l,a){"use strict";a.d(l,{Z:function(){return r}});var s=a(7437);function r(){return(0,s.jsx)("footer",{className:"bg-surface-main text-with-links text-center py-8 md:py-16",children:(0,s.jsxs)("p",{className:"max-w-prose mx-auto",children:["\xa9 2024 SIGPwny. UIUCTF 2024's theme is inspired by ",(0,s.jsx)("a",{href:"https://dinopoloclub.com/games/mini-metro/",target:"_blank",rel:"noopener noreferrer",children:"Mini Metro"})," and is not affiliated, authorized, or endorsed by Dinosaur Polo Club. Powered by ",(0,s.jsx)("a",{href:"https://rctf.redpwn.net/",target:"_blank",rel:"noopener noreferrer",children:"rCTF"}),"."]})})}},9320:function(e,l,a){"use strict";a.d(l,{Z:function(){return n}});var s=a(7437),r=a(2265);function n(e){let{open:l,onClose:a,children:n}=e,[t,o]=(0,r.useState)(l);return(0,r.useEffect)(()=>{if(l)o(!0);else{let e=setTimeout(()=>{o(!1)},200);return()=>clearTimeout(e)}},[l]),(0,r.useEffect)(()=>{function e(e){"Escape"===e.key&&a()}if(l)return document.addEventListener("keyup",e),()=>document.removeEventListener("keyup",e)},[l,a]),l||t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm",onClick:a,"aria-label":"Close"}),(0,s.jsx)("div",{className:"fixed top-0 bottom-0 left-0 right-0 z-50 pointer-events-none modal-fade-in",role:"document",children:(0,s.jsx)("div",{className:"max-w-prose mx-auto overflow-y-auto custom-scrollbar max-h-screen pointer-events-auto",children:n})})]}):null}},126:function(e,l,a){"use strict";a.d(l,{c2:function(){return r},k$:function(){return t},nd:function(){return c},ob:function(){return n},s:function(){return i},sG:function(){return o}});var s=a(7269);let r=async()=>{let e=await(0,s.WY)("GET","/users/me");return(0,s._y)({resp:e,valid:["goodUserData"]})},n=async e=>{let{authToken:l}=e,{data:a}=await(await fetch("/api/v1/users/me",{headers:{authorization:"Bearer ".concat(l)}})).json();return a},t=async e=>{let l=await(0,s.WY)("GET","/users/".concat(encodeURIComponent(e)));return(0,s._y)({resp:l,valid:["goodUserData"]})},o=async e=>{let{name:l,division:a}=e,r=await(0,s.WY)("PATCH","/users/me",{name:l,division:a});if("badRateLimit"===r.kind){let e;let l=Math.floor(r.data.timeLeft/1e3),a=Math.floor(l/60);return e=0===a?"".concat(l," seconds"):"".concat(a," minutes"),{error:"Please wait ".concat(e," before trying this again")}}return(0,s._y)({resp:r,valid:["goodUserUpdate"]})},i=async e=>{let{email:l,recaptchaCode:a}=e,r=await(0,s.WY)("PUT","/users/me/auth/email",{email:l,recaptchaCode:a});return(0,s._y)({resp:r,valid:["goodVerifySent","goodEmailSet"],resolveDataMessage:!0})},c=async()=>{let e=await(0,s.WY)("DELETE","/users/me/auth/email");return(0,s._y)({resp:e,valid:["goodEmailRemoved","badEmailNoExists"],resolveDataMessage:!0})}},5758:function(e,l,a){"use strict";a.d(l,{SY:function(){return r}});let s=e=>{let l=new Date(e);return"".concat(l.toLocaleDateString()," ").concat(l.toLocaleTimeString())},r=e=>{let l=Math.floor((Date.now()-e)/1e3);if(l<60)return"just now";let a=Math.floor(l/60);if(a<60)return"".concat(a," minute").concat(1===a?"":"s"," ago");let r=Math.floor(a/60);if(r<24)return"".concat(r," hour").concat(1===r?"":"s"," ago");let n=Math.floor(r/24);return n<7?"".concat(n," day").concat(1===n?"":"s"," ago"):s(e)}}},function(e){e.O(0,[729,726,426,971,23,744],function(){return e(e.s=6842)}),_N_E=e.O()}]);