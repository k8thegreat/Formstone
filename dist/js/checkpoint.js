/*! formstone v1.4.0 [checkpoint.js] 2017-09-12 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function c(){v=u.height(),d.iterate.call(g,n)}function a(){g=e(r.base),c()}function i(){d.iterate.call(g,o)}function n(e){switch(e.windowIntersect){case"top":e.windowCheck=0-e.offset;break;case"middle":case"center":e.windowCheck=v/2-e.offset;break;case"bottom":e.windowCheck=v-e.offset}switch(e.elIntersect){case"top":e.elCheck=e.$target[0].offsetTop;break;case"middle":e.elCheck=e.$target[0].offsetTop+e.$target.outerHeight()/2;break;case"bottom":e.elCheck=e.$target[0].offsetTop+e.$target.outerHeight()}o(e)}function o(e){h+e.windowCheck>=e.elCheck?(e.active||e.$el.trigger(l.activate),e.active=!0,e.$el.addClass(f.active)):e.reverse&&(e.active&&e.$el.trigger(l.deactivate),e.active=!1,e.$el.removeClass(f.active))}var s=t.Plugin("checkpoint",{widget:!0,defaults:{intersect:"bottom-top",offset:0,reverse:!1},classes:["active"],events:{activate:"activate",deactivate:"deactivate"},methods:{_construct:function(t){var c=e(t.$el.data("checkpoint-container")),a=t.$el.data("checkpoint-intersect"),i=t.$el.data("checkpoint-offset");a&&(t.intersect=a),i&&(t.offset=i);var o=t.intersect.split("-");t.windowIntersect=o[0],t.elIntersect=o[1],t.visible=!1,t.$target=c.length?c:t.$el;var s=t.$target.find("img");s.length&&s.on(l.load,t,n),t.$el.addClass(f.base)},_postConstruct:function(e){a(),c()},_destruct:function(e){a()},_resize:c,_raf:function(){(h=u.scrollTop())<0&&(h=0),h!==w&&(i(),w=h)},resize:n}}),r=(s.namespace,s.classes),f=r.raw,l=s.events,d=s.functions,u=(t.window,t.$window),v=0,h=0,w=0,g=[]});