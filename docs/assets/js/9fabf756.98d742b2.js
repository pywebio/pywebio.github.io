"use strict";(self.webpackChunkpy_web_io_blog=self.webpackChunkpy_web_io_blog||[]).push([[543],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=o,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8034:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return h},metadata:function(){return v},toc:function(){return g}});var n=a(7462),o=a(3366),r=a(7294),i=a(3905),l=a(2389),s=a(5979),u=a(6010),d="tabItem_LplD";function p(e){var t,a,o,i=e.lazy,l=e.block,p=e.defaultValue,c=e.values,m=e.groupId,b=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==f&&!k.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.UB)(),y=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,r.useState)(f),T=N[0],x=N[1],I=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==T&&k.some((function(e){return e.value===O}))&&x(O)}var A=function(e){var t=e.currentTarget,a=I.indexOf(t),n=k[a].value;n!==T&&(C(t),x(n),null!=m&&w(m,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;a=I[n]||I[0];break;case"ArrowLeft":var o=I.indexOf(e.currentTarget)-1;a=I[o]||I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},b)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:A,onClick:A},o,{className:(0,u.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}function m(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}var b=["components"],h={id:"collaterals",sidebar_position:3,title:"Add Assets And Components",description:"Tutorial about submitting a blog post or tutorial to PyWeb.io",image:"/img/blog/pyweb_contribute_tutorial.png",keywords:["PyWeb.io","tutorial","blog"],tags:["PyWeb.io","blog","template"]},k=void 0,v={unversionedId:"tutorial-contribute/assets-components/collaterals",id:"tutorial-contribute/assets-components/collaterals",title:"Add Assets And Components",description:"Tutorial about submitting a blog post or tutorial to PyWeb.io",source:"@site/docs/tutorial-contribute/assets-components/index.mdx",sourceDirName:"tutorial-contribute/assets-components",slug:"/tutorial-contribute/assets-components/",permalink:"/docs/docs/tutorial-contribute/assets-components/",tags:[{label:"PyWeb.io",permalink:"/docs/docs/tags/py-web-io"},{label:"blog",permalink:"/docs/docs/tags/blog"},{label:"template",permalink:"/docs/docs/tags/template"}],version:"current",sidebarPosition:3,frontMatter:{id:"collaterals",sidebar_position:3,title:"Add Assets And Components",description:"Tutorial about submitting a blog post or tutorial to PyWeb.io",image:"/img/blog/pyweb_contribute_tutorial.png",keywords:["PyWeb.io","tutorial","blog"],tags:["PyWeb.io","blog","template"]},sidebar:"tutorialSidebar",previous:{title:"Compose And Publish Tutorial",permalink:"/docs/docs/tutorial-contribute/tutorial/"}},f={},g=[{value:"Upload Assets",id:"upload-assets",level:2},{value:"Insert Image",id:"insert-image",level:2},{value:"Insert YouTube Video",id:"insert-youtube-video",level:2},{value:"Insert Code Snippet",id:"insert-code-snippet",level:2},{value:"Insert Admonition",id:"insert-admonition",level:2},{value:"Insert Tabs",id:"insert-tabs",level:2},{value:"Insert Details (drop-down)",id:"insert-details-drop-down",level:2}],y={toc:g};function w(e){var t=e.components,r=(0,o.Z)(e,b);return(0,i.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Jeff Terrell, April 6, 2022")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Quick Links:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upload-assets"},"Upload Assets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insert-image"},"Insert Image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insert-youtube-video"},"Insert YouTube Video")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insert-code-snippet"},"Insert Code Snippet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insert-admonition"},"Insert Admonition")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insert-tabs"},"Insert Tabs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insert-details-drop-down"},"Insert Details (drop-down)"))),(0,i.kt)("h2",{id:"upload-assets"},"Upload Assets"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Upload Files",src:a(6292).Z,width:"1233",height:"657"})),(0,i.kt)("p",null,'From the directory containing the index.mdx file, click the "Add file" button and select "Upload files". You can upload as many files as needed from this screen. After you are finished, ensure the "Commit directly to the ',(0,i.kt)("inlineCode",{parentName:"p"},"blog-date-description"),' branch" option is selected and click the "Commit changes" button.'),(0,i.kt)("p",null,"You will be re-directed to the home screen of the branch you just committed to, navigate back to the index.mdx file in the blog or docs(tutorials) directory to continue editing. To add the uploaded assets to your document, use the following relative file path:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./your_asset.jpg"))),(0,i.kt)("h2",{id:"insert-image"},"Insert Image"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python Image",src:a(2811).Z,width:"601",height:"203"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'![An Image](./your-image.jpg "Your Image")\n')),(0,i.kt)("p",null,'Add an image by using the exclamation mark(!), followed by alt text in brackets[], and the relative path or URL to the image in parenthesis(). A title can be added in quotation marks("") as well after the relative path or URL.'),(0,i.kt)("h2",{id:"insert-youtube-video"},"Insert YouTube Video"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/MZpa3UJH1J0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<iframe width="560" height="315" src="https://www.youtube.com/embed/MZpa3UJH1J0" \ntitle="YouTube video player" frameborder="0" allow="accelerometer; autoplay; \nclipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n')),(0,i.kt)("p",null,'From the YouTube video you want to insert, click on "Share" and then select "Embed". Choose the checkbox options you desire and then copy and paste the code into your file.'),(0,i.kt)("h2",{id:"insert-code-snippet"},"Insert Code Snippet"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,"Code snippets allow users to quickly copy code with the click of a single button."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,i.kt)("button",{class:"tutorial_button",onClick:function(){return alert("button clicked!")}},"Click me!"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Wrap your code in three backticks ``` to use a code snippet. Here's the source code from the code snippet shown above.\n",(0,i.kt)("img",{alt:"Markdown Code Snippet",src:a(9177).Z,width:"442",height:"50"})),(0,i.kt)("h2",{id:"insert-admonition"},"Insert Admonition"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Your Title")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your ",(0,i.kt)("strong",{parentName:"p"},"important")," content"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Your Title")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your ",(0,i.kt)("strong",{parentName:"p"},"important")," content"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Your Title")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your ",(0,i.kt)("strong",{parentName:"p"},"important")," content"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Your Title")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your ",(0,i.kt)("strong",{parentName:"p"},"important")," content"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Your Title")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your ",(0,i.kt)("strong",{parentName:"p"},"important")," content"))),(0,i.kt)("p",null,"Admonitions are useful to draw the reader's attention towards specific information. To use an admonition, wrap text in a set of 3 colons. You can specify the type/color (5 options) after the initial set of colons. For more information, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/admonitions#"},"documentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":::tip Your Title\n\nYour **important** content\n\n:::\n")),(0,i.kt)("h2",{id:"insert-tabs"},"Insert Tabs"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(m,{value:"baseball",label:"Baseball",default:!0,mdxType:"TabItem"},(0,i.kt)("b",null,"This is a baseball")," \u26be"),(0,i.kt)(m,{value:"basketball",label:"Basketball",mdxType:"TabItem"},(0,i.kt)("b",null,"This is a basketball")," \ud83c\udfc0"),(0,i.kt)(m,{value:"football",label:"Football",mdxType:"TabItem"},(0,i.kt)("b",null,"This is a football")," \ud83c\udfc8")),(0,i.kt)("p",null,"To insert tabs, you must first import the tab components in your file wrap your content in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Tabs>")," component. For more information on customizing tabs, check out this ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/tabs"},"documentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<Tabs>\n  <TabItem value="baseball" label="Baseball" default>\n    <b>This is a baseball</b> \u26be\n  </TabItem> \n  <TabItem value="basketball" label="Basketball">\n    <b>This is a basketball</b> \ud83c\udfc0\n  </TabItem>\n  <TabItem value="football" label="Football">\n    <b>This is a football</b> \ud83c\udfc8\n  </TabItem>\n</Tabs>\n')),(0,i.kt)("h2",{id:"insert-details-drop-down"},"Insert Details (drop-down)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Details Drop-Down Box")),(0,i.kt)("div",{style:{backgroundColor:""}},(0,i.kt)("li",null,(0,i.kt)("b",null,"Bolded:")," some information")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Nested"),(0,i.kt)("li",null,"More information"))),(0,i.kt)("p",null,"Details drop-down boxes provide a clean look to grab a reader's attention. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<details>\n  <summary><b>I am details drop-down box</b></summary>\n  <div style={{backgroundColor: ''}}>\n    <li><b>Bolded:</b> some information</li>\n  </div>\n  <details>\n    <summary>Nested</summary>\n      <li>More information</li>\n  </details>  \n</details>\n")))}w.isMDXComponent=!0},9177:function(e,t,a){t.Z=a.p+"assets/images/code_snippet_example-a80dbd5b5315bd2b30e12ae19a16f794.JPG"},6292:function(e,t,a){t.Z=a.p+"assets/images/gh_upload_files-2558c1350d72bd79e28cfbcc9bae7a73.JPG"},2811:function(e,t,a){t.Z=a.p+"assets/images/python-logo-master-v3-63580e54e2e501e3d07de0c07a3a8c3c.png"}}]);