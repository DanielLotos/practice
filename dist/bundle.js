!function(e){var s={};function a(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=s,a.d=function(e,s,t){a.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,s){if(1&s&&(e=a(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var i in e)a.d(t,i,function(s){return e[s]}.bind(null,i));return t},a.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(s,"a",s),s},a.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},a.p="",a(a.s=1)}([function(e,s,a){"use strict";var t=Object.prototype.hasOwnProperty;function i(e,s){return Array.isArray(e)?function(e,s){for(var a,t="",r="",l=Array.isArray(s),o=0;o<e.length;o++)(a=i(e[o]))&&(l&&s[o]&&(a=n(a)),t=t+r+a,r=" ");return t}(e,s):e&&"object"==typeof e?function(e){var s="",a="";for(var i in e)i&&e[i]&&t.call(e,i)&&(s=s+a+i,a=" ");return s}(e):e||""}function r(e){if(!e)return"";if("object"==typeof e){var s="";for(var a in e)t.call(e,a)&&(s=s+a+":"+e[a]+";");return s}return e+""}function l(e,s,a,t){return!1!==s&&null!=s&&(s||"class"!==e&&"style"!==e)?!0===s?" "+(t?e:e+'="'+e+'"'):("function"==typeof s.toJSON&&(s=s.toJSON()),"string"==typeof s||(s=JSON.stringify(s),a||-1===s.indexOf('"'))?(a&&(s=n(s))," "+e+'="'+s+'"'):" "+e+"='"+s.replace(/'/g,"&#39;")+"'"):""}s.merge=function e(s,a){if(1===arguments.length){for(var t=s[0],i=1;i<s.length;i++)t=e(t,s[i]);return t}for(var l in a)if("class"===l){var o=s[l]||[];s[l]=(Array.isArray(o)?o:[o]).concat(a[l]||[])}else if("style"===l){var o=r(s[l]);o=o&&";"!==o[o.length-1]?o+";":o;var n=r(a[l]);n=n&&";"!==n[n.length-1]?n+";":n,s[l]=o+n}else s[l]=a[l];return s},s.classes=i,s.style=r,s.attr=l,s.attrs=function(e,s){var a="";for(var o in e)if(t.call(e,o)){var n=e[o];if("class"===o){n=i(n),a=l(o,n,!1,s)+a;continue}"style"===o&&(n=r(n)),a+=l(o,n,!1,s)}return a};var o=/["&<>]/;function n(e){var s=""+e,a=o.exec(s);if(!a)return e;var t,i,r,l="";for(t=a.index,i=0;t<s.length;t++){switch(s.charCodeAt(t)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}i!==t&&(l+=s.substring(i,t)),i=t+1,l+=r}return i!==t?l+s.substring(i,t):l}s.escape=n,s.rethrow=function e(s,t,i,r){if(!(s instanceof Error))throw s;if(!("undefined"==typeof window&&t||r))throw s.message+=" on line "+i,s;try{r=r||a(4).readFileSync(t,"utf8")}catch(a){e(s,null,i)}var l=3,o=r.split("\n"),n=Math.max(i-l,0),c=Math.min(o.length,i+l);var l=o.slice(n,c).map(function(e,s){var a=s+n+1;return(a==i?"  > ":"    ")+a+"| "+e}).join("\n");s.path=t;s.message=(t||"Pug")+":"+i+"\n"+l+"\n\n"+s.message;throw s}},function(e,s,a){"use strict";a.r(s);a(17),a(16),a(15),a(14),a(13),a(12),a(11),a(10),a(9),a(8),a(7),a(6),a(5),a(44);console.log("Hello world!")},function(e,s,a){a(0);e.exports=function(e){var s="";return s+='<footer class="main-footer"><nav class="main-footer__nav"><div class="main-footer__wrapper"><p class="main-footer__caption-list"><svg class="main-footer__svg main-footer__svg--users"><use xlink:href="#f_users"></use></svg>Users</p><ul class="main-footer__list"><li class="main-footer__item"><a class="main-footer__link" href="#">Payment</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Delivery</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Return and exchange</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Help with the sservice</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Terms of use</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Feedback</a></li></ul></div><div class="main-footer__wrapper"><p class="main-footer__caption-list"><svg class="main-footer__svg main-footer__svg--shopping"><use xlink:href="#f_shops"></use></svg>Shopping</p><ul class="main-footer__list"><li class="main-footer__item"><a class="main-footer__link" href="#">Connectivity</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Help for shops</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Dashboard</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Storehouse</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Terms of use</a></li><li class="main-footer__item"><a class="main-footer__link" href="#">Feedback</a></li></ul></div><div class="main-footer__wrapper"><p class="main-footer__caption-list"><svg class="main-footer__svg main-footer__svg--shopping"><use xlink:href="#f_statistic"></use></svg>Statistic</p><ul class="main-footer__list"><li class="main-footer__item main-footer__item--statistic"><span class="main-footer__statistic-value">453 034</span><p class="main-footer__statistic-desc">Goods</p></li><li class="main-footer__item main-footer__item--statistic"><span class="main-footer__statistic-value">2 545</span><p class="main-footer__statistic-desc">Shops</p></li></ul></div></nav><div class="more-links"><a class="more-links__link" href="#">Mobile version</a><a class="more-links__link" href="#">Statistic</a><a class="more-links__link" href="#">Advertising</a></div></footer>'}},function(e,s,a){a(0);e.exports=function(e){var s="";return s+='<svg class="visually-hidden" id="sprite-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style>.sprite-symbol-usage {display: none;}\n.sprite-symbol-usage:target {display: inline;}</style><defs><symbol id="eye" viewbox="0 0 30 30" fill="none"><mask id="eye_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="4" y="7" width="22" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z" transform="translate(4 7.5)" fill="white"></path></mask><g mask="url(#eye_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#eye_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H26V26H0V0Z" transform="translate(2 2)" fill="#D8D8D8"></path></g><defs></defs></symbol><lineargradient id="eye_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="f_shops" viewbox="0 0 30 30" fill="none"><mask id="f_shops_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="5" y="6" width="20" height="18"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" transform="translate(5 6)" fill="white"></path></mask><g mask="url(#f_shops_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#f_shops_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H26V26H0V0Z" transform="translate(2 2)" fill="#D8D8D8"></path></g><defs></defs></symbol><lineargradient id="f_shops_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="f_users" viewbox="0 0 30 30" fill="none"><mask id="f_users_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="4" y="8" width="22" height="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM14.9998 8C14.7098 8 14.3798 8.02 14.0298 8.05C15.1898 8.89 15.9998 10.02 15.9998 11.5V14H21.9998V11.5C21.9998 9.17 17.3298 8 14.9998 8Z" transform="translate(4 8)" fill="white"></path></mask><g mask="url(#f_users_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#f_users_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" transform="translate(3 3)" fill="#D8D8D8"></path></g><defs></defs></symbol><lineargradient id="f_users_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="f_statistic" viewbox="0 0 30 30" fill="none"><mask id="f_statistic_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="4" y="9" width="22" height="12"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2C22 3.1 21.1 4 20 4C19.82 4 19.65 3.98 19.49 3.93L15.93 7.48C15.98 7.64 16 7.82 16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8C12 7.82 12.02 7.64 12.07 7.48L9.52 4.93C9.36 4.98 9.18 5 9 5C8.82 5 8.64 4.98 8.48 4.93L3.93 9.49C3.98 9.65 4 9.82 4 10C4 11.1 3.1 12 2 12C0.9 12 0 11.1 0 10C0 8.9 0.9 8 2 8C2.18 8 2.35 8.02 2.51 8.07L7.07 3.52C7.02 3.36 7 3.18 7 3C7 1.9 7.9 1 9 1C10.1 1 11 1.9 11 3C11 3.18 10.98 3.36 10.93 3.52L13.48 6.07C13.64 6.02 13.82 6 14 6C14.18 6 14.36 6.02 14.52 6.07L18.07 2.51C18.02 2.35 18 2.18 18 2C18 0.9 18.9 0 20 0C21.1 0 22 0.9 22 2Z" transform="translate(4 9)" fill="white"></path></mask><g mask="url(#f_statistic_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#f_statistic_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H26V26H0V0Z" transform="translate(2 2)" fill="#D8D8D8"></path></g><defs></defs></symbol><lineargradient id="f_statistic_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="h_cart" viewbox="0 0 30 30" fill="none"><mask id="h_cart_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="5" y="5" width="20" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00001 16C4.90001 16 4.01001 16.9 4.01001 18C4.01001 19.1 4.90001 20 6.00001 20C7.10001 20 8.00001 19.1 8.00001 18C8.00001 16.9 7.10001 16 6.00001 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" transform="translate(5 5)" fill="white"></path></mask><g mask="url(#h_cart_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#h_cart_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H26V26H0V0Z" transform="translate(2 2)" fill="#D8D8D8"></path></g><defs></defs></symbol><lineargradient id="h_cart_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="h_compare" viewbox="0 0 30 30" fill="none"><mask id="h_compare_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="6" y="8" width="19" height="15"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6C0.67 6 0 6.67 0 7.5C0 8.33 0.67 9 1.5 9C2.33 9 3 8.33 3 7.5C3 6.67 2.33 6 1.5 6ZM1.5 0C0.67 0 0 0.67 0 1.5C0 2.33 0.67 3 1.5 3C2.33 3 3 2.33 3 1.5C3 0.67 2.33 0 1.5 0ZM1.49992 12.1699C0.759922 12.1699 0.169922 12.7699 0.169922 13.4999C0.169922 14.2299 0.769922 14.8299 1.49992 14.8299C2.22992 14.8299 2.82992 14.2299 2.82992 13.4999C2.82992 12.7699 2.23992 12.1699 1.49992 12.1699ZM4.5 14.5H18.5V12.5H4.5V14.5ZM4.5 8.5H18.5V6.5H4.5V8.5ZM4.5 0.5V2.5H18.5V0.5H4.5Z" transform="translate(6 8)" fill="white"></path></mask><g mask="url(#h_compare_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#h_compare_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H26V26H0V0Z" transform="translate(2 2)" fill="#CCCCCC"></path></g><defs></defs></symbol><lineargradient id="h_compare_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="h_favorite" viewbox="0 0 30 30" fill="none"><mask id="h_favorite_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="5" y="7" width="20" height="19"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z" transform="translate(5 7)" fill="white"></path></mask><g mask="url(#h_favorite_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#h_favorite_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" transform="translate(3 3)" fill="#D8D8D8"></path></g><defs></defs></symbol><lineargradient id="h_favorite_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="h_search" viewbox="0 0 30 30" fill="none"><mask id="h_search_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="6" y="6" width="18" height="18"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" transform="translate(6 6)" fill="white"></path></mask><g mask="url(#h_search_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#h_search_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" transform="translate(3 3)" fill="#D8D8D8"></path></g><defs></defs></symbol><lineargradient id="h_search_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="ic_arrow_back" viewbox="0 0 30 30" fill="none"><mask id="ic_arrow_back_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="7" y="7" width="16" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" transform="translate(7 7)" fill="white"></path></mask><g mask="url(#ic_arrow_back_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#ic_arrow_back_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" transform="translate(3 3)" fill="white"></path></g><defs></defs></symbol><lineargradient id="ic_arrow_back_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="ic_arrow_forward" viewbox="0 0 30 30" fill="none"><mask id="ic_arrow_forward_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="7" y="7" width="16" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" transform="translate(7 7)" fill="white"></path></mask><g mask="url(#ic_arrow_forward_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#ic_arrow_forward_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" transform="translate(3 3)" fill="white"></path></g><defs></defs></symbol><lineargradient id="ic_arrow_forward_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="ic_email" viewbox="0 0 30 30" fill="none"><mask id="ic_email_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="5" y="7" width="20" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" transform="translate(5 7)" fill="white"></path></mask><g mask="url(#ic_email_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#ic_email_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" transform="translate(3 3)" fill="#E5E5E5"></path></g><defs></defs></symbol><lineargradient id="ic_email_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="ic_email_open" viewbox="0 0 30 30" fill="none"><mask id="ic_email_open_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="5" y="6" width="20" height="19"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.99 7C19.99 6.28 19.62 5.65 19.05 5.3L10 0L0.95 5.3C0.38 5.65 0 6.28 0 7V17C0 18.1 0.9 19 2 19H18C19.1 19 20 18.1 20 17L19.99 7ZM9.99999 12L1.73999 6.84L9.99999 2L18.26 6.84L9.99999 12Z" transform="translate(5 6)" fill="white"></path></mask><g mask="url(#ic_email_open_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#ic_email_open_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H26V26H0V0Z" transform="translate(2 2)" fill="#D8D8D8"></path></g><defs></defs></symbol><lineargradient id="ic_email_open_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="ic_star" viewbox="0 0 30 30" fill="none"><mask id="ic_star_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="5" y="5" width="20" height="19"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" transform="translate(5 5)" fill="white"></path></mask><g mask="url(#ic_star_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V30H0V0Z" fill="url(#ic_star_paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" transform="translate(3 3)" fill="#D8D8D8"></path></g><defs></defs></symbol><lineargradient id="ic_star_paint0_linear" x2="1" gradientunits="userSpaceOnUse" gradienttransform="scale(42.4264) rotate(45)"><stop stop-color="#FAD388"></stop><stop offset="1" stop-color="#F48A82"></stop></lineargradient><symbol id="ic_arrow-down" viewbox="0 0 8 5" fill="none"><mask id="ic_arrow-down_mask0" mask-type="alpha" maskunits="userSpaceOnUse" x="0" y="0" width="8" height="5"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.99865L2.5 8H4.89613L2.38014 3.99865L5 0H2.5L0 3.99865Z" transform="translate(0 5) rotate(-90)" fill="white"></path></mask><g mask="url(#ic_arrow-down_mask0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H8V5H0V0Z" fill="#D8D8D8"></path></g></symbol></defs><use class="sprite-symbol-usage" id="eye-usage" xlink:href="#eye"></use><use class="sprite-symbol-usage" id="f_shops-usage" xlink:href="#f_shops"></use><use class="sprite-symbol-usage" id="f_users-usage" xlink:href="#f_users"></use><use class="sprite-symbol-usage" id="f_statistic-usage" xlink:href="#f_statistic"></use><use class="sprite-symbol-usage" id="h_cart-usage" xlink:href="#h_cart"></use><use class="sprite-symbol-usage" id="h_compare-usage" xlink:href="#h_compare"></use><use class="sprite-symbol-usage" id="h_favorite-usage" xlink:href="#h_favorite"></use><use class="sprite-symbol-usage" id="h_search-usage" xlink:href="#h_search"></use><use class="sprite-symbol-usage" id="ic_arrow_back-usage" xlink:href="#ic_arrow_back"></use><use class="sprite-symbol-usage" id="ic_arrow_forward-usage" xlink:href="#ic_arrow_forward"></use><use class="sprite-symbol-usage" id="ic_email-usage" xlink:href="#ic_email"></use><use class="sprite-symbol-usage" id="ic_email_open-usage" xlink:href="#ic_email_open"></use><use class="sprite-symbol-usage" id="ic_star-usage" xlink:href="#ic_star"></use></svg>'}},function(e,s){},function(e,s,a){var t=a(0);e.exports=function(e){var s,i="",r={};return i+='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Main Marketplace</title></head><body class="main">',r.listItems=s=function(e,a,r){this&&this.block,this&&this.attributes,i=i+"<li"+t.attr("class",t.classes([e+"__item"],[!0]),!1,!0)+"><a"+(t.attr("class",t.classes([e+"__link"],[!0]),!1,!0)+t.attr("href",a,!0,!0))+">"+t.escape(null==(s=r)?"":s)+"</a></li>"},r.productsItem=s=function(e,a,r,l,o){this&&this.block,this&&this.attributes,i=i+'<article class="products-card"><header class="products-card__header"><p class="products-card__category">'+t.escape(null==(s=e)?"":s)+'</p></header><a class="products-card__link" href="#"><img class="products-card__img"'+t.attr("src","./css/img/pr_"+a+".png",!0,!0)+t.attr("alt",r,!0,!0)+'><h3 class="products-card__name">'+t.escape(null==(s=l)?"":s)+'</h3></a><footer class="products-card__footer"><span class="products-card__price">'+t.escape(null==(s="$ "+o)?"":s)+"</span></footer></article>"},r.viewProduct=s=function(e,a,r,l){this&&this.block,this&&this.attributes,i=i+'<article class="products-card view-products-card"><a class="view-products-card__link" href="#"><div class="view-products-card__img-wrapper"><img class="view-products-card__img"'+t.attr("src","./css/img/pr_"+e+".png",!0,!0)+t.attr("alt",a,!0,!0)+'></div><div class="view-products-card__inner-text"><h3 class="view-products-card__name">'+t.escape(null==(s=r)?"":s)+'</h3><span class="view-products-card__price">'+t.escape(null==(s="$ "+l)?"":s)+"</span></div></a></article>"},i=i+(null==(s=a(3).call(this,e))?"":s)+'<header class="main-header"><h1 class="main-header__title visually-hidden">Wellcome to Marketplace</h1><nav class="main-header__nav"><div class="user-nav"><form class="search"><input class="search__submit sprite-h-search" type="submit" value="Поиск" name="s" title="Search this!"><input class="search__text" type="text" placeholder="Search goods..."></form><a class="logo" href="#">Go Home</a><ul class="user"><li class="user__item"><a class="user__link sprite sprite-h-favorite" href="#">Favorite</a></li><li class="user__item"><a class="user__link sprite sprite-h-compare" href="#">Compare</a></li><li class="user__item"><a class="user__link sprite sprite-h-cart" href="#">Cart</a></li><li class="user__item user__item--user"><a class="user__link user__link--user" href="#" title="My account">User</a></li></ul></div><ul class="categories">',r.listItems("categories","#","Electronics"),r.listItems("categories","#","Appliances"),r.listItems("categories","#","Children's goods"),r.listItems("categories","#","Repairs"),r.listItems("categories","#","Clothes"),r.listItems("categories","#","Footwear"),r.listItems("categories","#","Beauty"),i+='</ul></nav></header><main class="content"><h2 class="content__title visually-hidden">Content zone</h2><section class="promo-card"><button class="promo-card__arrow promo-card__arrow--back" type="button"><svg class="promo-card__svg"><use xlink:href="#ic_arrow_back"></use></svg></button><button class="promo-card__arrow promo-card__arrow--forward" type="button"><svg class="promo-card__svg"><use xlink:href="#ic_arrow_forward"></use></svg></button><div class="promo-card__wrapper"><h3 class="promo-card__title">The Best Place to Play</h3><a class="promo-card__btn" href="#">Badge</a><p class="promo-card__subtitle">space the final frontier</p></div></section><section class="product"><div class="product-header"><h2 class="product-header__title"><svg class="product-header__svg"><use xlink:href="#ic_star"></use></svg>Interesting offers</h2><div class="product-header__wrapper"><button class="product-header__btn">Popular</button><button class="product-header__btn">Trending</button><button class="product-header__btn">New</button></div><form class="product-header__wrapper product-header__form"><select class="product-header__input product-header__select" name="categories"><option value="" hidden>Categories</option><option value="Electronics">Electronics</option><option value="Appleances">Appleances</option><option value="Chilldren\'s goods">Chilldren\'s goods</option><option value="Repairs">Repairs</option><option value="Clothes">Clothes</option><option value="Footwear">Footwear</option><option value="Beauty">Beauty</option></select><select class="product-header__input product-header__select" name="date"><option value="" hidden>Date</option><option value="Last week">Last week</option><option value="Last 30 days">Last 30 days</option><option value="Last 90 days">Last 90 days</option></select></form></div><div class="products"><h2 class="products__title visually-hidden">Product list</h2>',r.productsItem("Recommend","asus-zenfone-go","Smartphone Asus ZenFone Go ZB452KG","Asus ZenFone Go ZB452KG","384.4"),r.productsItem("Bestseller","xiaomi-mi-band-2","Xiaomi Mi Band 2","Xiaomi Mi Band 2","384.4"),r.productsItem("Goods of the week","lg-43uh610v","LG 43UH610V","LG 43UH610V","384.4"),r.productsItem("Recommend","apple-imac-27-retina-5k","Apple iMac 27 Retina 5K","Apple iMac 27 Retina 5K","384.4"),r.productsItem("New product","lg-conditioner","LG Conditioner","LG Conditioner","384.4"),r.productsItem("Recommend","electrolux","Electrolux EZB 52410 AK","Electrolux EZB 52410 AK","384.4"),r.productsItem("Bestseller","beats-studio-wireles","Beats studio wireless","Beats studio wireless","384.4"),r.productsItem("Recommend","nikon-d3300","Nikon D3300 Kit","Nikon D3300 Kit","384.4"),i+='</div><button class="product__btn" type="button">show more</button></section></main><section class="subscribe"><h2 class="subscribe__title visually-hidden">Subscribe section</h2><svg class="subscribe__svg subscribe__svg--open-mail"><use xlink:href="#ic_email_open"></use></svg><p class="subscribe__caption">Learn about profitable offers and get personal recommendations</p><form class="subscribe-form" action="#"><svg class="subscribe__svg subscribe-form__svg"><use xlink:href="#ic_email"></use></svg><input class="subscribe-form__input" type="email" placeholder="Email"><button class="subscribe-form__btn" type="submit">Subscribe</button></form></section><section class="view-products"><h2 class="view-products__title"><svg class="view-products__svg"><use xlink:href="#eye"></use></svg>Recently viewed products</h2><div class="view-products__container">',r.viewProduct("iphone-7","Apple iPhone 7","Apple iPhone 7","670"),r.viewProduct("lg-43uh610v","LG 43UH610V","LG 43UH610V","545"),r.viewProduct("lg-phone","LG G6 H870DS","LG G6 H870DS","545"),r.viewProduct("beats-studio-wireles","Beats studio wireless","Beats studio wireless","545"),i=i+"</div></section>"+(null==(s=a(2).call(this,e))?"":s)+"</body></html>"}},function(e,s,a){e.exports=a.p+"./css/img/pr_lg-phone.png"},function(e,s,a){e.exports=a.p+"./css/img/pr_iphone-7.png"},function(e,s,a){e.exports=a.p+"./css/img/pr_nikon-d3300.png"},function(e,s,a){e.exports=a.p+"./css/img/pr_beats-studio-wireles.png"},function(e,s,a){e.exports=a.p+"./css/img/pr_electrolux.png"},function(e,s,a){e.exports=a.p+"./css/img/pr_lg-conditioner.png"},function(e,s,a){e.exports=a.p+"./css/img/pr_apple-imac-27-retina-5k.png"},function(e,s,a){e.exports=a.p+"./css/img/pr_lg-43uh610v.png"},function(e,s,a){e.exports=a.p+"./css/img/pr_xiaomi-mi-band-2.png"},function(e,s,a){e.exports=a.p+"./css/img/pr_asus-zenfone-go.png"},function(e,s){console.log("Hello! And another one!")},function(e,s){console.log("Hello! Its my first script")},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,s){}]);