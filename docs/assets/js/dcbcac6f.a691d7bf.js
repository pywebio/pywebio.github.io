"use strict";(self.webpackChunkpy_web_io_blog=self.webpackChunkpy_web_io_blog||[]).push([[830],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4120:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),l=["components"],r={id:"submit-blog-post",sidebar_position:1,title:"Compose And Publish Blog Post",description:"Tutorial for submitting a blog post to PyWeb.io",image:"/img/tutorial/pyweb_contribute_tutorial.png",keywords:["PyWeb.io","tutorial","blog"],tags:["PyWeb.io","blog","template"]},s=void 0,c={unversionedId:"tutorial-contribute/blog-post/submit-blog-post",id:"tutorial-contribute/blog-post/submit-blog-post",title:"Compose And Publish Blog Post",description:"Tutorial for submitting a blog post to PyWeb.io",source:"@site/docs/tutorial-contribute/blog-post/index.mdx",sourceDirName:"tutorial-contribute/blog-post",slug:"/tutorial-contribute/blog-post/",permalink:"/docs/docs/tutorial-contribute/blog-post/",tags:[{label:"PyWeb.io",permalink:"/docs/docs/tags/py-web-io"},{label:"blog",permalink:"/docs/docs/tags/blog"},{label:"template",permalink:"/docs/docs/tags/template"}],version:"current",sidebarPosition:1,frontMatter:{id:"submit-blog-post",sidebar_position:1,title:"Compose And Publish Blog Post",description:"Tutorial for submitting a blog post to PyWeb.io",image:"/img/tutorial/pyweb_contribute_tutorial.png",keywords:["PyWeb.io","tutorial","blog"],tags:["PyWeb.io","blog","template"]},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/docs/"},next:{title:"Compose And Publish Tutorial",permalink:"/docs/docs/tutorial-contribute/tutorial/"}},u={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Create New Branch",id:"create-new-branch",level:2},{value:"Add New Directory And Markdown File",id:"add-new-directory-and-markdown-file",level:2},{value:"Add An Author",id:"add-an-author",level:2},{value:"Compose The Blog Post",id:"compose-the-blog-post",level:2},{value:"Add Metadata",id:"add-metadata",level:2},{value:"Submit",id:"submit",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Jeff Terrell, April 6, 2022")),(0,i.kt)("p",null,"This tutorial will guide you through the blog post creation process for PyWeb.io. You will learn how to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a separate GitHub branch"),(0,i.kt)("li",{parentName:"ul"},"Add a new directory and Markdown file (.mdx)"),(0,i.kt)("li",{parentName:"ul"},"Create your blog post from a provided template"),(0,i.kt)("li",{parentName:"ul"},"Add metadata"),(0,i.kt)("li",{parentName:"ul"},"Submit a pull request")),(0,i.kt)("p",null,"Let's dive in!"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access to the PyWeb.io content creation GitHub repository - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pywebio/content_creation"},"Click Here!"))),(0,i.kt)("h2",{id:"create-new-branch"},"Create New Branch"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,"From the content_creation repository, let's begin with creating a new branch that will contain your soon to be created .mdx file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Create Branch",src:a(1619).Z,width:"306",height:"247"})),(0,i.kt)("p",null,"To create a new branch as shown above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the grey drop-down button (",(0,i.kt)("img",{alt:"GitHub Branch",src:a(8656).Z,width:"8",height:"12"})," main)"),(0,i.kt)("li",{parentName:"ul"},"Type the name of the new branch in the input box",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Format:")," blog-date-description",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.",(0,i.kt)("inlineCode",{parentName:"li"},"blog-2022-04-07-pyweb-release1.0")))))),(0,i.kt)("li",{parentName:"ul"},'Click "Create branch"')),(0,i.kt)("p",null,"You will automatically be directed to the newly created branch."),(0,i.kt)("h2",{id:"add-new-directory-and-markdown-file"},"Add New Directory And Markdown File"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Create New File",src:a(3991).Z,width:"1233",height:"335"})),(0,i.kt)("p",null,'Navigate to the blog directory of the repo, click the "Add File" button, and then select "Create new file". '),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Create New File",src:a(4287).Z,width:"1214",height:"320"})),(0,i.kt)("p",null,"From the next screen, enter the directory and file name for your blog post."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Format:")," content_creation/blog/date-description/index.mdx ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.",(0,i.kt)("inlineCode",{parentName:"li"},"content_creation/blog/2022-04-07-pyweb-release1.0/index.mdx"))))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub create new file",src:a(535).Z,width:"653",height:"334"})),(0,i.kt)("p",null,'Next, scroll to the bottom of the page, ensure the "Commit directly to the ',(0,i.kt)("inlineCode",{parentName:"p"},"blog-date-description"),' branch" option is selected and click the green "Commit new file" button.'),(0,i.kt)("h2",{id:"add-an-author"},"Add An Author"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docusaurus Add Author YAML",src:a(2529).Z,width:"953",height:"281"})),(0,i.kt)("p",null,'Navigate to the blog directory and click on the authors.yml file. Click the "pencil" icon in the top right to begin editing the file. Follow the format as shown above to create your author profile. Now, scroll down the page and click the green "Commit changes" button.'),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Your last name should be used as the main property. This profile will be used later in the front matter at the top of your blog post file (index.mdx)."))),(0,i.kt)("h2",{id:"compose-the-blog-post"},"Compose The Blog Post"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Copy Paste Blog Template",src:a(6381).Z,width:"873",height:"438"})),(0,i.kt)("p",null,"To make creating your blog post easier, we have a template you can copy and paste to help get you started. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pywebio/content_creation/tree/main/static/template/blog-template.mdx"},"Blog post template")," ")),(0,i.kt)("p",null,'To use the template, click the "Raw" button on the right side of the screen, and highlight and copy the entire document.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Copy Paste Blog Template",src:a(9876).Z,width:"1204",height:"437"})),(0,i.kt)("p",null,'Now, navigate to the newly created directory for your blog post, select the index.mdx file and click the "pencil" icon on the right side of the screen. Paste the template into your file to begin creating your blog post. Your index.mdx file should look similar to the screenshot above.'),(0,i.kt)("p",null,'You can now begin creating your content! Feel free to improvise and make it your own, the template is not the "law", be creative and have fun, but try to follow the general layout of the template as well (thanks \ud83d\ude04). '),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please use the ",(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," marker to show summarized content on the blog landing page"))),(0,i.kt)("h2",{id:"add-metadata"},"Add Metadata"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Discord Card",src:a(1471).Z,width:"232",height:"276"})),(0,i.kt)("p",null,"At the top of your file in between the three dashes is the front matter which contains fields (metadata) that need to be changed for each blog post."),(0,i.kt)("p",null,"Follow the instructions below to ensure your file contains valuable metadata, and social card components are displayed correctly."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Metadata Instructions")),(0,i.kt)("div",{style:{backgroundColor:""}},(0,i.kt)("li",null,(0,i.kt)("b",null,"slug:")," the file path to the blog post after /blog/date-description and should be unique to the document. Choose a short name, can be identical to the description used for the directory (e.g. pyweb-release-1.0)."),(0,i.kt)("li",null,(0,i.kt)("b",null,"title:")," the H1 main heading of the blog post."),(0,i.kt)("li",null,(0,i.kt)("b",null,"description:")," include a short description of the blog post. This will not be visible anywhere on the page and is for SEO purposes."),(0,i.kt)("li",null,(0,i.kt)("b",null,"image:")," adds a meta image for social summary cards on Discord, Twitter, etc. Relative path must be: `/img/blog/yourimage.jpg`. Upload image to: `/static/img/blog`."),(0,i.kt)("li",null,(0,i.kt)("b",null,"authors:")," this is where you add your author profile that was set up earlier."),(0,i.kt)("li",null,(0,i.kt)("b",null,"tags:")," include several tags relevent to the subject matter of your post to make finding similar content easier for other readers."),(0,i.kt)("li",null,(0,i.kt)("b",null,"keywords:")," include several keywords describing the main topics of the blog post for SEO purposes."))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"submit"},"Submit"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Create Pull Request",src:a(7838).Z,width:"909",height:"344"})),(0,i.kt)("p",null,'Navigate to the home page of your branch and click the green "Compare & pull request" button residing in the yellowish colored box displaying your branch name. '),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'You can also select the "',(0,i.kt)("img",{alt:"GitHub octicon pull request",src:a(7773).Z,width:"9",height:"12"}),' Contribute" drop down and click the green "Open pull request" button.'))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Create Pull Request Final",src:a(455).Z,width:"1231",height:"518"})),(0,i.kt)("p",null,'You will be taken to the "Open a pull request" screen where you can choose to add a reviewer by clicking the \u2699\ufe0f icon next to "Reviewers". Select a reviewer and click the "Create pull request" button and that\'s it, you\'re done! A PyWeb.io team member will review your pull request and assuming everything looks good, your blog post will be deployed.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Actions Check",src:a(1817).Z,width:"905",height:"238"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,"This article describes how to create and submit a blog post to the PyWeb.io blog. "),(0,i.kt)("p",null,"If you have any further questions, comments, feedback, etc. ",(0,i.kt)("a",{parentName:"p",href:"mailto:hey@pyweb.io"},"please contact the PyWeb.io team")))}m.isMDXComponent=!0},1471:function(e,t,a){t.Z=a.p+"assets/images/discord_card-e017a25c8cb96bebbd4e344db2c61ad0.JPG"},1817:function(e,t,a){t.Z=a.p+"assets/images/gh_actions_check-d88d24bba0091cef16ed9a8ee8f4ab83.JPG"},2529:function(e,t,a){t.Z=a.p+"assets/images/gh_add_author2-990029352b8e4dc82c94b9f85c9f6775.JPG"},9876:function(e,t,a){t.Z=a.p+"assets/images/gh_blog_template_paste-05b40759774d9c969dfe435c0f9fbfef.JPG"},6381:function(e,t,a){t.Z=a.p+"assets/images/gh_blog_template_raw-72678352c998c13e102d366f4e79f73f.JPG"},535:function(e,t,a){t.Z=a.p+"assets/images/gh_commit_new_file-56407517cd8aaf78c0dd034204e0f040.JPG"},1619:function(e,t,a){t.Z=a.p+"assets/images/gh_create_branch-048371ee6c60ac1b0498ff7345bfc568.JPG"},4287:function(e,t,a){t.Z=a.p+"assets/images/gh_create_new_file-3b61f23911eed1a71347c7020698e459.JPG"},3991:function(e,t,a){t.Z=a.p+"assets/images/gh_create_new_file_dropdown-3f0efb982518a1c14a7ec89f6cbe1ed4.JPG"},7838:function(e,t,a){t.Z=a.p+"assets/images/gh_create_pull_request_contribute-caa2e1f133c8a809de29ccc74441a6c7.JPG"},455:function(e,t,a){t.Z=a.p+"assets/images/gh_create_pull_request_final-4583022ab551c62540cf0470d7193f43.JPG"},8656:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAGYktHRAD/AP8A/6C9p5MAAAD5SURBVChTbZC/ykZwFMfPq5QyKoNIuQGDDG7AIJurUAZXweYKnrgAl2A1SCaDjBYDUbKYOC+n96nnfXs/9et8O3++nd+B67qwbVtclgX/4ysIAhyGAY7jgCzLQFEU+AXHcdSp6zo2TUM6jmM0DAPzPEeo6xrvPoyiiIplWaLjOKQlSUJGVVVyEkWRoqZp0Pc9eJ4HlmUBjONIDmma0tTD6/Wi3LZtyNDYzb7vcP8GkiSBMAzBNM1nP4Bpmqj7WfaJz5NlGed5JjeoqoqSgiBgURR4nicV3gDLsiRs28au60h/wvi+D67rPhcFnudvsz+8T72u68/MJ4jf1yXhGtv7kSAAAAAASUVORK5CYII="},7773:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAAmJLR0QA/4ePzL8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMDdUMTc6MTc6MTIrMDA6MDBA3EXdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTA3VDE3OjE3OjEyKzAwOjAwMYH9YQAAAPtJREFUKFN9kb2JhkAQhudUEPEHFCxCzO3CxNAOTKzhq8ECrEBLMLICxVQDE8FAE0GF1TlnOI+L7oHlnXf2Z3Z2QQiBVVXheZ5IZFmG4zhy/CLP8/zpug7KsgTLsiCOY1iWBfq+B8/zQNM0AMdxeLVhGJimKQLA7wjDEPd9R2iahhN1XfPiIAhwmiYchoHzbduipKrqEwOXIvI8B13XYds29oqigHTfN5vrulh93wfTNKkh9oT0o/8iPXAgyzLry+tpXjqOgw21/Zd1XVmf9wOwbZu7ejzry+vpib6SJEG6JJ1UFAXvJqIoAtd1uRx1xd/ylOWdL+QpL4TAb5bIuq2yAzO3AAAAAElFTkSuQmCC"}}]);