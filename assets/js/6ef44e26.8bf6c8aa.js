"use strict";(self.webpackChunkymdarake_github_io=self.webpackChunkymdarake_github_io||[]).push([[8176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,d=c["".concat(p,".").concat(m)]||c[m]||h[m]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={slug:"demystifying-encoding-and-length-of-string",title:"Demystifying Encoding and Length of String",authors:"ymdarake",tags:["javascript","encoding","unicode","emoji","surrogates","zero-width-joiner","variation-selector","utf-8","utf-16","jisx0208"]},r=void 0,l={permalink:"/blog/demystifying-encoding-and-length-of-string",source:"@site/blog/2023-01-21.md",title:"Demystifying Encoding and Length of String",description:"Hi\ud83d\udc4b How you doin'?",date:"2023-01-21T00:00:00.000Z",formattedDate:"January 21, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"encoding",permalink:"/blog/tags/encoding"},{label:"unicode",permalink:"/blog/tags/unicode"},{label:"emoji",permalink:"/blog/tags/emoji"},{label:"surrogates",permalink:"/blog/tags/surrogates"},{label:"zero-width-joiner",permalink:"/blog/tags/zero-width-joiner"},{label:"variation-selector",permalink:"/blog/tags/variation-selector"},{label:"utf-8",permalink:"/blog/tags/utf-8"},{label:"utf-16",permalink:"/blog/tags/utf-16"},{label:"jisx0208",permalink:"/blog/tags/jisx-0208"}],readingTime:3.935,hasTruncateMarker:!0,authors:[{name:"ymdarake",title:"Maintainer",url:"https://github.com/ymdarake",imageURL:"https://github.com/ymdarake.png",key:"ymdarake"}],frontMatter:{slug:"demystifying-encoding-and-length-of-string",title:"Demystifying Encoding and Length of String",authors:"ymdarake",tags:["javascript","encoding","unicode","emoji","surrogates","zero-width-joiner","variation-selector","utf-8","utf-16","jisx0208"]},nextItem:{title:"Reading Fundamentals of Software Architecture",permalink:"/blog/reading-fundamentals-of-software-architecture"}},p={authorsImageUrls:[void 0]},s=[{value:"Hi\ud83d\udc4b How you doin&#39;?",id:"hi-how-you-doin",level:2},{value:"WEB input validation",id:"web-input-validation",level:2},{value:"Let&#39;s count string length in JavaScript",id:"lets-count-string-length-in-javascript",level:3},{value:"Internal representation of string in JavaScript",id:"internal-representation-of-string-in-javascript",level:3},{value:"Zero Width Joiner",id:"zero-width-joiner",level:3},{value:"Variation Selector",id:"variation-selector",level:3},{value:"Appendix: Things I want to talk about later",id:"appendix-things-i-want-to-talk-about-later",level:2},{value:"Grapheme Cluster",id:"grapheme-cluster",level:3},{value:"Japanese text encoding in Golang",id:"japanese-text-encoding-in-golang",level:3},{value:"MySQL",id:"mysql",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hi-how-you-doin"},"Hi\ud83d\udc4b How you doin'?"),(0,i.kt)("p",null,"When I text somebody, I write something like this at the beginning."),(0,i.kt)("p",null,"Do you do this too sometimes?"),(0,i.kt)("p",null,"I like to use emojis as punctuation characters, pretty much."),(0,i.kt)("h2",{id:"web-input-validation"},"WEB input validation"),(0,i.kt)("p",null,"So, what if you have to check the length of a message like that?"),(0,i.kt)("p",null,"I know that I gotta be careful about stuff like ",(0,i.kt)("inlineCode",{parentName:"p"},".length"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"input[0]")," and so on,"),(0,i.kt)("p",null,"but this time, I stepped in further into the internals."),(0,i.kt)("h3",{id:"lets-count-string-length-in-javascript"},"Let's count string length in JavaScript"),(0,i.kt)("p",null,"If you want to make sure users receive an error message when they input too many characters, you may write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const input = "some random input";\nif (input.length > 30) {\n    alert("sorry, your profile must be less than 30 characters!");\n}\n')),(0,i.kt)("p",null,"But what exactly is the ",(0,i.kt)("inlineCode",{parentName:"p"},"input.length")," counting? In the example above,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> const input = "some random input"; console.log(input.length);\n\n17\n')),(0,i.kt)("p",null,"Yeah, looks no problem. But hey, what if your user write something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> const input = "Hi\ud83d\udc4b How you doin\'?"; console.log(input.length);\n\n19\n\n> "\ud83d\udc4b".length\n\n2\n\n// ok, I know it\'s a multibyte character, that\'s fine ofc.\n// let\'s try another lovely sentence\n> const input = "I love my girlfriend\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68"; console.log(input.length);\n\n31\n\n// huh, this is getting wild...\n\n> "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68".length\n11\n\n// ok, fair enough...?\n')),(0,i.kt)("p",null,"Hmm, OK I know something happens with emojis, but why?"),(0,i.kt)("h3",{id:"internal-representation-of-string-in-javascript"},"Internal representation of string in JavaScript"),(0,i.kt)("p",null,"When you write JavaScript code, I assume you set the encoding to ",(0,i.kt)("inlineCode",{parentName:"p"},"UTF-8"),"."),(0,i.kt)("p",null,"But JavaScript uses ",(0,i.kt)("inlineCode",{parentName:"p"},"UTF-16")," as its internal representation of strings."),(0,i.kt)("p",null,"First of all, when you use ",(0,i.kt)("inlineCode",{parentName:"p"},"UTF-16")," you have to represent a character in 2 bytes, ",(0,i.kt)("em",{parentName:"p"},"not alaways but pretty much"),"."),(0,i.kt)("p",null,"So, as you know, it's like ",(0,i.kt)("inlineCode",{parentName:"p"},"A is U+0041"),", 4 digits of hex, ok it's 2 bytes."),(0,i.kt)("p",null,"If you want to check Unicode table, you refer to ",(0,i.kt)("a",{parentName:"p",href:"https://unicode.org/charts/"},"https://unicode.org/charts/")),(0,i.kt)("p",null,"But let's think about it, how many characters can we deal with in this way?"),(0,i.kt)("p",null,"Yes, it's 2 bytes, which means 2^16 = 65535."),(0,i.kt)("p",null,"Is that enough? ",(0,i.kt)("em",{parentName:"p"},"No.")),(0,i.kt)("p",null,"So if you want to use ",(0,i.kt)("em",{parentName:"p"},"minor")," characters like \ud83d\udc4b, you have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Surrogates"),","),(0,i.kt)("p",null,"roughly meaning you have to treat ",(0,i.kt)("inlineCode",{parentName:"p"},"2 characters as 1 character"),"."),(0,i.kt)("p",null,"OK, then what is the Unicode code point of \ud83d\udc4b? Let's check at ",(0,i.kt)("a",{parentName:"p",href:"https://emojipedia.org/emoji/%F0%9F%91%8B/"},"https://emojipedia.org/emoji/%F0%9F%91%8B/")," (emojipedia comes in hady)"),(0,i.kt)("p",null,"So \ud83d\udc4b's code point is ",(0,i.kt)("inlineCode",{parentName:"p"},"U+1F44B"),". (Is that ",(0,i.kt)("inlineCode",{parentName:"p"},"codepoints")," btw? Help from English speakers wanted...)"),(0,i.kt)("p",null,"As you've noticed, ",(0,i.kt)("inlineCode",{parentName:"p"},"U+1F44B")," is 5 digits of hex and over 65535,"),(0,i.kt)("p",null,"with that pointed out, in JavaScript (UTF-16):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> \"\ud83d\udc4b\".split(\"\")\n\n(2)\xa0['\\uD83D', '\\uDC4B']\n")),(0,i.kt)("p",null,"Voila! (?)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.compart.com/en/unicode/U+D83D"},"Hight Surrogates 'U+D83D'")," + ",(0,i.kt)("a",{parentName:"p",href:"https://www.compart.com/en/unicode/U+DC48"},"Low Surrogates 'U+DC48'")),(0,i.kt)("p",null,"become 1 character with power, or cost, of 2 characters. What a story!"),(0,i.kt)("h3",{id:"zero-width-joiner"},"Zero Width Joiner"),(0,i.kt)("p",null,"Next, what about \ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68? Isn't it weird that its ",(0,i.kt)("inlineCode",{parentName:"p"},".length")," is 11??"),(0,i.kt)("p",null,"Let's unpack, or split it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> \"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\".split(\"\")\n\n(11)\xa0['\\uD83D', '\\uDC69', '\u200d', '\u2764', '\ufe0f', '\u200d', '\\uD83D', '\\uDC8B', '\u200d', '\\uD83D', '\\uDC68']\n")),(0,i.kt)("p",null,"It looks something like ",(0,i.kt)("inlineCode",{parentName:"p"},"emoji + empty char + heart + empty char + empty char + emoji + empty char + emoji"),"."),(0,i.kt)("p",null,"You want more organized information? Look here! ",(0,i.kt)("a",{parentName:"p",href:"https://emojipedia.org/emoji/%F0%9F%91%A9%E2%80%8D%E2%9D%A4%EF%B8%8F%E2%80%8D%F0%9F%92%8B%E2%80%8D%F0%9F%91%A8/"},"https://emojipedia.org/emoji/%F0%9F%91%A9%E2%80%8D%E2%9D%A4%EF%B8%8F%E2%80%8D%F0%9F%92%8B%E2%80%8D%F0%9F%91%A8/")),(0,i.kt)("p",null,"It says ",(0,i.kt)("inlineCode",{parentName:"p"},"Codepoints\tU+1F469, U+200D, U+2764, U+FE0F, U+200D, U+1F48B, U+200D, U+1F468"),","),(0,i.kt)("p",null,"which is \ud83d\udc69 + something + \u2764 + something + \ud83d\udc8b + something + \ud83d\udc68."),(0,i.kt)("p",null,"Kinda makes sense."),(0,i.kt)("p",null,"Given ",(0,i.kt)("inlineCode",{parentName:"p"},"U+1F469")," is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"U+D83D + U+DC69"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"U+200D")," is the one of ",(0,i.kt)("em",{parentName:"p"},"empty char"),"."),(0,i.kt)("p",null,"What is this?"),(0,i.kt)("p",null,"Let's take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://www.compart.com/en/unicode/U+200D"},"https://www.compart.com/en/unicode/U+200D")," this time."),(0,i.kt)("p",null,"Ah, your name is ",(0,i.kt)("inlineCode",{parentName:"p"},"Zero Width Joiner (ZWJ)"),", nice to ",(0,i.kt)("em",{parentName:"p"},"SEE")," you finally."),(0,i.kt)("p",null,"It's used to join characters. It might sound a bit weird, but you can join characters. Huh!"),(0,i.kt)("p",null,"You can see exmaples here: ",(0,i.kt)("a",{parentName:"p",href:"https://unicode.org/emoji/charts/emoji-zwj-sequences.html"},"https://unicode.org/emoji/charts/emoji-zwj-sequences.html")),(0,i.kt)("p",null,"and Wiki is here if you want: ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Zero-width_joiner"},"https://en.wikipedia.org/wiki/Zero-width_joiner")),(0,i.kt)("h3",{id:"variation-selector"},"Variation Selector"),(0,i.kt)("p",null,"Another ",(0,i.kt)("em",{parentName:"p"},"empty char")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"U+FE0F Variation Selector-16 (VS16)"),": ",(0,i.kt)("a",{parentName:"p",href:"https://www.compart.com/en/unicode/U+FE0F"},"https://www.compart.com/en/unicode/U+FE0F")),(0,i.kt)("p",null,"You can read its detail ",(0,i.kt)("a",{parentName:"p",href:"http://www.unicode.org/Public/6.1.0/ucd/StandardizedVariants.html"},"at Unicode org's website")," but, in short,"),(0,i.kt)("p",null,"with ",(0,i.kt)("inlineCode",{parentName:"p"},"U+2665 U+FE0E")," you get black heart, while with ",(0,i.kt)("inlineCode",{parentName:"p"},"U+2665 U+FE0F")," you get red heart."),(0,i.kt)("p",null,"Now, if you write \ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68 and hit backspace key (in VSCode, I checked), what do you get and why?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> \"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\"\n// then hit backspace to get\n> \"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\"\n\n// to see what you deleted, you do:\n> \"\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\".split(\"\")\n\n(8)\xa0['\\uD83D', '\\uDC69', '\u200d', '\u2764', '\ufe0f', '\u200d', '\\uD83D', '\\uDC8B']\n")),(0,i.kt)("p",null,"Ah, I deleted the man and ",(0,i.kt)("em",{parentName:"p"},"splitted")," them... Sad but now it's explainable to some extent...\ud83e\udee3"),(0,i.kt)("p",null,"(You will probably get \ud83d\udc69\u200d\u2764\ufe0f in Chrome's devtool console)"),(0,i.kt)("p",null,"OK, I have to dig into this but that's it for today. Cool!"),(0,i.kt)("p",null,"I hope it was clear, and hopefully not wrong at least. (correction welcomed!\ud83d\ude4f)"),(0,i.kt)("h2",{id:"appendix-things-i-want-to-talk-about-later"},"Appendix: Things I want to talk about later"),(0,i.kt)("h3",{id:"grapheme-cluster"},"Grapheme Cluster"),(0,i.kt)("h3",{id:"japanese-text-encoding-in-golang"},"Japanese text encoding in Golang"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cs.opensource.google/go/x/text/+/master:encoding/japanese/maketables.go"},"https://cs.opensource.google/go/x/text/+/master:encoding/japanese/maketables.go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://encoding.spec.whatwg.org/#shift_jis"},"https://encoding.spec.whatwg.org/#shift_jis")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://encoding.spec.whatwg.org/index-jis0208.txt"},"https://encoding.spec.whatwg.org/index-jis0208.txt"))),(0,i.kt)("h3",{id:"mysql"},"MySQL"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Well known "Sushi-Beer" problem, is the ',(0,i.kt)("inlineCode",{parentName:"li"},"utf8mb4_bin")," a silver bullet?")),(0,i.kt)("p",null,"To Be Continued..."))}c.isMDXComponent=!0}}]);