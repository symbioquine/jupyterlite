"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{60880:(e,t,o)=>{o.r(t);var r=o(50586),s=o(65587),l=o(71439);const a=Promise.all([o.e(4100),o.e(2914)]).then(o.bind(o,92914)),n=[o.e(7286).then(o.t.bind(o,47286,23)),o.e(7870).then(o.t.bind(o,7870,23)),o.e(388).then(o.t.bind(o,388,23))],i=["@jupyterlab/apputils-extension:workspaces","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:resolver","@jupyterlab/docmanager-extension:download","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:share-file","@jupyterlab/help-extension:about"];async function c(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(o){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),o}}!async function(){await a;const e=[],t=[],f=[],h=[],p=[],u=[],y=JSON.parse(l.PageConfig.getOption("federated_extensions")),b=new Set;function*x(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let o=Array.isArray(t)?t:[t];for(let e of o)l.PageConfig.Extension.isDisabled(e.id)||i.includes(e.id)||i.includes(e.id.split(":")[0])||(yield e)}y.forEach((e=>{e.liteExtension?u.push(c(e.name,e.extension)):(e.extension&&(b.add(e.name),t.push(c(e.name,e.extension))),e.mimeExtension&&(b.add(e.name),f.push(c(e.name,e.mimeExtension))),e.style&&h.push(c(e.name,e.style)))}));const d=[];if(!b.has("@jupyterlab/json-extension"))try{let e=o(98659);for(let t of x(e))d.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlab/javascript-extension"))try{let e=o(64715);for(let t of x(e))d.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlab/pdf-extension"))try{let e=o(8614);for(let t of x(e))d.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlab/vega5-extension"))try{let e=o(29871);for(let t of x(e))d.push(t)}catch(e){console.error(e)}if(!b.has("@jupyterlite/iframe-extension"))try{let e=o(9215);for(let t of x(e))d.push(t)}catch(e){console.error(e)}if((await Promise.allSettled(f)).forEach((e=>{if("fulfilled"===e.status)for(let t of x(e.value))d.push(t);else console.error(e.reason)})),!b.has("@jupyterlab/application-extension"))try{let t=o(74700);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/apputils-extension"))try{let t=o(86084);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/celltags-extension"))try{let t=o(67824);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/codemirror-extension"))try{let t=o(66930);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/completer-extension"))try{let t=o(586);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/console-extension"))try{let t=o(50959);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/csvviewer-extension"))try{let t=o(45129);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/docmanager-extension"))try{let t=o(52863);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/filebrowser-extension"))try{let t=o(75203);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/fileeditor-extension"))try{let t=o(5052);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/help-extension"))try{let t=o(38906);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/htmlviewer-extension"))try{let t=o(49286);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/imageviewer-extension"))try{let t=o(15820);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/inspector-extension"))try{let t=o(72879);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/launcher-extension"))try{let t=o(72366);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/logconsole-extension"))try{let t=o(98725);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/mainmenu-extension"))try{let t=o(52789);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/markdownviewer-extension"))try{let t=o(95660);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/mathjax2-extension"))try{let t=o(40317);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/notebook-extension"))try{let t=o(80593);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/rendermime-extension"))try{let t=o(350);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/running-extension"))try{let t=o(58443);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/settingeditor-extension"))try{let t=o(31120);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/shortcuts-extension"))try{let t=o(88660);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/statusbar-extension"))try{let t=o(61003);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/theme-dark-extension"))try{let t=o(62038);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/theme-light-extension"))try{let t=o(95492);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/toc-extension"))try{let t=o(30034);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/tooltip-extension"))try{let t=o(7052);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/translation-extension"))try{let t=o(1549);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlab/ui-components-extension"))try{let t=o(26137);for(let o of x(t))e.push(o)}catch(e){console.error(e)}if(!b.has("@jupyterlite/application-extension"))try{let t=o(8244);for(let o of x(t))e.push(o)}catch(e){console.error(e)}(await Promise.allSettled(t)).forEach((t=>{if("fulfilled"===t.status)for(let o of x(t.value))e.push(o);else console.error(t.reason)})),(await Promise.all(n)).forEach((e=>{for(let t of x(e))p.push(t)})),(await Promise.allSettled(u)).forEach((e=>{if("fulfilled"===e.status)for(let t of x(e.value))p.push(t);else console.error(e.reason)})),(await Promise.allSettled(h)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const j=new s.JupyterLiteServer({});j.registerPluginModules(p),await j.start();const{serviceManager:m}=j,w=new r.JupyterLab({mimeExtensions:d,serviceManager:m,disabled:i});w.name=l.PageConfig.getOption("appName")||"JupyterLite",w.registerPluginModules(e),"true"===(l.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=w),console.log("Starting app"),await w.start(),console.log(`${w.name} started, waiting for restore`),await w.restored,console.log(`${w.name} restored`)}()}}]);
//# sourceMappingURL=880.b3f1b3870009135671b3.js.map