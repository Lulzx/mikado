/**!
 * Mikado.js v0.7.58 (Light)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var p;var w={},z={},A={},B={},C={};function D(a,b,c){if(!(this instanceof D))return new D(a,b,c);a.nodeType||(c=b,b=a,a=null);a?this.mount(a):(this.b=this.f=null,this.length=0);this.init(b,c)}var E=D.register=function(a,b){b||(b=a,a=b.n);z[a]=b;return D};D.prototype.mount=function(a){if(this.b!==a){this.key&&this.b&&(this.b._o=this.l,this.l=a._o||{});this.b=a;F(this);var b;if(!(b=a._d)){b=a.children;for(var c=b.length,d=Array(c),f=0,e;f<c;f++)e=b[f],d[f]=e;b=a._d=d}this.f=b;this.length=this.f.length}return this};
D.prototype.index=function(a){for(var b=0,c=this.length;b<c;b++)if(this.f[b]===a)return b;return-1};D.prototype.node=function(a){return this.f[a]};
D.prototype.init=function(a,b){"string"===typeof a?a=z[a]:(b||!a||a.n||(b=a,a=null),a?a.n&&E(a):a=z[this.u]);b||(b=this.C||{});this.B=!1!==b.reuse;this.state=b.state||w;this.cache=!1!==b.cache;this.C=b;var c=a.n;this.u!==c&&(this.u=c,this.m=a.d,this.w=this.g=null,this.A=!1!==b.prefetch&&G(this,a),F(this),this.l=(this.key=a.k)&&{},a=b.pool,this.v=this.B&&!1!==a&&"key"!==a&&(B[c]||(B[c]=[])),this.o=this.key&&!1!==a&&"queue"!==a&&(C[c]||(C[c]={})),this.size=this.v&&b.size);return this};
D.once=function(a,b,c,d,f){var e=new D(a,b);"function"===typeof d&&(f=d,d=null);if(f){var g=f;f=function(){e.destroy(1);g()}}e.render(c,d,f);f||e.destroy(1);return D};function F(a){if(a.b){var b=a.b._t;b!==a.u&&(a.b._t=a.u,b&&(a.l={},a.remove(0,a.length)))}}p=D.prototype;
p.create=function(a,b,c){var d=this.key,f=d&&a[d],e,g;if(d&&(g=this.o)&&(e=g[f]))if(g){if(g[f]=null,g=this.v){var l=e._n;e._n=null;var h=g.pop();h!==e&&(h._n=l,g[l]=h)}}else d=0;else if((e=this.v)&&e.length)e=e.pop(),g&&(e._n=null,g[e._k]=null);else{var r=1;e=this.A}this.apply(e,a,b,c);r&&(e=this.A.cloneNode(!0),this.cache&&(e.$=Object.assign({},this.A.$)));d&&(e._k=f,this.l[f]=e);return e};
p.apply=function(a,b,c,d){this.A||(this.A=a=G(this,z[this.u]));if(!this.m)return this.w(a._p||H(this,a),a.$||(a.$={}),b,d,c),this};
p.render=function(a,b){var c=this.length;if(!a&&this.m)return this.f[0]||this.add(),this;var d=a.length;if("undefined"===typeof d)a=[a],d=1;else if(!d)return this.remove(0,c);var f=(this.o||!this.B)&&this.key;f||this.B||(this.remove(0,c,d),c=0);var e=c<d?c:d,g=0;if(g<e)for(;g<e;g++){var l=this.f[g],h=a[g];if(f&&l._k!==h[f])return this.reconcile(a,b,g,1);this.update(l,h,b,g)}if(g<d)for(;g<d;g++)this.add(a[g],b);else d<c&&this.remove(d,c-d);return this};
p.reconcile=function(a,b,c,d){var f=this.f,e=this.l,g=a.length,l=f.length,h=l>g?l:g,r=0,x=this.key;for(c||(c=0);c<h;c++){var n=void 0;if(c<g){var m=a[c],k=c>=l,q=void 0,v=void 0,y=void 0;if(!k&&(q=f[c],v=m[x],y=q._k,y===v)){d&&this.update(q,m,b,c);continue}if(k||!e[v]){d&&(k||!this.o?(l++,h=l>g?l:g,this.add(m,b,c)):this.replace(q,m,b,c));continue}for(var u=k=void 0,t=c+1;t<h;t++)if(!k&&t<l&&f[t]._k===v&&(k=t+1),!u&&t<g&&a[t][x]===y&&(u=t+1),k&&u){k>=u?(n=f[k-1],this.b.insertBefore(n,q),d&&this.update(n,
m,b,c),k===u?(1<t-c&&this.b.insertBefore(q,f[k]),f[c]=f[t],f[t]=q):(I(f,k-1,c),r++)):(m=u-1+r,this.b.insertBefore(q,f[m]||null),I(f,c,(m>l?l:m)-1),r--,c--);n=1;break}}n||(this.remove(c),l--,h=l>g?l:g,c--)}return this};function I(a,b,c,d){var f=d||a[b];d&&b++;if(b<c)for(;b<c;b++)a[b]=a[b+1];else for(;b>c;b--)a[b]=a[b-1];a[c]=f}
p.add=function(a,b,c,d){if(!d)if("number"===typeof b){c=b;b=null;var f=1}else if(c||0===c)f=1;c=d||f?c:this.length;a=this.create(a,b,c);f?(this.b.insertBefore(a,this.f[c]),I(this.f,this.length-1,c,a),this.length++):(d?this.b.replaceChild(a,d):(this.b.appendChild(a),this.length++),this.f[c]=a);return this};p.clear=function(){this.length&&this.remove(0,this.length);return this};p.destroy=function(a){a&&this.unload();this.length=0;this.l=this.f=this.b=this.u=this.g=this.w=this.A=null};
p.append=function(a,b,c){if("number"===typeof b){c=b;b=null;var d=1}else d=c||0===c;for(var f=a.length,e=0;e<f;e++)this.add(a[e],b,d?c++:null);return this};
p.remove=function(a,b,c){var d=this.length;a&&("object"===typeof a?a=this.index(a):0>a&&(a=d+a-1));if(!d||a>=d)return this;b?0>b&&(a-=b+1,0>a&&(a=0),b*=-1):b=1;!a&&b>=d?(a=this.f,b=a.length,this.b.textContent="",this.b._d=this.f=c?Array(c):[],d=0):(a=this.f.splice(a,b),d-=b);this.length=d;if(this.v&&!this.o&&1<b){c=a;for(var f=c.length,e=f/2|0,g=0,l;g<e;g++)l=c[g],c[g]=c[f-g-1],c[f-g-1]=l}for(c=0;c<b;c++)f=a[c],d&&this.b.removeChild(f),J(this,f);return this};
function J(a,b){if(a.key){var c=b._k;a.l[c]=null;a.o&&(a.o[c]=b)}a.v&&(c=a.v.length,!a.size||c<a.size)&&(a.o&&(b._n=c),a.v[c]=b)}p.replace=function(a,b,c,d){"undefined"===typeof d&&("number"===typeof a?(d=a,a=this.f[d]):d=this.index(a));this.add(b,c,d,a);J(this,a);return this};p.update=function(a,b,c,d){"undefined"===typeof d&&("number"===typeof a?(d=a,a=this.f[a]):d=this.index(a));if(this.key){var f=a._k,e=b[this.key];f!==e&&(this.l[f]=null,this.l[e]=a,a._k=e)}return this.apply(a,b,c,d)};
function H(a,b){for(var c=a.g.length,d={},f=Array(c),e=0,g;e<c;e++){g=a.g[e];var l=e,h;if(!(h=d[g])){h=b;for(var r=0,x=g.length,n="";r<x;r++){var m=g[r];n+=m;d[n]?h=d[n]:(">"===m?h=h.firstElementChild:"+"===m?h=h.nextElementSibling:"|"===m&&(h=h.firstChild),d[n]=h)}}f[l]=h}return b._p=f}var K;
function G(a,b,c,d,f){if(!c){var e=A[b.n+(a.cache?"$":"")];if(e)return a.w=e.w,a.m=e.m,a.g=e.g,e.node}e=document.createElement(b.t||"div");c||(c=0,d="&",K="",a.g=[],e._p=f=[],a.cache&&(e.$={}));var g=b.s,l=b.i,h=b.x,r=b.h,x=b.a,n=b.c,m=b.j,k=a.g.length,q=0,v="";m&&(v+=";"+m,-1<v.indexOf("self")&&(q=2));n&&("object"===typeof n?(n=""+n[0],v+=a.cache?";v="+n+";if(s._c"+k+"!==v){s._c"+k+"=v;self.className=v}":n?";self.className="+n:"",q++):e.className=n);if(x){var y;x&&(y=Object.keys(x));for(n=0;n<y.length;n++){m=
y[n];var u=void 0;!x||(u=x[m]);"object"===typeof u?(u=""+u[0],v+=a.cache?";v="+u+";if(s['_a_"+m+k+"']!==v){s['_a_"+m+k+"']=v;self.setAttribute('"+m+"',v)}":u?";self.setAttribute('"+m+"',"+u+")":"",q++):e.setAttribute(m,u)}}g&&("string"===typeof g?e.style.cssText=g:g.length&&(g=g[0],v+=a.cache?";v="+g+";if(s._cs"+k+"!==v){s._cs"+k+"=v;(self._s||(self._s=self.style)).cssText=v}":g?";self.style.cssText="+g:"",q++));if(!l)if(h){if(y="object"===typeof h){var t=!1;h=""+h[0]}g=document.createTextNode(h);
y&&(q&&k++,a.g[k]=d+"|",f[k]=g,L(q,a.cache&&!t?";v="+h+";if(s._x"+k+"!==v){s._x"+k+"=v;self.nodeValue=v}":h?";self.nodeValue="+h:"",k),q&&k--);e.appendChild(g)}else r&&("object"===typeof r?(r=""+r[0],v+=a.cache?";v="+r+";if(s._h"+k+"!==v){s._h"+k+"=v;self.innerHTML=v}":r?";self.innerHTML="+r:"",q++):e.innerHTML=r);q?(a.g[k]=d,f[k]=e,a.m=0,L(q,v,k)):v&&(K+=v);if(l)if(l.length)for(t=">",h=0;h<l.length;h++)h&&(t+="+"),k=l[h],e.appendChild(G(a,k,c+h+1,d+t,f));else e.appendChild(G(a,l,c+1,d+">",f));c||
(!a.m&&K&&(a.w=Function("p","s","data","index","view",'"use strict";var self,v'+K)),A[b.n+(a.cache?"$":"")]={w:a.w,m:a.m,g:a.g,node:e});return e}function L(a,b,c){K=1<a?K+(";self=p["+c+"]"+b):K+b.replace(/self/g,"p["+c+"]")}D.prototype.unload=function(a){a?"object"===typeof a&&(a=a.n):a=this.u;a&&(z[a]=null,B[a]=C[a]=A[a]=null,A[a+"$"]=null);return this};D.unregister=D.unload=D.prototype.unload;var M=window,N;(N=M.define)&&N.amd?N([],function(){return D}):"object"===typeof M.exports?M.module.exports=D:M.Mikado=D;}).call(this);
