(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="184",hs={ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mu=0,kl=1,Su=2,Or=1,Eu=2,Is=3,bi=0,cn=1,Xe=2,$e=0,us=1,Vl=2,Gl=3,Hl=4,_h=5,ti=100,bu=101,wu=102,Tu=103,Au=104,ta=200,Pu=201,Cu=202,Ru=203,ea=204,na=205,xh=206,Iu=207,vh=208,Du=209,Lu=210,Nu=211,Uu=212,Fu=213,Ou=214,ia=0,sa=1,ra=2,fs=3,oa=4,aa=5,la=6,ca=7,yh=0,Bu=1,zu=2,Vn=0,Ja=1,Qa=2,tl=3,el=4,nl=5,il=6,sl=7,Mh=300,ki=301,ps=302,po=303,mo=304,ro=306,Gs=1e3,ei=1001,ha=1002,ke=1003,ku=1004,er=1005,Je=1006,go=1007,Ui=1008,fn=1009,Sh=1010,Eh=1011,Hs=1012,rl=1013,Hn=1014,Pn=1015,vn=1016,ol=1017,al=1018,ms=1020,bh=35902,wh=35899,Th=1021,Ah=1022,Cn=1023,oi=1026,Mi=1027,ll=1028,cl=1029,Vi=1030,hl=1031,ul=1033,Br=33776,zr=33777,kr=33778,Vr=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37488,va=37489,Xr=37490,ya=37491,Ma=37808,Sa=37809,Ea=37810,ba=37811,wa=37812,Ta=37813,Aa=37814,Pa=37815,Ca=37816,Ra=37817,Ia=37818,Da=37819,La=37820,Na=37821,Ua=36492,Fa=36494,Oa=36495,Ba=36283,za=36284,Yr=36285,ka=36286,Vu=3200,qr=0,Gu=1,vi="",_n="srgb",jr="srgb-linear",Zr="linear",he="srgb",qi=7680,Wl=519,Hu=512,Wu=513,Xu=514,dl=515,Yu=516,qu=517,fl=518,ju=519,Va=35044,Xl="300 es",Bn=2e3,Ws=2001;function Zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}const Ku={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function nr(i,t){return new Ku[i](t)}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $u(){const i=Kr("canvas");return i.style.display="block",i}const Yl={};function $r(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ph(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=Ph(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function re(...i){i=Ph(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ga(...i){const t=i.join(" ");t in Yl||(Yl[t]=!0,Ht(...i))}function Ju(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Qu={[ia]:sa,[ra]:la,[oa]:ca,[fs]:aa,[sa]:ia,[la]:ra,[ca]:oa,[aa]:fs};class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ql=1234567;const Fs=Math.PI/180,Xs=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function pl(i,t){return(i%t+t)%t}function td(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ed(i,t,e){return i!==t?(e-i)/(t-i):0}function Os(i,t,e){return(1-e)*i+e*t}function nd(i,t,e,n){return Os(i,t,1-Math.exp(-e*n))}function id(i,t=1){return t-Math.abs(pl(i,t*2)-t)}function sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ad(i,t){return i+Math.random()*(t-i)}function ld(i){return i*(.5-Math.random())}function cd(i){i!==void 0&&(ql=i);let t=ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hd(i){return i*Fs}function ud(i){return i*Xs}function dd(i){return(i&i-1)===0&&i!==0}function fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function md(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ch={DEG2RAD:Fs,RAD2DEG:Xs,generateUUID:Gn,clamp:ee,euclideanModulo:pl,mapLinear:td,inverseLerp:ed,lerp:Os,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:od,randFloat:ad,randFloatSpread:ld,seededRandom:cd,degToRad:hd,radToDeg:ud,isPowerOfTwo:dd,ceilPowerOfTwo:fd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:ue,denormalize:wn},Al=class Al{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Al.prototype.isVector2=!0;let ut=Al;class We{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){const _=Math.acos(p),y=Math.sin(_);m=Math.sin(m*_)/y,a=Math.sin(a*_)/y,l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+x*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+x*a;const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pl=class Pl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pl.prototype.isVector3=!0;let D=Pl;const _o=new D,jl=new We,Cl=class Cl{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],_=s[1],y=s[4],M=s[7],C=s[2],w=s[5],P=s[8];return r[0]=o*x+a*_+l*C,r[3]=o*p+a*y+l*w,r[6]=o*m+a*M+l*P,r[1]=c*x+h*_+u*C,r[4]=c*p+h*y+u*w,r[7]=c*m+h*M+u*P,r[2]=d*x+f*_+g*C,r[5]=d*p+f*y+g*w,r[8]=d*m+f*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xo.makeScale(t,e)),this}rotate(t){return this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Cl.prototype.isMatrix3=!0;let jt=Cl;const xo=new jt,Zl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gd(){const i={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jr]:{primaries:t,whitePoint:n,transfer:Zr,toXYZ:Zl,fromXYZ:Kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Zl,fromXYZ:Kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}const oe=gd();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class _d{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=Kr("canvas")),ji.width=t.width,ji.height=t.height;const s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xd=0;class ml{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vo(s[o].image)):r.push(vo(s[o]))}else r=vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let vd=0;const yo=new D;class sn extends wi{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=ei,s=ei,r=Je,o=Ui,a=Cn,l=fn,c=sn.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Gn(),this.name="",this.source=new ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yo).x}get height(){return this.source.getSize(yo).y}get depth(){return this.source.getSize(yo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Mh;sn.DEFAULT_ANISOTROPY=1;const Rl=class Rl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(f+1)/2,C=(m+1)/2,w=(h+d)/4,P=(u+x)/4,S=(g+p)/4;return y>M&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=P/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=S/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=S/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rl.prototype.isVector4=!0;let Te=Rl;class yd extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ml(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends yd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rh extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const so=class so{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,x,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new so().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sd,t,Ed)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ui.crossVectors(n,un),ui.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ui.crossVectors(n,un)),ui.normalize(),ir.crossVectors(un,ui),s[0]=ui.x,s[4]=ir.x,s[8]=un.x,s[1]=ui.y,s[5]=ir.y,s[9]=un.y,s[2]=ui.z,s[6]=ir.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],y=n[7],M=n[11],C=n[15],w=s[0],P=s[4],S=s[8],b=s[12],I=s[1],T=s[5],L=s[9],B=s[13],z=s[2],N=s[6],F=s[10],O=s[14],H=s[3],G=s[7],X=s[11],K=s[15];return r[0]=o*w+a*I+l*z+c*H,r[4]=o*P+a*T+l*N+c*G,r[8]=o*S+a*L+l*F+c*X,r[12]=o*b+a*B+l*O+c*K,r[1]=h*w+u*I+d*z+f*H,r[5]=h*P+u*T+d*N+f*G,r[9]=h*S+u*L+d*F+f*X,r[13]=h*b+u*B+d*O+f*K,r[2]=g*w+x*I+p*z+m*H,r[6]=g*P+x*T+p*N+m*G,r[10]=g*S+x*L+p*F+m*X,r[14]=g*b+x*B+p*O+m*K,r[3]=_*w+y*I+M*z+C*H,r[7]=_*P+y*T+M*N+C*G,r[11]=_*S+y*L+M*F+C*X,r[15]=_*b+y*B+M*O+C*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],_=l*f-c*d,y=a*f-c*u,M=a*d-l*u,C=o*f-c*h,w=o*d-l*h,P=o*u-a*h;return e*(x*_-p*y+m*M)-n*(g*_-p*C+m*w)+s*(g*y-x*C+m*P)-r*(g*M-x*w+p*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=e*a-n*o,y=e*l-s*o,M=e*c-r*o,C=n*l-s*a,w=n*c-r*a,P=s*c-r*l,S=h*x-u*g,b=h*p-d*g,I=h*m-f*g,T=u*p-d*x,L=u*m-f*x,B=d*m-f*p,z=_*B-y*L+M*T+C*I-w*b+P*S;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return t[0]=(a*B-l*L+c*T)*N,t[1]=(s*L-n*B-r*T)*N,t[2]=(x*P-p*w+m*C)*N,t[3]=(d*w-u*P-f*C)*N,t[4]=(l*I-o*B-c*b)*N,t[5]=(e*B-s*I+r*b)*N,t[6]=(p*M-g*P-m*y)*N,t[7]=(h*P-d*M+f*y)*N,t[8]=(o*L-a*I+c*S)*N,t[9]=(n*I-e*L-r*S)*N,t[10]=(g*w-x*M+m*_)*N,t[11]=(u*M-h*w-f*_)*N,t[12]=(a*b-o*T-l*S)*N,t[13]=(e*T-n*b+s*S)*N,t[14]=(x*y-g*C-p*_)*N,t[15]=(h*C-u*y+d*_)*N,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,_=l*c,y=l*h,M=l*u,C=n.x,w=n.y,P=n.z;return s[0]=(1-(x+m))*C,s[1]=(f+M)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(d+m))*w,s[6]=(p+_)*w,s[7]=0,s[8]=(g+y)*P,s[9]=(p-_)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Zi.set(s[0],s[1],s[2]).length();const a=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);const c=1/o,h=1/a,u=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Bn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Bn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ws)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Bn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Bn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ws)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};so.prototype.isMatrix4=!0;let ge=so;const Zi=new D,yn=new ge,Sd=new D(0,0,0),Ed=new D(1,1,1),ui=new D,ir=new D,un=new D,$l=new ge,Jl=new We;class ai{constructor(t=0,e=0,n=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bd=0;const Ql=new D,Ki=new We,Yn=new ge,sr=new D,Ms=new D,wd=new D,Td=new We,tc=new D(1,0,0),ec=new D(0,1,0),nc=new D(0,0,1),ic={type:"added"},Ad={type:"removed"},$i={type:"childadded",child:null},Mo={type:"childremoved",child:null};class Le extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new D,e=new ai,n=new We,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sr.copy(t):sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ms,sr,this.up):Yn.lookAt(sr,Ms,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Yn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),$i.child=t,this.dispatchEvent($i),$i.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ad),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new D(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fi extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pd={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},rr={h:0,s:0,l:0};function Eo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=pl(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Eo(o,r,t+1/3),this.g=Eo(o,r,t),this.b=Eo(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=_n){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return oe.workingToColorSpace(Ze.copy(this),t),Math.round(ee(Ze.r*255,0,255))*65536+Math.round(ee(Ze.g*255,0,255))*256+Math.round(ee(Ze.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=_n){oe.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,s=Ze.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(rr);const n=Os(di.h,rr.h,e),s=Os(di.s,rr.s,e),r=Os(di.l,rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Jt;Jt.NAMES=Ih;class Cd extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mn=new D,qn=new D,bo=new D,jn=new D,Ji=new D,Qi=new D,sc=new D,wo=new D,To=new D,Ao=new D,Po=new Te,Co=new Te,Ro=new Te;class Tn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),qn.subVectors(n,e),bo.subVectors(t,e);const o=Mn.dot(Mn),a=Mn.dot(qn),l=Mn.dot(bo),c=qn.dot(qn),h=qn.dot(bo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Po.setScalar(0),Co.setScalar(0),Ro.setScalar(0),Po.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,n),Ro.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Po,r.x),o.addScaledVector(Co,r.y),o.addScaledVector(Ro,r.z),o}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),qn.subVectors(t,e),Mn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Mn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,n),Qi.subVectors(r,n),wo.subVectors(t,n);const l=Ji.dot(wo),c=Qi.dot(wo);if(l<=0&&c<=0)return e.copy(n);To.subVectors(t,s);const h=Ji.dot(To),u=Qi.dot(To);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ji,o);Ao.subVectors(t,r);const f=Ji.dot(Ao),g=Qi.dot(Ao);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Qi,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return sc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(sc,a);const m=1/(p+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ks{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),ar.subVectors(this.max,Ss),ts.subVectors(t.a,Ss),es.subVectors(t.b,Ss),ns.subVectors(t.c,Ss),fi.subVectors(es,ts),pi.subVectors(ns,es),Ai.subVectors(ts,ns);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ai.z,Ai.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ai.z,0,-Ai.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ai.y,Ai.x,0];return!Io(e,ts,es,ns,ar)||(e=[1,0,0,0,1,0,0,0,1],!Io(e,ts,es,ns,ar))?!1:(lr.crossVectors(fi,pi),e=[lr.x,lr.y,lr.z],Io(e,ts,es,ns,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zn=[new D,new D,new D,new D,new D,new D,new D,new D],Sn=new D,or=new Ks,ts=new D,es=new D,ns=new D,fi=new D,pi=new D,Ai=new D,Ss=new D,ar=new D,lr=new D,Pi=new D;function Io(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ne=new D,cr=new ut;let Rd=0;class rn extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Dh extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lh extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Id=new Ks,Es=new D,Do=new D;class $s{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Do.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Do)),this.expandByPoint(Es.copy(t.center).sub(Do))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Dd=0;const gn=new ge,Lo=new Le,is=new D,dn=new Ks,bs=new Ks,He=new D;class se extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zu(t)?Lh:Dh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Lo.lookAt(t),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(dn.min,bs.min),dn.expandByPoint(He),He.addVectors(dn.max,bs.max),dn.expandByPoint(He)):(dn.expandByPoint(bs.min),dn.expandByPoint(bs.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),He.add(is)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new D,l[S]=new D;const c=new D,h=new D,u=new D,d=new ut,f=new ut,g=new ut,x=new D,p=new D;function m(S,b,I){c.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,I),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[S].add(x),a[b].add(x),a[I].add(x),l[S].add(p),l[b].add(p),l[I].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let S=0,b=_.length;S<b;++S){const I=_[S],T=I.start,L=I.count;for(let B=T,z=T+L;B<z;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new D,M=new D,C=new D,w=new D;function P(S){C.fromBufferAttribute(s,S),w.copy(C);const b=a[S];y.copy(b),y.sub(C.multiplyScalar(C.dot(b))).normalize(),M.crossVectors(w,b);const T=M.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,T)}for(let S=0,b=_.length;S<b;++S){const I=_[S],T=I.start,L=I.count;for(let B=T,z=T+L;B<z;B+=3)P(t.getX(B+0)),P(t.getX(B+1)),P(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new rn(d,h,u)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new se,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ld{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new D;class Jr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Nd=0;class Wi extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=us,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Kn=new D,No=new D,hr=new D,mi=new D,Uo=new D,ur=new D,Fo=new D;class oo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){No.copy(t).add(e).multiplyScalar(.5),hr.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(No);const r=t.distanceTo(e)*.5,o=-this.direction.dot(hr),a=mi.dot(this.direction),l=-mi.dot(hr),c=mi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(No).addScaledVector(hr,d),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){Uo.subVectors(e,t),ur.subVectors(n,t),Fo.crossVectors(Uo,ur);let o=this.direction.dot(Fo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);const l=a*this.direction.dot(ur.crossVectors(mi,ur));if(l<0)return null;const c=a*this.direction.dot(Uo.cross(mi));if(c<0||l+c>o)return null;const h=-a*mi.dot(Fo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rc=new ge,Ci=new oo,dr=new $s,oc=new D,fr=new D,pr=new D,mr=new D,Oo=new D,gr=new D,ac=new D,_r=new D;class pt extends Le{constructor(t=new se,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Oo.fromBufferAttribute(u,t),o?gr.addScaledVector(Oo,h):gr.addScaledVector(Oo.sub(e),h))}e.add(gr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(dr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(dr,oc)===null||Ci.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(rc.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,C=y;M<C;M+=3){const w=a.getX(M),P=a.getX(M+1),S=a.getX(M+2);s=xr(this,m,t,n,c,h,u,w,P,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const _=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);s=xr(this,o,t,n,c,h,u,_,y,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=_,C=y;M<C;M+=3){const w=M,P=M+1,S=M+2;s=xr(this,m,t,n,c,h,u,w,P,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){const _=p,y=p+1,M=p+2;s=xr(this,o,t,n,c,h,u,_,y,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ud(i,t,e,n,s,r,o,a){let l;if(t.side===cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===bi,a),l===null)return null;_r.copy(a),_r.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_r);return c<e.near||c>e.far?null:{distance:c,point:_r.clone(),object:i}}function xr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,fr),i.getVertexPosition(l,pr),i.getVertexPosition(c,mr);const h=Ud(i,t,e,n,fr,pr,mr,ac);if(h){const u=new D;Tn.getBarycoord(ac,fr,pr,mr,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,l,c,u,new ut)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,u,new ut)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Tn.getNormal(fr,pr,mr,d.normal),h.face=d,h.barycoord=u}return h}class Nh extends sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ke,h=ke,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fd extends rn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Bo=new D,Od=new D,Bd=new jt;class Qn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Bo.subVectors(n,e).cross(Od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Bo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bd.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new $s,zd=new ut(.5,.5),vr=new D;class _l{constructor(t=new Qn,e=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],_=r[12],y=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-o,f-h,m-g,C-_).normalize(),s[1].setComponents(c+o,f+h,m+g,C+_).normalize(),s[2].setComponents(c+a,f+u,m+x,C+y).normalize(),s[3].setComponents(c-a,f-u,m-x,C-y).normalize(),n)s[4].setComponents(l,d,p,M).normalize(),s[5].setComponents(c-l,f-d,m-p,C-M).normalize();else if(s[4].setComponents(c-l,f-d,m-p,C-M).normalize(),e===Bn)s[5].setComponents(c+l,f+d,m+p,C+M).normalize();else if(e===Ws)s[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);const e=zd.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vr.x=s.normal.x>0?t.max.x:t.min.x,vr.y=s.normal.y>0?t.max.y:t.min.y,vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ln extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qr=new D,to=new D,lc=new ge,ws=new oo,yr=new $s,zo=new D,cc=new D;class Se extends Le{constructor(t=new se,e=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Qr.fromBufferAttribute(e,s-1),to.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Qr.distanceTo(to);t.setAttribute("lineDistance",new Qt(n,1))}else Ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;lc.copy(s).invert(),ws.copy(t.ray).applyMatrix4(lc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){const m=h.getX(x),_=h.getX(x+1),y=Mr(this,t,ws,l,m,_,x);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(g-1),p=h.getX(f),m=Mr(this,t,ws,l,x,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){const m=Mr(this,t,ws,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=Mr(this,t,ws,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Qr.fromBufferAttribute(a,s),to.fromBufferAttribute(a,r),e.distanceSqToSegment(Qr,to,zo,cc)>n)return;zo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(zo);if(!(c<t.near||c>t.far))return{distance:c,point:cc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const hc=new D,uc=new D;class kd extends Se{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)hc.fromBufferAttribute(e,s),uc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hc.distanceTo(uc);t.setAttribute("lineDistance",new Qt(n,1))}else Ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uh extends sn{constructor(t=[],e=ki,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gi extends sn{constructor(t,e,n=Hn,s,r,o,a=ke,l=ke,c,h=oi,u=1){if(h!==oi&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vd extends Gi{constructor(t,e=Hn,n=ki,s,r,o=ke,a=ke,l,c=oi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fh extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class we extends se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(x,p,m,_,y,M,C,w,P,S,b){const I=M/P,T=C/S,L=M/2,B=C/2,z=w/2,N=P+1,F=S+1;let O=0,H=0;const G=new D;for(let X=0;X<F;X++){const K=X*T-B;for(let st=0;st<N;st++){const xt=st*I-L;G[x]=xt*_,G[p]=K*y,G[m]=z,c.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[m]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(st/P),u.push(1-X/S),O+=1}}for(let X=0;X<S;X++)for(let K=0;K<P;K++){const st=d+K+N*X,xt=d+K+N*(X+1),dt=d+(K+1)+N*(X+1),Et=d+(K+1)+N*X;l.push(st,xt,Et),l.push(xt,dt,Et),H+=6}a.addGroup(f,H,b),f+=H,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class an extends se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ye extends se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],p=n/2;let m=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(f,2));function _(){const M=new D,C=new D;let w=0;const P=(e-t)/n;for(let S=0;S<=r;S++){const b=[],I=S/r,T=I*(e-t)+t;for(let L=0;L<=s;L++){const B=L/s,z=B*l+a,N=Math.sin(z),F=Math.cos(z);C.x=T*N,C.y=-I*n+p,C.z=T*F,u.push(C.x,C.y,C.z),M.set(N,P,F).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-I),b.push(g++)}x.push(b)}for(let S=0;S<s;S++)for(let b=0;b<r;b++){const I=x[b][S],T=x[b+1][S],L=x[b+1][S+1],B=x[b][S+1];(t>0||b!==0)&&(h.push(I,T,B),w+=3),(e>0||b!==r-1)&&(h.push(T,L,B),w+=3)}c.addGroup(m,w,0),m+=w}function y(M){const C=g,w=new ut,P=new D;let S=0;const b=M===!0?t:e,I=M===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*I,0),d.push(0,I,0),f.push(.5,.5),g++;const T=g;for(let L=0;L<=s;L++){const z=L/s*l+a,N=Math.cos(z),F=Math.sin(z);P.x=b*F,P.y=p*I,P.z=b*N,u.push(P.x,P.y,P.z),d.push(0,I,0),w.x=N*.5+.5,w.y=F*.5*I+.5,f.push(w.x,w.y),g++}for(let L=0;L<s;L++){const B=C+L,z=T+L;M===!0?h.push(z,z+1,B):h.push(z+1,z,B),S+=3}c.addGroup(m,S,M===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xl extends se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const y=new D,M=new D,C=new D;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],M),f(e[w+2],C),l(y,M,C,_)}function l(_,y,M,C){const w=C+1,P=[];for(let S=0;S<=w;S++){P[S]=[];const b=_.clone().lerp(M,S/w),I=y.clone().lerp(M,S/w),T=w-S;for(let L=0;L<=T;L++)L===0&&S===w?P[S][L]=b:P[S][L]=b.clone().lerp(I,L/T)}for(let S=0;S<w;S++)for(let b=0;b<2*(w-S)-1;b++){const I=Math.floor(b/2);b%2===0?(d(P[S][I+1]),d(P[S+1][I]),d(P[S][I])):(d(P[S][I+1]),d(P[S+1][I+1]),d(P[S+1][I]))}}function c(_){const y=new D;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){const _=new D;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const M=p(_)/2/Math.PI+.5,C=m(_)/Math.PI+.5;o.push(M,1-C)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){const y=o[_+0],M=o[_+2],C=o[_+4],w=Math.max(y,M,C),P=Math.min(y,M,C);w>.9&&P<.1&&(y<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),C<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){const M=_*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){const _=new D,y=new D,M=new D,C=new D,w=new ut,P=new ut,S=new ut;for(let b=0,I=0;b<r.length;b+=9,I+=6){_.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),w.set(o[I+0],o[I+1]),P.set(o[I+2],o[I+3]),S.set(o[I+4],o[I+5]),C.copy(_).add(y).add(M).divideScalar(3);const T=p(C);x(w,I+0,_,T),x(P,I+2,y,T),x(S,I+4,M,T)}}function x(_,y,M,C){C<0&&_.x===1&&(o[y]=_.x-1),M.x===0&&M.z===0&&(o[y]=C/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.vertices,t.indices,t.radius,t.detail)}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],o=[],a=new D,l=new ge;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ee(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ee(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vl extends Wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Gd extends vl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const dc=new D,fc=new D,ko=new yl,Vo=new yl,Go=new yl;class Hd extends Wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(fc.subVectors(s[0],s[1]).add(s[0]),c=fc);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(dc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),ko.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),Vo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),Go.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Vo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Go.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ko.calc(l),Vo.calc(l),Go.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Wd(i,t){const e=1-i;return e*e*t}function Xd(i,t){return 2*(1-i)*i*t}function Yd(i,t){return i*i*t}function Bs(i,t,e,n){return Wd(i,t)+Xd(i,e)+Yd(i,n)}function qd(i,t){const e=1-i;return e*e*e*t}function jd(i,t){const e=1-i;return 3*e*e*i*t}function Zd(i,t){return 3*(1-i)*i*i*t}function Kd(i,t){return i*i*i*t}function zs(i,t,e,n,s){return qd(i,t)+jd(i,e)+Zd(i,n)+Kd(i,s)}class Oh extends Wn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $d extends Wn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y),zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bh extends Wn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jd extends Wn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends Wn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,s.x,r.x,o.x),Bs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qd extends Wn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,s.x,r.x,o.x),Bs(t,s.y,r.y,o.y),Bs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(pc(a,l.x,c.x,h.x,u.x),pc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Ha=Object.freeze({__proto__:null,ArcCurve:Gd,CatmullRomCurve3:Hd,CubicBezierCurve:Oh,CubicBezierCurve3:$d,EllipseCurve:vl,LineCurve:Bh,LineCurve3:Jd,QuadraticBezierCurve:zh,QuadraticBezierCurve3:Qd,SplineCurve:kh});class tf extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ha[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ha[s.type]().fromJSON(s))}return this}}class mc extends tf{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bh(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new zh(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Oh(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new vl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class En extends mc{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new mc().fromJSON(s))}return this}}function ef(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Vh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=af(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ys(r,o,e,a,l,c,0),o}function Vh(i,t,e,n,s){let r;if(s===xf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=gc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=gc(o/n|0,i[o],i[o+1],r);return r&&gs(r,r.next)&&(js(r),r=r.next),r}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(gs(e,e.next)||Ee(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ys(i,t,e,n,s,r,o){if(!i)return;!o&&r&&df(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?sf(i,n,s,r):nf(i)){t.push(l.i,i.i,c.i),js(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=rf(Hi(i),t),Ys(i,t,e,n,s,r,2)):o===2&&of(i,t,e,n,s,r):Ys(Hi(i),t,e,n,s,r,1);break}}}function nf(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ds(s,a,r,l,o,c,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),x=Math.max(a,l,c),p=Math.max(h,u,d),m=Wa(f,g,t,e,n),_=Wa(x,p,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=m&&M&&M.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Ds(a,h,l,u,c,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ds(a,h,l,u,c,d,M.x,M.y)&&Ee(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&Ds(a,h,l,u,c,d,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Ds(a,h,l,u,c,d,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function rf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!gs(n,s)&&Hh(n,e,e.next,s)&&qs(n,s)&&qs(s,n)&&(t.push(n.i,e.i,s.i),js(e),js(e.next),e=i=s),e=e.next}while(e!==i);return Hi(e)}function of(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mf(o,a)){let l=Wh(o,a);o=Hi(o,o.next),l=Hi(l,l.next),Ys(o,t,e,n,s,r,0),Ys(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function af(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Vh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pf(c))}s.sort(lf);for(let r=0;r<s.length;r++)e=cf(s[r],e);return e}function lf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cf(i,t){const e=hf(i,t);if(!e)return t;const n=Wh(e,i);return Hi(n,n.next),Hi(e,e.next)}function hf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(gs(i,e))return e;do{if(gs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Gh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);qs(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&uf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function uf(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function df(i,t,e,n){let s=i;do s.z===0&&(s.z=Wa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ff(s)}function ff(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Wa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Gh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ds(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Gh(i,t,e,n,s,r,o,a)}function mf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gf(i,t)&&(qs(i,t)&&qs(t,i)&&_f(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||gs(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function gs(i,t){return i.x===t.x&&i.y===t.y}function Hh(i,t,e,n){const s=Er(Ee(i,t,e)),r=Er(Ee(i,t,n)),o=Er(Ee(e,n,i)),a=Er(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&Sr(i,e,t)||r===0&&Sr(i,n,t)||o===0&&Sr(e,i,n)||a===0&&Sr(e,t,n))}function Sr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Er(i){return i>0?1:i<0?-1:0}function gf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function _f(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wh(i,t){const e=Xa(i.i,i.x,i.y),n=Xa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gc(i,t,e,n){const s=Xa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class vf{static triangulate(t,e,n=2){return ef(t,e,n)}}class ni{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ni.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];_c(t),xc(n,t);let o=t.length;e.forEach(_c);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,xc(n,e[l]);const a=vf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function _c(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class xi extends se{constructor(t=new En([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:yf;let y,M=!1,C,w,P,S;if(m){y=m.getSpacedPoints(h),M=!0,d=!1;const J=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(h,J),w=new D,P=new D,S=new D}d||(p=0,f=0,g=0,x=0);const b=a.extractPoints(c);let I=b.shape;const T=b.holes;if(!ni.isClockWise(I)){I=I.reverse();for(let J=0,at=T.length;J<at;J++){const Q=T[J];ni.isClockWise(Q)&&(T[J]=Q.reverse())}}function B(J){const Q=10000000000000001e-36;let vt=J[0];for(let ft=1;ft<=J.length;ft++){const zt=ft%J.length,U=J[zt],Wt=U.x-vt.x,Lt=U.y-vt.y,Xt=Wt*Wt+Lt*Lt,mt=Math.max(Math.abs(U.x),Math.abs(U.y),Math.abs(vt.x),Math.abs(vt.y)),le=Q*mt*mt;if(Xt<=le){J.splice(zt,1),ft--;continue}vt=U}}B(I),T.forEach(B);const z=T.length,N=I;for(let J=0;J<z;J++){const at=T[J];I=I.concat(at)}function F(J,at,Q){return at||re("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(at,Q)}const O=I.length;function H(J,at,Q){let vt,ft,zt;const U=J.x-at.x,Wt=J.y-at.y,Lt=Q.x-J.x,Xt=Q.y-J.y,mt=U*U+Wt*Wt,le=U*Xt-Wt*Lt;if(Math.abs(le)>Number.EPSILON){const R=Math.sqrt(mt),E=Math.sqrt(Lt*Lt+Xt*Xt),W=at.x-Wt/R,tt=at.y+U/R,lt=Q.x-Xt/E,gt=Q.y+Lt/E,St=((lt-W)*Xt-(gt-tt)*Lt)/(U*Xt-Wt*Lt);vt=W+U*St-J.x,ft=tt+Wt*St-J.y;const $=vt*vt+ft*ft;if($<=2)return new ut(vt,ft);zt=Math.sqrt($/2)}else{let R=!1;U>Number.EPSILON?Lt>Number.EPSILON&&(R=!0):U<-Number.EPSILON?Lt<-Number.EPSILON&&(R=!0):Math.sign(Wt)===Math.sign(Xt)&&(R=!0),R?(vt=-Wt,ft=U,zt=Math.sqrt(mt)):(vt=U,ft=Wt,zt=Math.sqrt(mt/2))}return new ut(vt/zt,ft/zt)}const G=[];for(let J=0,at=N.length,Q=at-1,vt=J+1;J<at;J++,Q++,vt++)Q===at&&(Q=0),vt===at&&(vt=0),G[J]=H(N[J],N[Q],N[vt]);const X=[];let K,st=G.concat();for(let J=0,at=z;J<at;J++){const Q=T[J];K=[];for(let vt=0,ft=Q.length,zt=ft-1,U=vt+1;vt<ft;vt++,zt++,U++)zt===ft&&(zt=0),U===ft&&(U=0),K[vt]=H(Q[vt],Q[zt],Q[U]);X.push(K),st=st.concat(K)}let xt;if(p===0)xt=ni.triangulateShape(N,T);else{const J=[],at=[];for(let Q=0;Q<p;Q++){const vt=Q/p,ft=f*Math.cos(vt*Math.PI/2),zt=g*Math.sin(vt*Math.PI/2)+x;for(let U=0,Wt=N.length;U<Wt;U++){const Lt=F(N[U],G[U],zt);wt(Lt.x,Lt.y,-ft),vt===0&&J.push(Lt)}for(let U=0,Wt=z;U<Wt;U++){const Lt=T[U];K=X[U];const Xt=[];for(let mt=0,le=Lt.length;mt<le;mt++){const R=F(Lt[mt],K[mt],zt);wt(R.x,R.y,-ft),vt===0&&Xt.push(R)}vt===0&&at.push(Xt)}}xt=ni.triangulateShape(J,at)}const dt=xt.length,Et=g+x;for(let J=0;J<O;J++){const at=d?F(I[J],st[J],Et):I[J];M?(P.copy(C.normals[0]).multiplyScalar(at.x),w.copy(C.binormals[0]).multiplyScalar(at.y),S.copy(y[0]).add(P).add(w),wt(S.x,S.y,S.z)):wt(at.x,at.y,0)}for(let J=1;J<=h;J++)for(let at=0;at<O;at++){const Q=d?F(I[at],st[at],Et):I[at];M?(P.copy(C.normals[J]).multiplyScalar(Q.x),w.copy(C.binormals[J]).multiplyScalar(Q.y),S.copy(y[J]).add(P).add(w),wt(S.x,S.y,S.z)):wt(Q.x,Q.y,u/h*J)}for(let J=p-1;J>=0;J--){const at=J/p,Q=f*Math.cos(at*Math.PI/2),vt=g*Math.sin(at*Math.PI/2)+x;for(let ft=0,zt=N.length;ft<zt;ft++){const U=F(N[ft],G[ft],vt);wt(U.x,U.y,u+Q)}for(let ft=0,zt=T.length;ft<zt;ft++){const U=T[ft];K=X[ft];for(let Wt=0,Lt=U.length;Wt<Lt;Wt++){const Xt=F(U[Wt],K[Wt],vt);M?wt(Xt.x,Xt.y+y[h-1].y,y[h-1].x+Q):wt(Xt.x,Xt.y,u+Q)}}}j(),ct();function j(){const J=s.length/3;if(d){let at=0,Q=O*at;for(let vt=0;vt<dt;vt++){const ft=xt[vt];Dt(ft[2]+Q,ft[1]+Q,ft[0]+Q)}at=h+p*2,Q=O*at;for(let vt=0;vt<dt;vt++){const ft=xt[vt];Dt(ft[0]+Q,ft[1]+Q,ft[2]+Q)}}else{for(let at=0;at<dt;at++){const Q=xt[at];Dt(Q[2],Q[1],Q[0])}for(let at=0;at<dt;at++){const Q=xt[at];Dt(Q[0]+O*h,Q[1]+O*h,Q[2]+O*h)}}n.addGroup(J,s.length/3-J,0)}function ct(){const J=s.length/3;let at=0;nt(N,at),at+=N.length;for(let Q=0,vt=T.length;Q<vt;Q++){const ft=T[Q];nt(ft,at),at+=ft.length}n.addGroup(J,s.length/3-J,1)}function nt(J,at){let Q=J.length;for(;--Q>=0;){const vt=Q;let ft=Q-1;ft<0&&(ft=J.length-1);for(let zt=0,U=h+p*2;zt<U;zt++){const Wt=O*zt,Lt=O*(zt+1),Xt=at+vt+Wt,mt=at+ft+Wt,le=at+ft+Lt,R=at+vt+Lt;At(Xt,mt,le,R)}}}function wt(J,at,Q){l.push(J),l.push(at),l.push(Q)}function Dt(J,at,Q){ot(J),ot(at),ot(Q);const vt=s.length/3,ft=_.generateTopUV(n,s,vt-3,vt-2,vt-1);Mt(ft[0]),Mt(ft[1]),Mt(ft[2])}function At(J,at,Q,vt){ot(J),ot(at),ot(vt),ot(at),ot(Q),ot(vt);const ft=s.length/3,zt=_.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);Mt(zt[0]),Mt(zt[1]),Mt(zt[3]),Mt(zt[1]),Mt(zt[2]),Mt(zt[3])}function ot(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Mt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Mf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ha[s.type]().fromJSON(s)),new xi(n,t.options)}}const yf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-u),new ut(d,1-g),new ut(x,1-m)]:[new ut(a,1-l),new ut(h,1-u),new ut(f,1-g),new ut(p,1-m)]}};function Mf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ls extends xl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ls(t.radius,t.detail)}}class xs extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const _=m*d-o;for(let y=0;y<c;y++){const M=y*u-r;g.push(M,-_,0),x.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const y=_+c*m,M=_+c*(m+1),C=_+1+c*(m+1),w=_+1+c*m;f.push(y,M,w),f.push(M,C,w)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ml extends se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new D,g=new ut;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){const p=x*(n+1);for(let m=0;m<n;m++){const _=m+p,y=_,M=_+n+1,C=_+n+2,w=_+1;a.push(y,M,w),a.push(M,C,w)}}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Zs extends se{constructor(t=new En([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(r,3)),this.setAttribute("uv",new Qt(o,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;ni.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const _=g[p];ni.isClockWise(_)===!0&&(g[p]=_.reverse())}const x=ni.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const _=g[p];f=f.concat(_)}for(let p=0,m=f.length;p<m;p++){const _=f[p];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let p=0,m=x.length;p<m;p++){const _=x[p],y=_[0]+u,M=_[1]+u,C=_[2]+u;n.push(y,M,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Sf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Zs(n,t.curveSegments)}}function Sf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Sl extends se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const _=[],y=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const w=C/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(w+M,1-y),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const y=h[m][_+1],M=h[m][_],C=h[m+1][_],w=h[m+1][_+1];(m!==0||o>0)&&f.push(y,M,w),(m!==n-1||l<Math.PI)&&f.push(M,C,w)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(x,3)),this.setAttribute("uv",new Qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Li extends se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],d=new D,f=new D,g=new D;for(let x=0;x<=n;x++){const p=o+x/n*a;for(let m=0;m<=s;m++){const _=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){const m=(s+1)*x+p-1,_=(s+1)*(x-1)+p-1,y=(s+1)*(x-1)+p,M=(s+1)*x+p;l.push(m,_,M),l.push(_,y,M)}this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function _s(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(vc(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=_s(i[e]);for(const s in n)t[s]=n[s]}return t}function vc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ef(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Oi={clone:_s,merge:nn};var bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qe extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yh extends Qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jn extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tf extends Wi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Af extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pf extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yc extends ln{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Mc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Sc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Sc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Sc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Cf{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Rf=new Cf;class El{constructor(t){this.manager=t!==void 0?t:Rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}El.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class If extends Error{constructor(t,e){super(t),this.response=e}}class Df extends El{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Mc.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if($n[t]!==void 0){$n[t].push({onLoad:e,onProgress:n,onError:s});return}$n[t]=[],$n[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ht("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=$n[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const p=new ReadableStream({start(m){_();function _(){u.read().then(({done:y,value:M})=>{if(y)m.close();else{x+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,P=h.length;w<P;w++){const S=h[w];S.onProgress&&S.onProgress(C)}m.enqueue(M),_()}},y=>{m.error(y)})}}});return new Response(p)}else throw new If(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Mc.add(`file:${t}`,c);const h=$n[t];delete $n[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=$n[t];if(h===void 0)throw this.manager.itemError(t),c;delete $n[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qh extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Ho=new ge,Ec=new D,bc=new D;class Lf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ec),bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bc),e.updateMatrixWorld(),Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ws||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const br=new D,wr=new We,Dn=new D;class jh extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(br,wr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(br,wr,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(br,wr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(br,wr,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gi=new D,wc=new ut,Tc=new ut;class xn extends jh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,wc,Tc),e.subVectors(Tc,wc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Js extends jh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Nf extends Lf{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ac extends qh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Nf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Uf extends qh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ff extends se{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Of extends El{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Df(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){s?s(l):re(l),r.manager.itemError(t)}},n,s)}parse(t){const e={},n={};function s(f,g){if(e[g]!==void 0)return e[g];const p=f.interleavedBuffers[g],m=r(f,p.buffer),_=nr(p.type,m),y=new Ld(_,p.stride);return y.uuid=p.uuid,e[g]=y,y}function r(f,g){if(n[g]!==void 0)return n[g];const p=f.arrayBuffers[g],m=new Uint32Array(p).buffer;return n[g]=m,m}const o=t.isInstancedBufferGeometry?new Ff:new se,a=t.data.index;if(a!==void 0){const f=nr(a.type,a.array);o.setIndex(new rn(f,1))}const l=t.data.attributes;for(const f in l){const g=l[f];let x;if(g.isInterleavedBufferAttribute){const p=s(t.data,g.data);x=new Jr(p,g.itemSize,g.offset,g.normalized)}else{const p=nr(g.type,g.array),m=g.isInstancedBufferAttribute?Fd:rn;x=new m(p,g.itemSize,g.normalized)}g.name!==void 0&&(x.name=g.name),g.usage!==void 0&&x.setUsage(g.usage),o.setAttribute(f,x)}const c=t.data.morphAttributes;if(c)for(const f in c){const g=c[f],x=[];for(let p=0,m=g.length;p<m;p++){const _=g[p];let y;if(_.isInterleavedBufferAttribute){const M=s(t.data,_.data);y=new Jr(M,_.itemSize,_.offset,_.normalized)}else{const M=nr(_.type,_.array);y=new rn(M,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),x.push(y)}o.morphAttributes[f]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,g=u.length;f!==g;++f){const x=u[f];o.addGroup(x.start,x.count,x.materialIndex)}const d=t.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new $s().fromJSON(d)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}const ss=-90,rs=1;class Bf extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(ss,rs,t,e);s.layers=this.layers,this.add(s);const r=new xn(ss,rs,t,e);r.layers=this.layers,this.add(r);const o=new xn(ss,rs,t,e);o.layers=this.layers,this.add(o);const a=new xn(ss,rs,t,e);a.layers=this.layers,this.add(a);const l=new xn(ss,rs,t,e);l.layers=this.layers,this.add(l);const c=new xn(ss,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zf extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class kf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Vf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Vf(){this._document.hidden===!1&&this.reset()}const Pc=new ge;class Zh{constructor(t,e,n=0,s=1/0){this.ray=new oo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pc),this}intersectObject(t,e=!0,n=[]){return Ya(t,this,n,e),n.sort(Cc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ya(t[s],this,n,e);return n.sort(Cc),n}}function Cc(i,t){return i.distance-t.distance}function Ya(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ya(r[o],t,e,!0)}}class Rc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Il=class Il{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Il.prototype.isMatrix2=!0;let Ic=Il;class Gf extends kd{constructor(t=10,e=10,n=4473924,s=8947848){n=new Jt(n),s=new Jt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=d===r?n:s;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new se;h.setAttribute("position",new Qt(l,3)),h.setAttribute("color",new Qt(c,3));const u=new ln({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Kh extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Dc(i,t,e,n){const s=Hf(n);switch(e){case Th:return i*t;case ll:return i*t/s.components*s.byteLength;case cl:return i*t/s.components*s.byteLength;case Vi:return i*t*2/s.components*s.byteLength;case hl:return i*t*2/s.components*s.byteLength;case Ah:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case ul:return i*t*4/s.components*s.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(t,8)/2;case ma:case ga:case xa:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:case Xr:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ua:case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ba:case za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yr:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hf(i){switch(i){case fn:case Sh:return{byteLength:1,components:1};case Hs:case Eh:case vn:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case Hn:case rl:case Pn:return{byteLength:4,components:1};case bh:case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $h(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Xf,alphahash_pars_fragment:Yf,alphamap_fragment:qf,alphamap_pars_fragment:jf,alphatest_fragment:Zf,alphatest_pars_fragment:Kf,aomap_fragment:$f,aomap_pars_fragment:Jf,batching_pars_vertex:Qf,batching_vertex:tp,begin_vertex:ep,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:op,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:_p,displacementmap_vertex:xp,emissivemap_fragment:vp,emissivemap_pars_fragment:yp,colorspace_fragment:Mp,colorspace_pars_fragment:Sp,envmap_fragment:Ep,envmap_common_pars_fragment:bp,envmap_pars_fragment:wp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Op,envmap_vertex:Ap,fog_vertex:Pp,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Up,lights_pars_begin:Fp,lights_toon_fragment:Bp,lights_toon_pars_fragment:zp,lights_phong_fragment:kp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:Yp,lightprobes_pars_fragment:qp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:$p,map_fragment:Jp,map_pars_fragment:Qp,map_particle_fragment:tm,map_particle_pars_fragment:em,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:om,morphtarget_pars_vertex:am,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:xm,opaque_fragment:vm,packing:ym,premultiplied_alpha_fragment:Mm,project_vertex:Sm,dithering_fragment:Em,dithering_pars_fragment:bm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Pm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Rm,skinbase_vertex:Im,skinning_pars_vertex:Dm,skinning_vertex:Lm,skinnormal_vertex:Nm,specularmap_fragment:Um,specularmap_pars_fragment:Fm,tonemapping_fragment:Om,tonemapping_pars_fragment:Bm,transmission_fragment:zm,transmission_pars_fragment:km,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:Hm,worldpos_vertex:Wm,background_vert:Xm,background_frag:Ym,backgroundCube_vert:qm,backgroundCube_frag:jm,cube_vert:Zm,cube_frag:Km,depth_vert:$m,depth_frag:Jm,distance_vert:Qm,distance_frag:tg,equirect_vert:eg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:sg,meshbasic_vert:rg,meshbasic_frag:og,meshlambert_vert:ag,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:hg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:_g,meshtoon_frag:xg,points_vert:vg,points_frag:yg,shadow_vert:Mg,shadow_frag:Sg,sprite_vert:Eg,sprite_frag:bg},Pt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Fn={basic:{uniforms:nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:nn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:nn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:nn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:nn([Pt.points,Pt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:nn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:nn([Pt.common,Pt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:nn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:nn([Pt.sprite,Pt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:nn([Pt.common,Pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:nn([Pt.lights,Pt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Fn.physical={uniforms:nn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Tr={r:0,b:0,g:0},wg=new ge,Jh=new jt;Jh.set(-1,0,0,0,1,0,0,0,1);function Tg(i,t,e,n,s,r){const o=new Jt(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const M=_.backgroundBlurriness>0;y=t.get(y,M)}return y}function g(_){let y=!1;const M=f(_);M===null?p(o,a):M&&M.isColor&&(p(M,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===ro)?(c===void 0&&(c=new pt(new we(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:_s(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jh),c.material.toneMapped=oe.getTransfer(M.colorSpace)!==he,(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pt(new xs(2,2),new Qe({name:"BackgroundMaterial",uniforms:_s(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(M.colorSpace)!==he,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(Tr,Xh(i)),e.buffers.color.setClear(Tr.r,Tr.g,Tr.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:g,addToRenderList:x,dispose:m}}function Ag(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(T,L,B,z,N){let F=!1;const O=u(T,z,B,L);r!==O&&(r=O,c(r.object)),F=f(T,z,B,N),F&&g(T,z,B,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(T,L,B,z),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,L,B,z){const N=z.wireframe===!0;let F=n[L.id];F===void 0&&(F={},n[L.id]=F);const O=T.isInstancedMesh===!0?T.id:0;let H=F[O];H===void 0&&(H={},F[O]=H);let G=H[B.id];G===void 0&&(G={},H[B.id]=G);let X=G[N];return X===void 0&&(X=d(l()),G[N]=X),X}function d(T){const L=[],B=[],z=[];for(let N=0;N<e;N++)L[N]=0,B[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:z,object:T,attributes:{},index:null}}function f(T,L,B,z){const N=r.attributes,F=L.attributes;let O=0;const H=B.getAttributes();for(const G in H)if(H[G].location>=0){const K=N[G];let st=F[G];if(st===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(st=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(st=T.instanceColor)),K===void 0||K.attribute!==st||st&&K.data!==st.data)return!0;O++}return r.attributesNum!==O||r.index!==z}function g(T,L,B,z){const N={},F=L.attributes;let O=0;const H=B.getAttributes();for(const G in H)if(H[G].location>=0){let K=F[G];K===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(K=T.instanceColor));const st={};st.attribute=K,K&&K.data&&(st.data=K.data),N[G]=st,O++}r.attributes=N,r.attributesNum=O,r.index=z}function x(){const T=r.newAttributes;for(let L=0,B=T.length;L<B;L++)T[L]=0}function p(T){m(T,0)}function m(T,L){const B=r.newAttributes,z=r.enabledAttributes,N=r.attributeDivisors;B[T]=1,z[T]===0&&(i.enableVertexAttribArray(T),z[T]=1),N[T]!==L&&(i.vertexAttribDivisor(T,L),N[T]=L)}function _(){const T=r.newAttributes,L=r.enabledAttributes;for(let B=0,z=L.length;B<z;B++)L[B]!==T[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function y(T,L,B,z,N,F,O){O===!0?i.vertexAttribIPointer(T,L,B,N,F):i.vertexAttribPointer(T,L,B,z,N,F)}function M(T,L,B,z){x();const N=z.attributes,F=B.getAttributes(),O=L.defaultAttributeValues;for(const H in F){const G=F[H];if(G.location>=0){let X=N[H];if(X===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(X=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(X=T.instanceColor)),X!==void 0){const K=X.normalized,st=X.itemSize,xt=t.get(X);if(xt===void 0)continue;const dt=xt.buffer,Et=xt.type,j=xt.bytesPerElement,ct=Et===i.INT||Et===i.UNSIGNED_INT||X.gpuType===rl;if(X.isInterleavedBufferAttribute){const nt=X.data,wt=nt.stride,Dt=X.offset;if(nt.isInstancedInterleavedBuffer){for(let At=0;At<G.locationSize;At++)m(G.location+At,nt.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let At=0;At<G.locationSize;At++)p(G.location+At);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let At=0;At<G.locationSize;At++)y(G.location+At,st/G.locationSize,Et,K,wt*j,(Dt+st/G.locationSize*At)*j,ct)}else{if(X.isInstancedBufferAttribute){for(let nt=0;nt<G.locationSize;nt++)m(G.location+nt,X.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let nt=0;nt<G.locationSize;nt++)p(G.location+nt);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let nt=0;nt<G.locationSize;nt++)y(G.location+nt,st/G.locationSize,Et,K,st*j,st/G.locationSize*nt*j,ct)}}else if(O!==void 0){const K=O[H];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(G.location,K);break;case 3:i.vertexAttrib3fv(G.location,K);break;case 4:i.vertexAttrib4fv(G.location,K);break;default:i.vertexAttrib1fv(G.location,K)}}}}_()}function C(){b();for(const T in n){const L=n[T];for(const B in L){const z=L[B];for(const N in z){const F=z[N];for(const O in F)h(F[O].object),delete F[O];delete z[N]}}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const L=n[T.id];for(const B in L){const z=L[B];for(const N in z){const F=z[N];for(const O in F)h(F[O].object),delete F[O];delete z[N]}}delete n[T.id]}function P(T){for(const L in n){const B=n[L];for(const z in B){const N=B[z];if(N[T.id]===void 0)continue;const F=N[T.id];for(const O in F)h(F[O].object),delete F[O];delete N[T.id]}}}function S(T){for(const L in n){const B=n[L],z=T.isInstancedMesh===!0?T.id:0,N=B[z];if(N!==void 0){for(const F in N){const O=N[F];for(const H in O)h(O[H].object),delete O[H];delete N[F]}delete B[z],Object.keys(B).length===0&&delete n[L]}}}function b(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Pg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Cn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const S=P===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==fn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pn&&!S)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,maxSamples:C,samples:w}}function Rg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Qn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const _=r?0:n,y=_*4;let M=m.clippingState||null;l.value=M,M=h(g,d,y,f);for(let C=0;C!==y;++C)M[C]=e[C];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=f;y!==x;++y,M+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}const Si=4,Lc=[.125,.215,.35,.446,.526,.582],Ni=20,Ig=256,Ts=new Js,Nc=new Jt;let Wo=null,Xo=0,Yo=0,qo=!1;const Dg=new D;class Uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Dg}=r;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,Yo),this._renderer.xr.enabled=qo,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:vn,format:Cn,colorSpace:jr,depthBuffer:!1},s=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Ug(r,t,e),this._ggxMaterial=Ng(r,t,e)}return s}_compileMaterial(t){const e=new pt(new se,t);this._renderer.compile(e,Ts)}_sceneToCubeUV(t,e,n,s,r){const l=new xn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Nc),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new we,new Ie({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,m=!0):(p.color.copy(Nc),m=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const C=this._cubeSize;os(s,M*C,y>2?C:0,C,C),u.setRenderTarget(s),m&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ki||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ts)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-Si?n-g+Si:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,os(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Ts),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,os(t,p,m,3*x,2*x),s.setRenderTarget(t),s.render(a,Ts)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&re("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Ni;p>Ni&&Ht(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);const m=[];let _=0;for(let P=0;P<Ni;++P){const S=P/x,b=Math.exp(-S*S/2);m.push(b),P===0?_+=b:P<p&&(_+=2*b)}for(let P=0;P<m.length;P++)m[P]=m[P]/_;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const M=this._sizeLods[s],C=3*M*(s>y-Si?s-y+Si:0),w=4*(this._cubeSize-M);os(e,C,w,3*M,2*M),l.setRenderTarget(e),l.render(u,Ts)}}function Lg(i){const t=[],e=[],n=[];let s=i;const r=i-Si+1+Lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Si?l=Lc[o-i+Si-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*f),y=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let w=0;w<f;w++){const P=w%3*2/3-1,S=w>2?0:-1,b=[P,S,0,P+2/3,S,0,P+2/3,S+1,0,P,S,0,P+2/3,S+1,0,P,S+1,0];_.set(b,x*g*w),y.set(d,p*g*w);const I=[w,w,w,w,w,w];M.set(I,m*g*w)}const C=new se;C.setAttribute("position",new rn(_,x)),C.setAttribute("uv",new rn(y,p)),C.setAttribute("faceIndex",new rn(M,m)),n.push(new pt(C,null)),s>Si&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Fc(i,t,e){const n=new pn(i,t,e);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ng(i,t,e){return new Qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ao(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function Ug(i,t,e){const n=new Float32Array(Ni),s=new D(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function Oc(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function Bc(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$e,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qh extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new we(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:$e});r.uniforms.tEquirect.value=e;const o=new pt(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Je),new Bf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Fg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===po||f===mo)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new Qh(g.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,g=f===po||f===mo,x=f===ki||f===ps;if(g||x){let p=e.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Uc(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const _=d.image;return g&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Uc(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===po?d.mapping=ki:f===mo&&(d.mapping=ps),d}function l(d){let f=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Og(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ga("WebGLRenderer: "+n+" extension not supported."),s}}}function Bg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const _=f.array;x=f.version;for(let y=0,M=_.length;y<M;y+=3){const C=_[y+0],w=_[y+1],P=_[y+2];d.push(C,w,w,P,P,C)}}else{const _=g.array;x=g.version;for(let y=0,M=_.length/3-1;y<M;y+=3){const C=y+0,w=y+1,P=y+2;d.push(C,w,w,P,P,C)}}const p=new(g.count>=65535?Lh:Dh)(d,1);p.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function zg(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function kg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vg(i,t,e){const n=new WeakMap,s=new Te;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const w=new Float32Array(M*C*4*u),P=new Rh(w,M,C,u);P.type=Pn,P.needsUpdate=!0;const S=y*4;for(let I=0;I<u;I++){const T=p[I],L=m[I],B=_[I],z=M*C*4*I;for(let N=0;N<T.count;N++){const F=N*S;f===!0&&(s.fromBufferAttribute(T,N),w[z+F+0]=s.x,w[z+F+1]=s.y,w[z+F+2]=s.z,w[z+F+3]=0),g===!0&&(s.fromBufferAttribute(L,N),w[z+F+4]=s.x,w[z+F+5]=s.y,w[z+F+6]=s.z,w[z+F+7]=0),x===!0&&(s.fromBufferAttribute(B,N),w[z+F+8]=s.x,w[z+F+9]=s.y,w[z+F+10]=s.z,w[z+F+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ut(M,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Gg(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Hg={[Ja]:"LINEAR_TONE_MAPPING",[Qa]:"REINHARD_TONE_MAPPING",[tl]:"CINEON_TONE_MAPPING",[el]:"ACES_FILMIC_TONE_MAPPING",[il]:"AGX_TONE_MAPPING",[sl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function Wg(i,t,e,n,s){const r=new pn(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Gi(t,e):void 0}),o=new pn(t,e,{type:vn,depthBuffer:!1,stencilBuffer:!1}),a=new se;a.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const l=new Yh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new pt(a,l),h=new Js(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,x=null,p=[],m=!1;this.setSize=function(_,y){r.setSize(_,y),o.setSize(_,y);for(let M=0;M<p.length;M++){const C=p[M];C.setSize&&C.setSize(_,y)}},this.setEffects=function(_){p=_,m=p.length>0&&p[0].isRenderPass===!0;const y=r.width,M=r.height;for(let C=0;C<p.length;C++){const w=p[C];w.setSize&&w.setSize(y,M)}},this.begin=function(_,y){if(f||_.toneMapping===Vn&&p.length===0)return!1;if(x=y,y!==null){const M=y.width,C=y.height;(r.width!==M||r.height!==C)&&this.setSize(M,C)}return m===!1&&_.setRenderTarget(r),g=_.toneMapping,_.toneMapping=Vn,!0},this.hasRenderPass=function(){return m},this.end=function(_,y){_.toneMapping=g,f=!0;let M=r,C=o;for(let w=0;w<p.length;w++){const P=p[w];if(P.enabled!==!1&&(P.render(_,C,M,y),P.needsSwap!==!1)){const S=M;M=C,C=S}}if(u!==_.outputColorSpace||d!==_.toneMapping){u=_.outputColorSpace,d=_.toneMapping,l.defines={},oe.getTransfer(u)===he&&(l.defines.SRGB_TRANSFER="");const w=Hg[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(x),_.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const tu=new sn,qa=new Gi(1,1),eu=new Rh,nu=new Md,iu=new Uh,zc=[],kc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),Hc=new Float32Array(4);function vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zc[s];if(r===void 0&&(r=new Float32Array(s),zc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lo(i,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Zg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),Ge(e,n)}}function Kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Gc.set(n),i.uniformMatrix3fv(this.addr,!1,Gc),Ge(e,n)}}function $g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),Ge(e,n)}}function Jg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function o0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qa.compareFunction=e.isReversedDepthBuffer()?fl:dl,r=qa):r=tu,e.setTexture2D(t||r,s)}function a0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nu,s)}function l0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||iu,s)}function c0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eu,s)}function h0(i){switch(i){case 5126:return Xg;case 35664:return Yg;case 35665:return qg;case 35666:return jg;case 35674:return Zg;case 35675:return Kg;case 35676:return $g;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(i,t){i.uniform1fv(this.addr,t)}function d0(i,t){const e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function f0(i,t){const e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function p0(i,t){const e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function m0(i,t){const e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function g0(i,t){const e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _0(i,t){const e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function x0(i,t){i.uniform1iv(this.addr,t)}function v0(i,t){i.uniform2iv(this.addr,t)}function y0(i,t){i.uniform3iv(this.addr,t)}function M0(i,t){i.uniform4iv(this.addr,t)}function S0(i,t){i.uniform1uiv(this.addr,t)}function E0(i,t){i.uniform2uiv(this.addr,t)}function b0(i,t){i.uniform3uiv(this.addr,t)}function w0(i,t){i.uniform4uiv(this.addr,t)}function T0(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=qa:o=tu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function A0(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nu,r[o])}function P0(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||iu,r[o])}function C0(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||eu,r[o])}function R0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return E0;case 36295:return b0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return C0}}class I0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=h0(e.type)}}class D0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R0(e.type)}}class L0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function Wc(i,t){i.seq.push(t),i.map[t.id]=t}function N0(i,t,e){const n=i.name,s=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),o=jo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wc(e,c===void 0?new I0(a,i,t):new D0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new L0(a),Wc(e,u)),e=u}}}class Gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);N0(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const U0=37297;let F0=0;function O0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Yc=new jt;function B0(i){oe._getMatrix(Yc,oe.workingColorSpace,i);const t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Zr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+O0(i.getShaderSource(t),a)}else return r}function z0(i,t){const e=B0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const k0={[Ja]:"Linear",[Qa]:"Reinhard",[tl]:"Cineon",[el]:"ACESFilmic",[il]:"AgX",[sl]:"Neutral",[nl]:"Custom"};function V0(i,t){const e=k0[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ar=new D;function G0(){oe.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function W0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ls(i){return i!==""}function jc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(i){return i.replace(Y0,j0)}const q0=new Map;function j0(i,t){let e=te[t];if(e===void 0){const n=q0.get(t);if(n!==void 0)e=te[n],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ja(e)}const Z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(i){return i.replace(Z0,K0)}function K0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const $0={[Or]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function J0(i){return $0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q0={[ki]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE_UV"};function t_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Q0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const e_={[ps]:"ENVMAP_MODE_REFRACTION"};function n_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":e_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i_={[yh]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function s_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":i_[i.combine]||"ENVMAP_BLENDING_NONE"}function r_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function o_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=J0(e),c=t_(e),h=n_(e),u=s_(e),d=r_(e),f=H0(e),g=W0(r),x=s.createProgram();let p,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(p=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?te.tonemapping_pars_fragment:"",e.toneMapping!==Vn?V0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,z0("linearToOutputTexel",e.outputColorSpace),G0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),o=ja(o),o=jc(o,e),o=Zc(o,e),a=ja(a),a=jc(a,e),a=Zc(a,e),o=Kc(o),a=Kc(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=_+p+o,M=_+m+a,C=Xc(s,s.VERTEX_SHADER,y),w=Xc(s,s.FRAGMENT_SHADER,M);s.attachShader(x,C),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(T){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(C)||"",z=s.getShaderInfoLog(w)||"",N=L.trim(),F=B.trim(),O=z.trim();let H=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,w);else{const X=qc(s,C,"vertex"),K=qc(s,w,"fragment");re("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+X+`
`+K)}else N!==""?Ht("WebGLProgram: Program Info Log:",N):(F===""||O==="")&&(G=!1);G&&(T.diagnostics={runnable:H,programLog:N,vertexShader:{log:F,prefix:p},fragmentShader:{log:O,prefix:m}})}s.deleteShader(C),s.deleteShader(w),S=new Gr(s,x),b=X0(s,x)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(x,U0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}let a_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new c_(t),e.set(t,n)),n}}class c_{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}}function h_(i){return i===Vi||i===Xr||i===Yr}function u_(i,t,e,n,s,r){const o=new gl,a=new l_,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,b,I,T,L,B){const z=T.fog,N=L.geometry,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?T.environment:null,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,H=t.get(S.envMap||F,O),G=H&&H.mapping===ro?H.image.height:null,X=f[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&Ht("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,st=K!==void 0?K.length:0;let xt=0;N.morphAttributes.position!==void 0&&(xt=1),N.morphAttributes.normal!==void 0&&(xt=2),N.morphAttributes.color!==void 0&&(xt=3);let dt,Et,j,ct;if(X){const Zt=Fn[X];dt=Zt.vertexShader,Et=Zt.fragmentShader}else dt=S.vertexShader,Et=S.fragmentShader,a.update(S),j=a.getVertexShaderID(S),ct=a.getFragmentShaderID(S);const nt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Dt=L.isInstancedMesh===!0,At=L.isBatchedMesh===!0,ot=!!S.map,Mt=!!S.matcap,J=!!H,at=!!S.aoMap,Q=!!S.lightMap,vt=!!S.bumpMap,ft=!!S.normalMap,zt=!!S.displacementMap,U=!!S.emissiveMap,Wt=!!S.metalnessMap,Lt=!!S.roughnessMap,Xt=S.anisotropy>0,mt=S.clearcoat>0,le=S.dispersion>0,R=S.iridescence>0,E=S.sheen>0,W=S.transmission>0,tt=Xt&&!!S.anisotropyMap,lt=mt&&!!S.clearcoatMap,gt=mt&&!!S.clearcoatNormalMap,St=mt&&!!S.clearcoatRoughnessMap,$=R&&!!S.iridescenceMap,rt=R&&!!S.iridescenceThicknessMap,Ct=E&&!!S.sheenColorMap,Ut=E&&!!S.sheenRoughnessMap,yt=!!S.specularMap,_t=!!S.specularColorMap,Yt=!!S.specularIntensityMap,qt=W&&!!S.transmissionMap,ie=W&&!!S.thicknessMap,k=!!S.gradientMap,bt=!!S.alphaMap,et=S.alphaTest>0,Nt=!!S.alphaHash,Tt=!!S.extensions;let ht=Vn;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ht=i.toneMapping);const kt={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:dt,fragmentShader:Et,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:At,batchingColor:At&&L._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:Mt,envMap:J,envMapMode:J&&H.mapping,envMapCubeUVHeight:G,aoMap:at,lightMap:Q,bumpMap:vt,normalMap:ft,displacementMap:zt,emissiveMap:U,normalMapObjectSpace:ft&&S.normalMapType===Gu,normalMapTangentSpace:ft&&S.normalMapType===qr,packedNormalMap:ft&&S.normalMapType===qr&&h_(S.normalMap.format),metalnessMap:Wt,roughnessMap:Lt,anisotropy:Xt,anisotropyMap:tt,clearcoat:mt,clearcoatMap:lt,clearcoatNormalMap:gt,clearcoatRoughnessMap:St,dispersion:le,iridescence:R,iridescenceMap:$,iridescenceThicknessMap:rt,sheen:E,sheenColorMap:Ct,sheenRoughnessMap:Ut,specularMap:yt,specularColorMap:_t,specularIntensityMap:Yt,transmission:W,transmissionMap:qt,thicknessMap:ie,gradientMap:k,opaque:S.transparent===!1&&S.blending===us&&S.alphaToCoverage===!1,alphaMap:bt,alphaTest:et,alphaHash:Nt,combine:S.combine,mapUv:ot&&g(S.map.channel),aoMapUv:at&&g(S.aoMap.channel),lightMapUv:Q&&g(S.lightMap.channel),bumpMapUv:vt&&g(S.bumpMap.channel),normalMapUv:ft&&g(S.normalMap.channel),displacementMapUv:zt&&g(S.displacementMap.channel),emissiveMapUv:U&&g(S.emissiveMap.channel),metalnessMapUv:Wt&&g(S.metalnessMap.channel),roughnessMapUv:Lt&&g(S.roughnessMap.channel),anisotropyMapUv:tt&&g(S.anisotropyMap.channel),clearcoatMapUv:lt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:gt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&g(S.sheenRoughnessMap.channel),specularMapUv:yt&&g(S.specularMap.channel),specularColorMapUv:_t&&g(S.specularColorMap.channel),specularIntensityMapUv:Yt&&g(S.specularIntensityMap.channel),transmissionMapUv:qt&&g(S.transmissionMap.channel),thicknessMapUv:ie&&g(S.thicknessMap.channel),alphaMapUv:bt&&g(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ft||Xt),vertexNormals:!!N.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(ot||bt),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||N.attributes.normal===void 0&&ft===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&oe.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:U&&S.emissiveMap.isVideoTexture===!0&&oe.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xe,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Tt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&S.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)b.push(I),b.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(m(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function m(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function y(S){const b=f[S.type];let I;if(b){const T=Fn[b];I=Oi.clone(T.uniforms)}else I=S.uniforms;return I}function M(S,b){let I=h.get(b);return I!==void 0?++I.usedTimes:(I=new o_(i,b,S,s),c.push(I),h.set(b,I)),I}function C(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function w(S){a.remove(S)}function P(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:P}}function d_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function f_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,p,m){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},i[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=g,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=p,_.group=m),t++,_}function l(d,f,g,x,p,m){const _=a(d,f,g,x,p,m);g.transmission>0?n.push(_):g.transparent===!0?s.push(_):e.push(_)}function c(d,f,g,x,p,m){const _=a(d,f,g,x,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||f_),n.length>1&&n.sort(f||Jc),s.length>1&&s.sort(f||Jc)}function u(){for(let d=t,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function p_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qc,i.set(n,[o])):s>=r.length?(o=new Qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function m_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Jt};break;case"SpotLight":e={position:new D,direction:new D,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function g_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let __=0;function x_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v_(i){const t=new m_,e=g_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new ge,o=new ge;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,_=0,y=0,M=0,C=0,w=0,P=0;c.sort(x_);for(let b=0,I=c.length;b<I;b++){const T=c[b],L=T.color,B=T.intensity,z=T.distance;let N=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Vi?N=T.shadow.map.texture:N=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=L.r*B,u+=L.g*B,d+=L.b*B;else if(T.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(T.sh.coefficients[F],B);P++}else if(T.isDirectionalLight){const F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const O=T.shadow,H=e.get(T);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=T.shadow.matrix,_++}n.directional[f]=F,f++}else if(T.isSpotLight){const F=t.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(L).multiplyScalar(B),F.distance=z,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,n.spot[x]=F;const O=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,O.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[x]=O.matrix,T.castShadow){const H=e.get(T);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=N,M++}x++}else if(T.isRectAreaLight){const F=t.get(T);F.color.copy(L).multiplyScalar(B),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=F,p++}else if(T.isPointLight){const F=t.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){const O=T.shadow,H=e.get(T);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=F,g++}else if(T.isHemisphereLight){const F=t.get(T);F.skyColor.copy(T.color).multiplyScalar(B),F.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[m]=F,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const S=n.hash;(S.directionalLength!==f||S.pointLength!==g||S.spotLength!==x||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==_||S.numPointShadows!==y||S.numSpotShadows!==M||S.numSpotMaps!==C||S.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,S.directionalLength=f,S.pointLength=g,S.spotLength=x,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=_,S.numPointShadows=y,S.numSpotShadows=M,S.numSpotMaps=C,S.numLightProbes=P,n.version=__++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const p=h.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const y=c[m];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function th(i){const t=new v_(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function y_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new th(i),t.set(s,[a])):r>=o.length?(a=new th(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,E_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],b_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],eh=new ge,As=new D,Zo=new D;function w_(i,t,e){let n=new _l;const s=new ut,r=new ut,o=new Te,a=new Af,l=new Pf,c={},h=e.maxTextureSize,u={[bi]:cn,[cn]:bi,[Xe]:Xe},d=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:M_,fragmentShader:S_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new se;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new pt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Or;let m=this.type;this.render=function(w,P,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Eu&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Or);const b=i.getRenderTarget(),I=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending($e),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=m!==this.type;B&&P.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(N=>N.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,N=w.length;z<N;z++){const F=w[z],O=F.shadow;if(O===void 0){Ht("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const H=O.getFrameExtents();s.multiply(H),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,O.mapSize.y=r.y));const G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Is){if(F.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new pn(s.x,s.y,{format:Vi,type:vn,minFilter:Je,magFilter:Je,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new Gi(s.x,s.y,Pn),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=oi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke}else F.isPointLight?(O.map=new Qh(s.x),O.map.depthTexture=new Vd(s.x,Hn)):(O.map=new pn(s.x,s.y),O.map.depthTexture=new Gi(s.x,s.y,Hn)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=oi,this.type===Or?(O.map.depthTexture.compareFunction=G?fl:dl,O.map.depthTexture.minFilter=Je,O.map.depthTexture.magFilter=Je):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke);O.camera.updateProjectionMatrix()}const X=O.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<X;K++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,K),i.clear();else{K===0&&(i.setRenderTarget(O.map),i.clear());const st=O.getViewport(K);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),L.viewport(o)}if(F.isPointLight){const st=O.camera,xt=O.matrix,dt=F.distance||st.far;dt!==st.far&&(st.far=dt,st.updateProjectionMatrix()),As.setFromMatrixPosition(F.matrixWorld),st.position.copy(As),Zo.copy(st.position),Zo.add(E_[K]),st.up.copy(b_[K]),st.lookAt(Zo),st.updateMatrixWorld(),xt.makeTranslation(-As.x,-As.y,-As.z),eh.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),O._frustum.setFromProjectionMatrix(eh,st.coordinateSystem,st.reversedDepth)}else O.updateMatrices(F);n=O.getFrustum(),M(P,S,O.camera,F,this.type)}O.isPointLightShadow!==!0&&this.type===Is&&_(O,S),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,I,T)};function _(w,P){const S=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pn(s.x,s.y,{format:Vi,type:vn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,S,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,S,f,x,null)}function y(w,P,S,b){let I=null;const T=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)I=T;else if(I=S.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const L=I.uuid,B=P.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let N=z[B];N===void 0&&(N=I.clone(),z[B]=N,P.addEventListener("dispose",C)),I=N}if(I.visible=P.visible,I.wireframe=P.wireframe,b===Is?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:u[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const L=i.properties.get(I);L.light=S}return I}function M(w,P,S,b,I){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Is)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const B=t.update(w),z=w.material;if(Array.isArray(z)){const N=B.groups;for(let F=0,O=N.length;F<O;F++){const H=N[F],G=z[H.materialIndex];if(G&&G.visible){const X=y(w,G,b,I);w.onBeforeShadow(i,w,P,S,B,X,H),i.renderBufferDirect(S,null,B,X,w,H),w.onAfterShadow(i,w,P,S,B,X,H)}}}else if(z.visible){const N=y(w,z,b,I);w.onBeforeShadow(i,w,P,S,B,N,null),i.renderBufferDirect(S,null,B,N,w,null),w.onAfterShadow(i,w,P,S,B,N,null)}}const L=w.children;for(let B=0,z=L.length;B<z;B++)M(L[B],P,S,b,I)}function C(w){w.target.removeEventListener("dispose",C);for(const S in c){const b=c[S],I=w.target.uuid;I in b&&(b[I].dispose(),delete b[I])}}}function T_(i,t){function e(){let k=!1;const bt=new Te;let et=null;const Nt=new Te(0,0,0,0);return{setMask:function(Tt){et!==Tt&&!k&&(i.colorMask(Tt,Tt,Tt,Tt),et=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,ht,kt,Zt,Pe){Pe===!0&&(Tt*=Zt,ht*=Zt,kt*=Zt),bt.set(Tt,ht,kt,Zt),Nt.equals(bt)===!1&&(i.clearColor(Tt,ht,kt,Zt),Nt.copy(bt))},reset:function(){k=!1,et=null,Nt.set(-1,0,0,0)}}}function n(){let k=!1,bt=!1,et=null,Nt=null,Tt=null;return{setReversed:function(ht){if(bt!==ht){const kt=t.get("EXT_clip_control");ht?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),bt=ht;const Zt=Tt;Tt=null,this.setClear(Zt)}},getReversed:function(){return bt},setTest:function(ht){ht?nt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ht){et!==ht&&!k&&(i.depthMask(ht),et=ht)},setFunc:function(ht){if(bt&&(ht=Qu[ht]),Nt!==ht){switch(ht){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=ht}},setLocked:function(ht){k=ht},setClear:function(ht){Tt!==ht&&(Tt=ht,bt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){k=!1,et=null,Nt=null,Tt=null,bt=!1}}}function s(){let k=!1,bt=null,et=null,Nt=null,Tt=null,ht=null,kt=null,Zt=null,Pe=null;return{setTest:function(de){k||(de?nt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(de){bt!==de&&!k&&(i.stencilMask(de),bt=de)},setFunc:function(de,Xn,Rn){(et!==de||Nt!==Xn||Tt!==Rn)&&(i.stencilFunc(de,Xn,Rn),et=de,Nt=Xn,Tt=Rn)},setOp:function(de,Xn,Rn){(ht!==de||kt!==Xn||Zt!==Rn)&&(i.stencilOp(de,Xn,Rn),ht=de,kt=Xn,Zt=Rn)},setLocked:function(de){k=de},setClear:function(de){Pe!==de&&(i.clearStencil(de),Pe=de)},reset:function(){k=!1,bt=null,et=null,Nt=null,Tt=null,ht=null,kt=null,Zt=null,Pe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,y=null,M=null,C=null,w=null,P=null,S=new Jt(0,0,0),b=0,I=!1,T=null,L=null,B=null,z=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=H>=2);let X=null,K={};const st=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),dt=new Te().fromArray(st),Et=new Te().fromArray(xt);function j(k,bt,et,Nt){const Tt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(k,ht),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<et;kt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(bt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return ht}const ct={};ct[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(fs),vt(!1),ft(kl),nt(i.CULL_FACE),at($e);function nt(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function wt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Dt(k,bt){return d[k]!==bt?(i.bindFramebuffer(k,bt),d[k]=bt,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=bt),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function At(k,bt){let et=g,Nt=!1;if(k){et=f.get(bt),et===void 0&&(et=[],f.set(bt,et));const Tt=k.textures;if(et.length!==Tt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,kt=Tt.length;ht<kt;ht++)et[ht]=i.COLOR_ATTACHMENT0+ht;et.length=Tt.length,Nt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(et)}function ot(k){return x!==k?(i.useProgram(k),x=k,!0):!1}const Mt={[ti]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};Mt[Tu]=i.MIN,Mt[Au]=i.MAX;const J={[ta]:i.ZERO,[Pu]:i.ONE,[Cu]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[xh]:i.DST_ALPHA,[Ru]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function at(k,bt,et,Nt,Tt,ht,kt,Zt,Pe,de){if(k===$e){p===!0&&(wt(i.BLEND),p=!1);return}if(p===!1&&(nt(i.BLEND),p=!0),k!==_h){if(k!==m||de!==I){if((_!==ti||C!==ti)&&(i.blendEquation(i.FUNC_ADD),_=ti,C=ti),de)switch(k){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:re("WebGLState: Invalid blending: ",k);break}else switch(k){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",k);break}y=null,M=null,w=null,P=null,S.set(0,0,0),b=0,m=k,I=de}return}Tt=Tt||bt,ht=ht||et,kt=kt||Nt,(bt!==_||Tt!==C)&&(i.blendEquationSeparate(Mt[bt],Mt[Tt]),_=bt,C=Tt),(et!==y||Nt!==M||ht!==w||kt!==P)&&(i.blendFuncSeparate(J[et],J[Nt],J[ht],J[kt]),y=et,M=Nt,w=ht,P=kt),(Zt.equals(S)===!1||Pe!==b)&&(i.blendColor(Zt.r,Zt.g,Zt.b,Pe),S.copy(Zt),b=Pe),m=k,I=!1}function Q(k,bt){k.side===Xe?wt(i.CULL_FACE):nt(i.CULL_FACE);let et=k.side===cn;bt&&(et=!et),vt(et),k.blending===us&&k.transparent===!1?at($e):at(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Nt=k.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),U(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(k){T!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),T=k)}function ft(k){k!==Mu?(nt(i.CULL_FACE),k!==L&&(k===kl?i.cullFace(i.BACK):k===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),L=k}function zt(k){k!==B&&(O&&i.lineWidth(k),B=k)}function U(k,bt,et){k?(nt(i.POLYGON_OFFSET_FILL),(z!==bt||N!==et)&&(z=bt,N=et,o.getReversed()&&(bt=-bt),i.polygonOffset(bt,et))):wt(i.POLYGON_OFFSET_FILL)}function Wt(k){k?nt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function Lt(k){k===void 0&&(k=i.TEXTURE0+F-1),X!==k&&(i.activeTexture(k),X=k)}function Xt(k,bt,et){et===void 0&&(X===null?et=i.TEXTURE0+F-1:et=X);let Nt=K[et];Nt===void 0&&(Nt={type:void 0,texture:void 0},K[et]=Nt),(Nt.type!==k||Nt.texture!==bt)&&(X!==et&&(i.activeTexture(et),X=et),i.bindTexture(k,bt||ct[k]),Nt.type=k,Nt.texture=bt)}function mt(){const k=K[X];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function le(){try{i.compressedTexImage2D(...arguments)}catch(k){re("WebGLState:",k)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(k){re("WebGLState:",k)}}function E(){try{i.texSubImage2D(...arguments)}catch(k){re("WebGLState:",k)}}function W(){try{i.texSubImage3D(...arguments)}catch(k){re("WebGLState:",k)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(k){re("WebGLState:",k)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(k){re("WebGLState:",k)}}function gt(){try{i.texStorage2D(...arguments)}catch(k){re("WebGLState:",k)}}function St(){try{i.texStorage3D(...arguments)}catch(k){re("WebGLState:",k)}}function $(){try{i.texImage2D(...arguments)}catch(k){re("WebGLState:",k)}}function rt(){try{i.texImage3D(...arguments)}catch(k){re("WebGLState:",k)}}function Ct(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function Ut(k,bt){u[k]!==bt&&(i.pixelStorei(k,bt),u[k]=bt)}function yt(k){dt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),dt.copy(k))}function _t(k){Et.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Et.copy(k))}function Yt(k,bt){let et=c.get(bt);et===void 0&&(et=new WeakMap,c.set(bt,et));let Nt=et.get(k);Nt===void 0&&(Nt=i.getUniformBlockIndex(bt,k.name),et.set(k,Nt))}function qt(k,bt){const Nt=c.get(bt).get(k);l.get(bt)!==Nt&&(i.uniformBlockBinding(bt,Nt,k.__bindingPointIndex),l.set(bt,Nt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},X=null,K={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,_=null,y=null,M=null,C=null,w=null,P=null,S=new Jt(0,0,0),b=0,I=!1,T=null,L=null,B=null,z=null,N=null,dt.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:wt,bindFramebuffer:Dt,drawBuffers:At,useProgram:ot,setBlending:at,setMaterial:Q,setFlipSided:vt,setCullFace:ft,setLineWidth:zt,setPolygonOffset:U,setScissorTest:Wt,activeTexture:Lt,bindTexture:Xt,unbindTexture:mt,compressedTexImage2D:le,compressedTexImage3D:R,texImage2D:$,texImage3D:rt,pixelStorei:Ut,getParameter:Ct,updateUBOMapping:Yt,uniformBlockBinding:qt,texStorage2D:gt,texStorage3D:St,texSubImage2D:E,texSubImage3D:W,compressedTexSubImage2D:tt,compressedTexSubImage3D:lt,scissor:yt,viewport:_t,reset:ie}}function A_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,E){return g?new OffscreenCanvas(R,E):Kr("canvas")}function p(R,E,W){let tt=1;const lt=le(R);if((lt.width>W||lt.height>W)&&(tt=W/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const gt=Math.floor(tt*lt.width),St=Math.floor(tt*lt.height);d===void 0&&(d=x(gt,St));const $=E?x(gt,St):d;return $.width=gt,$.height=St,$.getContext("2d").drawImage(R,0,0,gt,St),Ht("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+gt+"x"+St+")."),$}else return"data"in R&&Ht("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),R;return R}function m(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,E,W,tt,lt,gt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let St;tt&&(St=t.get("EXT_texture_norm16"),St||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=E;if(E===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8),W===i.UNSIGNED_SHORT&&St&&($=St.R16_EXT),W===i.SHORT&&St&&($=St.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),E===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8),W===i.UNSIGNED_SHORT&&St&&($=St.RG16_EXT),W===i.SHORT&&St&&($=St.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&St&&($=St.RGB16_EXT),W===i.SHORT&&St&&($=St.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),E===i.RGBA){const rt=gt?Zr:oe.getTransfer(lt);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=rt===he?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&St&&($=St.RGBA16_EXT),W===i.SHORT&&St&&($=St.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function C(R,E){let W;return R?E===null||E===Hn||E===ms?W=i.DEPTH24_STENCIL8:E===Pn?W=i.DEPTH32F_STENCIL8:E===Hs&&(W=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hn||E===ms?W=i.DEPTH_COMPONENT24:E===Pn?W=i.DEPTH_COMPONENT32F:E===Hs&&(W=i.DEPTH_COMPONENT16),W}function w(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ke&&R.minFilter!==Je?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){const E=R.target;E.removeEventListener("dispose",P),b(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&u.delete(E)}function S(R){const E=R.target;E.removeEventListener("dispose",S),T(E)}function b(R){const E=n.get(R);if(E.__webglInit===void 0)return;const W=R.source,tt=f.get(W);if(tt){const lt=tt[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&I(R),Object.keys(tt).length===0&&f.delete(W)}n.remove(R)}function I(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const W=R.source,tt=f.get(W);delete tt[E.__cacheKey],o.memory.textures--}function T(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let lt=0;lt<E.__webglFramebuffer[tt].length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[tt][lt]);else i.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)i.deleteFramebuffer(E.__webglFramebuffer[tt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=R.textures;for(let tt=0,lt=W.length;tt<lt;tt++){const gt=n.get(W[tt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(W[tt])}n.remove(R)}let L=0;function B(){L=0}function z(){return L}function N(R){L=R}function F(){const R=L;return R>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function H(R,E){const W=n.get(R);if(R.isVideoTexture&&Xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const tt=R.image;if(tt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(W,R,E);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function G(R,E){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){wt(W,R,E);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function X(R,E){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){wt(W,R,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function K(R,E){const W=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&W.__version!==R.version){Dt(W,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const st={[Gs]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},xt={[ke]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},dt={[Hu]:i.NEVER,[ju]:i.ALWAYS,[Wu]:i.LESS,[dl]:i.LEQUAL,[Xu]:i.EQUAL,[fl]:i.GEQUAL,[Yu]:i.GREATER,[qu]:i.NOTEQUAL};function Et(R,E){if(E.type===Pn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Je||E.magFilter===go||E.magFilter===er||E.magFilter===Ui||E.minFilter===Je||E.minFilter===go||E.minFilter===er||E.minFilter===Ui)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,st[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,st[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,st[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,xt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,dt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ke||E.minFilter!==er&&E.minFilter!==Ui||E.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function j(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P));const tt=E.source;let lt=f.get(tt);lt===void 0&&(lt={},f.set(tt,lt));const gt=O(E);if(gt!==R.__cacheKey){lt[gt]===void 0&&(lt[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),lt[gt].usedTimes++;const St=lt[R.__cacheKey];St!==void 0&&(lt[R.__cacheKey].usedTimes--,St.usedTimes===0&&I(E)),R.__cacheKey=gt,R.__webglTexture=lt[gt].texture}return W}function ct(R,E,W){return Math.floor(Math.floor(R/W)/E)}function nt(R,E,W,tt){const gt=R.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,tt,E.data);else{gt.sort((Ut,yt)=>Ut.start-yt.start);let St=0;for(let Ut=1;Ut<gt.length;Ut++){const yt=gt[St],_t=gt[Ut],Yt=yt.start+yt.count,qt=ct(_t.start,E.width,4),ie=ct(yt.start,E.width,4);_t.start<=Yt+1&&qt===ie&&ct(_t.start+_t.count-1,E.width,4)===qt?yt.count=Math.max(yt.count,_t.start+_t.count-yt.start):(++St,gt[St]=_t)}gt.length=St+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Ut=0,yt=gt.length;Ut<yt;Ut++){const _t=gt[Ut],Yt=Math.floor(_t.start/4),qt=Math.ceil(_t.count/4),ie=Yt%E.width,k=Math.floor(Yt/E.width),bt=qt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,ie,k,bt,et,W,tt,E.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function wt(R,E,W){let tt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=i.TEXTURE_3D);const lt=j(R,E),gt=E.source;e.bindTexture(tt,R.__webglTexture,i.TEXTURE0+W);const St=n.get(gt);if(gt.version!==St.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const et=oe.getPrimaries(oe.workingColorSpace),Nt=E.colorSpace===vi?null:oe.getPrimaries(E.colorSpace),Tt=E.colorSpace===vi||et===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let rt=p(E.image,!1,s.maxTextureSize);rt=mt(E,rt);const Ct=r.convert(E.format,E.colorSpace),Ut=r.convert(E.type);let yt=M(E.internalFormat,Ct,Ut,E.normalized,E.colorSpace,E.isVideoTexture);Et(tt,E);let _t;const Yt=E.mipmaps,qt=E.isVideoTexture!==!0,ie=St.__version===void 0||lt===!0,k=gt.dataReady,bt=w(E,rt);if(E.isDepthTexture)yt=C(E.format===Mi,E.type),ie&&(qt?e.texStorage2D(i.TEXTURE_2D,1,yt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,yt,rt.width,rt.height,0,Ct,Ut,null));else if(E.isDataTexture)if(Yt.length>0){qt&&ie&&e.texStorage2D(i.TEXTURE_2D,bt,yt,Yt[0].width,Yt[0].height);for(let et=0,Nt=Yt.length;et<Nt;et++)_t=Yt[et],qt?k&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,Ct,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,et,yt,_t.width,_t.height,0,Ct,Ut,_t.data);E.generateMipmaps=!1}else qt?(ie&&e.texStorage2D(i.TEXTURE_2D,bt,yt,rt.width,rt.height),k&&nt(E,rt,Ct,Ut)):e.texImage2D(i.TEXTURE_2D,0,yt,rt.width,rt.height,0,Ct,Ut,rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,yt,Yt[0].width,Yt[0].height,rt.depth);for(let et=0,Nt=Yt.length;et<Nt;et++)if(_t=Yt[et],E.format!==Cn)if(Ct!==null)if(qt){if(k)if(E.layerUpdates.size>0){const Tt=Dc(_t.width,_t.height,E.format,E.type);for(const ht of E.layerUpdates){const kt=_t.data.subarray(ht*Tt/_t.data.BYTES_PER_ELEMENT,(ht+1)*Tt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,ht,_t.width,_t.height,1,Ct,kt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,rt.depth,Ct,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,yt,_t.width,_t.height,rt.depth,0,_t.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,_t.width,_t.height,rt.depth,Ct,Ut,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,yt,_t.width,_t.height,rt.depth,0,Ct,Ut,_t.data)}else{qt&&ie&&e.texStorage2D(i.TEXTURE_2D,bt,yt,Yt[0].width,Yt[0].height);for(let et=0,Nt=Yt.length;et<Nt;et++)_t=Yt[et],E.format!==Cn?Ct!==null?qt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,Ct,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,et,yt,_t.width,_t.height,0,_t.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?k&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t.width,_t.height,Ct,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,et,yt,_t.width,_t.height,0,Ct,Ut,_t.data)}else if(E.isDataArrayTexture)if(qt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,yt,rt.width,rt.height,rt.depth),k)if(E.layerUpdates.size>0){const et=Dc(rt.width,rt.height,E.format,E.type);for(const Nt of E.layerUpdates){const Tt=rt.data.subarray(Nt*et/rt.data.BYTES_PER_ELEMENT,(Nt+1)*et/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,rt.width,rt.height,1,Ct,Ut,Tt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Ct,Ut,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,rt.width,rt.height,rt.depth,0,Ct,Ut,rt.data);else if(E.isData3DTexture)qt?(ie&&e.texStorage3D(i.TEXTURE_3D,bt,yt,rt.width,rt.height,rt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Ct,Ut,rt.data)):e.texImage3D(i.TEXTURE_3D,0,yt,rt.width,rt.height,rt.depth,0,Ct,Ut,rt.data);else if(E.isFramebufferTexture){if(ie)if(qt)e.texStorage2D(i.TEXTURE_2D,bt,yt,rt.width,rt.height);else{let et=rt.width,Nt=rt.height;for(let Tt=0;Tt<bt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,yt,et,Nt,0,Ct,Ut,null),et>>=1,Nt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),rt.parentNode!==et){et.appendChild(rt),u.add(E),et.onpaint=Zt=>{const Pe=Zt.changedElements;for(const de of u)Pe.includes(de.image)&&(de.needsUpdate=!0)},et.requestPaint();return}const Nt=0,Tt=i.RGBA,ht=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Nt,Tt,ht,kt,rt),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(qt&&ie){const et=le(Yt[0]);e.texStorage2D(i.TEXTURE_2D,bt,yt,et.width,et.height)}for(let et=0,Nt=Yt.length;et<Nt;et++)_t=Yt[et],qt?k&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ct,Ut,_t):e.texImage2D(i.TEXTURE_2D,et,yt,Ct,Ut,_t);E.generateMipmaps=!1}else if(qt){if(ie){const et=le(rt);e.texStorage2D(i.TEXTURE_2D,bt,yt,et.width,et.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Ut,rt)}else e.texImage2D(i.TEXTURE_2D,0,yt,Ct,Ut,rt);m(E)&&_(tt),St.__version=gt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Dt(R,E,W){if(E.image.length!==6)return;const tt=j(R,E),lt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const gt=n.get(lt);if(lt.version!==gt.__version||tt===!0){e.activeTexture(i.TEXTURE0+W);const St=oe.getPrimaries(oe.workingColorSpace),$=E.colorSpace===vi?null:oe.getPrimaries(E.colorSpace),rt=E.colorSpace===vi||St===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const Ct=E.isCompressedTexture||E.image[0].isCompressedTexture,Ut=E.image[0]&&E.image[0].isDataTexture,yt=[];for(let ht=0;ht<6;ht++)!Ct&&!Ut?yt[ht]=p(E.image[ht],!0,s.maxCubemapSize):yt[ht]=Ut?E.image[ht].image:E.image[ht],yt[ht]=mt(E,yt[ht]);const _t=yt[0],Yt=r.convert(E.format,E.colorSpace),qt=r.convert(E.type),ie=M(E.internalFormat,Yt,qt,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,bt=gt.__version===void 0||tt===!0,et=lt.dataReady;let Nt=w(E,_t);Et(i.TEXTURE_CUBE_MAP,E);let Tt;if(Ct){k&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ie,_t.width,_t.height);for(let ht=0;ht<6;ht++){Tt=yt[ht].mipmaps;for(let kt=0;kt<Tt.length;kt++){const Zt=Tt[kt];E.format!==Cn?Yt!==null?k?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,0,0,Zt.width,Zt.height,Yt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,ie,Zt.width,Zt.height,0,Zt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,0,0,Zt.width,Zt.height,Yt,qt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt,ie,Zt.width,Zt.height,0,Yt,qt,Zt.data)}}}else{if(Tt=E.mipmaps,k&&bt){Tt.length>0&&Nt++;const ht=le(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ie,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Ut){k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,yt[ht].width,yt[ht].height,Yt,qt,yt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ie,yt[ht].width,yt[ht].height,0,Yt,qt,yt[ht].data);for(let kt=0;kt<Tt.length;kt++){const Pe=Tt[kt].image[ht].image;k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,0,0,Pe.width,Pe.height,Yt,qt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,ie,Pe.width,Pe.height,0,Yt,qt,Pe.data)}}else{k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Yt,qt,yt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ie,Yt,qt,yt[ht]);for(let kt=0;kt<Tt.length;kt++){const Zt=Tt[kt];k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,0,0,Yt,qt,Zt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,kt+1,ie,Yt,qt,Zt.image[ht])}}}m(E)&&_(i.TEXTURE_CUBE_MAP),gt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function At(R,E,W,tt,lt,gt){const St=r.convert(W.format,W.colorSpace),$=r.convert(W.type),rt=M(W.internalFormat,St,$,W.normalized,W.colorSpace),Ct=n.get(E),Ut=n.get(W);if(Ut.__renderTarget=E,!Ct.__hasExternalTextures){const yt=Math.max(1,E.width>>gt),_t=Math.max(1,E.height>>gt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,gt,rt,yt,_t,E.depth,0,St,$,null):e.texImage2D(lt,gt,rt,yt,_t,0,St,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Lt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,lt,Ut.__webglTexture,0,Wt(E)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,lt,Ut.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(R,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const tt=E.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,gt=C(E.stencilBuffer,lt),St=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Lt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(E),gt,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(E),gt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,gt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{const tt=E.textures;for(let lt=0;lt<tt.length;lt++){const gt=tt[lt],St=r.convert(gt.format,gt.colorSpace),$=r.convert(gt.type),rt=M(gt.internalFormat,St,$,gt.normalized,gt.colorSpace);Lt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(E),rt,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(E),rt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,rt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(R,E,W){const tt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(E.depthTexture);if(lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),tt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Et(i.TEXTURE_CUBE_MAP,E.depthTexture);const Ct=r.convert(E.depthTexture.format),Ut=r.convert(E.depthTexture.type);let yt;E.depthTexture.format===oi?yt=i.DEPTH_COMPONENT24:E.depthTexture.format===Mi&&(yt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,yt,E.width,E.height,0,Ct,Ut,null)}}else H(E.depthTexture,0);const gt=lt.__webglTexture,St=Wt(E),$=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,rt=E.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===oi)Lt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,$,gt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,rt,$,gt,0);else if(E.depthTexture.format===Mi)Lt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,$,gt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,rt,$,gt,0);else throw new Error("Unknown depthTexture format")}function J(R){const E=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const tt=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),tt){const lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=tt}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let tt=0;tt<6;tt++)Mt(E.__webglFramebuffer[tt],R,tt);else{const tt=R.texture.mipmaps;tt&&tt.length>0?Mt(E.__webglFramebuffer[0],R,0):Mt(E.__webglFramebuffer,R,0)}else if(W){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]===void 0)E.__webglDepthbuffer[tt]=i.createRenderbuffer(),ot(E.__webglDepthbuffer[tt],R,!1);else{const lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,gt)}}else{const tt=R.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ot(E.__webglDepthbuffer,R,!1);else{const lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(R,E,W){const tt=n.get(R);E!==void 0&&At(tt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&J(R)}function Q(R){const E=R.texture,W=n.get(R),tt=n.get(E);R.addEventListener("dispose",S);const lt=R.textures,gt=R.isWebGLCubeRenderTarget===!0,St=lt.length>1;if(St||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=E.version,o.memory.textures++),gt){W.__webglFramebuffer=[];for(let $=0;$<6;$++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[$]=[];for(let rt=0;rt<E.mipmaps.length;rt++)W.__webglFramebuffer[$][rt]=i.createFramebuffer()}else W.__webglFramebuffer[$]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let $=0;$<E.mipmaps.length;$++)W.__webglFramebuffer[$]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(St)for(let $=0,rt=lt.length;$<rt;$++){const Ct=n.get(lt[$]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Lt(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let $=0;$<lt.length;$++){const rt=lt[$];W.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[$]);const Ct=r.convert(rt.format,rt.colorSpace),Ut=r.convert(rt.type),yt=M(rt.internalFormat,Ct,Ut,rt.normalized,rt.colorSpace,R.isXRRenderTarget===!0),_t=Wt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,W.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Et(i.TEXTURE_CUBE_MAP,E);for(let $=0;$<6;$++)if(E.mipmaps&&E.mipmaps.length>0)for(let rt=0;rt<E.mipmaps.length;rt++)At(W.__webglFramebuffer[$][rt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,rt);else At(W.__webglFramebuffer[$],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(E)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let $=0,rt=lt.length;$<rt;$++){const Ct=lt[$],Ut=n.get(Ct);let yt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(yt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ut.__webglTexture),Et(yt,Ct),At(W.__webglFramebuffer,R,Ct,i.COLOR_ATTACHMENT0+$,yt,0),m(Ct)&&_(yt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,tt.__webglTexture),Et($,E),E.mipmaps&&E.mipmaps.length>0)for(let rt=0;rt<E.mipmaps.length;rt++)At(W.__webglFramebuffer[rt],R,E,i.COLOR_ATTACHMENT0,$,rt);else At(W.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,$,0);m(E)&&_($),e.unbindTexture()}R.depthBuffer&&J(R)}function vt(R){const E=R.textures;for(let W=0,tt=E.length;W<tt;W++){const lt=E[W];if(m(lt)){const gt=y(R),St=n.get(lt).__webglTexture;e.bindTexture(gt,St),_(gt),e.unbindTexture()}}}const ft=[],zt=[];function U(R){if(R.samples>0){if(Lt(R)===!1){const E=R.textures,W=R.width,tt=R.height;let lt=i.COLOR_BUFFER_BIT;const gt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),$=E.length>1;if($)for(let Ct=0;Ct<E.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const rt=R.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Ct=0;Ct<E.length;Ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Ct]);const Ut=n.get(E[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,W,tt,0,0,W,tt,lt,i.NEAREST),l===!0&&(ft.length=0,zt.length=0,ft.push(i.COLOR_ATTACHMENT0+Ct),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ft.push(gt),zt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let Ct=0;Ct<E.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,St.__webglColorRenderbuffer[Ct]);const Ut=n.get(E[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Wt(R){return Math.min(s.maxSamples,R.samples)}function Lt(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Xt(R){const E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function mt(R,E){const W=R.colorSpace,tt=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==jr&&W!==vi&&(oe.getTransfer(W)===he?(tt!==Cn||lt!==fn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",W)),E}function le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.getTextureUnits=z,this.setTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=at,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function P_(i,t){function e(n,s=vi){let r;const o=oe.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sh)return i.BYTE;if(n===Eh)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===rl)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Th)return i.ALPHA;if(n===Ah)return i.RGB;if(n===Cn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===cl)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===Br||n===zr||n===kr||n===Vr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a||n===xa||n===va||n===Xr||n===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xa)return r.COMPRESSED_R11_EAC;if(n===va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Xr)return r.COMPRESSED_RG11_EAC;if(n===ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ma||n===Sa||n===Ea||n===ba||n===wa||n===Ta||n===Aa||n===Pa||n===Ca||n===Ra||n===Ia||n===Da||n===La||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ba||n===za||n===Yr||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Fh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qe({vertexShader:C_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D_ extends wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",p=new I_,m={},_=e.getContextAttributes();let y=null,M=null;const C=[],w=[],P=new ut;let S=null;const b=new xn;b.viewport=new Te;const I=new xn;I.viewport=new Te;const T=[b,I],L=new zf;let B=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ct=C[j];return ct===void 0&&(ct=new So,C[j]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(j){let ct=C[j];return ct===void 0&&(ct=new So,C[j]=ct),ct.getGripSpace()},this.getHand=function(j){let ct=C[j];return ct===void 0&&(ct=new So,C[j]=ct),ct.getHandSpace()};function N(j){const ct=w.indexOf(j.inputSource);if(ct===-1)return;const nt=C[ct];nt!==void 0&&(nt.update(j.inputSource,j.frame,c||o),nt.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",O);for(let j=0;j<C.length;j++){const ct=w[j];ct!==null&&(w[j]=null,C[j].disconnect(ct))}B=null,z=null,p.reset();for(const j in m)delete m[j];t.setRenderTarget(y),f=null,d=null,u=null,s=null,M=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,wt=null,Dt=null;_.depth&&(Dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=_.stencil?Mi:oi,wt=_.stencil?ms:Hn);const At={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new pn(d.textureWidth,d.textureHeight,{format:Cn,type:fn,depthTexture:new Gi(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const nt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new pn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(j){for(let ct=0;ct<j.removed.length;ct++){const nt=j.removed[ct],wt=w.indexOf(nt);wt>=0&&(w[wt]=null,C[wt].disconnect(nt))}for(let ct=0;ct<j.added.length;ct++){const nt=j.added[ct];let wt=w.indexOf(nt);if(wt===-1){for(let At=0;At<C.length;At++)if(At>=w.length){w.push(nt),wt=At;break}else if(w[At]===null){w[At]=nt,wt=At;break}if(wt===-1)break}const Dt=C[wt];Dt&&Dt.connect(nt)}}const H=new D,G=new D;function X(j,ct,nt){H.setFromMatrixPosition(ct.matrixWorld),G.setFromMatrixPosition(nt.matrixWorld);const wt=H.distanceTo(G),Dt=ct.projectionMatrix.elements,At=nt.projectionMatrix.elements,ot=Dt[14]/(Dt[10]-1),Mt=Dt[14]/(Dt[10]+1),J=(Dt[9]+1)/Dt[5],at=(Dt[9]-1)/Dt[5],Q=(Dt[8]-1)/Dt[0],vt=(At[8]+1)/At[0],ft=ot*Q,zt=ot*vt,U=wt/(-Q+vt),Wt=U*-Q;if(ct.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Wt),j.translateZ(U),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Dt[10]===-1)j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Lt=ot+U,Xt=Mt+U,mt=ft-Wt,le=zt+(wt-Wt),R=J*Mt/Xt*Lt,E=at*Mt/Xt*Lt;j.projectionMatrix.makePerspective(mt,le,R,E,Lt,Xt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,ct){ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ct=j.near,nt=j.far;p.texture!==null&&(p.depthNear>0&&(ct=p.depthNear),p.depthFar>0&&(nt=p.depthFar)),L.near=I.near=b.near=ct,L.far=I.far=b.far=nt,(B!==L.near||z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,z=L.far),L.layers.mask=j.layers.mask|6,b.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;const wt=j.parent,Dt=L.cameras;K(L,wt);for(let At=0;At<Dt.length;At++)K(Dt[At],wt);Dt.length===2?X(L,b,I):L.projectionMatrix.copy(b.projectionMatrix),st(j,L,wt)};function st(j,ct,nt){nt===null?j.matrix.copy(ct.matrixWorld):(j.matrix.copy(nt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(j){return m[j]};let xt=null;function dt(j,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){const nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let wt=!1;nt.length!==L.cameras.length&&(L.cameras.length=0,wt=!0);for(let Mt=0;Mt<nt.length;Mt++){const J=nt[Mt];let at=null;if(f!==null)at=f.getViewport(J);else{const vt=u.getViewSubImage(d,J);at=vt.viewport,Mt===0&&(t.setRenderTargetTextures(M,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(M))}let Q=T[Mt];Q===void 0&&(Q=new xn,Q.layers.enable(Mt),Q.viewport=new Te,T[Mt]=Q),Q.matrix.fromArray(J.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(J.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(at.x,at.y,at.width,at.height),Mt===0&&(L.matrix.copy(Q.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),wt===!0&&L.cameras.push(Q)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Mt=u.getDepthInformation(nt[0]);Mt&&Mt.isValid&&Mt.texture&&p.init(Mt,s.renderState)}if(Dt&&Dt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Mt=0;Mt<nt.length;Mt++){const J=nt[Mt].camera;if(J){let at=m[J];at||(at=new Fh,m[J]=at);const Q=u.getCameraImage(J);at.sourceTexture=Q}}}}for(let nt=0;nt<C.length;nt++){const wt=w[nt],Dt=C[nt];wt!==null&&Dt!==void 0&&Dt.update(wt,ct,c||o)}xt&&xt(j,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Et=new $h;Et.setAnimationLoop(dt),this.setAnimationLoop=function(j){xt=j},this.dispose=function(){}}}const L_=new ge,su=new jt;su.set(-1,0,0,0,1,0,0,0,1);function N_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Xh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,y,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=t.get(m),y=_.envMap,M=_.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(su),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const M=y.program;n.uniformBlockBinding(_,M)}function c(_,y){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",p));const C=y.program;n.updateUBOMapping(_,C);const w=t.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){const y=u();_.__bindingPointIndex=y;const M=i.createBuffer(),C=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=s[_.id],M=_.uniforms,C=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,P=M.length;w<P;w++){const S=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,I=S.length;b<I;b++){const T=S[b];if(f(T,w,b,C)===!0){const L=T.__offset,B=Array.isArray(T.value)?T.value:[T.value];let z=0;for(let N=0;N<B.length;N++){const F=B[N],O=x(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,L+z,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):ArrayBuffer.isView(F)?T.__data.set(new F.constructor(F.buffer,F.byteOffset,T.__data.length)):(F.toArray(T.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,M,C){const w=_.value,P=y+"_"+M;if(C[P]===void 0)return typeof w=="number"||typeof w=="boolean"?C[P]=w:ArrayBuffer.isView(w)?C[P]=w.slice():C[P]=w.clone(),!0;{const S=C[P];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return C[P]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(S.equals(w)===!1)return S.copy(w),!0}}return!1}function g(_){const y=_.uniforms;let M=0;const C=16;for(let P=0,S=y.length;P<S;P++){const b=Array.isArray(y[P])?y[P]:[y[P]];for(let I=0,T=b.length;I<T;I++){const L=b[I],B=Array.isArray(L.value)?L.value:[L.value];for(let z=0,N=B.length;z<N;z++){const F=B[z],O=x(F),H=M%C,G=H%O.boundary,X=H+G;M+=G,X!==0&&C-X<O.storage&&(M+=C-X),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=O.storage}}}const w=M%C;return w>0&&(M+=C-w),_.__size=M,_.__cache={},this}function x(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){const y=_.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}const F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ln=null;function O_(){return Ln===null&&(Ln=new Nh(F_,16,16,Vi,vn),Ln.name="DFG_LUT",Ln.minFilter=Je,Ln.magFilter=Je,Ln.wrapS=ei,Ln.wrapT=ei,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}class B_{constructor(t={}){const{canvas:e=$u(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=fn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=f,p=new Set([ul,hl,cl]),m=new Set([fn,Hn,Hs,ms,ol,al]),_=new Uint32Array(4),y=new Int32Array(4),M=new D;let C=null,w=null;const P=[],S=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let T=!1,L=null;this._outputColorSpace=_n;let B=0,z=0,N=null,F=-1,O=null;const H=new Te,G=new Te;let X=null;const K=new Jt(0);let st=0,xt=e.width,dt=e.height,Et=1,j=null,ct=null;const nt=new Te(0,0,xt,dt),wt=new Te(0,0,xt,dt);let Dt=!1;const At=new _l;let ot=!1,Mt=!1;const J=new ge,at=new D,Q=new Te,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function zt(){return N===null?Et:1}let U=n;function Wt(A,V){return e.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",Zt,!1),U===null){const V="webgl2";if(U=Wt(V,A),U===null)throw Wt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw re("WebGLRenderer: "+A.message),A}let Lt,Xt,mt,le,R,E,W,tt,lt,gt,St,$,rt,Ct,Ut,yt,_t,Yt,qt,ie,k,bt,et;function Nt(){Lt=new Og(U),Lt.init(),k=new P_(U,Lt),Xt=new Cg(U,Lt,t,k),mt=new T_(U,Lt),Xt.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),le=new kg(U),R=new d_,E=new A_(U,Lt,mt,R,Xt,k,le),W=new Fg(I),tt=new Wf(U),bt=new Ag(U,tt),lt=new Bg(U,tt,le,bt),gt=new Gg(U,lt,tt,bt,le),Yt=new Vg(U,Xt,E),Ut=new Rg(R),St=new u_(I,W,Lt,Xt,bt,Ut),$=new N_(I,R),rt=new p_,Ct=new y_(Lt),_t=new Tg(I,W,mt,gt,g,l),yt=new w_(I,gt,Xt),et=new U_(U,le,Xt,mt),qt=new Pg(U,Lt,le),ie=new zg(U,Lt,le),le.programs=St.programs,I.capabilities=Xt,I.extensions=Lt,I.properties=R,I.renderLists=rt,I.shadowMap=yt,I.state=mt,I.info=le}Nt(),x!==fn&&(b=new Wg(x,e.width,e.height,s,r));const Tt=new D_(I,U);this.xr=Tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(A){A!==void 0&&(Et=A,this.setSize(xt,dt,!1))},this.getSize=function(A){return A.set(xt,dt)},this.setSize=function(A,V,Z=!0){if(Tt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=A,dt=V,e.width=Math.floor(A*Et),e.height=Math.floor(V*Et),Z===!0&&(e.style.width=A+"px",e.style.height=V+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(xt*Et,dt*Et).floor()},this.setDrawingBufferSize=function(A,V,Z){xt=A,dt=V,Et=Z,e.width=Math.floor(A*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(x===fn){re("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Ht("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(nt)},this.setViewport=function(A,V,Z,Y){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,V,Z,Y),mt.viewport(H.copy(nt).multiplyScalar(Et).round())},this.getScissor=function(A){return A.copy(wt)},this.setScissor=function(A,V,Z,Y){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,V,Z,Y),mt.scissor(G.copy(wt).multiplyScalar(Et).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(A){mt.setScissorTest(Dt=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){ct=A},this.getClearColor=function(A){return A.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,Z=!0){let Y=0;if(A){let q=!1;if(N!==null){const It=N.texture.format;q=p.has(It)}if(q){const It=N.texture.type,Ot=m.has(It),Rt=_t.getClearColor(),Bt=_t.getClearAlpha(),Vt=Rt.r,Kt=Rt.g,ne=Rt.b;Ot?(_[0]=Vt,_[1]=Kt,_[2]=ne,_[3]=Bt,U.clearBufferuiv(U.COLOR,0,_)):(y[0]=Vt,y[1]=Kt,y[2]=ne,y[3]=Bt,U.clearBufferiv(U.COLOR,0,y))}else Y|=U.COLOR_BUFFER_BIT}V&&(Y|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),_t.dispose(),rt.dispose(),Ct.dispose(),R.dispose(),W.dispose(),gt.dispose(),bt.dispose(),et.dispose(),St.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Dl),Tt.removeEventListener("sessionend",Ll),Ti.stop()};function ht(A){A.preventDefault(),$r("WebGLRenderer: Context Lost."),T=!0}function kt(){$r("WebGLRenderer: Context Restored."),T=!1;const A=le.autoReset,V=yt.enabled,Z=yt.autoUpdate,Y=yt.needsUpdate,q=yt.type;Nt(),le.autoReset=A,yt.enabled=V,yt.autoUpdate=Z,yt.needsUpdate=Y,yt.type=q}function Zt(A){re("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pe(A){const V=A.target;V.removeEventListener("dispose",Pe),de(V)}function de(A){Xn(A),R.remove(A)}function Xn(A){const V=R.get(A).programs;V!==void 0&&(V.forEach(function(Z){St.releaseProgram(Z)}),A.isShaderMaterial&&St.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Z,Y,q,It){V===null&&(V=vt);const Ot=q.isMesh&&q.matrixWorld.determinant()<0,Rt=mu(A,V,Z,Y,q);mt.setMaterial(Y,Ot);let Bt=Z.index,Vt=1;if(Y.wireframe===!0){if(Bt=lt.getWireframeAttribute(Z),Bt===void 0)return;Vt=2}const Kt=Z.drawRange,ne=Z.attributes.position;let Gt=Kt.start*Vt,fe=(Kt.start+Kt.count)*Vt;It!==null&&(Gt=Math.max(Gt,It.start*Vt),fe=Math.min(fe,(It.start+It.count)*Vt)),Bt!==null?(Gt=Math.max(Gt,0),fe=Math.min(fe,Bt.count)):ne!=null&&(Gt=Math.max(Gt,0),fe=Math.min(fe,ne.count));const Ce=fe-Gt;if(Ce<0||Ce===1/0)return;bt.setup(q,Y,Rt,Z,Bt);let be,_e=qt;if(Bt!==null&&(be=tt.get(Bt),_e=ie,_e.setIndex(be)),q.isMesh)Y.wireframe===!0?(mt.setLineWidth(Y.wireframeLinewidth*zt()),_e.setMode(U.LINES)):_e.setMode(U.TRIANGLES);else if(q.isLine){let qe=Y.linewidth;qe===void 0&&(qe=1),mt.setLineWidth(qe*zt()),q.isLineSegments?_e.setMode(U.LINES):q.isLineLoop?_e.setMode(U.LINE_LOOP):_e.setMode(U.LINE_STRIP)}else q.isPoints?_e.setMode(U.POINTS):q.isSprite&&_e.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))_e.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const qe=q._multiDrawStarts,Ft=q._multiDrawCounts,hn=q._multiDrawCount,ce=Bt?tt.get(Bt).bytesPerElement:1,mn=R.get(Y).currentProgram.getUniforms();for(let In=0;In<hn;In++)mn.setValue(U,"_gl_DrawID",In),_e.render(qe[In]/ce,Ft[In])}else if(q.isInstancedMesh)_e.renderInstances(Gt,Ce,q.count);else if(Z.isInstancedBufferGeometry){const qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ft=Math.min(Z.instanceCount,qe);_e.renderInstances(Gt,Ce,Ft)}else _e.render(Gt,Ce)};function Rn(A,V,Z){A.transparent===!0&&A.side===Xe&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,tr(A,V,Z),A.side=bi,A.needsUpdate=!0,tr(A,V,Z),A.side=Xe):tr(A,V,Z)}this.compile=function(A,V,Z=null){Z===null&&(Z=A),w=Ct.get(Z),w.init(V),S.push(w),Z.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();const Y=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const It=q.material;if(It)if(Array.isArray(It))for(let Ot=0;Ot<It.length;Ot++){const Rt=It[Ot];Rn(Rt,Z,q),Y.add(Rt)}else Rn(It,Z,q),Y.add(It)}),w=S.pop(),Y},this.compileAsync=function(A,V,Z=null){const Y=this.compile(A,V,Z);return new Promise(q=>{function It(){if(Y.forEach(function(Ot){R.get(Ot).currentProgram.isReady()&&Y.delete(Ot)}),Y.size===0){q(A);return}setTimeout(It,10)}Lt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let uo=null;function fu(A){uo&&uo(A)}function Dl(){Ti.stop()}function Ll(){Ti.start()}const Ti=new $h;Ti.setAnimationLoop(fu),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){uo=A,Tt.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},Tt.addEventListener("sessionstart",Dl),Tt.addEventListener("sessionend",Ll),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;L!==null&&L.renderStart(A,V);const Z=Tt.enabled===!0&&Tt.isPresenting===!0,Y=b!==null&&(N===null||Z)&&b.begin(I,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(V),V=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,V,N),w=Ct.get(A,S.length),w.init(V),w.state.textureUnits=E.getTextureUnits(),S.push(w),J.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),At.setFromProjectionMatrix(J,Bn,V.reversedDepth),Mt=this.localClippingEnabled,ot=Ut.init(this.clippingPlanes,Mt),C=rt.get(A,P.length),C.init(),P.push(C),Tt.enabled===!0&&Tt.isPresenting===!0){const Ot=I.xr.getDepthSensingMesh();Ot!==null&&fo(Ot,V,-1/0,I.sortObjects)}fo(A,V,0,I.sortObjects),C.finish(),I.sortObjects===!0&&C.sort(j,ct),ft=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,ft&&_t.addToRenderList(C,A),this.info.render.frame++,ot===!0&&Ut.beginShadows();const q=w.state.shadowsArray;if(yt.render(q,A,V),ot===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&b.hasRenderPass())===!1){const Ot=C.opaque,Rt=C.transmissive;if(w.setupLights(),V.isArrayCamera){const Bt=V.cameras;if(Rt.length>0)for(let Vt=0,Kt=Bt.length;Vt<Kt;Vt++){const ne=Bt[Vt];Ul(Ot,Rt,A,ne)}ft&&_t.render(A);for(let Vt=0,Kt=Bt.length;Vt<Kt;Vt++){const ne=Bt[Vt];Nl(C,A,ne,ne.viewport)}}else Rt.length>0&&Ul(Ot,Rt,A,V),ft&&_t.render(A),Nl(C,A,V)}N!==null&&z===0&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),Y&&b.end(I),A.isScene===!0&&A.onAfterRender(I,A,V),bt.resetDefaultState(),F=-1,O=null,S.pop(),S.length>0?(w=S[S.length-1],E.setTextureUnits(w.state.textureUnits),ot===!0&&Ut.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?C=P[P.length-1]:C=null,L!==null&&L.renderEnd()};function fo(A,V,Z,Y){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){Y&&Q.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const Ot=gt.update(A),Rt=A.material;Rt.visible&&C.push(A,Ot,Rt,Z,Q.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const Ot=gt.update(A),Rt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Q.copy(A.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Q.copy(Ot.boundingSphere.center)),Q.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(Rt)){const Bt=Ot.groups;for(let Vt=0,Kt=Bt.length;Vt<Kt;Vt++){const ne=Bt[Vt],Gt=Rt[ne.materialIndex];Gt&&Gt.visible&&C.push(A,Ot,Gt,Z,Q.z,ne)}}else Rt.visible&&C.push(A,Ot,Rt,Z,Q.z,null)}}const It=A.children;for(let Ot=0,Rt=It.length;Ot<Rt;Ot++)fo(It[Ot],V,Z,Y)}function Nl(A,V,Z,Y){const{opaque:q,transmissive:It,transparent:Ot}=A;w.setupLightsView(Z),ot===!0&&Ut.setGlobalState(I.clippingPlanes,Z),Y&&mt.viewport(H.copy(Y)),q.length>0&&Qs(q,V,Z),It.length>0&&Qs(It,V,Z),Ot.length>0&&Qs(Ot,V,Z),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Ul(A,V,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){const Gt=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new pn(1,1,{generateMipmaps:!0,type:Gt?vn:fn,minFilter:Ui,samples:Math.max(4,Xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const It=w.state.transmissionRenderTarget[Y.id],Ot=Y.viewport||H;It.setSize(Ot.z*I.transmissionResolutionScale,Ot.w*I.transmissionResolutionScale);const Rt=I.getRenderTarget(),Bt=I.getActiveCubeFace(),Vt=I.getActiveMipmapLevel();I.setRenderTarget(It),I.getClearColor(K),st=I.getClearAlpha(),st<1&&I.setClearColor(16777215,.5),I.clear(),ft&&_t.render(Z);const Kt=I.toneMapping;I.toneMapping=Vn;const ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),ot===!0&&Ut.setGlobalState(I.clippingPlanes,Y),Qs(A,Z,Y),E.updateMultisampleRenderTarget(It),E.updateRenderTargetMipmap(It),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let fe=0,Ce=V.length;fe<Ce;fe++){const be=V[fe],{object:_e,geometry:qe,material:Ft,group:hn}=be;if(Ft.side===Xe&&_e.layers.test(Y.layers)){const ce=Ft.side;Ft.side=cn,Ft.needsUpdate=!0,Fl(_e,Z,Y,qe,Ft,hn),Ft.side=ce,Ft.needsUpdate=!0,Gt=!0}}Gt===!0&&(E.updateMultisampleRenderTarget(It),E.updateRenderTargetMipmap(It))}I.setRenderTarget(Rt,Bt,Vt),I.setClearColor(K,st),ne!==void 0&&(Y.viewport=ne),I.toneMapping=Kt}function Qs(A,V,Z){const Y=V.isScene===!0?V.overrideMaterial:null;for(let q=0,It=A.length;q<It;q++){const Ot=A[q],{object:Rt,geometry:Bt,group:Vt}=Ot;let Kt=Ot.material;Kt.allowOverride===!0&&Y!==null&&(Kt=Y),Rt.layers.test(Z.layers)&&Fl(Rt,V,Z,Bt,Kt,Vt)}}function Fl(A,V,Z,Y,q,It){A.onBeforeRender(I,V,Z,Y,q,It),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(I,V,Z,Y,A,It),q.transparent===!0&&q.side===Xe&&q.forceSinglePass===!1?(q.side=cn,q.needsUpdate=!0,I.renderBufferDirect(Z,V,Y,q,A,It),q.side=bi,q.needsUpdate=!0,I.renderBufferDirect(Z,V,Y,q,A,It),q.side=Xe):I.renderBufferDirect(Z,V,Y,q,A,It),A.onAfterRender(I,V,Z,Y,q,It)}function tr(A,V,Z){V.isScene!==!0&&(V=vt);const Y=R.get(A),q=w.state.lights,It=w.state.shadowsArray,Ot=q.state.version,Rt=St.getParameters(A,q.state,It,V,Z,w.state.lightProbeGridArray),Bt=St.getProgramCacheKey(Rt);let Vt=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;const Kt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=W.get(A.envMap||Y.environment,Kt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",Pe),Vt=new Map,Y.programs=Vt);let ne=Vt.get(Bt);if(ne!==void 0){if(Y.currentProgram===ne&&Y.lightsStateVersion===Ot)return Bl(A,Rt),ne}else Rt.uniforms=St.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,Z,Rt),A.onBeforeCompile(Rt,I),ne=St.acquireProgram(Rt,Bt),Vt.set(Bt,ne),Y.uniforms=Rt.uniforms;const Gt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Gt.clippingPlanes=Ut.uniform),Bl(A,Rt),Y.needsLights=_u(A),Y.lightsStateVersion=Ot,Y.needsLights&&(Gt.ambientLightColor.value=q.state.ambient,Gt.lightProbe.value=q.state.probe,Gt.directionalLights.value=q.state.directional,Gt.directionalLightShadows.value=q.state.directionalShadow,Gt.spotLights.value=q.state.spot,Gt.spotLightShadows.value=q.state.spotShadow,Gt.rectAreaLights.value=q.state.rectArea,Gt.ltc_1.value=q.state.rectAreaLTC1,Gt.ltc_2.value=q.state.rectAreaLTC2,Gt.pointLights.value=q.state.point,Gt.pointLightShadows.value=q.state.pointShadow,Gt.hemisphereLights.value=q.state.hemi,Gt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Gt.spotLightMatrix.value=q.state.spotLightMatrix,Gt.spotLightMap.value=q.state.spotLightMap,Gt.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=ne,Y.uniformsList=null,ne}function Ol(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Gr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Bl(A,V){const Z=R.get(A);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function pu(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;M.setFromMatrixPosition(V.matrixWorld);for(let Z=0,Y=A.length;Z<Y;Z++){const q=A[Z];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function mu(A,V,Z,Y,q){V.isScene!==!0&&(V=vt),E.resetTextureUnits();const It=V.fog,Ot=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,Rt=N===null?I.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:oe.workingColorSpace,Bt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Vt=W.get(Y.envMap||Ot,Bt),Kt=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ne=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Gt=!!Z.morphAttributes.position,fe=!!Z.morphAttributes.normal,Ce=!!Z.morphAttributes.color;let be=Vn;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(be=I.toneMapping);const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,qe=_e!==void 0?_e.length:0,Ft=R.get(Y),hn=w.state.lights;if(ot===!0&&(Mt===!0||A!==O)){const ye=A===O&&Y.id===F;Ut.setState(Y,A,ye)}let ce=!1;Y.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==hn.state.version||Ft.outputColorSpace!==Rt||q.isBatchedMesh&&Ft.batching===!1||!q.isBatchedMesh&&Ft.batching===!0||q.isBatchedMesh&&Ft.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ft.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ft.instancing===!1||!q.isInstancedMesh&&Ft.instancing===!0||q.isSkinnedMesh&&Ft.skinning===!1||!q.isSkinnedMesh&&Ft.skinning===!0||q.isInstancedMesh&&Ft.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ft.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ft.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ft.instancingMorph===!1&&q.morphTexture!==null||Ft.envMap!==Vt||Y.fog===!0&&Ft.fog!==It||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Ut.numPlanes||Ft.numIntersection!==Ut.numIntersection)||Ft.vertexAlphas!==Kt||Ft.vertexTangents!==ne||Ft.morphTargets!==Gt||Ft.morphNormals!==fe||Ft.morphColors!==Ce||Ft.toneMapping!==be||Ft.morphTargetsCount!==qe||!!Ft.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Ft.__version=Y.version);let mn=Ft.currentProgram;ce===!0&&(mn=tr(Y,V,q),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,mn,Ft));let In=!1,li=!1,Xi=!1;const xe=mn.getUniforms(),Re=Ft.uniforms;if(mt.useProgram(mn.program)&&(In=!0,li=!0,Xi=!0),Y.id!==F&&(F=Y.id,li=!0),Ft.needsLights){const ye=pu(w.state.lightProbeGridArray,q);Ft.lightProbeGrid!==ye&&(Ft.lightProbeGrid=ye,li=!0)}if(In||O!==A){mt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xe.setValue(U,"projectionMatrix",A.projectionMatrix),xe.setValue(U,"viewMatrix",A.matrixWorldInverse);const hi=xe.map.cameraPosition;hi!==void 0&&hi.setValue(U,at.setFromMatrixPosition(A.matrixWorld)),Xt.logarithmicDepthBuffer&&xe.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,li=!0,Xi=!0)}if(Ft.needsLights&&(hn.state.directionalShadowMap.length>0&&xe.setValue(U,"directionalShadowMap",hn.state.directionalShadowMap,E),hn.state.spotShadowMap.length>0&&xe.setValue(U,"spotShadowMap",hn.state.spotShadowMap,E),hn.state.pointShadowMap.length>0&&xe.setValue(U,"pointShadowMap",hn.state.pointShadowMap,E)),q.isSkinnedMesh){xe.setOptional(U,q,"bindMatrix"),xe.setOptional(U,q,"bindMatrixInverse");const ye=q.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),xe.setValue(U,"boneTexture",ye.boneTexture,E))}q.isBatchedMesh&&(xe.setOptional(U,q,"batchingTexture"),xe.setValue(U,"batchingTexture",q._matricesTexture,E),xe.setOptional(U,q,"batchingIdTexture"),xe.setValue(U,"batchingIdTexture",q._indirectTexture,E),xe.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&xe.setValue(U,"batchingColorTexture",q._colorsTexture,E));const ci=Z.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&Yt.update(q,Z,mn),(li||Ft.receiveShadow!==q.receiveShadow)&&(Ft.receiveShadow=q.receiveShadow,xe.setValue(U,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(Re.envMapIntensity.value=V.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=O_()),li){if(xe.setValue(U,"toneMappingExposure",I.toneMappingExposure),Ft.needsLights&&gu(Re,Xi),It&&Y.fog===!0&&$.refreshFogUniforms(Re,It),$.refreshMaterialUniforms(Re,Y,Et,dt,w.state.transmissionRenderTarget[A.id]),Ft.needsLights&&Ft.lightProbeGrid){const ye=Ft.lightProbeGrid;Re.probesSH.value=ye.texture,Re.probesMin.value.copy(ye.boundingBox.min),Re.probesMax.value.copy(ye.boundingBox.max),Re.probesResolution.value.copy(ye.resolution)}Gr.upload(U,Ol(Ft),Re,E)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Gr.upload(U,Ol(Ft),Re,E),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(U,"center",q.center),xe.setValue(U,"modelViewMatrix",q.modelViewMatrix),xe.setValue(U,"normalMatrix",q.normalMatrix),xe.setValue(U,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){const ye=Y.uniformsGroups;for(let hi=0,Yi=ye.length;hi<Yi;hi++){const zl=ye[hi];et.update(zl,mn),et.bind(zl,mn)}}return mn}function gu(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function _u(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,V,Z){const Y=R.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),R.get(A.texture).__webglTexture=V,R.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const Z=R.get(A);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const xu=U.createFramebuffer();this.setRenderTarget=function(A,V=0,Z=0){N=A,B=V,z=Z;let Y=null,q=!1,It=!1;if(A){const Rt=R.get(A);if(Rt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(U.FRAMEBUFFER,Rt.__webglFramebuffer),H.copy(A.viewport),G.copy(A.scissor),X=A.scissorTest,mt.viewport(H),mt.scissor(G),mt.setScissorTest(X),F=-1;return}else if(Rt.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Rt.__hasExternalTextures)E.rebindTextures(A,R.get(A.texture).__webglTexture,R.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Kt=A.depthTexture;if(Rt.__boundDepthTexture!==Kt){if(Kt!==null&&R.has(Kt)&&(A.width!==Kt.image.width||A.height!==Kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Bt=A.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(It=!0);const Vt=R.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[V])?Y=Vt[V][Z]:Y=Vt[V],q=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?Y=R.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?Y=Vt[Z]:Y=Vt,H.copy(A.viewport),G.copy(A.scissor),X=A.scissorTest}else H.copy(nt).multiplyScalar(Et).floor(),G.copy(wt).multiplyScalar(Et).floor(),X=Dt;if(Z!==0&&(Y=xu),mt.bindFramebuffer(U.FRAMEBUFFER,Y)&&mt.drawBuffers(A,Y),mt.viewport(H),mt.scissor(G),mt.setScissorTest(X),q){const Rt=R.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Rt.__webglTexture,Z)}else if(It){const Rt=V;for(let Bt=0;Bt<A.textures.length;Bt++){const Vt=R.get(A.textures[Bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,Z,Rt)}}else if(A!==null&&Z!==0){const Rt=R.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rt.__webglTexture,Z)}F=-1},this.readRenderTargetPixels=function(A,V,Z,Y,q,It,Ot,Rt=0){if(!(A&&A.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt){mt.bindFramebuffer(U.FRAMEBUFFER,Bt);try{const Vt=A.textures[Rt],Kt=Vt.format,ne=Vt.type;if(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Rt),!Xt.textureFormatReadable(Kt)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(ne)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Y&&Z>=0&&Z<=A.height-q&&U.readPixels(V,Z,Y,q,k.convert(Kt),k.convert(ne),It)}finally{const Vt=N!==null?R.get(N).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,V,Z,Y,q,It,Ot,Rt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=R.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt)if(V>=0&&V<=A.width-Y&&Z>=0&&Z<=A.height-q){mt.bindFramebuffer(U.FRAMEBUFFER,Bt);const Vt=A.textures[Rt],Kt=Vt.format,ne=Vt.type;if(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Rt),!Xt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Gt),U.bufferData(U.PIXEL_PACK_BUFFER,It.byteLength,U.STREAM_READ),U.readPixels(V,Z,Y,q,k.convert(Kt),k.convert(ne),0);const fe=N!==null?R.get(N).__webglFramebuffer:null;mt.bindFramebuffer(U.FRAMEBUFFER,fe);const Ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ju(U,Ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,It),U.deleteBuffer(Gt),U.deleteSync(Ce),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,Z=0){const Y=Math.pow(2,-Z),q=Math.floor(A.image.width*Y),It=Math.floor(A.image.height*Y),Ot=V!==null?V.x:0,Rt=V!==null?V.y:0;E.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Ot,Rt,q,It),mt.unbindTexture()};const vu=U.createFramebuffer(),yu=U.createFramebuffer();this.copyTextureToTexture=function(A,V,Z=null,Y=null,q=0,It=0){let Ot,Rt,Bt,Vt,Kt,ne,Gt,fe,Ce;const be=A.isCompressedTexture?A.mipmaps[It]:A.image;if(Z!==null)Ot=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,Bt=Z.isBox3?Z.max.z-Z.min.z:1,Vt=Z.min.x,Kt=Z.min.y,ne=Z.isBox3?Z.min.z:0;else{const Re=Math.pow(2,-q);Ot=Math.floor(be.width*Re),Rt=Math.floor(be.height*Re),A.isDataArrayTexture?Bt=be.depth:A.isData3DTexture?Bt=Math.floor(be.depth*Re):Bt=1,Vt=0,Kt=0,ne=0}Y!==null?(Gt=Y.x,fe=Y.y,Ce=Y.z):(Gt=0,fe=0,Ce=0);const _e=k.convert(V.format),qe=k.convert(V.type);let Ft;V.isData3DTexture?(E.setTexture3D(V,0),Ft=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(E.setTexture2DArray(V,0),Ft=U.TEXTURE_2D_ARRAY):(E.setTexture2D(V,0),Ft=U.TEXTURE_2D),mt.activeTexture(U.TEXTURE0),mt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),mt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),mt.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const hn=mt.getParameter(U.UNPACK_ROW_LENGTH),ce=mt.getParameter(U.UNPACK_IMAGE_HEIGHT),mn=mt.getParameter(U.UNPACK_SKIP_PIXELS),In=mt.getParameter(U.UNPACK_SKIP_ROWS),li=mt.getParameter(U.UNPACK_SKIP_IMAGES);mt.pixelStorei(U.UNPACK_ROW_LENGTH,be.width),mt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be.height),mt.pixelStorei(U.UNPACK_SKIP_PIXELS,Vt),mt.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),mt.pixelStorei(U.UNPACK_SKIP_IMAGES,ne);const Xi=A.isDataArrayTexture||A.isData3DTexture,xe=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const Re=R.get(A),ci=R.get(V),ye=R.get(Re.__renderTarget),hi=R.get(ci.__renderTarget);mt.bindFramebuffer(U.READ_FRAMEBUFFER,ye.__webglFramebuffer),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let Yi=0;Yi<Bt;Yi++)Xi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(A).__webglTexture,q,ne+Yi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(V).__webglTexture,It,Ce+Yi)),U.blitFramebuffer(Vt,Kt,Ot,Rt,Gt,fe,Ot,Rt,U.DEPTH_BUFFER_BIT,U.NEAREST);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||R.has(A)){const Re=R.get(A),ci=R.get(V);mt.bindFramebuffer(U.READ_FRAMEBUFFER,vu),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,yu);for(let ye=0;ye<Bt;ye++)Xi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,q,ne+ye):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Re.__webglTexture,q),xe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ci.__webglTexture,It,Ce+ye):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ci.__webglTexture,It),q!==0?U.blitFramebuffer(Vt,Kt,Ot,Rt,Gt,fe,Ot,Rt,U.COLOR_BUFFER_BIT,U.NEAREST):xe?U.copyTexSubImage3D(Ft,It,Gt,fe,Ce+ye,Vt,Kt,Ot,Rt):U.copyTexSubImage2D(Ft,It,Gt,fe,Vt,Kt,Ot,Rt);mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xe?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ft,It,Gt,fe,Ce,Ot,Rt,Bt,_e,qe,be.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,It,Gt,fe,Ce,Ot,Rt,Bt,_e,be.data):U.texSubImage3D(Ft,It,Gt,fe,Ce,Ot,Rt,Bt,_e,qe,be):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,It,Gt,fe,Ot,Rt,_e,qe,be.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,It,Gt,fe,be.width,be.height,_e,be.data):U.texSubImage2D(U.TEXTURE_2D,It,Gt,fe,Ot,Rt,_e,qe,be);mt.pixelStorei(U.UNPACK_ROW_LENGTH,hn),mt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce),mt.pixelStorei(U.UNPACK_SKIP_PIXELS,mn),mt.pixelStorei(U.UNPACK_SKIP_ROWS,In),mt.pixelStorei(U.UNPACK_SKIP_IMAGES,li),It===0&&V.generateMipmaps&&U.generateMipmap(Ft),mt.unbindTexture()},this.initRenderTarget=function(A){R.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),mt.unbindTexture()},this.resetState=function(){B=0,z=0,N=null,mt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const nh={type:"change"},bl={type:"start"},ru={type:"end"},Pr=new oo,ih=new Qn,z_=Math.cos(70*Ch.DEG2RAD),Oe=new D,on=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ko=1e-6;class k_ extends Kh{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new We,this._lastTargetPosition=new D,this._quat=new We().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rc,this._sphericalDelta=new Rc,this._scale=1,this._panOffset=new D,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new D,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=G_.bind(this),this._onPointerDown=V_.bind(this),this._onPointerUp=H_.bind(this),this._onContextMenu=K_.bind(this),this._onMouseWheel=Y_.bind(this),this._onKeyDown=q_.bind(this),this._onTouchStart=j_.bind(this),this._onTouchMove=Z_.bind(this),this._onMouseDown=W_.bind(this),this._onMouseMove=X_.bind(this),this._interceptControlDown=$_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nh),this.update(),this.state=me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Oe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Pr.origin.copy(this.object.position),Pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pr.direction))<z_?this.object.lookAt(this.target):(ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pr.intersectPlane(ih,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ko||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ko||this._lastTargetPosition.distanceToSquared(this.target)>Ko?(this.dispatchEvent(nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function V_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function G_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function H_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ru),this.state=me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function W_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=me.DOLLY;break;case hs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}break;case hs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(bl)}function X_(i){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Y_(i){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(i.preventDefault(),this.dispatchEvent(bl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ru))}function q_(i){this.enabled!==!1&&this._handleKeyDown(i)}function j_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case as.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=me.TOUCH_ROTATE;break;case as.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case as.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=me.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(bl)}function Z_(i){switch(this._trackPointer(i),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=me.NONE}}function K_(i){this.enabled!==!1&&i.preventDefault()}function $_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ii=new Zh,Ke=new D,_i=new D,Me=new We,sh={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},$o={type:"change"},rh={type:"mouseDown",mode:null},oh={type:"mouseUp",mode:null},ah={type:"objectChange"};class Q_ extends Kh{constructor(t,e=null){super(void 0,e);const n=new rx(this);this._root=n;const s=new ox;this._gizmo=s,n.add(s);const r=new ax;this._plane=r,n.add(r);const o=this;function a(y,M){let C=M;Object.defineProperty(o,y,{get:function(){return C!==void 0?C:M},set:function(w){C!==w&&(C=w,r[y]=w,s[y]=w,o.dispatchEvent({type:y+"-changed",value:w}),o.dispatchEvent($o))}}),o[y]=M,r[y]=M,s[y]=M}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("showXY",!0),a("showYZ",!0),a("showXZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new D,c=new D,h=new We,u=new We,d=new D,f=new We,g=new D,x=new D,p=new D,m=0,_=new D;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",u),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",x),a("rotationAxis",p),a("rotationAngle",m),a("eye",_),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new We,this._parentQuaternionInv=new We,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new We,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new We,this._scaleStart=new D,this._getPointer=tx.bind(this),this._onPointerDown=nx.bind(this),this._onPointerHover=ex.bind(this),this._onPointerMove=ix.bind(this),this._onPointerUp=sx.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Ii.setFromCamera(t,this.camera);const e=Jo(this._gizmo.picker[this.mode],Ii);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Ii.setFromCamera(t,this.camera);const e=Jo(this._plane,Ii,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,rh.mode=this.mode,this.dispatchEvent(rh)}}pointerMove(t){const e=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Ii.setFromCamera(t,this.camera);const o=Jo(this._plane,Ii,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Me.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Ke.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Ke.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),_i.set(a,a,a)}else Ke.copy(this.pointStart),_i.copy(this.pointEnd),Ke.applyQuaternion(this._worldQuaternionInv),_i.applyQuaternion(this._worldQuaternionInv),_i.divide(Ke),e.search("X")===-1&&(_i.x=1),e.search("Y")===-1&&(_i.y=1),e.search("Z")===-1&&(_i.z=1);s.scale.copy(this._scaleStart).multiply(_i),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Ke.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Ke.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(sh[e]),Ke.copy(sh[e]),r==="local"&&Ke.applyQuaternion(this.worldQuaternion),Ke.cross(this.eye),Ke.length()===0?l=!0:this.rotationAngle=this._offset.dot(Ke.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Me.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Me.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent($o),this.dispatchEvent(ah)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(oh.mode=this.mode,this.dispatchEvent(oh)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent($o),this.dispatchEvent(ah),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ii}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){const r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}}function tx(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function ex(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function nx(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function ix(i){this.enabled&&this.pointerMove(this._getPointer(i))}function sx(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Jo(i,t,e){const n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}const Cr=new ai,ve=new D(0,1,0),lh=new D(0,0,0),ch=new ge,Rr=new We,Hr=new We,Nn=new D,hh=new ge,Ns=new D(1,0,0),Di=new D(0,1,0),Us=new D(0,0,1),Ir=new D,Ps=new D,Cs=new D;class rx extends Le{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class ox extends Le{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new Ie({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new ln({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const l=t.clone();l.color.setHex(16711680),l.opacity=.5;const c=t.clone();c.color.setHex(65280),c.opacity=.5;const h=t.clone();h.color.setHex(255),h.opacity=.5;const u=t.clone();u.opacity=.25;const d=t.clone();d.color.setHex(16776960),d.opacity=.25;const f=t.clone();f.color.setHex(16776960);const g=t.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:h,activeTransparent:d};const x=new Ye(0,.04,.1,12);x.translate(0,.05,0);const p=new we(.08,.08,.08);p.translate(0,.04,0);const m=new se;m.setAttribute("position",new Qt([0,0,0,1,0,0],3));const _=new Ye(.0075,.0075,.5,3);_.translate(0,.25,0);function y(N,F){const O=new Li(N,.0075,3,64,F*Math.PI*2);return O.rotateY(Math.PI/2),O.rotateX(Math.PI/2),O}function M(){const N=new se;return N.setAttribute("position",new Qt([0,0,0,1,1,1],3)),N}const C={X:[[new pt(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new pt(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new pt(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pt(x,o),[0,.5,0]],[new pt(x,o),[0,-.5,0],[Math.PI,0,0]],[new pt(_,o)]],Z:[[new pt(x,a),[0,0,.5],[Math.PI/2,0,0]],[new pt(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new pt(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new pt(new ls(.1,0),u),[0,0,0]]],XY:[[new pt(new we(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new pt(new we(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new we(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new pt(new Ye(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pt(new Ye(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pt(new Ye(.2,0,.6,4),n),[0,.3,0]],[new pt(new Ye(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pt(new Ye(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pt(new Ye(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pt(new ls(.2,0),n)]],XY:[[new pt(new we(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pt(new we(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new we(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new pt(new ls(.01,2),s),null,null,null,"helper"]],END:[[new pt(new ls(.01,2),s),null,null,null,"helper"]],DELTA:[[new Se(M(),s),null,null,null,"helper"]],X:[[new Se(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Se(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Se(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},S={XYZE:[[new pt(y(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new pt(y(.5,.5),r)]],Y:[[new pt(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new pt(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new pt(y(.75,1),d),null,[0,Math.PI/2,0]]]},b={AXIS:[[new Se(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},I={XYZE:[[new pt(new Sl(.25,10,8),n)]],X:[[new pt(new Li(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pt(new Li(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pt(new Li(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pt(new Li(.75,.1,2,24),n)]]},T={X:[[new pt(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new pt(_,r),[0,0,0],[0,0,-Math.PI/2]],[new pt(p,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pt(p,o),[0,.5,0]],[new pt(_,o)],[new pt(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pt(p,a),[0,0,.5],[Math.PI/2,0,0]],[new pt(_,a),[0,0,0],[Math.PI/2,0,0]],[new pt(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pt(new we(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new pt(new we(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new we(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pt(new we(.1,.1,.1),u)]]},L={X:[[new pt(new Ye(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pt(new Ye(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pt(new Ye(.2,0,.6,4),n),[0,.3,0]],[new pt(new Ye(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pt(new Ye(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pt(new Ye(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pt(new we(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pt(new we(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new we(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pt(new we(.2,.2,.2),n),[0,0,0]]]},B={X:[[new Se(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Se(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Se(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function z(N){const F=new Le;for(const O in N)for(let H=N[O].length;H--;){const G=N[O][H][0].clone(),X=N[O][H][1],K=N[O][H][2],st=N[O][H][3],xt=N[O][H][4];G.name=O,G.tag=xt,X&&G.position.set(X[0],X[1],X[2]),K&&G.rotation.set(K[0],K[1],K[2]),st&&G.scale.set(st[0],st[1],st[2]),G.updateMatrix();const dt=G.geometry.clone();dt.applyMatrix4(G.matrix),G.geometry=dt,G.renderOrder=1/0,G.position.set(0,0,0),G.rotation.set(0,0,0),G.scale.set(1,1,1),F.add(G)}return F}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=z(C)),this.add(this.gizmo.rotate=z(S)),this.add(this.gizmo.scale=z(T)),this.add(this.picker.translate=z(w)),this.add(this.picker.rotate=z(I)),this.add(this.picker.scale=z(L)),this.add(this.helper.translate=z(P)),this.add(this.helper.rotate=z(b)),this.add(this.helper.scale=z(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Hr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Me.setFromEuler(Cr.set(0,0,0)),o.quaternion.copy(n).multiply(Me),Math.abs(ve.copy(Ns).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Me.setFromEuler(Cr.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Me),Math.abs(ve.copy(Di).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Me.setFromEuler(Cr.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Me),Math.abs(ve.copy(Us).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Me.setFromEuler(Cr.set(0,Math.PI/2,0)),ve.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(ch.lookAt(lh,ve,Di)),o.quaternion.multiply(Me),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Ke.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Ke.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Ke),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ve.copy(Ns).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ve.copy(Di).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ve.copy(Us).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ve.copy(Us).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ve.copy(Ns).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ve.copy(Di).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Rr.copy(n),ve.copy(this.eye).applyQuaternion(Me.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(ch.lookAt(this.eye,lh,Di)),o.name==="X"&&(Me.setFromAxisAngle(Ns,Math.atan2(-ve.y,ve.z)),Me.multiplyQuaternions(Rr,Me),o.quaternion.copy(Me)),o.name==="Y"&&(Me.setFromAxisAngle(Di,Math.atan2(ve.x,ve.z)),Me.multiplyQuaternions(Rr,Me),o.quaternion.copy(Me)),o.name==="Z"&&(Me.setFromAxisAngle(Us,Math.atan2(ve.y,ve.x)),Me.multiplyQuaternions(Rr,Me),o.quaternion.copy(Me))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.visible=o.visible&&(o.name.indexOf("XY")===-1||this.showXY),o.visible=o.visible&&(o.name.indexOf("YZ")===-1||this.showYZ),o.visible=o.visible&&(o.name.indexOf("XZ")===-1||this.showXZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}}class ax extends pt{constructor(){super(new xs(1e5,1e5,2,2),new Ie({visible:!1,wireframe:!0,side:Xe,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Ir.copy(Ns).applyQuaternion(e==="local"?this.worldQuaternion:Hr),Ps.copy(Di).applyQuaternion(e==="local"?this.worldQuaternion:Hr),Cs.copy(Us).applyQuaternion(e==="local"?this.worldQuaternion:Hr),ve.copy(Ps),this.mode){case"translate":case"scale":switch(this.axis){case"X":ve.copy(this.eye).cross(Ir),Nn.copy(Ir).cross(ve);break;case"Y":ve.copy(this.eye).cross(Ps),Nn.copy(Ps).cross(ve);break;case"Z":ve.copy(this.eye).cross(Cs),Nn.copy(Cs).cross(ve);break;case"XY":Nn.copy(Cs);break;case"YZ":Nn.copy(Ir);break;case"XZ":ve.copy(Cs),Nn.copy(Ps);break;case"XYZ":case"E":Nn.set(0,0,0);break}break;case"rotate":default:Nn.set(0,0,0)}Nn.length()===0?this.quaternion.copy(this.cameraQuaternion):(hh.lookAt(Ke.set(0,0,0),Nn,ve),this.quaternion.setFromRotationMatrix(hh)),super.updateMatrixWorld(t)}}class it{constructor(t,e){this.x=t,this.y=e}add(t){return new it(this.x+t.x,this.y+t.y)}sub(t){return new it(this.x-t.x,this.y-t.y)}scale(t){return new it(this.x*t,this.y*t)}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.lengthSq())}normalize(){const t=this.length();return t>1e-12?this.scale(1/t):new it(0,0)}distSq(t){return(this.x-t.x)**2+(this.y-t.y)**2}dist(t){return Math.sqrt(this.distSq(t))}}function lx(i){let t=0;for(let e=0;e<i.length;e++){const n=i[e],s=i[(e+1)%i.length];t+=(s.x-n.x)*(s.y+n.y)}return t<0?i:[...i].reverse()}function cx(i,t){const e=t.x-i.x,n=t.y-i.y;return new it(-n,e).normalize()}function wl(i,t,e,n){const s=n.sub(e),r=t.cross(s);if(Math.abs(r)<1e-10)return null;const o=e.sub(i),a=o.cross(s)/r,l=o.cross(t)/r;return a>1e-6&&l>=0&&l<=1?{point:i.add(t.scale(a)),s:a}:null}function zn(i,t,e){const n=e.sub(t),s=i.sub(t),r=n.lengthSq();if(r<1e-10)return t;let o=s.dot(n)/r;return o=Math.max(0,Math.min(1,o)),t.add(n.scale(o))}function hx(i,t){let e=1/0,n=null,s=-1;for(let r=0;r<t.length;r++){const o=t[r],a=t[(r+1)%t.length],l=zn(i,o,a),c=i.dist(l);c<e&&(e=c,n=l,s=r)}return{distance:e,point:n,edgeIndex:s}}function ou(i,t){let e=i.x,n=i.y,s=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){let a=t[r].x,l=t[r].y,c=t[o].x,h=t[o].y;l>n!=h>n&&e<(c-a)*(n-l)/(h-l)+a&&(s=!s)}return s}function ux(i){if(i.length===0)return null;let t=i[0];for(let e=1;e<i.length;e++)if(t=dx(t,i[e]),!t)return null;return fx(t)}function dx(i,t){const e=[];for(let x=0;x<i.length;x++)e.push([i[x],i[(x+1)%i.length]]);const n=[];for(let x=0;x<t.length;x++)n.push([t[x],t[(x+1)%t.length]]);const s=x=>`${x.x.toFixed(4)},${x.y.toFixed(4)}`,r=new Set;for(const x of n)r.add(`${s(x[0])}->${s(x[1])}`);const o=e.filter(x=>!r.has(`${s(x[1])}->${s(x[0])}`)),a=new Set;for(const x of e)a.add(`${s(x[0])}->${s(x[1])}`);const l=n.filter(x=>!a.has(`${s(x[1])}->${s(x[0])}`)),c=[...o,...l];if(c.length===0)return null;const h=new Map;for(const x of c)h.set(s(x[0]),{start:x[0],end:x[1]});let d=Array.from(h.keys())[0];const f=[],g=new Set;for(;d&&!g.has(d);){g.add(d);const x=h.get(d);if(!x)break;f.push(x.start),d=s(x.end)}return g.size<c.length?null:f}function fx(i){if(i.length<3)return i;const t=[];for(let e=0;e<i.length;e++){const n=i[(e-1+i.length)%i.length],s=i[e],r=i[(e+1)%i.length],o=s.x-n.x,a=s.y-n.y,l=r.x-s.x,c=r.y-s.y,h=Math.hypot(o,a),u=Math.hypot(l,c);if(h<1e-6||u<1e-6)continue;const d=(o*c-a*l)/(h*u);Math.abs(d)>.001&&t.push(s)}return t}const Rs=(i,t,e)=>{if(i===t)return 1;if(typeof i!="string"||typeof t!="string")return 0;const n=i.startsWith("V")?parseInt(i.substring(1))*2:parseInt(i.substring(1))*2+1,s=t.startsWith("V")?parseInt(t.substring(1))*2:parseInt(t.substring(1))*2+1;return Math.min(Math.abs(n-s),2*e-Math.abs(n-s))===1?.5:0};class px{constructor(t,e={}){this.polygon=lx(t.map(n=>new it(n.x,n.y))),this.epsilon=e.epsilon!==void 0?e.epsilon:1e-5,this.tangentEpsilon=e.tangentEpsilon||1e-4}containsBall(t,e){const{distance:n}=hx(t,this.polygon);return n>=e-this.epsilon}computeMedialPoint(t,e){let n=t,s=e,r=t.add(e).scale(.5),o=r.dist(t);for(;s.dist(n)>this.epsilon;)this.containsBall(r,o)?n=r:s=r,r=n.add(s).scale(.5),o=r.dist(t);return r.radius=o,r}computeStructuredSkeleton(t){const e=[],n=[],s=this.polygon.length,r=this.polygon.map((u,d)=>{const f=(d-1+s)%s,g=(d+1)%s,x=u.sub(this.polygon[f]),p=this.polygon[g].sub(u);return x.cross(p)>=0?"CONVEX":"CONCAVE"});let o=0;for(let u=0;u<s;u++)o+=this.polygon[u].dist(this.polygon[(u+1)%s]);const a=t*s,l=[];for(let u=0;u<s;u++){const d=this.polygon[u],f=this.polygon[(u+1)%s],g=d.dist(f);if(g===0)continue;const x=cx(d,f);let p=Math.max(5,Math.floor(g/o*a));p%2!==0&&(p+=1);for(let m=1;m<p;m++){const _=d.add(f.sub(d).scale(m/p));let y=null,M=1/0;for(let C=0;C<s;C++){const w=wl(_,x,this.polygon[C],this.polygon[(C+1)%s]);w&&w.s<M&&(M=w.s,y=w.point)}if(y){const C=this.computeMedialPoint(_,y);l.push(C)}}}l.forEach(u=>{u.governors=new Set;for(let d=0;d<s;d++){const f=this.polygon[d],g=this.polygon[(d+1)%s],x=zn(u,f,g),p=u.dist(x),m=Math.max(.2,u.radius*.05);if(Math.abs(p-u.radius)<m){const _=g.sub(f),y=_.length(),M=y===0?p:Math.abs((u.x-f.x)*_.y-(u.y-f.y)*_.x)/y;Math.abs(M-u.radius)<m&&u.governors.add("E"+d),x.dist(f)<.05*y&&r[d]==="CONCAVE"?u.governors.add("V"+d):x.dist(g)<.05*y&&r[(d+1)%s]==="CONCAVE"&&u.governors.add("V"+(d+1)%s)}}});const c=l.filter(u=>{let d=[];for(let g=0;g<s;g++)if(u.governors.has("E"+g)||u.governors.has("V"+g)){const x=this.polygon[g],p=this.polygon[(g+1)%s],_=(u.governors.has("V"+g)?x:zn(u,x,p)).sub(u).normalize();_.lengthSq()>1e-6&&d.push(_)}if(d.length<2)return!0;let f=1;for(let g=0;g<d.length;g++)for(let x=g+1;x<d.length;x++){const p=d[g].dot(d[x]);f=Math.min(f,p)}return f<.92});e.push(...c);for(let u=0;u<s;u++)if(r[u]==="CONVEX"){const d=(u-1+s)%s,f=(u+1)%s,g=this.polygon[d],x=this.polygon[u],p=this.polygon[f],m=g.sub(x).normalize(),_=p.sub(x).normalize();if(m.dot(_)>-.92){const C=new it(x.x,x.y);C.radius=0,C.isEndPoint=!0,C.governors=new Set(["E"+d,"V"+u,"E"+u]),n.push(C)}}const h=[];return c.forEach(u=>{let d=!1;for(const f of h){let g=0;if(u.governors.forEach(x=>f.governors.forEach(p=>{g+=Rs(x,p,s)})),g>=1&&u.dist(f)<2.5){f.x=(f.x*f.count+u.x)/(f.count+1),f.y=(f.y*f.count+u.y)/(f.count+1),f.radius=(f.radius*f.count+u.radius)/(f.count+1),f.count++,u.governors.forEach(x=>f.governors.add(x)),d=!0;break}}if(!d){const f=new it(u.x,u.y);f.governors=new Set(u.governors),f.count=1,f.isEndPoint=!1,f.radius=u.radius,h.push(f)}}),n.push(...h),{regularPoints:e,junctionPoints:n}}simplifySkeleton(t,e,n=20){const r=e.filter(_=>_.isEndPoint).map(_=>{const y=new it(_.x,_.y);return y.governors=new Set(_.governors),y.isEndPoint=!0,y.count=1,y.radius=0,y});t.forEach(_=>{let y=!1;for(const M of r){if(M.isEndPoint)continue;let C=0;if(_.governors.forEach(w=>M.governors.forEach(P=>{C+=Rs(w,P,this.polygon.length)})),C>=1&&_.dist(M)<2.5){M.x=(M.x*M.count+_.x)/(M.count+1),M.y=(M.y*M.count+_.y)/(M.count+1),M.radius=(M.radius*M.count+_.radius)/(M.count+1),M.count++,_.governors.forEach(w=>M.governors.add(w)),y=!0;break}}if(!y){const M=new it(_.x,_.y);M.governors=new Set(_.governors),M.count=1,M.isEndPoint=!1,M.radius=_.radius,r.push(M)}});const o=r.map(()=>new Set),a=[];for(let _=0;_<r.length;_++)for(let y=_+1;y<r.length;y++){let M=0;r[_].governors.forEach(C=>r[y].governors.forEach(w=>{M+=Rs(C,w,this.polygon.length)})),M>=1&&a.push({i:_,j:y,distSq:r[_].distSq(r[y])})}for(const _ of a){let y=!0;for(let M=0;M<r.length;M++)if(!(M===_.i||M===_.j)&&r[_.i].distSq(r[M])<_.distSq-.01&&r[M].distSq(r[_.j])<_.distSq-.01){let C=0,w=0;if(r[M].governors.forEach(P=>r[_.i].governors.forEach(S=>{C+=Rs(P,S,this.polygon.length)})),r[M].governors.forEach(P=>r[_.j].governors.forEach(S=>{w+=Rs(P,S,this.polygon.length)})),C>=1&&w>=1){y=!1;break}}y&&(o[_.i].add(_.j),o[_.j].add(_.i))}const l=r.map(()=>!0);let c=!0;for(;c;){c=!1;for(let _=0;_<r.length;_++)if(l[_]){for(const y of Array.from(o[_])){if(!l[y]||_>=y)continue;const M=(r[_].radius+r[y].radius)/2,C=Math.max(n,M*.4);if(r[_].dist(r[y])<C){if(r[_].isEndPoint&&r[y].isEndPoint)continue;const w=r[_].isEndPoint?_:r[y].isEndPoint?y:_,P=w===_?y:_;r[w].isEndPoint||(r[w].x=(r[w].x*r[w].count+r[P].x*r[P].count)/(r[w].count+r[P].count),r[w].y=(r[w].y*r[w].count+r[P].y*r[P].count)/(r[w].count+r[P].count),r[w].radius=(r[w].radius*r[w].count+r[P].radius*r[P].count)/(r[w].count+r[P].count),r[w].count+=r[P].count),r[P].governors.forEach(S=>r[w].governors.add(S)),o[P].forEach(S=>{S!==w&&(o[S].delete(P),o[S].add(w),o[w].add(S))}),o[w].delete(P),l[P]=!1,o[P].clear(),c=!0;break}}if(c)break}}const h=(_,y)=>{const C=y.x-_.x,w=y.y-_.y,P=new it(_.x+C*.001,_.y+w*.001),S=new it(y.x-C*.001,y.y-w*.001);for(let b=0;b<this.polygon.length;b++){const I=this.polygon[b],T=this.polygon[(b+1)%this.polygon.length],L=(z,N,F)=>(F.y-z.y)*(N.x-z.x)>(N.y-z.y)*(F.x-z.x);if(L(P,I,T)!==L(S,I,T)&&L(P,S,I)!==L(P,S,T))return!1}return!0},u=Array.from({length:r.length},(_,y)=>y),d=_=>u[_]===_?_:u[_]=d(u[_]),f=(_,y)=>{const M=d(_),C=d(y);return M!==C?(u[M]=C,!0):!1};for(let _=0;_<r.length;_++)if(l[_])for(const y of o[_])l[y]&&_<y&&f(_,y);for(let _=0;_<r.length;_++)if(l[_])for(let y=_+1;y<r.length;y++)l[y]&&d(_)!==d(y)&&h(r[_],r[y])&&(f(_,y),o[_].add(y),o[y].add(_));const g=(_,y,M)=>{const C=M.sub(y),w=_.sub(y),P=C.lengthSq();if(P<1e-10)return _.dist(y);let S=w.dot(C)/P;S=Math.max(0,Math.min(1,S));const b=y.add(C.scale(S));return _.dist(b)};let x=!0;for(;x;){x=!1;for(let _=0;_<r.length;_++)if(!(!l[_]||r[_].isEndPoint)){if(o[_].size===2){const y=Array.from(o[_]),M=y[0],C=y[1],w=r[M],P=r[C],S=r[_],b=w.sub(S).normalize(),I=P.sub(S).normalize(),T=b.dot(I),L=g(S,w,P);let B=!1;for(const z of S.governors)if(!w.governors.has(z)&&!P.governors.has(z)){B=!0;break}(T<-.95||L<.5||!B)&&(o[M].delete(_),o[C].delete(_),M!==C&&(o[M].add(C),o[C].add(M)),l[_]=!1,o[_].clear(),x=!0)}else if(o[_].size<=1){const y=Array.from(o[_]);y.length===1&&o[y[0]].delete(_),l[_]=!1,o[_].clear(),x=!0}}}const p=[];for(let _=0;_<r.length;_++)if(l[_])for(const y of o[_])_<y&&p.push({start:r[_],end:r[y]});const m=r.filter((_,y)=>l[y]);for(let _=0;_<r.length;_++)l[_]&&(r[_].isJunction=o[_].size>=3);return{segments:p,nodes:m}}computeVoronoiCells(t,e=3e3,n=3e3){const s=[];if(t.length===0)return[];const r=(o,a,l)=>{const c=[];if(o.length===0)return[];for(let h=0;h<o.length;h++){const u=o[h],d=o[(h+1)%o.length],f=u.sub(a).dot(l),g=d.sub(a).dot(l);if(f>=-1e-9&&c.push(u),f>=0&&g<0||f<0&&g>=0){const x=f-g;if(Math.abs(x)>1e-9){const p=f/x;c.push(u.add(d.sub(u).scale(p)))}}}return c};for(let o=0;o<t.length;o++){const a=t[o];let l=[new it(-e,-n),new it(e,-n),new it(e,n),new it(-e,n)];for(let c=0;c<t.length;c++){if(o===c)continue;const h=t[c],u=a.add(h).scale(.5),d=a.sub(h).normalize();l=r(l,u,d)}s.push({seed:a,polygon:l})}return s}}class mx{constructor(t){this.appContext=t,this.worker=new Worker(new URL("/assets/rhino.worker-BGPWZf9F.js",import.meta.url)),this.metadataResolve=null,this.loadResolve=null,this.exportResolve=null,this.rejectCallback=null,this.layers=[],this.worker.onmessage=e=>{const{type:n,success:s,layers:r,objectCount:o,geometries:a,error:l}=e.data;if(!s){console.error("[RhinoManager] Worker error:",l),this.rejectCallback&&this.rejectCallback(new Error(l));return}n==="metadata-result"?(this.layers=r,this.metadataResolve&&this.metadataResolve({layers:r,objectCount:o})):n==="load-result"?(this.processGeometries(a),this.loadResolve&&this.loadResolve(a)):n==="export-result"&&this.exportResolve&&this.exportResolve(e.data.bytes)}}parseMetadata(t){return new Promise((e,n)=>{this.metadataResolve=e,this.rejectCallback=n,this.worker.postMessage({type:"parse-metadata",buffer:t})})}loadLayers(t,e){return new Promise((n,s)=>{this.loadResolve=n,this.rejectCallback=s,this.worker.postMessage({type:"load-layers",buffer:t,layerIndices:e})})}processGeometries(t){console.log(`[RhinoManager] Processing ${t.length} geometries...`),this.clearRhinoGeometries();const e=[],n=new Of;t.forEach(s=>{const r=this.layers.find(l=>l.index===s.layerIndex),o=r?r.color:{r:128,g:128,b:128},a=o.r<<16|o.g<<8|o.b;if(s.type==="mesh")try{const l=typeof s.data=="string"?JSON.parse(s.data):s.data,c=n.parse(l),h=new Ie({color:a,transparent:!0,opacity:.4,side:Xe}),u=new pt(c,h);u.name=s.name,u.userData={type:"rhino-geometry"},this.appContext.rhinoGroup.add(u)}catch(l){console.error("[RhinoManager] Failed to load mesh:",l)}else if(s.type==="curve")try{const l=s.points.map(d=>new D(d[0],d[1],d[2])),c=new se().setFromPoints(l),h=new ln({color:a,linewidth:2}),u=new Se(c,h);if(u.name=s.name,u.userData={type:"rhino-geometry"},this.appContext.rhinoGroup.add(u),s.points.length>=3){const d=s.points[0],f=s.points[s.points.length-1];if(Math.sqrt((d[0]-f[0])**2+(d[1]-f[1])**2+(d[2]-f[2])**2)<.2){const x=s.points.map(p=>[p[0],p[1]]);x.pop(),e.push(x)}}}catch(l){console.error("[RhinoManager] Failed to load curve:",l)}}),e.length>0&&(console.log(`[RhinoManager] Found ${e.length} closed boundary curves. Setting imported polygons!`),this.appContext.setPolygonsFrom3dm(e))}clearRhinoGeometries(){const t=this.appContext.rhinoGroup;if(t)for(;t.children.length>0;){const e=t.children[0];t.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}}exportSceneTo3dm(t="medial_axis_export.3dm"){console.log("[RhinoManager] Triggering background export to .3dm...");const e=this.appContext.state.activePolygonId,n=this.appContext.state.importedPolygons.map(s=>{this.appContext.state.activePolygonId=s.id;const r=s.polygon.map(x=>[x.x,x.y,0]);if(!s.hasScaffold)return{boundary:r,hasScaffold:!1};const o=[];if(this.appContext.state.showSkeleton&&s.polygon.length>=3)if(s.planarGraph){const x=s.planarGraph;x.edges.forEach(p=>{if(p[2]==="skeleton"){const m=x.vertices[p[0]],_=x.vertices[p[1]];o.push([[m.x,m.y,0],[_.x,_.y,0]])}})}else if(this.appContext.state.simplifySkeleton)(this.appContext.state.pruneBranches?s.skeletonData.simplifiedSegments.filter(p=>!(p.start.isEndPoint||p.end.isEndPoint)):s.skeletonData.simplifiedSegments).forEach(p=>{o.push([[p.start.x,p.start.y,0],[p.end.x,p.end.y,0]])});else{const x=s.skeletonData.regularPoints,p=this.appContext.state.samplesPerEdge;for(let m=0;m<s.polygon.length;m++){const _=[];for(let y=0;y<p;y++){const M=m*p+y;x[M]&&_.push([x[M].x,x[M].y,0])}_.length>=2&&o.push(_)}}const a=[];if(this.appContext.state.showSkeleton&&this.appContext.state.showRibs)if(s.planarGraph){const x=s.planarGraph;x.edges.forEach(p=>{if(p[2]&&p[2].startsWith("rib_")){const m=x.vertices[p[0]],_=x.vertices[p[1]];a.push({start:[m.x,m.y,0],end:[_.x,_.y,0]})}})}else s.id===e&&this.appContext.acceptedRibsCache&&this.appContext.acceptedRibsCache.forEach(x=>{a.push({start:[x.source.x,x.source.y,0],end:[x.target.x,x.target.y,0]})});const l=[];if(s.id===e&&this.appContext.state.hoverCircle&&this.appContext.state.hoveredMedialPoint){const x=this.appContext.state.hoveredMedialPoint;l.push({center:[x.x,x.y,0],radius:x.radius})}s.polygon.length>=3&&s.skeletonData.simplifiedNodes&&s.skeletonData.simplifiedNodes.filter(p=>!p.isEndPoint).forEach(p=>{l.push({center:[p.x,p.y,0],radius:p.radius||5})});const c=[];s.structuralBays&&s.structuralBays.forEach(x=>{c.push(x.map(p=>[p.x,p.y,0]))});let h=!0,u=0;for(let x=0;x<s.polygon.length;x++){const p=s.polygon[x],m=s.polygon[(x+1)%s.polygon.length];u+=p.x*m.y-m.x*p.y}h=u>0;const d=[];for(let x=0;x<s.polygon.length;x++){const p=s.polygon[x],m=s.polygon[(x+1)%s.polygon.length],_=m.x-p.x,y=m.y-p.y,M=Math.hypot(_,y);let C=0,w=0;M>1e-6&&(h?(C=y/M,w=-_/M):(C=-y/M,w=_/M)),d.push(new it(C,w))}const f=[];for(let x=0;x<s.polygon.length;x++){const p=s.polygon[x],m=s.polygon[(x+1)%s.polygon.length],_=d[x];f.push(gx(p,m,_,s,this.appContext.state.importedPolygons))}const g=[];return s.structuralBays&&s.structuralBays.forEach(x=>{g.push(xx(x,s.polygon))}),{boundary:r,hasScaffold:!0,skeleton:o,ribs:a,circles:l,bays:c,planarGraphVertices:s.planarGraph?s.planarGraph.vertices.map(x=>[x.x,x.y,0]):null,planarGraphEdges:s.planarGraph?s.planarGraph.edges.map(x=>[x[0],x[1]]):null,segmentContexts:f,cellIsCorner:g,boundaryNormals:d.map(x=>[x.x,x.y,0])}});return this.appContext.state.activePolygonId=e,new Promise((s,r)=>{this.exportResolve=o=>{try{if(typeof document<"u"){const a=new Blob([o],{type:"application/octet-stream"}),l=document.createElement("a");l.href=URL.createObjectURL(a),l.download=t,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(l.href)}console.log(`[RhinoManager] Exported ${o.length} bytes to ${t}`),s(o)}catch(a){r(a)}finally{this.exportResolve=null,this.rejectCallback=null}},this.rejectCallback=o=>{this.exportResolve=null,this.rejectCallback=null,r(o)},this.worker.postMessage({type:"export-scene",polygons:n,numFloors:this.appContext.state.numFloors,floorHeight:this.appContext.state.floorHeight,groundFloorHeightFactor:this.appContext.state.groundFloorHeightFactor,show3DColumns:this.appContext.state.show3DColumns,show3DBeams:this.appContext.state.show3DBeams,showFloorSlabs:this.appContext.state.showFloorSlabs,showBalconies:this.appContext.state.showBalconies,showBriseSoleil:this.appContext.state.showBriseSoleil,showVaultedRoofs:this.appContext.state.showVaultedRoofs,show3DCells:this.appContext.state.show3DCells,columnRadius:this.appContext.state.columnRadius,beamWidth:this.appContext.state.beamWidth,beamDepth:this.appContext.state.beamDepth,slabThickness:this.appContext.state.slabThickness,balconyOffset:this.appContext.state.balconyOffset,balconyThickness:this.appContext.state.balconyThickness,louverWidth:this.appContext.state.louverWidth,louverDepth:this.appContext.state.louverDepth,louverSpacing:this.appContext.state.louverSpacing,vaultHeight:this.appContext.state.vaultHeight})})}}function gx(i,t,e,n,s){const r=i.add(t).scale(.5),o=new it(r.x+e.x*.1,r.y+e.y*.1),a=e;let l=1/0,c="open_space";return s.forEach(h=>{const u=h.id===n.id;for(let d=0;d<h.polygon.length;d++){const f=h.polygon[d],g=h.polygon[(d+1)%h.polygon.length];if(u){const p=f.dist(i),m=g.dist(t),_=f.dist(t),y=g.dist(i);if(p<1e-4&&m<1e-4||_<1e-4&&y<1e-4)continue}const x=wl(o,a,f,g);x&&x.s<l&&(l=x.s,c=u?"courtyard":"other_building")}}),l<.5?"touching":l<25?c:"open_space"}function _x(i,t){const e=t.length;if(e<3)return!1;const n=t[(i-1+e)%e],s=t[i],r=t[(i+1)%e],o=s.x-n.x,a=s.y-n.y,l=Math.hypot(o,a),c=r.x-s.x,h=r.y-s.y,u=Math.hypot(c,h);return l<1e-6||u<1e-6?!1:(o*c+a*h)/(l*u)<.98}function xx(i,t){const e=t.length;for(const n of i)for(let s=0;s<e;s++){const r=t[s];if(Math.hypot(n.x-r.x,n.y-r.y)<.1&&_x(s,t))return!0}return!1}class vx{constructor(t=.001,e=new Map){this.vertices=[],this.originalVertices=[],this.edges=[],this.vertexTolerance=t,this.vertexOverrides=e}getOverride(t){for(const[e,n]of this.vertexOverrides.entries()){const s=e.split(","),r=parseFloat(s[0]),o=parseFloat(s[1]);if(Math.hypot(t.x-r,t.y-o)<.1)return n}return null}addVertex(t){const e=t.origX!==void 0&&t.origY!==void 0?new it(t.origX,t.origY):t,s=this.getOverride(e)||t,r=Math.max(this.vertexTolerance,.02);for(let o=0;o<this.vertices.length;o++)if(this.vertices[o].dist(s)<r)return o;return this.vertices.push(new it(s.x,s.y)),this.originalVertices.push(new it(e.x,e.y)),this.vertices.length-1}addEdge(t,e,n="unknown"){const s=this.addVertex(t),r=this.addVertex(e);if(s===r)return;this.edges.some(a=>a[0]===s&&a[1]===r||a[0]===r&&a[1]===s)||this.edges.push([s,r,n])}subdivideEdges(){let t=!0,e=0;const n=20;for(;t&&e<n;){t=!1,e++;const s=[];for(const r of this.edges){const o=r[0],a=r[1],l=r[2],c=this.vertices[o],h=this.vertices[a],d=h.sub(c).length();if(d<this.vertexTolerance)continue;let f=-1;for(let g=0;g<this.vertices.length;g++){if(g===o||g===a)continue;const x=this.vertices[g],p=zn(x,c,h);if(x.dist(p)<this.vertexTolerance){const y=c.dist(p)/d;if(y>1e-4&&y<1-1e-4){f=g;break}}}f!==-1?(s.push([o,f,l]),s.push([f,a,l]),t=!0):s.push([o,a,l])}this.edges=[];for(const r of s){const o=r[0],a=r[1],l=r[2];!this.edges.some(h=>h[0]===o&&h[1]===a||h[0]===a&&h[1]===o)&&o!==a&&this.edges.push([o,a,l])}}}extractFaces(){this.subdivideEdges();const t=this.vertices.length,e=Array.from({length:t},()=>[]);for(const[o,a]of this.edges)e[o].push(a),e[a].push(o);const n=e.map((o,a)=>{const l=this.vertices[a];return o.map(c=>{const h=this.vertices[c],u=Math.atan2(h.y-l.y,h.x-l.x);return{v:c,angle:u}}).sort((c,h)=>c.angle-h.angle).map(c=>c.v)}),s=new Set,r=[];for(let o=0;o<t;o++)for(const a of n[o]){const l=`${o},${a}`;if(s.has(l))continue;const c=[];let h=a,u=o,d=!1;for(;!s.has(`${u},${h}`);){c.push(h),s.add(`${u},${h}`);const f=n[h],g=f.indexOf(u);if(g===-1)break;const x=f[(g-1+f.length)%f.length];if(u=h,h=x,h===a&&u===o){d=!0;break}}if(d&&c.length>=3){let f=0;const g=c.map(x=>this.vertices[x]);for(let x=0;x<g.length;x++){const p=g[x],m=g[(x+1)%g.length];f+=p.x*m.y-m.x*p.y}if(f=.5*f,f>1e-4){let x=0;const p=new Set;for(let m=0;m<c.length;m++){const _=c[m],y=c[(m+1)%c.length],M=this.edges.find(C=>C[0]===_&&C[1]===y||C[0]===y&&C[1]===_);if(M){const C=M[2];C==="boundary"?x++:C&&C.startsWith("rib_")&&p.add(C)}}x>0&&p.size>=2&&r.push(g)}}}return r}}const Wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yx=new Js(-1,1,1,-1,0,1);class Mx extends se{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const Sx=new Mx;class Tl{constructor(t){this._mesh=new pt(Sx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,yx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ex extends ys{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Oi.clone(t.uniforms),this.material=new Qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Tl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class uh extends ys{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class bx extends ys{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ut);this._width=n.width,this._height=n.height,e=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ex(Wr),this.copyPass.material.blending=$e,this.timer=new kf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}uh!==void 0&&(o instanceof uh?n=!0:o instanceof bx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Tx extends ys{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Jt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}class Ax{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=t-d,x=e-f;let p,m;g>x?(p=1,m=0):(p=0,m=1);const _=g-p+h,y=x-m+h,M=g-1+2*h,C=x-1+2*h,w=l&255,P=c&255,S=this.perm[w+this.perm[P]]%12,b=this.perm[w+p+this.perm[P+m]]%12,I=this.perm[w+1+this.perm[P+1]]%12;let T=.5-g*g-x*x;T<0?n=0:(T*=T,n=T*T*this._dot(this.grad3[S],g,x));let L=.5-_*_-y*y;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[b],_,y));let B=.5-M*M-C*C;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[I],M,C)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,x=h-g,p=u-g,m=d-g,_=t-x,y=e-p,M=n-m;let C,w,P,S,b,I;_>=y?y>=M?(C=1,w=0,P=0,S=1,b=1,I=0):_>=M?(C=1,w=0,P=0,S=1,b=0,I=1):(C=0,w=0,P=1,S=1,b=0,I=1):y<M?(C=0,w=0,P=1,S=0,b=1,I=1):_<M?(C=0,w=1,P=0,S=0,b=1,I=1):(C=0,w=1,P=0,S=1,b=1,I=0);const T=_-C+f,L=y-w+f,B=M-P+f,z=_-S+2*f,N=y-b+2*f,F=M-I+2*f,O=_-1+3*f,H=y-1+3*f,G=M-1+3*f,X=h&255,K=u&255,st=d&255,xt=this.perm[X+this.perm[K+this.perm[st]]]%12,dt=this.perm[X+C+this.perm[K+w+this.perm[st+P]]]%12,Et=this.perm[X+S+this.perm[K+b+this.perm[st+I]]]%12,j=this.perm[X+1+this.perm[K+1+this.perm[st+1]]]%12;let ct=.6-_*_-y*y-M*M;ct<0?s=0:(ct*=ct,s=ct*ct*this._dot3(this.grad3[xt],_,y,M));let nt=.6-T*T-L*L-B*B;nt<0?r=0:(nt*=nt,r=nt*nt*this._dot3(this.grad3[dt],T,L,B));let wt=.6-z*z-N*N-F*F;wt<0?o=0:(wt*=wt,o=wt*wt*this._dot3(this.grad3[Et],z,N,F));let Dt=.6-O*O-H*H-G*G;return Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this._dot3(this.grad3[j],O,H,G)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const x=(t+e+n+s)*l,p=Math.floor(t+x),m=Math.floor(e+x),_=Math.floor(n+x),y=Math.floor(s+x),M=(p+m+_+y)*c,C=p-M,w=m-M,P=_-M,S=y-M,b=t-C,I=e-w,T=n-P,L=s-S,B=b>I?32:0,z=b>T?16:0,N=I>T?8:0,F=b>L?4:0,O=I>L?2:0,H=T>L?1:0,G=B+z+N+F+O+H,X=o[G][0]>=3?1:0,K=o[G][1]>=3?1:0,st=o[G][2]>=3?1:0,xt=o[G][3]>=3?1:0,dt=o[G][0]>=2?1:0,Et=o[G][1]>=2?1:0,j=o[G][2]>=2?1:0,ct=o[G][3]>=2?1:0,nt=o[G][0]>=1?1:0,wt=o[G][1]>=1?1:0,Dt=o[G][2]>=1?1:0,At=o[G][3]>=1?1:0,ot=b-X+c,Mt=I-K+c,J=T-st+c,at=L-xt+c,Q=b-dt+2*c,vt=I-Et+2*c,ft=T-j+2*c,zt=L-ct+2*c,U=b-nt+3*c,Wt=I-wt+3*c,Lt=T-Dt+3*c,Xt=L-At+3*c,mt=b-1+4*c,le=I-1+4*c,R=T-1+4*c,E=L-1+4*c,W=p&255,tt=m&255,lt=_&255,gt=y&255,St=a[W+a[tt+a[lt+a[gt]]]]%32,$=a[W+X+a[tt+K+a[lt+st+a[gt+xt]]]]%32,rt=a[W+dt+a[tt+Et+a[lt+j+a[gt+ct]]]]%32,Ct=a[W+nt+a[tt+wt+a[lt+Dt+a[gt+At]]]]%32,Ut=a[W+1+a[tt+1+a[lt+1+a[gt+1]]]]%32;let yt=.6-b*b-I*I-T*T-L*L;yt<0?h=0:(yt*=yt,h=yt*yt*this._dot4(r[St],b,I,T,L));let _t=.6-ot*ot-Mt*Mt-J*J-at*at;_t<0?u=0:(_t*=_t,u=_t*_t*this._dot4(r[$],ot,Mt,J,at));let Yt=.6-Q*Q-vt*vt-ft*ft-zt*zt;Yt<0?d=0:(Yt*=Yt,d=Yt*Yt*this._dot4(r[rt],Q,vt,ft,zt));let qt=.6-U*U-Wt*Wt-Lt*Lt-Xt*Xt;qt<0?f=0:(qt*=qt,f=qt*qt*this._dot4(r[Ct],U,Wt,Lt,Xt));let ie=.6-mt*mt-le*le-R*R-E*E;return ie<0?g=0:(ie*=ie,g=ie*ie*this._dot4(r[Ut],mt,le,R,E)),27*(h+u+d+f+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}}const Dr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ut},cameraProjectionMatrix:{value:new ge},cameraInverseProjectionMatrix:{value:new ge},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		#ifdef USE_REVERSED_DEPTH_BUFFER

			const float depthThreshold = 0.0;

		#else

			const float depthThreshold = 1.0;

		#endif

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == depthThreshold ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Lr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Nr={uniforms:{tDiffuse:{value:null},resolution:{value:new ut}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class yi extends ys{constructor(t,e,n=512,s=512,r=32){super(),this.width=n,this.height=s,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const o=new Gi;o.format=Mi,o.type=ms,this.normalRenderTarget=new pn(this.width,this.height,{minFilter:ke,magFilter:ke,type:vn,depthTexture:o}),this.ssaoRenderTarget=new pn(this.width,this.height,{type:vn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Qe({defines:Object.assign({},Dr.defines),uniforms:Oi.clone(Dr.uniforms),vertexShader:Dr.vertexShader,fragmentShader:Dr.fragmentShader,blending:$e}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Tf,this.normalMaterial.blending=$e,this.blurMaterial=new Qe({defines:Object.assign({},Nr.defines),uniforms:Oi.clone(Nr.uniforms),vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Qe({defines:Object.assign({},Lr.defines),uniforms:Oi.clone(Lr.uniforms),vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader,blending:$e}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Qe({uniforms:Oi.clone(Wr.uniforms),vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:vh,blendDst:ta,blendEquation:ti,blendSrcAlpha:xh,blendDstAlpha:ta,blendEquationAlpha:ti}),this._fsQuad=new Tl(null),this._originalClearColor=new Jt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(t,e,n){switch(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case yi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Depth:this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$e,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=_h,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new D;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=Ch.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}_generateRandomKernelRotations(){const n=new Ax,s=4*4,r=new Float32Array(s);for(let o=0;o<s;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=n.noise3d(a,l,c)}this.noiseTexture=new Nh(r,4,4,ll,Pn),this.noiseTexture.wrapS=Gs,this.noiseTexture.wrapT=Gs,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}}yi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Ur={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Px extends ys{constructor(){super(),this.isOutputPass=!0,this.uniforms=Oi.clone(Ur.uniforms),this.material=new Yh({name:Ur.name,uniforms:this.uniforms,vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader}),this._fsQuad=new Tl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ja?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===el?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===il?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const v={importedPolygons:[],activePolygonId:"default",activePreset:"tree",samplesPerEdge:25,precision:1e-5,showSkeleton:!0,simplifySkeleton:!0,mergeThreshold:2,pruneBranches:!0,showRibs:!0,ribSpacing:10,showBays:!0,editBaysMode:!0,draggedGraphVertexIdx:-1,draggedGraphVertexOrig:null,draggedGraphEdgeIdx:-1,dragStartMousePos:null,hoverCircle:!1,showGovernors:!1,isDrawing:!1,customVertices:[],draggedVertexIdx:-1,selectedVertexType:null,selectedVertexIdx:-1,selectedVertexOrig:null,hoveredMedialPoint:null,computeTime:0,camera:{zoom:1},mouseWorldPos:null,numFloors:3,floorHeight:4,show3DColumns:!0,show3DBeams:!0,showFloorSlabs:!0,showBalconies:!0,showBriseSoleil:!0,showVaultedRoofs:!0,show3DCells:!0,columnRadius:.25,beamWidth:.3,beamDepth:.5,slabThickness:.2,balconyOffset:1.5,balconyThickness:.15,louverWidth:.05,louverDepth:.2,louverSpacing:1,showHoverLabels:!0,groundFloorHeightFactor:2,ssaoEnabled:!0,ssaoRadius:2,ssaoMinDistance:.1,ssaoMaxDistance:8,ssaoIntensity:2,ambientIntensity:.75,dirLight1Intensity:.4,dirLight2Intensity:.2,showGroundPlane:!0,showGridHelper:!0};Object.defineProperty(v,"polygon",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.polygon:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t?t.polygon=i:(v.importedPolygons=[{id:"default",polygon:i,hasScaffold:!0,planarGraph:null,structuralBays:[],selectedBayIndices:[],bayEdits:[],graphVertexOverrides:new Map,skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}}],v.activePolygonId="default")}});Object.defineProperty(v,"planarGraph",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.planarGraph:null},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.planarGraph=i)}});Object.defineProperty(v,"structuralBays",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.structuralBays:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.structuralBays=i)}});Object.defineProperty(v,"skeletonData",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.skeletonData=i)}});Object.defineProperty(v,"selectedBayIndices",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.selectedBayIndices:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.selectedBayIndices=i)}});Object.defineProperty(v,"bayEdits",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.bayEdits:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.bayEdits=i)}});Object.defineProperty(v,"graphVertexOverrides",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.graphVertexOverrides:new Map},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.graphVertexOverrides=i)}});const An=document.getElementById("polygon-canvas"),co=document.getElementById("canvas-wrapper");let Un,en,ii,De,Ae,Fe,kn,ae,Bi,Be,cs,$t,Ei,eo,ks,Vs,bn,On,ze;const Za={state:v,rhinoGroup:null,setPolygonsFrom3dm:i=>{v.importedPolygons=i.map((n,s)=>{const r=n.map(o=>new it(o[0],o[1]));return{id:`rhino-poly-${s}-${Date.now()}`,polygon:r,hasScaffold:!1,planarGraph:null,structuralBays:[],selectedBayIndices:[],bayEdits:[],graphVertexOverrides:new Map,skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}}}),v.activePreset="custom",document.querySelectorAll(".preset-card").forEach(n=>n.classList.remove("active"));const e=document.getElementById("card-custom");e&&(e.style.display="flex",e.classList.add("active")),v.importedPolygons.length>0?v.activePolygonId=v.importedPolygons[0].id:v.activePolygonId=null,Ue(),ho()},acceptedRibsCache:null},Cx=new Qn(new D(0,0,1),0),zi=new Zh,ri=new ut;function Rx(){const i=co.getBoundingClientRect(),t=Math.max(800,i.width-40),e=Math.max(600,i.height-40);Un=new B_({canvas:An,antialias:!0,alpha:!0}),Un.setPixelRatio(Math.min(window.devicePixelRatio,2)),Un.setSize(t,e),Un.setClearColor(16777215,1),Un.shadowMap.enabled=!0,en=new Cd,en.background=new Jt(16777215),ii=new xn(45,t/e,10,4e3),ii.position.set(0,-600,600),ii.up.set(0,0,1);const n=t/e;De=new Js(-500*n,500*n,500,-500,10,4e3),De.position.set(0,0,1e3),De.up.set(0,1,0),Ae=ii,Fe=new k_(Ae,Un.domElement),Fe.enableDamping=!0,Fe.dampingFactor=.05,Fe.maxPolarAngle=Math.PI/2-.01,Fe.minDistance=50,Fe.maxDistance=3e3,eo=new Uf(16777215,v.ambientIntensity),en.add(eo),ks=new Ac(16777215,v.dirLight1Intensity),ks.position.set(1e3,800,1500),en.add(ks),Vs=new Ac(16777215,v.dirLight2Intensity),Vs.position.set(-1e3,-800,1e3),en.add(Vs),bn=new Gf(2e3,200,14870768,15857145),bn.rotation.x=Math.PI/2,bn.position.z=-.01,bn.visible=v.showGridHelper,en.add(bn);const s=new xs(2e3,2e3),r=new Jn({color:16777215,roughness:.9,metalness:0});On=new pt(s,r),On.position.z=-.02,On.visible=v.showGroundPlane,en.add(On),ae=new Fi,en.add(ae),Bi=new Fi,en.add(Bi),Za.rhinoGroup=Bi,Be=new Fi,en.add(Be),cs=new mx(Za),window.rhinoManager=cs,Ei=new Le,en.add(Ei),kn=new wx(Un);const o=new Tx(en,Ae);kn.addPass(o),ze=new yi(en,Ae,t,e),ze.ssaoMaterial.uniforms.intensity={value:v.ssaoIntensity},ze.ssaoMaterial.fragmentShader=ze.ssaoMaterial.fragmentShader.replace("uniform float maxDistance;",`uniform float maxDistance;
uniform float intensity;`).replace("gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );","gl_FragColor = vec4( vec3( pow( 1.0 - occlusion, intensity ) ), 1.0 );"),ze.kernelRadius=v.ssaoRadius,ze.minDistance=v.ssaoMinDistance,ze.maxDistance=v.ssaoMaxDistance,ze.enabled=v.ssaoEnabled,kn.addPass(ze);const a=new Px;kn.addPass(a),$t=new Q_(Ae,Un.domElement),$t.setMode("translate"),$t.showZ=!1,en.add($t.getHelper()),$t.addEventListener("dragging-changed",l=>{Fe.enabled=!l.value;const c=document.getElementById("status-dot"),h=document.getElementById("status-text");l.value?(c&&c.classList.add("loading"),h&&(h.innerText="Moving vertex via manipulator...")):(c&&c.classList.remove("loading"),h&&(h.innerText=`Computed ${v.skeletonData.regularPoints.length+v.skeletonData.junctionPoints.length} medial points successfully.`))}),$t.addEventListener("change",()=>{if($t.dragging&&$t.object){const l=$t.object.position;v.selectedVertexType==="polygon"&&v.selectedVertexIdx!==void 0&&v.selectedVertexIdx!==-1?(v.polygon[v.selectedVertexIdx]=new it(l.x,l.y),Ue()):v.selectedVertexType==="graph"&&v.selectedVertexOrig&&(v.graphVertexOverrides.set(`${v.selectedVertexOrig.x.toFixed(4)},${v.selectedVertexOrig.y.toFixed(4)}`,new it(l.x,l.y)),Ue())}}),window.addEventListener("resize",Dx),du()}function Ka(i){const t=new D(i.x,i.y,0);t.project(Ae);const e=An.getBoundingClientRect();return new it((t.x*.5+.5)*e.width,(-(t.y*.5)+.5)*e.height)}function Ix(){if(v.polygon.length===0)return new it(0,0);let i=1/0,t=-1/0,e=1/0,n=-1/0;for(const s of v.polygon)i=Math.min(i,s.x),t=Math.max(t,s.x),e=Math.min(e,s.y),n=Math.max(n,s.y);return new it((i+t)/2,(e+n)/2)}function no(){const i=document.getElementById("camera-info");if(i){const t=Ae.position.distanceTo(Fe.target),e=Ae.isOrthographicCamera?`${(1e3/Ae.zoom).toFixed(0)}m`:`${(1e3/t).toFixed(2)}x`;i.innerText=`View Scale: ${e}`}}function dh(i){const t=document.getElementById("btn-view-perspective"),e=document.getElementById("btn-view-top");if(i==="perspective")Ae=ii,Fe.object=Ae,Fe.enableRotate=!0,t.classList.add("active"),e.classList.remove("active");else{Ae=De;const n=Ix();Fe.target.set(n.x,n.y,0),De.position.set(n.x,n.y,1e3),De.up.set(0,1,0),Fe.object=Ae,Fe.enableRotate=!1,t.classList.remove("active"),e.classList.add("active")}Fe.update(),no(),$t&&($t.camera=Ae),au()}function au(){kn&&kn.passes.forEach(i=>{i.camera&&(i.camera=Ae)})}function ho(){if(v.polygon.length===0){Fe.target.set(0,0,0),ii.position.set(0,-600,600),De.position.set(0,0,1e3),De.zoom=1,De.updateProjectionMatrix(),Fe.update(),no(),au();return}let i=1/0,t=-1/0,e=1/0,n=-1/0;for(const g of v.polygon)i=Math.min(i,g.x),t=Math.max(t,g.x),e=Math.min(e,g.y),n=Math.max(n,g.y);const s=(i+t)/2,r=(e+n)/2,o=t-i||1,a=n-e||1,l=Math.max(o,a);Fe.target.set(s,r,0),ii.position.set(s,r-l*1.3,l*1.3);const c=co.getBoundingClientRect(),h=Math.max(800,c.width-40),u=Math.max(600,c.height-40),d=h/u,f=l*1.45;De.left=-f*d/2,De.right=f*d/2,De.top=f/2,De.bottom=-f/2,De.zoom=1,De.position.set(s,r,1e3),De.updateProjectionMatrix(),Fe.update(),no()}function Dx(){const i=co.getBoundingClientRect(),t=Math.max(800,i.width-40),e=Math.max(600,i.height-40);ii.aspect=t/e,ii.updateProjectionMatrix();const n=t/e,s=De.top-De.bottom;De.left=-s*n/2,De.right=s*n/2,De.updateProjectionMatrix(),Un.setSize(t,e),kn&&kn.setSize(t,e),no()}function lu(i){v.activePreset=i,v.importedPolygons=[],v.activePolygonId="default",v.graphVertexOverrides.clear(),v.bayEdits=[],v.selectedBayIndices=[],$t&&$t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null;const t=co.getBoundingClientRect(),e=Math.max(800,t.width-40),n=Math.max(600,t.height-40);i!=="custom"&&(v.polygon=Lx[i](e,n),v.isDrawing=!1,document.getElementById("btn-clear-custom").style.display="none",document.getElementById("drawing-indicator").style.display="none",document.getElementById("card-custom").style.display="none"),Ue(),ho()}const Lx={cross:(i,t)=>[new it(0-100*.1,0+100*.3),new it(0+100*.1,0+100*.3),new it(0+100*.1,0+100*.1),new it(0+100*.3,0+100*.1),new it(0+100*.3,0-100*.1),new it(0+100*.1,0-100*.1),new it(0+100*.1,0-100*.3),new it(0-100*.1,0-100*.3),new it(0-100*.1,0-100*.1),new it(0-100*.3,0-100*.1),new it(0-100*.3,0+100*.1),new it(0-100*.1,0+100*.1)],yshape:(i,t)=>[new it(0+100*.1,0-100*.4),new it(0+100*.1,0-100*.1),new it(0+100*.4,0+100*.4),new it(0+100*.2,0+100*.4),new it(0,0+100*.1),new it(0-100*.2,0+100*.4),new it(0-100*.4,0+100*.4),new it(0-100*.1,0-100*.1),new it(0-100*.1,0-100*.4)],sqdonut:(i,t)=>[new it(0-100*.01,0+100*.3),new it(0-100*.3,0+100*.3),new it(0-100*.3,0-100*.3),new it(0+100*.3,0-100*.3),new it(0+100*.3,0+100*.3),new it(0+100*.01,0+100*.3),new it(0+100*.01,0+100*.1),new it(0+100*.1,0+100*.1),new it(0+100*.1,0-100*.1),new it(0-100*.1,0-100*.1),new it(0-100*.1,0+100*.1),new it(0-100*.01,0+100*.1)],donut:(i,t)=>{const r=[];for(let l=0;l<=32;l++){const c=.05+(Math.PI*2-.1)*(l/32);r.push(new it(0+Math.cos(c)*100*.4,0-Math.sin(c)*100*.4))}for(let l=0;l<=32;l++){const c=Math.PI*2-.05-(Math.PI*2-.1)*(l/32);r.push(new it(0+Math.cos(c)*100*.2,0-Math.sin(c)*100*.2))}return r},pentagon:(i,t)=>[new it(0-100*.05,0+100*.4),new it(0-100*.45,0+100*.15),new it(0-100*.25,0-100*.4),new it(0+100*.35,0-100*.35),new it(0+100*.4,0+100*.1)],tree:(i,t)=>[new it(0+100*.1,0-100*.4),new it(0+100*.1,0-100*.1),new it(0+100*.4,0-100*.1),new it(0+100*.4,0+100*.05),new it(0+100*.1,0+100*.05),new it(0+100*.1,0+100*.2),new it(0+100*.3,0+100*.4),new it(0+100*.15,0+100*.4),new it(0,0+100*.25),new it(0-100*.15,0+100*.4),new it(0-100*.3,0+100*.4),new it(0-100*.1,0+100*.2),new it(0-100*.1,0+100*.05),new it(0-100*.4,0+100*.05),new it(0-100*.4,0-100*.1),new it(0-100*.1,0-100*.1),new it(0-100*.1,0-100*.4)]};function io(i){let t=0,e=0;return i.forEach(n=>{t+=n.x,e+=n.y}),new it(t/i.length,e/i.length)}function fh(i,t){for(let s=0;s<i.length;s++)if(ou(t,i[s]))return s;let e=1/0,n=-1;for(let s=0;s<i.length;s++){const o=io(i[s]).dist(t);o<e&&(e=o,n=s)}return n}function Nx(i,t){let e=i.map(n=>n.map(s=>new it(s.x,s.y)));for(const n of t)if(n.type==="delete"){const s=fh(e,n.point);s!==-1&&e.splice(s,1)}else if(n.type==="merge"){const s=[];for(const r of n.points){const o=fh(e,r);o!==-1&&!s.includes(o)&&s.push(o)}if(s.length>=2){s.sort((a,l)=>l-a);const r=[];for(const a of s)r.push(e[a]),e.splice(a,1);const o=ux(r);if(o)e.push(o);else for(const a of r)e.push(a)}}return e}function Ux(i,t,e,n=.001){for(const s of e)for(let r=0;r<s.length;r++){const o=s[r],a=s[(r+1)%s.length],l=o.dist(i)<n&&a.dist(t)<n,c=o.dist(t)<n&&a.dist(i)<n;if(l||c)return!0}return!1}function Fx(i,t){const e=[];for(const l of i.edges){const c=l[0],h=l[1];if(l[2]==="boundary"){e.push(l);continue}const d=i.vertices[c],f=i.vertices[h];Ux(d,f,t,.02)&&e.push(l)}const n=new Set;for(const[l,c]of e)n.add(l),n.add(c);const s=[],r=[],o=new Map;for(let l=0;l<i.vertices.length;l++)n.has(l)&&(o.set(l,s.length),s.push(i.vertices[l]),r.push(i.originalVertices[l]));const a=e.map(l=>[o.get(l[0]),o.get(l[1]),l[2]]);i.vertices=s,i.originalVertices=r,i.edges=a}function Ue(){const i=v.activePolygonId,t=performance.now();for(const r of v.importedPolygons){if(!r.hasScaffold){r.skeletonData={regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]},r.planarGraph=null,r.structuralBays=[];continue}v.activePolygonId=r.id,Ox()}v.activePolygonId=i,v.computeTime=performance.now()-t;const e=document.getElementById("container-merge-slider");e&&(e.style.display=v.simplifySkeleton?"block":"none");const n=document.getElementById("container-ribs-slider");n&&(n.style.display=v.showRibs?"block":"none"),document.getElementById("stats-render-time").innerText=`Computation: ${v.computeTime.toFixed(1)}ms`;const s=v.importedPolygons.find(r=>r.id===v.activePolygonId);if(s&&s.hasScaffold){const r=s.skeletonData.regularPoints.length+s.skeletonData.junctionPoints.length,o=s.skeletonData.simplifiedSegments.length,a=s.skeletonData.simplifiedNodes.length,l=v.simplifySkeleton?`Simplified skeleton to ${a} merged nodes and ${o} straight branches.`:`Computed ${r} medial points successfully.`;document.getElementById("status-text").innerText=l}else document.getElementById("status-text").innerText="Select a curve in the viewport to apply the scaffold.";v.hoveredMedialPoint=null,pe()}function Ox(){if(v.polygon.length<3){v.skeletonData={regularPoints:[],junctionPoints:[]};return}for(const s of v.polygon){s.origX===void 0&&(s.origX=s.x,s.origY=s.y),s.x=s.origX,s.y=s.origY;let r=null;for(const[o,a]of v.graphVertexOverrides.entries()){const l=o.split(","),c=parseFloat(l[0]),h=parseFloat(l[1]);if(Math.hypot(s.origX-c,s.origY-h)<.1){r=a;break}}r&&(s.x=r.x,s.y=r.y)}const i=new px(v.polygon,{epsilon:v.activePreset!=="custom"?.5:v.precision,tangentEpsilon:v.precision*10}),t=i.computeStructuredSkeleton(v.samplesPerEdge),{segments:e,nodes:n}=i.simplifySkeleton(t.regularPoints,t.junctionPoints,v.mergeThreshold);for(const s of n){s.origX=s.x,s.origY=s.y;let r=null;for(const[o,a]of v.graphVertexOverrides.entries()){const l=o.split(","),c=parseFloat(l[0]),h=parseFloat(l[1]);if(Math.hypot(s.origX-c,s.origY-h)<.1){r=a;break}}r&&(s.x=r.x,s.y=r.y)}for(const s of e){const r=s.start,o=s.end,a=o.sub(r),l=a.length(),c=Math.max(1,Math.round(l/v.ribSpacing)),h=new it(r.origX,r.origY),d=new it(o.origX,o.origY).sub(h);s.divisionPoints=[];for(let f=1;f<c;f++){const g=f/c,x=r.add(a.scale(g)),p=h.add(d.scale(g));x.origX=p.x,x.origY=p.y;let m=null;for(const[_,y]of v.graphVertexOverrides.entries()){const M=_.split(","),C=parseFloat(M[0]),w=parseFloat(M[1]);if(Math.hypot(x.origX-C,x.origY-w)<.1){m=y;break}}m&&(x.x=m.x,x.y=m.y),s.divisionPoints.push(x)}}if(t.simplifiedSegments=e,t.simplifiedNodes=n,v.skeletonData=t,v.polygon.length>=3){const s=new vx(.001,v.graphVertexOverrides);v.planarGraph=s;const r=v.showSkeleton&&v.showRibs&&v.simplifySkeleton?cu():[],o=[],a=[];for(const h of r)a.push(h.target);const l=v.pruneBranches?t.simplifiedSegments.filter(h=>!(h.start.isEndPoint||h.end.isEndPoint)):t.simplifiedSegments;for(const h of t.simplifiedNodes)h.isEndPoint&&a.push(h);for(let h=0;h<v.polygon.length;h++){const u=v.polygon[h],d=v.polygon[(h+1)%v.polygon.length];o.push(u);const f=[];for(const g of a){const x=zn(g,u,d);if(g.dist(x)<.001){const p=d.sub(u).length(),m=u.dist(x),_=d.dist(x);m>.001&&_>.001&&m+_<p+.001&&(f.some(y=>y.point.dist(g)<.001)||f.push({point:g,dist:m}))}}f.sort((g,x)=>g.dist-x.dist);for(const g of f)o.push(g.point)}for(let h=0;h<o.length;h++)s.addEdge(o[h],o[(h+1)%o.length],"boundary");if(v.showSkeleton)if(v.simplifySkeleton)for(const h of l){const u=[h.start,...h.divisionPoints||[],h.end];for(let d=0;d<u.length-1;d++)s.addEdge(u[d],u[d+1],"skeleton")}else{const h=v.samplesPerEdge,u=t.regularPoints;for(let d=0;d<v.polygon.length;d++)for(let f=0;f<h-1;f++){const g=d*h+f,x=d*h+(f+1);u[g]&&u[x]&&s.addEdge(u[g],u[x],"skeleton")}}for(let h=0;h<r.length;h++){const u=r[h];s.addEdge(u.source,u.target,`rib_${h}`)}const c=s.extractFaces();v.structuralBays=Nx(c,v.bayEdits),Fx(s,v.structuralBays)}else v.structuralBays=[]}const Bx=(i,t,e)=>{const s=t.x-i.x,r=t.y-i.y,o=new it(i.x+s*.001,i.y+r*.001),a=new it(t.x-s*.001,t.y-r*.001),l=(h,u,d)=>(d.y-h.y)*(u.x-h.x)>(u.y-h.y)*(d.x-h.x),c=(h,u,d,f)=>l(h,d,f)!==l(u,d,f)&&l(h,u,d)!==l(h,u,f);for(let h=0;h<e.length;h++){const u=e[h],d=e[(h+1)%e.length];if(c(o,a,u,d))return!0}return!1};function cu(){if(!v.showRibs||v.polygon.length<3||!v.skeletonData||!v.skeletonData.simplifiedSegments)return[];const i=v.pruneBranches?v.skeletonData.simplifiedSegments.filter(o=>!(o.start.isEndPoint||o.end.isEndPoint)):v.skeletonData.simplifiedSegments,t=[];for(const o of i)if(o.divisionPoints)for(const a of o.divisionPoints){const l=new it(a.origX,a.origY),c=[];for(let g=0;g<v.polygon.length;g++){const x=v.polygon[g],p=v.polygon[(g+1)%v.polygon.length];let m=zn(a,x,p);m.dist(x)<.05?m=x:m.dist(p)<.05&&(m=p);let _=zn(l,x,p);_.dist(x)<.05?_=x:_.dist(p)<.05&&(_=p);const y=a.dist(m);c.push({point:m,pointOrig:_,dist:y,vector:m.sub(a).normalize()})}c.sort((g,x)=>g.dist-x.dist);const h=c[0],u=new it(h.point.x,h.point.y);u.origX=h.pointOrig.x,u.origY=h.pointOrig.y;let d=null,f=null;for(let g=1;g<c.length;g++){const x=c[g];if(h.vector.dot(x.vector)<.5){d=x,f=new it(d.point.x,d.point.y),f.origX=d.pointOrig.x,f.origY=d.pointOrig.y;break}}t.push({source:a,target:u,priority:1}),d&&t.push({source:a,target:f,priority:2})}const e=new Set;for(const o of i)o.start.isEndPoint||e.add(o.start),o.end.isEndPoint||e.add(o.end);for(const o of e){const a=new it(o.origX,o.origY),l=[];for(let x=0;x<v.polygon.length;x++){const p=v.polygon[x],m=v.polygon[(x+1)%v.polygon.length];let _=zn(o,p,m);_.dist(p)<.05?_=p:_.dist(m)<.05&&(_=m);let y=zn(a,p,m);y.dist(p)<.05?y=p:y.dist(m)<.05&&(y=m);const M=o.dist(_);l.push({point:_,pointOrig:y,dist:M,vector:_.sub(o).normalize()})}l.sort((x,p)=>x.dist-p.dist);const c=l[0],h=new it(c.point.x,c.point.y);h.origX=c.pointOrig.x,h.origY=c.pointOrig.y;let u=null,d=null,f=null,g=null;for(let x=1;x<l.length;x++){const p=l[x];if(c.vector.dot(p.vector)<.5){u=p,d=new it(u.point.x,u.point.y),d.origX=u.pointOrig.x,d.origY=u.pointOrig.y;break}}if(u)for(let x=1;x<l.length;x++){const p=l[x];if(p!==u&&c.vector.dot(p.vector)<.5&&u.vector.dot(p.vector)<.5){f=p,g=new it(f.point.x,f.point.y),g.origX=f.pointOrig.x,g.origY=f.pointOrig.y;break}}t.push({source:o,target:h,priority:1}),u&&t.push({source:o,target:d,priority:2}),f&&t.push({source:o,target:g,priority:3})}const n=t.map(o=>({...o,length:o.source.dist(o.target)})).sort((o,a)=>o.priority!==a.priority?o.priority-a.priority:o.length-a.length),s=(o,a)=>{if(o.source.dist(a.source)<.001||o.target.dist(a.target)<.001||o.source.dist(a.target)<.001||o.target.dist(a.source)<.001)return!1;const l=(c,h,u)=>(u.y-c.y)*(h.x-c.x)>(h.y-c.y)*(u.x-c.x);return l(o.source,a.source,a.target)!==l(o.target,a.source,a.target)&&l(o.source,o.target,a.source)!==l(o.source,o.target,a.target)},r=[];for(const o of n){if(Bx(o.source,o.target,v.polygon))continue;let a=!1;for(const l of r)if(s(o,l)){a=!0;break}a||r.push(o)}return r}function pe(){if(!ae)return;const i=v.activePolygonId,t=v.importedPolygons.find(n=>n.id===v.activePolygonId);if(t&&v.selectedVertexType==="graph"&&v.selectedVertexOrig&&t.planarGraph){const n=v.selectedVertexOrig;let s=-1,r=1/0;for(let o=0;o<t.planarGraph.vertices.length;o++){const a=t.planarGraph.originalVertices[o];if(a){const l=Math.hypot(n.x-a.x,n.y-a.y);l<.1&&l<r&&(r=l,s=o)}}s!==-1?v.selectedVertexIdx=s:($t&&$t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null)}for(;ae.children.length>0;){const n=ae.children[0];ae.remove(n),n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(s=>s.dispose()):n.material.dispose())}if(v.isDrawing&&v.customVertices.length>0){const n=v.customVertices.map(r=>new D(r.x,r.y,.025));if(v.mouseWorldPos&&(n.push(new D(v.mouseWorldPos.x,v.mouseWorldPos.y,.025)),v.customVertices.length>=3&&n.push(new D(v.customVertices[0].x,v.customVertices[0].y,.025))),n.length>=2){const r=new se().setFromPoints(n),o=new ln({color:4937059,linewidth:1.5}),a=new Se(r,o);a.raycast=function(){},ae.add(a)}const s=new an(.7,32);for(let r=0;r<v.customVertices.length;r++){const o=v.customVertices[r],a=r===0&&v.customVertices.length>=3;let l=!1;a&&v.mouseWorldPos&&(l=Math.sqrt((o.x-v.mouseWorldPos.x)**2+(o.y-v.mouseWorldPos.y)**2)<2);const c=new Ie({color:l?1096065:a?3621201:4937059}),h=new pt(s,c);h.position.set(o.x,o.y,.03),h.raycast=function(){},ae.add(h)}}v.importedPolygons.forEach(n=>{v.activePolygonId=n.id;const s=n.id===i;if(v.polygon.length>=3){const r=new En;r.moveTo(v.polygon[0].x,v.polygon[0].y);for(let f=1;f<v.polygon.length;f++)r.lineTo(v.polygon[f].x,v.polygon[f].y);r.closePath();const o=new Zs(r),a=new Ie({color:n.hasScaffold?s?5195493:3621201:10265519,transparent:!0,opacity:n.hasScaffold?s?.08:.04:.015,side:Xe,depthWrite:!1}),l=new pt(o,a);l.position.z=.005,l.userData={isPolygonFace:!0,polygonId:n.id},ae.add(l);const c=v.polygon.map(f=>new D(f.x,f.y,.02));c.push(c[0]);const h=new se().setFromPoints(c),u=new ln({color:n.hasScaffold?s?5195493:3621201:10265519,linewidth:s?2.5:1.5}),d=new Se(h,u);d.userData={isPolygonLine:!0,polygonId:n.id},ae.add(d)}if(n.hasScaffold&&v.polygon.length>=3){if(v.showSkeleton){const r=v.skeletonData.regularPoints;if(v.simplifySkeleton){const a=v.pruneBranches?v.skeletonData.simplifiedSegments.filter(c=>!(c.start.isEndPoint||c.end.isEndPoint)):v.skeletonData.simplifiedSegments,l=new ln({color:3621201,linewidth:3.5});for(const c of a){const h=[new D(c.start.x,c.start.y,.035),new D(c.end.x,c.end.y,.035)],u=new se().setFromPoints(h),d=new Se(u,l);d.raycast=function(){},ae.add(d)}}else{const a=v.samplesPerEdge,l=new ln({color:7041664,transparent:!0,opacity:.65,linewidth:1.5});for(let u=0;u<v.polygon.length;u++){const d=[];for(let f=0;f<a;f++){const g=u*a+f;r[g]&&d.push(new D(r[g].x,r[g].y,.025))}if(d.length>=2){const f=new se().setFromPoints(d),g=new Se(f,l);g.raycast=function(){},ae.add(g)}}const c=new an(.12,16),h=new Ie({color:7041664});for(const u of r){const d=new pt(c,h);d.position.set(u.x,u.y,.03),d.raycast=function(){},ae.add(d)}}let o=v.simplifySkeleton?v.skeletonData.simplifiedNodes:v.skeletonData.junctionPoints;v.pruneBranches&&(o=o.filter(a=>!a.isEndPoint));for(const a of o){const l=a.isEndPoint?.3:.45,c=new an(l,32),h=new Ie({color:a.isEndPoint?4937059:3621201}),u=new pt(c,h);u.position.set(a.x,a.y,.035),u.raycast=function(){},ae.add(u);const d=[],f=32,g=l*1.65;for(let _=0;_<=f;_++){const y=_/f*Math.PI*2;d.push(new D(a.x+Math.cos(y)*g,a.y+Math.sin(y)*g,.035))}const x=new se().setFromPoints(d),p=new yc({color:a.isEndPoint?4937059:3621201,transparent:!0,opacity:.4,dashSize:.15,gapSize:.1}),m=new Se(x,p);m.computeLineDistances(),m.raycast=function(){},ae.add(m)}if(v.showRibs){const a=cu();s&&(Za.acceptedRibsCache=a);const l=new an(.15,16),c=new Ie({color:16777215}),h=new ln({color:4937059,transparent:!0,opacity:.65}),u=new an(.2,16),d=new Ie({color:4937059});for(const f of a){const g=new pt(l,c);g.position.set(f.source.x,f.source.y,.038),g.raycast=function(){},ae.add(g);const x=[new D(f.source.x,f.source.y,.038),new D(f.target.x,f.target.y,.038)],p=new se().setFromPoints(x),m=new Se(p,h);m.raycast=function(){},ae.add(m);const _=new pt(u,d);_.position.set(f.target.x,f.target.y,.038),_.raycast=function(){},ae.add(_)}}}v.showBays&&v.structuralBays&&v.structuralBays.length>0&&v.structuralBays.forEach((r,o)=>{if(r.length>=3){const a=new En;a.moveTo(r[0].x,r[0].y);for(let m=1;m<r.length;m++)a.lineTo(r[m].x,r[m].y);a.closePath();const l=s&&v.selectedBayIndices.includes(o),c=l?new Jt("hsl(25, 95%, 55%)"):new Jt(`hsl(${o*137.5%360}, 45%, 60%)`),h=l?.45:.15,u=new Zs(a),d=new Ie({color:c,transparent:!0,opacity:h,side:Xe,depthWrite:!1}),f=new pt(u,d);f.position.z=.015,ae.add(f);const g=r.map(m=>new D(m.x,m.y,.018));g.push(g[0]);const x=new se().setFromPoints(g);let p;if(l){const m=new ln({color:15094016,linewidth:2.5});p=new Se(x,m)}else{const m=new yc({color:4937059,transparent:!0,opacity:.35,dashSize:.2,gapSize:.15});p=new Se(x,m),p.computeLineDistances()}ae.add(p)}})}if(s&&!v.isDrawing&&v.polygon.length>0)if(v.editBaysMode){if(v.showBays&&v.planarGraph){const r=new ln({color:5195493,linewidth:3.5,transparent:!0,opacity:.8});v.planarGraph.edges.forEach((c,h)=>{const u=c[0],d=c[1],f=v.planarGraph.vertices[u],g=v.planarGraph.vertices[d];if(f&&g){const x=[new D(f.x,f.y,.032),new D(g.x,g.y,.032)],p=new se().setFromPoints(x),m=new Se(p,r);m.userData={index:h,u,v:d,polygonId:n.id},ae.add(m)}});const o=new an(.7,32),a=new an(.25,16),l=new Ie({color:16777215});v.planarGraph.vertices.forEach((c,h)=>{const u=v.selectedVertexType==="graph"&&v.selectedVertexIdx===h,d=new Ie({color:u?1096065:5195493,transparent:!0,opacity:.95}),f=new pt(o,d);f.position.set(c.x,c.y,.035),f.userData={isGraphVertex:!0,index:h,polygonId:n.id},ae.add(f);const g=new pt(a,l);g.position.set(c.x,c.y,.039),ae.add(g)})}}else{const r=new an(1,32),o=new an(.3,16),a=new Ie({color:16777215});for(let l=0;l<v.polygon.length;l++){const c=v.polygon[l],h=v.selectedVertexType==="polygon"&&v.selectedVertexIdx===l,u=new Ie({color:h?1096065:3621201}),d=new pt(r,u);d.position.set(c.x,c.y,.03),d.userData={isHandle:!0,index:l,polygonId:n.id},ae.add(d);const f=new pt(o,a);f.position.set(c.x,c.y,.038),ae.add(f)}}}),v.activePolygonId=i;const e=v.importedPolygons.find(n=>n.id===v.activePolygonId);if(e&&(v.activePolygonId=e.id,v.hoverCircle&&v.hoveredMedialPoint&&v.polygon.length>=3)){const n=v.hoveredMedialPoint,s=n.radius,r=new Ml(s-.2,s+.2,64),o=new Ie({color:3621201,transparent:!0,opacity:.82,side:Xe}),a=new pt(r,o);a.position.set(n.x,n.y,.045),ae.add(a);const l=new an(s,64),c=new Ie({color:3621201,transparent:!0,opacity:.05,side:Xe,depthWrite:!1}),h=new pt(l,c);h.position.set(n.x,n.y,.04),ae.add(h);const u=new an(.6,16),d=new Ie({color:16777215}),f=new pt(u,d);if(f.position.set(n.x,n.y,.048),ae.add(f),v.showGovernors){const g=new ln({color:4937059,linewidth:1.5}),x=new an(.5,16),p=new Ie({color:4937059});for(let m=0;m<v.polygon.length;m++){const _=v.polygon[m],y=v.polygon[(m+1)%v.polygon.length],M=zn(n,_,y);if(Math.abs(n.dist(M)-s)<.2){const C=[new D(n.x,n.y,.046),new D(M.x,M.y,.046)],w=new se().setFromPoints(C),P=new Se(w,g);ae.add(P);const S=new pt(x,p);S.position.set(M.x,M.y,.046),ae.add(S)}}}}if(v.activePolygonId=i,$t&&$t.object)if(v.selectedVertexType==="polygon"&&v.selectedVertexIdx!==-1&&v.polygon[v.selectedVertexIdx]){const n=v.polygon[v.selectedVertexIdx];Ei.position.set(n.x,n.y,.03)}else if(v.selectedVertexType==="graph"&&v.selectedVertexIdx!==-1&&v.planarGraph&&v.planarGraph.vertices[v.selectedVertexIdx]){const n=v.planarGraph.vertices[v.selectedVertexIdx];Ei.position.set(n.x,n.y,.035)}else $t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null;Hx()}function zx(i,t,e,n,s){const r=i.add(t).scale(.5),o=new it(r.x+e.x*.1,r.y+e.y*.1),a=e;let l=1/0,c="open_space";return s.forEach(h=>{const u=h.id===n.id;for(let d=0;d<h.polygon.length;d++){const f=h.polygon[d],g=h.polygon[(d+1)%h.polygon.length];if(u){const p=f.dist(i),m=g.dist(t),_=f.dist(t),y=g.dist(i);if(p<1e-4&&m<1e-4||_<1e-4&&y<1e-4)continue}const x=wl(o,a,f,g);x&&x.s<l&&(l=x.s,c=u?"courtyard":"other_building")}}),l<.5?"touching":l<25?c:"open_space"}function hu(i,t){const e=t.length;if(e<3)return!1;const n=t[(i-1+e)%e],s=t[i],r=t[(i+1)%e],o=s.x-n.x,a=s.y-n.y,l=Math.hypot(o,a),c=r.x-s.x,h=r.y-s.y,u=Math.hypot(c,h);return l<1e-6||u<1e-6?!1:(o*c+a*h)/(l*u)<.98}function kx(i,t){const e=t.length;for(const n of i)for(let s=0;s<e;s++){const r=t[s];if(Math.hypot(n.x-r.x,n.y-r.y)<.1&&hu(s,t))return!0}return!1}function Qo(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=n*n+s*s;if(r<1e-9)return Math.hypot(i.x-t.x,i.y-t.y);let o=((i.x-t.x)*n+(i.y-t.y)*s)/r;o=Math.max(0,Math.min(1,o));const a=t.x+o*n,l=t.y+o*s;return Math.hypot(i.x-a,i.y-l)}function Fr(i,t,e,n){const s=e*n;if(i===0)return{bottom:0,top:s,height:s};{const r=s+(i-1)*e;return{bottom:r,top:r+e,height:e}}}function Vx(i,t,e,n,s,r){const o=s.map(l=>new it(l.x,l.y)),a=[];for(let l=0;l<s.length;l++)hu(l,s)&&a.push(l);if(a.length>=2){const l=a.length;let c=1;t>1&&(c=1-.9*(i/(t-1)));for(let h=0;h<l;h++){const u=a[h],d=a[(h+1)%l],f=[];let g=u;for(;g!==d;)f.push(g),g=(g+1)%s.length;f.push(d);const x=[0];let p=0;for(let m=0;m<f.length-1;m++){const _=s[f[m]],y=s[f[m+1]];p+=Math.hypot(y.x-_.x,y.y-_.y),x.push(p)}if(p>1e-5)for(let m=1;m<f.length-1;m++){const _=f[m],y=x[m]/p,M=4*c*y*(1-y),C=s.length,w=r[(_-1+C)%C],P=r[_],S=new it(w.x+P.x,w.y+P.y).normalize();o[_]=new it(s[_].x-M*S.x,s[_].y-M*S.y)}}}return o}function ph(i,t,e){return i.map(n=>{let s=-1,r=.1;for(let o=0;o<t.length;o++){const a=Math.hypot(n.x-t[o].x,n.y-t[o].y);a<r&&(r=a,s=o)}if(s!==-1){const o=e[s].x-t[s].x,a=e[s].y-t[s].y;return new it(n.x+o,n.y+a)}return new it(n.x,n.y)})}function mh(i,t,e){return i.map(n=>{let s=-1,r=.1;for(let o=0;o<t.length;o++){const a=Math.hypot(n.x-t[o].x,n.y-t[o].y);a<r&&(r=a,s=o)}if(s!==-1){const o=e[s].x-t[s].x,a=e[s].y-t[s].y;return new it(n.x+o,n.y+a)}return new it(n.x,n.y)})}function gh(i){let t=Math.atan2(i.y,i.x);if(t<0&&(t+=2*Math.PI),t>=Math.PI/2&&t<Math.PI){const e=(t-Math.PI/2)/(Math.PI/2);return 2*(1-e)+5*e}else if(t>=Math.PI&&t<3*Math.PI/2){const e=(t-Math.PI)/(Math.PI/2);return 5*(1-e)+3.5*e}else{if(t>=3*Math.PI/2&&t<2*Math.PI)return 3.5;{let e=0;return t<Math.PI/2?e=t/(Math.PI/2):e=(t-2*Math.PI)/(Math.PI/2),3.5*(1-e)+2*e}}}function Gx(i,t,e,n,s,r,o){const a=new se,l=[],c=[],h=new En;h.moveTo(i[0].x,i[0].y);for(let P=1;P<i.length;P++)h.lineTo(i[P].x,i[P].y);h.closePath();const u=new Zs(h),d=u.attributes.position.array,f=u.index.array,g=d.length/3;for(let P=0;P<g;P++)l.push(d[3*P],d[3*P+1],t);for(let P=0;P<f.length;P++)c.push(f[P]);const x=8,p=io(i),m=[],_=[];let y=0;const M=i.map(P=>r.some(b=>Math.hypot(P.x-b.x,P.y-b.y)<.1)?1:0);for(let P=0;P<i.length;P++){const S=i[P],b=i[(P+1)%i.length],I=M[P],T=M[(P+1)%i.length];for(let B=0;B<=x;B++)for(let z=0;z<=B;z++){let N=S.x,F=S.y;const O=B>0?z/B:0;B>0&&(N=S.x+(b.x-S.x)*O,F=S.y+(b.y-S.y)*O);const H=B/x,G=p.x+(N-p.x)*H,X=p.y+(F-p.y)*H,K=I*(1-O)+T*O,st=s?1:0,xt=n*(1-.8*st),dt=n*K*st,Et=xt*(1-H*H)+dt*H*H,j=t-e+Et;m.push(G,X,j)}const L=(B,z)=>{const N=B*(B+1)/2;return y+N+z};for(let B=0;B<x;B++)for(let z=0;z<=B;z++){const N=L(B,z),F=L(B+1,z),O=L(B+1,z+1);if(_.push(N,F,O),z<B){const H=L(B,z),G=L(B+1,z+1),X=L(B,z+1);_.push(H,G,X)}}y+=(x+1)*(x+2)/2}const C=l.length/3;for(let P=0;P<m.length;P+=3)l.push(m[P],m[P+1],m[P+2]);for(let P=0;P<_.length;P+=3)c.push(C+_[P+2],C+_[P+1],C+_[P]);const w=l.length/3;for(let P=0;P<i.length;P++)l.push(i[P].x,i[P].y,t),l.push(i[P].x,i[P].y,t-e);for(let P=0;P<i.length;P++){const S=(P+1)%i.length,b=w+2*P,I=w+2*P+1,T=w+2*S,L=w+2*S+1;c.push(b,T,L),c.push(b,L,I)}return a.setAttribute("position",new Qt(l,3)),a.setIndex(c),a.computeVertexNormals(),u.dispose(),a}function Hx(){if(!Be)return;for(;Be.children.length>0;){const u=Be.children[0];Be.remove(u),u.geometry&&u.geometry.dispose(),u.material&&(Array.isArray(u.material)?u.material.forEach(d=>d.dispose()):u.material.dispose())}const i=v.numFloors,t=v.floorHeight,e=new Jn({color:16777215,roughness:.9,metalness:0}),n=new Jn({color:16777215,roughness:.9,metalness:0}),s=new Jn({color:16777215,roughness:.9,metalness:0}),r=new Jn({color:16777215,roughness:.9,metalness:0}),o=new Jn({color:16777215,roughness:.9,metalness:0,side:Xe}),a=new Jn({color:16777215,roughness:.9,metalness:0});new Jn({color:16777215,roughness:.9,metalness:0,side:Xe}),new Ie({color:13421772,wireframe:!0,transparent:!0,opacity:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});const l=v.activePolygonId,c=Array.from({length:i},()=>[]),h=Array.from({length:i},()=>[]);v.importedPolygons.forEach(u=>{if(!u.hasScaffold||u.polygon.length<3)return;v.activePolygonId=u.id;let d=!0,f=0;for(let b=0;b<v.polygon.length;b++){const I=v.polygon[b],T=v.polygon[(b+1)%v.polygon.length];f+=I.x*T.y-T.x*I.y}d=f>0;const g=[];for(let b=0;b<v.polygon.length;b++){const I=v.polygon[b],T=v.polygon[(b+1)%v.polygon.length],L=T.x-I.x,B=T.y-I.y,z=Math.hypot(L,B);let N=0,F=0;z>1e-6&&(d?(N=B/z,F=-L/z):(N=-B/z,F=L/z)),g.push(new it(N,F))}const x=[];for(let b=0;b<v.polygon.length;b++){const I=v.polygon[b],T=v.polygon[(b+1)%v.polygon.length],L=g[b],B=zx(I,T,L,u,v.importedPolygons);x.push(B)}const p=[];v.structuralBays&&v.structuralBays.forEach(b=>{p.push(kx(b,v.polygon))});const m=v.planarGraph?v.planarGraph.vertices:v.polygon,_=[];if(v.planarGraph)v.planarGraph.edges.forEach(b=>{const I=v.planarGraph.vertices[b[0]],T=v.planarGraph.vertices[b[1]];_.push([I,T])});else for(let b=0;b<v.polygon.length;b++)_.push([v.polygon[b],v.polygon[(b+1)%v.polygon.length]]);u.planarGraph3D={vertices:[],edges:[]},u.structuralBays3D=[];const y=[];for(let b=0;b<i;b++)y.push(Vx(b,i,t,v.groundFloorHeightFactor,v.polygon,g));const M=m.length;for(let b=0;b<=i;b++){const I=Fr(Math.min(b,i-1),i,t,v.groundFloorHeightFactor),T=b===i?I.top:I.bottom,L=Math.min(b,i-1);ph(m,v.polygon,y[L]).forEach((z,N)=>{u.planarGraph3D.vertices.push({id:`vertex_P${u.id}_F${b}_V${N}`,x:z.x,y:z.y,z:T})})}for(let b=0;b<i;b++)_.forEach(([I,T],L)=>{const B=b*M+m.indexOf(I),z=b*M+m.indexOf(T);u.planarGraph3D.edges.push({u:B,v:z,type:"beam",floorIndex:b})});for(let b=0;b<i;b++)m.forEach((I,T)=>{const L=b*M+T,B=(b+1)*M+T;u.planarGraph3D.edges.push({u:L,v:B,type:"column",floorIndex:b})});v.structuralBays&&v.structuralBays.forEach((b,I)=>{if(b.length<3)return;let T="interior";const L=p[I],B=new Set;for(let F=0;F<b.length;F++){const O=b[F],H=b[(F+1)%b.length],G={x:(O.x+H.x)/2,y:(O.y+H.y)/2};for(let X=0;X<v.polygon.length;X++){const K=v.polygon[X],st=v.polygon[(X+1)%v.polygon.length];if(Qo(G,K,st)<.1){const xt=g[X];xt.y>.5&&B.add("North"),xt.y<-.5&&B.add("South"),xt.x>.5&&B.add("East"),xt.x<-.5&&B.add("West")}}}const z=Array.from(B);if(L)T="corner";else{let F=!1,O=!1,H=!1;for(let G=0;G<b.length;G++){const X=b[G],K=b[(G+1)%b.length],st={x:(X.x+K.x)/2,y:(X.y+K.y)/2};for(let xt=0;xt<v.polygon.length;xt++){const dt=v.polygon[xt],Et=v.polygon[(xt+1)%v.polygon.length];if(Qo(st,dt,Et)<.1){const j=x[xt];j==="courtyard"?F=!0:j==="other_building"?O=!0:j==="open_space"&&(H=!0)}}}F?T="courtyard":O?T="neighbor":H&&(T="open_space")}let N="#64748b";T==="corner"?N="#8b5cf6":T==="courtyard"?N="#10b981":T==="neighbor"?N="#f59e0b":T==="open_space"&&(N="#0ea5e9");for(let F=0;F<i;F++){const O=Fr(F,i,t,v.groundFloorHeightFactor),H=y[F],G=mh(b,v.polygon,H);u.structuralBays3D.push({id:`${u.id}_bay_${I}_floor_${F}`,cellIdx:I,floorIndex:F,polygonId:u.id,vertices:G.map(X=>({x:X.x,y:X.y,z:O.bottom})),topVertices:G.map(X=>({x:X.x,y:X.y,z:O.top})),phenotype:T,color:N,facingDirections:z})}});const C=new Set,w=new Map,P=new Set,S=new Map;m.forEach((b,I)=>{let T=!1;const L=[];let B=!1;const z=[];for(let N=0;N<v.polygon.length;N++){const F=v.polygon[N],O=v.polygon[(N+1)%v.polygon.length],H=g[N],G=x[N];Qo(b,F,O)<.1&&(G==="courtyard"?(T=!0,L.push(H)):(G==="open_space"||G==="other_building"||G==="touching")&&(B=!0,z.push(H)))}if(T){C.add(I);let N=0,F=0;L.forEach(H=>{N+=H.x,F+=H.y});const O=new it(N,F).normalize();w.set(I,O)}if(B&&!T){let N=0,F=0;z.forEach(H=>{N+=H.x,F+=H.y});const O=new it(N,F).normalize();(O.x<-.5||O.y<-.5)&&(P.add(I),S.set(I,O))}});for(let b=0;b<i;b++){const I=Fr(b,i,t,v.groundFloorHeightFactor),T=b===0,L=b===i-1,B=y[b],z=ph(m,v.polygon,B),N=_.map(([F,O])=>{const H=z[m.indexOf(F)],G=z[m.indexOf(O)];return[H,G]});if(v.showFloorSlabs&&(v.structuralBays.forEach((F,O)=>{if(p[O]&&b<2)return;const G=mh(F,v.polygon,B),X=b===0,K=F.some(ct=>v.polygon.some(nt=>Math.hypot(ct.x-nt.x,ct.y-nt.y)<.1)),xt=(X?v.slabThickness*1.5:v.slabThickness)+v.beamDepth,dt=v.beamDepth,Et=Gx(G,I.bottom,xt,dt,K,v.polygon),j=new pt(Et,e);j.position.z=0,j.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(j)}),L&&B&&B.length>=3)){const F=[];for(let X=0;X<B.length;X++){const K=B[X],st=(X-1+B.length)%B.length,xt=X,dt=g[st],Et=g[xt],j=gh(dt),ct=gh(Et),nt=(j+ct)/2,wt=new it(dt.x+Et.x,dt.y+Et.y).normalize();F.push(new it(K.x+wt.x*nt,K.y+wt.y*nt))}const O=new En;O.moveTo(F[0].x,F[0].y);for(let X=1;X<F.length;X++)O.lineTo(F[X].x,F[X].y);O.closePath();const H=new xi(O,{depth:v.slabThickness*.8,bevelEnabled:!1}),G=new pt(H,e);G.position.z=I.top-v.slabThickness*.8,G.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(G)}if(v.show3DColumns){v.slabThickness,T?v.slabThickness*1.5:L&&v.slabThickness*.8;const F=I.height;let O=1;i>1&&(O=1.4-.7*(b/(i-1)));const H=v.columnRadius*O,G=new Ye(H,H,F,16);G.rotateX(Math.PI/2);const X=H*2.2,K=H*.8,st=new En;st.moveTo(-X/2,-X/2),st.lineTo(X/2,-X/2),st.lineTo(X/2,-X/2+K),st.lineTo(-X/2+K,-X/2+K),st.lineTo(-X/2+K,X/2),st.lineTo(-X/2,X/2),st.closePath();const xt=new xi(st,{depth:F,bevelEnabled:!1});z.forEach((dt,Et)=>{let j=!1;for(const ot of c[b])if(Math.hypot(dt.x-ot.x,dt.y-ot.y)<.2){j=!0;break}if(j)return;c[b].push({x:dt.x,y:dt.y});let ct=!1;const nt=m[Et];for(const ot of v.polygon)if(Math.hypot(nt.x-ot.x,nt.y-ot.y)<.1){ct=!0;break}const wt=C.has(Et),Dt=P.has(Et),At=(ot,Mt,J,at=!1)=>{let Q;if(Dt&&!at){const vt=new we(2,.3,F);Q=new pt(vt,n),Q.position.set(ot,Mt,I.bottom+F/2),Q.rotation.z=J}else ct&&!at?(Q=new pt(xt,n),Q.position.set(ot,Mt,I.bottom)):(Q=new pt(G,n),Q.position.set(ot,Mt,I.bottom+F/2));Q.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(Q)};if(wt){At(dt.x,dt.y,0,!1);const ot=w.get(Et),Mt=dt.x-3*ot.x,J=dt.y-3*ot.y;At(Mt,J,0,!0)}else if(Dt){const ot=S.get(Et),Mt=Math.atan2(ot.y,ot.x);At(dt.x,dt.y,Mt,!1)}else At(dt.x,dt.y,0,!1)}),G.dispose(),xt.dispose()}if(v.show3DBeams){let F=1;i>1&&(F=1.3-.5*(b/(i-1)));const O=v.beamWidth*F,H=v.beamDepth*F;let G=v.slabThickness;T&&(G=v.slabThickness*1.5),N.forEach(([X,K])=>{const st=K.x-X.x,xt=K.y-X.y;if(Math.hypot(st,xt)<.001)return;const Et=(X.x+K.x)/2,j=(X.y+K.y)/2;let ct=!1;for(const At of h[b])if(Math.hypot(Et-At.x,j-At.y)<.2){ct=!0;break}if(ct)return;h[b].push({x:Et,y:j});const nt=(At,ot)=>{const Mt=ot.x-At.x,J=ot.y-At.y,at=Math.hypot(Mt,J);if(at<.001)return;const Q=(At.x+ot.x)/2,vt=(At.y+ot.y)/2,ft=I.bottom-G-H/2,zt=new we(at,O,H),U=new pt(zt,s);U.position.set(Q,vt,ft),U.rotation.z=Math.atan2(J,Mt),U.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(U),zt.dispose()};nt(X,K);const wt=z.indexOf(X),Dt=z.indexOf(K);if(C.has(wt)&&C.has(Dt)){const At=w.get(wt),ot=w.get(Dt),Mt=new it(X.x-3*At.x,X.y-3*At.y),J=new it(K.x-3*ot.x,K.y-3*ot.y);nt(Mt,J)}})}if(v.showBalconies&&!T&&!L)for(let F=0;F<B.length;F++){const O=B[F],H=B[(F+1)%B.length],G=x[F],X=Math.hypot(H.x-O.x,H.y-O.y);if(X<.001||G==="other_building"||G==="touching")continue;let K=v.balconyOffset;G==="courtyard"&&(K=v.balconyOffset*1.5);const st=X/2,xt=new En,dt=Math.min(.8,K*.4);xt.moveTo(-st,0),xt.lineTo(-st,K-dt),xt.quadraticCurveTo(-st,K,-st+dt,K),xt.lineTo(st-dt,K),xt.quadraticCurveTo(st,K,st,K-dt),xt.lineTo(st,0),xt.closePath();const Et=new xi(xt,{depth:v.balconyThickness,bevelEnabled:!1}),j=new pt(Et,r),ct=Math.atan2(H.y-O.y,H.x-O.x),nt=(O.x+H.x)/2,wt=(O.y+H.y)/2,Dt=I.bottom-v.balconyThickness;j.position.set(nt,wt,Dt),j.rotation.z=ct,j.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(j);const At=1.1,ot=.02,Mt=new En;Mt.moveTo(-st,K-ot),Mt.lineTo(st,K-ot),Mt.lineTo(st,K),Mt.lineTo(-st,K),Mt.closePath();const J=new xi(Mt,{depth:At,bevelEnabled:!1}),at=new pt(J,o);at.position.set(nt,wt,I.bottom),at.rotation.z=ct,at.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(at),Et.dispose(),J.dispose()}if(v.showBriseSoleil&&!T&&!L){const F=new it(-.707,-.707);for(let O=0;O<B.length;O++){const H=B[O],G=B[(O+1)%B.length],X=g[O],K=x[O],st=Math.hypot(G.x-H.x,G.y-H.y);if(st<.001)continue;const xt=X.dot(F);let dt=v.louverDepth,Et=v.louverSpacing,j=!0;if(K==="other_building"?(dt=v.louverDepth*.8,Et=v.louverSpacing*.6):K==="courtyard"||K==="touching"?j=!1:xt>0?(dt=v.louverDepth*(.3+1.2*xt),Et=v.louverSpacing*(1.2-.5*xt)):j=!1,!j)continue;const ct=Math.max(2,Math.floor(st/Et));let nt=v.slabThickness;T&&(nt=v.slabThickness*1.5);const wt=I.height-nt,Dt=v.louverWidth,At=new En;At.moveTo(0,-dt/2),At.quadraticCurveTo(Dt/2,0,0,dt/2),At.quadraticCurveTo(-Dt/2,0,0,-dt/2),At.closePath();const ot=new xi(At,{depth:wt,bevelEnabled:!1});for(let Mt=0;Mt<=ct;Mt++){const J=Mt/ct,at=H.x+(G.x-H.x)*J+X.x*.15,Q=H.y+(G.y-H.y)*J+X.y*.15,vt=new pt(ot,a);vt.position.set(at,Q,I.bottom);const ft=Math.atan2(G.y-H.y,G.x-H.x);vt.rotation.z=ft,vt.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(vt)}ot.dispose()}}}v.show3DCells&&u.structuralBays3D&&u.structuralBays3D.length>0&&u.structuralBays3D.forEach(b=>{const I=new En;I.moveTo(b.vertices[0].x,b.vertices[0].y);for(let dt=1;dt<b.vertices.length;dt++)I.lineTo(b.vertices[dt].x,b.vertices[dt].y);I.closePath();const T=Fr(b.floorIndex,i,t,v.groundFloorHeightFactor).height,L=new xi(I,{depth:T,bevelEnabled:!1}),B=new Jt(b.color),z=new Jn({color:B,transparent:!0,opacity:.12,roughness:.2,metalness:.1,side:Xe,depthWrite:!1}),N=new pt(L,z);N.position.z=b.vertices[0].z,N.userData={is3DStackMesh:!0,isCellVolume:!0,polygonId:u.id,cellIdx:b.cellIdx,floorIndex:b.floorIndex,phenotype:b.phenotype,facingDirections:b.facingDirections},Be.add(N);const F=new Jt(b.color).clone().multiplyScalar(.7),O=new ln({color:F,transparent:!0,opacity:.25}),H=b.vertices.map(dt=>new D(dt.x,dt.y,dt.z));H.push(H[0]);const G=new se().setFromPoints(H),X=new Se(G,O);X.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(X);const K=b.topVertices.map(dt=>new D(dt.x,dt.y,dt.z));K.push(K[0]);const st=new se().setFromPoints(K),xt=new Se(st,O);xt.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(xt);for(let dt=0;dt<b.vertices.length;dt++){const Et=b.vertices[dt],j=[new D(Et.x,Et.y,Et.z),new D(Et.x,Et.y,Et.z+T)],ct=new se().setFromPoints(j),nt=new Se(ct,O);nt.userData={is3DStackMesh:!0,polygonId:u.id},Be.add(nt)}})}),v.activePolygonId=l}function Wx(){const i=document.getElementById("btn-minimize-sidebar"),t=document.getElementById("control-sidebar");i&&t&&i.addEventListener("click",()=>{t.classList.toggle("collapsed");const T=i.querySelector("span");T&&(T.innerText=t.classList.contains("collapsed")?"▲":"▼")});const e=document.getElementById("header-mat-params"),n=document.getElementById("section-mat-params");e&&n&&e.addEventListener("click",()=>{n.classList.toggle("collapsed")});const s=document.getElementById("header-interactive-helpers"),r=document.getElementById("section-interactive-helpers");s&&r&&s.addEventListener("click",()=>{r.classList.toggle("collapsed")});const o=document.getElementById("header-rhino-integration"),a=document.getElementById("section-rhino-integration");o&&a&&o.addEventListener("click",()=>{a.classList.toggle("collapsed")});const l=document.getElementById("header-3d-stack"),c=document.getElementById("section-3d-stack");l&&c&&l.addEventListener("click",()=>{c.classList.toggle("collapsed")});const h=document.getElementById("btn-collapse-ribs-workflow"),u=document.getElementById("ribs-workflow-dependents");h&&u&&h.addEventListener("click",()=>{const T=u.style.display==="none";u.style.display=T?"block":"none",h.classList.toggle("collapsed",!T)}),document.getElementById("btn-view-perspective").addEventListener("click",()=>dh("perspective")),document.getElementById("btn-view-top").addEventListener("click",()=>dh("top"));const d=document.querySelectorAll(".preset-card");d.forEach(T=>{T.addEventListener("click",()=>{d.forEach(B=>B.classList.remove("active")),T.classList.add("active");const L=T.getAttribute("data-preset");L&&lu(L)})});const f=document.getElementById("slider-samples"),g=document.getElementById("val-samples");f.addEventListener("input",T=>{v.samplesPerEdge=parseInt(T.target.value),g.innerText=v.samplesPerEdge,Ue()});const x=document.getElementById("slider-precision"),p=document.getElementById("val-precision");x.addEventListener("input",T=>{const L=parseInt(T.target.value);v.precision=Math.pow(10,-L),p.innerText=`1e-${L}`,Ue()}),document.getElementById("chk-show-skeleton").addEventListener("change",T=>{v.showSkeleton=T.target.checked,pe()}),document.getElementById("chk-simplify-skeleton").addEventListener("change",T=>{v.simplifySkeleton=T.target.checked,Ue()}),document.getElementById("chk-prune-branches").addEventListener("change",T=>{if(v.pruneBranches=T.target.checked,v.pruneBranches){v.simplifySkeleton=!0;const L=document.getElementById("chk-simplify-skeleton");L&&(L.checked=!0)}Ue()}),document.getElementById("chk-show-ribs").addEventListener("change",T=>{if(v.showRibs=T.target.checked,v.showRibs){v.simplifySkeleton=!0;const L=document.getElementById("chk-simplify-skeleton");L&&(L.checked=!0)}Ue()});const m=document.getElementById("slider-ribs"),_=document.getElementById("val-ribs");m.addEventListener("input",T=>{v.ribSpacing=parseFloat(T.target.value),_.innerText=`${v.ribSpacing.toFixed(1)}m`,Ue()});const y=document.getElementById("slider-merge"),M=document.getElementById("val-merge");y.addEventListener("input",T=>{v.mergeThreshold=parseFloat(T.target.value),M.innerText=`${v.mergeThreshold.toFixed(1)}m`,Ue()});function C(){const T=document.getElementById("btn-combine-bays"),L=document.getElementById("btn-delete-bays");T&&(T.disabled=v.selectedBayIndices.length<2),L&&(L.disabled=v.selectedBayIndices.length===0)}document.getElementById("chk-show-bays").addEventListener("change",T=>{v.showBays=T.target.checked;const L=document.getElementById("container-edit-bays");if(L&&(L.style.display=v.showBays?"block":"none"),!v.showBays){v.editBaysMode=!1,v.selectedBayIndices=[];const B=document.getElementById("chk-edit-bays-mode");B&&(B.checked=!1);const z=document.getElementById("edit-bays-actions");z&&(z.style.display="none")}$t&&$t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,pe()}),document.getElementById("chk-edit-bays-mode").addEventListener("change",T=>{v.editBaysMode=T.target.checked,v.selectedBayIndices=[],$t&&$t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null;const L=document.getElementById("edit-bays-actions");L&&(L.style.display=v.editBaysMode?"grid":"none"),C(),pe()}),document.getElementById("btn-combine-bays").addEventListener("click",()=>{if(v.selectedBayIndices.length>=2){const T=v.selectedBayIndices.map(L=>io(v.structuralBays[L]));v.bayEdits.push({type:"merge",points:T}),v.selectedBayIndices=[],$t&&$t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,C(),Ue()}});const w=()=>{v.selectedBayIndices.length>0&&(v.selectedBayIndices.forEach(T=>{v.bayEdits.push({type:"delete",point:io(v.structuralBays[T])})}),v.selectedBayIndices=[],$t&&$t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,C(),Ue())};document.getElementById("btn-delete-bays").addEventListener("click",w),window.addEventListener("keydown",T=>{if(v.editBaysMode&&(T.key==="Delete"||T.key==="Del")){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;w()}}),document.getElementById("btn-reset-bay-edits").addEventListener("click",()=>{v.bayEdits=[],v.graphVertexOverrides.clear(),v.selectedBayIndices=[],$t&&$t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,C(),Ue()}),document.getElementById("chk-hover-circle").addEventListener("change",T=>{v.hoverCircle=T.target.checked,v.hoverCircle||(v.hoveredMedialPoint=null),pe()}),document.getElementById("chk-show-governors").addEventListener("change",T=>{v.showGovernors=T.target.checked,pe()});const P=document.getElementById("btn-draw-custom"),S=document.getElementById("btn-clear-custom"),b=document.getElementById("drawing-indicator");P.addEventListener("click",()=>{v.isDrawing=!0,v.importedPolygons=[],v.activePolygonId="default",v.customVertices=[],v.polygon=[],v.graphVertexOverrides.clear(),v.bayEdits=[],v.selectedBayIndices=[],v.skeletonData={regularPoints:[],junctionPoints:[]},$t&&$t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,P.style.display="none",S.style.display="inline-flex",b.style.display="flex",d.forEach(T=>T.classList.remove("active")),document.getElementById("card-custom").style.display="flex",document.getElementById("card-custom").classList.add("active"),pe()}),S.addEventListener("click",()=>{v.importedPolygons=[],v.activePolygonId="default",v.customVertices=[],v.polygon=[],v.isDrawing=!0,v.skeletonData={regularPoints:[],junctionPoints:[]},$t&&$t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,pe()}),An.addEventListener("mousedown",Yx),An.addEventListener("mousemove",qx),An.addEventListener("mouseup",jx),An.addEventListener("mouseleave",Zx),An.addEventListener("contextmenu",T=>T.preventDefault());const I=document.getElementById("btn-reset-view");I&&I.addEventListener("click",ho),Xx()}function Xx(){const i=document.getElementById("rhino-file-input"),t=document.getElementById("btn-upload-rhino"),e=document.getElementById("rhino-file-info"),n=document.getElementById("rhino-filename"),s=document.getElementById("rhino-object-count"),r=document.getElementById("lbl-rhino-layers"),o=document.getElementById("rhino-layers-container"),a=document.getElementById("rhino-actions"),l=document.getElementById("btn-load-rhino-layers"),c=document.getElementById("btn-clear-rhino"),h=document.getElementById("btn-export-rhino"),u=document.getElementById("rhino-export-filename");if(!i||!t)return;let d=null;t.addEventListener("click",()=>{i.click()}),i.addEventListener("change",ot=>{const Mt=ot.target.files[0];if(!Mt)return;n.textContent=Mt.name,t.textContent="Loading File...",t.disabled=!0;const J=new FileReader;J.onload=async at=>{try{d=at.target.result,console.log("[UI] Parsing Rhino file metadata...");const{layers:Q,objectCount:vt}=await cs.parseMetadata(d);s.textContent=`${vt} objects found`,e.style.display="block",o.innerHTML="",Q&&Q.length>0&&(Q.forEach(ft=>{const zt=document.createElement("div");zt.className="layer-item";const U=document.createElement("input");U.type="checkbox",U.id=`layer-chk-${ft.index}`,U.value=ft.index,U.checked=!1;const Wt=document.createElement("div");Wt.className="layer-color-dot",Wt.style.backgroundColor=`rgba(${ft.color.r}, ${ft.color.g}, ${ft.color.b}, ${ft.color.a/255})`;const Lt=document.createElement("span");Lt.className="layer-name",Lt.textContent=ft.name,Lt.title=ft.name,Lt.addEventListener("click",()=>{U.checked=!U.checked}),zt.appendChild(U),zt.appendChild(Wt),zt.appendChild(Lt),o.appendChild(zt)}),r.style.display="block",o.style.display="block",a.style.display="grid"),t.textContent="Change .3DM File"}catch(Q){console.error("[UI] Error loading Rhino metadata:",Q),alert("Error loading .3dm metadata: "+Q.message),t.textContent="Load .3DM File"}finally{t.disabled=!1}},J.readAsArrayBuffer(Mt)}),l.addEventListener("click",async()=>{if(!d)return;const ot=o.querySelectorAll('input[type="checkbox"]:checked'),Mt=Array.from(ot).map(at=>parseInt(at.value));if(Mt.length===0){alert("Please select at least one layer to load.");return}l.disabled=!0;const J=l.textContent;l.textContent="Loading...";try{await cs.loadLayers(d,Mt),console.log("[UI] Rhino geometries successfully loaded.")}catch(at){console.error("[UI] Error loading layers:",at),alert("Failed to load layers: "+at.message)}finally{l.disabled=!1,l.textContent=J}}),c.addEventListener("click",()=>{cs.clearRhinoGeometries(),console.log("[UI] Rhino geometries cleared.")}),h.addEventListener("click",async()=>{const ot=u.value.trim()||"medial_axis_export.3dm";h.disabled=!0,h.textContent="Exporting...";try{await cs.exportSceneTo3dm(ot),console.log("[UI] Export complete.")}catch(Mt){console.error("[UI] Error exporting to 3DM:",Mt),alert("Failed to export to 3DM: "+Mt.message)}finally{h.disabled=!1,h.textContent="Export to 3DM"}});const f=document.getElementById("slider-floors"),g=document.getElementById("val-floors");f&&g&&f.addEventListener("input",ot=>{v.numFloors=parseInt(ot.target.value),g.innerText=v.numFloors,pe()});const x=document.getElementById("slider-floor-height"),p=document.getElementById("val-floor-height");x&&p&&x.addEventListener("input",ot=>{v.floorHeight=parseFloat(ot.target.value),p.innerText=`${v.floorHeight.toFixed(1)}m`,pe()});const m=document.getElementById("slider-ground-floor-factor"),_=document.getElementById("val-ground-floor-factor");m&&_&&m.addEventListener("input",ot=>{v.groundFloorHeightFactor=parseFloat(ot.target.value),_.innerText=v.groundFloorHeightFactor.toFixed(1),pe()});const y=document.getElementById("chk-3d-columns");y&&y.addEventListener("change",ot=>{v.show3DColumns=ot.target.checked,pe()});const M=document.getElementById("chk-3d-beams");M&&M.addEventListener("change",ot=>{v.show3DBeams=ot.target.checked,pe()});const C=document.getElementById("chk-3d-slabs");C&&C.addEventListener("change",ot=>{v.showFloorSlabs=ot.target.checked,pe()});const w=document.getElementById("chk-3d-balconies");w&&w.addEventListener("change",ot=>{v.showBalconies=ot.target.checked,pe()});const P=document.getElementById("chk-3d-brisesoleil");P&&P.addEventListener("change",ot=>{v.showBriseSoleil=ot.target.checked,pe()});const S=document.getElementById("chk-3d-vaults");S&&S.addEventListener("change",ot=>{v.showVaultedRoofs=ot.target.checked,pe()});const b=document.getElementById("chk-3d-cells");b&&b.addEventListener("change",ot=>{v.show3DCells=ot.target.checked,pe()});const I=document.getElementById("chk-hover-labels");I&&I.addEventListener("change",ot=>{if(v.showHoverLabels=ot.target.checked,!v.showHoverLabels){const Mt=document.getElementById("cell-tooltip");Mt&&(Mt.style.display="none")}});const T=document.getElementById("btn-tab-workflow"),L=document.getElementById("btn-tab-shading"),B=document.getElementById("tab-content-workflow"),z=document.getElementById("tab-content-shading");T&&L&&B&&z&&(T.addEventListener("click",()=>{T.classList.add("active"),L.classList.remove("active"),B.style.display="flex",z.style.display="none",ae&&(ae.visible=!0),Bi&&(Bi.visible=!0),bn&&(bn.visible=!0),On&&(On.visible=!1)}),L.addEventListener("click",()=>{L.classList.add("active"),T.classList.remove("active"),z.style.display="flex",B.style.display="none",ae&&(ae.visible=!1),Bi&&(Bi.visible=!1),$t&&$t.detach(),bn&&(bn.visible=v.showGridHelper),On&&(On.visible=v.showGroundPlane)}));const N=document.getElementById("chk-ssao-enabled");N&&N.addEventListener("change",ot=>{v.ssaoEnabled=ot.target.checked,ze&&(ze.enabled=v.ssaoEnabled)});const F=document.getElementById("slider-ssao-radius"),O=document.getElementById("val-ssao-radius");F&&O&&F.addEventListener("input",ot=>{v.ssaoRadius=parseInt(ot.target.value),O.innerText=v.ssaoRadius,ze&&(ze.kernelRadius=v.ssaoRadius)});const H=document.getElementById("slider-ssao-min-dist"),G=document.getElementById("val-ssao-min-dist");H&&G&&H.addEventListener("input",ot=>{v.ssaoMinDistance=parseFloat(ot.target.value),G.innerText=v.ssaoMinDistance.toFixed(3)});const X=document.getElementById("slider-ssao-max-dist"),K=document.getElementById("val-ssao-max-dist");X&&K&&X.addEventListener("input",ot=>{v.ssaoMaxDistance=parseFloat(ot.target.value),K.innerText=v.ssaoMaxDistance.toFixed(1)});const st=document.getElementById("slider-ssao-intensity"),xt=document.getElementById("val-ssao-intensity");st&&xt&&st.addEventListener("input",ot=>{v.ssaoIntensity=parseFloat(ot.target.value),xt.innerText=v.ssaoIntensity.toFixed(1),ze&&ze.ssaoMaterial.uniforms.intensity&&(ze.ssaoMaterial.uniforms.intensity.value=v.ssaoIntensity)});const dt=document.getElementById("slider-ambient-intensity"),Et=document.getElementById("val-ambient-intensity");dt&&Et&&dt.addEventListener("input",ot=>{v.ambientIntensity=parseFloat(ot.target.value),Et.innerText=v.ambientIntensity.toFixed(2),eo&&(eo.intensity=v.ambientIntensity)});const j=document.getElementById("slider-dir1-intensity"),ct=document.getElementById("val-dir1-intensity");j&&ct&&j.addEventListener("input",ot=>{v.dirLight1Intensity=parseFloat(ot.target.value),ct.innerText=v.dirLight1Intensity.toFixed(2),ks&&(ks.intensity=v.dirLight1Intensity)});const nt=document.getElementById("slider-dir2-intensity"),wt=document.getElementById("val-dir2-intensity");nt&&wt&&nt.addEventListener("input",ot=>{v.dirLight2Intensity=parseFloat(ot.target.value),wt.innerText=v.dirLight2Intensity.toFixed(2),Vs&&(Vs.intensity=v.dirLight2Intensity)});const Dt=document.getElementById("chk-ground-plane");Dt&&Dt.addEventListener("change",ot=>{v.showGroundPlane=ot.target.checked,On&&(On.visible=v.showGroundPlane)});const At=document.getElementById("chk-grid-helper");At&&At.addEventListener("change",ot=>{v.showGridHelper=ot.target.checked,bn&&(bn.visible=v.showGridHelper)})}function uu(i){const t=An.getBoundingClientRect();ri.x=(i.clientX-t.left)/t.width*2-1,ri.y=-((i.clientY-t.top)/t.height)*2+1,zi.setFromCamera(ri,Ae);const e=new D;return zi.ray.intersectPlane(Cx,e),e}function Yx(i){if(!(i.button===1||i.button===2)&&i.button===0){if($t&&($t.dragging||$t.axis))return;const t=An.getBoundingClientRect();ri.x=(i.clientX-t.left)/t.width*2-1,ri.y=-((i.clientY-t.top)/t.height)*2+1;const e=uu(i),n=new it(e.x,e.y);zi.setFromCamera(ri,Ae),zi.params.Line.threshold=.4;const s=[...ae.children,...Be.children],r=zi.intersectObjects(s,!0);if(v.editBaysMode){let o=!1;for(const a of r)if(a.object.userData&&a.object.userData.isGraphVertex&&a.object.userData.polygonId===v.activePolygonId){const l=a.object.userData.index,c=v.planarGraph.vertices[l];v.selectedVertexType="graph",v.selectedVertexIdx=l,v.selectedVertexOrig=v.planarGraph.originalVertices[l],Ei.position.set(c.x,c.y,.035),$t.attach(Ei),o=!0,pe();break}if(!o){let a=null,l=null;for(const c of r)if(c.object.userData&&c.object.userData.polygonId){a=c.object.userData.polygonId,l=c.object;break}if(a){const c=v.importedPolygons.find(h=>h.id===a);if(c)if(!c.hasScaffold)c.hasScaffold=!0,v.activePolygonId=c.id,Ue();else if(l.userData.isPolygonLine||l.userData.is3DStackMesh)c.hasScaffold=!1,Ue();else{const h=c.structuralBays.findIndex(u=>ou(n,u));if(h!==-1){v.activePolygonId!==c.id&&(v.activePolygonId=c.id,pe());const u=v.selectedBayIndices.indexOf(h);u!==-1?v.selectedBayIndices.splice(u,1):v.selectedBayIndices.push(h);const d=document.getElementById("btn-combine-bays"),f=document.getElementById("btn-delete-bays");d&&(d.disabled=v.selectedBayIndices.length<2),f&&(f.disabled=v.selectedBayIndices.length===0),pe()}else c.hasScaffold=!1,Ue()}}else $t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,pe()}return}else if(v.isDrawing){if(v.customVertices.length>=3){const o=Ka(v.customVertices[0]);if(new it(i.clientX-t.left,i.clientY-t.top).dist(o)<12){v.polygon=[...v.customVertices],v.isDrawing=!1,document.getElementById("btn-draw-custom").style.display="inline-flex",document.getElementById("btn-clear-custom").style.display="none",document.getElementById("drawing-indicator").style.display="none",Ue(),ho();return}}v.customVertices.push(n),pe()}else{let o=!1;for(const a of r)if(a.object.userData&&a.object.userData.isHandle&&a.object.userData.polygonId===v.activePolygonId){const l=a.object.userData.index,c=v.polygon[l];v.selectedVertexType="polygon",v.selectedVertexIdx=l,v.selectedVertexOrig=null,Ei.position.set(c.x,c.y,.03),$t.attach(Ei),o=!0,pe();break}if(!o){let a=null;for(const l of r)if(l.object.userData&&l.object.userData.polygonId){a=l.object.userData.polygonId;break}if(a){const l=v.importedPolygons.find(c=>c.id===a);l&&(l.hasScaffold?(l.hasScaffold=!1,Ue()):(l.hasScaffold=!0,v.activePolygonId=l.id,Ue()))}else $t.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,pe()}}}}function qx(i){const t=uu(i),e=new it(t.x,t.y);if(v.mouseWorldPos=e,v.showHoverLabels&&v.show3DCells&&!v.isDrawing){const n=An.getBoundingClientRect();ri.x=(i.clientX-n.left)/n.width*2-1,ri.y=-((i.clientY-n.top)/n.height)*2+1,zi.setFromCamera(ri,Ae);const s=zi.intersectObjects(Be.children,!0);let r=null;for(const a of s)if(a.object.userData&&a.object.userData.isCellVolume){r=a.object;break}const o=document.getElementById("cell-tooltip");if(o)if(r){const a=r.userData,l=a.floorIndex===0?"Ground Floor":a.floorIndex===v.numFloors-1?"Roof Floor":`Intermediate Floor (F${a.floorIndex})`;let c="Interior Cell";a.phenotype==="corner"?c="Corner Cell":a.phenotype==="courtyard"?c="Courtyard Cell":a.phenotype==="neighbor"?c="Facade Cell (Neighbor)":a.phenotype==="open_space"&&(c="Facade Cell (Open Space)");const h=a.facingDirections&&a.facingDirections.length>0?a.facingDirections.join(", "):"N/A (Interior)";o.innerHTML=`
          <div style="font-weight: 700; margin-bottom: 6px; color: #60a5fa; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px;">Cell Phenotype</div>
          <div style="margin-bottom: 4px;"><strong>Level:</strong> ${l}</div>
          <div style="margin-bottom: 4px;"><strong>Type:</strong> ${c}</div>
          <div><strong>Facing:</strong> ${h}</div>
        `,o.style.display="block",o.style.left=i.clientX-n.left+15+"px",o.style.top=i.clientY-n.top+15+"px"}else o.style.display="none"}else{const n=document.getElementById("cell-tooltip");n&&(n.style.display="none")}if(v.isDrawing)pe();else if(v.hoverCircle&&!v.editBaysMode&&v.polygon.length>=3&&Fe.state===-1){const n=An.getBoundingClientRect(),s=new it(i.clientX-n.left,i.clientY-n.top);let r=null,o=20;for(const a of v.skeletonData.regularPoints){const l=Ka(a),c=s.dist(l);c<o&&(o=c,r=a)}for(const a of v.skeletonData.junctionPoints){if(a.isEndPoint)continue;const l=Ka(a),c=s.dist(l);c<o&&(o=c,r=a)}r!==v.hoveredMedialPoint&&(v.hoveredMedialPoint=r,pe())}}function jx(){}function Zx(){v.mouseWorldPos=null,v.hoveredMedialPoint=null;const i=document.getElementById("cell-tooltip");i&&(i.style.display="none"),pe()}function du(){if(requestAnimationFrame(du),Fe.update(),ze&&Ae){const i=Ae.far-Ae.near;ze.minDistance=v.ssaoMinDistance/i,ze.maxDistance=v.ssaoMaxDistance/i}kn?kn.render():Un.render(en,Ae)}window.addEventListener("load",()=>{Rx(),Wx(),lu(v.activePreset)});
