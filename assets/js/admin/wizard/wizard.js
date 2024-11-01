(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.hooks,n=window.React,o=window.wp.i18n,a=window.wp.components,r=window.wp.element,i=({setting:e,value:t,onChange:o})=>{const a=(0,r.useRef)(),[i,l]=((0,r.useRef)(null),(0,r.useState)(((e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")),""))())),s=(0,r.useCallback)((()=>o(wp.editor.getContent(i))),[i]);return(0,r.useEffect)((()=>(wp.editor.initialize(i,{quicktags:!1,mediaButtons:!1,tinymce:{toolbar1:"formatselect,styleselect,bold,italic,bullist,numlist,link,alignleft,aligncenter,alignright,wp_adv",toolbar2:"strikethrough,hr,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help",style_formats_merge:!0,style_formats:[]}}),setTimeout((()=>window.tinymce.editors[i]&&window.tinymce.editors[i].on("change",s))),()=>{window.tinymce.editors[i]&&setTimeout((()=>{window.tinymce.editors[i].off("change",s),wp.editor.remove(i)}),300)})),[]),(0,n.createElement)("div",{className:"ct-option-editor"},(0,n.createElement)("textarea",{style:{opacity:0},id:i,ref:a,value:t,className:"wp-editor-area",onChange:({target:{value:e}})=>o(e)}))},l=window.wp.apiFetch;var s=e.n(l);const c=({goToNextStep:e,goToPreviousStep:t,nextButtonLabel:r})=>{const[l,c]=(0,n.useState)(""),[d,u]=(0,n.useState)(""),[m,p]=(0,n.useState)(""),[w,b]=(0,n.useState)("hidden"),[g,h]=(0,n.useState)(!1);return(0,n.createElement)(a.Card,null,(0,n.createElement)(a.CardBody,null,(0,n.createElement)(a.TextControl,{label:"Tab title",value:l,onChange:e=>c(e),className:"barn2-wizard-input"}),(0,n.createElement)(a.__experimentalText,{className:"barn2-form-label"},"Tab content"),(0,n.createElement)(i,{value:d,onChange:u}),(0,n.createElement)(a.Notice,{isDismissible:!1,status:w},m)),(0,n.createElement)(a.CardFooter,null,(0,n.createElement)(a.Button,{className:"skip-button",isSecondary:!0,onClick:()=>{e()}},(0,o.__)("Skip")),(0,n.createElement)(a.Button,{isPrimary:!0,isBusy:g,onClick:()=>function(){if(b("hidden"),h(!0),!l)return p("The title cannot be empty"),h(!1),void b("error");s()({path:"/wp/v2/woo_product_tab",method:"POST",data:{title:l,content:d,status:"publish"}}).then((t=>{e()}))}()},(0,o.__)("Create"))))};(0,t.addFilter)("barn2_setup_wizard_steps","woocommerce-product-tabs-setup-wizard",(e=>(e[1].component=c,e)))})();