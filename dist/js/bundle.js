(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(t,e,o){o(160),t.exports=o(372)},338:function(t,e,o){"use strict";var i=o(74);o.n(i).a},339:function(t,e,o){(t.exports=o(340)(!1)).push([t.i,"\n[v-cloak] { display: none;}\n.wm-1140{ max-width:1140px;\n}\n.bg-custom{ background-color:#f0f0f0;\n}\r\n",""])},372:function(t,e,o){"use strict";o.r(e);var i=o(50),s=o(158),n="https://www.youtube.com",r="https://www.youtube-nocookie.com/embed",a="https://www.facebook.com",c="https://www.facebook.com/plugins/video.php?href=",d={data:function(){return{version:"190614",url:"",exportUrlId:"expUrl",videos:[]}},computed:{ordered_videos:function(){return this.videos.sort(function(t,e){return t.order-e.order})},hash:function(){return"#"+this.videos.map(function(t){return t.type+":"+t.code}).join(",")},export_url:function(){return"https://oceanxdds.github.io/yt_monitor/"+this.hash}},created:function(){window.location.hash&&this.addVideo(window.location.hash.substr(1))},methods:{addVideo:function(t){var e=this;(t=t||this.url).split(/ |,/).filter(function(t){return t}).forEach(function(t){var o="",i="",s="",d="";o||(i=t.match(/^[a-zA-Z0-9-_:]+$/))&&(2==(i=(o=i[0]).split(":")).length&&"yt"==i[0]?(o=i[1],s=r+"/"+o,d="yt"):2==i.length&&"tt"==i[0]?(s="https://player.twitch.tv/?channel="+(o=i[1]),d="tt"):3==i.length&&"fb"==i[0]?(o=i[1]+":"+i[2],s=c+a+"/"+i[1]+"/videos/"+i[2],d="fb"):(s=r+"/"+o,d="yt")),o||t.match(n)&&(i=t.replace(n,"").match(/v=[a-zA-Z0-9-_]+/))&&(o=i[0].replace("v=",""),s=r+"/"+o,d="yt"),o||t.match("https://youtu.be")&&(i=t.replace("https://youtu.be","").match(/[a-zA-Z0-9-_]+/))&&(o=i[0],s=r+"/"+o,d="yt"),o||t.match("https://www.twitch.tv")&&(i=t.replace("https://www.twitch.tv","").match(/[a-zA-Z0-9-_]+/))&&(s="https://player.twitch.tv/?channel="+(o=i[0]),d="tt"),o||t.match(a)&&(i=t.replace(a,"").match(/\/([a-zA-Z0-9-_]+)\/videos\/(\d+)/))&&(o=i[1]+":"+i[2],s=c+a+"/"+i[1]+"/videos/"+i[2],d="fb"),o&&(e.videos.filter(function(t){return t.code==o}).length>0||e.videos.push({code:o,focus:!1,url:s,type:d,order:e.videos.length}))}),this.url="",this.updateHash()},removeVideo:function(t){this.videos=this.videos.filter(function(e){return e.code!=t.code}),this.updateOrder(),this.updateHash()},focusVideo:function(t){this.videos.map(function(e){e.focus=e.code==t.code&&!e.focus})},moveLeft:function(t){var e=t.order;if(0!=e){var o=[this.videos[e],this.videos[e-1]];this.videos[e-1]=o[0],this.videos[e]=o[1],this.updateOrder(),this.updateHash()}},moveRight:function(t){var e=t.order;if(e!=this.videos.length-1){var o=[this.videos[e+1],this.videos[e]];this.videos[e]=o[0],this.videos[e+1]=o[1],this.updateOrder(),this.updateHash()}},updateOrder:function(){var t=0;this.videos.forEach(function(e){e.order=t++})},updateHash:function(){window.location.hash=this.hash},copyUrl:function(){var t=document.createRange();t.selectNode(document.getElementById(this.exportUrlId));var e=window.getSelection();e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),e.removeAllRanges()}}},u=(o(338),o(153)),l=Object(u.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"shadow-sm"},[o("div",{staticClass:"container-fluid wm-1140 py-2"},[o("b-input-group",{attrs:{prepend:"Source",size:"sm"}},[o("b-form-input",{attrs:{placeholder:"[ YouTube ] yt:ID or URL or Short URL. [ Twitch ] tt:ID or URL. [ Facebook ] fb:ID:VideoID or URL."},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addVideo()}},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),o("b-input-group-append",[o("b-button",{on:{click:function(e){return t.addVideo()}}},[t._v("Enter")])],1)],1)],1)]),t._v(" "),o("div",{staticClass:"container-fluid"},[t.ordered_videos.length?o("div",{staticClass:"form-row py-3"},t._l(t.ordered_videos,function(e){return o("div",{key:e.code,staticClass:"col-12 col-md-6 col-lg-4 col-xl-3",class:{"col-md-12":e.focus,"col-lg-8":e.focus,"col-xl-6":e.focus}},[o("div",{staticClass:"d-flex border py-1"},[o("div",{staticClass:"mx-1"},[o("b-form-input",{attrs:{size:"sm",value:e.type+":"+e.code,disabled:""}})],1),t._v(" "),o("div",{staticClass:"mx-1"},[o("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(o){return t.focusVideo(e)}}},[t._v("Focus")])],1),t._v(" "),o("div",{staticClass:"mx-1"},[o("b-button-group",[o("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(o){return t.moveLeft(e)}}},[t._v("<")]),t._v(" "),o("b-button",{attrs:{variant:"secondary",size:"sm"},on:{click:function(o){return t.moveRight(e)}}},[t._v(">")])],1)],1),t._v(" "),o("div",{staticClass:"mx-1 ml-auto"},[o("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(o){return t.removeVideo(e)}}},[t._v("×")])],1)]),t._v(" "),o("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:e.url,allowfullscreen:""}})],1)}),0):o("div",{staticClass:"py-5 text-center text-secondary"},[o("h6",[t._v("Watch YouTube, Twitch, Facebook videos in one page.")])])]),t._v(" "),o("div",{},[o("div",{staticClass:"container-fluid wm-1140 py-2"},[o("b-input-group",{attrs:{prepend:"Share",size:"sm"}},[o("b-form-input",{attrs:{id:t.exportUrlId,disabled:""},model:{value:t.export_url,callback:function(e){t.export_url=e},expression:"export_url"}}),t._v(" "),o("b-input-group-append",[o("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return t.copyUrl()}}},[t._v("Copy URL")])],1)],1)],1),t._v(" "),o("div",{staticClass:"container py-2"},[o("div",{staticClass:"d-flex"},[o("div",{staticClass:"mr-1 flex-grow-1"}),t._v(" "),o("div",{staticClass:"ml-auto mx-1 p-2 small"},[t._v("\r\n                    Version: "+t._s(t.version)+"\r\n                ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mx-1"},[e("img",{attrs:{src:"images/theme/Bauhinia-32px.png",title:"Hong Kong Anti Extradition Law"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ml-1"},[e("a",{attrs:{href:"https://github.com/oceanxdds/yt_monitor",target:"_blank"}},[e("img",{attrs:{src:"images/theme/GitHub-Mark-32px.png",title:"GitHub"}})])])}],!1,null,null,null).exports;i.default.use(s.a),new i.default({el:"app",render:function(t){return t(l)}})},74:function(t,e,o){var i=o(339);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};o(341)(i,s);i.locals&&(t.exports=i.locals)}},[[159,1,2]]]);