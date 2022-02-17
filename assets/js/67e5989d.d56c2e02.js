"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6847],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3902:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={id:"GridLineOptions",title:"Interface: GridLineOptions",sidebar_label:"GridLineOptions",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/GridLineOptions",id:"version-3.8/api/interfaces/GridLineOptions",title:"Interface: GridLineOptions",description:"Grid line options.",source:"@site/versioned_docs/version-3.8/api/interfaces/GridLineOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/GridLineOptions",permalink:"/lightweight-charts/docs/api/interfaces/GridLineOptions",editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"GridLineOptions",title:"Interface: GridLineOptions",sidebar_label:"GridLineOptions",sidebar_position:0,custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"CrosshairOptions",permalink:"/lightweight-charts/docs/api/interfaces/CrosshairOptions"},next:{title:"GridOptions",permalink:"/lightweight-charts/docs/api/interfaces/GridOptions"}},c=[{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[],level:3},{value:"style",id:"style",children:[],level:3},{value:"visible",id:"visible",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Grid line options."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"color"},"color"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"color"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Line color."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,o.kt)("inlineCode",{parentName:"p"},"'#D6DCDE'")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"style"},"style"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"style"),": ",(0,o.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle"},(0,o.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,o.kt)("p",null,"Line style."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,o.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle#solid"},"LineStyle.Solid")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"visible"},"visible"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"visible"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Display the lines."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"defaultvalue"))," ",(0,o.kt)("inlineCode",{parentName:"p"},"true")))}d.isMDXComponent=!0}}]);