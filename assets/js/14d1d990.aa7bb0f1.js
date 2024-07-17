"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[4230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=l,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const a={title:"",sidebar_label:"fleet test"},o=void 0,i={unversionedId:"cli/fleet-cli/fleet_test",id:"version-0.10/cli/fleet-cli/fleet_test",title:"",description:"fleet test",source:"@site/versioned_docs/version-0.10/cli/fleet-cli/fleet_test.md",sourceDirName:"cli/fleet-cli",slug:"/cli/fleet-cli/fleet_test",permalink:"/0.10/cli/fleet-cli/fleet_test",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.10/cli/fleet-cli/fleet_test.md",tags:[],version:"0.10",lastUpdatedAt:1721220078,formattedLastUpdatedAt:"Jul 17, 2024",frontMatter:{title:"",sidebar_label:"fleet test"},sidebar:"docs",previous:{title:"fleet target",permalink:"/0.10/cli/fleet-cli/fleet_target"},next:{title:"fleet-manager",permalink:"/0.10/cli/fleet-controller/fleet-manager"}},c={},s=[{value:"fleet test",id:"fleet-test",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fleet-test"},"fleet test"),(0,l.kt)("p",null,"Match a bundle to a target and render the output (deprecated)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fleet test [flags]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  -b, --bundle-file string    Location of the raw Bundle resource yaml\n  -f, --file string           Location of the fleet.yaml\n  -g, --group string          Cluster group to match against\n  -L, --group-label strings   Cluster group labels to match against\n  -h, --help                  help for test\n  -l, --label strings         Cluster labels to match against\n  -N, --name string           Cluster name to match against\n  -q, --quiet                 Just print the match and don't print the resources\n  -t, --target string         Explicit target to match\n")),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./fleet"},"fleet"),"\t -")))}p.isMDXComponent=!0}}]);