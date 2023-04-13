(this.webpackJsonpreact_gyro=this.webpackJsonpreact_gyro||[]).push([[0],{43:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var n=r(33),a=r.n(n),c=r(7),s=r(0),i=r(1),o=r(13),u=r(2),l=r(3),b=(r(43),r(23)),p=r(39),f=r(38),h=r(9),j=r.n(h),d=r(12),m=r(17),O=function(){function e(){Object(s.a)(this,e),this.container=""}return Object(i.a)(e,[{key:"transform",value:function(e,t){this.container+=e;var r=this.container.split("\r\n");this.container=r.pop(),r.forEach((function(e){return t.enqueue(e)}))}},{key:"flush",value:function(e){e.enqueue(this.container)}}]),e}(),x=Object(i.a)((function e(){var t=this;Object(s.a)(this,e),this.setApp=function(e){t.app=e},this.connect=Object(m.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serial"in navigator)){e.next=17;break}return e.prev=1,e.next=4,navigator.serial.requestPort({});case 4:return t.comm=e.sent,e.next=7,t.comm.open({baudRate:115200,bufferSize:64});case 7:t.reader=t.comm.readable.pipeThrough(new TextDecoderStream).pipeThrough(new TransformStream(new O)).getReader(),t.writer=t.comm.writable.getWriter(),setTimeout(t.receive,100),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),document.getElementById("results").innerHTML+=e.t0.message.replace(/</g,"&lt;").replace(/>/g,"&gt;")+"\r";case 15:e.next=18;break;case 17:document.getElementById("results").innerHTML+="The Web serial API needs to be enabled in your browser thru:\n      - <a href=edge://flags/#enable-experimental-web-platform-features>edge://flags/#enable-experimental-web-platform-features</a>\n      - <a href=chrome://flags/#enable-experimental-web-platform-features>chrome://flags/#enable-experimental-web-platform-features</a>\n      - <a href=opera://flags/#enable-experimental-web-platform-features>opera://flags/#enable-experimental-web-platform-features</a>\n  ";case 18:case"end":return e.stop()}}),e,null,[[1,12]])}))),this.receive=Object(m.a)(Object(d.a)().mark((function e(){var r,n;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.reader.read();case 2:r=e.sent,n=r.value,t.app.update(n),t.running&&setTimeout(t.receive,10);case 6:case"end":return e.stop()}}),e)}))),this.send=function(){var e=Object(m.a)(Object(d.a)().mark((function e(r){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("send",r.length,r),r=r.substr(0,1),e.next=4,t.writer.write(t.enc.encode(r).buffer);case 4:t.receive();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.start=Object(m.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"1",t.send("1\r"),t.running=!0;case 3:case"end":return e.stop()}}),e)}))),this.stop=Object(m.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.running=!1;case 1:case"end":return e.stop()}}),e)}))),this.comm=void 0,this.reader=void 0,this.writer=void 0,this.enc=new TextEncoder,this.dec=new TextDecoder,this.running=!1,this.app=void 0})),v=x,g=r(10),w=function(e){var t=Object(b.b)(f.a,"11805_airplane_v2_L2.mtl"),r=Object(b.b)(p.a,"11805_airplane_v2_L2.obj",(function(e){t.preload(),e.setMaterials(t)}));return Object(g.jsx)("primitive",{object:r,"rotation-x":e.rotate.ry+Math.PI/-2,"rotation-y":-e.rotate.rx,"rotation-z":e.rotate.rz,scale:.003})},y=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).update=function(t){var r=t.split(",").map((function(e){return Number(e)}));if(3===r.length)console.log("three",r),e.setState(Object(c.a)(Object(c.a)({},e.state),{},{rx:r[0],ry:r[1],rz:r[2]}))},e.test_update=function(){e.setState(Object(c.a)(Object(c.a)({},e.state),{},{rx:e.state.rx-.001,ry:e.state.ry+.001,rz:e.state.rz+.001}))},e.state={rx:0,ry:0,rz:0},e.serial=new v,e.serial.setApp(Object(o.a)(e)),e.buffer="",e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Gyro Viewer"}),"Select:",Object(g.jsx)("button",{type:"button",onClick:function(t){e.serial.connect()},children:"COM"}),Object(g.jsx)("pre",{id:"results"}),Object(g.jsx)("button",{type:"button",onClick:function(t){e.serial.start()},children:"Start"}),Object(g.jsx)("button",{type:"button",onClick:function(t){e.serial.stop()},children:"Stop"})]}),Object(g.jsxs)(b.a,{children:[Object(g.jsx)("pointLight",{position:[0,5,30]}),Object(g.jsx)(h.Suspense,{fallback:null,children:Object(g.jsx)(w,{rotate:this.state})})]})]})}}]),r}(j.a.Component),k=document.getElementById("root");a.a.render(Object(g.jsx)(y,{}),k)}},[[47,1,2]]]);
//# sourceMappingURL=main.9f851bad.chunk.js.map