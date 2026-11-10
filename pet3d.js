var Yd="187",ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kd=0,Oc=1,Zd=2;var wo=1,jd=2,Nr=3,xs=0,nn=1,Jt=2,Ki=0,Zi=1,Zn=2,Fc=3,Uc=4,Jd=5;var Or=100,Qd=101,$d=102,ef=103,tf=104,nf=200,sf=201,rf=202,of=203,af=204,lf=205,cf=206,hf=207,uf=208,df=209,ff=210,pf=211,mf=212,gf=213,xf=214,vf=0,yf=1,_f=2,Bc=3,bf=4,Mf=5,Sf=6,wf=7,Tf=0,Af=1,Ef=2,Li=0,To=1,Ao=2,Eo=3,li=4,Ro=5,Co=6,qs=7;var Po=301,Fr=302,Wa=303,Xa=304,vs=1000,Ur=1001,qa=1002,Hn=1003,Ya=1004;var Ys=1005;var sn=1006,Br=1007;var jn=1008;var _i=1009,Rf=1010,Cf=1011,Io=1012,zc=1013,ys=1014,ji=1015,$t=1016,Gc=1017,kc=1018,Ks=1020,Pf=35902,If=35899,Lf=1021,Df=1022,bi=1023,zr=1026,_s=1027,Nf=1028,Hc=1029,Zs=1030,Vc=1031;var Wc=1033,Ka=33776,Za=33777,ja=33778,Ja=33779,Xc=35840,qc=35841,Yc=35842,Kc=35843,Zc=36196,jc=37492,Jc=37496,Qc=37488,$c=37489,Qa=37490,eh=37491,th=37808,nh=37809,ih=37810,sh=37811,rh=37812,oh=37813,ah=37814,lh=37815,ch=37816,hh=37817,uh=37818,dh=37819,fh=37820,ph=37821,mh=36492,gh=36494,xh=36495,vh=36283,yh=36284,$a=36285,_h=36286,bh=2200,Mh=2201;var Sh=2300,el=2301;var wh=0,Lo=1,Gr=2;var Th=0,Of=1,js="",xn="srgb",Jn="srgb-linear",Ah="linear",Dt="srgb";var Ff=512,Uf=513,Bf=514,Eh=515,zf=516,Gf=517,Rh=518,Ch=519;var Ph="300 es",Ih=2000;function wm(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Tm(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Pr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function kf(){let e=Pr("canvas");return e.style.display="block",e}var $u={},Ir=null;function _o(...e){let t="THREE."+e.shift();if(Ir)Ir("log",t,...e);else console.log(t,...e)}function Hf(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let n=e[1];if(n&&n.isStackTrace)e[0]+=" "+n.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function je(...e){e=Hf(e);let t="THREE."+e.shift();if(Ir)Ir("warn",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.warn(n.getError(t));else console.warn(t,...e)}}function it(...e){e=Hf(e);let t="THREE."+e.shift();if(Ir)Ir("error",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.error(n.getError(t));else console.error(t,...e)}}function Hs(...e){let t=e.join(" ");if(t in $u)return;$u[t]=!0,je(...e)}function Vf(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Wf={[0]:0,[2]:6,[4]:4,[3]:5,[1]:1,[6]:2,[7]:7,[5]:3};class Mi{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){let n=this._listeners;if(n===void 0)return!1;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}var wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=1234567,go=Math.PI/180,Vs=180/Math.PI;function Si(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[e&255]+wn[e>>8&255]+wn[e>>16&255]+wn[e>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function Lh(e,t){return(e%t+t)%t}function Am(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function Em(e,t,n){if(e!==t)return(n-e)/(t-e);else return 0}function xo(e,t,n){return(1-n)*e+n*t}function Rm(e,t,n,i){return xo(e,t,1-Math.exp(-n*i))}function Cm(e,t=1){return t-Math.abs(Lh(e,t*2)-t)}function Pm(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*(3-2*e)}function Im(e,t,n){if(e<=t)return 0;if(e>=n)return 1;return e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10)}function Lm(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Dm(e,t){return e+Math.random()*(t-e)}function Nm(e){return e*(0.5-Math.random())}function Om(e){if(e!==void 0)ed=e;let t=ed+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fm(e){return e*go}function Um(e){return e*Vs}function Bm(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function zm(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Dh(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Gm(e,t,n,i,s){let{cos:r,sin:o}=Math,a=r(n/2),l=o(n/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":e.set(a*h,l*d,l*u,a*c);break;case"YZY":e.set(l*u,a*h,l*d,a*c);break;case"ZXZ":e.set(l*d,l*u,a*h,a*c);break;case"XZX":e.set(a*h,l*m,l*f,a*c);break;case"YXY":e.set(l*f,a*h,l*m,a*c);break;case"ZYZ":e.set(l*m,l*f,a*h,a*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function tl(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Nh(e,t){if(t.constructor===Float32Array)return e;let n=tl(t);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function Oh(e,t){if(t.constructor===Float32Array)return e;let n=tl(t);if(n===void 0)throw Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var kr={DEG2RAD:go,RAD2DEG:Vs,generateUUID:Si,clamp:ut,euclideanModulo:Lh,mapLinear:Am,inverseLerp:Em,lerp:xo,damp:Rm,pingpong:Cm,smoothstep:Pm,smootherstep:Im,randInt:Lm,randFloat:Dm,randFloatSpread:Nm,seededRandom:Om,degToRad:Fm,radToDeg:Um,isPowerOfTwo:Bm,ceilPowerOfTwo:zm,floorPowerOfTwo:Dh,setQuaternionFromProperEuler:Gm,normalize:Oh,denormalize:Nh};class ie{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let a=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r+0],u=s[r+1],f=s[r+2],m=s[r+3];if(h!==m||a!==d||l!==u||c!==f){let v=a*d+l*u+c*f+h*m;if(v<0)d=-d,u=-u,f=-f,m=-m,v=-v;let p=1-o;if(v<0.9995){let g=Math.acos(v),_=Math.sin(g);p=Math.sin(p*g)/_,o=Math.sin(o*g)/_,a=a*p+d*o,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o}else{a=a*p+d*o,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o;let g=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=g,l*=g,c*=g,h*=g}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){let o=n[i],a=n[i+1],l=n[i+2],c=n[i+3],h=s[r],d=s[r+1],u=s[r+2],f=s[r+3];return e[t]=o*f+c*h+a*u-l*d,e[t+1]=a*f+c*d+l*h-o*u,e[t+2]=l*f+c*u+o*d-a*h,e[t+3]=c*f-o*h-a*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,{cos:o,sin:a}=Math,l=o(n/2),c=o(i/2),h=o(s/2),d=a(n/2),u=a(i/2),f=a(s/2);switch(r){case"XYZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"YXZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"ZXY":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"ZYX":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"YZX":this._x=d*c*h+l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h-d*u*f;break;case"XZY":this._x=d*c*h-l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h+d*u*f;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10],d=n+o+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-a)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>o&&n>h){let u=2*Math.sqrt(1+n-o-h);this._w=(c-a)/u,this._x=0.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(o>h){let u=2*Math.sqrt(1+o-n-h);this._w=(s-l)/u,this._x=(i+r)/u,this._y=0.25*u,this._z=(a+c)/u}else{let u=2*Math.sqrt(1+h-n-o);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(a+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<0.00000001)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=n*c+r*o+i*l-s*a,this._y=i*c+r*a+s*o-n*l,this._z=s*c+r*l+n*a-i*o,this._w=r*c-n*o-i*a-s*l,this._onChangeCallback(),this}slerp(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,o=this.dot(e);if(o<0)n=-n,i=-i,s=-s,r=-r,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+s*t,this._w=this._w*a+r*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+s*t,this._w=this._w*a+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,{x:s,y:r,z:o,w:a}=e,l=2*(r*i-o*n),c=2*(o*t-s*i),h=2*(s*n-r*t);return this.x=t+a*l+r*h-o*c,this.y=n+a*c+o*l-s*h,this.z=i+a*h+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,{x:r,y:o,z:a}=t;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sc.copy(this).projectOnVector(e),this.sub(sc)}reflect(e){return this.sub(sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var sc=new R,td=new jt;class at{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,o,a,l)}set(e,t,n,i,s,r,o,a,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=s,c[5]=a,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],c=n[4],h=n[7],d=n[2],u=n[5],f=n[8],m=i[0],v=i[3],p=i[6],g=i[1],_=i[4],b=i[7],y=i[2],S=i[5],T=i[8];return s[0]=r*m+o*g+a*y,s[3]=r*v+o*_+a*S,s[6]=r*p+o*b+a*T,s[1]=l*m+c*g+h*y,s[4]=l*v+c*_+h*S,s[7]=l*p+c*b+h*T,s[2]=d*m+u*g+f*y,s[5]=d*v+u*_+f*S,s[8]=d*p+u*b+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*r*c-t*o*l-n*s*c+n*o*a+i*s*l-i*r*a}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=c*r-o*l,d=o*a-c*s,u=l*s-r*a,f=t*h+n*d+i*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=h*m,e[1]=(i*l-c*n)*m,e[2]=(o*n-i*r)*m,e[3]=d*m,e[4]=(c*t-i*a)*m,e[5]=(i*s-o*t)*m,e[6]=u*m,e[7]=(n*a-l*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){let a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*r+l*o)+r+e,-i*l,i*a,-i*(-l*r+a*o)+o+t,0,0,1),this}scale(e,t){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(e,t)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var rc=new at,nd=new at().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),id=new at().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function km(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,o){if(this.enabled===!1||r===o||!r||!o)return s;if(this.spaces[r].transfer==="srgb")s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b);if(this.spaces[r].primaries!==this.spaces[o].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer==="srgb")s.r=Cr(s.r),s.g=Cr(s.g),s.b=Cr(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:i,transfer:"linear",toXYZ:nd,fromXYZ:id,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:i,transfer:"srgb",toXYZ:nd,fromXYZ:id,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var dt=km();function Yi(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function Cr(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var mr;class Fh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{if(mr===void 0)mr=Pr("canvas");mr.width=e.width,mr.height=e.height;let i=mr.getContext("2d");if(e instanceof ImageData)i.putImageData(e,0,0);else i.drawImage(e,0,0,e.width,e.height);n=mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Yi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(Yi(t[n]/255)*255);else t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var Hm=0;class Do{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width||0,t.height||0,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)if(i[r].isDataTexture)s.push(oc(i[r].image));else s.push(oc(i[r]))}else s=oc(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function oc(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return Fh.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return je("Texture: Unable to serialize Texture."),{}}var Vm=0,ac=new R;class Wt extends Mi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,o=1023,a=1009,l=Wt.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Si(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=300;Wt.DEFAULT_ANISOTROPY=1;class Pt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],h=a[8],d=a[1],u=a[5],f=a[9],m=a[2],v=a[6],p=a[10];if(Math.abs(c-d)<0.01&&Math.abs(h-m)<0.01&&Math.abs(f-v)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(h+m)<0.1&&Math.abs(f+v)<0.1&&Math.abs(l+u+p-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,b=(u+1)/2,y=(p+1)/2,S=(c+d)/4,T=(h+m)/4,x=(f+v)/4;if(_>b&&_>y)if(_<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(_),i=S/n,s=T/n;else if(b>y)if(b<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(b),n=S/i,s=x/i;else if(y<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(y),n=T/s,i=x/s;return this.set(n,i,s,t),this}let g=Math.sqrt((v-f)*(v-f)+(h-m)*(h-m)+(d-c)*(d-c));if(Math.abs(g)<0.001)g=1;return this.x=(v-f)/g,this.y=(h-m)/g,this.z=(d-c)/g,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uh extends Mi{constructor(e=1,t=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Wt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.mipmapsAutoUpdate!==void 0)t.mipmapsAutoUpdate=e.mipmapsAutoUpdate;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Do(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yt extends Uh{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class nl extends Wt{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bh extends Wt{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Je{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,o,a,l,c,h,d,u,f,m,v){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,o,a,l,c,h,d,u,f,m,v)}set(e,t,n,i,s,r,o,a,l,c,h,d,u,f,m,v){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=a,p[2]=l,p[6]=c,p[10]=h,p[14]=d,p[3]=u,p[7]=f,p[11]=m,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),r=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=r*c,u=r*h,f=o*c,m=o*h;t[0]=a*c,t[4]=-a*h,t[8]=l,t[1]=u+f*l,t[5]=d-m*l,t[9]=-o*a,t[2]=m-d*l,t[6]=f+u*l,t[10]=r*a}else if(e.order==="YXZ"){let d=a*c,u=a*h,f=l*c,m=l*h;t[0]=d+m*o,t[4]=f*o-u,t[8]=r*l,t[1]=r*h,t[5]=r*c,t[9]=-o,t[2]=u*o-f,t[6]=m+d*o,t[10]=r*a}else if(e.order==="ZXY"){let d=a*c,u=a*h,f=l*c,m=l*h;t[0]=d-m*o,t[4]=-r*h,t[8]=f+u*o,t[1]=u+f*o,t[5]=r*c,t[9]=m-d*o,t[2]=-r*l,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){let d=r*c,u=r*h,f=o*c,m=o*h;t[0]=a*c,t[4]=f*l-u,t[8]=d*l+m,t[1]=a*h,t[5]=m*l+d,t[9]=u*l-f,t[2]=-l,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){let d=r*a,u=r*l,f=o*a,m=o*l;t[0]=a*c,t[4]=m-d*h,t[8]=f*h+u,t[1]=h,t[5]=r*c,t[9]=-o*c,t[2]=-l*c,t[6]=u*h+f,t[10]=d-m*h}else if(e.order==="XZY"){let d=r*a,u=r*l,f=o*a,m=o*l;t[0]=a*c,t[4]=-h,t[8]=l*c,t[1]=d*h+m,t[5]=r*c,t[9]=u*h-f,t[2]=f*h-u,t[6]=o*c,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wm,e,Xm)}lookAt(e,t,n){let i=this.elements;if(Yn.subVectors(e,t),Yn.lengthSq()===0)Yn.z=1;if(Yn.normalize(),cs.crossVectors(n,Yn),cs.lengthSq()===0){if(Math.abs(n.z)===1)Yn.x+=0.0001;else Yn.z+=0.0001;Yn.normalize(),cs.crossVectors(n,Yn)}return cs.normalize(),fa.crossVectors(Yn,cs),i[0]=cs.x,i[4]=fa.x,i[8]=Yn.x,i[1]=cs.y,i[5]=fa.y,i[9]=Yn.y,i[2]=cs.z,i[6]=fa.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],c=n[1],h=n[5],d=n[9],u=n[13],f=n[2],m=n[6],v=n[10],p=n[14],g=n[3],_=n[7],b=n[11],y=n[15],S=i[0],T=i[4],x=i[8],M=i[12],E=i[1],L=i[5],I=i[9],z=i[13],W=i[2],P=i[6],X=i[10],G=i[14],F=i[3],K=i[7],q=i[11],H=i[15];return s[0]=r*S+o*E+a*W+l*F,s[4]=r*T+o*L+a*P+l*K,s[8]=r*x+o*I+a*X+l*q,s[12]=r*M+o*z+a*G+l*H,s[1]=c*S+h*E+d*W+u*F,s[5]=c*T+h*L+d*P+u*K,s[9]=c*x+h*I+d*X+u*q,s[13]=c*M+h*z+d*G+u*H,s[2]=f*S+m*E+v*W+p*F,s[6]=f*T+m*L+v*P+p*K,s[10]=f*x+m*I+v*X+p*q,s[14]=f*M+m*z+v*G+p*H,s[3]=g*S+_*E+b*W+y*F,s[7]=g*T+_*L+b*P+y*K,s[11]=g*x+_*I+b*X+y*q,s[15]=g*M+_*z+b*G+y*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],a=e[9],l=e[13],c=e[2],h=e[6],d=e[10],u=e[14],f=e[3],m=e[7],v=e[11],p=e[15],g=a*u-l*d,_=o*u-l*h,b=o*d-a*h,y=r*u-l*c,S=r*d-a*c,T=r*h-o*c;return t*(m*g-v*_+p*b)-n*(f*g-v*y+p*S)+i*(f*_-m*y+p*T)-s*(f*b-m*S+v*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(r*c-o*l)-n*(s*c-o*a)+i*(s*l-r*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],d=e[10],u=e[11],f=e[12],m=e[13],v=e[14],p=e[15],g=t*o-n*r,_=t*a-i*r,b=t*l-s*r,y=n*a-i*o,S=n*l-s*o,T=i*l-s*a,x=c*m-h*f,M=c*v-d*f,E=c*p-u*f,L=h*v-d*m,I=h*p-u*m,z=d*p-u*v,W=g*z-_*I+b*L+y*E-S*M+T*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/W;return e[0]=(o*z-a*I+l*L)*P,e[1]=(i*I-n*z-s*L)*P,e[2]=(m*T-v*S+p*y)*P,e[3]=(d*S-h*T-u*y)*P,e[4]=(a*E-r*z-l*M)*P,e[5]=(t*z-i*E+s*M)*P,e[6]=(v*b-f*T-p*_)*P,e[7]=(c*T-d*b+u*_)*P,e[8]=(r*I-o*E+l*x)*P,e[9]=(n*E-t*I-s*x)*P,e[10]=(f*S-m*b+p*g)*P,e[11]=(h*b-c*S-u*g)*P,e[12]=(o*M-r*L-a*x)*P,e[13]=(t*L-n*M+i*x)*P,e[14]=(m*_-f*y-v*g)*P,e[15]=(c*y-h*_+d*g)*P,this}scale(e){let t=this.elements,{x:n,y:i,z:s}=e;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:o,z:a}=e,l=s*r,c=s*o;return this.set(l*r+n,l*o-i*a,l*a+i*o,0,l*o+i*a,c*o+n,c*a-i*r,0,l*a-i*o,c*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,{_x:s,_y:r,_z:o,_w:a}=t,l=s+s,c=r+r,h=o+o,d=s*l,u=s*c,f=s*h,m=r*c,v=r*h,p=o*h,g=a*l,_=a*c,b=a*h,{x:y,y:S,z:T}=n;return i[0]=(1-(m+p))*y,i[1]=(u+b)*y,i[2]=(f-_)*y,i[3]=0,i[4]=(u-b)*S,i[5]=(1-(d+p))*S,i[6]=(v+g)*S,i[7]=0,i[8]=(f+_)*T,i[9]=(v-g)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=gr.set(i[0],i[1],i[2]).length(),o=gr.set(i[4],i[5],i[6]).length(),a=gr.set(i[8],i[9],i[10]).length();if(s<0)r=-r;gi.copy(this);let l=1/r,c=1/o,h=1/a;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=c,gi.elements[5]*=c,gi.elements[6]*=c,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,r,o=2000,a=!1){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),f,m;if(a)f=s/(r-s),m=r*s/(r-s);else if(o===2000)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(o===2001)f=-r/(r-s),m=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=2000,a=!1){let l=this.elements,c=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),u=-(n+i)/(n-i),f,m;if(a)f=1/(r-s),m=r/(r-s);else if(o===2000)f=-2/(r-s),m=-(r+s)/(r-s);else if(o===2001)f=-1/(r-s),m=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var gr=new R,gi=new Je,Wm=new R(0,0,0),Xm=new R(1,1,1),cs=new R,fa=new R,Yn=new R,sd=new Je,rd=new jt;class yi{constructor(e=0,t=0,n=0,i=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],a=i[1],l=i[5],c=i[9],h=i[2],d=i[6],u=i[10];switch(t){case"XYZ":if(this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-ut(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,u),this._z=Math.atan2(a,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(a,s);break;case"ZYX":if(this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(a,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(ut(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(o,u);break;case"XZY":if(this._z=Math.asin(-ut(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(o,s);else this._x=Math.atan2(-c,u),this._y=0;break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var qm=0,od=new R,xr=new jt,ki=new Je,pa=new R,ro=new R,Ym=new R,Km=new jt,ad=new R(1,0,0),ld=new R(0,1,0),cd=new R(0,0,1),hd={type:"added"},Zm={type:"removed"},vr={type:"childadded",child:null},lc={type:"childremoved",child:null};class Ht extends Mi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();let e=new R,t=new yi,n=new jt,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new at}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null)this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,t){return xr.setFromAxisAngle(e,t),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)pa.copy(e);else pa.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)ki.lookAt(ro,pa,this.up);else ki.lookAt(pa,ro,this.up);if(this.quaternion.setFromRotationMatrix(ki),i)ki.extractRotation(i.matrixWorld),xr.setFromRotationMatrix(ki),this.quaternion.premultiply(xr.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return it("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),vr.child=e,this.dispatchEvent(vr),vr.child=null;else it("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm),lc.child=e,this.dispatchEvent(lc),lc.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld);return e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,Ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,Km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:n,z:i}=e,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((o)=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let h=a[l];s(e.shapes,h)}else s(e.shapes,a)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(e.materials,this.material[a]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(s(e.animations,a))}}if(t){let o=r(e.geometries),a=r(e.materials),l=r(e.textures),c=r(e.images),h=r(e.shapes),d=r(e.skeletons),u=r(e.animations),f=r(e.nodes);if(o.length>0)n.geometries=o;if(a.length>0)n.materials=a;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(d.length>0)n.skeletons=d;if(u.length>0)n.animations=u;if(f.length>0)n.nodes=f}return n.object=i,n;function r(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new R(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ft extends Ht{constructor(){super();this.isGroup=!0,this.type="Group"}}var jm={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let m of e.hand.values()){let v=t.getJointPose(m,n),p=this._getHandJoint(l,m);if(v!==null)p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius;p.visible=v!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=0.02,f=0.005;if(l.inputState.pinching&&d>u+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&d<=u-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity);else a.hasLinearVelocity=!1;if(s.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity);else o.hasLinearVelocity=!1;if(i.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(jm)}}}if(o!==null)o.visible=i!==null;if(a!==null)a.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}var Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},ma={h:0,s:0,l:0};function cc(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class Y{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Lh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=cc(r,s,e+0.3333333333333333),this.g=cc(r,s,e),this.b=cc(r,s,e-0.3333333333333333)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=Xf[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else je("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return dt.workingToColorSpace(Tn.copy(this),e),Math.round(ut(Tn.r*255,0,255))*65536+Math.round(ut(Tn.g*255,0,255))*256+Math.round(ut(Tn.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Tn.copy(this),t);let{r:n,g:i,b:s}=Tn,r=Math.max(n,i,s),o=Math.min(n,i,s),a,l,c=(o+r)/2;if(o===r)a=0,l=0;else{let h=r-o;switch(l=c<=0.5?h/(r+o):h/(2-r-o),r){case n:a=(i-s)/h+(i<s?6:0);break;case i:a=(s-n)/h+2;break;case s:a=(n-i)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e="srgb"){dt.workingToColorSpace(Tn.copy(this),e);let{r:t,g:n,b:i}=Tn;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(ma);let n=xo(hs.h,ma.h,t),i=xo(hs.s,ma.s,t),s=xo(hs.l,ma.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Tn=new Y;Y.NAMES=Xf;class ci extends Ht{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var xi=new R,Hi=new R,hc=new R,Vi=new R,yr=new R,_r=new R,ud=new R,uc=new R,dc=new R,fc=new R,pc=new Pt,mc=new Pt,gc=new Pt;class oi{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),Hi.subVectors(n,t),hc.subVectors(e,t);let r=xi.dot(xi),o=xi.dot(Hi),a=xi.dot(hc),l=Hi.dot(Hi),c=Hi.dot(hc),h=r*l-o*o;if(h===0)return s.set(0,0,0),null;let d=1/h,u=(l*a-o*c)*d,f=(r*c-o*a)*d;return s.set(1-u-f,f,u)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,Vi)===null)return!1;return Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,i,s,r,o,a){if(this.getBarycoord(e,t,n,i,Vi)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(s,Vi.x),a.addScaledVector(r,Vi.y),a.addScaledVector(o,Vi.z),a}static getInterpolatedAttribute(e,t,n,i,s,r){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(pc,s.x),r.addScaledVector(mc,s.y),r.addScaledVector(gc,s.z),r}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),Hi.subVectors(e,t),xi.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),xi.cross(Hi).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,o;yr.subVectors(i,n),_r.subVectors(s,n),uc.subVectors(e,n);let a=yr.dot(uc),l=_r.dot(uc);if(a<=0&&l<=0)return t.copy(n);dc.subVectors(e,i);let c=yr.dot(dc),h=_r.dot(dc);if(c>=0&&h<=c)return t.copy(i);let d=a*h-c*l;if(d<=0&&a>=0&&c<=0&&a-c>0)return r=a/(a-c),t.copy(n).addScaledVector(yr,r);fc.subVectors(e,s);let u=yr.dot(fc),f=_r.dot(fc);if(f>=0&&u<=f)return t.copy(s);let m=u*l-a*f;if(m<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(_r,o);let v=c*f-u*h;if(v<=0&&h-c>=0&&u-f>=0)return ud.subVectors(s,i),o=(h-c)/(h-c+(u-f)),t.copy(i).addScaledVector(ud,o);let p=1/(v+m+d);return r=m*p,o=d*p,t.copy(n).addScaledVector(yr,r).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class An{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++){if(e.isMesh===!0)e.getVertexPosition(r,vi);else vi.fromBufferAttribute(s,r);vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();ga.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();ga.copy(n.boundingBox)}ga.applyMatrix4(e.matrixWorld),this.union(ga)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),xa.subVectors(this.max,oo),br.subVectors(e.a,oo),Mr.subVectors(e.b,oo),Sr.subVectors(e.c,oo),us.subVectors(Mr,br),ds.subVectors(Sr,Mr),Us.subVectors(br,Sr);let t=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Us.z,Us.y,us.z,0,-us.x,ds.z,0,-ds.x,Us.z,0,-Us.x,-us.y,us.x,0,-ds.y,ds.x,0,-Us.y,Us.x,0];if(!xc(t,br,Mr,Sr,xa))return!1;if(t=[1,0,0,0,1,0,0,0,1],!xc(t,br,Mr,Sr,xa))return!1;return va.crossVectors(us,ds),t=[va.x,va.y,va.z],xc(t,br,Mr,Sr,xa)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(vi).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var Wi=[new R,new R,new R,new R,new R,new R,new R,new R],vi=new R,ga=new An,br=new R,Mr=new R,Sr=new R,us=new R,ds=new R,Us=new R,oo=new R,xa=new R,va=new R,Bs=new R;function xc(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){Bs.fromArray(e,r);let a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=t.dot(Bs),c=n.dot(Bs),h=i.dot(Bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tn=new R,ya=new ie,Jm=0;class gn extends Mi{constructor(e,t,n=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0,this._normalizationScale=e!==void 0?tl(e):void 0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=this._denormalize(n);return n}setComponent(e,t,n){if(this.normalized)n=this._normalize(n);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=this._denormalize(t);return t}setX(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=this._denormalize(t);return t}setY(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=this._denormalize(t);return t}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=this._denormalize(t);return t}setW(e,t){if(this.normalized)t=this._normalize(t);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Nh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Oh(e,this.array)}}class il extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hr extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ge extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}var Qm=new An,ao=new R,vc=new R;class Qn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else Qm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);let t=ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(ao,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(vc)),this.expandByPoint(ao.copy(e.center).sub(vc));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var $m=0,si=new Je,yc=new Ht,wr=new R,Kn=new An,lo=new An,dn=new R;class gt extends Mi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((wm(e))?Hr:il)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}if(e.length>t.count)je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new An;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(Kn.setFromBufferAttribute(s),this.morphTargetsRelative)dn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(dn);else this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Qn;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];if(lo.setFromBufferAttribute(o),this.morphTargetsRelative)dn.addVectors(Kn.min,lo.min),Kn.expandByPoint(dn),dn.addVectors(Kn.max,lo.max),Kn.expandByPoint(dn);else Kn.expandByPoint(lo.min),Kn.expandByPoint(lo.max)}Kn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)dn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(dn));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(dn.fromBufferAttribute(o,l),a)wr.fromBufferAttribute(e,l),dn.add(wr);i=Math.max(i,n.distanceToSquared(dn))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=t,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let o=[],a=[],l=new Uint8Array(n.count);for(let M=0;M<n.count;M++)o[M]=new R,a[M]=new R;let c=new R,h=new R,d=new R,u=new ie,f=new ie,m=new ie,v=new R,p=new R;function g(M,E,L){l[M]=l[E]=l[L]=1,c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,L),u.fromBufferAttribute(s,M),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,L),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let I=1/(f.x*m.y-m.x*f.y);if(!isFinite(I))return;v.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),o[M].add(v),o[E].add(v),o[L].add(v),a[M].add(p),a[E].add(p),a[L].add(p)}let _=this.groups;if(_.length===0)_=[{start:0,count:e.count}];for(let M=0,E=_.length;M<E;++M){let L=_[M],{start:I,count:z}=L;for(let W=I,P=I+z;W<P;W+=3)g(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let b=new R,y=new R,S=new R,T=new R;function x(M){S.fromBufferAttribute(i,M),T.copy(S);let E=o[M];b.copy(E),b.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(T,E);let I=y.dot(a[M])<0?-1:1;r.setXYZW(M,b.x,b.y,b.z,I)}for(let M=0,E=n.count;M<E;++M)if(l[M])x(M);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new R,s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R;if(e)for(let d=0,u=e.count;d<u;d+=3){let f=e.getX(d+0),m=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),o.fromBufferAttribute(n,f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),o.add(c),a.add(c),l.add(c),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:h}=o,d=new l.constructor(a.length*c),u=0,f=0;for(let m=0,v=a.length;m<v;m++){if(o.isInterleavedBufferAttribute)u=a[m]*o.data.stride+o.offset;else u=a[m]*c;for(let p=0;p<c;p++)d[f++]=l[u++]}return new gn(d,c,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new gt,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],l=e(a,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let a=[],l=s[o];for(let c=0,h=l.length;c<h;c++){let d=l[c],u=e(d,n);a.push(u)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,a=r.length;o<a;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let a in n){let l=n[a];e.data.attributes[a]=l.toJSON(e.data)}let i={},s=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];c.push(u.toJSON(e.data))}if(c.length>0)i[a]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone());let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],h=s[l];for(let d=0,u=h.length;d<u;d++)c.push(h[d].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fo{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=dd(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=this.array.slice(0).buffer;let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};let t=dd(this.array);if(e.arrayBuffers[t]===void 0)e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function dd(e){if(e.buffer._uuid===void 0)e.buffer._uuid=Si();if(e.byteOffset===0&&e.byteLength===e.buffer.byteLength)return e.buffer._uuid;return e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var Fn=new R;class Vr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?tl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];if(this.normalized)n=this._denormalize(n);return n}setComponent(e,t,n){if(this.normalized)n=this._normalize(n);return this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=this._normalize(t);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=this._denormalize(t);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=this._denormalize(t);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=this._denormalize(t);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=this._denormalize(t);return t}setXY(e,t,n){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n);return this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e=e*this.data.stride+this.offset,this.normalized)t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new Vr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Nh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Oh(e,this.data.array)}}var _c=new R,eg=new R,tg=new at;class ri{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=_c.subVectors(n,t).cross(eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(_c),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let r=-(e.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tg.getNormalMatrix(e),i=this.coplanarPoint(_c).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var ng=0;class $n extends Mi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.diffuseRoughness!==void 0)n.diffuseRoughness=this.diffuseRoughness;if(this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture)n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessMinimum!==void 0)n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum;if(this.iridescenceThicknessMaximum!==void 0)n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let o in s){let a=s[o];delete a.metadata,r.push(a)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new Y().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.diffuseRoughness!==void 0)this.diffuseRoughness=e.diffuseRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessMinimum!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum;if(e.iridescenceThicknessMaximum!==void 0)this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1];if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((n)=>new ri().fromJSON(n));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let n=e.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new ie().fromArray(n)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale);if(e.diffuseRoughnessMap!==void 0)this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null;if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}var Xi=new R,bc=new R,_a=new R,ba=new R;class Ji{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){bc.copy(e).add(t).multiplyScalar(0.5),_a.copy(t).sub(e).normalize(),ba.copy(this.origin).sub(bc);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(_a),o=ba.dot(this.direction),a=-ba.dot(_a),l=ba.lengthSq(),c=Math.abs(1-r*r),h,d,u,f;if(c>0)if(h=r*a-o,d=r*o-a,f=s*c,h>=0)if(d>=-f)if(d<=f){let m=1/c;h*=m,d*=m,u=h*(h+r*d+2*o)+d*(r*h+d+2*a)+l}else d=s,h=Math.max(0,-(r*d+o)),u=-h*h+d*(d+2*a)+l;else d=-s,h=Math.max(0,-(r*d+o)),u=-h*h+d*(d+2*a)+l;else if(d<=-f)h=Math.max(0,-(-r*s+o)),d=h>0?-s:Math.min(Math.max(-s,-a),s),u=-h*h+d*(d+2*a)+l;else if(d<=f)h=0,d=Math.min(Math.max(-s,-a),s),u=d*(d+2*a)+l;else h=Math.max(0,-(r*s+o)),d=h>0?s:Math.min(Math.max(-s,-a),s),u=-h*h+d*(d+2*a)+l;else d=r>0?-s:s,h=Math.max(0,-(r*d+o)),u=-h*h+d*(d+2*a)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(bc).addScaledVector(_a,d);return u}intersectSphere(e,t){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);let n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,a=n+r;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,o,a,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;if(l>=0)n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l;else n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l;if(c>=0)s=(e.min.y-d.y)*c,r=(e.max.y-d.y)*c;else s=(e.max.y-d.y)*c,r=(e.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)o=(e.min.z-d.z)*h,a=(e.max.z-d.z)*h;else o=(e.max.z-d.z)*h,a=(e.min.z-d.z)*h;if(n>a||o>i)return null;if(o>n||n!==n)n=o;if(a<i||i!==i)i=a;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,o=this.direction,{x:a,y:l,z:c}=o,h=e.x-r.x,d=e.y-r.y,u=e.z-r.z,f=t.x-r.x,m=t.y-r.y,v=t.z-r.z,p=n.x-r.x,g=n.y-r.y,_=n.z-r.z,b=Math.abs(a),y=Math.abs(l),S=Math.abs(c),T,x,M,E,L,I,z,W,P,X,G,F;if(b>=y&&b>=S)if(M=a,I=h,P=f,F=p,a>=0)T=l,x=c,E=d,L=u,z=m,W=v,X=g,G=_;else T=c,x=l,E=u,L=d,z=v,W=m,X=_,G=g;else if(y>=S)if(M=l,I=d,P=m,F=g,l>=0)T=c,x=a,E=u,L=h,z=v,W=f,X=_,G=p;else T=a,x=c,E=h,L=u,z=f,W=v,X=p,G=_;else if(M=c,I=u,P=v,F=_,c>=0)T=a,x=l,E=h,L=d,z=f,W=m,X=p,G=g;else T=l,x=a,E=d,L=h,z=m,W=f,X=g,G=p;if(M===0)return null;let K=T/M,q=x/M,H=1/M,Z=E-K*I,ee=L-q*I,J=z-K*P,ae=W-q*P,Ae=X-K*F,Ne=G-q*F,Oe=Ae*ae-Ne*J,Ce=Z*Ne-ee*Ae,lt=J*ee-ae*Z;if(i){if(Oe<0||Ce<0||lt<0)return null}else if((Oe<0||Ce<0||lt<0)&&(Oe>0||Ce>0||lt>0))return null;let He=Oe+Ce+lt;if(He===0)return null;let ze=H*(Oe*I+Ce*P+lt*F);if(He>0?ze<0:ze>0)return null;return this.at(ze/He,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt extends $n{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var fd=new Je,zs=new Ji,Ma=new Qn,pd=new R,Sa=new R,wa=new R,Ta=new R,Mc=new R,Aa=new R,md=new R,Ea=new R;class Qe extends Ht{constructor(e=new gt,t=new zt){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Aa.set(0,0,0);for(let a=0,l=s.length;a<l;a++){let c=o[a],h=s[a];if(c===0)continue;if(Mc.fromBufferAttribute(h,e),r)Aa.addScaledVector(Mc,c);else Aa.addScaledVector(Mc.sub(t),c)}t.add(Aa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),zs.copy(e.ray).recast(e.near),Ma.containsPoint(zs.origin)===!1){if(zs.intersectSphere(Ma,pd)===null)return;if(zs.origin.distanceToSquared(pd)>(e.far-e.near)**2)return}if(fd.copy(s).invert(),zs.copy(e.ray).applyMatrix4(fd),n.boundingBox!==null){if(zs.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,zs)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:d,drawRange:u}=s;if(o!==null)if(Array.isArray(r))for(let f=0,m=d.length;f<m;f++){let v=d[f],p=r[v.materialIndex],g=Math.max(v.start,u.start),_=Math.min(o.count,Math.min(v.start+v.count,u.start+u.count));for(let b=g,y=_;b<y;b+=3){let S=o.getX(b),T=o.getX(b+1),x=o.getX(b+2);if(i=Ra(this,p,e,n,l,c,h,S,T,x),i)i.faceIndex=Math.floor(b/3),i.face.materialIndex=v.materialIndex,t.push(i)}}else{let f=Math.max(0,u.start),m=Math.min(o.count,u.start+u.count);for(let v=f,p=m;v<p;v+=3){let g=o.getX(v),_=o.getX(v+1),b=o.getX(v+2);if(i=Ra(this,r,e,n,l,c,h,g,_,b),i)i.faceIndex=Math.floor(v/3),t.push(i)}}else if(a!==void 0)if(Array.isArray(r))for(let f=0,m=d.length;f<m;f++){let v=d[f],p=r[v.materialIndex],g=Math.max(v.start,u.start),_=Math.min(a.count,Math.min(v.start+v.count,u.start+u.count));for(let b=g,y=_;b<y;b+=3){let S=b,T=b+1,x=b+2;if(i=Ra(this,p,e,n,l,c,h,S,T,x),i)i.faceIndex=Math.floor(b/3),i.face.materialIndex=v.materialIndex,t.push(i)}}else{let f=Math.max(0,u.start),m=Math.min(a.count,u.start+u.count);for(let v=f,p=m;v<p;v+=3){let g=v,_=v+1,b=v+2;if(i=Ra(this,r,e,n,l,c,h,g,_,b),i)i.faceIndex=Math.floor(v/3),t.push(i)}}}}function ig(e,t,n,i,s,r,o,a){let l;if(t.side===1)l=i.intersectTriangle(o,r,s,!0,a);else l=i.intersectTriangle(s,r,o,t.side===0,a);if(l===null)return null;Ea.copy(a),Ea.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Ea);if(c<n.near||c>n.far)return null;return{distance:c,point:Ea.clone(),object:e}}function Ra(e,t,n,i,s,r,o,a,l,c){e.getVertexPosition(a,Sa),e.getVertexPosition(l,wa),e.getVertexPosition(c,Ta);let h=ig(e,t,n,i,Sa,wa,Ta,md);if(h){let d=new R;if(oi.getBarycoord(md,Sa,wa,Ta,d),s)h.uv=oi.getInterpolatedAttribute(s,a,l,c,d,new ie);if(r)h.uv1=oi.getInterpolatedAttribute(r,a,l,c,d,new ie);if(o){if(h.normal=oi.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a,b:l,c,normal:new R,materialIndex:0};oi.getNormal(Sa,wa,Ta,u.normal),h.face=u,h.barycoord=d}return h}var co=new Pt,gd=new Pt,xd=new Pt,sg=new Pt,vd=new Je,Ca=new R,Sc=new Qn,yd=new Je,wc=new Ji;class Wr extends Qe{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;if(this.boundingBox===null)this.boundingBox=new An;this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingBox.expandByPoint(Ca)}computeBoundingSphere(){let e=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new Qn;this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingSphere.expandByPoint(Ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;if(n===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Sc.copy(this.boundingSphere),Sc.applyMatrix4(i),e.ray.intersectsSphere(Sc)===!1)return;if(yd.copy(i).invert(),wc.copy(e.ray).applyMatrix4(yd),this.boundingBox!==null){if(wc.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(e,t,wc)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){if(this.skeleton=e,t===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld;this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();if(s!==1/0)e.multiplyScalar(s);else e.set(1,0,0,0);t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;if(gd.fromBufferAttribute(i.attributes.skinIndex,e),xd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4)co.copy(t),t.set(0,0,0,0);else co.set(t.x,t.y,t.z,1),t.set(0,0,0);co.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=xd.getComponent(s);if(r!==0){let o=gd.getComponent(s);vd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sg.copy(co).applyMatrix4(vd),r)}}if(t.isVector4)t.w=co.w;return t.applyMatrix4(this.bindMatrixInverse)}}class Uo extends Ht{constructor(){super();this.isBone=!0,this.type="Bone"}}class Js extends Wt{constructor(e=null,t=1,n=1,i,s,r,o,a,l=1003,c=1003,h,d){super(null,r,o,a,l,c,i,s,h,d);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var _d=new Je,rg=new Je;class Bo{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;if(this.bones[e])n.copy(this.bones[e].matrixWorld).invert();this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];if(n)n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];if(n){if(n.parent&&n.parent.isBone)n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld);else n.matrix.copy(n.matrixWorld);n.matrix.decompose(n.position,n.quaternion,n.scale)}}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:rg;_d.multiplyMatrices(o,t[s]),_d.toArray(n,s*16)}if(i!==null)i.needsUpdate=!0}clone(){return new Bo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Js(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null;if(this.previousBoneTexture!==null)this.previousBoneTexture.dispose(),this.previousBoneTexture=null}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],r=t[s];if(r===void 0)je("Skeleton: No bone found with UUID:",s),r=new Uo;this.bones.push(r),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let r=t[i];e.bones.push(r.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}}class ai extends gn{constructor(e,t,n,i=1){super(e,t,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var Tr=new Je,bd=new Je,Pa=[],Md=new An,og=new Je,ho=new Qe,uo=new Qn;class Xr extends Qe{constructor(e,t,n){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,og)}computeBoundingBox(){let e=this.geometry,t=this.count;if(this.boundingBox===null)this.boundingBox=new An;if(e.boundingBox===null)e.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),Md.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(Md)}computeBoundingSphere(){let e=this.geometry,t=this.count;if(this.boundingSphere===null)this.boundingSphere=new Qn;if(e.boundingSphere===null)e.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Tr),uo.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){if(this.instanceColor===null)return t.setRGB(1,1,1);else return t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,Tr),bd.multiplyMatrices(n,Tr),ho.matrixWorld=bd,ho.raycast(e,Pa);for(let r=0,o=Pa.length;r<o;r++){let a=Pa[r];a.instanceId=s,a.object=this,t.push(a)}Pa.length=0}}setColorAt(e,t){if(this.instanceColor===null)this.instanceColor=new ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new Js(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let o=this.geometry.morphTargetsRelative?1:1-r,a=i*e;return s[a]=o,s.set(n,a+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null)this.instanceColor.dispose();if(this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Gs=new Qn,ag=new ie(0.5,0.5),Ia=new R;class Ws{constructor(e=new ri,t=new ri,n=new ri,i=new ri,s=new ri,r=new ri){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],v=s[10],p=s[11],g=s[12],_=s[13],b=s[14],y=s[15];if(i[0].setComponents(l-r,u-c,p-f,y-g).normalize(),i[1].setComponents(l+r,u+c,p+f,y+g).normalize(),i[2].setComponents(l+o,u+h,p+m,y+_).normalize(),i[3].setComponents(l-o,u-h,p-m,y-_).normalize(),n)i[4].setComponents(a,d,v,b).normalize(),i[5].setComponents(l-a,u-d,p-v,y-b).normalize();else if(i[4].setComponents(l-a,u-d,p-v,y-b).normalize(),t===2000)i[5].setComponents(l+a,u+d,p+v,y+b).normalize();else if(t===2001)i[5].setComponents(a,d,v,b).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);let t=ag.distanceTo(e.center);return Gs.radius=0.7071067811865476+t,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ia.x=i.normal.x>0?e.max.x:e.min.x,Ia.y=i.normal.y>0?e.max.y:e.min.y,Ia.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Sd=new Je;class sl{constructor(){this.coordinateSystem=2000,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];if(Sd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0)n[i]=new Ws;n[i].setFromProjectionMatrix(Sd,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++){if(t[i]===void 0)t[i]=new Ws;t[i].copy(n[i])}return this._count=e._count,this}clone(){return new sl().copy(this)}}class zo extends $n{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var Ga=new R,ka=new R,wd=new Je,fo=new Ji,La=new Qn,Tc=new R,Td=new R;class qr extends Ht{constructor(e=new gt,t=new zo){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ga.fromBufferAttribute(t,i-1),ka.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(ka);e.setAttribute("lineDistance",new Ge(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(La.copy(n.boundingSphere),La.applyMatrix4(i),La.radius+=s,e.ray.intersectsSphere(La)===!1)return;wd.copy(i).invert(),fo.copy(e.ray).applyMatrix4(wd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=u,v=f-1;m<v;m+=l){let p=c.getX(m),g=c.getX(m+1),_=Da(this,e,fo,a,p,g,m);if(_)t.push(_)}if(this.isLineLoop){let m=c.getX(f-1),v=c.getX(u),p=Da(this,e,fo,a,m,v,f-1);if(p)t.push(p)}}else{let u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let m=u,v=f-1;m<v;m+=l){let p=Da(this,e,fo,a,m,m+1,m);if(p)t.push(p)}if(this.isLineLoop){let m=Da(this,e,fo,a,f-1,u,f-1);if(m)t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Da(e,t,n,i,s,r,o){let a=e.geometry.attributes.position;if(Ga.fromBufferAttribute(a,s),ka.fromBufferAttribute(a,r),n.distanceSqToSegment(Ga,ka,Tc,Td)>i)return;Tc.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Tc);if(c<t.near||c>t.far)return;return{distance:c,point:Td.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ad=new R,Ed=new R;class rl extends qr{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ad.fromBufferAttribute(t,i),Ed.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ad.distanceTo(Ed);e.setAttribute("lineDistance",new Ge(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ol extends qr{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class Qs extends $n{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Rd=new Je,Ic=new Ji,Na=new Qn,Oa=new R;class bs extends Ht{constructor(e=new gt,t=new Qs){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();else this.morphTargetInfluences=void 0;if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);else this.morphTargetDictionary=void 0;return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=s,e.ray.intersectsSphere(Na)===!1)return;Rd.copy(i).invert(),Ic.copy(e.ray).applyMatrix4(Rd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),u=Math.min(l.count,r.start+r.count);for(let f=d,m=u;f<m;f++){let v=l.getX(f);Oa.fromBufferAttribute(h,v),Cd(Oa,v,a,i,e,t,this)}}else{let d=Math.max(0,r.start),u=Math.min(h.count,r.start+r.count);for(let f=d,m=u;f<m;f++)Oa.fromBufferAttribute(h,f),Cd(Oa,f,a,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cd(e,t,n,i,s,r,o){let a=Ic.distanceSqToPoint(e);if(a<n){let l=new R;Ic.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class al extends Wt{constructor(e=[],t=301,n,i,s,r,o,a,l,c){super(e,t,n,i,s,r,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ll extends Wt{constructor(e,t,n,i,s,r,o,a,l){super(e,t,n,i,s,r,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ms extends Wt{constructor(e,t,n=1014,i,s,r,o=1003,a=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,s,r,o,a,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Do(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class cl extends Ms{constructor(e,t=1014,n=301,i,s,r=1003,o=1003,a,l=1026){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,n,i,s,r,o,a,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hl extends Wt{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ss extends gt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let a=[],l=[],c=[],h=[],d=0,u=0;f("z","y","x",-1,-1,n,t,e,r,s,0),f("z","y","x",1,-1,n,t,-e,r,s,1),f("x","z","y",1,1,e,n,t,i,r,2),f("x","z","y",1,-1,e,n,-t,i,r,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2));function f(m,v,p,g,_,b,y,S,T,x,M){let E=b/T,L=y/x,I=b/2,z=y/2,W=S/2,P=T+1,X=x+1,G=0,F=0,K=new R;for(let q=0;q<X;q++){let H=q*L-z;for(let Z=0;Z<P;Z++){let ee=Z*E-I;K[m]=ee*g,K[v]=H*_,K[p]=W,l.push(K.x,K.y,K.z),K[m]=0,K[v]=0,K[p]=S>0?1:-1,c.push(K.x,K.y,K.z),h.push(Z/T),h.push(1-q/x),G+=1}}for(let q=0;q<x;q++)for(let H=0;H<T;H++){let Z=d+H+P*q,ee=d+H+P*(q+1),J=d+(H+1)+P*(q+1),ae=d+(H+1)+P*q;a.push(Z,ee,ae),a.push(ee,J,ae),F+=6}o.addGroup(u,F,M),u+=F,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class En extends gt{constructor(e=1,t=1,n=4,i=8,s=1){super();this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let r=[],o=[],a=[],l=[],c=t/2,h=Math.PI/2*e,d=t,u=2*h+d,f=n*2+s,m=i+1,v=new R,p=new R;for(let g=0;g<=f;g++){let _=0,b=0,y=0,S=0;if(g<=n){let M=g/n,E=M*Math.PI/2;b=-c-e*Math.cos(E),y=e*Math.sin(E),S=-e*Math.cos(E),_=M*h}else if(g<=n+s){let M=(g-n)/s;b=-c+M*t,y=e,S=0,_=h+M*d}else{let M=(g-n-s)/n,E=M*Math.PI/2;b=c+e*Math.sin(E),y=e*Math.cos(E),S=e*Math.sin(E),_=h+d+M*h}let T=Math.max(0,Math.min(1,_/u)),x=0;if(g===0)x=0.5/i;else if(g===f)x=-0.5/i;for(let M=0;M<=i;M++){let E=M/i,L=E*Math.PI*2,I=Math.sin(L),z=Math.cos(L);p.x=-y*z,p.y=b,p.z=y*I,o.push(p.x,p.y,p.z),v.set(-y*z,S,y*I),v.normalize(),a.push(v.x,v.y,v.z),l.push(E+x,T)}if(g>0){let M=(g-1)*m;for(let E=0;E<i;E++){let L=M+E,I=M+E+1,z=g*m+E,W=g*m+E+1;r.push(L,I,z),r.push(I,W,z)}}}this.setIndex(r),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Nt extends gt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],h=[],d=[],u=[],f=0,m=[],v=n/2,p=0;if(g(),r===!1){if(e>0)_(!0);if(t>0)_(!1)}this.setIndex(c),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(u,2));function g(){let b=new R,y=new R,S=0,T=(t-e)/n;for(let x=0;x<=s;x++){let M=[],E=x/s,L=E*(t-e)+e;for(let I=0;I<=i;I++){let z=I/i,W=z*a+o,P=Math.sin(W),X=Math.cos(W);y.x=L*P,y.y=-E*n+v,y.z=L*X,h.push(y.x,y.y,y.z),b.set(P,T,X).normalize(),d.push(b.x,b.y,b.z),u.push(z,1-E),M.push(f++)}m.push(M)}for(let x=0;x<i;x++)for(let M=0;M<s;M++){let E=m[M][x],L=m[M+1][x],I=m[M+1][x+1],z=m[M][x+1];if(e>0||M!==0)c.push(E,L,z),S+=3;if(t>0||M!==s-1)c.push(L,I,z),S+=3}l.addGroup(p,S,0),p+=S}function _(b){let y=f,S=new ie,T=new R,x=0,M=b===!0?e:t,E=b===!0?1:-1;for(let I=1;I<=i;I++)h.push(0,v*E,0),d.push(0,E,0),u.push(0.5,0.5),f++;let L=f;for(let I=0;I<=i;I++){let W=I/i*a+o,P=Math.cos(W),X=Math.sin(W);T.x=M*X,T.y=v*E,T.z=M*P,h.push(T.x,T.y,T.z),d.push(0,E,0),S.x=P*0.5+0.5,S.y=X*0.5*E+0.5,u.push(S.x,S.y),f++}for(let I=0;I<i;I++){let z=y+I,W=L+I;if(b===!0)c.push(W,W+1,z);else c.push(W+1,W,z);x+=3}l.addGroup(p,x,b===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qt extends Nt{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Qt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Go extends gt{constructor(e=[],t=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],r=[];if(o(i),l(n),c(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function o(g){let _=new R,b=new R,y=new R;for(let S=0;S<t.length;S+=3)u(t[S+0],_),u(t[S+1],b),u(t[S+2],y),a(_,b,y,g)}function a(g,_,b,y){let S=y+1,T=[];for(let x=0;x<=S;x++){T[x]=[];let M=g.clone().lerp(b,x/S),E=_.clone().lerp(b,x/S),L=S-x;for(let I=0;I<=L;I++)if(I===0&&x===S)T[x][I]=M;else T[x][I]=M.clone().lerp(E,I/L)}for(let x=0;x<S;x++)for(let M=0;M<2*(S-x)-1;M++){let E=Math.floor(M/2);if(M%2===0)d(T[x][E+1]),d(T[x+1][E]),d(T[x][E]);else d(T[x][E+1]),d(T[x+1][E+1]),d(T[x+1][E])}}function l(g){let _=new R;for(let b=0;b<s.length;b+=3)_.x=s[b+0],_.y=s[b+1],_.z=s[b+2],_.normalize().multiplyScalar(g),s[b+0]=_.x,s[b+1]=_.y,s[b+2]=_.z}function c(){let g=new R;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];let b=v(g)/2/Math.PI+0.5,y=p(g)/Math.PI+0.5;r.push(b,1-y)}f(),h()}function h(){for(let g=0;g<r.length;g+=6){let _=r[g+0],b=r[g+2],y=r[g+4],S=Math.max(_,b,y),T=Math.min(_,b,y);if(S>0.9&&T<0.1){if(_<0.2)r[g+0]+=1;if(b<0.2)r[g+2]+=1;if(y<0.2)r[g+4]+=1}}}function d(g){s.push(g.x,g.y,g.z)}function u(g,_){let b=g*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function f(){let g=new R,_=new R,b=new R,y=new R,S=new ie,T=new ie,x=new ie;for(let M=0,E=0;M<s.length;M+=9,E+=6){g.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),b.set(s[M+6],s[M+7],s[M+8]),S.set(r[E+0],r[E+1]),T.set(r[E+2],r[E+3]),x.set(r[E+4],r[E+5]),y.copy(g).add(_).add(b).divideScalar(3);let L=v(y);m(S,E+0,g,L),m(T,E+2,_,L),m(x,E+4,b,L)}}function m(g,_,b,y){if(y<0&&g.x===1)r[_]=g.x-1;if(b.x===0&&b.z===0)r[_]=y/2/Math.PI+0.5}function v(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.vertices,e.indices,e.radius,e.detail)}}class Yr extends Go{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,r,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yr(e.radius,e.detail)}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,r;if(t)r=t;else r=e*n[s-1];let o=0,a=s-1,l;while(o<=a)if(i=Math.floor(o+(a-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)a=i-1;else{a=i;break}if(i=a,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,u=(r-c)/d;return(i+u)/(s-1)}getTangent(e,t){let i=e-0.0001,s=e+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),o=this.getPoint(s),a=t||(r.isVector2?new ie:new R);return a.copy(o).sub(r).normalize(),a}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],s=[],r=[],o=new R,a=new Je;for(let u=0;u<=e;u++){let f=u/e;i[u]=this.getTangentAt(f,new R)}s[0]=new R,r[0]=new R;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(h<=l)l=h,n.set(0,1,0);if(d<=l)n.set(0,0,1);o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),r[u]=r[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ut(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(a.makeRotationAxis(o,f))}r[u].crossVectors(i[u],s[u])}if(t===!0){let u=Math.acos(ut(s[0].dot(s[e]),-1,1));if(u/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0)u=-u;for(let f=1;f<=e;f++)s[f].applyMatrix4(a.makeRotationAxis(i[f],u*f)),r[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class ko extends hi{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,a=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=a}getPoint(e,t=new ie){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let o=this.aStartAngle+e*s,a=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=a-this.aX,u=l-this.aY;a=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return n.set(a,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zh extends ko{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Gh(){let e=0,t=0,n=0,i=0;function s(r,o,a,l){e=r,t=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return e+t*r+n*o+i*a}}}var Pd=new R,Id=new R,Ac=new Gh,Ec=new Gh,Rc=new Gh;class wi extends hi{constructor(e=[],t=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),a=r-o;if(this.closed)o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s;else if(a===0&&o===s-1)o=s-2,a=1;let l,c;if(this.closed||o>0)l=i[(o-1)%s];else Id.subVectors(i[0],i[1]).add(i[0]),l=Id;let h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s)c=i[(o+2)%s];else Pd.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Pd;if(this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,f=Math.pow(l.distanceToSquared(h),u),m=Math.pow(h.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(c),u);if(m<0.0001)m=1;if(f<0.0001)f=m;if(v<0.0001)v=m;Ac.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,f,m,v),Ec.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,f,m,v),Rc.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,f,m,v)}else if(this.curveType==="catmullrom")Ac.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),Ec.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),Rc.initCatmullRom(l.z,h.z,d.z,c.z,this.tension);return n.set(Ac.calc(a),Ec.calc(a),Rc.calc(a)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ld(e,t,n,i,s){let r=(i-t)*0.5,o=(s-n)*0.5,a=e*e,l=e*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*e+n}function lg(e,t){let n=1-e;return n*n*t}function cg(e,t){return 2*(1-e)*e*t}function hg(e,t){return e*e*t}function vo(e,t,n,i){return lg(e,t)+cg(e,n)+hg(e,i)}function ug(e,t){let n=1-e;return n*n*n*t}function dg(e,t){let n=1-e;return 3*n*n*e*t}function fg(e,t){return 3*(1-e)*e*e*t}function pg(e,t){return e*e*e*t}function yo(e,t,n,i,s){return ug(e,t)+dg(e,n)+fg(e,i)+pg(e,s)}class ul extends hi{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){let n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(yo(e,i.x,s.x,r.x,o.x),yo(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kh extends hi{constructor(e=new R,t=new R,n=new R,i=new R){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(yo(e,i.x,s.x,r.x,o.x),yo(e,i.y,s.y,r.y,o.y),yo(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dl extends hi{constructor(e=new ie,t=new ie){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;if(e===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1);return n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hh extends hi{constructor(e=new R,t=new R){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;if(e===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1);return n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fl extends hi{constructor(e=new ie,t=new ie,n=new ie){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(vo(e,i.x,s.x,r.x),vo(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pl extends hi{constructor(e=new R,t=new R,n=new R){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(vo(e,i.x,s.x,r.x),vo(e,i.y,s.y,r.y),vo(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ml extends hi{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,a=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(Ld(o,a.x,l.x,c.x,h.x),Ld(o,a.y,l.y,c.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var Ha=Object.freeze({__proto__:null,ArcCurve:zh,CatmullRomCurve3:wi,CubicBezierCurve:ul,CubicBezierCurve3:kh,EllipseCurve:ko,LineCurve:dl,LineCurve3:Hh,QuadraticBezierCurve:fl,QuadraticBezierCurve3:pl,SplineCurve:ml});class Vh extends hi{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ha[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,o=this.curves[s],a=o.getLength(),l=a===0?0:1-r/a;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));if(this.autoClose)t.push(t[0]);return t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,a=r.getPoints(o);for(let l=0;l<a.length;l++){let c=a[l];if(n&&n.equals(c))continue;t.push(c),n=c}}if(this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0]))t.push(t[0]);return t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ha[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Va extends Vh{constructor(e){super();if(this.type="Path",this.currentPoint=new ie,e)this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new dl(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new fl(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){let o=new ul(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ml(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){let o=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(e+o,t+a,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,n,i,s,r,o,a),this}absellipse(e,t,n,i,s,r,o,a){let l=new ko(e,t,n,i,s,r,o,a);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $s extends Va{constructor(e){super(e);this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Va().fromJSON(i))}return this}}function mg(e,t,n=2){let i=t&&t.length,s=i?t[0]*n:e.length,r=qf(e,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i)r=_g(e,t,r,n);if(e.length>80*n){a=e[0],l=e[1];let h=a,d=l;for(let u=n;u<s;u+=n){let f=e[u],m=e[u+1];if(f<a)a=f;if(m<l)l=m;if(f>h)h=f;if(m>d)d=m}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return bo(r,o,n,a,l,c,0),o}function qf(e,t,n,i,s){let r;if(s===Ig(e,t,n,i)>0)for(let o=t;o<n;o+=i)r=Dd(o/i|0,e[o],e[o+1],r);else for(let o=n-i;o>=t;o-=i)r=Dd(o/i|0,e[o],e[o+1],r);if(r&&Lr(r,r.next))So(r),r=r.next;return r}function Xs(e,t){if(!e)return e;if(!t)t=e;let n=e,i;do if(i=!1,!n.steiner&&(Lr(n,n.next)||qt(n.prev,n,n.next)===0)){if(So(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function bo(e,t,n,i,s,r,o){if(!e)return;if(!o&&r)Tg(e,i,s,r);let a=e;while(e.prev!==e.next){let l=e.prev,c=e.next;if(r?xg(e,i,s,r):gg(e)){t.push(l.i,e.i,c.i),So(e),e=c.next,a=c.next;continue}if(e=c,e===a){if(!o)bo(Xs(e),t,n,i,s,r,1);else if(o===1)e=vg(Xs(e),t),bo(e,t,n,i,s,r,2);else if(o===2)yg(e,t,n,i,s,r);break}}}function gg(e){let t=e.prev,n=e,i=e.next;if(qt(t,n,i)>=0)return!1;let s=t.x,r=n.x,o=i.x,a=t.y,l=n.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=i.next;while(m!==t){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&po(s,a,r,l,o,c,m.x,m.y)&&qt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xg(e,t,n,i){let s=e.prev,r=e,o=e.next;if(qt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),v=Math.max(a,l,c),p=Math.max(h,d,u),g=Lc(f,m,t,n,i),_=Lc(v,p,t,n,i),{prevZ:b,nextZ:y}=e;while(b&&b.z>=g&&y&&y.z<=_){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&po(a,h,l,d,c,u,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;if(b=b.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&po(a,h,l,d,c,u,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}while(b&&b.z>=g){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=p&&b!==s&&b!==o&&po(a,h,l,d,c,u,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}while(y&&y.z<=_){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&po(a,h,l,d,c,u,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function vg(e,t){let n=e;do{let i=n.prev,s=n.next.next;if(!Lr(i,s)&&Kf(i,n,n.next,s)&&Mo(i,s)&&Mo(s,i))t.push(i.i,n.i,s.i),So(n),So(n.next),n=e=s;n=n.next}while(n!==e);return Xs(n)}function yg(e,t,n,i,s,r){let o=e;do{let a=o.next.next;while(a!==o.prev){if(o.i!==a.i&&Rg(o,a)){let l=Zf(o,a);o=Xs(o,o.next),l=Xs(l,l.next),bo(o,t,n,i,s,r,0),bo(l,t,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==e)}function _g(e,t,n,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:e.length,c=qf(e,a,l,i,!1);if(c===c.next)c.steiner=!0;s.push(Eg(c))}s.sort(bg);for(let r=0;r<s.length;r++)n=Mg(s[r],n);return n}function bg(e,t){let n=e.x-t.x;if(n===0){if(n=e.y-t.y,n===0){let i=(e.next.y-e.y)/(e.next.x-e.x),s=(t.next.y-t.y)/(t.next.x-t.x);n=i-s}}return n}function Mg(e,t){let n=Sg(e,t);if(!n)return t;let i=Zf(n,e);return Xs(i,i.next),Xs(n,n.next)}function Sg(e,t){let n=t,{x:i,y:s}=e,r=-1/0,o;if(Lr(e,n))return n;do{if(Lr(e,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r){if(r=d,o=n.x<n.next.x?n:n.next,d===i)return o}}n=n.next}while(n!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Yf(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);if(Mo(n,e)&&(d<h||d===h&&(n.x>o.x||n.x===o.x&&wg(o,n))))o=n,h=d}n=n.next}while(n!==a);return o}function wg(e,t){return qt(e.prev,e,t.prev)<0&&qt(t.next,e,e.next)<0}function Tg(e,t,n,i){let s=e;do{if(s.z===0)s.z=Lc(s.x,s.y,t,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,Ag(s)}function Ag(e){let t,n=1;do{let i=e,s;e=null;let r=null;t=0;while(i){t++;let o=i,a=0;for(let c=0;c<n;c++)if(a++,o=o.nextZ,!o)break;let l=n;while(a>0||l>0&&o){if(a!==0&&(l===0||!o||i.z<=o.z))s=i,i=i.nextZ,a--;else s=o,o=o.nextZ,l--;if(r)r.nextZ=s;else e=s;s.prevZ=r,r=s}i=o}r.nextZ=null,n*=2}while(t>1);return e}function Lc(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Eg(e){let t=e,n=e;do{if(t.x<n.x||t.x===n.x&&t.y<n.y)n=t;t=t.next}while(t!==e);return n}function Yf(e,t,n,i,s,r,o,a){return(s-o)*(t-a)>=(e-o)*(r-a)&&(e-o)*(i-a)>=(n-o)*(t-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function po(e,t,n,i,s,r,o,a){return!(e===o&&t===a)&&Yf(e,t,n,i,s,r,o,a)}function Rg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Cg(e,t)&&(Mo(e,t)&&Mo(t,e)&&Pg(e,t)&&(qt(e.prev,e,t.prev)||qt(e,t.prev,t))||Lr(e,t)&&qt(e.prev,e,e.next)>0&&qt(t.prev,t,t.next)>0)}function qt(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Lr(e,t){return e.x===t.x&&e.y===t.y}function Kf(e,t,n,i){let s=Ua(qt(e,t,n)),r=Ua(qt(e,t,i)),o=Ua(qt(n,i,e)),a=Ua(qt(n,i,t));if(s!==r&&o!==a)return!0;if(s===0&&Fa(e,n,t))return!0;if(r===0&&Fa(e,i,t))return!0;if(o===0&&Fa(n,e,i))return!0;if(a===0&&Fa(n,t,i))return!0;return!1}function Fa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ua(e){return e>0?1:e<0?-1:0}function Cg(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Kf(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Mo(e,t){return qt(e.prev,e,e.next)<0?qt(e,t,e.next)>=0&&qt(e,e.prev,t)>=0:qt(e,t,e.prev)<0||qt(e,e.next,t)<0}function Pg(e,t){let n=e,i=!1,s=(e.x+t.x)/2,r=(e.y+t.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==e);return i}function Zf(e,t){let n=Dc(e.i,e.x,e.y),i=Dc(t.i,t.x,t.y),s=e.next,r=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Dd(e,t,n,i){let s=Dc(e,t,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function So(e){if(e.next.prev=e.prev,e.prev.next=e.next,e.prevZ)e.prevZ.nextZ=e.nextZ;if(e.nextZ)e.nextZ.prevZ=e.prevZ}function Dc(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ig(e,t,n,i){let s=0;for(let r=t,o=n-i;r<n;r+=i)s+=(e[o]-e[r])*(e[r+1]+e[o+1]),o=r;return s}class jf{static triangulate(e,t,n=2){return mg(e,t,n)}}class ks{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*0.5}static isClockWise(e){return ks.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Nd(e),Od(n,e);let r=e.length;t.forEach(Nd);for(let a=0;a<t.length;a++)i.push(r),r+=t[a].length,Od(n,t[a]);let o=jf.triangulate(n,i);for(let a=0;a<o.length;a+=3)s.push(o.slice(a,a+3));return s}}function Nd(e){let t=e.length;if(t>2&&e[t-1].equals(e[0]))e.pop()}function Od(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class er extends gt{constructor(e=new $s([new ie(0.5,0.5),new ie(-0.5,0.5),new ie(-0.5,-0.5),new ie(0.5,-0.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,a=e.length;o<a;o++){let l=e[o];r(l)}this.setAttribute("position",new Ge(i,3)),this.setAttribute("uv",new Ge(s,2)),this.computeVertexNormals();function r(o){let a=[],l=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:0.2,f=t.bevelSize!==void 0?t.bevelSize:u-0.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Lg,_,b=!1,y,S,T,x;if(p){_=p.getSpacedPoints(c),b=!0,d=!1;let se=p.isCatmullRomCurve3?p.closed:!1;y=p.computeFrenetFrames(c,se),S=new R,T=new R,x=new R}if(!d)v=0,u=0,f=0,m=0;let M=o.extractPoints(l),{shape:E,holes:L}=M;if(!ks.isClockWise(E)){E=E.reverse();for(let se=0,ge=L.length;se<ge;se++){let ve=L[se];if(ks.isClockWise(ve))L[se]=ve.reverse()}}function z(se){let Le=se[0];for(let Ie=1;Ie<=se.length;Ie++){let Xe=Ie%se.length,ke=se[Xe],ce=ke.x-Le.x,Pe=ke.y-Le.y,qe=ce*ce+Pe*Pe,N=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(Le.x),Math.abs(Le.y)),vt=0.000000000000000000010000000000000001*N*N;if(qe<=vt){se.splice(Xe,1),Ie--;continue}Le=ke}}z(E),L.forEach(z);let W=L.length,P=E;for(let se=0;se<W;se++){let ge=L[se];E=E.concat(ge)}function X(se,ge,ve){if(!ge)it("ExtrudeGeometry: vec does not exist");return se.clone().addScaledVector(ge,ve)}let G=E.length;function F(se,ge,ve){let Le,Ie,Xe,ke=se.x-ge.x,ce=se.y-ge.y,Pe=ve.x-se.x,qe=ve.y-se.y,N=ke*ke+ce*ce,vt=ke*qe-ce*Pe;if(Math.abs(vt)>Number.EPSILON){let Ke=Math.sqrt(N),Mt=Math.sqrt(Pe*Pe+qe*qe),be=ge.x-ce/Ke,yt=ge.y+ke/Ke,et=ve.x-qe/Mt,Ye=ve.y+Pe/Mt,St=((et-be)*qe-(Ye-yt)*Pe)/(ke*qe-ce*Pe);Le=be+ke*St-se.x,Ie=yt+ce*St-se.y;let C=Le*Le+Ie*Ie;if(C<=2)return new ie(Le,Ie);else Xe=Math.sqrt(C/2)}else{let Ke=!1;if(ke>Number.EPSILON){if(Pe>Number.EPSILON)Ke=!0}else if(ke<-Number.EPSILON){if(Pe<-Number.EPSILON)Ke=!0}else if(Math.sign(ce)===Math.sign(qe))Ke=!0;if(Ke)Le=-ce,Ie=ke,Xe=Math.sqrt(N);else Le=ke,Ie=ce,Xe=Math.sqrt(N/2)}return new ie(Le/Xe,Ie/Xe)}let K=[];for(let se=0,ge=P.length,ve=ge-1,Le=se+1;se<ge;se++,ve++,Le++){if(ve===ge)ve=0;if(Le===ge)Le=0;K[se]=F(P[se],P[ve],P[Le])}let q=[],H,Z=K.concat();for(let se=0,ge=W;se<ge;se++){let ve=L[se];H=[];for(let Le=0,Ie=ve.length,Xe=Ie-1,ke=Le+1;Le<Ie;Le++,Xe++,ke++){if(Xe===Ie)Xe=0;if(ke===Ie)ke=0;H[Le]=F(ve[Le],ve[Xe],ve[ke])}q.push(H),Z=Z.concat(H)}let ee;if(v===0)ee=ks.triangulateShape(P,L);else{let se=[],ge=[];for(let ve=0;ve<v;ve++){let Le=ve/v,Ie=u*Math.cos(Le*Math.PI/2),Xe=f*Math.sin(Le*Math.PI/2)+m;for(let ke=0,ce=P.length;ke<ce;ke++){let Pe=X(P[ke],K[ke],Xe);if(Ce(Pe.x,Pe.y,-Ie),Le===0)se.push(Pe)}for(let ke=0,ce=W;ke<ce;ke++){let Pe=L[ke];H=q[ke];let qe=[];for(let N=0,vt=Pe.length;N<vt;N++){let Ke=X(Pe[N],H[N],Xe);if(Ce(Ke.x,Ke.y,-Ie),Le===0)qe.push(Ke)}if(Le===0)ge.push(qe)}}ee=ks.triangulateShape(se,ge)}let J=ee.length,ae=f+m;for(let se=0;se<G;se++){let ge=d?X(E[se],Z[se],ae):E[se];if(!b)Ce(ge.x,ge.y,0);else T.copy(y.normals[0]).multiplyScalar(ge.x),S.copy(y.binormals[0]).multiplyScalar(ge.y),x.copy(_[0]).add(T).add(S),Ce(x.x,x.y,x.z)}for(let se=1;se<=c;se++)for(let ge=0;ge<G;ge++){let ve=d?X(E[ge],Z[ge],ae):E[ge];if(!b)Ce(ve.x,ve.y,h/c*se);else T.copy(y.normals[se]).multiplyScalar(ve.x),S.copy(y.binormals[se]).multiplyScalar(ve.y),x.copy(_[se]).add(T).add(S),Ce(x.x,x.y,x.z)}for(let se=v-1;se>=0;se--){let ge=se/v,ve=u*Math.cos(ge*Math.PI/2),Le=f*Math.sin(ge*Math.PI/2)+m;for(let Ie=0,Xe=P.length;Ie<Xe;Ie++){let ke=X(P[Ie],K[Ie],Le);Ce(ke.x,ke.y,h+ve)}for(let Ie=0,Xe=L.length;Ie<Xe;Ie++){let ke=L[Ie];H=q[Ie];for(let ce=0,Pe=ke.length;ce<Pe;ce++){let qe=X(ke[ce],H[ce],Le);if(!b)Ce(qe.x,qe.y,h+ve);else Ce(qe.x,qe.y+_[c-1].y,_[c-1].x+ve)}}}Ae(),Ne();function Ae(){let se=i.length/3;if(d){let ge=0,ve=G*ge;for(let Le=0;Le<J;Le++){let Ie=ee[Le];lt(Ie[2]+ve,Ie[1]+ve,Ie[0]+ve)}ge=c+v*2,ve=G*ge;for(let Le=0;Le<J;Le++){let Ie=ee[Le];lt(Ie[0]+ve,Ie[1]+ve,Ie[2]+ve)}}else{for(let ge=0;ge<J;ge++){let ve=ee[ge];lt(ve[2],ve[1],ve[0])}for(let ge=0;ge<J;ge++){let ve=ee[ge];lt(ve[0]+G*c,ve[1]+G*c,ve[2]+G*c)}}n.addGroup(se,i.length/3-se,0)}function Ne(){let se=i.length/3,ge=0;Oe(P,ge),ge+=P.length;for(let ve=0,Le=L.length;ve<Le;ve++){let Ie=L[ve];Oe(Ie,ge),ge+=Ie.length}n.addGroup(se,i.length/3-se,1)}function Oe(se,ge){let ve=se.length;while(--ve>=0){let Le=ve,Ie=ve-1;if(Ie<0)Ie=se.length-1;for(let Xe=0,ke=c+v*2;Xe<ke;Xe++){let ce=G*Xe,Pe=G*(Xe+1),qe=ge+Le+ce,N=ge+Ie+ce,vt=ge+Ie+Pe,Ke=ge+Le+Pe;He(qe,N,vt,Ke)}}}function Ce(se,ge,ve){a.push(se),a.push(ge),a.push(ve)}function lt(se,ge,ve){ze(se),ze(ge),ze(ve);let Le=i.length/3,Ie=g.generateTopUV(n,i,Le-3,Le-2,Le-1);ot(Ie[0]),ot(Ie[1]),ot(Ie[2])}function He(se,ge,ve,Le){ze(se),ze(ge),ze(Le),ze(ge),ze(ve),ze(Le);let Ie=i.length/3,Xe=g.generateSideWallUV(n,i,Ie-6,Ie-3,Ie-2,Ie-1);ot(Xe[0]),ot(Xe[1]),ot(Xe[3]),ot(Xe[1]),ot(Xe[2]),ot(Xe[3])}function ze(se){i.push(a[se*3+0]),i.push(a[se*3+1]),i.push(a[se*3+2])}function ot(se){s.push(se.x),s.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dg(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;if(i!==void 0)e.options.extrudePath=new Ha[i.type]().fromJSON(i);return new er(n,e.options)}}var Lg={generateTopUV:function(e,t,n,i,s){let r=t[n*3],o=t[n*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ie(r,o),new ie(a,l),new ie(c,h)]},generateSideWallUV:function(e,t,n,i,s,r){let o=t[n*3],a=t[n*3+1],l=t[n*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],v=t[r*3],p=t[r*3+1],g=t[r*3+2];if(Math.abs(a-h)<Math.abs(o-c))return[new ie(o,1-l),new ie(c,1-d),new ie(u,1-m),new ie(v,1-g)];else return[new ie(a,1-l),new ie(h,1-d),new ie(f,1-m),new ie(p,1-g)]}};function Dg(e,t,n){if(n.shapes=[],Array.isArray(e))for(let i=0,s=e.length;i<s;i++){let r=e[i];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);if(n.options=Object.assign({},t),t.extrudePath!==void 0)n.options.extrudePath=t.extrudePath.toJSON();return n}class ws extends gt{constructor(e=[new ie(0,-0.5),new ie(0.5,0),new ie(0,0.5)],t=12,n=0,i=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ut(i,0,Math.PI*2);let s=[],r=[],o=[],a=[],l=[],c=1/t,h=new R,d=new ie,u=new R,f=new R,m=new R,v=0,p=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:v=e[g+1].x-e[g].x,p=e[g+1].y-e[g].y,u.x=p*1,u.y=-v,u.z=p*0,m.copy(u),u.normalize(),a.push(u.x,u.y,u.z);break;case e.length-1:m.normalize(),a.push(m.x,m.y,m.z);break;default:v=e[g+1].x-e[g].x,p=e[g+1].y-e[g].y,u.x=p*1,u.y=-v,u.z=p*0,f.copy(u),u.x+=m.x,u.y+=m.y,u.z+=m.z,u.normalize(),a.push(u.x,u.y,u.z),m.copy(f)}for(let g=0;g<=t;g++){let _=n+g*c*i,b=Math.sin(_),y=Math.cos(_);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*b,h.y=e[S].y,h.z=e[S].x*y,r.push(h.x,h.y,h.z),d.x=g/t,d.y=S/(e.length-1),o.push(d.x,d.y);let T=a[3*S+0]*b,x=a[3*S+1],M=a[3*S+0]*y;l.push(T,x,M)}}for(let g=0;g<t;g++)for(let _=0;_<e.length-1;_++){let b=_+g*e.length,y=b,S=b+e.length,T=b+e.length+1,x=b+1;s.push(y,S,x),s.push(T,x,S)}this.setIndex(s),this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.points,e.segments,e.phiStart,e.phiLength)}}class vn extends Go{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t);this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vn(e.radius,e.detail)}}class rn extends gt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,o=Math.floor(n),a=Math.floor(i),l=o+1,c=a+1,h=e/o,d=t/a,u=[],f=[],m=[],v=[];for(let p=0;p<c;p++){let g=p*d-r;for(let _=0;_<l;_++){let b=_*h-s;f.push(b,-g,0),m.push(0,0,1),v.push(_/o),v.push(1-p/a)}}for(let p=0;p<a;p++)for(let g=0;g<o;g++){let _=g+l*p,b=g+l*(p+1),y=g+1+l*(p+1),S=g+1+l*p;u.push(_,b,S),u.push(b,y,S)}this.setIndex(u),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ho extends gt{constructor(e=0.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],a=[],l=[],c=[],h=e,d=(t-e)/i,u=new R,f=new ie;for(let m=0;m<=i;m++){for(let v=0;v<=n;v++){let p=s+v/n*r;u.x=h*Math.cos(p),u.y=h*Math.sin(p),a.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(u.x/t+1)/2,f.y=(u.y/t+1)/2,c.push(f.x,f.y)}h+=d}for(let m=0;m<i;m++){let v=m*(n+1);for(let p=0;p<n;p++){let g=p+v,_=g,b=g+n+1,y=g+n+2,S=g+1;o.push(_,b,S),o.push(b,y,S)}}this.setIndex(o),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ut extends gt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let a=Math.min(r+o,Math.PI),l=0,c=[],h=new R,d=new R,u=[],f=[],m=[],v=[];for(let p=0;p<=n;p++){let g=[],_=p/n,b=r+_*o,y=e*Math.cos(b),S=Math.sqrt(e*e-y*y),T=0;if(p===0&&r===0)T=0.5/t;else if(p===n&&a===Math.PI)T=-0.5/t;for(let x=0;x<=t;x++){let M=x/t,E=i+M*s;h.x=-S*Math.cos(E),h.y=y,h.z=S*Math.sin(E),f.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),v.push(M+T,1-_),g.push(l++)}c.push(g)}for(let p=0;p<n;p++)for(let g=0;g<t;g++){let _=c[p][g+1],b=c[p][g],y=c[p+1][g],S=c[p+1][g+1];if(p!==0||r>0)u.push(_,b,S);if(p!==n-1||a<Math.PI)u.push(b,y,S)}this.setIndex(u),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $e extends gt{constructor(e=1,t=0.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],d=new R,u=new R,f=new R;for(let m=0;m<=n;m++){let v=r+m/n*o;for(let p=0;p<=i;p++){let g=p/i*s;u.x=(e+t*Math.cos(v))*Math.cos(g),u.y=(e+t*Math.cos(v))*Math.sin(g),u.z=t*Math.sin(v),l.push(u.x,u.y,u.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(p/i),h.push(m/n)}}for(let m=1;m<=n;m++)for(let v=1;v<=i;v++){let p=(i+1)*m+v-1,g=(i+1)*(m-1)+v-1,_=(i+1)*(m-1)+v,b=(i+1)*m+v;a.push(p,g,b),a.push(g,_,b)}this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $e(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Ti extends gt{constructor(e=new pl(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,s=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new R,a=new R,l=new ie,c=new R,h=[],d=[],u=[],f=[];m(),this.setIndex(f),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(u,2));function m(){for(let _=0;_<t;_++)v(_);v(s===!1?t:0),g(),p()}function v(_){c=e.getPointAt(_/t,c);let b=r.normals[_],y=r.binormals[_];for(let S=0;S<=i;S++){let T=S/i*Math.PI*2,x=Math.sin(T),M=-Math.cos(T);a.x=M*b.x+x*y.x,a.y=M*b.y+x*y.y,a.z=M*b.z+x*y.z,a.normalize(),d.push(a.x,a.y,a.z),o.x=c.x+n*a.x,o.y=c.y+n*a.y,o.z=c.z+n*a.z,h.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let b=1;b<=i;b++){let y=(i+1)*(_-1)+(b-1),S=(i+1)*_+(b-1),T=(i+1)*_+b,x=(i+1)*(_-1)+b;f.push(y,S,x),f.push(S,T,x)}}function g(){for(let _=0;_<=t;_++)for(let b=0;b<=i;b++)l.x=_/t,l.y=b/i,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ti(new Ha[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function tr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(Fd(s))if(s.isRenderTargetTexture)je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))if(Fd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Rn(e){let t={};for(let n=0;n<e.length;n++){let i=tr(e[n]);for(let s in i)t[s]=i[s]}return t}function Fd(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ng(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Wh(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return dt.workingColorSpace}var ei={clone:tr,merge:Rn},Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class At extends $n{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=Fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Y().setHex(i.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new at().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class Vo extends At{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ti extends $n{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gt extends ti{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+0.4*t)/(1-0.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Y(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Y(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Y(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){if(this._anisotropy>0!==e>0)this.version++;this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){if(this._clearcoat>0!==e>0)this.version++;this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){if(this._diffuseRoughness>0!==e>0)this.version++;this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){if(this._iridescence>0!==e>0)this.version++;this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){if(this._dispersion>0!==e>0)this.version++;this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){if(this._retroreflectivity>0!==e>0)this.version++;this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){if(this._sheen>0!==e>0)this.version++;this._sheen=e}get transmission(){return this._transmission}set transmission(e){if(this._transmission>0!==e>0)this.version++;this._transmission=e}get iridescenceThicknessRange(){return Hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xh extends $n{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qh extends $n{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ps(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function mo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Ug(e){function t(s,r){return e[s]-e[r]}let n=e.length,i=Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(t),i}function Ud(e,t,n){let i=e.length,s=new e.constructor(i);for(let r=0,o=0;o!==i;++r){let a=n[r]*t;for(let l=0;l!==t;++l)s[o++]=e[a+l]}return s}function Bg(e,t,n,i){let s=1,r=e[0];while(r!==void 0&&r[i]===void 0)r=e[s++];if(r===void 0)return;let o=r[i];if(o===void 0)return;if(Array.isArray(o))do{if(o=r[i],o!==void 0)t.push(r.time),n.push(...o);r=e[s++]}while(r!==void 0);else if(o.toArray!==void 0)do{if(o=r[i],o!==void 0)t.push(r.time),o.toArray(n,n.length);r=e[s++]}while(r!==void 0);else do{if(o=r[i],o!==void 0)t.push(r.time),n.push(o);r=e[s++]}while(r!==void 0)}class Qi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){let o=t[1];if(e<o)n=2,s=o;for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}while(n<r){let o=n+r>>>1;if(e<t[o])r=o;else n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Yh extends Qi{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-n;break;case 2402:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,a=2*n-t;break;case 2402:r=1,a=n+i[1]-i[0];break;default:r=e-1,a=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(n-t)/(i-t),m=f*f,v=m*f,p=-d*v+2*d*m-d*f,g=(1+d)*v+(-1.5-2*d)*m+(-0.5+d)*f+1,_=(-1-u)*v+(1.5+u)*m+0.5*f,b=u*v-u*m;for(let y=0;y!==o;++y)s[y]=p*r[c+y]+g*r[l+y]+_*r[a+y]+b*r[h+y];return s}}class gl extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(n-t)/(i-t),h=1-c;for(let d=0;d!==o;++d)s[d]=r[l+d]*h+r[a+d]*c;return s}}class Kh extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zh extends Qi{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,h=this.outTangents;if(!c||!h){let f=(n-t)/(i-t),m=1-f;for(let v=0;v!==o;++v)s[v]=r[l+v]*m+r[a+v]*f;return s}let d=o*2,u=e-1;for(let f=0;f!==o;++f){let m=r[l+f],v=r[a+f],p=u*d+f*2,g=h[p],_=h[p+1],b=e*d+f*2,y=c[b],S=c[b+1],T=Gg(n,t,g,y,i);s[f]=Jf(T,m,_,S,v)}return s}}function Jf(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function zg(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function Gg(e,t,n,i,s){let r=(e-t)/(s-t);for(let o=0;o<8;o++){let a=Jf(r,t,n,i,s)-e;if(Math.abs(a)<0.0000000001)break;let l=zg(r,t,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class ni{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ps(t,this.TimeBufferType),this.values=ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ps(e.times,Array),values:ps(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i;if(mo(e.settings))n.settings={inTangents:ps(e.settings.inTangents,Array),outTangents:ps(e.settings.outTangents,Array)}}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zh(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;if(mo(this.settings))Bd(this.settings.inTangents,e),Bd(this.settings.outTangents,e)}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;if(mo(this.settings))zd(this.settings.inTangents,e),zd(this.settings.outTangents,e)}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)it("KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)it("KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let o=0;o!==s;o++){let a=n[o];if(typeof a==="number"&&isNaN(a)){it("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){it("KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(i!==void 0){if(Tm(i))for(let o=0,a=i.length;o!==a;++o){let l=i[o];if(isNaN(l)){it("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let o=1;o<s;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!i){let h=o*n,d=h-n,u=h+n;for(let f=0;f!==n;++f){let m=t[h+f];if(m!==t[d+f]||m!==t[u+f]){a=!0;break}}}else a=!0;if(a){if(o!==r){e[r]=e[o];let h=o*n,d=r*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,a=r*n,l=0;l!==n;++l)t[a+l]=t[o+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);if(i.createInterpolant=this.createInterpolant,mo(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Bd(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function zd(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=2301;class Ts extends ni{constructor(e,t,n){super(e,t,n)}}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=2300;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class xl extends ni{constructor(e,t,n,i){super(e,t,n,i)}}xl.prototype.ValueTypeName="color";class As extends ni{constructor(e,t,n,i){super(e,t,n,i)}}As.prototype.ValueTypeName="number";class jh extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t),l=e*o;for(let c=l+o;l!==c;l+=4)jt.slerpFlat(s,0,r,l-o,r,l,a);return s}}class Es extends ni{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new jh(this.times,this.values,this.getValueSize(),e)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends ni{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=2300;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends ni{constructor(e,t,n,i){super(e,t,n,i)}}nr.prototype.ValueTypeName="vector";class Dr{constructor(e="",t=-1,n=[],i=2500){if(this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Si(),this.userData={},this.duration<0)this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Hg(n[r]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(ni.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,r=[];for(let o=0;o<s;o++){let a=[],l=[];a.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let c=Ug(a);if(a=Ud(a,1,c),l=Ud(l,1,c),!i&&a[0]===0)a.push(s),l.push(l[0]);r.push(new As(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.name.match(s);if(c&&c.length>1){let h=c[1],d=i[h];if(!d)i[h]=d=[];d.push(l)}}let r=[];for(let o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function kg(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return xl;case"quaternion":return Es;case"bool":case"boolean":return Ts;case"string":return Rs}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Hg(e){if(e.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=kg(e.type);if(e.times===void 0){let i=[],s=[];Bg(e.keys,i,s,"value"),e.times=i,e.values=s}let n;if(t.parse!==void 0)n=t.parse(e);else n=new t(e.name,e.times,e.values,e.interpolation);if(mo(e.settings))n.settings={inTangents:ps(e.settings.inTangents,Float32Array),outTangents:ps(e.settings.outTangents,Float32Array)};return n}var Ii={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(Gd(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(Gd(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Gd(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}class Jh{constructor(e,t,n){let i=this,s=!1,r=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){if(o++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,o)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,o);if(r===o){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],f=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var Qf=new Jh;class $i{constructor(e){if(this.manager=e!==void 0?e:Qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi={};class $f extends Error{constructor(e,t){super(e);this.response=t}}class Wo extends $i{constructor(e){super(e);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let s=Ii.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{if(t)t(s);this.manager.itemEnd(e)},0);return}if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:n,onError:i});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:n,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,a=this.responseType;fetch(r).then((l)=>{if(l.status===200||l.status===0){if(l.status===0)je("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=qi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,f=u!==0,m=0,v=new ReadableStream({start(p){g();function g(){h.read().then(({done:_,value:b})=>{if(_)p.close();else{m+=b.byteLength;let y=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:u});for(let S=0,T=c.length;S<T;S++){let x=c[S];if(x.onProgress)x.onProgress(y)}p.enqueue(b),g()}},(_)=>{p.error(_)})}}});return new Response(v)}else throw new $f(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((c)=>new DOMParser().parseFromString(c,o));case"json":return l.json();default:if(o==="")return l.text();else{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(d);return l.arrayBuffer().then((f)=>u.decode(f))}}}).then((l)=>{Ii.add(`file:${e}`,l);let c=qi[e];delete qi[e];for(let h=0,d=c.length;h<d;h++){let u=c[h];if(u.onLoad)u.onLoad(l)}}).catch((l)=>{let c=qi[e];if(c===void 0)throw this.manager.itemError(e),l;delete qi[e];for(let h=0,d=c.length;h<d;h++){let u=c[h];if(u.onError)u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Ar=new WeakMap;class Qh extends $i{constructor(e){super(e)}load(e,t,n,i){if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let s=this,r=Ii.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){if(t)t(r);s.manager.itemEnd(e)},0);else{let h=Ar.get(r);if(h===void 0)h=[],Ar.set(r,h);h.push({onLoad:t,onError:i})}return r}let o=Pr("img");function a(){if(c(),t)t(this);let h=Ar.get(this)||[];for(let d=0;d<h.length;d++){let u=h[d];if(u.onLoad)u.onLoad(this)}Ar.delete(this),s.manager.itemEnd(e)}function l(h){if(c(),i)i(h);Ii.remove(`image:${e}`);let d=Ar.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];if(f.onError)f.onError(h)}Ar.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}if(o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)o.crossOrigin=this.crossOrigin}return Ii.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class Kr extends $i{constructor(e){super(e)}load(e,t,n,i){let s=new Wt,r=new Qh(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){if(s.image=o,s.needsUpdate=!0,t!==void 0)t(s)},n,i),s}}class Zr extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new Y(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class jr extends Zr{constructor(e,t,n){super(e,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}var Cc=new Je,kd=new R,Hd=new R;class Xo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(kd),Hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Cc,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,a=i?i.x/s.x:0,l=i?i.y/s.y:0;if(e.coordinateSystem===2001||e.reversedDepth)t.set(0.5*r,0,0,0.5*r+a,0,0.5*o,0,0.5*o+l,0,0,1,0,0,0,0,1);else t.set(0.5*r,0,0,0.5*r+a,0,0.5*o,0,0.5*o+l,0,0,0.5,0.5,0,0,0,1);t.multiply(Cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}var Ba=new R,za=new jt,Pi=new R;class vl extends Ht{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(Ba,za,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ba,za,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){if(super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ba,za,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(Ba,za,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var fs=new R,Vd=new ie,Wd=new ie;class Zt extends vl{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(go*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(go*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,Wd),t.subVectors(Wd,Vd)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(go*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=r;s+=r.offsetX*i/a,t-=r.offsetY*n/l,i*=r.width/a,n*=r.height/l}let o=this.filmOffset;if(o!==0)s+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ep extends Xo{constructor(){super(new Zt(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;if(n!==t.fov||i!==t.aspect||s!==t.far)t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix();super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class yl extends Zr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new ep}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);if(t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture)t.object.map=this.map.toJSON(e).uuid;return t.object.shadow=this.shadow.toJSON(),t}}class tp extends Xo{constructor(){super(new Zt(90,1,0.5,500));this.isPointLightShadow=!0}}class _l extends Zr{constructor(e,t,n=0,i=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Cs extends vl{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class np extends Xo{constructor(){super(new Cs(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Cn extends Zr{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new np}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ps{static extractUrlBase(e){let t=e.lastIndexOf("/");if(t===-1)return"./";return e.slice(0,t+1)}static resolveURL(e,t){if(typeof e!=="string"||e==="")return"";if(/^https?:\/\//i.test(t)&&/^\//.test(e))t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(e))return e;if(/^data:.*,.*$/i.test(e))return e;if(/^blob:.*$/i.test(e))return e;return t+e}}class Jr extends gt{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}var Pc=new WeakMap;class bl extends $i{constructor(e){super(e);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")je("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")je("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){if(e===void 0)e="";if(this.path!==void 0)e=this.path+e;e=this.manager.resolveURL(e);let s=this,r=Ii.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then((l)=>{if(Pc.has(r)===!0){if(i)i(Pc.get(r));s.manager.itemError(e),s.manager.itemEnd(e)}else{if(t)t(l);s.manager.itemEnd(e)}});return}setTimeout(function(){if(t)t(r);s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let a=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){if(Ii.add(`image-bitmap:${e}`,l),t)t(l);return s.manager.itemEnd(e),l}).catch(function(l){if(i)i(l);Pc.set(a,l),Ii.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ii.add(`image-bitmap:${e}`,a),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Er=-90,Rr=1;class qo extends Ht{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Zt(Er,Rr,e,t);i.layers=this.layers,this.add(i);let s=new Zt(Er,Rr,e,t);s.layers=this.layers,this.add(s);let r=new Zt(Er,Rr,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Er,Rr,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Er,Rr,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Er,Rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,a]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,o,a,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let v=!1;if(e.isWebGLRenderer===!0)v=e.state.buffers.depth.getReversed();else v=e.reversedDepthBuffer;if(e.setRenderTarget(n,0,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(n,1,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(n,2,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(n,3,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(n,4,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,i),v&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(h,d,u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class $h extends Zt{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Ml{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=Vg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Vg(){if(this._document.hidden===!1)this.reset()}class eu{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let a=t*this._origIndex;this._mixBufferRegion(n,i,a,1-s,t)}if(r>0)this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let a=t,l=t+t;a!==l;++a)if(n[a]!==n[a+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=0.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){jt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let r=this._workIndex*s;jt.multiplyQuaternionsFlat(e,r,e,t,e,n),jt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){let r=1-i;for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){let o=t+r;e[o]=e[o]+e[n+r]*i}}}var tu="\\[\\]\\.:\\/",Wg=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",Xg="[^"+tu.replace("\\.","")+"]",qg=/((?:WC+[\/:])*)/.source.replace("WC",nu),Yg=/(WCOD+)?/.source.replace("WCOD",Xg),Kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),Zg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),jg=new RegExp("^"+qg+Yg+Kg+Zg+"$"),Jg=["material","materials","bones","map"];class ip{constructor(e,t,n){let i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new Et(e,t,n);else return new Et.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wg,"")}static parseTrackName(e){let t=jg.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Jg.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=t;if(!e)e=Et.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;it("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))a=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=ip;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class iu{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,r=s.length,o=Array(r),a={endingStart:2400,endingEnd:2400};for(let l=0;l!==r;++l){let c=s[l].createInterpolant(null);o[l]=c,c.settings=a}this._interpolantSettings=a,this._interpolants=o,this._propertyBindings=Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;if(e!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e);return this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,r=this.timeScale,o=this._timeScaleInterpolant;if(o===null)o=i._lendControlInterpolant(),this._timeScaleInterpolant=o;let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,a[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;if(e!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let a=(e-s)*n;if(a<0||n===0)t=0;else this._startTime=null,t=n*a}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let a=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case 2501:for(let c=0,h=a.length;c!==h;++c)a[c].evaluate(r),l[c].accumulateAdditive(o);break;case 2500:default:for(let c=0,h=a.length;c!==h;++c)a[c].evaluate(r),l[c].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];if(t*=i,e>n.parameterPositions[1]){if(this.stopFading(),i===0)this.enabled=!1}}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];if(t*=i,e>n.parameterPositions[1]){if(t===0)this.paused=!0;else{if(this._restoreTimeScale!==null)t=this._restoreTimeScale;this.timeScale=t}this.stopWarping()}}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,r=n===2202;if(e===0){if(s===-1)return i;return r&&(s&1)===1?t-i:i}if(n===2200){if(s===-1)this._loopCount=0,this._setEndings(!0,!0,!1);e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1)if(e>=0)s=0,this._setEndings(!0,this.repetitions===0,r);else this._setEndings(this.repetitions===0,!0,r);if(i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let a=this.repetitions-s;if(a<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1})}else{if(a===1){let l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;if(n)i.endingStart=2401,i.endingEnd=2401;else{if(e)i.endingStart=this.zeroSlopeAtStart?2401:2400;else i.endingStart=2402;if(t)i.endingEnd=this.zeroSlopeAtEnd?2401:2400;else i.endingEnd=2402}}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,r=this._weightInterpolant;if(r===null)r=i._lendControlInterpolant(),this._weightInterpolant=r;let o=r.parameterPositions,a=r.sampleValues;return o[0]=s,a[0]=t,o[1]=s+e,a[1]=n,this}}var Qg=new Float32Array(1);class Sl extends Mi{constructor(e){super();if(this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,{_propertyBindings:r,_interpolants:o}=e,a=n.uuid,l=this._bindingsByRootAndName,c=l[a];if(c===void 0)c={},l[a]=c;for(let h=0;h!==s;++h){let d=i[h],u=d.name,f=c[u];if(f!==void 0)++f.referenceCount,r[h]=f;else{if(f=r[h],f!==void 0){if(f._cacheIndex===null)++f.referenceCount,this._addInactiveBinding(f,a,u);continue}let m=t&&t._propertyBindings[h].binding.parsedPath;f=new eu(Et.create(n,u,m),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,a,u),r[h]=f}o[h].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];if(s.useCount++===0)this._lendBinding(s),s.saveOriginalState()}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];if(--s.useCount===0)s.restoreOriginalState(),this._takeBackBinding(s)}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,o=r[s],a=o.knownActions,l=a[a.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,a[c]=l,a.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;if(delete h[d],a.length===0)delete r[s];this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];if(--s.referenceCount===0)this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,r=i[t];if(r===void 0)r={},i[t]=r;r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],a=t[t.length-1],l=e._cacheIndex;if(a._cacheIndex=l,t[l]=a,t.pop(),delete o[s],Object.keys(o).length===0)delete r[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];if(n===void 0)n=new gl(new Float32Array(2),new Float32Array(2),1,Qg),n.__cacheIndex=t,e[t]=n;return n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,r=typeof e==="string"?Dr.findByName(i,e):e,o=r!==null?r.uuid:e,a=this._actionsByClip[o],l=null;if(n===void 0)if(r!==null)n=r.blendMode;else n=2500;if(a!==void 0){let h=a.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;if(l=a.knownActions[0],r===null)r=l._clip}if(r===null)return null;let c=new iu(this,r,t,n);return this._bindAction(c,l),this._addInactiveAction(c,o,s),c}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e==="string"?Dr.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];if(o!==void 0)return o.actionByRoot[i]||null;return null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);let o=this._bindings,a=this._nActiveBindings;for(let l=0;l!==a;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let r=s.knownActions;for(let o=0,a=r.length;o!==a;++o){let l=r[o];this._deactivateAction(l);let c=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,t[c]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let o=n[r].actionByRoot,a=o[t];if(a!==void 0)this._deactivateAction(a),this._removeInactiveAction(a)}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let r in s){let o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);if(n!==null)this._deactivateAction(n),this._removeInactiveAction(n)}}var Xd=new Je;class wl{constructor(e,t,n=0,i=1/0){this.ray=new Ji(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){if(t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,0.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xd),this}intersectObject(e,t=!0,n=[]){return Nc(e,this,n,t),n.sort(qd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Nc(e[i],this,n,t);return n.sort(qd),n}}function qd(e,t){return e.distance-t.distance}function Nc(e,t,n,i){let s=!0;if(e.layers.test(t.layers)){if(e.raycast(t,n)===!1)s=!1}if(s===!0&&i===!0){let r=e.children;for(let o=0,a=r.length;o<a;o++)Nc(r[o],t,n,!0)}}class ir{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){if(this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class sp{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}class Tl extends Mi{constructor(e,t=null){super();this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(this.domElement!==null)this.disconnect();this.domElement=e}disconnect(){}dispose(){}update(){}}function su(e,t,n,i){let s=$g(i);switch(n){case 1021:return e*t;case 1028:return e*t/s.components*s.byteLength;case 1029:return e*t/s.components*s.byteLength;case 1030:return e*t*2/s.components*s.byteLength;case 1031:return e*t*2/s.components*s.byteLength;case 1022:return e*t*3/s.components*s.byteLength;case 1023:return e*t*4/s.components*s.byteLength;case 1033:return e*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function $g(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));if(typeof window<"u")if(window.__THREE__)je("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="187";function Ap(){let e=null,t=!1,n=null,i=null;function s(r,o){i=e.requestAnimationFrame(s),n(r,o)}return{start:function(){if(t===!0)return;if(n===null)return;if(e===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(i);t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function ex(e){let t=new WeakMap;function n(a,l){let{array:c,usage:h}=a,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)f=e.HALF_FLOAT;else f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let{array:h,updateRanges:d}=l;if(e.bindBuffer(c,a),d.length===0)e.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],v=d[f];if(v.start<=m.start+m.count+1)m.count=Math.max(m.count,v.start+v.count-m.start);else++u,d[u]=v}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let v=d[f];e.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let h=t.get(a);if(!h||h.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nx=`#ifdef USE_ALPHAHASH
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
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
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
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`#ifdef USE_BATCHING
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
#endif`,hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,px=`#ifdef USE_IRIDESCENCE
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
#endif`,mx=`#ifdef USE_BUMPMAP
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
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wx=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Tx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Px="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kx=`#ifdef USE_GRADIENTMAP
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
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,qx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Qx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,$x=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ev=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hv=`#if defined( USE_POINTS_UV )
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
#endif`,uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`#ifdef USE_MORPHTARGETS
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
#endif`,xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sv=`#ifdef USE_NORMALMAP
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
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,zv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kv=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`;var $v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`#include <common>
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
}`,ay=`#if DEPTH_PACKING == 3200
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
}`,ly=`#define DISTANCE
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
}`,cy=`#define DISTANCE
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
void main() {
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
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
}`,fy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#define LAMBERT
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
}`,xy=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,yy=`#define MATCAP
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
}`,_y=`#define NORMAL
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
}`,by=`#define NORMAL
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
}`,My=`#define PHONG
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
}`,Sy=`#define PHONG
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
}`,wy=`#define STANDARD
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
}`,Ty=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,Ay=`#define TOON
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
}`,Ey=`#define TOON
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
}`,Ry=`uniform float size;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Iy=`uniform vec3 color;
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
}`,Ly=`uniform float rotation;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:tx,alphahash_pars_fragment:nx,alphamap_fragment:ix,alphamap_pars_fragment:sx,alphatest_fragment:rx,alphatest_pars_fragment:ox,aomap_fragment:ax,aomap_pars_fragment:lx,batching_pars_vertex:cx,batching_vertex:hx,begin_vertex:ux,beginnormal_vertex:dx,bsdfs:fx,iridescence_fragment:px,bumpmap_pars_fragment:mx,clipping_planes_fragment:gx,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:vx,clipping_planes_vertex:yx,color_fragment:_x,color_pars_fragment:bx,color_pars_vertex:Mx,color_vertex:Sx,common:wx,defaultnormal_vertex:Tx,displacementmap_pars_vertex:Ax,displacementmap_vertex:Ex,emissivemap_fragment:Rx,emissivemap_pars_fragment:Cx,colorspace_fragment:Px,colorspace_pars_fragment:Ix,envmap_fragment:Lx,envmap_common_pars_fragment:Dx,envmap_pars_fragment:Nx,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:qx,envmap_vertex:Fx,fog_vertex:Ux,fog_pars_vertex:Bx,fog_fragment:zx,fog_pars_fragment:Gx,gradientmap_pars_fragment:kx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Wx,lights_pars_begin:Xx,lights_toon_fragment:Yx,lights_toon_pars_fragment:Kx,lights_phong_fragment:Zx,lights_phong_pars_fragment:jx,lights_physical_fragment:Jx,lights_physical_pars_fragment:Qx,lights_fragment_begin:$x,lights_fragment_maps:ev,lights_fragment_end:tv,lightprobes_pars_fragment:nv,logdepthbuf_fragment:iv,logdepthbuf_pars_fragment:sv,logdepthbuf_pars_vertex:rv,logdepthbuf_vertex:ov,map_fragment:av,map_pars_fragment:lv,map_particle_fragment:cv,map_particle_pars_fragment:hv,metalnessmap_fragment:uv,metalnessmap_pars_fragment:dv,morphinstance_vertex:fv,morphcolor_vertex:pv,morphnormal_vertex:mv,morphtarget_pars_vertex:gv,morphtarget_vertex:xv,normal_fragment_begin:vv,normal_fragment_maps:yv,normal_pars_fragment:_v,normal_pars_vertex:bv,normal_vertex:Mv,normalmap_pars_fragment:Sv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:Tv,clearcoat_pars_fragment:Av,iridescence_pars_fragment:Ev,opaque_fragment:Rv,packing:Cv,premultiplied_alpha_fragment:Pv,project_vertex:Iv,dithering_fragment:Lv,dithering_pars_fragment:Dv,roughnessmap_fragment:Nv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Bv,shadowmask_pars_fragment:zv,skinbase_vertex:Gv,skinning_pars_vertex:kv,skinning_vertex:Hv,skinnormal_vertex:Vv,specularmap_fragment:Wv,specularmap_pars_fragment:Xv,tonemapping_fragment:qv,tonemapping_pars_fragment:Yv,transmission_fragment:Kv,transmission_pars_fragment:Zv,uv_pars_fragment:jv,uv_pars_vertex:Jv,uv_vertex:Qv,worldpos_vertex:$v,background_vert:ey,background_frag:ty,backgroundCube_vert:ny,backgroundCube_frag:iy,cube_vert:sy,cube_frag:ry,depth_vert:oy,depth_frag:ay,distance_vert:ly,distance_frag:cy,equirect_vert:hy,equirect_frag:uy,linedashed_vert:dy,linedashed_frag:fy,meshbasic_vert:py,meshbasic_frag:my,meshlambert_vert:gy,meshlambert_frag:xy,meshmatcap_vert:vy,meshmatcap_frag:yy,meshnormal_vert:_y,meshnormal_frag:by,meshphong_vert:My,meshphong_frag:Sy,meshphysical_vert:wy,meshphysical_frag:Ty,meshtoon_vert:Ay,meshtoon_frag:Ey,points_vert:Ry,points_frag:Cy,shadow_vert:Py,shadow_frag:Iy,sprite_vert:Ly,sprite_frag:Dy},De={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new ie(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ni={basic:{uniforms:Rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Rn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Rn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Rn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Y(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Rn([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Rn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Rn([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Rn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Rn([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Rn([De.common,De.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Rn([De.lights,De.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ni.physical={uniforms:Rn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var Al={r:0,b:0,g:0},Ny=new Je,Ep=new at;Ep.set(-1,0,0,0,1,0,0,0,1);function Oy(e,t,n,i,s,r){let o=new Y(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){let y=_.backgroundBlurriness>0;b=t.get(b,y)}return b}function m(_){let b=!1,y=f(_);if(y===null)p(o,a);else if(y&&y.isColor)p(y,1),b=!0;let S=e.xr.getEnvironmentBlendMode();if(S==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(S==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(e.autoClear||b)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function v(_,b){let y=f(b);if(y&&y.isCubeTexture){if(c===void 0)c=new Qe(new Ss(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:tr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Ep);if(c.material.toneMapped=dt.getTransfer(y.colorSpace)!==Dt,h!==y||d!==y.version||u!==e.toneMapping)c.material.needsUpdate=!0,h=y,d=y.version,u=e.toneMapping;c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)}else if(y&&y.isTexture){if(l===void 0)l=new Qe(new rn(2,2),new At({name:"BackgroundMaterial",uniforms:tr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0)y.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(y.matrix),h!==y||d!==y.version||u!==e.toneMapping)l.material.needsUpdate=!0,h=y,d=y.version,u=e.toneMapping;l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)}}function p(_,b){_.getRGB(Al,Wh(e)),n.buffers.color.setClear(Al.r,Al.g,Al.b,b,r)}function g(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:v,dispose:g}}function Fy(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(I,z,W,P,X){let G=!1,F=d(I,P,W,z);if(r!==F)r=F,c(r.object);if(G=f(I,P,W,X),G)m(I,P,W,X);if(X!==null)t.update(X,e.ELEMENT_ARRAY_BUFFER);if(G||o){if(o=!1,y(I,z,W,P),X!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(X).buffer)}}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function d(I,z,W,P){let X=P.wireframe===!0,G=i[z.id];if(G===void 0)G={},i[z.id]=G;let F=I.isInstancedMesh===!0?I.id:0,K=G[F];if(K===void 0)K={},G[F]=K;let q=K[W.id];if(q===void 0)q={},K[W.id]=q;let H=q[X];if(H===void 0)H=u(l()),q[X]=H;return H}function u(I){let z=[],W=[],P=[];for(let X=0;X<n;X++)z[X]=0,W[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,z,W,P){let X=r.attributes,G=z.attributes,F=0,K=W.getAttributes();for(let q in K)if(K[q].location>=0){let Z=X[q],ee=G[q];if(ee===void 0){if(q==="instanceMatrix"&&I.instanceMatrix)ee=I.instanceMatrix;if(q==="instanceColor"&&I.instanceColor)ee=I.instanceColor}if(Z===void 0)return!0;if(Z.attribute!==ee)return!0;if(ee&&Z.data!==ee.data)return!0;F++}if(r.attributesNum!==F)return!0;if(r.index!==P)return!0;return!1}function m(I,z,W,P){let X={},G=z.attributes,F=0,K=W.getAttributes();for(let q in K)if(K[q].location>=0){let Z=G[q];if(Z===void 0){if(q==="instanceMatrix"&&I.instanceMatrix)Z=I.instanceMatrix;if(q==="instanceColor"&&I.instanceColor)Z=I.instanceColor}let ee={};if(ee.attribute=Z,Z&&Z.data)ee.data=Z.data;X[q]=ee,F++}r.attributes=X,r.attributesNum=F,r.index=P}function v(){let I=r.newAttributes;for(let z=0,W=I.length;z<W;z++)I[z]=0}function p(I){g(I,0)}function g(I,z){let W=r.newAttributes,P=r.enabledAttributes,X=r.attributeDivisors;if(W[I]=1,P[I]===0)e.enableVertexAttribArray(I),P[I]=1;if(X[I]!==z)e.vertexAttribDivisor(I,z),X[I]=z}function _(){let I=r.newAttributes,z=r.enabledAttributes;for(let W=0,P=z.length;W<P;W++)if(z[W]!==I[W])e.disableVertexAttribArray(W),z[W]=0}function b(I,z,W,P,X,G,F){if(F===!0)e.vertexAttribIPointer(I,z,W,X,G);else e.vertexAttribPointer(I,z,W,P,X,G)}function y(I,z,W,P){v();let X=P.attributes,G=W.getAttributes(),F=z.defaultAttributeValues;for(let K in G){let q=G[K];if(q.location>=0){let H=X[K];if(H===void 0){if(K==="instanceMatrix"&&I.instanceMatrix)H=I.instanceMatrix;if(K==="instanceColor"&&I.instanceColor)H=I.instanceColor}if(H!==void 0){let Z=H.normalized,ee=H.itemSize,J=t.get(H);if(J===void 0)continue;let{buffer:ae,type:Ae,bytesPerElement:Ne}=J,Oe=Ae===e.INT||Ae===e.UNSIGNED_INT||H.gpuType===zc;if(H.isInterleavedBufferAttribute){let Ce=H.data,lt=Ce.isInterleavedBuffer===!0?Ce.stride:Ce.itemSize,He=H.offset;if(Ce.isInstancedInterleavedBuffer||Ce.isInstancedBufferAttribute){for(let ze=0;ze<q.locationSize;ze++)g(q.location+ze,Ce.meshPerAttribute);if(I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=Ce.meshPerAttribute*Ce.count}else for(let ze=0;ze<q.locationSize;ze++)p(q.location+ze);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let ze=0;ze<q.locationSize;ze++)b(q.location+ze,ee/q.locationSize,Ae,Z,lt*Ne,(He+ee/q.locationSize*ze)*Ne,Oe)}else{if(H.isInstancedBufferAttribute){for(let Ce=0;Ce<q.locationSize;Ce++)g(q.location+Ce,H.meshPerAttribute);if(I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0)P._maxInstanceCount=H.meshPerAttribute*H.count}else for(let Ce=0;Ce<q.locationSize;Ce++)p(q.location+Ce);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let Ce=0;Ce<q.locationSize;Ce++)b(q.location+Ce,ee/q.locationSize,Ae,Z,ee*Ne,ee/q.locationSize*Ce*Ne,Oe)}}else if(F!==void 0){let Z=F[K];if(Z!==void 0)switch(Z.length){case 2:e.vertexAttrib2fv(q.location,Z);break;case 3:e.vertexAttrib3fv(q.location,Z);break;case 4:e.vertexAttrib4fv(q.location,Z);break;default:e.vertexAttrib1fv(q.location,Z)}}}}_()}function S(){E();for(let I in i){let z=i[I];for(let W in z){let P=z[W];for(let X in P){let G=P[X];for(let F in G)h(G[F].object),delete G[F];delete P[X]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;let z=i[I.id];for(let W in z){let P=z[W];for(let X in P){let G=P[X];for(let F in G)h(G[F].object),delete G[F];delete P[X]}}delete i[I.id]}function x(I){for(let z in i){let W=i[z];for(let P in W){let X=W[P];if(X[I.id]===void 0)continue;let G=X[I.id];for(let F in G)h(G[F].object),delete G[F];delete X[I.id]}}}function M(I){for(let z in i){let W=i[z],P=I.isInstancedMesh===!0?I.id:0,X=W[P];if(X===void 0)continue;for(let G in X){let F=X[G];for(let K in F)h(F[K].object),delete F[K];delete X[G]}if(delete W[P],Object.keys(W).length===0)delete i[z]}}function E(){if(L(),o=!0,r===s)return;r=s,c(r.object)}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function Uy(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){if(h===0)return;e.drawArraysInstanced(i,l,c,h),n.update(c,i,h)}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function By(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){if(x!==bi&&i.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(x){let M=x===$t&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(x!==_i&&x!==ji&&!M&&i.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(x){if(x==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";x="mediump"}if(x==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let d=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;if(n.reversedDepthBuffer===!0&&d===!1)je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");if(n.logarithmicDepthBuffer===!0&&d===!0)je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),g=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,maxSamples:S,samples:T}}function zy(e){let t=this,n=null,i=0,s=!1,r=!1,o=new ri,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let{clippingPlanes:m,clipIntersection:v,clipShadows:p}=d,g=e.get(d);if(!s||m===null||m.length===0||r&&!p)if(r)h(null);else c();else{let _=r?0:i,b=_*4,y=g.clippingState||null;l.value=y,y=h(m,u,b,f);for(let S=0;S!==b;++S)y[S]=n[S];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,m!==!0||p===null){let g=f+v*4,_=u.matrixWorldInverse;if(a.getNormalMatrix(_),p===null||p.length<g)p=new Float32Array(g);for(let b=0,y=f;b!==v;++b,y+=4)o.copy(d[b]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}class Rl extends Yt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new al(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ss(5,5,5),s=new At({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ki});s.uniforms.tEquirect.value=t;let r=new Qe(i,s),o=t.minFilter;if(t.minFilter===jn)t.minFilter=sn;return new qo(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}var rp=256,Gy=3,ky=20,Rp=256,Cp=16,Hy=3,Vy=new R,Wy=new Y;class Oi{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qo(1,10,null),this._boxMesh=new Qe(new Ss(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=0.1,i=100,s={}){let{size:r=256,position:o=Vy}=s,a=this._renderer;this._setSize(r);let l=this._allocateTarget(),c=this._getSourceTarget(!0);if(t>0)c.texture.mipmapsAutoUpdate=!1;let{autoClear:h,autoClearColor:d,autoClearDepth:u,autoClearStencil:f}=a,m=e.background;if(a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.autoClearStencil=!0,m===null)e.background=a.getClearColor(Wy);let v=new qo(n,i,c);if(v.position.copy(o),v.update(a,e),a.autoClear=h,a.autoClearColor=d,a.autoClearDepth=u,a.autoClearStencil=f,e.background=m,t>0)c.texture.mipmapsAutoUpdate=!0,this._blur(l,t);return this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._sourceTarget!==null)this._sourceTarget.dispose();if(this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._integrationMaterial!==null)this._integrationMaterial.dispose();this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(rp,Dh(e))}_fromTexture(e,t){if(e.mapping===Po||e.mapping===Fr)this._setSize(e.image.length===0?rp:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=op(e,!1,!1),n=Math.log2(e)-Gy;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;if(n===null||n.width!==t||e&&n.depthBuffer===!1){if(n!==null)n.dispose();this._sourceTarget=op(t,!0,e)}return this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;if(e.mapping===Po||e.mapping===Fr){if(this._cubemapMaterial===null)this._cubemapMaterial=lp();t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else{if(this._equirectMaterial===null)this._equirectMaterial=ap();t=this._equirectMaterial}t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){if(this._ggxMaterial===null)this._ggxMaterial=Xy(),this._integrationMaterial=qy();let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Cp);for(let r=0;r<=n;r++){let o=Oi.lodToRoughness(r,n);if(r>n-Hy)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let a=o>0?Math.log2(t)+0.5*Math.log2(6/(Rp*Math.pow(o,4)))+0.5:0;i.roughness.value=o,i.lodBias.value=a,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){if(this._blurMaterial===null)this._blurMaterial=Yy();let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function op(e,t,n){return new Rl(e,{minFilter:jn,generateMipmaps:t,type:$t,colorSpace:Jn,depthBuffer:n})}function jo(e,t,n){return new At({name:e,uniforms:t,vertexShader:pt.cube_vert,fragmentShader:n,side:nn,blending:Ki,depthTest:!1,depthWrite:!1})}function Xy(){return jo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Rp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qy(){return jo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Cp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yy(){return jo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ky}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ap(){return jo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function lp(){return jo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ky(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){if(u===null||u===void 0)return null;if(f)return o(u);return r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wa||f===Xa)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new Rl(m.height);return v.fromEquirectangularTexture(e,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===Wa||f===Xa,v=f===Po||f===Fr;if(m||v){let p=n.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g){if(i===null)i=new Oi(e);return p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),p.texture}else if(p!==void 0)return p.texture;else{let _=u.image;if(m&&_&&_.height>0||v&&_&&l(_)){if(i===null)i=new Oi(e);return p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,n.set(u,p),u.addEventListener("dispose",h),p.texture}else return null}}}return u}function a(u,f){if(f===Wa)u.mapping=Po;else if(f===Xa)u.mapping=Fr;return u}function l(u){let f=0,m=6;for(let v=0;v<m;v++)if(u[v]!==void 0)f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);if(m!==void 0)t.delete(f),m.dispose()}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=n.get(f);if(m!==void 0)n.delete(f),m.dispose()}function d(){if(t=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function Zy(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Hs("WebGLRenderer: "+i+" extension not supported.");return s}}}function jy(e,t,n,i){let s={},r=new WeakMap,o=new FinalizationRegistry((m)=>delete s[m]);function a(m){l(m.target)}function l(m){if(m.index!==null)t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let v=r.get(m);if(v)t.remove(v),r.delete(m);if(i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0)delete m._maxInstanceCount;n.memory.geometries--}function c(m,v){if(s[v.id]!==void 0)return v;return v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),n.memory.geometries++,v}function h(m){let v=m.attributes;for(let p in v)t.update(v[p],e.ARRAY_BUFFER)}function d(m){let v=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let _=v!==null?v.array.length:p.array.length/3-1,y=new(p.count>=65535?Hr:il)(Math.ceil(_/3)*6,1),S=y.array;if(v!==null){let x=v.array;g=v.version;for(let M=0,E=0;M<_;M+=3){let L=x[M+0],I=x[M+1],z=x[M+2];S[E++]=L,S[E++]=I,S[E++]=I,S[E++]=z,S[E++]=z,S[E++]=L}}else{g=p.version;for(let x=0,M=0;x<_;x+=3){let E=x+0,L=x+1,I=x+2;S[M++]=E,S[M++]=L,S[M++]=L,S[M++]=I,S[M++]=I,S[M++]=E}}y.version=g;let T=r.get(m);if(T)t.remove(T);r.set(m,y)}function u(m){let v=r.get(m);if(v){let p=m.index;if(p!==null){if(v.version<p.version)d(m)}}else d(m);return r.get(m)}function f(){for(let m in s){let v=s[m].deref();if(v!==void 0)l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Jy(e,t,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){e.drawElements(i,u,r,d*o),n.update(u,i,1)}function c(d,u,f){if(f===0)return;e.drawElementsInstanced(i,u,r,d*o,f),n.update(u,i,f)}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];n.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qy(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function $y(e,t,n){let i=new WeakMap,s=new Pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let E=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",E)};if(u!==void 0)u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;if(f===!0)b=1;if(m===!0)b=2;if(v===!0)b=3;let y=a.attributes.position.count*b,S=1;if(y>t.maxTextureSize)S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize;let T=new Float32Array(y*S*4*d),x=new nl(T,y,S,d);x.type=ji,x.needsUpdate=!0;let M=b*4;for(let L=0;L<d;L++){let I=p[L],z=g[L],W=_[L],P=y*S*4*L;for(let X=0;X<I.count;X++){let G=X*M;if(f===!0)s.fromBufferAttribute(I,X),T[P+G+0]=s.x,T[P+G+1]=s.y,T[P+G+2]=s.z,T[P+G+3]=0;if(m===!0)s.fromBufferAttribute(z,X),T[P+G+4]=s.x,T[P+G+5]=s.y,T[P+G+6]=s.z,T[P+G+7]=0;if(v===!0)s.fromBufferAttribute(W,X),T[P+G+8]=s.x,T[P+G+9]=s.y,T[P+G+10]=s.z,T[P+G+11]=W.itemSize===4?s.w:1}}u={count:d,texture:x,size:new ie(y,S)},i.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function e_(e,t,n,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h)t.update(u),r.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==h){if(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,e.ARRAY_BUFFER);r.set(c,h)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==h)f.update(),r.set(f,h)}return u}function a(){r=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:o,dispose:a}}var t_={[To]:"LINEAR_TONE_MAPPING",[Ao]:"REINHARD_TONE_MAPPING",[Eo]:"CINEON_TONE_MAPPING",[li]:"ACES_FILMIC_TONE_MAPPING",[Co]:"AGX_TONE_MAPPING",[qs]:"NEUTRAL_TONE_MAPPING",[Ro]:"CUSTOM_TONE_MAPPING"};function n_(e,t,n,i,s,r){let o=new Yt(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new gt;h.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let d=new Vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qe(h,d),f=new Cs(-1,1,1,-1,0,1),m=null,v=null,p=!1,g,_=null,b=[],y=!1;this.setSize=function(S,T){if(o.setSize(S,T),a!==null)a.setSize(S,T);if(l!==null)l.setSize(S,T);for(let x=0;x<b.length;x++){let M=b[x];if(M.setSize)M.setSize(S,T)}},this.setEffects=function(S){b=S,y=b.length>0&&b[0].isRenderPass===!0;let{width:T,height:x}=o;if(b.length>0&&a===null)a=new Yt(T,x,{type:$t,depthBuffer:!1,stencilBuffer:!1}),l=new Yt(T,x,{type:$t,depthBuffer:!1,stencilBuffer:!1});let M=s===!0&&b.some((E)=>E.needsDepthTexture===!0);if(M!==(o.depthTexture!==null)){if(M===!0&&c===null){if(c=new Ms(T,x),r===!0)c.format=_s,c.type=Ks}o.dispose(),o.depthTexture=M?c:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M}for(let E=0;E<b.length;E++){let L=b[E];if(L.setSize)L.setSize(T,x);if(M&&L.needsDepthTexture===!0&&L.setDepthTexture)L.setDepthTexture(c)}},this.begin=function(S,T){if(p)return!1;if(S.toneMapping===Li&&b.length===0)return!1;if(_=T,T!==null){let{width:x,height:M}=T;if(o.width!==x||o.height!==M)this.setSize(x,M)}if(y===!1)S.setRenderTarget(o);return g=S.toneMapping,S.toneMapping=Li,!0},this.hasRenderPass=function(){return y},this.end=function(S,T){S.toneMapping=g,p=!0;let x=o,M=a;for(let E=0;E<b.length;E++){let L=b[E];if(L.enabled===!1)continue;if(L.render(S,M,x,T),L.needsSwap!==!1)x=M,M=M===a?l:a}if(m!==S.outputColorSpace||v!==S.toneMapping){if(m=S.outputColorSpace,v=S.toneMapping,d.defines={},dt.getTransfer(m)===Dt)d.defines.SRGB_TRANSFER="";let E=t_[v];if(E)d.defines[E]="";d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(_),S.render(u,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();h.dispose(),d.dispose()}}var Pp=new Wt,Ip=new Ms(1,1),Lp=new cl(1),Dp=new nl,Np=new Bh,Op=new al,cp=[],hp=[],up=new Float32Array(16),dp=new Float32Array(9),fp=new Float32Array(4);function Qr(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=cp[s];if(r===void 0)r=new Float32Array(s),cp[s]=r;if(t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function ln(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function cn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Cl(e,t){let n=hp[t];if(n===void 0)n=new Int32Array(t),hp[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function i_(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function s_(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(ln(n,t))return;e.uniform2fv(this.addr,t),cn(n,t)}}function r_(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if(ln(n,t))return;e.uniform3fv(this.addr,t),cn(n,t)}}function o_(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(ln(n,t))return;e.uniform4fv(this.addr,t),cn(n,t)}}function a_(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ln(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),cn(n,t)}else{if(ln(n,i))return;fp.set(i),e.uniformMatrix2fv(this.addr,!1,fp),cn(n,i)}}function l_(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ln(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),cn(n,t)}else{if(ln(n,i))return;dp.set(i),e.uniformMatrix3fv(this.addr,!1,dp),cn(n,i)}}function c_(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(ln(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),cn(n,t)}else{if(ln(n,i))return;up.set(i),e.uniformMatrix4fv(this.addr,!1,up),cn(n,i)}}function h_(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function u_(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(ln(n,t))return;e.uniform2iv(this.addr,t),cn(n,t)}}function d_(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(ln(n,t))return;e.uniform3iv(this.addr,t),cn(n,t)}}function f_(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(ln(n,t))return;e.uniform4iv(this.addr,t),cn(n,t)}}function p_(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function m_(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if(ln(n,t))return;e.uniform2uiv(this.addr,t),cn(n,t)}}function g_(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if(ln(n,t))return;e.uniform3uiv(this.addr,t),cn(n,t)}}function x_(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if(ln(n,t))return;e.uniform4uiv(this.addr,t),cn(n,t)}}function Pl(e){if(e.version===0)e.compareFunction=Ch,e.needsUpdate=!0;return e}function v_(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_2D_SHADOW)r=Pl(Ip);else r=Pp;n.setTexture2D(t||r,s)}function y_(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||Np,s)}function __(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_CUBE_SHADOW)r=Pl(Lp);else r=Op;n.setTextureCube(t||r,s)}function b_(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||Dp,s)}function M_(e){switch(e){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return b_}}function S_(e,t){e.uniform1fv(this.addr,t)}function w_(e,t){let n=Qr(t,this.size,2);e.uniform2fv(this.addr,n)}function T_(e,t){let n=Qr(t,this.size,3);e.uniform3fv(this.addr,n)}function A_(e,t){let n=Qr(t,this.size,4);e.uniform4fv(this.addr,n)}function E_(e,t){let n=Qr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function R_(e,t){let n=Qr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function C_(e,t){let n=Qr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function P_(e,t){e.uniform1iv(this.addr,t)}function I_(e,t){e.uniform2iv(this.addr,t)}function L_(e,t){e.uniform3iv(this.addr,t)}function D_(e,t){e.uniform4iv(this.addr,t)}function N_(e,t){e.uniform1uiv(this.addr,t)}function O_(e,t){e.uniform2uiv(this.addr,t)}function F_(e,t){e.uniform3uiv(this.addr,t)}function U_(e,t){e.uniform4uiv(this.addr,t)}function B_(e,t,n){let i=this.cache,s=t.length,r=Cl(n,s);if(!ln(i,r))e.uniform1iv(this.addr,r),cn(i,r);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=Pl(Ip);else o=Pp;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function z_(e,t,n){let i=this.cache,s=t.length,r=Cl(n,s);if(!ln(i,r))e.uniform1iv(this.addr,r),cn(i,r);for(let o=0;o!==s;++o)n.setTexture3D(t[o]||Np,r[o])}function G_(e,t,n){let i=this.cache,s=t.length,r=Cl(n,s);if(!ln(i,r))e.uniform1iv(this.addr,r),cn(i,r);let o;if(this.type===e.SAMPLER_CUBE_SHADOW)o=Pl(Lp);else o=Op;for(let a=0;a!==s;++a)n.setTextureCube(t[a]||o,r[a])}function k_(e,t,n){let i=this.cache,s=t.length,r=Cl(n,s);if(!ln(i,r))e.uniform1iv(this.addr,r),cn(i,r);for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||Dp,r[o])}function H_(e){switch(e){case 5126:return S_;case 35664:return w_;case 35665:return T_;case 35666:return A_;case 35674:return E_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return I_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return N_;case 36294:return O_;case 36295:return F_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return k_}}class Fp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}}class Bp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,t[o.id],n)}}}var ru=/(\w+)(\])?(\[|\.)?/g;function pp(e,t){e.seq.push(t),e.map[t.id]=t}function V_(e,t,n){let i=e.name,s=i.length;ru.lastIndex=0;while(!0){let r=ru.exec(i),o=ru.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===s){pp(n,c===void 0?new Fp(a,e,t):new Up(a,e,t));break}else{let d=n.map[a];if(d===void 0)d=new Bp(a),pp(n,d);n=d}}}class Zo{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);V_(o,a,this)}let i=[],s=[];for(let r of this.seq)if(r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let o=t[s],a=n[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function mp(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var W_=37297,X_=0;function q_(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var gp=new at;function Y_(e){dt._getMatrix(gp,dt.workingColorSpace,e);let t=`mat3( ${gp.elements.map((n)=>n.toFixed(4))} )`;switch(dt.getTransfer(e)){case Ah:return[t,"LinearTransferOETF"];case Dt:return[t,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function xp(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+q_(e.getShaderSource(t),a)}else return r}function K_(e,t){let n=Y_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Z_={[To]:"Linear",[Ao]:"Reinhard",[Eo]:"Cineon",[li]:"ACESFilmic",[Co]:"AgX",[qs]:"Neutral",[Ro]:"Custom"};function j_(e,t){let n=Z_[t];if(n===void 0)return je("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var El=new R;function J_(){dt.getLuminanceCoefficients(El);let e=El.x.toFixed(4),t=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Q_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function $_(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function eb(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),o=r.name,a=1;if(r.type===e.FLOAT_MAT2)a=2;if(r.type===e.FLOAT_MAT3)a=3;if(r.type===e.FLOAT_MAT4)a=4;n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function Ko(e){return e!==""}function vp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function yp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(e){return e.replace(tb,nb)}function nb(e,t){let n=pt[t];if(n===void 0)throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return au(n)}var ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(e){return e.replace(ib,sb)}function sb(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bp(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}var rb={[wo]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function ob(e){return rb[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ab={[Fr]:"ENVMAP_MODE_REFRACTION"};function lb(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return ab[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cb={[Tf]:"ENVMAP_BLENDING_MULTIPLY",[Af]:"ENVMAP_BLENDING_MIX",[Ef]:"ENVMAP_BLENDING_ADD"};function hb(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return cb[e.combine]||"ENVMAP_BLENDING_NONE"}function ub(e,t,n,i){let s=e.getContext(),{defines:r,vertexShader:o,fragmentShader:a}=n,l=ob(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=lb(n),d=hb(n),u=Q_(n),f=$_(r),m=s.createProgram(),v,p,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Ko).join(`
`),v.length>0)v+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Ko).join(`
`),p.length>0)p+=`
`}else v=[bp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),p=[bp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?pt.tonemapping_pars_fragment:"",n.toneMapping!==Li?j_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,K_("linearToOutputTexel",n.outputColorSpace),J_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ko).join(`
`);if(o=au(o),o=vp(o,n),o=yp(o,n),a=au(a),a=vp(a,n),a=yp(a,n),o=_p(o),a=_p(a),n.isRawShaderMaterial!==!0)g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",n.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let _=g+v+o,b=g+p+a,y=mp(s,s.VERTEX_SHADER,_),S=mp(s,s.FRAGMENT_SHADER,b);if(s.attachShader(m,y),s.attachShader(m,S),n.index0AttributeName!==void 0)s.bindAttribLocation(m,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(m,0,"position");s.linkProgram(m);function T(L){if(e.debug.checkShaderErrors){let I=s.getProgramInfoLog(m)||"",z=s.getShaderInfoLog(y)||"",W=s.getShaderInfoLog(S)||"",P=I.trim(),X=z.trim(),G=W.trim(),F=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,m,y,S);else{let q=xp(s,y,"vertex"),H=xp(s,S,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+q+`
`+H)}else if(P!=="")je("WebGLProgram: Program Info Log:",P);else if(X===""||G==="")K=!1;if(K)L.diagnostics={runnable:F,programLog:P,vertexShader:{log:X,prefix:v},fragmentShader:{log:G,prefix:p}}}s.deleteShader(y),s.deleteShader(S),x=new Zo(s,m),M=eb(s,m)}let x;this.getUniforms=function(){if(x===void 0)T(this);return x};let M;this.getAttributes=function(){if(M===void 0)T(this);return M};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(E===!1)E=s.getProgramParameter(m,W_);return E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=X_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}var db=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);if(i.has(t)===!1)i.add(t),t.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new Gp(e),t.set(e,n);return n}}class Gp{constructor(e){this.id=db++,this.code=e,this.usedTimes=0}}function fb(e){return e===Zs||e===Qa||e===$a}function pb(e,t,n,i,s,r){let o=new No,a=new zp,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){if(l.add(x),x===0)return"uv";return`uv${x}`}function m(x,M,E,L,I,z){let W=L.fog,P=I.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||X,G),K=u[x.type],q=i.precision;if(x.precision!==null){if(q=i.getMaxPrecision(x.precision),q!==x.precision)je("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead.")}let H=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=H!==void 0?H.length:0,ee=0;if(P.morphAttributes.position!==void 0)ee=1;if(P.morphAttributes.normal!==void 0)ee=2;if(P.morphAttributes.color!==void 0)ee=3;let J,ae,Ae,Ne;if(K){let Re=Ni[K];J=Re.vertexShader,ae=Re.fragmentShader}else{J=x.vertexShader,ae=x.fragmentShader;let Re=a.getVertexShaderStage(x),mt=a.getFragmentShaderStage(x);a.update(x,Re,mt),Ae=Re.id,Ne=mt.id}let Oe=e.getRenderTarget(),Ce=e.state.buffers.depth.getReversed(),lt=I.isInstancedMesh===!0,He=I.isBatchedMesh===!0,ze=!!x.map,ot=!!x.matcap,se=!!F,ge=se&&F.isPMREMTexture===!0,ve=!!x.aoMap,Le=!!x.lightMap,Ie=!!x.bumpMap&&x.wireframe===!1,Xe=!!x.normalMap,ke=!!x.displacementMap,ce=!!x.emissiveMap,Pe=!!x.metalnessMap,qe=!!x.roughnessMap,N=x.anisotropy>0,vt=x.clearcoat>0,Ke=x.diffuseRoughness>0,Mt=x.dispersion>0,be=x.retroreflectivity>0,yt=x.iridescence>0,et=x.sheen>0,Ye=x.transmission>0,St=N&&!!x.anisotropyMap,C=vt&&!!x.clearcoatMap,w=vt&&!!x.clearcoatNormalMap,V=vt&&!!x.clearcoatRoughnessMap,ue=Ke&&!!x.diffuseRoughnessMap,le=yt&&!!x.iridescenceMap,fe=yt&&!!x.iridescenceThicknessMap,Me=et&&!!x.sheenColorMap,Q=et&&!!x.sheenRoughnessMap,ne=!!x.specularMap,Se=!!x.specularColorMap,O=!!x.specularIntensityMap,re=Ye&&!!x.transmissionMap,te=Ye&&!!x.thicknessMap,xe=!!x.gradientMap,ye=!!x.alphaMap,Te=x.alphaTest>0,D=!!x.alphaHash,pe=!!x.extensions,_e=Li;if(x.toneMapped){if(Oe===null||Oe.isXRRenderTarget===!0)_e=e.toneMapping}let Ue=ge?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,nt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:ae,defines:x.defines,customVertexShaderID:Ae,customFragmentShaderID:Ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:He,batchingColor:He&&I._colorsTexture!==null,instancing:lt,instancingColor:lt&&I.instanceColor!==null,instancingMorph:lt&&I.morphTexture!==null,outputColorSpace:Oe===null?e.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:ot,envMap:se,envMapMode:se&&F.mapping,envMapPMREM:ge,envMapMaxLod:ge?Ue.length-1:null,envMapSize:ge?Ue[0].width:null,aoMap:ve,lightMap:Le,bumpMap:Ie,normalMap:Xe,displacementMap:ke,emissiveMap:ce,normalMapObjectSpace:Xe&&x.normalMapType===Of,normalMapTangentSpace:Xe&&x.normalMapType===Th,packedNormalMap:Xe&&x.normalMapType===Th&&fb(x.normalMap.format),metalnessMap:Pe,roughnessMap:qe,anisotropy:N,anisotropyMap:St,clearcoat:vt,clearcoatMap:C,clearcoatNormalMap:w,clearcoatRoughnessMap:V,diffuseRoughness:Ke,diffuseRoughnessMap:ue,dispersion:Mt,retroreflection:be,iridescence:yt,iridescenceMap:le,iridescenceThicknessMap:fe,sheen:et,sheenColorMap:Me,sheenRoughnessMap:Q,specularMap:ne,specularColorMap:Se,specularIntensityMap:O,transmission:Ye,transmissionMap:re,thicknessMap:te,gradientMap:xe,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:Te,alphaHash:D,combine:x.combine,mapUv:ze&&f(x.map.channel),aoMapUv:ve&&f(x.aoMap.channel),lightMapUv:Le&&f(x.lightMap.channel),bumpMapUv:Ie&&f(x.bumpMap.channel),normalMapUv:Xe&&f(x.normalMap.channel),displacementMapUv:ke&&f(x.displacementMap.channel),emissiveMapUv:ce&&f(x.emissiveMap.channel),metalnessMapUv:Pe&&f(x.metalnessMap.channel),roughnessMapUv:qe&&f(x.roughnessMap.channel),anisotropyMapUv:St&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:le&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(x.sheenRoughnessMap.channel),specularMapUv:ne&&f(x.specularMap.channel),specularColorMapUv:Se&&f(x.specularColorMap.channel),specularIntensityMapUv:O&&f(x.specularIntensityMap.channel),transmissionMapUv:re&&f(x.transmissionMap.channel),thicknessMapUv:te&&f(x.thicknessMap.channel),alphaMapUv:ye&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Xe||N),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(ze||ye),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ce,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ee,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:z.filter((Re)=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&E.length>0,shadowMapType:e.shadowMap.type,toneMapping:_e,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===Dt,decodeVideoTextureEmissive:ce&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===Dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jt,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&x.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function v(x){let M=[];if(x.shaderID)M.push(x.shaderID);else M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID);if(x.defines!==void 0)for(let E in x.defines)M.push(E),M.push(x.defines[E]);if(x.isRawShaderMaterial===!1)p(M,x),g(M,x),M.push(e.outputColorSpace);return M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){if(o.disableAll(),M.instancing)o.enable(0);if(M.instancingColor)o.enable(1);if(M.instancingMorph)o.enable(2);if(M.matcap)o.enable(3);if(M.envMap)o.enable(4);if(M.normalMapObjectSpace)o.enable(5);if(M.normalMapTangentSpace)o.enable(6);if(M.clearcoat)o.enable(7);if(M.iridescence)o.enable(8);if(M.alphaTest)o.enable(9);if(M.vertexColors)o.enable(10);if(M.vertexAlphas)o.enable(11);if(M.vertexUv1s)o.enable(12);if(M.vertexUv2s)o.enable(13);if(M.vertexUv3s)o.enable(14);if(M.vertexTangents)o.enable(15);if(M.anisotropy)o.enable(16);if(M.alphaHash)o.enable(17);if(M.batching)o.enable(18);if(M.dispersion)o.enable(19);if(M.retroreflection)o.enable(24);if(M.diffuseRoughness)o.enable(25);if(M.batchingColor)o.enable(20);if(M.gradientMap)o.enable(21);if(M.packedNormalMap)o.enable(22);if(M.vertexNormals)o.enable(23);if(x.push(o.mask),o.disableAll(),M.fog)o.enable(0);if(M.useFog)o.enable(1);if(M.flatShading)o.enable(2);if(M.logarithmicDepthBuffer)o.enable(3);if(M.reversedDepthBuffer)o.enable(4);if(M.skinning)o.enable(5);if(M.morphTargets)o.enable(6);if(M.morphNormals)o.enable(7);if(M.morphColors)o.enable(8);if(M.premultipliedAlpha)o.enable(9);if(M.shadowMapEnabled)o.enable(10);if(M.doubleSided)o.enable(11);if(M.flipSided)o.enable(12);if(M.useDepthPacking)o.enable(13);if(M.dithering)o.enable(14);if(M.transmission)o.enable(15);if(M.sheen)o.enable(16);if(M.opaque)o.enable(17);if(M.pointsUvs)o.enable(18);if(M.decodeVideoTexture)o.enable(19);if(M.decodeVideoTextureEmissive)o.enable(20);if(M.alphaToCoverage)o.enable(21);if(M.numLightProbeGrids>0)o.enable(22);if(M.hasPositionAttribute)o.enable(23);x.push(o.mask)}function _(x){let M=u[x.type],E;if(M){let L=Ni[M];E=ei.clone(L.uniforms)}else E=x.uniforms;return E}function b(x,M){let E=h.get(M);if(E!==void 0)++E.usedTimes;else E=new ub(e,M,x,s),c.push(E),h.set(M,E);return E}function y(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){a.remove(x)}function T(){a.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:_,acquireProgram:b,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:T}}function mb(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function i(o){e.delete(o)}function s(o,a,l){e.get(o)[a]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function gb(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function Mp(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function Sp(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(u){let f=0;if(u.isInstancedMesh)f+=2;if(u.isSkinnedMesh)f+=1;return f}function a(u,f,m,v,p,g){let _=e[t];if(_===void 0)_={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:g},e[t]=_;else _.id=u.id,_.object=u,_.geometry=f,_.material=m,_.materialVariant=o(u),_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=p,_.group=g;return t++,_}function l(u,f,m,v,p,g,_){if(_.reversedDepth===!0)p=-p;let b=a(u,f,m,v,p,g);if(m.transmission>0)i.push(b);else if(m.transparent===!0)s.push(b);else n.push(b)}function c(u,f,m,v,p,g){let _=a(u,f,m,v,p,g);if(m.transmission>0)i.unshift(_);else if(m.transparent===!0)s.unshift(_);else n.unshift(_)}function h(u,f){if(n.length>1)n.sort(u||gb);if(i.length>1)i.sort(f||Mp);if(s.length>1)s.sort(f||Mp)}function d(){for(let u=t,f=e.length;u<f;u++){let m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function xb(){let e=new WeakMap;function t(i,s){let r=e.get(i),o;if(r===void 0)o=new Sp,e.set(i,[o]);else if(s>=r.length)o=new Sp,r.push(o);else o=r[s];return o}function n(){e=new WeakMap}return{get:t,dispose:n}}function vb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new R,color:new Y};break;case"SpotLight":n={position:new R,direction:new R,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new Y,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new Y,groundColor:new Y};break;case"RectAreaLight":n={color:new Y,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=n,n}}}function yb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var _b=0;function bb(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Mb(e){let t=new vb,n=yb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new Je,o=new Je;function a(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,_=0,b=0,y=0,S=0,T=0,x=0,M=0,E=0,L=0;c.sort(bb);for(let z=0,W=c.length;z<W;z++){let P=c[z],{color:X,intensity:G,distance:F}=P,K=null;if(P.shadow&&P.shadow.map)if(P.shadow.map.texture.format===Zs)K=P.shadow.map.texture;else K=P.shadow.map.depthTexture||P.shadow.map.texture;if(P.isAmbientLight)h+=X.r*G,d+=X.g*G,u+=X.b*G;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],G);L++}else if(P.isSunLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,Z=n.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[m]=Z,i.sunShadowMap[m]=K;let ee=H.getViewportCount();for(let J=0;J<ee;J++)i.sunShadowMatrix[v+J]=H.getMatrix(J),i.sunShadowCascade[v+J]=H._cascadeData[J];v+=ee,m++}i.sun[f]=q,f++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let H=P.shadow,Z=n.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=P.shadow.matrix,S++}i.directional[p]=q,p++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(X).multiplyScalar(G),q.distance=F,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[_]=q;let H=P.shadow;if(P.map){if(i.spotLightMap[M]=P.map,M++,H.updateMatrices(P),P.castShadow)E++}if(i.spotLightMatrix[_]=H.matrix,P.castShadow){let Z=n.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=K,x++}_++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(X).multiplyScalar(G),q.halfWidth.set(P.width*0.5,0,0),q.halfHeight.set(0,P.height*0.5,0),i.rectArea[b]=q,b++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let H=P.shadow,Z=n.get(P);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=P.shadow.matrix,T++}i.point[g]=q,g++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(G),q.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[y]=q,y++}}if(b>0)if(e.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2;else i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;if(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==b||I.hemiLength!==y||I.numSunShadows!==m||I.numDirectionalShadows!==S||I.numPointShadows!==T||I.numSpotShadows!==x||I.numSpotMaps!==M||I.numLightProbes!==L)i.sun.length=f,i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=g,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+M-E,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=L,I.sunLength=f,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=b,I.hemiLength=y,I.numSunShadows=m,I.numDirectionalShadows=S,I.numPointShadows=T,I.numSpotShadows=x,I.numSpotMaps=M,I.numLightProbes=L,i.version=_b++}function l(c,h){let d=0,u=0,f=0,m=0,v=0,p=0,g=h.matrixWorldInverse;for(let _=0,b=c.length;_<b;_++){let y=c[_];if(y.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(y.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let S=i.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(y.width*0.5,0,0),S.halfHeight.set(0,y.height*0.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function wp(e){let t=new Mb(e),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function o(d){if(d.isLightProbeGrid)s.push(d);else n.push(d)}function a(d){i.push(d)}function l(){t.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Sb(e){let t=new WeakMap;function n(s,r=0){let o=t.get(s),a;if(o===void 0)a=new wp(e),t.set(s,[a]);else if(r>=o.length)a=new wp(e),o.push(a);else a=o[r];return a}function i(){t=new WeakMap}return{get:n,dispose:i}}var wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tb=`uniform sampler2D shadow_pass;
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
}`,Ab=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Eb=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Tp=new Je,Yo=new R,ou=new R;function Rb(e,t,n){let i=new Ws,s=new ie,r=new ie,o=new Pt,a=new Xh,l=new qh,c={},h=n.maxTextureSize,d={[xs]:nn,[nn]:xs,[Jt]:Jt},u=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:wb,fragmentShader:Tb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new gt;m.setAttribute("position",new gn(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let v=new Qe(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let g=this.type;this.render=function(T,x,M){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(T.length===0)return;if(this.type===jd)je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wo;let E=e.getRenderTarget(),L=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),z=e.state;if(z.setBlending(Ki),z.buffers.depth.getReversed()===!0)z.buffers.color.setClear(0,0,0,0);else z.buffers.color.setClear(1,1,1,1);z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=g!==this.type;if(W)x.traverse(function(P){if(P.material)if(Array.isArray(P.material))P.material.forEach((X)=>X.needsUpdate=!0);else P.material.needsUpdate=!0});for(let P=0,X=T.length;P<X;P++){let G=T[P],F=G.shadow;if(F===void 0){je("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let K=F.getFrameExtents();if(s.multiply(K),r.copy(F.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/K.x),s.x=r.x*K.x,F.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/K.y),s.y=r.y*K.y,F.mapSize.y=r.y}let q=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=q,F.map===null||W===!0){if(F.map!==null){if(F.map.depthTexture!==null)F.map.depthTexture.dispose(),F.map.depthTexture=null;F.map.dispose()}if(this.type===Nr){if(G.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Yt(s.x,s.y,{format:Zs,type:$t,minFilter:sn,magFilter:sn,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new Ms(s.x,s.y,ji),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=zr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Hn,F.map.depthTexture.magFilter=Hn}else{if(G.isPointLight)F.map=new Rl(s.x),F.map.depthTexture=new cl(s.x,ys);else F.map=new Yt(s.x,s.y),F.map.depthTexture=new Ms(s.x,s.y,ys);if(F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=zr,this.type===wo)F.map.depthTexture.compareFunction=q?Rh:Eh,F.map.depthTexture.minFilter=sn,F.map.depthTexture.magFilter=sn;else F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Hn,F.map.depthTexture.magFilter=Hn}F.camera.updateProjectionMatrix()}if(F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y))F.map.setSize(s.x,s.y);let H=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();if(G.isPointLight!==!0)F.updateMatrices(G,M);let Z=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:M.layers;for(let ee=0;ee<H;ee++){let J=F.getCamera(ee);if(G.isPointLight){let{camera:ae,matrix:Ae}=F,Ne=G.distance||ae.far;if(Ne!==ae.far)ae.far=Ne,ae.updateProjectionMatrix();Yo.setFromMatrixPosition(G.matrixWorld),ae.position.copy(Yo),ou.copy(ae.position),ou.add(Ab[ee]),ae.up.copy(Eb[ee]),ae.lookAt(ou),ae.updateMatrixWorld(),Ae.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Tp.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Tp,ae.coordinateSystem,ae.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,ee),e.clear();else{if(ee===0)e.setRenderTarget(F.map),e.clear();let ae=F.getViewport(ee);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),z.viewport(o)}i=F.getFrustum(ee),y(x,M,J,G,Z,this.type)}if(F.isPointLightShadow!==!0&&this.type===Nr)_(F,M);F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,e.setRenderTarget(E,L,I)};function _(T,x){let M=t.update(v);if(u.defines.VSM_SAMPLES!==T.blurSamples)u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0;if(T.mapPass===null)T.mapPass=new Yt(s.x,s.y,{format:Zs,type:$t});else if(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)T.mapPass.setSize(T.map.width,T.map.height);u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(x,null,M,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(x,null,M,f,v,null)}function b(T,x,M,E){let L=null,I=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)L=I;else if(L=M.isPointLight===!0?l:a,e.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=L.uuid,W=x.uuid,P=c[z];if(P===void 0)P={},c[z]=P;let X=P[W];if(X===void 0)X=L.clone(),P[W]=X,x.addEventListener("dispose",S);L=X}if(L.visible=x.visible,L.wireframe=x.wireframe,E===Nr)L.side=x.shadowSide!==null?x.shadowSide:x.side;else L.side=x.shadowSide!==null?x.shadowSide:d[x.side];if(L.alphaMap=x.alphaMap,L.alphaTest=x.alphaToCoverage===!0?0.5:x.alphaTest,L.map=x.map,L.clipShadows=x.clipShadows,L.clippingPlanes=x.clippingPlanes,L.clipIntersection=x.clipIntersection,L.displacementMap=x.displacementMap,L.displacementScale=x.displacementScale,L.displacementBias=x.displacementBias,L.wireframeLinewidth=x.wireframeLinewidth,L.linewidth=x.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let z=e.properties.get(L);z.light=M}return L}function y(T,x,M,E,L,I){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)){if((T.castShadow||T.receiveShadow&&I===Nr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let P=t.update(T),X=T.material;if(Array.isArray(X)){let G=P.groups;for(let F=0,K=G.length;F<K;F++){let q=G[F],H=X[q.materialIndex];if(H&&H.visible){let Z=b(T,H,E,I);T.onBeforeShadow(e,T,x,M,P,Z,q),e.renderBufferDirect(M,null,P,Z,T,q),T.onAfterShadow(e,T,x,M,P,Z,q)}}}else if(X.visible){let G=b(T,X,E,I);T.onBeforeShadow(e,T,x,M,P,G,null),e.renderBufferDirect(M,null,P,G,T,null),T.onAfterShadow(e,T,x,M,P,G,null)}}}let W=T.children;for(let P=0,X=W.length;P<X;P++)y(W[P],x,M,E,L,I)}function S(T){T.target.removeEventListener("dispose",S);for(let M in c){let E=c[M],L=T.target.uuid;if(L in E)E[L].dispose(),delete E[L]}}}function Cb(e,t){function n(){let O=!1,re=new Pt,te=null,xe=new Pt(0,0,0,0);return{setMask:function(ye){if(te!==ye&&!O)e.colorMask(ye,ye,ye,ye),te=ye},setLocked:function(ye){O=ye},setClear:function(ye,Te,D,pe,_e){if(_e===!0)ye*=pe,Te*=pe,D*=pe;if(re.set(ye,Te,D,pe),xe.equals(re)===!1)e.clearColor(ye,Te,D,pe),xe.copy(re)},reset:function(){O=!1,te=null,xe.set(-1,0,0,0)}}}function i(){let O=!1,re=!1,te=null,xe=null,ye=null;return{setReversed:function(Te){if(re!==Te){let D=t.get("EXT_clip_control");if(Te)D.clipControlEXT(D.LOWER_LEFT_EXT,D.ZERO_TO_ONE_EXT);else D.clipControlEXT(D.LOWER_LEFT_EXT,D.NEGATIVE_ONE_TO_ONE_EXT);re=Te;let pe=ye;ye=null,this.setClear(pe)}},getReversed:function(){return re},setTest:function(Te){if(Te)Ce(e.DEPTH_TEST);else lt(e.DEPTH_TEST)},setMask:function(Te){if(te!==Te&&!O)e.depthMask(Te),te=Te},setFunc:function(Te){if(re)Te=Wf[Te];if(xe!==Te){switch(Te){case vf:e.depthFunc(e.NEVER);break;case yf:e.depthFunc(e.ALWAYS);break;case _f:e.depthFunc(e.LESS);break;case Bc:e.depthFunc(e.LEQUAL);break;case bf:e.depthFunc(e.EQUAL);break;case Mf:e.depthFunc(e.GEQUAL);break;case Sf:e.depthFunc(e.GREATER);break;case wf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}xe=Te}},setLocked:function(Te){O=Te},setClear:function(Te){if(ye!==Te){if(ye=Te,re)Te=1-Te;e.clearDepth(Te)}},reset:function(){O=!1,te=null,xe=null,ye=null,re=!1}}}function s(){let O=!1,re=null,te=null,xe=null,ye=null,Te=null,D=null,pe=null,_e=null;return{setTest:function(Ue){if(!O)if(Ue)Ce(e.STENCIL_TEST);else lt(e.STENCIL_TEST)},setMask:function(Ue){if(re!==Ue&&!O)e.stencilMask(Ue),re=Ue},setFunc:function(Ue,nt,Re){if(te!==Ue||xe!==nt||ye!==Re)e.stencilFunc(Ue,nt,Re),te=Ue,xe=nt,ye=Re},setOp:function(Ue,nt,Re){if(Te!==Ue||D!==nt||pe!==Re)e.stencilOp(Ue,nt,Re),Te=Ue,D=nt,pe=Re},setLocked:function(Ue){O=Ue},setClear:function(Ue){if(_e!==Ue)e.clearStencil(Ue),_e=Ue},reset:function(){O=!1,re=null,te=null,xe=null,ye=null,Te=null,D=null,pe=null,_e=null}}}let r=new n,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],v=null,p=!1,g=null,_=null,b=null,y=null,S=null,T=null,x=null,M=new Y(0,0,0),E=0,L=!1,I=null,z=null,W=null,P=null,X=null,G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,K=0,q=e.getParameter(e.VERSION);if(q.indexOf("WebGL")!==-1)K=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=K>=1;else if(q.indexOf("OpenGL ES")!==-1)K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=K>=2;let H=null,Z={},ee=e.getParameter(e.SCISSOR_BOX),J=e.getParameter(e.VIEWPORT),ae=new Pt().fromArray(ee),Ae=new Pt().fromArray(J);function Ne(O,re,te,xe){let ye=new Uint8Array(4),Te=e.createTexture();e.bindTexture(O,Te),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let D=0;D<te;D++)if(O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY)e.texImage3D(re,0,e.RGBA,1,1,xe,0,e.RGBA,e.UNSIGNED_BYTE,ye);else e.texImage2D(re+D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ye);return Te}let Oe={};Oe[e.TEXTURE_2D]=Ne(e.TEXTURE_2D,e.TEXTURE_2D,1),Oe[e.TEXTURE_CUBE_MAP]=Ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[e.TEXTURE_2D_ARRAY]=Ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Oe[e.TEXTURE_3D]=Ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ce(e.DEPTH_TEST),o.setFunc(Bc),Ie(!1),Xe(Oc),Ce(e.CULL_FACE),ve(Ki);function Ce(O){if(h[O]!==!0)e.enable(O),h[O]=!0}function lt(O){if(h[O]!==!1)e.disable(O),h[O]=!1}function He(O,re){if(u[O]!==re){if(e.bindFramebuffer(O,re),u[O]=re,O===e.DRAW_FRAMEBUFFER)u[e.FRAMEBUFFER]=re;if(O===e.FRAMEBUFFER)u[e.DRAW_FRAMEBUFFER]=re;return!0}return!1}function ze(O,re){let te=m,xe=!1;if(O){if(te=f.get(re),te===void 0)te=[],f.set(re,te);let ye=O.textures;if(te.length!==ye.length||te[0]!==e.COLOR_ATTACHMENT0){for(let Te=0,D=ye.length;Te<D;Te++)te[Te]=e.COLOR_ATTACHMENT0+Te;te.length=ye.length,xe=!0}}else if(te[0]!==e.BACK)te[0]=e.BACK,xe=!0;if(xe)e.drawBuffers(te)}function ot(O){if(v!==O)return e.useProgram(O),v=O,!0;return!1}let se={[Or]:e.FUNC_ADD,[Qd]:e.FUNC_SUBTRACT,[$d]:e.FUNC_REVERSE_SUBTRACT};se[ef]=e.MIN,se[tf]=e.MAX;let ge={[nf]:e.ZERO,[sf]:e.ONE,[rf]:e.SRC_COLOR,[af]:e.SRC_ALPHA,[ff]:e.SRC_ALPHA_SATURATE,[uf]:e.DST_COLOR,[cf]:e.DST_ALPHA,[of]:e.ONE_MINUS_SRC_COLOR,[lf]:e.ONE_MINUS_SRC_ALPHA,[df]:e.ONE_MINUS_DST_COLOR,[hf]:e.ONE_MINUS_DST_ALPHA,[pf]:e.CONSTANT_COLOR,[mf]:e.ONE_MINUS_CONSTANT_COLOR,[gf]:e.CONSTANT_ALPHA,[xf]:e.ONE_MINUS_CONSTANT_ALPHA};function ve(O,re,te,xe,ye,Te,D,pe,_e,Ue){if(O===Ki){if(p===!0)lt(e.BLEND),p=!1;return}if(p===!1)Ce(e.BLEND),p=!0;if(O!==Jd){if(O!==g||Ue!==L){if(_!==Or||S!==Or)e.blendEquation(e.FUNC_ADD),_=Or,S=Or;if(Ue)switch(O){case Zi:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zn:e.blendFunc(e.ONE,e.ONE);break;case Fc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Uc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:it("WebGLState: Invalid blending: ",O);break}else switch(O){case Zi:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Zn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Fc:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",O);break}b=null,y=null,T=null,x=null,M.set(0,0,0),E=0,g=O,L=Ue}return}if(ye=ye||re,Te=Te||te,D=D||xe,re!==_||ye!==S)e.blendEquationSeparate(se[re],se[ye]),_=re,S=ye;if(te!==b||xe!==y||Te!==T||D!==x)e.blendFuncSeparate(ge[te],ge[xe],ge[Te],ge[D]),b=te,y=xe,T=Te,x=D;if(pe.equals(M)===!1||_e!==E)e.blendColor(pe.r,pe.g,pe.b,_e),M.copy(pe),E=_e;g=O,L=!1}function Le(O,re){O.side===Jt?lt(e.CULL_FACE):Ce(e.CULL_FACE);let te=O.side===nn;if(re)te=!te;Ie(te),O.blending===Zi&&O.transparent===!1?ve(Ki):ve(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let xe=O.stencilWrite;if(a.setTest(xe),xe)a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass);ce(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ce(e.SAMPLE_ALPHA_TO_COVERAGE):lt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(O){if(I!==O){if(O)e.frontFace(e.CW);else e.frontFace(e.CCW);I=O}}function Xe(O){if(O!==Kd){if(Ce(e.CULL_FACE),O!==z)if(O===Oc)e.cullFace(e.BACK);else if(O===Zd)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else lt(e.CULL_FACE);z=O}function ke(O){if(O!==W){if(F)e.lineWidth(O);W=O}}function ce(O,re,te){if(O){if(Ce(e.POLYGON_OFFSET_FILL),P!==re||X!==te){if(P=re,X=te,o.getReversed())re=-re,te=-te;e.polygonOffset(re,te)}}else lt(e.POLYGON_OFFSET_FILL)}function Pe(O){if(O)Ce(e.SCISSOR_TEST);else lt(e.SCISSOR_TEST)}function qe(O){if(O===void 0)O=e.TEXTURE0+G-1;if(H!==O)e.activeTexture(O),H=O}function N(O,re,te){if(te===void 0)if(H===null)te=e.TEXTURE0+G-1;else te=H;let xe=Z[te];if(xe===void 0)xe={type:void 0,texture:void 0},Z[te]=xe;if(xe.type!==O||xe.texture!==re){if(H!==te)e.activeTexture(te),H=te;e.bindTexture(O,re||Oe[O]),xe.type=O,xe.texture=re}}function vt(){let O=Z[H];if(O!==void 0&&O.type!==void 0)e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0}function Ke(){try{e.compressedTexImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function Mt(){try{e.compressedTexImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function be(){try{e.texSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function yt(){try{e.texSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function et(){try{e.compressedTexSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function Ye(){try{e.compressedTexSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function St(){try{e.texStorage2D(...arguments)}catch(O){it("WebGLState:",O)}}function C(){try{e.texStorage3D(...arguments)}catch(O){it("WebGLState:",O)}}function w(){try{e.texImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function V(){try{e.texImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function ue(O){if(d[O]!==void 0)return d[O];else return e.getParameter(O)}function le(O,re){if(d[O]!==re)e.pixelStorei(O,re),d[O]=re}function fe(O){if(ae.equals(O)===!1)e.scissor(O.x,O.y,O.z,O.w),ae.copy(O)}function Me(O){if(Ae.equals(O)===!1)e.viewport(O.x,O.y,O.z,O.w),Ae.copy(O)}function Q(O,re){let te=c.get(re);if(te===void 0)te=new WeakMap,c.set(re,te);let xe=te.get(O);if(xe===void 0)xe=e.getUniformBlockIndex(re,O.name),e.uniformBlockBinding(re,xe,xe),te.set(O,xe)}function ne(O,re,te){let ye=c.get(re).get(O);if(l[ye]!==te)e.bindBufferBase(e.UNIFORM_BUFFER,ye,te),l[ye]=te}function Se(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},H=null,Z={},u={},l={},f=new WeakMap,m=[],v=null,p=!1,g=null,_=null,b=null,y=null,S=null,T=null,x=null,M=new Y(0,0,0),E=0,L=!1,I=null,z=null,W=null,P=null,X=null,ae.set(0,0,e.canvas.width,e.canvas.height),Ae.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ce,disable:lt,bindFramebuffer:He,drawBuffers:ze,useProgram:ot,setBlending:ve,setMaterial:Le,setFlipSided:Ie,setCullFace:Xe,setLineWidth:ke,setPolygonOffset:ce,setScissorTest:Pe,activeTexture:qe,bindTexture:N,unbindTexture:vt,compressedTexImage2D:Ke,compressedTexImage3D:Mt,texImage2D:w,texImage3D:V,pixelStorei:le,getParameter:ue,updateUBOMapping:Q,uniformBlockBinding:ne,texStorage2D:St,texStorage3D:C,texSubImage2D:be,texSubImage3D:yt,compressedTexSubImage2D:et,compressedTexSubImage3D:Ye,scissor:fe,viewport:Me,reset:Se}}function Pb(e,t,n,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,v=new FinalizationRegistry((C)=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function g(C,w){return p?new OffscreenCanvas(C,w):Pr("canvas")}function _(C,w,V){let ue=1,le=St(C);if(le.width>V||le.height>V)ue=V/Math.max(le.width,le.height);if(ue<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let fe=Math.floor(ue*le.width),Me=Math.floor(ue*le.height);if(u===void 0)u=g(fe,Me);let Q=w?g(fe,Me):u;return Q.width=fe,Q.height=Me,Q.getContext("2d").drawImage(C,0,0,fe,Me),je("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+fe+"x"+Me+")."),Q}else{if("data"in C)je("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+").");return C}return C}function b(C){return C.generateMipmaps}function y(C){e.generateMipmap(C)}function S(C){if(C.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function T(C,w,V,ue,le,fe=!1){if(C!==null){if(e[C]!==void 0)return e[C];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Me;if(ue){if(Me=t.get("EXT_texture_norm16"),!Me)je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Q=w;if(w===e.RED){if(V===e.FLOAT)Q=e.R32F;if(V===e.HALF_FLOAT)Q=e.R16F;if(V===e.UNSIGNED_BYTE)Q=e.R8;if(V===e.UNSIGNED_SHORT&&Me)Q=Me.R16_EXT;if(V===e.SHORT&&Me)Q=Me.R16_SNORM_EXT}if(w===e.RED_INTEGER){if(V===e.UNSIGNED_BYTE)Q=e.R8UI;if(V===e.UNSIGNED_SHORT)Q=e.R16UI;if(V===e.UNSIGNED_INT)Q=e.R32UI;if(V===e.BYTE)Q=e.R8I;if(V===e.SHORT)Q=e.R16I;if(V===e.INT)Q=e.R32I}if(w===e.RG){if(V===e.FLOAT)Q=e.RG32F;if(V===e.HALF_FLOAT)Q=e.RG16F;if(V===e.UNSIGNED_BYTE)Q=e.RG8;if(V===e.UNSIGNED_SHORT&&Me)Q=Me.RG16_EXT;if(V===e.SHORT&&Me)Q=Me.RG16_SNORM_EXT}if(w===e.RG_INTEGER){if(V===e.UNSIGNED_BYTE)Q=e.RG8UI;if(V===e.UNSIGNED_SHORT)Q=e.RG16UI;if(V===e.UNSIGNED_INT)Q=e.RG32UI;if(V===e.BYTE)Q=e.RG8I;if(V===e.SHORT)Q=e.RG16I;if(V===e.INT)Q=e.RG32I}if(w===e.RGB_INTEGER){if(V===e.UNSIGNED_BYTE)Q=e.RGB8UI;if(V===e.UNSIGNED_SHORT)Q=e.RGB16UI;if(V===e.UNSIGNED_INT)Q=e.RGB32UI;if(V===e.BYTE)Q=e.RGB8I;if(V===e.SHORT)Q=e.RGB16I;if(V===e.INT)Q=e.RGB32I}if(w===e.RGBA_INTEGER){if(V===e.UNSIGNED_BYTE)Q=e.RGBA8UI;if(V===e.UNSIGNED_SHORT)Q=e.RGBA16UI;if(V===e.UNSIGNED_INT)Q=e.RGBA32UI;if(V===e.BYTE)Q=e.RGBA8I;if(V===e.SHORT)Q=e.RGBA16I;if(V===e.INT)Q=e.RGBA32I}if(w===e.RGB){if(V===e.UNSIGNED_SHORT&&Me)Q=Me.RGB16_EXT;if(V===e.SHORT&&Me)Q=Me.RGB16_SNORM_EXT;if(V===e.UNSIGNED_INT_5_9_9_9_REV)Q=e.RGB9_E5;if(V===e.UNSIGNED_INT_10F_11F_11F_REV)Q=e.R11F_G11F_B10F}if(w===e.RGBA){let ne=fe?Ah:dt.getTransfer(le);if(V===e.FLOAT)Q=e.RGBA32F;if(V===e.HALF_FLOAT)Q=e.RGBA16F;if(V===e.UNSIGNED_BYTE)Q=ne===Dt?e.SRGB8_ALPHA8:e.RGBA8;if(V===e.UNSIGNED_SHORT&&Me)Q=Me.RGBA16_EXT;if(V===e.SHORT&&Me)Q=Me.RGBA16_SNORM_EXT;if(V===e.UNSIGNED_SHORT_4_4_4_4)Q=e.RGBA4;if(V===e.UNSIGNED_SHORT_5_5_5_1)Q=e.RGB5_A1}if(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)t.get("EXT_color_buffer_float");return Q}function x(C,w){let V;if(C){if(w===null||w===ys||w===Ks)V=e.DEPTH24_STENCIL8;else if(w===ji)V=e.DEPTH32F_STENCIL8;else if(w===Io)V=e.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(w===null||w===ys||w===Ks)V=e.DEPTH_COMPONENT24;else if(w===ji)V=e.DEPTH_COMPONENT32F;else if(w===Io)V=e.DEPTH_COMPONENT16;return V}function M(C,w){if(b(C)===!0||C.isFramebufferTexture&&C.minFilter!==Hn&&C.minFilter!==sn)return Math.log2(Math.max(w.width,w.height))+1;else if(C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return w.mipmaps.length;else return 1}function E(C){let w=new WeakRef(C);i.get(C).__ref=w,m.add(w),v.register(C,w,w)}function L(C){let w=i.get(C).__ref;if(w===void 0)return;m.delete(w),v.unregister(w)}function I(C){W(C.target)}function z(C){P(C.target)}function W(C){if(C.removeEventListener("dispose",I),L(C),G(C),C.isVideoTexture)h.delete(C);if(C.isHTMLTexture)d.delete(C)}function P(C){C.removeEventListener("dispose",z),L(C),K(C)}function X(){for(let C of m){let w=C.deref();if(w===void 0)continue;if(w.isRenderTarget===!0)P(w);else W(w)}m.clear(),d.clear()}function G(C){let w=i.get(C);if(w.__webglInit===void 0)return;let V=C.source,ue=f.get(V);if(ue){let le=ue[w.__cacheKey];if(le.usedTimes--,le.usedTimes===0)F(C);if(Object.keys(ue).length===0)f.delete(V)}i.remove(C)}function F(C){let w=i.get(C);e.deleteTexture(w.__webglTexture);let V=C.source,ue=f.get(V);delete ue[w.__cacheKey],o.memory.textures--}function K(C){let w=i.get(C);if(w.__depthDisposeCallback)w.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C)W(V);if(C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(w.__webglFramebuffer[le]))for(let fe=0;fe<w.__webglFramebuffer[le].length;fe++)e.deleteFramebuffer(w.__webglFramebuffer[le][fe]);else e.deleteFramebuffer(w.__webglFramebuffer[le]);if(w.__webglDepthbuffer)e.deleteRenderbuffer(w.__webglDepthbuffer[le])}else{if(Array.isArray(w.__webglFramebuffer))for(let le=0;le<w.__webglFramebuffer.length;le++)e.deleteFramebuffer(w.__webglFramebuffer[le]);else e.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer)e.deleteRenderbuffer(w.__webglDepthbuffer);if(w.__webglMultisampledFramebuffer)e.deleteFramebuffer(w.__webglMultisampledFramebuffer);if(w.__webglColorRenderbuffer){for(let le=0;le<w.__webglColorRenderbuffer.length;le++)if(w.__webglColorRenderbuffer[le])e.deleteRenderbuffer(w.__webglColorRenderbuffer[le])}if(w.__webglDepthRenderbuffer)e.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ue=C.textures;for(let le=0,fe=ue.length;le<fe;le++){let Me=i.get(ue[le]);if(Me.__webglTexture)e.deleteTexture(Me.__webglTexture),o.memory.textures--;i.remove(ue[le])}i.remove(C)}let q=0;function H(){q=0}function Z(){return q}function ee(C){q=C}function J(){let C=q;if(C>=s.maxTextures)je("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures);return q+=1,C}function ae(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.mipmapsAutoUpdate),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function Ae(C,w){let V=i.get(C);if(C.isVideoTexture)et(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let ue=C.image;if(ue===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(V,C,w);return}}else if(C.isExternalTexture)V.__webglTexture=C.sourceTexture?C.sourceTexture:null;n.bindTexture(e.TEXTURE_2D,V.__webglTexture,e.TEXTURE0+w)}function Ne(C,w){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Le(V,C,w);return}else if(C.isExternalTexture)V.__webglTexture=C.sourceTexture?C.sourceTexture:null;n.bindTexture(e.TEXTURE_2D_ARRAY,V.__webglTexture,e.TEXTURE0+w)}function Oe(C,w){let V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Le(V,C,w);return}n.bindTexture(e.TEXTURE_3D,V.__webglTexture,e.TEXTURE0+w)}function Ce(C,w){let V=i.get(C);if(C.version>0&&V.__version!==C.version){Ie(V,C,w);return}n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture,e.TEXTURE0+w)}let lt={[vs]:e.REPEAT,[Ur]:e.CLAMP_TO_EDGE,[qa]:e.MIRRORED_REPEAT},He={[Hn]:e.NEAREST,[Ya]:e.NEAREST_MIPMAP_NEAREST,[Ys]:e.NEAREST_MIPMAP_LINEAR,[sn]:e.LINEAR,[Br]:e.LINEAR_MIPMAP_NEAREST,[jn]:e.LINEAR_MIPMAP_LINEAR},ze={[Ff]:e.NEVER,[Ch]:e.ALWAYS,[Uf]:e.LESS,[Eh]:e.LEQUAL,[Bf]:e.EQUAL,[Rh]:e.GEQUAL,[zf]:e.GREATER,[Gf]:e.NOTEQUAL};function ot(C,w){if(w.type===ji&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===sn||w.magFilter===Br||w.magFilter===Ys||w.magFilter===jn||w.minFilter===sn||w.minFilter===Br||w.minFilter===Ys||w.minFilter===jn))je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(C,e.TEXTURE_WRAP_S,lt[w.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,lt[w.wrapT]),C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)e.texParameteri(C,e.TEXTURE_WRAP_R,lt[w.wrapR]);if(e.texParameteri(C,e.TEXTURE_MAG_FILTER,He[w.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,He[w.minFilter]),w.compareFunction)e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,ze[w.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Hn)return;if(w.minFilter!==Ys&&w.minFilter!==jn)return;if(w.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function se(C,w){let V=!1;if(C.__webglInit===void 0)C.__webglInit=!0,w.addEventListener("dispose",I),E(w);let ue=w.source,le=f.get(ue);if(le===void 0)le={},f.set(ue,le);let fe=ae(w);if(fe!==C.__cacheKey){if(le[fe]===void 0)le[fe]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,V=!0;le[fe].usedTimes++;let Me=le[C.__cacheKey];if(Me!==void 0){if(le[C.__cacheKey].usedTimes--,Me.usedTimes===0)F(w)}C.__cacheKey=fe,C.__webglTexture=le[fe].texture}return V}function ge(C,w,V){return Math.floor(Math.floor(C/V)/w)}function ve(C,w,V,ue){let fe=C.updateRanges;if(fe.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,w.width,w.height,V,ue,w.data);else{fe.sort((O,re)=>O.start-re.start);let Me=0;for(let O=1;O<fe.length;O++){let re=fe[Me],te=fe[O],xe=re.start+re.count,ye=ge(te.start,w.width,4),Te=ge(re.start,w.width,4);if(te.start<=xe+1&&ye===Te&&ge(te.start+te.count-1,w.width,4)===ye)re.count=Math.max(re.count,te.start+te.count-re.start);else++Me,fe[Me]=te}fe.length=Me+1;let Q=n.getParameter(e.UNPACK_ROW_LENGTH),ne=n.getParameter(e.UNPACK_SKIP_PIXELS),Se=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,w.width);for(let O=0,re=fe.length;O<re;O++){let te=fe[O],xe=Math.floor(te.start/4),ye=Math.ceil(te.count/4),Te=xe%w.width,D=Math.floor(xe/w.width),pe=ye,_e=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(e.UNPACK_SKIP_ROWS,D),n.texSubImage2D(e.TEXTURE_2D,0,Te,D,pe,1,V,ue,w.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(e.UNPACK_SKIP_ROWS,Se)}}function Le(C,w,V){let ue=e.TEXTURE_2D;if(w.isDataArrayTexture||w.isCompressedArrayTexture)ue=e.TEXTURE_2D_ARRAY;if(w.isData3DTexture)ue=e.TEXTURE_3D;let le=se(C,w),fe=w.source;n.bindTexture(ue,C.__webglTexture,e.TEXTURE0+V);let Me=i.get(fe);if(fe.version!==Me.__version||le===!0){if(n.activeTexture(e.TEXTURE0+V),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let _e=dt.getPrimaries(dt.workingColorSpace),Ue=w.colorSpace===js?null:dt.getPrimaries(w.colorSpace),nt=w.colorSpace===js||_e===Ue?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}n.pixelStorei(e.UNPACK_ALIGNMENT,w.unpackAlignment);let ne=_(w.image,!1,s.maxTextureSize);ne=Ye(w,ne);let Se=r.convert(w.format,w.colorSpace),O=r.convert(w.type),re=T(w.internalFormat,Se,O,w.normalized,w.colorSpace,w.isVideoTexture);ot(ue,w);let te,xe=w.mipmaps,ye=w.isVideoTexture!==!0,Te=Me.__version===void 0||le===!0,D=fe.dataReady,pe=M(w,ne);if(w.isDepthTexture){if(re=x(w.format===_s,w.type),Te)if(ye)n.texStorage2D(e.TEXTURE_2D,1,re,ne.width,ne.height);else n.texImage2D(e.TEXTURE_2D,0,re,ne.width,ne.height,0,Se,O,null)}else if(w.isDataTexture)if(xe.length>0){if(ye&&Te)n.texStorage2D(e.TEXTURE_2D,pe,re,xe[0].width,xe[0].height);for(let _e=0,Ue=xe.length;_e<Ue;_e++)if(te=xe[_e],ye){if(D)n.texSubImage2D(e.TEXTURE_2D,_e,0,0,te.width,te.height,Se,O,te.data)}else n.texImage2D(e.TEXTURE_2D,_e,re,te.width,te.height,0,Se,O,te.data);w.generateMipmaps=!1}else if(ye){if(Te)n.texStorage2D(e.TEXTURE_2D,pe,re,ne.width,ne.height);if(D)ve(w,ne,Se,O)}else n.texImage2D(e.TEXTURE_2D,0,re,ne.width,ne.height,0,Se,O,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){if(ye&&Te)n.texStorage3D(e.TEXTURE_2D_ARRAY,pe,re,xe[0].width,xe[0].height,ne.depth);for(let _e=0,Ue=xe.length;_e<Ue;_e++)if(te=xe[_e],w.format!==bi)if(Se!==null)if(ye){if(D)if(w.layerUpdates.size>0){let nt=su(te.width,te.height,w.format,w.type);for(let Re of w.layerUpdates){let mt=te.data.subarray(Re*nt/te.data.BYTES_PER_ELEMENT,(Re+1)*nt/te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,_e,0,0,Re,te.width,te.height,1,Se,mt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,_e,0,0,0,te.width,te.height,ne.depth,Se,te.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,_e,re,te.width,te.height,ne.depth,0,te.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ye){if(D)n.texSubImage3D(e.TEXTURE_2D_ARRAY,_e,0,0,0,te.width,te.height,ne.depth,Se,O,te.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,_e,re,te.width,te.height,ne.depth,0,Se,O,te.data);if(w.layerUpdates.size>0)w.clearLayerUpdates()}else{if(ye&&Te)n.texStorage2D(e.TEXTURE_2D,pe,re,xe[0].width,xe[0].height);for(let _e=0,Ue=xe.length;_e<Ue;_e++)if(te=xe[_e],w.format!==bi)if(Se!==null)if(ye){if(D)n.compressedTexSubImage2D(e.TEXTURE_2D,_e,0,0,te.width,te.height,Se,te.data)}else n.compressedTexImage2D(e.TEXTURE_2D,_e,re,te.width,te.height,0,te.data);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(ye){if(D)n.texSubImage2D(e.TEXTURE_2D,_e,0,0,te.width,te.height,Se,O,te.data)}else n.texImage2D(e.TEXTURE_2D,_e,re,te.width,te.height,0,Se,O,te.data)}else if(w.isDataArrayTexture)if(ye){if(Te)n.texStorage3D(e.TEXTURE_2D_ARRAY,pe,re,ne.width,ne.height,ne.depth);if(D)if(w.layerUpdates.size>0){let _e=su(ne.width,ne.height,w.format,w.type);for(let Ue of w.layerUpdates){let nt=ne.data.subarray(Ue*_e/ne.data.BYTES_PER_ELEMENT,(Ue+1)*_e/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Ue,ne.width,ne.height,1,Se,O,nt)}w.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Se,O,ne.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,re,ne.width,ne.height,ne.depth,0,Se,O,ne.data);else if(w.isData3DTexture)if(ye){if(Te)n.texStorage3D(e.TEXTURE_3D,pe,re,ne.width,ne.height,ne.depth);if(D)n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Se,O,ne.data)}else n.texImage3D(e.TEXTURE_3D,0,re,ne.width,ne.height,ne.depth,0,Se,O,ne.data);else if(w.isFramebufferTexture){if(Te)if(ye)n.texStorage2D(e.TEXTURE_2D,pe,re,ne.width,ne.height);else{let _e=ne.width,Ue=ne.height;for(let nt=0;nt<pe;nt++)n.texImage2D(e.TEXTURE_2D,nt,re,_e,Ue,0,Se,O,null),_e>>=1,Ue>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in e){let _e=e.canvas;if(!_e.hasAttribute("layoutsubtree"))_e.setAttribute("layoutsubtree","true");if(ne.parentNode!==_e){_e.appendChild(ne),d.add(w),_e.onpaint=(Ue)=>{let nt=Ue.changedElements;for(let Re of d)if(nt.includes(Re.image))Re.needsUpdate=!0},_e.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ne);else{let{RGBA:nt,RGBA:Re,UNSIGNED_BYTE:mt}=e;e.texElementImage2D(e.TEXTURE_2D,0,nt,Re,mt,ne)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(xe.length>0){if(ye&&Te){let _e=St(xe[0]);n.texStorage2D(e.TEXTURE_2D,pe,re,_e.width,_e.height)}for(let _e=0,Ue=xe.length;_e<Ue;_e++)if(te=xe[_e],ye){if(D)n.texSubImage2D(e.TEXTURE_2D,_e,0,0,Se,O,te)}else n.texImage2D(e.TEXTURE_2D,_e,re,Se,O,te);w.generateMipmaps=!1}else if(ye){if(Te){let _e=St(ne);n.texStorage2D(e.TEXTURE_2D,pe,re,_e.width,_e.height)}if(D)n.texSubImage2D(e.TEXTURE_2D,0,0,0,Se,O,ne)}else n.texImage2D(e.TEXTURE_2D,0,re,Se,O,ne);if(b(w)&&w.mipmapsAutoUpdate===!0)y(ue);if(Me.__version=fe.version,w.onUpdate)w.onUpdate(w)}C.__version=w.version}function Ie(C,w,V){if(w.image.length!==6)return;let ue=se(C,w),le=w.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+V);let fe=i.get(le);if(le.version!==fe.__version||ue===!0){n.activeTexture(e.TEXTURE0+V);let Me=dt.getPrimaries(dt.workingColorSpace),Q=w.colorSpace===js?null:dt.getPrimaries(w.colorSpace),ne=w.colorSpace===js||Me===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Se=w.isCompressedTexture||w.image[0].isCompressedTexture,O=w.image[0]&&w.image[0].isDataTexture,re=[];for(let Re=0;Re<6;Re++){if(!Se&&!O)re[Re]=_(w.image[Re],!0,s.maxCubemapSize);else re[Re]=O?w.image[Re].image:w.image[Re];re[Re]=Ye(w,re[Re])}let te=re[0],xe=r.convert(w.format,w.colorSpace),ye=r.convert(w.type),Te=T(w.internalFormat,xe,ye,w.normalized,w.colorSpace),D=w.isVideoTexture!==!0,pe=fe.__version===void 0||ue===!0,_e=le.dataReady,Ue=M(w,te);ot(e.TEXTURE_CUBE_MAP,w);let nt;if(w.isDepthTexture){if(Te=x(w.format===_s,w.type),pe)if(D)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,Te,te.width,te.height);else for(let Re=0;Re<6;Re++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Te,te.width,te.height,0,xe,ye,null)}else if(Se){if(D&&pe)n.texStorage2D(e.TEXTURE_CUBE_MAP,Ue,Te,te.width,te.height);for(let Re=0;Re<6;Re++){nt=re[Re].mipmaps;for(let mt=0;mt<nt.length;mt++){let ft=nt[mt];if(w.format!==bi)if(xe!==null)if(D){if(_e)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,mt,0,0,ft.width,ft.height,xe,ft.data)}else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,mt,Te,ft.width,ft.height,0,ft.data);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(D){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,mt,0,0,ft.width,ft.height,xe,ye,ft.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,mt,Te,ft.width,ft.height,0,xe,ye,ft.data)}}}else{if(nt=w.mipmaps,D&&pe){if(nt.length>0)Ue++;let Re=St(re[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Ue,Te,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(O){if(D){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,re[Re].width,re[Re].height,xe,ye,re[Re].data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Te,re[Re].width,re[Re].height,0,xe,ye,re[Re].data);for(let mt=0;mt<nt.length;mt++){let bn=nt[mt].image[Re].image;if(D){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,mt+1,0,0,bn.width,bn.height,xe,ye,bn.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,mt+1,Te,bn.width,bn.height,0,xe,ye,bn.data)}}else{if(D){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,xe,ye,re[Re])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Te,xe,ye,re[Re]);for(let mt=0;mt<nt.length;mt++){let ft=nt[mt];if(D){if(_e)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,mt+1,0,0,xe,ye,ft.image[Re])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Re,mt+1,Te,xe,ye,ft.image[Re])}}}if(b(w)&&w.mipmapsAutoUpdate===!0)y(e.TEXTURE_CUBE_MAP);if(fe.__version=le.version,w.onUpdate)w.onUpdate(w)}C.__version=w.version}function Xe(C,w,V,ue,le,fe){let Me=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),ne=T(V.internalFormat,Me,Q,V.normalized,V.colorSpace),Se=i.get(w),O=i.get(V);if(O.__renderTarget=w,!Se.__hasExternalTextures){let re=Math.max(1,w.width>>fe),te=Math.max(1,w.height>>fe);if(le===e.TEXTURE_3D||le===e.TEXTURE_2D_ARRAY)n.texImage3D(le,fe,ne,re,te,w.depth,0,Me,Q,null);else n.texImage2D(le,fe,ne,re,te,0,Me,Q,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,C),yt(w))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ue,le,O.__webglTexture,0,be(w));else if(le===e.TEXTURE_2D||le>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,ue,le,O.__webglTexture,fe);n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(C,w,V){if(e.bindRenderbuffer(e.RENDERBUFFER,C),w.depthBuffer){let ue=w.depthTexture,le=ue&&ue.isDepthTexture?ue.type:null,fe=x(w.stencilBuffer,le),Me=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(yt(w))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,be(w),fe,w.width,w.height);else if(V)e.renderbufferStorageMultisample(e.RENDERBUFFER,be(w),fe,w.width,w.height);else e.renderbufferStorage(e.RENDERBUFFER,fe,w.width,w.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,Me,e.RENDERBUFFER,C)}else{let ue=w.textures;for(let le=0;le<ue.length;le++){let fe=ue[le],Me=r.convert(fe.format,fe.colorSpace),Q=r.convert(fe.type),ne=T(fe.internalFormat,Me,Q,fe.normalized,fe.colorSpace);if(yt(w))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,be(w),ne,w.width,w.height);else if(V)e.renderbufferStorageMultisample(e.RENDERBUFFER,be(w),ne,w.width,w.height);else e.renderbufferStorage(e.RENDERBUFFER,ne,w.width,w.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ce(C,w,V){let ue=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=i.get(w.depthTexture);le.__renderTarget=w;let fe=ue?w.depthTexture.image[0]:w.depthTexture.image;if(!le.__webglTexture||fe.width!==w.width||fe.height!==w.height)fe.width=w.width,fe.height=w.height,w.depthTexture.needsUpdate=!0;if(ue)Ce(w.depthTexture,0);else Ae(w.depthTexture,0);let Me=le.__webglTexture,Q=be(w),ne=ue?e.TEXTURE_CUBE_MAP_POSITIVE_X+V:e.TEXTURE_2D,Se=w.depthTexture.format===_s?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(w.depthTexture.format===zr)if(yt(w))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Se,ne,Me,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,Se,ne,Me,0);else if(w.depthTexture.format===_s)if(yt(w))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Se,ne,Me,0,Q);else e.framebufferTexture2D(e.FRAMEBUFFER,Se,ne,Me,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pe(C){let w=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let ue=C.depthTexture;if(w.__depthDisposeCallback)w.__depthDisposeCallback();if(ue){let le=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",le)};ue.addEventListener("dispose",le),w.__depthDisposeCallback=le}w.__boundDepthTexture=ue}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(V)for(let ue=0;ue<6;ue++)ce(w.__webglFramebuffer[ue],C,ue);else if(C.texture.mipmaps.length>0)ce(w.__webglFramebuffer[0],C,0);else ce(w.__webglFramebuffer,C,0);else if(V){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(n.bindFramebuffer(e.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=e.createRenderbuffer(),ke(w.__webglDepthbuffer[ue],C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[ue];e.bindRenderbuffer(e.RENDERBUFFER,fe),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,fe)}}else{if(C.texture.mipmaps.length>0)n.bindFramebuffer(e.FRAMEBUFFER,w.__webglFramebuffer[0]);else n.bindFramebuffer(e.FRAMEBUFFER,w.__webglFramebuffer);if(w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=e.createRenderbuffer(),ke(w.__webglDepthbuffer,C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,fe),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,fe)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function qe(C,w,V){let ue=i.get(C);if(w!==void 0)Xe(ue.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(V!==void 0)Pe(C)}function N(C){let w=C.texture,V=i.get(C),ue=i.get(w);C.addEventListener("dispose",z),E(C);let le=C.textures,fe=C.isWebGLCubeRenderTarget===!0,Me=le.length>1;if(!Me){if(ue.__webglTexture===void 0)ue.__webglTexture=e.createTexture();ue.__version=w.version,o.memory.textures++}if(fe){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let ne=0;ne<w.mipmaps.length;ne++)V.__webglFramebuffer[Q][ne]=e.createFramebuffer()}else V.__webglFramebuffer[Q]=e.createFramebuffer()}else{if(w.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<w.mipmaps.length;Q++)V.__webglFramebuffer[Q]=e.createFramebuffer()}else V.__webglFramebuffer=e.createFramebuffer();if(Me)for(let Q=0,ne=le.length;Q<ne;Q++){let Se=i.get(le[Q]);if(Se.__webglTexture===void 0)Se.__webglTexture=e.createTexture(),o.memory.textures++}if(C.samples>0&&yt(C)===!1){V.__webglMultisampledFramebuffer=e.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<le.length;Q++){let ne=le[Q];V.__webglColorRenderbuffer[Q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let Se=r.convert(ne.format,ne.colorSpace),O=r.convert(ne.type),re=T(ne.internalFormat,Se,O,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),te=be(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,te,re,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer)V.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(V.__webglDepthRenderbuffer,C,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(fe){n.bindTexture(e.TEXTURE_CUBE_MAP,ue.__webglTexture),ot(e.TEXTURE_CUBE_MAP,w);for(let Q=0;Q<6;Q++)if(w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)Xe(V.__webglFramebuffer[Q][ne],C,w,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Xe(V.__webglFramebuffer[Q],C,w,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);if(b(w))y(e.TEXTURE_CUBE_MAP);else if(w.mipmaps.length>0)e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,w.mipmaps.length-1);n.unbindTexture()}else if(Me){for(let Q=0,ne=le.length;Q<ne;Q++){let Se=le[Q],O=i.get(Se),re=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)re=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(re,O.__webglTexture),ot(re,Se),Xe(V.__webglFramebuffer,C,Se,e.COLOR_ATTACHMENT0+Q,re,0),b(Se))y(re)}n.unbindTexture()}else{let Q=e.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)Q=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(Q,ue.__webglTexture),ot(Q,w),w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)Xe(V.__webglFramebuffer[ne],C,w,e.COLOR_ATTACHMENT0,Q,ne);else Xe(V.__webglFramebuffer,C,w,e.COLOR_ATTACHMENT0,Q,0);if(b(w))y(Q);else if(w.mipmaps.length>0)e.texParameteri(Q,e.TEXTURE_MAX_LEVEL,w.mipmaps.length-1);n.unbindTexture()}if(C.depthBuffer)Pe(C)}function vt(C){let w=C.textures;for(let V=0,ue=w.length;V<ue;V++){let le=w[V];if(b(le)&&le.mipmapsAutoUpdate===!0){let fe=S(C),Me=i.get(le).__webglTexture;n.bindTexture(fe,Me),y(fe),n.unbindTexture()}}}let Ke=[];function Mt(C){if(C.samples>0){if(yt(C)===!1){let{textures:w,width:V,height:ue}=C,le=e.COLOR_BUFFER_BIT,fe=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=i.get(C),Q=w.length>1;if(Q)for(let Se=0;Se<w.length;Se++)n.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,null,0);if(n.bindFramebuffer(e.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0)n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]);else n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){if(C.resolveDepthBuffer){if(C.depthBuffer)le|=e.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)le|=e.STENCIL_BUFFER_BIT}if(Q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);let O=i.get(w[Se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,O,0)}if(e.blitFramebuffer(0,0,V,ue,0,0,V,ue,le,e.NEAREST),l===!0){if(Ke.length=0,Ke.push(e.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)Ke.push(fe);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ke)}}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Q)for(let Se=0;Se<w.length;Se++){n.bindFramebuffer(e.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);let O=i.get(w[Se]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,O,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let w=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[w])}}}function be(C){return Math.min(s.maxSamples,C.samples)}function yt(C){let w=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function et(C){let w=o.render.frame;if(h.get(C)!==w)h.set(C,w),C.update()}function Ye(C,w){let{colorSpace:V,format:ue,type:le}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return w;if(V!==Jn&&V!==js)if(dt.getTransfer(V)===Dt){if(ue!==bi||le!==_i)je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else it("WebGLTextures: Unsupported texture color space:",V);return w}function St(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)c.width=C.displayWidth,c.height=C.displayHeight;else c.width=C.width,c.height=C.height;return c}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.getTextureUnits=Z,this.setTextureUnits=ee,this.setTexture2D=Ae,this.setTexture2DArray=Ne,this.setTexture3D=Oe,this.setTextureCube=Ce,this.rebindTextures=qe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=yt,this.dispose=X}function Ib(e,t){function n(i,s=js){let r,o=dt.getTransfer(s);if(i===_i)return e.UNSIGNED_BYTE;if(i===Gc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===kc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Pf)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===If)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rf)return e.BYTE;if(i===Cf)return e.SHORT;if(i===Io)return e.UNSIGNED_SHORT;if(i===zc)return e.INT;if(i===ys)return e.UNSIGNED_INT;if(i===ji)return e.FLOAT;if(i===$t)return e.HALF_FLOAT;if(i===Lf)return e.ALPHA;if(i===Df)return e.RGB;if(i===bi)return e.RGBA;if(i===zr)return e.DEPTH_COMPONENT;if(i===_s)return e.DEPTH_STENCIL;if(i===Nf)return e.RED;if(i===Hc)return e.RED_INTEGER;if(i===Zs)return e.RG;if(i===Vc)return e.RG_INTEGER;if(i===Wc)return e.RGBA_INTEGER;if(i===Ka||i===Za||i===ja||i===Ja)if(o===Dt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xc||i===qc||i===Yc||i===Kc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zc||i===jc||i===Jc||i===Qc||i===$c||i===Qa||i===eh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Zc||i===jc)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jc)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qc)return r.COMPRESSED_R11_EAC;if(i===$c)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qa)return r.COMPRESSED_RG11_EAC;if(i===eh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===th||i===nh||i===ih||i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===hh||i===uh||i===dh||i===fh||i===ph)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===th)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ih)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ah)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ch)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fh)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ph)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mh||i===gh||i===xh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mh)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vh||i===yh||i===$a||i===_h)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===vh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Ks)return e.UNSIGNED_INT_24_8;return e[i]!==void 0?e[i]:null}return{convert:n}}var Lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Db=`
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

}`;class kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new hl(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=n}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:Lb,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qe(new rn(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hp extends Mi{constructor(e,t){super();let n=this,i=null,s=1,r=null,o="local-floor",a=1,l=null,c=null,h=null,d=null,u=null,f=null,m=typeof XRWebGLBinding<"u",v=new kp,p={},g=t.getContextAttributes(),_=null,b=null,y=[],S=[],T=new ie,x=null,M=null,E=new Zt;E.viewport=new Pt;let L=new Zt;L.viewport=new Pt;let I=[E,L],z=new $h,W=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=y[J];if(ae===void 0)ae=new Oo,y[J]=ae;return ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=y[J];if(ae===void 0)ae=new Oo,y[J]=ae;return ae.getGripSpace()},this.getHand=function(J){let ae=y[J];if(ae===void 0)ae=new Oo,y[J]=ae;return ae.getHandSpace()};function X(J){let ae=S.indexOf(J.inputSource);if(ae===-1)return;let Ae=y[ae];if(Ae!==void 0)Ae.update(J.inputSource,J.frame,l||r),Ae.dispatchEvent({type:J.type,data:J.inputSource})}function G(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",F);for(let J=0;J<y.length;J++){let ae=S[J];if(ae===null)continue;S[J]=null,y[J].disconnect(ae)}W=null,P=null,v.reset();for(let J in p)delete p[J];if(e.setRenderTarget(_),u=null,d=null,h=null,i=null,b=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(T.width,T.height,!1),M!==null){let J=M.camera;J.fov=M.fov,J.zoom=M.zoom,J.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){if(s=J,n.isPresenting===!0)je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){if(o=J,n.isPresenting===!0)je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(h===null&&m)h=new XRWebGLBinding(i,t);return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",G),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0)await t.makeXRCompatible();if(x=e.getPixelRatio(),e.getSize(T),!(m&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,Ae),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Yt(u.framebufferWidth,u.framebufferHeight,{format:bi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ae=null,Ne=null,Oe=null;if(g.depth)Oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=g.stencil?_s:zr,Ne=g.stencil?Ks:ys;let Ce={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Yt(d.textureWidth,d.textureHeight,{format:bi,type:_i,depthTexture:new Ms(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function F(J){for(let ae=0;ae<J.removed.length;ae++){let Ae=J.removed[ae],Ne=S.indexOf(Ae);if(Ne>=0)S[Ne]=null,y[Ne].disconnect(Ae)}for(let ae=0;ae<J.added.length;ae++){let Ae=J.added[ae],Ne=S.indexOf(Ae);if(Ne===-1){for(let Ce=0;Ce<y.length;Ce++)if(Ce>=S.length){S.push(Ae),Ne=Ce;break}else if(S[Ce]===null){S[Ce]=Ae,Ne=Ce;break}if(Ne===-1)break}let Oe=y[Ne];if(Oe)Oe.connect(Ae)}}function K(J,ae){if(ae===null)J.matrixWorld.copy(J.matrix);else J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix);J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let{near:ae,far:Ae}=J;if(v.texture!==null){if(v.depthNear>0)ae=v.depthNear;if(v.depthFar>0)Ae=v.depthFar}if(z.near=L.near=E.near=ae,z.far=L.far=E.far=Ae,W!==z.near||P!==z.far)i.updateRenderState({depthNear:z.near,depthFar:z.far}),W=z.near,P=z.far;z.layers.mask=J.layers.mask|6,E.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Ne=J.parent,Oe=z.cameras;K(z,Ne);for(let Ce=0;Ce<Oe.length;Ce++)K(Oe[Ce],Ne);if(z.projectionMatrix.copy(E.projectionMatrix),z.projectionMatrixInverse.copy(E.projectionMatrixInverse),M===null&&J.isPerspectiveCamera)M={camera:J,fov:J.fov,zoom:J.zoom};q(J,z,Ne)};function q(J,ae,Ae){if(Ae===null)J.matrix.copy(ae.matrixWorld);else J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld);if(J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera)J.fov=Vs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1}this.getCamera=function(){return z},this.getFoveation=function(){if(d===null&&u===null)return;return a},this.setFoveation=function(J){if(a=J,d!==null)d.fixedFoveation=J;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=J},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(z)},this.getCameraTexture=function(J){return p[J]};let H=null;function Z(J,ae){if(c=ae.getViewerPose(l||r),f=ae,c!==null){let Ae=c.views;if(u!==null)e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b);let Ne=!1;if(Ae.length!==z.cameras.length)z.cameras.length=0,Ne=!0;for(let He=0;He<Ae.length;He++){let ze=Ae[He],ot=null;if(u!==null)ot=u.getViewport(ze);else{let ge=h.getViewSubImage(d,ze);if(ot=ge.viewport,He===0)e.setRenderTargetTextures(b,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(b)}let se=I[He];if(se===void 0)se=new Zt,se.layers.enable(He),se.viewport=new Pt,I[He]=se;if(se.matrix.fromArray(ze.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ze.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ot.x,ot.y,ot.width,ot.height),He===0)z.matrix.copy(se.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);if(Ne===!0)z.cameras.push(se)}let Oe=i.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){h=n.getBinding();let He=h.getDepthInformation(Ae[0]);if(He&&He.isValid&&He.texture)v.init(He,i.renderState)}if(Oe&&Oe.includes("camera-access")&&m){e.state.unbindTexture(),h=n.getBinding();for(let He=0;He<Ae.length;He++){let ze=Ae[He].camera;if(ze){let ot=p[ze];if(!ot)ot=new hl,p[ze]=ot;let se=h.getCameraImage(ze);ot.sourceTexture=se}}}}for(let Ae=0;Ae<y.length;Ae++){let Ne=S[Ae],Oe=y[Ae];if(Ne!==null&&Oe!==void 0)Oe.update(Ne,ae,l||r)}if(H)H(J,ae);if(ae.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:ae});f=null}let ee=new Ap;ee.setAnimationLoop(Z),this.setAnimationLoop=function(J){H=J},this.dispose=function(){}}}var Nb=new Je,Vp=new at;Vp.set(-1,0,0,0,1,0,0,0,1);function Ob(e,t){function n(p,g){if(p.matrixAutoUpdate===!0)p.updateMatrix();g.value.copy(p.matrix)}function i(p,g){if(g.color.getRGB(p.fogColor.value,Wh(e)),g.isFog)p.fogNear.value=g.near,p.fogFar.value=g.far;else if(g.isFogExp2)p.fogDensity.value=g.density}function s(p,g,_,b,y){if(g.isNodeMaterial)g.uniformsNeedUpdate=!1;else if(g.isMeshBasicMaterial)r(p,g);else if(g.isMeshLambertMaterial){if(r(p,g),g.envMap)p.envMapIntensity.value=g.envMapIntensity}else if(g.isMeshToonMaterial)r(p,g),d(p,g);else if(g.isMeshPhongMaterial){if(r(p,g),h(p,g),g.envMap)p.envMapIntensity.value=g.envMapIntensity}else if(g.isMeshStandardMaterial){if(r(p,g),u(p,g),g.isMeshPhysicalMaterial)f(p,g,y)}else if(g.isMeshMatcapMaterial)r(p,g),m(p,g);else if(g.isMeshDepthMaterial)r(p,g);else if(g.isMeshDistanceMaterial)r(p,g),v(p,g);else if(g.isMeshNormalMaterial)r(p,g);else if(g.isLineBasicMaterial){if(o(p,g),g.isLineDashedMaterial)a(p,g)}else if(g.isPointsMaterial)l(p,g,_,b);else if(g.isSpriteMaterial)c(p,g);else if(g.isShadowMaterial)p.color.value.copy(g.color),p.opacity.value=g.opacity;else if(g.isShaderMaterial)g.uniformsNeedUpdate=!1}function r(p,g){if(p.opacity.value=g.opacity,g.color)p.diffuse.value.copy(g.color);if(g.emissive)p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity);if(g.map)p.map.value=g.map,n(g.map,p.mapTransform);if(g.alphaMap)p.alphaMap.value=g.alphaMap,n(g.alphaMap,p.alphaMapTransform);if(g.bumpMap){if(p.bumpMap.value=g.bumpMap,n(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===nn)p.bumpScale.value*=-1}if(g.normalMap){if(p.normalMap.value=g.normalMap,n(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===nn)p.normalScale.value.negate()}if(g.displacementMap)p.displacementMap.value=g.displacementMap,n(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias;if(g.emissiveMap)p.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,p.emissiveMapTransform);if(g.specularMap)p.specularMap.value=g.specularMap,n(g.specularMap,p.specularMapTransform);if(g.alphaTest>0)p.alphaTest.value=g.alphaTest;let _=t.get(g),{envMap:b,envMapRotation:y}=_;if(b){if(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1)p.envMapRotation.value.premultiply(Vp);p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio}if(g.lightMap)p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,p.lightMapTransform);if(g.aoMap)p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,p.aoMapTransform)}function o(p,g){if(p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map)p.map.value=g.map,n(g.map,p.mapTransform)}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,b){if(p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=b*0.5,g.map)p.map.value=g.map,n(g.map,p.uvTransform);if(g.alphaMap)p.alphaMap.value=g.alphaMap,n(g.alphaMap,p.alphaMapTransform);if(g.alphaTest>0)p.alphaTest.value=g.alphaTest}function c(p,g){if(p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map)p.map.value=g.map,n(g.map,p.mapTransform);if(g.alphaMap)p.alphaMap.value=g.alphaMap,n(g.alphaMap,p.alphaMapTransform);if(g.alphaTest>0)p.alphaTest.value=g.alphaTest}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,0.0001)}function d(p,g){if(g.gradientMap)p.gradientMap.value=g.gradientMap}function u(p,g){if(p.metalness.value=g.metalness,g.metalnessMap)p.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=g.roughness,g.roughnessMap)p.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,p.roughnessMapTransform);if(g.envMap)p.envMapIntensity.value=g.envMapIntensity}function f(p,g,_){if(p.ior.value=g.ior,g.diffuseRoughness>0){if(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap)p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,n(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform)}if(g.sheen>0){if(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap)p.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,p.sheenColorMapTransform);if(g.sheenRoughnessMap)p.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(g.clearcoat>0){if(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap)p.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,p.clearcoatMapTransform);if(g.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(g.clearcoatNormalMap){if(p.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn)p.clearcoatNormalScale.value.negate()}}if(g.dispersion>0)p.dispersion.value=g.dispersion;if(g.retroreflectivity>0)p.retroreflectivity.value=g.retroreflectivity;if(g.iridescence>0){if(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap)p.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,p.iridescenceMapTransform);if(g.iridescenceThicknessMap)p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(g.transmission>0){if(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap)p.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=g.thickness,g.thicknessMap)p.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)}if(g.anisotropy>0){if(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap)p.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap)p.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,p.specularColorMapTransform);if(g.specularIntensityMap)p.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,p.specularIntensityMapTransform)}function m(p,g){if(g.matcap)p.matcap.value=g.matcap}function v(p,g){let _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Fb(e,t,n,i){let s={},r={};function o(_,b){let y=b.program;i.uniformBlockBinding(_,y,s[_.id])}function a(_,b){let y=s[_.id];if(y===void 0)m(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",p);let S=b.program;i.updateUBOMapping(_,S);let T=t.render.frame;if(r[_.id]!==T)c(_),r[_.id]=T}function l(_){let b=e.createBuffer(),{__size:y,usage:S}=_;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,y,S),e.bindBuffer(e.UNIFORM_BUFFER,null),b}function c(_){let b=s[_.id],{uniforms:y,__cache:S}=_;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let T=0,x=y.length;T<x;T++){let M=y[T];if(Array.isArray(M))for(let E=0,L=M.length;E<L;E++)h(M[E],T,E,S);else h(M,T,0,S)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(_,b,y,S){if(u(_,b,y,S)===!0){let{__offset:T,value:x}=_;if(Array.isArray(x)){let M=0;for(let E=0;E<x.length;E++){let L=x[E],I=v(L,!0);d(L,_.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,T,_.__data)}}function d(_,b,y){if(typeof _==="number"||typeof _==="boolean")b[y]=_;else if(_.isMatrix3)b[y]=_.elements[0],b[y+1]=_.elements[1],b[y+2]=_.elements[2],b[y+3]=0,b[y+4]=_.elements[3],b[y+5]=_.elements[4],b[y+6]=_.elements[5],b[y+7]=0,b[y+8]=_.elements[6],b[y+9]=_.elements[7],b[y+10]=_.elements[8],b[y+11]=0;else if(ArrayBuffer.isView(_))b.set(_.subarray(0,b.length-y),y);else _.toArray(b,y)}function u(_,b,y,S){let T=_.value,x=b+"_"+y;if(Array.isArray(T)){if(S[x]===void 0)S[x]=[];let M=S[x],E=!1;for(let L=0;L<T.length;L++)if(f(T[L],M,L)===!0)E=!0;return E}return f(T,S,x)}function f(_,b,y){if(b[y]===void 0){if(typeof _==="number"||typeof _==="boolean")b[y]=_;else if(ArrayBuffer.isView(_))b[y]=_.slice();else b[y]=_.clone();return!0}else{let S=b[y];if(typeof _==="number"||typeof _==="boolean"){if(S!==_)return b[y]=_,!0}else if(ArrayBuffer.isView(_))return!0;else if(S.equals(_)===!1)return S.copy(_),!0}return!1}function m(_){let b=_.uniforms,y=0,S=16;for(let x=0,M=b.length;x<M;x++){let E=Array.isArray(b[x])?b[x]:[b[x]];for(let L=0,I=E.length;L<I;L++){let z=E[L],W=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(b[x])||Array.isArray(z.value),X=y;for(let F=0,K=W.length;F<K;F++){let q=W[F],H=v(q,P),Z=y%S,ee=Z%H.boundary,J=Z+ee;if(y+=ee,J!==0&&S-J<H.storage)y+=S-J;if(F===0)X=y;y+=H.storage}let G=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new G((y-X)/Float32Array.BYTES_PER_ELEMENT),z.__offset=X}}let T=y%S;if(T>0)y+=S-T;return _.__size=y,_.__cache={},this}function v(_,b){let y={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")y.boundary=4,y.storage=4;else if(_.isVector2)y.boundary=8,y.storage=8;else if(_.isVector3||_.isColor)y.boundary=16,y.storage=12;else if(_.isVector4)y.boundary=16,y.storage=16;else if(_.isMatrix3)y.boundary=16,y.storage=48;else if(_.isMatrix4)y.boundary=16,y.storage=64;else if(_.isTexture)je("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(_))y.boundary=16,y.storage=_.byteLength;else je("WebGLRenderer: Unsupported uniform value type.",_);if(b===!0)y.boundary=16,y.storage=Math.ceil(y.storage/16)*16;return y}function p(_){let b=_.target;b.removeEventListener("dispose",p),e.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let _ in s)e.deleteBuffer(s[_]);s={},r={}}return{bind:o,update:a,dispose:g}}var Ub=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function Bb(){if(Di===null)Di=new Js(Ub,16,16,Zs,$t),Di.name="DFG_LUT",Di.minFilter=sn,Di.magFilter=sn,Di.wrapS=Ur,Di.wrapT=Ur,Di.generateMipmaps=!1,Di.needsUpdate=!0;return Di}class sr{constructor(e={}){let{canvas:t=kf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=_i}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let m=u,v=new Set([Wc,Vc,Hc]),p=new Set([_i,ys,Io,Ks,Gc,kc]),g=new Uint32Array(4),_=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},y=null,S=null,T=[],x=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,L=!1,I=null,z=null,W=null,P=null;this._outputColorSpace=xn;let X=0,G=0,F=null,K=-1,q=null,H=new Pt,Z=new Pt,ee=null,J=new Y(0),ae=0,{width:Ae,height:Ne}=t,Oe=1,Ce=null,lt=null,He=new Pt(0,0,Ae,Ne),ze=new Pt(0,0,Ae,Ne),ot=!1,se=new Ws,ge=new sl,ve=!1,Le=!1,Ie=new Je,Xe=new R,ke=new Pt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function qe(){return F===null?Oe:1}let N=n;function vt(A,B){return t.getContext(A,B)}let Ke,Mt,be,yt,et,Ye,St,C,w,V,ue,le,fe,Me,Q,ne,Se,O,re,te,xe,ye,Te;try{let A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Yd}`);if(t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",nt,!1),N===null){if(N=vt("webgl2",A),N===null)if(vt("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}D()}catch(A){throw t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),it("WebGLRenderer: "+A.message),A}function D(){if(Ke=new Zy(N),Ke.init(),xe=new Ib(N,Ke),Mt=new By(N,Ke,e,xe),be=new Cb(N,Ke),Mt.reversedDepthBuffer&&d)be.buffers.depth.setReversed(!0);z=N.createFramebuffer(),W=N.createFramebuffer(),P=N.createFramebuffer(),yt=new Qy(N),et=new mb,Ye=new Pb(N,Ke,be,et,Mt,xe,yt),St=new Ky(E),C=new ex(N),ye=new Fy(N,C),w=new jy(N,C,yt,ye),V=new e_(N,w,C,ye,yt),O=new $y(N,Mt,Ye),Q=new zy(et),ue=new pb(E,St,Ke,Mt,ye,Q),le=new Ob(E,et),fe=new xb,Me=new Sb(Ke),Se=new Oy(E,St,be,V,f,a),ne=new Rb(E,V,Mt),Te=new Fb(N,yt,Mt,be),re=new Uy(N,Ke,yt),te=new Jy(N,Ke,yt),yt.programs=ue.programs,E.capabilities=Mt,E.extensions=Ke,E.properties=et,E.renderLists=fe,E.shadowMap=ne,E.state=be,E.info=yt}if(m!==_i)M=new n_(m,t.width,t.height,o,i,s);let pe=new Hp(E,N);this.xr=pe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=Ke.get("WEBGL_lose_context");if(A)A.loseContext()},this.forceContextRestore=function(){let A=Ke.get("WEBGL_lose_context");if(A)A.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(A){if(A===void 0)return;Oe=A,this.setSize(Ae,Ne,!1)},this.getSize=function(A){return A.set(Ae,Ne)},this.setSize=function(A,B,j=!0){if(pe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Ae=A,Ne=B,t.width=Math.floor(A*Oe),t.height=Math.floor(B*Oe),j===!0)t.style.width=A+"px",t.style.height=B+"px";if(M!==null)M.setSize(t.width,t.height);this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(Ae*Oe,Ne*Oe).floor()},this.setDrawingBufferSize=function(A,B,j){Ae=A,Ne=B,Oe=j,t.width=Math.floor(A*j),t.height=Math.floor(B*j),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(m===_i){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(He)},this.setViewport=function(A,B,j,U){if(A.isVector4)He.set(A.x,A.y,A.z,A.w);else He.set(A,B,j,U);be.viewport(H.copy(He).multiplyScalar(qe()).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,B,j,U){if(A.isVector4)ze.set(A.x,A.y,A.z,A.w);else ze.set(A,B,j,U);be.scissor(Z.copy(ze).multiplyScalar(qe()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(A){be.setScissorTest(ot=A)},this.setOpaqueSort=function(A){Ce=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,j=!0){let U=0;if(A){let k=!1;if(F!==null){let we=F.texture.format;k=v.has(we)}if(k){let we=F.texture.type,Be=p.has(we),Ee=Se.getClearColor(),Fe=Se.getClearAlpha(),{r:Ze,g:ct,b:_t}=Ee;if(Be)g[0]=Ze,g[1]=ct,g[2]=_t,g[3]=Fe,N.clearBufferuiv(N.COLOR,0,g);else _[0]=Ze,_[1]=ct,_[2]=_t,_[3]=Fe,N.clearBufferiv(N.COLOR,0,_)}else U|=N.COLOR_BUFFER_BIT}if(B)U|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(j)U|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(U!==0)N.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),I=A},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),Se.dispose(),fe.dispose(),Me.dispose(),Ye.dispose(),et.dispose(),St.dispose(),V.dispose(),w.dispose(),ye.dispose(),Te.dispose(),ue.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",oe),pe.removeEventListener("sessionend",me),he.stop()};function _e(A){A.preventDefault(),_o("WebGLRenderer: Context Lost."),L=!0}function Ue(){_o("WebGLRenderer: Context Restored."),L=!1;let A=yt.autoReset,B=ne.enabled,j=ne.autoUpdate,U=ne.needsUpdate,k=ne.type;D(),yt.autoReset=A,ne.enabled=B,ne.autoUpdate=j,ne.needsUpdate=U,ne.type=k}function nt(A){it("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){let B=A.target;B.removeEventListener("dispose",Re),mt(B)}function mt(A){ft(A),et.remove(A)}function ft(A){let B=et.get(A).programs;if(B!==void 0){if(B.forEach(function(j){ue.releaseProgram(j)}),A.isShaderMaterial)ue.releaseShaderCache(A)}}this.renderBufferDirect=function(A,B,j,U,k,we){if(B===null)B=ce;let Be=k.isMesh&&k.matrixWorld.determinantAffine()<0,Ee=Dn(A,B,j,U,k);be.setMaterial(U,Be);let Fe=j.index,Ze=1;if(U.wireframe===!0){if(Fe=w.getWireframeAttribute(j),Fe===void 0)return;Ze=2}let ct=j.drawRange,_t=j.attributes.position,Ve=ct.start*Ze,bt=(ct.start+ct.count)*Ze;if(we!==null)Ve=Math.max(Ve,we.start*Ze),bt=Math.min(bt,(we.start+we.count)*Ze);if(Fe!==null)Ve=Math.max(Ve,0),bt=Math.min(bt,Fe.count);else if(_t!==void 0&&_t!==null)Ve=Math.max(Ve,0),bt=Math.min(bt,_t.count);let en=bt-Ve;if(en<0||en===1/0)return;ye.setup(k,U,Ee,j,Fe);let kt,Bt=re;if(Fe!==null)kt=C.get(Fe),Bt=te,Bt.setIndex(kt);if(k.isMesh)if(U.wireframe===!0)be.setLineWidth(U.wireframeLinewidth*qe()),Bt.setMode(N.LINES);else Bt.setMode(N.TRIANGLES);else if(k.isLine){let Mn=U.linewidth;if(Mn===void 0)Mn=1;if(be.setLineWidth(Mn*qe()),k.isLineSegments)Bt.setMode(N.LINES);else if(k.isLineLoop)Bt.setMode(N.LINE_LOOP);else Bt.setMode(N.LINE_STRIP)}else if(k.isPoints)Bt.setMode(N.POINTS);else if(k.isSprite)Bt.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(!Ke.get("WEBGL_multi_draw")){let{_multiDrawStarts:Mn,_multiDrawCounts:We,_multiDrawCount:On}=k,Ct=Fe?C.get(Fe).bytesPerElement:1,Os=et.get(U).currentProgram.getUniforms();for(let Sn=0;Sn<On;Sn++)Os.setValue(N,"_gl_DrawID",Sn),Bt.render(Mn[Sn]/Ct,We[Sn])}else Bt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Bt.renderInstances(Ve,en,k.count);else if(j.isInstancedBufferGeometry){let Mn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,We=Math.min(j.instanceCount,Mn);Bt.renderInstances(Ve,en,We)}else Bt.render(Ve,en)};function bn(A,B,j,U){if(I!==null&&A.isNodeMaterial)I.setObject(U,A);if(ve===!0)Q.setState(A,j,!1);if(A.transparent===!0&&A.side===Jt&&A.forceSinglePass===!1)A.side=nn,A.needsUpdate=!0,Ot(A,B,U),A.side=xs,A.needsUpdate=!0,Ot(A,B,U),A.side=Jt;else Ot(A,B,U)}this.compile=function(A,B,j=null){if(j===null)j=A;if(I!==null)I.renderStart(A,B,j);if(S=Me.get(j),S.init(B),x.push(S),j.traverseVisible(function(k){if(k.isLight&&k.layers.test(B.layers)){if(S.pushLight(k),k.castShadow)S.pushShadow(k)}}),A!==j)A.traverseVisible(function(k){if(k.isLight&&k.layers.test(B.layers)){if(S.pushLight(k),k.castShadow)S.pushShadow(k)}});if(S.setupLights(),I!==null)I.updateLights(S.state.lightsArray);if(Le=this.localClippingEnabled,ve=Q.init(this.clippingPlanes,Le),ve===!0)Q.setGlobalState(this.clippingPlanes,B);if(I!==null)ne.render(S.state.shadowsArray,j,B);let U=new Set;if(A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let we=k.material;if(we)if(Array.isArray(we))for(let Be=0;Be<we.length;Be++){let Ee=we[Be];bn(Ee,j,B,k),U.add(Ee)}else bn(we,j,B,k),U.add(we)}),S=x.pop(),I!==null)I.renderEnd();return U},this.compileAsync=function(A,B,j=null){let U=this.compile(A,B,j);return new Promise((k)=>{function we(){if(U.forEach(function(Be){let Fe=et.get(Be).currentProgram;if(Fe===void 0||Fe.isReady())U.delete(Be)}),U.size===0){k(A);return}setTimeout(we,10)}if(Ke.get("KHR_parallel_shader_compile")!==null)we();else setTimeout(we,10)})};let zi=null;function ic(A){if(zi)zi(A)}function oe(){he.stop()}function me(){he.start()}let he=new Ap;if(he.setAnimationLoop(ic),typeof self<"u")he.setContext(self);this.setAnimationLoop=function(A){zi=A,pe.setAnimationLoop(A),A===null?he.stop():he.start()},pe.addEventListener("sessionstart",oe),pe.addEventListener("sessionend",me),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(I!==null)I.renderStart(A,B);let j=pe.enabled===!0&&pe.isPresenting===!0,U=M!==null&&(F===null||j)&&M.begin(E,F);if(A.matrixWorldAutoUpdate===!0)A.updateMatrixWorld();if(B.parent===null&&B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(pe.enabled===!0&&pe.isPresenting===!0&&(M===null||M.isCompositing()===!1)){if(pe.cameraAutoUpdate===!0)pe.updateCamera(B);B=pe.getCamera()}if(A.isScene===!0)A.onBeforeRender(E,A,B,F);if(S=Me.get(A,x.length),S.init(B),S.state.textureUnits=Ye.getTextureUnits(),x.push(S),Ie.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera)ge.setFromArrayCamera(B);else se.setFromProjectionMatrix(Ie,Ih,B.reversedDepth);if(Le=this.localClippingEnabled,ve=Q.init(this.clippingPlanes,Le),y=fe.get(A,T.length),y.init(),T.push(y),this.info.render.frame++,pe.enabled===!0&&pe.isPresenting===!0){let Be=E.xr.getDepthSensingMesh();if(Be!==null)de(Be,B,-1/0,E.sortObjects)}if(de(A,B,0,E.sortObjects),y.finish(),I!==null)I.updateLights(S.state.lightsArray);if(E.sortObjects===!0)y.sort(Ce,lt);if(Pe=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Pe)Se.addToRenderList(y,A);if(this.info.autoReset===!0)this.info.reset();if(ve===!0)Q.beginShadows();let k=S.state.shadowsArray;if(ne.render(k,A,B),ve===!0)Q.endShadows();if((U&&M.hasRenderPass())===!1){let Be=y.opaque,Ee=y.transmissive;if(S.setupLights(),B.isArrayCamera){let Fe=B.cameras;if(Ee.length>0)for(let Ze=0,ct=Fe.length;Ze<ct;Ze++){let _t=Fe[Ze];st(Be,Ee,A,_t)}if(Pe)Se.render(A);for(let Ze=0,ct=Fe.length;Ze<ct;Ze++){let _t=Fe[Ze];tt(y,A,_t,_t.viewport)}}else{if(Ee.length>0)st(Be,Ee,A,B);if(Pe)Se.render(A);tt(y,A,B)}}if(F!==null&&G===0)Ye.updateMultisampleRenderTarget(F),Ye.updateRenderTargetMipmap(F);if(U)M.end(E);if(A.isScene===!0)A.onAfterRender(E,A,B);if(ye.resetDefaultState(),K=-1,q=null,x.pop(),x.length>0){if(S=x[x.length-1],Ye.setTextureUnits(S.state.textureUnits),ve===!0)Q.setGlobalState(E.clippingPlanes,S.state.camera)}else S=null;if(T.pop(),T.length>0)y=T[T.length-1];else y=null;if(I!==null)I.renderEnd()};function de(A,B,j,U){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD){if(A.autoUpdate===!0)A.update(B)}else if(A.isLight){if(S.pushLight(A),A.castShadow)S.pushShadow(A)}else if(A.isSprite){let Be=B.isArrayCamera?ge:se;if(!A.frustumCulled||A.intersectsFrustum(Be)){if(U)ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ie);let Ee=V.update(A),Fe=A.material;if(Fe.visible)y.push(A,Ee,Fe,j,ke.z,null,B)}}else if(A.isMesh||A.isLine||A.isPoints){let Be=B.isArrayCamera?ge:se;if(!A.frustumCulled||A.intersectsFrustum(Be)){let Ee=V.update(A),Fe=A.material;if(U){if(A.boundingSphere!==void 0){if(A.boundingSphere===null)A.computeBoundingSphere();ke.copy(A.boundingSphere.center)}else{if(Ee.boundingSphere===null)Ee.computeBoundingSphere();ke.copy(Ee.boundingSphere.center)}ke.applyMatrix4(A.matrixWorld).applyMatrix4(Ie)}if(Array.isArray(Fe)){let Ze=Ee.groups;for(let ct=0,_t=Ze.length;ct<_t;ct++){let Ve=Ze[ct],bt=Fe[Ve.materialIndex];if(bt&&bt.visible)y.push(A,Ee,bt,j,ke.z,Ve,B)}}else if(Fe.visible)y.push(A,Ee,Fe,j,ke.z,null,B)}}}let we=A.children;for(let Be=0,Ee=we.length;Be<Ee;Be++)de(we[Be],B,j,U)}function tt(A,B,j,U){let{opaque:k,transmissive:we,transparent:Be}=A;if(S.setupLightsView(j),ve===!0)Q.setGlobalState(E.clippingPlanes,j);if(U)be.viewport(H.copy(U));if(k.length>0)ht(k,B,j);if(we.length>0)ht(we,B,j);if(Be.length>0)ht(Be,B,j);be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function st(A,B,j,U){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[U.id]===void 0){let Ve=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[U.id]=new Yt(1,1,{generateMipmaps:!0,type:Ve?$t:_i,minFilter:jn,samples:Math.max(4,Mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let we=S.state.transmissionRenderTarget[U.id],Be=U.viewport||H;we.setSize(Be.z*E.transmissionResolutionScale,Be.w*E.transmissionResolutionScale);let Ee=E.getRenderTarget(),Fe=E.getActiveCubeFace(),Ze=E.getActiveMipmapLevel();if(E.setRenderTarget(we),E.getClearColor(J),ae=E.getClearAlpha(),ae<1)E.setClearColor(16777215,0.5);if(E.clear(),Pe)Se.render(j);let ct=E.toneMapping;E.toneMapping=Li;let _t=U.viewport;if(U.viewport!==void 0)U.viewport=void 0;if(S.setupLightsView(U),ve===!0)Q.setGlobalState(E.clippingPlanes,U);if(ht(A,j,U),Ye.updateMultisampleRenderTarget(we),Ye.updateRenderTargetMipmap(we),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let bt=0,en=B.length;bt<en;bt++){let kt=B[bt],{object:Bt,geometry:Mn,material:We,group:On}=kt;if(We.side===Jt&&Bt.layers.test(U.layers)){let Ct=We.side;We.side=nn,We.needsUpdate=!0,Lt(Bt,j,U,Mn,We,On),We.side=Ct,We.needsUpdate=!0,Ve=!0}}if(Ve===!0)Ye.updateMultisampleRenderTarget(we),Ye.updateRenderTargetMipmap(we)}if(E.setRenderTarget(Ee,Fe,Ze),E.setClearColor(J,ae),_t!==void 0)U.viewport=_t;E.toneMapping=ct}function ht(A,B,j){let U=B.isScene===!0?B.overrideMaterial:null;for(let k=0,we=A.length;k<we;k++){let Be=A[k],{object:Ee,geometry:Fe,group:Ze}=Be,ct=Be.material;if(ct.allowOverride===!0&&U!==null)ct=U;if(Ee.layers.test(j.layers))Lt(Ee,B,j,Fe,ct,Ze)}}function Lt(A,B,j,U,k,we){if(I!==null&&k.isNodeMaterial)I.setObject(A,k);if(A.onBeforeRender(E,B,j,U,k,we),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(E,B,j,U,A,we),k.transparent===!0&&k.side===Jt&&k.forceSinglePass===!1)k.side=nn,k.needsUpdate=!0,E.renderBufferDirect(j,B,U,k,A,we),k.side=xs,k.needsUpdate=!0,E.renderBufferDirect(j,B,U,k,A,we),k.side=Jt;else E.renderBufferDirect(j,B,U,k,A,we);A.onAfterRender(E,B,j,U,k,we)}function on(A){let B=0;for(let j of A)if(j.texture!==null)B++;return B}function Ot(A,B,j){if(B.isScene!==!0)B=ce;let U=et.get(A),k=S.state.lights,we=S.state.shadowsArray,Be=k.state.version,Ee=ue.getParameters(A,k.state,we,B,j,S.state.lightProbeGridArray),Fe=ue.getProgramCacheKey(Ee),Ze=U.programs;U.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,U.fog=B.fog;let ct=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;if(U.envMap=St.get(A.envMap||U.environment,ct),U.envMapRotation=U.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ze===void 0)A.addEventListener("dispose",Re),Ze=new Map,U.programs=Ze,U.programVariants=new Map;let _t=Ze.get(Fe);if(_t!==void 0){if(U.currentProgram===_t&&U.lightsStateVersion===Be)return Gn(A,Ee),_t}else{if(Ee.uniforms=ue.getUniforms(A),I!==null&&A.isNodeMaterial)I.build(A,j,Ee);A.onBeforeCompile(Ee,E),_t=ue.acquireProgram(Ee,Fe),Ze.set(Fe,_t),U.uniforms=Ee.uniforms}let Ve=U.uniforms;if(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)Ve.clippingPlanes=Q.uniform;if(Gn(A,Ee),U.needsLights=kn(A),U.lightsStateVersion=Be,U.needsLights)Ve.ambientLightColor.value=k.state.ambient,Ve.lightProbe.value=k.state.probe,Ve.sunLights.value=k.state.sun,Ve.sunLightShadows.value=k.state.sunShadow,Ve.directionalLights.value=k.state.directional,Ve.directionalLightShadows.value=k.state.directionalShadow,Ve.spotLights.value=k.state.spot,Ve.spotLightShadows.value=k.state.spotShadow,Ve.rectAreaLights.value=k.state.rectArea,Ve.ltc_1.value=k.state.rectAreaLTC1,Ve.ltc_2.value=k.state.rectAreaLTC2,Ve.pointLights.value=k.state.point,Ve.pointLightShadows.value=k.state.pointShadow,Ve.hemisphereLights.value=k.state.hemi,Ve.sunShadowMatrix.value=k.state.sunShadowMatrix,Ve.sunShadowCascade.value=k.state.sunShadowCascade,Ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ve.spotLightMatrix.value=k.state.spotLightMatrix,Ve.spotLightMap.value=k.state.spotLightMap,Ve.pointShadowMatrix.value=k.state.pointShadowMatrix;return U.numLightProbeGrids=on(S.state.lightProbeGridArray),U.currentProgram=_t,U.uniformsList=null,_t}function an(A,B,j,U,k){let we=et.get(A),Be=we.currentProgram.id+","+U+","+k,Ee=we.programVariants.get(Be);if(Ee===void 0)Ee=Ot(A,B,j),we.programVariants.set(Be,Ee);else we.currentProgram=Ee,we.uniformsList=null,we.outputColorSpace=U,we.toneMapping=k;return Ee}function Ln(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Zo.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Gn(A,B){let j=et.get(A);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Dn(A,B,j,U,k){if(B.isScene!==!0)B=ce;Ye.resetTextureUnits();let we=B.fog,Be=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?B.environment:null,Ee=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:dt.workingColorSpace,Fe=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Ze=St.get(U.envMap||Be,Fe),ct=U.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,_t=!!j.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ve=!!j.morphAttributes.position,bt=!!j.morphAttributes.normal,en=!!j.morphAttributes.color,kt=Li;if(U.toneMapped){if(F===null||F.isXRRenderTarget===!0)kt=E.toneMapping}let Bt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Mn=Bt!==void 0?Bt.length:0,We=et.get(U),On=S.state.lights;if(ve===!0){if(Le===!0||A!==q){let Xt=A===q&&U.id===K;Q.setState(U,A,Xt)}}let Ct=!1,Os=!1;if(U.version===We.__version){if(We.needsLights&&We.lightsStateVersion!==On.state.version)Ct=!0;else if(k.isBatchedMesh&&We.batching===!1)Ct=!0;else if(!k.isBatchedMesh&&We.batching===!0)Ct=!0;else if(k.isBatchedMesh&&We.batchingColor===!0&&k._colorsTexture===null)Ct=!0;else if(k.isBatchedMesh&&We.batchingColor===!1&&k._colorsTexture!==null)Ct=!0;else if(k.isInstancedMesh&&We.instancing===!1)Ct=!0;else if(!k.isInstancedMesh&&We.instancing===!0)Ct=!0;else if(k.isSkinnedMesh&&We.skinning===!1)Ct=!0;else if(!k.isSkinnedMesh&&We.skinning===!0)Ct=!0;else if(k.isInstancedMesh&&We.instancingColor===!0&&k.instanceColor===null)Ct=!0;else if(k.isInstancedMesh&&We.instancingColor===!1&&k.instanceColor!==null)Ct=!0;else if(k.isInstancedMesh&&We.instancingMorph===!0&&k.morphTexture===null)Ct=!0;else if(k.isInstancedMesh&&We.instancingMorph===!1&&k.morphTexture!==null)Ct=!0;else if(We.envMap!==Ze)Ct=!0;else if(U.fog===!0&&We.fog!==we)Ct=!0;else if(We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Q.numPlanes||We.numIntersection!==Q.numIntersection))Ct=!0;else if(We.vertexAlphas!==ct)Ct=!0;else if(We.vertexTangents!==_t)Ct=!0;else if(We.morphTargets!==Ve)Ct=!0;else if(We.morphNormals!==bt)Ct=!0;else if(We.morphColors!==en)Ct=!0;else if(We.morphTargetsCount!==Mn)Ct=!0;else if(We.numLightProbeGrids!==on(S.state.lightProbeGridArray))Ct=!0;else if(We.outputColorSpace!==Ee||We.toneMapping!==kt)Os=!0}else Ct=!0,We.__version=U.version;let Sn=We.currentProgram;if(Ct===!0||Os===!0){if(Sn=Os===!0?an(U,B,k,Ee,kt):Ot(U,B,k),I&&U.isNodeMaterial)I.onUpdateProgram(U,Sn,We)}let da=!1,ls=!1,Fs=!1,Tt=Sn.getUniforms(),mn=We.uniforms;if(be.useProgram(Sn.program))da=!0,ls=!0,Fs=!0;if(U.id!==K)K=U.id,ls=!0;if(da||q!==A){if(be.buffers.depth.getReversed()&&A.reversedDepth!==!0)A._reversedDepth=!0,A.updateProjectionMatrix();Tt.setValue(N,"projectionMatrix",A.projectionMatrix),Tt.setValue(N,"viewMatrix",A.matrixWorldInverse);let un=Tt.map.cameraPosition;if(un!==void 0)un.setValue(N,Xe.setFromMatrixPosition(A.matrixWorld));if(Mt.logarithmicDepthBuffer)Tt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2));if(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)Tt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0);if(q!==A)q=A,ls=!0,Fs=!0}if(We.needsLights){if(On.state.sunShadowMap.length>0)Tt.setValue(N,"sunShadowMap",On.state.sunShadowMap,Ye);if(On.state.directionalShadowMap.length>0)Tt.setValue(N,"directionalShadowMap",On.state.directionalShadowMap,Ye);if(On.state.spotShadowMap.length>0)Tt.setValue(N,"spotShadowMap",On.state.spotShadowMap,Ye);if(On.state.pointShadowMap.length>0)Tt.setValue(N,"pointShadowMap",On.state.pointShadowMap,Ye)}if(k.isSkinnedMesh){Tt.setOptional(N,k,"bindMatrix"),Tt.setOptional(N,k,"bindMatrixInverse");let Xt=k.skeleton;if(Xt){if(Xt.boneTexture===null)Xt.computeBoneTexture();Tt.setValue(N,"boneTexture",Xt.boneTexture,Ye)}}if(k.isBatchedMesh){if(Tt.setOptional(N,k,"batchingTexture"),Tt.setValue(N,"batchingTexture",k._matricesTexture,Ye),Tt.setOptional(N,k,"batchingIdTexture"),Tt.setValue(N,"batchingIdTexture",k._indirectTexture,Ye),Tt.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null)Tt.setValue(N,"batchingColorTexture",k._colorsTexture,Ye)}let mi=j.morphAttributes;if(mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)O.update(k,j,Sn);if(ls||We.receiveShadow!==k.receiveShadow)We.receiveShadow=k.receiveShadow,Tt.setValue(N,"receiveShadow",k.receiveShadow);if((U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&B.environment!==null)mn.envMapIntensity.value=B.environmentIntensity;if(mn.dfgLUT!==void 0)mn.dfgLUT.value=Bb();if(ls){if(Tt.setValue(N,"toneMappingExposure",E.toneMappingExposure),We.needsLights)qn(mn,Fs);if(we&&U.fog===!0)le.refreshFogUniforms(mn,we);if(le.refreshMaterialUniforms(mn,U,Oe,Ne,S.state.transmissionRenderTarget[A.id]),We.needsLights&&We.numLightProbeGrids>0){let Xt=b,un=0;for(let Gi of S.state.lightProbeGridArray){if(Gi.texture===null)continue;Xt.textures[un]=Gi.texture,Xt.min[un]=Gi.boundingBox.min,Xt.max[un]=Gi.boundingBox.max,Xt.resolution[un]=Gi.resolution,un++}for(let Gi in Xt)Xt[Gi].length=un;mn.probesSH.value=Xt.textures,mn.probesMin.value=Xt.min,mn.probesMax.value=Xt.max,mn.probesResolution.value=Xt.resolution}Zo.upload(N,Ln(We),mn,Ye)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0)Zo.upload(N,Ln(We),mn,Ye),U.uniformsNeedUpdate=!1;if(U.isSpriteMaterial)Tt.setValue(N,"center",k.center);if(Tt.setValue(N,"modelViewMatrix",k.modelViewMatrix),Tt.setValue(N,"normalMatrix",k.normalMatrix),Tt.setValue(N,"modelMatrix",k.matrixWorld),U.uniformsGroups!==void 0){let Xt=U.uniformsGroups;for(let un=0,Gi=Xt.length;un<Gi;un++){let Qu=Xt[un];Te.update(Qu,Sn),Te.bind(Qu,Sn)}}return Sn}function qn(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function kn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,B,j){let U=et.get(A);if(U.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1)U.__useRenderToTexture=!1;et.get(A.texture).__webglTexture=B,et.get(A.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:j,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let j=et.get(A);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,j=0){F=A,X=B,G=j;let U=null,k=!1,we=!1;if(A){let Ee=et.get(A);if(Ee.__useDefaultFramebuffer!==void 0){be.bindFramebuffer(N.FRAMEBUFFER,Ee.__webglFramebuffer),H.copy(A.viewport),Z.copy(A.scissor),ee=A.scissorTest,be.viewport(H),be.scissor(Z),be.setScissorTest(ee),K=-1;return}else if(Ee.__webglFramebuffer===void 0)Ye.setupRenderTarget(A);else if(Ee.__hasExternalTextures)Ye.rebindTextures(A,et.get(A.texture).__webglTexture,et.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ct=A.depthTexture;if(Ee.__boundDepthTexture!==ct){if(ct!==null&&et.has(ct)&&(A.width!==ct.image.width||A.height!==ct.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(A)}}let Fe=A.texture;if(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)we=!0;let Ze=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget){if(Array.isArray(Ze[B]))U=Ze[B][j];else U=Ze[B];k=!0}else if(A.samples>0&&Ye.useMultisampledRTT(A)===!1)U=et.get(A).__webglMultisampledFramebuffer;else if(Array.isArray(Ze))U=Ze[j];else U=Ze;H.copy(A.viewport),Z.copy(A.scissor),ee=A.scissorTest}else H.copy(He).multiplyScalar(Oe).floor(),Z.copy(ze).multiplyScalar(Oe).floor(),ee=ot;if(j!==0)U=z;if(be.bindFramebuffer(N.FRAMEBUFFER,U))be.drawBuffers(A,U);if(be.viewport(H),be.scissor(Z),be.setScissorTest(ee),k){let Ee=et.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee.__webglTexture,j)}else if(we){let Ee=B;for(let Fe=0;Fe<A.textures.length;Fe++){let Ze=et.get(A.textures[Fe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Fe,Ze.__webglTexture,j,Ee)}}else if(A!==null&&j!==0){let Ee=et.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ee.__webglTexture,j)}K=-1};function Nn(A){let B=et.get(A);if(B.__readFormat!==A.format||B.__readType!==A.type)B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=Mt.textureFormatReadable(A.format),B.__typeReadable=Mt.textureTypeReadable(A.type);return B}if(this.readRenderTargetPixels=function(A,B,j,U,k,we,Be,Ee=0){if(!(A&&A.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0){if(Fe=Fe[Be],Array.isArray(Fe))Fe=Fe[0]}if(Fe){be.bindFramebuffer(N.FRAMEBUFFER,Fe);try{let Ze=A.textures[Ee],{format:ct,type:_t}=Ze;if(A.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+Ee);let Ve=Nn(Ze);if(Ve.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(B>=0&&B<=A.width-U&&(j>=0&&j<=A.height-k))N.readPixels(B,j,U,k,xe.convert(ct),xe.convert(_t),we)}finally{let Ze=F!==null?et.get(F).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,B,j,U,k,we,Be,Ee=0){if(!(A&&A.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0){if(Fe=Fe[Be],Array.isArray(Fe))Fe=Fe[0]}if(Fe)if(B>=0&&B<=A.width-U&&(j>=0&&j<=A.height-k)){be.bindFramebuffer(N.FRAMEBUFFER,Fe);let Ze=A.textures[Ee],{format:ct,type:_t}=Ze;if(A.textures.length>1)N.readBuffer(N.COLOR_ATTACHMENT0+Ee);let Ve=Nn(Ze);if(Ve.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.bufferData(N.PIXEL_PACK_BUFFER,we.byteLength,N.STREAM_READ),N.readPixels(B,j,U,k,xe.convert(ct),xe.convert(_t),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let en=F!==null?et.get(F).__webglFramebuffer:null;be.bindFramebuffer(N.FRAMEBUFFER,en);let kt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Vf(N,kt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,we),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(bt),N.deleteSync(kt),we}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,j=0){let U=Math.pow(2,-j),k=Math.floor(A.image.width*U),we=Math.floor(A.image.height*U),Be=B!==null?B.x:0,Ee=B!==null?B.y:0;Ye.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,Be,Ee,k,we),be.unbindTexture()},this.copyTextureToTexture=function(A,B,j=null,U=null,k=0,we=0){let Be,Ee,Fe,Ze,ct,_t,Ve,bt,en,kt=A.isCompressedTexture?A.mipmaps[we]:A.image;if(j!==null)Be=j.max.x-j.min.x,Ee=j.max.y-j.min.y,Fe=j.isBox3?j.max.z-j.min.z:1,Ze=j.min.x,ct=j.min.y,_t=j.isBox3?j.min.z:0;else{let Tt=Math.pow(2,-k);if(Be=Math.floor(kt.width*Tt),Ee=Math.floor(kt.height*Tt),A.isDataArrayTexture)Fe=kt.depth;else if(A.isData3DTexture)Fe=Math.floor(kt.depth*Tt);else Fe=1;Ze=0,ct=0,_t=0}if(U!==null)Ve=U.x,bt=U.y,en=U.z;else Ve=0,bt=0,en=0;let Bt=xe.convert(B.format),Mn=xe.convert(B.type),We;if(B.isData3DTexture)Ye.setTexture3D(B,0),We=N.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Ye.setTexture2DArray(B,0),We=N.TEXTURE_2D_ARRAY;else Ye.setTexture2D(B,0),We=N.TEXTURE_2D;be.activeTexture(N.TEXTURE0),be.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),be.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),be.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let On=be.getParameter(N.UNPACK_ROW_LENGTH),Ct=be.getParameter(N.UNPACK_IMAGE_HEIGHT),Os=be.getParameter(N.UNPACK_SKIP_PIXELS),Sn=be.getParameter(N.UNPACK_SKIP_ROWS),da=be.getParameter(N.UNPACK_SKIP_IMAGES);be.pixelStorei(N.UNPACK_ROW_LENGTH,kt.width),be.pixelStorei(N.UNPACK_IMAGE_HEIGHT,kt.height),be.pixelStorei(N.UNPACK_SKIP_PIXELS,Ze),be.pixelStorei(N.UNPACK_SKIP_ROWS,ct),be.pixelStorei(N.UNPACK_SKIP_IMAGES,_t);let ls=A.isDataArrayTexture||A.isData3DTexture,Fs=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let Tt=et.get(A),mn=et.get(B),mi=et.get(Tt.__renderTarget),Xt=et.get(mn.__renderTarget);be.bindFramebuffer(N.READ_FRAMEBUFFER,mi.__webglFramebuffer),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let un=0;un<Fe;un++){if(ls)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,et.get(A).__webglTexture,k,_t+un),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,et.get(B).__webglTexture,we,en+un);N.blitFramebuffer(Ze,ct,Ze+Be,ct+Ee,Ve,bt,Ve+Be,bt+Ee,N.DEPTH_BUFFER_BIT,N.NEAREST)}be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||et.has(A)){let Tt=et.get(A),mn=et.get(B);be.bindFramebuffer(N.READ_FRAMEBUFFER,W),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,P);for(let mi=0;mi<Fe;mi++){if(ls)N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.__webglTexture,k,_t+mi);else N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,k);if(Fs)N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mn.__webglTexture,we,en+mi);else N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mn.__webglTexture,we);if(k!==0)N.blitFramebuffer(Ze,ct,Ze+Be,ct+Ee,Ve,bt,Ve+Be,bt+Ee,N.COLOR_BUFFER_BIT,N.NEAREST);else if(Fs)N.copyTexSubImage3D(We,we,Ve,bt,en+mi,Ze,ct,Be,Ee);else N.copyTexSubImage2D(We,we,Ve,bt,Ze,ct,Be,Ee)}be.bindFramebuffer(N.READ_FRAMEBUFFER,null),be.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Fs)if(A.isDataTexture||A.isData3DTexture)N.texSubImage3D(We,we,Ve,bt,en,Be,Ee,Fe,Bt,Mn,kt.data);else if(B.isCompressedArrayTexture)N.compressedTexSubImage3D(We,we,Ve,bt,en,Be,Ee,Fe,Bt,kt.data);else N.texSubImage3D(We,we,Ve,bt,en,Be,Ee,Fe,Bt,Mn,kt);else if(A.isDataTexture)N.texSubImage2D(N.TEXTURE_2D,we,Ve,bt,Be,Ee,Bt,Mn,kt.data);else if(A.isCompressedTexture)N.compressedTexSubImage2D(N.TEXTURE_2D,we,Ve,bt,kt.width,kt.height,Bt,kt.data);else N.texSubImage2D(N.TEXTURE_2D,we,Ve,bt,Be,Ee,Bt,Mn,kt);if(be.pixelStorei(N.UNPACK_ROW_LENGTH,On),be.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ct),be.pixelStorei(N.UNPACK_SKIP_PIXELS,Os),be.pixelStorei(N.UNPACK_SKIP_ROWS,Sn),be.pixelStorei(N.UNPACK_SKIP_IMAGES,da),we===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0)N.generateMipmap(We);be.unbindTexture()},this.initRenderTarget=function(A){if(et.get(A).__webglFramebuffer===void 0)Ye.setupRenderTarget(A)},this.initTexture=function(A){if(A.isCubeTexture)Ye.setTextureCube(A,0);else if(A.isData3DTexture)Ye.setTexture3D(A,0);else if(A.isDataArrayTexture||A.isCompressedArrayTexture)Ye.setTexture2DArray(A,0);else Ye.setTexture2D(A,0);be.unbindTexture()},this.resetState=function(){X=0,G=0,F=null,be.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ih}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}var Wp={type:"change"},cu={type:"start"},qp={type:"end"},Il=new Ji,Xp=new ri,zb=Math.cos(70*kr.DEG2RAD),hn=new R,Vn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lu=0.000001;class rr extends Tl{constructor(e,t=null){super(e,t);if(this.state=It.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new jt,this._lastTargetPosition=new R,this._quat=new jt().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ir,this._sphericalDelta=new ir,this._scale=1,this._panOffset=new R,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new R,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kb.bind(this),this._onPointerDown=Gb.bind(this),this._onPointerUp=Hb.bind(this),this._onContextMenu=Zb.bind(this),this._onMouseWheel=Xb.bind(this),this._onKeyDown=qb.bind(this),this._onTouchStart=Yb.bind(this),this._onTouchMove=Kb.bind(this),this._onMouseDown=Vb.bind(this),this._onMouseMove=Wb.bind(this),this._interceptControlDown=jb.bind(this),this._interceptControlUp=Jb.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(e){if(this._cursorStyle=e,e==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=It.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wp),this.update(),this.state=It.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;if(hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===It.NONE)this._rotateLeft(this._getAutoRotationAngle(e));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;if(isFinite(n)&&isFinite(i)){if(n<-Math.PI)n+=Vn;else if(n>Math.PI)n-=Vn;if(i<-Math.PI)i+=Vn;else if(i>Math.PI)i-=Vn;if(n<=i)this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=hn.length();r=this._clampDistance(o*this._scale);let a=o-r;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),s=!!a}else if(this.object.isOrthographicCamera){let o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=a!==this.object.zoom;let l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),r=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(r!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position);else if(Il.origin.copy(this.object.position),Il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Il.direction))<zb)this.object.lookAt(this.target);else Xp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Il.intersectPlane(Xp,this.target)}else if(this.object.isOrthographicCamera){let r=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom)this.object.updateProjectionMatrix(),s=!0}if(this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>lu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lu||this._lastTargetPosition.distanceToSquared(this.target)>lu)return this.dispatchEvent(Wp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(e){if(e!==null)return Vn/60*this.autoRotateSpeed*e;else return Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*0.01);return Math.pow(0.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){if(this.screenSpacePanning===!0)hn.setFromMatrixColumn(t,1);else hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn);hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;hn.copy(i).sub(this.target);let s=hn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(e){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=e;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(e){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=e;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,{width:r,height:o}=n;this._mouse.x=i/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){if(this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));if(this._dollyStart.copy(this._dollyEnd),this.zoomToCursor)this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize();this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){if(this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0)this._dollyIn(this._getZoomScale(e.deltaY));else if(e.deltaY>0)this._dollyOut(this._getZoomScale(e.deltaY));this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate)this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);t=!0;break;case this.keys.BOTTOM:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate)this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);t=!0;break;case this.keys.LEFT:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate)this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);t=!0;break;case this.keys.RIGHT:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate)this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);t=!0;break}if(t)e.preventDefault(),this.update()}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=0.5*(e.pageX+t.x),i=0.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=0.5*(e.pageX+t.x),i=0.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){if(this.enableZoom)this._handleTouchStartDolly(e);if(this.enablePan)this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){if(this.enableZoom)this._handleTouchStartDolly(e);if(this.enableRotate)this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=0.5*(e.pageX+n.x),s=0.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=0.5*(e.pageX+t.x),i=0.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(e.pageX+t.x)*0.5,o=(e.pageY+t.y)*0.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){if(this.enableZoom)this._handleTouchMoveDolly(e);if(this.enablePan)this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){if(this.enableZoom)this._handleTouchMoveDolly(e);if(this.enableRotate)this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];if(t===void 0)t=new ie,this._pointerPositions[e.pointerId]=t;t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}if(e.ctrlKey&&!this._controlActive)n.deltaY*=10;return n}}function Gb(e){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(e))return;if(this._addPointer(e),e.pointerType==="touch")this._onTouchStart(e);else this._onMouseDown(e);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function kb(e){if(this.enabled===!1)return;if(e.pointerType==="touch")this._onTouchMove(e);else this._onMouseMove(e)}function Hb(e){switch(this._removePointer(e),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qp),this.state=It.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Vb(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=It.DOLLY;break;case ms.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=It.ROTATE}break;case ms.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=It.PAN}break;default:this.state=It.NONE}if(this.state!==It.NONE)this.dispatchEvent(cu)}function Wb(e){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Xb(e){if(this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE)return;e.preventDefault(),this.dispatchEvent(cu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(qp)}function qb(e){if(this.enabled===!1)return;this._handleKeyDown(e)}function Yb(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case gs.ROTATE:if(this.enableRotate===!1){this.state=It.NONE;break}this._handleTouchStartRotate(e),this.state=It.TOUCH_ROTATE;break;case gs.PAN:if(this.enablePan===!1){this.state=It.NONE;break}this._handleTouchStartPan(e),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=It.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}if(this.state!==It.NONE)this.dispatchEvent(cu)}function Kb(e){switch(this._trackPointer(e),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=It.NONE}}function Zb(e){if(this.enabled===!1)return;e.preventDefault()}function jb(e){if(e.key==="Control")this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Jb(e){if(e.key==="Control")this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Wn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var Qb=new Cs(-1,1,1,-1,0,1);class Yp extends gt{constructor(){super();this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}var $b=new Yp;class es{constructor(e){this._mesh=new Qe($b,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jo extends Wn{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof At)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=ei.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new es(this.material)}render(e,t,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ll extends Wn{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;if(this.inverse)r=0,o=1;else r=1,o=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class hu extends Wn{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Qo{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$t}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jo($r),this.copyPass.material.blending=Ki,this.timer=new Ml}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled===!1)continue;if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Ll!==void 0){if(r instanceof Ll)n=!0;else if(r instanceof hu)n=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $o extends Wn{constructor(e,t,n=null,i=null,s=null){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Y}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;if(this.overrideMaterial!==null)r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=r;e.autoClear=i}}var Kp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Y(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ts extends Wn{constructor(e,t=1,n,i){super();this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Y(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(s,r,{type:$t,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let h=new Yt(s,r,{type:$t,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+c,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Yt(s,r,{type:$t,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let o=Kp;this.highPassUniforms=ei.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ie(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ei.clone($r.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,premultipliedAlpha:!0,blending:Zn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Y,this._oldClearAlpha=1,this._basic=new zt,this._fsQuad=new es(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ie(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),s)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=ts.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=ts.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(n),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(0.39894*Math.exp(-0.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<e;r+=2){let o=t[r],a=r+1<e?t[r+1]:0,l=o+a;i.push((r*o+(r+1)*a)/l),s.push(l)}return new At({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new ie(0.5,0.5)},direction:{value:new ie(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ts.BlurDirectionX=new ie(1,0);ts.BlurDirectionY=new ie(0,1);var ea={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ta extends Wn{constructor(){super();this.isOutputPass=!0,this.uniforms=ei.clone(ea.uniforms),this.material=new Vo({name:ea.name,uniforms:this.uniforms,vertexShader:ea.vertexShader,fragmentShader:ea.fragmentShader}),this._fsQuad=new es(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===Dt)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===To)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===Ao)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Eo)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===li)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===Co)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===qs)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===Ro)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function ns(e){return e?`${e.id}/${e.hue??0}`:"base"}function Dl(e,t){if(!t)return e;let n=parseInt(e.slice(1),16),i=(n>>16&255)/255,s=(n>>8&255)/255,r=(n&255)/255,o=Math.max(i,s,r),a=Math.min(i,s,r);if(o===a)return e;let l=(o+a)/2,c=o-a,h=l>0.5?c/(2-o-a):c/(o+a),u=(((o===i?(s-r)/c+(s<r?6:0):o===s?(r-i)/c+2:(i-s)/c+4)*60+t)%360+360)%360,f=(g)=>(g+u/30)%12,m=h*Math.min(l,1-l),v=(g)=>l-m*Math.max(-1,Math.min(f(g)-3,Math.min(9-f(g),1))),p=(g)=>Math.round(g*255).toString(16).padStart(2,"0");return`#${p(v(0))}${p(v(8))}${p(v(4))}`}function Fi(e,t=!1){let n=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),s=new Set(Object.keys(e[0].morphAttributes)),r={},o={},a=e[0].morphTargetsRelative,l=new gt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<e.length;++h){let d=e[h],u=0,f=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;if(r[m]===void 0)r[m]=[];r[m].push(d.attributes[m]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==e[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;if(o[m]===void 0)o[m]=[];o[m].push(d.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let m;if(n)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(n){let h=0,d=[];for(let u=0;u<e.length;++u){let f=e[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=e[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Zp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let m=Zp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Zp(e){let t,n,i,s=-1,r=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0)t=h.array.constructor;if(t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=h.itemSize;if(n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=h.normalized;if(i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=h.gpuType;if(s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let o=new t(r),a=new gn(o,n,i),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<n;m++){let v=h.getComponent(u,m);a.setComponent(u+d,m,v)}}else o.set(h.array,l);l+=h.count*n}if(s!==void 0)a.gpuType=s;return a}function uu(e,t){if(t===wh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Gr||t===Lo){let n=e.getIndex();if(n===null){let r=[],o=e.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);e.setIndex(r),n=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let i=n.count-2,s=[];if(t===Gr)for(let r=1;r<=i;r++)s.push(n.getX(0)),s.push(n.getX(r)),s.push(n.getX(r+1));else for(let r=0;r<i;r++)if(r%2===0)s.push(n.getX(r)),s.push(n.getX(r+1)),s.push(n.getX(r+2));else s.push(n.getX(r+2)),s.push(n.getX(r+1)),s.push(n.getX(r));if(s.length/3!==i)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return e.setIndex(s),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function jp(e){let t=e%2147483647||1;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}var Nl=(e,t,n)=>{let i=Math.min(1,Math.max(0,(n-e)/(t-e)));return i*i*(3-2*i)};function du(e,t,n,i=!1){let s=new Js(e,t,t,bi);if(n)s.colorSpace=xn;if(s.generateMipmaps=!0,s.minFilter=jn,s.magFilter=sn,i)s.wrapS=s.wrapT=vs;return s.needsUpdate=!0,s}function Jp(e,t=7){let i=new Uint8Array(65536),s=new Y(e.top),r=new Y(e.bottom),o=new Y(e.deep),a=new Y(e.ring??e.bottom).lerp(new Y("#ffffff"),0.35),l=jp(t),c=Array.from({length:64},()=>l()),h=new Y,d=new Y;for(let u=0;u<128;u++)for(let f=0;f<128;f++){let m=(f+0.5)/128,v=(u+0.5)/128,p=m*2-1,g=v*2-1,_=Math.hypot(p,g),b=Math.atan2(g,p);h.copy(r).lerp(s,Nl(-0.75,0.65,g));let y=Math.floor((b+Math.PI)/(2*Math.PI)*64)%64,S=0.86+0.28*c[y]*(0.5+0.5*Math.sin(b*40+_*9));h.multiplyScalar(S);let T=Math.exp(-Math.pow((_-0.55)/0.08,2));h.lerp(a,T*0.45);let x=Nl(0,-0.55,g)*Math.exp(-Math.pow((_-0.72)/0.12,2));d.copy(r).lerp(new Y("#ffffff"),0.45),h.lerp(d,x*0.55);let M=Math.hypot(p*1.08,g*0.94);h.lerp(d.copy(o).multiplyScalar(0.16),Nl(0.47,0.41,M)),h.lerp(d.copy(o).multiplyScalar(0.35),Nl(0.84,0.98,_));let E=(u*128+f)*4;i[E]=Math.round(Math.min(1,h.r)*255),i[E+1]=Math.round(Math.min(1,h.g)*255),i[E+2]=Math.round(Math.min(1,h.b)*255),i[E+3]=255}for(let u=0;u<i.length;u+=4)for(let f=0;f<3;f++){let m=i[u+f]/255,v=m<=0.0031308?m*12.92:1.055*Math.pow(m,0.4166666666666667)-0.055;i[u+f]=Math.round(Math.min(1,Math.max(0,v))*255)}return du(i,128,!0)}var na=null;function Qp(){if(na)return na;let e=128,t=new Float32Array(e*e).fill(0.5),n=jp(4242);for(let r=0;r<1400;r++){let o=n()*e,a=n()*e,l=Math.PI/2+(n()-0.5)*1,c=3+n()*7,h=0.25+n()*0.75;for(let d=0;d<c;d+=0.5){let u=d/c,f=Math.round(o+Math.cos(l)*d),v=(Math.round(a+Math.sin(l)*d)%e+e)%e*e+(f%e+e)%e;t[v]=Math.max(t[v],0.5+0.5*h*(1-u*0.6))}}let i=(r,o)=>t[(o%e+e)%e*e+(r%e+e)%e],s=new Uint8Array(e*e*4);for(let r=0;r<e;r++)for(let o=0;o<e;o++){let a=(i(o+1,r)-i(o-1,r))*2.4,l=(i(o,r+1)-i(o,r-1))*2.4,c=Math.hypot(a,l,1),h=(r*e+o)*4;s[h]=Math.round(-a/c*127.5+127.5),s[h+1]=Math.round(-l/c*127.5+127.5),s[h+2]=Math.round(1/c*127.5+127.5),s[h+3]=255}return na=du(s,e,!1,!0),na.repeat.set(12,8),na}var Ol=null;function $p(){if(Ol)return Ol;let e=64,t=new Uint8Array(e*e*4);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let s=(i+0.5)/e*2-1,r=(n+0.5)/e*2-1,o=Math.pow(Math.max(0,1-Math.hypot(s,r)),1.6),a=(n*e+i)*4;t[a]=t[a+1]=t[a+2]=t[a+3]=Math.round(o*255)}return Ol=du(t,e,!1),Ol}class fu{meshes=0;geos=[];mats=[];sphere;sphereLo;sphereMid;sphereFur;quality;cache=new Map;constructor(e="live"){this.quality=e;let t=e==="still";this.sphere=this.geo(t?new Ut(1,64,40):new Ut(1,30,19)),this.sphereMid=this.geo(t?new Ut(1,40,28):new Ut(1,20,13)),this.sphereLo=this.geo(t?new Ut(1,24,16):new Ut(1,12,9)),this.sphereFur=this.geo(t?new Ut(1,40,28):new Ut(1,16,11))}get still(){return this.quality==="still"}n(e,t=Math.round(e*1.8)){return this.still?t:e}geo(e){return this.geos.push(e),e}keep(e,t){let n=this.cache.get(e);if(n)return n;let i=t();return this.mats.push(i),this.cache.set(e,i),i}fur(e,t=0.75){return this.keep(`fur${e}${t}`,()=>{let n=new Y(e);return new Gt({color:n,roughness:0.72,metalness:0,sheen:t,sheenRoughness:0.45,sheenColor:n.clone().lerp(new Y("#ffffff"),0.45),normalMap:Qp(),normalScale:new ie(0.16,0.16)})})}armor(e,t=0.45,n=0.32){return this.keep(`arm${e}${t}${n}`,()=>new Gt({color:new Y(e),metalness:t,roughness:n,clearcoat:1,clearcoatRoughness:0.08}))}metal(e,t=0.22){return this.keep(`metal${e}${t}`,()=>new Gt({color:new Y(e),metalness:1,roughness:t,clearcoat:0.6,clearcoatRoughness:0.1}))}glow(e,t=0.9,n=!0){return this.keep(`glow${e}${t}${n}`,()=>{let i=new Y(e);return new ti({color:i.clone().multiplyScalar(0.55),emissive:i,emissiveIntensity:t*0.55,roughness:0.18,metalness:0.05,flatShading:n})})}crystal(e,t=0.62){return this.keep(`crys${e}${t}`,()=>{let n=new Y(e);return new Gt({color:n.clone().lerp(new Y("#ffffff"),0.1),emissive:n,emissiveIntensity:0.12,roughness:0.04,metalness:0,clearcoat:1,clearcoatRoughness:0.02,iridescence:0.7,iridescenceIOR:1.7,flatShading:!0,transparent:!0,opacity:t,depthWrite:!1})})}glass(e="#dff6ff",t=0.32){return this.keep(`glass${e}${t}`,()=>new Gt({color:new Y(e),roughness:0.03,metalness:0,clearcoat:1,clearcoatRoughness:0.02,transparent:!0,opacity:t,depthWrite:!1,iridescence:0.25}))}gloss(e){return this.keep(`gloss${e}`,()=>new Gt({color:new Y(e),roughness:0.12,metalness:0.05,clearcoat:1,clearcoatRoughness:0.04}))}feather(e,t=0.88){return this.keep(`feather${e}${t}`,()=>{let n=new Y(e);return new Gt({color:n.clone().lerp(new Y("#ffffff"),0.45),emissive:n,emissiveIntensity:0.45,roughness:0.25,transparent:!0,opacity:t,clearcoat:0.6,side:Jt,depthWrite:t>0.95})})}flat(e,t=1){return this.keep(`flat${e}${t}`,()=>{let n=new zt({color:new Y(e)});if(t<1)n.transparent=!0,n.opacity=t,n.depthWrite=!1;return n})}spot(e,t=0.55,n=!1){return this.keep(`spot${e}${t}${n}`,()=>new zt({color:new Y(e),alphaMap:$p(),transparent:!0,opacity:t,depthWrite:!1,blending:n?Zn:Zi,toneMapped:!n}))}matte(e,t=0.75){return this.keep(`matte${e}${t}`,()=>new ti({color:new Y(e),roughness:t,metalness:0}))}leather(e){return this.keep(`leather${e}`,()=>{let t=new Y(e);return new Gt({color:t,roughness:0.62,sheen:0.35,sheenColor:t.clone().lerp(new Y("#ffffff"),0.3),clearcoat:0.15,clearcoatRoughness:0.5})})}group(e,t,n=[0,0,0],i=[0,0,0]){let s=new Ft;return s.name=e,s.position.set(n[0],n[1],n[2]),s.rotation.set(i[0],i[1],i[2]),t?.add(s),s}mesh(e,t,n,i=[0,0,0],s=[0,0,0],r=[1,1,1]){let o=new Qe(e,t);return o.position.set(i[0],i[1],i[2]),o.rotation.set(s[0],s[1],s[2]),o.scale.set(r[0],r[1],r[2]),n.add(o),this.meshes++,o}ell(e,t,n,i,s=[0,0,0],r=!1){let o=Math.max(i[0],i[1],i[2]),a=r||o<0.045?this.sphereLo:o<0.16?this.sphereMid:this.sphere;return this.mesh(a,t,e,n,s,i)}isSphere(e){return e===this.sphere||e===this.sphereMid||e===this.sphereLo||e===this.sphereFur}}function Rt(e,t,n,i,s=0){let r=Math.sin(n)*Math.cos(i),o=Math.sin(i),a=Math.cos(n)*Math.cos(i),l=r/t[0],c=o/t[1],h=a/t[2],d=Math.hypot(l,c,h)||1;return l/=d,c/=d,h/=d,{pos:[e[0]+r*t[0]+l*s,e[1]+o*t[1]+c*s,e[2]+a*t[2]+h*s],rot:[-Math.asin(c),Math.atan2(l,h),0]}}function ii(e,t,n,i,s=0){let r=e.group(t,n,i.pos);return r.rotation.order="YXZ",r.rotation.set(i.rot[0],i.rot[1],s),r}function e0(e,t){let n=[];t.traverse((i)=>n.push(i));for(let i of n){let s=new Map;for(let r of i.children){let o=r;if(!o.isMesh||o.isInstancedMesh||o.userData.keep||!o.visible)continue;if(o.children.length)continue;let a=o.material;if(Array.isArray(o.material))continue;let l=`${a.uuid}|${o.geometry.index?"i":"n"}|${Object.keys(o.geometry.attributes).sort().join(",")}`,c=s.get(l)??[];c.push(o),s.set(l,c)}for(let r of s.values()){if(r.length<2)continue;let o=[],a=new Je;for(let h of r){h.updateMatrix(),a.copy(h.matrix);let d=h.geometry.clone();if(d.clearGroups(),d.applyMatrix4(a),a.determinant()<0)eM(d);o.push(d)}let l=Fi(o,!1);for(let h of o)h.dispose();if(!l)continue;e.geo(l);let c=new Qe(l,r[0].material);c.name="merged";for(let h of r)i.remove(h);i.add(c),e.meshes-=r.length-1}}}function eM(e){let t=e.index;if(t){for(let n=0;n<t.count;n+=3){let i=t.getX(n+1);t.setX(n+1,t.getX(n+2)),t.setX(n+2,i)}t.needsUpdate=!0}else for(let n of Object.keys(e.attributes)){let i=e.getAttribute(n);for(let s=0;s<i.count;s+=3)for(let r=0;r<i.itemSize;r++){let o=i.getComponent(s+1,r);i.setComponent(s+1,r,i.getComponent(s+2,r)),i.setComponent(s+2,r,o)}i.needsUpdate=!0}}function t0(e){let t=0;return e.traverse((n)=>{let i=n;if(!i.isMesh)return;let s=i.geometry,r=(s.index?s.index.count:s.getAttribute("position").count)/3,o=i.isInstancedMesh?i.count:1;t+=r*o}),Math.round(t)}function tM(e){let t=new Ut(1,e.n(22,40),e.n(14,28)),n=t.getAttribute("position"),i=t.getAttribute("uv");for(let s=0;s<n.count;s++)i.setXY(s,n.getX(s)*0.5+0.5,n.getY(s)*0.5+0.5);return i.needsUpdate=!0,e.geo(t)}function or(e,t,n,i,s){let r=i.size,o=i.aspect??0.86,a=ii(e,"eye",t,n),l=e.group("eyeOpen",a),h="#"+new Y(i.iris.deep).clone().multiplyScalar(0.55).getHexString();e.ell(l,e.gloss(h),[0,0,0],[r*o,r,r*0.42]);let d=e.group("eyeLook",l,[0,0,0]),u=`iris${i.iris.top}${i.iris.bottom}${i.iris.deep}${i.glow??0}`,f=e.keep(u,()=>{let x=Jp(i.iris,Math.round(r*1000)),M=new Gt({map:x,emissiveMap:x,emissive:new Y("#ffffff"),emissiveIntensity:0.06+(i.glow??0)*0.5,roughness:0.1,clearcoat:1,clearcoatRoughness:0.02});return M.userData.noBloom=(i.glow??0)<0.6,M}),m=tM(e);e.mesh(m,f,d,[0,0,0],[0,0,0],[r*o*0.99,r*0.99,r*0.45]);let v=e.flat("#ffffff");e.ell(l,v,[r*0.3*s,r*0.36,r*0.42],[r*0.24,r*0.27,r*0.06],[0,0,s*0.35],!0),e.ell(l,v,[-r*0.26*s,-r*0.4,r*0.4],[r*0.1,r*0.1,r*0.05],[0,0,0],!0),e.ell(l,e.flat("#ffffff",0.45),[-r*0.05*s,r*0.52,r*0.38],[r*0.05,r*0.05,r*0.03],[0,0,0],!0);let p=e.gloss(i.lid),g=i.cover??0,_=r*(1-2*g);if(g>0&&i.lidSkin){let x=Math.acos(Math.max(-0.9,Math.min(0.95,1-2*g))),M=e.geo(new Ut(1,e.n(20,36),e.n(8,14),0,Math.PI*2,0,x));e.mesh(M,i.lidSkin,l,[0,0,0],[0,0,0],[r*o*1.035,r*1.035,r*0.47]);let E=e.geo(new $e(1,0.045,6,e.n(24,40))),L=Math.sin(x);e.mesh(E,p,l,[0,_*1.035,0],[Math.PI/2,0,0],[r*o*1.04*L,r*0.475*L,r])}else{let x=e.geo(new $e(1,0.05,6,e.n(18,32),Math.PI*0.8));e.mesh(x,p,l,[0,r*0.01,r*0.12],[0,0,Math.PI*0.1],[r*o*0.98,r*0.98,r])}let b=i.lashes??2;if(b>0){let x=e.geo(new Qt(r*0.06,r*0.34,6));for(let M=0;M<b;M++){let E=(g>0?0.15:0.42)+M*0.3,L=s*Math.cos(E)*r*o*0.98,I=g>0?_+Math.sin(E)*r*0.3:Math.sin(E)*r*0.98;e.mesh(x,p,l,[L+s*r*0.1,I+r*0.08,r*0.1],[0.2,0,-s*(0.9+M*0.25)])}}if(i.brow){let x=e.geo(new Qt(r*0.13,r*0.95,8));e.mesh(x,e.gloss(i.brow.color),a,[s*r*0.05,r*1.32,r*0.2],[0,0,-s*(Math.PI/2-i.brow.tilt)])}let y=e.geo(new $e(r*0.7,r*0.075,6,e.n(14,24),Math.PI)),S=e.mesh(y,p,a,[0,r*0.05,r*0.32],[0,0,Math.PI]),T=e.mesh(y,p,a,[0,-r*0.3,r*0.32]);return S.userData.keep=!0,T.userData.keep=!0,S.visible=!1,T.visible=!1,{group:a,open:l,look:d,lidClosed:S,lidHappy:T}}var n0=(e,t)=>0.5-0.5*Math.cos(Math.PI*e/t);function i0(e){let[t,n]=e.seg??[22,16],i=e.lift??0.003,s=(e.el[0]+e.el[1])/2,r=(e.r[0]+e.r[2])/2*Math.cos(s),o=(e.r[1]+(e.r[0]+e.r[2])/2)/2,a=Math.abs(e.az[1]-e.az[0])*r,l=Math.abs(e.el[1]-e.el[0])*o,c=Math.min(e.bevel*1.6,a/2,l/2),h=[],d=[];for(let p=0;p<=n;p++){let g=n0(p,n);for(let _=0;_<=t;_++){let b=n0(_,t),y=e.az[0]+(e.az[1]-e.az[0])*b,S=e.el[0]+(e.el[1]-e.el[0])*g,T=Math.sin(y)*Math.cos(S),x=Math.sin(S),M=Math.cos(y)*Math.cos(S),E=T/e.r[0],L=x/e.r[1],I=M/e.r[2],z=Math.hypot(E,L,I)||1;E/=z,L/=z,I/=z;let W=Math.abs(b-0.5)*a-(a/2-c),P=Math.abs(g-0.5)*l-(l/2-c),X=Math.hypot(Math.max(W,0),Math.max(P,0))+Math.min(Math.max(W,P),0)-c,G=Math.min(1,Math.max(0,-X/e.bevel)),F=i+e.thick*Math.sqrt(1-(1-G)*(1-G));h.push(e.c[0]+T*e.r[0]+E*F,e.c[1]+x*e.r[1]+L*F,e.c[2]+M*e.r[2]+I*F),d.push(b,g)}}let u=[],f=t+1,m=(e.az[1]-e.az[0])*(e.el[1]-e.el[0])<0;for(let p=0;p<n;p++)for(let g=0;g<t;g++){let _=p*f+g,b=_+1,y=_+f,S=y+1;if(m)u.push(_,y,b,b,y,S);else u.push(_,b,y,b,S,y)}let v=new gt;return v.setAttribute("position",new Ge(h,3)),v.setAttribute("uv",new Ge(d,2)),v.setIndex(u),v.computeVertexNormals(),v}function s0(e=6,t=1,n=2,i=0.9,s=0.35){let r=[new ie(0,-s),new ie(t,0),new ie(t*0.9,n),new ie(0,n+i)],o=new ws(r,e);o.deleteAttribute("normal");let a=o.toNonIndexed();return o.dispose(),a.computeVertexNormals(),a}function ia(e,t,n,i=4){let s=new $s;for(let o=0;o<i*2;o++){let a=o/(i*2)*Math.PI*2+Math.PI/2,l=o%2===0?e:t;if(o===0)s.moveTo(Math.cos(a)*l,Math.sin(a)*l);else s.lineTo(Math.cos(a)*l,Math.sin(a)*l)}s.closePath();let r=new er(s,{depth:n,bevelEnabled:!0,bevelThickness:n*0.9,bevelSize:t*0.35,bevelSegments:1});return r.translate(0,0,-n/2),r}function pu(e,t,n,i=48,s=14,r=0,o=0.08){let a=new wi(e.map((u)=>new R(u[0],u[1],u[2]))),l=new Ti(a,i,1,s,!1),c=l.getAttribute("position"),h=new R,d=new R;for(let u=0;u<=i;u++){let f=u/i;a.getPointAt(f,h);let m=t+(n-t)*f;if(r>0)m*=1+o*Math.pow(Math.abs(Math.sin(f*r*Math.PI)),6);for(let v=0;v<=s;v++){let p=u*(s+1)+v;d.fromBufferAttribute(c,p).sub(h).multiplyScalar(m).add(h),c.setXYZ(p,d.x,d.y,d.z)}}return c.needsUpdate=!0,l.computeVertexNormals(),l}function sa(e,t,n,i=0,s=40){let r=new wi(e.map((m)=>new R(m[0],m[1],m[2]))),o=[],a=[],l=[],c=new R,h=new R,d=new R,u=new R(1,0,0);for(let m=0;m<=s;m++){let v=m/s;r.getPointAt(v,c),r.getTangentAt(v,h),d.copy(u).sub(h.clone().multiplyScalar(u.dot(h))).normalize(),d.applyAxisAngle(h,i*v);let p=(t+(n-t)*v)/2;if(o.push(c.x-d.x*p,c.y-d.y*p,c.z-d.z*p,c.x+d.x*p,c.y+d.y*p,c.z+d.z*p),a.push(0,v,1,v),m<s){let g=m*2;l.push(g,g+1,g+2,g+1,g+3,g+2)}}let f=new gt;return f.setAttribute("position",new Ge(o,3)),f.setAttribute("uv",new Ge(a,2)),f.setIndex(l),f.computeVertexNormals(),f}function Fl(e,t,n){let i=new $s;e.forEach(([r,o],a)=>a?i.lineTo(r,o):i.moveTo(r,o)),i.closePath();let s=new er(i,{depth:t,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:12});return s.translate(0,0,-t/2),s}function mu(e,t,n,i=5){let s=[],r=[[e/2-n,t/2-n,0],[-e/2+n,t/2-n,Math.PI/2],[-e/2+n,-t/2+n,Math.PI],[e/2-n,-t/2+n,3*Math.PI/2]];for(let[o,a,l]of r)for(let c=0;c<=i;c++){let h=l+c/i*(Math.PI/2);s.push([o+Math.cos(h)*n,a+Math.sin(h)*n])}return s}function ar(e,t,n){let i=new $s;i.moveTo(0,0),i.bezierCurveTo(t*0.9,e*0.18,t*0.7,e*0.75,0,e),i.bezierCurveTo(-t*0.7,e*0.75,-t*0.9,e*0.18,0,0);let s=new er(i,{depth:n,bevelEnabled:!0,bevelThickness:n*0.8,bevelSize:t*0.06,bevelSegments:2,curveSegments:14});return s.translate(0,0,-n/2),s}function Is(e,t,n,i=0.014,s){let r=ii(e,"screw",t,n),o=e.geo(new Nt(i,i*1.1,i*0.55,e.n(8,14))),a=s??e.metal("#c9d2e0",0.25);e.mesh(o,a,r,[0,0,i*0.2],[Math.PI/2,0,0]);let l=e.matte("#2a2f3a",0.6);e.ell(r,l,[0,0,i*0.48],[i*0.8,i*0.14,i*0.08],[0,0,0.6],!0),e.ell(r,l,[0,0,i*0.48],[i*0.8,i*0.14,i*0.08],[0,0,0.6+Math.PI/2],!0)}function Ul(e,t,n,i,s,r,o=0.014,a){for(let[l,c]of s)Is(e,t,Rt(n,i,l,c,r),o,a)}function Pn(e,t,n,i){let s=i.seg??[16,12],r=e.still?[Math.round(s[0]*1.7),Math.round(s[1]*1.7)]:[s[0],s[1]];return e.mesh(e.geo(i0({...i,seg:r})),n,t)}function r0(e,t,n,i){let s=ii(e,"core",t,n),r=i.radius,o=e.metal(i.rim,0.2),a=e.geo(new $e(r*1.05,r*0.26,e.n(8,14),e.n(24,44)));e.mesh(a,o,s,[0,0,r*0.12]),e.mesh(e.geo(new Nt(r*1.1,r*1.25,r*0.3,e.n(24,44))),e.armor("#20263a",0.5,0.35),s,[0,0,0],[Math.PI/2,0,0]),e.ell(s,e.glow(i.color,2.2,!1),[0,0,r*0.14],[r*0.82,r*0.82,r*0.42]),e.ell(s,e.glow("#ffffff",1.6,!1),[0,0,r*0.36],[r*0.32,r*0.32,r*0.18],[0,0,0],!0),e.ell(s,e.glass(i.dome??"#e8fbff",0.28),[0,0,r*0.2],[r*0.95,r*0.95,r*0.55]),e.ell(s,e.flat("#ffffff",0.85),[-r*0.38,r*0.4,r*0.62],[r*0.16,r*0.1,r*0.04],[0,0,0.7],!0);let l=i.screws??4;for(let c=0;c<l;c++){let h=c/l*Math.PI*2+Math.PI/4;Is(e,s,{pos:[Math.cos(h)*r*1.05,Math.sin(h)*r*1.05,r*0.34],rot:[0,0,0]},r*0.13,o)}if(i.halo)e.mesh(e.geo(new $e(r*1.45,r*0.05,6,e.n(28,56))),e.glow(i.color,1.4,!1),s,[0,0,r*0.05]);return s}function lr(e,t,n,i,s,r="#c9d2e0",o=[0,0,0]){let a=e.group("ring",t,n,o);return e.mesh(e.geo(new $e(i,i*0.2,e.n(7,12),e.n(22,40))),e.metal(r,0.22),a,[0,i*0.12,0],[Math.PI/2,0,0]),e.mesh(e.geo(new $e(i*1.01,i*0.08,5,e.n(22,40))),e.glow(s,2,!1),a,[0,-i*0.14,0],[Math.PI/2,0,0]),a}function Ai(e,t,n,i,s=6){let r=e.geo(s0(s,1,2,0.9,0.35)),o=e.geo(new vn(1,0)),a=e.crystal(n),l=e.glow(n,1,!0);for(let[c,h,d,u,f,m]of i){let v=e.group("crystal",t,[c,h,d],[m??0,0,f]);e.mesh(o,l,v,[0,u*0.75,0],[0,0.4,0],[u*0.28,u*0.72,u*0.28]),e.mesh(r,a,v,[0,0,0],[0,0.3,0],[u*0.5,u*0.62,u*0.5])}}function Bl(e,t,n,i,s,r,o=0.55){let a=ii(e,"blush",t,n);e.mesh(e.geo(new rn(2*s,2*r)),e.spot(i,o),a,[0,0,0.006])}var nM="oa-fur-v1";function iM(e,t,n,i){let s=`furshell${t.color}${n.toFixed(4)}${i.toFixed(1)}${t.ao}${t.droop}${t.maskDir}${t.maskCut}${t.sparkle}${t.tip}${t.glow}${t.glowK}`;return e.keep(s,()=>{let r=new Y(t.color),o=new ti({color:r,roughness:0.92,metalness:0});if(t.glow)o.emissive.set(t.glow),o.emissiveIntensity=t.glowK??0.2;let a=t.shells??(e.still?16:5),l={uFurLen:{value:n},uShells:{value:a},uDensity:{value:i},uFurAO:{value:t.ao??0.55},uDroop:{value:t.droop??0.25},uMaskDir:{value:t.maskDir?[...t.maskDir]:[0,0,0]},uMaskCut:{value:t.maskDir?t.maskCut??0.4:9},uSpark:{value:t.sparkle??0},uSparkCol:{value:new Y(t.sparkleColor??"#ffffff")},uTip:{value:new Y(t.tip??t.color)}};return o.userData.fur=!0,o.userData.furUniforms=l,o.onBeforeCompile=(c)=>{Object.assign(c.uniforms,l),c.vertexShader=c.vertexShader.replace("#include <common>",["#include <common>","uniform float uFurLen; uniform float uShells; uniform float uDroop; uniform vec3 uMaskDir; uniform float uMaskCut;","varying float vShell; varying vec3 vFurP; varying float vFurMask;"].join(`
`)).replace("#include <begin_vertex>",["#include <begin_vertex>","float oaSh = (float(gl_InstanceID) + 1.0) / uShells;","float oaMask = 1.0 - smoothstep(uMaskCut - 0.25, uMaskCut + 0.05, dot(normalize(position), uMaskDir));","transformed += normalize(objectNormal) * uFurLen * oaSh * oaMask;","transformed.y -= uDroop * uFurLen * oaSh * oaSh * oaMask;","vShell = oaSh; vFurP = position; vFurMask = oaMask;"].join(`
`)),c.fragmentShader=c.fragmentShader.replace("#include <common>",["#include <common>","uniform float uDensity; uniform float uFurAO; uniform float uSpark; uniform vec3 uSparkCol; uniform vec3 uTip;","varying float vShell; varying vec3 vFurP; varying float vFurMask;","float oaH(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }"].join(`
`)).replace("#include <clipping_planes_fragment>",["#include <clipping_planes_fragment>","vec3 oaF = vFurP * uDensity;","vec3 oaC = floor(oaF);","float oaHt = oaH(oaC);","vec3 oaJ = vec3(oaH(oaC + 1.7), oaH(oaC + 3.1), oaH(oaC + 5.3)) - 0.5;","float oaD = length(fract(oaF) - 0.5 - oaJ * 0.45);","float oaLen = 0.35 + 0.65 * oaHt;","if (vFurMask < 0.08 || vShell > oaLen * vFurMask || oaD > 0.62 * (1.0 - vShell / max(oaLen, 0.01) * 0.8)) discard;"].join(`
`)).replace("#include <color_fragment>",["#include <color_fragment>","diffuseColor.rgb *= mix(uFurAO, 1.0, smoothstep(0.0, 0.9, vShell));","diffuseColor.rgb = mix(diffuseColor.rgb, uTip, smoothstep(0.35, 1.0, vShell) * 0.6);"].join(`
`)).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","if (uSpark > 0.0 && oaH(oaC + 9.7) < uSpark && vShell > oaLen * 0.55) totalEmissiveRadiance += uSparkCol * 1.6;"].join(`
`))},o.customProgramCacheKey=()=>nM,o})}function zl(e,t,n,i,s,r,o=[0,0,0]){let a=(s[0]+s[1]+s[2])/3,l=iM(e,r,r.len/a,(r.density??260)*a),c=r.shells??(e.still?16:5),h=new Xr(n,l,c),d=new Je;for(let u=0;u<c;u++)h.setMatrixAt(u,d);return h.instanceMatrix.needsUpdate=!0,h.position.set(i[0],i[1],i[2]),h.rotation.set(o[0],o[1],o[2]),h.scale.set(s[0],s[1],s[2]),h.frustumCulled=!1,h.name="fur",h.userData.fur=!0,t.add(h),e.meshes++,h}function Xn(e,t,n,i,s,r=[0,0,0],o=!0){if(o)e.ell(t,e.fur(s.color),n,i,r);zl(e,t,e.sphereFur,n,i,s,r)}function Vt(e,t,n){let i=e.isSphere(t.geometry)?e.sphereFur:t.geometry,s=t.scale,r=zl(e,t.parent,i,[t.position.x,t.position.y,t.position.z],[s.x,s.y,s.z],n);return r.quaternion.copy(t.quaternion),r}function ra(e){let n=e.shoulderY*Math.sin(0.5)+e.shoulderZ*Math.cos(0.5),i=e.shoulderY*Math.cos(0.5)-e.shoulderZ*Math.sin(0.5);return{z:n+e.armLen*0.86,y:Math.max(0.2,i-e.armLen*0.5)}}var gu=0.27;function eo(e,t,n){let i=e.group("root",null),s=e.group("lean",i),r=e.group("hips",s,[0,gu,0]),o=e.group("body",r),a=(l,c)=>e.group(l,c);return{root:i,lean:s,hips:r,body:o,head:a("head",o),earL:a("earL",o),earR:a("earR",o),armL:a("armL",o),armR:a("armR",o),legL:a("legL",r),legR:a("legR",r),tail:a("tail",r),tailSegs:[],wings:[],rotors:[],eyes:[],mouthClosed:a("mouthClosed",o),mouthOpen:a("mouthOpen",o),prop:a("prop",o),wall:a("wall",i),spark:a("spark",i),zzz:a("zzz",i),hovering:n,species:t}}function sM(e,t){return{top:yn(e,0.45),bottom:yn(e,1.35),deep:t,ring:e}}function yn(e,t){let n=parseInt(e.slice(1),16),i=(s)=>{let r=t<=1?s*t:s+(255-s)*(t-1);return Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0")};return`#${i(n>>16&255)}${i(n>>8&255)}${i(n&255)}`}function xu(e,t,n,i){let s=e.gloss(i);if(n==="w"){let r=e.geo(new $e(0.03,0.0065,6,14,Math.PI));for(let o of[-1,1])e.mesh(r,s,t.mouthClosed,[o*0.029,0.012,0.004],[0,0,Math.PI])}else if(n==="smile"||n==="grin"){let r=n==="grin"?0.06:0.042;if(e.mesh(e.geo(new $e(r,0.007,6,18,Math.PI*0.8)),s,t.mouthClosed,[0,r*0.75,0.004],[0,0,Math.PI*1.1]),n==="grin")e.mesh(e.geo(new Qt(0.011,0.028,6)),e.gloss("#ffffff"),t.mouthClosed,[0.03,-0.004,0.008],[0,0,Math.PI])}else if(n==="smirk")e.mesh(e.geo(new $e(0.045,0.007,6,18,Math.PI*0.55)),s,t.mouthClosed,[0.012,0.03,0.004],[0,0,Math.PI*1.32]);else e.mesh(e.geo(new $e(0.016,0.006,6,16)),s,t.mouthClosed,[0,0,0.004]);e.ell(t.mouthOpen,e.gloss("#4a1f2a"),[0,0,0],[0.06,0.05,0.02],[0,0,0],!0),e.ell(t.mouthOpen,e.matte("#ff8fa0",0.6),[0,-0.022,0.01],[0.035,0.018,0.012],[0,0,0],!0)}function vu(e,t,n,i,s,r,o=1){if(s==="triangle"){let a=e.geo(new Qt(0.05*o,0.05*o,3));e.mesh(a,e.gloss(r),t,[n[0],n[1],n[2]],[i+Math.PI/2,0,0],[1,1,0.55])}else e.ell(t,e.gloss(r),n,[0.05*o,0.034*o,0.038*o],[i,0,0],!0);e.ell(t,e.flat("#ffffff",0.8),[n[0]-0.014*o,n[1]+0.012*o,n[2]+0.03*o],[0.012*o,0.007*o,0.004],[0,0,0.3],!0)}function oa(e,t,n,i,s={}){let r=eo(t,e,!1),o=n.shell==="armor",a=o?t.armor(n.fur,n.metal??0.4):t.fur(n.fur),l=o?t.armor(n.belly,0.1,0.4):t.fur(n.belly),c=o?t.armor(n.furDark,n.metal??0.4,0.38):t.fur(n.furDark),h=[0,i.torso[1]*0.68,0],d=t.ell(r.body,a,h,i.torso),u;if(!s.noBelly)u=t.ell(r.body,l,[0,h[1]-0.04,i.torso[2]*0.55],[i.torso[0]*0.72,i.torso[1]*0.74,i.torso[2]*0.5]);let f=h[1]+i.torso[1]*0.7;r.head.position.set(0,f,0.02);let m=[0,i.head[1]*0.82,0],v=t.ell(r.head,a,m,i.head),p,g=null;if(i.muzzle){let M=Rt(m,i.head,0,-0.32,-i.muzzle[2]*0.55);g={c:M.pos,r:i.muzzle},p=t.ell(r.head,l,M.pos,i.muzzle,[M.rot[0],0,0]);let E=Rt(M.pos,i.muzzle,0,s.nose==="triangle"?0.25:0.42,-0.012);vu(t,r.head,E.pos,E.rot[0],s.nose??"button",n.nose)}let _=n.iris??sM(n.eye,n.nose);for(let M of[-1,1]){let E=Rt(m,i.head,M*i.eyeAz,i.eyeEl,-i.eyeSize*0.14);r.eyes.push(or(t,r.head,E,{size:i.eyeSize,iris:_,glow:o&&e!=="panzerling"?0.35:0,lid:yn(n.nose,0.9),lashes:o?0:2,lidSkin:a,...s.eye},M))}for(let M of[-1,1])Bl(t,r.head,Rt(m,i.head,M*0.66,-0.2,0.004),n.cheek,0.085,0.055);let b=g??{c:m,r:i.head},y=Rt(b.c,b.r,0,g?-0.35:-0.42,0);r.head.add(r.mouthClosed,r.mouthOpen),r.mouthClosed.position.set(...y.pos),r.mouthOpen.position.set(...y.pos),r.mouthClosed.rotation.x=y.rot[0],r.mouthOpen.rotation.x=y.rot[0],xu(t,r,s.mouth??"w",yn(n.nose,0.9));let S=h[1]+i.torso[1]*0.38,T=t.geo(new En(i.armR,0.17,6,14));for(let[M,E]of[[r.armL,-1],[r.armR,1]])M.position.set(E*i.torso[0]*0.9,S,0.04),M.rotation.z=E*0.16,t.mesh(T,s.armMat??a,M,[0,-0.14,0]),t.ell(M,s.pawMat??c,[0,-0.29,0.01],[i.armR*1.12,i.armR,i.armR*1.12]);let x=t.geo(new En(i.legR,0.04,6,14));for(let[M,E]of[[r.legL,-1],[r.legR,1]]){M.position.set(E*i.torso[0]*0.47,0,0.02),t.mesh(x,s.legMat??a,M,[0,-0.09,0]);let L=s.footMat??c;if(t.ell(M,L,[0,-gu+0.085,0.05],[i.legR*1.08,0.085,i.legR*1.4]),s.toes)for(let I of[-1,0,1])t.ell(M,L,[I*i.legR*0.55,-gu+0.06,0.05+i.legR*1.25],[i.legR*0.32,0.05,i.legR*0.32],[0,0,0],!0)}return r.tail.position.set(0,0.14,-i.torso[2]*0.85),{k:t,pal:n,rig:r,skull:{c:m,r:i.head},muzzle:g,bodyMat:a,bellyMat:l,darkMat:c,torso:i.torso,torsoC:h,skullMesh:v,torsoMesh:d,bellyMesh:u,muzzleMesh:p}}function cr(e,t,n,i,s,r){let o=e.geo(new Qt(1,1,20,1));e.mesh(o,s,t,[0,n*0.45,0],[0,0,0],[i,n,i*0.42]),e.mesh(o,r,t,[0,n*0.4,i*0.2],[0,0,0],[i*0.6,n*0.78,i*0.18])}function is(e,t,n,i,s){let r=[],o=t,a=[0,0,0],l=new R(0,1,0);return i.forEach(([c,h,d,u],f)=>{let m=e.group(`tail${f}`,o,[c-a[0],h-a[1],d-a[2]]),v=i[f+1],p=v?new R(v[0]-c,v[1]-h,v[2]-d):new R(c-a[0],h-a[1],d-a[2]),g=p.length(),_=[u,Math.max(u*1.15,g*0.95),u],b=e.ell(m,n[Math.min(f,n.length-1)],[0,0,0],_);if(g>0.000001)b.quaternion.setFromUnitVectors(l,p.normalize());s?.(m,f,_,b.quaternion),r.push(m),o=m,a=[c,h,d]}),r}var a0=(e)=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},yu={maskDir:a0([0,-0.25,1]),maskCut:0.42};function Gl(e){return e.head.add(e.earL,e.earR),[[e.earL,-1],[e.earR,1]]}function rM(e,t,n){return e.keep(`2s${t}`,()=>{let i=n.clone();return i.side=Jt,i})}var oM={fur:"#f4f6ff",furDark:"#c7cdf2",belly:"#ffffff",accent:"#8fe3ff",eye:"#7fdcff",cheek:"#ffb0d4",nose:"#2b2554",iris:{top:"#2a1f8f",bottom:"#86ecff",deep:"#120b3c",ring:"#d6c6ff"}},aM={torso:[0.27,0.33,0.27],head:[0.53,0.48,0.49],armR:0.074,legR:0.098,muzzle:[0.115,0.09,0.2],eyeAz:0.43,eyeEl:0.07,eyeSize:0.142};function lM(e){let t=oa("sternmantel",e,oM,aM,{toes:!0,mouth:"smile",nose:"triangle",eye:{aspect:0.8,cover:0.24,lashes:3}}),{rig:n}=t,i={color:"#f4f6ff",tip:"#ffffff",len:0.03,ao:0.72,density:300},s="#252a6b",r={color:"#252a6b",tip:"#5f58d8",len:0.038,ao:0.5,density:320,sparkle:0.12,sparkleColor:"#fff6d6"},o="#9be9ff",a=e.armor("#e3e8f4",0.85,0.16);Vt(e,t.skullMesh,{...i,...yu});for(let f of[-1,1])Xn(e,n.head,[f*0.41,0.2,0.12],[0.14,0.075,0.09],{...i,len:0.05,droop:0.3},[0,f*0.3,f*0.75]);Xn(e,n.head,[0,0.86,0.14],[0.11,0.06,0.09],{...i,len:0.05,droop:-0.2},[0.3,0,0]);for(let[f,m]of Gl(n))f.position.set(m*0.27,0.74,-0.05),f.rotation.set(-0.12,0,-m*0.26),cr(e,f,0.5,0.18,t.bodyMat,e.fur("#d4e6ff")),Xn(e,f,[0,0.09,0.04],[0.075,0.11,0.03],{...i,len:0.035,droop:-0.4},[0,0,0],!1),Ai(e,f,"#9be9ff",[[0,0.34,0,0.12,0],[m*0.05,0.3,-0.02,0.075,m*0.55],[-m*0.04,0.32,0.01,0.06,-m*0.4]]);let l=ii(e,"brow",n.head,Rt(t.skull.c,t.skull.r,0,0.42,0.004));e.mesh(e.geo(new $e(0.055,0.011,10,32)),a,l,[0,0,0.006]),e.mesh(e.geo(ia(0.08,0.026,0.018,4)),e.crystal("#ffe9a0",0.9),l,[0,0,0.02]),e.mesh(e.geo(ia(0.048,0.016,0.012,4)),e.glow("#fff0b8",1.4,!0),l,[0,0,0.022]);let c=t.torsoC,h=e.ell(n.body,e.fur("#252a6b",0.9),[0,c[1]+0.16,-0.07],[0.35,0.21,0.3]);Vt(e,h,{...r,maskDir:[0,0,1],maskCut:0.45});let d=e.ell(n.body,e.fur("#252a6b",0.9),[0,c[1]-0.02,-0.13],[0.3,0.32,0.22]);Vt(e,d,{...r,len:0.03,maskDir:[0,0,1],maskCut:0.1}),Xn(e,n.body,[0,c[1]+0.13,0.15],[0.19,0.15,0.12],{...i,len:0.055,droop:0.7}),Vt(e,t.torsoMesh,{...i,len:0.022});let u=e.group("jewel",n.body,[0,c[1]+0.03,0.27],[-0.15,0,0]);e.mesh(e.geo(new $e(0.07,0.014,10,36)),a,u,[0,0,0]),e.mesh(e.geo(ia(0.1,0.032,0.022,4)),e.crystal("#9be9ff",0.85),u,[0,0,0.016]),e.mesh(e.geo(ia(0.06,0.02,0.016,4)),e.glow("#9be9ff",2,!0),u,[0,0,0.02]);for(let f of[0.8,2.35,3.9,5.5])Is(e,u,{pos:[Math.cos(f)*0.07,Math.sin(f)*0.07,0.012],rot:[0,0,0]},0.008,a);for(let f of[n.armL,n.armR]){let m=[0,-0.17,0],v=[0.082,0.12,0.082];Pn(e,f,a,{c:m,r:v,az:[-1.25,1.25],el:[-0.7,0.45],thick:0.011,bevel:0.011}),Ai(e,f,"#9be9ff",[[0,-0.16,0.095,0.03,0,1.4]]),Ul(e,f,m,v,[[-0.95,-0.45],[0.95,-0.45]],0.013,0.008,a),lr(e,f,[0,-0.255,0.005],0.08,"#9be9ff","#e3e8f4")}for(let f of[n.legL,n.legR])lr(e,f,[0,-0.13,0.03],0.1,"#9be9ff","#e3e8f4");return n.tail.position.set(0,0.06,-0.26),n.tailSegs=is(e,n.tail,[t.bodyMat,t.bodyMat,t.bodyMat,e.fur("#252a6b",0.9),e.fur("#252a6b",0.9)],[[0.03,0.02,-0.1,0.12],[0.14,0.12,-0.25,0.19],[0.3,0.3,-0.3,0.22],[0.42,0.55,-0.22,0.2],[0.45,0.78,-0.07,0.14]],(f,m)=>{Vt(e,f.children[0],m>=3?{...r,len:0.06,droop:0.15}:{...i,len:0.07,droop:0.25})}),Ai(e,n.tailSegs[4],"#9be9ff",[[0,0.12,0.02,0.1,0.2],[0.06,0.08,0,0.06,-0.7],[-0.05,0.08,0.02,0.05,0.7]]),t}var cM={fur:"#d8b88e",furDark:"#8a5a3c",belly:"#f6e8cf",accent:"#86e07a",eye:"#a8e05a",cheek:"#ff9e8a",nose:"#4a2c22",iris:{top:"#2c4d1a",bottom:"#d4f27a",deep:"#17210c",ring:"#f2ffb0"}},hM={torso:[0.33,0.4,0.31],head:[0.5,0.46,0.46],armR:0.085,legR:0.12,muzzle:[0.15,0.115,0.17],eyeAz:0.4,eyeEl:0.06,eyeSize:0.13};function o0(e,t,n,i,s=0,r=1){let o=e.group("vial",t,n,[0,0,s]);o.scale.setScalar(r);let a=e.glass("#eafff4",0.3);return e.mesh(e.geo(new Nt(0.034,0.034,0.1,e.n(14,24))),a,o,[0,0,0]),e.ell(o,a,[0,0.05,0],[0.034,0.012,0.034],[0,0,0],!0),e.mesh(e.geo(new Nt(0.028,0.028,0.062,e.n(12,20))),e.glow(i,1.6,!1),o,[0,-0.016,0]),e.mesh(e.geo(new Nt(0.016,0.016,0.03,10)),a,o,[0,0.068,0]),e.mesh(e.geo(new Nt(0.018,0.015,0.024,10)),e.leather("#9b6a43"),o,[0,0.09,0]),e.ell(o,e.flat("#ffffff",0.7),[-0.018,0.012,0.03],[0.005,0.03,0.003],[0,0,0],!0),o}function uM(e){let t=oa("kraeuterhorn",e,cM,hM,{toes:!1,noBelly:!0,mouth:"smile",footMat:e.armor("#5a3a2a",0.1,0.3),eye:{cover:0.16,lashes:1}}),{rig:n}=t,i="#5f9a3a",s={color:"#5f9a3a",tip:"#b2e05e",len:0.032,ao:0.4,density:420,droop:0.1},r={color:"#d8b88e",tip:"#f2dcb8",len:0.024,ao:0.65,density:300},o=e.metal("#d9a54a",0.24),a="#2f6b5e",l=e.fur("#2f6b5e",0.7),c=rM(e,"robe",l),h=e.metal("#e2b04e",0.22);Vt(e,t.skullMesh,{...r,...yu});let d=[[0.19,0.57],[0.27,0.52],[0.33,0.4],[0.355,0.22],[0.39,0.02],[0.44,-0.14],[0.465,-0.2],[0.45,-0.212],[0.41,-0.2]].map(([E,L])=>new ie(E,L));e.mesh(e.geo(new ws(d,e.n(36,64))),c,n.body),e.mesh(e.geo(new $e(0.462,0.016,8,e.n(40,72))),h,n.body,[0,-0.2,0],[Math.PI/2,0,0]),e.mesh(e.geo(Fl(mu(0.05,0.62,0.02),0.012,0.006)),h,n.body,[0,0.2,0.378],[0.24,0,0]);for(let E of[0.42,0.3,0.18]){let L=0.345+(0.42-E)*0.2;e.ell(n.body,o,[0,E,L+0.015],[0.022,0.022,0.012],[0,0,0],!0)}let u=e.geo(new Ut(1,e.n(28,48),e.n(16,28),Math.PI/2+0.95,Math.PI*2-1.9,0,Math.PI*0.6)),f=e.mesh(u,c,n.head,[0,t.skull.c[1]+0.01,-0.04],[0,0,0],[0.56,0.53,0.54]);Vt(e,f,{...s,maskDir:[0,-1,0],maskCut:-0.3});{let E=[0,t.skull.c[1]+0.01,-0.04],L=[0.565,0.535,0.545],I=Math.PI/2+0.95,z=Math.PI/2-0.95,W=[];for(let P=0;P<=16;P++){let X=P/16,G=Math.PI*0.6*Math.abs(1-2*X)+0.001,F=X<0.5?I:z;W.push([E[0]-Math.cos(F)*Math.sin(G)*L[0],E[1]+Math.cos(G)*L[1],E[2]+Math.sin(F)*Math.sin(G)*L[2]])}e.mesh(e.geo(pu(W,0.03,0.03,e.n(48,90),e.n(8,12))),h,n.head)}let m=e.group("shroom",n.head,[-0.2,0.93,-0.1],[0,0,0.35]);e.mesh(e.geo(new Nt(0.014,0.02,0.07,10)),e.matte("#efe6d6"),m,[0,0.035,0]),e.ell(m,e.glow("#7dffcf",1.8,!1),[0,0.075,0],[0.045,0.026,0.045]);let v=e.armor("#e6cf9f",0,0.42),p=e.geo(ar(0.1,0.045,0.006)),g=e.fur("#7cc650",0.5);for(let E of[-1,1]){let L=[E*0.2,0.84,-0.04],z=[[0,0,0],[0.08,0.1,-0.05],[0.17,0.08,-0.13],[0.22,-0.02,-0.11],[0.2,-0.11,-0.03],[0.14,-0.12,0.02]].map(([W,P,X])=>[L[0]+E*W,L[1]+P,L[2]+X]);e.mesh(e.geo(pu(z,0.058,0.014,e.n(30,56),e.n(9,14),10,0.12)),v,n.head),e.mesh(p,g,n.head,[E*0.3,0.95,-0.1],[0.2,0,-E*0.5])}for(let[E,L]of Gl(n)){E.position.set(L*0.53,0.42,0.04),E.rotation.set(0,0,L*1.05);let I=e.ell(E,t.bodyMat,[0,-0.12,0],[0.075,0.15,0.04]);e.ell(E,e.fur("#f0b9a6"),[0,-0.12,0.022],[0.048,0.11,0.022]),Vt(e,I,{...r,len:0.02,maskDir:[0,0,1],maskCut:0.5})}let _=t.muzzle,b=_.c[1]+_.r[1]*0.55,y=_.c[2]+_.r[2]*0.62;for(let E of[-1,1])e.mesh(e.geo(new $e(0.05,0.008,8,28)),o,n.head,[E*0.062,b,y],[-0.35,E*0.25,0]),e.ell(n.head,e.glass("#fff1c8",0.28),[E*0.062,b,y],[0.047,0.047,0.01],[-0.35,E*0.25,0]),e.mesh(e.geo(new Nt(0.005,0.005,0.2,6)),o,n.head,[E*0.16,b+0.03,y-0.12],[Math.PI/2-0.2,E*0.6,0]);e.mesh(e.geo(new $e(0.018,0.006,6,12,Math.PI)),o,n.head,[0,b+0.006,y+0.005],[-0.35,0,0]);let S=[[0.095,0.02],[0.105,-0.1],[0.14,-0.2],[0.15,-0.225],[0.12,-0.23]].map(([E,L])=>new ie(E,L)),T=e.geo(new ws(S,e.n(18,32)));for(let E of[n.armL,n.armR])e.mesh(T,c,E),e.mesh(e.geo(new $e(0.146,0.012,6,e.n(20,36))),h,E,[0,-0.222,0],[Math.PI/2,0,0]);let x=0.06;e.mesh(e.geo(new $e(0.385,0.026,8,e.n(40,64))),e.leather("#4b2f22"),n.body,[0,x,0],[Math.PI/2,0,0]);let M=e.group("buckle",n.body,[0,x,0.395]);e.mesh(e.geo(Fl(mu(0.075,0.06,0.012),0.012,0.005)),o,M);for(let[E,L]of[[-0.7,"#7dff9a"],[0.7,"#ffbf4a"],[1.15,"#c48bff"],[-1.15,"#5fe8ff"]])o0(e,n.body,[Math.sin(E)*0.41,x-0.02,Math.cos(E)*0.41],L,-E*0.12,1.25);return e.mesh(e.geo(new Nt(0.014,0.014,0.9,8)),e.leather("#4b2f22"),n.body,[0.02,0.32,0.31],[0.25,0,0.75]),o0(e,n.body,[-0.17,0.38,0.34],"#9dff7a",0.2,1.8),e.ell(n.body,e.leather("#6b4430"),[0.36,-0.02,0.1],[0.08,0.1,0.12]),e.ell(n.body,e.leather("#83563b"),[0.37,0.06,0.1],[0.082,0.035,0.12]),Is(e,n.body,{pos:[0.445,0.02,0.1],rot:[0,Math.PI/2,0]},0.012,o),n.tailSegs=[],t}function dM(e){let t={fur:"#4b5574",furDark:"#2a3042",belly:"#eef1f8",accent:"#38f2ff",eye:"#5ff6ff",cheek:"#ff5fc0",nose:"#0d0f16",iris:{top:"#0a5f84",bottom:"#8ffcff",deep:"#03141c",ring:"#e2fdff"}},n=eo(e,"funkenwolf",!1),i="#38f2ff",s="#ff3fb8",r={color:t.fur,tip:"#8a98c0",len:0.026,ao:0.6,density:300},o={color:"#eef1f8",tip:"#ffffff",len:0.05,ao:0.75,density:300,droop:0.6},a=e.fur(t.fur),l=e.fur("#eef1f8"),c=e.armor("#5d6886",0.7,0.2),h=e.armor("#cfd6e6",0.8,0.18),d=e.glow("#38f2ff",2.4,!1),u=e.glow("#ff3fb8",2.4,!1),f=[0,0.14,-0.02],m=[0.26,0.24,0.42],v=e.ell(n.body,a,f,m);Vt(e,v,r),Xn(e,n.body,[0,0.12,0.3],[0.2,0.21,0.15],o);for(let T of[-1,1]){let x=T>0?[0.42,1.3]:[-1.3,-0.42];Pn(e,n.body,c,{c:f,r:m,az:x,el:[0.08,0.72],thick:0.024,bevel:0.016}),Pn(e,n.body,d,{c:f,r:m,az:x,el:[-0.02,0.04],thick:0.008,bevel:0.004,seg:[16,4]}),Ul(e,n.body,f,m,[[T*0.55,0.62],[T*1.18,0.62]],0.026,0.01,h),Pn(e,n.body,c,{c:f,r:m,az:T>0?[Math.PI-1.2,Math.PI-0.35]:[Math.PI+0.35,Math.PI+1.2],el:[0.1,0.62],thick:0.022,bevel:0.016})}Pn(e,n.body,c,{c:f,r:m,az:[-Math.PI,Math.PI],el:[1.12,1.56],thick:0.026,bevel:0.018,seg:[32,6]}),Pn(e,n.body,u,{c:f,r:m,az:[-Math.PI,Math.PI],el:[1.04,1.09],thick:0.01,bevel:0.004,seg:[48,3]}),Pn(e,n.body,c,{c:f,r:m,az:[Math.PI-0.32,Math.PI+0.32],el:[0.5,0.98],thick:0.022,bevel:0.014}),Pn(e,n.body,u,{c:f,r:m,az:[Math.PI-0.04,Math.PI+0.04],el:[0.55,0.94],thick:0.03,bevel:0.004,seg:[4,10]}),e.mesh(e.geo(new $e(0.2,0.03,10,e.n(36,64))),c,n.body,[0,0.3,0.3],[Math.PI/2-0.75,0,0]),e.mesh(e.geo(new $e(0.205,0.009,6,e.n(36,64))),d,n.body,[0,0.285,0.31],[Math.PI/2-0.75,0,0]),r0(e,n.body,{pos:[0,0.2,0.43],rot:[-0.5,0,0]},{color:"#ff3fb8",rim:"#cfd6e6",radius:0.045,halo:!0}),n.head.position.set(0,0.36,0.34);let p=[0,0.18,0.06],g=[0.34,0.31,0.32],_=e.ell(n.head,a,p,g);Vt(e,_,{...r,...yu});let b=e.geo(new Nt(0.075,0.125,0.25,4,1));e.mesh(b,l,n.head,[0,0.085,0.37],[Math.PI/2+0.12,Math.PI/4,0]),e.ell(n.head,l,[0,0.13,0.27],[0.16,0.1,0.12]);for(let T of[-1,1])Xn(e,n.head,[T*0.25,0.06,0.2],[0.12,0.08,0.09],{...o,len:0.045,droop:0.3},[0,0,T*0.6]);vu(e,n.head,[0,0.135,0.5],-0.2,"triangle",t.nose,1.15),n.head.add(n.mouthClosed,n.mouthOpen),n.mouthClosed.position.set(0,0.04,0.47),n.mouthOpen.position.set(0,0.04,0.47),n.mouthClosed.rotation.x=-0.25,n.mouthOpen.rotation.x=-0.25,xu(e,n,"grin","#0d0f16");for(let T of[-1,1]){let x=Rt(p,g,T*0.44,0.08,-0.016100000000000003);n.eyes.push(or(e,n.head,x,{size:0.115,iris:t.iris,glow:0.2,lid:"#0b0d14",lashes:0,aspect:0.95,brow:{tilt:0.38,color:"#141826"}},T))}Pn(e,n.head,c,{c:p,r:g,az:[-1.25,1.25],el:[0.48,1.3],thick:0.026,bevel:0.018}),Pn(e,n.head,d,{c:p,r:g,az:[-0.95,0.95],el:[0.42,0.46],thick:0.03,bevel:0.004,seg:[24,3]}),Pn(e,n.head,u,{c:p,r:g,az:[-0.06,0.06],el:[0.62,1.1],thick:0.036,bevel:0.004,seg:[3,10]}),Ul(e,n.head,p,g,[[-1.1,0.62],[1.1,0.62]],0.03,0.011,h);let y=e.geo(Fl([[-0.08,0],[0.08,0],[0.012,0.32],[-0.012,0.32]],0.016,0.01));for(let[T,x]of Gl(n))T.position.set(x*0.19,0.44,-0.02),T.rotation.set(-0.12,0,-x*0.24),cr(e,T,0.42,0.16,a,e.fur("#3a1b3e")),Xn(e,T,[0,0.09,0.04],[0.065,0.1,0.025],{...o,len:0.03,droop:-0.4},[0,0,0],!1),e.mesh(y,c,T,[0,0.03,-0.045],[0.08,0,0]),e.mesh(e.geo(new Nt(0.007,0.007,0.32,6)),d,T,[-x*0.08,0.18,0],[0,0,x*0.24]),Is(e,T,{pos:[0,0.06,-0.06],rot:[0,Math.PI,0]},0.01,h);let S=e.geo(new En(0.072,0.16,6,14));for(let[T,x]of[[n.armL,-1],[n.armR,1]]){T.position.set(x*0.17,0.06,0.24);let M=e.ell(T,a,[0,-0.04,0],[0.1,0.13,0.11]);Vt(e,M,r),e.mesh(S,a,T,[0,-0.155,0]),Pn(e,T,c,{c:[0,-0.2,0],r:[0.08,0.1,0.08],az:[-1.4,1.4],el:[-0.6,0.5],thick:0.013,bevel:0.011}),lr(e,T,[0,-0.255,0.004],0.078,"#38f2ff","#cfd6e6"),e.ell(T,l,[0,-0.29,0.03],[0.085,0.048,0.11])}for(let[T,x]of[[n.legL,-1],[n.legR,1]]){T.position.set(x*0.17,0,-0.24);let M=e.ell(T,a,[0,0.02,0],[0.12,0.16,0.15]);Vt(e,M,r),e.mesh(e.geo(new En(0.068,0.1,6,14)),a,T,[0,-0.14,0.01]),lr(e,T,[0,-0.17,0.01],0.074,"#ff3fb8","#cfd6e6"),e.ell(T,l,[0,-0.235,0.04],[0.085,0.042,0.11]),Pn(e,T,c,{c:[0,-0.235,0.04],r:[0.085,0.042,0.11],az:[-1.2,1.2],el:[0.2,1.2],thick:0.01,bevel:0.008})}return n.tail.position.set(0,0.2,-0.42),n.tailSegs=is(e,n.tail,[a,a,l],[[0,0.04,-0.1,0.11],[0,0.17,-0.2,0.14],[0,0.33,-0.22,0.12]],(T,x)=>{Vt(e,T.children[0],x===2?{...o,len:0.05,droop:0.2}:{...r,len:0.055,droop:0.25})}),lr(e,n.tailSegs[1],[0,-0.02,0],0.13,"#38f2ff","#cfd6e6",[-0.6,0,0]),{k:e,pal:t,rig:n,skull:{c:p,r:g},muzzle:null,bodyMat:a,bellyMat:l,darkMat:c,torso:m,torsoC:f}}function fM(e){let t={fur:"#fff1d8",furDark:"#e8c99a",belly:"#fff8ea",accent:"#ffcf6a",eye:"#ffd27a",cheek:"#ff9ec4",nose:"#3a2448",iris:{top:"#ffb347",bottom:"#fff4c8",deep:"#7a3d08",ring:"#ffffff"}},n=eo(e,"glimmling",!0),i=e.metal("#e9b44c",0.2),s={color:"#ffeccc",tip:"#fffaf0",len:0.055,ao:0.62,density:260,droop:0.15},r=[0.52,0.5,0.5],o=[0,0.58,0];n.head.position.set(0,0,0);let a=e.keep("glimmOrb",()=>{let y=e.fur("#fff1d8",0.8).clone();return y.emissive.set("#ffb85a"),y.emissiveIntensity=0.24,y.userData.noBloom=!0,y}),l=e.geo(new Ut(1,e.n(30,56),e.n(14,26),0,Math.PI*2,0,Math.PI*0.645)),c=e.mesh(l,a,n.head,o,[0,0,0],r);Vt(e,c,{...s,glow:"#ffb85a",glowK:0.2,maskDir:a0([0,-0.05,1]),maskCut:0.8});let h=e.geo(new Ut(1,e.n(30,56),e.n(10,18),0,Math.PI*2,Math.PI*0.6,Math.PI*0.4));e.mesh(h,e.glass("#ffe2a8",0.38),n.head,o,[0,0,0],[r[0]*0.985,r[1]*0.985,r[2]*0.985]);let d=e.group("flame",n.head,[0,o[1]-r[1]*0.5,0.04]);Ai(e,d,"#ffb347",[[0,-0.1,0,0.075,0],[0.06,-0.09,-0.03,0.045,-0.5],[-0.06,-0.09,0.02,0.04,0.55]]),e.ell(d,e.glow("#ffe7a8",2.2,!1),[0,0,0],[0.06,0.08,0.06]);let u=o[1]+r[1]*Math.cos(Math.PI*0.645),f=r[0]*Math.sin(Math.PI*0.645);e.ell(n.head,e.glow("#ffcf7a",1.3,!1),[0,u,0],[f*0.98,0.012,f*0.98]);let m=e.keep("glimmInner",()=>{let y=e.glow("#ff9f3a",0.55,!1).clone();return y.side=nn,y});e.mesh(h,m,n.head,o,[0,0,0],[r[0]*0.97,r[1]*0.97,r[2]*0.97]),Pn(e,n.head,i,{c:o,r,az:[-Math.PI,Math.PI],el:[-0.5,-0.41],thick:0.026,bevel:0.01,seg:[48,5]});for(let y=0;y<8;y++)Is(e,n.head,Rt(o,r,y/8*Math.PI*2,-0.455,0.028),0.013,i);for(let y=0;y<6;y++){let S=y/6*Math.PI*2+Math.PI/6;Pn(e,n.head,i,{c:o,r,az:[S-0.05,S+0.05],el:[-1.3,-0.5],thick:0.02,bevel:0.007,seg:[5,20]})}e.ell(n.head,i,[0,o[1]-r[1]-0.005,0],[0.13,0.04,0.13]),e.mesh(e.geo(new Nt(0.018,0.03,0.05,12)),i,n.head,[0,o[1]-r[1]-0.05,0]),e.ell(n.head,e.glow("#ffcf6a",2.4,!1),[0,o[1]-r[1]-0.1,0],[0.04,0.05,0.04]);let v=ii(e,"lens",n.head,Rt(o,r,0,-0.06,-0.01));e.mesh(e.geo(new $e(0.19,0.03,e.n(10,16),e.n(36,64))),i,v,[0,0,0.02]),e.ell(v,e.armor("#3a1d0c",0.2,0.4),[0,0,-0.01],[0.18,0.18,0.03]),e.ell(v,e.glow("#ffb347",1.5,!1),[0,-0.01,0],[0.14,0.14,0.035]),Ai(e,v,"#ffe08a",[[0,-0.07,0.03,0.06,0,-1.2],[0.05,-0.06,0.03,0.04,-0.5,-1.2],[-0.05,-0.06,0.03,0.035,0.5,-1.2]]),e.ell(v,e.glow("#fff6dc",2.2,!1),[0,0,0.04],[0.045,0.06,0.02]),e.ell(v,e.glass("#fff4dc",0.25),[0,0,0.03],[0.185,0.185,0.07]),e.ell(v,e.flat("#ffffff",0.85),[-0.07,0.08,0.1],[0.04,0.022,0.005],[0,0,0.6],!0);for(let y=0;y<6;y++){let S=y/6*Math.PI*2+Math.PI/6;Is(e,v,{pos:[Math.cos(S)*0.19,Math.sin(S)*0.19,0.05],rot:[0,0,0]},0.011,i)}for(let y of[-1,1]){let S=Rt(o,r,y*0.3,0.42,-0.01);n.eyes.push(or(e,n.head,S,{size:0.085,iris:t.iris,glow:0.45,lid:"#7a4a1e",lashes:2,aspect:1,cover:0.32,lidSkin:a},y)),Bl(e,n.head,Rt(o,r,y*0.52,0.3,0.008),"#ffb0a0",0.07,0.04,0.5)}let p=Rt(o,r,0,-0.5,0.01);n.head.add(n.mouthClosed,n.mouthOpen),n.mouthClosed.position.set(...p.pos),n.mouthOpen.position.set(...p.pos),n.mouthOpen.rotation.x=p.rot[0],e.ell(n.mouthOpen,e.glow("#fff1c0",2.2,!1),[0,0,0],[0.05,0.03,0.01],[0,0,0],!0);for(let[y,S]of Gl(n))y.position.set(S*0.28,o[1]+0.4,-0.02),y.rotation.set(-0.1,0,-S*0.5),Xn(e,y,[0,0.07,0],[0.08,0.12,0.06],{...s,len:0.04,droop:-0.5}),e.ell(y,e.fur("#ffc9d8"),[0,0.07,0.04],[0.045,0.08,0.025]);let g=e.group("moon",n.head,[0,o[1]+r[1]+0.12,-0.02],[0,0,0.5]);e.mesh(e.geo(new $e(0.1,0.035,10,32,Math.PI*1.25)),e.crystal("#c9b6ff",0.7),g,[0,0,0],[0,0,-0.2]),e.mesh(e.geo(new $e(0.1,0.018,8,32,Math.PI*1.25)),e.glow("#d9c8ff",1.8,!1),g,[0,0,0],[0,0,-0.2]),e.mesh(e.geo(new Nt(0.012,0.02,0.08,8)),i,n.head,[0,o[1]+r[1]+0.02,-0.02]);for(let[y,S]of[[n.armL,-1],[n.armR,1]])y.position.set(S*0.44,0.42,0.14),y.rotation.z=S*0.4,Xn(e,y,[0,-0.16,0],[0.085,0.13,0.085],{...s,len:0.03}),lr(e,y,[0,-0.1,0],0.07,"#ffcf6a","#e9b44c");for(let[y,S]of[[n.legL,-1],[n.legR,1]])y.position.set(S*0.16,0.14,0.05),Xn(e,y,[0,-0.06,0.02],[0.07,0.07,0.08],{...s,len:0.025});n.tail.position.set(0,0.32,-0.42);let _=e.group("tail0",n.tail),b=e.group("tail1",_,[0,-0.05,-0.12]);return e.mesh(e.geo(sa([[0.04,0,0],[0.08,-0.08,-0.12],[0.02,-0.2,-0.22],[0.1,-0.32,-0.3]],0.07,0.02,1.2)),e.feather("#ffcf6a",0.85),_),e.mesh(e.geo(sa([[-0.04,0,0],[-0.09,-0.1,-0.1],[-0.04,-0.24,-0.18],[-0.12,-0.36,-0.22]],0.06,0.015,-1.4)),e.feather("#c9b6ff",0.85),b),n.tailSegs=[_,b],n.hips.position.y=0.22,{k:e,pal:t,rig:n,skull:{c:o,r},muzzle:null,bodyMat:a,bellyMat:a,darkMat:i,torso:r,torsoC:o}}var l0={sternmantel:lM,kraeuterhorn:uM,funkenwolf:dM,glimmling:fM};var h0={gipfling:{fur:"#aaaeb4",furDark:"#474b54",belly:"#f0ede8",accent:"#3fe3dc",eye:"#2ec4b0",cheek:"#f2b0bf",nose:"#2b2730"},waldgeist:{fur:"#747a3a",furDark:"#47521f",belly:"#ae9d5e",accent:"#ffcd4a",eye:"#f0b42a",cheek:"#e59a78",nose:"#2e2414"},sternwind:{fur:"#ece6f8",furDark:"#9e88dc",belly:"#ffffff",accent:"#a57cff",eye:"#7a4ee0",cheek:"#f2b0dc",nose:"#5a3f7a"},scoutdrohne:{fur:"#f1f4fa",furDark:"#9aa3b8",belly:"#f7f9fc",accent:"#45f0ff",eye:"#5ff4ff",cheek:"#45f0ff",nose:"#070b16",shell:"armor",metal:0.15},panzerling:{fur:"#24272e",furDark:"#15171c",belly:"#c9b494",accent:"#7fe6e4",eye:"#27c9d6",cheek:"#8a5e58",nose:"#121214",shell:"armor",metal:0.25},hybridfuchs:{fur:"#cfcde0",furDark:"#6d6f86",belly:"#f1f0f7",accent:"#3ee8ff",eye:"#5ef2ff",cheek:"#ffb08a",nose:"#2a2f3a",shell:"armor",metal:0.3},kristallfuchs:{fur:"#2fbccb",furDark:"#1b8794",belly:"#fbf7f2",accent:"#e0156a",eye:"#a24ad8",cheek:"#ff9fb8",nose:"#2a2030"},mechadrache:{fur:"#dfe4f4",furDark:"#8590c2",belly:"#f4f6fc",accent:"#4fb6ff",eye:"#5ac8ff",cheek:"#4fb6ff",nose:"#1d2236",shell:"armor",metal:0.45}};function pM(e,t){let n=h0[e];if(!n)return null;if(!t)return n;let i={...n};if(t.fur)i.fur=t.fur;if(t.furDark)i.furDark=t.furDark;if(t.belly)i.belly=t.belly;if(t.accent)i.accent=t.accent;let s=t.hue??0;if(s)i.fur=Dl(i.fur,s),i.furDark=Dl(i.furDark,s),i.accent=Dl(i.accent,s);return i}var mM=(e)=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},_u={maskDir:mM([0,-0.25,1]),maskCut:0.42};function hr(e,t,n,i={}){return oa(e,t,n,gM[e],{toes:!0,...i})}var gM={gipfling:{torso:[0.46,0.42,0.42],head:[0.63,0.53,0.55],armR:0.11,legR:0.14,muzzle:[0.19,0.125,0.12],eyeAz:0.37,eyeEl:0.06,eyeSize:0.135},waldgeist:{torso:[0.52,0.45,0.48],head:[0.56,0.5,0.5],armR:0.12,legR:0.15,muzzle:[0.21,0.13,0.12],eyeAz:0.38,eyeEl:0.05,eyeSize:0.13},sternwind:{torso:[0.32,0.36,0.32],head:[0.53,0.48,0.5],armR:0.075,legR:0.1,muzzle:[0.18,0.115,0.17],eyeAz:0.38,eyeEl:0.07,eyeSize:0.14},panzerling:{torso:[0.44,0.38,0.41],head:[0.6,0.55,0.55],armR:0.11,legR:0.14,muzzle:null,eyeAz:0.34,eyeEl:0.02,eyeSize:0.15},hybridfuchs:{torso:[0.4,0.37,0.38],head:[0.59,0.52,0.52],armR:0.1,legR:0.13,muzzle:[0.19,0.13,0.14],eyeAz:0.37,eyeEl:0.05,eyeSize:0.14},kristallfuchs:{torso:[0.38,0.36,0.36],head:[0.59,0.52,0.52],armR:0.095,legR:0.12,muzzle:[0.19,0.13,0.15],eyeAz:0.37,eyeEl:0.05,eyeSize:0.15},mechadrache:{torso:[0.42,0.4,0.4],head:[0.52,0.47,0.5],armR:0.1,legR:0.14,muzzle:[0.26,0.17,0.27],eyeAz:0.4,eyeEl:0.12,eyeSize:0.12}};function xM(e,t,n,i,s,r){let o=ii(e,"flower",t,n);for(let a=0;a<5;a++){let l=a/5*Math.PI*2;e.ell(o,s,[Math.cos(l)*i*0.9,Math.sin(l)*i*0.9,0.004],[i*0.75,i*0.45,i*0.18],[0,0,l],!0)}e.ell(o,r,[0,0,i*0.18],[i*0.42,i*0.42,i*0.25],[0,0,0],!0)}function kl(e,t,n){t.forEach((i,s)=>{let r=i.children.find((o)=>o.isMesh);if(r)Vt(e,r,n(s))})}function vM(e,t){let n=hr("gipfling",e,t,{mouth:"smile",eye:{aspect:0.9,lashes:2}}),{rig:i}=n,s={color:t.fur,tip:yn(t.fur,1.4),len:0.042,ao:0.62,density:260},r={color:t.belly,tip:"#ffffff",len:0.036,ao:0.78,density:300},o=t.accent;if(Vt(e,n.skullMesh,{...s,..._u}),Vt(e,n.torsoMesh,{...s,len:0.05,droop:0.4}),n.bellyMesh)Vt(e,n.bellyMesh,{...r,len:0.04,droop:0.3});for(let x of[-1,1])Xn(e,i.head,[x*0.42,0.28,0.24],[0.17,0.12,0.13],{...r,len:0.05,droop:0.45},[0,x*0.45,x*0.55]);let a=e.fur(yn(t.belly,0.86)),l=e.geo(new Qt(1,1,20,1)),c=e.geo(new Qt(0.04,0.16,6));for(let[x,M]of[[i.earL,-1],[i.earR,1]])i.head.add(x),x.position.set(M*0.36,0.84,-0.06),x.rotation.set(-0.12,0,-M*0.5),e.mesh(l,n.darkMat,x,[0,0.25,-0.022],[0,0,0],[0.255,0.55,0.07]),e.mesh(l,n.bodyMat,x,[0,0.24,0],[0,0,0],[0.235,0.5,0.085]),zl(e,x,l,[0,0.24,-0.006],[0.235,0.5,0.08],{...s,len:0.026,maskDir:[0,0,1],maskCut:0.5}),e.mesh(l,a,x,[0,0.22,0.036],[0,0,0],[0.15,0.4,0.04]),e.mesh(c,n.darkMat,x,[0,0.54,-0.01],[0,0,0]),Ai(e,x,o,[[M*0.155,0.16,0,0.085,-M*1],[M*0.1,0.29,0,0.1,-M*0.7],[M*0.045,0.41,0,0.075,-M*0.4]]);let h=Rt(n.skull.c,n.skull.r,0,0.66,-0.03);Ai(e,i.head,o,[[h.pos[0],h.pos[1],h.pos[2],0.15,0,0.25],[h.pos[0]-0.09,h.pos[1]-0.02,h.pos[2]-0.01,0.1,0.45,0.2],[h.pos[0]+0.09,h.pos[1]-0.02,h.pos[2]-0.01,0.1,-0.45,0.2],[h.pos[0]-0.16,h.pos[1]-0.07,h.pos[2]-0.04,0.06,0.8,0.1],[h.pos[0]+0.16,h.pos[1]-0.07,h.pos[2]-0.04,0.06,-0.8,0.1]]);let d=e.fur("#2a84ad",0.6),u=e.fur("#79d2e6",0.6),f=e.armor("#e6b450",0.75,0.28),m=n.torsoC[1]+n.torso[1]*0.7;e.mesh(e.geo(new $e(0.34,0.12,14,36)),d,i.body,[0,m,0.02],[Math.PI/2+0.08,0,0],[1.08,1,1]);let v=e.geo(new $e(0.34+Math.sqrt(0.011899999999999999)-0.004,0.016,6,36));for(let x of[-0.05,0.05])e.mesh(v,u,i.body,[0,m+x,0.02],[Math.PI/2+0.08,0,0],[1.08,1,1]);e.mesh(e.geo(new Qt(0.05,0.06,3)),f,i.body,[-0.08,m-0.01,0.49],[0,0,0],[1,1,0.3]),e.ell(i.body,d,[0.2,m-0.1,0.36],[0.1,0.09,0.07]),e.ell(i.body,d,[0.25,m-0.3,0.35],[0.085,0.19,0.045],[0.15,0,0.25]),e.ell(i.body,u,[0.27,m-0.36,0.385],[0.07,0.018,0.012],[0.15,0,0.25],!0);let p=e.leather("#7a5232"),g=e.group("strap",i.body,[0,n.torsoC[1]+0.02,0],[0,0,0.6]);e.mesh(e.geo(new $e(1,0.06,6,40)),p,g,[0,0,0],[0,Math.PI/2,0],[n.torso[2]*1.17,n.torso[1]*1.12,0.5]);let _=e.glow(o,1.6,!1),b=[0,n.torsoC[1]-0.06,n.torso[2]+0.05];e.mesh(e.geo(new $e(0.07,0.012,8,28)),_,i.body,b,[0.12,0,0]),e.mesh(e.geo(new $e(0.032,0.01,8,20)),_,i.body,[b[0],b[1],b[2]+0.004],[0.12,0,0]),e.mesh(e.geo(new $e(0.115,0.009,4,4)),_,i.body,[b[0],b[1],b[2]-0.004],[0.12,0,Math.PI/4],[1,1.25,1]);let y=e.armor("#3b414c",0.1,0.62),S=e.glow(o,1.3,!1),T=e.geo(new Yr(1,0));return e.mesh(T,y,i.armL,[-0.02,-0.12,0.07],[0.3,0.2,0],[0.07,0.06,0.05]),e.mesh(e.geo(new $e(0.05,0.007,4,12)),S,i.armL,[-0.02,-0.12,0.115],[0,0,0.4]),e.mesh(T,y,i.legR,[0.05,-0.08,0.11],[0.1,0.5,0],[0.075,0.065,0.05]),e.mesh(e.geo(new $e(0.055,0.007,4,12)),S,i.legR,[0.05,-0.08,0.155],[0,0,1.1]),e.ell(i.body,p,[0,n.torsoC[1]+0.02,-0.42],[0.31,0.31,0.17]),e.ell(i.body,e.leather("#5e3f26"),[0,n.torsoC[1]+0.14,-0.52],[0.25,0.13,0.08]),e.mesh(e.geo(new $e(0.045,0.01,6,18)),f,i.body,[0,n.torsoC[1]+0.06,-0.6],[0,Math.PI,0]),e.mesh(e.geo(new Nt(0.12,0.12,0.66,18)),e.leather("#b38b5b"),i.body,[0,n.torsoC[1]+0.35,-0.46],[0,0,Math.PI/2]),Ai(e,i.body,o,[[-0.26,n.torsoC[1]+0.42,-0.42,0.09,0.4],[-0.16,n.torsoC[1]+0.47,-0.48,0.07,-0.2]]),i.tail.position.set(0,0.06,-0.38),i.tailSegs=is(e,i.tail,[n.bodyMat,n.bodyMat,n.bellyMat],[[0,0.02,-0.14,0.2],[0,0.24,-0.33,0.22],[0,0.5,-0.38,0.17]]),kl(e,i.tailSegs,(x)=>x===2?{...r,len:0.06,droop:0.3}:{...s,len:0.065,droop:0.3}),Ai(e,i.tailSegs[1],o,[[0.12,0.05,-0.05,0.09,-0.9],[-0.1,0.12,-0.08,0.07,0.8]]),n}function yM(e,t){let n=hr("waldgeist",e,t,{mouth:"smile",eye:{cover:0.16,iris:{top:"#b06d0c",bottom:"#ffd96a",deep:"#2e1c06",ring:"#ffe08a"}}}),{rig:i}=n,s={color:t.fur,tip:yn(t.fur,1.45),len:0.045,ao:0.55,density:220,droop:0.2},r=yn(t.fur,1.22),o=e.fur(r,0.5),a=e.fur(t.furDark,0.5),l=e.matte(yn(t.furDark,0.8)),c=e.glow(t.accent,1.2,!1);if(Vt(e,n.skullMesh,{...s,..._u}),Vt(e,n.torsoMesh,{...s,len:0.05}),n.bellyMesh)Vt(e,n.bellyMesh,{color:t.belly,tip:yn(t.belly,1.25),len:0.025,ao:0.75});let h=e.geo(ar(0.66,0.36,0.022)),d=e.geo(ar(0.44,0.24,0.02)),u=e.geo(new En(0.008,0.52,3,6));for(let[y,S]of[[i.earL,-1],[i.earR,1]])i.head.add(y),y.position.set(S*0.4,0.58,-0.02),y.rotation.set(0.1,0,-S*(Math.PI/2-0.28)),e.mesh(h,o,y,[0,0,0]),e.mesh(u,l,y,[0,0.3,0.026]),e.mesh(d,a,y,[S*0.05,0.02,-0.04],[0,0,S*0.45]);let f=e.group("sprout",i.head,[0.02,0.92,0.02],[0.1,0,0.12]);e.mesh(e.geo(new Nt(0.018,0.026,0.28,8)),e.matte(yn(t.furDark,1.1)),f,[0,0.13,0]);let m=e.geo(ar(0.2,0.11,0.012));e.mesh(m,o,f,[0,0.16,0],[0,0,1.1]),e.mesh(m,o,f,[0,0.12,0],[0,0,-1],[0.85,0.85,1]),e.ell(f,c,[0,0.3,0],[0.06,0.07,0.06],[0,0,0],!0);let v=e.fur("#f6ead0",0.4),p=e.glow(t.accent,0.8,!1);for(let[y,S,T]of[[-0.55,0.62,0.055],[0.62,0.55,0.045],[0.2,0.8,0.04]])xM(e,i.head,Rt(n.skull.c,n.skull.r,y,S,0.03),T,v,p);let g=[0,n.torsoC[1]-0.02,n.torso[2]+0.045];e.mesh(e.geo(new $e(0.1,0.017,8,30)),c,i.body,g,[-0.15,0,0]),e.mesh(e.geo(new vn(0.045,0)),c,i.body,[g[0],g[1],g[2]+0.01],[0,0,0],[0.8,1.3,0.4]),e.mesh(e.geo(new $e(0.47,0.026,8,36)),e.matte("#6b4a2c"),i.body,[0,n.torsoC[1]-0.2,0],[Math.PI/2-0.1,0,0],[1.06,1,1]);let _=e.ell(i.body,n.darkMat,[0,n.torsoC[1]+0.26,-0.06],[0.44,0.17,0.4]);Vt(e,_,{...s,color:t.furDark,tip:yn(t.fur,1.2),len:0.05,maskDir:[0,0,1],maskCut:0.6}),i.tail.position.set(0,0.1,-0.44);let b=e.group("tail0",i.tail,[0,0,0]);return e.mesh(e.geo(ar(0.4,0.2,0.02)),o,b,[0,0.02,-0.04],[-0.75,0,0]),i.tailSegs=[b],n}function _M(e,t){let n=hr("sternwind",e,t,{mouth:"w",nose:"triangle",eye:{aspect:0.82,lashes:3}}),{rig:i}=n,s={color:t.fur,tip:"#ffffff",len:0.03,ao:0.8,density:300},r=e.fur(yn(t.accent,1.25)),o=e.crystal(t.accent,0.62),a=e.feather(yn(t.accent,0.8),0.55);Vt(e,n.skullMesh,{...s,..._u});let l=e.glow(yn(t.accent,1.3),1.3);for(let[d,u]of[[i.earL,-1],[i.earR,1]])i.head.add(d),d.position.set(u*0.27,0.8,-0.05),d.rotation.set(-0.12,0,-u*0.28),cr(e,d,0.62,0.16,n.bodyMat,r),e.ell(d,l,[0,0.58,0],[0.025,0.05,0.025],[0,0,0],!0);let c=Rt(n.skull.c,n.skull.r,0,0.5,0.01);e.mesh(e.geo(new vn(0.05,0)),l,i.head,c.pos,[c.rot[0],0,Math.PI/4]),Xn(e,i.body,[0,n.torsoC[1]+0.2,0.18],[0.22,0.15,0.15],{...s,len:0.05,droop:0.6});let h=e.glow(yn(t.accent,1.2),1,!1);for(let d of[-1,1]){let u=e.group(`wing${d}`,i.body,[d*0.15,n.torsoC[1]+0.2,-0.24],[0,0,0]);e.mesh(e.geo(new En(0.022,0.4,4,8)),h,u,[d*0.2,0.22,0],[0,0,-d*0.75]),[0.25,0.6,0.95,1.3,1.65].forEach((f,m)=>{let v=0.72-m*0.08;e.mesh(e.sphere,m%2?a:o,u,[d*Math.sin(f)*v*0.95,Math.cos(f)*v*0.95+0.05,-0.04-m*0.02],[0,0,-d*f],[0.09,v,0.018])}),i.wings.push(u)}i.tail.position.set(0,0.08,-0.3),i.tailSegs=is(e,i.tail,[n.bodyMat,n.bodyMat,n.bodyMat,o,a],[[0,0,-0.1,0.12],[0,0.08,-0.24,0.13],[0,0.22,-0.36,0.12],[0,0.4,-0.42,0.1],[0,0.58,-0.4,0.08]]),kl(e,i.tailSegs.slice(0,3),()=>({...s,len:0.04,droop:0.3}));for(let d of[-1,1])e.mesh(e.geo(sa([[0,0,0],[d*0.12,0.08,-0.16],[d*0.2,0.28,-0.3],[d*0.1,0.5,-0.36]],0.1,0.02,d*0.8,e.n(24,40))),a,i.tailSegs[2]);return e.ell(i.tailSegs[4],l,[0,0.11,0],[0.045,0.075,0.045],[0,0,0],!0),n}function bM(e,t){let n=hr("panzerling",e,t,{eye:{brow:{tilt:0.28,color:"#0d0e11"}}}),{rig:i}=n,s=e.glow(t.accent,0.75,!1),r=e.fur("#3d3a37",0.4),o=e.armor(t.belly,0.2,0.4),a=Rt(n.skull.c,n.skull.r,0,-0.18,-0.16),l=[0.42,0.33,0.24];e.ell(i.head,r,a.pos,l,[a.rot[0],0,0]),i.eyes.forEach((v,p)=>{let g=p===0?-1:1,_=Rt(a.pos,l,g*0.48,0.32,-0.02);v.group.position.set(..._.pos),v.group.rotation.set(_.rot[0],_.rot[1],0)});let c=Rt(a.pos,l,0,-0.42,0);i.mouthClosed.position.set(...c.pos),i.mouthOpen.position.set(...c.pos),e.ell(i.head,r,Rt(a.pos,l,0,-0.1,-0.02).pos,[0.12,0.08,0.08],[0,0,0],!0),e.ell(i.head,e.gloss(t.nose),Rt(a.pos,l,0,-0.1,0.065).pos,[0.04,0.025,0.025],[0,0,0],!0);let h=e.geo(new $e(1,0.012,6,40,Math.PI));e.mesh(h,s,i.head,n.skull.c,[0,Math.PI/2,0],[n.skull.r[2]*1.01,n.skull.r[1]*1.01,1]);let d=e.geo(new $e(1,0.012,6,40,Math.PI*1.1));for(let v of[0.2,0.36]){let p=Math.sqrt(1-(v/n.skull.r[1])**2)*1.008;e.mesh(d,s,i.head,[0,n.skull.c[1]+v,0],[-Math.PI/2,0,-0.05*Math.PI],[n.skull.r[0]*p,n.skull.r[2]*p,1])}for(let[v,p]of[[i.earL,-1],[i.earR,1]])i.head.add(v),v.position.set(p*0.55,n.skull.c[1]-0.02,-0.02),e.mesh(e.geo(new Nt(0.15,0.17,0.12,24)),n.darkMat,v,[0,0,0],[0,0,Math.PI/2]),e.mesh(e.geo(new $e(0.1,0.016,8,24)),s,v,[p*0.065,0,0],[0,Math.PI/2,0]);for(let v=0;v<3;v++)e.ell(i.body,o,[0,n.torsoC[1]+0.12-v*0.14,n.torso[2]*0.72],[0.28-v*0.03,0.078,0.13],[0.1,0,0],!0);for(let v of[i.armL,i.armR])e.ell(v,n.darkMat,[0,-0.02,0],[0.15,0.12,0.15]);i.tail.position.set(0,0.1,-0.38);let u=e.group("tail0",i.tail),f=e.geo(new Qt(0.12,0.46,4)),m=e.armor("#4d525e",0.2,0.45);return[-0.7,-0.35,0,0.35,0.7].forEach((v,p)=>{e.mesh(f,p%2?m:n.darkMat,u,[Math.sin(v)*0.17,0.2,-0.12],[-0.7,0,-v],[1,1,0.45])}),i.tailSegs=[u],n}function MM(e,t){let n=hr("hybridfuchs",e,t,{eye:{glow:0.55,iris:{top:"#0b9fb4",bottom:"#4ff0ff",deep:"#03323a",ring:"#9ffaff"},lashes:0}}),{rig:i}=n,s=e.fur("#ff8436"),r=e.armor("#ff8a3a",0.35,0.3),o=e.fur("#fbfbfd"),a=e.glow(t.accent,1.5,!1);for(let[h,d]of[[i.earL,-1],[i.earR,1]])i.head.add(h),h.position.set(d*0.3,0.78,-0.04),h.rotation.set(-0.08,0,-d*0.28),cr(e,h,0.52,0.2,s,o),e.mesh(e.geo(new Nt(0.15,0.17,0.08,18)),n.darkMat,h,[0,0.02,0],[0,0,0],[1,1,0.6]);let l=e.geo(new $e(0.17,0.03,10,28)),c=e.geo(new $e(0.145,0.012,6,28));i.eyes.forEach((h)=>{e.mesh(l,r,h.group,[0,0,0.02]),e.mesh(c,a,h.group,[0,0,0.035])}),e.mesh(e.geo(new $e(1,0.035,8,40)),n.darkMat,i.head,[0,n.skull.c[1]+0.07,0],[Math.PI/2-0.1,0,0],[n.skull.r[0],n.skull.r[2],1]),e.mesh(e.geo(new $e(0.13,0.026,8,20,Math.PI)),e.metal("#9aa0b8",0.3),i.head,[0,n.skull.c[1]+n.skull.r[1]-0.02,-0.04],[0,0,0]);for(let h of[-1,1]){e.ell(i.head,o,[h*0.42,0.18,0.2],[0.13,0.09,0.1],[0,0,h*0.5]);let d=Rt(n.skull.c,n.skull.r,h*0.2,0.42,0.005);e.ell(i.head,r,d.pos,[0.07,0.014,0.01],[d.rot[0],d.rot[1],h*0.5],!0)}e.mesh(e.geo(new Nt(0.1,0.1,0.04,24)),a,i.body,[0,n.torsoC[1]+0.05,n.torso[2]*0.98],[Math.PI/2,0,0]),e.mesh(e.geo(new $e(0.12,0.024,8,28)),r,i.body,[0,n.torsoC[1]+0.05,n.torso[2]*0.98]);for(let h of[i.armL,i.armR])e.ell(h,r,[0,-0.3,0.01],[0.11,0.1,0.11],[0,0,0],!0),e.ell(h,r,[0,-0.01,0],[0.12,0.09,0.12],[0,0,0],!0);for(let h of[i.legL,i.legR])e.ell(h,r,[0,-0.1,0.1],[0.085,0.075,0.05],[0,0,0],!0);return i.tail.position.set(0,0.08,-0.34),i.tailSegs=is(e,i.tail,[s,s,o],[[0,0,-0.14,0.17],[0,0.18,-0.3,0.21],[0,0.42,-0.36,0.16]]),kl(e,i.tailSegs,(h)=>h===2?{color:"#fbfbfd",tip:"#ffffff",len:0.05,ao:0.8,droop:0.3}:{color:"#ff8436",tip:"#ffc59a",len:0.055,ao:0.6,droop:0.3}),n}function SM(e,t){let n=hr("kristallfuchs",e,t,{eye:{brow:{tilt:-0.15,color:"#d99a3a"},lashes:2},nose:"triangle",pawMat:e.fur(t.belly),footMat:e.fur(t.belly)}),{rig:i}=n,s=e.fur("#ff9a48"),r=e.armor("#f2bf4c",0.85,0.25),o=e.glow(t.accent,0.7),a=e.glow("#8a5cff",0.8);for(let[u,f]of[[i.earL,-1],[i.earR,1]])i.head.add(u),u.position.set(f*0.31,0.76,-0.04),u.rotation.set(-0.08,0,-f*0.34),cr(e,u,0.52,0.21,n.bodyMat,s),e.ell(u,n.bellyMat,[0,0.1,0.06],[0.08,0.1,0.03],[0,0,0],!0);let l=Rt(n.skull.c,n.skull.r,0,0.46,0),c=ii(e,"gem",i.head,l);e.ell(c,r,[0,0,0],[0.07,0.085,0.03],[0,0,0],!0),e.mesh(e.geo(new vn(0.06,0)),o,c,[0,0,0.03],[0,0,0],[0.9,1.2,0.6]);for(let u of[-1,1])e.ell(i.head,n.bellyMat,[u*0.4,0.2,0.22],[0.14,0.1,0.11],[0,0,u*0.5]);let h=n.torsoC[1]+n.torso[1]*0.64;e.mesh(e.geo(new $e(0.3,0.035,10,36)),r,i.body,[0,h,0.02],[Math.PI/2+0.15,0,0]),e.ell(i.body,r,[0,n.torsoC[1]+0.02,n.torso[2]*0.62],[0.24,0.22,0.16],[0.1,0,0]),e.mesh(e.geo(new vn(0.06,0)),o,i.body,[0,n.torsoC[1]+0.04,n.torso[2]*0.62+0.16],[0,0,0],[1,1.3,0.6]);for(let u of[-1,1])e.mesh(e.geo(new vn(0.04,0)),a,i.body,[u*0.14,n.torsoC[1]+0.08,n.torso[2]*0.62+0.12],[0,0,0]);let d=e.fur("#e5483c");return i.tail.position.set(0,0.08,-0.32),i.tailSegs=is(e,i.tail,[d,d,n.bellyMat],[[0,0,-0.12,0.15],[0,0.17,-0.27,0.18],[0,0.4,-0.33,0.14]]),kl(e,i.tailSegs,(u)=>u===2?{color:t.belly,tip:"#ffffff",len:0.045,ao:0.8,droop:0.3}:{color:"#e5483c",tip:"#ff8f7a",len:0.045,ao:0.6,droop:0.3}),n}function wM(e,t){let n=hr("mechadrache",e,t,{eye:{glow:0.55,aspect:1.1,lashes:0,iris:{top:"#1c5fd0",bottom:"#5cc8ff",deep:"#071a40",ring:"#a8e4ff"}}}),{rig:i}=n,s=e.glow("#ffc23a",1.3,!0),r=e.feather("#ffb92e",0.85),o=e.glow(t.accent,1.5,!1),a=e.geo(new Qt(0.07,0.44,12));for(let c of[-1,1])e.mesh(a,s,i.head,[c*0.24,0.9,-0.12],[-1,0,-c*0.35]),e.mesh(a,s,i.head,[c*0.36,0.74,-0.18],[-1.25,0,-c*0.7],[0.7,0.7,0.7]);let l=e.geo(new Qt(0.05,0.16,4));[0,1,2].forEach((c)=>e.mesh(l,n.darkMat,i.head,[0,0.92-c*0.14,-0.3-c*0.12],[-0.6-c*0.3,0,0]));for(let c of[-1,1]){let h=Rt(n.skull.c,n.skull.r,c*0.4,0.4,0);e.ell(i.head,n.darkMat,h.pos,[0.12,0.024,0.045],[h.rot[0],h.rot[1],c*0.25],!0)}if(n.muzzle)for(let c of[-1,1])e.ell(i.head,o,[c*0.06,n.muzzle.c[1]+0.06,n.muzzle.c[2]+n.muzzle.r[2]*0.92],[0.02,0.012,0.01],[0,0,0],!0);for(let[c,h]of[[i.earL,-1],[i.earR,1]])i.head.add(c),c.position.set(h*0.46,0.55,-0.08),c.rotation.set(0,0,-h*0.9),e.mesh(e.geo(new Qt(0.08,0.32,4)),s,c,[0,0.12,0],[0,0,0],[1,1,0.4]);e.mesh(e.geo(new vn(0.09,0)),o,i.body,[0,n.torsoC[1]+0.12,n.torso[2]*0.98]);for(let c=0;c<2;c++)e.ell(i.body,n.darkMat,[0,n.torsoC[1]-0.08-c*0.13,n.torso[2]*0.82],[0.24,0.06,0.1],[0.15,0,0],!0);for(let c of[i.armL,i.armR])e.ell(c,n.darkMat,[0,-0.03,0],[0.14,0.1,0.14],[0,0,0],!0);for(let c of[-1,1]){let h=e.group(`wing${c}`,i.body,[c*0.22,n.torsoC[1]+0.25,-0.3]);e.mesh(e.geo(new En(0.04,0.32,4,8)),n.bodyMat,h,[c*0.16,0.18,0],[0,0,-c*0.85]),[0.35,0.75,1.15,1.55].forEach((d,u)=>{let f=0.62-u*0.08;e.ell(h,u%2?r:s,[c*(0.24+Math.sin(d)*f*0.6),0.36+Math.cos(d)*f*0.5,-0.02-u*0.01],[0.11,f,0.016],[0,0,-c*d])}),i.wings.push(h)}return i.tail.position.set(0,0.08,-0.36),i.tailSegs=is(e,i.tail,[n.bodyMat,n.darkMat,n.bodyMat,r],[[0,-0.04,-0.12,0.13],[0,-0.06,-0.3,0.11],[0,0,-0.46,0.09],[0,0.1,-0.6,0.07]]),e.mesh(e.geo(new Qt(0.08,0.24,4)),s,i.tailSegs[3],[0,0.07,-0.1],[-1.1,0,0]),n}function TM(e,t){let n=eo(e,"scoutdrohne",!0),i=e.armor(t.fur,t.metal??0.15,0.16),s=e.armor(t.furDark,0.55,0.25),r=e.armor("#c7c2ef",0.45,0.25),o=e.glow(t.accent,1.6,!1),a=[0.56,0.54,0.54],l=[0,0.56,0];n.head.position.set(0,0,0),e.ell(n.head,i,l,a),e.mesh(e.geo(new $e(0.555,0.014,8,48)),s,n.head,[0,0.44,0],[Math.PI/2,0,0]);let c=Rt(l,a,0,0.04,-0.17),h=[0.47,0.4,0.26];e.ell(n.head,e.gloss("#070a14"),c.pos,h);let d=Rt(c.pos,h,0,0.16,-0.04);n.eyes.push(or(e,n.head,d,{size:0.17,aspect:1.3,iris:{top:"#0b9fb4",bottom:"#4ff0ff",deep:"#03323a",ring:"#9ffaff"},glow:0.55,lid:t.accent,lashes:0},1));let u=ii(e,"halo",n.head,Rt(c.pos,h,0,0.16,0.004));e.mesh(e.geo(new rn(0.62,0.48)),e.spot(t.accent,0.45,!0),u,[0,0,0]);let f=Rt(c.pos,h,0,-0.42,0.005);n.head.add(n.mouthClosed,n.mouthOpen),n.mouthClosed.position.set(...f.pos),n.mouthOpen.position.set(...f.pos),n.mouthClosed.rotation.x=f.rot[0],n.mouthOpen.rotation.x=f.rot[0],e.mesh(e.geo(new $e(0.11,0.016,8,20,Math.PI)),o,n.mouthClosed,[0,0.04,0],[0,0,Math.PI]),e.ell(n.mouthOpen,o,[0,0,0],[0.08,0.045,0.01],[0,0,0],!0);for(let[p,g]of[[n.earL,-1],[n.earR,1]])n.head.add(p),p.position.set(g*0.54,0.6,-0.02),e.mesh(e.geo(new Nt(0.16,0.16,0.1,28)),i,p,[0,0,0],[0,0,Math.PI/2]),e.mesh(e.geo(new $e(0.105,0.02,8,24)),o,p,[g*0.055,0,0],[0,Math.PI/2,0]);let m=e.group("rotor",n.head,[0,1.08,0]);e.mesh(e.geo(new Nt(0.13,0.15,0.03,24)),s,m,[0,0,0]),e.ell(m,o,[0,0.025,0],[0.035,0.02,0.035],[0,0,0],!0),n.rotors.push(m);let v=e.group("ringRotor",n.head,[0,0.12,0]);e.mesh(e.geo(new $e(0.26,0.025,8,40)),o,v,[0,0,0],[Math.PI/2,0,0]);for(let p of[0,Math.PI/2,Math.PI,3*Math.PI/2])e.ell(v,s,[Math.cos(p)*0.26,0,Math.sin(p)*0.26],[0.045,0.028,0.045],[0,0,0],!0);n.rotors.push(v);for(let[p,g]of[[n.armL,-1],[n.armR,1]]){p.position.set(g*0.42,0.34,0.12),p.rotation.z=g*0.35,e.mesh(e.geo(new En(0.04,0.2,4,10)),s,p,[0,-0.12,0]),e.ell(p,i,[0,-0.26,0],[0.08,0.07,0.08],[0,0,0],!0);let _=e.geo(new Qt(0.032,0.13,8));e.mesh(_,r,p,[0.035,-0.33,0.02],[0,0,0.35+Math.PI]),e.mesh(_,r,p,[-0.035,-0.33,0.02],[0,0,-0.35+Math.PI])}for(let[p,g]of[[n.legL,-1],[n.legR,1]])p.position.set(g*0.2,0.12,-0.04),e.mesh(e.geo(new En(0.035,0.16,4,10)),s,p,[0,-0.1,0]),e.ell(p,i,[0,-0.02,0],[0.06,0.05,0.06],[0,0,0],!0),e.ell(p,r,[0,-0.22,0.02],[0.055,0.035,0.065],[0,0,0],!0);return e.ell(n.head,o,[0,0.03,0],[0.12,0.03,0.12],[0,0,0],!0),n.hips.position.y=0.22,{k:e,pal:t,rig:n,skull:{c:l,r:a},muzzle:null,bodyMat:i,bellyMat:i,darkMat:s,torso:a,torsoC:l}}function AM(e,t){let{k:n,rig:i}=e,s=i.hovering?-0.28:-0.3;i.armR.add(i.prop),i.prop.position.set(0,s,0.04);let r=n.armor("#3fd6cf",0.1,0.2);n.mesh(n.geo(new Nt(0.085,0.085,0.28,20)),r,i.prop,[0,0.08,0]),n.mesh(n.geo(new Nt(0.045,0.065,0.08,16)),n.matte("#f4f7fb",0.4),i.prop,[0,0.26,0]),n.mesh(n.geo(new $e(0.087,0.016,6,22)),n.matte("#0f2a3a",0.5),i.prop,[0,0.05,0],[Math.PI/2,0,0]),i.prop.visible=!1;let o=ra(t),a=n.glow("#38d9d0",0.55),l=o.y;i.wall.position.set(0,0,o.z+0.22),n.mesh(n.geo(new Yr(1,0)),a,i.wall,[0,l*0.5,0],[0.3,0.4,0.1],[0.3,l*0.56,0.28]),n.mesh(n.geo(new vn(1,0)),n.glow("#7d6bff",0.7),i.wall,[0.28,0.14,0.08],[0.2,0.5,0.3],[0.08,0.2,0.08]),n.mesh(n.geo(new vn(1,0)),a,i.wall,[-0.26,0.1,-0.04],[0.1,0.2,-0.4],[0.06,0.15,0.06]),i.wall.visible=!1,i.spark.position.set(0.05,0.08,0.78);let c=n.glow("#ffe27a",1.6);n.mesh(n.geo(new vn(0.11,0)),c,i.spark,[0,0.04,0],[0,0,0],[1,1.5,1]),n.mesh(n.geo(new vn(0.045,0)),c,i.spark,[0.16,0.12,-0.04]),n.mesh(n.geo(new vn(0.035,0)),c,i.spark,[-0.14,0.18,0.03]),i.spark.visible=!1,i.zzz.position.set(0.35,t.height-0.1,0.1);let h=n.glow("#bfe4ff",0.9,!1),d=n.geo(new En(0.018,0.1,3,8));[0,1].forEach((u)=>{let f=n.group(`z${u}`,i.zzz,[u*0.16,u*0.2,0]),m=1-u*0.3;n.mesh(d,h,f,[0,0.07*m,0],[0,0,Math.PI/2],[m,m,m]),n.mesh(d,h,f,[0,0,0],[0,0,Math.PI/4],[m,m*1.3,m]),n.mesh(d,h,f,[0,-0.07*m,0],[0,0,Math.PI/2],[m,m,m])}),i.zzz.visible=!1}var c0={gipfling:vM,waldgeist:yM,sternwind:_M,scoutdrohne:TM,panzerling:bM,hybridfuchs:MM,kristallfuchs:SM,mechadrache:wM};function EM(e,t,n){if(e in c0){let i=e;return c0[i](t,pM(i,n)??h0[i])}return l0[e](t)}function u0(e,t={}){let n=new fu(t.quality??"live"),i=EM(e,n,t.coat),s=i.rig;s.root.updateMatrixWorld(!0);let r=s.armR.getWorldPosition(s.armR.position.clone()),o=s.hovering?0.34:0.37,a=new An().setFromObject(s.root).max.y,l={hipY:s.hips.position.y,shoulderY:r.y,shoulderZ:r.z,armLen:o,height:Math.min(2.4,a)};AM(i,l),e0(n,s.root),s.root.userData.coat=ns(t.coat);let c={...s,dims:l};for(let d of RM(c))d.userData.rest={p:d.position.clone(),r:d.rotation.clone(),s:d.scale.clone()};let h=0;return s.root.traverse((d)=>{if(d.isMesh)h++}),{rig:c,meshCount:h,triangles:t0(s.root),dispose(){for(let d of n.geos)d.dispose();for(let d of n.mats)d.dispose()}}}function RM(e){return[e.root,e.lean,e.hips,e.body,e.head,e.earL,e.earR,e.armL,e.armR,e.legL,e.legR,e.tail,e.prop,e.wall,e.spark,e.zzz,...e.tailSegs,...e.wings,...e.rotors,...e.eyes.flatMap((t)=>[t.open,t.look]),e.mouthOpen]}function Hl(e="#45e1da",t="#a99bff"){let n=new ci,i=new Ut(10,48,24),s=i.getAttribute("position"),r=[],o=new Y("#060a1c"),a=new Y("#262c5c").lerp(new Y(t),0.12),l=new Y("#0b0d18"),c=new Y;for(let m=0;m<s.count;m++){let v=s.getY(m)/10;if(v>=0)c.copy(a).lerp(o,Math.pow(v,0.6));else c.copy(a).lerp(l,Math.min(1,-v*3));r.push(c.r,c.g,c.b)}i.setAttribute("color",new Ge(r,3));let h=new zt({vertexColors:!0,side:nn});n.add(new Qe(i,h));let d=new rn(1,1),u=[h],f=(m,v,p,g,_,b,y)=>{let S=new zt({color:new Y(m).multiplyScalar(v)});u.push(S);let T=new Qe(d,S);T.position.set(p,g,_),T.scale.set(b,y,1),T.lookAt(0,0,0),n.add(T)};return f("#f2ecff",6,-3.5,6.5,4.5,3.2,2.4),f(e,5,-6.5,1.8,-4.5,2.2,5),f(t,4.5,6.5,2.2,-4,2.2,5),f("#ffc887",2.2,-2.5,-0.6,5.5,3,1.4),{scene:n,dispose(){i.dispose(),d.dispose();for(let m of u)m.dispose()}}}var CM="oa-rim-v1";function d0(e,t){let n=new Y(t.left),i=new Y(t.right),s=t.strength??0.7,r=t.power??2.6,o=0,a=new Set;return e.traverse((l)=>{let c=l;if(!c.isMesh)return;let h=Array.isArray(c.material)?c.material:[c.material];for(let d of h){if(a.has(d))continue;a.add(d);let u=d;if(!u.isMeshStandardMaterial||u.userData.rim)continue;let f=u.color.r+u.color.g+u.color.b<0.25;u.userData.rim={left:n,right:i,strength:f?s*0.25:s,power:r};let m=u.onBeforeCompile.bind(u),v=u.customProgramCacheKey.bind(u);u.onBeforeCompile=(p,g)=>{m(p,g);let _=u.userData.rim;p.uniforms.uRimL={value:_.left},p.uniforms.uRimR={value:_.right},p.uniforms.uRimStrength={value:_.strength},p.uniforms.uRimPower={value:_.power},p.fragmentShader=PM(p.fragmentShader)},u.customProgramCacheKey=()=>v()+CM,u.needsUpdate=!0,o++}}),o}function PM(e){return e.replace("#include <common>",`#include <common>
uniform vec3 uRimL;
uniform vec3 uRimR;
uniform float uRimStrength;
uniform float uRimPower;`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","{","  vec3 oaView = normalize( vViewPosition );","  float oaFres = pow( 1.0 - saturate( dot( normal, oaView ) ), uRimPower );","  float oaSide = smoothstep( -0.55, 0.55, normal.x );","  float oaUp = 0.65 + 0.35 * smoothstep( -0.6, 0.6, normal.y );","  totalEmissiveRadiance += mix( uRimL, uRimR, oaSide ) * oaFres * oaUp * uRimStrength;","}"].join(`
`))}var f0=[{id:"idle",label:"Ruhig da sein",motion:"atmet, blinzelt, Schweif wiegt"},{id:"attentive",label:"Aufmerksam werden",motion:"Ohren hoch, lehnt sich vor"},{id:"lookAround",label:"Umsehen",motion:"Blick links/rechts, Körper dreht leicht"},{id:"warmup",label:"Aufwärmen",motion:"Ärmchen schwingen abwechselnd, kleine Hüpfer"},{id:"train",label:"Mittrainieren",motion:"federt tief und hoch, Ärmchen nach vorn"},{id:"breathe",label:"Atmen",motion:"Körper hebt/senkt sich synchron zur Atemphase"},{id:"stretch",label:"Strecken",motion:"Ärmchen hoch, Körper lang, langsam zur Seite"},{id:"push",label:"Drücken",motion:"lehnt sich gegen einen Kristall und drückt sich weg"},{id:"rhythm",label:"Rhythmisch bewegen",motion:"wiegt im Takt, Ärmchen abwechselnd"},{id:"switchSide",label:"Seitenwechsel",motion:"dreht sich um, Schweif wechselt Seite"},{id:"rest",label:"Ruhen",motion:"sitzt, Augen zu, langsames Atmen"},{id:"drink",label:"Trinken",motion:"sitzt, trinkt aus kleiner Flasche"},{id:"happy",label:"Freuen",motion:"kleiner Hüpfer, Ohren wackeln"},{id:"cheer",label:"Jubeln",motion:"Sprung mit beiden Ärmchen hoch"},{id:"discover",label:"Entdecken",motion:"beugt sich zu einem Funkeln"},{id:"startle",label:"Erschrecken",motion:"kurzes Zusammenzucken, Ohren hoch"},{id:"sleep",label:"Einschlafen",motion:"zusammengesunken, Ohren hängen, Zz"},{id:"wake",label:"Aufwachen",motion:"streckt sich, gähnt"},{id:"walk",label:"Gehen",motion:"Füße abwechselnd, wippt vorwärts"},{id:"balance",label:"Balancieren",motion:"ein Fuß hoch, Ärmchen seitlich"}],tE=new Set(f0.map((e)=>e.id));function IM(){return{y:0,turn:0,lean:0,leanZ:0,crouch:0,sit:0,bodyX:0,bodyY:0,bodyZ:0,sq:0,breath:0,headX:0,headY:0,headZ:0,earUp:0,earDroop:0,earWigL:0,earWigR:0,armLFwd:0,armRFwd:0,armLOut:0,armROut:0,armLS:1,armRS:1,legLFwd:0,legRFwd:0,legLOut:0,legROut:0,legLLift:0,legRLift:0,tailUp:0,tailWag:0,tailWave:0.12,tailRate:2.6,wing:0,wingFold:0,rotor:2.2,hover:1,eyeOpen:1,eyeHappy:0,eyeWide:1,lookX:0,lookY:0,mouth:0,prop:0,propTilt:0,wall:0,spark:0,zzz:0}}var ss=Math.PI*2,wt=(e,t,n=0)=>Math.sin(ss*(e/t+n)),Ui=(e,t)=>(e%t+t)%t/t,bu=(e)=>e<0?0:e>1?1:e,fn=(e,t,n)=>{let i=bu((n-e)/(t-e));return i*i*(3-2*i)},rs=(e,t,n)=>{let i=(e+t)/2;return n<i?fn(e,i,n):1-fn(i,t,n)},Mu=(e,t,n=0)=>0.5-0.5*Math.cos(ss*(e/t+n));function LM(e){let n=Math.floor(e/3.6),i=e-n*3.6,s=(o)=>o>0&&o<0.16?Math.sin(o/0.16*Math.PI):0,r=s(i-2.4);if(n%3===1)r=Math.max(r,s(i-2.7));return r}function _n(e){let t=IM();return t.breath=0.022*wt(e,3.2),t.headZ=0.04*wt(e,6.5),t.tailWag=0.18*wt(e,2.8),t.wing=0.06*wt(e,3.2),t}function Su(e){let t=_n(e);return t.headX=0.03*wt(e,3.2,0.25),t.headY=0.14*wt(e,9),t.lookX=0.45*wt(e,9),t.armLFwd=0.06*wt(e,3.2),t.armRFwd=-0.06*wt(e,3.2),t.earWigL=0.3*rs(0,0.04,Ui(e,5.3)),t.earWigR=0.3*rs(0.5,0.54,Ui(e,5.3)),t}function DM(e){let t=_n(e);return t.earUp=0.35,t.lean=0.07,t.headX=-0.08,t.headZ=0.14*wt(e,4.2),t.eyeWide=1.1,t.tailUp=-0.35,t.tailWag=0.3*wt(e,1.6),t.armLFwd=0.35,t.armRFwd=0.35,t.armLOut=-0.12,t.armROut=-0.12,t.y=0.012*Math.abs(wt(e,1.6)),t}function NM(e){let t=_n(e),n=Ui(e,5.2),i=fn(0.02,0.16,n)*1-fn(0.42,0.6,n)*2+fn(0.84,0.98,n);return t.headY=0.62*i,t.turn=0.16*i,t.bodyY=0.1*i,t.lookX=i,t.headX=-0.05,t.headZ=-0.08*i,t.earUp=0.2,t.earWigL=0.15*i,t.earWigR=-0.15*i,t.tailWag=-0.4*i,t}function OM(e){let t=_n(e),n=wt(e,1.3),i=Math.abs(Math.sin(Math.PI*e/0.65));return t.y=0.07*i,t.sq=0.05*(i-0.4),t.armLFwd=1.15*n,t.armRFwd=-1.15*n,t.armLOut=0.3,t.armROut=0.3,t.legLFwd=0.15*n,t.legRFwd=-0.15*n,t.headZ=0.06*n,t.earWigL=0.15*i,t.earWigR=0.15*i,t.mouth=0.25,t.tailWag=0.35*n,t.rotor=3.5,t}function FM(e){let t=_n(e),n=Mu(e,2.8);return t.crouch=-0.13*n,t.lean=0.12*n,t.headX=-0.12*n,t.armLFwd=1.35*n+0.1,t.armRFwd=1.35*n+0.1,t.sq=-0.04*n,t.tailUp=-0.3*n,t.eyeOpen=0.85,t.earUp=0.15,t.rotor=3.2,t.mouth=0.12*(1-n),t}function UM(e,t,n){let i=_n(e),s=typeof n.breath==="number"?bu(n.breath):Mu(e,8);return i.breath=0.075*s,i.crouch=0,i.y=0.02*s,i.armLOut=0.15+0.4*s,i.armROut=0.15+0.4*s,i.headX=-0.12*s,i.eyeOpen=0,i.mouth=0.18*(1-s)*(1-s),i.earUp=0.1*s,i.earDroop=0.15*(1-s),i.wing=0.35*s,i.tailWag=0.1*wt(e,8),i.tailUp=-0.15*s,i.rotor=1.2,i}function p0(e){let t=_n(e),n=wt(e,6.4);return t.armLOut=2.25,t.armROut=2.25,t.armLS=1.3,t.armRS=1.3,t.armLFwd=0.1,t.armRFwd=0.1,t.sq=0.07,t.bodyZ=0.24*n,t.leanZ=0.05*n,t.headZ=0.12*n,t.headX=-0.1,t.eyeHappy=1,t.mouth=0.15,t.earUp=0.25,t.wing=0.6,t.tailUp=-0.3,t.tailWag=-0.3*n,t}function BM(e,t){let n=_n(e),i=Mu(e,3.2);if(n.wall=1,t.hovering)return n.lean=0.25+0.18*i,n.armLFwd=1.35,n.armRFwd=1.35,n.armLS=1.15-0.35*i,n.armRS=1.15-0.35*i,n.headX=-0.2,n.eyeOpen=0.8,n.rotor=3.5,n;let s=0.5+0.22*i;n.lean=s;let r=t.dims,o=ra(r),a=r.shoulderY*Math.sin(s)+r.shoulderZ*Math.cos(s),l=r.shoulderY*Math.cos(s)-r.shoulderZ*Math.sin(s),c=o.z-a,h=o.y-l,d=Math.hypot(c,h),f=-(Math.atan2(-c,-h)-s);return n.armLFwd=f,n.armRFwd=f,n.armLS=Math.max(0.45,Math.min(1.2,d/r.armLen)),n.armRS=n.armLS,n.armLOut=0.12+0.35*i,n.armROut=0.12+0.35*i,n.headX=-0.42,n.legLFwd=-0.08,n.legRFwd=-0.08,n.eyeOpen=0.78,n.mouth=0.22*i,n.earDroop=0.15,n.tailUp=0.2,n.tailWag=0.1*wt(e,3.2),n}function zM(e){let t=_n(e),n=wt(e,1.4);return t.bodyZ=0.16*n,t.leanZ=0.03*n,t.crouch=-0.035*Math.abs(wt(e,1.4,0.25)),t.armLOut=0.6+0.6*n,t.armROut=0.6-0.6*n,t.armLFwd=0.2,t.armRFwd=0.2,t.headZ=-0.12*n,t.headX=0.04*Math.abs(n),t.earWigL=0.2*n,t.earWigR=-0.2*n,t.eyeHappy=0.9,t.mouth=0.35,t.tailWag=0.5*n,t.wing=0.3*n,t}function GM(e){let t=_n(e),n=Ui(e,5),i=fn(0.06,0.34,n)-fn(0.56,0.84,n);t.turn=Math.PI*i;let s=rs(0.06,0.34,n)+rs(0.56,0.84,n);return t.y=0.06*s,t.sq=0.04*s,t.armLOut=0.25+0.5*s,t.armROut=0.25+0.5*s,t.tailWag=0.6*Math.sin(Math.PI*i*2),t.earWigL=0.2*s,t.earWigR=-0.2*s,t.mouth=0.2*s,t}function wu(e,t=5){let n=_n(e);return n.sit=1,n.lean=-0.05,n.breath=0.03*wt(e,t),n.armLFwd=0.45,n.armRFwd=0.45,n.armLOut=-0.08,n.armROut=-0.08,n.hover=0.15,n.rotor=0.8,n.tailWag=0.08*wt(e,t),n}function kM(e){let t=wu(e,5);return t.eyeOpen=0,t.headX=0.08+0.04*wt(e,5),t.headZ=0.06,t.earDroop=0.2,t.mouth=0,t}function HM(e){let t=wu(e,4),n=Ui(e,6),i=fn(0,0.18,n)*(1-fn(0.5,0.68,n)),s=fn(0.15,0.22,n)*(1-fn(0.46,0.52,n));return t.prop=1,t.armRFwd=0.45+1.85*i,t.armROut=-0.08-0.55*i,t.propTilt=0.45+(Math.PI-0.45)*i,t.headX=-0.26*s,t.eyeHappy=s,t.eyeOpen=1-s,t.earUp=0.15*s,t.mouth=0,t.tailWag=0.25*wt(e,1.2)*(1-s),t}function VM(e){let t=_n(e),n=Math.max(0,Math.sin(ss*e/0.95));return t.y=0.1*Math.pow(n,0.8),t.sq=0.06*(n-0.3),t.earWigL=0.28*wt(e,0.475),t.earWigR=-0.28*wt(e,0.475),t.eyeHappy=1,t.mouth=0.7,t.tailWag=0.6*wt(e,0.475),t.armLOut=0.7+0.2*n,t.armROut=0.7+0.2*n,t.headZ=0.1*wt(e,0.95),t.wing=0.5*n,t.rotor=4,t}function WM(e){let t=_n(e),n=Ui(e,1.6),i=rs(0,0.22,n)+rs(0.72,0.92,n)*0.8,s=n>0.18&&n<0.74?Math.sin(Math.PI*(n-0.18)/0.56):0;t.y=0.36*s,t.crouch=-0.09*i,t.sq=-0.08*i+0.08*s;let r=fn(0.1,0.25,n)*(1-fn(0.9,1,n)*0.25);return t.armLOut=1.5+0.85*r,t.armROut=1.5+0.85*r,t.armLS=1+0.3*r,t.armRS=1+0.3*r,t.armLFwd=0.25,t.armRFwd=0.25,t.legLFwd=0.35*s,t.legRFwd=0.35*s,t.eyeHappy=1,t.mouth=0.9,t.earUp=0.3,t.earWigL=0.2*s,t.earWigR=-0.2*s,t.tailUp=-0.4,t.tailWag=0.5*wt(e,0.4),t.wing=0.9*s+0.3,t.rotor=5,t.headX=-0.12,t}function XM(e){let t=_n(e),n=Ui(e,4),i=rs(0.35,0.55,n);return t.spark=1,t.lean=0.28,t.headX=0.38,t.headZ=0.12,t.lookY=-0.7,t.eyeWide=1.12,t.earUp=0.35,t.armRFwd=0.9+0.35*i,t.armLFwd=0.3,t.armLOut=0.2,t.mouth=0.35,t.tailWag=0.45*wt(e,0.8),t.tailUp=-0.25,t.crouch=-0.05,t}function qM(e){let t=_n(e),n=Ui(e,3.2),i=rs(0,0.16,n),s=1-fn(0.16,0.7,n);return t.y=0.13*i,t.sq=0.12*i-0.03*(1-i)*s,t.lean=-0.08*s,t.earUp=0.5,t.armLOut=0.4+0.9*s,t.armROut=0.4+0.9*s,t.armLFwd=0.5*s,t.armRFwd=0.5*s,t.eyeWide=1+0.25*s,t.mouth=0.55*s,t.tailUp=-0.6*s,t.headX=-0.1*s,t.bodyZ=0.03*Math.sin(e*40)*rs(0.1,0.4,n),t.wing=0.8*s,t}function m0(e){let t=wu(e,4.6);return t.breath=0.045*wt(e,4.6),t.bodyX=0.16,t.headX=0.27+0.03*wt(e,4.6),t.headZ=0.2,t.earDroop=0.85,t.eyeOpen=0,t.mouth=0.12,t.zzz=1,t.armLFwd=0.25,t.armRFwd=0.25,t.hover=0,t.rotor=0,t.wing=-0.2,t.wingFold=0.4,t.tailWag=0,t.tailWave=0.03,t.tailRate=4.6,t}function YM(e,t,n){let i=Ui(e,6.5),s=m0(e),r=p0(e);r.eyeHappy=0,r.eyeOpen=0,r.mouth=1,r.bodyZ*=0.3;let o=Su(e),a=fn(0.15,0.4,i),l=fn(0.58,0.8,i),c=l>0?Vl(r,o,l):Vl(s,r,a);if(i>0.6)c.eyeOpen=Math.min(c.eyeOpen,fn(0.6,0.72,i));return c.zzz=1-fn(0.1,0.25,i),c}function KM(e){let t=_n(e),n=1,i=wt(e,1);return t.legLFwd=0.55*i,t.legRFwd=-0.55*i,t.legLLift=0.05*Math.max(0,i),t.legRLift=0.05*Math.max(0,-i),t.y=0.035*Math.abs(wt(e,1,0.25)),t.bodyZ=0.06*i,t.bodyY=0.08*i,t.armLFwd=-0.55*i,t.armRFwd=0.55*i,t.lean=0.07,t.headX=-0.04,t.headZ=-0.04*i,t.earWigL=0.08*i,t.earWigR=-0.08*i,t.tailWag=0.3*i,t.mouth=0.15,t.rotor=3,t}function ZM(e){let t=_n(e),n=wt(e,2.6);return t.legRFwd=0.45,t.legRLift=0.09,t.legROut=0.32,t.armLOut=1.45+0.14*n,t.armROut=1.45-0.14*n,t.bodyZ=0.07*wt(e,4.6),t.leanZ=-0.04+0.025*n,t.headZ=-0.05*n,t.tailWag=-0.35*n,t.eyeOpen=0.85,t.mouth=0.1,t.wing=0.4,t}var jM={idle:Su,attentive:DM,lookAround:NM,warmup:OM,train:FM,breathe:UM,stretch:p0,push:BM,rhythm:zM,switchSide:GM,rest:kM,drink:HM,happy:VM,cheer:WM,discover:XM,startle:qM,sleep:m0,wake:YM,walk:KM,balance:ZM},JM={idle:0,attentive:0,lookAround:0.3,warmup:0.33,train:1.4,breathe:4,stretch:0,push:0.8,rhythm:0,switchSide:0,rest:0,drink:2,happy:0,cheer:1.5,discover:0.5,startle:2.6,sleep:0,wake:5.8,walk:0.25,balance:0.65};function Tu(e,t,n,i={}){let s=jM[t]??Su;if(i.reduced){let o=s(JM[t]??0,e,i);return o.breath+=0.012*wt(n,4),o.rotor=Math.min(o.rotor,0.6),o.tailWave=0,o}let r=s(n,e,i);return QM(r,n),r}function QM(e,t){if(e.eyeOpen>0.3&&e.eyeHappy<0.5)e.eyeOpen*=1-LM(t)}function Vl(e,t,n){let i={},s=bu(n);for(let r in e){let o=r;i[o]=e[o]+(t[o]-e[o])*s}return i}function Au(e){return e.userData.rest}function In(e,t,n,i){let s=Au(e).r;e.rotation.x=s.x+t,e.rotation.y=s.y+n,e.rotation.z=s.z+i}function ur(e,t,n,i){let s=Au(e).p;e.position.set(s.x+t,s.y+n,s.z+i)}function ui(e,t,n,i){let s=Au(e).s;e.scale.set(s.x*t,s.y*n,s.z*i)}var $M=0.2;function g0(e,t,n){let i=e.hovering,s=i?0.12+0.34*t.hover+0.045*Math.sin(ss*(n/2.4))*t.hover:0;ur(e.root,0,t.y+s,0),In(e.root,0,t.turn,0),In(e.lean,t.lean,0,t.leanZ);let r=i?0:$M*t.sit,o=i?t.crouch*0.4:t.crouch;ur(e.hips,0,o-r,0),In(e.body,t.bodyX,t.bodyY,t.bodyZ);let a=(1-t.sq*0.5)*(1+t.breath*0.5),l=(1+t.sq)*(1+t.breath*0.35),c=(1-t.sq*0.5)*(1+t.breath);ui(e.body,a,l,c),ui(e.head,1/Math.sqrt(a),1/Math.sqrt(l),1/Math.sqrt(c)),In(e.head,t.headX,t.headY,t.headZ),In(e.earL,-t.earUp*0.35,0,t.earDroop*0.9+t.earWigL),In(e.earR,-t.earUp*0.35,0,-t.earDroop*0.9-t.earWigR),In(e.armL,-t.armLFwd,0,-t.armLOut),In(e.armR,-t.armRFwd,0,t.armROut),ui(e.armL,1,t.armLS,1),ui(e.armR,1,t.armRS,1);let h=i?1:Math.max(0.45,Math.min(1.1,1+o/Math.max(0.1,e.dims.hipY))),d=i?0.4*(1-t.hover):1.35*t.sit;In(e.legL,-(t.legLFwd+d),0,-t.legLOut),In(e.legR,-(t.legRFwd+d),0,t.legROut),ur(e.legL,0,t.legLLift,0),ur(e.legR,0,t.legRLift,0),ui(e.legL,1,h,1),ui(e.legR,1,h,1),In(e.tail,t.tailUp,t.tailWag,0),e.tailSegs.forEach((b,y)=>{In(b,0,t.tailWave*Math.sin(ss*(n/t.tailRate)-y*0.7),0.5*t.tailWave*Math.sin(ss*(n/t.tailRate)-y*0.9))}),e.wings.forEach((b,y)=>{let S=y===0?-1:1;In(b,0,S*t.wingFold,-S*t.wing*0.6)}),e.rotors.forEach((b,y)=>In(b,0,(y===0?1:-0.25)*ss*t.rotor*n,0));let u=Math.max(0.04,Math.min(1,t.eyeOpen)),f=t.eyeHappy>=0.5;for(let b of e.eyes){let y=!f&&t.eyeOpen>0.12;b.open.visible=y,ui(b.open,t.eyeWide,u*t.eyeWide,1),ur(b.look,t.lookX*0.025,t.lookY*0.02,0),b.lidClosed.visible=!f&&!y,b.lidHappy.visible=f}let m=Math.max(0,Math.min(1,t.mouth));e.mouthOpen.visible=m>0.1,e.mouthClosed.visible=m<=0.1,ui(e.mouthOpen,0.7+0.3*m,Math.max(0.05,m),1),e.prop.visible=t.prop>0.02,ui(e.prop,Math.max(0.001,t.prop),Math.max(0.001,t.prop),Math.max(0.001,t.prop)),In(e.prop,t.propTilt,0,0),e.wall.visible=t.wall>0.02;let v=Math.max(0.001,t.wall);ui(e.wall,v,v,v),e.spark.visible=t.spark>0.02;let p=Math.max(0.001,t.spark)*(0.85+0.15*Math.sin(ss*n*1.3));ui(e.spark,p,p,p),In(e.spark,0,n*1.6,0),ur(e.spark,0,0.03*Math.sin(ss*n*0.5),0),e.zzz.visible=t.zzz>0.02;let g=Ui(n,3),_=Math.max(0.001,t.zzz)*(0.6+0.4*Math.sin(Math.PI*g));ur(e.zzz,0.06*g,0.22*g,0),ui(e.zzz,_,_,_)}function x0(e){let t=new Map,n=new Map,i=e.clone();return v0(e,i,function(s,r){t.set(r,s),n.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return n.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function v0(e,t,n){n(e,t);for(let i=0;i<e.children.length;i++)v0(e.children[i],t.children[i],n)}class Du extends $i{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new A0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new R0(t)}),this.register(function(t){return new U0(t)}),this.register(function(t){return new B0(t)}),this.register(function(t){return new z0(t)}),this.register(function(t){return new P0(t)}),this.register(function(t){return new I0(t)}),this.register(function(t){return new L0(t)}),this.register(function(t){return new D0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new N0(t)}),this.register(function(t){return new C0(t)}),this.register(function(t){return new F0(t)}),this.register(function(t){return new O0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new Pu(t,xt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pu(t,xt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new G0(t)})}load(e,t,n,i){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let l=Ps.extractUrlBase(e);r=Ps.resolveURL(l,this.path)}else r=Ps.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){if(i)i(l);else console.error(l);s.manager.itemError(e),s.manager.itemEnd(e)},a=new Wo(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{s.parse(l,r,function(c){t(c),s.manager.itemEnd(e)},o)}catch(c){o(c)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){if(this.pluginCallbacks.indexOf(e)===-1)this.pluginCallbacks.push(e);return this}unregister(e){if(this.pluginCallbacks.indexOf(e)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1);return this}parse(e,t,n,i){let s,r={},o={},a=new TextDecoder;if(typeof e==="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(a.decode(new Uint8Array(e,0,4))===k0){try{r[xt.KHR_BINARY_GLTF]=new H0(e)}catch(h){if(i)i(h);return}s=JSON.parse(r[xt.KHR_BINARY_GLTF].content)}else s=JSON.parse(a.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){if(i)i(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Y0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let h=this.pluginCallbacks[c](l);if(!h.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");o[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){let h=s.extensionsUsed[c],d=s.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:r[h]=new w0;break;case xt.KHR_DRACO_MESH_COMPRESSION:r[h]=new V0(s,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:r[h]=new W0;break;case xt.KHR_MESH_QUANTIZATION:r[h]=new X0;break;default:if(d.indexOf(h)>=0&&o[h]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function e1(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Kt(e,t,n){let i=e.json.materials[t];if(i.extensions&&i.extensions[n])return i.extensions[n];return null}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class S0{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];if(s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0)e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,c=new Y(16777215);if(a.color!==void 0)c.setRGB(a.color[0],a.color[1],a.color[2],Jn);let h=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new Cn(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new _l(c),l.distance=h;break;case"spot":l=new yl(c),l.distance=h,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}if(l.position.set(0,0,0),Bi(l,a),a.intensity!==void 0)l.intensity=a.intensity;return l.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;if(o===void 0)return null;return this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}}class w0{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,n){let i=[];e.color=new Y(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Jn),e.opacity=r[3]}if(s.baseColorTexture!==void 0)i.push(n.assignTexture(e,"map",s.baseColorTexture,xn))}return Promise.all(i)}}class T0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();if(n.emissiveStrength!==void 0)t.emissiveIntensity=n.emissiveStrength;return Promise.resolve()}}class A0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0)t.clearcoat=n.clearcoatFactor;if(n.clearcoatTexture!==void 0)i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture));if(n.clearcoatRoughnessFactor!==void 0)t.clearcoatRoughness=n.clearcoatRoughnessFactor;if(n.clearcoatRoughnessTexture!==void 0)i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture));if(n.clearcoatNormalTexture!==void 0){if(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(s,s)}}return Promise.all(i)}}class E0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0)i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture));return Promise.all(i)}}class R0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();return t.dispersion=n.dispersion!==void 0?n.dispersion:0,Promise.resolve()}}class C0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.iridescenceFactor!==void 0)t.iridescence=n.iridescenceFactor;if(n.iridescenceTexture!==void 0)i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture));if(n.iridescenceIor!==void 0)t.iridescenceIOR=n.iridescenceIor;if(n.iridescenceThicknessMinimum!==void 0)t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum;if(n.iridescenceThicknessMaximum!==void 0)t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum;if(n.iridescenceThicknessTexture!==void 0)i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture));return Promise.all(i)}}class P0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Y(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Jn)}if(n.sheenRoughnessFactor!==void 0)t.sheenRoughness=n.sheenRoughnessFactor;if(n.sheenColorTexture!==void 0)i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,xn));if(n.sheenRoughnessTexture!==void 0)i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture));return Promise.all(i)}}class I0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.transmissionFactor!==void 0)t.transmission=n.transmissionFactor;if(n.transmissionTexture!==void 0)i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture));return Promise.all(i)}}class L0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0)i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture));t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Y().setRGB(s[0],s[1],s[2],Jn),Promise.all(i)}}class D0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();if(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0)t.ior=1000;return Promise.resolve()}}class N0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0)i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];if(t.specularColor=new Y().setRGB(s[0],s[1],s[2],Jn),n.specularColorTexture!==void 0)i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,xn));return Promise.all(i)}}class O0{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0)i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture));return Promise.all(i)}}class F0{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gt:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.anisotropyStrength!==void 0)t.anisotropy=n.anisotropyStrength;if(n.anisotropyRotation!==void 0)t.anisotropyRotation=n.anisotropyRotation;if(n.anisotropyTexture!==void 0)i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture));return Promise.all(i)}}class U0{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r)if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return t.loadTextureImage(e,s.source,r)}}class B0{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],a=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);if(l!==null)a=l}return n.loadTextureImage(e,r.source,a)}}class z0{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],a=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);if(l!==null)a=l}return n.loadTextureImage(e,r.source,a)}}class Pu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported)if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return s.then(function(o){let a=i.byteOffset||0,l=i.byteLength||0,{count:c,byteStride:h}=i,d=new Uint8Array(o,a,l);if(r.decodeGltfBufferAsync)return r.decodeGltfBufferAsync(c,h,d,i.mode,i.filter).then(function(u){return u.buffer});else return r.ready.then(function(){let u=new ArrayBuffer(c*h);return r.decodeGltfBuffer(new Uint8Array(u),c,h,d,i.mode,i.filter),u})})}else return null}}class G0{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==di.TRIANGLES&&l.mode!==di.TRIANGLE_STRIP&&l.mode!==di.TRIANGLE_FAN&&l.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],a={};for(let l in r)o.push(this.parser.getDependency("accessor",r[l]).then((c)=>(a[l]=c,a[l])));if(o.length<1)return null;return o.push(this.parser.createNodeMesh(e)),Promise.all(o).then((l)=>{let c=l.pop(),h=c.isGroup?c.children:[c],d=l[0].count,u=[];for(let f of h){let m=new Je,v=new R,p=new jt,g=new R(1,1,1),_=new Xr(f.geometry,f.material,d);for(let y=0;y<d;y++){if(a.TRANSLATION)v.fromBufferAttribute(a.TRANSLATION,y);if(a.ROTATION)p.fromBufferAttribute(a.ROTATION,y);if(a.SCALE)g.fromBufferAttribute(a.SCALE,y);_.setMatrixAt(y,m.compose(v,p,g))}let b=null;for(let y in a)if(y==="_COLOR_0"){let S=a[y];_.instanceColor=new ai(S.array,S.itemSize,S.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(b===null){let T=_.geometry;b=new gt,b.name=T.name;for(let x in T.attributes)b.setAttribute(x,T.attributes[x]);for(let x in T.morphAttributes)b.morphAttributes[x]=T.morphAttributes[x];if(T.index!==null)b.setIndex(T.index);b.morphTargetsRelative=T.morphTargetsRelative;for(let x of T.groups)b.addGroup(x.start,x.count,x.materialIndex);if(T.boundingBox!==null)b.boundingBox=T.boundingBox.clone();if(T.boundingSphere!==null)b.boundingSphere=T.boundingSphere.clone();b.drawRange.start=T.drawRange.start,b.drawRange.count=T.drawRange.count,b.userData=Object.assign({},T.userData),_.geometry=b}let S=a[y];b.setAttribute(y,new ai(S.array,S.itemSize,S.normalized))}Ht.prototype.copy.call(_,f),this.parser.assignFinalMaterial(_),u.push(_)}if(c.isGroup)return c.clear(),c.add(...u),c;return u[0]})}}var k0="glTF",aa=12,y0={JSON:1313821514,BIN:5130562};class H0{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,aa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==k0)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-aa,s=new DataView(e,aa),r=0;while(r<i){let o=s.getUint32(r,!0);r+=4;let a=s.getUint32(r,!0);if(r+=4,a===y0.JSON){let l=new Uint8Array(e,aa+r,o);this.content=n.decode(l)}else if(a===y0.BIN){let l=aa+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class V0{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},l={};for(let c in r){let h=Iu[c]||c.toLowerCase();o[h]=r[c]}for(let c in e.attributes){let h=Iu[c]||c.toLowerCase();if(r[c]!==void 0){let d=n.accessors[e.attributes[c]],u=to[d.componentType];l[h]=u.name,a[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(h,d){i.decodeDracoFile(c,function(u){for(let f in u.attributes){let m=u.attributes[f],v=a[f];if(v!==void 0)m.normalized=v}h(u)},o,l,Jn,d)})})}}class W0{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0)e.channel=t.texCoord;if(t.offset!==void 0)e.offset.fromArray(t.offset);if(t.rotation!==void 0)e.rotation=t.rotation;if(t.scale!==void 0)e.repeat.fromArray(t.scale);if(t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class X0{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class Nu extends Qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=i-t,h=(n-t)/c,d=h*h,u=d*h,f=e*l,m=f-l,v=-2*u+3*d,p=u-d,g=1-v,_=p-d+h;for(let b=0;b!==o;b++){let y=r[m+b+o],S=r[m+b+a]*c,T=r[f+b+o],x=r[f+b]*c;s[b]=g*y+_*S+v*T+p*x}return s}}var t1=new jt;class q0 extends Nu{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return t1.fromArray(s).normalize().toArray(s),s}}var di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},to={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_0={9728:Hn,9729:sn,9984:Ya,9985:Br,9986:Ys,9987:jn},b0={33071:Ur,33648:qa,10497:vs},Eu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ls={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},n1={CUBICSPLINE:void 0,LINEAR:el,STEP:Sh},Ru={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function i1(e){if(e.DefaultMaterial===void 0)e.DefaultMaterial=new ti({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xs});return e.DefaultMaterial}function dr(e,t,n){for(let i in n.extensions)if(e[i]===void 0)t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=n.extensions[i]}function Bi(e,t){if(t.extras!==void 0)if(typeof t.extras==="object")Object.assign(e.userData,t.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras)}function s1(e,t,n){let i=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){let d=t[c];if(d.POSITION!==void 0)i=!0;if(d.NORMAL!==void 0)s=!0;if(d.COLOR_0!==void 0)r=!0;if(i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(e);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let d=t[c];if(i){let u=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):e.attributes.position;o.push(u)}if(s){let u=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):e.attributes.normal;a.push(u)}if(r){let u=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):e.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];if(i)e.morphAttributes.position=h;if(s)e.morphAttributes.normal=d;if(r)e.morphAttributes.color=u;return e.morphTargetsRelative=!0,e})}function r1(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,i=t.weights.length;n<i;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++)e.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function o1(e){let t,n=e.extensions&&e.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(n)t="draco:"+n.bufferView+":"+n.indices+":"+Cu(n.attributes);else t=e.indices+":"+Cu(e.attributes)+":"+e.mode;if(e.targets!==void 0)for(let i=0,s=e.targets.length;i<s;i++)t+=":"+Cu(e.targets[i]);return t}function Cu(e){let t="",n=Object.keys(e).sort();for(let i=0,s=n.length;i<s;i++)t+=n[i]+":"+e[n[i]]+";";return t}function Lu(e){switch(e){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function a1(e){if(e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0)return"image/webp";if(e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var l1=new Je;class Y0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let a=o.match(/Version\/(\d+)/);i=n&&a?parseInt(a[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||n&&i<17||s&&r<98)this.textureLoader=new Kr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);else this.textureLoader=new bl(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),this.options.withCredentials||this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return dr(s,o,i),Bi(o,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){for(let a of o.scenes)a.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let r=e[i];if(r.mesh!==void 0){if(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0)n[r.mesh].isSkinnedMesh=!0}if(r.camera!==void 0)this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){if(t===void 0)return;if(e.refs[t]===void 0)e.refs[t]=e.uses[t]=0;e.refs[t]++}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(r,o)=>{let a=this.associations.get(r);if(a!=null)this.associations.set(o,a);for(let[l,c]of r.children.entries())s(c,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,r){n.load(Ps.resolveURL(t.uri,i.path),s,void 0,function(){r(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let r=Eu[i.type],o=to[i.componentType],a=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new gn(l,r,a))}let s=[];if(i.bufferView!==void 0)s.push(this.getDependency("bufferView",i.bufferView));else s.push(null);if(i.sparse!==void 0)s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView));return Promise.all(s).then(function(r){let o=r[0],a=Eu[i.type],l=to[i.componentType],c=l.BYTES_PER_ELEMENT,h=c*a,d=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0,m,v;if(u&&u!==h){let p=Math.floor(d/u),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,_=t.cache.get(g);if(!_)m=new l(o,p*u,i.count*u/c),_=new Fo(m,u/c),t.cache.add(g,_);v=new Vr(_,a,d%u/c,f)}else{if(o===null)m=new l(i.count*a);else m=new l(o,d,i.count*a);v=new gn(m,a,f)}if(i.sparse!==void 0){let p=Eu.SCALAR,g=to[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,y=new g(r[1],_,i.sparse.count*p),S=new l(r[2],b,i.sparse.count*a);if(o!==null)v=new gn(v.array.slice(),v.itemSize,v.normalized);v.normalized=!1;for(let T=0,x=y.length;T<x;T++){let M=y[T];if(v.setX(M,S[T*a]),a>=2)v.setY(M,S[T*a+1]);if(a>=3)v.setZ(M,S[T*a+2]);if(a>=4)v.setW(M,S[T*a+3]);if(a>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=f}return v})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let a=n.manager.getHandler(r.uri);if(a!==null)o=a}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,r=s.textures[e],o=s.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];let l=this.loadImageSource(t,n).then(function(c){if(c.flipY=!1,c.name=r.name||o.name||"",c.name===""&&typeof o.uri==="string"&&o.uri.startsWith("data:image/")===!1)c.name=o.uri;let d=(s.samplers||{})[r.sampler]||{};return c.magFilter=_0[d.magFilter]||sn,c.minFilter=_0[d.minFilter]||jn,c.wrapS=b0[d.wrapS]||vs,c.wrapT=b0[d.wrapT]||vs,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==Hn&&c.minFilter!==sn,i.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then((d)=>d.clone());let r=i.images[e],o=self.URL||self.webkitURL,a=r.uri||"",l=!1,c;if(t.isKTX2Loader===!0&&r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(d){return new Promise(function(u,f){t.parse(d,u,f)})});else{if(r.bufferView!==void 0)a=n.getDependency("bufferView",r.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:r.mimeType});return a=o.createObjectURL(u),a});else if(r.uri===void 0)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");c=Promise.resolve(a).then(function(d){return new Promise(function(u,f){let m=u;if(t.isImageBitmapLoader===!0)m=function(v){let p=new Wt(v);p.needsUpdate=!0,u(p)};t.load(Ps.resolveURL(d,s.path),m,void 0,f)})})}let h=c.then(function(d){if(l===!0)o.revokeObjectURL(a);return Bi(d,r),d.userData.mimeType=r.mimeType||a1(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0)r=r.clone(),r.channel=n.texCoord;if(s.extensions[xt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let a=s.associations.get(r);r=s.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,a)}}if(i!==void 0)r.colorSpace=i;return e[t]=r,r})}assignFinalMaterial(e){let{geometry:t,material:n}=e,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,a=this.cache.get(o);if(!a)a=new Qs,$n.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a);n=a}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,a=this.cache.get(o);if(!a)a=new zo,$n.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,this.cache.add(o,a);n=a}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";if(i)o+="derivative-tangents:";if(s)o+="vertex-colors:";if(r)o+="flat-shading:";let a=this.cache.get(o);if(!a){if(a=n.clone(),s)a.vertexColors=!0;if(r)a.flatShading=!0;if(i){if(a.normalScale)a.normalScale.y*=-1;if(a.clearcoatNormalScale)a.clearcoatNormalScale.y*=-1}this.cache.add(o,a),this.associations.set(a,this.associations.get(n))}n=a}e.material=n}getMaterialType(){return ti}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],r,o={},a=s.extensions||{},l=[];if(a[xt.KHR_MATERIALS_UNLIT]){let h=i[xt.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{let h=s.pbrMetallicRoughness||{};if(o.color=new Y(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Jn),o.opacity=d[3]}if(h.baseColorTexture!==void 0)l.push(t.assignTexture(o,"map",h.baseColorTexture,xn));if(o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0)l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture));r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}if(s.doubleSided===!0)o.side=Jt;let c=s.alphaMode||Ru.OPAQUE;if(c===Ru.BLEND)o.transparent=!0,o.depthWrite=!1;else if(o.transparent=!1,c===Ru.MASK)o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:0.5;if(s.normalTexture!==void 0&&r!==zt){if(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ie(1,1),s.normalTexture.scale!==void 0){let h=s.normalTexture.scale;o.normalScale.set(h,h)}}if(s.occlusionTexture!==void 0&&r!==zt){if(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0)o.aoMapIntensity=s.occlusionTexture.strength}if(s.emissiveFactor!==void 0&&r!==zt){let h=s.emissiveFactor;o.emissive=new Y().setRGB(h[0],h[1],h[2],Jn)}if(s.emissiveTexture!==void 0&&r!==zt)l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,xn));return Promise.all(l).then(function(){let h=new r(o);if(s.name)h.name=s.name;if(Bi(h,s),t.associations.set(h,{materials:e}),s.extensions)dr(i,h,s);return h})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");if(t in this.nodeNamesUsed)return t+"_"+ ++this.nodeNamesUsed[t];else return this.nodeNamesUsed[t]=0,t}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return M0(a,o,t)})}let r=[];for(let o=0,a=e.length;o<a;o++){let l=e[o],c=o1(l),h=i[c];if(h)r.push(h.promise);else{let d;if(l.extensions&&l.extensions[xt.KHR_DRACO_MESH_COMPRESSION])d=s(l);else d=M0(new gt,l,t);if(l.mode===di.TRIANGLE_STRIP)d=d.then((u)=>uu(u,Lo));else if(l.mode===di.TRIANGLE_FAN)d=d.then((u)=>uu(u,Gr));i[c]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let a=0,l=r.length;a<l;a++){let c=r[a].material===void 0?i1(this.cache):this.getDependency("material",r[a].material);o.push(c)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(a){let l=a.slice(0,a.length-1),c=a[a.length-1],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u],v=r[u],p,g=l[u];if(v.mode===di.TRIANGLES||v.mode===di.TRIANGLE_STRIP||v.mode===di.TRIANGLE_FAN||v.mode===void 0){let _=s.isSkinnedMesh===!0,b=m.hasAttribute("skinIndex")&&m.hasAttribute("skinWeight");if(_&&b===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(p=_&&b?new Wr(m,g):new Qe(m,g),p.isSkinnedMesh===!0)p.normalizeSkinWeights()}else if(v.mode===di.LINES)p=new rl(m,g);else if(v.mode===di.LINE_STRIP)p=new qr(m,g);else if(v.mode===di.LINE_LOOP)p=new ol(m,g);else if(v.mode===di.POINTS)p=new bs(m,g);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);if(Object.keys(p.geometry.morphAttributes).length>0)r1(p,s);if(p.name=t.createUniqueName(s.name||"mesh_"+e),Bi(p,s),v.extensions)dr(i,p,v);t.assignFinalMaterial(p),h.push(p)}for(let u=0,f=h.length;u<f;u++)t.associations.set(h[u],{meshes:e,primitives:u});if(h.length===1){if(s.extensions)dr(i,h[0],s);return h[0]}let d=new Ft;if(s.extensions)dr(i,d,s);t.associations.set(d,{meshes:e});for(let u=0,f=h.length;u<f;u++)d.add(h[u]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(n.type==="perspective")t=new Zt(kr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2000000);else if(n.type==="orthographic")t=new Cs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar);if(n.name)t.name=this.createUniqueName(n.name);return Bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));if(t.inverseBindMatrices!==void 0)n.push(this.getDependency("accessor",t.inverseBindMatrices));else n.push(null);return Promise.all(n).then(function(i){let s=i.pop(),r=i,o=[],a=[];for(let l=0,c=r.length;l<c;l++){let h=r[l];if(h){o.push(h);let d=new Je;if(s!==null)d.fromArray(s.array,l*16);a.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Bo(o,a)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],a=[],l=[],c=[];for(let h=0,d=i.channels.length;h<d;h++){let u=i.channels[h],f=i.samplers[u.sampler],m=u.target,v=m.node,p=i.parameters!==void 0?i.parameters[f.input]:f.input,g=i.parameters!==void 0?i.parameters[f.output]:f.output;if(m.node===void 0)continue;r.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",p)),a.push(this.getDependency("accessor",g)),l.push(f),c.push(m)}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){let d=h[0],u=h[1],f=h[2],m=h[3],v=h[4],p=[];for(let _=0,b=d.length;_<b;_++){let y=d[_],S=u[_],T=f[_],x=m[_],M=v[_];if(y===void 0)continue;if(y.updateMatrix)y.updateMatrix();let E=n._createAnimationTracks(y,S,T,x,M);if(E)for(let L=0;L<E.length;L++)p.push(E[L])}let g=new Dr(s,void 0,p);return Bi(g,i),g})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];if(i.mesh===void 0)return null;return n.getDependency("mesh",i.mesh).then(function(s){let r=n._getNodeRef(n.meshCache,i.mesh,s);if(i.weights!==void 0)r.traverse(function(o){if(!o.isMesh)return;for(let a=0,l=i.weights.length;a<l;a++)o.morphTargetInfluences[a]=i.weights[a]});return r})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,c=o.length;l<c;l++)r.push(n.getDependency("node",o[l]));let a=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),a]).then(function(l){let c=l[0],h=l[1],d=l[2];if(d!==null)c.traverse(function(u){if(!u.isSkinnedMesh)return;u.bind(d,l1)});for(let u=0,f=h.length;u<f;u++)c.add(h[u]);if(c.userData.pivot!==void 0&&h.length>0){let u=c.userData.pivot,f=h[0];c.pivot=new R().fromArray(u),c.position.x-=u[0],c.position.y-=u[1],c.position.z-=u[2],f.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],a=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});if(a)o.push(a);if(s.camera!==void 0)o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)}));return i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let c;if(s.isBone===!0)c=new Uo;else if(l.length>1)c=new Ft;else if(l.length===1)c=l[0];else c=new Ht;if(c!==l[0])for(let h=0,d=l.length;h<d;h++)c.add(l[h]);if(s.name)c.userData.name=s.name,c.name=r;if(Bi(c,s),s.extensions)dr(n,c,s);if(s.matrix!==void 0){let h=new Je;h.fromArray(s.matrix),c.applyMatrix4(h)}else{if(s.translation!==void 0)c.position.fromArray(s.translation);if(s.rotation!==void 0)c.quaternion.fromArray(s.rotation);if(s.scale!==void 0)c.scale.fromArray(s.scale)}if(!i.associations.has(c))i.associations.set(c,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let h=i.associations.get(c);i.associations.set(c,{...h})}return i.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ft;if(n.name)s.name=i.createUniqueName(n.name);if(Bi(s,n),n.extensions)dr(t,s,n);let r=n.nodes||[],o=[];for(let a=0,l=r.length;a<l;a++)o.push(i.getDependency("node",r[a]));return Promise.all(o).then(function(a){for(let c=0,h=a.length;c<h;c++){let d=a[c];if(d.parent!==null)s.add(x0(d));else s.add(d)}let l=(c)=>{let h=new Map;for(let[d,u]of i.associations)if(d instanceof $n||d instanceof Wt)h.set(d,u);return c.traverse((d)=>{let u=i.associations.get(d);if(u!=null)h.set(d,u)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let r=[],o=e.name?e.name:e.uuid,a=[];function l(u){if(u.morphTargetInfluences)a.push(u.name?u.name:u.uuid)}if(Ls[s.path]===Ls.weights){if(l(e),e.isGroup)e.children.forEach(l)}else a.push(o);let c;switch(Ls[s.path]){case Ls.weights:c=As;break;case Ls.rotation:c=Es;break;case Ls.translation:case Ls.scale:c=nr;break;default:switch(n.itemSize){case 1:c=As;break;case 2:case 3:default:c=nr;break}break}let h=i.interpolation!==void 0?n1[i.interpolation]:el,d=this._getArrayFromAccessor(n);for(let u=0,f=a.length;u<f;u++){let m=new c(a[u]+"."+Ls[s.path],t.array,d,h);if(i.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(m);r.push(m)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Lu(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){return new(this instanceof Es?q0:Nu)(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function c1(e,t,n){let i=t.attributes,s=new An;if(i.POSITION!==void 0){let a=n.json.accessors[i.POSITION],{min:l,max:c}=a;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){let h=Lu(to[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=n.json.accessors[d.POSITION],{min:f,max:m}=u;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){let v=Lu(to[u.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}e.boundingBox=s;let o=new Qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,e.boundingSphere=o}function M0(e,t,n){let i=t.attributes,s=[];function r(o,a){return n.getDependency("accessor",o).then(function(l){e.setAttribute(a,l)})}for(let o in i){let a=Iu[o]||o.toLowerCase();if(a in e.attributes)continue;s.push(r(i[o],a))}if(t.indices!==void 0&&!e.index){let o=n.getDependency("accessor",t.indices).then(function(a){e.setIndex(a)});s.push(o)}if(dt.workingColorSpace!==Jn&&"COLOR_0"in i)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`);return Bi(e,t),c1(e,t,n),Promise.all(s).then(function(){return t.targets!==void 0?s1(e,t.targets,n):e})}var h1=10,u1=new Set(["idle","lookAround","hop","joy","train","rest"]);function K0(e,t,n){let i=e/t,s=new ti({color:new Y("#f5f8ff").lerp(new Y("#8796bb"),Math.pow(1-i,1.6)*0.6),roughness:0.9,metalness:0});return s.onBeforeCompile=(r)=>{r.uniforms.uT={value:i},r.uniforms.uLen={value:n},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uT;
uniform float uLen;
varying vec3 vFurP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vFurP = position;
        transformed += normalize(objectNormal) * uLen * uT;
        transformed.y -= uLen * uT * uT * 0.18; // a little droop (glTF is Y-up)`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uT;
        varying vec3 vFurP;
        float furHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        vec3 cell = vFurP * 340.0;
        vec3 id = floor(cell);
        float h = furHash(id);
        float r = length(fract(cell) - 0.5);
        if (uT > 0.0 && (h < pow(uT, 1.5) * 0.92 || r > 0.72 * (1.0 - uT * 0.62))) discard;`)},s.customProgramCacheKey=()=>`fur-${e}-${t}`,s}function d1(e,t=h1){let n=0,i=[];e.traverse((s)=>{if(s.isMesh&&s.name.startsWith("fur_"))i.push(s)});for(let s of i){let r=Number(s.userData.furLength??0.04)*0.9,o=s;for(let a=1;a<=t;a++){let l=o.isSkinnedMesh?new Wr(s.geometry,K0(a,t,r)):new Qe(s.geometry,K0(a,t,r));if(l.name=`${s.name}__shell${a}`,l.renderOrder=a,l.frustumCulled=!1,o.isSkinnedMesh)l.bind(o.skeleton,o.bindMatrix),l.position.copy(s.position),l.quaternion.copy(s.quaternion),l.scale.copy(s.scale),s.parent.add(l);else s.add(l);n++}}return n}function f1(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}async function Z0(e,t){if(!f1())throw Error("WebGL 2 ist auf diesem Gerät nicht verfügbar");let n=document.createElement("canvas");n.className="p3d-gl",n.setAttribute("data-testid","premium-canvas"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;touch-action:none;outline:none";let i=new sr({canvas:n,antialias:!0,alpha:!0,preserveDrawingBuffer:!!t.qa});i.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),i.toneMapping=li,i.toneMappingExposure=0.95,i.outputColorSpace=xn,i.setClearColor(0,0),e.appendChild(n);let s=new ci,r=new Oi(i),o=Hl(),a=r.fromScene(o.scene,0.04);o.dispose(),s.environment=a.texture,s.environmentIntensity=0.65,s.add(new jr(new Y("#d6ecff"),new Y("#2a1f48"),0.8));let l=new Cn(new Y("#fff1e0"),2.1);l.position.set(-2.4,4,3.6);let c=new Cn(new Y("#3fe0d6"),2.8);c.position.set(-3.2,2.4,-2.8);let h=new Cn(new Y("#9a7bff"),2);h.position.set(3,1.6,-3);let d=new Cn(new Y("#ffffff"),0.5);d.position.set(0,1,5),s.add(l,c,h,d);let f=await new Du().register((H)=>(H.textureLoader=new Kr(H.options.manager),{name:"one_ascend_img_textures"})).parseAsync(t.glb,""),m=f.scene;m.traverse((H)=>{let Z=H;if(!Z.isMesh)return;let ee=Z.material;if(ee?.name==="nuri_skin")ee.color=new Y("#c9d3ea")});let v=t.fur===!1?0:d1(m);s.add(m);let p=new An().setFromObject(m),g=p.getSize(new R),_=p.getCenter(new R),b=new Zt(30,1,0.05,50),y=g.y*2.4;b.position.set(_.x-y*0.42,_.y+g.y*0.08,_.z+y*0.9);let S=new rr(b,n);S.target.copy(_),S.enablePan=!1,S.enableDamping=!0,S.minDistance=y*0.55,S.maxDistance=y*1.6,S.autoRotate=!t.reducedMotion&&!t.qa,S.autoRotateSpeed=0.8,S.addEventListener("start",()=>S.autoRotate=!1);let T=new Sl(m),x=new Map;for(let H of f.animations){let Z=T.clipAction(H);Z.setLoop(u1.has(H.name)?Mh:bh,1/0),Z.clampWhenFinished=!0,x.set(H.name,Z)}let M=null,E="",L=(H)=>{let Z=x.get(H)??x.get("idle");if(!Z)return;if(E=Z.getClip().name,Z.reset(),Z.enabled=!0,Z.setEffectiveWeight(1),t.qa||t.reducedMotion)T.stopAllAction();else if(M&&M!==Z)Z.crossFadeFrom(M,0.25,!1);if(Z.play(),M=Z,t.reducedMotion)T.update(0)};T.addEventListener("finished",()=>L("idle")),L(t.clip??"idle");let I=()=>{let H=Math.max(1,e.clientWidth),Z=Math.max(1,e.clientHeight);i.setSize(H,Z,!1),b.aspect=H/Z,b.updateProjectionMatrix()};I();let z=new ResizeObserver(I);z.observe(e);let W=!1,P=0,X=performance.now(),G=(H)=>{if(W)return;P=requestAnimationFrame(G);let Z=Math.min(0.05,(H-X)/1000);if(X=H,!e.isConnected){q.dispose();return}if(!t.reducedMotion&&!t.qa)T.update(Z);S.update(),i.render(s,b)};P=requestAnimationFrame(G),i.render(s,b),t.onStatus?.("ready");let F=0,K=0;m.traverse((H)=>{let Z=H;if(Z.isMesh&&!Z.name.includes("__shell")){F++;let ee=Z.geometry.index;K+=(ee?ee.count:Z.geometry.attributes.position.count)/3}});let q={clips:[...x.keys()],get clip(){return E},play:L,rotateBy(H){let Z=b.position.clone().sub(S.target);Z.applyAxisAngle(new R(0,1,0),H),b.position.copy(S.target).add(Z),S.autoRotate=!1},seek(H){if(M)M.time=H,T.update(0);i.render(s,b)},probe(){i.render(s,b);let H=i.getContext(),{drawingBufferWidth:Z,drawingBufferHeight:ee}=H,J=new Uint8Array(4),ae=0,Ae=0;for(let Ne=1;Ne<12;Ne++)for(let Oe=1;Oe<12;Oe++)if(H.readPixels(Math.floor(Oe/12*Z),Math.floor(Ne/12*ee),1,1,H.RGBA,H.UNSIGNED_BYTE,J),Ae++,J[3]>10&&J[0]+J[1]+J[2]>60)ae++;return{lit:ae,total:Ae}},stats:{meshes:F,triangles:Math.round(K),shells:v},get disposed(){return W},dispose(){if(W)return;W=!0,cancelAnimationFrame(P),z.disconnect(),S.dispose(),T.stopAllAction(),m.traverse((H)=>{let Z=H;if(!Z.isMesh)return;if(!Z.name.includes("__shell"))Z.geometry.dispose();let ee=Array.isArray(Z.material)?Z.material:[Z.material];for(let J of ee)J.dispose()}),a.dispose(),r.dispose(),i.dispose(),i.forceContextLoss(),n.remove()}};if(t.qa){let H=window;H.__ONE_ASCEND_PREMIUM_QA__=q,H.__ONE_ASCEND_PREMIUM_MODEL__=m}return q}var la={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ie(0.0009765625,0.001953125)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ca={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ie(0.0009765625,0.001953125)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Wl={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ie(0.0009765625,0.001953125)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class Ou extends Wn{constructor(){super();this._edgesRT=new Yt(1,1,{depthBuffer:!1,type:$t}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Yt(1,1,{depthBuffer:!1,type:$t}),this._weightsRT.texture.name="SMAAPass.weights";let e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Wt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=sn,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;let n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Wt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=Hn,this._searchTexture.minFilter=Hn,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=ei.clone(la.uniforms),this._materialEdges=new At({defines:Object.assign({},la.defines),uniforms:this._uniformsEdges,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader}),this._uniformsWeights=ei.clone(ca.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new At({defines:Object.assign({},ca.defines),uniforms:this._uniformsWeights,vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader}),this._uniformsBlend=ei.clone(Wl.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new At({uniforms:this._uniformsBlend,vertexShader:Wl.vertexShader,fragmentShader:Wl.fragmentShader}),this._fsQuad=new es(null)}render(e,t,n){if(this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear)e.clear();if(this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear)e.clear();if(this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear();this._fsQuad.render(e)}}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}var p1={name:"KkGrade",uniforms:{tDiffuse:{value:null},uVig:{value:0.22}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uVig;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = (vUv - 0.5) * vec2(1.0, 1.1);
      float v = 1.0 - uVig * smoothstep(0.28, 0.85, length(d));
      vec3 col = c.rgb * v;
      // violet in the deep shadows (the painting never goes neutral black)
      col += vec3(0.035, 0.02, 0.07) * (1.0 - smoothstep(0.0, 0.25, dot(col, vec3(0.333))));
      gl_FragColor = vec4(col, 1.0);
    }
  `};function j0(e,t,n,i){let s=new Yt(1,1,{type:$t,samples:i.msaa?4:0});s.texture.name="kk-post-rt";let r=new Qo(e,s);r.addPass(new $o(t,n));let o=new ts(new ie(256,256),i.bloom[0],i.bloom[1],i.bloom[2]);if(r.addPass(o),r.addPass(new ta),!i.msaa)r.addPass(new Ou);return r.addPass(new Jo(p1)),{render(){r.render()},setSize(a,l,c){r.setPixelRatio(c),r.setSize(a,l)},get passes(){return r.passes.length},dispose(){for(let a of r.passes)a.dispose();r.dispose(),s.dispose()}}}function J0(e,t){let n=new Gt({name:"kk-crystal-phys",color:new Y(t.b).lerp(new Y("#ffffff"),0.15),metalness:0,roughness:0.2,transmission:t.transmission??0.4,thickness:0.09,ior:1.62,dispersion:0.9,attenuationColor:new Y(t.a),attenuationDistance:0.06,iridescence:0.7,iridescenceIOR:1.38,iridescenceThicknessMinimum:220,iridescenceThicknessMaximum:560,specularIntensity:0.7,envMapIntensity:1,side:Jt,flatShading:!0}),i={uA:{value:new Y(t.a)},uB:{value:new Y(t.b)},uC:{value:new Y(t.c)},uCore:{value:new Y(t.core??"#62f0ff")},uEmit:{value:t.emissive??0.55},uStars:{value:t.stars??1},uTime:e};return n.userData.uniforms=i,n.onBeforeCompile=(s)=>{Object.assign(s.uniforms,i),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 aCrys; varying vec4 vCrys; varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCrys = aCrys; vObj = position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform vec3 uCore; uniform float uEmit; uniform float uStars;
uniform float uTime;
varying vec4 vCrys; varying vec3 vObj;
float kkHash(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
vec3 kkTint() {
  vec3 base = mix(uA, uB, smoothstep(0.0, 0.55, vCrys.x));
  base = mix(base, uC, smoothstep(0.62, 1.0, vCrys.x) * 0.65);
  base = mix(base, uC, step(0.72, kkHash(floor(vObj * 40.0) + vCrys.w)) * 0.45); // pink facets
  return mix(base, uC, smoothstep(0.6, 0.88, vCrys.z) * 0.6);
}`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb *= mix(vec3(1.0), kkTint() * 1.6 + 0.15, 0.75);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
{
  vec3 base = kkTint();
  float facet = kkHash(floor(normal * 7.0 + 11.0) + vCrys.w * 13.0);
  base = mix(base, uC, step(0.8, facet) * 0.5);
  base = mix(base, vec3(0.05, 0.6, 1.0), step(facet, 0.16) * 0.4);
  vec3 em = base * uEmit * (0.6 + 0.7 * facet);
  em += uCore * vCrys.y * vCrys.y * 1.6;
  vec3 sp = vObj * 80.0 + vCrys.w * 31.0;
  vec3 si = floor(sp);
  float sh = kkHash(si);
  float sd = length(fract(sp) - 0.5);
  float tw = 0.6 + 0.4 * sin(uTime * (1.5 + sh * 3.0) + sh * 40.0);
  float star = step(0.9, sh) * tw * uStars * (smoothstep(0.22, 0.0, sd) * 1.4 + smoothstep(0.5, 0.0, sd) * 0.3);
  em += vec3(1.0, 0.95, 1.0) * star * 5.0;
  totalEmissiveRadiance += em;
}`)},n}function Q0(){let e=new ci,t=new Qe(new Ss(12,8,12),new zt({color:new Y("#140f33"),side:nn}));t.position.y=2,e.add(t);let n=(s,r,o,a,l)=>{let c=new Qe(new rn(o,a),new zt({color:new Y(s).multiplyScalar(r),side:Jt}));c.position.set(...l),c.lookAt(0,0.9,0),e.add(c)};n("#fff1ea",3.2,2.6,2.2,[-2.6,3.4,3.2]),n("#5fe3ff",5,0.7,4,[-4.2,1.6,-2.6]),n("#b98cff",5,0.7,4,[4.2,1.8,-2.4]),n("#bcaeff",1.2,6,6,[0,5.8,0]),n("#7a4dff",0.9,8,8,[0,-1.5,0]);let i=new Qe(new Ut(0.4,12,8),new zt({color:new Y("#ff7ade").multiplyScalar(3)}));return i.position.set(2.8,0.6,3),e.add(i),e}function $0(e){e.traverse((t)=>{let n=t;if(n.isMesh)n.geometry.dispose(),n.material.dispose()})}function ql(e,t,n,i,s=1){let r=e.indices.length/3,o=new Float64Array(r),a=0,l=e.positions;for(let u=0;u<r;u++){let f=e.indices[u*3],m=e.indices[u*3+1],v=e.indices[u*3+2],p=l[m*3]-l[f*3],g=l[m*3+1]-l[f*3+1],_=l[m*3+2]-l[f*3+2],b=l[v*3]-l[f*3],y=l[v*3+1]-l[f*3+1],S=l[v*3+2]-l[f*3+2],T=0.5*Math.hypot(g*S-_*y,_*b-p*S,p*y-g*b),x=(t.lock[f*4]+t.lock[m*4]+t.lock[v*4])/3;a+=T*Math.max(0,x),o[u]=a}let c={count:0,root:new Float32Array(n*3),dir:new Float32Array(n*3),nrm:new Float32Array(n*3),shape:new Float32Array(n*4),rig:new Float32Array(n*4),col:new Float32Array(n*3)};if(a<=0||n<=0)return c;let h=(u,f,m,v,p,g,_)=>u[v*f+m]*_[0]+u[p*f+m]*_[1]+u[g*f+m]*_[2],d=0;for(let u=0;u<n;u++){let f=(u+i())/n*a,m=0,v=r-1;while(m<v){let ze=m+v>>1;if(o[ze]<f)m=ze+1;else v=ze}let p=m,g=e.indices[p*3],_=e.indices[p*3+1],b=e.indices[p*3+2],y=Math.sqrt(i()),S=i(),T=[1-y,y*(1-S),y*S],x=(ze,ot,se)=>h(ze,ot,se,g,_,b,T),M=x(e.normals,3,0),E=x(e.normals,3,1),L=x(e.normals,3,2),I=Math.hypot(M,E,L)||1;M/=I,E/=I,L/=I;let z=x(t.comb,3,0),W=x(t.comb,3,1),P=x(t.comb,3,2),X=z*M+W*E+P*L;z-=M*X,W-=E*X,P-=L*X;let G=Math.hypot(z,W,P);if(G<0.00001)z=0,W=-1,P=0,G=1;z/=G,W/=G,P/=G;let F=(i()-0.5)*0.55,K=E*P-L*W,q=L*z-M*P,H=M*W-E*z,Z=Math.cos(F),ee=Math.sin(F),J=z*Z+K*ee,ae=W*Z+q*ee,Ae=P*Z+H*ee,Ne=x(t.fur,4,0),Oe=x(t.lock,4,1)*s*(0.78+0.44*i());if(Oe<0.012)continue;let Ce=x(t.lock,4,2)*(0.7+0.6*i()),lt=Oe*x(t.lock,4,3)*(0.82+0.36*i()),He=Ne*0.3;c.root.set([x(e.positions,3,0)+M*He,x(e.positions,3,1)+E*He,x(e.positions,3,2)+L*He],d*3),c.dir.set([J,ae,Ae],d*3),c.nrm.set([M,E,L],d*3),c.shape.set([Oe,lt,Ce,i()],d*4),c.rig.set([x(t.fur,4,1),x(t.fur,4,3),x(t.ao,1,0),x(t.fur,4,2)],d*4),c.col.set([x(t.col,3,0),x(t.col,3,1),x(t.col,3,2)],d*3),d++}return c.count=d,c}var Xl=7,no=3,OE=(Xl-1)*(no-1)*2;function m1(){let e=[],t=[];for(let i=0;i<Xl;i++){let s=i/(Xl-1);for(let r=0;r<no;r++)e.push(r/(no-1)*2-1,s,0)}for(let i=0;i<Xl-1;i++)for(let s=0;s<no-1;s++){let r=i*no+s,o=r+1,a=r+no,l=a+1;t.push(r,o,l,r,l,a)}let n=new gt;return n.setAttribute("position",new Ge(e,3)),n.setIndex(t),n}function Fu(e){let t=m1(),n=new Jr;n.index=t.index,n.setAttribute("position",t.getAttribute("position"));let i=e.reduce((r,o)=>r+o.count,0),s=(r,o)=>{let a=new Float32Array(i*o),l=0;for(let c of e)a.set(c[r].subarray(0,c.count*o),l),l+=c.count*o;return new ai(a,o)};return n.setAttribute("iRoot",s("root",3)),n.setAttribute("iDir",s("dir",3)),n.setAttribute("iNrm",s("nrm",3)),n.setAttribute("iShape",s("shape",4)),n.setAttribute("iRig",s("rig",4)),n.setAttribute("iCol",s("col",3)),n.instanceCount=i,n}function Un(e,t,n){let i=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-i*i*n*0.25}function em(e,t,n){let i=Math.max(n-Math.abs(-t-e),0)/n;return Math.max(e,-t)+i*i*n*0.25}function Bn(e,t,n,i,s){let r=(e-i[0])/s[0],o=(t-i[1])/s[1],a=(n-i[2])/s[2],l=Math.sqrt(r*r+o*o+a*a),c=r/s[0],h=o/s[1],d=a/s[2],u=Math.sqrt(c*c+h*h+d*d);if(u<0.000000001)return-Math.min(s[0],s[1],s[2]);return l*(l-1)/u}function Uu(e,t,n,i,s,r,o,a){let l=s[0]-i[0],c=s[1]-i[1],h=s[2]-i[2],d=e-i[0],u=t-i[1],f=n-i[2],m=l*l+c*c+h*h,v=Math.max(0,Math.min(1,(d*l+u*c+f*h)/m));if(a)a[0]=v;let p=d-l*v,g=u-c*v,_=f-h*v;return Math.sqrt(p*p+g*g+_*_)-(r+(o-r)*v)}function Ds(e,t,n,i,s=0.002){let r=e(t+s,n,i)-e(t-s,n,i),o=e(t,n+s,i)-e(t,n-s,i),a=e(t,n,i+s)-e(t,n,i-s),l=Math.hypot(r,o,a)||1;return[r/l,o/l,a/l]}function Yl(e,t,n,i){let s=Math.ceil((n[0]-t[0])/i)+1,r=Math.ceil((n[1]-t[1])/i)+1,o=Math.ceil((n[2]-t[2])/i)+1,a=new Float32Array(s*r*o),l=(_,b,y)=>_+s*(b+r*y);for(let _=0;_<o;_++)for(let b=0;b<r;b++)for(let y=0;y<s;y++)a[l(y,b,_)]=e(t[0]+y*i,t[1]+b*i,t[2]+_*i);let c=new Int32Array((s-1)*(r-1)*(o-1)).fill(-1),h=(_,b,y)=>_+(s-1)*(b+(r-1)*y),d=[],u=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],f=new Float32Array(8);for(let _=0;_<o-1;_++)for(let b=0;b<r-1;b++)for(let y=0;y<s-1;y++){let S=0;for(let G=0;G<8;G++){let F=a[l(y+(G&1),b+(G>>1&1),_+(G>>2&1))];if(f[G]=F,F<0)S|=1<<G}if(S===0||S===255)continue;let T=0,x=0,M=0,E=0;for(let[G,F]of u){let K=f[G],q=f[F];if(K<0===q<0)continue;let H=K/(K-q);T+=(G&1)+((F&1)-(G&1))*H,x+=(G>>1&1)+((F>>1&1)-(G>>1&1))*H,M+=(G>>2&1)+((F>>2&1)-(G>>2&1))*H,E++}let L=t[0]+(y+T/E)*i,I=t[1]+(b+x/E)*i,z=t[2]+(_+M/E)*i,W=e(L,I,z),P=Ds(e,L,I,z,i*0.25),X=Math.max(-i,Math.min(i,W));L-=P[0]*X,I-=P[1]*X,z-=P[2]*X,c[h(y,b,_)]=d.length/3,d.push(L,I,z)}let m=[],v=(_,b,y,S,T)=>{if(_<0||b<0||y<0||S<0)return;if(T)m.push(_,y,b,_,S,y);else m.push(_,b,y,_,y,S)};for(let _=1;_<o-1;_++)for(let b=1;b<r-1;b++)for(let y=1;y<s-1;y++){let S=a[l(y,b,_)]<0;if(y<s-1&&S!==a[l(y+1,b,_)]<0)v(c[h(y,b-1,_-1)],c[h(y,b,_-1)],c[h(y,b,_)],c[h(y,b-1,_)],!S);if(b<r-1&&S!==a[l(y,b+1,_)]<0)v(c[h(y-1,b,_-1)],c[h(y-1,b,_)],c[h(y,b,_)],c[h(y,b,_-1)],!S);if(_<o-1&&S!==a[l(y,b,_+1)]<0)v(c[h(y-1,b-1,_)],c[h(y,b-1,_)],c[h(y,b,_)],c[h(y-1,b,_)],!S)}let p=new Float32Array(d),g=new Float32Array(d.length);for(let _=0;_<d.length;_+=3){let b=Ds(e,d[_],d[_+1],d[_+2],i*0.5);g[_]=b[0],g[_+1]=b[1],g[_+2]=b[2]}return{positions:p,normals:g,indices:new Uint32Array(m)}}function tm(e,t,n=0.12,i=4){let s=t.positions.length/3,r=new Float32Array(s);for(let o=0;o<s;o++){let a=t.positions[o*3],l=t.positions[o*3+1],c=t.positions[o*3+2],h=t.normals[o*3],d=t.normals[o*3+1],u=t.normals[o*3+2],f=0,m=1;for(let v=1;v<=i;v++){let p=n*v/i,g=e(a+h*p,l+d*p,c+u*p);f+=m*Math.max(0,p-g),m*=0.6}r[o]=Math.max(0,Math.min(1,1-f*2.6/n))}return r}function Kl(e,t,n,i=3){let s=0;for(let r=0;r<160&&s<i;r++){let o=[t[0]+n[0]*s,t[1]+n[1]*s,t[2]+n[2]*s],a=e(o[0],o[1],o[2]);if(a<0.0005)return o;s+=Math.max(a*0.8,0.0005)}return null}function Ns(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var Ei=[0,0.95,0.04],fi=[0,0.97,0.06],zn=1.17,os=(e)=>[fi[0]+(e[0]-fi[0])*zn,fi[1]+(e[1]-fi[1])*zn,fi[2]+(e[2]-fi[2])*zn];function g1(e,t,n){let i=Math.abs(e),s=Bn(e,t,n,[0,1.15,0.065],[0.29,0.255,0.262]);return s=Un(s,Bn(i,t,n,[0.19,1.035,0.07],[0.22,0.165,0.17]),0.1),s=Un(s,Bn(e,t,n,[0,1.048,0.3],[0.098,0.066,0.092]),0.06),s=Un(s,Bn(e,t,n,[0,0.995,0.262],[0.072,0.046,0.074]),0.05),s}function as(e,t,n){let i=1/zn;return g1(fi[0]+(e-fi[0])*i,fi[1]+(t-fi[1])*i,fi[2]+(n-fi[2])*i)*zn}function Bu(e,t,n){let i=Math.abs(e),s=Bn(e,t,n,[0,0.84,0.1],[0.27,0.2,0.22]);s=Un(s,Bn(e,t,n,[0,0.9,-0.1],[0.25,0.21,0.2]),0.1),s=Un(s,Bn(e,t,n,[0,0.53,-0.06],[0.285,0.32,0.3]),0.12),s=Un(s,Bn(i,t,n,[0.195,0.22,-0.15],[0.21,0.23,0.28]),0.1),s=Un(s,Uu(i,t,n,[0.1,0.6,0.14],[0.098,0.08,0.19],0.075,0.062),0.06);let r=Bn(i,t,n,[0.1,0.045,0.22],[0.074,0.048,0.084]);for(let a of[-0.035,0,0.035])r=Un(r,Bn(i,t,n,[0.1+a,0.036,0.286],[0.025,0.031,0.027]),0.018);s=Un(s,r,0.03);let o=Bn(i,t,n,[0.265,0.045,0.05],[0.074,0.046,0.115]);for(let a of[-0.03,0,0.03])o=Un(o,Bn(i,t,n,[0.265+a,0.036,0.15],[0.024,0.03,0.026]),0.018);return s=Un(s,o,0.05),s}function pr(e,t,n){let i=Un(as(e,t,n),Bu(e,t,n),0.13);return Math.max(i,-t)}var fr=[[0.05,0.17,-0.34],[0.28,0.12,-0.45],[0.5,0.12,-0.23],[0.56,0.17,0.04],[0.52,0.3,0.2],[0.43,0.45,0.22]],nm=[0.075,0.115,0.135,0.135,0.115,0.07],sm=[0.3,0.14,-0.4],im=[0];function zu(e,t,n){let i=1e9,s=0,r=1e9,o=fr.length-1;for(let a=0;a<o;a++){let l=Uu(e,t,n,fr[a],fr[a+1],nm[a],nm[a+1],im);if(l<r)r=l,s=(a+im[0])/o;i=a===0?l:Un(i,l,0.06)}return[Math.max(i,-t),s]}var Zl=(e,t,n)=>zu(e,t,n)[0],pi=0.47,x1=0.15,rm=0.28;function v1(e,t,n,i){e=Math.abs(e);let s=n*n+i*i,r=Math.max(0,Math.min(1,(e*n+t*i)/s)),o=e-n*r,a=t-i*r,l=Math.max(0,Math.min(1,e/n)),c=e-n*l,h=t-i,d=-Math.sign(i),u=Math.min(o*o+a*a,c*c+h*h),f=Math.min(d*(e*i-t*n),d*(t-i));return-Math.sqrt(u)*Math.sign(f)}function om(e,t,n){let i=n+rm*(t/pi)*(t/pi)*0.22,r=v1(e,pi-t,x1,pi)+0.012,o=Math.abs(i)-0.014,a=Math.min(Math.max(r,o),0)+Math.hypot(Math.max(r,0),Math.max(o,0))-0.022,l=Bn(e,t,i,[0,0.12,-0.035],[0.11,0.2,0.055]),c=Bn(e,t,i,[0,0.2,0.055],[0.112,0.25,0.05]);return em(Un(a,l,0.05),c,0.02)}var y1=(e)=>-rm*(e/pi)*(e/pi)*0.22;function jl(e){let t=[],n=[],i=[],s=[];for(let o of e){t.push(...o.p),s.push(1,0,0,0,1,0,0,0,1);let[a,l,c,h,d,u,f,m,v]=o.p,p=h-a,g=d-l,_=u-c,b=f-a,y=m-l,S=v-c,T=g*S-_*y,x=_*b-p*S,M=p*y-g*b,E=Math.hypot(T,x,M)||1;T/=E,x/=E,M/=E;for(let L=0;L<3;L++)i.push(T,x,M);n.push(...o.c)}let r=new gt;return r.setAttribute("position",new Ge(t,3)),r.setAttribute("normal",new Ge(i,3)),r.setAttribute("aCrys",new Ge(n,4)),r.setAttribute("aBary",new Ge(s,3)),r}function Gu(e,t,n,i,s=0.6){let r=Ns(i),o=[0,t,0],a=[0,-t,0],l=[];for(let d=0;d<6;d++){let u=d/6*Math.PI*2;l.push([Math.cos(u)*e*(0.9+r()*0.2),(r()-0.5)*t*0.15,Math.sin(u)*n])}let c=[],h=(d)=>[(d[1]+t)/(2*t),s*(1-Math.abs(d[1])/t),0.1,i%97];for(let d=0;d<6;d++){let u=(d+1)%6;for(let[f,m,v]of[[o,l[u],l[d]],[a,l[d],l[u]]])c.push({p:[...f,...m,...v],c:[...h(f),...h(m),...h(v)]})}return jl(c)}function am(e,t){let n=Ns(t),i=18,s=e/32,r=[];for(let u=0;u<18;u++){let f=u/18*Math.PI*2,m=16*Math.sin(f)**3,v=13*Math.cos(f)-5*Math.cos(2*f)-2*Math.cos(3*f)-Math.cos(4*f);r.push([m*s,(v+2)*s,0])}let o=r.map((u)=>[u[0]*0.55+(n()-0.5)*e*0.04,u[1]*0.55+(n()-0.5)*e*0.04,e*0.16+n()*e*0.04]),a=[-e*0.04,e*0.06,e*0.26],l=[0,e*0.05,-e*0.12],c=[],h=(u,f)=>[0.5-u[1]/e,f,0.2,t%97],d=(u,f,m,v,p,g)=>c.push({p:[...u,...f,...m],c:[...h(u,v),...h(f,p),...h(m,g)]});for(let u=0;u<18;u++){let f=(u+1)%18;d(r[u],r[f],o[f],0,0,0.55),d(r[u],o[f],o[u],0,0.55,0.55),d(o[u],o[f],a,0.55,0.55,1),d(r[f],r[u],l,0,0,0.2)}return jl(c)}function Jl(e,t,n,i,s=0,r=0){let o=Ns(i),l=[0,0.1,0.26,0.44,0.62,0.8,0.92].map((v)=>{let p=Math.pow(Math.max(0,Math.sin(Math.PI*(0.13+0.87*v))),0.75)*t,g=n*(0.55+0.45*Math.sin(Math.PI*(0.1+0.9*v))),_=v*e,b=(o()-0.5)*p*0.22,y=()=>0.88+o()*0.24;return[[-p,_+(o()-0.5)*e*0.03,0],[-p*0.5*y(),_,g*0.62*y()],[b,_,g],[p*0.5*y(),_,g*0.62*y()],[p,_+(o()-0.5)*e*0.03,0],[p*0.5*y(),_,-g*0.62*y()],[b,_,-g],[-p*0.5*y(),_,-g*0.62*y()]]}),c=[(o()-0.5)*t*0.15,e,0],h=[0,-e*0.03,0],d=[],u=(v)=>{let p=Math.max(0,Math.min(1,v[1]/e));return[p,r*(1-p)*(1-p),s,i%97]},f=(v,p,g)=>d.push({p:[...v,...p,...g],c:[...u(v),...u(p),...u(g)]}),m=l.length;for(let v=0;v<8;v++){let p=(v+1)%8;f(h,l[0][p],l[0][v]);for(let g=0;g<m-1;g++){let _=l[g],b=l[g+1];f(_[v],_[p],b[p]),f(_[v],b[p],b[v])}f(l[m-1][v],l[m-1][p],c)}return jl(d)}function lm(e){let t=Ns(e),n=[[-0.072,0.02,-0.108,0.175,0.036,0.1,0.85,0],[0.072,0.02,0.108,0.175,0.036,0.1,0.9,0],[-0.046,0.03,-0.074,0.305,0.04,0.35,0.68,0.004],[0.046,0.03,0.074,0.305,0.04,0.35,0.72,0.004],[-0.02,0.05,-0.032,0.405,0.036,0.6,0.5,0.008],[0.02,0.05,0.032,0.405,0.036,0.6,0.55,0.008],[0,0.03,0,0.435,0.042,1,0.3,0.012],[0,0.02,0.006,0.23,0.052,0.95,0.2,0.017],[-0.032,0.02,-0.052,0.145,0.03,0.7,0.4,0.015],[0.032,0.02,0.052,0.145,0.03,0.7,0.45,0.015]],i=[];for(let[s,r,o,a,l,c,h,d]of n){let u=e%97+t()*20,f=(W,P,X)=>[W,P,y1(P)+0.008+d+X],m=o-s,v=a-r,p=Math.hypot(m,v),g=-v/p,_=m/p,b=0.38+t()*0.1,y=s+m*b,S=r+v*b,T=f(s,r,0),x=f(o,a,0.002),M=f(y+g*l,S+_*l,0.004),E=f(y-g*l,S-_*l,0.004),L=f(y+g*l*(t()-0.5)*0.5,S+0.01,0.02+t()*0.008),I=(W)=>{let P=Math.max(0,Math.min(1,(W[1]-r)/(a-r)));return[P,c*(1-P*0.7),h,u]},z=(W,P,X)=>i.push({p:[...W,...P,...X],c:[...I(W),...I(P),...I(X)]});z(T,E,L),z(T,L,M),z(L,E,x),z(M,L,x)}return jl(i)}function cm(){return{uKeyDir:{value:new R(-0.45,0.62,0.64).normalize()},uKeyCol:{value:new Y("#fff1ea").multiplyScalar(1.2)},uRimDirA:{value:new R(-0.85,0.25,-0.45).normalize()},uRimColA:{value:new Y("#5fe3ff").multiplyScalar(0.9)},uRimDirB:{value:new R(0.85,0.35,-0.4).normalize()},uRimColB:{value:new Y("#b98cff").multiplyScalar(1.15)},uSkyCol:{value:new Y("#bcaeff").multiplyScalar(0.46)},uGroundCol:{value:new Y("#5a3fa6").multiplyScalar(0.3)},uTime:{value:0}}}function hm(){return{uHead:{value:new Je},uTail:{value:new Pt},uTailPivot:{value:new R},uBreath:{value:0},uGrav:{value:0.35}}}var um=`
float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
`,io=`
uniform vec3 uKeyDir; uniform vec3 uKeyCol;
uniform vec3 uRimDirA; uniform vec3 uRimColA;
uniform vec3 uRimDirB; uniform vec3 uRimColB;
uniform vec3 uSkyCol; uniform vec3 uGroundCol;
uniform float uTime;
vec3 hemi(vec3 N) {
  vec3 up = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
  return mix(uGroundCol, uSkyCol, dot(N, up) * 0.5 + 0.5);
}
${um}
`,ku=`
uniform mat4 uHead; uniform vec4 uTail; uniform vec3 uTailPivot; uniform float uBreath; uniform float uGrav;
vec3 rotY(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(c * v.x + s * v.z, v.y, -s * v.x + c * v.z); }
vec3 rotX(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x, c * v.y - s * v.z, s * v.y + c * v.z); }
// soft rig: x = head weight, y = tail parameter (0 = no tail); applied to a point and a direction
void rig(inout vec3 p, inout vec3 n, float headW, float tailT) {
  if (tailT > 0.0) {
    float a = uTail.x * pow(tailT, 1.4) + uTail.z * pow(tailT, 3.0);
    float b = uTail.y * pow(tailT, 2.0);
    vec3 q = rotY(rotX(p - uTailPivot, b), a);
    p = q + uTailPivot;
    n = rotY(rotX(n, b), a);
  }
  if (headW > 0.0) {
    vec3 ph = (uHead * vec4(p, 1.0)).xyz;
    vec3 nh = mat3(uHead) * n;
    p = mix(p, ph, headW);
    n = normalize(mix(n, nh, headW));
  }
}
`,dm=`
// V3.32: two-lobe Kajiya-Kay sheen along the strand (white primary, lavender shifted secondary), scaled by \`sheen\`
// (the lock shading: lock bodies shine, the shadowed roots between locks do not)
vec3 furLight(vec3 alb, vec3 N, vec3 V, vec3 T, float t, float ao, vec3 Ns, float sheen) {
  float nl = dot(N, uKeyDir);
  float diff = clamp((nl + 0.35) / 1.35, 0.0, 1.0);
  diff = diff * diff * (3.0 - 2.0 * diff);
  vec3 H = normalize(uKeyDir + V);
  float th = dot(T, H);
  float s1 = pow(sqrt(max(0.0, 1.0 - th * th)), 70.0);
  float th2 = dot(normalize(T + N * 0.22), H);
  float s2 = pow(sqrt(max(0.0, 1.0 - th2 * th2)), 14.0);
  float fres = pow(1.0 - abs(dot(Ns, V)), 2.5);
  vec3 rim = uRimColA * smoothstep(-0.2, 0.9, dot(Ns, uRimDirA)) + uRimColB * smoothstep(-0.2, 0.9, dot(Ns, uRimDirB));
  vec3 col = alb * (hemi(N) + uKeyCol * diff) * ao;
  col += alb * rim * fres * 0.9;
  col += (uKeyCol * s1 * 0.16 + vec3(0.78, 0.7, 1.0) * s2 * 0.09) * sheen * (0.4 + 0.6 * diff);
  // light scattered through the fur tips (soft, slightly violet) – reads as fluff against the dark backdrop
  col += (uRimColA * 0.35 + uRimColB * 0.55) * fres * 0.22;
  return col;
}
// V3.32: soft alpha edges – alpha-to-coverage when the stage has MSAA (real GPUs), else an ordered dither
// (interleaved gradient noise; supersampled renders and high-DPI screens average it into a soft edge)
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
void coverage(float cov) {
#ifdef A2C
  if (cov < 0.02) discard;
#else
  if (cov < mix(0.2, 0.8, ign(gl_FragCoord.xy))) discard;
#endif
}
`,_1=`
float lockShade(vec3 q, vec3 cd, vec3 ld, float F, out float crease) {
  // columns of locks across the comb (wavy), every column shifted along the comb by its own amount (staggered)
  float l = dot(q, ld) * F * 1.4 + (vnoise(q * F * 0.45 + 9.0) - 0.5) * 2.2;
  float col = floor(l);
  float u = fract(l) - 0.5;
  float hc = hash13(vec3(col, 2.3, 5.9));
  float a = dot(q, cd) * F + (vnoise(q * F * 0.6 + 4.0) - 0.5) * 1.5 + hc * 0.8;
  // pointed lock tips (V-shaped like the painted locks): the lock's flanks end earlier than its middle
  float v = fract(a) + abs(u) * 1.25 + u * u * 0.6;
  v = v > 1.0 ? v - 1.0 : v;
  float h = hash13(vec3(floor(a), col, 7.3));
  float w = clamp(fwidth(a) * 1.6, 0.05, 0.35);
  crease = smoothstep(0.5, 0.32, abs(u));
  return smoothstep(0.0, 0.75, v) * smoothstep(1.0, 1.0 - w, v) * (0.75 + 0.45 * h);
}
`;function Hu(e,t,n){return new At({name:"kk-fur-shell",defines:n.a2c?{A2C:1}:{},alphaToCoverage:!!n.a2c,uniforms:{...e,...t,uDensity:{value:n.density},uClump:{value:n.clump},uLock:{value:n.lock??13},uLockAmt:{value:n.lockAmt??1}},vertexShader:`
      ${ku}
      ${um}
      ${Ql}
      attribute vec4 aFur;   // x length, y head weight, z breath weight, w tail parameter
      attribute vec3 aComb;  // comb direction (object space)
      attribute vec3 aCol;   // albedo
      attribute float aAO;
      attribute float aShell; // instanced: 0 = skin … 1 = tips
      uniform float uClump; uniform float uLock;
      varying vec3 vN; varying vec3 vP; varying vec3 vRest; varying vec3 vCol; varying float vT; varying float vAO;
      varying vec3 vTan; varying float vClen; varying vec3 vWarp;
      varying vec3 vCd; varying vec3 vLd; varying float vF;
      void main() {
        // tuft structure from smooth noise (per vertex – continuous, no cell seams)
        vec3 cp = position * uClump;
        vClen = 0.5 + 0.5 * smoothstep(0.2, 0.8, vnoise(cp));
        vWarp = vec3(vnoise(cp * 1.7 + 3.1), vnoise(cp * 1.7 + 7.9), vnoise(cp * 1.7 + 1.7)) - 0.5;
        float t = aShell;
        vec3 n = normalize(normal);
        vec3 cd = aComb / max(1e-4, length(aComb));
        vCd = cd;
        vLd = normalize(cross(n, cd) + vec3(1e-5));
        // short fur (face, paws) → smaller locks
        vF = uLock * clamp(0.055 / max(aFur.x, 0.01), 0.85, 2.2);
        vec3 p = position + n * aFur.z * uBreath;
        vec3 dir = n * t + aComb * (t * t) * 0.85 + vec3(0.0, -uGrav, 0.0) * t * t;
        p += dir * aFur.x;
        vec3 nn = normalize(n + aComb * 0.15);
        vec3 tan = normalize(n + aComb * 1.6 + vec3(0.0, -uGrav, 0.0));
        vec3 tp = p;
        rig(p, nn, aFur.y, aFur.w);
        rig(tp, tan, aFur.y, aFur.w);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vP = mv.xyz;
        vN = normalize(normalMatrix * nn);
        vTan = normalize(normalMatrix * tan);
        vRest = position;
        vCol = aCol;
        vT = t;
        vAO = aAO;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${io}
      ${Ql}
      ${dm}
      ${_1}
      uniform float uDensity; uniform float uLockAmt;
      varying vec3 vN; varying vec3 vP; varying vec3 vRest; varying vec3 vCol; varying float vT; varying float vAO;
      varying vec3 vTan; varying float vClen; varying vec3 vWarp;
      varying vec3 vCd; varying vec3 vLd; varying float vF;
      void main() {
        float t = vT;
        float crease;
        float lk = lockShade(vRest, normalize(vCd), normalize(vLd), vF, crease);
        // V3.35: the lock cards carry the big locks – the shells only hint at them (round 2's lock rows along a
        // downward comb read as faint horizontal bands on the flanks)
        lk = mix(0.75, lk, uLockAmt);
        crease = mix(1.0, crease, uLockAmt);
        // lock tips stand out of the coat (longer strands), the roots between locks sink in
        float clen = vClen * mix(0.8, 1.08, lk) * mix(0.9, 1.0, crease);
        vec3 q = vRest + vWarp * (t * 0.02);
        // rotated + jittered strand cells: no grid lines on axis-aligned surfaces (face, chest)
        vec3 sp = mat3(0.5574, 0.2162, -0.8016, 0.1317, 0.9302, 0.3425, 0.8197, -0.2965, 0.4900) * q * uDensity;
        vec3 si = floor(sp);
        float h = hash13(si);
        vec3 jit = vec3(hash13(si + 1.3), hash13(si + 5.1), hash13(si + 9.7)) - 0.5;
        float cov = 1.0;
        if (t > 0.0) {
          float sl = clen * (0.55 + 0.45 * h);
          float r = length(fract(sp) - 0.5 - jit * 0.35);
          float rad = 0.6 * (1.0 - t / sl) + 0.08;
          cov = smoothstep(rad + 0.14, rad - 0.1, r) * smoothstep(sl, sl - 0.12, t);
          coverage(cov);
        }
        vec3 N = normalize(vN);
        if (!gl_FrontFacing) N = -N;
        vec3 V = normalize(-vP);
        // self-shadowing: lock roots and inner layers darker, lock tips and outer layers lighter
        float self = mix(0.74, 1.07, lk) * mix(0.86, 1.0, crease);
        float ao = mix(0.78, 1.0, t) * mix(0.55, 1.0, vAO) * self;
        vec3 alb = vCol * (0.96 + 0.08 * (h - 0.5));
        vec3 col = furLight(alb, N, V, normalize(vTan), t, ao, N, lk * crease);
        gl_FragColor = vec4(col, 1.0);
#ifdef A2C
        gl_FragColor.a = cov;
#endif
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function fm(e,t,n={}){return new At({name:"kk-fur-lock",side:Jt,defines:n.a2c?{A2C:1}:{},alphaToCoverage:!!n.a2c,uniforms:{...e,...t},vertexShader:`
      ${ku}
      attribute vec3 iRoot; attribute vec3 iDir; attribute vec3 iNrm;
      attribute vec4 iShape; // len, width, lift, seed
      attribute vec4 iRig;   // head weight, tail parameter, ao, breath weight
      attribute vec3 iCol;
      varying vec3 vN; varying vec3 vP; varying vec3 vCol; varying vec2 vUv; varying float vAO; varying float vSeed;
      varying vec3 vTan; varying vec3 vSide;
      void main() {
        float u = position.x; float s = position.y;
        float len = iShape.x; float W = iShape.y; float lift = iShape.z; float seed = iShape.w;
        vec3 n = iNrm; vec3 d = iDir; vec3 b = cross(n, d);
        float sw = (seed - 0.5);
        // quadratic Bézier: lifted middle, tip curling back onto the coat (+ a little sideways sweep and gravity)
        vec3 P1 = d * 0.5 + n * lift * 0.85 + b * sw * 0.08;
        vec3 P2 = d + n * (lift * 0.3 - 0.05) + b * sw * 0.3 + vec3(0.0, -uGrav * 0.25, 0.0);
        vec3 c = (2.0 * (1.0 - s) * s) * P1 + (s * s) * P2;
        vec3 tan = normalize(2.0 * (1.0 - s) * P1 + 2.0 * s * (P2 - P1) + 1e-5);
        vec3 p = iRoot + c * len + n * iRig.w * uBreath;
        vec3 pn = p; vec3 nn = n; rig(pn, nn, iRig.x, iRig.y);
        vec3 pt = p; vec3 tt = tan; rig(pt, tt, iRig.x, iRig.y);
        vec3 pb = p; vec3 bb = b; rig(pb, bb, iRig.x, iRig.y);
        vec4 mv = modelViewMatrix * vec4(pn, 1.0);
        vec3 tV = normalize(mat3(modelViewMatrix) * tt);
        vec3 nV = normalize(normalMatrix * nn);
        vec3 bV = normalize(mat3(modelViewMatrix) * bb);
        vec3 sc = cross(tV, normalize(-mv.xyz));
        float scl = length(sc);
        sc = scl > 1e-4 ? sc / scl : bV;
        if (dot(sc, bV) < 0.0) sc = -sc;
        // half lying on the coat, half turned to the viewer: flat locks face-on, fluffy fins on the silhouette
        vec3 side = normalize(mix(bV, sc, 0.55));
        float w = W * pow(max(0.0, sin(3.14159 * (0.1 + 0.9 * s))), 1.15); // pointed wedge, widest at ~45 %
        mv.xyz += side * u * w + nV * (1.0 - u * u) * w * 0.1;
        vP = mv.xyz;
        vN = nV;
        vTan = tV;
        vSide = side;
        vCol = iCol;
        vUv = vec2(u, s);
        vAO = iRig.z;
        vSeed = seed;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${io}
      ${dm}
      varying vec3 vN; varying vec3 vP; varying vec3 vCol; varying vec2 vUv; varying float vAO; varying float vSeed;
      varying vec3 vTan; varying vec3 vSide;
      void main() {
        float u = vUv.x; float s = vUv.y;
        // 11 strands per lock, each with its own length; outer strands shorter → pointed, feathery tip
        float x = (u * 0.5 + 0.5) * 11.0;
        float id = floor(x);
        float h = hash13(vec3(id, vSeed * 97.0, 1.7));
        float sl = 0.8 + 0.2 * h - 0.14 * u * u;
        float f = abs(fract(x) - 0.5) * 2.0;
        float sep = smoothstep(0.55, 1.0, s / sl);
        float strand = 1.0 - smoothstep(1.0 - sep * 0.7, 1.35 - sep * 0.7, f);
        float cov = strand * smoothstep(sl, sl - 0.16, s) * smoothstep(1.0, 0.55, abs(u)) * smoothstep(0.0, 0.06, s);
        coverage(cov);
        vec3 V = normalize(-vP);
        vec3 side = normalize(vSide);
        // rounded bundle: the normal turns across the lock
        vec3 fN = normalize(cross(side, normalize(vTan)) + 1e-5);
        if (dot(fN, V) < 0.0) fN = -fN;
        // rounded bundle between the coat normal and the lock's own face (lifted locks catch the light)
        vec3 N = normalize(mix(normalize(vN), fN, 0.45) + side * u * 0.5);
        if (dot(N, V) < -0.1) N = normalize(N + V * 1.1);
        vec3 T = normalize(normalize(vTan) + side * (h - 0.5) * 0.25);
        // self-shadowed root (under the lock above), bright tip; darker flanks; fine strand gaps
        float ao = mix(0.64, 1.04, smoothstep(0.0, 0.55, s)) * mix(0.62, 1.0, vAO) * (1.0 - 0.12 * u * u);
        ao *= mix(1.0, 0.92, smoothstep(0.55, 1.0, f) * (1.0 - sep));
        vec3 alb = vCol * (0.84 + 0.3 * h * h) * mix(vec3(0.82, 0.8, 0.98), vec3(1.0), smoothstep(0.0, 0.6, s));
        vec3 col = furLight(alb, N, V, T, 0.4 + 0.6 * s, ao, normalize(vN), smoothstep(0.15, 0.75, s));
        // translucent back-light through the thin tips (rim lights behind the creature)
        float back = max(0.0, dot(-V, uRimDirA)) * 0.6 + max(0.0, dot(-V, uRimDirB)) * 0.6;
        float thin = smoothstep(0.35, 1.0, s) * (1.0 - 0.5 * f);
        col += (uRimColA * 0.45 + uRimColB * 0.55) * thin * (0.12 + back * 0.35) * pow(1.0 - abs(dot(N, V)), 1.5);
        gl_FragColor = vec4(col, 1.0);
#ifdef A2C
        gl_FragColor.a = cov;
#endif
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}var Ql=`
float vnoise(vec3 p) {
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = hash13(i), b = hash13(i + vec3(1,0,0)), c = hash13(i + vec3(0,1,0)), d = hash13(i + vec3(1,1,0));
  float e = hash13(i + vec3(0,0,1)), g = hash13(i + vec3(1,0,1)), h = hash13(i + vec3(0,1,1)), k = hash13(i + vec3(1,1,1));
  return mix(mix(mix(a, b, f.x), mix(c, d, f.x), f.y), mix(mix(e, g, f.x), mix(h, k, f.x), f.y), f.z);
}
vec3 nebula(vec3 d, float seed) {
  float n1 = vnoise(d * 2.3 + seed);
  float n2 = vnoise(d * 5.1 - seed * 1.7);
  vec3 cyan = vec3(0.12, 0.9, 1.0), vio = vec3(0.5, 0.18, 1.0), pink = vec3(1.0, 0.3, 0.85), deep = vec3(0.12, 0.06, 0.5);
  vec3 c = mix(deep, vio, smoothstep(0.25, 0.7, n1));
  c = mix(c, cyan, smoothstep(0.52, 0.85, n2) * 0.85);
  c = mix(c, pink, smoothstep(0.66, 0.92, n1 * 0.6 + n2 * 0.5) * 0.6);
  return c;
}
`;function pm(e,t){return new At({name:"kk-crystal",side:Jt,toneMapped:!1,transparent:!0,depthWrite:!1,blending:Zi,uniforms:{...e,uA:{value:new Y(t.a)},uB:{value:new Y(t.b)},uC:{value:new Y(t.c)},uCore:{value:new Y(t.core??"#62f0ff")},uEmit:{value:t.emissive??0.55},uOpacity:{value:t.opacity??0.8},uStars:{value:t.stars??1}},vertexShader:`
      attribute vec4 aCrys; // x along 0..1, y core glow, z hue shift, w seed
      attribute vec3 aBary; // facet edges
      varying vec3 vP; varying vec3 vObj; varying vec4 vCrys; varying vec3 vWN; varying vec3 vBary;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vP = mv.xyz; vObj = position; vCrys = aCrys; vBary = aBary;
        vWN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${io}
      ${Ql}
      uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform vec3 uCore;
      uniform float uEmit; uniform float uOpacity; uniform float uStars;
      varying vec3 vP; varying vec3 vObj; varying vec4 vCrys; varying vec3 vWN; varying vec3 vBary;
      void main() {
        vec3 N = normalize(cross(dFdx(vP), dFdy(vP)));
        vec3 V = normalize(-vP);
        if (dot(N, V) < 0.0) N = -N;
        float nv = max(dot(N, V), 0.0);
        float fres = pow(1.0 - nv, 2.2);
        float along = vCrys.x;
        float facet = hash13(floor(vWN * 7.0 + 11.0) + vCrys.w * 13.0);
        // V3.32: saturated gradient root → tip (no grey sky term: grey made the crystals pastel)
        vec3 base = mix(uA, uB, smoothstep(0.0, 0.55, along));
        base = mix(base, uC, smoothstep(0.62, 1.0, along) * 0.65);
        base = mix(base, uC, smoothstep(0.6, 0.88, vCrys.z) * 0.55); // V3.35: pink rim blades
        // per-facet tone (painted crystals: every facet catches a different colour)
        base = mix(base, uC, step(0.8, facet) * 0.55);
        base = mix(base, vec3(0.05, 0.6, 1.0), step(facet, 0.16) * 0.4);
        float lit = 0.45 + 0.6 * facet;
        // fake refraction: look through the facet into a nebula
        vec3 R = refract(-V, N, 0.66);
        vec3 neb = nebula(R * 1.4 + vObj * 3.0, vCrys.w * 7.0 + vCrys.z);
        vec3 col = base * lit * (0.4 + uEmit * 0.45) + neb * neb * 0.32 * (0.4 + nv);
        // internal facets: cleavage planes inside the stone that slide with the view (thin bright sheets)
        vec3 ip = vObj * 16.0 + R * 1.2 + vCrys.w;
        float pl = 0.0;
        pl += smoothstep(0.07, 0.0, abs(fract(dot(ip, vec3(0.62, 0.71, 0.33))) - 0.5) - 0.42);
        pl += smoothstep(0.07, 0.0, abs(fract(dot(ip, vec3(-0.55, 0.38, 0.74)) + facet) - 0.5) - 0.43);
        col += mix(uC, uB, facet) * pl * 0.22 * (0.5 + facet);
        // facet highlight (sharp) + soft sheen
        vec3 Hk = normalize(uKeyDir + V);
        float spec = pow(max(dot(N, Hk), 0.0), 60.0);
        col += uKeyCol * spec * 1.2 + base * pow(max(dot(N, Hk), 0.0), 6.0) * 0.35;
        // iridescent edges: hue shifts with the view angle (saturated, not white)
        vec3 irid = 0.5 + 0.5 * cos(6.2831 * (fres * 0.9 + vCrys.z + vec3(0.0, 0.33, 0.67)));
        col += mix(base * 1.4, irid * base * 2.0, 0.4) * fres * 0.35;
        col += uRimColB * max(dot(N, uRimDirB), 0.0) * 0.16 + uRimColA * max(dot(N, uRimDirA), 0.0) * 0.08;
        // core glow (cyan galaxy heart of ears / heart)
        col += uCore * vCrys.y * vCrys.y * (0.6 + 0.4 * nv) * 0.6;
        // star specks inside the crystal, twinkling – brighter, with a soft halo
        vec3 sp = vObj * 80.0 + vCrys.w * 31.0;
        vec3 si = floor(sp);
        float sh = hash13(si);
        float sd = length(fract(sp) - 0.5);
        float tw = 0.6 + 0.4 * sin(uTime * (1.5 + sh * 3.0) + sh * 40.0);
        float on = step(0.9, sh) * tw * uStars;
        float star = on * (smoothstep(0.22, 0.0, sd) * 1.4 + smoothstep(0.5, 0.0, sd) * 0.35);
        col += vec3(1.0, 0.95, 1.0) * star * 2.8;
        // bright facet edges (the painted crystals' cut lines), width in screen space
        float be = min(vBary.x, min(vBary.y, vBary.z));
        float edgeW = fwidth(be) * 1.3;
        float edgeL = 1.0 - smoothstep(0.0, edgeW + 1e-4, be);
        col += mix(vec3(1.0, 0.8, 1.0), mix(uB, uC, along), 0.7) * edgeL * (0.3 + 0.6 * fres) * 0.6;
        // nearly opaque face-on (round 1: 70 % – the white fur shone through and bleached heart and ears)
        float a = clamp(mix(uOpacity, 1.0, fres * 0.6) + star * 0.5 + vCrys.y * 0.3 + edgeL * 0.3, 0.0, 1.0);
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function mm(e){return new At({name:"kk-eye",uniforms:{...e,uPupil:{value:0.42}},vertexShader:`
      varying vec3 vL; varying vec3 vN; varying vec3 vP; varying vec3 vVo;
      void main() {
        vL = normalize(position);
        // V3.35: view ray in the eye's own frame (parallax iris under the cornea)
        vec3 camO = (inverse(modelMatrix) * vec4(cameraPosition, 1.0)).xyz;
        vVo = normalize(position - camO);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vP = mv.xyz; vN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${io}
      ${Ql}
      uniform float uPupil;
      varying vec3 vL; varying vec3 vN; varying vec3 vP; varying vec3 vVo;
      void main() {
        vec3 N = normalize(vN); vec3 V = normalize(-vP);
        // V3.35: the iris lies recessed under a clear cornea – the refracted view ray hits it shifted (parallax depth)
        float r0 = length(vL.xy) / 0.86;
        vec3 vo = normalize(vVo);
        float depth = 0.16 * (1.0 - min(1.0, r0 * r0));
        vec2 q = vL.xy + vo.xy * depth * 0.62 / max(0.35, -vo.z);
        float r = length(q) / 0.86;    // 1 = iris edge
        float ang = atan(q.y, q.x);
        vec3 col;
        if (vL.z < 0.0 || r0 > 1.0) {
          col = vec3(0.04, 0.03, 0.12);    // dark rim / sclera (anime-dark, as in the reference)
        } else {
          vec3 deep = vec3(0.008, 0.015, 0.16), mid = vec3(0.02, 0.12, 0.85), hi = vec3(0.1, 0.5, 1.0);
          col = mix(mid, deep, smoothstep(0.5, 0.95, r));
          col = mix(col, hi, smoothstep(0.72, 0.42, r) * smoothstep(uPupil * 0.9, uPupil * 1.5, r) * 0.75);
          // galaxy swirl and violet / pink dust
          float sw = vnoise(vec3(ang * 2.2 + r * 5.0, r * 9.0, 1.3));
          float sw2 = vnoise(vec3(ang * 4.0 - r * 3.0, r * 14.0, 4.1));
          col = mix(col, vec3(0.55, 0.35, 1.0), smoothstep(0.55, 0.85, sw) * 0.55);
          col = mix(col, vec3(1.0, 0.5, 0.9), smoothstep(0.7, 0.95, sw2) * 0.35 * r);
          // radial fibres
          col *= 0.85 + 0.3 * vnoise(vec3(ang * 18.0, r * 2.0, 0.0));
          // star specks
          vec2 sp = vL.xy * 38.0;
          float sh = hash13(vec3(floor(sp), 5.0));
          float sd = length(fract(sp) - 0.5);
          col += vec3(1.0) * step(0.9, sh) * smoothstep(0.35, 0.0, sd) * (0.6 + 0.4 * sin(uTime * 2.0 + sh * 30.0)) * 1.2;
          // pupil with a deep blue glow, dark limbal ring
          col = mix(col, vec3(0.01, 0.01, 0.06), smoothstep(uPupil, uPupil * 0.82, r));
          // caustic: light focused by the cornea onto the iris side away from the key light (lower right)
          float ca = max(0.0, dot(normalize(q + 1e-4), normalize(vec2(0.55, -0.7))));
          col += vec3(0.2, 0.62, 1.0) * smoothstep(0.3, 0.9, ca) * smoothstep(0.32, 0.62, r) * smoothstep(0.98, 0.7, r) * 0.4;
          // bright ring just inside the dark limbus
          col += vec3(0.15, 0.45, 1.0) * smoothstep(0.66, 0.8, r) * smoothstep(0.92, 0.8, r) * 0.22;
          col = mix(col, vec3(0.02, 0.02, 0.12), smoothstep(0.88, 1.0, r));
        }
        // glossy cornea: two catch-lights fixed to the light (upper left) + soft env sheen
        vec3 K1 = normalize(vec3(-0.42, 0.5, 0.76));
        vec3 K2 = normalize(vec3(0.3, -0.32, 0.9));
        vec3 Rf = reflect(-V, N);
        // V3.32: larger, stronger catch-lights (main + small secondary + a tiny sparkle)
        vec3 K3 = normalize(vec3(-0.12, 0.2, 0.97));
        float c1 = smoothstep(0.966, 0.982, dot(Rf, K1));
        float c2 = smoothstep(0.984, 0.993, dot(Rf, K2));
        float c3 = smoothstep(0.9965, 0.9985, dot(Rf, K3));
        float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
        col += vec3(1.0) * (c1 * 2.4 + c2 * 1.6 + c3 * 1.4) + uSkyCol * fres * 0.3;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function Vu(e,t,n=0.4){return new At({name:"kk-skin",uniforms:{...e,uCol:{value:new Y(t)},uGloss:{value:n}},vertexShader:`
      varying vec3 vN; varying vec3 vP;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vP = mv.xyz; vN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${io}
      uniform vec3 uCol; uniform float uGloss;
      varying vec3 vN; varying vec3 vP;
      void main() {
        vec3 N = normalize(vN); vec3 V = normalize(-vP);
        float diff = clamp((dot(N, uKeyDir) + 0.4) / 1.4, 0.0, 1.0);
        vec3 H = normalize(uKeyDir + V);
        float spec = pow(max(dot(N, H), 0.0), 50.0) * uGloss;
        float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
        vec3 col = uCol * (hemi(N) + uKeyCol * diff) + uKeyCol * spec + uRimColB * fres * 0.3;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function ha(e,t=1){return new At({name:"kk-flat",transparent:t<1,depthWrite:t>=1,uniforms:{uCol:{value:new Y(e)},uOpacity:{value:t}},vertexShader:"void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uCol; uniform float uOpacity;
      void main() {
        gl_FragColor = vec4(uCol, uOpacity);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}function gm(e,t,n,i){return new At({name:"kk-glow",transparent:!0,depthWrite:!1,blending:Zn,uniforms:{uTime:e.uTime,uCol:{value:new Y(t)},uInt:{value:n},uSize:{value:i}},vertexShader:`
      uniform float uSize;
      varying vec2 vUv;
      void main() {
        vUv = position.xy * 2.0;
        vec4 c = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float sx = length(modelMatrix[0].xyz);
        c.xy += position.xy * uSize * sx;
        gl_Position = projectionMatrix * c;
      }
    `,fragmentShader:`
      uniform vec3 uCol; uniform float uInt; uniform float uTime;
      varying vec2 vUv;
      void main() {
        float d = length(vUv);
        float g = exp(-d * d * 4.5) * (1.0 - smoothstep(0.85, 1.0, d));
        if (g < 0.004) discard;
        float pulse = 0.88 + 0.12 * sin(uTime * 1.3);
        gl_FragColor = vec4(uCol * g * uInt * pulse, 1.0);
        #include <colorspace_fragment>
      }
    `})}function xm(e,t){return new At({name:"kk-sparkles",transparent:!0,depthWrite:!1,blending:Zn,uniforms:{uTime:e.uTime,uPR:{value:t},uBurst:{value:0},uMotion:{value:1}},vertexShader:`
      attribute vec4 aSeed; // x phase, y size, z hue, w speed
      uniform float uTime; uniform float uPR; uniform float uBurst; uniform float uMotion;
      varying float vA; varying float vHue;
      void main() {
        float t = uTime * uMotion;
        vec3 p = position;
        float rise = fract(aSeed.x + t * 0.035 * aSeed.w);
        p.y += rise * 0.5 - 0.1;
        p.x += sin(t * 0.6 * aSeed.w + aSeed.x * 20.0) * 0.04;
        p.z += cos(t * 0.5 * aSeed.w + aSeed.x * 13.0) * 0.04;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float tw = 0.5 + 0.5 * sin(uTime * (1.2 + aSeed.w * 2.0) + aSeed.x * 50.0);
        vA = tw * smoothstep(0.0, 0.15, rise) * (1.0 - smoothstep(0.75, 1.0, rise)) * (1.0 + uBurst * 1.5);
        vHue = aSeed.z;
        gl_PointSize = (6.0 + aSeed.y * 14.0) * uPR * (1.0 + uBurst * 0.6) / max(0.5, -mv.z) * 3.2;
      }
    `,fragmentShader:`
      varying float vA; varying float vHue;
      void main() {
        vec2 c = gl_PointCoord * 2.0 - 1.0;
        float d = length(c);
        float core = exp(-d * d * 18.0);
        float spikes = exp(-abs(c.x) * 22.0) * exp(-abs(c.y) * 3.0) + exp(-abs(c.y) * 22.0) * exp(-abs(c.x) * 3.0);
        float a = (core + spikes * 0.55) * vA;
        vec3 col = mix(vec3(0.72, 0.62, 1.0), vec3(0.6, 0.95, 1.0), vHue);
        col = mix(col, vec3(1.0, 0.72, 0.95), step(0.8, vHue));
        gl_FragColor = vec4(col * a * 1.6 + vec3(core * vA * 0.6), 1.0);
        #include <colorspace_fragment>
      }
    `})}function vm(){return new At({name:"kk-backdrop",depthWrite:!1,depthTest:!1,uniforms:{uIn:{value:new Y("#4b408f")},uOut:{value:new Y("#1d1842")}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = position.xy; gl_Position = vec4(position.xy, 0.999, 1.0); }
    `,fragmentShader:`
      uniform vec3 uIn; uniform vec3 uOut;
      varying vec2 vUv;
      float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec2 p = vUv * vec2(1.0, 1.15) - vec2(0.0, 0.08);
        float d = length(p);
        vec3 col = mix(uIn, uOut, smoothstep(0.05, 1.25, d));
        col += vec3(0.25, 0.12, 0.45) * exp(-d * d * 2.2) * 0.25;
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
        gl_FragColor.rgb += (h(gl_FragCoord.xy) - 0.5) / 255.0 * 2.0; // dither against banding
      }
    `})}function ym(e){return new At({name:"kk-floor",transparent:!0,depthWrite:!1,uniforms:{uTime:e.uTime,uShadow:{value:new Pt(0,0,0.42,0.34)},uLift:{value:0},uGlow:{value:1}},vertexShader:`
      varying vec2 vXZ;
      // the unit plane lies in local XY and is rotated onto the ground (local y → world −z); round 1 read
      // position.xz (= x, 0), so the glow never faded toward the horizon (visible floor edge)
      void main() { vXZ = vec2(position.x, -position.y); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:`
      uniform vec4 uShadow; uniform float uLift; uniform float uTime; uniform float uGlow;
      varying vec2 vXZ;
      void main() {
        float d = length(vXZ * vec2(1.0, 1.25)) * 2.0;
        float pool = exp(-d * d * 7.0);
        float wide = exp(-d * d * 2.0) * smoothstep(1.0, 0.35, d);
        vec2 s = (vXZ - uShadow.xy) / uShadow.zw;
        float ss = dot(s, s);
        float lift = clamp(1.0 - uLift * 1.6, 0.0, 1.0);
        float sh = exp(-ss * 2.4) * lift;
        float contact = exp(-ss * 9.0) * lift;
        vec3 glow = vec3(0.62, 0.45, 1.0) * pool + vec3(0.36, 0.26, 0.8) * wide * 0.5;
        float a = clamp((pool * 0.55 + wide * 0.3) * uGlow, 0.0, 1.0);
        vec3 col = glow / max(pool * 0.55 + wide * 0.3, 1e-3); // uGlow scales the alpha only (V3.35)
        col = mix(col, vec3(0.05, 0.03, 0.12), sh * 0.75 + contact * 0.25);
        a = max(a, sh * 0.55 + contact * 0.35);
        gl_FragColor = vec4(col, a);
        #include <colorspace_fragment>
      }
    `})}function _m(e,t){return new At({name:"kk-reflection",transparent:!0,depthWrite:!1,uniforms:{...e,...t},vertexShader:`
      ${ku}
      attribute vec4 aFur; attribute vec3 aCol;
      varying float vH; varying vec3 vCol; varying vec3 vN; varying vec3 vP;
      void main() {
        vec3 n = normalize(normal);
        vec3 p = position + n * aFur.x * 0.6;
        rig(p, n, aFur.y, aFur.w);
        vH = p.y;
        vCol = aCol;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vP = mv.xyz;
        vN = normalize(normalMatrix * n);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      ${io}
      varying float vH; varying vec3 vCol; varying vec3 vN; varying vec3 vP;
      void main() {
        vec3 N = normalize(vN);
        vec3 col = vCol * (hemi(N) * 1.4 + uKeyCol * 0.35) + uRimColB * 0.15;
        float a = 0.2 * exp(-vH * 9.0);
        if (a < 0.004) discard;
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `})}var $l={low:{step:0.05,earStep:0.02,shells:5,earShells:2,locks:1300,sparkles:28,pixelRatio:1.25,post:!1,physical:!1},med:{step:0.035,earStep:0.015,shells:8,earShells:5,locks:3000,sparkles:50,pixelRatio:1.75,post:!0,physical:!1},high:{step:0.029,earStep:0.012,shells:12,earShells:6,locks:5200,sparkles:80,pixelRatio:2,post:!0,physical:!0}},pn=(e,t,n)=>{let i=Math.max(0,Math.min(1,(n-e)/(t-e)));return i*i*(3-2*i)},so=(e,t,n,i,s)=>{let r=e-i[0],o=t-i[1],a=n-i[2];return Math.exp(-(r*r+o*o+a*a)/(s*s))},rt=(e,t,n)=>e+(t-e)*n,Ri=(e,t,n,i,s)=>so(e,t,n,os(i),s*zn);function Wu(e,t){let n=new gt;return n.setAttribute("position",new Ge(e.positions,3)),n.setAttribute("normal",new Ge(e.normals,3)),n.setAttribute("aFur",new Ge(t.fur,4)),n.setAttribute("aComb",new Ge(t.comb,3)),n.setAttribute("aCol",new Ge(t.col,3)),n.setAttribute("aAO",new Ge(t.ao,1)),n.setIndex(new Hr(e.indices,1)),n.computeBoundingSphere(),n}function Xu(e,t,n,i){let s=new Jr;s.index=e.index;for(let[a,l]of Object.entries(e.attributes))s.setAttribute(a,l);let r=new Float32Array(t+1);for(let a=0;a<=t;a++)r[a]=Math.pow(a/t,0.9);s.setAttribute("aShell",new ai(r,1)),s.instanceCount=t+1;let o=new Qe(s,n);return o.name=i,o.frustumCulled=!1,o}var Yu=new Y("#efebfd"),b1=new Y("#fbf9ff"),M1=new Y("#ff9cc6"),S1=new Y("#d8c2ff"),w1=new Y("#d4d2ff"),T1=new Y("#9cb6ff"),A1=new Y("#7b6cff"),E1=new Y("#efe7ff"),Ku=(e,t,n)=>({fur:new Float32Array(e*4),comb:new Float32Array(e*3),col:new Float32Array(e*3),ao:t?tm(t,n,0.14):new Float32Array(e).fill(1),lock:new Float32Array(e*4)});function R1(e,t){let n=e.positions.length/3,i=Ku(n,t,e),s=new Y;for(let r=0;r<n;r++){let o=e.positions[r*3],a=e.positions[r*3+1],l=e.positions[r*3+2],c=e.normals[r*3],h=e.normals[r*3+1],d=e.normals[r*3+2],u=Math.abs(o),f=Math.sign(o)||1,m=pn(-0.05,0.05,Bu(o,a,l)-as(o,a,l)),v=Math.max(Ri(u,a,l,[0.142,1.155,0.31],0.085),Ri(o,a,l,[0,1.04,0.33],0.075),Ri(o,a,l,[0,1.13,0.33],0.05)),p=Ri(u,a,l,[0.35,1,0.1],0.13),g=so(o,a,l,[0,0.84,0.22],0.19)*(1-m),_=so(u,a,l,[0.27,0.9,0],0.14),b=so(u,a,l,[0.31,0.25,-0.13],0.19),y=Ri(o,a,l,[0,1.12,-0.14],0.2),S=so(o,a,l,[0,0.76,0.32],0.1),T=Ri(o,a,l,[0,1.285,0.31],0.05),x=u<0.18&&l>0.06?pn(0.52,0.3,a):0,M=pn(0.13,0.05,a),E=rt(0.04,0.034,m);E=rt(E,0.05,g),E=rt(E,0.05,p),E=rt(E,0.02,Ri(u,a,l,[0.17,1.065,0.27],0.05)),E=rt(E,0.018,T),E=rt(E,0.006,v),E=rt(E,0.022,S),E=rt(E,0.026,x),E=rt(E,0.013,pn(0.11,0.05,a));let L=so(o,a,l,[0,0.66,0.15],0.26)*(1-m);i.fur.set([E,m,L,0],r*4);let I=0,z=-1,W=-0.35;if(m>0.01){let Z=os([0,1.06,0.42]),ee=o,J=a-Z[1],ae=l-Z[2],Ae=Math.hypot(ee,J,ae)||1;ee/=Ae,J/=Ae,ae/=Ae;let Ne=Ri(u,a,l,[0.3,1,0.1],0.15);ee=rt(ee,f*0.62,Ne),J=rt(J,-0.45,Ne),ae=rt(ae,-0.62,Ne),I=rt(I,ee,m),z=rt(z,J,m),W=rt(W,ae,m)}W=rt(W,0.25,g),I=rt(I,f*0.25,_);let P=I*c+z*h+W*d;I-=c*P,z-=h*P,W-=d*P;let X=Math.hypot(I,z,W)||1,G=rt(0.9,0.5,v);i.comb.set([I/X*G,z/X*G,W/X*G],r*3),s.copy(Yu),s.lerp(b1,Math.max(p,g)*0.9),s.lerp(w1,Math.max(0,-h-0.2)*0.45),s.lerp(S1,S*0.5),s.lerp(M1,Ri(u,a,l,[0.175,1.07,0.275],0.032)*0.6),s.lerp(E1,M*0.5),i.col.set([s.r,s.g,s.b],r*3);let F=1,K=rt(0.15,0.11,m),q=rt(0.08,0.03,m),H=rt(0.26,0.2,m);K=rt(K,0.16,y),q=rt(q,0.16,y),K=rt(K,0.19,_),q=rt(q,0.18,_),K=rt(K,0.17,b),K=rt(K,0.1,x),q=rt(q,0.05,x),K=rt(K,0.24,g),q=rt(q,0.26,g),F=rt(F,1.35,g),K=rt(K,0.21,p),q=rt(q,0.42,p),F=rt(F,1.5,p),H=rt(H,0.24,p),K=rt(K,0.05,M),F*=rt(1,0.25,M),F*=1-Math.min(1,v*1.8+Ri(u,a,l,[0.17,1.07,0.27],0.06)*1.2),F*=1-S*0.92,F*=1-Ri(o,a,l,[0,0.985,0.27],0.06),F*=1-T,F*=rt(1,0.4,m*(1-p)*pn(1.1,1.3,a)),F*=pn(0.015,0.06,a),F*=h<-0.6?0.3:1,F*=pn(-0.01,0.04,Zl(o,a,l)),i.lock.set([Math.max(0,F),K,q,H],r*4)}return i}function C1(e,t){let n=e.positions.length/3,i=Ku(n,t,e),s=new Y,r=fr.length-1;for(let o=0;o<n;o++){let a=e.positions[o*3],l=e.positions[o*3+1],c=e.positions[o*3+2],h=e.normals[o*3],d=e.normals[o*3+1],u=e.normals[o*3+2],f=Math.max(0.001,zu(a,l,c)[1]),m=rt(0.045,0.06,pn(0,0.5,f))*rt(1,0.75,pn(0.85,1,f));i.fur.set([m,0,0,f],o*4);let v=Math.min(r-1,Math.floor(f*r)),p=fr[v],g=fr[v+1],_=g[0]-p[0],b=g[1]-p[1]-0.05,y=g[2]-p[2],S=_*h+b*d+y*u;_-=h*S,b-=d*S,y-=u*S;let T=Math.hypot(_,b,y)||1;i.comb.set([_/T,b/T,y/T],o*3),s.copy(Yu),s.lerp(T1,Math.min(0.5,pn(0.35,0.95,f)*0.45+Math.max(0,-h)*0.12)),i.col.set([s.r,s.g,s.b],o*3);let x=rt(0.18,0.23,pn(0,0.5,f))*rt(1,0.8,pn(0.85,1,f)),M=pn(-0.01,0.04,pr(a,l,c));i.lock.set([rt(0.7,1.25,pn(0.05,0.35,f))*pn(0,0.05,l)*M,x,0.34,0.28],o*4)}return i}function P1(e){let t=e.positions.length/3,n=Ku(t,null,e),i=new Y;for(let s=0;s<t;s++){let r=e.positions[s*3],o=e.positions[s*3+1],a=e.normals[s*3+2],l=e.normals[s*3],c=e.normals[s*3+1],h=0.15*(1-o/pi),d=pn(0.55,0.95,Math.abs(r)/Math.max(0.01,h)),u=a>0.3&&d<0.5&&o<pi*0.88?1:0,f=pn(pi*0.68,pi*0.95,o),m=u?0:rt(0.02,0.03,d);m=rt(m,0.04,f),n.fur.set([m,0,0,0],s*4);let v=Math.sign(r)*d*0.5,p=1,g=-0.2,_=v*l+p*c+g*a;v-=l*_,p-=c*_,g-=a*_;let b=Math.hypot(v,p,g)||1;n.comb.set([v/b*0.8,p/b*0.8,g/b*0.8],s*3),i.copy(Yu).lerp(A1,f*0.85),n.col.set([i.r,i.g,i.b],s*3),n.ao[s]=u?0.6:1;let y=a<-0.2?1:0;n.lock.set([u?0:y*(1+f),rt(0.065,0.1,f),rt(0.04,0.2,f),0.26],s*4)}return n}var qu=(e,t=[0,1,0])=>{let n=new R(...e).normalize(),i=new R(...t).cross(n).normalize(),s=new R().crossVectors(n,i);return new jt().setFromRotationMatrix(new Je().makeBasis(i,s,n))};function Zu(e="med",t=331,n={}){let i=$l[e],s=Ns(t),r=cm(),o=hm();o.uTailPivot.value.set(...sm);let a=new Set,l=new Set,c=(oe)=>(a.add(oe),oe),h=(oe)=>(l.add(oe),oe),d=new Ft;d.name="kristallkatze";let u=new Ft;u.name="kk-body",d.add(u);let f=new Ft;f.name="kk-fx",d.add(f);let m=!!n.a2c,v=h(Hu(r,o,{density:120,clump:18,lock:10,a2c:m,lockAmt:0.15})),p=h(Hu(r,o,{density:170,clump:30,lock:22,a2c:m,lockAmt:0.5})),g=h(fm(r,o,{a2c:m})),_=i.post?0.55:1,b=Yl(pr,[-0.56,-0.06,-0.56],[0.56,1.6,0.52],i.step),y=(oe,me,he)=>Math.min(pr(oe,me,he),Zl(oe,me,he)),S=R1(b,y),T=c(Wu(b,S));u.add(Xu(T,i.shells,v,"kk-body-fur"));let x=Yl(Zl,[-0.1,-0.06,-0.66],[0.78,0.64,0.42],i.step*0.9),M=C1(x,y),E=c(Wu(x,M));u.add(Xu(E,i.shells,v,"kk-tail-fur"));let L=e==="low"?1.18:e==="med"?1.04:1,I=[ql(b,S,Math.round(i.locks*0.6),s,L),ql(x,M,Math.round(i.locks*0.3),s,L)],z=new Qe(c(Fu(I)),g);z.name="kk-locks",z.frustumCulled=!1,u.add(z);let W=I.reduce((oe,me)=>oe+me.count,0),P=h(new zt),X=new Qe(T,P);X.visible=!1,X.name="kk-hit-body",u.add(X);let G=new Ft;G.name="kk-head",G.position.set(...Ei),u.add(G);let F=(oe)=>new R(oe[0]-Ei[0],oe[1]-Ei[1],oe[2]-Ei[2]),K=new Qe(c(new Ut(0.34*zn,12,8)),P);K.position.copy(F(os([0,1.16,0.1]))),K.visible=!1,K.name="kk-hit-head",G.add(K);let q=(oe,me,he)=>Kl(oe,[me,he,1],[0,0,-1])??[me,he,0.3],H=(oe,me)=>{let he=os([oe,me,0]);return q(as,he[0],he[1])},Z=(oe,me,he)=>{let de=H(oe,me),tt=Ds(as,...de);return F([de[0]+tt[0]*he,de[1]+tt[1]*he,de[2]+tt[2]*he])},ee=0.082*zn*1.14,J=h(mm(r)),ae=h(Vu(r,"#cfc4ec",0.02)),Ae=h(ha("#1b1033")),Ne=c(new Ut(ee,40,28)),Oe=c(new Ut(ee*1.07,30,10,0,Math.PI*2,0,Math.PI/2)),Ce=c(new $e(ee*0.93,ee*0.075,6,40)),lt=c(new $e(ee*1.07,ee*0.085,6,24,Math.PI)),He=c(new Qt(ee*0.07,ee*0.55,5)),ze=[],ot=c(new Ti(new wi([new R(-ee*0.95,-ee*0.12,ee*0.42),new R(-ee*0.5,ee*0.16,ee*0.62),new R(0,ee*0.26,ee*0.68),new R(ee*0.5,ee*0.16,ee*0.62),new R(ee*0.95,-ee*0.12,ee*0.42)]),16,ee*0.075,5));for(let oe of[-1,1]){let me=H(oe*0.146,1.157),he=Ds(as,...me),de=0.032*zn,tt=[me[0]-he[0]*de,me[1]-he[1]*de,me[2]-he[2]*de],st=new Ft;st.name=`kk-eye-${oe<0?"r":"l"}`,st.position.copy(F(tt)),st.quaternion.copy(qu([oe*0.27,0.02,1]));let ht=new Ft;st.add(ht);let Lt=new Qe(ot,Ae);Lt.name="kk-eye-arc",Lt.visible=!1,st.add(Lt);let on=new Qe(Ne,J);on.scale.set(1,1,0.8),ht.add(on);let Ot=new Qe(Ce,Ae);Ot.position.z=ee*0.3,ht.add(Ot);let an=new Ft,Ln=new Ft;Ln.scale.set(1,1,0.8),an.add(new Qe(Oe,ae));let Gn=new Qe(lt,Ae);Gn.rotation.x=Math.PI/2,an.add(Gn);for(let[Dn,qn]of[[0,0.2],[1,0.42],[2,0.66]]){let kn=new Qe(He,Ae),Nn=oe>0?qn:Math.PI-qn;kn.position.set(Math.cos(Nn)*ee*1.08,ee*0.05,Math.sin(Nn)*ee*1.08),kn.rotation.z=-oe*(0.95+Dn*0.22),kn.rotation.x=0.55,an.add(kn)}Ln.add(an),ht.add(Ln),G.add(st),ze.push({ball:on,lid:an,group:st,sq:ht,arc:Lt,rest:st.position.clone(),back:new R(0,0,-1).applyQuaternion(st.quaternion)})}let se=new Qe(c(new Ut(1,20,14)),h(Vu(r,"#ff7fae",0.7)));{let oe=se.geometry.getAttribute("position");for(let he=0;he<oe.count;he++){let de=oe.getY(he);oe.setX(he,oe.getX(he)*(1+0.45*de))}se.geometry.computeVertexNormals();let me=H(0,1.08);se.position.copy(F([me[0],me[1],me[2]+0.004])),se.scale.set(0.031*zn,0.02*zn,0.019*zn),se.rotation.x=-0.25,se.name="kk-nose",G.add(se)}let ge=h(ha("#9a5c86")),ve=(oe)=>new wi(oe.map(([me,he])=>Z(me,he,0.003)));{let oe=[];for(let he of[-1,1])oe.push(new Ti(ve([[0,1.058],[he*0.012,1.044],[he*0.027,1.042],[he*0.04,1.05]]),10,0.0032,4));oe.push(new Ti(ve([[0,1.066],[0,1.058]]),2,0.003,4));let me=new Qe(c(Fi(oe,!1)),ge);for(let he of oe)he.dispose();me.name="kk-mouth",G.add(me)}{let oe=[];for(let he of[-1,1])for(let de=0;de<3;de++){let tt=Z(he*0.065,1.045+de*0.012,-0.002),st=F(os([he*0.21,1.05+(de-1)*0.026,0.31])),ht=F(os([he*0.38,1.035+(de-1)*0.065,0.23]));oe.push(new Ti(new wi([tt,st,ht]),12,0.0016,3))}let me=new Qe(c(Fi(oe,!1)),h(ha("#ffffff",0.62)));for(let he of oe)he.dispose();me.name="kk-whiskers",G.add(me)}{let oe=[];for(let he of[-1,1])for(let de=0;de<3;de++){let tt=he*(0.168+de*0.022),st=1.082-de*0.004;oe.push(new Ti(new wi([Z(tt,st,0.009),Z(tt+he*0.012,st-0.008,0.009)]),2,0.0036,4))}let me=new Qe(c(Fi(oe,!1)),h(ha("#ff6fb0",0.8)));for(let he of oe)he.dispose();me.name="kk-blush",G.add(me)}let Le=(oe)=>h(i.physical?J0(r.uTime,oe):pm(r,oe)),Ie=Le({a:"#5a1cff",b:"#1a8cff",c:"#ff3fcf",core:"#3ff2ff",emissive:1.7,opacity:0.98,transmission:0.12}),Xe=Le({a:"#7a2cff",b:"#c04dff",c:"#ff5ad0",core:"#ff9cf0",emissive:1,opacity:0.95}),ke=Le({a:"#6a2cff",b:"#2a7cff",c:"#e05cff",core:"#7fe8ff",emissive:1,opacity:0.9}),ce=Le({a:"#4a1cff",b:"#8a4dff",c:"#ff4fd8",core:"#8fe6ff",emissive:1.1,opacity:0.98}),Pe=Le({a:"#5a2dff",b:"#2cbcff",c:"#ff7ade",core:"#7ff0ff",emissive:0.95,opacity:0.96}),qe=c(new rn(1,1)),N=(oe,me,he)=>{let de=new Qe(qe,h(gm(r,oe,me*_,he)));return de.name="kk-glow",de.renderOrder=10,de.frustumCulled=!1,de},vt=(oe,me)=>{let he=oe.map(({p:tt,n:st,size:ht,seed:Lt})=>Gu(0.018*ht,0.032*ht,0.01*ht,Lt).applyMatrix4(new Je().compose(new R(...tt),qu(st),new R(1,1,1)))),de=new Qe(c(Fi(he,!1)),Pe);for(let tt of he)tt.dispose();return de.name=me,de.renderOrder=2,de};{let oe=H(0,1.285),me=Ds(as,...oe),he=new Qe(c(Gu(0.034*zn,0.06*zn,0.018,t+1)),Pe);he.position.copy(F([oe[0]+me[0]*0.014,oe[1]+me[1]*0.014,oe[2]+me[2]*0.014])),he.quaternion.copy(qu(me)),he.renderOrder=2,he.name="kk-forehead-gem",G.add(he);let de=N("#7fe8ff",0.1,0.12);de.position.copy(he.position),G.add(de)}{let oe=[];for(let[me,he]of[[0,1.29],[0.03,1.19]]){let de=os([me,he,0]),tt=Kl(as,[de[0],de[1],-1],[0,0,1]);if(!tt)continue;let st=Ds(as,...tt),ht=F([tt[0]+st[0]*0.035,tt[1]+st[1]*0.035,tt[2]+st[2]*0.035]);oe.push({p:[ht.x,ht.y,ht.z],n:st,size:1,seed:t+7+he*10})}G.add(vt(oe,"kk-head-gems"))}let Ke=Yl(om,[-0.19,-0.06,-0.14],[0.19,pi+0.06,0.1],i.earStep),Mt=P1(Ke),be=c(Wu(Ke,Mt)),yt=c(lm(t+3)),et=c(Fu([ql(Ke,Mt,Math.round(i.locks*0.05),s,L)]));W+=et.instanceCount*2;let Ye=[];for(let oe of[-1,1]){let me=new Ft;me.name=`kk-ear-${oe<0?"r":"l"}`,me.position.copy(F(os([oe*0.17,1.33,0.03]))),me.scale.setScalar(1.08),me.rotation.order="YXZ",me.rotation.set(-0.08,oe*0.38,-oe*0.62),me.userData.rest=me.rotation.clone(),me.add(Xu(be,i.earShells,p,"kk-ear-fur"));let he=new Qe(yt,Ie);he.renderOrder=2,he.name="kk-ear-crystal",me.add(he);let de=new Qe(et,g);de.name="kk-ear-locks",de.frustumCulled=!1,me.add(de);let tt=N("#38d6ff",0.14,0.24);tt.position.set(0,0.17,0.05),me.add(tt);let st=N("#9a5cff",0.1,0.44);st.position.set(0,0.2,0.03),me.add(st);let ht=[];for(let[Ot,an,Ln]of[[0,0.17,-14],[1,0.14,-38],[2,0.1,-62]]){let Gn=Jl(an,an*0.2,an*0.06,t+300+Ot*7+(oe>0?1:0),0.7+Ot*0.08,0.2),Dn=Ln*Math.PI/180,qn=new R(oe*Math.cos(Dn),Math.sin(Dn),0.12).normalize();Gn.applyMatrix4(new Je().compose(new R(oe*(0.085+Ot*0.006),0.07-Ot*0.02,-0.005),new jt().setFromUnitVectors(new R(0,1,0),qn),new R(1,1,1))),ht.push(Gn)}let Lt=c(Fi(ht,!1));for(let Ot of ht)Ot.dispose();let on=new Qe(Lt,Xe);on.renderOrder=2,on.name="kk-ear-fins",me.add(on),G.add(me),Ye.push(me)}let St=new Ft;St.name="kk-heart";{let oe=q(pr,0,0.78);St.position.set(oe[0],oe[1],oe[2]+0.1),St.rotation.x=-0.1,St.scale.setScalar(1.34);let me=new Qe(c(am(0.24,t+5)),ce);me.renderOrder=3,me.name="kk-heart-core",St.add(me);let he=[[160,0.1,0.03],[200,0.11,0.032],[240,0.08,0.026],[20,0.1,0.03],[-20,0.11,0.032],[-60,0.08,0.026]],de=[];for(let[ht,Lt,on]of he){let Ot=ht*Math.PI/180;de.push(Jl(Lt,on,on*0.32,t+ht+400,0.25+Math.abs(Math.cos(Ot))*0.3,0.3).applyMatrix4(new Je().compose(new R(Math.cos(Ot)*0.06,0.015+Math.sin(Ot)*0.05,-0.02),new jt().setFromEuler(new yi(0.25,Math.cos(Ot)*-0.4,Ot-Math.PI/2,"ZYX")),new R(1,1,1))))}let tt=new Qe(c(Fi(de,!1)),ce);for(let ht of de)ht.dispose();tt.renderOrder=2,tt.name="kk-heart-petals",St.add(tt);let st=N("#b65cff",0.16,0.5);st.position.z=0.03,St.add(st),u.add(St)}let C=St.position.z,w=[],V=[],ue=[[66,0.58,0.09],[50,0.7,0.1],[34,0.62,0.094]],le=[[2,0.52,0.086],[-15,0.45,0.078],[-32,0.36,0.068]];for(let oe of[-1,1]){let me=new Ft;me.name=`kk-wing-${oe<0?"r":"l"}`,me.position.set(oe*0.18,0.92,-0.12);let he=(st,ht,Lt)=>{let on=new Ft,Ot=[];st.forEach(([Dn,qn,kn],Nn)=>{let A=Dn*Math.PI/180,B=new R(oe*Math.cos(A),Math.sin(A),-ht).normalize(),j=new R(oe*0.25,0.05,1).normalize(),U=new R().crossVectors(B,j).normalize(),k=new R().crossVectors(U,B).normalize(),we=Nn===st.length-1?0.78:0.15+Nn*0.15+Lt*0.05,Be=Jl(qn,kn,kn*0.2,t+Lt*10+Nn+(oe>0?50:0),we,0.25),Ee=B.clone().multiplyScalar(0.02+Nn*0.006).add(new R(0,0,-Nn*0.014));Be.applyMatrix4(new Je().makeBasis(U,B,k).setPosition(Ee)),Ot.push(Be)});let an=new Qe(c(Fi(Ot,!1)),ke);for(let Dn of Ot)Dn.dispose();an.name=`kk-wing-fan-${Lt}`,an.renderOrder=1,on.add(an),V.push(an);let Ln=new R;for(let[Dn,qn]of st){let kn=Dn*Math.PI/180;Ln.add(new R(oe*Math.cos(kn),Math.sin(kn),-ht).normalize().multiplyScalar(qn*0.5))}Ln.divideScalar(st.length);let Gn=N("#7c58ff",0.14,0.62);return Gn.position.copy(Ln),on.add(Gn),on},de=he(ue,0.36,1),tt=he(le,0.3,2);tt.position.set(oe*0.012,-0.06,0.012),me.add(de,tt),u.add(me),w.push({s:oe,upper:de,lower:tt})}{let oe=[];for(let[me,he]of[[-0.06,0.88],[0.07,0.86],[0,0.78],[-0.1,0.72],[0.11,0.7],[0.02,0.63],[-0.04,0.56]]){let de=Kl(pr,[me,he,-1],[0,0,1]);if(!de)continue;let tt=Ds(pr,...de);oe.push({p:[de[0]+tt[0]*0.07,de[1]+tt[1]*0.07,de[2]+tt[2]*0.07],n:tt,size:1,seed:t+50+me*100+he*10})}u.add(vt(oe,"kk-back-gems"))}let fe=h(ym(r)),Me=new Qe(c(new rn(1,1)),fe);Me.rotation.x=-Math.PI/2,Me.scale.set(3.4,3.4,1),Me.position.y=0.001,Me.renderOrder=-5,Me.name="kk-floor",fe.uniforms.uShadow.value.set(0.06,-0.06,0.21176470588235294,0.23529411764705885),fe.uniforms.uGlow.value=i.post?0.32:1,f.add(Me);let Q=h(_m(r,o)),ne=new Ft;ne.name="kk-reflection";for(let oe of[T,E]){let me=new Qe(oe,Q);me.frustumCulled=!1,me.renderOrder=-6,ne.add(me)}ne.scale.y=-1,f.add(ne);for(let[oe,me,he,de,tt]of[["#b65cff",0.12,0.55,-0.62,0.36],["#7c58ff",0.08,1.1,-0.75,-0.1]]){let st=N(oe,me,he);st.position.set(0,de,tt),st.renderOrder=-4,f.add(st)}{let oe=[];for(let[me,he,de]of[[-0.58,0.32,1],[0.66,0.22,0.8],[0.42,-0.5,0.7],[-0.4,-0.42,0.6]]){oe.push({p:[me,0.03*de,he],n:[0,0,1],size:de,seed:t+90+me*10});let tt=N("#a77bff",0.45,0.16*de);tt.position.set(me,0.03*de,he),f.add(tt)}f.add(vt(oe,"kk-floor-gems"))}let Se=h(xm(r,1));{let oe=[],me=[],he=0;while(oe.length/3<i.sparkles&&he++<5000){let st=(s()-0.5)*1.8,ht=s()*1.75,Lt=(s()-0.5)*1.3;if(y(st,ht,Lt)<0.25||Math.abs(st)<0.45&&Lt>0)continue;oe.push(st,ht,Lt),me.push(s(),s(),s(),0.5+s())}let de=c(new gt);de.setAttribute("position",new Ge(oe,3)),de.setAttribute("aSeed",new Ge(me,4));let tt=new bs(de,Se);tt.frustumCulled=!1,tt.renderOrder=11,tt.name="kk-sparkles",f.add(tt)}let O=new Qe(c(new rn(2,2)),h(vm()));O.frustumCulled=!1,O.renderOrder=-100,O.name="kk-backdrop";let re=0,te=0,xe=0;d.traverse((oe)=>{let me=oe;if(!(me.isMesh||oe.isLineSegments||oe.isPoints)||!oe.visible)return;let he=me.geometry,de=he.isInstancedBufferGeometry?he.instanceCount:1;if(te++,!me.isMesh)return;let tt=he.index?he.index.count:he.getAttribute("position").count;re+=tt/3*de,xe+=he.getAttribute("position").count*de});let ye=new Je,Te=new Je().makeTranslation(-Ei[0],-Ei[1],-Ei[2]),D={t:0,yaw:0,pitch:0,roll:0,tYaw:0,tPitch:0,tRoll:0,nextLook:1.5,lastPointer:-10,blinkAt:2.2,blinkT:-1,doubleBlink:!1,earAt:3.5,earT:-1,earSide:0,flutterT:-1,flutterAt:9,hopT:-1,purrT:-1,idleAt:10,idle:"",idleT:-1,happy:!1,lid:0,eyeYaw:0,eyePitch:0},pe=Ns(t+99),_e=-0.82,Ue=0.98,nt=1.12,Re=Se.uniforms.uBurst,mt=fe.uniforms.uLift,ft=new R;(()=>{G.rotation.set(D.pitch,D.yaw,D.roll,"YXZ"),G.updateMatrix(),ye.multiplyMatrices(G.matrix,Te),o.uHead.value.copy(ye)})();for(let oe of ze)oe.lid.rotation.x=_e;function zi(oe,me){let he=oe>0;D.t+=oe;let de=D.t;r.uTime.value=de;let tt=(U)=>1-Math.exp(-oe*U);if(me?.look){D.lastPointer=de,ft.copy(me.look),u.worldToLocal(ft);let U=ft.x-Ei[0],k=ft.y-(Ei[1]+0.2),we=ft.z-Ei[2];D.tYaw=Math.max(-0.55,Math.min(0.55,Math.atan2(U,Math.max(0.2,we)))),D.tPitch=Math.max(-0.28,Math.min(0.3,-Math.atan2(k,Math.max(0.3,Math.hypot(U,we))))),D.tRoll=-D.tYaw*0.15}else if(he&&de-D.lastPointer>2.5&&de>D.nextLook){let U=D.idle==="look";D.tYaw=(pe()-0.5)*(U?0.95:0.55),D.tPitch=(pe()-0.5)*0.22,D.tRoll=(pe()-0.5)*0.26,D.nextLook=de+2.4+pe()*3}if(he)D.yaw+=(D.tYaw-D.yaw)*tt(4.5),D.pitch+=(D.tPitch-D.pitch)*tt(4.5),D.roll+=(D.tRoll-D.roll)*tt(3),D.eyeYaw+=(D.tYaw*0.35-D.eyeYaw)*tt(14),D.eyePitch+=(D.tPitch*0.3-D.eyePitch)*tt(14);let st=0,ht=0,Lt=0;if(D.hopT>=0){D.hopT+=oe;let U=D.hopT;if(U<0.12)ht=Math.sin(U/0.12*Math.PI*0.5)*0.07;else if(U<0.52){let k=(U-0.12)/0.4;st=0.6*k*(1-k),ht=-0.05*Math.sin(k*Math.PI)}else if(U<0.78)ht=Math.sin((U-0.52)/0.26*Math.PI)*0.06;else D.hopT=-1}if(D.purrT>=0){D.purrT+=oe;let U=D.purrT;if(Lt=Math.min(1,U/0.25)*Math.min(1,Math.max(0,(1.9-U)/0.35)),U>1.9)D.purrT=-1}u.position.y=st,u.position.x=Lt*0.0016*Math.sin(de*Math.PI*2*22),u.scale.set(1+ht*0.5,1-ht,1+ht*0.5),ne.position.set(u.position.x,-st,0),ne.scale.set(u.scale.x,-u.scale.y,u.scale.z),mt.value=st,Re.value=Math.max(Lt,D.hopT>=0?0.6:0,Re.value*(he?Math.exp(-oe*2):1));let on=Lt*(0.16+0.05*Math.sin(de*3));G.rotation.set(D.pitch-Lt*0.06,D.yaw,D.roll+on,"YXZ"),G.updateMatrix(),ye.multiplyMatrices(G.matrix,Te),o.uHead.value.copy(ye);let Ot=he||de>0?Math.sin(de*Math.PI*2/3.4)*0.5+0.5:0.5;o.uBreath.value=Ot*0.009,St.position.z=C+Ot*0.006;let an=0;if(he){if(D.blinkT<0&&de>D.blinkAt)D.blinkT=0,D.doubleBlink=pe()<0.2;if(D.blinkT>=0){D.blinkT+=oe;let U=0.17,k=D.blinkT;if(an=k<U?Math.sin(k/U*Math.PI):D.doubleBlink&&k>U+0.08&&k<2*U+0.08?Math.sin((k-U-0.08)/U*Math.PI):0,k>(D.doubleBlink?2*U+0.1:U))D.blinkT=-1,D.blinkAt=de+2.4+pe()*4}}let Ln=Math.max(Lt,D.happy?1:0),Gn=_e+(Ue-_e)*Ln;D.lid=Gn+(nt-Gn)*an;let Dn=Math.max(0,Math.min(1,(D.lid-_e)/(Ue-_e)));for(let U of ze){U.lid.rotation.x=D.lid,U.group.position.copy(U.rest).addScaledVector(U.back,Dn*ee*0.06);let k=pn(0.35,1,Dn);U.sq.scale.y=1-0.94*k,U.sq.position.y=-ee*0.12*k,U.arc.visible=k>0.6&&Ln>0.5,U.ball.rotation.set(-D.eyePitch,D.eyeYaw,0)}let qn=0;if(he){if(D.earT<0&&de>D.earAt)D.earT=0,D.earSide=pe()<0.5?0:1;if(D.earT>=0){if(D.earT+=oe,qn=Math.sin(Math.min(1,D.earT/0.32)*Math.PI)*(D.earT<0.32?1:0),D.earT>0.45)D.earT=-1,D.earAt=de+2.5+pe()*5}}let kn=D.hopT>0.12&&D.hopT<0.52?1:0;Ye.forEach((U,k)=>{let we=U.userData.rest,Be=k===0?-1:1,Ee=D.earSide===k?qn:0;U.rotation.x=we.x-Ee*0.35-kn*0.25-Lt*0.15+(he?Math.sin(de*1.1+k)*0.015:0),U.rotation.z=we.z-Be*Ee*0.12+Be*Lt*0.12});let Nn=0;if(D.idle==="flick"&&D.idleT>=0)Nn=Math.sin(Math.min(1,D.idleT/0.9)*Math.PI*2)*0.25;if(o.uTail.value.set(he||de>0?0.06*Math.sin(de*0.8)+Nn*0.4:0,he||de>0?0.03*Math.sin(de*0.55+1):0,he||de>0?0.12*Math.sin(de*1.25)+Nn:0,0),he&&D.flutterT<0&&de>D.flutterAt)D.flutterT=0;let A=0;if(D.flutterT>=0){if(D.flutterT+=oe,A=Math.sin(Math.min(1,D.flutterT/0.9)*Math.PI)*Math.sin(D.flutterT*Math.PI*2*6.5),D.flutterT>0.9)D.flutterT=-1,D.flutterAt=de+7+pe()*6}let B=D.idle==="stretch"&&D.idleT>=0?Math.sin(Math.min(1,D.idleT/2.2)*Math.PI):0,j=he||de>0?Math.sin(de*1.6):0;for(let U of w)U.upper.rotation.set(0,U.s*(0.04*j+0.2*A-0.12*B),U.s*(-0.03*j-0.08*A-0.14*B)),U.lower.rotation.set(0,U.s*(0.035*Math.sin(de*1.6+0.6)*(he||de>0?1:0)+0.16*A-0.08*B),U.s*(0.06*A+0.1*B));if(he){if(D.idleT<0&&de>D.idleAt&&D.hopT<0&&D.purrT<0){let U=pe();if(D.idle=U<0.34?"stretch":U<0.67?"flick":"look",D.idleT=0,D.idle==="look")D.nextLook=de}if(D.idleT>=0){if(D.idleT+=oe,D.idleT>2.4)D.idleT=-1,D.idle="",D.idleAt=de+8+pe()*7}}}function ic(oe){if(oe==="hop"&&D.hopT<0)D.hopT=0,D.flutterT=0;else if(oe==="purr")D.purrT=0;else if(oe==="flutter")D.flutterT=0;Re.value=1}return zi(0),{root:d,backdrop:O,quality:e,update:zi,react:ic,hitTargets:{head:K,body:X,wings:V},setHappy(oe){D.happy=oe,zi(0)},stats:{triangles:Math.round(re),drawCalls:te,shells:i.shells,locks:W,vertices:Math.round(xe)},lights:r,dispose(){let oe=new Set(a);d.traverse((me)=>{let he=me;if(he.geometry)oe.add(he.geometry)}),oe.add(O.geometry);for(let me of oe)me.dispose();for(let me of l)me.dispose();return d.clear(),{geometries:oe.size,materials:l.size}}}}function bm(e,t,n){if(!n||n<=0||t<=0)return!0;return e-t>=1000/n-4}function ec(e,t=2){let n=e&&e>0?e:1;return Math.min(t>0?t:2,n)}var Ci=new R(0,0.86,0),tc=4.3;function I1(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function L1(e){let t=(e.renderer??"").toLowerCase();if(/swiftshader|llvmpipe|software|basic render/.test(t))return"low";let n=e.cores??4;if(n<=4||e.memory!==void 0&&e.memory<=3)return"low";if(e.mobile||/apple gpu|mali|adreno|powervr/.test(t))return"med";return n>=8?"high":"med"}var Mm={high:"med",med:"low",low:null};function Sm(e,t){if(!I1())throw Error("WebGL 2 ist auf diesem Gerät nicht verfügbar");let n=document.createElement("canvas");n.className="p3d-gl",n.setAttribute("data-testid","kristall-canvas"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;touch-action:none;outline:none";let i=new sr({canvas:n,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!!t.qa});i.toneMapping=li,i.toneMappingExposure=1,i.outputColorSpace=xn,i.setClearColor(1512499,1),e.appendChild(n);let s=i.getContext(),r="";try{let ce=s.getExtension("WEBGL_debug_renderer_info");r=String(ce?s.getParameter(ce.UNMASKED_RENDERER_WEBGL):s.getParameter(s.RENDERER))}catch{}let o=navigator,a=L1({renderer:r,cores:o.hardwareConcurrency,memory:o.deviceMemory,mobile:/iPhone|iPad|Android|Mobile/.test(o.userAgent)}),l=t.quality&&t.quality!=="auto"?t.quality:a,c=!t.quality||t.quality==="auto",h=0,d=0;try{d=Number(s.getParameter(s.SAMPLES))||0}catch{}let u=t.a2c??d>=2,f=!1,m=new ci,v=new Zt(28,1,0.05,40);m.add(v),i.info.autoReset=!1;let p=null,g=null,_=[],b=(ce)=>{p?.dispose(),p=null,g?.dispose(),g=null,m.environment=null;for(let qe of _)v.remove(qe,qe.target),qe.dispose();_.length=0;let Pe=$l[ce];if(i.toneMapping=Pe.post?qs:li,i.toneMappingExposure=Pe.post?0.95:1,Pe.post)p=j0(i,m,v,{msaa:d>=2,bloom:[0.5,0.45,1.35]});if(Pe.physical){let qe=new Oi(i),N=Q0();g=qe.fromScene(N,0.035).texture,$0(N),qe.dispose(),m.environment=g,i.transmissionResolutionScale=0.5;for(let[vt,Ke,Mt]of[["#fff1ea",1.3,[-0.45,0.62,0.64]],["#5fe3ff",1.4,[-0.85,0.25,-0.45]],["#b98cff",1.6,[0.85,0.35,-0.4]]]){let be=new Cn(vt,Ke);be.position.set(Mt[0]*5,Mt[1]*5,Mt[2]*5),v.add(be,be.target),_.push(be)}}},y=()=>{if(i.info.reset(),g)m.environmentRotation.set(0,Math.atan2(v.position.x-Ci.x,v.position.z-Ci.z),0);if(p)p.render();else i.render(m,v);if(!u)return;s.colorMask(!1,!1,!1,!0),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.colorMask(!0,!0,!0,!0),i.resetState()};v.position.set(Ci.x,Ci.y+0.25,Ci.z+tc);let S=new rr(v,n);S.target.copy(Ci),S.enablePan=!1,S.enableDamping=!t.reducedMotion,S.dampingFactor=0.09,S.minDistance=tc*0.62,S.maxDistance=tc*1.35,S.minPolarAngle=1,S.maxPolarAngle=1.72,S.rotateSpeed=0.8;let T=!1,x=Zu(l,void 0,{a2c:u});m.add(x.backdrop,x.root),b(l);let M=()=>t.pixelRatio??ec(window.devicePixelRatio,$l[l].pixelRatio),E=()=>{let ce=Math.max(1,e.clientWidth),Pe=Math.max(1,e.clientHeight);i.setPixelRatio(M()),i.setSize(ce,Pe,!1),p?.setSize(ce,Pe,M()),v.aspect=ce/Pe,v.fov=ce/Pe<0.85?34:28,v.updateProjectionMatrix();let qe=Math.tan(v.fov*Math.PI/360),N=Math.max(1.38/qe,0.86/(qe*v.aspect));if(S.minDistance=N*0.62,S.maxDistance=N*1.35,!T)v.position.sub(S.target).setLength(N).add(S.target);ae=!0},L=new ie,I=-1e9,z=new R,W=new wl,P=null,X=(ce)=>{let Pe=n.getBoundingClientRect();L.set((ce.clientX-Pe.left)/Pe.width*2-1,-((ce.clientY-Pe.top)/Pe.height)*2+1)},G=(ce)=>{X(ce),I=performance.now()},F=(ce)=>{X(ce),I=performance.now(),P={x:ce.clientX,y:ce.clientY,t:performance.now()}},K=0,q=(ce)=>{let Pe=P;if(P=null,!Pe||Math.hypot(ce.clientX-Pe.x,ce.clientY-Pe.y)>8||performance.now()-Pe.t>450)return;if(X(ce),W.setFromCamera(L,v),W.intersectObject(x.hitTargets.head,!1).length)ke.react("purr");else if(W.intersectObjects(x.hitTargets.wings,!1).length)ke.react("flutter");else if(W.intersectObject(x.hitTargets.body,!1).length)ke.react("hop")};n.addEventListener("pointermove",G),n.addEventListener("pointerdown",F),n.addEventListener("pointerup",q);let H=!1,Z=0,ee=0,J=0,ae=!0,Ae=!0,Ne=!1,Oe=[],Ce=[],lt=(ce)=>ce.length?ce.reduce((Pe,qe)=>Pe+qe,0)/ce.length:0,He=(ce,Pe)=>{if(ce.push(Pe),ce.length>60)ce.shift()},ze=(ce)=>{let Pe=performance.now(),qe=performance.now()-I<1500;if(qe){W.setFromCamera(L,v);let N=v.position.distanceTo(Ci)-0.3;z.copy(W.ray.origin).addScaledVector(W.ray.direction,N)}x.update(t.reducedMotion?0:ce,{look:qe&&!t.reducedMotion?z:null}),S.update(),y(),J++,He(Ce,performance.now()-Pe)},ot=(ce)=>{if(H)return;if(Z=requestAnimationFrame(ot),!e.isConnected){ke.dispose();return}if(!Ae||Ne||document.hidden){ee=0;return}let Pe=ee?Math.min(0.05,(ce-ee)/1000):0.016666666666666666;if(ee)He(Oe,ce-ee);if(ee=ce,t.reducedMotion){if(!ae)return;ae=!1}if(ze(Pe),h++,c&&!t.qa&&!f&&!t.reducedMotion){if(h===140&&lt(Oe)>22&&Mm[l])f=!0,Xe(Mm[l])}};S.addEventListener("change",()=>ae=!0),S.addEventListener("start",()=>T=!0);let se=()=>ae=!0;document.addEventListener("visibilitychange",se);let ge=new ResizeObserver(E);ge.observe(e);let ve=null;if(typeof IntersectionObserver==="function")ve=new IntersectionObserver((ce)=>{Ae=ce.some((Pe)=>Pe.isIntersecting),ae=!0}),ve.observe(e);let Le=(ce)=>{ce.preventDefault(),Ne=!0,t.onStatus?.("lost")},Ie=()=>{Ne=!1,ae=!0,t.onStatus?.("restored")};n.addEventListener("webglcontextlost",Le),n.addEventListener("webglcontextrestored",Ie);function Xe(ce){if(H||ce===l)return;h=0,m.remove(x.root,x.backdrop),x.dispose(),l=ce,x=Zu(ce,void 0,{a2c:u}),m.add(x.backdrop,x.root),b(ce),Oe.length=0,Ce.length=0,E(),ze(0),t.onQuality?.(ce)}let ke={get quality(){return l},get auto(){return c},setQuality(ce){if(ce==="auto"){c=!0,f=!1,h=0,Oe.length=0,Xe(a);return}c=!1,Xe(ce)},react(ce){if(t.reducedMotion){x.setHappy(!0),ae=!0,window.clearTimeout(K),K=window.setTimeout(()=>{if(H)return;x.setHappy(!1),ae=!0},1400);return}x.react(ce)},rotateBy(ce){let Pe=v.position.clone().sub(S.target);Pe.applyAxisAngle(new R(0,1,0),ce),v.position.copy(S.target).add(Pe),S.update(),ae=!0},probe(){y();let{drawingBufferWidth:ce,drawingBufferHeight:Pe}=s,qe=new Uint8Array(4),N=0,vt=0;for(let Ke=1;Ke<12;Ke++)for(let Mt=1;Mt<12;Mt++)if(s.readPixels(Math.floor(Mt/12*ce),Math.floor(Ke/12*Pe),1,1,s.RGBA,s.UNSIGNED_BYTE,qe),vt++,qe[0]+qe[1]+qe[2]>330)N++;return{lit:N,total:vt}},get stats(){return{quality:l,triangles:x.stats.triangles,drawCalls:x.stats.drawCalls,frameMs:Math.round(lt(Oe)*10)/10,cpuMs:Math.round(lt(Ce)*100)/100,frames:J,autoDowngraded:f,msaa:d,a2c:u,post:!!p,gpuCalls:i.info.render.calls}},get disposed(){return H},qaView(ce,Pe=6,qe=1){let N=ce*Math.PI/180,vt=Pe*Math.PI/180,Ke=tc*qe;v.position.set(Ci.x+Math.sin(N)*Math.cos(vt)*Ke,Ci.y+Math.sin(vt)*Ke,Ci.z+Math.cos(N)*Math.cos(vt)*Ke),v.lookAt(Ci),S.update(),y()},qaTime(ce){let Pe=Math.round(ce*60);for(let qe=0;qe<Pe;qe++)x.update(0.016666666666666666);y()},dispose(){if(H)return;H=!0,cancelAnimationFrame(Z),window.clearTimeout(K),ge.disconnect(),ve?.disconnect(),document.removeEventListener("visibilitychange",se),n.removeEventListener("pointermove",G),n.removeEventListener("pointerdown",F),n.removeEventListener("pointerup",q),n.removeEventListener("webglcontextlost",Le),n.removeEventListener("webglcontextrestored",Ie),S.dispose(),m.remove(x.root,x.backdrop),x.dispose(),b("low"),i.dispose(),i.forceContextLoss(),n.remove()}};if(E(),ze(0),window.__ONE_ASCEND_KRISTALL__=ke,t.onStatus?.("ready"),t.qa){let ce=window;ce.__ONE_ASCEND_KRISTALL_QA__=ke,ce.__ONE_ASCEND_KRISTALL_SCENE__=m}else Z=requestAnimationFrame(ot);return ke}var D1=0.45,N1=0.5;function O1(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function ju(e,t=128){let n=document.createElement("canvas");n.width=n.height=t;let i=n.getContext("2d"),s=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);for(let[o,a]of e)s.addColorStop(o,a);i.fillStyle=s,i.fillRect(0,0,t,t);let r=new ll(n);return r.colorSpace=xn,r}var F1=(e)=>1-Math.pow(1-Math.min(1,Math.max(0,e)),3),U1=(e)=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)},B1=(e)=>{let t=Math.min(1,Math.max(0,e));return 1+2.2*Math.pow(t-1,3)+1.2*Math.pow(t-1,2)},nc=[],z1={left:"#45e1da",right:"#a99bff",strength:0.55,power:2.4},Ju=(e,t)=>{let n=u0(e,{coat:t});return d0(n.rig.root,z1),n},ua=null;function G1(e,t){let n=`${e}|${ns(t)}`;if(ua?.key===n)return;ua?.creature.dispose(),ua={key:n,creature:Ju(e,t)}}function k1(e,t){let n=ua;if(ua=null,n&&n.key===`${e}|${ns(t)}`)return n.creature;return n?.creature.dispose(),Ju(e,t)}function H1(e,t){let n=e;if(!n)throw Error("3D-Bühne: kein Container");if(!O1())throw Error("WebGL 2 ist auf diesem Gerät nicht verfügbar");let i=document.createElement("canvas");i.className="p3d-gl",i.setAttribute("data-testid","pet3d-canvas"),i.setAttribute("aria-hidden","true");let s=t.interactive!==!1;i.style.cssText=s?"display:block;width:100%;height:100%;touch-action:none;outline:none":"display:block;width:100%;height:100%;touch-action:auto;pointer-events:none;outline:none";let r;try{r=new sr({canvas:i,antialias:!0,alpha:!0,powerPreference:"default"})}catch(D){throw Error(`WebGL konnte nicht starten (${D instanceof Error?D.message:String(D)})`)}r.setPixelRatio(ec(window.devicePixelRatio,t.maxPixelRatio??2)),r.toneMapping=li,r.toneMappingExposure=0.92,r.outputColorSpace=xn,r.setClearColor(0,0),n.appendChild(i);let o=new ci,a=[],l=(D)=>(a.push(D),D),c=null,h=null,d=()=>{h?.dispose(),c?.dispose(),c=new Oi(r);let D=Hl();h=c.fromScene(D.scene,0.04),D.dispose(),o.environment=h.texture,o.environmentIntensity=0.6};d(),o.add(new jr(new Y("#d6ecff"),new Y("#2a1f48"),0.75));let u=new Cn(new Y("#fff1e0"),2);u.position.set(2.4,4.2,3.6);let f=new Cn(new Y("#3fe0d6"),2.6);f.position.set(-3.2,2.4,-2.8);let m=new Cn(new Y("#9a7bff"),1.6);m.position.set(3,1.6,-3);let v=new Cn(new Y("#ffffff"),0.45);v.position.set(0,1,5),o.add(u,f,m,v);let p=new Ft;o.add(p);let g=l(ju([[0,"rgba(63,224,214,0.34)"],[0.45,"rgba(110,90,255,0.14)"],[1,"rgba(10,15,30,0)"]])),_=new Qe(l(new rn(3.4,3.4)),l(new zt({map:g,transparent:!0,depthWrite:!1,blending:Zn})));_.rotation.x=-Math.PI/2,_.position.y=-0.004,p.add(_);let b=new Qe(l(new Ho(1.02,1.05,96)),l(new zt({color:new Y("#3fe0d6"),transparent:!0,opacity:0.32,depthWrite:!1})));b.rotation.x=-Math.PI/2,b.position.y=-0.002,p.add(b);let y=l(ju([[0,"rgba(3,6,14,0.78)"],[0.55,"rgba(3,6,14,0.35)"],[1,"rgba(3,6,14,0)"]])),S=l(new zt({map:y,transparent:!0,depthWrite:!1})),T=new Qe(l(new rn(1.5,1.5)),S);T.rotation.x=-Math.PI/2,T.position.y=0.003,p.add(T);let x=46,M=[],E=[],L=[new Y("#5ff2e8"),new Y("#b49bff"),new Y("#ffe08a"),new Y("#ffffff")],I=7,z=()=>(I=I*16807%2147483647,I/2147483647);for(let D=0;D<x;D++){let pe=z()*Math.PI*2,_e=0.9+z()*1.4;M.push(Math.cos(pe)*_e,z()*2.6,Math.sin(pe)*_e);let Ue=L[D%L.length];E.push(Ue.r,Ue.g,Ue.b)}let W=l(new gt);W.setAttribute("position",new Ge(M,3)),W.setAttribute("color",new Ge(E,3));let P=l(ju([[0,"rgba(255,255,255,1)"],[0.25,"rgba(255,255,255,0.65)"],[1,"rgba(255,255,255,0)"]],64)),X=new bs(W,l(new Qs({size:0.07,map:P,vertexColors:!0,transparent:!0,opacity:0.85,depthWrite:!1,blending:Zn,sizeAttenuation:!0})));o.add(X);let G=Float32Array.from(M),F=new Zt(30,1,0.1,60),K=new rr(F,i);K.enablePan=!1,K.enableDamping=!0,K.dampingFactor=0.08,K.rotateSpeed=0.85,K.zoomSpeed=0.6,K.minPolarAngle=Math.PI*0.2,K.maxPolarAngle=Math.PI*0.55,K.autoRotate=!t.reducedMotion&&s,K.enabled=s,K.autoRotateSpeed=1.1;let q=()=>{K.autoRotate=!1};K.addEventListener("start",q);let H=t.effects??"auto",Z=()=>{if(H==="on")return!0;if(H==="off")return!1;return(typeof navigator<"u"?navigator.hardwareConcurrency??4:4)>=4},ee=null,J=null,ae=!Z(),Ae=0,Ne=0,Oe=0,Ce=()=>{ae=!0,ee?.dispose(),J?.dispose(),ee=null,J=null},lt=()=>{if(ae||ee)return;ee=new Qo(r),ee.setPixelRatio(r.getPixelRatio()),ee.setSize(Math.max(1,be),Math.max(1,yt)),ee.addPass(new $o(o,F)),J=new ts(new ie(Math.max(1,be),Math.max(1,yt)),0.55,0.45,0.92),ee.addPass(J),ee.addPass(new ta)},He=k1(t.species,t.coat);o.add(He.rig.root);let ze=t.species,ot=ns(t.coat),{act:se,act:ge}=t,ve=-10,Le=-10,Ie=!!t.reducedMotion||!!t.still,Xe=!!t.still,ke=t.maxFps,ce=0,Pe=performance.now(),qe=()=>(performance.now()-Pe)/1000,N=5,vt=0.9,Ke=new R,Mt=(D)=>{let pe=He.rig.dims.height,_e=2,Ue=F.aspect||1,nt=F.fov*Math.PI/180,Re=pe*1.32/2/Math.tan(nt/2),mt=1.25/(Math.tan(nt/2)*Ue);if(N=Math.max(Re,mt,3.2),vt=pe*0.47,K.target.set(0,vt,0),K.minDistance=N*0.62,K.maxDistance=N*1.35,!D){let ft=new ir(N,Math.PI*0.44,0.42);F.position.setFromSpherical(ft).add(K.target)}else{let ft=new R().subVectors(F.position,K.target);ft.setLength(Math.min(K.maxDistance,Math.max(K.minDistance,ft.length()))),F.position.copy(K.target).add(ft)}K.update()},be=0,yt=0,et=()=>{let D=Math.max(1,Math.round(n.clientWidth)),pe=Math.max(1,Math.round(n.clientHeight));if(D===be&&pe===yt)return;let _e=be===0;be=D,yt=pe,r.setSize(D,pe,!1),ee?.setSize(D,pe),J?.resolution.set(D,pe),F.aspect=D/pe,F.updateProjectionMatrix(),Mt(!_e)},Ye=0,St=!0,C=typeof document>"u"||document.visibilityState!=="hidden",w=!1,V=!1,ue=0,le=null,fe=()=>{et();let D=qe(),pe=Tu(He.rig,se,D,{reduced:Ie}),_e=Ie?1:U1((D-ve)/D1);le=_e<1?Vl(Tu(He.rig,ge,D,{reduced:Ie}),pe,_e):pe,g0(He.rig,le,D);let Ue=Ie?1:B1(F1((D-Le)/N1)*0.999+0.001);He.rig.root.scale.setScalar(Math.max(0.01,Ue));let nt=Math.max(0,He.rig.root.position.y),Re=Math.max(0.35,1-nt*0.9);if(T.scale.set(Re*(He.rig.hovering?0.9:1.05),Re,1),S.opacity=Math.max(0.25,1-nt*1.1),!Ie){let ft=W.getAttribute("position");for(let bn=0;bn<x;bn++){let zi=(G[bn*3+1]+D*0.08*(0.5+bn%5*0.2))%2.6;ft.setY(bn,zi)}ft.needsUpdate=!0,X.rotation.y=D*0.03}if(b.material.opacity=0.22+0.1*Math.sin(D*1.4),Ke.set(0,vt-0.12*le.wall,0.42*le.wall).sub(K.target).multiplyScalar(Ie?1:0.08),K.target.add(Ke),F.position.add(Ke),K.update(),lt(),ee)ee.render();else r.render(o,F);let mt=performance.now();if(ee&&H==="auto"&&Oe>0){let ft=mt-Oe;if(ft<250)Ae++,Ne+=ft;if(Ae>=90&&Ne/Ae>25)Ce();if(Ae>=90)Ae=Ne=0}if(Oe=mt,ue++,ue===1)t.onStatus?.("ready")},Me=()=>{if(Ye=0,V||w||!St||!C)return;let D=performance.now();if(bm(D,ce,ke))ce=D,fe();Ye=requestAnimationFrame(Me)},Q=()=>{if(Xe)return;if(!Ye&&!V&&!w&&St&&C)Ye=requestAnimationFrame(Me)},ne=()=>{if(Ye)cancelAnimationFrame(Ye);Ye=0},Se=()=>{if(C=document.visibilityState!=="hidden",C)Q();else ne()};document.addEventListener("visibilitychange",Se);let O=null;if(typeof IntersectionObserver<"u")O=new IntersectionObserver((D)=>{if(St=D.some((pe)=>pe.isIntersecting),St)Q();else ne()}),O.observe(n);let re=null;if(typeof ResizeObserver<"u")re=new ResizeObserver(()=>{if(!Ye&&!V&&!w)fe()}),re.observe(n);let te=window.setInterval(()=>{if(!n.isConnected||!i.isConnected)Te.dispose()},1000),xe=(D)=>{D.preventDefault(),w=!0,ne(),t.onStatus?.("lost")},ye=()=>{if(w=!1,d(),t.onStatus?.("restored"),Xe)fe();Q()};i.addEventListener("webglcontextlost",xe),i.addEventListener("webglcontextrestored",ye);let Te={get species(){return ze},get coat(){return ot},get act(){return se},get meshes(){return He.meshCount},get triangles(){return He.triangles},get bloom(){return!!ee},get disposed(){return V},get frames(){return ue},attach(D){if(V||!D||D===n)return;if(n=D,O?.disconnect(),O?.observe(n),re?.disconnect(),re?.observe(n),n.appendChild(i),!Ye&&!w)fe();Q()},setAct(D){if(V||D===se)return;if(ge=se,se=D,ve=qe(),!Ye)fe()},setSpecies(D,pe){if(V||D===ze&&ns(pe)===ot)return;let _e=He;if(o.remove(_e.rig.root),_e.dispose(),He=Ju(D,pe),ot=ns(pe),o.add(He.rig.root),ze=D,Le=qe(),ve=-10,ge=se,Mt(!0),!Ye)fe()},rotateBy(D){if(V)return;q();let pe=new R().subVectors(F.position,K.target);if(pe.applyAxisAngle(new R(0,1,0),D),F.position.copy(K.target).add(pe),K.update(),!Ye)fe()},probe(){if(V||w)return{lit:0,total:0};fe();let D=r.getContext(),{drawingBufferWidth:pe,drawingBufferHeight:_e}=D,Ue=new Uint8Array(4),nt=0,Re=0;for(let mt=0;mt<24;mt++)for(let ft=0;ft<16;ft++)if(D.readPixels(Math.floor((ft+0.5)/16*pe),Math.floor((mt+0.5)/24*_e),1,1,D.RGBA,D.UNSIGNED_BYTE,Ue),Re++,Ue[3]>8&&Ue[0]+Ue[1]+Ue[2]>24)nt++;return{lit:nt,total:Re}},dispose(){if(V)return;V=!0,ne(),window.clearInterval(te),document.removeEventListener("visibilitychange",Se),O?.disconnect(),re?.disconnect(),i.removeEventListener("webglcontextlost",xe),i.removeEventListener("webglcontextrestored",ye),K.removeEventListener("start",q),K.dispose(),o.remove(He.rig.root),He.dispose();for(let pe of a)pe.dispose();ee?.dispose(),J?.dispose(),o.environment=null,h?.dispose(),c?.dispose(),r.dispose(),r.forceContextLoss(),i.remove();let D=nc.indexOf(Te);if(D>=0)nc.splice(D,1)}};return nc.push(Te),et(),fe(),Q(),Te}var V1={version:1,mount:H1,prebuild:G1,mountPremium:Z0,mountKristall:Sm,get instances(){return nc.slice()}};window.__ONE_ASCEND_PET3D__=V1;window.dispatchEvent(new Event("one-ascend-pet3d-ready"));
