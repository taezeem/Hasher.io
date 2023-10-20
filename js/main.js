!function(e,t,n,a){function o(e){if(!e)return[];if(!e.match(/^[0-9a-fA-F]+$/))throw new Error("Input is not a hex string.");e.length%2!=0&&(e="0"+e);for(var t=[],n=0;n<e.length;n+=2){var a=parseInt(e.substr(n,2),16);t.push(a)}return t}function r(e){var t={status:0,load:function(n){t.status||(t.status=1,d({src:e,onload:function(){t.status=2,n&&setTimeout(n)}}))}};return t}function d(e){var t=n.createElement("script");t.async=!0,t.src=e.src,t.onload=e.onload,n.body.appendChild(t)}function l(){for(var e=0;e<delayScripts.length;++e)!function(e){setTimeout(function(){e.src?d(e):e.onload&&e.onload()},e.delay||0)}(delayScripts[e])}function c(e,t){return"hex"===e?t=o(t):"utf-8"!==e&&(t=new TextEncoding.TextEncoder(e,{NONSTANDARD_allowLegacyEncoding:!0}).encode(t)),t}function u(e,t){t=t||64;var n=function(n){if("string"==typeof n){var a,o=[],r=n.length,d=0;for(i=0;i<r;++i)a=n.charCodeAt(i),a<128?o[d++]=a:a<2048?(o[d++]=192|a>>>6,o[d++]=128|63&a):a<55296||a>=57344?(o[d++]=224|a>>>12,o[d++]=128|a>>>6&63,o[d++]=128|63&a):(a=65536+((1023&a)<<10|1023&n.charCodeAt(++i)),o[d++]=240|a>>>18,o[d++]=128|a>>>12&63,o[d++]=128|a>>>6&63,o[d++]=128|63&a);n=o}n.length>t&&(n=e.array(n));var l=[],c=[];for(i=0;i<t;++i){var u=n[i]||0;l[i]=92^u,c[i]=54^u}var p=this;this.current=e.update(c),this.update=function(e){return p.current.update(e),p},this.hex=function(){return e.update(l).update(p.current.array()).hex()}};e.hmac=function(e,t){return new n(e).update(t).hex()},e.hmac.update=function(e,t){return new n(e).update(t)}}function p(e,t,n){var a=localStorage.getItem(n);a&&(e.prop("checked",!0),t.val(a)),e.bind("change",function(){e.prop("checked")?localStorage.setItem(n,t.val()||""):localStorage.removeItem(n)}),t.bind("input",function(){e.prop("checked")&&localStorage.setItem(n,t.val())})}t.method=t.method||null,t.downloadMethod=t.downloadMethod||null;var s={encoding:r("js/encoding.min.js?v=1"),encodingIndexes:r("js/encoding-indexes.min.js")};t.onDemandScripts=s,e(n).ready(function(){function a(){r[0].checked&&_()}l();var o=e("#input"),i=e("#output"),r=e("#auto-update"),d=e("#droppable-zone"),h=e("[data-option]"),v=e("#input-type"),f=e("#share-link"),g=e("#download"),m=e("#download-file-name"),y=e("#hmac"),b=e("#hmac-enabled"),k=e("#key-input-type"),w=e("#key-input"),E=e("#keep-key");p(E,w,"KEEP_KEY"),w.val()&&(b.prop("checked",!0),y.show()),g.length&&g.click(function(){g.attr("download",m.val());var t=e("#input").val();downloadMethod&&(t=downloadMethod(t)),g.attr("href","data:application/octet-stream;base64,"+t)});var I={};e("#input-type option").toArray().map(function(e){I[e.value]=!0});var x=function(e){return 1===e&&2!==s.encoding.status?(i.val("loading..."),s.encoding.load(_),!1):2!==e||2===s.encodingIndexes.status||(i.val("loading..."),s.encoding.load(_),s.encodingIndexes.load(_),!1)},_=function(){if(!(N<waitLoadCount))try{var e="utf-8",t=o.val();if(v.length){e=v.val();var n=v.find("option:selected").data("load-encoding");if(!x(n))return}var a,r;if(b.length&&b.prop("checked")){a=w.val(),r=k.val();var n=k.find("option:selected").data("load-encoding");if(!x(n))return}C(e,t,r,a),t=c(e,t),r?(a=c(r,a),method.hmac||u(method),i.val(method.hmac(a,t,h.val()))):i.val(method(t,h.val()))}catch(e){i.val(e)}},C=function(e,t,n,a){if(f.length){var o=location.origin+location.pathname+"?input="+encodeURIComponent(t);v.length&&(o+="&input_type="+e),h.length&&(o+="&bits="+h.val()),n&&(o+="&key_input_type="+n+"&key="+encodeURIComponent(a)),o.length>2048&&(o="Url is too long!"),f.val(o)}};if(r.length>0&&(o.bind("input propertychange",a),v.bind("input propertychange",a),w.bind("input propertychange",a),k.bind("input propertychange",a),h.bind("input propertychange",a),r.click(a),b.click(function(){a();var e=b.prop("checked");y.toggle(e),e?E.prop("checked")&&localStorage.setItem("KEEP_KEY",w.val()||""):localStorage.removeItem("KEEP_KEY")})),d.length>0){var S=e("#droppable-zone-text");if(e(n.body).bind("dragover drop",function(e){return e.preventDefault(),!1}),!t.FileReader)return S.text("Your browser does not support."),void e("input").attr("disabled",!0);d.bind("dragover",function(){d.addClass("hover")}),d.bind("dragleave",function(){d.removeClass("hover")}),d.bind("drop",function(e){d.removeClass("hover"),A=e.originalEvent.dataTransfer.files[0],S.text(A.name),a()}),o.bind("change",function(){A=o[0].files[0],S.text(A.name),a()});var A,K;_=function(){if(A){var e,t;if(b.length&&b.prop("checked")){e=w.val(),t=k.val();var n=k.find("option:selected").data("load-encoding");if(!x(n))return}var a=new FileReader;K=a;var o=h.val();if(method.update){var r=0,d=A.size,l=method;a.onload=function(n){try{t?(e=c(t,e),l=l.hmac.update(e,n.target.result,o),t=null):l=l.update(n.target.result,o),u()}catch(e){i.val(e)}};var u=function(){if(K===a)if(r<d){i.val("hashing..."+(r/d*100).toFixed(2)+"%");var e=Math.min(r+2097152,d);a.readAsArrayBuffer(A.slice(r,e)),r=e}else i.val(l.hex())};u()}else i.val("hashing..."),a.onload=function(n){try{t?(e=c(t,e),i.val(method.hmac(e,n.target.result,o))):i.val(method(n.target.result,o))}catch(e){i.val(e)}},a.readAsArrayBuffer(A)}}}else{p(e("#keep-input"),o,"KEEP_INPUT")}var P={};if(f.length){for(var T=location.search.substring(1),R=T.split("&"),U=0;U<R.length;++U){var j=R[U].split("=");P[j[0]]=j[1]}"utf-8"!==P.input_type&&I[P.input_type]&&v.val(P.input_type),P.bits&&h.val(P.bits),P.input&&o.val(decodeURIComponent(P.input)),I[P.key_input_type]&&(b.prop("checked",!0),y.show(),k.val(P.key_input_type),w.val(decodeURIComponent(P.key)))}e("#execute").click(_);var M=location.pathname.split("/");e('a[href="'+M[M.length-1]+'"]').addClass("active").closest(".nav-item").find(".nav-dropdown").addClass("active");var N=0;t.methodLoad=function(){++N<waitLoadCount||(P.input||localStorage.getItem("KEEP_INPUT")||localStorage.getItem("KEEP_KEY"))&&_()}})}(jQuery,window,document);