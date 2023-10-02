"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="Git Repository Contents",i={unversionedId:"gitrepo-content",id:"version-0.6/gitrepo-content",title:"Git Repository Contents",description:"Fleet will create bundles from a git repository. This happens either explicitly by specifying paths, or when a fleet.yaml is found.",source:"@site/versioned_docs/version-0.6/gitrepo-content.md",sourceDirName:".",slug:"/gitrepo-content",permalink:"/0.6/gitrepo-content",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.6/gitrepo-content.md",tags:[],version:"0.6",lastUpdatedAt:1696237286,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Bundle Lifecycle",permalink:"/0.6/ref-bundle-stages"},next:{title:"Namespaces",permalink:"/0.6/namespaces"}},s={},p=[{value:"Proper Namespace",id:"proper-namespace",level:2},{value:"How repos are scanned",id:"how-repos-are-scanned",level:2},{value:"<code>fleet.yaml</code>",id:"fleetyaml",level:2},{value:"Per Cluster Customization",id:"per-cluster-customization",level:2},{value:"Raw YAML Resource Customization",id:"raw-yaml-resource-customization",level:2},{value:"Cluster and Bundle State",id:"cluster-and-bundle-state",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git-repository-contents"},"Git Repository Contents"),(0,r.kt)("p",null,"Fleet will create bundles from a git repository. This happens either explicitly by specifying paths, or when a ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," is found."),(0,r.kt)("p",null,"Each bundle is created from paths in a GitRepo and modified further by reading the discovered ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," file.\nBundle lifecycles are tracked between releases by the helm releaseName field added to each bundle. If the releaseName is not\nspecified within fleet.yaml it is generated from ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo.name + path"),". Long names are truncated and a ",(0,r.kt)("inlineCode",{parentName:"p"},"-<hash>")," prefix is added."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The git repository has no explicitly required structure.")," It is important\nto realize the scanned resources will be saved as a resource in Kubernetes so\nyou want to make sure the directories you are scanning in git do not contain\narbitrarily large resources. Right now there is a limitation that the resources\ndeployed must ",(0,r.kt)("strong",{parentName:"p"},"gzip to less than 1MB"),"."),(0,r.kt)("h2",{id:"proper-namespace"},"Proper Namespace"),(0,r.kt)("p",null,"Git repos are added to the Fleet manager using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," custom resource type. The ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," type is namespaced. By default, Rancher will create two Fleet workspaces: ",(0,r.kt)("strong",{parentName:"p"},"fleet-default")," and ",(0,r.kt)("strong",{parentName:"p"},"fleet-local"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fleet-default")," will contain all the downstream clusters that are already registered through Rancher."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fleet-local")," will contain the local cluster by default.")),(0,r.kt)("p",null,"If you are using Fleet in a ",(0,r.kt)("a",{parentName:"p",href:"/0.6/concepts"},"single cluster")," style, the namespace will always be ",(0,r.kt)("strong",{parentName:"p"},"fleet-local"),". Check ",(0,r.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/namespaces/#fleet-local"},"here")," for more on the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet-local")," namespace."),(0,r.kt)("p",null,"For a ",(0,r.kt)("a",{parentName:"p",href:"/0.6/concepts"},"multi-cluster")," style, please ensure you use the correct repo that will map to the right target clusters."),(0,r.kt)("h2",{id:"how-repos-are-scanned"},"How repos are scanned"),(0,r.kt)("p",null,"Multiple paths can be defined for a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," and each path is scanned independently.\nInternally each scanned path will become a ",(0,r.kt)("a",{parentName:"p",href:"/0.6/concepts"},"bundle")," that Fleet will manage,\ndeploy, and monitor independently."),(0,r.kt)("p",null,"The following files are looked for to determine the how the resources will be deployed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"File"),(0,r.kt)("th",{parentName:"tr",align:null},"Location"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Chart.yaml"),":"),(0,r.kt)("td",{parentName:"tr",align:null},"/ relative to ",(0,r.kt)("inlineCode",{parentName:"td"},"path")," or custom path from ",(0,r.kt)("inlineCode",{parentName:"td"},"fleet.yaml")),(0,r.kt)("td",{parentName:"tr",align:null},"The resources will be deployed as a Helm chart. Refer to the ",(0,r.kt)("inlineCode",{parentName:"td"},"fleet.yaml")," for more options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kustomization.yaml"),":"),(0,r.kt)("td",{parentName:"tr",align:null},"/ relative to ",(0,r.kt)("inlineCode",{parentName:"td"},"path")," or custom path from ",(0,r.kt)("inlineCode",{parentName:"td"},"fleet.yaml")),(0,r.kt)("td",{parentName:"tr",align:null},"The resources will be deployed using Kustomize. Refer to the ",(0,r.kt)("inlineCode",{parentName:"td"},"fleet.yaml")," for more options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"fleet.yaml")),(0,r.kt)("td",{parentName:"tr",align:null},"Any subpath"),(0,r.kt)("td",{parentName:"tr",align:null},"If any fleet.yaml is found a new ",(0,r.kt)("a",{parentName:"td",href:"/0.6/concepts"},"bundle")," will be defined. This allows mixing charts, kustomize, and raw YAML in the same repo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"}," *.yaml ")),(0,r.kt)("td",{parentName:"tr",align:null},"Any subpath"),(0,r.kt)("td",{parentName:"tr",align:null},"If a ",(0,r.kt)("inlineCode",{parentName:"td"},"Chart.yaml")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"kustomization.yaml")," is not found then any ",(0,r.kt)("inlineCode",{parentName:"td"},".yaml")," or ",(0,r.kt)("inlineCode",{parentName:"td"},".yml")," file will be assumed to be a Kubernetes resource and will be deployed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"overlays/{name}")),(0,r.kt)("td",{parentName:"tr",align:null},"/ relative to ",(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"When deploying using raw YAML (not Kustomize or Helm) ",(0,r.kt)("inlineCode",{parentName:"td"},"overlays")," is a special directory for customizations.")))),(0,r.kt)("h2",{id:"fleetyaml"},(0,r.kt)("inlineCode",{parentName:"h2"},"fleet.yaml")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," is an optional file that can be included in the git repository to change the behavior of how\nthe resources are deployed and customized.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," is always at the root relative to the ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo"),"\nand if a subdirectory is found with a ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," a new ",(0,r.kt)("a",{parentName:"p",href:"/0.6/concepts"},"bundle")," is defined that will then be\nconfigured differently from the parent bundle."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Helm chart dependencies"),":\nIt is up to the user to fulfill the dependency list for the Helm charts. As such, you must manually run ",(0,r.kt)("inlineCode",{parentName:"p"},"helm dependencies update $chart")," OR run ",(0,r.kt)("inlineCode",{parentName:"p"},"helm dependencies build $chart")," prior to install. See the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/deploy-across-clusters/fleet/#helm-chart-dependencies"},"Fleet docs")," in Rancher for more information.")),(0,r.kt)("p",null,"The available fields are documented in the ",(0,r.kt)("a",{parentName:"p",href:"/0.6/ref-fleet-yaml"},"fleet.yaml reference")),(0,r.kt)("p",null,"For a private Helm repo, users can reference a secret from the git repo resource.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/0.6/gitrepo-add#using-private-helm-repositories"},"Using Private Helm Repositories")," for more information."),(0,r.kt)("h2",{id:"per-cluster-customization"},"Per Cluster Customization"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," defines which clusters a git repository should be deployed to and the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," in the repository\ndetermines how the resources are customized per target."),(0,r.kt)("p",null,"All clusters and cluster groups in the same namespace as the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," will be evaluated against all targets of that\n",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo"),". The targets list is evaluated one by one and if there is a match the resource will be deployed to the cluster.\nIf no match is made against the target list on the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," then the resources will not be deployed to that cluster.\nOnce a target cluster is matched the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," from the git repository is then consulted for customizations. The\n",(0,r.kt)("inlineCode",{parentName:"p"},"targetCustomizations")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," will be evaluated one by one and the first match will define how the\nresource is to be configured. If no match is made the resources will be deployed with no additional customizations."),(0,r.kt)("p",null,"There are three approaches to matching clusters for both ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," ",(0,r.kt)("inlineCode",{parentName:"p"},"targets")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," ",(0,r.kt)("inlineCode",{parentName:"p"},"targetCustomizations"),'.\nOne can use cluster selectors, cluster group selectors, or an explicit cluster group name.  All criteria is additive so\nthe final match is evaluated as "clusterSelector && clusterGroupSelector && clusterGroup".  If any of the three have the\ndefault value it is dropped from the criteria.  The default value is either null or "".  It is important to realize\nthat the value ',(0,r.kt)("inlineCode",{parentName:"p"},"{}"),' for a selector means "match everything."'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Match everything\nclusterSelector: {}\n# Selector ignored\nclusterSelector: null\n")),(0,r.kt)("h2",{id:"raw-yaml-resource-customization"},"Raw YAML Resource Customization"),(0,r.kt)("p",null,"When using Kustomize or Helm the ",(0,r.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm.values")," will control how the resource are\ncustomized per target cluster. If you are using raw YAML then the following simple mechanism is built-in and can\nbe used.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"overlays/")," folder in the git repo is treated specially as folder containing folders that\ncan be selected to overlay on top per target cluster. The resource overlay content\nuses a file name based approach.  This is different from kustomize which uses a resource based approach.  In kustomize\nthe resource Group, Kind, Version, Name, and Namespace identify resources and are then merged or patched.  For Fleet\nthe overlay resources will override or patch content with a matching file name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Base files\ndeployment.yaml\nsvc.yaml\n\n# Overlay files\n\n# The following file will be added\noverlays/custom/configmap.yaml\n# The following file will replace svc.yaml\noverlays/custom/svc.yaml\n# The following file will patch deployment.yaml\noverlays/custom/deployment_patch.yaml\n")),(0,r.kt)("p",null,"A file named ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," will replace a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," from the base resources or a previous overlay.  In order to patch\nthe contents of a file the convention of adding ",(0,r.kt)("inlineCode",{parentName:"p"},"_patch.")," (notice the trailing period) to the filename is used. The string ",(0,r.kt)("inlineCode",{parentName:"p"},"_patch."),"\nwill be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},".")," from the file name and that will be used as the target.  For example ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment_patch.yaml"),"\nwill target ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.yaml"),".  The patch will be applied using JSON Merge, Strategic Merge Patch, or JSON Patch.\nWhich strategy is used is based on the file content. Even though JSON strategies are used, the files can be written\nusing YAML syntax."),(0,r.kt)("h2",{id:"cluster-and-bundle-state"},"Cluster and Bundle State"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/0.6/cluster-bundles-state"},"Cluster and Bundle state"),"."))}c.isMDXComponent=!0}}]);