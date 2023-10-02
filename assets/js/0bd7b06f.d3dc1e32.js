"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[6422],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(a),h=r,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return a?n.createElement(u,l(l({ref:t},d),{},{components:a})):n.createElement(u,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6218:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},l="Create a GitRepo Resource",o={unversionedId:"gitrepo-add",id:"version-0.7/gitrepo-add",title:"Create a GitRepo Resource",description:"Create GitRepo Instance",source:"@site/versioned_docs/version-0.7/gitrepo-add.md",sourceDirName:".",slug:"/gitrepo-add",permalink:"/0.7/gitrepo-add",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.7/gitrepo-add.md",tags:[],version:"0.7",lastUpdatedAt:1696237286,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Setup Multi User",permalink:"/0.7/multi-user"},next:{title:"Mapping to Downstream Clusters",permalink:"/0.7/gitrepo-targets"}},p={},s=[{value:"Create GitRepo Instance",id:"create-gitrepo-instance",level:2},{value:"Proper Namespace",id:"proper-namespace",level:2},{value:"Adding Private Git Repository",id:"adding-private-git-repository",level:2},{value:"Using HTTP Auth",id:"using-http-auth",level:3},{value:"Using Private Helm Repositories",id:"using-private-helm-repositories",level:2},{value:"Use different helm credentials for each path",id:"use-different-helm-credentials-for-each-path",level:3}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-gitrepo-resource"},"Create a GitRepo Resource"),(0,r.kt)("h2",{id:"create-gitrepo-instance"},"Create GitRepo Instance"),(0,r.kt)("p",null,"Git repositories are registered by creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," resource in Kubernetes. Refer\nto the ",(0,r.kt)("a",{parentName:"p",href:"/0.7/tut-deployment"},"creating a deployment tutorial")," for examples."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/0.7/gitrepo-content"},"Git Repository Contents")," has detail about the content of the Git repository."),(0,r.kt)("p",null,"The available fields of the GitRepo custom resource are documented in the ",(0,r.kt)("a",{parentName:"p",href:"/0.7/ref-gitrepo"},"GitRepo resource reference")),(0,r.kt)("h2",{id:"proper-namespace"},"Proper Namespace"),(0,r.kt)("p",null,"Git repos are added to the Fleet manager using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," custom resource type. The ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," type is namespaced. By default, Rancher will create two Fleet workspaces: ",(0,r.kt)("strong",{parentName:"p"},"fleet-default")," and ",(0,r.kt)("strong",{parentName:"p"},"fleet-local"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fleet-default")," will contain all the downstream clusters that are already registered through Rancher."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fleet-local")," will contain the local cluster by default.")),(0,r.kt)("p",null,"If you are using Fleet in a ",(0,r.kt)("a",{parentName:"p",href:"/0.7/concepts"},"single cluster")," style, the namespace will always be ",(0,r.kt)("strong",{parentName:"p"},"fleet-local"),". Check ",(0,r.kt)("a",{parentName:"p",href:"https://fleet.rancher.io/namespaces/#fleet-local"},"here")," for more on the ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet-local")," namespace."),(0,r.kt)("p",null,"For a ",(0,r.kt)("a",{parentName:"p",href:"/0.7/concepts"},"multi-cluster")," style, please ensure you use the correct repo that will map to the right target clusters."),(0,r.kt)("h2",{id:"adding-private-git-repository"},"Adding Private Git Repository"),(0,r.kt)("p",null,"Fleet supports both http and ssh auth key for private repository. To use this you have to create a secret in the same namespace."),(0,r.kt)("p",null,"For example, to generate a private ssh key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'ssh-keygen -t rsa -b 4096 -m pem -C "user@email.com"\n')),(0,r.kt)("p",null,"Note: The private key format has to be in ",(0,r.kt)("inlineCode",{parentName:"p"},"EC PRIVATE KEY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RSA PRIVATE KEY")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PRIVATE KEY")," and should not contain a passphase."),(0,r.kt)("p",null,"Put your private key into secret, use the namespace the GitRepo is in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"kubectl create secret generic ssh-key -n fleet-default --from-file=ssh-privatekey=/file/to/private/key  --type=kubernetes.io/ssh-auth\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Private key with passphrase is not supported.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The key has to be in PEM format.")),(0,r.kt)("p",null,"Fleet supports putting ",(0,r.kt)("inlineCode",{parentName:"p"},"known_hosts")," into ssh secret. Here is an example of how to add it:"),(0,r.kt)("p",null,"Fetch the public key hash(take github as an example)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ssh-keyscan -H github.com\n")),(0,r.kt)("p",null,"And add it into secret:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: ssh-key\ntype: kubernetes.io/ssh-auth\nstringData:\n  ssh-privatekey: <private-key>\n  known_hosts: |-\n    |1|YJr1VZoi6dM0oE+zkM0do3Z04TQ=|7MclCn1fLROZG+BgR4m1r8TLwWc= ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you don't add it any server's public key will be trusted and added. (",(0,r.kt)("inlineCode",{parentName:"p"},"ssh -o stricthostkeychecking=accept-new")," will be used)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are using openssh format for the private key and you are creating it in the UI, make sure a carriage return is appended in the end of the private key.")),(0,r.kt)("h3",{id:"using-http-auth"},"Using HTTP Auth"),(0,r.kt)("p",null,"Create a secret containing username and password. You can replace the password with a personal access token if necessary. Also see ",(0,r.kt)("a",{parentName:"p",href:"./troubleshooting#http-secrets-in-github"},"HTTP secrets in Github"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic basic-auth-secret -n fleet-default --type=kubernetes.io/basic-auth --from-literal=username=$user --from-literal=password=$pat\n")),(0,r.kt)("p",null,"Just like with SSH, reference the secret in your GitRepo resource via ",(0,r.kt)("inlineCode",{parentName:"p"},"clientSecretName"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spec:\n  repo: https://github.com/fleetrepoci/gitjob-private.git\n  branch: main\n  clientSecretName: basic-auth-secret\n")),(0,r.kt)("h2",{id:"using-private-helm-repositories"},"Using Private Helm Repositories"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The credentials will be used unconditionally for all Helm repositories referenced by the gitrepo resource.\nMake sure you don't leak credentials by mixing public and private repositories. Use ",(0,r.kt)("a",{parentName:"p",href:"#use-different-helm-credentials-for-each-path"},"different helm credentials for each path"),",\nor split them into different gitrepos, or use ",(0,r.kt)("inlineCode",{parentName:"p"},"helmRepoURLRegex")," to limit the scope of credentials to certain servers.")),(0,r.kt)("p",null,"For a private Helm repo, users can reference a secret with the following keys:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," for basic http auth if the Helm HTTP repo is behind basic auth.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cacerts")," for custom CA bundle if the Helm repo is using a custom CA.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ssh-privatekey")," for ssh private key if repo is using ssh protocol. Private key with passphase is not supported currently."))),(0,r.kt)("p",null,"For example, to add a secret in kubectl, run"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create secret -n $namespace generic helm --from-literal=username=foo --from-literal=password=bar --from-file=cacerts=/path/to/cacerts --from-file=ssh-privatekey=/path/to/privatekey.pem")),(0,r.kt)("p",null,"After secret is created, specify the secret to ",(0,r.kt)("inlineCode",{parentName:"p"},"gitRepo.spec.helmSecretName"),". Make sure secret is created under the same namespace with gitrepo."),(0,r.kt)("h3",{id:"use-different-helm-credentials-for-each-path"},"Use different helm credentials for each path"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"gitRepo.spec.helmSecretName")," will be ignored if ",(0,r.kt)("inlineCode",{parentName:"p"},"gitRepo.spec.helmSecretNameForPaths")," is provided")),(0,r.kt)("p",null,"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets-path.yaml")," that contains credentials for each path defined in a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo"),". Credentials will not be used\nfor paths that are not present in this file.\nThe path is the actual path to the bundle (ie to a folder containing a ",(0,r.kt)("inlineCode",{parentName:"p"},"fleet.yaml")," file) within the git repository, which might have more segments than the entry under ",(0,r.kt)("inlineCode",{parentName:"p"},"paths:"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"path-one: # path path-one must exist in the repository\n  username: user\n  password: pass\npath-two:  # path path-one must exist in the repository\n  username: user2\n  password: pass2\n  caBundle: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCiAgICBNSUlEblRDQ0FvV2dBd0lCQWdJVUNwMHB2SVJTb2c0eHJKN2Q1SUI2ME1ka0k1WXdEUVlKS29aSWh2Y05BUUVMCiAgICBCUUF3WGpFTE1Ba0dBMVVFQmhNQ1FWVXhFekFSQmdOVkJBZ01DbE52YldVdFUzUmhkR1V4SVRBZkJnTlZCQW9NCiAgICBHRWx1ZEdWeWJtVjBJRmRwWkdkcGRITWdVSFI1SUV4MFpERVhNQlVHQTFVRUF3d09jbUZ1WTJobGNpNXRlUzV2CiAgICBjbWN3SGhjTk1qTXdOREkzTVRVd056VXpXaGNOTWpnd05ESTFNVFV3TnpVeldqQmVNUXN3Q1FZRFZRUUdFd0pCCiAgICBWVEVUTUJFR0ExVUVDQXdLVTI5dFpTMVRkR0YwWlRFaE1COEdBMVVFQ2d3WVNXNTBaWEp1WlhRZ1YybGtaMmwwCiAgICBjeUJRZEhrZ1RIUmtNUmN3RlFZRFZRUUREQTV5WVc1amFHVnlMbTE1TG05eVp6Q0NBU0l3RFFZSktvWklodmNOCiAgICBBUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBTXBvZE5TMDB6NDc1dnVSc2ZZcTFRYTFHQVl3QU92anV4MERKTHY5CiAgICBrZFhwT091dGdjMU8yWUdqNUlCVGQzVmpISmFJYUg3SDR2Rm84RlBaMG9zcU9YaFg3eUM4STdBS3ZhOEE5VmVmCiAgICBJVXp6Vlo1cCs1elNxRjdtZTlOaUNiL0pVSkZLT0ZsTkF4cjZCcXhoMEIyN1VZTlpjaUIvL1V0L0I2eHJuVE55CiAgICBoRzJiNzk4bjg4bFZqY3EzbEE0djFyM3VzWGYxVG5aS2t2UEN4ZnFHYk5OdTlpTjdFZnZHOWoyekdHcWJvcDRYCiAgICBXY3VSa3N3QkgxZlRNS0ZrbGcrR1VsZkZPMGFzL3phalVOdmdweTlpdVBMZUtqZTVWcDBiMlBLd09qUENpV2d4CiAgICBabDJlVDlNRnJjV0F3NTg3emE5NDBlT1Era2pkdmVvUE5sU2k3eVJMMW96YlRka0NBd0VBQWFOVE1GRXdIUVlECiAgICBWUjBPQkJZRUZEQkNkYjE4M1hsU0tWYzBxNmJSTCt0dVNTV3lNQjhHQTFVZEl3UVlNQmFBRkRCQ2RiMTgzWGxTCiAgICBLVmMwcTZiUkwrdHVTU1d5TUE4R0ExVWRFd0VCL3dRRk1BTUJBZjh3RFFZSktvWklodmNOQVFFTEJRQURnZ0VCCiAgICBBQ1BCVERkZ0dCVDVDRVoxd1pnQmhKdm9GZTk2MUJqVCtMU2RxSlpsSmNRZnlnS0hyNks5ZmZaY1ZlWlBoMVU0CiAgICB3czBuWGNOZiszZGJlTjl4dVBiY0VqUWlQaFJCcnRzalE1T1JiVHdYWEdBdzlYbDZYTkl6YjN4ZDF6RWFzQXZPCiAgICBJMjM2ZHZXQ1A0dWoycWZqR0FkQjJnaXU2b2xHK01CWHlneUZKMElzRENraldLZysyWEdmU3lyci9KZU1vZlFBCiAgICB1VU9wcFVGdERYd0lrUW1VTGNVVUxWcTdtUVNQb0lzVkNNM2hKNVQzczdUSWtHUDZVcGVSSjgzdU9LbURYMkRHCiAgICBwVWVQVHBuVWVLOVMzUEVKTi9XcmJSSVd3WU1OR29qdDRKWitaK1N6VE1aVkh0SlBzaGpjL1hYOWZNU1ZXQmlzCiAgICBQRW5MU256MDQ4OGFUQm5SUFlnVXFsdz0KICAgIC0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0=\n  sshPrivateKey: ICAgIC0tLS0tQkVHSU4gQ0VSVElGSUNBVEUtLS0tLQogICAgTUlJRFF6Q0NBaXNDRkgxTm5YUWI5SlV6anNBR3FSc3RCYncwRlFpak1BMEdDU3FHU0liM0RRRUJDd1VBTUY0eAogICAgQ3pBSkJnTlZCQVlUQWtGVk1STXdFUVlEVlFRSURBcFRiMjFsTFZOMFlYUmxNU0V3SHdZRFZRUUtEQmhKYm5SbAogICAgY201bGRDQlhhV1JuYVhSeklGQjBlU0JNZEdReEZ6QVZCZ05WQkFNTURuSmhibU5vWlhJdWJYa3ViM0puTUI0WAogICAgRFRJek1EUXlOekUxTVRBMU5Gb1hEVEkwTURReU5qRTFNVEExTkZvd1hqRUxNQWtHQTFVRUJoTUNRVlV4RXpBUgogICAgQmdOVkJBZ01DbE52YldVdFUzUmhkR1V4SVRBZkJnTlZCQW9NR0VsdWRHVnlibVYwSUZkcFpHZHBkSE1nVUhSNQogICAgSUV4MFpERVhNQlVHQTFVRUF3d09jbUZ1WTJobGNpNXRlUzV2Y21jd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQQogICAgQTRJQkR3QXdnZ0VLQW9JQkFRRGd6UUJJTW8xQVFHNnFtYmozbFlYUTFnZjhYcURTbjdyM2lGcVZZZldDVWZOSwogICAgaGZwampTRGpOMmRWWEV2UXA3R0t3akFHUElFbXR5RmxyUW5rUGtnTGFSaU9jSDdNN0p2c3ZIa0Ewd0g0dzJ2QgogICAgUEp6aVlINWh2MUE2WS9NcFM5bVkvQUVxVm80TUJkdnNZQzc3MFpCbzVBMitIUEtMd1YzMVZyYlhhTytWeUJtNAogICAgSmJhZHlNUk40N3BKRWdPMjJaYVRXL3Y3S1dKdjNydGJTMlZVSkNlU0piWlpsN09ocHhLRTVocStmK0RWaU1mcQogICAgTWx4ODNEV2pVSlVkV3lqVUZYVlk0bEdVaUtrRWVtSlVuSlVyY1ErOXE1SzVaWmhyRjhoRXhKRjhiZTZjemVzeAogICAga1VWN3dKb1RjWkd2bUhYSk1FNmtrQXh4Mmh3bU8wSFcyQWdDdTJZekFnTUJBQUV3RFFZSktvWklodmNOQVFFTAogICAgQlFBRGdnRUJBS1BpTWdXc1dCTnJvRkY2aWpYL2xMM3FxaWc4TjlkR1VPWDIyRVJDU1RTekNONjM0ZTFkZUhsdQogICAgbTc5OU11Q3hvWSsyZWluNlV1cFMvTEV6cnpvU2dDVWllQzQrT3ZralF5eGJpTFR6bW1OWEFnd09TM3RvTHRGWAogICAgbytmWWpSMU9xcHVPS29kMkhiYjliczRWcXdaNHEvMlVKbXE2Q01pYjZKZUE2VFJvK2Rkc0pUM2dDOFhWL1Z1MAogICAgNnkwdjJxdTM0bm1MYjFxOHFTS1RwZXYyQmwzQUJGY3NyS0JvNHFieUM2bnBTbnpZenNYcS90SlFLclplNE4vMgogICAgUXIzd1dxQ0pDVWUrMWVsT3A2b0JVcXNWSnc3aHk3YzRLc1Fna09ERDJkc2NuNEF1NGJhWlY2QmpySm1USVY0aQogICAgeXJ1dk9oZ2lINklGUVdDWmVQM2s0MU5obWRzRTNHQT0KICAgIC0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n")),(0,r.kt)("p",null,"Create the secret"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic path-auth-secret -n fleet-default --from-file=secrets-path.yaml\n")),(0,r.kt)("p",null,"In the previous example credentials for username ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," will be used for the path ",(0,r.kt)("inlineCode",{parentName:"p"},"path-one")," and credentials for username\n",(0,r.kt)("inlineCode",{parentName:"p"},"user2")," will be used for the path ",(0,r.kt)("inlineCode",{parentName:"p"},"path-two"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"caBundle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sshPrivateKey")," must be base64 encoded."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are using ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},'"rancher-backups"')," and want this secret to be included the backup, please add the label ",(0,r.kt)("inlineCode",{parentName:"p"},"resources.cattle.io/backup: true")," to the secret. In that case, make sure to encrypt the backup to protect sensitive credentials."),(0,r.kt)("h1",{parentName:"admonition",id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",{parentName:"admonition"},"See Fleet Troubleshooting section ",(0,r.kt)("a",{parentName:"p",href:"/0.7/troubleshooting"},"here"),".")))}c.isMDXComponent=!0}}]);