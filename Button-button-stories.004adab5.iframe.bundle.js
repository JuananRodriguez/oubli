/*! For license information please see Button-button-stories.004adab5.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./node_modules/core-js/modules/es.function.bind.js":function(module,exports,__webpack_require__){var $=__webpack_require__("./node_modules/core-js/internals/export.js"),bind=__webpack_require__("./node_modules/core-js/internals/function-bind.js");$({target:"Function",proto:!0,forced:Function.bind!==bind},{bind:bind})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/Molecules/Button/button.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Tertiary",(function(){return Tertiary})),__webpack_require__.d(__webpack_exports__,"Accessible",(function(){return button_stories_Accessible})),__webpack_require__.d(__webpack_exports__,"Inaccessible",(function(){return button_stories_Inaccessible}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button_Button=function Button(_ref){var _ref$message=_ref.message,message=void 0===_ref$message?"Hello world":_ref$message;return Object(jsx_runtime.jsx)("button",{children:message})};Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{message:{defaultValue:{value:'"Hello world"',computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Molecules\\Button\\index.js"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src\\Molecules\\Button\\index.js"});__webpack_exports__.default={title:"Design System/Atoms/Button"};var button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object.assign({},args))};button_stories_Template.displayName="Template";var Primary=button_stories_Template.bind({});Primary.args={background:"#ff0",label:"Button"},Primary.storyName="I am the primary";var Secondary=button_stories_Template.bind({});Secondary.args=Object.assign({},Primary.args,{label:"😄👍😍💯"});var Tertiary=button_stories_Template.bind({});Tertiary.args=Object.assign({},Primary.args,{label:"📚📕📈🤓"});var button_stories_Accessible=function Accessible(){return Object(jsx_runtime.jsx)("button",{children:"Accessible button"})};button_stories_Accessible.displayName="Accessible";var button_stories_Inaccessible=function Inaccessible(){return Object(jsx_runtime.jsx)("button",{style:{backgroundColor:"red",color:"darkRed"},children:"Inaccessible button"})};button_stories_Inaccessible.displayName="Inaccessible",Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Tertiary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Tertiary.parameters),button_stories_Accessible.parameters=Object.assign({storySource:{source:"() => <button>Accessible button</button>"}},button_stories_Accessible.parameters),button_stories_Inaccessible.parameters=Object.assign({storySource:{source:'() => (\r\n  <button style={{ backgroundColor: "red", color: "darkRed" }}>\r\n    Inaccessible button\r\n  </button>\r\n)'}},button_stories_Inaccessible.parameters),button_stories_Accessible.__docgenInfo={description:"",methods:[],displayName:"Accessible"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Molecules\\Button\\button.stories.js"]={name:"Accessible",docgenInfo:button_stories_Accessible.__docgenInfo,path:"src\\Molecules\\Button\\button.stories.js"}),button_stories_Inaccessible.__docgenInfo={description:"",methods:[],displayName:"Inaccessible"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\Molecules\\Button\\button.stories.js"]={name:"Inaccessible",docgenInfo:button_stories_Inaccessible.__docgenInfo,path:"src\\Molecules\\Button\\button.stories.js"})}}]);
//# sourceMappingURL=Button-button-stories.004adab5.iframe.bundle.js.map