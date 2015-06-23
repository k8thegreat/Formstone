/*! formstone v0.6.12 [asap.js] 2015-06-21 | MIT License | formstone.it */

!function(a,b){"use strict";function c(c){p||b.support.history&&(n=b.$body,p=a.extend(r,c),p.$container=a(p.container),p.render===a.noop&&(p.render=j),p.transitionOut===a.noop&&(p.transitionOut=function(){return a.Deferred().resolve()}),x=window.location.href,s.on(v.popState,g),d())}function d(){n&&!n.hasClass(w.base)&&n.on(v.click,r.selector,f).addClass(w.base)}function e(a){p&&b.support.history?a&&h(a):window.location.href=a}function f(a){var b=a.currentTarget;a.which>1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||window.location.protocol!==b.protocol||window.location.host!==b.host||"_blank"===b.target||(!b.hash||b.href.replace(b.hash,"")!==window.location.href.replace(location.hash,"")&&b.href!==window.location.href+"#")&&(u.killEvent(a),a.stopImmediatePropagation(),b.href===x||h(b.href))}function g(a){var b=a.originalEvent.state;b&&(p.modal&&0===y&&b.url&&!b.initial?window.location.href=b.url:b.url!==x&&(p.force?h(b.url):(s.trigger(v.request,[!0]),i(b.url,b.hash,b.data,b.scroll,!1))))}function h(b){o&&o.abort(),s.trigger(v.request,[!1]),p.transitionOutDeferred=p.transitionOut.apply(t,[!1]);var c=b.indexOf("?"),d=b.indexOf("#"),e={},f="",g=b,h="User error",j=null,k=a.Deferred();d>-1&&(f=b.slice(d),g=b.slice(0,d)),c>-1&&(e=m(b.slice(c+1,d>-1?d:b.length)),g=b.slice(0,c)),e[p.requestKey]=!0,o=a.ajax({url:g,data:e,dataType:"json",cache:p.cache,xhr:function(){var a=new t.XMLHttpRequest;return a.addEventListener("progress",function(a){if(a.lengthComputable){var b=a.loaded/a.total;s.trigger(v.progress,[b])}},!1),a},success:function(c){j="string"===a.type(c)?a.parseJSON(c):c,c.location&&(b=c.location),k.resolve()},error:function(a,b,c){h=c,k.reject()}}),a.when(k,p.transitionOutDeferred).done(function(){i(b,f,j,p.jump?0:!1,!0)}).fail(function(){s.trigger(v.error,[h])})}function i(b,c,d,e,f){if(s.trigger(v.load,[d]),l(b),k(d),p.render.call(this,d,c),x=b,f?(history.pushState({url:x,data:d,scroll:e,hash:c},"state-"+x,x),y++):k(d),s.trigger(v.render,[d]),""!==c){var g=a(c);g.length&&(e=g.offset().top)}e!==!1&&s.scrollTop(e)}function j(b){if("undefined"!==a.type(b)){var c;for(var d in b)b.hasOwnProperty(d)&&(c=a(d),c.length&&c.html(b[d]))}}function k(b){var c=[];if("undefined"!==a.type(b)){var d;for(var e in b)b.hasOwnProperty(e)&&(d=a(e),d.length&&(c[e]=d.html()))}history.replaceState({url:x,data:c,scroll:s.scrollTop()},"state-"+x,x)}function l(a){if(a=a.replace(window.location.protocol+"//"+window.location.host,""),p.tracking.legacy)t._gaq=t._gaq||[],t._gaq.push(["_trackPageview",a]);else if(p.tracking.manager){var b={};b[p.tracking.variable]=a,t.dataLayer=window.dataLayer||[],t.dataLayer.push(b),t.dataLayer.push({event:p.tracking.event})}}function m(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}var n,o,p,q=b.Plugin("asap",{utilities:{_initialize:c,load:e},events:{popState:"popstate",progress:"progress",request:"request",render:"render"}}),r={cache:!0,force:!1,jump:!0,modal:!1,selector:"a",render:a.noop,requestKey:"fs-asap",tracking:{legacy:!1,manager:!1,variable:"currentURL",event:"PageView"},transitionOut:a.noop},s=b.$window,t=s[0],u=q.functions,v=q.events,w=q.classes.raw,x="",y=0}(jQuery,Formstone);