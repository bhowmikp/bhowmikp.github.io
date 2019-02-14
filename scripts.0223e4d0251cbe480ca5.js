"use strict";var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof2(e)};!function(e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).GitHubCalendar=e()}(function(){return function e(t,r,n){function o(u,s){if(!r[u]){if(!t[u]){var i="function"==typeof require&&require;if(!s&&i)return i(u,!0);if(a)return a(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[u]={exports:{}};t[u][0].call(l.exports,function(e){return o(t[u][1][e]||e)},l,l.exports,e,t,r,n)}return r[u].exports}for(var a="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(e,t){var r=e("github-calendar-parser"),n=e("elly"),o=e("add-subtract-date"),a=e("formatoid"),u="MMM D, YYYY",s="MMMM D";t.exports=function(e,t,i){return e=n(e),(i=i||{}).summary_text=i.summary_text||'Summary of pull requests, issues opened, and commits made by <a href="https://github.com/'+t+'" target="blank">@'+t+"</a>",!0===i.responsive&&e.classList.add("calendar-responsive"),!1===i.global_stats&&(e.style.minHeight="175px"),i.proxy=i.proxy||function(e){return"https://urlreq.appspot.com/req?method=GET&url="+e},function c(){return fetch(i.proxy("https://github.com/"+t)).then(function(e){return e.text()}).then(function(t){var l=document.createElement("div");l.innerHTML=t;var d=l.querySelector(".js-yearly-contributions");if(n(".position-relative h2",d).remove(),d.querySelector(".float-left.text-gray").innerHTML=i.summary_text,d.querySelector("include-fragment"))setTimeout(c,500);else{if(!0===i.responsive){var f=d.querySelector("svg.js-calendar-graph-svg"),p=f.getAttribute("width"),b=f.getAttribute("height");f.removeAttribute("height"),f.setAttribute("width","100%"),f.setAttribute("viewBox","0 0 "+p+" "+b)}if(!1!==i.global_stats){var m=r(n("svg",d).outerHTML),g=m.current_streak?a(m.current_streak_range[0],s)+" &ndash; "+a(m.current_streak_range[1],s):m.last_contributed?"Last contributed in "+a(m.last_contributed,s)+".":"Rock - Hard Place",y=m.longest_streak?a(m.longest_streak_range[0],s)+" &ndash; "+a(m.longest_streak_range[1],s):m.last_contributed?"Last contributed in "+a(m.last_contributed,s)+".":"Rock - Hard Place",h=n("<div>",{class:"contrib-column contrib-column-first table-column",html:'<span class="text-muted">Contributions in the last year</span>\n                               <span class="contrib-number">'+m.last_year+' total</span>\n                               <span class="text-muted">'+a(o.subtract(new Date,1,"year"),u)+" &ndash; "+a(new Date,u)+"</span>"}),v=n("<div>",{class:"contrib-column table-column",html:'<span class="text-muted">Longest streak</span>\n                               <span class="contrib-number">'+m.longest_streak+' days</span>\n                               <span class="text-muted">'+y+"</span>"}),M=n("<div>",{class:"contrib-column table-column",html:'<span class="text-muted">Current streak</span>\n                               <span class="contrib-number">'+m.current_streak+' days</span>\n                               <span class="text-muted">'+g+"</span>"});d.appendChild(h),d.appendChild(v),d.appendChild(M)}e.innerHTML=d.innerHTML}}).catch(function(e){return console.error(e)})}()}},{"add-subtract-date":2,elly:4,formatoid:6,"github-calendar-parser":8}],2:[function(e,t){function r(e){return function t(r,n,o){switch(n*=e,o){case"years":case"year":r.setFullYear(r.getFullYear()+n);break;case"months":case"month":r.setMonth(r.getMonth()+n);break;case"weeks":case"week":return t(r,7*n,"days");case"days":case"day":r.setDate(r.getDate()+n);break;case"hours":case"hour":r.setHours(r.getHours()+n);break;case"minutes":case"minute":r.setMinutes(r.getMinutes()+n);break;case"seconds":case"second":r.setSeconds(r.getSeconds()+n);break;case"milliseconds":case"millisecond":r.setMilliseconds(r.getMilliseconds()+n);break;default:throw new Error("Invalid range: "+o)}return r}}t.exports={add:r(1),subtract:r(-1)}},{}],3:[function(e,t){t.exports.en=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t.exports.en.abbr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t.exports.en.short=["Su","Mo","Tu","We","Th","Fr","Sa"],t.exports.fr=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],t.exports.fr.abbr=["dim","lun","mar","mer","jeu","ven","sam"],t.exports.fr.short=["di","lu","ma","me","je","ve","sa"],t.exports.es=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"],t.exports.es.abbr=["dom","lun","mar","mir","jue","vie","sab"],t.exports.es.short=["do","lu","ma","mi","ju","vi","sa"],t.exports.it=["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"],t.exports.it.abbr=["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],t.exports.it.short=["D","L","Ma","Me","G","V","S"],t.exports=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t.exports.abbr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],t.exports.short=["Su","Mo","Tu","We","Th","Fr","Sa"]},{}],4:[function(e,t){function r(e,t){return"string"==typeof e?"<"===e.charAt(0)?(e=document.createElement(e.slice(1,-1)),n(t||{},function(t,r){switch(r){case"text":return void(e.textContent=t);case"html":return void(e.innerHTML=t)}e.setAttribute(r,t)}),e):(t=t||document).querySelector(e):e}var n=e("iterate-object"),o=e("sliced");r.$$=function(e,t){return"string"==typeof e?(t=t||document,o(t.querySelectorAll(e))):[e]},t.exports=r},{"iterate-object":9,sliced:13}],5:[function(e,t){t.exports=function(e,t,r){r=r||"0";var n=(t=t||2)-(e=e.toString()).length;return(0>=n?"":r.repeat(n))+e}},{}],6:[function(e,t){var r=e("months"),n=e("days"),o=e("fillo"),a=e("parse-it").Parser,u={YYYY:function(e,t){return t?e.getUTCFullYear():e.getFullYear()},YY:function(e,t){return u.YYYY(e,t)%100},MMMM:function(e,t){return t?r[e.getUTCMonth()]:r[e.getMonth()]},MMM:function(e,t){return t?r.abbr[e.getUTCMonth()]:r.abbr[e.getMonth()]},MM:function(e,t){return o(t?e.getUTCMonth()+1:e.getMonth()+1)},M:function(e,t){return t?e.getUTCMonth()+1:e.getMonth()+1},dddd:function(e,t){return n[u.d(e,t)]},ddd:function(e,t){return n.abbr[u.d(e,t)]},dd:function(e,t){return n.short[u.d(e,t)]},d:function(e,t){return t?e.getUTCDay():e.getDay()},DD:function(e,t){return o(u.D(e,t))},D:function(e,t){return t?e.getUTCDate():e.getDate()},A:function(e,t){return u.a(e,t).toUpperCase()},a:function(e,t){return u.H(e,t)>=12?"pm":"am"},hh:function(e,t){return o(u.h(e,t))},h:function(e,t){return u.H(e,t)%12||12},HH:function(e,t){return o(u.H(e,t))},H:function(e,t){return t?e.getUTCHours():e.getHours()},mm:function(e,t){return o(u.m(e,t))},m:function(e,t){return t?e.getUTCMinutes():e.getMinutes()},ss:function(e,t){return o(u.s(e,t))},s:function(e,t){return t?e.getUTCSeconds():e.getSeconds()},S:function(e,t){return Math.round(u.s(e,t)/60*10)},SS:function(e,t){return o(u.s(e,t)/60*100)},SSS:function(e,t){return o(u.s(e,t)/60*1e3,3)},Z:function(e){var t=-e.getTimezoneOffset();return(t>=0?"+":"-")+o(parseInt(t/60))+":"+o(t%60)},ZZ:function(e){var t=-e.getTimezoneOffset();return(t>=0?"+":"-")+o(parseInt(t/60))+o(t%60)}},s=new a(u);t.exports=function(e,t){return s.run(t,[e,e._useUTC])}},{days:3,fillo:5,months:10,"parse-it":11}],7:[function(e,t){t.exports=["#eee","#d6e685","#8cc665","#44a340","#1e6823"]},{}],8:[function(e,t){var r=e("github-calendar-legend");t.exports=function(e){var t={last_year:0,longest_streak:-1,longest_streak_range:[],current_streak:0,current_streak_range:[],weeks:[],days:[],last_contributed:null},n=[],o=function(){t.current_streak>t.longest_streak&&(t.longest_streak=t.current_streak,t.longest_streak_range[0]=t.current_streak_range[0],t.longest_streak_range[1]=t.current_streak_range[1])};return e.split("\n").slice(2).map(function(e){return e.trim()}).forEach(function(e){if(e.startsWith("<g transform"))return n.length&&t.weeks.push(n)&&(n=[]);var a=e.match(/fill="(#[a-z0-9]+)"/),u=e.match(/data-date="([0-9\-]+)"/),s=e.match(/data-count="([0-9]+)"/);if(u=u&&u[1],s=s&&+s[1],a=a&&a[1]){var i={fill:a,date:new Date(u),count:s,level:r.indexOf(a)};0===t.current_streak&&(t.current_streak_range[0]=i.date),i.count?(++t.current_streak,t.last_year+=i.count,t.last_contributed=i.date,t.current_streak_range[1]=i.date):(o(),t.current_streak=0),n.push(i),t.days.push(i)}}),o(),t}},{"github-calendar-legend":7}],9:[function(e,t){t.exports=function(e,t){var r=0,n=[];if(Array.isArray(e))for(;r<e.length&&!1!==t(e[r],r,e);++r);else if("object"===(void 0===e?"undefined":_typeof(e))&&null!==e)for(n=Object.keys(e);r<n.length&&!1!==t(e[n[r]],n[r],e);++r);}},{}],10:[function(e,t){t.exports=["January","February","March","April","May","June","July","August","September","October","November","December"],t.exports.abbr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t.exports.it=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],t.exports.abbr.it=["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],t.exports.de=["Januar","Februar","M\xe4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],t.exports.abbr.de=["Jan","Feb","M\xe4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]},{}],11:[function(e,t){function r(e,t,r){return new a(t).run(e,r)}var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=e("regex-escape"),a=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.obj=t||{},this.re=new RegExp("^("+Object.keys(t).map(o).join("|")+")")}return n(e,[{key:"run",value:function(e,t){var r="";t=t||[];do{var n=e.match(this.re),o=n&&n[1],a=o||e.charAt(0);if(o){var u=this.obj[o];"function"==typeof u&&(u=u.apply(this,t)),r+=u}else r+=a;e=e.substring(a.length)}while(e);return r}}]),e}();r.Parser=a,t.exports=r},{"regex-escape":12}],12:[function(e,t){function r(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}r.proto=function(){return RegExp.escape=r,r},t.exports=r},{}],13:[function(e,t){t.exports=function(e,t,r){var n=[],o=e.length;if(0===o)return n;var a=0>t?Math.max(0,t+o):t||0;for(void 0!==r&&(o=0>r?r+o:r);o-- >a;)n[o-a]=e[o];return n}},{}]},{},[1])(1)});