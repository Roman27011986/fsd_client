/*! For license information please see shared-ui-AppLink-AppLink-stories.1d4e0f7a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkfsd_client=self.webpackChunkfsd_client||[]).push([[739],{"./src/shared/ui/AppLink/AppLink.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Red:()=>Red,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AppLink_stories});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),p="storybook/react-router-v6",l={CLEAR:`${p}/clear`,NAVIGATION:`${p}/navigation`,STORY_LOADED:`${p}/story-loaded`,ROUTE_MATCHES:`${p}/route-matches`,ACTION_INVOKED:`${p}/action_invoked`,ACTION_SETTLED:`${p}/action_settled`,LOADER_INVOKED:`${p}/loader_invoked`,LOADER_SETTLED:`${p}/loader_settled`},D=react.createContext([]),b=react.createContext(void 0);async function T(e){let n,t=e.clone(),r=t.headers.get("content-type")||"";switch(!0){case r.startsWith("text"):n=await t.text();break;case r.startsWith("application/json"):n=await t.json();break;case r.startsWith("multipart/form-data"):case r.startsWith("application/x-www-form-urlencoded"):n=function V(e){let t={};return e.forEach(((r,n)=>{r instanceof File?t[n]={filename:r.name,filesize:r.size,filetype:r.type}:t[n]=r})),t}(await t.formData())}return n}var w=()=>{let e=(0,react.useRef)(0);return(0,react.useCallback)((async(t,r)=>{e.current++;let n=`${t}_${e.current}`;switch(t){case l.ACTION_INVOKED:{let{request:o,params:i,context:a}=r;return{key:n,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await T(o)},context:a}}}case l.ACTION_SETTLED:return{key:n,type:t,data:r};case l.LOADER_INVOKED:{let{request:o,params:i,context:a}=r;return{key:n,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await T(o)},context:a}}}case l.LOADER_SETTLED:return{key:n,type:t,data:r}}}),[])};function $(){let e=function B(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=w();return(0,react.useCallback)((r=>async function(n){if(void 0===r)return;e.emit(l.ACTION_INVOKED,await t(l.ACTION_INVOKED,n));let o=await r(n);return e.emit(l.ACTION_SETTLED,await t(l.ACTION_SETTLED,o)),o}),[e,t])}(),t=function K(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=w();return(0,react.useCallback)((r=>async function(n){if(void 0===r)return;e.emit(l.LOADER_INVOKED,await t(l.LOADER_INVOKED,n));let o=await r(n);return e.emit(l.LOADER_SETTLED,await t(l.LOADER_SETTLED,o)),o}),[e,t])}(),r=(0,react.useCallback)((n=>n.map((o=>{let{action:i,loader:a,children:c,lazy:d}=o,h={...o};return d&&(h.lazy=async function(){let s=await d(),f={...s};return s.action&&(f.action=e(s.action)),s.loader&&(f.loader=t(s.loader)),f}),i&&(h.action=e(i)),a&&(h.loader=t(a)),c&&(h.children=r(c)),h}))),[e,t]);return r}var W,e,Y,x=()=>{let e=react.useContext(b);if(void 0===e)throw new Error("useStory should be used inside <StoryContext>");return e};function L(e,t,r=0){return 1!==e.length||void 0!==e[0].children&&0!==e[0].children.length?-1!==e.findIndex((o=>o.useStoryElement))?e.map((o=>o.useStoryElement?{...o,element:t}:o)):e.map((o=>o.children?{...o,children:L(o.children,t)}:o)):[{...e[0],element:t}]}function N(e,t){void 0===t&&(t={});let r=e;r.endsWith("*")&&"*"!==r&&!r.endsWith("/*")&&(function Ee(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}(!1,'Route path "'+r+'" will be treated as if it were "'+r.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+r.replace(/\*$/,"/*")+'".'),r=r.replace(/\*$/,"/*"));let n=r.startsWith("/")?"/":"",o=a=>null==a?"":"string"==typeof a?a:String(a),i=r.split(/\/+/).map(((a,c,d)=>{if(c===d.length-1&&"*"===a)return o(t["*"]);let s=a.match(/^:([\w-]+)(\??)$/);if(s){let[,f,_]=s,R=t[f];return function Se(e,t){if(!1===e||null===e||typeof e>"u")throw new Error(t)}("?"===_||null!=R,'Missing ":'+f+'" param'),o(R)}return a.replace(/\?$/g,"")})).filter((a=>!!a));return n+i.join("/")}(e=W||(W={})).Pop="POP",e.Push="PUSH",e.Replace="REPLACE",function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(Y||(Y={}));var J=["post","put","patch","delete"];new Set(J);var Pe=["get",...J];function M(e=[],t="/"){if(1!==e.length)return t;let r=e[0],n=function Ae(e,t=""){let r=["","/"],n=e.split("/").filter((a=>!r.includes(a))),o=t.split("/").filter((a=>!r.includes(a)));return"/"+[...n,...o].join("/")}(t,r.path);return void 0===r.children||0===r.children.length?n:M(r.children,n)}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function S(e){return 0===arguments.length?[]:Array.isArray(e)?e:[e]}new Set(Pe);var E=()=>react.useContext(D);var Z=()=>{let e=(0,react.useRef)(0),t=(0,dist.zy)(),r=(0,dist.g)(),[n]=(0,react_router_dom_dist.ok)(),o=(0,dist.wQ)(),i=E(),a=function X(e){let t={};return e.forEach(((r,n)=>{let o=t[n];"string"!=typeof o?Array.isArray(o)?t[n]=[...o,r]:t[n]=r:t[n]=[o,r]})),t}(n),c=(()=>{let e=(0,dist.zy)(),t=e.pathname;return e.search.length>0&&(t+=`?${e.search}`),e.hash.length>0&&(t+=`#${e.hash}`),t})(),d=i.map((s=>{let f={path:s.route.path};return Object.keys(s.params).length>0&&(f.params=s.params),f})),h={url:c,path:t.pathname,routeParams:r,searchParams:a,hash:t.hash,routeState:t.state,routeMatches:d};return s=>{e.current++;let f=`${s}_${e.current}`;switch(s){case l.STORY_LOADED:return{key:f,type:s,data:h};case l.NAVIGATION:return{key:f,type:s,data:{...h,navigationType:o}};case l.ROUTE_MATCHES:return{key:f,type:s,data:{matches:d}}}}};function C(){let{renderStory:e,storyContext:t}=x(),r=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),n=(0,dist.zy)(),o=E(),i=Z(),a=(0,react.useRef)(),c=(0,react.useRef)(),d=(0,react.useRef)(),h=void 0!==a.current,s=h&&n.key!==a.current;return s&&c.current!==n.key&&(r.emit(l.NAVIGATION,i(l.NAVIGATION)),c.current=n.key),s&&o.length>0&&o!==d.current&&r.emit(l.ROUTE_MATCHES,i(l.ROUTE_MATCHES)),!h&&o.length>0&&(r.emit(l.STORY_LOADED,i(l.STORY_LOADED)),a.current=n.key,d.current=o),d.current=o,react.createElement(react.Fragment,null,e(t))}function te(){let{addonParameters:e={}}=x(),{hydrationData:t,routing:r,navigationHistory:n,location:o}=e,i=$(),a=(0,react.useMemo)((()=>{let c=function q(e){return void 0===e?[{path:"/"}]:"string"==typeof e?[{path:e}]:(1===(e=S(e)).length&&(e[0].path??="/"),e)}(r),h=L(i(c),react.createElement(C,null)),{initialEntries:s,initialIndex:f}=function G({navigationHistory:e,location:t,routes:r}){if(void 0!==e){let A,R=[],F=Object.values(e);for(let v=0;v<F.length;v++){let{path:O,pathParams:U,searchParams:ie,hash:le,state:se,isInitialLocation:ue}=F[v];ue&&(A=v);let H=M(r),ce=("function"==typeof O?O(H,U??{}):O)??H;R.push({pathname:N(ce??"/",U),search:new URLSearchParams(ie).toString(),hash:le,state:se})}return A??=R.length-1,{initialEntries:R,initialIndex:A}}let{path:n,pathParams:o,searchParams:i,hash:a,state:c}=t??{},d=M(r);return{initialEntries:[{pathname:N(("function"==typeof n?n(d,o??{}):n)??d,o),search:new URLSearchParams(i).toString(),hash:a,state:c}],initialIndex:0}}({navigationHistory:n,location:o,routes:h});return(0,dist.bg)(h,{initialEntries:s,initialIndex:f,hydrationData:t})}),[i,t,o,n,r]);return react.createElement(react_router_dom_dist.pg,{router:a,fallbackElement:react.createElement(ze,null)})}function ze(){return react.createElement("p",null,"Performing initial data load")}C.displayName="RouterLogger";var re=({renderStory:e,storyContext:t,addonParameters:r})=>{let n=function k(){let[e,t]=(0,react.useState)([]),r=dist.UX;return r.Provider._context=new Proxy(r.Provider._context??{},{set:(n,o,i)=>("_currentValue"===o&&void 0!==i&&t((a=>i.matches.length>a.length?i.matches:a)),Reflect.set(n,o,i))}),e}();return react.createElement(b.Provider,{value:{renderStory:e,storyContext:t,addonParameters:r}},react.createElement(D.Provider,{value:n},react.createElement(te,null)))};function m(e){return function oe(e){if(react.isValidElement(e))return!0;switch(!0){case react.isValidElement(e):case"string"==typeof e:case"number"==typeof e:case"boolean"==typeof e:case null===e:case void 0===e:case e instanceof Object&&u(e,Symbol.iterator):return!0}return!1}(e)?{element:e}:e}var Be=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withRouter",parameterName:"reactRouter",wrapper:(e,t,{parameters:r})=>{let n=function ae(e={}){let t=["location","navigationHistory","routing"];if(Object.keys(e??{}).some((o=>t.includes(o))))return e;let n={routing:{},location:{},hydrationData:void 0};if(u(e,"routePath")&&(n.location.path=e.routePath,n.routing.path=e.routePath),u(e,"routeParams")&&(n.location.pathParams=e.routeParams),u(e,"routeState")&&(n.location.state=e.routeState),u(e,"routeHandle")&&(n.routing.handle=e.routeHandle),u(e,"searchParams")&&(n.location.searchParams=e.searchParams),u(e,"browserPath")&&(n.location.path=e.browserPath),u(e,"loader")&&(n.routing.loader=e.loader),u(e,"action")&&(n.routing.action=e.action),u(e,"errorElement")&&(n.routing.errorElement=e.errorElement),u(e,"hydrationData")&&(n.hydrationData=e.hydrationData),u(e,"shouldRevalidate")&&(n.routing.shouldRevalidate=e.shouldRevalidate),u(e,"routeId")&&(n.routing.id=e.routeId),u(e,"outlet")){let o=m(e.outlet);o.path??="",n.routing.children=[o]}return n.routing.useStoryElement=!0,n}(r);return react.createElement(re,{renderStory:e,storyContext:t,addonParameters:n})}});var AppLink=__webpack_require__("./src/shared/ui/AppLink/AppLink.tsx");const AppLink_stories={title:"shared/AppLink",component:AppLink.E,args:{to:"/"},decorators:[Be]};var Primary={args:{children:"primary",theme:AppLink.N.PRIMARY}},Secondary={args:{children:"secondary",theme:AppLink.N.SECONDARY}},Red={args:{children:"secondary",theme:AppLink.N.RED}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'primary',\n    theme: AppLinkTheme.PRIMARY\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'secondary',\n    theme: AppLinkTheme.SECONDARY\n  }\n}",...Secondary.parameters?.docs?.source}}},Red.parameters={...Red.parameters,docs:{...Red.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'secondary',\n    theme: AppLinkTheme.RED\n  }\n}",...Red.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Red"]},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[cls].concat(_toConsumableArray((arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).filter(Boolean)),_toConsumableArray(Object.entries(mods).filter((function(_ref){var _ref2=_slicedToArray(_ref,2),value=(_ref2[0],_ref2[1]);return Boolean(value)})).map((function(_ref3){return _slicedToArray(_ref3,1)[0]})))).join(" ")}__webpack_require__.d(__webpack_exports__,{x:()=>classNames})},"./src/shared/ui/AppLink/AppLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>AppLink,N:()=>AppLinkTheme});var dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AppLink_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AppLink_module.A,options);const AppLink_AppLink_module=AppLink_module.A&&AppLink_module.A.locals?AppLink_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["to","className","children","theme"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var AppLinkTheme=function(AppLinkTheme){return AppLinkTheme.PRIMARY="primary",AppLinkTheme.SECONDARY="secondary",AppLinkTheme.RED="red",AppLinkTheme}({}),AppLink=function AppLink(_ref){var to=_ref.to,className=_ref.className,children=_ref.children,_ref$theme=_ref.theme,theme=void 0===_ref$theme?AppLinkTheme.PRIMARY:_ref$theme,otherProps=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(dist.k2,_objectSpread(_objectSpread({to,className:(0,classNames.x)(AppLink_AppLink_module.appLink,_defineProperty({},AppLink_AppLink_module[theme],!0),[className])},otherProps),{},{children}))};AppLink.__docgenInfo={description:"",methods:[],displayName:"AppLink",props:{className:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"AppLinkTheme"},description:"",defaultValue:{value:"AppLinkTheme.PRIMARY",computed:!0}}},composes:["LinkProps"]}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/AppLink/AppLink.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-AppLink-AppLink-module__appLink--zyljp{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__primary--lPwbq{color:var(--primary-color)}.src-shared-ui-AppLink-AppLink-module__secondary--E8eho{color:var(--inverted-primary-color)}.src-shared-ui-AppLink-AppLink-module__red--ENIPJ{color:red}","",{version:3,sources:["webpack://./src/shared/ui/AppLink/AppLink.module.scss"],names:[],mappings:"AAAA,sDACI,0BAAA,CAGJ,sDACI,0BAAA,CAGJ,wDACI,mCAAA,CAGJ,kDACI,SAAA",sourcesContent:[".appLink {\r\n    color: var(--primary-color);\r\n}\r\n\r\n.primary {\r\n    color:var(--primary-color);\r\n}\r\n\r\n.secondary {\r\n    color:var(--inverted-primary-color);\r\n}\r\n\r\n.red {\r\n    color:red;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={appLink:"src-shared-ui-AppLink-AppLink-module__appLink--zyljp",primary:"src-shared-ui-AppLink-AppLink-module__primary--lPwbq",secondary:"src-shared-ui-AppLink-AppLink-module__secondary--E8eho",red:"src-shared-ui-AppLink-AppLink-module__red--ENIPJ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);