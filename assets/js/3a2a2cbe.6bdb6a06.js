"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},l="Create a Bundle Resource",i={unversionedId:"bundle-add",id:"version-0.7/bundle-add",title:"Create a Bundle Resource",description:"Bundles are automatically created by Fleet when a GitRepo is created. In most cases Bundles should not be created",source:"@site/versioned_docs/version-0.7/bundle-add.md",sourceDirName:".",slug:"/bundle-add",permalink:"/0.7/bundle-add",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.7/bundle-add.md",tags:[],version:"0.7",lastUpdatedAt:1721220078,formattedLastUpdatedAt:"Jul 17, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Using Image Scan to Update Container Image References",permalink:"/0.7/imagescan"},next:{title:"fleet-agent",permalink:"/0.7/cli/fleet-agent/"}},s={},c=[{value:"Limitations",id:"limitations",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-bundle-resource"},"Create a Bundle Resource"),(0,r.kt)("p",null,"Bundles are automatically created by Fleet when a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," is created. In most cases ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundles")," should not be created\nmanually by the user. If you want to deploy resources from a git repository use a\n",(0,r.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-add"},"GitRepo")," instead."),(0,r.kt)("p",null,"If you want to deploy resources without a git repository follow this guide to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle"),"."),(0,r.kt)("p",null,"When creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," Fleet will fetch the resources from a git repository, and add them to a Bundle.\nWhen creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle")," resources need to be explicitly specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle")," Spec.\nResources can be compressed with gz. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/v2.7.3/pkg/controllers/provisioningv2/managedchart/managedchart.go#L149-L153"},"here"),"\nan example of how Rancher uses compression in go code."),(0,r.kt)("p",null,"If you would like to deploy in downstream clusters, you need to define targets. Targets work similarly to targets in ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo"),".\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/gitrepo-targets#defining-targets"},"Mapping to Downstream Clusters"),"."),(0,r.kt)("p",null,"The following example creates a nginx ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," in the local cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Bundle\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  # Any name can be used here\n  name: my-bundle\n  # For single cluster use fleet-local, otherwise use the namespace of\n  # your choosing\n  namespace: fleet-local\nspec:\n  resources:\n  # List of all resources that will be deployed\n  - content: |\n      apiVersion: apps/v1\n      kind: Deployment\n      metadata:\n        name: nginx-deployment\n        labels:\n          app: nginx\n      spec:\n        replicas: 3\n        selector:\n          matchLabels:\n            app: nginx\n        template:\n          metadata:\n            labels:\n              app: nginx\n          spec:\n            containers:\n              - name: nginx\n                image: nginx:1.14.2\n                ports:\n                  - containerPort: 80\n    name: nginx.yaml\n  targets:\n  - clusterName: local\n\n")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"Helm options related to downloading the helm chart will be ignored. The helm chart is downloaded by the fleet-cli, which creates the bundles. The bundle has to contain all the resources from the chart. Therefore the bundle will ignore:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spec.helm.repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spec.helm.charts"))),(0,r.kt)("p",null,"You can't use a ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," in resources, it is only used by the fleet-cli to create bundles."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.targetRestrictions")," field is not useful, as it is an allow list for targets specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.targets"),". It is not needed, since ",(0,r.kt)("inlineCode",{parentName:"p"},"targets")," are explicitly given in a bundle and an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"targetRestrictions")," defaults to allow."))}d.isMDXComponent=!0}}]);