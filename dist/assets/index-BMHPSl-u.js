(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="184",us={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uu=0,Yl=1,Fu=2,Hr=1,Ou=2,Us=3,bi=0,dn=1,qe=2,tn=0,ds=1,ql=2,jl=3,Zl=4,Ph=5,ni=100,Bu=101,zu=102,ku=103,Vu=104,oa=200,Gu=201,Hu=202,Wu=203,aa=204,la=205,Ch=206,Xu=207,Rh=208,Yu=209,qu=210,ju=211,Zu=212,$u=213,Ku=214,ca=0,ha=1,ua=2,ps=3,da=4,fa=5,pa=6,ma=7,Ih=0,Ju=1,Qu=2,Wn=0,sl=1,rl=2,ol=3,al=4,ll=5,cl=6,hl=7,Dh=300,ki=301,ms=302,vo=303,yo=304,uo=306,Ys=1e3,ii=1001,ga=1002,Ge=1003,td=1004,rr=1005,en=1006,Mo=1007,Fi=1008,xn=1009,Lh=1010,Nh=1011,qs=1012,ul=1013,Yn=1014,Ln=1015,bn=1016,dl=1017,fl=1018,gs=1020,Uh=35902,Fh=35899,Oh=1021,Bh=1022,Nn=1023,ai=1026,Mi=1027,pl=1028,ml=1029,Vi=1030,gl=1031,xl=1033,Wr=33776,Xr=33777,Yr=33778,qr=33779,xa=35840,_a=35841,va=35842,ya=35843,Ma=36196,Sa=37492,Ea=37496,ba=37488,wa=37489,Kr=37490,Ta=37491,Aa=37808,Pa=37809,Ca=37810,Ra=37811,Ia=37812,Da=37813,La=37814,Na=37815,Ua=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Va=36492,Ga=36494,Ha=36495,Wa=36283,Xa=36284,Jr=36285,Ya=36286,ed=3200,Qr=0,nd=1,vi="",Sn="srgb",to="srgb-linear",eo="linear",de="srgb",qi=7680,$l=519,id=512,sd=513,rd=514,_l=515,od=516,ad=517,vl=518,ld=519,qa=35044,Kl="300 es",Vn=2e3,js=2001;function cd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}const hd={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function or(i,t){return new hd[i](t)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){const i=no("canvas");return i.style.display="block",i}const Jl={};function io(...i){const t="THREE."+i.shift();console.log(t,...i)}function zh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=zh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=zh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ja(...i){const t=i.join(" ");t in Jl||(Jl[t]=!0,Xt(...i))}function dd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const fd={[ca]:ha,[ua]:pa,[da]:ma,[ps]:fa,[ha]:ca,[pa]:ua,[ma]:da,[fa]:ps};class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const ks=Math.PI/180,Zs=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function yl(i,t){return(i%t+t)%t}function pd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function md(i,t,e){return i!==t?(e-i)/(t-i):0}function Vs(i,t,e){return(1-e)*i+e*t}function gd(i,t,e,n){return Vs(i,t,1-Math.exp(-e*n))}function xd(i,t=1){return t-Math.abs(yl(i,t*2)-t)}function _d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Md(i,t){return i+Math.random()*(t-i)}function Sd(i){return i*(.5-Math.random())}function Ed(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bd(i){return i*ks}function wd(i){return i*Zs}function Td(i){return(i&i-1)===0&&i!==0}function Ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*u,a*l);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kh={DEG2RAD:ks,RAD2DEG:Zs,generateUUID:Xn,clamp:ie,euclideanModulo:yl,mapLinear:pd,inverseLerp:md,lerp:Vs,damp:gd,pingpong:xd,smoothstep:_d,smootherstep:vd,randInt:yd,randFloat:Md,randFloatSpread:Sd,seededRandom:Ed,degToRad:bd,radToDeg:wd,isPowerOfTwo:Td,ceilPowerOfTwo:Ad,floorPowerOfTwo:Pd,setQuaternionFromProperEuler:Cd,normalize:fe,denormalize:Cn},Ll=class Ll{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ll.prototype.isVector2=!0;let gt=Ll;class Ye{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(f!==_||c!==h||l!==d||u!==m){let x=c*h+l*d+u*m+f*_;x<0&&(h=-h,d=-d,m=-m,_=-_,x=-x);let p=1-a;if(x<.9995){const g=Math.acos(x),y=Math.sin(g);p=Math.sin(p*g)/y,a=Math.sin(a*g)/y,c=c*p+h*a,l=l*p+d*a,u=u*p+m*a,f=f*p+_*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+m*a,f=f*p+_*a;const g=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=g,l*=g,u*=g,f*=g}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*f+c*d-l*h,t[e+1]=c*m+u*h+l*f-a*d,t[e+2]=l*m+u*d+a*h-c*f,t[e+3]=u*m-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nl=class Nl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nl.prototype.isVector3=!0;let N=Nl;const So=new N,tc=new Ye,Ul=class Ul{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],_=s[0],x=s[3],p=s[6],g=s[1],y=s[4],M=s[7],C=s[2],w=s[5],E=s[8];return r[0]=o*_+a*g+c*C,r[3]=o*x+a*y+c*w,r[6]=o*p+a*M+c*E,r[1]=l*_+u*g+f*C,r[4]=l*x+u*y+f*w,r[7]=l*p+u*M+f*E,r[2]=h*_+d*g+m*C,r[5]=h*x+d*y+m*w,r[8]=h*p+d*M+m*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,m=e*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Eo.makeScale(t,e)),this}rotate(t){return this.premultiply(Eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ul.prototype.isMatrix3=!0;let $t=Ul;const Eo=new $t,ec=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){const i={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[to]:{primaries:t,whitePoint:n,transfer:eo,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:de,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}const le=Rd();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class Id{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=no("canvas")),ji.width=t.width,ji.height=t.height;const s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=no("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dd=0;class Ml{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bo(s[o].image)):r.push(bo(s[o]))}else r=bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Id.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let Ld=0;const wo=new N;class rn extends wi{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=ii,s=ii,r=en,o=Fi,a=Nn,c=xn,l=rn.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Xn(),this.name="",this.source=new Ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ys:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ys:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Dh;rn.DEFAULT_ANISOTROPY=1;const Fl=class Fl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],_=c[2],x=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+x)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(d+1)/2,C=(p+1)/2,w=(u+h)/4,E=(f+_)/4,S=(m+x)/4;return y>M&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=E/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=S/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=S/r),this.set(n,s,r,e),this}let g=Math.sqrt((x-m)*(x-m)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(f-_)/g,this.z=(h-u)/g,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fl.prototype.isVector4=!0;let Ce=Fl;class Nd extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ml(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Nd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vh extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ho=class ho{constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,m,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,m,_,x)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,m,_,x){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ho().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,m=a*u,_=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,m=l*u,_=l*f;e[0]=h+_*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,m=l*u,_=l*f;e[0]=h-_*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,m=a*u,_=a*f;e[0]=c*u,e[4]=m*l-d,e[8]=h*l+_,e[1]=c*f,e[5]=_*l+h,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*u,e[4]=_-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+m,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Od)}lookAt(t,e,n){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),di.crossVectors(n,pn),di.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),di.crossVectors(n,pn)),di.normalize(),ar.crossVectors(pn,di),s[0]=di.x,s[4]=ar.x,s[8]=pn.x,s[1]=di.y,s[5]=ar.y,s[9]=pn.y,s[2]=di.z,s[6]=ar.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],_=n[6],x=n[10],p=n[14],g=n[3],y=n[7],M=n[11],C=n[15],w=s[0],E=s[4],S=s[8],A=s[12],D=s[1],T=s[5],I=s[9],F=s[13],U=s[2],L=s[6],B=s[10],O=s[14],H=s[3],G=s[7],X=s[11],tt=s[15];return r[0]=o*w+a*D+c*U+l*H,r[4]=o*E+a*T+c*L+l*G,r[8]=o*S+a*I+c*B+l*X,r[12]=o*A+a*F+c*O+l*tt,r[1]=u*w+f*D+h*U+d*H,r[5]=u*E+f*T+h*L+d*G,r[9]=u*S+f*I+h*B+d*X,r[13]=u*A+f*F+h*O+d*tt,r[2]=m*w+_*D+x*U+p*H,r[6]=m*E+_*T+x*L+p*G,r[10]=m*S+_*I+x*B+p*X,r[14]=m*A+_*F+x*O+p*tt,r[3]=g*w+y*D+M*U+C*H,r[7]=g*E+y*T+M*L+C*G,r[11]=g*S+y*I+M*B+C*X,r[15]=g*A+y*F+M*O+C*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],_=t[7],x=t[11],p=t[15],g=c*d-l*h,y=a*d-l*f,M=a*h-c*f,C=o*d-l*u,w=o*h-c*u,E=o*f-a*u;return e*(_*g-x*y+p*M)-n*(m*g-x*C+p*w)+s*(m*y-_*C+p*E)-r*(m*M-_*w+x*E)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],_=t[13],x=t[14],p=t[15],g=e*a-n*o,y=e*c-s*o,M=e*l-r*o,C=n*c-s*a,w=n*l-r*a,E=s*l-r*c,S=u*_-f*m,A=u*x-h*m,D=u*p-d*m,T=f*x-h*_,I=f*p-d*_,F=h*p-d*x,U=g*F-y*I+M*T+C*D-w*A+E*S;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/U;return t[0]=(a*F-c*I+l*T)*L,t[1]=(s*I-n*F-r*T)*L,t[2]=(_*E-x*w+p*C)*L,t[3]=(h*w-f*E-d*C)*L,t[4]=(c*D-o*F-l*A)*L,t[5]=(e*F-s*D+r*A)*L,t[6]=(x*M-m*E-p*y)*L,t[7]=(u*E-h*M+d*y)*L,t[8]=(o*I-a*D+l*S)*L,t[9]=(n*D-e*I-r*S)*L,t[10]=(m*w-_*M+p*g)*L,t[11]=(f*M-u*w-d*g)*L,t[12]=(a*A-o*T-c*S)*L,t[13]=(e*T-n*A+s*S)*L,t[14]=(_*y-m*C-x*g)*L,t[15]=(u*C-f*y+h*g)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,m=r*f,_=o*u,x=o*f,p=a*f,g=c*l,y=c*u,M=c*f,C=n.x,w=n.y,E=n.z;return s[0]=(1-(_+p))*C,s[1]=(d+M)*C,s[2]=(m-y)*C,s[3]=0,s[4]=(d-M)*w,s[5]=(1-(h+p))*w,s[6]=(x+g)*w,s[7]=0,s[8]=(m+y)*E,s[9]=(x-g)*E,s[10]=(1-(h+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Zi.set(s[0],s[1],s[2]).length();const a=Zi.set(s[4],s[5],s[6]).length(),c=Zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wn.copy(this);const l=1/o,u=1/a,f=1/c;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,e.setFromRotationMatrix(wn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Vn,c=!1){const l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Vn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===js)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn,c=!1){const l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Vn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===js)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ho.prototype.isMatrix4=!0;let xe=ho;const Zi=new N,wn=new xe,Fd=new N(0,0,0),Od=new N(1,1,1),di=new N,ar=new N,pn=new N,ic=new xe,sc=new Ye;class li{constructor(t=0,e=0,n=0,s=li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const rc=new N,$i=new Ye,Zn=new xe,lr=new N,bs=new N,zd=new N,kd=new Ye,oc=new N(1,0,0),ac=new N(0,1,0),lc=new N(0,0,1),cc={type:"added"},Vd={type:"removed"},Ki={type:"childadded",child:null},To={type:"childremoved",child:null};class Fe extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new N,e=new li,n=new Ye,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new $t}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(bs,lr,this.up):Zn.lookAt(lr,bs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Zn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd),To.child=t,this.dispatchEvent(To),To.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new N(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oi extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gd={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const x=e.getJointPose(_,n),p=this._getHandJoint(l,_);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=yl(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Po(o,r,t+1/3),this.g=Po(o,r,t),this.b=Po(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return le.workingToColorSpace(Je.copy(this),t),Math.round(ie(Je.r*255,0,255))*65536+Math.round(ie(Je.g*255,0,255))*256+Math.round(ie(Je.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Je.copy(this),e);const n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Sn){le.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,s=Je.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(cr);const n=Vs(fi.h,cr.h,e),s=Vs(fi.s,cr.s,e),r=Vs(fi.l,cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new ee;ee.NAMES=Gh;class Hd extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Tn=new N,$n=new N,Co=new N,Kn=new N,Ji=new N,Qi=new N,hc=new N,Ro=new N,Io=new N,Do=new N,Lo=new Ce,No=new Ce,Uo=new Ce;class Rn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),$n.subVectors(n,e),Co.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot($n),c=Tn.dot(Co),l=$n.dot($n),u=$n.dot(Co),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(o,Kn.y),c.addScaledVector(a,Kn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Lo.setScalar(0),No.setScalar(0),Uo.setScalar(0),Lo.fromBufferAttribute(t,e),No.fromBufferAttribute(t,n),Uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lo,r.x),o.addScaledVector(No,r.y),o.addScaledVector(Uo,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),$n.subVectors(t,e),Tn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Tn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,n),Qi.subVectors(r,n),Ro.subVectors(t,n);const c=Ji.dot(Ro),l=Qi.dot(Ro);if(c<=0&&l<=0)return e.copy(n);Io.subVectors(t,s);const u=Ji.dot(Io),f=Qi.dot(Io);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ji,o);Do.subVectors(t,r);const d=Ji.dot(Do),m=Qi.dot(Do);if(m>=0&&d<=m)return e.copy(r);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Qi,a);const x=u*m-d*f;if(x<=0&&f-u>=0&&d-m>=0)return hc.subVectors(r,s),a=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(hc,a);const p=1/(x+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ys{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),ur.subVectors(this.max,ws),ts.subVectors(t.a,ws),es.subVectors(t.b,ws),ns.subVectors(t.c,ws),pi.subVectors(es,ts),mi.subVectors(ns,es),Ai.subVectors(ts,ns);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ai.z,Ai.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ai.z,0,-Ai.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ai.y,Ai.x,0];return!Fo(e,ts,es,ns,ur)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,ts,es,ns,ur))?!1:(dr.crossVectors(pi,mi),e=[dr.x,dr.y,dr.z],Fo(e,ts,es,ns,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Jn=[new N,new N,new N,new N,new N,new N,new N,new N],An=new N,hr=new ys,ts=new N,es=new N,ns=new N,pi=new N,mi=new N,Ai=new N,ws=new N,ur=new N,dr=new N,Pi=new N;function Fo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Oe=new N,fr=new gt;let Wd=0;class on extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Hh extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wh extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Xd=new ys,Ts=new N,Oo=new N;class tr{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Oo)),this.expandByPoint(Ts.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Yd=0;const Mn=new xe,Bo=new Fe,is=new N,mn=new ys,As=new ys,Xe=new N;class te extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cd(t)?Wh:Hh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Bo.lookAt(t),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(mn.min,As.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,As.max),mn.expandByPoint(Xe)):(mn.expandByPoint(As.min),mn.expandByPoint(As.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xe.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(t,l),Xe.add(is)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new N,c[S]=new N;const l=new N,u=new N,f=new N,h=new gt,d=new gt,m=new gt,_=new N,x=new N;function p(S,A,D){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,D),h.fromBufferAttribute(r,S),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),u.sub(l),f.sub(l),d.sub(h),m.sub(h);const T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(T),x.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(T),a[S].add(_),a[A].add(_),a[D].add(_),c[S].add(x),c[A].add(x),c[D].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let S=0,A=g.length;S<A;++S){const D=g[S],T=D.start,I=D.count;for(let F=T,U=T+I;F<U;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new N,M=new N,C=new N,w=new N;function E(S){C.fromBufferAttribute(s,S),w.copy(C);const A=a[S];y.copy(A),y.sub(C.multiplyScalar(C.dot(A))).normalize(),M.crossVectors(w,A);const T=M.dot(c[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,T)}for(let S=0,A=g.length;S<A;++S){const D=g[S],T=D.start,I=D.count;for(let F=T,U=T+I;F<U;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(t)for(let h=0,d=t.count;h<d;h+=3){const m=t.getX(h+0),_=t.getX(h+1),x=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,m=0;for(let _=0,x=c.length;_<x;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new on(h,u,f)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new te,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qa,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new N;class so{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new so(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let jd=0;class Wi extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=ds,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qn=new N,zo=new N,pr=new N,gi=new N,ko=new N,mr=new N,Vo=new N;class fo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zo.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(zo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=gi.dot(this.direction),c=-gi.dot(pr),l=gi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*c-a,h=o*a-c,m=r*u,f>=0)if(h>=-m)if(h<=m){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(zo).addScaledVector(pr,h),d}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){ko.subVectors(e,t),mr.subVectors(n,t),Vo.crossVectors(ko,mr);let o=this.direction.dot(Vo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,t);const c=a*this.direction.dot(mr.crossVectors(gi,mr));if(c<0)return null;const l=a*this.direction.dot(ko.cross(gi));if(l<0||c+l>o)return null;const u=-a*gi.dot(Vo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const uc=new xe,Ci=new fo,gr=new tr,dc=new N,xr=new N,_r=new N,vr=new N,Go=new N,yr=new N,fc=new N,Mr=new N;class _t extends Fe{constructor(t=new te,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Go.fromBufferAttribute(f,t),o?yr.addScaledVector(Go,u):yr.addScaledVector(Go.sub(e),u))}e.add(yr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(gr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(gr,dc)===null||Ci.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(uc.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(uc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const x=h[m],p=o[x.materialIndex],g=Math.max(x.start,d.start),y=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let M=g,C=y;M<C;M+=3){const w=a.getX(M),E=a.getX(M+1),S=a.getX(M+2);s=Sr(this,p,t,n,l,u,f,w,E,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){const g=a.getX(x),y=a.getX(x+1),M=a.getX(x+2);s=Sr(this,o,t,n,l,u,f,g,y,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const x=h[m],p=o[x.materialIndex],g=Math.max(x.start,d.start),y=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let M=g,C=y;M<C;M+=3){const w=M,E=M+1,S=M+2;s=Sr(this,p,t,n,l,u,f,w,E,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){const g=x,y=x+1,M=x+2;s=Sr(this,o,t,n,l,u,f,g,y,M),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function Zd(i,t,e,n,s,r,o,a){let c;if(t.side===dn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===bi,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Mr);return l<e.near||l>e.far?null:{distance:l,point:Mr.clone(),object:i}}function Sr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,xr),i.getVertexPosition(c,_r),i.getVertexPosition(l,vr);const u=Zd(i,t,e,n,xr,_r,vr,fc);if(u){const f=new N;Rn.getBarycoord(fc,xr,_r,vr,f),s&&(u.uv=Rn.getInterpolatedAttribute(s,a,c,l,f,new gt)),r&&(u.uv1=Rn.getInterpolatedAttribute(r,a,c,l,f,new gt)),o&&(u.normal=Rn.getInterpolatedAttribute(o,a,c,l,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};Rn.getNormal(xr,_r,vr,h.normal),u.face=h,u.barycoord=f}return u}class Xh extends rn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ge,u=Ge,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $d extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ho=new N,Kd=new N,Jd=new $t;class ei{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ho.subVectors(n,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ho),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jd.getNormalMatrix(t),s=this.coplanarPoint(Ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new tr,Qd=new gt(.5,.5),Er=new N;class El{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],_=r[9],x=r[10],p=r[11],g=r[12],y=r[13],M=r[14],C=r[15];if(s[0].setComponents(l-o,d-u,p-m,C-g).normalize(),s[1].setComponents(l+o,d+u,p+m,C+g).normalize(),s[2].setComponents(l+a,d+f,p+_,C+y).normalize(),s[3].setComponents(l-a,d-f,p-_,C-y).normalize(),n)s[4].setComponents(c,h,x,M).normalize(),s[5].setComponents(l-c,d-h,p-x,C-M).normalize();else if(s[4].setComponents(l-c,d-h,p-x,C-M).normalize(),e===Vn)s[5].setComponents(l+c,d+h,p+x,C+M).normalize();else if(e===js)s[5].setComponents(c,h,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);const e=Qd.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Er.x=s.normal.x>0?t.max.x:t.min.x,Er.y=s.normal.y>0?t.max.y:t.min.y,Er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hn extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ro=new N,oo=new N,pc=new xe,Ps=new fo,br=new tr,Wo=new N,mc=new N;class we extends Fe{constructor(t=new te,e=new hn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ro.fromBufferAttribute(e,s-1),oo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ro.distanceTo(oo);t.setAttribute("lineDistance",new Zt(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;pc.copy(s).invert(),Ps.copy(t.ray).applyMatrix4(pc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,x=m-1;_<x;_+=l){const p=u.getX(_),g=u.getX(_+1),y=wr(this,t,Ps,c,p,g,_);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(m-1),x=u.getX(d),p=wr(this,t,Ps,c,_,x,m-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,x=m-1;_<x;_+=l){const p=wr(this,t,Ps,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=wr(this,t,Ps,c,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(ro.fromBufferAttribute(a,s),oo.fromBufferAttribute(a,r),e.distanceSqToSegment(ro,oo,Wo,mc)>n)return;Wo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Wo);if(!(l<t.near||l>t.far))return{distance:l,point:mc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const gc=new N,xc=new N;class tf extends we{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gc.fromBufferAttribute(e,s),xc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gc.distanceTo(xc);t.setAttribute("lineDistance",new Zt(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yh extends rn{constructor(t=[],e=ki,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gi extends rn{constructor(t,e,n=Yn,s,r,o,a=Ge,c=Ge,l,u=ai,f=1){if(u!==ai&&u!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ef extends Gi{constructor(t,e=Yn,n=ki,s,r,o=Ge,a=Ge,c,l=ai){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class qh extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pe extends te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function m(_,x,p,g,y,M,C,w,E,S,A){const D=M/E,T=C/S,I=M/2,F=C/2,U=w/2,L=E+1,B=S+1;let O=0,H=0;const G=new N;for(let X=0;X<B;X++){const tt=X*T-F;for(let $=0;$<L;$++){const nt=$*D-I;G[_]=nt*g,G[x]=tt*y,G[p]=U,l.push(G.x,G.y,G.z),G[_]=0,G[x]=0,G[p]=w>0?1:-1,u.push(G.x,G.y,G.z),f.push($/E),f.push(1-X/S),O+=1}}for(let X=0;X<S;X++)for(let tt=0;tt<E;tt++){const $=h+tt+L*X,nt=h+tt+L*(X+1),bt=h+(tt+1)+L*(X+1),Mt=h+(tt+1)+L*X;c.push($,nt,Mt),c.push(nt,bt,Mt),H+=6}a.addGroup(d,H,A),d+=H,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ln extends te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new N,u=new gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class je extends te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let m=0;const _=[],x=n/2;let p=0;g(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(){const M=new N,C=new N;let w=0;const E=(e-t)/n;for(let S=0;S<=r;S++){const A=[],D=S/r,T=D*(e-t)+t;for(let I=0;I<=s;I++){const F=I/s,U=F*c+a,L=Math.sin(U),B=Math.cos(U);C.x=T*L,C.y=-D*n+x,C.z=T*B,f.push(C.x,C.y,C.z),M.set(L,E,B).normalize(),h.push(M.x,M.y,M.z),d.push(F,1-D),A.push(m++)}_.push(A)}for(let S=0;S<s;S++)for(let A=0;A<r;A++){const D=_[A][S],T=_[A+1][S],I=_[A+1][S+1],F=_[A][S+1];(t>0||A!==0)&&(u.push(D,T,F),w+=3),(e>0||A!==r-1)&&(u.push(T,I,F),w+=3)}l.addGroup(p,w,0),p+=w}function y(M){const C=m,w=new gt,E=new N;let S=0;const A=M===!0?t:e,D=M===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,x*D,0),h.push(0,D,0),d.push(.5,.5),m++;const T=m;for(let I=0;I<=s;I++){const U=I/s*c+a,L=Math.cos(U),B=Math.sin(U);E.x=A*B,E.y=x*D,E.z=A*L,f.push(E.x,E.y,E.z),h.push(0,D,0),w.x=L*.5+.5,w.y=B*.5*D+.5,d.push(w.x,w.y),m++}for(let I=0;I<s;I++){const F=C+I,U=T+I;M===!0?u.push(U,U+1,F):u.push(U+1,U,F),S+=3}l.addGroup(p,S,M===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bl extends te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const y=new N,M=new N,C=new N;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],M),d(e[w+2],C),c(y,M,C,g)}function c(g,y,M,C){const w=C+1,E=[];for(let S=0;S<=w;S++){E[S]=[];const A=g.clone().lerp(M,S/w),D=y.clone().lerp(M,S/w),T=w-S;for(let I=0;I<=T;I++)I===0&&S===w?E[S][I]=A:E[S][I]=A.clone().lerp(D,I/T)}for(let S=0;S<w;S++)for(let A=0;A<2*(w-S)-1;A++){const D=Math.floor(A/2);A%2===0?(h(E[S][D+1]),h(E[S+1][D]),h(E[S][D])):(h(E[S][D+1]),h(E[S+1][D+1]),h(E[S+1][D]))}}function l(g){const y=new N;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(g),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function u(){const g=new N;for(let y=0;y<r.length;y+=3){g.x=r[y+0],g.y=r[y+1],g.z=r[y+2];const M=x(g)/2/Math.PI+.5,C=p(g)/Math.PI+.5;o.push(M,1-C)}m(),f()}function f(){for(let g=0;g<o.length;g+=6){const y=o[g+0],M=o[g+2],C=o[g+4],w=Math.max(y,M,C),E=Math.min(y,M,C);w>.9&&E<.1&&(y<.2&&(o[g+0]+=1),M<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function h(g){r.push(g.x,g.y,g.z)}function d(g,y){const M=g*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function m(){const g=new N,y=new N,M=new N,C=new N,w=new gt,E=new gt,S=new gt;for(let A=0,D=0;A<r.length;A+=9,D+=6){g.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),w.set(o[D+0],o[D+1]),E.set(o[D+2],o[D+3]),S.set(o[D+4],o[D+5]),C.copy(g).add(y).add(M).divideScalar(3);const T=x(C);_(w,D+0,g,T),_(E,D+2,y,T),_(S,D+4,M,T)}}function _(g,y,M,C){C<0&&g.x===1&&(o[y]=g.x-1),M.x===0&&M.z===0&&(o[y]=C/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.vertices,t.indices,t.radius,t.detail)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new gt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,s=[],r=[],o=[],a=new N,c=new xe;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ie(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ie(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wl extends qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class nf extends wl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const _c=new N,vc=new N,Xo=new Tl,Yo=new Tl,qo=new Tl;class sf extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(vc.subVectors(s[0],s[1]).add(s[0]),l=vc);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(_c.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_c),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),x<1e-4&&(x=_),Xo.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,_,x),Yo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,_,x),qo.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,_,x)}else this.curveType==="catmullrom"&&(Xo.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Yo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),qo.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Xo.calc(c),Yo.calc(c),qo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function rf(i,t){const e=1-i;return e*e*t}function of(i,t){return 2*(1-i)*i*t}function af(i,t){return i*i*t}function Gs(i,t,e,n){return rf(i,t)+of(i,e)+af(i,n)}function lf(i,t){const e=1-i;return e*e*e*t}function cf(i,t){const e=1-i;return 3*e*e*i*t}function hf(i,t){return 3*(1-i)*i*i*t}function uf(i,t){return i*i*i*t}function Hs(i,t,e,n,s){return lf(i,t)+cf(i,e)+hf(i,n)+uf(i,s)}class jh extends qn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class df extends qn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(t,s.x,r.x,o.x,a.x),Hs(t,s.y,r.y,o.y,a.y),Hs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zh extends qn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ff extends qn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends qn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends qn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Gs(t,s.x,r.x,o.x),Gs(t,s.y,r.y,o.y),Gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kh extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(yc(a,c.x,l.x,u.x,f.x),yc(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Za=Object.freeze({__proto__:null,ArcCurve:nf,CatmullRomCurve3:sf,CubicBezierCurve:jh,CubicBezierCurve3:df,EllipseCurve:wl,LineCurve:Zh,LineCurve3:ff,QuadraticBezierCurve:$h,QuadraticBezierCurve3:pf,SplineCurve:Kh});class mf extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Za[s.type]().fromJSON(s))}return this}}class Mc extends mf{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zh(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new $h(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new jh(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Kh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new wl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Pn extends Mc{constructor(t){super(t),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Mc().fromJSON(s))}return this}}function gf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Jh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Mf(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){const d=i[h],m=i[h+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>f&&(f=m)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return $s(r,o,e,a,c,l,0),o}function Jh(i,t,e,n,s){let r;if(s===Df(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Sc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Sc(o/n|0,i[o],i[o+1],r);return r&&xs(r,r.next)&&(Js(r),r=r.next),r}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(xs(e,e.next)||Te(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Tf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?_f(i,n,s,r):xf(i)){t.push(c.i,i.i,l.i),Js(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=vf(Hi(i),t),$s(i,t,e,n,s,r,2)):o===2&&yf(i,t,e,n,s,r):$s(Hi(i),t,e,n,s,r,1);break}}}function xf(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l);let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&Fs(s,a,r,c,o,l,m.x,m.y)&&Te(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _f(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),m=Math.min(u,f,h),_=Math.max(a,c,l),x=Math.max(u,f,h),p=$a(d,m,t,e,n),g=$a(_,x,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=p&&M&&M.z<=g;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=x&&y!==s&&y!==o&&Fs(a,u,c,f,l,h,y.x,y.y)&&Te(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=_&&M.y>=m&&M.y<=x&&M!==s&&M!==o&&Fs(a,u,c,f,l,h,M.x,M.y)&&Te(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=x&&y!==s&&y!==o&&Fs(a,u,c,f,l,h,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=g;){if(M.x>=d&&M.x<=_&&M.y>=m&&M.y<=x&&M!==s&&M!==o&&Fs(a,u,c,f,l,h,M.x,M.y)&&Te(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!xs(n,s)&&tu(n,e,e.next,s)&&Ks(n,s)&&Ks(s,n)&&(t.push(n.i,e.i,s.i),Js(e),Js(e.next),e=i=s),e=e.next}while(e!==i);return Hi(e)}function yf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cf(o,a)){let c=eu(o,a);o=Hi(o,o.next),c=Hi(c,c.next),$s(o,t,e,n,s,r,0),$s(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Mf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Jh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Pf(l))}s.sort(Sf);for(let r=0;r<s.length;r++)e=Ef(s[r],e);return e}function Sf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ef(i,t){const e=bf(i,t);if(!e)return t;const n=eu(e,i);return Hi(n,n.next),Hi(e,e.next)}function bf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(xs(i,e))return e;do{if(xs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Qh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Ks(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&wf(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function wf(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Tf(i,t,e,n){let s=i;do s.z===0&&(s.z=$a(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Af(s)}function Af(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function $a(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Fs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Qh(i,t,e,n,s,r,o,a)}function Cf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rf(i,t)&&(Ks(i,t)&&Ks(t,i)&&If(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||xs(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function xs(i,t){return i.x===t.x&&i.y===t.y}function tu(i,t,e,n){const s=Ar(Te(i,t,e)),r=Ar(Te(i,t,n)),o=Ar(Te(e,n,i)),a=Ar(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&Tr(i,e,t)||r===0&&Tr(i,n,t)||o===0&&Tr(e,i,n)||a===0&&Tr(e,t,n))}function Tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ar(i){return i>0?1:i<0?-1:0}function Rf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&tu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function If(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function eu(i,t){const e=Ka(i.i,i.x,i.y),n=Ka(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sc(i,t,e,n){const s=Ka(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ka(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Df(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Lf{static triangulate(t,e,n=2){return gf(t,e,n)}}class Gn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Gn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ec(t),bc(n,t);let o=t.length;e.forEach(Ec);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,bc(n,e[c]);const a=Lf.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ec(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Li extends te{constructor(t=new Pn([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,g=e.UVGenerator!==void 0?e.UVGenerator:Nf;let y,M=!1,C,w,E,S;if(p){y=p.getSpacedPoints(u),M=!0,h=!1;const K=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(u,K),w=new N,E=new N,S=new N}h||(x=0,d=0,m=0,_=0);const A=a.extractPoints(l);let D=A.shape;const T=A.holes;if(!Gn.isClockWise(D)){D=D.reverse();for(let K=0,st=T.length;K<st;K++){const et=T[K];Gn.isClockWise(et)&&(T[K]=et.reverse())}}function F(K){const et=10000000000000001e-36;let lt=K[0];for(let ct=1;ct<=K.length;ct++){const yt=ct%K.length,z=K[yt],Gt=z.x-lt.x,Ut=z.y-lt.y,Wt=Gt*Gt+Ut*Ut,xt=Math.max(Math.abs(z.x),Math.abs(z.y),Math.abs(lt.x),Math.abs(lt.y)),se=et*xt*xt;if(Wt<=se){K.splice(yt,1),ct--;continue}lt=z}}F(D),T.forEach(F);const U=T.length,L=D;for(let K=0;K<U;K++){const st=T[K];D=D.concat(st)}function B(K,st,et){return st||ae("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(st,et)}const O=D.length;function H(K,st,et){let lt,ct,yt;const z=K.x-st.x,Gt=K.y-st.y,Ut=et.x-K.x,Wt=et.y-K.y,xt=z*z+Gt*Gt,se=z*Wt-Gt*Ut;if(Math.abs(se)>Number.EPSILON){const R=Math.sqrt(xt),b=Math.sqrt(Ut*Ut+Wt*Wt),k=st.x-Gt/R,J=st.y+z/R,ht=et.x-Wt/b,pt=et.y+Ut/b,St=((ht-k)*Wt-(pt-J)*Ut)/(z*Wt-Gt*Ut);lt=k+z*St-K.x,ct=J+Gt*St-K.y;const Q=lt*lt+ct*ct;if(Q<=2)return new gt(lt,ct);yt=Math.sqrt(Q/2)}else{let R=!1;z>Number.EPSILON?Ut>Number.EPSILON&&(R=!0):z<-Number.EPSILON?Ut<-Number.EPSILON&&(R=!0):Math.sign(Gt)===Math.sign(Wt)&&(R=!0),R?(lt=-Gt,ct=z,yt=Math.sqrt(xt)):(lt=z,ct=Gt,yt=Math.sqrt(xt/2))}return new gt(lt/yt,ct/yt)}const G=[];for(let K=0,st=L.length,et=st-1,lt=K+1;K<st;K++,et++,lt++)et===st&&(et=0),lt===st&&(lt=0),G[K]=H(L[K],L[et],L[lt]);const X=[];let tt,$=G.concat();for(let K=0,st=U;K<st;K++){const et=T[K];tt=[];for(let lt=0,ct=et.length,yt=ct-1,z=lt+1;lt<ct;lt++,yt++,z++)yt===ct&&(yt=0),z===ct&&(z=0),tt[lt]=H(et[lt],et[yt],et[z]);X.push(tt),$=$.concat(tt)}let nt;if(x===0)nt=Gn.triangulateShape(L,T);else{const K=[],st=[];for(let et=0;et<x;et++){const lt=et/x,ct=d*Math.cos(lt*Math.PI/2),yt=m*Math.sin(lt*Math.PI/2)+_;for(let z=0,Gt=L.length;z<Gt;z++){const Ut=B(L[z],G[z],yt);ft(Ut.x,Ut.y,-ct),lt===0&&K.push(Ut)}for(let z=0,Gt=U;z<Gt;z++){const Ut=T[z];tt=X[z];const Wt=[];for(let xt=0,se=Ut.length;xt<se;xt++){const R=B(Ut[xt],tt[xt],yt);ft(R.x,R.y,-ct),lt===0&&Wt.push(R)}lt===0&&st.push(Wt)}}nt=Gn.triangulateShape(K,st)}const bt=nt.length,Mt=m+_;for(let K=0;K<O;K++){const st=h?B(D[K],$[K],Mt):D[K];M?(E.copy(C.normals[0]).multiplyScalar(st.x),w.copy(C.binormals[0]).multiplyScalar(st.y),S.copy(y[0]).add(E).add(w),ft(S.x,S.y,S.z)):ft(st.x,st.y,0)}for(let K=1;K<=u;K++)for(let st=0;st<O;st++){const et=h?B(D[st],$[st],Mt):D[st];M?(E.copy(C.normals[K]).multiplyScalar(et.x),w.copy(C.binormals[K]).multiplyScalar(et.y),S.copy(y[K]).add(E).add(w),ft(S.x,S.y,S.z)):ft(et.x,et.y,f/u*K)}for(let K=x-1;K>=0;K--){const st=K/x,et=d*Math.cos(st*Math.PI/2),lt=m*Math.sin(st*Math.PI/2)+_;for(let ct=0,yt=L.length;ct<yt;ct++){const z=B(L[ct],G[ct],lt);ft(z.x,z.y,f+et)}for(let ct=0,yt=T.length;ct<yt;ct++){const z=T[ct];tt=X[ct];for(let Gt=0,Ut=z.length;Gt<Ut;Gt++){const Wt=B(z[Gt],tt[Gt],lt);M?ft(Wt.x,Wt.y+y[u-1].y,y[u-1].x+et):ft(Wt.x,Wt.y,f+et)}}}j(),ut();function j(){const K=s.length/3;if(h){let st=0,et=O*st;for(let lt=0;lt<bt;lt++){const ct=nt[lt];wt(ct[2]+et,ct[1]+et,ct[0]+et)}st=u+x*2,et=O*st;for(let lt=0;lt<bt;lt++){const ct=nt[lt];wt(ct[0]+et,ct[1]+et,ct[2]+et)}}else{for(let st=0;st<bt;st++){const et=nt[st];wt(et[2],et[1],et[0])}for(let st=0;st<bt;st++){const et=nt[st];wt(et[0]+O*u,et[1]+O*u,et[2]+O*u)}}n.addGroup(K,s.length/3-K,0)}function ut(){const K=s.length/3;let st=0;rt(L,st),st+=L.length;for(let et=0,lt=T.length;et<lt;et++){const ct=T[et];rt(ct,st),st+=ct.length}n.addGroup(K,s.length/3-K,1)}function rt(K,st){let et=K.length;for(;--et>=0;){const lt=et;let ct=et-1;ct<0&&(ct=K.length-1);for(let yt=0,z=u+x*2;yt<z;yt++){const Gt=O*yt,Ut=O*(yt+1),Wt=st+lt+Gt,xt=st+ct+Gt,se=st+ct+Ut,R=st+lt+Ut;dt(Wt,xt,se,R)}}}function ft(K,st,et){c.push(K),c.push(st),c.push(et)}function wt(K,st,et){Rt(K),Rt(st),Rt(et);const lt=s.length/3,ct=g.generateTopUV(n,s,lt-3,lt-2,lt-1);Pt(ct[0]),Pt(ct[1]),Pt(ct[2])}function dt(K,st,et,lt){Rt(K),Rt(st),Rt(lt),Rt(st),Rt(et),Rt(lt);const ct=s.length/3,yt=g.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);Pt(yt[0]),Pt(yt[1]),Pt(yt[3]),Pt(yt[1]),Pt(yt[2]),Pt(yt[3])}function Rt(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function Pt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Uf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Za[s.type]().fromJSON(s)),new Li(n,t.options)}}const Nf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new gt(r,o),new gt(a,c),new gt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],x=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new gt(o,1-c),new gt(l,1-f),new gt(h,1-m),new gt(_,1-p)]:[new gt(a,1-c),new gt(u,1-f),new gt(d,1-m),new gt(x,1-p)]}};function Uf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class cs extends bl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cs(t.radius,t.detail)}}class Ms extends te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],m=[],_=[],x=[];for(let p=0;p<u;p++){const g=p*h-o;for(let y=0;y<l;y++){const M=y*f-r;m.push(M,-g,0),_.push(0,0,1),x.push(y/a),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let g=0;g<a;g++){const y=g+l*p,M=g+l*(p+1),C=g+1+l*(p+1),w=g+1+l*p;d.push(y,M,w),d.push(M,C,w)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.width,t.height,t.widthSegments,t.heightSegments)}}class Al extends te{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let f=t;const h=(e-t)/s,d=new N,m=new gt;for(let _=0;_<=s;_++){for(let x=0;x<=n;x++){const p=r+x/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}f+=h}for(let _=0;_<s;_++){const x=_*(n+1);for(let p=0;p<n;p++){const g=p+x,y=g,M=g+n+1,C=g+n+2,w=g+1;a.push(y,M,w),a.push(M,C,w)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qs extends te{constructor(t=new Pn([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function l(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const m=h.holes;Gn.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,p=m.length;x<p;x++){const g=m[x];Gn.isClockWise(g)===!0&&(m[x]=g.reverse())}const _=Gn.triangulateShape(d,m);for(let x=0,p=m.length;x<p;x++){const g=m[x];d=d.concat(g)}for(let x=0,p=d.length;x<p;x++){const g=d[x];s.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let x=0,p=_.length;x<p;x++){const g=_[x],y=g[0]+f,M=g[1]+f,C=g[2]+f;n.push(y,M,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ff(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Qs(n,t.curveSegments)}}function Ff(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Pl extends te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new N,h=new N,d=[],m=[],_=[],x=[];for(let p=0;p<=n;p++){const g=[],y=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const w=C/e;f.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),x.push(w+M,1-y),g.push(l++)}u.push(g)}for(let p=0;p<n;p++)for(let g=0;g<e;g++){const y=u[p][g+1],M=u[p][g],C=u[p+1][g],w=u[p+1][g+1];(p!==0||o>0)&&d.push(y,M,w),(p!==n-1||c<Math.PI)&&d.push(M,C,w)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ni extends te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],f=[],h=new N,d=new N,m=new N;for(let _=0;_<=n;_++){const x=o+_/n*a;for(let p=0;p<=s;p++){const g=p/s*r;d.x=(t+e*Math.cos(x))*Math.cos(g),d.y=(t+e*Math.cos(x))*Math.sin(g),d.z=e*Math.sin(x),l.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(p/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=s;x++){const p=(s+1)*_+x-1,g=(s+1)*(_-1)+x-1,y=(s+1)*(_-1)+x,M=(s+1)*_+x;c.push(p,g,M),c.push(g,y,M)}this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function _s(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(wc(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(wc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=_s(i[e]);for(const s in n)t[s]=n[s]}return t}function wc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Of(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Bi={clone:_s,merge:sn};var Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class iu extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class as extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kf extends Wi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Vf extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gf extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Tc extends hn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Ac={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Pc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Pc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pc(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Hf{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wf=new Hf;class Cl{constructor(t){this.manager=t!==void 0?t:Wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class Xf extends Error{constructor(t,e){super(t),this.response=e}}class Yf extends Cl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ac.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:s});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Xt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ti[t],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let _=0;const x=new ReadableStream({start(p){g();function g(){f.read().then(({done:y,value:M})=>{if(y)p.close();else{_+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,E=u.length;w<E;w++){const S=u[w];S.onProgress&&S.onProgress(C)}p.enqueue(M),g()}},y=>{p.error(y)})}}});return new Response(x)}else throw new Xf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Ac.add(`file:${t}`,l);const u=ti[t];delete ti[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=ti[t];if(u===void 0)throw this.manager.itemError(t),l;delete ti[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class su extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const jo=new xe,Cc=new N,Rc=new N;class qf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rc),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===js||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pr=new N,Cr=new Ye,On=new N;class ru extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pr,Cr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Cr,On.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Pr,Cr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Cr,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new N,Ic=new gt,Dc=new gt;class En extends ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Ic,Dc),e.subVectors(Dc,Ic)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class er extends ru{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jf extends qf{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lc extends su{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new jf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Zf extends su{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $f extends te{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Kf extends Cl{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Yf(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){s?s(c):ae(c),r.manager.itemError(t)}},n,s)}parse(t){const e={},n={};function s(d,m){if(e[m]!==void 0)return e[m];const x=d.interleavedBuffers[m],p=r(d,x.buffer),g=or(x.type,p),y=new qd(g,x.stride);return y.uuid=x.uuid,e[m]=y,y}function r(d,m){if(n[m]!==void 0)return n[m];const x=d.arrayBuffers[m],p=new Uint32Array(x).buffer;return n[m]=p,p}const o=t.isInstancedBufferGeometry?new $f:new te,a=t.data.index;if(a!==void 0){const d=or(a.type,a.array);o.setIndex(new on(d,1))}const c=t.data.attributes;for(const d in c){const m=c[d];let _;if(m.isInterleavedBufferAttribute){const x=s(t.data,m.data);_=new so(x,m.itemSize,m.offset,m.normalized)}else{const x=or(m.type,m.array),p=m.isInstancedBufferAttribute?$d:on;_=new p(x,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),o.setAttribute(d,_)}const l=t.data.morphAttributes;if(l)for(const d in l){const m=l[d],_=[];for(let x=0,p=m.length;x<p;x++){const g=m[x];let y;if(g.isInterleavedBufferAttribute){const M=s(t.data,g.data);y=new so(M,g.itemSize,g.offset,g.normalized)}else{const M=or(g.type,g.array);y=new on(M,g.itemSize,g.normalized)}g.name!==void 0&&(y.name=g.name),_.push(y)}o.morphAttributes[d]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const f=t.data.groups||t.data.drawcalls||t.data.offsets;if(f!==void 0)for(let d=0,m=f.length;d!==m;++d){const _=f[d];o.addGroup(_.start,_.count,_.materialIndex)}const h=t.data.boundingSphere;return h!==void 0&&(o.boundingSphere=new tr().fromJSON(h)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}const ss=-90,rs=1;class Jf extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(ss,rs,t,e);s.layers=this.layers,this.add(s);const r=new En(ss,rs,t,e);r.layers=this.layers,this.add(r);const o=new En(ss,rs,t,e);o.layers=this.layers,this.add(o);const a=new En(ss,rs,t,e);a.layers=this.layers,this.add(a);const c=new En(ss,rs,t,e);c.layers=this.layers,this.add(c);const l=new En(ss,rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Qf extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class tp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ep.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ep(){this._document.hidden===!1&&this.reset()}const Nc=new xe;class ou{constructor(t,e,n=0,s=1/0){this.ray=new fo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nc),this}intersectObject(t,e=!0,n=[]){return Ja(t,this,n,e),n.sort(Uc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ja(t[s],this,n,e);return n.sort(Uc),n}}function Uc(i,t){return i.distance-t.distance}function Ja(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ja(r[o],t,e,!0)}}class Fc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ol=class Ol{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Ol.prototype.isMatrix2=!0;let Oc=Ol;class np extends tf{constructor(t=10,e=10,n=4473924,s=8947848){n=new ee(n),s=new ee(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,d=0,m=-a;h<=e;h++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const _=h===r?n:s;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const u=new te;u.setAttribute("position",new Zt(c,3)),u.setAttribute("color",new Zt(l,3));const f=new hn({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class au extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Xt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Bc(i,t,e,n){const s=ip(n);switch(e){case Oh:return i*t;case pl:return i*t/s.components*s.byteLength;case ml:return i*t/s.components*s.byteLength;case Vi:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case Bh:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:case ya:return Math.max(i,16)*Math.max(t,8)/4;case xa:case va:return Math.max(i,8)*Math.max(t,8)/2;case Ma:case Sa:case ba:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Kr:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case Ga:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ip(i){switch(i){case xn:case Lh:return{byteLength:1,components:1};case qs:case Nh:case bn:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case Yn:case ul:case Ln:return{byteLength:4,components:1};case Uh:case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sp(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`uniform sampler2D dfgLUT;
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
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
}`,dg=`#if DEPTH_PACKING == 3200
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
}`,fg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
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
}`,_g=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,yg=`uniform vec3 diffuse;
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
}`,Mg=`#define LAMBERT
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
}`,Sg=`#define LAMBERT
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
}`,Eg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,Ag=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,Cg=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Ig=`#define TOON
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
}`,Dg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Fg=`uniform vec3 color;
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
}`,Og=`uniform float rotation;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:xp,iridescence_fragment:_p,bumpmap_pars_fragment:vp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:Ep,color_fragment:bp,color_pars_fragment:wp,color_pars_vertex:Tp,color_vertex:Ap,common:Pp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Dp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Np,colorspace_fragment:Up,colorspace_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:Bp,envmap_pars_fragment:zp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Kp,envmap_vertex:Vp,fog_vertex:Gp,fog_pars_vertex:Hp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:qp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:Zp,lights_pars_begin:$p,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,lightprobes_pars_fragment:am,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:um,map_fragment:dm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:xm,morphinstance_vertex:_m,morphcolor_vertex:vm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:Sm,normal_fragment_begin:Em,normal_fragment_maps:bm,normal_pars_fragment:wm,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Dm,opaque_fragment:Lm,packing:Nm,premultiplied_alpha_fragment:Um,project_vertex:Fm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:Ym,skinning_vertex:qm,skinnormal_vertex:jm,specularmap_fragment:Zm,specularmap_pars_fragment:$m,tonemapping_fragment:Km,tonemapping_pars_fragment:Jm,transmission_fragment:Qm,transmission_pars_fragment:tg,uv_pars_fragment:eg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:og,backgroundCube_vert:ag,backgroundCube_frag:lg,cube_vert:cg,cube_frag:hg,depth_vert:ug,depth_frag:dg,distance_vert:fg,distance_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:xg,linedashed_frag:_g,meshbasic_vert:vg,meshbasic_frag:yg,meshlambert_vert:Mg,meshlambert_frag:Sg,meshmatcap_vert:Eg,meshmatcap_frag:bg,meshnormal_vert:wg,meshnormal_frag:Tg,meshphong_vert:Ag,meshphong_frag:Pg,meshphysical_vert:Cg,meshphysical_frag:Rg,meshtoon_vert:Ig,meshtoon_frag:Dg,points_vert:Lg,points_frag:Ng,shadow_vert:Ug,shadow_frag:Fg,sprite_vert:Og,sprite_frag:Bg},Dt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},kn={basic:{uniforms:sn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:sn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:sn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:sn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:sn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ee(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:sn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:sn([Dt.points,Dt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:sn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:sn([Dt.common,Dt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:sn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:sn([Dt.sprite,Dt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:sn([Dt.common,Dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:sn([Dt.lights,Dt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};kn.physical={uniforms:sn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Rr={r:0,b:0,g:0},zg=new xe,cu=new $t;cu.set(-1,0,0,0,1,0,0,0,1);function kg(i,t,e,n,s,r){const o=new ee(0);let a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const M=g.backgroundBlurriness>0;y=t.get(y,M)}return y}function m(g){let y=!1;const M=d(g);M===null?x(o,a):M&&M.isColor&&(x(M,1),y=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(g,y){const M=d(y);M&&(M.isCubeTexture||M.mapping===uo)?(l===void 0&&(l=new _t(new Pe(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:_s(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cu),l.material.toneMapped=le.getTransfer(M.colorSpace)!==de,(u!==M||f!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new _t(new Ms(2,2),new Ze({name:"BackgroundMaterial",uniforms:_s(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(M.colorSpace)!==de,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,y){g.getRGB(Rr,nu(i)),e.buffers.color.setClear(Rr.r,Rr.g,Rr.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,y=1){o.set(g),a=y,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,x(o,a)},render:m,addToRenderList:_,dispose:p}}function Vg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(T,I,F,U,L){let B=!1;const O=f(T,U,F,I);r!==O&&(r=O,l(r.object)),B=d(T,U,F,L),B&&m(T,U,F,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(T,I,F,U),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function f(T,I,F,U){const L=U.wireframe===!0;let B=n[I.id];B===void 0&&(B={},n[I.id]=B);const O=T.isInstancedMesh===!0?T.id:0;let H=B[O];H===void 0&&(H={},B[O]=H);let G=H[F.id];G===void 0&&(G={},H[F.id]=G);let X=G[L];return X===void 0&&(X=h(c()),G[L]=X),X}function h(T){const I=[],F=[],U=[];for(let L=0;L<e;L++)I[L]=0,F[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:U,object:T,attributes:{},index:null}}function d(T,I,F,U){const L=r.attributes,B=I.attributes;let O=0;const H=F.getAttributes();for(const G in H)if(H[G].location>=0){const tt=L[G];let $=B[G];if($===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&($=T.instanceColor)),tt===void 0||tt.attribute!==$||$&&tt.data!==$.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function m(T,I,F,U){const L={},B=I.attributes;let O=0;const H=F.getAttributes();for(const G in H)if(H[G].location>=0){let tt=B[G];tt===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(tt=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(tt=T.instanceColor));const $={};$.attribute=tt,tt&&tt.data&&($.data=tt.data),L[G]=$,O++}r.attributes=L,r.attributesNum=O,r.index=U}function _(){const T=r.newAttributes;for(let I=0,F=T.length;I<F;I++)T[I]=0}function x(T){p(T,0)}function p(T,I){const F=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;F[T]=1,U[T]===0&&(i.enableVertexAttribArray(T),U[T]=1),L[T]!==I&&(i.vertexAttribDivisor(T,I),L[T]=I)}function g(){const T=r.newAttributes,I=r.enabledAttributes;for(let F=0,U=I.length;F<U;F++)I[F]!==T[F]&&(i.disableVertexAttribArray(F),I[F]=0)}function y(T,I,F,U,L,B,O){O===!0?i.vertexAttribIPointer(T,I,F,L,B):i.vertexAttribPointer(T,I,F,U,L,B)}function M(T,I,F,U){_();const L=U.attributes,B=F.getAttributes(),O=I.defaultAttributeValues;for(const H in B){const G=B[H];if(G.location>=0){let X=L[H];if(X===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(X=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(X=T.instanceColor)),X!==void 0){const tt=X.normalized,$=X.itemSize,nt=t.get(X);if(nt===void 0)continue;const bt=nt.buffer,Mt=nt.type,j=nt.bytesPerElement,ut=Mt===i.INT||Mt===i.UNSIGNED_INT||X.gpuType===ul;if(X.isInterleavedBufferAttribute){const rt=X.data,ft=rt.stride,wt=X.offset;if(rt.isInstancedInterleavedBuffer){for(let dt=0;dt<G.locationSize;dt++)p(G.location+dt,rt.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let dt=0;dt<G.locationSize;dt++)x(G.location+dt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let dt=0;dt<G.locationSize;dt++)y(G.location+dt,$/G.locationSize,Mt,tt,ft*j,(wt+$/G.locationSize*dt)*j,ut)}else{if(X.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt,X.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let rt=0;rt<G.locationSize;rt++)x(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,bt);for(let rt=0;rt<G.locationSize;rt++)y(G.location+rt,$/G.locationSize,Mt,tt,$*j,$/G.locationSize*rt*j,ut)}}else if(O!==void 0){const tt=O[H];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(G.location,tt);break;case 3:i.vertexAttrib3fv(G.location,tt);break;case 4:i.vertexAttrib4fv(G.location,tt);break;default:i.vertexAttrib1fv(G.location,tt)}}}}g()}function C(){A();for(const T in n){const I=n[T];for(const F in I){const U=I[F];for(const L in U){const B=U[L];for(const O in B)u(B[O].object),delete B[O];delete U[L]}}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const I=n[T.id];for(const F in I){const U=I[F];for(const L in U){const B=U[L];for(const O in B)u(B[O].object),delete B[O];delete U[L]}}delete n[T.id]}function E(T){for(const I in n){const F=n[I];for(const U in F){const L=F[U];if(L[T.id]===void 0)continue;const B=L[T.id];for(const O in B)u(B[O].object),delete B[O];delete L[T.id]}}}function S(T){for(const I in n){const F=n[I],U=T.isInstancedMesh===!0?T.id:0,L=F[U];if(L!==void 0){for(const B in L){const O=L[B];for(const H in O)u(O[H].object),delete O[H];delete L[B]}delete F[U],Object.keys(F).length===0&&delete n[I]}}}function A(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:x,disableUnusedAttributes:g}}function Gg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Hg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const S=E===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ln&&!S)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Xt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:M,maxSamples:C,samples:w}}function Wg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ei,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!x)r?u(null):l();else{const g=r?0:n,y=g*4;let M=p.clippingState||null;c.value=M,M=u(m,h,y,d);for(let C=0;C!==y;++C)M[C]=e[C];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){const _=f!==null?f.length:0;let x=null;if(_!==0){if(x=c.value,m!==!0||x===null){const p=d+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(x===null||x.length<p)&&(x=new Float32Array(p));for(let y=0,M=d;y!==_;++y,M+=4)o.copy(f[y]).applyMatrix4(g,a),o.normal.toArray(x,M),x[M+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}const Si=4,zc=[.125,.215,.35,.446,.526,.582],Ui=20,Xg=256,Cs=new er,kc=new ee;let Zo=null,$o=0,Ko=0,Jo=!1;const Yg=new N;class Vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Yg}=r;Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,$o,Ko),this._renderer.xr.enabled=Jo,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:bn,format:Nn,colorSpace:to,depthBuffer:!1},s=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qg(r)),this._blurMaterial=Zg(r,t,e),this._ggxMaterial=jg(r,t,e)}return s}_compileMaterial(t){const e=new _t(new te,t);this._renderer.compile(e,Cs)}_sceneToCubeUV(t,e,n,s,r){const c=new En(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(kc),f.toneMapping=Wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Pe,new Le({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,x=_.material;let p=!1;const g=t.background;g?g.isColor&&(x.color.copy(g),t.background=null,p=!0):(x.color.copy(kc),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):M===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const C=this._cubeSize;os(s,M*C,y>2?C:0,C,C),f.setRenderTarget(s),p&&f.render(_,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ki||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Cs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,d=f*h,{_lodMax:m}=this,_=this._sizeLods[n],x=3*_*(n>m-Si?n-m+Si:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,os(r,x,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Cs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,os(t,x,p,3*_,2*_),s.setRenderTarget(t),s.render(a,Cs)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ae("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=l;const h=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ui-1),_=r/m,x=isFinite(r)?1+Math.floor(u*_):Ui;x>Ui&&Xt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ui}`);const p=[];let g=0;for(let E=0;E<Ui;++E){const S=E/_,A=Math.exp(-S*S/2);p.push(A),E===0?g+=A:E<x&&(g+=2*A)}for(let E=0;E<p.length;E++)p[E]=p[E]/g;h.envMap.value=t.texture,h.samples.value=x,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const M=this._sizeLods[s],C=3*M*(s>y-Si?s-y+Si:0),w=4*(this._cubeSize-M);os(e,C,w,3*M,2*M),c.setRenderTarget(e),c.render(f,Cs)}}function qg(i){const t=[],e=[],n=[];let s=i;const r=i-Si+1+zc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Si?c=zc[o-i+Si-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,_=3,x=2,p=1,g=new Float32Array(_*m*d),y=new Float32Array(x*m*d),M=new Float32Array(p*m*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,S=w>2?0:-1,A=[E,S,0,E+2/3,S,0,E+2/3,S+1,0,E,S,0,E+2/3,S+1,0,E,S+1,0];g.set(A,_*m*w),y.set(h,x*m*w);const D=[w,w,w,w,w,w];M.set(D,p*m*w)}const C=new te;C.setAttribute("position",new on(g,_)),C.setAttribute("uv",new on(y,x)),C.setAttribute("faceIndex",new on(M,p)),n.push(new _t(C,null)),s>Si&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Gc(i,t,e){const n=new vn(i,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jg(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:po(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Zg(i,t,e){const n=new Float32Array(Ui),s=new N(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:po(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Hc(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Wc(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function po(){return`

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
	`}class hu extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:tn});r.uniforms.tEquirect.value=e;const o=new _t(s,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=en),new Jf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function $g(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===vo||d===yo)if(t.has(h)){const m=t.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const _=new hu(m.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,m=d===vo||d===yo,_=d===ki||d===ms;if(m||_){let x=e.get(h);const p=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Vc(i)),x=m?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const g=h.image;return m&&g&&g.height>0||_&&g&&c(g)?(n===null&&(n=new Vc(i)),x=m?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function a(h,d){return d===vo?h.mapping=ki:d===yo&&(h.mapping=ms),h}function c(h){let d=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&d++;return d===m}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Kg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ja("WebGLRenderer: "+n+" extension not supported."),s}}}function Jg(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,m=f.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const g=d.array;_=d.version;for(let y=0,M=g.length;y<M;y+=3){const C=g[y+0],w=g[y+1],E=g[y+2];h.push(C,w,w,E,E,C)}}else{const g=m.array;_=m.version;for(let y=0,M=g.length/3-1;y<M;y+=3){const C=y+0,w=y+1,E=y+2;h.push(C,w,w,E,E,C)}}const x=new(m.count>=65535?Wh:Hh)(h,1);x.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,x)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Qg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function t0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function e0(i,t,e){const n=new WeakMap,s=new Ce;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let A=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let M=a.attributes.position.count*y,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const w=new Float32Array(M*C*4*f),E=new Vh(w,M,C,f);E.type=Ln,E.needsUpdate=!0;const S=y*4;for(let D=0;D<f;D++){const T=x[D],I=p[D],F=g[D],U=M*C*4*D;for(let L=0;L<T.count;L++){const B=L*S;d===!0&&(s.fromBufferAttribute(T,L),w[U+B+0]=s.x,w[U+B+1]=s.y,w[U+B+2]=s.z,w[U+B+3]=0),m===!0&&(s.fromBufferAttribute(I,L),w[U+B+4]=s.x,w[U+B+5]=s.y,w[U+B+6]=s.z,w[U+B+7]=0),_===!0&&(s.fromBufferAttribute(F,L),w[U+B+8]=s.x,w[U+B+9]=s.y,w[U+B+10]=s.z,w[U+B+11]=F.itemSize===4?s.w:1)}}h={count:f,texture:E,size:new gt(M,C)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function n0(i,t,e,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const i0={[sl]:"LINEAR_TONE_MAPPING",[rl]:"REINHARD_TONE_MAPPING",[ol]:"CINEON_TONE_MAPPING",[al]:"ACES_FILMIC_TONE_MAPPING",[cl]:"AGX_TONE_MAPPING",[hl]:"NEUTRAL_TONE_MAPPING",[ll]:"CUSTOM_TONE_MAPPING"};function s0(i,t,e,n,s){const r=new vn(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Gi(t,e):void 0}),o=new vn(t,e,{type:bn,depthBuffer:!1,stencilBuffer:!1}),a=new te;a.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const c=new iu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new _t(a,c),u=new er(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,_=null,x=[],p=!1;this.setSize=function(g,y){r.setSize(g,y),o.setSize(g,y);for(let M=0;M<x.length;M++){const C=x[M];C.setSize&&C.setSize(g,y)}},this.setEffects=function(g){x=g,p=x.length>0&&x[0].isRenderPass===!0;const y=r.width,M=r.height;for(let C=0;C<x.length;C++){const w=x[C];w.setSize&&w.setSize(y,M)}},this.begin=function(g,y){if(d||g.toneMapping===Wn&&x.length===0)return!1;if(_=y,y!==null){const M=y.width,C=y.height;(r.width!==M||r.height!==C)&&this.setSize(M,C)}return p===!1&&g.setRenderTarget(r),m=g.toneMapping,g.toneMapping=Wn,!0},this.hasRenderPass=function(){return p},this.end=function(g,y){g.toneMapping=m,d=!0;let M=r,C=o;for(let w=0;w<x.length;w++){const E=x[w];if(E.enabled!==!1&&(E.render(g,C,M,y),E.needsSwap!==!1)){const S=M;M=C,C=S}}if(f!==g.outputColorSpace||h!==g.toneMapping){f=g.outputColorSpace,h=g.toneMapping,c.defines={},le.getTransfer(f)===de&&(c.defines.SRGB_TRANSFER="");const w=i0[h];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,g.setRenderTarget(_),g.render(l,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const uu=new rn,Qa=new Gi(1,1),du=new Vh,fu=new Ud,pu=new Yh,Xc=[],Yc=[],qc=new Float32Array(16),jc=new Float32Array(9),Zc=new Float32Array(4);function Ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mo(i,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function r0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function c0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;Zc.set(n),i.uniformMatrix2fv(this.addr,!1,Zc),We(e,n)}}function h0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;jc.set(n),i.uniformMatrix3fv(this.addr,!1,jc),We(e,n)}}function u0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;qc.set(n),i.uniformMatrix4fv(this.addr,!1,qc),We(e,n)}}function d0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function g0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function v0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qa.compareFunction=e.isReversedDepthBuffer()?vl:_l,r=Qa):r=uu,e.setTexture2D(t||r,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fu,s)}function S0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pu,s)}function E0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||du,s)}function b0(i){switch(i){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return x0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}function w0(i,t){i.uniform1fv(this.addr,t)}function T0(i,t){const e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function A0(i,t){const e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function P0(i,t){const e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function C0(i,t){const e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function R0(i,t){const e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I0(i,t){const e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function D0(i,t){i.uniform1iv(this.addr,t)}function L0(i,t){i.uniform2iv(this.addr,t)}function N0(i,t){i.uniform3iv(this.addr,t)}function U0(i,t){i.uniform4iv(this.addr,t)}function F0(i,t){i.uniform1uiv(this.addr,t)}function O0(i,t){i.uniform2uiv(this.addr,t)}function B0(i,t){i.uniform3uiv(this.addr,t)}function z0(i,t){i.uniform4uiv(this.addr,t)}function k0(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Qa:o=uu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function V0(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fu,r[o])}function G0(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pu,r[o])}function H0(i,t,e){const n=this.cache,s=t.length,r=mo(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||du,r[o])}function W0(i){switch(i){case 5126:return w0;case 35664:return T0;case 35665:return A0;case 35666:return P0;case 35674:return C0;case 35675:return R0;case 35676:return I0;case 5124:case 35670:return D0;case 35667:case 35671:return L0;case 35668:case 35672:return N0;case 35669:case 35673:return U0;case 5125:return F0;case 36294:return O0;case 36295:return B0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return H0}}class X0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b0(e.type)}}class Y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W0(e.type)}}class q0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function j0(i,t,e){const n=i.name,s=n.length;for(Qo.lastIndex=0;;){const r=Qo.exec(n),o=Qo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$c(e,l===void 0?new X0(a,i,t):new Y0(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new q0(a),$c(e,f)),e=f}}}class jr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);j0(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Kc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Z0=37297;let $0=0;function K0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Jc=new $t;function J0(i){le._getMatrix(Jc,le.workingColorSpace,i);const t=`mat3( ${Jc.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case eo:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+K0(i.getShaderSource(t),a)}else return r}function Q0(i,t){const e=J0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const tx={[sl]:"Linear",[rl]:"Reinhard",[ol]:"Cineon",[al]:"ACESFilmic",[cl]:"AgX",[hl]:"Neutral",[ll]:"Custom"};function ex(i,t){const e=tx[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new N;function nx(){le.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function sx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Os(i){return i!==""}function th(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(ox,lx)}const ax=new Map;function lx(i,t){let e=ne[t];if(e===void 0){const n=ax.get(t);if(n!==void 0)e=ne[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tl(e)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(cx,hx)}function hx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const ux={[Hr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function dx(i){return ux[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fx={[ki]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE_UV"};function px(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":fx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const mx={[ms]:"ENVMAP_MODE_REFRACTION"};function gx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":mx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xx={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[Ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function _x(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xx[i.combine]||"ENVMAP_BLENDING_NONE"}function vx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function yx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=dx(e),l=px(e),u=gx(e),f=_x(e),h=vx(e),d=ix(e),m=sx(r),_=s.createProgram();let x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Os).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(x=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Wn?ex("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=tl(o),o=th(o,e),o=eh(o,e),a=tl(a),a=th(a,e),a=eh(a,e),o=nh(o),a=nh(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=g+x+o,M=g+p+a,C=Kc(s,s.VERTEX_SHADER,y),w=Kc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,C),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(T){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(C)||"",U=s.getShaderInfoLog(w)||"",L=I.trim(),B=F.trim(),O=U.trim();let H=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,w);else{const X=Qc(s,C,"vertex"),tt=Qc(s,w,"fragment");ae("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+X+`
`+tt)}else L!==""?Xt("WebGLProgram: Program Info Log:",L):(B===""||O==="")&&(G=!1);G&&(T.diagnostics={runnable:H,programLog:L,vertexShader:{log:B,prefix:x},fragmentShader:{log:O,prefix:p}})}s.deleteShader(C),s.deleteShader(w),S=new jr(s,_),A=rx(s,_)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,Z0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let Mx=0;class Sx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ex(t),e.set(t,n)),n}}class Ex{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}}function bx(i){return i===Vi||i===Kr||i===Jr}function wx(i,t,e,n,s,r){const o=new Sl,a=new Sx,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function _(S,A,D,T,I,F){const U=T.fog,L=I.geometry,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?T.environment:null,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,H=t.get(S.envMap||B,O),G=H&&H.mapping===uo?H.image.height:null,X=d[S.type];S.precision!==null&&(h=n.getMaxPrecision(S.precision),h!==S.precision&&Xt("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const tt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=tt!==void 0?tt.length:0;let nt=0;L.morphAttributes.position!==void 0&&(nt=1),L.morphAttributes.normal!==void 0&&(nt=2),L.morphAttributes.color!==void 0&&(nt=3);let bt,Mt,j,ut;if(X){const Kt=kn[X];bt=Kt.vertexShader,Mt=Kt.fragmentShader}else bt=S.vertexShader,Mt=S.fragmentShader,a.update(S),j=a.getVertexShaderID(S),ut=a.getFragmentShaderID(S);const rt=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),wt=I.isInstancedMesh===!0,dt=I.isBatchedMesh===!0,Rt=!!S.map,Pt=!!S.matcap,K=!!H,st=!!S.aoMap,et=!!S.lightMap,lt=!!S.bumpMap,ct=!!S.normalMap,yt=!!S.displacementMap,z=!!S.emissiveMap,Gt=!!S.metalnessMap,Ut=!!S.roughnessMap,Wt=S.anisotropy>0,xt=S.clearcoat>0,se=S.dispersion>0,R=S.iridescence>0,b=S.sheen>0,k=S.transmission>0,J=Wt&&!!S.anisotropyMap,ht=xt&&!!S.clearcoatMap,pt=xt&&!!S.clearcoatNormalMap,St=xt&&!!S.clearcoatRoughnessMap,Q=R&&!!S.iridescenceMap,it=R&&!!S.iridescenceThicknessMap,Ct=b&&!!S.sheenColorMap,It=b&&!!S.sheenRoughnessMap,Et=!!S.specularMap,vt=!!S.specularColorMap,Yt=!!S.specularIntensityMap,jt=k&&!!S.transmissionMap,oe=k&&!!S.thicknessMap,V=!!S.gradientMap,Tt=!!S.alphaMap,ot=S.alphaTest>0,Ft=!!S.alphaHash,At=!!S.extensions;let mt=Wn;S.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(mt=i.toneMapping);const kt={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:bt,fragmentShader:Mt,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:ut,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:dt,batchingColor:dt&&I._colorsTexture!==null,instancing:wt,instancingColor:wt&&I.instanceColor!==null,instancingMorph:wt&&I.morphTexture!==null,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Rt,matcap:Pt,envMap:K,envMapMode:K&&H.mapping,envMapCubeUVHeight:G,aoMap:st,lightMap:et,bumpMap:lt,normalMap:ct,displacementMap:yt,emissiveMap:z,normalMapObjectSpace:ct&&S.normalMapType===nd,normalMapTangentSpace:ct&&S.normalMapType===Qr,packedNormalMap:ct&&S.normalMapType===Qr&&bx(S.normalMap.format),metalnessMap:Gt,roughnessMap:Ut,anisotropy:Wt,anisotropyMap:J,clearcoat:xt,clearcoatMap:ht,clearcoatNormalMap:pt,clearcoatRoughnessMap:St,dispersion:se,iridescence:R,iridescenceMap:Q,iridescenceThicknessMap:it,sheen:b,sheenColorMap:Ct,sheenRoughnessMap:It,specularMap:Et,specularColorMap:vt,specularIntensityMap:Yt,transmission:k,transmissionMap:jt,thicknessMap:oe,gradientMap:V,opaque:S.transparent===!1&&S.blending===ds&&S.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ot,alphaHash:Ft,combine:S.combine,mapUv:Rt&&m(S.map.channel),aoMapUv:st&&m(S.aoMap.channel),lightMapUv:et&&m(S.lightMap.channel),bumpMapUv:lt&&m(S.bumpMap.channel),normalMapUv:ct&&m(S.normalMap.channel),displacementMapUv:yt&&m(S.displacementMap.channel),emissiveMapUv:z&&m(S.emissiveMap.channel),metalnessMapUv:Gt&&m(S.metalnessMap.channel),roughnessMapUv:Ut&&m(S.roughnessMap.channel),anisotropyMapUv:J&&m(S.anisotropyMap.channel),clearcoatMapUv:ht&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:it&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&m(S.sheenRoughnessMap.channel),specularMapUv:Et&&m(S.specularMap.channel),specularColorMapUv:vt&&m(S.specularColorMap.channel),specularIntensityMapUv:Yt&&m(S.specularIntensityMap.channel),transmissionMapUv:jt&&m(S.transmissionMap.channel),thicknessMapUv:oe&&m(S.thicknessMap.channel),alphaMapUv:Tt&&m(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ct||Wt),vertexNormals:!!L.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Rt||Tt),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||L.attributes.normal===void 0&&ct===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ft,skinning:I.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:nt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,decodeVideoTexture:Rt&&S.map.isVideoTexture===!0&&le.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:z&&S.emissiveMap.isVideoTexture===!0&&le.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qe,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:At&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&S.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function x(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)A.push(D),A.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(p(A,S),g(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function p(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function g(S,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function y(S){const A=d[S.type];let D;if(A){const T=kn[A];D=Bi.clone(T.uniforms)}else D=S.uniforms;return D}function M(S,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new yx(i,A,S,s),l.push(D),u.set(A,D)),D}function C(S){if(--S.usedTimes===0){const A=l.indexOf(S);l[A]=l[l.length-1],l.pop(),u.delete(S.cacheKey),S.destroy()}}function w(S){a.remove(S)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:w,programs:l,dispose:E}}function Tx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ax(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,_,x,p){let g=i[t];return g===void 0?(g={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},i[t]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=m,g.materialVariant=o(h),g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=x,g.group=p),t++,g}function c(h,d,m,_,x,p){const g=a(h,d,m,_,x,p);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):e.push(g)}function l(h,d,m,_,x,p){const g=a(h,d,m,_,x,p);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):e.unshift(g)}function u(h,d){e.length>1&&e.sort(h||Ax),n.length>1&&n.sort(d||sh),s.length>1&&s.sort(d||sh)}function f(){for(let h=t,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function Px(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new rh,i.set(n,[o])):s>=r.length?(o=new rh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Cx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ee};break;case"SpotLight":e={position:new N,direction:new N,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Rx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ix=0;function Dx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lx(i){const t=new Cx,e=Rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new xe,o=new xe;function a(l){let u=0,f=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,m=0,_=0,x=0,p=0,g=0,y=0,M=0,C=0,w=0,E=0;l.sort(Dx);for(let A=0,D=l.length;A<D;A++){const T=l[A],I=T.color,F=T.intensity,U=T.distance;let L=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Vi?L=T.shadow.map.texture:L=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=I.r*F,f+=I.g*F,h+=I.b*F;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],F);E++}else if(T.isDirectionalLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const O=T.shadow,H=e.get(T);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=T.shadow.matrix,g++}n.directional[d]=B,d++}else if(T.isSpotLight){const B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(I).multiplyScalar(F),B.distance=U,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[_]=B;const O=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,O.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[_]=O.matrix,T.castShadow){const H=e.get(T);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=L,M++}_++}else if(T.isRectAreaLight){const B=t.get(T);B.color.copy(I).multiplyScalar(F),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[x]=B,x++}else if(T.isPointLight){const B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const O=T.shadow,H=e.get(T);H.shadowIntensity=O.intensity,H.shadowBias=O.bias,H.shadowNormalBias=O.normalBias,H.shadowRadius=O.radius,H.shadowMapSize=O.mapSize,H.shadowCameraNear=O.camera.near,H.shadowCameraFar=O.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=L,n.pointShadowMatrix[m]=T.shadow.matrix,y++}n.point[m]=B,m++}else if(T.isHemisphereLight){const B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(F),B.groundColor.copy(T.groundColor).multiplyScalar(F),n.hemi[p]=B,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const S=n.hash;(S.directionalLength!==d||S.pointLength!==m||S.spotLength!==_||S.rectAreaLength!==x||S.hemiLength!==p||S.numDirectionalShadows!==g||S.numPointShadows!==y||S.numSpotShadows!==M||S.numSpotMaps!==C||S.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,S.directionalLength=d,S.pointLength=m,S.spotLength=_,S.rectAreaLength=x,S.hemiLength=p,S.numDirectionalShadows=g,S.numPointShadows=y,S.numSpotShadows=M,S.numSpotMaps=C,S.numLightProbes=E,n.version=Ix++)}function c(l,u){let f=0,h=0,d=0,m=0,_=0;const x=u.matrixWorldInverse;for(let p=0,g=l.length;p<g;p++){const y=l[p];if(y.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),d++}else if(y.isRectAreaLight){const M=n.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(x),h++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(x),_++}}}return{setup:a,setupView:c,state:n}}function oh(i){const t=new Lx(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Nx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new oh(i),t.set(s,[a])):r>=o.length?(a=new oh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
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
}`,Ox=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Bx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],ah=new xe,Rs=new N,ta=new N;function zx(i,t,e){let n=new El;const s=new gt,r=new gt,o=new Ce,a=new Vf,c=new Gf,l={},u=e.maxTextureSize,f={[bi]:dn,[dn]:bi,[qe]:qe},h=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Ux,fragmentShader:Fx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new te;m.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(m,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let p=this.type;this.render=function(w,E,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===Ou&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hr);const A=i.getRenderTarget(),D=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(tn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==this.type;F&&E.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(L=>L.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,L=w.length;U<L;U++){const B=w[U],O=B.shadow;if(O===void 0){Xt("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const H=O.getFrameExtents();s.multiply(H),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,O.mapSize.y=r.y));const G=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Us){if(B.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new vn(s.x,s.y,{format:Vi,type:bn,minFilter:en,magFilter:en,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new Gi(s.x,s.y,Ln),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=ai,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ge,O.map.depthTexture.magFilter=Ge}else B.isPointLight?(O.map=new hu(s.x),O.map.depthTexture=new ef(s.x,Yn)):(O.map=new vn(s.x,s.y),O.map.depthTexture=new Gi(s.x,s.y,Yn)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=ai,this.type===Hr?(O.map.depthTexture.compareFunction=G?vl:_l,O.map.depthTexture.minFilter=en,O.map.depthTexture.magFilter=en):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ge,O.map.depthTexture.magFilter=Ge);O.camera.updateProjectionMatrix()}const X=O.map.isWebGLCubeRenderTarget?6:1;for(let tt=0;tt<X;tt++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(O.map),i.clear());const $=O.getViewport(tt);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),I.viewport(o)}if(B.isPointLight){const $=O.camera,nt=O.matrix,bt=B.distance||$.far;bt!==$.far&&($.far=bt,$.updateProjectionMatrix()),Rs.setFromMatrixPosition(B.matrixWorld),$.position.copy(Rs),ta.copy($.position),ta.add(Ox[tt]),$.up.copy(Bx[tt]),$.lookAt(ta),$.updateMatrixWorld(),nt.makeTranslation(-Rs.x,-Rs.y,-Rs.z),ah.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O._frustum.setFromProjectionMatrix(ah,$.coordinateSystem,$.reversedDepth)}else O.updateMatrices(B);n=O.getFrustum(),M(E,S,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===Us&&g(O,S),O.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(A,D,T)};function g(w,E){const S=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vn(s.x,s.y,{format:Vi,type:bn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,S,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,S,d,_,null)}function y(w,E,S,A){let D=null;const T=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)D=T;else if(D=S.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const I=D.uuid,F=E.uuid;let U=l[I];U===void 0&&(U={},l[I]=U);let L=U[F];L===void 0&&(L=D.clone(),U[F]=L,E.addEventListener("dispose",C)),D=L}if(D.visible=E.visible,D.wireframe=E.wireframe,A===Us?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:f[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,D.map=E.map,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const I=i.properties.get(D);I.light=S}return D}function M(w,E,S,A,D){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Us)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const F=t.update(w),U=w.material;if(Array.isArray(U)){const L=F.groups;for(let B=0,O=L.length;B<O;B++){const H=L[B],G=U[H.materialIndex];if(G&&G.visible){const X=y(w,G,A,D);w.onBeforeShadow(i,w,E,S,F,X,H),i.renderBufferDirect(S,null,F,X,w,H),w.onAfterShadow(i,w,E,S,F,X,H)}}}else if(U.visible){const L=y(w,U,A,D);w.onBeforeShadow(i,w,E,S,F,L,null),i.renderBufferDirect(S,null,F,L,w,null),w.onAfterShadow(i,w,E,S,F,L,null)}}const I=w.children;for(let F=0,U=I.length;F<U;F++)M(I[F],E,S,A,D)}function C(w){w.target.removeEventListener("dispose",C);for(const S in l){const A=l[S],D=w.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function kx(i,t){function e(){let V=!1;const Tt=new Ce;let ot=null;const Ft=new Ce(0,0,0,0);return{setMask:function(At){ot!==At&&!V&&(i.colorMask(At,At,At,At),ot=At)},setLocked:function(At){V=At},setClear:function(At,mt,kt,Kt,Re){Re===!0&&(At*=Kt,mt*=Kt,kt*=Kt),Tt.set(At,mt,kt,Kt),Ft.equals(Tt)===!1&&(i.clearColor(At,mt,kt,Kt),Ft.copy(Tt))},reset:function(){V=!1,ot=null,Ft.set(-1,0,0,0)}}}function n(){let V=!1,Tt=!1,ot=null,Ft=null,At=null;return{setReversed:function(mt){if(Tt!==mt){const kt=t.get("EXT_clip_control");mt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Tt=mt;const Kt=At;At=null,this.setClear(Kt)}},getReversed:function(){return Tt},setTest:function(mt){mt?rt(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(mt){ot!==mt&&!V&&(i.depthMask(mt),ot=mt)},setFunc:function(mt){if(Tt&&(mt=fd[mt]),Ft!==mt){switch(mt){case ca:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case da:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=mt}},setLocked:function(mt){V=mt},setClear:function(mt){At!==mt&&(At=mt,Tt&&(mt=1-mt),i.clearDepth(mt))},reset:function(){V=!1,ot=null,Ft=null,At=null,Tt=!1}}}function s(){let V=!1,Tt=null,ot=null,Ft=null,At=null,mt=null,kt=null,Kt=null,Re=null;return{setTest:function(pe){V||(pe?rt(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(pe){Tt!==pe&&!V&&(i.stencilMask(pe),Tt=pe)},setFunc:function(pe,jn,Un){(ot!==pe||Ft!==jn||At!==Un)&&(i.stencilFunc(pe,jn,Un),ot=pe,Ft=jn,At=Un)},setOp:function(pe,jn,Un){(mt!==pe||kt!==jn||Kt!==Un)&&(i.stencilOp(pe,jn,Un),mt=pe,kt=jn,Kt=Un)},setLocked:function(pe){V=pe},setClear:function(pe){Re!==pe&&(i.clearStencil(pe),Re=pe)},reset:function(){V=!1,Tt=null,ot=null,Ft=null,At=null,mt=null,kt=null,Kt=null,Re=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h={},d=new WeakMap,m=[],_=null,x=!1,p=null,g=null,y=null,M=null,C=null,w=null,E=null,S=new ee(0,0,0),A=0,D=!1,T=null,I=null,F=null,U=null,L=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=H>=2);let X=null,tt={};const $=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),bt=new Ce().fromArray($),Mt=new Ce().fromArray(nt);function j(V,Tt,ot,Ft){const At=new Uint8Array(4),mt=i.createTexture();i.bindTexture(V,mt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<ot;kt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(Tt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return mt}const ut={};ut[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(ps),lt(!1),ct(Yl),rt(i.CULL_FACE),st(tn);function rt(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function ft(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function wt(V,Tt){return h[V]!==Tt?(i.bindFramebuffer(V,Tt),h[V]=Tt,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Tt),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function dt(V,Tt){let ot=m,Ft=!1;if(V){ot=d.get(Tt),ot===void 0&&(ot=[],d.set(Tt,ot));const At=V.textures;if(ot.length!==At.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,kt=At.length;mt<kt;mt++)ot[mt]=i.COLOR_ATTACHMENT0+mt;ot.length=At.length,Ft=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(ot)}function Rt(V){return _!==V?(i.useProgram(V),_=V,!0):!1}const Pt={[ni]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};Pt[ku]=i.MIN,Pt[Vu]=i.MAX;const K={[oa]:i.ZERO,[Gu]:i.ONE,[Hu]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[qu]:i.SRC_ALPHA_SATURATE,[Rh]:i.DST_COLOR,[Ch]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Zu]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function st(V,Tt,ot,Ft,At,mt,kt,Kt,Re,pe){if(V===tn){x===!0&&(ft(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),V!==Ph){if(V!==p||pe!==D){if((g!==ni||C!==ni)&&(i.blendEquation(i.FUNC_ADD),g=ni,C=ni),pe)switch(V){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",V);break}else switch(V){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jl:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",V);break}y=null,M=null,w=null,E=null,S.set(0,0,0),A=0,p=V,D=pe}return}At=At||Tt,mt=mt||ot,kt=kt||Ft,(Tt!==g||At!==C)&&(i.blendEquationSeparate(Pt[Tt],Pt[At]),g=Tt,C=At),(ot!==y||Ft!==M||mt!==w||kt!==E)&&(i.blendFuncSeparate(K[ot],K[Ft],K[mt],K[kt]),y=ot,M=Ft,w=mt,E=kt),(Kt.equals(S)===!1||Re!==A)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Re),S.copy(Kt),A=Re),p=V,D=!1}function et(V,Tt){V.side===qe?ft(i.CULL_FACE):rt(i.CULL_FACE);let ot=V.side===dn;Tt&&(ot=!ot),lt(ot),V.blending===ds&&V.transparent===!1?st(tn):st(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const Ft=V.stencilWrite;a.setTest(Ft),Ft&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),z(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(V){T!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),T=V)}function ct(V){V!==Uu?(rt(i.CULL_FACE),V!==I&&(V===Yl?i.cullFace(i.BACK):V===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),I=V}function yt(V){V!==F&&(O&&i.lineWidth(V),F=V)}function z(V,Tt,ot){V?(rt(i.POLYGON_OFFSET_FILL),(U!==Tt||L!==ot)&&(U=Tt,L=ot,o.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,ot))):ft(i.POLYGON_OFFSET_FILL)}function Gt(V){V?rt(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function Ut(V){V===void 0&&(V=i.TEXTURE0+B-1),X!==V&&(i.activeTexture(V),X=V)}function Wt(V,Tt,ot){ot===void 0&&(X===null?ot=i.TEXTURE0+B-1:ot=X);let Ft=tt[ot];Ft===void 0&&(Ft={type:void 0,texture:void 0},tt[ot]=Ft),(Ft.type!==V||Ft.texture!==Tt)&&(X!==ot&&(i.activeTexture(ot),X=ot),i.bindTexture(V,Tt||ut[V]),Ft.type=V,Ft.texture=Tt)}function xt(){const V=tt[X];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(V){ae("WebGLState:",V)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(V){ae("WebGLState:",V)}}function b(){try{i.texSubImage2D(...arguments)}catch(V){ae("WebGLState:",V)}}function k(){try{i.texSubImage3D(...arguments)}catch(V){ae("WebGLState:",V)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(V){ae("WebGLState:",V)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(V){ae("WebGLState:",V)}}function pt(){try{i.texStorage2D(...arguments)}catch(V){ae("WebGLState:",V)}}function St(){try{i.texStorage3D(...arguments)}catch(V){ae("WebGLState:",V)}}function Q(){try{i.texImage2D(...arguments)}catch(V){ae("WebGLState:",V)}}function it(){try{i.texImage3D(...arguments)}catch(V){ae("WebGLState:",V)}}function Ct(V){return f[V]!==void 0?f[V]:i.getParameter(V)}function It(V,Tt){f[V]!==Tt&&(i.pixelStorei(V,Tt),f[V]=Tt)}function Et(V){bt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),bt.copy(V))}function vt(V){Mt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Mt.copy(V))}function Yt(V,Tt){let ot=l.get(Tt);ot===void 0&&(ot=new WeakMap,l.set(Tt,ot));let Ft=ot.get(V);Ft===void 0&&(Ft=i.getUniformBlockIndex(Tt,V.name),ot.set(V,Ft))}function jt(V,Tt){const Ft=l.get(Tt).get(V);c.get(Tt)!==Ft&&(i.uniformBlockBinding(Tt,Ft,V.__bindingPointIndex),c.set(Tt,Ft))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},X=null,tt={},h={},d=new WeakMap,m=[],_=null,x=!1,p=null,g=null,y=null,M=null,C=null,w=null,E=null,S=new ee(0,0,0),A=0,D=!1,T=null,I=null,F=null,U=null,L=null,bt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:ft,bindFramebuffer:wt,drawBuffers:dt,useProgram:Rt,setBlending:st,setMaterial:et,setFlipSided:lt,setCullFace:ct,setLineWidth:yt,setPolygonOffset:z,setScissorTest:Gt,activeTexture:Ut,bindTexture:Wt,unbindTexture:xt,compressedTexImage2D:se,compressedTexImage3D:R,texImage2D:Q,texImage3D:it,pixelStorei:It,getParameter:Ct,updateUBOMapping:Yt,uniformBlockBinding:jt,texStorage2D:pt,texStorage3D:St,texSubImage2D:b,texSubImage3D:k,compressedTexSubImage2D:J,compressedTexSubImage3D:ht,scissor:Et,viewport:vt,reset:oe}}function Vx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return m?new OffscreenCanvas(R,b):no("canvas")}function x(R,b,k){let J=1;const ht=se(R);if((ht.width>k||ht.height>k)&&(J=k/Math.max(ht.width,ht.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const pt=Math.floor(J*ht.width),St=Math.floor(J*ht.height);h===void 0&&(h=_(pt,St));const Q=b?_(pt,St):h;return Q.width=pt,Q.height=St,Q.getContext("2d").drawImage(R,0,0,pt,St),Xt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+pt+"x"+St+")."),Q}else return"data"in R&&Xt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,b,k,J,ht,pt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let St;J&&(St=t.get("EXT_texture_norm16"),St||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=b;if(b===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8),k===i.UNSIGNED_SHORT&&St&&(Q=St.R16_EXT),k===i.SHORT&&St&&(Q=St.R16_SNORM_EXT)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),b===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8),k===i.UNSIGNED_SHORT&&St&&(Q=St.RG16_EXT),k===i.SHORT&&St&&(Q=St.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&(k===i.UNSIGNED_SHORT&&St&&(Q=St.RGB16_EXT),k===i.SHORT&&St&&(Q=St.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),b===i.RGBA){const it=pt?eo:le.getTransfer(ht);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=it===de?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&St&&(Q=St.RGBA16_EXT),k===i.SHORT&&St&&(Q=St.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function C(R,b){let k;return R?b===null||b===Yn||b===gs?k=i.DEPTH24_STENCIL8:b===Ln?k=i.DEPTH32F_STENCIL8:b===qs&&(k=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yn||b===gs?k=i.DEPTH_COMPONENT24:b===Ln?k=i.DEPTH_COMPONENT32F:b===qs&&(k=i.DEPTH_COMPONENT16),k}function w(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ge&&R.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){const b=R.target;b.removeEventListener("dispose",E),A(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&f.delete(b)}function S(R){const b=R.target;b.removeEventListener("dispose",S),T(b)}function A(R){const b=n.get(R);if(b.__webglInit===void 0)return;const k=R.source,J=d.get(k);if(J){const ht=J[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&D(R),Object.keys(J).length===0&&d.delete(k)}n.remove(R)}function D(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const k=R.source,J=d.get(k);delete J[b.__cacheKey],o.memory.textures--}function T(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let ht=0;ht<b.__webglFramebuffer[J].length;ht++)i.deleteFramebuffer(b.__webglFramebuffer[J][ht]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=R.textures;for(let J=0,ht=k.length;J<ht;J++){const pt=n.get(k[J]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(R)}let I=0;function F(){I=0}function U(){return I}function L(R){I=R}function B(){const R=I;return R>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function O(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function H(R,b){const k=n.get(R);if(R.isVideoTexture&&Wt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const J=R.image;if(J===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(k,R,b);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function G(R,b){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ft(k,R,b);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function X(R,b){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ft(k,R,b);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function tt(R,b){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){wt(k,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}const $={[Ys]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},nt={[Ge]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},bt={[id]:i.NEVER,[ld]:i.ALWAYS,[sd]:i.LESS,[_l]:i.LEQUAL,[rd]:i.EQUAL,[vl]:i.GEQUAL,[od]:i.GREATER,[ad]:i.NOTEQUAL};function Mt(R,b){if(b.type===Ln&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Mo||b.magFilter===rr||b.magFilter===Fi||b.minFilter===en||b.minFilter===Mo||b.minFilter===rr||b.minFilter===Fi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,$[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,$[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,$[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,nt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,bt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ge||b.minFilter!==rr&&b.minFilter!==Fi||b.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function j(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",E));const J=b.source;let ht=d.get(J);ht===void 0&&(ht={},d.set(J,ht));const pt=O(b);if(pt!==R.__cacheKey){ht[pt]===void 0&&(ht[pt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ht[pt].usedTimes++;const St=ht[R.__cacheKey];St!==void 0&&(ht[R.__cacheKey].usedTimes--,St.usedTimes===0&&D(b)),R.__cacheKey=pt,R.__webglTexture=ht[pt].texture}return k}function ut(R,b,k){return Math.floor(Math.floor(R/k)/b)}function rt(R,b,k,J){const pt=R.updateRanges;if(pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,k,J,b.data);else{pt.sort((It,Et)=>It.start-Et.start);let St=0;for(let It=1;It<pt.length;It++){const Et=pt[St],vt=pt[It],Yt=Et.start+Et.count,jt=ut(vt.start,b.width,4),oe=ut(Et.start,b.width,4);vt.start<=Yt+1&&jt===oe&&ut(vt.start+vt.count-1,b.width,4)===jt?Et.count=Math.max(Et.count,vt.start+vt.count-Et.start):(++St,pt[St]=vt)}pt.length=St+1;const Q=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),Ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let It=0,Et=pt.length;It<Et;It++){const vt=pt[It],Yt=Math.floor(vt.start/4),jt=Math.ceil(vt.count/4),oe=Yt%b.width,V=Math.floor(Yt/b.width),Tt=jt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,oe,V,Tt,ot,k,J,b.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function ft(R,b,k){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);const ht=j(R,b),pt=b.source;e.bindTexture(J,R.__webglTexture,i.TEXTURE0+k);const St=n.get(pt);if(pt.version!==St.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ot=le.getPrimaries(le.workingColorSpace),Ft=b.colorSpace===vi?null:le.getPrimaries(b.colorSpace),At=b.colorSpace===vi||ot===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let it=x(b.image,!1,s.maxTextureSize);it=xt(b,it);const Ct=r.convert(b.format,b.colorSpace),It=r.convert(b.type);let Et=M(b.internalFormat,Ct,It,b.normalized,b.colorSpace,b.isVideoTexture);Mt(J,b);let vt;const Yt=b.mipmaps,jt=b.isVideoTexture!==!0,oe=St.__version===void 0||ht===!0,V=pt.dataReady,Tt=w(b,it);if(b.isDepthTexture)Et=C(b.format===Mi,b.type),oe&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Et,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Et,it.width,it.height,0,Ct,It,null));else if(b.isDataTexture)if(Yt.length>0){jt&&oe&&e.texStorage2D(i.TEXTURE_2D,Tt,Et,Yt[0].width,Yt[0].height);for(let ot=0,Ft=Yt.length;ot<Ft;ot++)vt=Yt[ot],jt?V&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,Ct,It,vt.data):e.texImage2D(i.TEXTURE_2D,ot,Et,vt.width,vt.height,0,Ct,It,vt.data);b.generateMipmaps=!1}else jt?(oe&&e.texStorage2D(i.TEXTURE_2D,Tt,Et,it.width,it.height),V&&rt(b,it,Ct,It)):e.texImage2D(i.TEXTURE_2D,0,Et,it.width,it.height,0,Ct,It,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Et,Yt[0].width,Yt[0].height,it.depth);for(let ot=0,Ft=Yt.length;ot<Ft;ot++)if(vt=Yt[ot],b.format!==Nn)if(Ct!==null)if(jt){if(V)if(b.layerUpdates.size>0){const At=Bc(vt.width,vt.height,b.format,b.type);for(const mt of b.layerUpdates){const kt=vt.data.subarray(mt*At/vt.data.BYTES_PER_ELEMENT,(mt+1)*At/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,mt,vt.width,vt.height,1,Ct,kt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,it.depth,Ct,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Et,vt.width,vt.height,it.depth,0,vt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,it.depth,Ct,It,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Et,vt.width,vt.height,it.depth,0,Ct,It,vt.data)}else{jt&&oe&&e.texStorage2D(i.TEXTURE_2D,Tt,Et,Yt[0].width,Yt[0].height);for(let ot=0,Ft=Yt.length;ot<Ft;ot++)vt=Yt[ot],b.format!==Nn?Ct!==null?jt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,Ct,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Et,vt.width,vt.height,0,vt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?V&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,Ct,It,vt.data):e.texImage2D(i.TEXTURE_2D,ot,Et,vt.width,vt.height,0,Ct,It,vt.data)}else if(b.isDataArrayTexture)if(jt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Et,it.width,it.height,it.depth),V)if(b.layerUpdates.size>0){const ot=Bc(it.width,it.height,b.format,b.type);for(const Ft of b.layerUpdates){const At=it.data.subarray(Ft*ot/it.data.BYTES_PER_ELEMENT,(Ft+1)*ot/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,it.width,it.height,1,Ct,It,At)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Ct,It,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,it.width,it.height,it.depth,0,Ct,It,it.data);else if(b.isData3DTexture)jt?(oe&&e.texStorage3D(i.TEXTURE_3D,Tt,Et,it.width,it.height,it.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Ct,It,it.data)):e.texImage3D(i.TEXTURE_3D,0,Et,it.width,it.height,it.depth,0,Ct,It,it.data);else if(b.isFramebufferTexture){if(oe)if(jt)e.texStorage2D(i.TEXTURE_2D,Tt,Et,it.width,it.height);else{let ot=it.width,Ft=it.height;for(let At=0;At<Tt;At++)e.texImage2D(i.TEXTURE_2D,At,Et,ot,Ft,0,Ct,It,null),ot>>=1,Ft>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),it.parentNode!==ot){ot.appendChild(it),f.add(b),ot.onpaint=Kt=>{const Re=Kt.changedElements;for(const pe of f)Re.includes(pe.image)&&(pe.needsUpdate=!0)},ot.requestPaint();return}const Ft=0,At=i.RGBA,mt=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Ft,At,mt,kt,it),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(jt&&oe){const ot=se(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Et,ot.width,ot.height)}for(let ot=0,Ft=Yt.length;ot<Ft;ot++)vt=Yt[ot],jt?V&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Ct,It,vt):e.texImage2D(i.TEXTURE_2D,ot,Et,Ct,It,vt);b.generateMipmaps=!1}else if(jt){if(oe){const ot=se(it);e.texStorage2D(i.TEXTURE_2D,Tt,Et,ot.width,ot.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,It,it)}else e.texImage2D(i.TEXTURE_2D,0,Et,Ct,It,it);p(b)&&g(J),St.__version=pt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function wt(R,b,k){if(b.image.length!==6)return;const J=j(R,b),ht=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const pt=n.get(ht);if(ht.version!==pt.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const St=le.getPrimaries(le.workingColorSpace),Q=b.colorSpace===vi?null:le.getPrimaries(b.colorSpace),it=b.colorSpace===vi||St===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const Ct=b.isCompressedTexture||b.image[0].isCompressedTexture,It=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let mt=0;mt<6;mt++)!Ct&&!It?Et[mt]=x(b.image[mt],!0,s.maxCubemapSize):Et[mt]=It?b.image[mt].image:b.image[mt],Et[mt]=xt(b,Et[mt]);const vt=Et[0],Yt=r.convert(b.format,b.colorSpace),jt=r.convert(b.type),oe=M(b.internalFormat,Yt,jt,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,Tt=pt.__version===void 0||J===!0,ot=ht.dataReady;let Ft=w(b,vt);Mt(i.TEXTURE_CUBE_MAP,b);let At;if(Ct){V&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,oe,vt.width,vt.height);for(let mt=0;mt<6;mt++){At=Et[mt].mipmaps;for(let kt=0;kt<At.length;kt++){const Kt=At[kt];b.format!==Nn?Yt!==null?V?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt,0,0,Kt.width,Kt.height,Yt,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt,oe,Kt.width,Kt.height,0,Kt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt,0,0,Kt.width,Kt.height,Yt,jt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt,oe,Kt.width,Kt.height,0,Yt,jt,Kt.data)}}}else{if(At=b.mipmaps,V&&Tt){At.length>0&&Ft++;const mt=se(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,oe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(It){V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Et[mt].width,Et[mt].height,Yt,jt,Et[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Et[mt].width,Et[mt].height,0,Yt,jt,Et[mt].data);for(let kt=0;kt<At.length;kt++){const Re=At[kt].image[mt].image;V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt+1,0,0,Re.width,Re.height,Yt,jt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt+1,oe,Re.width,Re.height,0,Yt,jt,Re.data)}}else{V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Yt,jt,Et[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Yt,jt,Et[mt]);for(let kt=0;kt<At.length;kt++){const Kt=At[kt];V?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt+1,0,0,Yt,jt,Kt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt+1,oe,Yt,jt,Kt.image[mt])}}}p(b)&&g(i.TEXTURE_CUBE_MAP),pt.__version=ht.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function dt(R,b,k,J,ht,pt){const St=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),it=M(k.internalFormat,St,Q,k.normalized,k.colorSpace),Ct=n.get(b),It=n.get(k);if(It.__renderTarget=b,!Ct.__hasExternalTextures){const Et=Math.max(1,b.width>>pt),vt=Math.max(1,b.height>>pt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,pt,it,Et,vt,b.depth,0,St,Q,null):e.texImage2D(ht,pt,it,Et,vt,0,St,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ut(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ht,It.__webglTexture,0,Gt(b)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ht,It.__webglTexture,pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(R,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const J=b.depthTexture,ht=J&&J.isDepthTexture?J.type:null,pt=C(b.stencilBuffer,ht),St=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(b),pt,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(b),pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,pt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{const J=b.textures;for(let ht=0;ht<J.length;ht++){const pt=J[ht],St=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),it=M(pt.internalFormat,St,Q,pt.normalized,pt.colorSpace);Ut(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(b),it,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(b),it,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,it,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(R,b,k){const J=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=n.get(b.depthTexture);if(ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,b.depthTexture.addEventListener("dispose",E)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,b.depthTexture);const Ct=r.convert(b.depthTexture.format),It=r.convert(b.depthTexture.type);let Et;b.depthTexture.format===ai?Et=i.DEPTH_COMPONENT24:b.depthTexture.format===Mi&&(Et=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Et,b.width,b.height,0,Ct,It,null)}}else H(b.depthTexture,0);const pt=ht.__webglTexture,St=Gt(b),Q=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,it=b.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ai)Ut(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Q,pt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,it,Q,pt,0);else if(b.depthTexture.format===Mi)Ut(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Q,pt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,it,Q,pt,0);else throw new Error("Unknown depthTexture format")}function K(R){const b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const ht=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",ht)};J.addEventListener("dispose",ht),b.__depthDisposeCallback=ht}b.__boundDepthTexture=J}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let J=0;J<6;J++)Pt(b.__webglFramebuffer[J],R,J);else{const J=R.texture.mipmaps;J&&J.length>0?Pt(b.__webglFramebuffer[0],R,0):Pt(b.__webglFramebuffer,R,0)}else if(k){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),Rt(b.__webglDepthbuffer[J],R,!1);else{const ht=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,pt)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Rt(b.__webglDepthbuffer,R,!1);else{const ht=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(R,b,k){const J=n.get(R);b!==void 0&&dt(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&K(R)}function et(R){const b=R.texture,k=n.get(R),J=n.get(b);R.addEventListener("dispose",S);const ht=R.textures,pt=R.isWebGLCubeRenderTarget===!0,St=ht.length>1;if(St||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,o.memory.textures++),pt){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let it=0;it<b.mipmaps.length;it++)k.__webglFramebuffer[Q][it]=i.createFramebuffer()}else k.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<b.mipmaps.length;Q++)k.__webglFramebuffer[Q]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(St)for(let Q=0,it=ht.length;Q<it;Q++){const Ct=n.get(ht[Q]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ut(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<ht.length;Q++){const it=ht[Q];k.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);const Ct=r.convert(it.format,it.colorSpace),It=r.convert(it.type),Et=M(it.internalFormat,Ct,It,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),vt=Gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,Et,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,b);for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)dt(k.__webglFramebuffer[Q][it],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it);else dt(k.__webglFramebuffer[Q],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let Q=0,it=ht.length;Q<it;Q++){const Ct=ht[Q],It=n.get(Ct);let Et=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Et=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,It.__webglTexture),Mt(Et,Ct),dt(k.__webglFramebuffer,R,Ct,i.COLOR_ATTACHMENT0+Q,Et,0),p(Ct)&&g(Et)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,J.__webglTexture),Mt(Q,b),b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)dt(k.__webglFramebuffer[it],R,b,i.COLOR_ATTACHMENT0,Q,it);else dt(k.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Q,0);p(b)&&g(Q),e.unbindTexture()}R.depthBuffer&&K(R)}function lt(R){const b=R.textures;for(let k=0,J=b.length;k<J;k++){const ht=b[k];if(p(ht)){const pt=y(R),St=n.get(ht).__webglTexture;e.bindTexture(pt,St),g(pt),e.unbindTexture()}}}const ct=[],yt=[];function z(R){if(R.samples>0){if(Ut(R)===!1){const b=R.textures,k=R.width,J=R.height;let ht=i.COLOR_BUFFER_BIT;const pt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),Q=b.length>1;if(Q)for(let Ct=0;Ct<b.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const it=R.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Ct]);const It=n.get(b[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,ht,i.NEAREST),c===!0&&(ct.length=0,yt.length=0,ct.push(i.COLOR_ATTACHMENT0+Ct),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(pt),yt.push(pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Ct=0;Ct<b.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,St.__webglColorRenderbuffer[Ct]);const It=n.get(b[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Gt(R){return Math.min(s.maxSamples,R.samples)}function Ut(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(R){const b=o.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function xt(R,b){const k=R.colorSpace,J=R.format,ht=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==to&&k!==vi&&(le.getTransfer(k)===de?(J!==Nn||ht!==xn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",k)),b}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.getTextureUnits=U,this.setTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=tt,this.rebindTextures=st,this.setupRenderTarget=et,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Gx(i,t){function e(n,s=vi){let r;const o=le.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Oh)return i.ALPHA;if(n===Bh)return i.RGB;if(n===Nn)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===Yr||n===qr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===_a||n===va||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===Sa||n===Ea||n===ba||n===wa||n===Kr||n===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===Sa)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ba)return r.COMPRESSED_R11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Kr)return r.COMPRESSED_RG11_EAC;if(n===Ta)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Aa||n===Pa||n===Ca||n===Ra||n===Ia||n===Da||n===La||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Ga||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wa||n===Xa||n===Jr||n===Ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
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

}`;class Xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new qh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:Hx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yx extends wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",x=new Xx,p={},g=e.getContextAttributes();let y=null,M=null;const C=[],w=[],E=new gt;let S=null;const A=new En;A.viewport=new Ce;const D=new En;D.viewport=new Ce;const T=[A,D],I=new Qf;let F=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ut=C[j];return ut===void 0&&(ut=new Ao,C[j]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(j){let ut=C[j];return ut===void 0&&(ut=new Ao,C[j]=ut),ut.getGripSpace()},this.getHand=function(j){let ut=C[j];return ut===void 0&&(ut=new Ao,C[j]=ut),ut.getHandSpace()};function L(j){const ut=w.indexOf(j.inputSource);if(ut===-1)return;const rt=C[ut];rt!==void 0&&(rt.update(j.inputSource,j.frame,l||o),rt.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",O);for(let j=0;j<C.length;j++){const ut=w[j];ut!==null&&(w[j]=null,C[j].disconnect(ut))}F=null,U=null,x.reset();for(const j in p)delete p[j];t.setRenderTarget(y),d=null,h=null,f=null,s=null,M=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",B),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ft=null,wt=null;g.depth&&(wt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?Mi:ai,ft=g.stencil?gs:Yn);const dt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new vn(h.textureWidth,h.textureHeight,{format:Nn,type:xn,depthTexture:new Gi(h.textureWidth,h.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new vn(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(j){for(let ut=0;ut<j.removed.length;ut++){const rt=j.removed[ut],ft=w.indexOf(rt);ft>=0&&(w[ft]=null,C[ft].disconnect(rt))}for(let ut=0;ut<j.added.length;ut++){const rt=j.added[ut];let ft=w.indexOf(rt);if(ft===-1){for(let dt=0;dt<C.length;dt++)if(dt>=w.length){w.push(rt),ft=dt;break}else if(w[dt]===null){w[dt]=rt,ft=dt;break}if(ft===-1)break}const wt=C[ft];wt&&wt.connect(rt)}}const H=new N,G=new N;function X(j,ut,rt){H.setFromMatrixPosition(ut.matrixWorld),G.setFromMatrixPosition(rt.matrixWorld);const ft=H.distanceTo(G),wt=ut.projectionMatrix.elements,dt=rt.projectionMatrix.elements,Rt=wt[14]/(wt[10]-1),Pt=wt[14]/(wt[10]+1),K=(wt[9]+1)/wt[5],st=(wt[9]-1)/wt[5],et=(wt[8]-1)/wt[0],lt=(dt[8]+1)/dt[0],ct=Rt*et,yt=Rt*lt,z=ft/(-et+lt),Gt=z*-et;if(ut.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Gt),j.translateZ(z),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),wt[10]===-1)j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Ut=Rt+z,Wt=Pt+z,xt=ct-Gt,se=yt+(ft-Gt),R=K*Pt/Wt*Ut,b=st*Pt/Wt*Ut;j.projectionMatrix.makePerspective(xt,se,R,b,Ut,Wt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function tt(j,ut){ut===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ut.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ut=j.near,rt=j.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(rt=x.depthFar)),I.near=D.near=A.near=ut,I.far=D.far=A.far=rt,(F!==I.near||U!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,U=I.far),I.layers.mask=j.layers.mask|6,A.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;const ft=j.parent,wt=I.cameras;tt(I,ft);for(let dt=0;dt<wt.length;dt++)tt(wt[dt],ft);wt.length===2?X(I,A,D):I.projectionMatrix.copy(A.projectionMatrix),$(j,I,ft)};function $(j,ut,rt){rt===null?j.matrix.copy(ut.matrixWorld):(j.matrix.copy(rt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ut.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(I)},this.getCameraTexture=function(j){return p[j]};let nt=null;function bt(j,ut){if(u=ut.getViewerPose(l||o),m=ut,u!==null){const rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ft=!1;rt.length!==I.cameras.length&&(I.cameras.length=0,ft=!0);for(let Pt=0;Pt<rt.length;Pt++){const K=rt[Pt];let st=null;if(d!==null)st=d.getViewport(K);else{const lt=f.getViewSubImage(h,K);st=lt.viewport,Pt===0&&(t.setRenderTargetTextures(M,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(M))}let et=T[Pt];et===void 0&&(et=new En,et.layers.enable(Pt),et.viewport=new Ce,T[Pt]=et),et.matrix.fromArray(K.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(K.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(st.x,st.y,st.width,st.height),Pt===0&&(I.matrix.copy(et.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ft===!0&&I.cameras.push(et)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Pt=f.getDepthInformation(rt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(Pt,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Pt=0;Pt<rt.length;Pt++){const K=rt[Pt].camera;if(K){let st=p[K];st||(st=new qh,p[K]=st);const et=f.getCameraImage(K);st.sourceTexture=et}}}}for(let rt=0;rt<C.length;rt++){const ft=w[rt],wt=C[rt];ft!==null&&wt!==void 0&&wt.update(ft,ut,l||o)}nt&&nt(j,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),m=null}const Mt=new lu;Mt.setAnimationLoop(bt),this.setAnimationLoop=function(j){nt=j},this.dispose=function(){}}}const qx=new xe,mu=new $t;mu.set(-1,0,0,0,1,0,0,0,1);function jx(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,nu(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,g,y,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),f(x,p)):p.isMeshPhongMaterial?(r(x,p),u(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),h(x,p),p.isMeshPhysicalMaterial&&d(x,p,M)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),_(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?c(x,p,g,y):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===dn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===dn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const g=t.get(p),y=g.envMap,M=g.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(mu),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,g,y){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*g,x.scale.value=y*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function h(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,g){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function _(x,p){const g=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,y){const M=y.program;n.uniformBlockBinding(g,M)}function l(g,y){let M=s[g.id];M===void 0&&(m(g),M=u(g),s[g.id]=M,g.addEventListener("dispose",x));const C=y.program;n.updateUBOMapping(g,C);const w=t.render.frame;r[g.id]!==w&&(h(g),r[g.id]=w)}function u(g){const y=f();g.__bindingPointIndex=y;const M=i.createBuffer(),C=g.__size,w=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const y=s[g.id],M=g.uniforms,C=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,E=M.length;w<E;w++){const S=Array.isArray(M[w])?M[w]:[M[w]];for(let A=0,D=S.length;A<D;A++){const T=S[A];if(d(T,w,A,C)===!0){const I=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let L=0;L<F.length;L++){const B=F[L],O=_(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,I+U,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):ArrayBuffer.isView(B)?T.__data.set(new B.constructor(B.buffer,B.byteOffset,T.__data.length)):(B.toArray(T.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(g,y,M,C){const w=g.value,E=y+"_"+M;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:ArrayBuffer.isView(w)?C[E]=w.slice():C[E]=w.clone(),!0;{const S=C[E];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return C[E]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(S.equals(w)===!1)return S.copy(w),!0}}return!1}function m(g){const y=g.uniforms;let M=0;const C=16;for(let E=0,S=y.length;E<S;E++){const A=Array.isArray(y[E])?y[E]:[y[E]];for(let D=0,T=A.length;D<T;D++){const I=A[D],F=Array.isArray(I.value)?I.value:[I.value];for(let U=0,L=F.length;U<L;U++){const B=F[U],O=_(B),H=M%C,G=H%O.boundary,X=H+G;M+=G,X!==0&&C-X<O.storage&&(M+=C-X),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=O.storage}}}const w=M%C;return w>0&&(M+=C-w),g.__size=M,g.__cache={},this}function _(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(y.boundary=16,y.storage=g.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",g),y}function x(g){const y=g.target;y.removeEventListener("dispose",x);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const g in s)i.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}const $x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function Kx(){return Bn===null&&(Bn=new Xh($x,16,16,Vi,bn),Bn.name="DFG_LUT",Bn.minFilter=en,Bn.magFilter=en,Bn.wrapS=ii,Bn.wrapT=ii,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class Jx{constructor(t={}){const{canvas:e=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=xn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=d,x=new Set([xl,gl,ml]),p=new Set([xn,Yn,qs,gs,dl,fl]),g=new Uint32Array(4),y=new Int32Array(4),M=new N;let C=null,w=null;const E=[],S=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let T=!1,I=null;this._outputColorSpace=Sn;let F=0,U=0,L=null,B=-1,O=null;const H=new Ce,G=new Ce;let X=null;const tt=new ee(0);let $=0,nt=e.width,bt=e.height,Mt=1,j=null,ut=null;const rt=new Ce(0,0,nt,bt),ft=new Ce(0,0,nt,bt);let wt=!1;const dt=new El;let Rt=!1,Pt=!1;const K=new xe,st=new N,et=new Ce,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function yt(){return L===null?Mt:1}let z=n;function Gt(P,W){return e.getContext(P,W)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${il}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),z===null){const W="webgl2";if(z=Gt(W,P),z===null)throw Gt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw ae("WebGLRenderer: "+P.message),P}let Ut,Wt,xt,se,R,b,k,J,ht,pt,St,Q,it,Ct,It,Et,vt,Yt,jt,oe,V,Tt,ot;function Ft(){Ut=new Kg(z),Ut.init(),V=new Gx(z,Ut),Wt=new Hg(z,Ut,t,V),xt=new kx(z,Ut),Wt.reversedDepthBuffer&&h&&xt.buffers.depth.setReversed(!0),se=new t0(z),R=new Tx,b=new Vx(z,Ut,xt,R,Wt,V,se),k=new $g(D),J=new sp(z),Tt=new Vg(z,J),ht=new Jg(z,J,se,Tt),pt=new n0(z,ht,J,Tt,se),Yt=new e0(z,Wt,b),It=new Wg(R),St=new wx(D,k,Ut,Wt,Tt,It),Q=new jx(D,R),it=new Px,Ct=new Nx(Ut),vt=new kg(D,k,xt,pt,m,c),Et=new zx(D,pt,Wt),ot=new Zx(z,se,Wt,xt),jt=new Gg(z,Ut,se),oe=new Qg(z,Ut,se),se.programs=St.programs,D.capabilities=Wt,D.extensions=Ut,D.properties=R,D.renderLists=it,D.shadowMap=Et,D.state=xt,D.info=se}Ft(),_!==xn&&(A=new s0(_,e.width,e.height,s,r));const At=new Yx(D,z);this.xr=At,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=Ut.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ut.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(P){P!==void 0&&(Mt=P,this.setSize(nt,bt,!1))},this.getSize=function(P){return P.set(nt,bt)},this.setSize=function(P,W,Z=!0){if(At.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=P,bt=W,e.width=Math.floor(P*Mt),e.height=Math.floor(W*Mt),Z===!0&&(e.style.width=P+"px",e.style.height=W+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(nt*Mt,bt*Mt).floor()},this.setDrawingBufferSize=function(P,W,Z){nt=P,bt=W,Mt=Z,e.width=Math.floor(P*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,P,W)},this.setEffects=function(P){if(_===xn){ae("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let W=0;W<P.length;W++)if(P[W].isOutputPass===!0){Xt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(rt)},this.setViewport=function(P,W,Z,Y){P.isVector4?rt.set(P.x,P.y,P.z,P.w):rt.set(P,W,Z,Y),xt.viewport(H.copy(rt).multiplyScalar(Mt).round())},this.getScissor=function(P){return P.copy(ft)},this.setScissor=function(P,W,Z,Y){P.isVector4?ft.set(P.x,P.y,P.z,P.w):ft.set(P,W,Z,Y),xt.scissor(G.copy(ft).multiplyScalar(Mt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(P){xt.setScissorTest(wt=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){ut=P},this.getClearColor=function(P){return P.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(P=!0,W=!0,Z=!0){let Y=0;if(P){let q=!1;if(L!==null){const Nt=L.texture.format;q=x.has(Nt)}if(q){const Nt=L.texture.type,Bt=p.has(Nt),Lt=vt.getClearColor(),zt=vt.getClearAlpha(),Vt=Lt.r,Jt=Lt.g,re=Lt.b;Bt?(g[0]=Vt,g[1]=Jt,g[2]=re,g[3]=zt,z.clearBufferuiv(z.COLOR,0,g)):(y[0]=Vt,y[1]=Jt,y[2]=re,y[3]=zt,z.clearBufferiv(z.COLOR,0,y))}else Y|=z.COLOR_BUFFER_BIT}W&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),I=P},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),vt.dispose(),it.dispose(),Ct.dispose(),R.dispose(),k.dispose(),pt.dispose(),Tt.dispose(),ot.dispose(),St.dispose(),At.dispose(),At.removeEventListener("sessionstart",Bl),At.removeEventListener("sessionend",zl),Ti.stop()};function mt(P){P.preventDefault(),io("WebGLRenderer: Context Lost."),T=!0}function kt(){io("WebGLRenderer: Context Restored."),T=!1;const P=se.autoReset,W=Et.enabled,Z=Et.autoUpdate,Y=Et.needsUpdate,q=Et.type;Ft(),se.autoReset=P,Et.enabled=W,Et.autoUpdate=Z,Et.needsUpdate=Y,Et.type=q}function Kt(P){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Re(P){const W=P.target;W.removeEventListener("dispose",Re),pe(W)}function pe(P){jn(P),R.remove(P)}function jn(P){const W=R.get(P).programs;W!==void 0&&(W.forEach(function(Z){St.releaseProgram(Z)}),P.isShaderMaterial&&St.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Z,Y,q,Nt){W===null&&(W=lt);const Bt=q.isMesh&&q.matrixWorld.determinant()<0,Lt=Cu(P,W,Z,Y,q);xt.setMaterial(Y,Bt);let zt=Z.index,Vt=1;if(Y.wireframe===!0){if(zt=ht.getWireframeAttribute(Z),zt===void 0)return;Vt=2}const Jt=Z.drawRange,re=Z.attributes.position;let Ht=Jt.start*Vt,me=(Jt.start+Jt.count)*Vt;Nt!==null&&(Ht=Math.max(Ht,Nt.start*Vt),me=Math.min(me,(Nt.start+Nt.count)*Vt)),zt!==null?(Ht=Math.max(Ht,0),me=Math.min(me,zt.count)):re!=null&&(Ht=Math.max(Ht,0),me=Math.min(me,re.count));const Ie=me-Ht;if(Ie<0||Ie===1/0)return;Tt.setup(q,Y,Lt,Z,zt);let Ae,_e=jt;if(zt!==null&&(Ae=J.get(zt),_e=oe,_e.setIndex(Ae)),q.isMesh)Y.wireframe===!0?(xt.setLineWidth(Y.wireframeLinewidth*yt()),_e.setMode(z.LINES)):_e.setMode(z.TRIANGLES);else if(q.isLine){let $e=Y.linewidth;$e===void 0&&($e=1),xt.setLineWidth($e*yt()),q.isLineSegments?_e.setMode(z.LINES):q.isLineLoop?_e.setMode(z.LINE_LOOP):_e.setMode(z.LINE_STRIP)}else q.isPoints?_e.setMode(z.POINTS):q.isSprite&&_e.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))_e.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const $e=q._multiDrawStarts,Ot=q._multiDrawCounts,fn=q._multiDrawCount,he=zt?J.get(zt).bytesPerElement:1,yn=R.get(Y).currentProgram.getUniforms();for(let Fn=0;Fn<fn;Fn++)yn.setValue(z,"_gl_DrawID",Fn),_e.render($e[Fn]/he,Ot[Fn])}else if(q.isInstancedMesh)_e.renderInstances(Ht,Ie,q.count);else if(Z.isInstancedBufferGeometry){const $e=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ot=Math.min(Z.instanceCount,$e);_e.renderInstances(Ht,Ie,Ot)}else _e.render(Ht,Ie)};function Un(P,W,Z){P.transparent===!0&&P.side===qe&&P.forceSinglePass===!1?(P.side=dn,P.needsUpdate=!0,sr(P,W,Z),P.side=bi,P.needsUpdate=!0,sr(P,W,Z),P.side=qe):sr(P,W,Z)}this.compile=function(P,W,Z=null){Z===null&&(Z=P),w=Ct.get(Z),w.init(W),S.push(w),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),P!==Z&&P.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();const Y=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Nt=q.material;if(Nt)if(Array.isArray(Nt))for(let Bt=0;Bt<Nt.length;Bt++){const Lt=Nt[Bt];Un(Lt,Z,q),Y.add(Lt)}else Un(Nt,Z,q),Y.add(Nt)}),w=S.pop(),Y},this.compileAsync=function(P,W,Z=null){const Y=this.compile(P,W,Z);return new Promise(q=>{function Nt(){if(Y.forEach(function(Bt){R.get(Bt).currentProgram.isReady()&&Y.delete(Bt)}),Y.size===0){q(P);return}setTimeout(Nt,10)}Ut.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let xo=null;function Au(P){xo&&xo(P)}function Bl(){Ti.stop()}function zl(){Ti.start()}const Ti=new lu;Ti.setAnimationLoop(Au),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(P){xo=P,At.setAnimationLoop(P),P===null?Ti.stop():Ti.start()},At.addEventListener("sessionstart",Bl),At.addEventListener("sessionend",zl),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;I!==null&&I.renderStart(P,W);const Z=At.enabled===!0&&At.isPresenting===!0,Y=A!==null&&(L===null||Z)&&A.begin(D,L);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(W),W=At.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,W,L),w=Ct.get(P,S.length),w.init(W),w.state.textureUnits=b.getTextureUnits(),S.push(w),K.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),dt.setFromProjectionMatrix(K,Vn,W.reversedDepth),Pt=this.localClippingEnabled,Rt=It.init(this.clippingPlanes,Pt),C=it.get(P,E.length),C.init(),E.push(C),At.enabled===!0&&At.isPresenting===!0){const Bt=D.xr.getDepthSensingMesh();Bt!==null&&_o(Bt,W,-1/0,D.sortObjects)}_o(P,W,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(j,ut),ct=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ct&&vt.addToRenderList(C,P),this.info.render.frame++,Rt===!0&&It.beginShadows();const q=w.state.shadowsArray;if(Et.render(q,P,W),Rt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&A.hasRenderPass())===!1){const Bt=C.opaque,Lt=C.transmissive;if(w.setupLights(),W.isArrayCamera){const zt=W.cameras;if(Lt.length>0)for(let Vt=0,Jt=zt.length;Vt<Jt;Vt++){const re=zt[Vt];Vl(Bt,Lt,P,re)}ct&&vt.render(P);for(let Vt=0,Jt=zt.length;Vt<Jt;Vt++){const re=zt[Vt];kl(C,P,re,re.viewport)}}else Lt.length>0&&Vl(Bt,Lt,P,W),ct&&vt.render(P),kl(C,P,W)}L!==null&&U===0&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),Y&&A.end(D),P.isScene===!0&&P.onAfterRender(D,P,W),Tt.resetDefaultState(),B=-1,O=null,S.pop(),S.length>0?(w=S[S.length-1],b.setTextureUnits(w.state.textureUnits),Rt===!0&&It.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?C=E[E.length-1]:C=null,I!==null&&I.renderEnd()};function _o(P,W,Z,Y){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLightProbeGrid)w.pushLightProbeGrid(P);else if(P.isLight)w.pushLight(P),P.castShadow&&w.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||dt.intersectsSprite(P)){Y&&et.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);const Bt=pt.update(P),Lt=P.material;Lt.visible&&C.push(P,Bt,Lt,Z,et.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||dt.intersectsObject(P))){const Bt=pt.update(P),Lt=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),et.copy(P.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),et.copy(Bt.boundingSphere.center)),et.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(Lt)){const zt=Bt.groups;for(let Vt=0,Jt=zt.length;Vt<Jt;Vt++){const re=zt[Vt],Ht=Lt[re.materialIndex];Ht&&Ht.visible&&C.push(P,Bt,Ht,Z,et.z,re)}}else Lt.visible&&C.push(P,Bt,Lt,Z,et.z,null)}}const Nt=P.children;for(let Bt=0,Lt=Nt.length;Bt<Lt;Bt++)_o(Nt[Bt],W,Z,Y)}function kl(P,W,Z,Y){const{opaque:q,transmissive:Nt,transparent:Bt}=P;w.setupLightsView(Z),Rt===!0&&It.setGlobalState(D.clippingPlanes,Z),Y&&xt.viewport(H.copy(Y)),q.length>0&&ir(q,W,Z),Nt.length>0&&ir(Nt,W,Z),Bt.length>0&&ir(Bt,W,Z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Vl(P,W,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){const Ht=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new vn(1,1,{generateMipmaps:!0,type:Ht?bn:xn,minFilter:Fi,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace})}const Nt=w.state.transmissionRenderTarget[Y.id],Bt=Y.viewport||H;Nt.setSize(Bt.z*D.transmissionResolutionScale,Bt.w*D.transmissionResolutionScale);const Lt=D.getRenderTarget(),zt=D.getActiveCubeFace(),Vt=D.getActiveMipmapLevel();D.setRenderTarget(Nt),D.getClearColor(tt),$=D.getClearAlpha(),$<1&&D.setClearColor(16777215,.5),D.clear(),ct&&vt.render(Z);const Jt=D.toneMapping;D.toneMapping=Wn;const re=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),Rt===!0&&It.setGlobalState(D.clippingPlanes,Y),ir(P,Z,Y),b.updateMultisampleRenderTarget(Nt),b.updateRenderTargetMipmap(Nt),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let me=0,Ie=W.length;me<Ie;me++){const Ae=W[me],{object:_e,geometry:$e,material:Ot,group:fn}=Ae;if(Ot.side===qe&&_e.layers.test(Y.layers)){const he=Ot.side;Ot.side=dn,Ot.needsUpdate=!0,Gl(_e,Z,Y,$e,Ot,fn),Ot.side=he,Ot.needsUpdate=!0,Ht=!0}}Ht===!0&&(b.updateMultisampleRenderTarget(Nt),b.updateRenderTargetMipmap(Nt))}D.setRenderTarget(Lt,zt,Vt),D.setClearColor(tt,$),re!==void 0&&(Y.viewport=re),D.toneMapping=Jt}function ir(P,W,Z){const Y=W.isScene===!0?W.overrideMaterial:null;for(let q=0,Nt=P.length;q<Nt;q++){const Bt=P[q],{object:Lt,geometry:zt,group:Vt}=Bt;let Jt=Bt.material;Jt.allowOverride===!0&&Y!==null&&(Jt=Y),Lt.layers.test(Z.layers)&&Gl(Lt,W,Z,zt,Jt,Vt)}}function Gl(P,W,Z,Y,q,Nt){P.onBeforeRender(D,W,Z,Y,q,Nt),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(D,W,Z,Y,P,Nt),q.transparent===!0&&q.side===qe&&q.forceSinglePass===!1?(q.side=dn,q.needsUpdate=!0,D.renderBufferDirect(Z,W,Y,q,P,Nt),q.side=bi,q.needsUpdate=!0,D.renderBufferDirect(Z,W,Y,q,P,Nt),q.side=qe):D.renderBufferDirect(Z,W,Y,q,P,Nt),P.onAfterRender(D,W,Z,Y,q,Nt)}function sr(P,W,Z){W.isScene!==!0&&(W=lt);const Y=R.get(P),q=w.state.lights,Nt=w.state.shadowsArray,Bt=q.state.version,Lt=St.getParameters(P,q.state,Nt,W,Z,w.state.lightProbeGridArray),zt=St.getProgramCacheKey(Lt);let Vt=Y.programs;Y.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?W.environment:null,Y.fog=W.fog;const Jt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;Y.envMap=k.get(P.envMap||Y.environment,Jt),Y.envMapRotation=Y.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,Vt===void 0&&(P.addEventListener("dispose",Re),Vt=new Map,Y.programs=Vt);let re=Vt.get(zt);if(re!==void 0){if(Y.currentProgram===re&&Y.lightsStateVersion===Bt)return Wl(P,Lt),re}else Lt.uniforms=St.getUniforms(P),I!==null&&P.isNodeMaterial&&I.build(P,Z,Lt),P.onBeforeCompile(Lt,D),re=St.acquireProgram(Lt,zt),Vt.set(zt,re),Y.uniforms=Lt.uniforms;const Ht=Y.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ht.clippingPlanes=It.uniform),Wl(P,Lt),Y.needsLights=Iu(P),Y.lightsStateVersion=Bt,Y.needsLights&&(Ht.ambientLightColor.value=q.state.ambient,Ht.lightProbe.value=q.state.probe,Ht.directionalLights.value=q.state.directional,Ht.directionalLightShadows.value=q.state.directionalShadow,Ht.spotLights.value=q.state.spot,Ht.spotLightShadows.value=q.state.spotShadow,Ht.rectAreaLights.value=q.state.rectArea,Ht.ltc_1.value=q.state.rectAreaLTC1,Ht.ltc_2.value=q.state.rectAreaLTC2,Ht.pointLights.value=q.state.point,Ht.pointLightShadows.value=q.state.pointShadow,Ht.hemisphereLights.value=q.state.hemi,Ht.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ht.spotLightMatrix.value=q.state.spotLightMatrix,Ht.spotLightMap.value=q.state.spotLightMap,Ht.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=re,Y.uniformsList=null,re}function Hl(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=jr.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Wl(P,W){const Z=R.get(P);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Pu(P,W){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;M.setFromMatrixPosition(W.matrixWorld);for(let Z=0,Y=P.length;Z<Y;Z++){const q=P[Z];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function Cu(P,W,Z,Y,q){W.isScene!==!0&&(W=lt),b.resetTextureUnits();const Nt=W.fog,Bt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?W.environment:null,Lt=L===null?D.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:le.workingColorSpace,zt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Vt=k.get(Y.envMap||Bt,zt),Jt=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,re=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!Z.morphAttributes.position,me=!!Z.morphAttributes.normal,Ie=!!Z.morphAttributes.color;let Ae=Wn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ae=D.toneMapping);const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$e=_e!==void 0?_e.length:0,Ot=R.get(Y),fn=w.state.lights;if(Rt===!0&&(Pt===!0||P!==O)){const Me=P===O&&Y.id===B;It.setState(Y,P,Me)}let he=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==fn.state.version||Ot.outputColorSpace!==Lt||q.isBatchedMesh&&Ot.batching===!1||!q.isBatchedMesh&&Ot.batching===!0||q.isBatchedMesh&&Ot.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ot.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ot.instancing===!1||!q.isInstancedMesh&&Ot.instancing===!0||q.isSkinnedMesh&&Ot.skinning===!1||!q.isSkinnedMesh&&Ot.skinning===!0||q.isInstancedMesh&&Ot.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ot.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ot.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ot.instancingMorph===!1&&q.morphTexture!==null||Ot.envMap!==Vt||Y.fog===!0&&Ot.fog!==Nt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==It.numPlanes||Ot.numIntersection!==It.numIntersection)||Ot.vertexAlphas!==Jt||Ot.vertexTangents!==re||Ot.morphTargets!==Ht||Ot.morphNormals!==me||Ot.morphColors!==Ie||Ot.toneMapping!==Ae||Ot.morphTargetsCount!==$e||!!Ot.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Ot.__version=Y.version);let yn=Ot.currentProgram;he===!0&&(yn=sr(Y,W,q),I&&Y.isNodeMaterial&&I.onUpdateProgram(Y,yn,Ot));let Fn=!1,ci=!1,Xi=!1;const ve=yn.getUniforms(),De=Ot.uniforms;if(xt.useProgram(yn.program)&&(Fn=!0,ci=!0,Xi=!0),Y.id!==B&&(B=Y.id,ci=!0),Ot.needsLights){const Me=Pu(w.state.lightProbeGridArray,q);Ot.lightProbeGrid!==Me&&(Ot.lightProbeGrid=Me,ci=!0)}if(Fn||O!==P){xt.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ve.setValue(z,"projectionMatrix",P.projectionMatrix),ve.setValue(z,"viewMatrix",P.matrixWorldInverse);const ui=ve.map.cameraPosition;ui!==void 0&&ui.setValue(z,st.setFromMatrixPosition(P.matrixWorld)),Wt.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ve.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),O!==P&&(O=P,ci=!0,Xi=!0)}if(Ot.needsLights&&(fn.state.directionalShadowMap.length>0&&ve.setValue(z,"directionalShadowMap",fn.state.directionalShadowMap,b),fn.state.spotShadowMap.length>0&&ve.setValue(z,"spotShadowMap",fn.state.spotShadowMap,b),fn.state.pointShadowMap.length>0&&ve.setValue(z,"pointShadowMap",fn.state.pointShadowMap,b)),q.isSkinnedMesh){ve.setOptional(z,q,"bindMatrix"),ve.setOptional(z,q,"bindMatrixInverse");const Me=q.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ve.setValue(z,"boneTexture",Me.boneTexture,b))}q.isBatchedMesh&&(ve.setOptional(z,q,"batchingTexture"),ve.setValue(z,"batchingTexture",q._matricesTexture,b),ve.setOptional(z,q,"batchingIdTexture"),ve.setValue(z,"batchingIdTexture",q._indirectTexture,b),ve.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&ve.setValue(z,"batchingColorTexture",q._colorsTexture,b));const hi=Z.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Yt.update(q,Z,yn),(ci||Ot.receiveShadow!==q.receiveShadow)&&(Ot.receiveShadow=q.receiveShadow,ve.setValue(z,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&W.environment!==null&&(De.envMapIntensity.value=W.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Kx()),ci){if(ve.setValue(z,"toneMappingExposure",D.toneMappingExposure),Ot.needsLights&&Ru(De,Xi),Nt&&Y.fog===!0&&Q.refreshFogUniforms(De,Nt),Q.refreshMaterialUniforms(De,Y,Mt,bt,w.state.transmissionRenderTarget[P.id]),Ot.needsLights&&Ot.lightProbeGrid){const Me=Ot.lightProbeGrid;De.probesSH.value=Me.texture,De.probesMin.value.copy(Me.boundingBox.min),De.probesMax.value.copy(Me.boundingBox.max),De.probesResolution.value.copy(Me.resolution)}jr.upload(z,Hl(Ot),De,b)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(jr.upload(z,Hl(Ot),De,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ve.setValue(z,"center",q.center),ve.setValue(z,"modelViewMatrix",q.modelViewMatrix),ve.setValue(z,"normalMatrix",q.normalMatrix),ve.setValue(z,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){const Me=Y.uniformsGroups;for(let ui=0,Yi=Me.length;ui<Yi;ui++){const Xl=Me[ui];ot.update(Xl,yn),ot.bind(Xl,yn)}}return yn}function Ru(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Iu(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,W,Z){const Y=R.get(P);Y.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),R.get(P.texture).__webglTexture=W,R.get(P.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,W){const Z=R.get(P);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const Du=z.createFramebuffer();this.setRenderTarget=function(P,W=0,Z=0){L=P,F=W,U=Z;let Y=null,q=!1,Nt=!1;if(P){const Lt=R.get(P);if(Lt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(z.FRAMEBUFFER,Lt.__webglFramebuffer),H.copy(P.viewport),G.copy(P.scissor),X=P.scissorTest,xt.viewport(H),xt.scissor(G),xt.setScissorTest(X),B=-1;return}else if(Lt.__webglFramebuffer===void 0)b.setupRenderTarget(P);else if(Lt.__hasExternalTextures)b.rebindTextures(P,R.get(P.texture).__webglTexture,R.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Jt=P.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&R.has(Jt)&&(P.width!==Jt.image.width||P.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(P)}}const zt=P.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Nt=!0);const Vt=R.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Vt[W])?Y=Vt[W][Z]:Y=Vt[W],q=!0):P.samples>0&&b.useMultisampledRTT(P)===!1?Y=R.get(P).__webglMultisampledFramebuffer:Array.isArray(Vt)?Y=Vt[Z]:Y=Vt,H.copy(P.viewport),G.copy(P.scissor),X=P.scissorTest}else H.copy(rt).multiplyScalar(Mt).floor(),G.copy(ft).multiplyScalar(Mt).floor(),X=wt;if(Z!==0&&(Y=Du),xt.bindFramebuffer(z.FRAMEBUFFER,Y)&&xt.drawBuffers(P,Y),xt.viewport(H),xt.scissor(G),xt.setScissorTest(X),q){const Lt=R.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,Z)}else if(Nt){const Lt=W;for(let zt=0;zt<P.textures.length;zt++){const Vt=R.get(P.textures[zt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+zt,Vt.__webglTexture,Z,Lt)}}else if(P!==null&&Z!==0){const Lt=R.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Lt.__webglTexture,Z)}B=-1},this.readRenderTargetPixels=function(P,W,Z,Y,q,Nt,Bt,Lt=0){if(!(P&&P.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=R.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(zt=zt[Bt]),zt){xt.bindFramebuffer(z.FRAMEBUFFER,zt);try{const Vt=P.textures[Lt],Jt=Vt.format,re=Vt.type;if(P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Lt),!Wt.textureFormatReadable(Jt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(re)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-Y&&Z>=0&&Z<=P.height-q&&z.readPixels(W,Z,Y,q,V.convert(Jt),V.convert(re),Nt)}finally{const Vt=L!==null?R.get(L).__webglFramebuffer:null;xt.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(P,W,Z,Y,q,Nt,Bt,Lt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=R.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(zt=zt[Bt]),zt)if(W>=0&&W<=P.width-Y&&Z>=0&&Z<=P.height-q){xt.bindFramebuffer(z.FRAMEBUFFER,zt);const Vt=P.textures[Lt],Jt=Vt.format,re=Vt.type;if(P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Lt),!Wt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ht),z.bufferData(z.PIXEL_PACK_BUFFER,Nt.byteLength,z.STREAM_READ),z.readPixels(W,Z,Y,q,V.convert(Jt),V.convert(re),0);const me=L!==null?R.get(L).__webglFramebuffer:null;xt.bindFramebuffer(z.FRAMEBUFFER,me);const Ie=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await dd(z,Ie,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ht),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Nt),z.deleteBuffer(Ht),z.deleteSync(Ie),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,W=null,Z=0){const Y=Math.pow(2,-Z),q=Math.floor(P.image.width*Y),Nt=Math.floor(P.image.height*Y),Bt=W!==null?W.x:0,Lt=W!==null?W.y:0;b.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,Bt,Lt,q,Nt),xt.unbindTexture()};const Lu=z.createFramebuffer(),Nu=z.createFramebuffer();this.copyTextureToTexture=function(P,W,Z=null,Y=null,q=0,Nt=0){let Bt,Lt,zt,Vt,Jt,re,Ht,me,Ie;const Ae=P.isCompressedTexture?P.mipmaps[Nt]:P.image;if(Z!==null)Bt=Z.max.x-Z.min.x,Lt=Z.max.y-Z.min.y,zt=Z.isBox3?Z.max.z-Z.min.z:1,Vt=Z.min.x,Jt=Z.min.y,re=Z.isBox3?Z.min.z:0;else{const De=Math.pow(2,-q);Bt=Math.floor(Ae.width*De),Lt=Math.floor(Ae.height*De),P.isDataArrayTexture?zt=Ae.depth:P.isData3DTexture?zt=Math.floor(Ae.depth*De):zt=1,Vt=0,Jt=0,re=0}Y!==null?(Ht=Y.x,me=Y.y,Ie=Y.z):(Ht=0,me=0,Ie=0);const _e=V.convert(W.format),$e=V.convert(W.type);let Ot;W.isData3DTexture?(b.setTexture3D(W,0),Ot=z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),Ot=z.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),Ot=z.TEXTURE_2D),xt.activeTexture(z.TEXTURE0),xt.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),xt.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),xt.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment);const fn=xt.getParameter(z.UNPACK_ROW_LENGTH),he=xt.getParameter(z.UNPACK_IMAGE_HEIGHT),yn=xt.getParameter(z.UNPACK_SKIP_PIXELS),Fn=xt.getParameter(z.UNPACK_SKIP_ROWS),ci=xt.getParameter(z.UNPACK_SKIP_IMAGES);xt.pixelStorei(z.UNPACK_ROW_LENGTH,Ae.width),xt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ae.height),xt.pixelStorei(z.UNPACK_SKIP_PIXELS,Vt),xt.pixelStorei(z.UNPACK_SKIP_ROWS,Jt),xt.pixelStorei(z.UNPACK_SKIP_IMAGES,re);const Xi=P.isDataArrayTexture||P.isData3DTexture,ve=W.isDataArrayTexture||W.isData3DTexture;if(P.isDepthTexture){const De=R.get(P),hi=R.get(W),Me=R.get(De.__renderTarget),ui=R.get(hi.__renderTarget);xt.bindFramebuffer(z.READ_FRAMEBUFFER,Me.__webglFramebuffer),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Yi=0;Yi<zt;Yi++)Xi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,R.get(P).__webglTexture,q,re+Yi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,R.get(W).__webglTexture,Nt,Ie+Yi)),z.blitFramebuffer(Vt,Jt,Bt,Lt,Ht,me,Bt,Lt,z.DEPTH_BUFFER_BIT,z.NEAREST);xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||P.isRenderTargetTexture||R.has(P)){const De=R.get(P),hi=R.get(W);xt.bindFramebuffer(z.READ_FRAMEBUFFER,Lu),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Nu);for(let Me=0;Me<zt;Me++)Xi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.__webglTexture,q,re+Me):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,De.__webglTexture,q),ve?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hi.__webglTexture,Nt,Ie+Me):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hi.__webglTexture,Nt),q!==0?z.blitFramebuffer(Vt,Jt,Bt,Lt,Ht,me,Bt,Lt,z.COLOR_BUFFER_BIT,z.NEAREST):ve?z.copyTexSubImage3D(Ot,Nt,Ht,me,Ie+Me,Vt,Jt,Bt,Lt):z.copyTexSubImage2D(Ot,Nt,Ht,me,Vt,Jt,Bt,Lt);xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ve?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Ot,Nt,Ht,me,Ie,Bt,Lt,zt,_e,$e,Ae.data):W.isCompressedArrayTexture?z.compressedTexSubImage3D(Ot,Nt,Ht,me,Ie,Bt,Lt,zt,_e,Ae.data):z.texSubImage3D(Ot,Nt,Ht,me,Ie,Bt,Lt,zt,_e,$e,Ae):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Nt,Ht,me,Bt,Lt,_e,$e,Ae.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Nt,Ht,me,Ae.width,Ae.height,_e,Ae.data):z.texSubImage2D(z.TEXTURE_2D,Nt,Ht,me,Bt,Lt,_e,$e,Ae);xt.pixelStorei(z.UNPACK_ROW_LENGTH,fn),xt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he),xt.pixelStorei(z.UNPACK_SKIP_PIXELS,yn),xt.pixelStorei(z.UNPACK_SKIP_ROWS,Fn),xt.pixelStorei(z.UNPACK_SKIP_IMAGES,ci),Nt===0&&W.generateMipmaps&&z.generateMipmap(Ot),xt.unbindTexture()},this.initRenderTarget=function(P){R.get(P).__webglFramebuffer===void 0&&b.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?b.setTextureCube(P,0):P.isData3DTexture?b.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?b.setTexture2DArray(P,0):b.setTexture2D(P,0),xt.unbindTexture()},this.resetState=function(){F=0,U=0,L=null,xt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const lh={type:"change"},Rl={type:"start"},gu={type:"end"},Dr=new fo,ch=new ei,Qx=Math.cos(70*kh.DEG2RAD),Ve=new N,an=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ea=1e-6;class t_ extends au{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ye,this._lastTargetPosition=new N,this._quat=new Ye().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fc,this._sphericalDelta=new Fc,this._scale=1,this._panOffset=new N,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new N,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=n_.bind(this),this._onPointerDown=e_.bind(this),this._onPointerUp=i_.bind(this),this._onContextMenu=h_.bind(this),this._onMouseWheel=o_.bind(this),this._onKeyDown=a_.bind(this),this._onTouchStart=l_.bind(this),this._onTouchMove=c_.bind(this),this._onMouseDown=s_.bind(this),this._onMouseMove=r_.bind(this),this._interceptControlDown=u_.bind(this),this._interceptControlUp=d_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lh),this.update(),this.state=ge.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ve.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Dr.origin.copy(this.object.position),Dr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dr.direction))<Qx?this.object.lookAt(this.target):(ch.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dr.intersectPlane(ch,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ea||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ea||this._lastTargetPosition.distanceToSquared(this.target)>ea?(this.dispatchEvent(lh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ve.copy(s).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function e_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function n_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function i_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gu),this.state=ge.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function s_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ge.DOLLY;break;case us.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}break;case us.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(Rl)}function r_(i){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function o_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(i.preventDefault(),this.dispatchEvent(Rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gu))}function a_(i){this.enabled!==!1&&this._handleKeyDown(i)}function l_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ge.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ge.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(Rl)}function c_(i){switch(this._trackPointer(i),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ge.NONE}}function h_(i){this.enabled!==!1&&i.preventDefault()}function u_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ii=new ou,Qe=new N,_i=new N,Se=new Ye,hh={X:new N(1,0,0),Y:new N(0,1,0),Z:new N(0,0,1)},na={type:"change"},uh={type:"mouseDown",mode:null},dh={type:"mouseUp",mode:null},fh={type:"objectChange"};class f_ extends au{constructor(t,e=null){super(void 0,e);const n=new v_(this);this._root=n;const s=new y_;this._gizmo=s,n.add(s);const r=new M_;this._plane=r,n.add(r);const o=this;function a(y,M){let C=M;Object.defineProperty(o,y,{get:function(){return C!==void 0?C:M},set:function(w){C!==w&&(C=w,r[y]=w,s[y]=w,o.dispatchEvent({type:y+"-changed",value:w}),o.dispatchEvent(na))}}),o[y]=M,r[y]=M,s[y]=M}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("showXY",!0),a("showYZ",!0),a("showXZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new N,l=new N,u=new Ye,f=new Ye,h=new N,d=new Ye,m=new N,_=new N,x=new N,p=0,g=new N;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",u),a("worldQuaternionStart",f),a("cameraPosition",h),a("cameraQuaternion",d),a("pointStart",m),a("pointEnd",_),a("rotationAxis",x),a("rotationAngle",p),a("eye",g),this._offset=new N,this._startNorm=new N,this._endNorm=new N,this._cameraScale=new N,this._parentPosition=new N,this._parentQuaternion=new Ye,this._parentQuaternionInv=new Ye,this._parentScale=new N,this._worldScaleStart=new N,this._worldQuaternionInv=new Ye,this._worldScale=new N,this._positionStart=new N,this._quaternionStart=new Ye,this._scaleStart=new N,this._getPointer=p_.bind(this),this._onPointerDown=g_.bind(this),this._onPointerHover=m_.bind(this),this._onPointerMove=x_.bind(this),this._onPointerUp=__.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Ii.setFromCamera(t,this.camera);const e=ia(this._gizmo.picker[this.mode],Ii);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Ii.setFromCamera(t,this.camera);const e=ia(this._plane,Ii,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,uh.mode=this.mode,this.dispatchEvent(uh)}}pointerMove(t){const e=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Ii.setFromCamera(t,this.camera);const o=ia(this._plane,Ii,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Se.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Qe.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Qe.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),_i.set(a,a,a)}else Qe.copy(this.pointStart),_i.copy(this.pointEnd),Qe.applyQuaternion(this._worldQuaternionInv),_i.applyQuaternion(this._worldQuaternionInv),_i.divide(Qe),e.search("X")===-1&&(_i.x=1),e.search("Y")===-1&&(_i.y=1),e.search("Z")===-1&&(_i.z=1);s.scale.copy(this._scaleStart).multiply(_i),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Qe.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Qe.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(hh[e]),Qe.copy(hh[e]),r==="local"&&Qe.applyQuaternion(this.worldQuaternion),Qe.cross(this.eye),Qe.length()===0?c=!0:this.rotationAngle=this._offset.dot(Qe.normalize())*a),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Se.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Se.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(na),this.dispatchEvent(fh)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(dh.mode=this.mode,this.dispatchEvent(dh)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(na),this.dispatchEvent(fh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ii}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){const r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}}function p_(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function m_(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function g_(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function x_(i){this.enabled&&this.pointerMove(this._getPointer(i))}function __(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function ia(i,t,e){const n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}const Lr=new li,ye=new N(0,1,0),ph=new N(0,0,0),mh=new xe,Nr=new Ye,Zr=new Ye,zn=new N,gh=new xe,Bs=new N(1,0,0),Di=new N(0,1,0),zs=new N(0,0,1),Ur=new N,Is=new N,Ds=new N;class v_ extends Fe{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class y_ extends Fe{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new Le({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new hn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const c=t.clone();c.color.setHex(16711680),c.opacity=.5;const l=t.clone();l.color.setHex(65280),l.opacity=.5;const u=t.clone();u.color.setHex(255),u.opacity=.5;const f=t.clone();f.opacity=.25;const h=t.clone();h.color.setHex(16776960),h.opacity=.25;const d=t.clone();d.color.setHex(16776960);const m=t.clone();m.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:d,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:u,activeTransparent:h};const _=new je(0,.04,.1,12);_.translate(0,.05,0);const x=new Pe(.08,.08,.08);x.translate(0,.04,0);const p=new te;p.setAttribute("position",new Zt([0,0,0,1,0,0],3));const g=new je(.0075,.0075,.5,3);g.translate(0,.25,0);function y(L,B){const O=new Ni(L,.0075,3,64,B*Math.PI*2);return O.rotateY(Math.PI/2),O.rotateX(Math.PI/2),O}function M(){const L=new te;return L.setAttribute("position",new Zt([0,0,0,1,1,1],3)),L}const C={X:[[new _t(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new _t(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new _t(g,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new _t(_,o),[0,.5,0]],[new _t(_,o),[0,-.5,0],[Math.PI,0,0]],[new _t(g,o)]],Z:[[new _t(_,a),[0,0,.5],[Math.PI/2,0,0]],[new _t(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new _t(g,a),null,[Math.PI/2,0,0]]],XYZ:[[new _t(new cs(.1,0),f),[0,0,0]]],XY:[[new _t(new Pe(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new _t(new Pe(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new Pe(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new _t(new je(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new _t(new je(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _t(new je(.2,0,.6,4),n),[0,.3,0]],[new _t(new je(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _t(new je(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new _t(new je(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new _t(new cs(.2,0),n)]],XY:[[new _t(new Pe(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new _t(new Pe(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new Pe(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},E={START:[[new _t(new cs(.01,2),s),null,null,null,"helper"]],END:[[new _t(new cs(.01,2),s),null,null,null,"helper"]],DELTA:[[new we(M(),s),null,null,null,"helper"]],X:[[new we(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new we(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new we(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},S={XYZE:[[new _t(y(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new _t(y(.5,.5),r)]],Y:[[new _t(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new _t(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new _t(y(.75,1),h),null,[0,Math.PI/2,0]]]},A={AXIS:[[new we(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},D={XYZE:[[new _t(new Pl(.25,10,8),n)]],X:[[new _t(new Ni(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new _t(new Ni(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new _t(new Ni(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new _t(new Ni(.75,.1,2,24),n)]]},T={X:[[new _t(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new _t(g,r),[0,0,0],[0,0,-Math.PI/2]],[new _t(x,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new _t(x,o),[0,.5,0]],[new _t(g,o)],[new _t(x,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new _t(x,a),[0,0,.5],[Math.PI/2,0,0]],[new _t(g,a),[0,0,0],[Math.PI/2,0,0]],[new _t(x,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new _t(new Pe(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new _t(new Pe(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new Pe(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _t(new Pe(.1,.1,.1),f)]]},I={X:[[new _t(new je(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new _t(new je(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new _t(new je(.2,0,.6,4),n),[0,.3,0]],[new _t(new je(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new _t(new je(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new _t(new je(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new _t(new Pe(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new _t(new Pe(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new _t(new Pe(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new _t(new Pe(.2,.2,.2),n),[0,0,0]]]},F={X:[[new we(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new we(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new we(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function U(L){const B=new Fe;for(const O in L)for(let H=L[O].length;H--;){const G=L[O][H][0].clone(),X=L[O][H][1],tt=L[O][H][2],$=L[O][H][3],nt=L[O][H][4];G.name=O,G.tag=nt,X&&G.position.set(X[0],X[1],X[2]),tt&&G.rotation.set(tt[0],tt[1],tt[2]),$&&G.scale.set($[0],$[1],$[2]),G.updateMatrix();const bt=G.geometry.clone();bt.applyMatrix4(G.matrix),G.geometry=bt,G.renderOrder=1/0,G.position.set(0,0,0),G.rotation.set(0,0,0),G.scale.set(1,1,1),B.add(G)}return B}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=U(C)),this.add(this.gizmo.rotate=U(S)),this.add(this.gizmo.scale=U(T)),this.add(this.picker.translate=U(w)),this.add(this.picker.rotate=U(D)),this.add(this.picker.scale=U(I)),this.add(this.helper.translate=U(E)),this.add(this.helper.rotate=U(A)),this.add(this.helper.scale=U(F)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Zr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Se.setFromEuler(Lr.set(0,0,0)),o.quaternion.copy(n).multiply(Se),Math.abs(ye.copy(Bs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Se.setFromEuler(Lr.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Se),Math.abs(ye.copy(Di).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Se.setFromEuler(Lr.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Se),Math.abs(ye.copy(zs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Se.setFromEuler(Lr.set(0,Math.PI/2,0)),ye.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(mh.lookAt(ph,ye,Di)),o.quaternion.multiply(Se),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Qe.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Qe.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Qe),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ye.copy(Bs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ye.copy(Di).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ye.copy(zs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ye.copy(zs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ye.copy(Bs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ye.copy(Di).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Nr.copy(n),ye.copy(this.eye).applyQuaternion(Se.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(mh.lookAt(this.eye,ph,Di)),o.name==="X"&&(Se.setFromAxisAngle(Bs,Math.atan2(-ye.y,ye.z)),Se.multiplyQuaternions(Nr,Se),o.quaternion.copy(Se)),o.name==="Y"&&(Se.setFromAxisAngle(Di,Math.atan2(ye.x,ye.z)),Se.multiplyQuaternions(Nr,Se),o.quaternion.copy(Se)),o.name==="Z"&&(Se.setFromAxisAngle(zs,Math.atan2(ye.y,ye.x)),Se.multiplyQuaternions(Nr,Se),o.quaternion.copy(Se))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.visible=o.visible&&(o.name.indexOf("XY")===-1||this.showXY),o.visible=o.visible&&(o.name.indexOf("YZ")===-1||this.showYZ),o.visible=o.visible&&(o.name.indexOf("XZ")===-1||this.showXZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}}class M_ extends _t{constructor(){super(new Ms(1e5,1e5,2,2),new Le({visible:!1,wireframe:!0,side:qe,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Ur.copy(Bs).applyQuaternion(e==="local"?this.worldQuaternion:Zr),Is.copy(Di).applyQuaternion(e==="local"?this.worldQuaternion:Zr),Ds.copy(zs).applyQuaternion(e==="local"?this.worldQuaternion:Zr),ye.copy(Is),this.mode){case"translate":case"scale":switch(this.axis){case"X":ye.copy(this.eye).cross(Ur),zn.copy(Ur).cross(ye);break;case"Y":ye.copy(this.eye).cross(Is),zn.copy(Is).cross(ye);break;case"Z":ye.copy(this.eye).cross(Ds),zn.copy(Ds).cross(ye);break;case"XY":zn.copy(Ds);break;case"YZ":zn.copy(Ur);break;case"XZ":ye.copy(Ds),zn.copy(Is);break;case"XYZ":case"E":zn.set(0,0,0);break}break;case"rotate":default:zn.set(0,0,0)}zn.length()===0?this.quaternion.copy(this.cameraQuaternion):(gh.lookAt(Qe.set(0,0,0),zn,ye),this.quaternion.setFromRotationMatrix(gh)),super.updateMatrixWorld(t)}}class at{constructor(t,e){this.x=t,this.y=e}add(t){return new at(this.x+t.x,this.y+t.y)}sub(t){return new at(this.x-t.x,this.y-t.y)}scale(t){return new at(this.x*t,this.y*t)}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.lengthSq())}normalize(){const t=this.length();return t>1e-12?this.scale(1/t):new at(0,0)}distSq(t){return(this.x-t.x)**2+(this.y-t.y)**2}dist(t){return Math.sqrt(this.distSq(t))}}function S_(i){let t=0;for(let e=0;e<i.length;e++){const n=i[e],s=i[(e+1)%i.length];t+=(s.x-n.x)*(s.y+n.y)}return t<0?i:[...i].reverse()}function E_(i,t){const e=t.x-i.x,n=t.y-i.y;return new at(-n,e).normalize()}function Il(i,t,e,n){const s=n.sub(e),r=t.cross(s);if(Math.abs(r)<1e-10)return null;const o=e.sub(i),a=o.cross(s)/r,c=o.cross(t)/r;return a>1e-6&&c>=0&&c<=1?{point:i.add(t.scale(a)),s:a}:null}function Hn(i,t,e){const n=e.sub(t),s=i.sub(t),r=n.lengthSq();if(r<1e-10)return t;let o=s.dot(n)/r;return o=Math.max(0,Math.min(1,o)),t.add(n.scale(o))}function xu(i,t){let e=1/0,n=null,s=-1;for(let r=0;r<t.length;r++){const o=t[r],a=t[(r+1)%t.length],c=Hn(i,o,a),l=i.dist(c);l<e&&(e=l,n=c,s=r)}return{distance:e,point:n,edgeIndex:s}}function ao(i,t){let e=i.x,n=i.y,s=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){let a=t[r].x,c=t[r].y,l=t[o].x,u=t[o].y;c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function sa(i){if(i.length===0)return null;let t=i[0];for(let e=1;e<i.length;e++)if(t=b_(t,i[e]),!t)return null;return w_(t)}function b_(i,t){const e=[];for(let _=0;_<i.length;_++)e.push([i[_],i[(_+1)%i.length]]);const n=[];for(let _=0;_<t.length;_++)n.push([t[_],t[(_+1)%t.length]]);const s=_=>`${_.x.toFixed(4)},${_.y.toFixed(4)}`,r=new Set;for(const _ of n)r.add(`${s(_[0])}->${s(_[1])}`);const o=e.filter(_=>!r.has(`${s(_[1])}->${s(_[0])}`)),a=new Set;for(const _ of e)a.add(`${s(_[0])}->${s(_[1])}`);const c=n.filter(_=>!a.has(`${s(_[1])}->${s(_[0])}`)),l=[...o,...c];if(l.length===0)return null;const u=new Map;for(const _ of l)u.set(s(_[0]),{start:_[0],end:_[1]});let h=Array.from(u.keys())[0];const d=[],m=new Set;for(;h&&!m.has(h);){m.add(h);const _=u.get(h);if(!_)break;d.push(_.start),h=s(_.end)}return m.size<l.length?null:d}function w_(i){if(i.length<3)return i;const t=[];for(let e=0;e<i.length;e++){const n=i[(e-1+i.length)%i.length],s=i[e],r=i[(e+1)%i.length],o=s.x-n.x,a=s.y-n.y,c=r.x-s.x,l=r.y-s.y,u=Math.hypot(o,a),f=Math.hypot(c,l);if(u<1e-6||f<1e-6)continue;const h=(o*l-a*c)/(u*f);Math.abs(h)>.001&&t.push(s)}return t}const Ls=(i,t,e)=>{if(i===t)return 1;if(typeof i!="string"||typeof t!="string")return 0;const n=i.startsWith("V")?parseInt(i.substring(1))*2:parseInt(i.substring(1))*2+1,s=t.startsWith("V")?parseInt(t.substring(1))*2:parseInt(t.substring(1))*2+1;return Math.min(Math.abs(n-s),2*e-Math.abs(n-s))===1?.5:0};class T_{constructor(t,e={}){this.polygon=S_(t.map(n=>new at(n.x,n.y))),this.epsilon=e.epsilon!==void 0?e.epsilon:1e-5,this.tangentEpsilon=e.tangentEpsilon||1e-4}containsBall(t,e){const{distance:n}=xu(t,this.polygon);return n>=e-this.epsilon}computeMedialPoint(t,e){let n=t,s=e,r=t.add(e).scale(.5),o=r.dist(t);for(;s.dist(n)>this.epsilon;)this.containsBall(r,o)?n=r:s=r,r=n.add(s).scale(.5),o=r.dist(t);return r.radius=o,r}computeStructuredSkeleton(t){const e=[],n=[],s=this.polygon.length,r=this.polygon.map((f,h)=>{const d=(h-1+s)%s,m=(h+1)%s,_=f.sub(this.polygon[d]),x=this.polygon[m].sub(f);return _.cross(x)>=0?"CONVEX":"CONCAVE"});let o=0;for(let f=0;f<s;f++)o+=this.polygon[f].dist(this.polygon[(f+1)%s]);const a=t*s,c=[];for(let f=0;f<s;f++){const h=this.polygon[f],d=this.polygon[(f+1)%s],m=h.dist(d);if(m===0)continue;const _=E_(h,d);let x=Math.max(5,Math.floor(m/o*a));x%2!==0&&(x+=1);for(let p=1;p<x;p++){const g=h.add(d.sub(h).scale(p/x));let y=null,M=1/0;for(let C=0;C<s;C++){const w=Il(g,_,this.polygon[C],this.polygon[(C+1)%s]);w&&w.s<M&&(M=w.s,y=w.point)}if(y){const C=this.computeMedialPoint(g,y);c.push(C)}}}c.forEach(f=>{f.governors=new Set;for(let h=0;h<s;h++){const d=this.polygon[h],m=this.polygon[(h+1)%s],_=Hn(f,d,m),x=f.dist(_),p=Math.max(.2,f.radius*.05);if(Math.abs(x-f.radius)<p){const g=m.sub(d),y=g.length(),M=y===0?x:Math.abs((f.x-d.x)*g.y-(f.y-d.y)*g.x)/y;Math.abs(M-f.radius)<p&&f.governors.add("E"+h),_.dist(d)<.05*y&&r[h]==="CONCAVE"?f.governors.add("V"+h):_.dist(m)<.05*y&&r[(h+1)%s]==="CONCAVE"&&f.governors.add("V"+(h+1)%s)}}});const l=c.filter(f=>{let h=[];for(let m=0;m<s;m++)if(f.governors.has("E"+m)||f.governors.has("V"+m)){const _=this.polygon[m],x=this.polygon[(m+1)%s],g=(f.governors.has("V"+m)?_:Hn(f,_,x)).sub(f).normalize();g.lengthSq()>1e-6&&h.push(g)}if(h.length<2)return!0;let d=1;for(let m=0;m<h.length;m++)for(let _=m+1;_<h.length;_++){const x=h[m].dot(h[_]);d=Math.min(d,x)}return d<.92});e.push(...l);for(let f=0;f<s;f++)if(r[f]==="CONVEX"){const h=(f-1+s)%s,d=(f+1)%s,m=this.polygon[h],_=this.polygon[f],x=this.polygon[d],p=m.sub(_).normalize(),g=x.sub(_).normalize();if(p.dot(g)>-.92){const C=new at(_.x,_.y);C.radius=0,C.isEndPoint=!0,C.governors=new Set(["E"+h,"V"+f,"E"+f]),n.push(C)}}const u=[];return l.forEach(f=>{let h=!1;for(const d of u){let m=0;if(f.governors.forEach(_=>d.governors.forEach(x=>{m+=Ls(_,x,s)})),m>=1&&f.dist(d)<2.5){d.x=(d.x*d.count+f.x)/(d.count+1),d.y=(d.y*d.count+f.y)/(d.count+1),d.radius=(d.radius*d.count+f.radius)/(d.count+1),d.count++,f.governors.forEach(_=>d.governors.add(_)),h=!0;break}}if(!h){const d=new at(f.x,f.y);d.governors=new Set(f.governors),d.count=1,d.isEndPoint=!1,d.radius=f.radius,u.push(d)}}),n.push(...u),{regularPoints:e,junctionPoints:n}}simplifySkeleton(t,e,n=20){const r=e.filter(g=>g.isEndPoint).map(g=>{const y=new at(g.x,g.y);return y.governors=new Set(g.governors),y.isEndPoint=!0,y.count=1,y.radius=0,y});t.forEach(g=>{let y=!1;for(const M of r){if(M.isEndPoint)continue;let C=0;if(g.governors.forEach(w=>M.governors.forEach(E=>{C+=Ls(w,E,this.polygon.length)})),C>=1&&g.dist(M)<2.5){M.x=(M.x*M.count+g.x)/(M.count+1),M.y=(M.y*M.count+g.y)/(M.count+1),M.radius=(M.radius*M.count+g.radius)/(M.count+1),M.count++,g.governors.forEach(w=>M.governors.add(w)),y=!0;break}}if(!y){const M=new at(g.x,g.y);M.governors=new Set(g.governors),M.count=1,M.isEndPoint=!1,M.radius=g.radius,r.push(M)}});const o=r.map(()=>new Set),a=[];for(let g=0;g<r.length;g++)for(let y=g+1;y<r.length;y++){let M=0;r[g].governors.forEach(C=>r[y].governors.forEach(w=>{M+=Ls(C,w,this.polygon.length)})),M>=1&&a.push({i:g,j:y,distSq:r[g].distSq(r[y])})}for(const g of a){let y=!0;for(let M=0;M<r.length;M++)if(!(M===g.i||M===g.j)&&r[g.i].distSq(r[M])<g.distSq-.01&&r[M].distSq(r[g.j])<g.distSq-.01){let C=0,w=0;if(r[M].governors.forEach(E=>r[g.i].governors.forEach(S=>{C+=Ls(E,S,this.polygon.length)})),r[M].governors.forEach(E=>r[g.j].governors.forEach(S=>{w+=Ls(E,S,this.polygon.length)})),C>=1&&w>=1){y=!1;break}}y&&(o[g.i].add(g.j),o[g.j].add(g.i))}const c=r.map(()=>!0);let l=!0;for(;l;){l=!1;for(let g=0;g<r.length;g++)if(c[g]){for(const y of Array.from(o[g])){if(!c[y]||g>=y)continue;const M=(r[g].radius+r[y].radius)/2,C=Math.max(n,M*.4);if(r[g].dist(r[y])<C){if(r[g].isEndPoint&&r[y].isEndPoint)continue;const w=r[g].isEndPoint?g:r[y].isEndPoint?y:g,E=w===g?y:g;r[w].isEndPoint||(r[w].x=(r[w].x*r[w].count+r[E].x*r[E].count)/(r[w].count+r[E].count),r[w].y=(r[w].y*r[w].count+r[E].y*r[E].count)/(r[w].count+r[E].count),r[w].radius=(r[w].radius*r[w].count+r[E].radius*r[E].count)/(r[w].count+r[E].count),r[w].count+=r[E].count),r[E].governors.forEach(S=>r[w].governors.add(S)),o[E].forEach(S=>{S!==w&&(o[S].delete(E),o[S].add(w),o[w].add(S))}),o[w].delete(E),c[E]=!1,o[E].clear(),l=!0;break}}if(l)break}}const u=(g,y)=>{const C=y.x-g.x,w=y.y-g.y,E=new at(g.x+C*.001,g.y+w*.001),S=new at(y.x-C*.001,y.y-w*.001);for(let A=0;A<this.polygon.length;A++){const D=this.polygon[A],T=this.polygon[(A+1)%this.polygon.length],I=(U,L,B)=>(B.y-U.y)*(L.x-U.x)>(L.y-U.y)*(B.x-U.x);if(I(E,D,T)!==I(S,D,T)&&I(E,S,D)!==I(E,S,T))return!1}return!0},f=Array.from({length:r.length},(g,y)=>y),h=g=>f[g]===g?g:f[g]=h(f[g]),d=(g,y)=>{const M=h(g),C=h(y);return M!==C?(f[M]=C,!0):!1};for(let g=0;g<r.length;g++)if(c[g])for(const y of o[g])c[y]&&g<y&&d(g,y);for(let g=0;g<r.length;g++)if(c[g])for(let y=g+1;y<r.length;y++)c[y]&&h(g)!==h(y)&&u(r[g],r[y])&&(d(g,y),o[g].add(y),o[y].add(g));const m=(g,y,M)=>{const C=M.sub(y),w=g.sub(y),E=C.lengthSq();if(E<1e-10)return g.dist(y);let S=w.dot(C)/E;S=Math.max(0,Math.min(1,S));const A=y.add(C.scale(S));return g.dist(A)};let _=!0;for(;_;){_=!1;for(let g=0;g<r.length;g++)if(!(!c[g]||r[g].isEndPoint)){if(o[g].size===2){const y=Array.from(o[g]),M=y[0],C=y[1],w=r[M],E=r[C],S=r[g],A=w.sub(S).normalize(),D=E.sub(S).normalize(),T=A.dot(D),I=m(S,w,E);let F=!1;for(const U of S.governors)if(!w.governors.has(U)&&!E.governors.has(U)){F=!0;break}(T<-.95||I<.5||!F)&&(o[M].delete(g),o[C].delete(g),M!==C&&(o[M].add(C),o[C].add(M)),c[g]=!1,o[g].clear(),_=!0)}else if(o[g].size<=1){const y=Array.from(o[g]);y.length===1&&o[y[0]].delete(g),c[g]=!1,o[g].clear(),_=!0}}}const x=[];for(let g=0;g<r.length;g++)if(c[g])for(const y of o[g])g<y&&x.push({start:r[g],end:r[y]});const p=r.filter((g,y)=>c[y]);for(let g=0;g<r.length;g++)c[g]&&(r[g].isJunction=o[g].size>=3);return{segments:x,nodes:p}}computeVoronoiCells(t,e=3e3,n=3e3){const s=[];if(t.length===0)return[];const r=(o,a,c)=>{const l=[];if(o.length===0)return[];for(let u=0;u<o.length;u++){const f=o[u],h=o[(u+1)%o.length],d=f.sub(a).dot(c),m=h.sub(a).dot(c);if(d>=-1e-9&&l.push(f),d>=0&&m<0||d<0&&m>=0){const _=d-m;if(Math.abs(_)>1e-9){const x=d/_;l.push(f.add(h.sub(f).scale(x)))}}}return l};for(let o=0;o<t.length;o++){const a=t[o];let c=[new at(-e,-n),new at(e,-n),new at(e,n),new at(-e,n)];for(let l=0;l<t.length;l++){if(o===l)continue;const u=t[l],f=a.add(u).scale(.5),h=a.sub(u).normalize();c=r(c,f,h)}s.push({seed:a,polygon:c})}return s}}class A_{constructor(t){this.appContext=t,this.worker=new Worker(new URL("/assets/rhino.worker-DuiYq1HG.js",import.meta.url)),this.metadataResolve=null,this.loadResolve=null,this.exportResolve=null,this.rejectCallback=null,this.layers=[],this.worker.onmessage=e=>{const{type:n,success:s,layers:r,objectCount:o,geometries:a,error:c}=e.data;if(!s){console.error("[RhinoManager] Worker error:",c),this.rejectCallback&&this.rejectCallback(new Error(c));return}n==="metadata-result"?(this.layers=r,this.metadataResolve&&this.metadataResolve({layers:r,objectCount:o})):n==="load-result"?(this.processGeometries(a),this.loadResolve&&this.loadResolve(a)):n==="export-result"&&this.exportResolve&&this.exportResolve(e.data.bytes)}}parseMetadata(t){return new Promise((e,n)=>{this.metadataResolve=e,this.rejectCallback=n,this.worker.postMessage({type:"parse-metadata",buffer:t})})}loadLayers(t,e){return new Promise((n,s)=>{this.loadResolve=n,this.rejectCallback=s,this.worker.postMessage({type:"load-layers",buffer:t,layerIndices:e})})}processGeometries(t){console.log(`[RhinoManager] Processing ${t.length} geometries...`),this.clearRhinoGeometries();const e=[],n=new Kf;t.forEach(s=>{const r=this.layers.find(c=>c.index===s.layerIndex),o=r?r.color:{r:128,g:128,b:128},a=o.r<<16|o.g<<8|o.b;if(s.type==="mesh")try{const c=typeof s.data=="string"?JSON.parse(s.data):s.data,l=n.parse(c),u=new Le({color:a,transparent:!0,opacity:.4,side:qe}),f=new _t(l,u);f.name=s.name,f.userData={type:"rhino-geometry"},this.appContext.rhinoGroup.add(f)}catch(c){console.error("[RhinoManager] Failed to load mesh:",c)}else if(s.type==="curve")try{const c=s.points.map(h=>new N(h[0],h[1],h[2])),l=new te().setFromPoints(c),u=new hn({color:a,linewidth:2}),f=new we(l,u);if(f.name=s.name,f.userData={type:"rhino-geometry"},this.appContext.rhinoGroup.add(f),s.points.length>=3){const h=s.points[0],d=s.points[s.points.length-1];if(Math.sqrt((h[0]-d[0])**2+(h[1]-d[1])**2+(h[2]-d[2])**2)<.2){const _=s.points.map(x=>[x[0],x[1]]);_.pop(),e.push(_)}}}catch(c){console.error("[RhinoManager] Failed to load curve:",c)}}),e.length>0&&(console.log(`[RhinoManager] Found ${e.length} closed boundary curves. Setting imported polygons!`),this.appContext.setPolygonsFrom3dm(e))}clearRhinoGeometries(){const t=this.appContext.rhinoGroup;if(t)for(;t.children.length>0;){const e=t.children[0];t.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}}exportSceneTo3dm(t="medial_axis_export.3dm"){console.log("[RhinoManager] Triggering background export to .3dm...");const e=this.appContext.state.activePolygonId,n=this.appContext.state.importedPolygons.map(s=>{this.appContext.state.activePolygonId=s.id;const r=s.polygon.map(p=>[p.x,p.y,0]);if(!s.hasScaffold)return{boundary:r,hasScaffold:!1};const o=[];if(this.appContext.state.showSkeleton&&s.polygon.length>=3)if(s.planarGraph){const p=s.planarGraph;p.edges.forEach(g=>{if(g[2]==="skeleton"){const y=p.vertices[g[0]],M=p.vertices[g[1]];o.push([[y.x,y.y,0],[M.x,M.y,0]])}})}else if(this.appContext.state.simplifySkeleton)(this.appContext.state.pruneBranches?s.skeletonData.simplifiedSegments.filter(g=>!(g.start.isEndPoint||g.end.isEndPoint)):s.skeletonData.simplifiedSegments).forEach(g=>{o.push([[g.start.x,g.start.y,0],[g.end.x,g.end.y,0]])});else{const p=s.skeletonData.regularPoints,g=this.appContext.state.samplesPerEdge;for(let y=0;y<s.polygon.length;y++){const M=[];for(let C=0;C<g;C++){const w=y*g+C;p[w]&&M.push([p[w].x,p[w].y,0])}M.length>=2&&o.push(M)}}const a=[];if(this.appContext.state.showSkeleton&&this.appContext.state.showRibs)if(s.planarGraph){const p=s.planarGraph;p.edges.forEach(g=>{if(g[2]&&g[2].startsWith("rib_")){const y=p.vertices[g[0]],M=p.vertices[g[1]];a.push({start:[y.x,y.y,0],end:[M.x,M.y,0]})}})}else s.id===e&&this.appContext.acceptedRibsCache&&this.appContext.acceptedRibsCache.forEach(p=>{a.push({start:[p.source.x,p.source.y,0],end:[p.target.x,p.target.y,0]})});const c=[];if(s.id===e&&this.appContext.state.hoverCircle&&this.appContext.state.hoveredMedialPoint){const p=this.appContext.state.hoveredMedialPoint;c.push({center:[p.x,p.y,0],radius:p.radius})}s.polygon.length>=3&&s.skeletonData.simplifiedNodes&&s.skeletonData.simplifiedNodes.filter(g=>!g.isEndPoint).forEach(g=>{c.push({center:[g.x,g.y,0],radius:g.radius||5})});const l=[];s.structuralBays&&s.structuralBays.forEach(p=>{l.push(p.map(g=>[g.x,g.y,0]))});const u=[];s.unprunedStructuralBays&&s.unprunedStructuralBays.forEach(p=>{u.push(p.map(g=>[g.x,g.y,0]))});const f=[];s.polygon.length>=3&&s.skeletonData&&s.skeletonData.simplifiedSegments&&s.skeletonData.simplifiedSegments.filter(g=>!(g.start.isEndPoint||g.end.isEndPoint)).forEach(g=>{f.push([g.start.x,g.start.y]),f.push([g.end.x,g.end.y]),g.divisionPoints&&g.divisionPoints.forEach(y=>{f.push([y.x,y.y])})});let h=!0,d=0;for(let p=0;p<s.polygon.length;p++){const g=s.polygon[p],y=s.polygon[(p+1)%s.polygon.length];d+=g.x*y.y-y.x*g.y}h=d>0;const m=[];for(let p=0;p<s.polygon.length;p++){const g=s.polygon[p],y=s.polygon[(p+1)%s.polygon.length],M=y.x-g.x,C=y.y-g.y,w=Math.hypot(M,C);let E=0,S=0;w>1e-6&&(h?(E=C/w,S=-M/w):(E=-C/w,S=M/w)),m.push(new at(E,S))}const _=[];for(let p=0;p<s.polygon.length;p++){const g=s.polygon[p],y=s.polygon[(p+1)%s.polygon.length],M=m[p];_.push(P_(g,y,M,s,this.appContext.state.importedPolygons))}const x=[];return s.structuralBays&&s.structuralBays.forEach(p=>{x.push(R_(p,s.polygon))}),{boundary:r,hasScaffold:!0,skeleton:o,ribs:a,circles:c,bays:l,unprunedBays:u,prunedSkeletonVertices:f,planarGraphVertices:s.planarGraph?s.planarGraph.vertices.map(p=>[p.x,p.y,0]):null,planarGraphEdges:s.planarGraph?s.planarGraph.edges.map(p=>[p[0],p[1]]):null,segmentContexts:_,cellIsCorner:x,boundaryNormals:m.map(p=>[p.x,p.y,0])}});return this.appContext.state.activePolygonId=e,new Promise((s,r)=>{this.exportResolve=o=>{try{if(typeof document<"u"){const a=new Blob([o],{type:"application/octet-stream"}),c=document.createElement("a");c.href=URL.createObjectURL(a),c.download=t,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(c.href)}console.log(`[RhinoManager] Exported ${o.length} bytes to ${t}`),s(o)}catch(a){r(a)}finally{this.exportResolve=null,this.rejectCallback=null}},this.rejectCallback=o=>{this.exportResolve=null,this.rejectCallback=null,r(o)},this.worker.postMessage({type:"export-scene",polygons:n,numFloors:this.appContext.state.numFloors,floorHeight:this.appContext.state.floorHeight,groundFloorHeightFactor:this.appContext.state.groundFloorHeightFactor,show3DColumns:this.appContext.state.show3DColumns,show3DBeams:this.appContext.state.show3DBeams,showFloorSlabs:this.appContext.state.showFloorSlabs,showRoofSlab:this.appContext.state.showRoofSlab,showBalconies:this.appContext.state.showBalconies,showBriseSoleil:this.appContext.state.showBriseSoleil,show3DCells:this.appContext.state.show3DCells,columnRadius:this.appContext.state.columnRadius,beamWidth:this.appContext.state.beamWidth,beamDepth:this.appContext.state.beamDepth,slabThickness:this.appContext.state.slabThickness,balconyOffset:this.appContext.state.balconyOffset,balconyThickness:this.appContext.state.balconyThickness,louverWidth:this.appContext.state.louverWidth,louverDepth:this.appContext.state.louverDepth,louverSpacing:this.appContext.state.louverSpacing,vaultHeight:this.appContext.state.vaultHeight,showVaultedRoofs:this.appContext.state.showVaultedRoofs,cantileverScale:this.appContext.state.cantileverScale,briseFinScale:this.appContext.state.briseFinScale,roofHyparH:this.appContext.state.roofHyparH,roofHyparSlatSpacing:this.appContext.state.roofHyparSlatSpacing,roofPitchRH:this.appContext.state.roofPitchRH})})}}function P_(i,t,e,n,s){const r=i.add(t).scale(.5),o=new at(r.x+e.x*.1,r.y+e.y*.1),a=e;let c=1/0,l="open_space";return s.forEach(u=>{const f=u.id===n.id;for(let h=0;h<u.polygon.length;h++){const d=u.polygon[h],m=u.polygon[(h+1)%u.polygon.length];if(f){const x=d.dist(i),p=m.dist(t),g=d.dist(t),y=m.dist(i);if(x<1e-4&&p<1e-4||g<1e-4&&y<1e-4)continue}const _=Il(o,a,d,m);_&&_.s<c&&(c=_.s,l=f?"courtyard":"other_building")}}),c<.5?"touching":c<25?l:"open_space"}function C_(i,t){const e=t.length;if(e<3)return!1;const n=t[(i-1+e)%e],s=t[i],r=t[(i+1)%e],o=s.x-n.x,a=s.y-n.y,c=Math.hypot(o,a),l=r.x-s.x,u=r.y-s.y,f=Math.hypot(l,u);return c<1e-6||f<1e-6?!1:(o*l+a*u)/(c*f)<.98}function R_(i,t){const e=t.length;for(const n of i)for(let s=0;s<e;s++){const r=t[s];if(Math.hypot(n.x-r.x,n.y-r.y)<.1&&C_(s,t))return!0}return!1}class xh{constructor(t=.001,e=new Map){this.vertices=[],this.originalVertices=[],this.edges=[],this.vertexTolerance=t,this.vertexOverrides=e}getOverride(t){for(const[e,n]of this.vertexOverrides.entries()){const s=e.split(","),r=parseFloat(s[0]),o=parseFloat(s[1]);if(Math.hypot(t.x-r,t.y-o)<.1)return n}return null}addVertex(t){const e=t.origX!==void 0&&t.origY!==void 0?new at(t.origX,t.origY):t,s=this.getOverride(e)||t,r=Math.max(this.vertexTolerance,.02);for(let o=0;o<this.vertices.length;o++)if(this.vertices[o].dist(s)<r)return o;return this.vertices.push(new at(s.x,s.y)),this.originalVertices.push(new at(e.x,e.y)),this.vertices.length-1}addEdge(t,e,n="unknown"){const s=this.addVertex(t),r=this.addVertex(e);if(s===r)return;this.edges.some(a=>a[0]===s&&a[1]===r||a[0]===r&&a[1]===s)||this.edges.push([s,r,n])}subdivideEdges(){let t=!0,e=0;const n=20;for(;t&&e<n;){t=!1,e++;const s=[];for(const r of this.edges){const o=r[0],a=r[1],c=r[2],l=this.vertices[o],u=this.vertices[a],h=u.sub(l).length();if(h<this.vertexTolerance)continue;let d=-1;for(let m=0;m<this.vertices.length;m++){if(m===o||m===a)continue;const _=this.vertices[m],x=Hn(_,l,u);if(_.dist(x)<this.vertexTolerance){const y=l.dist(x)/h;if(y>1e-4&&y<1-1e-4){d=m;break}}}d!==-1?(s.push([o,d,c]),s.push([d,a,c]),t=!0):s.push([o,a,c])}this.edges=[];for(const r of s){const o=r[0],a=r[1],c=r[2];!this.edges.some(u=>u[0]===o&&u[1]===a||u[0]===a&&u[1]===o)&&o!==a&&this.edges.push([o,a,c])}}}extractFaces(){this.subdivideEdges();const t=this.vertices.length,e=Array.from({length:t},()=>[]);for(const[o,a]of this.edges)e[o].push(a),e[a].push(o);const n=e.map((o,a)=>{const c=this.vertices[a];return o.map(l=>{const u=this.vertices[l],f=Math.atan2(u.y-c.y,u.x-c.x);return{v:l,angle:f}}).sort((l,u)=>l.angle-u.angle).map(l=>l.v)}),s=new Set,r=[];for(let o=0;o<t;o++)for(const a of n[o]){const c=`${o},${a}`;if(s.has(c))continue;const l=[];let u=a,f=o,h=!1;for(;!s.has(`${f},${u}`);){l.push(u),s.add(`${f},${u}`);const d=n[u],m=d.indexOf(f);if(m===-1)break;const _=d[(m-1+d.length)%d.length];if(f=u,u=_,u===a&&f===o){h=!0;break}}if(h&&l.length>=3){let d=0;const m=l.map(_=>this.vertices[_]);for(let _=0;_<m.length;_++){const x=m[_],p=m[(_+1)%m.length];d+=x.x*p.y-p.x*x.y}if(d=.5*d,d>1e-4){let _=0;const x=new Set;for(let p=0;p<l.length;p++){const g=l[p],y=l[(p+1)%l.length],M=this.edges.find(C=>C[0]===g&&C[1]===y||C[0]===y&&C[1]===g);if(M){const C=M[2];C==="boundary"?_++:C&&C.startsWith("rib_")&&x.add(C)}}_>0&&r.push(m)}}}return r}}class I_{constructor(t){this.viewport=t}async generateRender(t,e,n){try{e("Preparing scene renders...");const s=this.viewport.container.clientWidth,r=this.viewport.container.clientHeight,o=this.viewport.renderer.getPixelRatio(),a=document.getElementById("imagen-resolution");if(a){const I=a.value;let F=3840,U=2160;I==="4k"?(F=3840,U=2160):I==="2k"?(F=2560,U=1440):I==="1k"&&(F=1920,U=1080),this.viewport.camera.aspect=F/U,this.viewport.camera.updateProjectionMatrix(),this.viewport.renderer.setPixelRatio(1),this.viewport.renderer.setSize(F,U,!1),this.viewport.composer.setSize(F,U),this.viewport.saoPass&&this.viewport.saoPass.setSize(F,U)}let c=null;this.viewport.osmGroup&&this.viewport.osmGroup.children.forEach(I=>{I.name==="Landmark Buildings (Merged)"&&(c=I,c.material&&c.material.color.setHex(16777215))}),this.viewport.setDisplayMode("STANDARD"),this.viewport.render();let u=this.viewport.renderer.domElement.toDataURL("image/jpeg",.95).split(",")[1];this.viewport.setDisplayMode("DEPTH"),this.viewport.render();const f=this.viewport.renderer.domElement.toDataURL("image/jpeg",.9).split(",")[1];this.viewport.setDisplayMode("STANDARD"),c&&c.material&&c.material.color.setHex(16753920),this.viewport.camera.aspect=s/r,this.viewport.camera.updateProjectionMatrix(),this.viewport.renderer.setPixelRatio(o),this.viewport.renderer.setSize(s,r),this.viewport.composer.setSize(s,r),this.viewport.saoPass&&this.viewport.saoPass.setSize(s,r),this.viewport.onWindowResize(),n&&n(`data:image/jpeg;base64,${u}`,`data:image/jpeg;base64,${f}`),e("Fetching API Key...");const h=await fetch("/api/get-key");if(!h.ok)throw new Error("Failed to retrieve API key");const{key:d}=await h.json();if(!d)throw new Error("API Key is empty");e("Compiling scene parameters...");const m=this.viewport.controls?this.viewport.camera.position.distanceTo(this.viewport.controls.target).toFixed(1):0,_=this.viewport.controls?(Math.PI/2-this.viewport.controls.getPolarAngle()).toFixed(2):0,x=this.viewport.controls?this.viewport.controls.getAzimuthalAngle().toFixed(2):0,p=this.viewport.camera.fov||"Orthographic",g=`Camera Distance: ${m}m, Pitch: ${_} rad, Yaw: ${x} rad, FOV: ${p}`,M=`Transform this building design geometry into a breathtaking, ultra-realistic architectural rendering.
STRICTLY apply the lighting instructions specified by the user: "${t||"A modern architectural building design."}".

MATERIAL & TECTONIC SYSTEM RULES:
The input geometry is color-coded. You must apply the material and tectonic systems according to their display colors:
- All grey elements in the input image represent concrete masonry. Render them as concrete masonry surfaces (e.g., exposed concrete blockwork, concrete slabs, or solid masonry panels).
- All brown elements in the input image represent timber tectonics. Render them as timber tectonic systems (e.g., natural timber frames, structural timber members, or cladding).

Ensure hyper-crisp details, realistic ambient and ray-traced lighting matching the requested lighting instructions, and elegant surrounding landscaping (gardens, pathways). The final image must look like a premium architectural visualization render, completely clean, sharp, and awe-inspiring, while strictly preserving the silhouette, scale, and color-coded materials of the original geometry.`,C=`Camera Context: ${g}
${M}`;e("Dispatching payload to Gemini API...");const E=`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${d}`,S={systemInstruction:{parts:[{text:"You are an advanced architectural rendering agent utilizing strict structural control. Your primary directive is 100% geometry, silhouette, and scale preservation of the input building design. Treat the input image as an absolute structural mask. Do not alter the base geometry, structural columns, beams, vaults, or floor slabs. You must apply materials based on the display colors in the input image: grey elements represent concrete masonry, and brown elements represent timber tectonics. Compute realistic architectural lighting and render professional architectural visualization environments around the building."}]},contents:[{role:"user",parts:[{text:`CRITICAL INSTRUCTION: You MUST function like a strict depth-map renderer. Maintain the EXACT silhouette, contours, 3D wireframe structure, and camera perspective of the input image.

RENDER INSTRUCTIONS:
${C}`},{text:"Input 1 (Base Geometry - DO NOT ALTER SHAPE):"},{inlineData:{mimeType:"image/jpeg",data:u}}]}],generationConfig:{responseModalities:["IMAGE"],temperature:0}};console.log(`Payload string length: ${JSON.stringify(S).length}`),console.log(`b64Beauty length: ${u.length}`),console.log(`b64Depth length: ${f.length}`);const A=document.getElementById("imagen-payload-display");if(A){const I=JSON.parse(JSON.stringify(S));I.contents&&I.contents[0].parts[2]&&(I.contents[0].parts[2].inlineData.data=`<BASE64_IMAGE_DATA_TRUNCATED (${u.length} bytes)>`),A.value=JSON.stringify(I,null,2)}const D=await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S)});if(!D.ok){const I=await D.text();throw new Error(`API Error ${D.status}: ${I}`)}e("Receiving generated image...");const T=await D.json();if(T.candidates&&T.candidates[0].content.parts[0].inlineData){const I=T.candidates[0].content.parts[0].inlineData.data,F=T.candidates[0].content.parts[0].inlineData.mimeType||"image/jpeg";return e("Ready."),{beauty:`data:image/jpeg;base64,${u}`,depth:`data:image/jpeg;base64,${f}`,result:`data:${F};base64,${I}`}}else throw new Error("API returned OK, but no image data found.")}catch(s){throw console.error("ImagenAPI Error:",s),e(`Error: ${s.message}`),this.viewport.setDisplayMode("STANDARD"),s}}}const $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Es{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const D_=new er(-1,1,1,-1,0,1);class L_ extends te{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const N_=new L_;class Dl{constructor(t){this._mesh=new _t(N_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,D_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class U_ extends Es{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bi.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Dl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _h extends Es{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class F_ extends Es{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class O_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new gt);this._width=n.width,this._height=n.height,e=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new U_($r),this.copyPass.material.blending=tn,this.timer=new tp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_h!==void 0&&(o instanceof _h?n=!0:o instanceof F_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class B_ extends Es{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ee}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}class z_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),l=Math.floor(e+a),u=(3-Math.sqrt(3))/6,f=(c+l)*u,h=c-f,d=l-f,m=t-h,_=e-d;let x,p;m>_?(x=1,p=0):(x=0,p=1);const g=m-x+u,y=_-p+u,M=m-1+2*u,C=_-1+2*u,w=c&255,E=l&255,S=this.perm[w+this.perm[E]]%12,A=this.perm[w+x+this.perm[E+p]]%12,D=this.perm[w+1+this.perm[E+1]]%12;let T=.5-m*m-_*_;T<0?n=0:(T*=T,n=T*T*this._dot(this.grad3[S],m,_));let I=.5-g*g-y*y;I<0?s=0:(I*=I,s=I*I*this._dot(this.grad3[A],g,y));let F=.5-M*M-C*C;return F<0?r=0:(F*=F,r=F*F*this._dot(this.grad3[D],M,C)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const l=(t+e+n)*.3333333333333333,u=Math.floor(t+l),f=Math.floor(e+l),h=Math.floor(n+l),d=1/6,m=(u+f+h)*d,_=u-m,x=f-m,p=h-m,g=t-_,y=e-x,M=n-p;let C,w,E,S,A,D;g>=y?y>=M?(C=1,w=0,E=0,S=1,A=1,D=0):g>=M?(C=1,w=0,E=0,S=1,A=0,D=1):(C=0,w=0,E=1,S=1,A=0,D=1):y<M?(C=0,w=0,E=1,S=0,A=1,D=1):g<M?(C=0,w=1,E=0,S=0,A=1,D=1):(C=0,w=1,E=0,S=1,A=1,D=0);const T=g-C+d,I=y-w+d,F=M-E+d,U=g-S+2*d,L=y-A+2*d,B=M-D+2*d,O=g-1+3*d,H=y-1+3*d,G=M-1+3*d,X=u&255,tt=f&255,$=h&255,nt=this.perm[X+this.perm[tt+this.perm[$]]]%12,bt=this.perm[X+C+this.perm[tt+w+this.perm[$+E]]]%12,Mt=this.perm[X+S+this.perm[tt+A+this.perm[$+D]]]%12,j=this.perm[X+1+this.perm[tt+1+this.perm[$+1]]]%12;let ut=.6-g*g-y*y-M*M;ut<0?s=0:(ut*=ut,s=ut*ut*this._dot3(this.grad3[nt],g,y,M));let rt=.6-T*T-I*I-F*F;rt<0?r=0:(rt*=rt,r=rt*rt*this._dot3(this.grad3[bt],T,I,F));let ft=.6-U*U-L*L-B*B;ft<0?o=0:(ft*=ft,o=ft*ft*this._dot3(this.grad3[Mt],U,L,B));let wt=.6-O*O-H*H-G*G;return wt<0?a=0:(wt*=wt,a=wt*wt*this._dot3(this.grad3[j],O,H,G)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let u,f,h,d,m;const _=(t+e+n+s)*c,x=Math.floor(t+_),p=Math.floor(e+_),g=Math.floor(n+_),y=Math.floor(s+_),M=(x+p+g+y)*l,C=x-M,w=p-M,E=g-M,S=y-M,A=t-C,D=e-w,T=n-E,I=s-S,F=A>D?32:0,U=A>T?16:0,L=D>T?8:0,B=A>I?4:0,O=D>I?2:0,H=T>I?1:0,G=F+U+L+B+O+H,X=o[G][0]>=3?1:0,tt=o[G][1]>=3?1:0,$=o[G][2]>=3?1:0,nt=o[G][3]>=3?1:0,bt=o[G][0]>=2?1:0,Mt=o[G][1]>=2?1:0,j=o[G][2]>=2?1:0,ut=o[G][3]>=2?1:0,rt=o[G][0]>=1?1:0,ft=o[G][1]>=1?1:0,wt=o[G][2]>=1?1:0,dt=o[G][3]>=1?1:0,Rt=A-X+l,Pt=D-tt+l,K=T-$+l,st=I-nt+l,et=A-bt+2*l,lt=D-Mt+2*l,ct=T-j+2*l,yt=I-ut+2*l,z=A-rt+3*l,Gt=D-ft+3*l,Ut=T-wt+3*l,Wt=I-dt+3*l,xt=A-1+4*l,se=D-1+4*l,R=T-1+4*l,b=I-1+4*l,k=x&255,J=p&255,ht=g&255,pt=y&255,St=a[k+a[J+a[ht+a[pt]]]]%32,Q=a[k+X+a[J+tt+a[ht+$+a[pt+nt]]]]%32,it=a[k+bt+a[J+Mt+a[ht+j+a[pt+ut]]]]%32,Ct=a[k+rt+a[J+ft+a[ht+wt+a[pt+dt]]]]%32,It=a[k+1+a[J+1+a[ht+1+a[pt+1]]]]%32;let Et=.6-A*A-D*D-T*T-I*I;Et<0?u=0:(Et*=Et,u=Et*Et*this._dot4(r[St],A,D,T,I));let vt=.6-Rt*Rt-Pt*Pt-K*K-st*st;vt<0?f=0:(vt*=vt,f=vt*vt*this._dot4(r[Q],Rt,Pt,K,st));let Yt=.6-et*et-lt*lt-ct*ct-yt*yt;Yt<0?h=0:(Yt*=Yt,h=Yt*Yt*this._dot4(r[it],et,lt,ct,yt));let jt=.6-z*z-Gt*Gt-Ut*Ut-Wt*Wt;jt<0?d=0:(jt*=jt,d=jt*jt*this._dot4(r[Ct],z,Gt,Ut,Wt));let oe=.6-xt*xt-se*se-R*R-b*b;return oe<0?m=0:(oe*=oe,m=oe*oe*this._dot4(r[It],xt,se,R,b)),27*(u+f+h+d+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}}const Fr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new gt},cameraProjectionMatrix:{value:new xe},cameraInverseProjectionMatrix:{value:new xe},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},Or={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},Br={uniforms:{tDiffuse:{value:null},resolution:{value:new gt}},vertexShader:`varying vec2 vUv;

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

		}`};class yi extends Es{constructor(t,e,n=512,s=512,r=32){super(),this.width=n,this.height=s,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const o=new Gi;o.format=Mi,o.type=gs,this.normalRenderTarget=new vn(this.width,this.height,{minFilter:Ge,magFilter:Ge,type:bn,depthTexture:o}),this.ssaoRenderTarget=new vn(this.width,this.height,{type:bn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Ze({defines:Object.assign({},Fr.defines),uniforms:Bi.clone(Fr.uniforms),vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader,blending:tn}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new kf,this.normalMaterial.blending=tn,this.blurMaterial=new Ze({defines:Object.assign({},Br.defines),uniforms:Bi.clone(Br.uniforms),vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Ze({defines:Object.assign({},Or.defines),uniforms:Bi.clone(Or.uniforms),vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,blending:tn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ze({uniforms:Bi.clone($r.uniforms),vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Rh,blendDst:oa,blendEquation:ni,blendSrcAlpha:Ch,blendDstAlpha:oa,blendEquationAlpha:ni}),this._fsQuad=new Dl(null),this._originalClearColor=new ee}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(t,e,n){switch(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case yi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=tn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=tn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Depth:this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ph,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new N;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=kh.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}_generateRandomKernelRotations(){const n=new z_,s=4*4,r=new Float32Array(s);for(let o=0;o<s;o++){const a=Math.random()*2-1,c=Math.random()*2-1,l=0;r[o]=n.noise3d(a,c,l)}this.noiseTexture=new Xh(r,4,4,pl,Ln),this.noiseTexture.wrapS=Ys,this.noiseTexture.wrapT=Ys,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}}yi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const zr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class k_ extends Es{constructor(){super(),this.isOutputPass=!0,this.uniforms=Bi.clone(zr.uniforms),this.material=new iu({name:zr.name,uniforms:this.uniforms,vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader}),this._fsQuad=new Dl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===al?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ll&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const v={importedPolygons:[],activePolygonId:"default",activePreset:"tree",samplesPerEdge:25,precision:1e-5,showSkeleton:!0,simplifySkeleton:!0,mergeThreshold:2,pruneBranches:!0,showRibs:!0,ribSpacing:10,showBays:!0,editBaysMode:!0,draggedGraphVertexIdx:-1,draggedGraphVertexOrig:null,draggedGraphEdgeIdx:-1,dragStartMousePos:null,hoverCircle:!1,showGovernors:!1,isDrawing:!1,customVertices:[],draggedVertexIdx:-1,selectedVertexType:null,selectedVertexIdx:-1,selectedVertexOrig:null,hoveredMedialPoint:null,computeTime:0,camera:{zoom:1},mouseWorldPos:null,numFloors:3,floorHeight:4,show3DColumns:!0,show3DBeams:!0,showFloorSlabs:!0,showRoofSlab:!0,showVaultedRoofs:!0,showBalconies:!0,showBriseSoleil:!0,show3DCells:!1,columnRadius:.25,beamWidth:.3,beamDepth:.5,slabThickness:.2,balconyOffset:1.5,balconyThickness:.15,louverWidth:.05,louverDepth:.2,louverSpacing:1,showHoverLabels:!0,groundFloorHeightFactor:2,ssaoEnabled:!0,ssaoRadius:2,ssaoMinDistance:.1,ssaoMaxDistance:8,ssaoIntensity:2,ambientIntensity:.75,dirLight1Intensity:.4,dirLight2Intensity:.2,showGroundPlane:!0,cantileverScale:1,briseFinScale:1.5,roofHyparH:2,roofHyparSlatSpacing:2,roofPitchRH:1,showGridHelper:!0};Object.defineProperty(v,"polygon",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.polygon:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t?t.polygon=i:(v.importedPolygons=[{id:"default",polygon:i,hasScaffold:!0,planarGraph:null,structuralBays:[],unprunedStructuralBays:[],selectedBayIndices:[],bayEdits:[],graphVertexOverrides:new Map,skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}}],v.activePolygonId="default")}});Object.defineProperty(v,"planarGraph",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.planarGraph:null},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.planarGraph=i)}});Object.defineProperty(v,"structuralBays",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.structuralBays:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.structuralBays=i)}});Object.defineProperty(v,"unprunedStructuralBays",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.unprunedStructuralBays||[]:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.unprunedStructuralBays=i)}});Object.defineProperty(v,"skeletonData",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.skeletonData=i)}});Object.defineProperty(v,"selectedBayIndices",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.selectedBayIndices:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.selectedBayIndices=i)}});Object.defineProperty(v,"bayEdits",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.bayEdits:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.bayEdits=i)}});Object.defineProperty(v,"graphVertexOverrides",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.graphVertexOverrides:new Map},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.graphVertexOverrides=i)}});const In=document.getElementById("polygon-canvas"),nr=document.getElementById("canvas-wrapper");let un,be,si,Ne,ue,Ue,_n,Qt,gn,Ee,hs,qt,Ei,lo,Ws,Xs,Be,cn,ke;const el={state:v,rhinoGroup:null,setPolygonsFrom3dm:i=>{v.importedPolygons=i.map((n,s)=>{const r=n.map(o=>new at(o[0],o[1]));return{id:`rhino-poly-${s}-${Date.now()}`,polygon:r,hasScaffold:!1,planarGraph:null,structuralBays:[],unprunedStructuralBays:[],selectedBayIndices:[],bayEdits:[],graphVertexOverrides:new Map,skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}}}),v.activePreset="custom",document.querySelectorAll(".preset-card").forEach(n=>n.classList.remove("active"));const e=document.getElementById("card-custom");e&&(e.style.display="flex",e.classList.add("active")),v.importedPolygons.length>0?v.activePolygonId=v.importedPolygons[0].id:v.activePolygonId=null,ze(),go()},acceptedRibsCache:null},V_=new ei(new N(0,0,1),0),zi=new ou,oi=new gt;function G_(){const i=nr.getBoundingClientRect(),t=Math.max(800,i.width-40),e=Math.max(600,i.height-40);un=new Jx({canvas:In,antialias:!0,alpha:!0}),un.setPixelRatio(Math.min(window.devicePixelRatio,2)),un.setSize(t,e),un.setClearColor(16777215,1),un.shadowMap.enabled=!0,be=new Hd,be.background=new ee(16777215),si=new En(45,t/e,10,4e3),si.position.set(0,-600,600),si.up.set(0,0,1);const n=t/e;Ne=new er(-500*n,500*n,500,-500,10,4e3),Ne.position.set(0,0,1e3),Ne.up.set(0,1,0),ue=si,Ue=new t_(ue,un.domElement),Ue.enableDamping=!0,Ue.dampingFactor=.05,Ue.maxPolarAngle=Math.PI/2-.01,Ue.minDistance=50,Ue.maxDistance=3e3,lo=new Zf(16777215,v.ambientIntensity),be.add(lo),Ws=new Lc(16777215,v.dirLight1Intensity),Ws.position.set(1e3,800,1500),be.add(Ws),Xs=new Lc(16777215,v.dirLight2Intensity),Xs.position.set(-1e3,-800,1e3),be.add(Xs),Be=new np(2e3,200,14870768,15857145),Be.rotation.x=Math.PI/2,Be.position.z=-.01,Be.visible=v.showGridHelper,be.add(Be);const s=new Ms(2e3,2e3),r=new as({color:16777215,roughness:.9,metalness:0});cn=new _t(s,r),cn.position.z=-.02,cn.visible=v.showGroundPlane,be.add(cn),Qt=new Oi,be.add(Qt),gn=new Oi,be.add(gn),el.rhinoGroup=gn,Ee=new Oi,be.add(Ee),hs=new A_(el),window.rhinoManager=hs,Ei=new Fe,be.add(Ei),_n=new O_(un);const o=new B_(be,ue);_n.addPass(o),ke=new yi(be,ue,t,e),ke.ssaoMaterial.uniforms.intensity={value:v.ssaoIntensity},ke.ssaoMaterial.fragmentShader=ke.ssaoMaterial.fragmentShader.replace("uniform float maxDistance;",`uniform float maxDistance;
uniform float intensity;`).replace("gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );","gl_FragColor = vec4( vec3( pow( 1.0 - occlusion, intensity ) ), 1.0 );"),ke.kernelRadius=v.ssaoRadius,ke.minDistance=v.ssaoMinDistance,ke.maxDistance=v.ssaoMaxDistance,ke.enabled=v.ssaoEnabled,_n.addPass(ke);const a=new k_;_n.addPass(a),qt=new f_(ue,un.domElement),qt.setMode("translate"),qt.showZ=!1,be.add(qt.getHelper()),qt.addEventListener("dragging-changed",c=>{Ue.enabled=!c.value;const l=document.getElementById("status-dot"),u=document.getElementById("status-text");c.value?(l&&l.classList.add("loading"),u&&(u.innerText="Moving vertex via manipulator...")):(l&&l.classList.remove("loading"),u&&(u.innerText=`Computed ${v.skeletonData.regularPoints.length+v.skeletonData.junctionPoints.length} medial points successfully.`))}),qt.addEventListener("change",()=>{if(qt.dragging&&qt.object){const c=qt.object.position;v.selectedVertexType==="polygon"&&v.selectedVertexIdx!==void 0&&v.selectedVertexIdx!==-1?(v.polygon[v.selectedVertexIdx]=new at(c.x,c.y),ze()):v.selectedVertexType==="graph"&&v.selectedVertexOrig&&(v.graphVertexOverrides.set(`${v.selectedVertexOrig.x.toFixed(4)},${v.selectedVertexOrig.y.toFixed(4)}`,new at(c.x,c.y)),ze())}}),window.addEventListener("resize",vu),bu()}function nl(i){const t=new N(i.x,i.y,0);t.project(ue);const e=In.getBoundingClientRect();return new at((t.x*.5+.5)*e.width,(-(t.y*.5)+.5)*e.height)}function H_(){if(v.polygon.length===0)return new at(0,0);let i=1/0,t=-1/0,e=1/0,n=-1/0;for(const s of v.polygon)i=Math.min(i,s.x),t=Math.max(t,s.x),e=Math.min(e,s.y),n=Math.max(n,s.y);return new at((i+t)/2,(e+n)/2)}function co(){const i=document.getElementById("camera-info");if(i){const t=ue.position.distanceTo(Ue.target),e=ue.isOrthographicCamera?`${(1e3/ue.zoom).toFixed(0)}m`:`${(1e3/t).toFixed(2)}x`;i.innerText=`View Scale: ${e}`}}function vh(i){const t=document.getElementById("btn-view-perspective"),e=document.getElementById("btn-view-top");if(i==="perspective")ue=si,Ue.object=ue,Ue.enableRotate=!0,t.classList.add("active"),e.classList.remove("active");else{ue=Ne;const n=H_();Ue.target.set(n.x,n.y,0),Ne.position.set(n.x,n.y,1e3),Ne.up.set(0,1,0),Ue.object=ue,Ue.enableRotate=!1,t.classList.remove("active"),e.classList.add("active")}Ue.update(),co(),qt&&(qt.camera=ue),_u()}function _u(){_n&&_n.passes.forEach(i=>{i.camera&&(i.camera=ue)})}function go(){if(v.polygon.length===0){Ue.target.set(0,0,0),si.position.set(0,-600,600),Ne.position.set(0,0,1e3),Ne.zoom=1,Ne.updateProjectionMatrix(),Ue.update(),co(),_u();return}let i=1/0,t=-1/0,e=1/0,n=-1/0;for(const m of v.polygon)i=Math.min(i,m.x),t=Math.max(t,m.x),e=Math.min(e,m.y),n=Math.max(n,m.y);const s=(i+t)/2,r=(e+n)/2,o=t-i||1,a=n-e||1,c=Math.max(o,a);Ue.target.set(s,r,0),si.position.set(s,r-c*1.3,c*1.3);const l=nr.getBoundingClientRect(),u=Math.max(800,l.width-40),f=Math.max(600,l.height-40),h=u/f,d=c*1.45;Ne.left=-d*h/2,Ne.right=d*h/2,Ne.top=d/2,Ne.bottom=-d/2,Ne.zoom=1,Ne.position.set(s,r,1e3),Ne.updateProjectionMatrix(),Ue.update(),co()}function vu(){const i=nr.getBoundingClientRect(),t=Math.max(800,i.width-40),e=Math.max(600,i.height-40);si.aspect=t/e,si.updateProjectionMatrix();const n=t/e,s=Ne.top-Ne.bottom;Ne.left=-s*n/2,Ne.right=s*n/2,Ne.updateProjectionMatrix(),un.setSize(t,e),_n&&_n.setSize(t,e),co()}function yu(i){v.activePreset=i,v.importedPolygons=[],v.activePolygonId="default",v.graphVertexOverrides.clear(),v.bayEdits=[],v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null;const t=nr.getBoundingClientRect(),e=Math.max(800,t.width-40),n=Math.max(600,t.height-40);i!=="custom"&&(v.polygon=W_[i](e,n),v.isDrawing=!1,document.getElementById("btn-clear-custom").style.display="none",document.getElementById("drawing-indicator").style.display="none",document.getElementById("card-custom").style.display="none"),ze(),go()}const W_={cross:(i,t)=>[new at(0-100*.1,0+100*.3),new at(0+100*.1,0+100*.3),new at(0+100*.1,0+100*.1),new at(0+100*.3,0+100*.1),new at(0+100*.3,0-100*.1),new at(0+100*.1,0-100*.1),new at(0+100*.1,0-100*.3),new at(0-100*.1,0-100*.3),new at(0-100*.1,0-100*.1),new at(0-100*.3,0-100*.1),new at(0-100*.3,0+100*.1),new at(0-100*.1,0+100*.1)],yshape:(i,t)=>[new at(0+100*.1,0-100*.4),new at(0+100*.1,0-100*.1),new at(0+100*.4,0+100*.4),new at(0+100*.2,0+100*.4),new at(0,0+100*.1),new at(0-100*.2,0+100*.4),new at(0-100*.4,0+100*.4),new at(0-100*.1,0-100*.1),new at(0-100*.1,0-100*.4)],sqdonut:(i,t)=>[new at(0-100*.01,0+100*.3),new at(0-100*.3,0+100*.3),new at(0-100*.3,0-100*.3),new at(0+100*.3,0-100*.3),new at(0+100*.3,0+100*.3),new at(0+100*.01,0+100*.3),new at(0+100*.01,0+100*.1),new at(0+100*.1,0+100*.1),new at(0+100*.1,0-100*.1),new at(0-100*.1,0-100*.1),new at(0-100*.1,0+100*.1),new at(0-100*.01,0+100*.1)],donut:(i,t)=>{const r=[];for(let c=0;c<=32;c++){const l=.05+(Math.PI*2-.1)*(c/32);r.push(new at(0+Math.cos(l)*100*.4,0-Math.sin(l)*100*.4))}for(let c=0;c<=32;c++){const l=Math.PI*2-.05-(Math.PI*2-.1)*(c/32);r.push(new at(0+Math.cos(l)*100*.2,0-Math.sin(l)*100*.2))}return r},pentagon:(i,t)=>[new at(0-100*.05,0+100*.4),new at(0-100*.45,0+100*.15),new at(0-100*.25,0-100*.4),new at(0+100*.35,0-100*.35),new at(0+100*.4,0+100*.1)],tree:(i,t)=>[new at(0+100*.1,0-100*.4),new at(0+100*.1,0-100*.1),new at(0+100*.4,0-100*.1),new at(0+100*.4,0+100*.05),new at(0+100*.1,0+100*.05),new at(0+100*.1,0+100*.2),new at(0+100*.3,0+100*.4),new at(0+100*.15,0+100*.4),new at(0,0+100*.25),new at(0-100*.15,0+100*.4),new at(0-100*.3,0+100*.4),new at(0-100*.1,0+100*.2),new at(0-100*.1,0+100*.05),new at(0-100*.4,0+100*.05),new at(0-100*.4,0-100*.1),new at(0-100*.1,0-100*.1),new at(0-100*.1,0-100*.4)]};function vs(i){let t=0,e=0;return i.forEach(n=>{t+=n.x,e+=n.y}),new at(t/i.length,e/i.length)}function kr(i,t){for(let s=0;s<i.length;s++)if(ao(t,i[s]))return s;let e=1/0,n=-1;for(let s=0;s<i.length;s++){const o=vs(i[s]).dist(t);o<e&&(e=o,n=s)}return n}function yh(i,t,e=null){let n=i.map(r=>r.map(o=>new at(o.x,o.y))),s=e?e.map(r=>r.map(o=>new at(o.x,o.y))):null;for(const r of t)if(r.type==="delete")if(s){const o=kr(s,r.point);if(o!==-1){const a=s[o];s.splice(o,1);for(let c=n.length-1;c>=0;c--){const l=vs(n[c]);ao(l,a)&&n.splice(c,1)}}}else{const o=kr(n,r.point);o!==-1&&n.splice(o,1)}else if(r.type==="merge")if(s){const o=[];for(const a of r.points){const c=kr(s,a);c!==-1&&!o.includes(c)&&o.push(c)}if(o.length>=2){o.sort((u,f)=>f-u);const a=[];for(const u of o)a.push(s[u]),s.splice(u,1);const c=sa(a);if(c)s.push(c);else for(const u of a)s.push(u);const l=[];for(let u=0;u<n.length;u++){const f=vs(n[u]);a.some(d=>ao(f,d))&&l.push(u)}if(l.length>=2){l.sort((h,d)=>d-h);const u=[];for(const h of l)u.push(n[h]),n.splice(h,1);const f=sa(u);if(f)n.push(f);else for(const h of u)n.push(h)}}}else{const o=[];for(const a of r.points){const c=kr(n,a);c!==-1&&!o.includes(c)&&o.push(c)}if(o.length>=2){o.sort((l,u)=>u-l);const a=[];for(const l of o)a.push(n[l]),n.splice(l,1);const c=sa(a);if(c)n.push(c);else for(const l of a)n.push(l)}}return n}function X_(i,t,e,n=.001){for(const s of e)for(let r=0;r<s.length;r++){const o=s[r],a=s[(r+1)%s.length],c=o.dist(i)<n&&a.dist(t)<n,l=o.dist(t)<n&&a.dist(i)<n;if(c||l)return!0}return!1}function Y_(i,t){const e=[];for(const c of i.edges){const l=c[0],u=c[1];if(c[2]==="boundary"){e.push(c);continue}const h=i.vertices[l],d=i.vertices[u];X_(h,d,t,.02)&&e.push(c)}const n=new Set;for(const[c,l]of e)n.add(c),n.add(l);const s=[],r=[],o=new Map;for(let c=0;c<i.vertices.length;c++)n.has(c)&&(o.set(c,s.length),s.push(i.vertices[c]),r.push(i.originalVertices[c]));const a=e.map(c=>[o.get(c[0]),o.get(c[1]),c[2]]);i.vertices=s,i.originalVertices=r,i.edges=a}function ze(){const i=v.activePolygonId,t=performance.now();for(const r of v.importedPolygons){if(!r.hasScaffold){r.skeletonData={regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]},r.planarGraph=null,r.structuralBays=[];continue}v.activePolygonId=r.id,q_()}v.activePolygonId=i,v.computeTime=performance.now()-t;const e=document.getElementById("container-merge-slider");e&&(e.style.display=v.simplifySkeleton?"block":"none");const n=document.getElementById("container-ribs-slider");n&&(n.style.display=v.showRibs?"block":"none"),document.getElementById("stats-render-time").innerText=`Computation: ${v.computeTime.toFixed(1)}ms`;const s=v.importedPolygons.find(r=>r.id===v.activePolygonId);if(s&&s.hasScaffold){const r=s.skeletonData.regularPoints.length+s.skeletonData.junctionPoints.length,o=s.skeletonData.simplifiedSegments.length,a=s.skeletonData.simplifiedNodes.length,c=v.simplifySkeleton?`Simplified skeleton to ${a} merged nodes and ${o} straight branches.`:`Computed ${r} medial points successfully.`;document.getElementById("status-text").innerText=c}else document.getElementById("status-text").innerText="Select a curve in the viewport to apply the scaffold.";v.hoveredMedialPoint=null,ce()}function q_(){if(v.polygon.length<3){v.skeletonData={regularPoints:[],junctionPoints:[]};return}for(const s of v.polygon){s.origX===void 0&&(s.origX=s.x,s.origY=s.y),s.x=s.origX,s.y=s.origY;let r=null;for(const[o,a]of v.graphVertexOverrides.entries()){const c=o.split(","),l=parseFloat(c[0]),u=parseFloat(c[1]);if(Math.hypot(s.origX-l,s.origY-u)<.1){r=a;break}}r&&(s.x=r.x,s.y=r.y)}const i=new T_(v.polygon,{epsilon:v.activePreset!=="custom"?.5:v.precision,tangentEpsilon:v.precision*10}),t=i.computeStructuredSkeleton(v.samplesPerEdge),{segments:e,nodes:n}=i.simplifySkeleton(t.regularPoints,t.junctionPoints,v.mergeThreshold);for(const s of n){s.origX=s.x,s.origY=s.y;let r=null;for(const[o,a]of v.graphVertexOverrides.entries()){const c=o.split(","),l=parseFloat(c[0]),u=parseFloat(c[1]);if(Math.hypot(s.origX-l,s.origY-u)<.1){r=a;break}}r&&(s.x=r.x,s.y=r.y)}for(const s of e){const r=s.start,o=s.end,a=o.sub(r),c=a.length(),l=Math.max(1,Math.round(c/v.ribSpacing)),u=new at(r.origX,r.origY),h=new at(o.origX,o.origY).sub(u);s.divisionPoints=[];for(let d=1;d<l;d++){const m=d/l,_=r.add(a.scale(m)),x=u.add(h.scale(m));_.origX=x.x,_.origY=x.y;let p=null;for(const[g,y]of v.graphVertexOverrides.entries()){const M=g.split(","),C=parseFloat(M[0]),w=parseFloat(M[1]);if(Math.hypot(_.origX-C,_.origY-w)<.1){p=y;break}}p&&(_.x=p.x,_.y=p.y),s.divisionPoints.push(_)}}if(t.simplifiedSegments=e,t.simplifiedNodes=n,v.skeletonData=t,v.polygon.length>=3){const s=new xh(.001,v.graphVertexOverrides);v.planarGraph=s;const r=v.showSkeleton&&v.showRibs&&v.simplifySkeleton?Mu():[],o=[],a=[];for(const h of r)a.push(h.target);const c=v.pruneBranches?t.simplifiedSegments.filter(h=>!(h.start.isEndPoint||h.end.isEndPoint)):t.simplifiedSegments;for(const h of t.simplifiedNodes)h.isEndPoint&&a.push(h);for(let h=0;h<v.polygon.length;h++){const d=v.polygon[h],m=v.polygon[(h+1)%v.polygon.length];o.push(d);const _=[];for(const x of a){const p=Hn(x,d,m);if(x.dist(p)<.001){const g=m.sub(d).length(),y=d.dist(p),M=m.dist(p);y>.001&&M>.001&&y+M<g+.001&&(_.some(C=>C.point.dist(x)<.001)||_.push({point:x,dist:y}))}}_.sort((x,p)=>x.dist-p.dist);for(const x of _)o.push(x.point)}for(let h=0;h<o.length;h++)s.addEdge(o[h],o[(h+1)%o.length],"boundary");if(v.showSkeleton)if(v.simplifySkeleton)for(const h of c){const d=[h.start,...h.divisionPoints||[],h.end];for(let m=0;m<d.length-1;m++)s.addEdge(d[m],d[m+1],"skeleton")}else{const h=v.samplesPerEdge,d=t.regularPoints;for(let m=0;m<v.polygon.length;m++)for(let _=0;_<h-1;_++){const x=m*h+_,p=m*h+(_+1);d[x]&&d[p]&&s.addEdge(d[x],d[p],"skeleton")}}for(let h=0;h<r.length;h++){const d=r[h];s.addEdge(d.source,d.target,`rib_${h}`)}const l=s.extractFaces();v.structuralBays=yh(l,v.bayEdits);const u=new xh(.001,v.graphVertexOverrides);for(let h=0;h<o.length;h++)u.addEdge(o[h],o[(h+1)%o.length],"boundary");if(v.showSkeleton)if(v.simplifySkeleton)for(const h of t.simplifiedSegments){const d=[h.start,...h.divisionPoints||[],h.end];for(let m=0;m<d.length-1;m++)u.addEdge(d[m],d[m+1],"skeleton")}else{const h=v.samplesPerEdge,d=t.regularPoints;for(let m=0;m<v.polygon.length;m++)for(let _=0;_<h-1;_++){const x=m*h+_,p=m*h+(_+1);d[x]&&d[p]&&u.addEdge(d[x],d[p],"skeleton")}}for(let h=0;h<r.length;h++){const d=r[h];u.addEdge(d.source,d.target,`rib_${h}`)}const f=u.extractFaces();v.unprunedStructuralBays=yh(f,v.bayEdits,l),Y_(s,v.structuralBays)}else v.structuralBays=[],v.unprunedStructuralBays=[]}const j_=(i,t,e)=>{const s=t.x-i.x,r=t.y-i.y,o=new at(i.x+s*.001,i.y+r*.001),a=new at(t.x-s*.001,t.y-r*.001),c=(u,f,h)=>(h.y-u.y)*(f.x-u.x)>(f.y-u.y)*(h.x-u.x),l=(u,f,h,d)=>c(u,h,d)!==c(f,h,d)&&c(u,f,h)!==c(u,f,d);for(let u=0;u<e.length;u++){const f=e[u],h=e[(u+1)%e.length];if(l(o,a,f,h))return!0}return!1};function Mu(){if(!v.showRibs||v.polygon.length<3||!v.skeletonData||!v.skeletonData.simplifiedSegments)return[];const i=v.pruneBranches?v.skeletonData.simplifiedSegments.filter(o=>!(o.start.isEndPoint||o.end.isEndPoint)):v.skeletonData.simplifiedSegments,t=[];for(const o of i)if(o.divisionPoints)for(const a of o.divisionPoints){const c=new at(a.origX,a.origY),l=[];for(let m=0;m<v.polygon.length;m++){const _=v.polygon[m],x=v.polygon[(m+1)%v.polygon.length];let p=Hn(a,_,x);p.dist(_)<.05?p=_:p.dist(x)<.05&&(p=x);let g=Hn(c,_,x);g.dist(_)<.05?g=_:g.dist(x)<.05&&(g=x);const y=a.dist(p);l.push({point:p,pointOrig:g,dist:y,vector:p.sub(a).normalize()})}l.sort((m,_)=>m.dist-_.dist);const u=l[0],f=new at(u.point.x,u.point.y);f.origX=u.pointOrig.x,f.origY=u.pointOrig.y;let h=null,d=null;for(let m=1;m<l.length;m++){const _=l[m];if(u.vector.dot(_.vector)<.5){h=_,d=new at(h.point.x,h.point.y),d.origX=h.pointOrig.x,d.origY=h.pointOrig.y;break}}t.push({source:a,target:f,priority:1}),h&&t.push({source:a,target:d,priority:2})}const e=new Set;for(const o of i)o.start.isEndPoint||e.add(o.start),o.end.isEndPoint||e.add(o.end);for(const o of e){const a=new at(o.origX,o.origY),c=[];for(let _=0;_<v.polygon.length;_++){const x=v.polygon[_],p=v.polygon[(_+1)%v.polygon.length];let g=Hn(o,x,p);g.dist(x)<.05?g=x:g.dist(p)<.05&&(g=p);let y=Hn(a,x,p);y.dist(x)<.05?y=x:y.dist(p)<.05&&(y=p);const M=o.dist(g);c.push({point:g,pointOrig:y,dist:M,vector:g.sub(o).normalize()})}c.sort((_,x)=>_.dist-x.dist);const l=c[0],u=new at(l.point.x,l.point.y);u.origX=l.pointOrig.x,u.origY=l.pointOrig.y;let f=null,h=null,d=null,m=null;for(let _=1;_<c.length;_++){const x=c[_];if(l.vector.dot(x.vector)<.5){f=x,h=new at(f.point.x,f.point.y),h.origX=f.pointOrig.x,h.origY=f.pointOrig.y;break}}if(f)for(let _=1;_<c.length;_++){const x=c[_];if(x!==f&&l.vector.dot(x.vector)<.5&&f.vector.dot(x.vector)<.5){d=x,m=new at(d.point.x,d.point.y),m.origX=d.pointOrig.x,m.origY=d.pointOrig.y;break}}t.push({source:o,target:u,priority:1}),f&&t.push({source:o,target:h,priority:2}),d&&t.push({source:o,target:m,priority:3})}const n=t.map(o=>({...o,length:o.source.dist(o.target)})).sort((o,a)=>o.priority!==a.priority?o.priority-a.priority:o.length-a.length),s=(o,a)=>{if(o.source.dist(a.source)<.001||o.target.dist(a.target)<.001||o.source.dist(a.target)<.001||o.target.dist(a.source)<.001)return!1;const c=(l,u,f)=>(f.y-l.y)*(u.x-l.x)>(u.y-l.y)*(f.x-l.x);return c(o.source,a.source,a.target)!==c(o.target,a.source,a.target)&&c(o.source,o.target,a.source)!==c(o.source,o.target,a.target)},r=[];for(const o of n){if(j_(o.source,o.target,v.polygon))continue;let a=!1;for(const c of r)if(s(o,c)){a=!0;break}a||r.push(o)}return r}function ce(){if(!Qt)return;const i=v.activePolygonId,t=v.importedPolygons.find(n=>n.id===v.activePolygonId);if(t&&v.selectedVertexType==="graph"&&v.selectedVertexOrig&&t.planarGraph){const n=v.selectedVertexOrig;let s=-1,r=1/0;for(let o=0;o<t.planarGraph.vertices.length;o++){const a=t.planarGraph.originalVertices[o];if(a){const c=Math.hypot(n.x-a.x,n.y-a.y);c<.1&&c<r&&(r=c,s=o)}}s!==-1?v.selectedVertexIdx=s:(qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null)}for(;Qt.children.length>0;){const n=Qt.children[0];Qt.remove(n),n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(s=>s.dispose()):n.material.dispose())}if(v.isDrawing&&v.customVertices.length>0){const n=v.customVertices.map(r=>new N(r.x,r.y,.025));if(v.mouseWorldPos&&(n.push(new N(v.mouseWorldPos.x,v.mouseWorldPos.y,.025)),v.customVertices.length>=3&&n.push(new N(v.customVertices[0].x,v.customVertices[0].y,.025))),n.length>=2){const r=new te().setFromPoints(n),o=new hn({color:4937059,linewidth:1.5}),a=new we(r,o);a.raycast=function(){},Qt.add(a)}const s=new ln(.7,32);for(let r=0;r<v.customVertices.length;r++){const o=v.customVertices[r],a=r===0&&v.customVertices.length>=3;let c=!1;a&&v.mouseWorldPos&&(c=Math.sqrt((o.x-v.mouseWorldPos.x)**2+(o.y-v.mouseWorldPos.y)**2)<2);const l=new Le({color:c?1096065:a?3621201:4937059}),u=new _t(s,l);u.position.set(o.x,o.y,.03),u.raycast=function(){},Qt.add(u)}}v.importedPolygons.forEach(n=>{v.activePolygonId=n.id;const s=n.id===i;if(v.polygon.length>=3){const r=new Pn;r.moveTo(v.polygon[0].x,v.polygon[0].y);for(let d=1;d<v.polygon.length;d++)r.lineTo(v.polygon[d].x,v.polygon[d].y);r.closePath();const o=new Qs(r),a=new Le({color:n.hasScaffold?s?5195493:3621201:10265519,transparent:!0,opacity:n.hasScaffold?s?.08:.04:.015,side:qe,depthWrite:!1}),c=new _t(o,a);c.position.z=.005,c.userData={isPolygonFace:!0,polygonId:n.id},Qt.add(c);const l=v.polygon.map(d=>new N(d.x,d.y,.02));l.push(l[0]);const u=new te().setFromPoints(l),f=new hn({color:n.hasScaffold?s?5195493:3621201:10265519,linewidth:s?2.5:1.5}),h=new we(u,f);h.userData={isPolygonLine:!0,polygonId:n.id},Qt.add(h)}if(n.hasScaffold&&v.polygon.length>=3){if(v.showSkeleton){const r=v.skeletonData.regularPoints;if(v.simplifySkeleton){const a=v.pruneBranches?v.skeletonData.simplifiedSegments.filter(l=>!(l.start.isEndPoint||l.end.isEndPoint)):v.skeletonData.simplifiedSegments,c=new hn({color:3621201,linewidth:3.5});for(const l of a){const u=[new N(l.start.x,l.start.y,.035),new N(l.end.x,l.end.y,.035)],f=new te().setFromPoints(u),h=new we(f,c);h.raycast=function(){},Qt.add(h)}}else{const a=v.samplesPerEdge,c=new hn({color:7041664,transparent:!0,opacity:.65,linewidth:1.5});for(let f=0;f<v.polygon.length;f++){const h=[];for(let d=0;d<a;d++){const m=f*a+d;r[m]&&h.push(new N(r[m].x,r[m].y,.025))}if(h.length>=2){const d=new te().setFromPoints(h),m=new we(d,c);m.raycast=function(){},Qt.add(m)}}const l=new ln(.12,16),u=new Le({color:7041664});for(const f of r){const h=new _t(l,u);h.position.set(f.x,f.y,.03),h.raycast=function(){},Qt.add(h)}}let o=v.simplifySkeleton?v.skeletonData.simplifiedNodes:v.skeletonData.junctionPoints;v.pruneBranches&&(o=o.filter(a=>!a.isEndPoint));for(const a of o){const c=a.isEndPoint?.3:.45,l=new ln(c,32),u=new Le({color:a.isEndPoint?4937059:3621201}),f=new _t(l,u);f.position.set(a.x,a.y,.035),f.raycast=function(){},Qt.add(f);const h=[],d=32,m=c*1.65;for(let g=0;g<=d;g++){const y=g/d*Math.PI*2;h.push(new N(a.x+Math.cos(y)*m,a.y+Math.sin(y)*m,.035))}const _=new te().setFromPoints(h),x=new Tc({color:a.isEndPoint?4937059:3621201,transparent:!0,opacity:.4,dashSize:.15,gapSize:.1}),p=new we(_,x);p.computeLineDistances(),p.raycast=function(){},Qt.add(p)}if(v.showRibs){const a=Mu();s&&(el.acceptedRibsCache=a);const c=new ln(.15,16),l=new Le({color:16777215}),u=new hn({color:4937059,transparent:!0,opacity:.65}),f=new ln(.2,16),h=new Le({color:4937059});for(const d of a){const m=new _t(c,l);m.position.set(d.source.x,d.source.y,.038),m.raycast=function(){},Qt.add(m);const _=[new N(d.source.x,d.source.y,.038),new N(d.target.x,d.target.y,.038)],x=new te().setFromPoints(_),p=new we(x,u);p.raycast=function(){},Qt.add(p);const g=new _t(f,h);g.position.set(d.target.x,d.target.y,.038),g.raycast=function(){},Qt.add(g)}}}v.showBays&&v.structuralBays&&v.structuralBays.length>0&&v.structuralBays.forEach((r,o)=>{if(r.length>=3){const a=new Pn;a.moveTo(r[0].x,r[0].y);for(let p=1;p<r.length;p++)a.lineTo(r[p].x,r[p].y);a.closePath();const c=s&&v.selectedBayIndices.includes(o),l=c?new ee("hsl(25, 95%, 55%)"):new ee(`hsl(${o*137.5%360}, 45%, 60%)`),u=c?.45:.15,f=new Qs(a),h=new Le({color:l,transparent:!0,opacity:u,side:qe,depthWrite:!1}),d=new _t(f,h);d.position.z=.015,Qt.add(d);const m=r.map(p=>new N(p.x,p.y,.018));m.push(m[0]);const _=new te().setFromPoints(m);let x;if(c){const p=new hn({color:15094016,linewidth:2.5});x=new we(_,p)}else{const p=new Tc({color:4937059,transparent:!0,opacity:.35,dashSize:.2,gapSize:.15});x=new we(_,p),x.computeLineDistances()}Qt.add(x)}})}if(s&&!v.isDrawing&&v.polygon.length>0)if(v.editBaysMode){if(v.showBays&&v.planarGraph){const r=new hn({color:5195493,linewidth:3.5,transparent:!0,opacity:.8});v.planarGraph.edges.forEach((l,u)=>{const f=l[0],h=l[1],d=v.planarGraph.vertices[f],m=v.planarGraph.vertices[h];if(d&&m){const _=[new N(d.x,d.y,.032),new N(m.x,m.y,.032)],x=new te().setFromPoints(_),p=new we(x,r);p.userData={index:u,u:f,v:h,polygonId:n.id},Qt.add(p)}});const o=new ln(.7,32),a=new ln(.25,16),c=new Le({color:16777215});v.planarGraph.vertices.forEach((l,u)=>{const f=v.selectedVertexType==="graph"&&v.selectedVertexIdx===u,h=new Le({color:f?1096065:5195493,transparent:!0,opacity:.95}),d=new _t(o,h);d.position.set(l.x,l.y,.035),d.userData={isGraphVertex:!0,index:u,polygonId:n.id},Qt.add(d);const m=new _t(a,c);m.position.set(l.x,l.y,.039),Qt.add(m)})}}else{const r=new ln(1,32),o=new ln(.3,16),a=new Le({color:16777215});for(let c=0;c<v.polygon.length;c++){const l=v.polygon[c],u=v.selectedVertexType==="polygon"&&v.selectedVertexIdx===c,f=new Le({color:u?1096065:3621201}),h=new _t(r,f);h.position.set(l.x,l.y,.03),h.userData={isHandle:!0,index:c,polygonId:n.id},Qt.add(h);const d=new _t(o,a);d.position.set(l.x,l.y,.038),Qt.add(d)}}}),v.activePolygonId=i;const e=v.importedPolygons.find(n=>n.id===v.activePolygonId);if(e&&(v.activePolygonId=e.id,v.hoverCircle&&v.hoveredMedialPoint&&v.polygon.length>=3)){const n=v.hoveredMedialPoint,s=n.radius,r=new Al(s-.2,s+.2,64),o=new Le({color:3621201,transparent:!0,opacity:.82,side:qe}),a=new _t(r,o);a.position.set(n.x,n.y,.045),Qt.add(a);const c=new ln(s,64),l=new Le({color:3621201,transparent:!0,opacity:.05,side:qe,depthWrite:!1}),u=new _t(c,l);u.position.set(n.x,n.y,.04),Qt.add(u);const f=new ln(.6,16),h=new Le({color:16777215}),d=new _t(f,h);if(d.position.set(n.x,n.y,.048),Qt.add(d),v.showGovernors){const m=new hn({color:4937059,linewidth:1.5}),_=new ln(.5,16),x=new Le({color:4937059});for(let p=0;p<v.polygon.length;p++){const g=v.polygon[p],y=v.polygon[(p+1)%v.polygon.length],M=Hn(n,g,y);if(Math.abs(n.dist(M)-s)<.2){const C=[new N(n.x,n.y,.046),new N(M.x,M.y,.046)],w=new te().setFromPoints(C),E=new we(w,m);Qt.add(E);const S=new _t(_,x);S.position.set(M.x,M.y,.046),Qt.add(S)}}}}if(v.activePolygonId=i,qt&&qt.object)if(v.selectedVertexType==="polygon"&&v.selectedVertexIdx!==-1&&v.polygon[v.selectedVertexIdx]){const n=v.polygon[v.selectedVertexIdx];Ei.position.set(n.x,n.y,.03)}else if(v.selectedVertexType==="graph"&&v.selectedVertexIdx!==-1&&v.planarGraph&&v.planarGraph.vertices[v.selectedVertexIdx]){const n=v.planarGraph.vertices[v.selectedVertexIdx];Ei.position.set(n.x,n.y,.035)}else qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null;nv()}function Z_(i,t,e,n,s){const r=i.add(t).scale(.5),o=new at(r.x+e.x*.1,r.y+e.y*.1),a=e;let c=1/0,l="open_space";return s.forEach(u=>{const f=u.id===n.id;for(let h=0;h<u.polygon.length;h++){const d=u.polygon[h],m=u.polygon[(h+1)%u.polygon.length];if(f){const x=d.dist(i),p=m.dist(t),g=d.dist(t),y=m.dist(i);if(x<1e-4&&p<1e-4||g<1e-4&&y<1e-4)continue}const _=Il(o,a,d,m);_&&_.s<c&&(c=_.s,l=f?"courtyard":"other_building")}}),c<.5?"touching":c<25?l:"open_space"}function Su(i,t){const e=t.length;if(e<3)return!1;const n=t[(i-1+e)%e],s=t[i],r=t[(i+1)%e],o=s.x-n.x,a=s.y-n.y,c=Math.hypot(o,a),l=r.x-s.x,u=r.y-s.y,f=Math.hypot(l,u);return c<1e-6||f<1e-6?!1:(o*l+a*u)/(c*f)<.98}function $_(i,t){const e=t.length;for(const n of i)for(let s=0;s<e;s++){const r=t[s];if(Math.hypot(n.x-r.x,n.y-r.y)<.1&&Su(s,t))return!0}return!1}function ra(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=n*n+s*s;if(r<1e-9)return Math.hypot(i.x-t.x,i.y-t.y);let o=((i.x-t.x)*n+(i.y-t.y)*s)/r;o=Math.max(0,Math.min(1,o));const a=t.x+o*n,c=t.y+o*s;return Math.hypot(i.x-a,i.y-c)}function Vr(i,t,e,n){const s=e*n;if(i===0)return{bottom:0,top:s,height:s};{const r=s+(i-1)*e;return{bottom:r,top:r+e,height:e}}}function K_(i,t,e,n,s,r){const o=s.map(c=>new at(c.x,c.y)),a=[];for(let c=0;c<s.length;c++)Su(c,s)&&a.push(c);if(a.length>=2){const c=a.length;let l=1;t>1&&(l=1-.9*(i/(t-1)));for(let u=0;u<c;u++){const f=a[u],h=a[(u+1)%c],d=[];let m=f;for(;m!==h;)d.push(m),m=(m+1)%s.length;d.push(h);const _=[0];let x=0;for(let p=0;p<d.length-1;p++){const g=s[d[p]],y=s[d[p+1]];x+=Math.hypot(y.x-g.x,y.y-g.y),_.push(x)}if(x>1e-5)for(let p=1;p<d.length-1;p++){const g=d[p],y=_[p]/x,M=4*l*y*(1-y),C=s.length,w=r[(g-1+C)%C],E=r[g],S=new at(w.x+E.x,w.y+E.y).normalize();o[g]=new at(s[g].x-M*S.x,s[g].y-M*S.y)}}}return o}function Mh(i,t,e){return i.map(n=>{let s=-1,r=.1;for(let o=0;o<t.length;o++){const a=Math.hypot(n.x-t[o].x,n.y-t[o].y);a<r&&(r=a,s=o)}if(s!==-1){const o=e[s].x-t[s].x,a=e[s].y-t[s].y;return new at(n.x+o,n.y+a)}return new at(n.x,n.y)})}function Gr(i,t,e){return i.map(n=>{let s=-1,r=.1;for(let o=0;o<t.length;o++){const a=Math.hypot(n.x-t[o].x,n.y-t[o].y);a<r&&(r=a,s=o)}if(s!==-1){const o=e[s].x-t[s].x,a=e[s].y-t[s].y;return new at(n.x+o,n.y+a)}return new at(n.x,n.y)})}function Sh(i){let t=Math.atan2(i.y,i.x);if(t<0&&(t+=2*Math.PI),t>=Math.PI/2&&t<Math.PI){const e=(t-Math.PI/2)/(Math.PI/2);return 2*(1-e)+5*e}else if(t>=Math.PI&&t<3*Math.PI/2){const e=(t-Math.PI)/(Math.PI/2);return 5*(1-e)+3.5*e}else{if(t>=3*Math.PI/2&&t<2*Math.PI)return 3.5;{let e=0;return t<Math.PI/2?e=t/(Math.PI/2):e=(t-2*Math.PI)/(Math.PI/2),3.5*(1-e)+2*e}}}function Eh(i,t,e,n){const s=i.x*t.y-i.y*t.x;if(Math.abs(s)<1e-4)return{x:i.x*e,y:i.y*e};let r=(e*t.y-n*i.y)/s,o=(n*i.x-e*t.x)/s;const a=Math.hypot(r,o),c=4*Math.max(e,n);return a>c&&(r=r/a*c,o=o/a*c),{x:r,y:o}}function bh(i){const t=l=>l.x!==void 0?l.x:l[0],e=l=>l.y!==void 0?l.y:l[1],n=[],s=l=>{const u=t(l),f=e(l);for(let h=0;h<n.length;h++){const d=t(n[h]),m=e(n[h]);if(Math.hypot(u-d,f-m)<.05)return h}return n.push(l),n.length-1},r=i.map(l=>l.map(u=>s(u))),o=Array.from({length:n.length},()=>[]);r.forEach(l=>{const u=l.length;for(let f=0;f<u;f++){const h=l[f],d=l[(f+1)%u];o[h].includes(d)||o[h].push(d)}});for(let l=0;l<n.length;l++)o[l].forEach(u=>{o[u].includes(l)||o[u].push(l)});const a=Array.from({length:n.length},(l,u)=>u);a.sort((l,u)=>{const f=t(n[l]),h=e(n[l]),d=t(n[u]),m=e(n[u]);return Math.abs(f-d)>1e-4?f-d:h-m}),o.forEach(l=>{l.sort((u,f)=>{const h=t(n[u]),d=e(n[u]),m=t(n[f]),_=e(n[f]);return Math.abs(h-m)>1e-4?h-m:d-_})});const c=new Array(n.length).fill(-1);for(const l of a)if(c[l]===-1){c[l]=0;const u=[l];for(;u.length>0;){const f=u.shift(),d=1-c[f];o[f].forEach(m=>{c[m]===-1&&(c[m]=d,u.push(m))})}}return{uniqueVerts:n,colors:c,getX:t,getY:e}}function Ns(i,t){if(!t)return 0;const{uniqueVerts:e,colors:n,getX:s,getY:r}=t,o=s(i),a=r(i);for(let c=0;c<e.length;c++){const l=s(e[c]),u=r(e[c]);if(Math.hypot(o-l,a-u)<.05)return n[c]}return 0}function J_(i,t){const{distance:e}=xu(i,t);return e>.05}function wh(i,t,e,n,s){const r=new te,o=[],a=[];let c=0;const l=(f,h,d,m,_,x)=>{(h.x-f.x)*(d.y-f.y)-(d.x-f.x)*(h.y-f.y)<0?a.push(m,x,_):a.push(m,_,x)},u=f=>J_(f,v.polygon)?s?e:e-n:s?e+n:e;return i.forEach(f=>{const h=f.length;if(h<3)return;let d=0,m=0;f.forEach(M=>{d+=M.x,m+=M.y});const _=d/h,x=m/h,p=[];f.forEach(M=>{const C=u(M);p.push(C),o.push(M.x,M.y,C)});const g=p.reduce((M,C)=>M+C,0)/h;o.push(_,x,g);const y={x:_,y:x};for(let M=0;M<h;M++){const C=(M+1)%h;l(f[M],f[C],y,c+M,c+C,c+h)}c+=h+1}),t.forEach(f=>{const h=f.length;if(h<3)return;let d=0,m=0;f.forEach(M=>{d+=M.x,m+=M.y});const _=d/h,x=m/h,p=[];f.forEach((M,C)=>{const E=s||(C===2||C===3)?e+n:e;p.push(E),o.push(M.x,M.y,E)});const g=p.reduce((M,C)=>M+C,0)/h;o.push(_,x,g);const y={x:_,y:x};for(let M=0;M<h;M++){const C=(M+1)%h;l(f[M],f[C],y,c+M,c+C,c+h)}c+=h+1}),r.setAttribute("position",new Zt(o,3)),r.setIndex(a),r.computeVertexNormals(),r}function Q_(i,t,e,n,s,r,o){const a=new te,c=i.length;if(c<3)return a;const l=[],u=[],f=t-.05;if(c===4){const h=i[0],d=i[1],m=i[2],_=i[3],x=Ns(o&&o[0]?o[0]:h,r),p=Ns(o&&o[1]?o[1]:d,r),g=Ns(o&&o[2]?o[2]:m,r),y=Ns(o&&o[3]?o[3]:_,r),M=x===0?e:f,C=p===0?e:f,w=g===0?e:f,E=y===0?e:f,S=(Math.hypot(h.x-d.x,h.y-d.y)+Math.hypot(_.x-m.x,_.y-m.y))/2,A=Math.max(2,Math.round(S/s)+1),D=.05,T=.1;for(let I=0;I<A;I++){const F=I/(A-1||1),U=(1-F)*h.x+F*d.x,L=(1-F)*h.y+F*d.y,B=(1-F)*M+F*C,O=F*m.x+(1-F)*_.x,H=F*m.y+(1-F)*_.y,G=(1-F)*E+F*w,X=O-U,tt=H-L,$=G-B,nt=Math.hypot(X,tt,$);if(nt<1e-4)continue;const bt=X/nt,Mt=tt/nt,j=$/nt;let ut,rt,ft;Math.abs(bt)<.9&&Math.abs(Mt)<.9?(ut=-Mt,rt=bt,ft=0):(ut=j,rt=0,ft=-bt);const wt=Math.hypot(ut,rt,ft),dt=ut/wt,Rt=rt/wt,Pt=ft/wt,K=Mt*Pt-j*Rt,st=j*dt-bt*Pt,et=bt*Rt-Mt*dt,lt=D/2,ct=T/2,yt=l.length/3;l.push(U-dt*lt-K*ct,L-Rt*lt-st*ct,B-Pt*lt-et*ct),l.push(U+dt*lt-K*ct,L+Rt*lt-st*ct,B+Pt*lt+et*ct),l.push(U+dt*lt+K*ct,L+Rt*lt+st*ct,B+Pt*lt+et*ct),l.push(U-dt*lt+K*ct,L-Rt*lt-st*ct,B-Pt*lt-et*ct),l.push(O-dt*lt-K*ct,H-Rt*lt-st*ct,G-Pt*lt-et*ct),l.push(O+dt*lt-K*ct,H-Rt*lt-st*ct,G+Pt*lt+et*ct),l.push(O+dt*lt+K*ct,H+Rt*lt+st*ct,G+Pt*lt+et*ct),l.push(O-dt*lt+K*ct,H-Rt*lt-st*ct,G-Pt*lt-et*ct),u.push(yt+0,yt+2,yt+1),u.push(yt+0,yt+3,yt+2),u.push(yt+4,yt+5,yt+6),u.push(yt+4,yt+6,yt+7),u.push(yt+0,yt+1,yt+5),u.push(yt+0,yt+5,yt+4),u.push(yt+1,yt+2,yt+6),u.push(yt+1,yt+6,yt+5),u.push(yt+2,yt+3,yt+7),u.push(yt+2,yt+7,yt+6),u.push(yt+3,yt+0,yt+4),u.push(yt+3,yt+4,yt+7)}}else{i.forEach((m,_)=>{const x=o&&o[_]?o[_]:m,g=Ns(x,r)===0?e:f;l.push(m.x,m.y,g)}),i.forEach(m=>{l.push(m.x,m.y,f)});const h=i.map(m=>new gt(m.x,m.y));Gn.triangulateShape(h,[]).forEach(m=>{u.push(m[2],m[1],m[0]),u.push(m[0]+c,m[1]+c,m[2]+c)});for(let m=0;m<c;m++){const _=(m+1)%c,x=m,p=_,g=m+c,y=_+c;u.push(x,p,y),u.push(x,y,g)}}return a.setAttribute("position",new Zt(l,3)),a.setIndex(u),a.computeVertexNormals(),a}function tv(i,t,e,n,s=8){const r=new te,o=[],a=[];for(let l=0;l<=s;l++){const u=l/s,f=-i/2+i*u,h=-e+n*4*u*(1-u);o.push(f,-t/2,0),o.push(f,t/2,0),o.push(f,t/2,h),o.push(f,-t/2,h)}for(let l=0;l<s;l++){const u=l*4,f=(l+1)*4;a.push(u+0,f+0,f+1),a.push(u+0,f+1,u+1),a.push(u+3,f+3,f+2),a.push(u+3,f+2,u+2),a.push(u+3,f+3,f+0),a.push(u+3,f+0,u+0),a.push(u+1,u+2,f+2),a.push(u+1,f+2,f+1)}a.push(0,3,2),a.push(0,2,1);const c=s*4;return a.push(c+1,c+2,c+3),a.push(c+1,c+3,c+0),r.setAttribute("position",new Zt(o,3)),r.setIndex(a),r.computeVertexNormals(),r}function ev(i,t,e,n,s,r,o){const a=new te,c=[],l=[],u=new Pn;u.moveTo(i[0].x,i[0].y);for(let E=1;E<i.length;E++)u.lineTo(i[E].x,i[E].y);u.closePath();const f=new Qs(u),h=f.attributes.position.array,d=f.index.array,m=h.length/3;for(let E=0;E<m;E++)c.push(h[3*E],h[3*E+1],t);for(let E=0;E<d.length;E++)l.push(d[E]);const _=8,x=vs(i),p=[],g=[];let y=0;const M=i.map(E=>r.some(A=>Math.hypot(E.x-A.x,E.y-A.y)<.1)?1:0);for(let E=0;E<i.length;E++){const S=i[E],A=i[(E+1)%i.length],D=M[E],T=M[(E+1)%i.length];for(let F=0;F<=_;F++)for(let U=0;U<=F;U++){let L=S.x,B=S.y;const O=F>0?U/F:0;F>0&&(L=S.x+(A.x-S.x)*O,B=S.y+(A.y-S.y)*O);const H=F/_,G=x.x+(L-x.x)*H,X=x.y+(B-x.y)*H,tt=D*(1-O)+T*O,$=s?1:0,nt=n*(1-.8*$),bt=4*O*(1-O),Mt=n*tt*$+n*(1-tt)*bt,j=nt*(1-H*H)+Mt*H*H,ut=t-e+j;p.push(G,X,ut)}const I=(F,U)=>{const L=F*(F+1)/2;return y+L+U};for(let F=0;F<_;F++)for(let U=0;U<=F;U++){const L=I(F,U),B=I(F+1,U),O=I(F+1,U+1);if(g.push(L,B,O),U<F){const H=I(F,U),G=I(F+1,U+1),X=I(F,U+1);g.push(H,G,X)}}y+=(_+1)*(_+2)/2}const C=m;for(let E=0;E<p.length;E+=3)c.push(p[E],p[E+1],p[E+2]);for(let E=0;E<g.length;E+=3)l.push(C+g[E+2],C+g[E+1],C+g[E]);let w=0;for(let E=0;E<i.length;E++){const S=i[E],A=i[(E+1)%i.length],D=c.length/3;for(let I=0;I<=_;I++){const F=S.x+(A.x-S.x)*(I/_),U=S.y+(A.y-S.y)*(I/_);c.push(F,U,t)}const T=(I,F)=>{const U=I*(I+1)/2;return w+U+F};for(let I=0;I<_;I++){const F=D+I,U=D+I+1,L=C+T(_,I+1),B=C+T(_,I);l.push(F,B,L),l.push(F,L,U)}w+=(_+1)*(_+2)/2}return a.setAttribute("position",new Zt(c,3)),a.setIndex(l),a.computeVertexNormals(),f.dispose(),a}function nv(){if(!Ee)return;for(;Ee.children.length>0;){const l=Ee.children[0];Ee.remove(l),l.geometry&&l.geometry.dispose(),l.material&&(Array.isArray(l.material)?l.material.forEach(u=>u.dispose()):l.material.dispose())}const i=v.numFloors,t=v.floorHeight;bh(v.structuralBays);const e=new as({color:7893356,roughness:.8,metalness:.1}),n=new as({color:7893356,roughness:.8,metalness:.1,side:qe}),s=new as({color:8736014,roughness:.9,metalness:0}),r=new as({color:8736014,roughness:.9,metalness:0,side:qe});new Le({color:13421772,wireframe:!0,transparent:!0,opacity:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});const o=v.activePolygonId,a=Array.from({length:i},()=>[]),c=Array.from({length:i},()=>[]);v.importedPolygons.forEach(l=>{if(!l.hasScaffold||l.polygon.length<3)return;v.activePolygonId=l.id;let u=!0,f=0;for(let E=0;E<v.polygon.length;E++){const S=v.polygon[E],A=v.polygon[(E+1)%v.polygon.length];f+=S.x*A.y-A.x*S.y}u=f>0;const h=[];for(let E=0;E<v.polygon.length;E++){const S=v.polygon[E],A=v.polygon[(E+1)%v.polygon.length],D=A.x-S.x,T=A.y-S.y,I=Math.hypot(D,T);let F=0,U=0;I>1e-6&&(u?(F=T/I,U=-D/I):(F=-T/I,U=D/I)),h.push(new at(F,U))}const d=[];for(let E=0;E<v.polygon.length;E++){const S=v.polygon[E],A=v.polygon[(E+1)%v.polygon.length],D=h[E],T=Z_(S,A,D,l,v.importedPolygons);d.push(T)}const m=[];v.structuralBays&&v.structuralBays.forEach(E=>{m.push($_(E,v.polygon))});const _=v.planarGraph?v.planarGraph.vertices:v.polygon,x=[];if(v.planarGraph)v.planarGraph.edges.forEach(E=>{const S=v.planarGraph.vertices[E[0]],A=v.planarGraph.vertices[E[1]];x.push([S,A])});else for(let E=0;E<v.polygon.length;E++)x.push([v.polygon[E],v.polygon[(E+1)%v.polygon.length]]);l.planarGraph3D={vertices:[],edges:[]},l.structuralBays3D=[];const p=[];for(let E=0;E<i;E++)p.push(K_(E,i,t,v.groundFloorHeightFactor,v.polygon,h));const g=_.length;for(let E=0;E<=i;E++){const S=Vr(Math.min(E,i-1),i,t,v.groundFloorHeightFactor),A=E===i?S.top:S.bottom,D=Math.min(E,i-1);Mh(_,v.polygon,p[D]).forEach((I,F)=>{l.planarGraph3D.vertices.push({id:`vertex_P${l.id}_F${E}_V${F}`,x:I.x,y:I.y,z:A})})}for(let E=0;E<i;E++)x.forEach(([S,A],D)=>{const T=E*g+_.indexOf(S),I=E*g+_.indexOf(A);l.planarGraph3D.edges.push({u:T,v:I,type:"beam",floorIndex:E})});for(let E=0;E<i;E++)_.forEach((S,A)=>{const D=E*g+A,T=(E+1)*g+A;l.planarGraph3D.edges.push({u:D,v:T,type:"column",floorIndex:E})});v.structuralBays&&v.structuralBays.forEach((E,S)=>{if(E.length<3)return;let A="interior";const D=m[S],T=new Set;for(let F=0;F<E.length;F++){const U=E[F],L=E[(F+1)%E.length],B={x:(U.x+L.x)/2,y:(U.y+L.y)/2};for(let O=0;O<v.polygon.length;O++){const H=v.polygon[O],G=v.polygon[(O+1)%v.polygon.length];if(ra(B,H,G)<.1){const X=h[O];X.y>.5&&T.add("North"),X.y<-.5&&T.add("South"),X.x>.5&&T.add("East"),X.x<-.5&&T.add("West")}}}const I=Array.from(T);if(D)A="corner";else{let F=!1,U=!1,L=!1;for(let B=0;B<E.length;B++){const O=E[B],H=E[(B+1)%E.length],G={x:(O.x+H.x)/2,y:(O.y+H.y)/2};for(let X=0;X<v.polygon.length;X++){const tt=v.polygon[X],$=v.polygon[(X+1)%v.polygon.length];if(ra(G,tt,$)<.1){const nt=d[X];nt==="courtyard"?F=!0:nt==="other_building"?U=!0:nt==="open_space"&&(L=!0)}}}F?A="courtyard":U?A="neighbor":L&&(A="open_space")}for(let F=0;F<i;F++){const U=Vr(F,i,t,v.groundFloorHeightFactor),L=p[F],B=Gr(E,v.polygon,L);let O=55;F===0?O=35:F===i-1&&(O=75);let H=30;A==="corner"?H=90:A==="courtyard"&&(H=60);let G=60;const X=I.includes("North"),tt=I.includes("South"),$=I.includes("East"),nt=I.includes("West");X&&$?G=45:tt&&$?G=135:tt&&nt?G=225:X&&nt?G=315:X?G=0:$?G=90:tt?G=180:nt&&(G=270);const bt=`hsl(${G}, ${H}%, ${O}%)`;l.structuralBays3D.push({id:`${l.id}_bay_${S}_floor_${F}`,cellIdx:S,floorIndex:F,polygonId:l.id,vertices:B.map(Mt=>({x:Mt.x,y:Mt.y,z:U.bottom})),topVertices:B.map(Mt=>({x:Mt.x,y:Mt.y,z:U.top})),phenotype:A,color:bt,facingDirections:I})}});const y=new Set,M=new Map,C=new Set,w=new Map;_.forEach((E,S)=>{let A=!1;const D=[];let T=!1;const I=[];for(let F=0;F<v.polygon.length;F++){const U=v.polygon[F],L=v.polygon[(F+1)%v.polygon.length],B=h[F],O=d[F];ra(E,U,L)<.1&&(O==="courtyard"?(A=!0,D.push(B)):(O==="open_space"||O==="other_building"||O==="touching")&&(T=!0,I.push(B)))}if(A){y.add(S);let F=0,U=0;D.forEach(B=>{F+=B.x,U+=B.y});const L=new at(F,U).normalize();M.set(S,L)}if(T&&!A){let F=0,U=0;I.forEach(B=>{F+=B.x,U+=B.y});const L=new at(F,U).normalize();(L.x<-.5||L.y<-.5)&&(C.add(S),w.set(S,L))}});for(let E=0;E<i;E++){const S=Vr(E,i,t,v.groundFloorHeightFactor),A=E===0,D=E===i-1,T=p[E],I=Mh(_,v.polygon,T),F=x.map(([U,L])=>{const B=I[_.indexOf(U)],O=I[_.indexOf(L)];return[B,O]});if(v.showFloorSlabs&&E>0&&v.structuralBays.forEach((U,L)=>{if(m[L]&&E<1)return;const O=Gr(U,v.polygon,T),H=E===0,G=U.some(Mt=>v.polygon.some(j=>Math.hypot(Mt.x-j.x,Mt.y-j.y)<.1)),X=H?v.slabThickness*1.5:v.slabThickness,tt=E===1?3*(X+v.beamDepth):X+v.beamDepth,$=E===1?3*v.beamDepth:v.beamDepth,nt=ev(O,S.bottom,tt,$,G,v.polygon),bt=new _t(nt,E===1?n:r);bt.position.z=0,bt.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:E===1?"concrete_masonry":"tectonic_timber"},Ee.add(bt)}),v.showRoofSlab&&D&&T&&T.length>=3){const U=[];for(let nt=0;nt<T.length;nt++){const bt=T[nt],Mt=(nt-1+T.length)%T.length,j=nt,ut=h[Mt],rt=h[j],ft=Sh(ut),wt=Sh(rt),dt=(ft+wt)/2,Rt=new at(ut.x+rt.x,ut.y+rt.y).normalize();U.push(new at(bt.x+Rt.x*dt*v.cantileverScale,bt.y+Rt.y*dt*v.cantileverScale))}const L=new Pn;L.moveTo(U[0].x,U[0].y);for(let nt=1;nt<U.length;nt++)L.lineTo(U[nt].x,U[nt].y);L.closePath();const B=[];for(let nt=0;nt<T.length;nt++){const bt=(nt+1)%T.length;B.push([T[nt],T[bt],U[bt],U[nt]])}const O=(v.unprunedStructuralBays||[]).map(nt=>Gr(nt,v.polygon,T)),H=B,G=wh(O,H,S.top,v.roofPitchRH,!1),X=new _t(G,r);X.position.z=0,X.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"tectonic_timber"},Ee.add(X);const tt=wh(O,H,S.top,v.roofPitchRH,!0),$=new _t(tt,n);$.position.z=0,$.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"concrete_masonry"},Ee.add($)}if(v.showVaultedRoofs&&D&&T&&T.length>=3){const U=(v.unprunedStructuralBays||[]).map(B=>Gr(B,v.polygon,T)),L=bh(v.unprunedStructuralBays||[]);(v.unprunedStructuralBays||[]).forEach((B,O)=>{const H=U[O],G=B,X=S.top,tt=S.top-v.roofHyparH,$=Q_(H,X,tt,v.roofHyparH,v.roofHyparSlatSpacing,L,G),nt=new _t($,r);nt.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"tectonic_timber"},Ee.add(nt)})}if(v.show3DColumns){v.slabThickness,A?v.slabThickness*1.5:D&&v.slabThickness*.8;const U=S.height;let L=1;i>1&&(L=1.4-.7*(E/(i-1)));const B=v.columnRadius*L,O=B*2.2,H=B*.8,G=new Pn;G.moveTo(-O/2,-O/2),G.lineTo(O/2,-O/2),G.lineTo(O/2,-O/2+H),G.lineTo(-O/2+H,-O/2+H),G.lineTo(-O/2+H,O/2),G.lineTo(-O/2,O/2),G.closePath(),I.forEach((X,tt)=>{let $=!1;for(const dt of a[E])if(Math.hypot(X.x-dt.x,X.y-dt.y)<.2){$=!0;break}if($)return;a[E].push({x:X.x,y:X.y});let nt=!1,bt=-1;const Mt=_[tt];for(let dt=0;dt<v.polygon.length;dt++){const Rt=v.polygon[dt];if(Math.hypot(Mt.x-Rt.x,Mt.y-Rt.y)<.1){nt=!0,bt=dt;break}}let j=0;if(nt&&bt!==-1){const dt=v.polygon.length,Rt=h[(bt-1+dt)%dt],Pt=h[bt],K=(Rt.x+Pt.x)/2,st=(Rt.y+Pt.y)/2;j=(Math.hypot(K,st)>1e-6?Math.atan2(st,K):0)-5*Math.PI/4}const ut=y.has(tt),rt=C.has(tt);let ft=U;const wt=(dt,Rt,Pt,K=!1)=>{let st;const et=E===0?e:s;if(rt&&!K){const yt=new Pe(2,.3,ft);st=new _t(yt,et),st.position.set(dt,Rt,S.bottom+ft/2),st.rotation.z=Pt}else if(nt&&!K){const lt=new Li(G,{depth:ft,bevelEnabled:!1});st=new _t(lt,et),st.position.set(dt,Rt,S.bottom),st.rotation.z=Pt}else{const lt=new je(B,B,ft,16);lt.rotateX(Math.PI/2),st=new _t(lt,et),st.position.set(dt,Rt,S.bottom+ft/2)}st.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:E===0?"concrete_masonry":"tectonic_timber"},Ee.add(st)};if(ut){wt(X.x,X.y,0,!1);const dt=M.get(tt),Rt=X.x-3*dt.x,Pt=X.y-3*dt.y;wt(Rt,Pt,0,!0)}else if(rt){const dt=w.get(tt),Rt=Math.atan2(dt.y,dt.x);wt(X.x,X.y,Rt,!1)}else nt?wt(X.x,X.y,j,!1):wt(X.x,X.y,0,!1)})}if(v.show3DBeams&&E>=1){let U=1;i>1&&(U=1.3-.5*(E/(i-1)));const L=E===1?.3:v.beamWidth*U,B=E===1?3*v.beamDepth*U:v.beamDepth*U;let O=v.slabThickness;A&&(O=v.slabThickness*1.5),F.forEach(([H,G])=>{const X=G.x-H.x,tt=G.y-H.y;if(Math.hypot(X,tt)<.001)return;const nt=(H.x+G.x)/2,bt=(H.y+G.y)/2;let Mt=!1;for(const ft of c[E])if(Math.hypot(nt-ft.x,bt-ft.y)<.2){Mt=!0;break}if(Mt)return;c[E].push({x:nt,y:bt});const j=(ft,wt)=>{const dt=wt.x-ft.x,Rt=wt.y-ft.y,Pt=Math.hypot(dt,Rt);if(Pt<.001)return;const K=(ft.x+wt.x)/2,st=(ft.y+wt.y)/2;let et=E===1;if(!et&&v.structuralBays)for(let Gt=0;Gt<v.structuralBays.length;Gt++){const Ut=v.structuralBays[Gt];if(!(m[Gt]&&E<1)){const xt=Ut.some(R=>Math.hypot(R.x-ft.x,R.y-ft.y)<.1),se=Ut.some(R=>Math.hypot(R.x-wt.x,R.y-wt.y)<.1);if(xt&&se){et=!0;break}}}let lt,ct;et?(ct=S.bottom-O,lt=tv(Pt,L,B,B)):(ct=S.bottom-O-B/2,lt=new Pe(Pt,L,B));const yt=E===1?e:s,z=new _t(lt,yt);z.position.set(K,st,ct),z.rotation.z=Math.atan2(Rt,dt),z.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:E===1?"concrete_masonry":"tectonic_timber"},Ee.add(z)};j(H,G);const ut=I.indexOf(H),rt=I.indexOf(G);if(y.has(ut)&&y.has(rt)){const ft=M.get(ut),wt=M.get(rt),dt=new at(H.x-3*ft.x,H.y-3*ft.y),Rt=new at(G.x-3*wt.x,G.y-3*wt.y);j(dt,Rt)}})}if(v.showBalconies&&!A&&!D){const U=T.length,L=[],B=[];for(let X=0;X<U;X++){const tt=d[X],$=tt!=="other_building"&&tt!=="touching";B.push($),L.push($?tt==="courtyard"?v.balconyOffset*1.5:v.balconyOffset:0)}const O=[],H=[],G=.02;for(let X=0;X<U;X++){const tt=(X-1+U)%U,$=L[tt],nt=L[X],bt=h[tt],Mt=h[X];$>0&&nt>0?(O.push(Eh(bt,Mt,$,nt)),H.push(Eh(bt,Mt,$-G,nt-G))):$>0?(O.push({x:bt.x*$,y:bt.y*$}),H.push({x:bt.x*($-G),y:bt.y*($-G)})):nt>0?(O.push({x:Mt.x*nt,y:Mt.y*nt}),H.push({x:Mt.x*(nt-G),y:Mt.y*(nt-G)})):(O.push({x:0,y:0}),H.push({x:0,y:0}))}for(let X=0;X<U;X++){if(!B[X])continue;const tt=(X+1)%U,$=T[X],nt=T[tt],bt={x:$.x+O[X].x,y:$.y+O[X].y},Mt={x:nt.x+O[tt].x,y:nt.y+O[tt].y},j=new Pn;j.moveTo(bt.x,bt.y),j.lineTo(Mt.x,Mt.y),j.lineTo(nt.x,nt.y),j.lineTo($.x,$.y),j.closePath();const ut=new Li(j,{depth:v.balconyThickness,bevelEnabled:!1}),rt=new _t(ut,s);rt.position.z=S.bottom-v.balconyThickness,rt.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"tectonic_timber"},Ee.add(rt);const ft={x:$.x+H[X].x,y:$.y+H[X].y},wt={x:nt.x+H[tt].x,y:nt.y+H[tt].y},dt=new Pn;dt.moveTo(bt.x,bt.y),dt.lineTo(Mt.x,Mt.y),dt.lineTo(wt.x,wt.y),dt.lineTo(ft.x,ft.y),dt.closePath();const Rt=1.1,Pt=new Li(dt,{depth:Rt,bevelEnabled:!1}),K=new _t(Pt,r);K.position.z=S.bottom,K.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"tectonic_timber"},Ee.add(K)}}if(v.showBriseSoleil){const U=new at(-.707,-.707);for(let L=0;L<T.length;L++){const B=T[L],O=T[(L+1)%T.length],H=h[L],G=d[L],X=Math.hypot(O.x-B.x,O.y-B.y);if(X<.001)continue;H.dot(U);let tt=.5,$=.5,nt=H.y<-.5||H.x<-.5;if(nt&&(G==="courtyard"||G==="touching")&&(nt=!1),!nt)continue;const bt=Math.max(2,Math.floor(X/$));let Mt=v.slabThickness;D&&(Mt=v.slabThickness*.8);const j=S.height-Mt,ut=v.louverWidth*v.briseFinScale,rt=new Pn;rt.moveTo(0,-tt/2),rt.quadraticCurveTo(ut/2,0,0,tt/2),rt.quadraticCurveTo(-ut/2,0,0,-tt/2),rt.closePath();const ft=new Li(rt,{depth:j,bevelEnabled:!1});for(let wt=0;wt<=bt;wt++){const dt=wt/bt,Rt=B.x+(O.x-B.x)*dt+H.x*.15,Pt=B.y+(O.y-B.y)*dt+H.y*.15,K=new _t(ft,s);K.position.set(Rt,Pt,S.bottom),K.rotation.z=-120*Math.PI/180,K.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"tectonic_timber"},Ee.add(K)}}}}v.show3DCells&&l.structuralBays3D&&l.structuralBays3D.length>0&&l.structuralBays3D.forEach(E=>{const S=new Pn;S.moveTo(E.vertices[0].x,E.vertices[0].y);for(let $=1;$<E.vertices.length;$++)S.lineTo(E.vertices[$].x,E.vertices[$].y);S.closePath();const A=Vr(E.floorIndex,i,t,v.groundFloorHeightFactor).height,D=new Li(S,{depth:A,bevelEnabled:!1}),T=new ee(E.color),I=new as({color:T,transparent:!1,roughness:.5,metalness:.1,side:qe,depthWrite:!0}),F=new _t(D,I);F.position.z=E.vertices[0].z,F.userData={is3DStackMesh:!0,isCellVolume:!0,polygonId:l.id,cellIdx:E.cellIdx,floorIndex:E.floorIndex,phenotype:E.phenotype,facingDirections:E.facingDirections},Ee.add(F);const U=new ee(E.color).clone().multiplyScalar(.7),L=new hn({color:U,transparent:!0,opacity:.25}),B=E.vertices.map($=>new N($.x,$.y,$.z));B.push(B[0]);const O=new te().setFromPoints(B),H=new we(O,L);H.userData={is3DStackMesh:!0,polygonId:l.id},Ee.add(H);const G=E.topVertices.map($=>new N($.x,$.y,$.z));G.push(G[0]);const X=new te().setFromPoints(G),tt=new we(X,L);tt.userData={is3DStackMesh:!0,polygonId:l.id},Ee.add(tt);for(let $=0;$<E.vertices.length;$++){const nt=E.vertices[$],bt=[new N(nt.x,nt.y,nt.z),new N(nt.x,nt.y,nt.z+A)],Mt=new te().setFromPoints(bt),j=new we(Mt,L);j.userData={is3DStackMesh:!0,polygonId:l.id},Ee.add(j)}})}),v.activePolygonId=o}function iv(){const i=document.getElementById("btn-minimize-sidebar"),t=document.getElementById("control-sidebar");i&&t&&i.addEventListener("click",()=>{t.classList.toggle("collapsed");const T=i.querySelector("span");T&&(T.innerText=t.classList.contains("collapsed")?"▲":"▼")});const e=document.getElementById("header-mat-params"),n=document.getElementById("section-mat-params");e&&n&&e.addEventListener("click",()=>{n.classList.toggle("collapsed")});const s=document.getElementById("header-interactive-helpers"),r=document.getElementById("section-interactive-helpers");s&&r&&s.addEventListener("click",()=>{r.classList.toggle("collapsed")});const o=document.getElementById("header-rhino-integration"),a=document.getElementById("section-rhino-integration");o&&a&&o.addEventListener("click",()=>{a.classList.toggle("collapsed")});const c=document.getElementById("header-3d-stack"),l=document.getElementById("section-3d-stack");c&&l&&c.addEventListener("click",()=>{l.classList.toggle("collapsed")});const u=document.getElementById("btn-collapse-ribs-workflow"),f=document.getElementById("ribs-workflow-dependents");u&&f&&u.addEventListener("click",()=>{const T=f.style.display==="none";f.style.display=T?"block":"none",u.classList.toggle("collapsed",!T)}),document.getElementById("btn-view-perspective").addEventListener("click",()=>vh("perspective")),document.getElementById("btn-view-top").addEventListener("click",()=>vh("top"));const h=document.querySelectorAll(".preset-card");h.forEach(T=>{T.addEventListener("click",()=>{h.forEach(F=>F.classList.remove("active")),T.classList.add("active");const I=T.getAttribute("data-preset");I&&yu(I)})});const d=document.getElementById("slider-samples"),m=document.getElementById("val-samples");d.addEventListener("input",T=>{v.samplesPerEdge=parseInt(T.target.value),m.innerText=v.samplesPerEdge,ze()});const _=document.getElementById("slider-precision"),x=document.getElementById("val-precision");_.addEventListener("input",T=>{const I=parseInt(T.target.value);v.precision=Math.pow(10,-I),x.innerText=`1e-${I}`,ze()}),document.getElementById("chk-show-skeleton").addEventListener("change",T=>{v.showSkeleton=T.target.checked,ce()}),document.getElementById("chk-simplify-skeleton").addEventListener("change",T=>{v.simplifySkeleton=T.target.checked,ze()}),document.getElementById("chk-prune-branches").addEventListener("change",T=>{if(v.pruneBranches=T.target.checked,v.pruneBranches){v.simplifySkeleton=!0;const I=document.getElementById("chk-simplify-skeleton");I&&(I.checked=!0)}ze()}),document.getElementById("chk-show-ribs").addEventListener("change",T=>{if(v.showRibs=T.target.checked,v.showRibs){v.simplifySkeleton=!0;const I=document.getElementById("chk-simplify-skeleton");I&&(I.checked=!0)}ze()});const p=document.getElementById("slider-ribs"),g=document.getElementById("val-ribs");p.addEventListener("input",T=>{v.ribSpacing=parseFloat(T.target.value),g.innerText=`${v.ribSpacing.toFixed(1)}m`,ze()});const y=document.getElementById("slider-merge"),M=document.getElementById("val-merge");y.addEventListener("input",T=>{v.mergeThreshold=parseFloat(T.target.value),M.innerText=`${v.mergeThreshold.toFixed(1)}m`,ze()});function C(){const T=document.getElementById("btn-combine-bays"),I=document.getElementById("btn-delete-bays");T&&(T.disabled=v.selectedBayIndices.length<2),I&&(I.disabled=v.selectedBayIndices.length===0)}document.getElementById("chk-show-bays").addEventListener("change",T=>{v.showBays=T.target.checked;const I=document.getElementById("container-edit-bays");if(I&&(I.style.display=v.showBays?"block":"none"),!v.showBays){v.editBaysMode=!1,v.selectedBayIndices=[];const F=document.getElementById("chk-edit-bays-mode");F&&(F.checked=!1);const U=document.getElementById("edit-bays-actions");U&&(U.style.display="none")}qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,ce()}),document.getElementById("chk-edit-bays-mode").addEventListener("change",T=>{v.editBaysMode=T.target.checked,v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null;const I=document.getElementById("edit-bays-actions");I&&(I.style.display=v.editBaysMode?"grid":"none"),C(),ce()}),document.getElementById("btn-combine-bays").addEventListener("click",()=>{if(v.selectedBayIndices.length>=2){const T=v.selectedBayIndices.map(I=>vs(v.structuralBays[I]));v.bayEdits.push({type:"merge",points:T}),v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,C(),ze()}});const w=()=>{v.selectedBayIndices.length>0&&(v.selectedBayIndices.forEach(T=>{v.bayEdits.push({type:"delete",point:vs(v.structuralBays[T])})}),v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,C(),ze())};document.getElementById("btn-delete-bays").addEventListener("click",w),window.addEventListener("keydown",T=>{if(v.editBaysMode&&(T.key==="Delete"||T.key==="Del")){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;w()}}),document.getElementById("btn-reset-bay-edits").addEventListener("click",()=>{v.bayEdits=[],v.graphVertexOverrides.clear(),v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,C(),ze()}),document.getElementById("chk-hover-circle").addEventListener("change",T=>{v.hoverCircle=T.target.checked,v.hoverCircle||(v.hoveredMedialPoint=null),ce()}),document.getElementById("chk-show-governors").addEventListener("change",T=>{v.showGovernors=T.target.checked,ce()});const E=document.getElementById("btn-draw-custom"),S=document.getElementById("btn-clear-custom"),A=document.getElementById("drawing-indicator");E.addEventListener("click",()=>{v.isDrawing=!0,v.importedPolygons=[],v.activePolygonId="default",v.customVertices=[],v.polygon=[],v.graphVertexOverrides.clear(),v.bayEdits=[],v.selectedBayIndices=[],v.skeletonData={regularPoints:[],junctionPoints:[]},qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,E.style.display="none",S.style.display="inline-flex",A.style.display="flex",h.forEach(T=>T.classList.remove("active")),document.getElementById("card-custom").style.display="flex",document.getElementById("card-custom").classList.add("active"),ce()}),S.addEventListener("click",()=>{v.importedPolygons=[],v.activePolygonId="default",v.customVertices=[],v.polygon=[],v.isDrawing=!0,v.skeletonData={regularPoints:[],junctionPoints:[]},qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,ce()}),In.addEventListener("mousedown",rv),In.addEventListener("mousemove",ov),In.addEventListener("mouseup",av),In.addEventListener("mouseleave",lv),In.addEventListener("contextmenu",T=>T.preventDefault());const D=document.getElementById("btn-reset-view");D&&D.addEventListener("click",go),sv()}function sv(){const i=document.getElementById("rhino-file-input"),t=document.getElementById("btn-upload-rhino"),e=document.getElementById("rhino-file-info"),n=document.getElementById("rhino-filename"),s=document.getElementById("rhino-object-count"),r=document.getElementById("lbl-rhino-layers"),o=document.getElementById("rhino-layers-container"),a=document.getElementById("rhino-actions"),c=document.getElementById("btn-load-rhino-layers"),l=document.getElementById("btn-clear-rhino"),u=document.getElementById("btn-export-rhino"),f=document.getElementById("rhino-export-filename");if(!i||!t)return;let h=null;t.addEventListener("click",()=>{i.click()}),i.addEventListener("change",k=>{const J=k.target.files[0];if(!J)return;n.textContent=J.name,t.textContent="Loading File...",t.disabled=!0;const ht=new FileReader;ht.onload=async pt=>{try{h=pt.target.result,console.log("[UI] Parsing Rhino file metadata...");const{layers:St,objectCount:Q}=await hs.parseMetadata(h);s.textContent=`${Q} objects found`,e.style.display="block",o.innerHTML="",St&&St.length>0&&(St.forEach(it=>{const Ct=document.createElement("div");Ct.className="layer-item";const It=document.createElement("input");It.type="checkbox",It.id=`layer-chk-${it.index}`,It.value=it.index,It.checked=!1;const Et=document.createElement("div");Et.className="layer-color-dot",Et.style.backgroundColor=`rgba(${it.color.r}, ${it.color.g}, ${it.color.b}, ${it.color.a/255})`;const vt=document.createElement("span");vt.className="layer-name",vt.textContent=it.name,vt.title=it.name,vt.addEventListener("click",()=>{It.checked=!It.checked}),Ct.appendChild(It),Ct.appendChild(Et),Ct.appendChild(vt),o.appendChild(Ct)}),r.style.display="block",o.style.display="block",a.style.display="grid"),t.textContent="Change .3DM File"}catch(St){console.error("[UI] Error loading Rhino metadata:",St),alert("Error loading .3dm metadata: "+St.message),t.textContent="Load .3DM File"}finally{t.disabled=!1}},ht.readAsArrayBuffer(J)}),c.addEventListener("click",async()=>{if(!h)return;const k=o.querySelectorAll('input[type="checkbox"]:checked'),J=Array.from(k).map(pt=>parseInt(pt.value));if(J.length===0){alert("Please select at least one layer to load.");return}c.disabled=!0;const ht=c.textContent;c.textContent="Loading...";try{await hs.loadLayers(h,J),console.log("[UI] Rhino geometries successfully loaded.")}catch(pt){console.error("[UI] Error loading layers:",pt),alert("Failed to load layers: "+pt.message)}finally{c.disabled=!1,c.textContent=ht}}),l.addEventListener("click",()=>{hs.clearRhinoGeometries(),console.log("[UI] Rhino geometries cleared.")}),u.addEventListener("click",async()=>{const k=f.value.trim()||"medial_axis_export.3dm";u.disabled=!0,u.textContent="Exporting...";try{await hs.exportSceneTo3dm(k),console.log("[UI] Export complete.")}catch(J){console.error("[UI] Error exporting to 3DM:",J),alert("Failed to export to 3DM: "+J.message)}finally{u.disabled=!1,u.textContent="Export to 3DM"}});const d=document.getElementById("slider-floors"),m=document.getElementById("val-floors");d&&m&&d.addEventListener("input",k=>{v.numFloors=parseInt(k.target.value),m.innerText=v.numFloors,ce()});const _=document.getElementById("slider-floor-height"),x=document.getElementById("val-floor-height");_&&x&&_.addEventListener("input",k=>{v.floorHeight=parseFloat(k.target.value),x.innerText=`${v.floorHeight.toFixed(1)}m`,ce()});const p=document.getElementById("slider-ground-floor-factor"),g=document.getElementById("val-ground-floor-factor");p&&g&&p.addEventListener("input",k=>{v.groundFloorHeightFactor=parseFloat(k.target.value),g.innerText=v.groundFloorHeightFactor.toFixed(1),ce()});const y=document.getElementById("chk-3d-columns");y&&y.addEventListener("change",k=>{v.show3DColumns=k.target.checked,ce()});const M=document.getElementById("chk-3d-beams");M&&M.addEventListener("change",k=>{v.show3DBeams=k.target.checked,ce()});const C=document.getElementById("chk-3d-slabs");C&&C.addEventListener("change",k=>{v.showFloorSlabs=k.target.checked,ce()});const w=document.getElementById("chk-3d-roof");w&&w.addEventListener("change",k=>{v.showRoofSlab=k.target.checked,ce()});const E=document.getElementById("chk-3d-vaults");E&&E.addEventListener("change",k=>{v.showVaultedRoofs=k.target.checked,ce()});const S=document.getElementById("chk-3d-balconies");S&&S.addEventListener("change",k=>{v.showBalconies=k.target.checked,ce()});const A=document.getElementById("chk-3d-brisesoleil");A&&A.addEventListener("change",k=>{v.showBriseSoleil=k.target.checked,ce()});const D=document.getElementById("chk-3d-cells");D&&D.addEventListener("change",k=>{v.show3DCells=k.target.checked,ce()});const T=document.getElementById("chk-hover-labels");T&&T.addEventListener("change",k=>{if(v.showHoverLabels=k.target.checked,!v.showHoverLabels){const J=document.getElementById("cell-tooltip");J&&(J.style.display="none")}});const I=document.getElementById("btn-tab-workflow"),F=document.getElementById("btn-tab-shading"),U=document.getElementById("btn-tab-ai-render"),L=document.getElementById("btn-tab-shape-grammar"),B=document.getElementById("tab-content-workflow"),O=document.getElementById("tab-content-shading"),H=document.getElementById("tab-content-ai-render"),G=document.getElementById("tab-content-shape-grammar");I&&F&&U&&L&&B&&O&&H&&G&&(I.addEventListener("click",()=>{I.classList.add("active"),F.classList.remove("active"),U.classList.remove("active"),L.classList.remove("active"),B.style.display="flex",O.style.display="none",H.style.display="none",G.style.display="none",Qt&&(Qt.visible=!0),gn&&(gn.visible=!0),Be&&(Be.visible=!0),cn&&(cn.visible=!1)}),F.addEventListener("click",()=>{F.classList.add("active"),I.classList.remove("active"),U.classList.remove("active"),L.classList.remove("active"),O.style.display="flex",B.style.display="none",H.style.display="none",G.style.display="none",Qt&&(Qt.visible=!1),gn&&(gn.visible=!1),qt&&qt.detach(),Be&&(Be.visible=v.showGridHelper),cn&&(cn.visible=v.showGroundPlane)}),U.addEventListener("click",()=>{U.classList.add("active"),I.classList.remove("active"),F.classList.remove("active"),L.classList.remove("active"),H.style.display="flex",B.style.display="none",O.style.display="none",G.style.display="none",Qt&&(Qt.visible=!1),gn&&(gn.visible=!1),qt&&qt.detach(),Be&&(Be.visible=v.showGridHelper),cn&&(cn.visible=v.showGroundPlane)}),L.addEventListener("click",()=>{L.classList.add("active"),I.classList.remove("active"),F.classList.remove("active"),U.classList.remove("active"),G.style.display="flex",B.style.display="none",O.style.display="none",H.style.display="none",Qt&&(Qt.visible=!0),gn&&(gn.visible=!0),Be&&(Be.visible=!0),cn&&(cn.visible=!1)}));const X=document.getElementById("chk-ssao-enabled");X&&X.addEventListener("change",k=>{v.ssaoEnabled=k.target.checked,ke&&(ke.enabled=v.ssaoEnabled)});const tt=document.getElementById("slider-ssao-radius"),$=document.getElementById("val-ssao-radius");tt&&$&&tt.addEventListener("input",k=>{v.ssaoRadius=parseInt(k.target.value),$.innerText=v.ssaoRadius,ke&&(ke.kernelRadius=v.ssaoRadius)});const nt=document.getElementById("slider-ssao-min-dist"),bt=document.getElementById("val-ssao-min-dist");nt&&bt&&nt.addEventListener("input",k=>{v.ssaoMinDistance=parseFloat(k.target.value),bt.innerText=v.ssaoMinDistance.toFixed(3)});const Mt=document.getElementById("slider-ssao-max-dist"),j=document.getElementById("val-ssao-max-dist");Mt&&j&&Mt.addEventListener("input",k=>{v.ssaoMaxDistance=parseFloat(k.target.value),j.innerText=v.ssaoMaxDistance.toFixed(1)});const ut=document.getElementById("slider-ssao-intensity"),rt=document.getElementById("val-ssao-intensity");ut&&rt&&ut.addEventListener("input",k=>{v.ssaoIntensity=parseFloat(k.target.value),rt.innerText=v.ssaoIntensity.toFixed(1),ke&&ke.ssaoMaterial.uniforms.intensity&&(ke.ssaoMaterial.uniforms.intensity.value=v.ssaoIntensity)});const ft=document.getElementById("slider-ambient-intensity"),wt=document.getElementById("val-ambient-intensity");ft&&wt&&ft.addEventListener("input",k=>{v.ambientIntensity=parseFloat(k.target.value),wt.innerText=v.ambientIntensity.toFixed(2),lo&&(lo.intensity=v.ambientIntensity)});const dt=document.getElementById("slider-dir1-intensity"),Rt=document.getElementById("val-dir1-intensity");dt&&Rt&&dt.addEventListener("input",k=>{v.dirLight1Intensity=parseFloat(k.target.value),Rt.innerText=v.dirLight1Intensity.toFixed(2),Ws&&(Ws.intensity=v.dirLight1Intensity)});const Pt=document.getElementById("slider-dir2-intensity"),K=document.getElementById("val-dir2-intensity");Pt&&K&&Pt.addEventListener("input",k=>{v.dirLight2Intensity=parseFloat(k.target.value),K.innerText=v.dirLight2Intensity.toFixed(2),Xs&&(Xs.intensity=v.dirLight2Intensity)});const st=document.getElementById("chk-ground-plane");st&&st.addEventListener("change",k=>{v.showGroundPlane=k.target.checked,cn&&(cn.visible=v.showGroundPlane)});const et=document.getElementById("slider-cantilever-scale"),lt=document.getElementById("val-cantilever-scale");et&&lt&&et.addEventListener("input",k=>{v.cantileverScale=parseFloat(k.target.value),lt.innerText=v.cantileverScale.toFixed(1),ce()});const ct=document.getElementById("slider-brise-fin-scale"),yt=document.getElementById("val-brise-fin-scale");ct&&yt&&ct.addEventListener("input",k=>{v.briseFinScale=parseFloat(k.target.value),yt.innerText=v.briseFinScale.toFixed(1),ce()});const z=document.getElementById("chk-grid-helper");z&&z.addEventListener("change",k=>{v.showGridHelper=k.target.checked,Be&&(Be.visible=v.showGridHelper)});const Gt=document.getElementById("slider-roof-hypar-h"),Ut=document.getElementById("val-roof-hypar-h");Gt&&Ut&&Gt.addEventListener("input",k=>{v.roofHyparH=parseFloat(k.target.value),Ut.innerText=`${v.roofHyparH.toFixed(1)}m`,ce()});const Wt=document.getElementById("slider-roof-pitch-rh"),xt=document.getElementById("val-roof-pitch-rh");Wt&&xt&&Wt.addEventListener("input",k=>{v.roofPitchRH=parseFloat(k.target.value),xt.innerText=`${v.roofPitchRH.toFixed(1)}m`,ce()});const se=document.getElementById("slider-roof-hypar-spacing"),R=document.getElementById("val-roof-hypar-spacing");se&&R&&se.addEventListener("input",k=>{v.roofHyparSlatSpacing=parseFloat(k.target.value),R.innerText=`${v.roofHyparSlatSpacing.toFixed(1)}m`,ce()});const b=document.getElementById("display-mode-select");b&&b.addEventListener("change",k=>{Tu(k.target.value)}),cv()}function Eu(i){const t=In.getBoundingClientRect();oi.x=(i.clientX-t.left)/t.width*2-1,oi.y=-((i.clientY-t.top)/t.height)*2+1,zi.setFromCamera(oi,ue);const e=new N;return zi.ray.intersectPlane(V_,e),e}function rv(i){if(!(i.button===1||i.button===2)&&i.button===0){if(qt&&(qt.dragging||qt.axis))return;const t=In.getBoundingClientRect();oi.x=(i.clientX-t.left)/t.width*2-1,oi.y=-((i.clientY-t.top)/t.height)*2+1;const e=Eu(i),n=new at(e.x,e.y);zi.setFromCamera(oi,ue),zi.params.Line.threshold=.4;const s=[...Qt.children,...Ee.children],r=zi.intersectObjects(s,!0);if(v.editBaysMode){let o=!1;for(const a of r)if(a.object.userData&&a.object.userData.isGraphVertex&&a.object.userData.polygonId===v.activePolygonId){const c=a.object.userData.index,l=v.planarGraph.vertices[c];v.selectedVertexType="graph",v.selectedVertexIdx=c,v.selectedVertexOrig=v.planarGraph.originalVertices[c],Ei.position.set(l.x,l.y,.035),qt.attach(Ei),o=!0,ce();break}if(!o){let a=null,c=null;for(const l of r)if(l.object.userData&&l.object.userData.polygonId){a=l.object.userData.polygonId,c=l.object;break}if(a){const l=v.importedPolygons.find(u=>u.id===a);if(l)if(!l.hasScaffold)l.hasScaffold=!0,v.activePolygonId=l.id,ze();else if(c.userData.isPolygonLine||c.userData.is3DStackMesh)l.hasScaffold=!1,ze();else{const u=l.structuralBays.findIndex(f=>ao(n,f));if(u!==-1){v.activePolygonId!==l.id&&(v.activePolygonId=l.id,ce());const f=v.selectedBayIndices.indexOf(u);f!==-1?v.selectedBayIndices.splice(f,1):v.selectedBayIndices.push(u);const h=document.getElementById("btn-combine-bays"),d=document.getElementById("btn-delete-bays");h&&(h.disabled=v.selectedBayIndices.length<2),d&&(d.disabled=v.selectedBayIndices.length===0),ce()}else l.hasScaffold=!1,ze()}}else qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,ce()}return}else if(v.isDrawing){if(v.customVertices.length>=3){const o=nl(v.customVertices[0]);if(new at(i.clientX-t.left,i.clientY-t.top).dist(o)<12){v.polygon=[...v.customVertices],v.isDrawing=!1,document.getElementById("btn-draw-custom").style.display="inline-flex",document.getElementById("btn-clear-custom").style.display="none",document.getElementById("drawing-indicator").style.display="none",ze(),go();return}}v.customVertices.push(n),ce()}else{let o=!1;for(const a of r)if(a.object.userData&&a.object.userData.isHandle&&a.object.userData.polygonId===v.activePolygonId){const c=a.object.userData.index,l=v.polygon[c];v.selectedVertexType="polygon",v.selectedVertexIdx=c,v.selectedVertexOrig=null,Ei.position.set(l.x,l.y,.03),qt.attach(Ei),o=!0,ce();break}if(!o){let a=null;for(const c of r)if(c.object.userData&&c.object.userData.polygonId){a=c.object.userData.polygonId;break}if(a){const c=v.importedPolygons.find(l=>l.id===a);c&&(c.hasScaffold?(c.hasScaffold=!1,ze()):(c.hasScaffold=!0,v.activePolygonId=c.id,ze()))}else qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,ce()}}}}function ov(i){const t=Eu(i),e=new at(t.x,t.y);if(v.mouseWorldPos=e,v.showHoverLabels&&v.show3DCells&&!v.isDrawing){const n=In.getBoundingClientRect();oi.x=(i.clientX-n.left)/n.width*2-1,oi.y=-((i.clientY-n.top)/n.height)*2+1,zi.setFromCamera(oi,ue);const s=zi.intersectObjects(Ee.children,!0);let r=null;for(const a of s)if(a.object.userData&&a.object.userData.isCellVolume){r=a.object;break}const o=document.getElementById("cell-tooltip");if(o)if(r){const a=r.userData,c=a.floorIndex===0?"Ground Floor":a.floorIndex===v.numFloors-1?"Roof Floor":`Intermediate Floor (F${a.floorIndex})`;let l="Interior Cell";a.phenotype==="corner"?l="Corner Cell":a.phenotype==="courtyard"?l="Courtyard Cell":a.phenotype==="neighbor"?l="Facade Cell (Neighbor)":a.phenotype==="open_space"&&(l="Facade Cell (Open Space)");const u=a.facingDirections&&a.facingDirections.length>0?a.facingDirections.join(", "):"N/A (Interior)";o.innerHTML=`
          <div style="font-weight: 700; margin-bottom: 6px; color: #60a5fa; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px;">Cell Phenotype</div>
          <div style="margin-bottom: 4px;"><strong>Level:</strong> ${c}</div>
          <div style="margin-bottom: 4px;"><strong>Type:</strong> ${l}</div>
          <div><strong>Facing:</strong> ${u}</div>
        `,o.style.display="block",o.style.left=i.clientX-n.left+15+"px",o.style.top=i.clientY-n.top+15+"px"}else o.style.display="none"}else{const n=document.getElementById("cell-tooltip");n&&(n.style.display="none")}if(v.isDrawing)ce();else if(v.hoverCircle&&!v.editBaysMode&&v.polygon.length>=3&&Ue.state===-1){const n=In.getBoundingClientRect(),s=new at(i.clientX-n.left,i.clientY-n.top);let r=null,o=20;for(const a of v.skeletonData.regularPoints){const c=nl(a),l=s.dist(c);l<o&&(o=l,r=a)}for(const a of v.skeletonData.junctionPoints){if(a.isEndPoint)continue;const c=nl(a),l=s.dist(c);l<o&&(o=l,r=a)}r!==v.hoveredMedialPoint&&(v.hoveredMedialPoint=r,ce())}}function av(){}function lv(){v.mouseWorldPos=null,v.hoveredMedialPoint=null;const i=document.getElementById("cell-tooltip");i&&(i.style.display="none"),ce()}function bu(){if(requestAnimationFrame(bu),Ue.update(),be.overrideMaterial===Dn&&Dn){const i=wu();Dn.uniforms.cameraNear.value=i.min,Dn.uniforms.cameraFar.value=i.max}else if(ke&&ue){const i=ue.far-ue.near;ke.minDistance=v.ssaoMinDistance/i,ke.maxDistance=v.ssaoMaxDistance/i}be.overrideMaterial===Dn?un.render(be,ue):_n?_n.render():un.render(be,ue)}let Dn=null,Th=!0,Ah=!0;function wu(){const i=new ys;if(Qt&&i.expandByObject(Qt),Ee&&i.expandByObject(Ee),gn&&i.expandByObject(gn),i.isEmpty())return{min:ue.near,max:ue.far};const t=[new N(i.min.x,i.min.y,i.min.z),new N(i.min.x,i.min.y,i.max.z),new N(i.min.x,i.max.y,i.min.z),new N(i.max.x,i.min.y,i.min.z),new N(i.max.x,i.max.y,i.min.z),new N(i.max.x,i.max.y,i.max.z)];let e=1/0,n=-1/0;const s=ue.matrixWorldInverse;return t.forEach(r=>{r.applyMatrix4(s);const o=-r.z;o<e&&(e=o),o>n&&(n=o)}),e=Math.max(ue.near,e-5),n=Math.min(ue.far,n+5),n<=e&&(n=e+10),{min:e,max:n}}function Tu(i){if(i==="DEPTH"){const t=wu();Dn||(Dn=new Ze({uniforms:{cameraNear:{value:t.min},cameraFar:{value:t.max}},vertexShader:`
          varying float vDepth;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            vDepth = -mvPosition.z;
          }
        `,fragmentShader:`
          uniform float cameraNear;
          uniform float cameraFar;
          varying float vDepth;
          void main() {
            float d = clamp((vDepth - cameraNear) / (cameraFar - cameraNear), 0.0, 1.0);
            gl_FragColor = vec4(vec3(d), 1.0);
          }
        `})),Dn.uniforms.cameraNear.value=t.min,Dn.uniforms.cameraFar.value=t.max,be.overrideMaterial=Dn,qt&&(Th=qt.visible,qt.visible=!1),Be&&(Ah=Be.visible,Be.visible=!1)}else be.overrideMaterial=null,qt&&(qt.visible=Th),Be&&(Be.visible=Ah)}function cv(){const i=document.getElementById("btn-generate-imagen"),t=document.getElementById("btn-show-imagen"),e=document.getElementById("imagen-status"),n=document.getElementById("imagen-modal"),s=document.getElementById("btn-close-imagen"),r=document.getElementById("imagen-result-img"),o=document.getElementById("imagen-prompt"),a=document.getElementById("btn-prev-imagen"),c=document.getElementById("btn-next-imagen"),l=document.getElementById("btn-save-imagen"),u=document.getElementById("imagen-modal-title");if(!i||!n)return;const f={container:nr,renderer:un,get camera(){return ue},controls:Ue,osmGroup:null,osmFeature:null,get composer(){return _n},get saoPass(){return ke},setDisplayMode:p=>Tu(p),render:()=>{be.overrideMaterial===Dn?un.render(be,ue):_n?_n.render():un.render(be,ue)},onWindowResize:()=>{vu()}},h=new I_(f);let d=[],m=0;const _=["Beauty Render","Depth Stencil","AI Render Result"],x=()=>{d.length!==0&&(r.src=d[m],u.textContent=_[m])};i.addEventListener("click",async()=>{const p=o.value.trim();if(!p){alert("Please enter prompt constraints.");return}i.disabled=!0,e.textContent="Initializing...";const g=()=>{const y=document.getElementById("imagen-modal-content");if(y){const M=window.devicePixelRatio||1;y.style.width=`${1365/M}px`,y.style.height=`${768/M}px`}};window.addEventListener("resize",()=>{n.style.display==="flex"&&g()});try{const y=await h.generateRender(p,M=>{e.textContent=M},(M,C)=>{d=[M,C],m=0,x(),g(),n.style.display="flex",t&&(t.style.display="block")});d=[y.beauty,y.depth,y.result],m=2,x(),e.textContent="Success!"}catch{}finally{i.disabled=!1}}),t&&t.addEventListener("click",()=>{d.length>0&&((()=>{const g=document.getElementById("imagen-modal-content");if(g){const y=window.devicePixelRatio||1;g.style.width=`${1365/y}px`,g.style.height=`${768/y}px`}})(),n.style.display="flex")}),a.addEventListener("click",()=>{d.length!==0&&(m=(m-1+d.length)%d.length,x())}),c.addEventListener("click",()=>{d.length!==0&&(m=(m+1)%d.length,x())}),l.addEventListener("click",()=>{if(d.length===0)return;const p=document.createElement("a");p.href=d[m],p.download=_[m].replace(/\s+/g,"_").toLowerCase()+".png",document.body.appendChild(p),p.click(),document.body.removeChild(p)}),s.addEventListener("click",()=>{n.style.display="none"}),document.addEventListener("keydown",p=>{n.style.display==="flex"&&(p.key==="ArrowLeft"||p.key==="<"||p.key===","?a.click():p.key==="ArrowRight"||p.key===">"||p.key==="."?c.click():p.key==="Escape"&&s.click())})}window.addEventListener("load",()=>{G_(),iv(),yu(v.activePreset)});
