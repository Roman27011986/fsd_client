(self.webpackChunkfsd_client=self.webpackChunkfsd_client||[]).push([[792],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./config/.storybook/preview.js")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./config/.storybook/preview.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{parameters:()=>parameters});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.A,options);styles.A&&styles.A.locals&&styles.A.locals;var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':root{--font-family-main: Consolas, "Times New Roman", Serif;--font-size-m: 16px;--font-size-l: 24px;--font-size-xl: 32px;--font-line-m: 24px;--font-line-l: 32px;--font-line-xl: 40px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px;--modal-z-index: 10;--overlay-color: rgba(0 0 0 / 60%)}:root{--bg-color: rgba(80, 135, 132, 0.563);--inverted-bg-color: rgba(80, 80, 135, 0.563);--primary-color:rgba(151, 18, 69, 0.777);--secondary-color:rgba(39, 84, 173, 0.777);--inverted-primary-color:rgba(73, 113, 73, 0.777);--inverted-secondary-color:rgba(39, 173, 39, 0.777)}.app.dark{--bg-color: rgba(80, 80, 135, 0.563);--inverted-bg-color: rgba(80, 135, 132, 0.563);--primary-color:rgba(73, 113, 73, 0.777);--secondary-color:rgba(39, 173, 39, 0.777);--inverted-primary-color:rgba(73, 99, 113, 0.777);--inverted-secondary-color:rgba(39, 84, 173, 0.777)}*{margin:0;padding:0;box-sizing:border-box}ul{list-style:none}body{font:var(--font-m);color:var(--primary-color)}.app{background:var(--bg-color);min-height:100vh}.content-page{display:flex}.page-wrapper{flex-grow:1;padding:20px}',"",{version:3,sources:["webpack://./src/app/styles/variables/global.scss","webpack://./src/app/styles/themes/normal.scss","webpack://./src/app/styles/themes/dark.scss","webpack://./src/app/styles/index.scss"],names:[],mappings:"AAAA,MACI,sDAAA,CAEA,mBAAA,CACA,mBAAA,CACA,oBAAA,CAEA,mBAAA,CACA,mBAAA,CACA,oBAAA,CAEA,yEAAA,CACA,yEAAA,CACA,4EAAA,CAGA,qBAAA,CACA,sBAAA,CACA,+BAAA,CAGA,mBAAA,CAGA,kCAAA,CCxBJ,MACI,qCAAA,CACA,6CAAA,CAEA,wCAAA,CACA,0CAAA,CAEA,iDAAA,CACA,mDAAA,CCRJ,UACI,oCAAA,CACA,8CAAA,CAEA,wCAAA,CACA,0CAAA,CAEA,iDAAA,CACA,mDAAA,CCJJ,EACG,QAAA,CACA,SAAA,CACA,qBAAA,CAGH,GACG,eAAA,CAGH,KACG,kBAAA,CACA,0BAAA,CAGH,KACG,0BAAA,CACA,gBAAA,CAGH,cACG,YAAA,CAGH,cACG,WAAA,CACA,YAAA",sourcesContent:[':root {\r\n    --font-family-main: Consolas, "Times New Roman", Serif;\r\n\r\n    --font-size-m: 16px;\r\n    --font-size-l: 24px;\r\n    --font-size-xl: 32px;\r\n\r\n    --font-line-m: 24px;\r\n    --font-line-l: 32px;\r\n    --font-line-xl: 40px;\r\n\r\n    --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\r\n    --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\r\n    --font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);\r\n\r\n    // Размеры\r\n    --navbar-height: 50px;\r\n    --sidebar-width: 300px;\r\n    --sidebar-width-collapsed: 80px;\r\n\r\n    // z - Индексы\r\n    --modal-z-index: 10;\r\n\r\n    // Цвета\r\n    --overlay-color: rgba(0 0 0 / 60%);\r\n\r\n}',":root {\r\n    --bg-color: rgba(80, 135, 132, 0.563);\r\n    --inverted-bg-color: rgba(80, 80, 135, 0.563);\r\n\r\n    --primary-color:rgba(151, 18, 69, 0.777);\r\n    --secondary-color:rgba(39, 84, 173, 0.777);\r\n\r\n    --inverted-primary-color:rgba(73, 113, 73, 0.777);\r\n    --inverted-secondary-color:rgba(39, 173, 39, 0.777);\r\n}",".app.dark {\r\n    --bg-color: rgba(80, 80, 135, 0.563);\r\n    --inverted-bg-color: rgba(80, 135, 132, 0.563);\r\n\r\n    --primary-color:rgba(73, 113, 73, 0.777);\r\n    --secondary-color:rgba(39, 173, 39, 0.777);\r\n\r\n    --inverted-primary-color:rgba(73, 99, 113, 0.777);\r\n    --inverted-secondary-color:rgba(39, 84, 173, 0.777);\r\n}",'@import "variables/global";\r\n@import "themes/normal";\r\n@import "themes/dark";\r\n\r\n* {\r\n   margin: 0;\r\n   padding: 0;\r\n   box-sizing: border-box;\r\n}\r\n\r\nul {\r\n   list-style: none;\r\n}\r\n\r\nbody {\r\n   font: var(--font-m);\r\n   color: var(--primary-color);\r\n}\r\n\r\n.app {\r\n   background: var(--bg-color);\r\n   min-height: 100vh;\r\n}\r\n\r\n.content-page {\r\n   display: flex;\r\n}\r\n\r\n.page-wrapper {\r\n   flex-grow: 1;\r\n   padding: 20px;\r\n}'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./pages/AboutPage/ui/AboutPage.stories":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",14],"./pages/AboutPage/ui/AboutPage.stories.tsx":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",14],"./pages/MainPage/ui/MainPage.stories":["./src/pages/MainPage/ui/MainPage.stories.tsx",156,329,38],"./pages/MainPage/ui/MainPage.stories.tsx":["./src/pages/MainPage/ui/MainPage.stories.tsx",156,329,38],"./pages/NotFoundPage/ui/NotFoundPage.stories":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",156,466],"./pages/NotFoundPage/ui/NotFoundPage.stories.tsx":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",156,466],"./shared/ui/AppLink/AppLink.stories":["./src/shared/ui/AppLink/AppLink.stories.tsx",976,739],"./shared/ui/AppLink/AppLink.stories.tsx":["./src/shared/ui/AppLink/AppLink.stories.tsx",976,739],"./shared/ui/Button/Button.stories":["./src/shared/ui/Button/Button.stories.tsx",425],"./shared/ui/Button/Button.stories.tsx":["./src/shared/ui/Button/Button.stories.tsx",425],"./shared/ui/Loader/Loader.stories":["./src/shared/ui/Loader/Loader.stories.tsx",495],"./shared/ui/Loader/Loader.stories.tsx":["./src/shared/ui/Loader/Loader.stories.tsx",495],"./shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories":["./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",964,404],"./shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":["./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",964,404],"./widgets/SideBar/ui/SideBar/SideBar.stories":["./src/widgets/SideBar/ui/SideBar/SideBar.stories.tsx",156,976,964,272],"./widgets/SideBar/ui/SideBar/SideBar.stories.tsx":["./src/widgets/SideBar/ui/SideBar/SideBar.stories.tsx",156,976,964,272]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[740],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);