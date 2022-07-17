(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(c,a,b){"use strict";b.d(a,{"$s":function(){return N},BH:function(){return n},L:function(){return j},LL:function(){return z},Mn:function(){return u},ZR:function(){return y},"b$":function(){return r},d:function(){return s},eu:function(){return w},hl:function(){return v},m9:function(){return O},ne:function(){return J},pd:function(){return I},ru:function(){return q},tV:function(){return k},uI:function(){return p},vZ:function(){return E},w1:function(){return t},xO:function(){return G},xb:function(){return D},"z$":function(){return o},zI:function(){return x},zd:function(){return H}});/* unused harmony exports CONSTANTS, MAX_VALUE_MILLIS, RANDOM_FACTOR, Sha1, assert, assertionError, async, base64, base64Encode, contains, createMockUserToken, decode, deepCopy, deepExtend, errorPrefix, getGlobal, isAdmin, isBrowser, isNode, isNodeSdk, isSafari, isValidFormat, isValidTimestamp, issuedAtTime, jsonEval, map, ordinal, promiseWithTimeout, safeGet, stringLength, stringToByteArray, stringify, uuidv4, validateArgCount, validateCallback, validateContextObject, validateNamespace */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ let d={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},e=function(a){return Error("Firebase Database ("+d.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)},f=function(e){let b=[],c=0;for(let d=0;d<e.length;d++){let a=e.charCodeAt(d);a<128?b[c++]=a:a<2048?(b[c++]=a>>6|192,b[c++]=63&a|128):(64512&a)==55296&&d+1<e.length&&(64512&e.charCodeAt(d+1))==56320?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++d)),b[c++]=a>>18|240,b[c++]=a>>12&63|128,b[c++]=a>>6&63|128,b[c++]=63&a|128):(b[c++]=a>>12|224,b[c++]=a>>6&63|128,b[c++]=63&a|128)}return b},g=function(b){let d=[],c=0,e=0;for(;c<b.length;){let a=b[c++];if(a<128)d[e++]=String.fromCharCode(a);else if(a>191&&a<224){let g=b[c++];d[e++]=String.fromCharCode((31&a)<<6|63&g)}else if(a>239&&a<365){let h=b[c++],i=b[c++],j=b[c++],f=((7&a)<<18|(63&h)<<12|(63&i)<<6|63&j)-65536;d[e++]=String.fromCharCode(55296+(f>>10)),d[e++]=String.fromCharCode(56320+(1023&f))}else{let k=b[c++],l=b[c++];d[e++]=String.fromCharCode((15&a)<<12|(63&k)<<6|63&l)}}return d.join("")},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(a,l){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();let c=l?this.byteToCharMapWebSafe_:this.byteToCharMap_,d=[];for(let b=0;b<a.length;b+=3){let e=a[b],f=b+1<a.length,g=f?a[b+1]:0,h=b+2<a.length,i=h?a[b+2]:0,m=e>>2,n=(3&e)<<4|g>>4,j=(15&g)<<2|i>>6,k=63&i;h||(k=64,f||(j=64)),d.push(c[m],c[n],c[j],c[k])}return d.join("")},encodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?btoa(a):this.encodeByteArray(f(a),b)},decodeString(a,b){return this.HAS_NATIVE_SUPPORT&&!b?atob(a):g(this.decodeStringToByteArray(a,b))},decodeStringToByteArray(b,i){this.init_();let c=i?this.charToByteMapWebSafe_:this.charToByteMap_,d=[];for(let a=0;a<b.length;){let h=c[b.charAt(a++)],j=a<b.length,f=j?c[b.charAt(a)]:0;++a;let k=a<b.length,e=k?c[b.charAt(a)]:64;++a;let l=a<b.length,g=l?c[b.charAt(a)]:64;if(++a,null==h||null==f||null==e||null==g)throw Error();let m=h<<2|f>>4;if(d.push(m),64!==e){let n=f<<4&240|e>>2;if(d.push(n),64!==g){let o=e<<6&192|g;d.push(o)}}}return d},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}},i=function(a){let b=f(a);return h.encodeByteArray(b,!0)},j=function(a){return i(a).replace(/\./g,"")},k=function(a){try{return h.decodeString(a,!0)}catch(b){console.error("base64Decode failed: ",b)}return null};function l(b,a){if(!(a instanceof Object))return a;switch(a.constructor){case Date:let d=a;return new Date(d.getTime());case Object:void 0===b&&(b={});break;case Array:b=[];break;default:return a}for(let c in a)a.hasOwnProperty(c)&&m(c)&&(b[c]=l(b[c],a[c]));return b}function m(a){return"__proto__"!==a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}wrapCallback(a){return(b,c)=>{b?this.reject(b):this.resolve(c),"function"==typeof a&&(this.promise.catch(()=>{}),1===a.length?a(b):a(b,c))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function o(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(o())}function q(){let a="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof a&& void 0!==a.id}function r(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function s(){return o().indexOf("Electron/")>=0}function t(){let a=o();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function u(){return o().indexOf("MSAppHost/")>=0}function v(){return"object"==typeof indexedDB}function w(){return new Promise((e,b)=>{try{let f=!0,c="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(c);a.onsuccess=()=>{a.result.close(),f||self.indexedDB.deleteDatabase(c),e(!0)},a.onupgradeneeded=()=>{f=!1},a.onerror=()=>{var c;b((null===(c=a.error)|| void 0===c?void 0:c.message)||"")}}catch(d){b(d)}})}function x(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class y extends Error{constructor(a,b,c){super(b),this.code=a,this.customData=c,this.name="FirebaseError",Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{constructor(a,b,c){this.service=a,this.serviceName=b,this.errors=c}create(a,...e){let b=e[0]||{},c=`${this.service}/${a}`,d=this.errors[a],f=d?A(d,b):"Error",g=`${this.serviceName}: ${f} (${c}).`,h=new y(c,g,b);return h}}function A(a,b){return a.replace(B,(d,a)=>{let c=b[a];return null!=c?String(c):`<${a}?>`})}let B=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function C(a){return JSON.parse(a)}function D(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}function E(a,b){if(a===b)return!0;let f=Object.keys(a),g=Object.keys(b);for(let c of f){if(!g.includes(c))return!1;let d=a[c],e=b[c];if(F(d)&&F(e)){if(!E(d,e))return!1}else if(d!==e)return!1}for(let h of g)if(!f.includes(h))return!1;return!0}function F(a){return null!==a&&"object"==typeof a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function G(c){let a=[];for(let[d,b]of Object.entries(c))Array.isArray(b)?b.forEach(b=>{a.push(encodeURIComponent(d)+"="+encodeURIComponent(b))}):a.push(encodeURIComponent(d)+"="+encodeURIComponent(b));return a.length?"&"+a.join("&"):""}function H(a){let b={},c=a.replace(/^\?/,"").split("&");return c.forEach(a=>{if(a){let[c,d]=a.split("=");b[decodeURIComponent(c)]=decodeURIComponent(d)}}),b}function I(a){let b=a.indexOf("?");if(!b)return"";let c=a.indexOf("#",b);return a.substring(b,c>0?c:void 0)}function J(b,c){let a=new K(b,c);return a.subscribe.bind(a)}class K{constructor(b,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{b(this)}).catch(a=>{this.error(a)})}next(a){this.forEachObserver(b=>{b.next(a)})}error(a){this.forEachObserver(b=>{b.error(a)}),this.close(a)}complete(){this.forEachObserver(a=>{a.complete()}),this.close()}subscribe(b,c,d){let a;if(void 0===b&& void 0===c&& void 0===d)throw Error("Missing Observer.");void 0===(a=L(b,["next","error","complete"])?b:{next:b,error:c,complete:d}).next&&(a.next=M),void 0===a.error&&(a.error=M),void 0===a.complete&&(a.complete=M);let e=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch(b){}}),this.observers.push(a),e}unsubscribeOne(a){void 0!==this.observers&& void 0!==this.observers[a]&&(delete this.observers[a],this.observerCount-=1,0===this.observerCount&& void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(b){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,b)}sendOne(a,b){this.task.then(()=>{if(void 0!==this.observers&& void 0!==this.observers[a])try{b(this.observers[a])}catch(c){"undefined"!=typeof console&&console.error&&console.error(c)}})}close(a){!this.finalized&&(this.finalized=!0,void 0!==a&&(this.finalError=a),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L(a,c){if("object"!=typeof a||null===a)return!1;for(let b of c)if(b in a&&"function"==typeof a[b])return!0;return!1}function M(){}function N(b,c=1e3,d=2){let a=c*Math.pow(d,b);return Math.min(144e5,a+Math.round(.5*a*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function O(a){return a&&a._delegate?a._delegate:a}},65:function(E,x,a){"use strict";a.d(x,{Xb:function(){return bk},v0:function(){return cl},Aj:function(){return bm},e5:function(){return bl},w7:function(){return bn}});var g,h=a(4444),c=a(2238),F=function(a,b){return(F=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(c,a){for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(c[b]=a[b])})(a,b)},G=function(){return(G=Object.assign||function(d){for(var a,b=1,e=arguments.length;b<e;b++)for(var c in a=arguments[b])Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}).apply(this,arguments)};function H(b,e){var d={};for(var a in b)Object.prototype.hasOwnProperty.call(b,a)&&0>e.indexOf(a)&&(d[a]=b[a]);if(null!=b&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,a=Object.getOwnPropertySymbols(b);c<a.length;c++)0>e.indexOf(a[c])&&Object.prototype.propertyIsEnumerable.call(b,a[c])&&(d[a[c]]=b[a[c]]);return d}function I(a){return this instanceof I?(this.v=a,this):new I(a)}var y=a(3333),i=a(8463);function j(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let J=j,K=new h.LL("auth","Firebase",j()),L=new y.Yd("@firebase/auth");function M(a,...b){L.logLevel<=y.in.ERROR&&L.error(`Auth (${c.Jn}): ${a}`,...b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function N(a,...b){throw R(a,...b)}function O(a,...b){return R(a,...b)}function P(b,a,c){let d=Object.assign(Object.assign({},J()),{[a]:c}),e=new h.LL("auth","Firebase",d);return e.create(a,{appName:b.name})}function Q(b,a,d){let c=d;if(!(a instanceof c))throw c.name!==a.constructor.name&&N(b,"argument-error"),P(b,"argument-error",`Type of ${a.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function R(a,...b){if("string"!=typeof a){let d=b[0],c=[...b.slice(1)];return c[0]&&(c[0].appName=a.name),a._errorFactory.create(d,...c)}return K.create(a,...b)}function S(a,b,...c){if(!a)throw R(b,...c)}function T(b){let a="INTERNAL ASSERTION FAILED: "+b;throw M(a),Error(a)}function U(a,b){a||T(b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let V=new Map;function W(b){U(b instanceof Function,"Expected a class definition");let a=V.get(b);return a?(U(a instanceof b,"Instance stored in cache mismatched with class"),a):(a=new b,V.set(b,a),a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function X(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.href)||""}function Y(){var a;return"undefined"!=typeof self&&(null===(a=self.location)|| void 0===a?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */ class b{constructor(a,b){this.shortDelay=a,this.longDelay=b,U(b>a,"Short delay should be less than long delay!"),this.isMobile=(0,h.uI)()||(0,h.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===Y()||"https:"===Y()||(0,h.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z(b,a){U(b.emulator,"Emulator should always be set here");let{url:c}=b.emulator;return a?`${c}${a.startsWith("/")?a.slice(1):a}`:c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ${static initialize(c,a,b){this.fetchImpl=c,a&&(this.headersImpl=a),b&&(this.responseImpl=b)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Map from errors returned by the server to errors to developer visible errors
 */ let _={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},aa=new b(3e4,6e4);function ab(b,a){return b.tenantId&&!a.tenantId?Object.assign(Object.assign({},a),{tenantId:b.tenantId}):a}async function ac(a,c,d,e,b={}){return ad(a,b,async()=>{let f={},g={};e&&("GET"===c?g=e:f={body:JSON.stringify(e)});let i=(0,h.xO)(Object.assign({key:a.config.apiKey},g)).slice(1),b=await a._getAdditionalHeaders();return b["Content-Type"]="application/json",a.languageCode&&(b["X-Firebase-Locale"]=a.languageCode),$.fetch()(af(a,a.config.apiHost,d,i),Object.assign({method:c,headers:b,referrerPolicy:"no-referrer"},f))})}async function ad(a,j,k){a._canInitEmulator=!1;let l=Object.assign(Object.assign({},_),j);try{let e=new ag(a),d=await Promise.race([k(),e.promise]);e.clearNetworkTimeout();let b=await d.json();if("needConfirmation"in b)throw ah(a,"account-exists-with-different-credential",b);if(d.ok&&!("errorMessage"in b))return b;{let m=d.ok?b.errorMessage:b.error.message,[c,f]=m.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===c)throw ah(a,"credential-already-in-use",b);if("EMAIL_EXISTS"===c)throw ah(a,"email-already-in-use",b);if("USER_DISABLED"===c)throw ah(a,"user-disabled",b);let g=l[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw P(a,g,f);N(a,g)}}catch(i){if(i instanceof h.ZR)throw i;N(a,"network-request-failed")}}async function ae(b,c,d,e,f={}){let a=await ac(b,c,d,e,f);return"mfaPendingCredential"in a&&N(b,"multi-factor-auth-required",{_serverResponse:a}),a}function af(a,c,d,e){let b=`${c}${d}?${e}`;return a.config.emulator?Z(a.config,b):`${a.config.apiScheme}://${b}`}class ag{constructor(a){this.auth=a,this.timer=null,this.promise=new Promise((a,b)=>{this.timer=setTimeout(()=>b(O(this.auth,"network-request-failed")),aa.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ah(c,e,a){let b={appName:c.name};a.email&&(b.email=a.email),a.phoneNumber&&(b.phoneNumber=a.phoneNumber);let d=O(c,e,b);return d.customData._tokenResponse=a,d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ai(a,b){return ac(a,"POST","/v1/accounts:delete",b)}async function aj(a,b){return ac(a,"POST","/v1/accounts:lookup",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ak(a){if(a)try{let b=new Date(Number(a));if(!isNaN(b.getTime()))return b.toUTCString()}catch(c){}}async function al(e,f=!1){let c=(0,h.m9)(e),d=await c.getIdToken(f),a=an(d);S(a&&a.exp&&a.auth_time&&a.iat,c.auth,"internal-error");let b="object"==typeof a.firebase?a.firebase:void 0,g=null==b?void 0:b.sign_in_provider;return{claims:a,token:d,authTime:ak(am(a.auth_time)),issuedAtTime:ak(am(a.iat)),expirationTime:ak(am(a.exp)),signInProvider:g||null,signInSecondFactor:(null==b?void 0:b.sign_in_second_factor)||null}}function am(a){return 1e3*Number(a)}function an(d){var a;let[e,b,f]=d.split(".");if(void 0===e|| void 0===b|| void 0===f)return M("JWT malformed, contained fewer than 3 sections"),null;try{let c=(0,h.tV)(b);if(!c)return M("Failed to decode base64 JWT payload"),null;return JSON.parse(c)}catch(g){return M("Caught error parsing JWT payload as JSON",null===(a=g)|| void 0===a?void 0:a.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ao(a,c,d=!1){if(d)return c;try{return await c}catch(b){throw b instanceof h.ZR&&ap(b)&&a.auth.currentUser===a&&await a.auth.signOut(),b}}function ap({code:a}){return"auth/user-disabled"===a||"auth/user-token-expired"===a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aq{constructor(a,b){this.createdAt=a,this.lastLoginAt=b,this._initializeTime()}_initializeTime(){this.lastSignInTime=ak(this.lastLoginAt),this.creationTime=ak(this.createdAt)}_copy(a){this.createdAt=a.createdAt,this.lastLoginAt=a.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ar(b){var c;let f=b.auth,g=await b.getIdToken(),d=await ao(b,aj(f,{idToken:g}));S(null==d?void 0:d.users.length,f,"internal-error");let a=d.users[0];b._notifyReloadListener(a);let h=(null===(c=a.providerUserInfo)|| void 0===c?void 0:c.length)?au(a.providerUserInfo):[],e=at(b.providerData,h),i=b.isAnonymous,j=!(b.email&&a.passwordHash)&&!(null==e?void 0:e.length),k={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:e,metadata:new aq(a.createdAt,a.lastLoginAt),isAnonymous:!!i&&j};Object.assign(b,k)}async function as(b){let a=(0,h.m9)(b);await ar(a),await a.auth._persistUserIfCurrent(a),a.auth._notifyListenersIfCurrent(a)}function at(a,b){let c=a.filter(a=>!b.some(b=>b.providerId===a.providerId));return[...c,...b]}function au(a){return a.map(b=>{var{providerId:c}=b,a=H(b,["providerId"]);return{providerId:c,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function av(b,c){let a=await ad(b,{},async()=>{let d=(0,h.xO)({grant_type:"refresh_token",refresh_token:c}).slice(1),{tokenApiHost:e,apiKey:f}=b.config,g=af(b,e,"/v1/token",`key=${f}`),a=await b._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$.fetch()(g,{method:"POST",headers:a,body:d})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */ class aw{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(a){S(a.idToken,"internal-error"),S(void 0!==a.idToken,"internal-error"),S(void 0!==a.refreshToken,"internal-error");let b="expiresIn"in a&& void 0!==a.expiresIn?Number(a.expiresIn):function(b){let a=an(b);return S(a,"internal-error"),S(void 0!==a.exp,"internal-error"),S(void 0!==a.iat,"internal-error"),Number(a.exp)-Number(a.iat)}(a.idToken);this.updateTokensAndExpiration(a.idToken,a.refreshToken,b)}async getToken(a,b=!1){return(S(!this.accessToken||this.refreshToken,a,"user-token-expired"),b||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(a,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(a,b){let{accessToken:c,refreshToken:d,expiresIn:e}=await av(a,b);this.updateTokensAndExpiration(c,d,Number(e))}updateTokensAndExpiration(a,b,c){this.refreshToken=b||null,this.accessToken=a||null,this.expirationTime=Date.now()+1e3*c}static fromJSON(b,f){let{refreshToken:c,accessToken:d,expirationTime:e}=f,a=new aw;return c&&(S("string"==typeof c,"internal-error",{appName:b}),a.refreshToken=c),d&&(S("string"==typeof d,"internal-error",{appName:b}),a.accessToken=d),e&&(S("number"==typeof e,"internal-error",{appName:b}),a.expirationTime=e),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(a){this.accessToken=a.accessToken,this.refreshToken=a.refreshToken,this.expirationTime=a.expirationTime}_clone(){return Object.assign(new aw,this.toJSON())}_performRefresh(){return T("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ax(a,b){S("string"==typeof a|| void 0===a,"internal-error",{appName:b})}class ay{constructor(b){var{uid:d,auth:e,stsTokenManager:c}=b,a=H(b,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.user=a,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){!this.isRunning&&(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(b){var a;if(b){let c=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),c}{this.errorBackoff=3e4;let d=null!==(a=this.user.stsTokenManager.expirationTime)&& void 0!==a?a:0,e=d-Date.now()-3e5;return Math.max(0,e)}}schedule(a=!1){if(!this.isRunning)return;let b=this.getInterval(a);this.timerId=setTimeout(async()=>{await this.iteration()},b)}async iteration(){var a;try{await this.user.getIdToken(!0)}catch(b){(null===(a=b)|| void 0===a?void 0:a.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=d,this.auth=e,this.stsTokenManager=c,this.accessToken=c.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new aq(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(b){let a=await ao(this,this.stsTokenManager.getToken(this.auth,b));return S(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(a){return al(this,a)}reload(){return as(this)}_assign(a){this!==a&&(S(this.uid===a.uid,this.auth,"internal-error"),this.displayName=a.displayName,this.photoURL=a.photoURL,this.email=a.email,this.emailVerified=a.emailVerified,this.phoneNumber=a.phoneNumber,this.isAnonymous=a.isAnonymous,this.tenantId=a.tenantId,this.providerData=a.providerData.map(a=>Object.assign({},a)),this.metadata._copy(a.metadata),this.stsTokenManager._assign(a.stsTokenManager))}_clone(a){return new ay(Object.assign(Object.assign({},this),{auth:a,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(a){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=a,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(a){this.reloadListener?this.reloadListener(a):this.reloadUserInfo=a}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(a,c=!1){let b=!1;a.idToken&&a.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(a),b=!0),c&&await ar(this),await this.auth._persistUserIfCurrent(this),b&&this.auth._notifyListenersIfCurrent(this)}async delete(){let a=await this.getIdToken();return await ao(this,ai(this.auth,{idToken:a})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(a=>Object.assign({},a)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(a,b){var c,d,e,f,g,h,i,j;let o=null!==(c=b.displayName)&& void 0!==c?c:void 0,p=null!==(d=b.email)&& void 0!==d?d:void 0,q=null!==(e=b.phoneNumber)&& void 0!==e?e:void 0,r=null!==(f=b.photoURL)&& void 0!==f?f:void 0,s=null!==(g=b.tenantId)&& void 0!==g?g:void 0,k=null!==(h=b._redirectEventId)&& void 0!==h?h:void 0,t=null!==(i=b.createdAt)&& void 0!==i?i:void 0,u=null!==(j=b.lastLoginAt)&& void 0!==j?j:void 0,{uid:l,emailVerified:v,isAnonymous:w,providerData:m,stsTokenManager:x}=b;S(l&&x,a,"internal-error");let y=aw.fromJSON(this.name,x);S("string"==typeof l,a,"internal-error"),ax(o,a.name),ax(p,a.name),S("boolean"==typeof v,a,"internal-error"),S("boolean"==typeof w,a,"internal-error"),ax(q,a.name),ax(r,a.name),ax(s,a.name),ax(k,a.name),ax(t,a.name),ax(u,a.name);let n=new ay({uid:l,auth:a,email:p,emailVerified:v,displayName:o,isAnonymous:w,photoURL:r,phoneNumber:q,tenantId:s,stsTokenManager:y,createdAt:t,lastLoginAt:u});return m&&Array.isArray(m)&&(n.providerData=m.map(a=>Object.assign({},a))),k&&(n._redirectEventId=k),n}static async _fromIdTokenResponse(d,a,e=!1){let b=new aw;b.updateFromServerResponse(a);let c=new ay({uid:a.localId,auth:d,stsTokenManager:b,isAnonymous:e});return await ar(c),c}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class k{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(a,b){this.storage[a]=b}async _get(b){let a=this.storage[b];return void 0===a?null:a}async _remove(a){delete this.storage[a]}_addListener(a,b){}_removeListener(a,b){}}k.type="NONE";let az=k;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aA(a,b,c){return`firebase:${a}:${b}:${c}`}class aB{constructor(d,a,e){this.persistence=d,this.auth=a,this.userKey=e;let{config:b,name:c}=this.auth;this.fullUserKey=aA(this.userKey,b.apiKey,c),this.fullPersistenceKey=aA("persistence",b.apiKey,c),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(a){return this.persistence._set(this.fullUserKey,a.toJSON())}async getCurrentUser(){let a=await this.persistence._get(this.fullUserKey);return a?ay._fromJSON(this.auth,a):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(a){if(this.persistence===a)return;let b=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=a,b)return this.setCurrentUser(b)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(b,c,d="authUser"){if(!c.length)return new aB(W(az),b,d);let g=(await Promise.all(c.map(async a=>{if(await a._isAvailable())return a}))).filter(a=>a),a=g[0]||W(az),h=aA(d,b.config.apiKey,b.name),e=null;for(let f of c)try{let i=await f._get(h);if(i){let k=ay._fromJSON(b,i);f!==a&&(e=k),a=f;break}}catch(l){}let j=g.filter(a=>a._shouldAllowMigration);return a._shouldAllowMigration&&j.length&&(a=j[0],e&&await a._set(h,e.toJSON()),await Promise.all(c.map(async b=>{if(b!==a)try{await b._remove(h)}catch(c){}}))),new aB(a,b,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Determine the browser for the purposes of reporting usage to the API
 */ function aC(c){let a=c.toLowerCase();if(a.includes("opera/")||a.includes("opr/")||a.includes("opios/"))return"Opera";if(aG(a))return"IEMobile";if(a.includes("msie")||a.includes("trident/"))return"IE";{if(a.includes("edge/"))return"Edge";if(aD(a))return"Firefox";if(a.includes("silk/"))return"Silk";if(aI(a))return"Blackberry";if(aJ(a))return"Webos";if(aE(a))return"Safari";if((a.includes("chrome/")||aF(a))&&!a.includes("edge/"))return"Chrome";if(aH(a))return"Android";let d=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,b=c.match(d);if((null==b?void 0:b.length)===2)return b[1]}return"Other"}function aD(a=(0,h.z$)()){return/firefox\//i.test(a)}function aE(b=(0,h.z$)()){let a=b.toLowerCase();return a.includes("safari/")&&!a.includes("chrome/")&&!a.includes("crios/")&&!a.includes("android")}function aF(a=(0,h.z$)()){return/crios\//i.test(a)}function aG(a=(0,h.z$)()){return/iemobile/i.test(a)}function aH(a=(0,h.z$)()){return/android/i.test(a)}function aI(a=(0,h.z$)()){return/blackberry/i.test(a)}function aJ(a=(0,h.z$)()){return/webos/i.test(a)}function aK(a=(0,h.z$)()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function aL(a=(0,h.z$)()){return aK(a)||aH(a)||aJ(a)||aI(a)||/windows phone/i.test(a)||aG(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * Determine the SDK version string
 */ function aM(b,d=[]){let a;switch(b){case"Browser":a=aC((0,h.z$)());break;case"Worker":a=`${aC((0,h.z$)())}-${b}`;break;default:a=b}let e=d.length?d.join(","):"FirebaseCore-web";return`${a}/JsCore/${c.Jn}/${e}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aN{constructor(a,c,b){this.app=a,this.heartbeatServiceProvider=c,this.config=b,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new aP(this),this.idTokenSubscription=new aP(this),this.beforeStateQueue=new /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.auth=a,this.queue=[]}pushCallback(c,b){let a=a=>new Promise((b,d)=>{try{let e=c(a);b(e)}catch(f){d(f)}});a.onAbort=b,this.queue.push(a);let d=this.queue.length-1;return()=>{this.queue[d]=()=>Promise.resolve()}}async runMiddleware(d){var a;if(this.auth.currentUser===d)return;let b=[];try{for(let c of this.queue)await c(d),c.onAbort&&b.push(c.onAbort)}catch(e){for(let f of(b.reverse(),b))try{f()}catch(g){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(a=e)|| void 0===a?void 0:a.message})}}}(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=K,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=a.name,this.clientVersion=b.sdkClientVersion}_initializeWithPersistence(b,a){return a&&(this._popupRedirectResolver=W(a)),this._initializationPromise=this.queue(async()=>{var c,d;if(!this._deleted&&(this.persistenceManager=await aB.create(this,b),!this._deleted)){if(null===(c=this._popupRedirectResolver)|| void 0===c?void 0:c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(a),this.lastNotifiedUid=(null===(d=this.currentUser)|| void 0===d?void 0:d.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let a=await this.assertedPersistence.getCurrentUser();if(this.currentUser||a){if(this.currentUser&&a&&this.currentUser.uid===a.uid){this._currentUser._assign(a),await this.currentUser.getIdToken();return}await this._updateCurrentUser(a,!0)}}async initializeCurrentUser(d){var b;let e=await this.assertedPersistence.getCurrentUser(),a=e,f=!1;if(d&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let g=null===(b=this.redirectUser)|| void 0===b?void 0:b._redirectEventId,h=null==a?void 0:a._redirectEventId,c=await this.tryRedirectSignIn(d);(!g||g===h)&&(null==c?void 0:c.user)&&(a=c.user,f=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(f)try{await this.beforeStateQueue.runMiddleware(a)}catch(i){a=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return(S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId)?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(b){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,b,!0)}catch(c){await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(b){var a;try{await ar(b)}catch(c){if((null===(a=c)|| void 0===a?void 0:a.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(b)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let a=navigator;return a.languages&&a.languages[0]||a.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(b){let a=b?(0,h.m9)(b):null;return a&&S(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(a,b=!1){if(!this._deleted)return a&&S(this.tenantId===a.tenantId,this,"tenant-id-mismatch"),b||await this.beforeStateQueue.runMiddleware(a),this.queue(async()=>{await this.directlySetCurrentUser(a),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(a){return this.queue(async()=>{await this.assertedPersistence.setPersistence(W(a))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(a){this._errorFactory=new h.LL("auth","Firebase",a())}onAuthStateChanged(a,b,c){return this.registerStateListener(this.authStateSubscription,a,b,c)}beforeAuthStateChanged(a,b){return this.beforeStateQueue.pushCallback(a,b)}onIdTokenChanged(a,b,c){return this.registerStateListener(this.idTokenSubscription,a,b,c)}toJSON(){var a;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(a=this._currentUser)|| void 0===a?void 0:a.toJSON()}}async _setRedirectUser(a,c){let b=await this.getOrInitRedirectPersistenceManager(c);return null===a?b.removeCurrentUser():b.setCurrentUser(a)}async getOrInitRedirectPersistenceManager(a){if(!this.redirectPersistenceManager){let b=a&&W(a)||this._popupRedirectResolver;S(b,this,"argument-error"),this.redirectPersistenceManager=await aB.create(this,[W(b._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(c){var a,b;return(this._isInitialized&&await this.queue(async()=>{}),(null===(a=this._currentUser)|| void 0===a?void 0:a._redirectEventId)===c)?this._currentUser:(null===(b=this.redirectUser)|| void 0===b?void 0:b._redirectEventId)===c?this.redirectUser:null}async _persistUserIfCurrent(a){if(a===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(a))}_notifyListenersIfCurrent(a){a===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var a,b;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let c=null!==(b=null===(a=this.currentUser)|| void 0===a?void 0:a.uid)&& void 0!==b?b:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(b,a,d,e){if(this._deleted)return()=>{};let f="function"==typeof a?a:a.next.bind(a),c=this._isInitialized?Promise.resolve():this._initializationPromise;return(S(c,this,"internal-error"),c.then(()=>f(this.currentUser)),"function"==typeof a)?b.addObserver(a,d,e):b.addObserver(a)}async directlySetCurrentUser(a){this.currentUser&&this.currentUser!==a&&(this._currentUser._stopProactiveRefresh(),a&&this.isProactiveRefreshEnabled&&a._startProactiveRefresh()),this.currentUser=a,a?await this.assertedPersistence.setCurrentUser(a):await this.assertedPersistence.removeCurrentUser()}queue(a){return this.operations=this.operations.then(a,a),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(a){!(!a||this.frameworks.includes(a))&&(this.frameworks.push(a),this.frameworks.sort(),this.clientVersion=aM(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;let b={"X-Client-Version":this.clientVersion};this.app.options.appId&&(b["X-Firebase-gmpid"]=this.app.options.appId);let c=await (null===(a=this.heartbeatServiceProvider.getImmediate({optional:!0}))|| void 0===a?void 0:a.getHeartbeatsHeader());return c&&(b["X-Firebase-Client"]=c),b}}function aO(a){return(0,h.m9)(a)}class aP{constructor(a){this.auth=a,this.observer=null,this.addObserver=(0,h.ne)(a=>this.observer=a)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function aQ(a){if(!a)return null;let b=Number(a);return isNaN(b)?null:b}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */ class d{constructor(a,b){this.providerId=a,this.signInMethod=b}toJSON(){return T("not implemented")}_getIdTokenResponse(a){return T("not implemented")}_linkToIdToken(a,b){return T("not implemented")}_getReauthenticationResolver(a){return T("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aR(a,b){return ac(a,"POST","/v1/accounts:resetPassword",ab(a,b))}async function aS(a,b){return ac(a,"POST","/v1/accounts:update",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aT(a,b){return ae(a,"POST","/v1/accounts:signInWithPassword",ab(a,b))}async function aU(a,b){return ac(a,"POST","/v1/accounts:sendOobCode",ab(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aV(a,b){return ae(a,"POST","/v1/accounts:signInWithEmailLink",ab(a,b))}async function aW(a,b){return ae(a,"POST","/v1/accounts:signInWithEmailLink",ab(a,b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */ class aX extends d{constructor(a,b,c,d=null){super("password",c),this._email=a,this._password=b,this._tenantId=d}static _fromEmailAndPassword(a,b){return new aX(a,b,"password")}static _fromEmailAndCode(a,b,c=null){return new aX(a,b,"emailLink",c)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(b){let a="string"==typeof b?JSON.parse(b):b;if((null==a?void 0:a.email)&&(null==a?void 0:a.password)){if("password"===a.signInMethod)return this._fromEmailAndPassword(a.email,a.password);if("emailLink"===a.signInMethod)return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(a){switch(this.signInMethod){case"password":return aT(a,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aV(a,{email:this._email,oobCode:this._password});default:N(a,"internal-error")}}async _linkToIdToken(a,b){switch(this.signInMethod){case"password":return aS(a,{idToken:b,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return aW(a,{idToken:b,email:this._email,oobCode:this._password});default:N(a,"internal-error")}}_getReauthenticationResolver(a){return this._getIdTokenResponse(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aY(a,b){return ae(a,"POST","/v1/accounts:signInWithIdp",ab(a,b))}class aZ extends d{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(a){let b=new aZ(a.providerId,a.signInMethod);return a.idToken||a.accessToken?(a.idToken&&(b.idToken=a.idToken),a.accessToken&&(b.accessToken=a.accessToken),a.nonce&&!a.pendingToken&&(b.nonce=a.nonce),a.pendingToken&&(b.pendingToken=a.pendingToken)):a.oauthToken&&a.oauthTokenSecret?(b.accessToken=a.oauthToken,b.secret=a.oauthTokenSecret):N("argument-error"),b}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(c){let d="string"==typeof c?JSON.parse(c):c,{providerId:e,signInMethod:f}=d,b=H(d,["providerId","signInMethod"]);if(!e||!f)return null;let a=new aZ(e,f);return a.idToken=b.idToken||void 0,a.accessToken=b.accessToken||void 0,a.secret=b.secret,a.nonce=b.nonce,a.pendingToken=b.pendingToken||null,a}_getIdTokenResponse(a){let b=this.buildRequest();return aY(a,b)}_linkToIdToken(b,c){let a=this.buildRequest();return a.idToken=c,aY(b,a)}_getReauthenticationResolver(b){let a=this.buildRequest();return a.autoCreate=!1,aY(b,a)}buildRequest(){let b={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)b.pendingToken=this.pendingToken;else{let a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),b.postBody=(0,h.xO)(a)}return b}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a$(a,b){return ac(a,"POST","/v1/accounts:sendVerificationCode",ab(a,b))}async function a_(a,b){return ae(a,"POST","/v1/accounts:signInWithPhoneNumber",ab(a,b))}async function a0(a,c){let b=await ae(a,"POST","/v1/accounts:signInWithPhoneNumber",ab(a,c));if(b.temporaryProof)throw ah(a,"account-exists-with-different-credential",b);return b}let a1={USER_NOT_FOUND:"user-not-found"};async function a2(a,b){let c=Object.assign(Object.assign({},b),{operation:"REAUTH"});return ae(a,"POST","/v1/accounts:signInWithPhoneNumber",ab(a,c),a1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */ class a3 extends d{constructor(a){super("phone","phone"),this.params=a}static _fromVerification(a,b){return new a3({verificationId:a,verificationCode:b})}static _fromTokenResponse(a,b){return new a3({phoneNumber:a,temporaryProof:b})}_getIdTokenResponse(a){return a_(a,this._makeVerificationRequest())}_linkToIdToken(a,b){return a0(a,Object.assign({idToken:b},this._makeVerificationRequest()))}_getReauthenticationResolver(a){return a2(a,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:a,phoneNumber:b,verificationId:c,verificationCode:d}=this.params;return a&&b?{temporaryProof:a,phoneNumber:b}:{sessionInfo:c,code:d}}toJSON(){let a={providerId:this.providerId};return this.params.phoneNumber&&(a.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(a.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(a.verificationCode=this.params.verificationCode),this.params.verificationId&&(a.verificationId=this.params.verificationId),a}static fromJSON(a){"string"==typeof a&&(a=JSON.parse(a));let{verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}=a;return c||b||d||e?new a3({verificationId:b,verificationCode:c,phoneNumber:d,temporaryProof:e}):null}}class a4{constructor(l){var b,c,d,e,f,g;let a=(0,h.zd)((0,h.pd)(l)),i=null!==(b=a.apiKey)&& void 0!==b?b:null,j=null!==(c=a.oobCode)&& void 0!==c?c:null,k=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */ function(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(d=a.mode)&& void 0!==d?d:null);S(i&&j&&k,"argument-error"),this.apiKey=i,this.operation=k,this.code=j,this.continueUrl=null!==(e=a.continueUrl)&& void 0!==e?e:null,this.languageCode=null!==(f=a.languageCode)&& void 0!==f?f:null,this.tenantId=null!==(g=a.tenantId)&& void 0!==g?g:null}static parseLink(a){let b=function(a){let b=(0,h.zd)((0,h.pd)(a)).link,d=b?(0,h.zd)((0,h.pd)(b)).deep_link_id:null,c=(0,h.zd)((0,h.pd)(a)).deep_link_id,e=c?(0,h.zd)((0,h.pd)(c)).link:null;return e||c||d||b||a}(a);try{return new a4(b)}catch(c){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */ class f{constructor(){this.providerId=f.PROVIDER_ID}static credential(a,b){return aX._fromEmailAndPassword(a,b)}static credentialWithLink(b,c){let a=a4.parseLink(c);return S(a,"argument-error"),aX._fromEmailAndCode(b,a.code,a.tenantId)}}f.PROVIDER_ID="password",f.EMAIL_PASSWORD_SIGN_IN_METHOD="password",f.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */ class z{constructor(a){this.providerId=a,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(a){this.defaultLanguageCode=a}setCustomParameters(a){return this.customParameters=a,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */ class e extends z{constructor(){super(...arguments),this.scopes=[]}addScope(a){return this.scopes.includes(a)||this.scopes.push(a),this}getScopes(){return[...this.scopes]}}class a5 extends null{static credentialFromJSON(a){let b="string"==typeof a?JSON.parse(a):a;return S("providerId"in b&&"signInMethod"in b,"argument-error"),aZ._fromParams(b)}credential(a){return this._credential(Object.assign(Object.assign({},a),{nonce:a.rawNonce}))}_credential(a){return S(a.idToken||a.accessToken,"argument-error"),aZ._fromParams(Object.assign(Object.assign({},a),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(a){return a5.oauthCredentialFromTaggedObject(a)}static credentialFromError(a){return a5.oauthCredentialFromTaggedObject(a.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c,oauthTokenSecret:f,pendingToken:d,nonce:g,providerId:e}=a;if(!c&&!f&&!b&&!d||!e)return null;try{return new a5(e)._credential({idToken:b,accessToken:c,nonce:g,pendingToken:d})}catch(h){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class l extends e{constructor(){super("facebook.com")}static credential(a){return aZ._fromParams({providerId:l.PROVIDER_ID,signInMethod:l.FACEBOOK_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return l.credentialFromTaggedObject(a)}static credentialFromError(a){return l.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return l.credential(a.oauthAccessToken)}catch(b){return null}}}l.FACEBOOK_SIGN_IN_METHOD="facebook.com",l.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */ class m extends e{constructor(){super("google.com"),this.addScope("profile")}static credential(a,b){return aZ._fromParams({providerId:m.PROVIDER_ID,signInMethod:m.GOOGLE_SIGN_IN_METHOD,idToken:a,accessToken:b})}static credentialFromResult(a){return m.credentialFromTaggedObject(a)}static credentialFromError(a){return m.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthIdToken:b,oauthAccessToken:c}=a;if(!b&&!c)return null;try{return m.credential(b,c)}catch(d){return null}}}m.GOOGLE_SIGN_IN_METHOD="google.com",m.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */ class n extends e{constructor(){super("github.com")}static credential(a){return aZ._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:a})}static credentialFromResult(a){return n.credentialFromTaggedObject(a)}static credentialFromError(a){return n.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a||!("oauthAccessToken"in a)||!a.oauthAccessToken)return null;try{return n.credential(a.oauthAccessToken)}catch(b){return null}}}n.GITHUB_SIGN_IN_METHOD="github.com",n.PROVIDER_ID="github.com";class a6 extends null{constructor(a,b){super(a,a),this.pendingToken=b}_getIdTokenResponse(a){let b=this.buildRequest();return aY(a,b)}_linkToIdToken(b,c){let a=this.buildRequest();return a.idToken=c,aY(b,a)}_getReauthenticationResolver(b){let a=this.buildRequest();return a.autoCreate=!1,aY(b,a)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(a){let e="string"==typeof a?JSON.parse(a):a,{providerId:b,signInMethod:c,pendingToken:d}=e;return b&&c&&d&&b===c?new a6(b,d):null}static _create(a,b){return new a6(a,b)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class a7 extends null{constructor(a){S(a.startsWith("saml."),"argument-error"),super(a)}static credentialFromResult(a){return a7.samlCredentialFromTaggedObject(a)}static credentialFromError(a){return a7.samlCredentialFromTaggedObject(a.customData||{})}static credentialFromJSON(b){let a=a6.fromJSON(b);return S(a,"argument-error"),a}static samlCredentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{pendingToken:b,providerId:c}=a;if(!b||!c)return null;try{return a6._create(c,b)}catch(d){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */ class o extends e{constructor(){super("twitter.com")}static credential(a,b){return aZ._fromParams({providerId:o.PROVIDER_ID,signInMethod:o.TWITTER_SIGN_IN_METHOD,oauthToken:a,oauthTokenSecret:b})}static credentialFromResult(a){return o.credentialFromTaggedObject(a)}static credentialFromError(a){return o.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{oauthAccessToken:b,oauthTokenSecret:c}=a;if(!b||!c)return null;try{return o.credential(b,c)}catch(d){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function a8(a,b){return ae(a,"POST","/v1/accounts:signUp",ab(a,b))}o.TWITTER_SIGN_IN_METHOD="twitter.com",o.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class a9{constructor(a){this.user=a.user,this.providerId=a.providerId,this._tokenResponse=a._tokenResponse,this.operationType=a.operationType}static async _fromIdTokenResponse(b,c,a,d=!1){let e=await ay._fromIdTokenResponse(b,a,d),f=ba(a),g=new a9({user:e,providerId:f,_tokenResponse:a,operationType:c});return g}static async _forOperation(b,c,a){await b._updateTokensIfNecessary(a,!0);let d=ba(a);return new a9({user:b,providerId:d,_tokenResponse:a,operationType:c})}}function ba(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bb extends h.ZR{constructor(c,a,d,e){var b;super(a.code,a.message),this.operationType=d,this.user=e,Object.setPrototypeOf(this,bb.prototype),this.customData={appName:c.name,tenantId:null!==(b=c.tenantId)&& void 0!==b?b:void 0,_serverResponse:a.customData._serverResponse,operationType:d}}static _fromErrorAndOperation(a,b,c,d){return new bb(a,b,c,d)}}function bc(a,c,b,e){let d="reauthenticate"===c?b._getReauthenticationResolver(a):b._getIdTokenResponse(a);return d.catch(b=>{if("auth/multi-factor-auth-required"===b.code)throw bb._fromErrorAndOperation(a,b,c,e);throw b})}async function bd(a,b,c=!1){let d=await ao(a,b._linkToIdToken(a.auth,await a.getIdToken()),c);return a9._forOperation(a,"link",d)}async function be(b,a,d){var c;await ar(a);let e=(c=a.providerData,new Set(c.map(({providerId:a})=>a).filter(a=>!!a)));S(e.has(d)===b,a.auth,!1===b?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function bf(a,h,i=!1){var c;let{auth:b}=a,e="reauthenticate";try{let d=await ao(a,bc(b,e,h,a),i);S(d.idToken,b,"internal-error");let f=an(d.idToken);S(f,b,"internal-error");let{sub:j}=f;return S(a.uid===j,b,"user-mismatch"),a9._forOperation(a,e,d)}catch(g){throw(null===(c=g)|| void 0===c?void 0:c.code)==="auth/user-not-found"&&N(b,"user-mismatch"),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function bg(a,d,e=!1){let b="signIn",f=await bc(a,b,d),c=await a9._fromIdTokenResponse(a,b,f);return e||await a._updateCurrentUser(c.user),c}async function bh(a,b){return bg(aO(a),b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bi{constructor(b,a){this.factorId=b,this.uid=a.mfaEnrollmentId,this.enrollmentTime=new Date(a.enrolledAt).toUTCString(),this.displayName=a.displayName}static _fromServerResponse(a,b){return"phoneInfo"in b?bj._fromServerResponse(a,b):N(a,"internal-error")}}class bj extends null{constructor(a){super("phone",a),this.phoneNumber=a.phoneInfo}static _fromServerResponse(b,a){return new bj(a)}}async function bk(c,d,e){let a=aO(c),f=await a8(a,{returnSecureToken:!0,email:d,password:e}),b=await a9._fromIdTokenResponse(a,"signIn",f);return await a._updateCurrentUser(b.user),b}function bl(a,b,c){return bh((0,h.m9)(a),f.credential(b,c))}function bm(a,b,c,d){return(0,h.m9)(a).onAuthStateChanged(b,c,d)}function bn(a){return(0,h.m9)(a).signOut()}class bo{constructor(a,b){this.type=a,this.credential=b}static _fromIdtoken(a){return new bo("enroll",a)}static _fromMfaPendingCredential(a){return new bo("signin",a)}toJSON(){let a="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[a]:this.credential}}}static fromJSON(a){var b,c;if(null==a?void 0:a.multiFactorSession){if(null===(b=a.multiFactorSession)|| void 0===b?void 0:b.pendingCredential)return bo._fromMfaPendingCredential(a.multiFactorSession.pendingCredential);if(null===(c=a.multiFactorSession)|| void 0===c?void 0:c.idToken)return bo._fromIdtoken(a.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bp{constructor(a,b,c){this.session=a,this.hints=b,this.signInResolver=c}static _fromError(b,c){let d=aO(b),a=c.customData._serverResponse,e=(a.mfaInfo||[]).map(a=>bi._fromServerResponse(d,a));S(a.mfaPendingCredential,d,"internal-error");let f=bo._fromMfaPendingCredential(a.mfaPendingCredential);return new bp(f,e,async h=>{let b=await h._process(d,f);delete a.mfaInfo,delete a.mfaPendingCredential;let e=Object.assign(Object.assign({},a),{idToken:b.idToken,refreshToken:b.refreshToken});switch(c.operationType){case"signIn":let g=await a9._fromIdTokenResponse(d,c.operationType,e);return await d._updateCurrentUser(g.user),g;case"reauthenticate":return S(c.user,d,"internal-error"),a9._forOperation(c.user,c.operationType,e);default:N(d,"internal-error")}})}async resolveSignIn(a){return this.signInResolver(a)}}class bq{constructor(a){this.user=a,this.enrolledFactors=[],a._onReload(b=>{b.mfaInfo&&(this.enrolledFactors=b.mfaInfo.map(b=>bi._fromServerResponse(a.auth,b)))})}static _fromUser(a){return new bq(a)}async getSession(){return bo._fromIdtoken(await this.user.getIdToken())}async enroll(a,b){let c=await this.getSession(),d=await ao(this.user,a._process(this.user.auth,c,b));return await this.user._updateTokensIfNecessary(d),this.user.reload()}async unenroll(a){var b,c,e;let f="string"==typeof a?a:a.uid,g=await this.user.getIdToken(),h=await ao(this.user,(c=this.user.auth,ac(c,"POST","/v2/accounts/mfaEnrollment:withdraw",ab(c,e={idToken:g,mfaEnrollmentId:f}))));this.enrolledFactors=this.enrolledFactors.filter(({uid:a})=>a!==f),await this.user._updateTokensIfNecessary(h);try{await this.user.reload()}catch(d){if((null===(b=d)|| void 0===b?void 0:b.code)!=="auth/user-token-expired")throw d}}}new WeakMap;let br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class p{constructor(a,b){this.storageRetriever=a,this.type=b}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)}catch(a){return Promise.resolve(!1)}}_set(a,b){return this.storage.setItem(a,JSON.stringify(b)),Promise.resolve()}_get(b){let a=this.storage.getItem(b);return Promise.resolve(a?JSON.parse(a):null)}_remove(a){return this.storage.removeItem(a),Promise.resolve()}get storage(){return this.storageRetriever()}}class q extends p{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(a,b)=>this.onStorageEvent(a,b),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let a=(0,h.z$)();return aE(a)||aK(a)}()&&function(){try{return!!(window&&window!==window.top)}catch(a){return!1}}(),this.fallbackToPolling=aL(),this._shouldAllowMigration=!0}forAllChangedKeys(d){for(let a of Object.keys(this.listeners)){let b=this.storage.getItem(a),c=this.localCache[a];b!==c&&d(a,c,b)}}onStorageEvent(a,c=!1){if(!a.key){this.forAllChangedKeys((a,c,b)=>{this.notifyListeners(a,b)});return}let b=a.key;if(c?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let e=this.storage.getItem(b);if(a.newValue!==e)null!==a.newValue?this.storage.setItem(b,a.newValue):this.storage.removeItem(b);else if(this.localCache[b]===a.newValue&&!c)return}let d=()=>{let a=this.storage.getItem(b);(c||this.localCache[b]!==a)&&this.notifyListeners(b,a)},f=this.storage.getItem(b);(0,h.w1)()&&10===document.documentMode&&f!==a.newValue&&a.newValue!==a.oldValue?setTimeout(d,10):d()}notifyListeners(b,a){this.localCache[b]=a;let c=this.listeners[b];if(c)for(let d of Array.from(c))d(a?JSON.parse(a):a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((a,b,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:a,oldValue:b,newValue:c}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(a,b){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[a]||(this.listeners[a]=new Set,this.localCache[a]=this.storage.getItem(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(a,b){await super._set(a,b),this.localCache[a]=JSON.stringify(b)}async _get(a){let b=await super._get(a);return this.localCache[a]=JSON.stringify(b),b}async _remove(a){await super._remove(a),delete this.localCache[a]}}q.type="LOCAL";let bs=q;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r extends p{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(a,b){}_removeListener(a,b){}}r.type="SESSION";let bt=r;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface class for receiving messages.
 *
 */ class A{constructor(a){this.eventTarget=a,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(c){let a=this.receivers.find(a=>a.isListeningto(c));if(a)return a;let b=new A(c);return this.receivers.push(b),b}isListeningto(a){return this.eventTarget===a}async handleEvent(e){var f;let a=e,{eventId:d,eventType:b,data:i}=a.data,c=this.handlersMap[b];if(!(null==c?void 0:c.size))return;a.ports[0].postMessage({status:"ack",eventId:d,eventType:b});let g=Array.from(c).map(async b=>b(a.origin,i)),h=await Promise.all((f=g).map(async a=>{try{let b=await a;return{fulfilled:!0,value:b}}catch(c){return{fulfilled:!1,reason:c}}}));a.ports[0].postMessage({status:"done",eventId:d,eventType:b,response:h})}_subscribe(a,b){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[a]||(this.handlersMap[a]=new Set),this.handlersMap[a].add(b)}_unsubscribe(a,b){this.handlersMap[a]&&b&&this.handlersMap[a].delete(b),b&&0!==this.handlersMap[a].size||delete this.handlersMap[a],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bu(c="",d=10){let a="";for(let b=0;b<d;b++)a+=Math.floor(10*Math.random());return c+a}A.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface for sending messages and waiting for a completion response.
 *
 */ class bv{constructor(a){this.target=a,this.handlers=new Set}removeMessageHandler(a){a.messageChannel&&(a.messageChannel.port1.removeEventListener("message",a.onMessage),a.messageChannel.port1.close()),this.handlers.delete(a)}async _send(b,c,d=50){let a="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!a)throw Error("connection_unavailable");let e,f;return new Promise((h,i)=>{let g=bu("",20);a.port1.start();let j=setTimeout(()=>{i(Error("unsupported_event"))},d);f={messageChannel:a,onMessage(b){let a=b;if(a.data.eventId===g)switch(a.data.status){case"ack":clearTimeout(j),e=setTimeout(()=>{i(Error("timeout"))},3e3);break;case"done":clearTimeout(e),h(a.data.response);break;default:clearTimeout(j),clearTimeout(e),i(Error("invalid_response"))}}},this.handlers.add(f),a.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:b,eventId:g,data:c},[a.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bw(){return void 0!==window.WorkerGlobalScope&&"function"==typeof window.importScripts}async function bx(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let a=await navigator.serviceWorker.ready;return a.active}catch(b){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let by="firebaseLocalStorageDb",bz="firebaseLocalStorage",bA="fbase_key";class bB{constructor(a){this.request=a}toPromise(){return new Promise((a,b)=>{this.request.addEventListener("success",()=>{a(this.request.result)}),this.request.addEventListener("error",()=>{b(this.request.error)})})}}function bC(a,b){return a.transaction([bz],b?"readwrite":"readonly").objectStore(bz)}function bD(){let a=indexedDB.open(by,1);return new Promise((b,c)=>{a.addEventListener("error",()=>{c(a.error)}),a.addEventListener("upgradeneeded",()=>{let b=a.result;try{b.createObjectStore(bz,{keyPath:bA})}catch(d){c(d)}}),a.addEventListener("success",async()=>{let c=a.result;c.objectStoreNames.contains(bz)?b(c):(c.close(),await function(){let a=indexedDB.deleteDatabase(by);return new bB(a).toPromise()}(),b(await bD()))})})}async function bE(a,b,c){let d=bC(a,!0).put({[bA]:b,value:c});return new bB(d).toPromise()}async function bF(b,c){let d=bC(b,!1).get(c),a=await new bB(d).toPromise();return void 0===a?null:a.value}function bG(a,b){let c=bC(a,!0).delete(b);return new bB(c).toPromise()}class s{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await bD()),this.db}async _withRetries(a){let b=0;for(;;)try{let c=await this._openDb();return await a(c)}catch(d){if(b++ >3)throw d;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=A._getInstance(bw()?self:null),this.receiver._subscribe("keyChanged",async(c,a)=>{let b=await this._poll();return{keyProcessed:b.includes(a.key)}}),this.receiver._subscribe("ping",async(a,b)=>["keyChanged"])}async initializeSender(){var a,b;if(this.activeServiceWorker=await bx(),!this.activeServiceWorker)return;this.sender=new bv(this.activeServiceWorker);let c=await this.sender._send("ping",{},800);c&&(null===(a=c[0])|| void 0===a?void 0:a.fulfilled)&&(null===(b=c[0])|| void 0===b?void 0:b.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(b){var a;if(this.sender&&this.activeServiceWorker&&((null===(a=null==navigator?void 0:navigator.serviceWorker)|| void 0===a?void 0:a.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:b},this.serviceWorkerReceiverAvailable?800:50)}catch(c){}}async _isAvailable(){try{if(!indexedDB)return!1;let a=await bD();return await bE(a,br,"1"),await bG(a,br),!0}catch(b){}return!1}async _withPendingWrite(a){this.pendingWrites++;try{await a()}finally{this.pendingWrites--}}async _set(a,b){return this._withPendingWrite(async()=>(await this._withRetries(c=>bE(c,a,b)),this.localCache[a]=b,this.notifyServiceWorker(a)))}async _get(b){let a=await this._withRetries(a=>bF(a,b));return this.localCache[b]=a,a}async _remove(a){return this._withPendingWrite(async()=>(await this._withRetries(b=>bG(b,a)),delete this.localCache[a],this.notifyServiceWorker(a)))}async _poll(){let d=await this._withRetries(a=>{let b=bC(a,!1).getAll();return new bB(b).toPromise()});if(!d||0!==this.pendingWrites)return[];let c=[],e=new Set;for(let{fbase_key:a,value:f}of d)e.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(f)&&(this.notifyListeners(a,f),c.push(a));for(let b of Object.keys(this.localCache))this.localCache[b]&&!e.has(b)&&(this.notifyListeners(b,null),c.push(b));return c}notifyListeners(a,b){this.localCache[a]=b;let c=this.listeners[a];if(c)for(let d of Array.from(c))d(b)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(a,b){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[a]||(this.listeners[a]=new Set,this._get(a)),this.listeners[a].add(b)}_removeListener(a,b){this.listeners[a]&&(this.listeners[a].delete(b),0===this.listeners[a].size&&delete this.listeners[a]),0===Object.keys(this.listeners).length&&this.stopPolling()}}s.type="LOCAL";let bH=s;function B(a){return`__${a}${Math.floor(1e6*Math.random())}`}class bI{constructor(a,c,d){this.params=d,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let b="string"==typeof a?document.getElementById(a):a;S(b,"argument-error",{appName:c}),this.container=b,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=bJ(50);let{callback:a,"expired-callback":b}=this.params;if(a)try{a(this.responseToken)}catch(c){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,b)try{b()}catch(a){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}function bJ(d){let a=[],b="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let c=0;c<d;c++)a.push(b.charAt(Math.floor(Math.random()*b.length)));return a.join("")}B("rcb"),new b(3e4,6e4);async function bK(a,e,f){var g,h,j,i,k;let c=await f.verify();try{S("string"==typeof c,a,"argument-error"),S("recaptcha"===f.type,a,"argument-error");let b;if(b="string"==typeof e?{phoneNumber:e}:e,"session"in b){let d=b.session;if("phoneNumber"in b){S("enroll"===d.type,a,"internal-error");let m=await (h=a,j={idToken:d.credential,phoneEnrollmentInfo:{phoneNumber:b.phoneNumber,recaptchaToken:c}},ac(h,"POST","/v2/accounts/mfaEnrollment:start",ab(h,j)));return m.phoneSessionInfo.sessionInfo}{S("signin"===d.type,a,"internal-error");let l=(null===(g=b.multiFactorHint)|| void 0===g?void 0:g.uid)||b.multiFactorUid;S(l,a,"missing-multi-factor-info");let n=await (i=a,k={mfaPendingCredential:d.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:c}},ac(i,"POST","/v2/accounts/mfaSignIn:start",ab(i,k)));return n.phoneResponseInfo.sessionInfo}}{let{sessionInfo:o}=await a$(a,{phoneNumber:b.phoneNumber,recaptchaToken:c});return o}}finally{f._reset()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */ class t{constructor(a){this.providerId=t.PROVIDER_ID,this.auth=aO(a)}verifyPhoneNumber(a,b){return bK(this.auth,a,(0,h.m9)(b))}static credential(a,b){return a3._fromVerification(a,b)}static credentialFromResult(a){return t.credentialFromTaggedObject(a)}static credentialFromError(a){return t.credentialFromTaggedObject(a.customData||{})}static credentialFromTaggedObject({_tokenResponse:a}){if(!a)return null;let{phoneNumber:b,temporaryProof:c}=a;return b&&c?a3._fromTokenResponse(b,c):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Chooses a popup/redirect resolver to use. This prefers the override (which
 * is directly passed in), and falls back to the property set on the auth
 * object. If neither are available, this function errors w/ an argument error.
 */ function bL(a,b){return b?W(b):(S(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}t.PROVIDER_ID="phone",t.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bM extends d{constructor(a){super("custom","custom"),this.params=a}_getIdTokenResponse(a){return aY(a,this._buildIdpRequest())}_linkToIdToken(a,b){return aY(a,this._buildIdpRequest(b))}_getReauthenticationResolver(a){return aY(a,this._buildIdpRequest())}_buildIdpRequest(a){let b={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return a&&(b.idToken=a),b}}function bN(a){return bg(a.auth,new bM(a),a.bypassAuthState)}function bO(a){let{auth:c,user:b}=a;return S(b,c,"internal-error"),bf(b,new bM(a),a.bypassAuthState)}async function bP(a){let{auth:c,user:b}=a;return S(b,c,"internal-error"),bd(b,new bM(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */ class u{constructor(b,a,c,d,e=!1){this.auth=b,this.resolver=c,this.user=d,this.bypassAuthState=e,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(a,b)=>{this.pendingPromise={resolve:a,reject:b};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(b){let{urlResponse:c,sessionId:d,postBody:e,tenantId:f,error:a,type:g}=b;if(a){this.reject(a);return}let h={auth:this.auth,requestUri:c,sessionId:d,tenantId:f||void 0,postBody:e||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(h))}catch(i){this.reject(i)}}onError(a){this.reject(a)}getIdpTask(a){switch(a){case"signInViaPopup":case"signInViaRedirect":return bN;case"linkViaPopup":case"linkViaRedirect":return bP;case"reauthViaPopup":case"reauthViaRedirect":return bO;default:N(this.auth,"internal-error")}}resolve(a){U(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(a),this.unregisterAndCleanUp()}reject(a){U(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(a),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bQ=new b(2e3,1e4);class C extends u{constructor(a,b,c,d,e){super(a,b,d,e),this.provider=c,this.authWindow=null,this.pollId=null,C.currentPopupAction&&C.currentPopupAction.cancel(),C.currentPopupAction=this}async executeNotNull(){let a=await this.execute();return S(a,this.auth,"internal-error"),a}async onExecution(){U(1===this.filter.length,"Popup operations only handle one event");let a=bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],a),this.authWindow.associatedEvent=a,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(O(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var a;return(null===(a=this.authWindow)|| void 0===a?void 0:a.associatedEvent)||null}cancel(){this.reject(O(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,C.currentPopupAction=null}pollUserCancellation(){let a=()=>{var b,c;if(null===(c=null===(b=this.authWindow)|| void 0===b?void 0:b.window)|| void 0===c?void 0:c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(O(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(a,bQ.get())};a()}}C.currentPopupAction=null;let bR=new Map;class bS extends u{constructor(a,b,c=!1){super(a,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],b,void 0,c),this.eventId=null}async execute(){let a=bR.get(this.auth._key());if(!a){try{let b=await bT(this.resolver,this.auth),c=b?await super.execute():null;a=()=>Promise.resolve(c)}catch(d){a=()=>Promise.reject(d)}bR.set(this.auth._key(),a)}return this.bypassAuthState||bR.set(this.auth._key(),()=>Promise.resolve(null)),a()}async onAuthEvent(a){if("signInViaRedirect"===a.type)return super.onAuthEvent(a);if("unknown"===a.type){this.resolve(null);return}if(a.eventId){let b=await this.auth._redirectUserForId(a.eventId);if(b)return this.user=b,super.onAuthEvent(a);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bT(c,d){let b=bW(d),a=bV(c);if(!await a._isAvailable())return!1;let e=await a._get(b)==="true";return await a._remove(b),e}async function bU(a,b){return bV(a)._set(bW(b),"true")}function bV(a){return W(a._redirectPersistence)}function bW(a){return aA("pendingRedirect",a.config.apiKey,a.name)}async function bX(e,c,d=!1){let a=aO(e),f=bL(a,c),g=new bS(a,f,d),b=await g.execute();return b&&!d&&(delete b.user._redirectEventId,await a._persistUserIfCurrent(b.user),await a._setRedirectUser(null,c)),b}async function bY(a){let b=bu(`${a.uid}:::`);return a._redirectEventId=b,await a.auth._setRedirectUser(a),await a.auth._persistUserIfCurrent(a),b}class bZ{constructor(a){this.auth=a,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(a){this.consumers.add(a),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,a)&&(this.sendToConsumer(this.queuedRedirectEvent,a),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(a){this.consumers.delete(a)}onEvent(a){if(this.hasEventBeenHandled(a))return!1;let b=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(a,c)&&(b=!0,this.sendToConsumer(a,c),this.saveEventToCache(a))}),this.hasHandledPotentialRedirect||!b0(a)||(this.hasHandledPotentialRedirect=!0,b||(this.queuedRedirectEvent=a,b=!0)),b}sendToConsumer(a,c){var b;if(a.error&&!b_(a)){let d=(null===(b=a.error.code)|| void 0===b?void 0:b.split("auth/")[1])||"internal-error";c.onError(O(this.auth,d))}else c.onAuthEvent(a)}isEventForConsumer(a,b){let c=null===b.eventId|| !!a.eventId&&a.eventId===b.eventId;return b.filter.includes(a.type)&&c}hasEventBeenHandled(a){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(b$(a))}saveEventToCache(a){this.cachedEventUids.add(b$(a)),this.lastProcessedEventTime=Date.now()}}function b$(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(a=>a).join("-")}function b_({type:b,error:a}){return"unknown"===b&&(null==a?void 0:a.code)==="auth/no-auth-event"}function b0(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return b_(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function b1(a,b={}){return ac(a,"GET","/v1/projects",b)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b3=/^https?/;async function b4(a){if(a.config.emulator)return;let{authorizedDomains:b}=await b1(a);for(let c of b)try{if(b5(c))return}catch(d){}N(a,"unauthorized-domain")}function b5(a){let d=X(),{protocol:c,hostname:b}=new URL(d);if(a.startsWith("chrome-extension://")){let e=new URL(a);return""===e.hostname&&""===b?"chrome-extension:"===c&&a.replace("chrome-extension://","")===d.replace("chrome-extension://",""):"chrome-extension:"===c&&e.hostname===b}if(!b3.test(c))return!1;if(b2.test(a))return b===a;let f=a.replace(/\./g,"\\."),g=RegExp("^(.+\\."+f+"|"+f+")$","i");return g.test(b)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let b6=new b(3e4,6e4);function b7(){let a=window.___jsl;if(null==a?void 0:a.H){for(let b of Object.keys(a.H))if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=[...a.H[b].L],a.CP)for(let c=0;c<a.CP.length;c++)a.CP[c]=null}}let b8=null,b9=new b(5e3,15e3),ca={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function cc(a){var b,e;let f=await (b=a,b8=b8||(e=b,new Promise((f,i)=>{var a,b,c,g;function h(){b7(),gapi.load("gapi.iframes",{callback(){f(gapi.iframes.getContext())},ontimeout(){b7(),i(O(e,"network-request-failed"))},timeout:b6.get()})}if(null===(b=null===(a=window.gapi)|| void 0===a?void 0:a.iframes)|| void 0===b?void 0:b.Iframe)f(gapi.iframes.getContext());else if(null===(c=window.gapi)|| void 0===c?void 0:c.load)h();else{let d=B("iframefcb");return window[d]=()=>{gapi.load?h():i(O(e,"network-request-failed"))},(g=`https://apis.google.com/js/api.js?onload=${d}`,new Promise((d,e)=>{var b,c;let a=document.createElement("script");a.setAttribute("src",g),a.onload=d,a.onerror=b=>{let a=O("internal-error");a.customData=b,e(a)},a.type="text/javascript",a.charset="UTF-8",(null!==(c=null===(b=document.getElementsByTagName("head"))|| void 0===b?void 0:b[0])&& void 0!==c?c:document).appendChild(a)})).catch(a=>i(a))}}).catch(a=>{throw b8=null,a}))),d=window.gapi;return S(d,a,"internal-error"),f.open({where:document.body,url:function(a){let b=a.config;S(b.authDomain,a,"auth-domain-config-required");let g=b.emulator?Z(b,"emulator/auth/iframe"):`https://${a.config.authDomain}/__/auth/iframe`,d={apiKey:b.apiKey,appName:a.name,v:c.Jn},e=cb.get(a.config.apiHost);e&&(d.eid=e);let f=a._getFrameworks();return f.length&&(d.fw=f.join(",")),`${g}?${(0,h.xO)(d).slice(1)}`}(a),messageHandlersFilter:d.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ca,dontclear:!0},b=>new Promise(async(d,e)=>{await b.restyle({setHideOnLeave:!1});let f=O(a,"network-request-failed"),g=window.setTimeout(()=>{e(f)},b9.get());function c(){window.clearTimeout(g),d(b)}b.ping(c).then(c,()=>{e(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ce{constructor(a){this.window=a,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(a){}}}function cf(a,b,j,k,l,m){S(a.config.authDomain,a,"auth-domain-config-required"),S(a.config.apiKey,a,"invalid-api-key");let d={apiKey:a.config.apiKey,appName:a.name,authType:j,redirectUrl:k,v:c.Jn,eventId:l};if(b instanceof z)for(let[n,o]of(b.setDefaultLanguage(a.languageCode),d.providerId=b.providerId||"",(0,h.xb)(b.getCustomParameters())||(d.customParameters=JSON.stringify(b.getCustomParameters())),Object.entries(m||{})))d[n]=o;if(b instanceof e){let g=b.getScopes().filter(a=>""!==a);g.length>0&&(d.scopes=g.join(","))}a.tenantId&&(d.tid=a.tenantId);let f=d;for(let i of Object.keys(f))void 0===f[i]&&delete f[i];return`${cg(a)}?${(0,h.xO)(f).slice(1)}`}function cg({config:a}){return a.emulator?Z(a,"emulator/auth/handler"):`https://${a.authDomain}/__/auth/handler`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The special web storage event
 *
 */ let ch="webStorageSupport",ci=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bt,this._completeRedirectFn=bX,this._overrideRedirectResult=function(a,b){bR.set(a._key(),b)}}async _openPopup(a,c,d,e){var b;U(null===(b=this.eventManagers[a._key()])|| void 0===b?void 0:b.manager,"_initialize() not called before _openPopup()");let f=cf(a,c,d,X(),e);return function(j,a,e,f=500,g=600){let k=Math.max((window.screen.availHeight-g)/2,0).toString(),l=Math.max((window.screen.availWidth-f)/2,0).toString(),b="",i=Object.assign(Object.assign({},cd),{width:f.toString(),height:g.toString(),top:k,left:l}),c=(0,h.z$)().toLowerCase();e&&(b=aF(c)?"_blank":e),aD(c)&&(a=a||"http://localhost",i.scrollbars="yes");let m=Object.entries(i).reduce((a,[b,c])=>`${a}${b}=${c},`,"");if(function(b=(0,h.z$)()){var a;return aK(b)&&!!(null===(a=window.navigator)|| void 0===a?void 0:a.standalone)}(c)&&"_self"!==b)return function e(c,d){let a=document.createElement("a");a.href=c,a.target=d;let b=document.createEvent("MouseEvent");b.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(b)}(a||"",b),new ce(null);let d=window.open(a||"",b,m);S(d,j,"popup-blocked");try{d.focus()}catch(n){}return new ce(d)}(a,f,bu())}async _openRedirect(a,c,d,e){var b;return await this._originValidation(a),b=cf(a,c,d,X(),e),window.location.href=b,new Promise(()=>{})}_initialize(c){let a=c._key();if(this.eventManagers[a]){let{manager:d,promise:e}=this.eventManagers[a];return d?Promise.resolve(d):(U(e,"If manager is not set, promise should be"),e)}let b=this.initAndGetManager(c);return this.eventManagers[a]={promise:b},b.catch(()=>{delete this.eventManagers[a]}),b}async initAndGetManager(a){let b=await cc(a),c=new bZ(a);return b.register("authEvent",b=>{S(null==b?void 0:b.authEvent,a,"invalid-auth-event");let d=c.onEvent(b.authEvent);return{status:d?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[a._key()]={manager:c},this.iframes[a._key()]=b,c}_isIframeWebStorageSupported(a,c){let b=this.iframes[a._key()];b.send(ch,{type:ch},d=>{var b;let e=null===(b=null==d?void 0:d[0])|| void 0===b?void 0:b[ch];void 0!==e&&c(!!e),N(a,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(b){let a=b._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=b4(b)),this.originValidationPromises[a]}get _shouldInitProactively(){return aL()||aE()||aK()}};class D{constructor(a){this.factorId=a}_process(b,a,c){switch(a.type){case"enroll":return this._finalizeEnroll(b,a.credential,c);case"signin":return this._finalizeSignIn(b,a.credential);default:return T("unexpected MultiFactorSessionType")}}}class cj extends D{constructor(a){super("phone"),this.credential=a}static _fromCredential(a){return new cj(a)}_finalizeEnroll(b,c,d){var a,e;return a=b,ac(a,"POST","/v2/accounts/mfaEnrollment:finalize",ab(a,e={idToken:c,displayName:d,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(b,c){var a,d;return a=b,ac(a,"POST","/v2/accounts/mfaSignIn:finalize",ab(a,d={mfaPendingCredential:c,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}(class{constructor(){}static assertion(a){return cj._fromCredential(a)}}).FACTOR_ID="phone";var v="@firebase/auth",w="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ck{constructor(a){this.auth=a,this.internalListeners=new Map}getUid(){var a;return this.assertAuthConfigured(),(null===(a=this.auth.currentUser)|| void 0===a?void 0:a.uid)||null}async getToken(a){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let b=await this.auth.currentUser.getIdToken(a);return{accessToken:b}}addAuthTokenListener(a){if(this.assertAuthConfigured(),this.internalListeners.has(a))return;let b=this.auth.onIdTokenChanged(c=>{var b;a((null===(b=c)|| void 0===b?void 0:b.stsTokenManager.accessToken)||null)});this.internalListeners.set(a,b),this.updateProactiveRefresh()}removeAuthTokenListener(a){this.assertAuthConfigured();let b=this.internalListeners.get(a);b&&(this.internalListeners.delete(a),b(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */ function cl(a=(0,c.Mq)()){let b=(0,c.qX)(a,"auth");return b.isInitialized()?b.getImmediate():/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */ function(e,b){let a=(0,c.qX)(e,"auth");if(a.isInitialized()){let d=a.getImmediate(),f=a.getOptions();if((0,h.vZ)(f,null!=b?b:{}))return d;N(d,"already-initialized")}let g=a.initialize({options:b});return g}(a,{popupRedirectResolver:ci,persistence:[bH,bs,bt]})}g="Browser",(0,c.Xd)(new i.wA("auth",(a,{options:d})=>{let b=a.getProvider("app").getImmediate(),c=a.getProvider("heartbeat"),{apiKey:e,authDomain:f}=b.options;return((a,c)=>{S(e&&!e.includes(":"),"invalid-api-key",{appName:a.name}),S(!(null==f?void 0:f.includes(":")),"argument-error",{appName:a.name});let h={apiKey:e,authDomain:f,clientPlatform:g,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aM(g)},b=new aN(a,c,h);return function(c,a){let b=(null==a?void 0:a.persistence)||[],d=(Array.isArray(b)?b:[b]).map(W);(null==a?void 0:a.errorMap)&&c._updateErrorMap(a.errorMap),c._initializeWithPersistence(d,null==a?void 0:a.popupRedirectResolver)}(b,d),b})(b,c)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((a,c,d)=>{let b=a.getProvider("auth-internal");b.initialize()})),(0,c.Xd)(new i.wA("auth-internal",b=>{var a;let c=aO(b.getProvider("auth").getImmediate());return a=c,new ck(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,c.KN)(v,w,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(g)),(0,c.KN)(v,w,"esm2017")},5321:function(aQ,ae,j){"use strict";j.d(ae,{hJ:function(){return kk},AK:function(){return k5},JU:function(){return kl},QT:function(){return k_},ad:function(){return kn},pl:function(){return k1},r7:function(){return k2}});var aR,af,e,C,D,aS,ag,M,b,a,aT=j(2238),aU=j(8463),ah=j(3333),ai=j(4444),aj="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==j.g?j.g:"undefined"!=typeof self?self:{},i={},ak=ak||{},s=aj||self;function al(){}function aV(b){var a=typeof b;return"array"==(a="object"!=a?a:b?Array.isArray(b)?"array":a:"null")||"object"==a&&"number"==typeof b.length}function aW(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function aX(a,b,c){return a.call.apply(a.bind,arguments)}function aY(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function aZ(a,b,c){return(aZ=Function.prototype.bind&& -1!=Function.prototype.bind.toString().indexOf("native code")?aX:aY).apply(null,arguments)}function a$(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();return b.push.apply(b,arguments),a.apply(this,b)}}function c(a,b){function c(){}c.prototype=b.prototype,a.Z=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.Vb=function(d,e,f){for(var c=Array(arguments.length-2),a=2;a<arguments.length;a++)c[a-2]=arguments[a];return b.prototype[e].apply(d,c)}}function o(){this.s=this.s,this.o=this.o}o.prototype.s=!1,o.prototype.na=function(){this.s||(this.s=!0,this.M())},o.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let a_=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,c){if("string"==typeof a)return"string"!=typeof c||1!=c.length?-1:a.indexOf(c,0);for(let b=0;b<a.length;b++)if(b in a&&a[b]===c)return b;return -1},a0=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,d,e){let f=a.length,c="string"==typeof a?a.split(""):a;for(let b=0;b<f;b++)b in c&&d.call(e,c[b],b,a)};function a1(a){return Array.prototype.concat.apply([],arguments)}function a2(c){let b=c.length;if(0<b){let d=Array(b);for(let a=0;a<b;a++)d[a]=c[a];return d}return[]}function a3(a){return/^[\s\xa0]*$/.test(a)}var a4=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function f(a,b){return -1!=a.indexOf(b)}function a5(a,b){return a<b?-1:a>b?1:0}a:{var N=s.navigator;if(N){var O=N.userAgent;if(O){e=O;break a}}e=""}function a6(a,c,d){for(let b in a)c.call(d,a[b],b,a)}function a7(a){let b={};for(let c in a)b[c]=a[c];return b}var a8="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function a9(e,f){let a,b;for(let c=1;c<arguments.length;c++){for(a in b=arguments[c])e[a]=b[a];for(let d=0;d<a8.length;d++)a=a8[d],Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a])}}function am(a){return am[" "](a),a}am[" "]=al;var an=f(e,"Opera"),t=f(e,"Trident")||f(e,"MSIE"),P=f(e,"Edge"),ba=P||t,ao=f(e,"Gecko")&&!(f(e.toLowerCase(),"webkit")&&!f(e,"Edge"))&&!(f(e,"Trident")||f(e,"MSIE"))&&!f(e,"Edge"),ap=f(e.toLowerCase(),"webkit")&&!f(e,"Edge");function Q(){var a=s.document;return a?a.documentMode:void 0}a:{var p,E="",F=(p=e,ao?/rv:([^\);]+)(\)|;)/.exec(p):P?/Edge\/([\d\.]+)/.exec(p):t?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(p):ap?/WebKit\/(\S+)/.exec(p):an?/(?:Version)[ \/]?(\S+)/.exec(p):void 0);if(F&&(E=F?F[1]:""),t){var G=Q();if(null!=G&&G>parseFloat(E)){C=String(G);break a}}C=E}var bb={};if(s.document&&t){D=Q()||parseInt(C,10)||void 0}else D=void 0;var bc=D,bd=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var b=!1,a=Object.defineProperty({},"passive",{get:function(){b=!0}});try{s.addEventListener("test",al,a),s.removeEventListener("test",al,a)}catch(c){}return b}();function m(a,b){this.type=a,this.g=this.target=b,this.defaultPrevented=!1}function R(a,c){if(m.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,b=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(ao){a:{try{am(c.nodeName);var e=!0;break a}catch(f){}e=!1}e||(c=null)}}else"mouseover"==d?c=a.fromElement:"mouseout"==d&&(c=a.toElement);this.relatedTarget=c,b?(this.clientX=void 0!==b.clientX?b.clientX:b.pageX,this.clientY=void 0!==b.clientY?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType="string"==typeof a.pointerType?a.pointerType:be[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&R.Z.h.call(this)}}m.prototype.h=function(){this.defaultPrevented=!0},c(R,m);var be={2:"touch",3:"pen",4:"mouse"};R.prototype.h=function(){R.Z.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var aq="closure_listenable_"+(1e6*Math.random()|0),bf=0;function bg(a,b,c,d,e){this.listener=a,this.proxy=null,this.src=b,this.type=c,this.capture=!!d,this.ia=e,this.key=++bf,this.ca=this.fa=!1}function bh(a){a.ca=!0,a.listener=null,a.proxy=null,a.src=null,a.ia=null}function ar(a){this.src=a,this.g={},this.h=0}function bi(a,c){var b=c.type;if(b in a.g){var d,e=a.g[b],f=a_(e,c);(d=0<=f)&&Array.prototype.splice.call(e,f,1),d&&(bh(c),0==a.g[b].length&&(delete a.g[b],a.h--))}}function bj(c,d,e,f){for(var a=0;a<c.length;++a){var b=c[a];if(!b.ca&&b.listener==d&& !!e==b.capture&&b.ia==f)return a}return -1}ar.prototype.add=function(b,a,d,e,f){var c=b.toString();(b=this.g[c])||(b=this.g[c]=[],this.h++);var g=bj(b,a,e,f);return -1<g?(a=b[g],d||(a.fa=!1)):((a=new bg(a,this.src,c,!!e,f)).fa=d,b.push(a)),a};var bk="closure_lm_"+(1e6*Math.random()|0),bl={};function bm(b,c,d,a,e){if(a&&a.once)return bp(b,c,d,a,e);if(Array.isArray(c)){for(var f=0;f<c.length;f++)bm(b,c[f],d,a,e);return null}return d=bw(d),b&&b[aq]?b.N(c,d,aW(a)?!!a.capture:!!a,e):bn(b,c,d,!1,a,e)}function bn(a,e,d,b,c,h){if(!e)throw Error("Invalid event type");var g=aW(c)?!!c.capture:!!c,f=bu(a);if(f||(a[bk]=f=new ar(a)),(d=f.add(e,d,b,g,h)).proxy)return d;if(b=bo(),d.proxy=b,b.src=a,b.listener=d,a.addEventListener)bd||(c=g),void 0===c&&(c=!1),a.addEventListener(e.toString(),b,c);else if(a.attachEvent)a.attachEvent(bs(e.toString()),b);else if(a.addListener&&a.removeListener)a.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return d}function bo(){function a(c){return b.call(a.src,a.listener,c)}var b=bt;return a}function bp(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)bp(a,b[f],c,d,e);return null}return c=bw(c),a&&a[aq]?a.O(b,c,aW(d)?!!d.capture:!!d,e):bn(a,b,c,!0,d,e)}function bq(a,b,c,d,f){if(Array.isArray(b))for(var e=0;e<b.length;e++)bq(a,b[e],c,d,f);else(d=aW(d)?!!d.capture:!!d,c=bw(c),a&&a[aq])?(a=a.i,(b=String(b).toString())in a.g&& -1<(c=bj(e=a.g[b],c,d,f))&&(bh(e[c]),Array.prototype.splice.call(e,c,1),0==e.length&&(delete a.g[b],a.h--))):a&&(a=bu(a))&&(b=a.g[b.toString()],a=-1,b&&(a=bj(b,c,d,f)),(c=-1<a?b[a]:null)&&br(c))}function br(b){if("number"!=typeof b&&b&&!b.ca){var a=b.src;if(a&&a[aq])bi(a.i,b);else{var c=b.type,d=b.proxy;a.removeEventListener?a.removeEventListener(c,d,b.capture):a.detachEvent?a.detachEvent(bs(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=bu(a))?(bi(c,b),0==c.h&&(c.src=null,a[bk]=null)):bh(b)}}}function bs(a){return a in bl?bl[a]:bl[a]="on"+a}function bt(a,b){if(a.ca)a=!0;else{b=new R(b,this);var c=a.listener,d=a.ia||a.src;a.fa&&br(a),a=c.call(d,b)}return a}function bu(a){return(a=a[bk])instanceof ar?a:null}var bv="__closure_events_fn_"+(1e9*Math.random()>>>0);function bw(a){return"function"==typeof a?a:(a[bv]||(a[bv]=function(b){return a.handleEvent(b)}),a[bv])}function g(){o.call(this),this.i=new ar(this),this.P=this,this.I=null}function bx(e,a){var d,b=e.I;if(b)for(d=[];b;b=b.I)d.push(b);if(e=e.P,b=a.type||a,"string"==typeof a)a=new m(a,e);else if(a instanceof m)a.target=a.target||e;else{var c=a;a9(a=new m(b,e),c)}if(c=!0,d)for(var f=d.length-1;0<=f;f--){var g=a.g=d[f];c=by(g,b,!0,a)&&c}if(c=by(g=a.g=e,b,!0,a)&&c,c=by(g,b,!1,a)&&c,d)for(f=0;f<d.length;f++)c=by(g=a.g=d[f],b,!1,a)&&c}function by(e,b,g,f){if(!(b=e.i.g[String(b)]))return!0;b=b.concat();for(var c=!0,d=0;d<b.length;++d){var a=b[d];if(a&&!a.ca&&a.capture==g){var h=a.listener,i=a.ia||a.src;a.fa&&bi(e.i,a),c=!1!==h.call(i,f)&&c}}return c&&!f.defaultPrevented}c(g,o),g.prototype[aq]=!0,g.prototype.removeEventListener=function(a,b,c,d){bq(this,a,b,c,d)},g.prototype.M=function(){if(g.Z.M.call(this),this.i){var b,a=this.i;for(b in a.g){for(var d=a.g[b],c=0;c<d.length;c++)bh(d[c]);delete a.g[b],a.h--}}this.I=null},g.prototype.N=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)},g.prototype.O=function(a,b,c,d){return this.i.add(String(a),b,!0,c,d)};var bz=s.JSON.stringify;function bA(){var a=bH;let b=null;return a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null),b}var bB=new class{constructor(a,b){this.i=a,this.j=b,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}(()=>new bC,a=>a.reset());class bC{constructor(){this.next=this.g=this.h=null}set(a,b){this.h=a,this.g=b,this.next=null}reset(){this.next=this.g=this.h=null}}function bD(a){s.setTimeout(()=>{throw a},0)}function bE(a,b){aS||bF(),bG||(aS(),bG=!0),bH.add(a,b)}function bF(){var a=s.Promise.resolve(void 0);aS=function(){a.then(bI)}}var bG=!1,bH=new class{constructor(){this.h=this.g=null}add(b,c){let a=bB.get();a.set(b,c),this.h?this.h.next=a:this.g=a,this.h=a}};function bI(){for(var a;a=bA();){try{a.h.call(a.g)}catch(c){bD(c)}var b=bB;b.j(a),100>b.h&&(b.h++,a.next=b.g,b.g=a)}bG=!1}function S(a,b){g.call(this),this.h=a||1,this.g=b||s,this.j=aZ(this.kb,this),this.l=Date.now()}function bJ(a){a.da=!1,a.S&&(a.g.clearTimeout(a.S),a.S=null)}function bK(a,b,c){if("function"==typeof a)c&&(a=aZ(a,c));else if(a&&"function"==typeof a.handleEvent)a=aZ(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:s.setTimeout(a,b||0)}function bL(a){a.g=bK(()=>{a.g=null,a.i&&(a.i=!1,bL(a))},a.j);let b=a.h;a.h=null,a.m.apply(null,b)}c(S,g),(a=S.prototype).da=!1,a.S=null,a.kb=function(){if(this.da){var a=Date.now()-this.l;0<a&&a<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-a):(this.S&&(this.g.clearTimeout(this.S),this.S=null),bx(this,"tick"),this.da&&(bJ(this),this.start()))}},a.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},a.M=function(){S.Z.M.call(this),bJ(this),delete this.g};class bM extends o{constructor(a,b){super(),this.m=a,this.j=b,this.h=null,this.i=!1,this.g=null}l(a){this.h=arguments,this.g?this.i=!0:bL(this)}M(){super.M(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function H(a){o.call(this),this.h=a,this.g={}}c(H,o);var bN=[];function bO(b,e,a,f){Array.isArray(a)||(a&&(bN[0]=a.toString()),a=bN);for(var c=0;c<a.length;c++){var d=bm(e,a[c],f||b.handleEvent,!1,b.h||b);if(!d)break;b.g[d.key]=d}}function bP(a){a6(a.g,function(a,b){this.g.hasOwnProperty(b)&&br(a)},a),a.g={}}function T(){this.g=!0}function bQ(a,b,c,d){a.info(function(){return"XMLHTTP TEXT ("+b+"): "+bR(a,c)+(d?" "+d:"")})}function bR(a,d){if(!a.g)return d;if(!d)return null;try{var b=JSON.parse(d);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var g=b[a];if(!(2>g.length)){var c=g[1];if(Array.isArray(c)&&!(1>c.length)){var e=c[0];if("noop"!=e&&"stop"!=e&&"close"!=e)for(var f=1;f<c.length;f++)c[f]=""}}}}return bz(b)}catch(h){return d}}H.prototype.M=function(){H.Z.M.call(this),bP(this)},H.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},T.prototype.Aa=function(){this.g=!1},T.prototype.info=function(){};var u={},bS=null;function bT(){return bS=bS||new g}function as(a){m.call(this,u.Ma,a)}function bU(b){let a=bT();bx(a,new as(a,b))}function at(a,b){m.call(this,u.STAT_EVENT,a),this.stat=b}function bV(b){let a=bT();bx(a,new at(a,b))}function au(a,b){m.call(this,u.Na,a),this.size=b}function bW(a,b){if("function"!=typeof a)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){a()},b)}u.Ma="serverreachability",c(as,m),u.STAT_EVENT="statevent",c(at,m),u.Na="timingevent",c(au,m);var v={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},U={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function I(){}function bX(a){return a.h||(a.h=a.i())}function V(){}I.prototype.h=null;var q={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function W(){m.call(this,"d")}function X(){m.call(this,"c")}function w(){}function av(a,b,c,d){this.l=a,this.j=b,this.m=c,this.X=d||1,this.V=new H(this),this.P=bZ,a=ba?125:void 0,this.W=new S(a),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new bY}function bY(){this.i=null,this.g="",this.h=!1}c(W,m),c(X,m),c(w,I),w.prototype.g=function(){return new XMLHttpRequest},w.prototype.i=function(){return{}},ag=new w;var bZ=45e3,b$={},b_={};function b0(a,b,c){a.K=1,a.v=cl(cf(b)),a.s=c,a.U=!0,b1(a,null)}function b1(a,b){a.F=Date.now(),b5(a),a.A=cf(a.v);var d=a.A,c=a.X;Array.isArray(c)||(c=[String(c)]),cx(d.h,"t",c),a.C=0,d=a.l.H,a.h=new bY,a.g=dj(a.l,d?b:null,!a.s),0<a.O&&(a.L=new bM(aZ(a.Ia,a,a.g),a.O)),bO(a.V,a.g,"readystatechange",a.gb),b=a.H?a7(a.H):{},a.s?(a.u||(a.u="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.s,b)):(a.u="GET",a.g.ea(a.A,a.u,null,b)),bU(1),function(a,b,c,d,e,f){a.info(function(){if(a.g){if(f)for(var g="",k=f.split("&"),i=0;i<k.length;i++){var h=k[i].split("=");if(1<h.length){var j=h[0];h=h[1];var l=j.split("_");g=2<=l.length&&"type"==l[1]?g+(j+"=")+h+"&":g+(j+"=redacted&")}}else g=null}else g=f;return"XMLHTTP REQ ("+d+") [attempt "+e+"]: "+b+"\n"+c+"\n"+g})}(a.j,a.u,a.A,a.m,a.X,a.s)}function b2(a){return!!a.g&&"GET"==a.u&&2!=a.K&&a.l.Ba}function b3(a,b,c){let e=!0,d;for(;!a.I&&a.C<c.length;)if((d=b4(a,c))==b_){4==b&&(a.o=4,bV(14),e=!1),bQ(a.j,a.m,null,"[Incomplete Response]");break}else if(d==b$){a.o=4,bV(15),bQ(a.j,a.m,c,"[Invalid Chunk]"),e=!1;break}else bQ(a.j,a.m,d,null),ca(a,d);b2(a)&&d!=b_&&d!=b$&&(a.h.g="",a.C=0),4!=b||0!=c.length||a.h.h||(a.o=1,bV(16),e=!1),a.i=a.i&&e,e?0<c.length&&!a.aa&&(a.aa=!0,(b=a.l).g==a&&b.$&&!b.L&&(b.h.info("Great, no buffering proxy detected. Bytes received: "+c.length),db(b),b.L=!0,bV(11))):(bQ(a.j,a.m,c,"[Invalid Chunked Response]"),b9(a),b8(a))}function b4(d,a){var b=d.C,c=a.indexOf("\n",b);return -1==c?b_:isNaN(b=Number(a.substring(b,c)))?b$:(c+=1)+b>a.length?b_:(a=a.substr(c,b),d.C=c+b,a)}function b5(a){a.Y=Date.now()+a.P,b6(a,a.P)}function b6(a,b){if(null!=a.B)throw Error("WatchDog timer not null");a.B=bW(aZ(a.eb,a),b)}function b7(a){a.B&&(s.clearTimeout(a.B),a.B=null)}function b8(a){0==a.l.G||a.I||de(a.l,a)}function b9(a){b7(a);var b=a.L;b&&"function"==typeof b.na&&b.na(),a.L=null,bJ(a.W),bP(a.V),a.g&&(b=a.g,a.g=null,b.abort(),b.na())}function ca(d,g){try{var a=d.l;if(0!=a.G&&(a.g==d||cE(a.i,d))){if(a.I=d.N,!d.J&&cE(a.i,d)&&3==a.G){try{var b=a.Ca.g.parse(g)}catch(r){b=null}if(Array.isArray(b)&&3==b.length){var h=b;if(0==h[0]){a:if(!a.u){if(a.g){if(a.g.F+3e3<d.F)dd(a),c2(a);else break a}da(a),bV(18)}}else a.ta=h[1],0<a.ta-a.U&&37500>h[2]&&a.N&&0==a.A&&!a.v&&(a.v=bW(aZ(a.ab,a),6e3));if(1>=cD(a.i)&&a.ka){try{a.ka()}catch(s){}a.ka=void 0}}else dg(a,11)}else if((d.J||a.g==d)&&dd(a),!a3(g))for(h=a.Ca.g.parse(g),g=0;g<h.length;g++){let c=h[g];if(a.U=c[0],c=c[1],2==a.G){if("c"==c[0]){a.J=c[1],a.la=c[2];let o=c[3];null!=o&&(a.ma=o,a.h.info("VER="+a.ma));let p=c[4];null!=p&&(a.za=p,a.h.info("SVER="+a.za));let j=c[5];null!=j&&"number"==typeof j&&0<j&&(b=1.5*j,a.K=b,a.h.info("backChannelRequestTimeoutMs_="+b)),b=a;let i=d.g;if(i){let k=i.g?i.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(k){var e=b.i;!e.g&&(f(k,"spdy")||f(k,"quic")||f(k,"h2"))&&(e.j=e.l,e.g=new Set,e.h&&(cF(e,e.h),e.h=null))}if(b.D){let n=i.g?i.g.getResponseHeader("X-HTTP-Session-Id"):null;n&&(b.sa=n,ck(b.F,b.D,n))}}a.G=3,a.j&&a.j.xa(),a.$&&(a.O=Date.now()-d.F,a.h.info("Handshake RTT: "+a.O+"ms")),b=a;var l=d;if(b.oa=di(b,b.H?b.la:null,b.W),l.J){cG(b.i,l);var m=l,q=b.K;q&&m.setTimeout(q),m.B&&(b7(m),b5(m)),b.g=l}else c9(b);0<a.l.length&&c5(a)}else"stop"!=c[0]&&"close"!=c[0]||dg(a,7)}else 3==a.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?dg(a,7):c1(a):"noop"!=c[0]&&a.j&&a.j.wa(c),a.A=0)}}bU(4)}catch(t){}}function cb(a,f){if(a.forEach&&"function"==typeof a.forEach)a.forEach(f,void 0);else if(aV(a)||"string"==typeof a)a0(a,f,void 0);else{if(a.T&&"function"==typeof a.T)var b=a.T();else if(a.R&&"function"==typeof a.R)b=void 0;else if(aV(a)||"string"==typeof a){b=[];for(var d=a.length,c=0;c<d;c++)b.push(c)}else for(c in b=[],d=0,a)b[d++]=c;c=(d=function(a){if(a.R&&"function"==typeof a.R)return a.R();if("string"==typeof a)return a.split("");if(aV(a)){for(var b=[],d=a.length,c=0;c<d;c++)b.push(a[c]);return b}for(c in b=[],d=0,a)b[d++]=a[c];return b}(a)).length;for(var e=0;e<c;e++)f.call(void 0,d[e],b&&b[e],a)}}function aw(c,d){this.h={},this.g=[],this.i=0;var b=arguments.length;if(1<b){if(b%2)throw Error("Uneven number of arguments");for(var a=0;a<b;a+=2)this.set(arguments[a],arguments[a+1])}else if(c){if(c instanceof aw)for(b=c.T(),a=0;a<b.length;a++)this.set(b[a],c.get(b[a]));else for(a in c)this.set(a,c[a])}}function cc(a){if(a.i!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];cd(a.h,d)&&(a.g[c++]=d),b++}a.g.length=c}if(a.i!=a.g.length){var e={};for(c=b=0;b<a.g.length;)cd(e,d=a.g[b])||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}function cd(a,b){return Object.prototype.hasOwnProperty.call(a,b)}(a=av.prototype).setTimeout=function(a){this.P=a},a.gb=function(a){a=a.target;let b=this.L;b&&3==cZ(a)?b.l():this.Ia(a)},a.Ia=function(e){try{if(e==this.g)a:{let a=cZ(this.g);var b=this.g.Da();let k=this.g.ba();if(!(3>a)&&(3!=a||ba||this.g&&(this.h.h||this.g.ga()||c$(this.g)))){this.I||4!=a||7==b||(8==b||0>=k?bU(3):bU(2)),b7(this);var c=this.g.ba();this.N=c;b:if(b2(this)){var f=c$(this.g);e="";var g=f.length,l=4==cZ(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){b9(this),b8(this);var d="";break b}this.h.i=new s.TextDecoder}for(b=0;b<g;b++)this.h.h=!0,e+=this.h.i.decode(f[b],{stream:l&&b==g-1});f.splice(0,g),this.h.g+=e,this.C=0,d=this.h.g}else d=this.g.ga();if(this.i=200==c,function(a,b,c,d,e,f,g){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+e+"]: "+b+"\n"+c+"\n"+f+" "+g})}(this.j,this.u,this.A,this.m,this.X,a,c),this.i){if(this.$&&!this.J){b:{if(this.g){var h,i=this.g;if((h=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!a3(h)){var j=h;break b}}j=null}if(c=j)bQ(this.j,this.m,c,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ca(this,c);else{this.i=!1,this.o=3,bV(12),b9(this),b8(this);break a}}this.U?(b3(this,a,d),ba&&this.i&&3==a&&(bO(this.V,this.W,"tick",this.fb),this.W.start())):(bQ(this.j,this.m,d,null),ca(this,d)),4==a&&b9(this),this.i&&!this.I&&(4==a?de(this.l,this):(this.i=!1,b5(this)))}else 400==c&&0<d.indexOf("Unknown SID")?(this.o=3,bV(12)):(this.o=0,bV(13)),b9(this),b8(this)}}}catch(m){}finally{}},a.fb=function(){if(this.g){var a=cZ(this.g),b=this.g.ga();this.C<b.length&&(b7(this),b3(this,a,b),this.i&&4!=a&&b5(this))}},a.cancel=function(){this.I=!0,b9(this)},a.eb=function(){this.B=null;let a=Date.now();0<=a-this.Y?(function(a,b){a.info(function(){return"TIMEOUT: "+b})}(this.j,this.A),2!=this.K&&(bU(3),bV(17)),b9(this),this.o=2,b8(this)):b6(this,this.Y-a)},(a=aw.prototype).R=function(){cc(this);for(var b=[],a=0;a<this.g.length;a++)b.push(this.h[this.g[a]]);return b},a.T=function(){return cc(this),this.g.concat()},a.get=function(a,b){return cd(this.h,a)?this.h[a]:b},a.set=function(a,b){cd(this.h,a)||(this.i++,this.g.push(a)),this.h[a]=b},a.forEach=function(d,e){for(var b=this.T(),a=0;a<b.length;a++){var c=b[a],f=this.get(c);d.call(e,f,c,this)}};var ce=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ax(b,c){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,b instanceof ax){this.g=void 0!==c?c:b.g,cg(this,b.j),this.s=b.s,ch(this,b.i),ci(this,b.m),this.l=b.l,c=b.h;var a=new ay;a.i=c.i,c.g&&(a.g=new aw(c.g),a.h=c.h),cj(this,a),this.o=b.o}else b&&(a=String(b).match(ce))?(this.g=!!c,cg(this,a[1]||"",!0),this.s=cm(a[2]||""),ch(this,a[3]||"",!0),ci(this,a[4]),this.l=cm(a[5]||"",!0),cj(this,a[6]||"",!0),this.o=cm(a[7]||"")):(this.g=!!c,this.h=new ay(null,this.g))}function cf(a){return new ax(a)}function cg(a,b,c){a.j=c?cm(b,!0):b,a.j&&(a.j=a.j.replace(/:$/,""))}function ch(b,a,c){b.i=c?cm(a,!0):a}function ci(b,a){if(a){if(isNaN(a=Number(a))||0>a)throw Error("Bad port number "+a);b.m=a}else b.m=null}function cj(a,b,c){b instanceof ay?(a.h=b,cz(a.h,a.g)):(c||(b=cn(b,cs)),a.h=new ay(b,a.g))}function ck(a,b,c){a.h.set(b,c)}function cl(a){return ck(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function cm(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function cn(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,co),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function co(a){return"%"+((a=a.charCodeAt(0))>>4&15).toString(16)+(15&a).toString(16)}ax.prototype.toString=function(){var b=[],c=this.j;c&&b.push(cn(c,cp,!0),":");var a=this.i;return(a||"file"==c)&&(b.push("//"),(c=this.s)&&b.push(cn(c,cp,!0),"@"),b.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(a=this.m)&&b.push(":",String(a))),(a=this.l)&&(this.i&&"/"!=a.charAt(0)&&b.push("/"),b.push(cn(a,"/"==a.charAt(0)?cr:cq,!0))),(a=this.h.toString())&&b.push("?",a),(a=this.o)&&b.push("#",cn(a,ct)),b.join("")};var cp=/[#\/\?@]/g,cq=/[#\?:]/g,cr=/[#\?]/g,cs=/[#\?@]/g,ct=/#/g;function ay(a,b){this.h=this.g=null,this.i=a||null,this.j=!!b}function cu(a){a.g||(a.g=new aw,a.h=0,a.i&&function(a,f){if(a){a=a.split("&");for(var b=0;b<a.length;b++){var c=a[b].indexOf("="),d=null;if(0<=c){var e=a[b].substring(0,c);d=a[b].substring(c+1)}else e=a[b];f(e,d?decodeURIComponent(d.replace(/\+/g," ")):"")}}}(a.i,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function cv(a,b){cu(a),b=cy(a,b),cd(a.g.h,b)&&(a.i=null,a.h-=a.g.get(b).length,cd((a=a.g).h,b)&&(delete a.h[b],a.i--,a.g.length>2*a.i&&cc(a)))}function cw(a,b){return cu(a),b=cy(a,b),cd(a.g.h,b)}function cx(a,c,b){cv(a,c),0<b.length&&(a.i=null,a.g.set(cy(a,c),a2(b)),a.h+=b.length)}function cy(b,a){return a=String(a),b.j&&(a=a.toLowerCase()),a}function cz(a,b){b&&!a.j&&(cu(a),a.i=null,a.g.forEach(function(c,a){var b=a.toLowerCase();a!=b&&(cv(this,a),cx(this,b,c))},a)),a.j=b}(a=ay.prototype).add=function(a,c){cu(this),this.i=null,a=cy(this,a);var b=this.g.get(a);return b||this.g.set(a,b=[]),b.push(c),this.h+=1,this},a.forEach=function(a,b){cu(this),this.g.forEach(function(c,d){a0(c,function(c){a.call(b,c,d,this)},this)},this)},a.T=function(){cu(this);for(var e=this.g.R(),b=this.g.T(),c=[],a=0;a<b.length;a++)for(var f=e[a],d=0;d<f.length;d++)c.push(b[a]);return c},a.R=function(a){cu(this);var b=[];if("string"==typeof a)cw(this,a)&&(b=a1(b,this.g.get(cy(this,a))));else{a=this.g.R();for(var c=0;c<a.length;c++)b=a1(b,a[c])}return b},a.set=function(a,b){return cu(this),this.i=null,a=cy(this,a),cw(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[b]),this.h+=1,this},a.get=function(a,b){return a&&0<(a=this.R(a)).length?String(a[0]):b},a.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var d=[],e=this.g.T(),c=0;c<e.length;c++){var a=e[c],g=encodeURIComponent(String(a));a=this.R(a);for(var b=0;b<a.length;b++){var f=g;""!==a[b]&&(f+="="+encodeURIComponent(String(a[b]))),d.push(f)}}return this.i=d.join("&")};var cA=class{constructor(a,b){this.h=a,this.g=b}};function az(a){this.l=a||cB,a=s.PerformanceNavigationTiming?0<(a=s.performance.getEntriesByType("navigation")).length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol):!!(s.g&&s.g.Ea&&s.g.Ea()&&s.g.Ea().Zb),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cB=10;function cC(a){return!!a.h|| !!a.g&&a.g.size>=a.j}function cD(a){return a.h?1:a.g?a.g.size:0}function cE(a,b){return a.h?a.h==b:!!a.g&&a.g.has(b)}function cF(a,b){a.g?a.g.add(b):a.h=b}function cG(a,b){a.h&&a.h==b?a.h=null:a.g&&a.g.has(b)&&a.g.delete(b)}function cH(a){if(null!=a.h)return a.i.concat(a.h.D);if(null!=a.g&&0!==a.g.size){let b=a.i;for(let c of a.g.values())b=b.concat(c.D);return b}return a2(a.i)}function Y(){}function cI(){this.g=new Y}function cJ(a,b,c){let d=c||"";try{cb(a,function(a,e){let c=a;aW(a)&&(c=bz(a)),b.push(d+e+"="+encodeURIComponent(c))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e}}function cK(d,a,e,b,c){try{a.onload=null,a.onerror=null,a.onabort=null,a.ontimeout=null,c(b)}catch(f){}}function x(a){this.l=a.$b||null,this.j=a.ib||!1}function J(a,b){g.call(this),this.D=a,this.u=b,this.m=void 0,this.readyState=cL,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}az.prototype.cancel=function(){if(this.i=cH(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let a of this.g.values())a.cancel();this.g.clear()}},Y.prototype.stringify=function(a){return s.JSON.stringify(a,void 0)},Y.prototype.parse=function(a){return s.JSON.parse(a,void 0)},c(x,I),x.prototype.g=function(){return new J(this.l,this.j)},x.prototype.i=(af={},function(){return af}),c(J,g);var cL=0;function cM(a){a.j.read().then(a.Sa.bind(a)).catch(a.ha.bind(a))}function cN(a){a.readyState=4,a.l=null,a.j=null,a.A=null,cO(a)}function cO(a){a.onreadystatechange&&a.onreadystatechange.call(a)}(a=J.prototype).open=function(a,b){if(this.readyState!=cL)throw this.abort(),Error("Error reopening a connection");this.C=a,this.B=b,this.readyState=1,cO(this)},a.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let b={headers:this.v,method:this.C,credentials:this.m,cache:void 0};a&&(b.body=a),(this.D||s).fetch(new Request(this.B,b)).then(this.Va.bind(this),this.ha.bind(this))},a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cN(this)),this.readyState=cL},a.Va=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,cO(this)),this.g&&(this.readyState=3,cO(this),this.g))){if("arraybuffer"===this.responseType)a.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==s.ReadableStream&&"body"in a){if(this.j=a.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cM(this)}else a.text().then(this.Ua.bind(this),this.ha.bind(this))}},a.Sa=function(a){if(this.g){if(this.u&&a.value)this.response.push(a.value);else if(!this.u){var b=a.value?a.value:new Uint8Array(0);(b=this.A.decode(b,{stream:!a.done}))&&(this.response=this.responseText+=b)}a.done?cN(this):cO(this),3==this.readyState&&cM(this)}},a.Ua=function(a){this.g&&(this.response=this.responseText=a,cN(this))},a.Ta=function(a){this.g&&(this.response=a,cN(this))},a.ha=function(){this.g&&cN(this)},a.setRequestHeader=function(a,b){this.v.append(a,b)},a.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";let b=[],c=this.h.entries();for(var a=c.next();!a.done;)b.push((a=a.value)[0]+": "+a[1]),a=c.next();return b.join("\r\n")},Object.defineProperty(J.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(a){this.m=a?"include":"same-origin"}});var cP=s.JSON.parse;function d(a){g.call(this),this.headers=new aw,this.u=a||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cQ,this.K=this.L=!1}c(d,g);var cQ="",cR=/^https?$/i,cS=["POST","PUT"];function cT(a){return"content-type"==a.toLowerCase()}function cU(a,b){a.h=!1,a.g&&(a.l=!0,a.g.abort(),a.l=!1),a.j=b,a.m=5,cV(a),cX(a)}function cV(a){a.D||(a.D=!0,bx(a,"complete"),bx(a,"error"))}function cW(a){if(a.h&& void 0!==ak&&(!a.C[1]||4!=cZ(a)||2!=a.ba())){if(a.v&&4==cZ(a))bK(a.Fa,0,a);else if(bx(a,"readystatechange"),4==cZ(a)){a.h=!1;try{let e=a.ba();a:switch(e){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c,d,f=!0;break a;default:f=!1}if(!(c=f)){if(d=0===e){var b=String(a.H).match(ce)[1]||null;if(!b&&s.self&&s.self.location){var g=s.self.location.protocol;b=g.substr(0,g.length-1)}d=!cR.test(b?b.toLowerCase():"")}c=d}if(c)bx(a,"complete"),bx(a,"success");else{a.m=6;try{var h=2<cZ(a)?a.g.statusText:""}catch(i){h=""}a.j=h+" ["+a.ba()+"]",cV(a)}}finally{cX(a)}}}}function cX(a,b){if(a.g){cY(a);let c=a.g,d=a.C[0]?al:null;a.g=null,a.C=null,b||bx(a,"ready");try{c.onreadystatechange=d}catch(e){}}}function cY(a){a.g&&a.K&&(a.g.ontimeout=null),a.A&&(s.clearTimeout(a.A),a.A=null)}function cZ(a){return a.g?a.g.readyState:0}function c$(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.J){case cQ:case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(b){return null}}function c_(b,e,a){a:{for(c in a){var f,c=!1;break a}c=!0}let d;c||(a=(d="",a6(f=a,function(a,b){d+=b,d+=":",d+=a,d+="\r\n"}),d),"string"==typeof b?null!=a&&encodeURIComponent(String(a)):ck(b,e,a))}function c0(b,c,a){return a&&a.internalChannelParams&&a.internalChannelParams[b]||c}function aA(a){this.za=0,this.l=[],this.h=new T,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=c0("failFast",!1,a),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=c0("baseRetryDelayMs",5e3,a),this.$a=c0("retryDelaySeedMs",1e4,a),this.Ya=c0("forwardChannelMaxRetries",2,a),this.ra=c0("forwardChannelRequestTimeoutMs",2e4,a),this.qa=a&&a.xmlHttpFactory||void 0,this.Ba=a&&a.Yb||!1,this.K=void 0,this.H=a&&a.supportsCrossDomainXhr||!1,this.J="",this.i=new az(a&&a.concurrentRequestLimit),this.Ca=new cI,this.ja=a&&a.fastHandshake||!1,this.Ra=a&&a.Wb||!1,a&&a.Aa&&this.h.Aa(),a&&a.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&a&&a.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!a|| !1!==a.Xb}function c1(c){if(c3(c),3==c.G){var a=c.V++,b=cf(c.F);ck(b,"SID",c.J),ck(b,"RID",a),ck(b,"TYPE","terminate"),c7(c,b),(a=new av(c,c.h,a,void 0)).K=2,a.v=cl(cf(b)),b=!1,s.navigator&&s.navigator.sendBeacon&&(b=s.navigator.sendBeacon(a.v.toString(),"")),!b&&s.Image&&((new Image).src=a.v,b=!0),b||(a.g=dj(a.l,null),a.g.ea(a.v)),a.F=Date.now(),b5(a)}dh(c)}function c2(a){a.g&&(db(a),a.g.cancel(),a.g=null)}function c3(a){c2(a),a.u&&(s.clearTimeout(a.u),a.u=null),dd(a),a.i.cancel(),a.m&&("number"==typeof a.m&&s.clearTimeout(a.m),a.m=null)}function c4(a,b){a.l.push(new cA(a.Za++,b)),3==a.G&&c5(a)}function c5(a){cC(a.i)||a.m||(a.m=!0,bE(a.Ha,a),a.C=0)}function c6(a,c){var b;b=c?c.m:a.V++;let d=cf(a.F);ck(d,"SID",a.J),ck(d,"RID",b),ck(d,"AID",a.U),c7(a,d),a.o&&a.s&&c_(d,a.o,a.s),b=new av(a,a.h,b,a.C+1),null===a.o&&(b.H=a.s),c&&(a.l=c.D.concat(a.l)),c=c8(a,b,1e3),b.setTimeout(Math.round(.5*a.ra)+Math.round(.5*a.ra*Math.random())),cF(a.i,b),b0(b,d,c)}function c7(a,b){a.j&&cb({},function(a,c){ck(b,c,a)})}function c8(a,k,c){c=Math.min(a.l.length,c);var e=a.j?aZ(a.j.Oa,a.j,a):null;a:{var f=a.l;let b=-1;for(;;){let g=["count="+c];-1==b?0<c?(b=f[0].h,g.push("ofs="+b)):b=0:g.push("ofs="+b);let h=!0;for(let d=0;d<c;d++){let i=f[d].h,j=f[d].g;if(0>(i-=b))b=Math.max(0,f[d].h-100),h=!1;else try{cJ(j,g,"req"+i+"_")}catch(l){e&&e(j)}}if(h){e=g.join("&");break a}}}return a=a.l.splice(0,c),k.D=a,e}function c9(a){a.g||a.u||(a.Y=1,bE(a.Ga,a),a.A=0)}function da(a){return!a.g&&!a.u&&!(3<=a.A)&&(a.Y++,a.u=bW(aZ(a.Ga,a),df(a,a.A)),a.A++,!0)}function db(a){null!=a.B&&(s.clearTimeout(a.B),a.B=null)}function dc(a){a.g=new av(a,a.h,"rpc",a.Y),null===a.o&&(a.g.H=a.s),a.g.O=0;var b=cf(a.oa);ck(b,"RID","rpc"),ck(b,"SID",a.J),ck(b,"CI",a.N?"0":"1"),ck(b,"AID",a.U),c7(a,b),ck(b,"TYPE","xmlhttp"),a.o&&a.s&&c_(b,a.o,a.s),a.K&&a.g.setTimeout(a.K);var c=a.g;a=a.la,c.K=1,c.v=cl(cf(b)),c.s=null,c.U=!0,b1(c,a)}function dd(a){null!=a.v&&(s.clearTimeout(a.v),a.v=null)}function de(a,c){var e=null;if(a.g==c){dd(a),db(a),a.g=null;var d=2}else{if(!cE(a.i,c))return;e=c.D,cG(a.i,c),d=1}if(a.I=c.N,0!=a.G){if(c.i){if(1==d){e=c.s?c.s.length:0,c=Date.now()-c.F;var b,g,f=a.C;d=bT(),bx(d,new au(d,e,c,f)),c5(a)}else c9(a)}else if(3==(f=c.o)||0==f&&0<a.I||!(1==d&&(b=a,g=c,!(cD(b.i)>=b.i.j-(b.m?1:0))&&(b.m?(b.l=g.D.concat(b.l),!0):1!=b.G&&2!=b.G&&!(b.C>=(b.Xa?0:b.Ya))&&(b.m=bW(aZ(b.Ha,b,g),df(b,b.C)),b.C++,!0)))||2==d&&da(a)))switch(e&&0<e.length&&((c=a.i).i=c.i.concat(e)),f){case 1:dg(a,5);break;case 4:dg(a,10);break;case 3:dg(a,6);break;default:dg(a,2)}}}function df(a,c){let b=a.Pa+Math.floor(Math.random()*a.$a);return a.j||(b*=2),b*c}function dg(a,c){if(a.h.info("Error code "+c),2==c){var b=null;a.j&&(b=null);var d=aZ(a.jb,a);b||(b=new ax("//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||cg(b,"https"),cl(b)),function(d,b){let c=new T;if(s.Image){let a=new Image;a.onload=a$(cK,c,a,"TestLoadImage: loaded",!0,b),a.onerror=a$(cK,c,a,"TestLoadImage: error",!1,b),a.onabort=a$(cK,c,a,"TestLoadImage: abort",!1,b),a.ontimeout=a$(cK,c,a,"TestLoadImage: timeout",!1,b),s.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=d}else b(!1)}(b.toString(),d)}else bV(2);a.G=0,a.j&&a.j.va(c),dh(a),c3(a)}function dh(a){a.G=0,a.I=-1,a.j&&((0!=cH(a.i).length||0!=a.l.length)&&(a.i.i.length=0,a2(a.l),a.l.length=0),a.j.ua())}function di(c,b,e){var g,h,i,j,k,d;let a=(g=e)instanceof ax?cf(g):new ax(g,void 0);if(""!=a.i)b&&ch(a,b+"."+a.i),ci(a,a.m);else{let f=s.location;a=(h=f.protocol,i=b?b+"."+f.hostname:f.hostname,j=+f.port,k=e,d=new ax(null,void 0),h&&cg(d,h),i&&ch(d,i),j&&ci(d,j),k&&(d.l=k),d)}return c.aa&&a6(c.aa,function(b,c){ck(a,c,b)}),b=c.D,e=c.sa,b&&e&&ck(a,b,e),ck(a,"VER",c.ma),c7(c,a),a}function dj(a,b,c){if(b&&!a.H)throw Error("Can't create secondary domain capable XhrIo object.");return(b=new d(c&&a.Ba&&!a.qa?new x({ib:!0}):a.qa)).L=a.H,b}function Z(){}function K(){if(t&&!(10<=Number(bc)))throw Error("Environmental error: no available transport.")}function h(b,a){g.call(this),this.g=new aA(a),this.l=b,this.h=a&&a.messageUrlParams||null,b=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(b?b["X-Client-Protocol"]="webchannel":b={"X-Client-Protocol":"webchannel"}),this.g.s=b,b=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(b?b["X-WebChannel-Content-Type"]=a.messageContentType:b={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.ya&&(b?b["X-WebChannel-Client-Profile"]=a.ya:b={"X-WebChannel-Client-Profile":a.ya}),this.g.P=b,(b=a&&a.httpHeadersOverwriteParam)&&!a3(b)&&(this.g.o=b),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!a3(a)&&(this.g.D=a,null!==(b=this.h)&&a in b&&a in(b=this.h)&&delete b[a]),this.j=new r(this)}function aB(a){W.call(this);var b=a.__sm__;if(b){a:{for(let c in b){a=c;break a}a=void 0}(this.i=a)&&(a=this.i,b=null!==b&&a in b?b[a]:void 0),this.data=b}else this.data=a}function aC(){X.call(this),this.status=1}function r(a){this.g=a}(a=d.prototype).ea=function(a,b,d,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET",this.H=a,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ag.g(),this.C=this.u?bX(this.u):bX(ag),this.g.onreadystatechange=aZ(this.Fa,this);try{this.F=!0,this.g.open(b,String(a),!0),this.F=!1}catch(g){cU(this,g);return}a=d||"";let e=new aw(this.headers);c&&cb(c,function(a,b){e.set(b,a)}),c=function(a){a:{var b=cT;let e=a.length,d="string"==typeof a?a.split(""):a;for(let c=0;c<e;c++)if(c in d&&b.call(void 0,d[c],c,a)){b=c;break a}b=-1}return 0>b?null:"string"==typeof a?a.charAt(b):a[b]}(e.T()),d=s.FormData&&a instanceof s.FormData,!(0<=a_(cS,b))||c||d||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),e.forEach(function(a,b){this.g.setRequestHeader(b,a)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var f;cY(this),0<this.B&&((this.K=(f=this.g,t&&function(b){var a=bb;return Object.prototype.hasOwnProperty.call(a,9)?a[9]:a[9]=b(9)}(function(){let c=0,e=a4(String(C)).split("."),f=a4("9").split("."),g=Math.max(e.length,f.length);for(let d=0;0==c&&d<g;d++){var a=e[d]||"",b=f[d]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],b=/(\d*)(\D*)(.*)/.exec(b)||["","","",""],0==a[0].length&&0==b[0].length)break;c=a5(0==a[1].length?0:parseInt(a[1],10),0==b[1].length?0:parseInt(b[1],10))||a5(0==a[2].length,0==b[2].length)||a5(a[2],b[2]),a=a[3],b=b[3]}while(0==c)}return 0<=c})&&"number"==typeof f.timeout&& void 0!==f.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=aZ(this.pa,this)):this.A=bK(this.pa,this.B,this)),this.v=!0,this.g.send(a),this.v=!1}catch(h){cU(this,h)}},a.pa=function(){void 0!==ak&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bx(this,"timeout"),this.abort(8))},a.abort=function(a){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=a||7,bx(this,"complete"),bx(this,"abort"),cX(this))},a.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cX(this,!0)),d.Z.M.call(this)},a.Fa=function(){this.s||(this.F||this.v||this.l?cW(this):this.cb())},a.cb=function(){cW(this)},a.ba=function(){try{return 2<cZ(this)?this.g.status:-1}catch(a){return -1}},a.ga=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},a.Qa=function(b){if(this.g){var a=this.g.responseText;return b&&0==a.indexOf(b)&&(a=a.substring(b.length)),cP(a)}},a.Da=function(){return this.m},a.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(a=aA.prototype).ma=8,a.G=1,a.hb=function(a){try{this.h.info("Origin Trials invoked: "+a)}catch(b){}},a.Ha=function(e){if(this.m){if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;let f=new av(this,this.h,e,void 0),d=this.s;if(this.P&&(d?a9(d=a7(d),this.P):d=this.P),null===this.o&&(f.H=d),this.ja)a:{for(var b=0,a=0;a<this.l.length;a++){b:{var c=this.l[a];if("__data__"in c.g&&"string"==typeof(c=c.g.__data__)){c=c.length;break b}c=void 0}if(void 0===c)break;if(4096<(b+=c)){b=a;break a}if(4096===b||a===this.l.length-1){b=a+1;break a}}b=1e3}else b=1e3;b=c8(this,f,b),a=cf(this.F),ck(a,"RID",e),ck(a,"CVER",22),this.D&&ck(a,"X-HTTP-Session-Id",this.D),c7(this,a),this.o&&d&&c_(a,this.o,d),cF(this.i,f),this.Ra&&ck(a,"TYPE","init"),this.ja?(ck(a,"$req",b),ck(a,"SID","null"),f.$=!0,b0(f,a,null)):b0(f,a,b),this.G=2}}else 3==this.G&&(e?c6(this,e):0==this.l.length||cC(this.i)||c6(this))}},a.Ga=function(){if(this.u=null,dc(this),this.$&&!(this.L||null==this.g||0>=this.O)){var a=2*this.O;this.h.info("BP detection timer enabled: "+a),this.B=bW(aZ(this.bb,this),a)}},a.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,bV(10),c2(this),dc(this))},a.ab=function(){null!=this.v&&(this.v=null,c2(this),da(this),bV(19))},a.jb=function(a){a?(this.h.info("Successfully pinged google.com"),bV(2)):(this.h.info("Failed to ping google.com"),bV(1))},(a=Z.prototype).xa=function(){},a.wa=function(){},a.va=function(){},a.ua=function(){},a.Oa=function(){},K.prototype.g=function(a,b){return new h(a,b)},c(h,g),h.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var a=this.g,b=this.l,c=this.h||void 0;a.Wa&&(a.h.info("Origin Trials enabled."),bE(aZ(a.hb,a,b))),bV(0),a.W=b,a.aa=c||{},a.N=a.X,a.F=di(a,null,a.W),c5(a)},h.prototype.close=function(){c1(this.g)},h.prototype.u=function(a){if("string"==typeof a){var b={};b.__data__=a,c4(this.g,b)}else this.v?((b={}).__data__=bz(a),c4(this.g,b)):c4(this.g,a)},h.prototype.M=function(){this.g.j=null,delete this.j,c1(this.g),delete this.g,h.Z.M.call(this)},c(aB,W),c(aC,X),c(r,Z),r.prototype.xa=function(){bx(this.g,"a")},r.prototype.wa=function(a){bx(this.g,new aB(a))},r.prototype.va=function(a){bx(this.g,new aC(a))},r.prototype.ua=function(){bx(this.g,"b")},K.prototype.createWebChannel=K.prototype.g,h.prototype.send=h.prototype.u,h.prototype.open=h.prototype.m,h.prototype.close=h.prototype.close,v.NO_ERROR=0,v.TIMEOUT=8,v.HTTP_ERROR=6,U.COMPLETE="complete",V.EventType=q,q.OPEN="a",q.CLOSE="b",q.ERROR="c",q.MESSAGE="d",g.prototype.listen=g.prototype.N,d.prototype.listenOnce=d.prototype.O,d.prototype.getLastError=d.prototype.La,d.prototype.getLastErrorCode=d.prototype.Da,d.prototype.getStatus=d.prototype.ba,d.prototype.getResponseJson=d.prototype.Qa,d.prototype.getResponseText=d.prototype.ga,d.prototype.send=d.prototype.ea;var dk=i.createWebChannelTransport=function(){return new K},dl=i.getStatEventTarget=function(){return bT()},dm=i.ErrorCode=v,dn=i.EventType=U,dp=i.Event=u,dq=i.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},dr=i.FetchXmlHttpFactory=x,ds=i.WebChannel=V,dt=i.XhrIo=d,du=j(3454);let dv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */ class k{constructor(a){this.uid=a}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(a){return a.uid===this.uid}}k.UNAUTHENTICATED=new k(null),k.GOOGLE_CREDENTIALS=new k("google-credentials-uid"),k.FIRST_PARTY=new k("first-party-uid"),k.MOCK_USER=new k("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dw="9.9.0",dx=new ah.Yd("@firebase/firestore");function dy(){return dx.logLevel}function dz(a,...b){if(dx.logLevel<=ah.in.DEBUG){let c=b.map(dC);dx.debug(`Firestore (${dw}): ${a}`,...c)}}function dA(a,...b){if(dx.logLevel<=ah.in.ERROR){let c=b.map(dC);dx.error(`Firestore (${dw}): ${a}`,...c)}}function dB(a,...b){if(dx.logLevel<=ah.in.WARN){let c=b.map(dC);dx.warn(`Firestore (${dw}): ${a}`,...c)}}function dC(a){var b;if("string"==typeof a)return a;try{return b=a,JSON.stringify(b)}catch(c){return a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function dD(b="Unexpected state"){let a=`FIRESTORE (${dw}) INTERNAL ASSERTION FAILED: `+b;throw dA(a),Error(a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dF extends ai.ZR{constructor(a,b){super(a,b),this.code=a,this.message=b,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dG{constructor(){this.promise=new Promise((a,b)=>{this.resolve=a,this.reject=b})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dH{constructor(a,b){this.user=b,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${a}`)}}class dI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(a,b){a.enqueueRetryable(()=>b(k.UNAUTHENTICATED))}shutdown(){}}class dJ{constructor(a){this.t=a,this.currentUser=k.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(b,c){let d=this.i,e=a=>this.i!==d?(d=this.i,c(a)):Promise.resolve(),f=new dG;this.o=()=>{this.i++,this.currentUser=this.u(),f.resolve(),f=new dG,b.enqueueRetryable(()=>e(this.currentUser))};let a=()=>{let a=f;b.enqueueRetryable(async()=>{await a.promise,await e(this.currentUser)})},g=b=>{dz("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=b,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(a=>g(a)),setTimeout(()=>{if(!this.auth){let a=this.t.getImmediate({optional:!0});a?g(a):(dz("FirebaseAuthCredentialsProvider","Auth not yet detected"),f.resolve(),f=new dG)}},0),a()}getToken(){let b=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(a=>{var c;return this.i!==b?(dz("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?("string"==typeof a.accessToken||dD(),new dH(a.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){var b;let a=this.auth&&this.auth.getUid();return null===a||"string"==typeof a||dD(),new k(a)}}class dK{constructor(c,d,a){this.type="FirstParty",this.user=k.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",d);let b=c.auth.getAuthHeaderValueForFirstParty([]);b&&this.headers.set("Authorization",b),a&&this.headers.set("X-Goog-Iam-Authorization-Token",a)}}class dL{constructor(a,b,c){this.h=a,this.l=b,this.m=c}getToken(){return Promise.resolve(new dK(this.h,this.l,this.m))}start(a,b){a.enqueueRetryable(()=>b(k.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dM{constructor(a){this.value=a,this.type="AppCheck",this.headers=new Map,a&&a.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dN{constructor(a){this.g=a,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(a,b){let c=a=>{null!=a.error&&dz("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);let c=a.token!==this.p;return this.p=a.token,dz("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?b(a.token):Promise.resolve()};this.o=b=>{a.enqueueRetryable(()=>c(b))};let d=a=>{dz("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.g.onInit(a=>d(a)),setTimeout(()=>{if(!this.appCheck){let a=this.g.getImmediate({optional:!0});a?d(a):dz("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let a=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(a).then(a=>{var b;return a?("string"==typeof a.token||dD(),this.p=a.token,new dM(a.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function dO(d){let a="undefined"!=typeof self&&(self.crypto||self.msCrypto),b=new Uint8Array(d);if(a&&"function"==typeof a.getRandomValues)a.getRandomValues(b);else for(let c=0;c<d;c++)b[c]=Math.floor(256*Math.random());return b}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dP{static I(){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/a.length)*a.length,b="";for(;b.length<20;){let d=dO(40);for(let c=0;c<d.length;++c)b.length<20&&d[c]<e&&(b+=a.charAt(d[c]%a.length))}return b}}function aD(a,b){return a<b?-1:a>b?1:0}function dQ(a,b,c){return a.length===b.length&&a.every((a,d)=>c(a,b[d]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */ class dR{constructor(a,b){if(this.seconds=a,this.nanoseconds=b,b<0||b>=1e9)throw new dF(dE.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+b);if(a< -62135596800||a>=253402300800)throw new dF(dE.INVALID_ARGUMENT,"Timestamp seconds out of range: "+a)}static now(){return dR.fromMillis(Date.now())}static fromDate(a){return dR.fromMillis(a.getTime())}static fromMillis(a){let b=Math.floor(a/1e3);return new dR(b,Math.floor(1e6*(a-1e3*b)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(a){return this.seconds===a.seconds?aD(this.nanoseconds,a.nanoseconds):aD(this.seconds,a.seconds)}isEqual(a){return a.seconds===this.seconds&&a.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let a=this.seconds- -62135596800;return String(a).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */ class dS{constructor(a){this.timestamp=a}static fromTimestamp(a){return new dS(a)}static min(){return new dS(new dR(0,0))}static max(){return new dS(new dR(253402300799,999999999))}compareTo(a){return this.timestamp._compareTo(a.timestamp)}isEqual(a){return this.timestamp.isEqual(a.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Path represents an ordered sequence of string segments.
 */ class ${constructor(b,a,c){void 0===a?a=0:a>b.length&&dD(),void 0===c?c=b.length-a:c>b.length-a&&dD(),this.segments=b,this.offset=a,this.len=c}get length(){return this.len}isEqual(a){return 0===$.comparator(this,a)}child(a){let b=this.segments.slice(this.offset,this.limit());return a instanceof $?a.forEach(a=>{b.push(a)}):b.push(a),this.construct(b)}limit(){return this.offset+this.length}popFirst(a){return a=void 0===a?1:a,this.construct(this.segments,this.offset+a,this.length-a)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(a){return this.segments[this.offset+a]}isEmpty(){return 0===this.length}isPrefixOf(b){if(b.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==b.get(a))return!1;return!0}isImmediateParentOf(b){if(this.length+1!==b.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==b.get(a))return!1;return!0}forEach(b){for(let a=this.offset,c=this.limit();a<c;a++)b(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(a,b){let f=Math.min(a.length,b.length);for(let c=0;c<f;c++){let d=a.get(c),e=b.get(c);if(d<e)return -1;if(d>e)return 1}return a.length<b.length?-1:a.length>b.length?1:0}}class dT extends ${construct(a,b,c){return new dT(a,b,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...c){let b=[];for(let a of c){if(a.indexOf("//")>=0)throw new dF(dE.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);b.push(...a.split("/").filter(a=>a.length>0))}return new dT(b)}static emptyPath(){return new dT([])}}let dU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dV extends ${construct(a,b,c){return new dV(a,b,c)}static isValidIdentifier(a){return dU.test(a)}canonicalString(){return this.toArray().map(a=>(a=a.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dV.isValidIdentifier(a)||(a="`"+a+"`"),a)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new dV(["__name__"])}static fromServerFormat(b){let h=[],f="",a=0,g=()=>{if(0===f.length)throw new dF(dE.INVALID_ARGUMENT,`Invalid field path (${b}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);h.push(f),f=""},c=!1;for(;a<b.length;){let d=b[a];if("\\"===d){if(a+1===b.length)throw new dF(dE.INVALID_ARGUMENT,"Path has trailing escape character: "+b);let e=b[a+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new dF(dE.INVALID_ARGUMENT,"Path has invalid escape sequence: "+b);f+=e,a+=2}else"`"===d?(c=!c,a++):"."!==d||c?(f+=d,a++):(g(),a++)}if(g(),c)throw new dF(dE.INVALID_ARGUMENT,"Unterminated ` in path: "+b);return new dV(h)}static emptyPath(){return new dV([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ class y{constructor(a){this.path=a}static fromPath(a){return new y(dT.fromString(a))}static fromName(a){return new y(dT.fromString(a).popFirst(5))}static empty(){return new y(dT.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(a){return this.path.length>=2&&this.path.get(this.path.length-2)===a}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(a){return null!==a&&0===dT.comparator(this.path,a.path)}toString(){return this.path.toString()}static comparator(a,b){return dT.comparator(a.path,b.path)}static isDocumentKey(a){return a.length%2==0}static fromSegments(a){return new y(new dT(a.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The initial mutation batch id for each index. Gets updated during index
 * backfill.
 */ /**
 * An index definition for field indexes in Firestore.
 *
 * Every index is associated with a collection. The definition contains a list
 * of fields and their index kind (which can be `ASCENDING`, `DESCENDING` or
 * `CONTAINS` for ArrayContains/ArrayContainsAny queries).
 *
 * Unlike the backend, the SDK does not differentiate between collection or
 * collection group-scoped indices. Every index can be used for both single
 * collection and collection group queries.
 */ class aE{constructor(a,b,c,d){this.indexId=a,this.collectionGroup=b,this.fields=c,this.indexState=d}}function dW(a){return a.fields.find(a=>2===a.kind)}function dX(a){return a.fields.filter(a=>2!==a.kind)}aE.UNKNOWN_ID=-1;class dY{constructor(a,b){this.fieldPath=a,this.kind=b}}class dZ{constructor(a,b){this.sequenceNumber=a,this.offset=b}static empty(){return new dZ(0,d0.min())}}function d$(a,d){let b=a.toTimestamp().seconds,c=a.toTimestamp().nanoseconds+1,e=dS.fromTimestamp(1e9===c?new dR(b+1,0):new dR(b,c));return new d0(e,y.empty(),d)}function d_(a){return new d0(a.readTime,a.key,-1)}class d0{constructor(a,b,c){this.readTime=a,this.documentKey=b,this.largestBatchId=c}static min(){return new d0(dS.min(),y.empty(),-1)}static max(){return new d0(dS.max(),y.empty(),-1)}}function d1(b,c){let a=b.readTime.compareTo(c.readTime);return 0!==a?a:0!==(a=y.comparator(b.documentKey,c.documentKey))?a:aD(b.largestBatchId,c.largestBatchId)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO(indexing): Remove this constant
let d2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(a){this.onCommittedListeners.push(a)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(a=>a())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */ async function d3(a){if(a.code!==dE.FAILED_PRECONDITION||a.message!==d2)throw a;dz("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */ class d4{constructor(a){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,a(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(a){return this.next(void 0,a)}next(a,b){return this.callbackAttached&&dD(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(b,this.error):this.wrapSuccess(a,this.result):new d4((c,d)=>{this.nextCallback=b=>{this.wrapSuccess(a,b).next(c,d)},this.catchCallback=a=>{this.wrapFailure(b,a).next(c,d)}})}toPromise(){return new Promise((a,b)=>{this.next(a,b)})}wrapUserFunction(b){try{let a=b();return a instanceof d4?a:d4.resolve(a)}catch(c){return d4.reject(c)}}wrapSuccess(a,b){return a?this.wrapUserFunction(()=>a(b)):d4.resolve(b)}wrapFailure(a,b){return a?this.wrapUserFunction(()=>a(b)):d4.reject(b)}static resolve(a){return new d4((b,c)=>{b(a)})}static reject(a){return new d4((c,b)=>{b(a)})}static waitFor(a){return new d4((b,f)=>{let c=0,d=0,e=!1;a.forEach(a=>{++c,a.next(()=>{++d,e&&d===c&&b()},a=>f(a))}),e=!0,d===c&&b()})}static or(b){let a=d4.resolve(!1);for(let c of b)a=a.next(a=>a?d4.resolve(a):c());return a}static forEach(a,c){let b=[];return a.forEach((a,d)=>{b.push(c.call(this,a,d))}),this.waitFor(b)}static mapArray(a,b){return new d4((f,g)=>{let d=a.length,h=Array(d),i=0;for(let c=0;c<d;c++){let e=c;b(a[e]).next(a=>{h[e]=a,++i===d&&f(h)},a=>g(a))}})}static doWhile(a,b){return new d4((d,e)=>{let c=()=>{!0===a()?b().next(()=>{c()},e):d()};c()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by SimpleDb.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ class d5{constructor(a,b){this.action=a,this.transaction=b,this.aborted=!1,this.T=new dG,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{b.error?this.T.reject(new d8(a,b.error)):this.T.resolve()},this.transaction.onerror=b=>{let c=ed(b.target.error);this.T.reject(new d8(a,c))}}static open(b,a,c,d){try{return new d5(a,b.transaction(d,c))}catch(e){throw new d8(a,e)}}get A(){return this.T.promise}abort(a){a&&this.T.reject(a),this.aborted||(dz("SimpleDb","Aborting transaction:",a?a.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){let a=this.transaction;this.aborted||"function"!=typeof a.commit||a.commit()}store(a){let b=this.transaction.objectStore(a);return new ea(b)}}class d6{constructor(a,b,c){this.name=a,this.version=b,this.P=c,12.2===d6.v(getUA())&&dA("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(a){return dz("SimpleDb","Removing database:",a),eb(window.indexedDB.deleteDatabase(a)).toPromise()}static V(){if(!isIndexedDBAvailable())return!1;if(d6.S())return!0;let a=getUA(),b=d6.v(a),d=0<b&&b<10,c=d6.D(a),e=0<c&&c<4.5;return!(a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0||a.indexOf("Edge/")>0||d||e)}static S(){var a;return void 0!==du&&"YES"===(null===(a=du.env)|| void 0===a?void 0:a.C)}static N(a,b){return a.store(b)}static v(b){let a=b.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=a?a[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static D(b){let a=b.match(/Android ([\d.]+)/i),c=a?a[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async k(a){return this.db||(dz("SimpleDb","Opening database:",this.name),this.db=await new Promise((c,d)=>{let b=indexedDB.open(this.name,this.version);b.onsuccess=a=>{let b=a.target.result;c(b)},b.onblocked=()=>{d(new d8(a,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},b.onerror=c=>{let b=c.target.error;"VersionError"===b.name?d(new dF(dE.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===b.name?d(new dF(dE.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+b)):d(new d8(a,b))},b.onupgradeneeded=a=>{dz("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',a.oldVersion);let c=a.target.result;this.P.O(c,b.transaction,a.oldVersion,this.version).next(()=>{dz("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.M&&(this.db.onversionchange=a=>this.M(a)),this.db}F(a){this.M=a,this.db&&(this.db.onversionchange=b=>a(b))}async runTransaction(b,g,h,i){let j="readonly"===g,c=0;for(;;){++c;try{this.db=await this.k(b);let d=d5.open(this.db,b,j?"readonly":"readwrite",h),e=i(d).next(a=>(d.R(),a)).catch(a=>(d.abort(a),d4.reject(a))).toPromise();return e.catch(()=>{}),await d.A,e}catch(k){let a=k,f="FirebaseError"!==a.name&&c<3;if(dz("SimpleDb","Transaction failed with error:",a.message,"Retrying:",f),this.close(),!f)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class d7{constructor(a){this.$=a,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(a){this.$=a}done(){this.B=!0}q(a){this.L=a}delete(){return eb(this.$.delete())}}class d8 extends null{constructor(a,b){super(dE.UNAVAILABLE,`IndexedDB transaction '${a}' failed: ${b}`),this.name="IndexedDbTransactionError"}}function d9(a){return"IndexedDbTransactionError"===a.name}class ea{constructor(a){this.store=a}put(a,b){let c;return void 0!==b?(dz("SimpleDb","PUT",this.store.name,a,b),c=this.store.put(b,a)):(dz("SimpleDb","PUT",this.store.name,"<auto-key>",a),c=this.store.put(a)),eb(c)}add(a){return dz("SimpleDb","ADD",this.store.name,a,a),eb(this.store.add(a))}get(a){return eb(this.store.get(a)).next(b=>(void 0===b&&(b=null),dz("SimpleDb","GET",this.store.name,a,b),b))}delete(a){return dz("SimpleDb","DELETE",this.store.name,a),eb(this.store.delete(a))}count(){return dz("SimpleDb","COUNT",this.store.name),eb(this.store.count())}K(b,c){let a=this.options(b,c);if(a.index||"function"!=typeof this.store.getAll){let d=this.cursor(a),e=[];return this.G(d,(b,a)=>{e.push(a)}).next(()=>e)}{let f=this.store.getAll(a.range);return new d4((a,b)=>{f.onerror=a=>{b(a.target.error)},f.onsuccess=b=>{a(b.target.result)}})}}j(b,a){let c=this.store.getAll(b,null===a?void 0:a);return new d4((a,b)=>{c.onerror=a=>{b(a.target.error)},c.onsuccess=b=>{a(b.target.result)}})}W(b,c){dz("SimpleDb","DELETE ALL",this.store.name);let a=this.options(b,c);a.H=!1;let d=this.cursor(a);return this.G(d,(b,c,a)=>a.delete())}J(c,a){let b;a?b=c:(b={},a=c);let d=this.cursor(b);return this.G(d,a)}Y(a){let b=this.cursor({});return new d4((c,d)=>{b.onerror=a=>{let b=ed(a.target.error);d(b)},b.onsuccess=d=>{let b=d.target.result;b?a(b.primaryKey,b.value).next(a=>{a?b.continue():c()}):c()}})}G(a,b){let c=[];return new d4((d,e)=>{a.onerror=a=>{e(a.target.error)},a.onsuccess=g=>{let a=g.target.result;if(!a)return void d();let e=new d7(a),f=b(a.primaryKey,a.value,e);if(f instanceof d4){let h=f.catch(a=>(e.done(),d4.reject(a)));c.push(h)}e.isDone?d():null===e.U?a.continue():a.continue(e.U)}}).next(()=>d4.waitFor(c))}options(a,b){let c;return void 0!==a&&("string"==typeof a?c=a:b=a),{index:c,range:b}}cursor(a){let b="next";if(a.reverse&&(b="prev"),a.index){let c=this.store.index(a.index);return a.H?c.openKeyCursor(a.range,b):c.openCursor(a.range,b)}return this.store.openCursor(a.range,b)}}function eb(a){return new d4((b,c)=>{a.onsuccess=a=>{let c=a.target.result;b(c)},a.onerror=a=>{let b=ed(a.target.error);c(b)}})}let ec=null;function ed(a){let b=d6.v(getUA());if(b>=12.2&&b<13){let c="An internal error was encountered in the Indexed Database server";if(a.message.indexOf(c)>=0){let d=new dF("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${c}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ec||(ec=!0,setTimeout(()=>{throw d},0)),d}}return a}class ee{constructor(a,b){this.asyncQueue=a,this.X=b,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(a){dz("IndexBackiller",`Scheduled in ${a}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",a,async()=>{this.task=null;try{dz("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(a){d9(a)?dz("IndexBackiller","Ignoring IndexedDB error during index backfill: ",a):await d3(a)}await this.Z(1)})}}class ef{constructor(a,b){this.localStore=a,this.persistence=b}async tt(a=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",b=>this.et(b,a))}et(b,a){let c=new Set,d=a,e=!0;return d4.doWhile(()=>!0===e&&d>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(b).next(a=>{if(null!==a&&!c.has(a))return dz("IndexBackiller",`Processing collection: ${a}`),this.nt(b,a,d).next(b=>{d-=b,c.add(a)});e=!1})).next(()=>a-d)}nt(a,b,c){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(a,b).next(d=>this.localStore.localDocuments.getNextDocuments(a,b,d,c).next(c=>{let e=c.changes;return this.localStore.indexManager.updateIndexEntries(a,e).next(()=>this.st(d,c)).next(c=>(dz("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(a,b,c))).next(()=>e.size)}))}st(a,b){let c=a;return b.changes.forEach((d,b)=>{let a=d_(b);d1(a,c)>0&&(c=a)}),new d0(c.readTime,c.documentKey,Math.max(b.batchId,a.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */ class aG{constructor(b,a){this.previousValue=b,a&&(a.sequenceNumberHandler=a=>this.it(a),this.rt=b=>a.writeSequenceNumber(b))}it(a){return this.previousValue=Math.max(a,this.previousValue),this.previousValue}next(){let a=++this.previousValue;return this.rt&&this.rt(a),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eg(a){let b=0;for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b++;return b}function eh(a,c){for(let b in a)Object.prototype.hasOwnProperty.call(a,b)&&c(b,a[b])}function ei(a){for(let b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
aG.ot=-1;class L{constructor(a,b){this.comparator=a,this.root=b||z.EMPTY}insert(a,b){return new L(this.comparator,this.root.insert(a,b,this.comparator).copy(null,null,z.BLACK,null,null))}remove(a){return new L(this.comparator,this.root.remove(a,this.comparator).copy(null,null,z.BLACK,null,null))}get(c){let a=this.root;for(;!a.isEmpty();){let b=this.comparator(c,a.key);if(0===b)return a.value;b<0?a=a.left:b>0&&(a=a.right)}return null}indexOf(d){let b=0,a=this.root;for(;!a.isEmpty();){let c=this.comparator(d,a.key);if(0===c)return b+a.left.size;c<0?a=a.left:(b+=a.left.size+1,a=a.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(a){return this.root.inorderTraversal(a)}forEach(a){this.inorderTraversal((b,c)=>(a(b,c),!1))}toString(){let a=[];return this.inorderTraversal((b,c)=>(a.push(`${b}:${c}`),!1)),`{${a.join(", ")}}`}reverseTraversal(a){return this.root.reverseTraversal(a)}getIterator(){return new ej(this.root,null,this.comparator,!1)}getIteratorFrom(a){return new ej(this.root,a,this.comparator,!1)}getReverseIterator(){return new ej(this.root,null,this.comparator,!0)}getReverseIteratorFrom(a){return new ej(this.root,a,this.comparator,!0)}}class ej{constructor(a,c,e,d){this.isReverse=d,this.nodeStack=[];let b=1;for(;!a.isEmpty();)if(b=c?e(a.key,c):1,c&&d&&(b*=-1),b<0)a=this.isReverse?a.left:a.right;else{if(0===b){this.nodeStack.push(a);break}this.nodeStack.push(a),a=this.isReverse?a.right:a.left}}getNext(){let a=this.nodeStack.pop(),b={key:a.key,value:a.value};if(this.isReverse)for(a=a.left;!a.isEmpty();)this.nodeStack.push(a),a=a.right;else for(a=a.right;!a.isEmpty();)this.nodeStack.push(a),a=a.left;return b}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let a=this.nodeStack[this.nodeStack.length-1];return{key:a.key,value:a.value}}}class z{constructor(d,e,a,b,c){this.key=d,this.value=e,this.color=null!=a?a:z.RED,this.left=null!=b?b:z.EMPTY,this.right=null!=c?c:z.EMPTY,this.size=this.left.size+1+this.right.size}copy(a,b,c,d,e){return new z(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)}isEmpty(){return!1}inorderTraversal(a){return this.left.inorderTraversal(a)||a(this.key,this.value)||this.right.inorderTraversal(a)}reverseTraversal(a){return this.right.reverseTraversal(a)||a(this.key,this.value)||this.left.reverseTraversal(a)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(b,c,d){let a=this,e=d(b,a.key);return(a=e<0?a.copy(null,null,null,a.left.insert(b,c,d),null):0===e?a.copy(null,c,null,null,null):a.copy(null,null,null,null,a.right.insert(b,c,d))).fixUp()}removeMin(){if(this.left.isEmpty())return z.EMPTY;let a=this;return a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),(a=a.copy(null,null,null,a.left.removeMin(),null)).fixUp()}remove(b,c){let d,a=this;if(0>c(b,a.key))a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(b,c),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),0===c(b,a.key)){if(a.right.isEmpty())return z.EMPTY;d=a.right.min(),a=a.copy(d.key,d.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(b,c))}return a.fixUp()}isRed(){return this.color}fixUp(){let a=this;return a.right.isRed()&&!a.left.isRed()&&(a=a.rotateLeft()),a.left.isRed()&&a.left.left.isRed()&&(a=a.rotateRight()),a.left.isRed()&&a.right.isRed()&&(a=a.colorFlip()),a}moveRedLeft(){let a=this.colorFlip();return a.right.left.isRed()&&(a=(a=(a=a.copy(null,null,null,null,a.right.rotateRight())).rotateLeft()).colorFlip()),a}moveRedRight(){let a=this.colorFlip();return a.left.left.isRed()&&(a=(a=a.rotateRight()).colorFlip()),a}rotateLeft(){let a=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,a,null)}rotateRight(){let a=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,a)}colorFlip(){let a=this.left.copy(null,null,!this.left.color,null,null),b=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,a,b)}checkMaxDepth(){let a=this.check();return Math.pow(2,a)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw dD();let a=this.left.check();if(a!==this.right.check())throw dD();return a+(this.isRed()?0:1)}}z.EMPTY=null,z.RED=!0,z.BLACK=!1,z.EMPTY=new class{constructor(){this.size=0}get key(){throw dD()}get value(){throw dD()}get color(){throw dD()}get left(){throw dD()}get right(){throw dD()}copy(a,b,c,d,e){return this}insert(a,b,c){return new z(a,b)}remove(a,b){return this}isEmpty(){return!0}inorderTraversal(a){return!1}reverseTraversal(a){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */ class _{constructor(a){this.comparator=a,this.data=new L(this.comparator)}has(a){return null!==this.data.get(a)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(a){return this.data.indexOf(a)}forEach(a){this.data.inorderTraversal((b,c)=>(a(b),!1))}forEachInRange(a,d){let b=this.data.getIteratorFrom(a[0]);for(;b.hasNext();){let c=b.getNext();if(this.comparator(c.key,a[1])>=0)return;d(c.key)}}forEachWhile(c,b){let a;for(a=void 0!==b?this.data.getIteratorFrom(b):this.data.getIterator();a.hasNext();)if(!c(a.getNext().key))return}firstAfterOrEqual(b){let a=this.data.getIteratorFrom(b);return a.hasNext()?a.getNext().key:null}getIterator(){return new ek(this.data.getIterator())}getIteratorFrom(a){return new ek(this.data.getIteratorFrom(a))}add(a){return this.copy(this.data.remove(a).insert(a,!0))}delete(a){return this.has(a)?this.copy(this.data.remove(a)):this}isEmpty(){return this.data.isEmpty()}unionWith(a){let b=this;return b.size<a.size&&(b=a,a=this),a.forEach(a=>{b=b.add(a)}),b}isEqual(a){if(!(a instanceof _)||this.size!==a.size)return!1;let b=this.data.getIterator(),c=a.data.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(0!==this.comparator(d,e))return!1}return!0}toArray(){let a=[];return this.forEach(b=>{a.push(b)}),a}toString(){let a=[];return this.forEach(b=>a.push(b)),"SortedSet("+a.toString()+")"}copy(b){let a=new _(this.comparator);return a.data=b,a}}class ek{constructor(a){this.iter=a}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function el(a){return a.hasNext()?a.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ class em{constructor(a){this.fields=a,a.sort(dV.comparator)}static empty(){return new em([])}unionWith(b){let a=new _(dV.comparator);for(let c of this.fields)a=a.add(c);for(let d of b)a=a.add(d);return new em(a.toArray())}covers(a){for(let b of this.fields)if(b.isPrefixOf(a))return!0;return!1}isEqual(a){return dQ(this.fields,a.fields,(a,b)=>a.isEqual(b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */ class aa{constructor(a){this.binaryString=a}static fromBase64String(a){let b=atob(a);return new aa(b)}static fromUint8Array(a){let b=function(b){let c="";for(let a=0;a<b.length;++a)c+=String.fromCharCode(b[a]);return c}(a);return new aa(b)}[Symbol.iterator](){let a=0;return{next:()=>a<this.binaryString.length?{value:this.binaryString.charCodeAt(a++),done:!1}:{value:void 0,done:!0}}}toBase64(){var a;return btoa(this.binaryString)}toUint8Array(){return function(b){let c=new Uint8Array(b.length);for(let a=0;a<b.length;a++)c[a]=b.charCodeAt(a);return c}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(a){return aD(this.binaryString,a.binaryString)}isEqual(a){return this.binaryString===a.binaryString}}aa.EMPTY_BYTE_STRING=new aa("");let en=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eo(a){var f,g;if(!a&&dD(),"string"==typeof a){let c=0,b=en.exec(a);if(!b&&dD(),b[1]){let d=b[1];c=Number(d=(d+"000000000").substr(0,9))}let e=new Date(a);return{seconds:Math.floor(e.getTime()/1e3),nanos:c}}return{seconds:ep(a.seconds),nanos:ep(a.nanos)}}function ep(a){return"number"==typeof a?a:"string"==typeof a?Number(a):0}function eq(a){return"string"==typeof a?aa.fromBase64String(a):aa.fromUint8Array(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function er(c){var a,b;return"server_timestamp"===(null===(b=((null===(a=null==c?void 0:c.mapValue)|| void 0===a?void 0:a.fields)||{}).__type__)|| void 0===b?void 0:b.stringValue)}function es(b){let a=b.mapValue.fields.__previous_value__;return er(a)?es(a):a}function et(b){let a=eo(b.mapValue.fields.__local_write_time__.timestampValue);return new dR(a.seconds,a.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eu{constructor(a,b,c,d,e,f,g,h){this.databaseId=a,this.appId=b,this.persistenceKey=c,this.host=d,this.ssl=e,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.useFetchStreams=h}}class ev{constructor(a,b){this.projectId=a,this.database=b||"(default)"}static empty(){return new ev("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(a){return a instanceof ev&&a.projectId===this.projectId&&a.database===this.database}}function ew(a){return 0===a&&1/a== -1/0}function ex(a){return"number"==typeof a&&Number.isInteger(a)&&!ew(a)&&a<=Number.MAX_SAFE_INTEGER&&a>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ey={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ez={nullValue:"NULL_VALUE"};function eA(a){return"nullValue"in a?0:"booleanValue"in a?1:"integerValue"in a||"doubleValue"in a?2:"timestampValue"in a?3:"stringValue"in a?5:"bytesValue"in a?6:"referenceValue"in a?7:"geoPointValue"in a?8:"arrayValue"in a?9:"mapValue"in a?er(a)?4:eO(a)?9007199254740991:10:dD()}function eB(a,b){var e,f,c,d;if(a===b)return!0;let g=eA(a);if(g!==eA(b))return!1;switch(g){case 0:case 9007199254740991:return!0;case 1:return a.booleanValue===b.booleanValue;case 4:return et(a).isEqual(et(b));case 3:return function(a,b){if("string"==typeof a.timestampValue&&"string"==typeof b.timestampValue&&a.timestampValue.length===b.timestampValue.length)return a.timestampValue===b.timestampValue;let c=eo(a.timestampValue),d=eo(b.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(a,b);case 5:return a.stringValue===b.stringValue;case 6:return e=a,f=b,eq(e.bytesValue).isEqual(eq(f.bytesValue));case 7:return a.referenceValue===b.referenceValue;case 8:return c=a,d=b,ep(c.geoPointValue.latitude)===ep(d.geoPointValue.latitude)&&ep(c.geoPointValue.longitude)===ep(d.geoPointValue.longitude);case 2:return function(a,b){if("integerValue"in a&&"integerValue"in b)return ep(a.integerValue)===ep(b.integerValue);if("doubleValue"in a&&"doubleValue"in b){let c=ep(a.doubleValue),d=ep(b.doubleValue);return c===d?ew(c)===ew(d):isNaN(c)&&isNaN(d)}return!1}(a,b);case 9:return dQ(a.arrayValue.values||[],b.arrayValue.values||[],eB);case 10:return function(d,e){let a=d.mapValue.fields||{},c=e.mapValue.fields||{};if(eg(a)!==eg(c))return!1;for(let b in a)if(a.hasOwnProperty(b)&&(void 0===c[b]||!eB(a[b],c[b])))return!1;return!0}(a,b);default:return dD()}}function eC(a,b){return void 0!==(a.values||[]).find(a=>eB(a,b))}function eD(a,b){if(a===b)return 0;let c=eA(a),d=eA(b);if(c!==d)return aD(c,d);switch(c){case 0:case 9007199254740991:return 0;case 1:return aD(a.booleanValue,b.booleanValue);case 2:return function(c,d){let a=ep(c.integerValue||c.doubleValue),b=ep(d.integerValue||d.doubleValue);return a<b?-1:a>b?1:a===b?0:isNaN(a)?isNaN(b)?0:-1:1}(a,b);case 3:return eE(a.timestampValue,b.timestampValue);case 4:return eE(et(a),et(b));case 5:return aD(a.stringValue,b.stringValue);case 6:return function(a,b){let c=eq(a),d=eq(b);return c.compareTo(d)}(a.bytesValue,b.bytesValue);case 7:return function(e,f){let b=e.split("/"),c=f.split("/");for(let a=0;a<b.length&&a<c.length;a++){let d=aD(b[a],c[a]);if(0!==d)return d}return aD(b.length,c.length)}(a.referenceValue,b.referenceValue);case 8:return function(a,b){let c=aD(ep(a.latitude),ep(b.latitude));return 0!==c?c:aD(ep(a.longitude),ep(b.longitude))}(a.geoPointValue,b.geoPointValue);case 9:return function(e,f){let b=e.values||[],c=f.values||[];for(let a=0;a<b.length&&a<c.length;++a){let d=eD(b[a],c[a]);if(d)return d}return aD(b.length,c.length)}(a.arrayValue,b.arrayValue);case 10:return function(d,e){if(d===ey.mapValue&&e===ey.mapValue)return 0;if(d===ey.mapValue)return 1;if(e===ey.mapValue)return -1;let f=d.fields||{},b=Object.keys(f),g=e.fields||{},c=Object.keys(g);b.sort(),c.sort();for(let a=0;a<b.length&&a<c.length;++a){let h=aD(b[a],c[a]);if(0!==h)return h;let i=eD(f[b[a]],g[c[a]]);if(0!==i)return i}return aD(b.length,c.length)}(a.mapValue,b.mapValue);default:throw dD()}}function eE(a,b){if("string"==typeof a&&"string"==typeof b&&a.length===b.length)return aD(a,b);let c=eo(a),d=eo(b),e=aD(c.seconds,d.seconds);return 0!==e?e:aD(c.nanos,d.nanos)}function eF(a){return eG(a)}function eG(a){var b,c;return"nullValue"in a?"null":"booleanValue"in a?""+a.booleanValue:"integerValue"in a?""+a.integerValue:"doubleValue"in a?""+a.doubleValue:"timestampValue"in a?function(b){let a=eo(b);return`time(${a.seconds},${a.nanos})`}(a.timestampValue):"stringValue"in a?a.stringValue:"bytesValue"in a?eq(a.bytesValue).toBase64():"referenceValue"in a?(c=a.referenceValue,y.fromName(c).toString()):"geoPointValue"in a?`geo(${(b=a.geoPointValue).latitude},${b.longitude})`:"arrayValue"in a?function(c){let a="[",b=!0;for(let d of c.values||[])b?b=!1:a+=",",a+=eG(d);return a+"]"}(a.arrayValue):"mapValue"in a?function(b){let e=Object.keys(b.fields||{}).sort(),a="{",c=!0;for(let d of e)c?c=!1:a+=",",a+=`${d}:${eG(b.fields[d])}`;return a+"}"}(a.mapValue):dD()}function eH(a,b){return{referenceValue:`projects/${a.projectId}/databases/${a.database}/documents/${b.path.canonicalString()}`}}function eI(a){return!!a&&"integerValue"in a}function eJ(a){return!!a&&"arrayValue"in a}function eK(a){return!!a&&"nullValue"in a}function eL(a){return!!a&&"doubleValue"in a&&isNaN(Number(a.doubleValue))}function eM(a){return!!a&&"mapValue"in a}function eN(a){if(a.geoPointValue)return{geoPointValue:Object.assign({},a.geoPointValue)};if(a.timestampValue&&"object"==typeof a.timestampValue)return{timestampValue:Object.assign({},a.timestampValue)};if(a.mapValue){let d={mapValue:{fields:{}}};return eh(a.mapValue.fields,(a,b)=>d.mapValue.fields[a]=eN(b)),d}if(a.arrayValue){let c={arrayValue:{values:[]}};for(let b=0;b<(a.arrayValue.values||[]).length;++b)c.arrayValue.values[b]=eN(a.arrayValue.values[b]);return c}return Object.assign({},a)}function eO(a){return"__max__"===(((a.mapValue||{}).fields||{}).__type__||{}).stringValue}function eP(a){return"nullValue"in a?ez:"booleanValue"in a?{booleanValue:!1}:"integerValue"in a||"doubleValue"in a?{doubleValue:NaN}:"timestampValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in a?{stringValue:""}:"bytesValue"in a?{bytesValue:""}:"referenceValue"in a?eH(ev.empty(),y.empty()):"geoPointValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in a?{arrayValue:{}}:"mapValue"in a?{mapValue:{}}:dD()}function eQ(a){return"nullValue"in a?{booleanValue:!1}:"booleanValue"in a?{doubleValue:NaN}:"integerValue"in a||"doubleValue"in a?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in a?{stringValue:""}:"stringValue"in a?{bytesValue:""}:"bytesValue"in a?eH(ev.empty(),y.empty()):"referenceValue"in a?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in a?{arrayValue:{}}:"arrayValue"in a?{mapValue:{}}:"mapValue"in a?ey:dD()}function eR(a,b){let c=eD(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?-1:!a.inclusive&&b.inclusive?1:0}function eS(a,b){let c=eD(a.value,b.value);return 0!==c?c:a.inclusive&&!b.inclusive?1:!a.inclusive&&b.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ class eT{constructor(a){this.value=a}static empty(){return new eT({mapValue:{}})}field(a){if(a.isEmpty())return this.value;{let b=this.value;for(let c=0;c<a.length-1;++c)if(!eM(b=(b.mapValue.fields||{})[a.get(c)]))return null;return(b=(b.mapValue.fields||{})[a.lastSegment()])||null}}set(a,b){this.getFieldsMap(a.popLast())[a.lastSegment()]=eN(b)}setAll(a){let b=dV.emptyPath(),c={},d=[];a.forEach((e,a)=>{if(!b.isImmediateParentOf(a)){let f=this.getFieldsMap(b);this.applyChanges(f,c,d),c={},d=[],b=a.popLast()}e?c[a.lastSegment()]=eN(e):d.push(a.lastSegment())});let e=this.getFieldsMap(b);this.applyChanges(e,c,d)}delete(b){let a=this.field(b.popLast());eM(a)&&a.mapValue.fields&&delete a.mapValue.fields[b.lastSegment()]}isEqual(a){return eB(this.value,a.value)}getFieldsMap(d){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let c=0;c<d.length;++c){let b=a.mapValue.fields[d.get(c)];eM(b)&&b.mapValue.fields||(b={mapValue:{fields:{}}},a.mapValue.fields[d.get(c)]=b),a=b}return a.mapValue.fields}applyChanges(a,b,c){for(let d of(eh(b,(b,c)=>a[b]=c),c))delete a[d]}clone(){return new eT(eN(this.value))}}function eU(a){let b=[];return eh(a.fields,(e,c)=>{let a=new dV([e]);if(eM(c)){let d=eU(c.mapValue).fields;if(0===d.length)b.push(a);else for(let f of d)b.push(a.child(f))}else b.push(a)}),new em(b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */ class eV{constructor(a,b,c,d,e,f){this.key=a,this.documentType=b,this.version=c,this.readTime=d,this.data=e,this.documentState=f}static newInvalidDocument(a){return new eV(a,0,dS.min(),dS.min(),eT.empty(),0)}static newFoundDocument(a,b,c){return new eV(a,1,b,dS.min(),c,0)}static newNoDocument(a,b){return new eV(a,2,b,dS.min(),eT.empty(),0)}static newUnknownDocument(a,b){return new eV(a,3,b,dS.min(),eT.empty(),2)}convertToFoundDocument(a,b){return this.version=a,this.documentType=1,this.data=b,this.documentState=0,this}convertToNoDocument(a){return this.version=a,this.documentType=2,this.data=eT.empty(),this.documentState=0,this}convertToUnknownDocument(a){return this.version=a,this.documentType=3,this.data=eT.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=dS.min(),this}setReadTime(a){return this.readTime=a,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(a){return a instanceof eV&&this.key.isEqual(a.key)&&this.version.isEqual(a.version)&&this.documentType===a.documentType&&this.documentState===a.documentState&&this.data.isEqual(a.data)}mutableCopy(){return new eV(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 */ /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Visible for testing
class eW{constructor(a,b=null,c=[],d=[],e=null,f=null,g=null){this.path=a,this.collectionGroup=b,this.orderBy=c,this.filters=d,this.limit=e,this.startAt=f,this.endAt=g,this.ut=null}}function eX(a,b=null,c=[],d=[],e=null,f=null,g=null){return new eW(a,b,c,d,e,f,g)}function eY(d){var e,c;let a=e=d;if(null===a.ut){let b=a.path.canonicalString();null!==a.collectionGroup&&(b+="|cg:"+a.collectionGroup),b+="|f:",b+=a.filters.map(b=>{var a;return(a=b).field.canonicalString()+a.op.toString()+eF(a.value)}).join(","),b+="|ob:",b+=a.orderBy.map(b=>{var a;return(a=b).field.canonicalString()+a.dir}).join(","),c=a.limit,null==c||(b+="|l:",b+=a.limit),a.startAt&&(b+="|lb:",b+=a.startAt.inclusive?"b:":"a:",b+=a.startAt.position.map(a=>eF(a)).join(",")),a.endAt&&(b+="|ub:",b+=a.endAt.inclusive?"a:":"b:",b+=a.endAt.position.map(a=>eF(a)).join(",")),a.ut=b}return a.ut}function eZ(a,b){var c,d;if(a.limit!==b.limit||a.orderBy.length!==b.orderBy.length)return!1;for(let e=0;e<a.orderBy.length;e++)if(!fc(a.orderBy[e],b.orderBy[e]))return!1;if(a.filters.length!==b.filters.length)return!1;for(let f=0;f<a.filters.length;f++)if(c=a.filters[f],d=b.filters[f],c.op!==d.op||!c.field.isEqual(d.field)||!eB(c.value,d.value))return!1;return a.collectionGroup===b.collectionGroup&&!!a.path.isEqual(b.path)&&!!fe(a.startAt,b.startAt)&&fe(a.endAt,b.endAt)}function e$(a){return y.isDocumentKey(a.path)&&null===a.collectionGroup&&0===a.filters.length}function e_(a,b){return a.filters.filter(a=>a instanceof n&&a.field.isEqual(b))}function e0(g,i,d){let b=ez,c=!0;for(let e of e_(g,i)){let a=ez,h=!0;switch(e.op){case"<":case"<=":a=eP(e.value);break;case"==":case"in":case">=":a=e.value;break;case">":a=e.value,h=!1;break;case"!=":case"not-in":a=ez}0>eR({value:b,inclusive:c},{value:a,inclusive:h})&&(b=a,c=h)}if(null!==d){for(let f=0;f<g.orderBy.length;++f)if(g.orderBy[f].field.isEqual(i)){let j=d.position[f];0>eR({value:b,inclusive:c},{value:j,inclusive:d.inclusive})&&(b=j,c=d.inclusive);break}}return{value:b,inclusive:c}}function e1(h,i,d){let b=ey,c=!0;for(let e of e_(h,i)){let a=ey,f=!0;switch(e.op){case">=":case">":a=eQ(e.value),f=!1;break;case"==":case"in":case"<=":a=e.value;break;case"<":a=e.value,f=!1;break;case"!=":case"not-in":a=ey}eS({value:b,inclusive:c},{value:a,inclusive:f})>0&&(b=a,c=f)}if(null!==d){for(let g=0;g<h.orderBy.length;++g)if(h.orderBy[g].field.isEqual(i)){let j=d.position[g];eS({value:b,inclusive:c},{value:j,inclusive:d.inclusive})>0&&(b=j,c=d.inclusive);break}}return{value:b,inclusive:c}}class n extends class{}{constructor(a,b,c){super(),this.field=a,this.op=b,this.value=c}static create(b,a,c){return b.isKeyField()?"in"===a||"not-in"===a?this.ct(b,a,c):new e2(b,a,c):"array-contains"===a?new e6(b,c):"in"===a?new e7(b,c):"not-in"===a?new e8(b,c):"array-contains-any"===a?new e9(b,c):new n(b,a,c)}static ct(a,c,b){return"in"===c?new e3(a,b):new e4(a,b)}matches(b){let a=b.data.field(this.field);return"!="===this.op?null!==a&&this.at(eD(a,this.value)):null!==a&&eA(this.value)===eA(a)&&this.at(eD(a,this.value))}at(a){switch(this.op){case"<":return a<0;case"<=":return a<=0;case"==":return 0===a;case"!=":return 0!==a;case">":return a>0;case">=":return a>=0;default:return dD()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class e2 extends n{constructor(b,c,a){super(b,c,a),this.key=y.fromName(a.referenceValue)}matches(a){let b=y.comparator(a.key,this.key);return this.at(b)}}class e3 extends n{constructor(b,a){super(b,"in",a),this.keys=e5("in",a)}matches(a){return this.keys.some(b=>b.isEqual(a.key))}}class e4 extends n{constructor(b,a){super(b,"not-in",a),this.keys=e5("not-in",a)}matches(a){return!this.keys.some(b=>b.isEqual(a.key))}}function e5(c,b){var a;return((null===(a=b.arrayValue)|| void 0===a?void 0:a.values)||[]).map(a=>y.fromName(a.referenceValue))}class e6 extends n{constructor(a,b){super(a,"array-contains",b)}matches(b){let a=b.data.field(this.field);return eJ(a)&&eC(a.arrayValue,this.value)}}class e7 extends n{constructor(a,b){super(a,"in",b)}matches(b){let a=b.data.field(this.field);return null!==a&&eC(this.value.arrayValue,a)}}class e8 extends n{constructor(a,b){super(a,"not-in",b)}matches(b){if(eC(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let a=b.data.field(this.field);return null!==a&&!eC(this.value.arrayValue,a)}}class e9 extends n{constructor(a,b){super(a,"array-contains-any",b)}matches(b){let a=b.data.field(this.field);return!(!eJ(a)||!a.arrayValue.values)&&a.arrayValue.values.some(a=>eC(this.value.arrayValue,a))}}class fa{constructor(a,b){this.position=a,this.inclusive=b}}class fb{constructor(a,b="asc"){this.field=a,this.dir=b}}function fc(a,b){return a.dir===b.dir&&a.field.isEqual(b.field)}function fd(d,g,e){let a=0;for(let b=0;b<d.position.length;b++){let c=g[b],f=d.position[b];if(a=c.field.isKeyField()?y.comparator(y.fromName(f.referenceValue),e.key):eD(f,e.data.field(c.field)),"desc"===c.dir&&(a*=-1),0!==a)break}return a}function fe(a,b){if(null===a)return null===b;if(null===b||a.inclusive!==b.inclusive||a.position.length!==b.position.length)return!1;for(let c=0;c<a.position.length;c++)if(!eB(a.position[c],b.position[c]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ class ff{constructor(a,b=null,c=[],d=[],e=null,f="F",g=null,h=null){this.path=a,this.collectionGroup=b,this.explicitOrderBy=c,this.filters=d,this.limit=e,this.limitType=f,this.startAt=g,this.endAt=h,this.lt=null,this.ft=null,this.startAt,this.endAt}}function fg(a,b,c,d,e,f,g,h){return new ff(a,b,c,d,e,f,g,h)}function fh(a){return new ff(a)}function fi(a){return a.explicitOrderBy.length>0?a.explicitOrderBy[0].field:null}function fj(b){for(let a of b.filters)if(a.ht())return a.field;return null}function fk(a){return null!==a.collectionGroup}function fl(e){var f;let a=f=e;if(null===a.lt){a.lt=[];let b=fj(a),g=fi(a);if(null!==b&&null===g)b.isKeyField()||a.lt.push(new fb(b)),a.lt.push(new fb(dV.keyField(),"asc"));else{let c=!1;for(let d of a.explicitOrderBy)a.lt.push(d),d.field.isKeyField()&&(c=!0);if(!c){let h=a.explicitOrderBy.length>0?a.explicitOrderBy[a.explicitOrderBy.length-1].dir:"asc";a.lt.push(new fb(dV.keyField(),h))}}}return a.lt}function fm(d){var e;let a=e=d;if(!a.ft){if("F"===a.limitType)a.ft=eX(a.path,a.collectionGroup,fl(a),a.filters,a.limit,a.startAt,a.endAt);else{let b=[];for(let c of fl(a)){let f="desc"===c.dir?"asc":"desc";b.push(new fb(c.field,f))}let g=a.endAt?new fa(a.endAt.position,a.endAt.inclusive):null,h=a.startAt?new fa(a.startAt.position,a.startAt.inclusive):null;a.ft=eX(a.path,a.collectionGroup,b,a.filters,a.limit,g,h)}}return a.ft}function fn(a,b,c){return new ff(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),b,c,a.startAt,a.endAt)}function fo(a,b){return eZ(fm(a),fm(b))&&a.limitType===b.limitType}function fp(a){return`${eY(fm(a))}|lt:${a.limitType}`}function fq(c){var a,d;let b;return`Query(target=${b=(a=fm(c)).path.canonicalString(),null!==a.collectionGroup&&(b+=" collectionGroup="+a.collectionGroup),a.filters.length>0&&(b+=`, filters: [${a.filters.map(b=>{var a;return`${(a=b).field.canonicalString()} ${a.op} ${eF(a.value)}`}).join(", ")}]`),d=a.limit,null==d||(b+=", limit: "+a.limit),a.orderBy.length>0&&(b+=`, orderBy: [${a.orderBy.map(b=>{var a;return a=b,`${a.field.canonicalString()} (${a.dir})`}).join(", ")}]`),a.startAt&&(b+=", startAt: ",b+=a.startAt.inclusive?"b:":"a:",b+=a.startAt.position.map(a=>eF(a)).join(",")),a.endAt&&(b+=", endAt: ",b+=a.endAt.inclusive?"a:":"b:",b+=a.endAt.position.map(a=>eF(a)).join(",")),`Target(${b})`}; limitType=${c.limitType})`}function fr(c,b){var a,d;return b.isFoundDocument()&&function(a,c){let b=c.key.path;return null!==a.collectionGroup?c.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(b):y.isDocumentKey(a.path)?a.path.isEqual(b):a.path.isImmediateParentOf(b)}(c,b)&&function(b,c){for(let a of b.explicitOrderBy)if(!a.field.isKeyField()&&null===c.data.field(a.field))return!1;return!0}(c,b)&&function(a,b){for(let c of a.filters)if(!c.matches(b))return!1;return!0}(c,b)&&(a=c,d=b,(!a.startAt||!!function(a,c,d){let b=fd(a,c,d);return a.inclusive?b<=0:b<0}(a.startAt,fl(a),d))&&(!a.endAt||!!function(a,c,d){let b=fd(a,c,d);return a.inclusive?b>=0:b>0}(a.endAt,fl(a),d)))}function fs(a){return a.collectionGroup||(a.path.length%2==1?a.path.lastSegment():a.path.get(a.path.length-2))}function ft(a){return(e,f)=>{let b=!1;for(let c of fl(a)){let d=fu(c,e,f);if(0!==d)return d;b=b||c.field.isKeyField()}return 0}}function fu(a,b,c){let d=a.field.isKeyField()?y.comparator(b.key,c.key):function(a,d,e){let b=d.data.field(a),c=e.data.field(a);return null!==b&&null!==c?eD(b,c):dD()}(a.field,b,c);switch(a.dir){case"asc":return d;case"desc":return -1*d;default:return dD()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function fv(b,a){if(b.dt){if(isNaN(a))return{doubleValue:"NaN"};if(a===1/0)return{doubleValue:"Infinity"};if(a=== -1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ew(a)?"-0":a}}function fw(a){return{integerValue:""+a}}function fx(b,a){return ex(a)?fw(a):fv(b,a)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Used to represent a field transform on a mutation. */ class A{constructor(){this._=void 0}}function fy(a,b,c){return a instanceof fB?function(a,b){let c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return b&&(c.fields.__previous_value__=b),{mapValue:c}}(c,b):a instanceof fC?fD(a,b):a instanceof fE?fF(a,b):function(a,d){let b=fA(a,d),c=fH(b)+fH(a._t);return eI(b)&&eI(a._t)?fw(c):fv(a.wt,c)}(a,b)}function fz(a,b,c){return a instanceof fC?fD(a,b):a instanceof fE?fF(a,b):c}function fA(d,a){var b,c;return d instanceof fG?eI(b=a)||(c=b)&&"doubleValue"in c?a:{integerValue:0}:null}class fB extends A{}class fC extends A{constructor(a){super(),this.elements=a}}function fD(b,c){let a=fI(c);for(let d of b.elements)a.some(a=>eB(a,d))||a.push(d);return{arrayValue:{values:a}}}class fE extends A{constructor(a){super(),this.elements=a}}function fF(b,c){let a=fI(c);for(let d of b.elements)a=a.filter(a=>!eB(a,d));return{arrayValue:{values:a}}}class fG extends A{constructor(a,b){super(),this.wt=a,this._t=b}}function fH(a){return ep(a.integerValue||a.doubleValue)}function fI(a){return eJ(a)&&a.arrayValue.values?a.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A field path and the TransformOperation to perform upon it. */ class fJ{constructor(a,b){this.field=a,this.transform=b}}class fK{constructor(a,b){this.version=a,this.transformResults=b}}class fL{constructor(a,b){this.updateTime=a,this.exists=b}static none(){return new fL}static exists(a){return new fL(void 0,a)}static updateTime(a){return new fL(a)}get isNone(){return void 0===this.updateTime&& void 0===this.exists}isEqual(a){return this.exists===a.exists&&(this.updateTime?!!a.updateTime&&this.updateTime.isEqual(a.updateTime):!a.updateTime)}}function fM(a,b){return void 0!==a.updateTime?b.isFoundDocument()&&b.version.isEqual(a.updateTime):void 0===a.exists||a.exists===b.isFoundDocument()}class B{}function fN(b,c){if(!b.hasLocalMutations||c&&0===c.fields.length)return null;if(null===c)return b.isNoDocument()?new fX(b.key,fL.none()):new fS(b.key,b.data,fL.none());{let g=b.data,f=eT.empty(),d=new _(dV.comparator);for(let a of c.fields)if(!d.has(a)){let e=g.field(a);null===e&&a.length>1&&(a=a.popLast(),e=g.field(a)),null===e?f.delete(a):f.set(a,e),d=d.add(a)}return new fT(b.key,f,new em(d.toArray()),fL.none())}}function fO(a,b,c){a instanceof fS?function(a,b,c){let d=a.value.clone(),e=fV(a.fieldTransforms,b,c.transformResults);d.setAll(e),b.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):a instanceof fT?function(b,a,c){if(!fM(b.precondition,a))return void a.convertToUnknownDocument(c.version);let e=fV(b.fieldTransforms,a,c.transformResults),d=a.data;d.setAll(fU(b)),d.setAll(e),a.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(a,b,c):function(c,a,b){a.convertToNoDocument(b.version).setHasCommittedMutations()}(0,b,c)}function fP(a,c,d,e){var f,b,g;return a instanceof fS?function(b,a,d,e){if(!fM(b.precondition,a))return d;let c=b.value.clone(),f=fW(b.fieldTransforms,e,a);return c.setAll(f),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(a,c,d,e):a instanceof fT?function(a,b,c,e){if(!fM(a.precondition,b))return c;let f=fW(a.fieldTransforms,e,b),d=b.data;return(d.setAll(fU(a)),d.setAll(f),b.convertToFoundDocument(b.version,d).setHasLocalMutations(),null===c)?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(a=>a.field))}(a,c,d,e):(f=a,b=c,g=d,fM(f.precondition,b)?(b.convertToNoDocument(b.version).setHasLocalMutations(),null):g)}function fQ(d,e){let a=null;for(let b of d.fieldTransforms){let f=e.data.field(b.field),c=fA(b.transform,f||null);null!=c&&(null===a&&(a=eT.empty()),a.set(b.field,c))}return a||null}function fR(a,b){var c,d;return a.type===b.type&& !!a.key.isEqual(b.key)&&!!a.precondition.isEqual(b.precondition)&&(c=a.fieldTransforms,d=b.fieldTransforms,!!(void 0===c&& void 0===d|| !(!c||!d)&&dQ(c,d,(e,f)=>{var c,d,a,b;return c=e,d=f,c.field.isEqual(d.field)&&(a=c.transform,b=d.transform,a instanceof fC&&b instanceof fC||a instanceof fE&&b instanceof fE?dQ(a.elements,b.elements,eB):a instanceof fG&&b instanceof fG?eB(a._t,b._t):a instanceof fB&&b instanceof fB)})))&&(0===a.type?a.value.isEqual(b.value):1!==a.type||a.data.isEqual(b.data)&&a.fieldMask.isEqual(b.fieldMask))}class fS extends B{constructor(a,b,c,d=[]){super(),this.key=a,this.value=b,this.precondition=c,this.fieldTransforms=d,this.type=0}getFieldMask(){return null}}class fT extends B{constructor(a,b,c,d,e=[]){super(),this.key=a,this.data=b,this.fieldMask=c,this.precondition=d,this.fieldTransforms=e,this.type=1}getFieldMask(){return this.fieldMask}}function fU(a){let b=new Map;return a.fieldMask.fields.forEach(c=>{if(!c.isEmpty()){let d=a.data.field(c);b.set(c,d)}}),b}function fV(d,f,b){var g;let e=new Map;(g=d.length===b.length)||dD();for(let a=0;a<b.length;a++){let c=d[a],h=c.transform,i=f.data.field(c.field);e.set(c.field,fz(h,i,b[a]))}return e}function fW(c,d,e){let b=new Map;for(let a of c){let f=a.transform,g=e.data.field(a.field);b.set(a.field,fy(f,g,d))}return b}class fX extends B{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fY extends B{constructor(a,b){super(),this.key=a,this.precondition=b,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fZ{constructor(a){this.count=a}}function f$(a){switch(a){default:return dD();case dE.CANCELLED:case dE.UNKNOWN:case dE.DEADLINE_EXCEEDED:case dE.RESOURCE_EXHAUSTED:case dE.INTERNAL:case dE.UNAVAILABLE:case dE.UNAUTHENTICATED:return!1;case dE.INVALID_ARGUMENT:case dE.NOT_FOUND:case dE.ALREADY_EXISTS:case dE.PERMISSION_DENIED:case dE.FAILED_PRECONDITION:case dE.ABORTED:case dE.OUT_OF_RANGE:case dE.UNIMPLEMENTED:case dE.DATA_LOSS:return!0}}function f_(a){if(void 0===a)return dA("GRPC error has no .code"),dE.UNKNOWN;switch(a){case M.OK:return dE.OK;case M.CANCELLED:return dE.CANCELLED;case M.UNKNOWN:return dE.UNKNOWN;case M.DEADLINE_EXCEEDED:return dE.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return dE.RESOURCE_EXHAUSTED;case M.INTERNAL:return dE.INTERNAL;case M.UNAVAILABLE:return dE.UNAVAILABLE;case M.UNAUTHENTICATED:return dE.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return dE.INVALID_ARGUMENT;case M.NOT_FOUND:return dE.NOT_FOUND;case M.ALREADY_EXISTS:return dE.ALREADY_EXISTS;case M.PERMISSION_DENIED:return dE.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return dE.FAILED_PRECONDITION;case M.ABORTED:return dE.ABORTED;case M.OUT_OF_RANGE:return dE.OUT_OF_RANGE;case M.UNIMPLEMENTED:return dE.UNIMPLEMENTED;case M.DATA_LOSS:return dE.DATA_LOSS;default:return dD()}}(b=M||(M={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ class f0{constructor(a,b){this.mapKeyFn=a,this.equalsFn=b,this.inner={},this.innerSize=0}get(a){let c=this.mapKeyFn(a),b=this.inner[c];if(void 0!==b){for(let[d,e]of b)if(this.equalsFn(d,a))return e}}has(a){return void 0!==this.get(a)}set(a,d){let e=this.mapKeyFn(a),b=this.inner[e];if(void 0===b)return this.inner[e]=[[a,d]],void this.innerSize++;for(let c=0;c<b.length;c++)if(this.equalsFn(b[c][0],a))return void(b[c]=[a,d]);b.push([a,d]),this.innerSize++}delete(c){let d=this.mapKeyFn(c),a=this.inner[d];if(void 0===a)return!1;for(let b=0;b<a.length;b++)if(this.equalsFn(a[b][0],c))return 1===a.length?delete this.inner[d]:a.splice(b,1),this.innerSize--,!0;return!1}forEach(a){eh(this.inner,(e,b)=>{for(let[c,d]of b)a(c,d)})}isEmpty(){return ei(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let f1=new L(y.comparator),f2=new L(y.comparator);function f3(...c){let a=f2;for(let b of c)a=a.insert(b.key,b);return a}function f4(a){let b=f2;return a.forEach((a,c)=>b=b.insert(a,c.overlayedDocument)),b}function f5(){return f7()}function f6(){return f7()}function f7(){return new f0(a=>a.toString(),(a,b)=>a.isEqual(b))}let f8=new L(y.comparator),f9=new _(y.comparator);function ga(...b){let a=f9;for(let c of b)a=a.add(c);return a}let gb=new _(aD);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */ class gc{constructor(a,b,c,d,e){this.snapshotVersion=a,this.targetChanges=b,this.targetMismatches=c,this.documentUpdates=d,this.resolvedLimboDocuments=e}static createSynthesizedRemoteEventForCurrentChange(a,c){let b=new Map;return b.set(a,gd.createSynthesizedTargetChangeForCurrentChange(a,c)),new gc(dS.min(),b,gb,f1,ga())}}class gd{constructor(a,b,c,d,e){this.resumeToken=a,this.current=b,this.addedDocuments=c,this.modifiedDocuments=d,this.removedDocuments=e}static createSynthesizedTargetChangeForCurrentChange(b,a){return new gd(aa.EMPTY_BYTE_STRING,a,ga(),ga(),ga())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */ class ge{constructor(a,b,c,d){this.gt=a,this.removedTargetIds=b,this.key=c,this.yt=d}}class gf{constructor(a,b){this.targetId=a,this.It=b}}class gg{constructor(a,b,c=aa.EMPTY_BYTE_STRING,d=null){this.state=a,this.targetIds=b,this.resumeToken=c,this.cause=d}}class gh{constructor(){this.Tt=0,this.Et=gk(),this.At=aa.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(a){a.approximateByteSize()>0&&(this.bt=!0,this.At=a)}St(){let a=ga(),b=ga(),c=ga();return this.Et.forEach((d,e)=>{switch(e){case 0:a=a.add(d);break;case 2:b=b.add(d);break;case 1:c=c.add(d);break;default:dD()}}),new gd(this.At,this.Rt,a,b,c)}Dt(){this.bt=!1,this.Et=gk()}Ct(a,b){this.bt=!0,this.Et=this.Et.insert(a,b)}xt(a){this.bt=!0,this.Et=this.Et.remove(a)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class gi{constructor(a){this.Mt=a,this.Ft=new Map,this.$t=f1,this.Bt=gj(),this.Lt=new _(aD)}Ut(a){for(let b of a.gt)a.yt&&a.yt.isFoundDocument()?this.qt(b,a.yt):this.Kt(b,a.key,a.yt);for(let c of a.removedTargetIds)this.Kt(c,a.key,a.yt)}Gt(a){this.forEachTarget(a,c=>{let b=this.Qt(c);switch(a.state){case 0:this.jt(c)&&b.Vt(a.resumeToken);break;case 1:b.kt(),b.Pt||b.Dt(),b.Vt(a.resumeToken);break;case 2:b.kt(),b.Pt||this.removeTarget(c);break;case 3:this.jt(c)&&(b.Ot(),b.Vt(a.resumeToken));break;case 4:this.jt(c)&&(this.Wt(c),b.Vt(a.resumeToken));break;default:dD()}})}forEachTarget(a,b){a.targetIds.length>0?a.targetIds.forEach(b):this.Ft.forEach((c,a)=>{this.jt(a)&&b(a)})}zt(c){let a=c.targetId,b=c.It.count,d=this.Ht(a);if(d){let e=d.target;if(e$(e)){if(0===b){let f=new y(e.path);this.Kt(a,f,eV.newNoDocument(f,dS.min()))}else{var g;(g=1===b)||dD()}}else this.Jt(a)!==b&&(this.Wt(a),this.Lt=this.Lt.add(a))}}Yt(a){let b=new Map;this.Ft.forEach((c,d)=>{let f=this.Ht(d);if(f){if(c.current&&e$(f.target)){let e=new y(f.target.path);null!==this.$t.get(e)||this.Xt(d,e)||this.Kt(d,e,eV.newNoDocument(e,a))}c.vt&&(b.set(d,c.St()),c.Dt())}});let c=ga();this.Bt.forEach((a,b)=>{let d=!0;b.forEachWhile(b=>{let a=this.Ht(b);return!a||2===a.purpose||(d=!1,!1)}),d&&(c=c.add(a))}),this.$t.forEach((c,b)=>b.setReadTime(a));let d=new gc(a,b,this.Lt,this.$t,c);return this.$t=f1,this.Bt=gj(),this.Lt=new _(aD),d}qt(b,a){if(!this.jt(b))return;let c=this.Xt(b,a.key)?2:0;this.Qt(b).Ct(a.key,c),this.$t=this.$t.insert(a.key,a),this.Bt=this.Bt.insert(a.key,this.Zt(a.key).add(b))}Kt(b,a,c){if(!this.jt(b))return;let d=this.Qt(b);this.Xt(b,a)?d.Ct(a,1):d.xt(a),this.Bt=this.Bt.insert(a,this.Zt(a).delete(b)),c&&(this.$t=this.$t.insert(a,c))}removeTarget(a){this.Ft.delete(a)}Jt(a){let b=this.Qt(a).St();return this.Mt.getRemoteKeysForTarget(a).size+b.addedDocuments.size-b.removedDocuments.size}Nt(a){this.Qt(a).Nt()}Qt(b){let a=this.Ft.get(b);return a||(a=new gh,this.Ft.set(b,a)),a}Zt(b){let a=this.Bt.get(b);return a||(a=new _(aD),this.Bt=this.Bt.insert(b,a)),a}jt(a){let b=null!==this.Ht(a);return b||dz("WatchChangeAggregator","Detected inactive target",a),b}Ht(a){let b=this.Ft.get(a);return b&&b.Pt?null:this.Mt.te(a)}Wt(a){this.Ft.set(a,new gh),this.Mt.getRemoteKeysForTarget(a).forEach(b=>{this.Kt(a,b,null)})}Xt(a,b){return this.Mt.getRemoteKeysForTarget(a).has(b)}}function gj(){return new L(y.comparator)}function gk(){return new L(y.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let gl={asc:"ASCENDING",desc:"DESCENDING"},gm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class gn{constructor(a,b){this.databaseId=a,this.dt=b}}function go(b,a){return b.dt?`${new Date(1e3*a.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+a.nanoseconds).slice(-9)}Z`:{seconds:""+a.seconds,nanos:a.nanoseconds}}function gp(b,a){return b.dt?a.toBase64():a.toUint8Array()}function gq(a){var b;return!a&&dD(),dS.fromTimestamp(function(b){let a=eo(b);return new dR(a.seconds,a.nanos)}(a))}function gr(b,c){var a;return(a=b,new dT(["projects",a.projectId,"databases",a.database])).child("documents").child(c).canonicalString()}function gs(b){var c;let a=dT.fromString(b);return gO(a)||dD(),a}function gt(a,b){return gr(a.databaseId,b.path)}function gu(b,c){let a=gs(c);if(a.get(1)!==b.databaseId.projectId)throw new dF(dE.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+b.databaseId.projectId);if(a.get(3)!==b.databaseId.database)throw new dF(dE.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+b.databaseId.database);return new y(gy(a))}function gv(a,b){return gr(a.databaseId,b)}function gw(b){let a=gs(b);return 4===a.length?dT.emptyPath():gy(a)}function gx(a){return new dT(["projects",a.databaseId.projectId,"databases",a.databaseId.database]).canonicalString()}function gy(a){var b;return a.length>4&&"documents"===a.get(4)||dD(),a.popFirst(5)}function gz(a,b,c){return{name:gt(a,b),fields:c.value.mapValue.fields}}function gA(d,a,c){let e=gu(d,a.name),f=gq(a.updateTime),g=new eT({mapValue:{fields:a.fields}}),b=eV.newFoundDocument(e,f,g);return c&&b.setHasCommittedMutations(),c?b.setHasCommittedMutations():b}function gB(c,a){var e,d,f,g;let b;if(a instanceof fS)b={update:gz(c,a.key,a.value)};else if(a instanceof fX)b={delete:gt(c,a.key)};else if(a instanceof fT)b={update:gz(c,a.key,a.data),updateMask:gN(a.fieldMask)};else{if(!(a instanceof fY))return dD();b={verify:gt(c,a.key)}}return a.fieldTransforms.length>0&&(b.updateTransforms=a.fieldTransforms.map(a=>(function(c,b){let a=b.transform;if(a instanceof fB)return{fieldPath:b.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof fC)return{fieldPath:b.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fE)return{fieldPath:b.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof fG)return{fieldPath:b.field.canonicalString(),increment:a._t};throw dD()})(0,a))),a.precondition.isNone||(b.currentDocument=(e=c,void 0!==(d=a.precondition).updateTime?{updateTime:(f=e,go(f,(g=d.updateTime).toTimestamp()))}:void 0!==d.exists?{exists:d.exists}:dD())),b}function gC(d,a){var b;let c=a.currentDocument?void 0!==(b=a.currentDocument).updateTime?fL.updateTime(gq(b.updateTime)):void 0!==b.exists?fL.exists(b.exists):fL.none():fL.none(),e=a.updateTransforms?a.updateTransforms.map(a=>(function(c,a){let b=null;if("setToServerValue"in a){var g;"REQUEST_TIME"===a.setToServerValue||dD(),b=new fB}else if("appendMissingElements"in a){let d=a.appendMissingElements.values||[];b=new fC(d)}else if("removeAllFromArray"in a){let e=a.removeAllFromArray.values||[];b=new fE(e)}else"increment"in a?b=new fG(c,a.increment):dD();let f=dV.fromServerFormat(a.fieldPath);return new fJ(f,b)})(d,a)):[];if(a.update){a.update.name;let f=gu(d,a.update.name),g=new eT({mapValue:{fields:a.update.fields}});if(a.updateMask){let h=function(a){let b=a.fieldPaths||[];return new em(b.map(a=>dV.fromServerFormat(a)))}(a.updateMask);return new fT(f,g,h,c,e)}return new fS(f,g,c,e)}if(a.delete){let i=gu(d,a.delete);return new fX(i,c)}if(a.verify){let j=gu(d,a.verify);return new fY(j,c)}return dD()}function gD(a,b){return{documents:[gv(a,b.path)]}}function gE(d,a){var f,g,c,l,h;let b={structuredQuery:{}},e=a.path;null!==a.collectionGroup?(b.parent=gv(d,e),b.structuredQuery.from=[{collectionId:a.collectionGroup,allDescendants:!0}]):(b.parent=gv(d,e.popLast()),b.structuredQuery.from=[{collectionId:e.lastSegment()}]);let i=function(b){if(0===b.length)return;let a=b.map(a=>(function(a){if("=="===a.op){if(eL(a.value))return{unaryFilter:{field:gJ(a.field),op:"IS_NAN"}};if(eK(a.value))return{unaryFilter:{field:gJ(a.field),op:"IS_NULL"}}}else if("!="===a.op){if(eL(a.value))return{unaryFilter:{field:gJ(a.field),op:"IS_NOT_NAN"}};if(eK(a.value))return{unaryFilter:{field:gJ(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gJ(a.field),op:gI(a.op),value:a.value}}})(a));return 1===a.length?a[0]:{compositeFilter:{op:"AND",filters:a}}}(a.filters);i&&(b.structuredQuery.where=i);let j=function(a){if(0!==a.length)return a.map(b=>{var a;return{field:gJ((a=b).field),direction:gH(a.dir)}})}(a.orderBy);j&&(b.structuredQuery.orderBy=j);let k=(g=d,c=a.limit,g.dt||null==(l=c)?c:{value:c});return null!==k&&(b.structuredQuery.limit=k),a.startAt&&(b.structuredQuery.startAt={before:(f=a.startAt).inclusive,values:f.position}),a.endAt&&(b.structuredQuery.endAt={before:!(h=a.endAt).inclusive,values:h.position}),b}function gF(e){var n,b,o;let c=gw(e.parent),a=e.structuredQuery,f=a.from?a.from.length:0,g=null;if(f>0){(n=1===f)||dD();let d=a.from[0];d.allDescendants?g=d.collectionId:c=c.child(d.collectionId)}let h=[];a.where&&(h=gG(a.where));let i=[];a.orderBy&&(i=a.orderBy.map(b=>{var a;return a=b,new fb(gK(a.field),function(a){switch(a){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(a.direction))}));let j=null,k;a.limit&&(j=null==(o=k="object"==typeof(b=a.limit)?b.value:b)?null:k);let l=null;a.startAt&&(l=function(a){let b=!!a.before,c=a.values||[];return new fa(c,b)}(a.startAt));let m=null;return a.endAt&&(m=function(a){let b=!a.before,c=a.values||[];return new fa(c,b)}(a.endAt)),fg(c,g,i,h,j,"F",l,m)}function gG(a){return a?void 0!==a.unaryFilter?[gM(a)]:void 0!==a.fieldFilter?[gL(a)]:void 0!==a.compositeFilter?a.compositeFilter.filters.map(a=>gG(a)).reduce((a,b)=>a.concat(b)):dD():[]}function gH(a){return gl[a]}function gI(a){return gm[a]}function gJ(a){return{fieldPath:a.canonicalString()}}function gK(a){return dV.fromServerFormat(a.fieldPath)}function gL(a){return n.create(gK(a.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return dD()}}(a.fieldFilter.op),a.fieldFilter.value)}function gM(a){switch(a.unaryFilter.op){case"IS_NAN":let b=gK(a.unaryFilter.field);return n.create(b,"==",{doubleValue:NaN});case"IS_NULL":let c=gK(a.unaryFilter.field);return n.create(c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let d=gK(a.unaryFilter.field);return n.create(d,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let e=gK(a.unaryFilter.field);return n.create(e,"!=",{nullValue:"NULL_VALUE"});default:return dD()}}function gN(a){let b=[];return a.fields.forEach(a=>b.push(a.canonicalString())),{fieldPaths:b}}function gO(a){return a.length>=4&&"projects"===a.get(0)&&"databases"===a.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */ function gP(c){var d,e;let a="";for(let b=0;b<c.length;b++){a.length>0&&(a=(d=a,d+"\x01\x01")),a=gQ(c.get(b),a)}return e=a,e+"\x01\x01"}function gQ(c,e){let a=e,f=c.length;for(let b=0;b<f;b++){let d=c.charAt(b);switch(d){case"\0":a+="\x01\x10";break;case"\x01":a+="\x01\x11";break;default:a+=d}}return a}function gR(a){var j,k;let e=a.length;if(e>=2||dD(),2===e)return"\x01"===a.charAt(0)&&"\x01"===a.charAt(1)||dD(),dT.emptyPath();let i=e-2,g=[],b="";for(let d=0;d<e;){let c=a.indexOf("\x01",d);switch((c<0||c>i)&&dD(),a.charAt(c+1)){case"\x01":let h=a.substring(d,c),f;0===b.length?f=h:(b+=h,f=b,b=""),g.push(f);break;case"\x10":b+=a.substring(d,c),b+="\0";break;case"\x11":b+=a.substring(d,c+1);break;default:dD()}d=c+2}return new dT(g)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */ /**
 * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
 * index to iterate over all at document mutations for a given path or lower.
 */ function gS(a,b){return[a,gP(b)]}function gT(a,b,c){return[a,gP(b),c]}let gU={},aH=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],gV=[...aH,"documentOverlays"],aI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],aJ=aI,gW=[...aJ,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gX extends null{constructor(a,b){super(),this.ee=a,this.currentSequenceNumber=b}}function gY(a,b){var c;let d=c=a;return d6.N(d.ee,b)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A batch of mutations that will be sent as one unit to the backend.
 */ class gZ{constructor(a,b,c,d){this.batchId=a,this.localWriteTime=b,this.baseMutations=c,this.mutations=d}applyToRemoteDocument(b,d){let e=d.mutationResults;for(let a=0;a<this.mutations.length;a++){let c=this.mutations[a];c.key.isEqual(b.key)&&fO(c,b,e[a])}}applyToLocalView(b,a){for(let c of this.baseMutations)c.key.isEqual(b.key)&&(a=fP(c,b,a,this.localWriteTime));for(let d of this.mutations)d.key.isEqual(b.key)&&(a=fP(d,b,a,this.localWriteTime));return a}applyToLocalDocumentSet(b,c){let a=f6();return this.mutations.forEach(e=>{let g=b.get(e.key),d=g.overlayedDocument,f=this.applyToLocalView(d,g.mutatedFields);f=c.has(e.key)?null:f;let h=fN(d,f);null!==h&&a.set(e.key,h),d.isValidDocument()||d.convertToNoDocument(dS.min())}),a}keys(){return this.mutations.reduce((a,b)=>a.add(b.key),ga())}isEqual(a){return this.batchId===a.batchId&&dQ(this.mutations,a.mutations,(a,b)=>fR(a,b))&&dQ(this.baseMutations,a.baseMutations,(a,b)=>fR(a,b))}}class g${constructor(a,b,c,d){this.batch=a,this.commitVersion=b,this.mutationResults=c,this.docVersions=d}static from(b,f,c){var g;(g=b.mutations.length===c.length)||dD();let d=f8,e=b.mutations;for(let a=0;a<e.length;a++)d=d.insert(e[a].key,c[a].version);return new g$(b,f,c,d)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */ class g_{constructor(a,b){this.largestBatchId=a,this.mutation=b}getKey(){return this.mutation.key}isEqual(a){return null!==a&&this.mutation===a.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable set of metadata that the local store tracks for each target.
 */ class g0{constructor(a,b,c,d,e=dS.min(),f=dS.min(),g=aa.EMPTY_BYTE_STRING){this.target=a,this.targetId=b,this.purpose=c,this.sequenceNumber=d,this.snapshotVersion=e,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g}withSequenceNumber(a){return new g0(this.target,this.targetId,this.purpose,a,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(a,b){return new g0(this.target,this.targetId,this.purpose,this.sequenceNumber,b,this.lastLimboFreeSnapshotVersion,a)}withLastLimboFreeSnapshotVersion(a){return new g0(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,a,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Serializer for values stored in the LocalStore. */ class g1{constructor(a){this.ne=a}}function g2(f,a){let b=a.key,c={prefixPath:b.getCollectionPath().popLast().toArray(),collectionGroup:b.collectionGroup,documentId:b.path.lastSegment(),readTime:g3(a.readTime),hasCommittedMutations:a.hasCommittedMutations};if(a.isFoundDocument()){var d,e;c.document=(d=f.ne,{name:gt(d,(e=a).key),fields:e.data.value.mapValue.fields,updateTime:go(d,e.version.toTimestamp())})}else if(a.isNoDocument())c.noDocument={path:b.path.toArray(),readTime:g4(a.version)};else{if(!a.isUnknownDocument())return dD();c.unknownDocument={path:b.path.toArray(),version:g4(a.version)}}return c}function g3(b){let a=b.toTimestamp();return[a.seconds,a.nanoseconds]}function g4(b){let a=b.toTimestamp();return{seconds:a.seconds,nanoseconds:a.nanoseconds}}function g5(a){let b=new dR(a.seconds,a.nanoseconds);return dS.fromTimestamp(b)}function g6(h,a){let c=(a.baseMutations||[]).map(a=>gC(h.ne,a));for(let b=0;b<a.mutations.length-1;++b){let d=a.mutations[b];if(b+1<a.mutations.length&& void 0!==a.mutations[b+1].transform){let e=a.mutations[b+1];d.updateTransforms=e.transform.fieldTransforms,a.mutations.splice(b+1,1),++b}}let f=a.mutations.map(a=>gC(h.ne,a)),g=dR.fromMillis(a.localWriteTimeMs);return new gZ(a.batchId,g,c,f)}function g7(a){var c,g,d;let e=g5(a.readTime),f=void 0!==a.lastLimboFreeSnapshotVersion?g5(a.lastLimboFreeSnapshotVersion):dS.min(),b;return void 0!==a.query.documents?(1===(c=a.query).documents.length||dD(),b=fm(fh(gw(c.documents[0])))):b=fm(gF(d=a.query)),new g0(b,a.targetId,0,a.lastListenSequenceNumber,e,f,aa.fromBase64String(a.resumeToken))}function g8(b,a){let d=g4(a.snapshotVersion),e=g4(a.lastLimboFreeSnapshotVersion),c;c=e$(a.target)?gD(b.ne,a.target):gE(b.ne,a.target);let f=a.resumeToken.toBase64();return{targetId:a.targetId,canonicalId:eY(a.target),readTime:d,resumeToken:f,lastListenSequenceNumber:a.sequenceNumber,lastLimboFreeSnapshotVersion:e,query:c}}function g9(a){let b=gF({parent:a.parent,structuredQuery:a.structuredQuery});return"LAST"===a.limitType?fn(b,b.limit,"L"):b}function ha(b,a){return new g_(a.largestBatchId,gC(b.ne,a.overlayMutation))}function hb(b,a){let c=a.path.lastSegment();return[b,gP(a.path.popLast()),c]}function hc(b,c,d,a){return{indexId:b,uid:c.uid||"",sequenceNumber:d,readTime:g4(a.readTime),documentKey:gP(a.documentKey.path),largestBatchId:a.largestBatchId}}function hd(a){return gY(a,"bundles")}function he(a){return gY(a,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implementation of DocumentOverlayCache using IndexedDb.
 */ class hf{constructor(a,b){this.wt=a,this.userId=b}static se(a,b){let c=b.uid||"";return new hf(a,c)}getOverlay(a,b){return hg(a).get(hb(this.userId,b)).next(a=>a?ha(this.wt,a):null)}getOverlays(b,a){let c=f5();return d4.forEach(a,a=>this.getOverlay(b,a).next(b=>{null!==b&&c.set(a,b)})).next(()=>c)}saveOverlays(c,d,a){let b=[];return a.forEach((f,a)=>{let e=new g_(d,a);b.push(this.ie(c,e))}),d4.waitFor(b)}removeOverlaysForBatchId(d,a,e){let b=new Set;a.forEach(a=>b.add(gP(a.getCollectionPath())));let c=[];return b.forEach(a=>{let b=IDBKeyRange.bound([this.userId,a,e],[this.userId,a,e+1],!1,!0);c.push(hg(d).W("collectionPathOverlayIndex",b))}),d4.waitFor(c)}getOverlaysForCollection(b,c,d){let f=f5(),a=gP(c),e=IDBKeyRange.bound([this.userId,a,d],[this.userId,a,Number.POSITIVE_INFINITY],!0);return hg(b).K("collectionPathOverlayIndex",e).next(b=>{for(let c of b){let a=ha(this.wt,c);f.set(a.getKey(),a)}return f})}getOverlaysForCollectionGroup(b,a,c,e){let f=f5(),g,d=IDBKeyRange.bound([this.userId,a,c],[this.userId,a,Number.POSITIVE_INFINITY],!0);return hg(b).J({index:"collectionGroupOverlayIndex",range:d},(d,b,c)=>{let a=ha(this.wt,b);f.size()<e||a.largestBatchId===g?(f.set(a.getKey(),a),g=a.largestBatchId):c.done()}).next(()=>f)}ie(a,b){return hg(a).put(function(c,b,a){let[f,d,e]=hb(b,a.mutation.key);return{userId:b,collectionPath:d,documentId:e,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:gB(c.ne,a.mutation)}}(this.wt,this.userId,b))}}function hg(a){return gY(a,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */ class ab{constructor(){}re(b,a){this.oe(b,a),a.ue()}oe(b,a){if("nullValue"in b)this.ce(a,5);else if("booleanValue"in b)this.ce(a,10),a.ae(b.booleanValue?1:0);else if("integerValue"in b)this.ce(a,15),a.ae(ep(b.integerValue));else if("doubleValue"in b){let d=ep(b.doubleValue);isNaN(d)?this.ce(a,13):(this.ce(a,15),ew(d)?a.ae(0):a.ae(d))}else if("timestampValue"in b){let c=b.timestampValue;this.ce(a,20),"string"==typeof c?a.he(c):(a.he(`${c.seconds||""}`),a.ae(c.nanos||0))}else if("stringValue"in b)this.le(b.stringValue,a),this.fe(a);else if("bytesValue"in b)this.ce(a,30),a.de(eq(b.bytesValue)),this.fe(a);else if("referenceValue"in b)this._e(b.referenceValue,a);else if("geoPointValue"in b){let e=b.geoPointValue;this.ce(a,45),a.ae(e.latitude||0),a.ae(e.longitude||0)}else"mapValue"in b?eO(b)?this.ce(a,Number.MAX_SAFE_INTEGER):(this.we(b.mapValue,a),this.fe(a)):"arrayValue"in b?(this.me(b.arrayValue,a),this.fe(a)):dD()}le(b,a){this.ce(a,25),this.ge(b,a)}ge(a,b){b.he(a)}we(d,a){let b=d.fields||{};for(let c of(this.ce(a,55),Object.keys(b)))this.le(c,a),this.oe(b[c],a)}me(b,a){let c=b.values||[];for(let d of(this.ce(a,50),c))this.oe(d,a)}_e(a,b){this.ce(b,37),y.fromName(a).path.forEach(a=>{this.ce(b,60),this.ge(a,b)})}ce(a,b){a.ae(b)}fe(a){a.ae(2)}}function hh(a){if(0===a)return 8;let b=0;return a>>4==0&&(b+=4,a<<=4),a>>6==0&&(b+=2,a<<=2),a>>7==0&&(b+=1),b}function hi(a){let b=64-function(d){let b=0;for(let a=0;a<8;++a){let c=hh(255&d[a]);if(b+=c,8!==c)break}return b}(a);return Math.ceil(b/8)}ab.ye=new ab;class hj{constructor(){this.Me=new class{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(c){let b=c[Symbol.iterator](),a=b.next();for(;!a.done;)this.Ie(a.value),a=b.next();this.Te()}Ee(c){let b=c[Symbol.iterator](),a=b.next();for(;!a.done;)this.Ae(a.value),a=b.next();this.Re()}be(d){for(let b of d){let a=b.charCodeAt(0);if(a<128)this.Ie(a);else if(a<2048)this.Ie(960|a>>>6),this.Ie(128|63&a);else if(b<"\ud800"||"\udbff"<b)this.Ie(480|a>>>12),this.Ie(128|63&a>>>6),this.Ie(128|63&a);else{let c=b.codePointAt(0);this.Ie(240|c>>>18),this.Ie(128|63&c>>>12),this.Ie(128|63&c>>>6),this.Ie(128|63&c)}}this.Te()}Pe(d){for(let b of d){let a=b.charCodeAt(0);if(a<128)this.Ae(a);else if(a<2048)this.Ae(960|a>>>6),this.Ae(128|63&a);else if(b<"\ud800"||"\udbff"<b)this.Ae(480|a>>>12),this.Ae(128|63&a>>>6),this.Ae(128|63&a);else{let c=b.codePointAt(0);this.Ae(240|c>>>18),this.Ae(128|63&c>>>12),this.Ae(128|63&c>>>6),this.Ae(128|63&c)}}this.Re()}ve(d){let a=this.Ve(d),b=hi(a);this.Se(1+b),this.buffer[this.position++]=255&b;for(let c=a.length-b;c<a.length;++c)this.buffer[this.position++]=255&a[c]}De(d){let a=this.Ve(d),b=hi(a);this.Se(1+b),this.buffer[this.position++]=~(255&b);for(let c=a.length-b;c<a.length;++c)this.buffer[this.position++]=~(255&a[c])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(a){this.Se(a.length),this.buffer.set(a,this.position),this.position+=a.length}Oe(){return this.buffer.slice(0,this.position)}Ve(d){let a=function(b){let a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,b,!1),new Uint8Array(a.buffer)}(d),c=0!=(128&a[0]);a[0]^=c?255:128;for(let b=1;b<a.length;++b)a[b]^=c?255:0;return a}Ie(b){let a=255&b;0===a?(this.xe(0),this.xe(255)):255===a?(this.xe(255),this.xe(0)):this.xe(a)}Ae(a){let b=255&a;0===b?(this.ke(0),this.ke(255)):255===b?(this.ke(255),this.ke(0)):this.ke(a)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(a){this.Se(1),this.buffer[this.position++]=a}ke(a){this.Se(1),this.buffer[this.position++]=~a}Se(d){let a=d+this.position;if(a<=this.buffer.length)return;let b=2*this.buffer.length;b<a&&(b=a);let c=new Uint8Array(b);c.set(this.buffer),this.buffer=c}},this.Fe=new class{constructor(a){this.Me=a}de(a){this.Me.pe(a)}he(a){this.Me.be(a)}ae(a){this.Me.ve(a)}ue(){this.Me.Ce()}}(this.Me),this.$e=new class{constructor(a){this.Me=a}de(a){this.Me.Ee(a)}he(a){this.Me.Pe(a)}ae(a){this.Me.De(a)}ue(){this.Me.Ne()}}(this.Me)}seed(a){this.Me.seed(a)}Be(a){return 0===a?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Represents an index entry saved by the SDK in persisted storage. */ class hk{constructor(a,b,c,d){this.indexId=a,this.documentKey=b,this.arrayValue=c,this.directionalValue=d}Le(){let a=this.directionalValue.length,c=0===a||255===this.directionalValue[a-1]?a+1:a,b=new Uint8Array(c);return b.set(this.directionalValue,0),c!==a?b.set([0],this.directionalValue.length):++b[b.length-1],new hk(this.indexId,this.documentKey,this.arrayValue,b)}}function hl(b,c){let a=b.indexId-c.indexId;return 0!==a?a:0!==(a=hm(b.arrayValue,c.arrayValue))?a:0!==(a=hm(b.directionalValue,c.directionalValue))?a:y.comparator(b.documentKey,c.documentKey)}function hm(b,c){for(let a=0;a<b.length&&a<c.length;++a){let d=b[a]-c[a];if(0!==d)return d}return b.length-c.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light query planner for Firestore.
 *
 * This class matches a `FieldIndex` against a Firestore Query `Target`. It
 * determines whether a given index can be used to serve the specified target.
 *
 * The following table showcases some possible index configurations:
 *
 * Query                                               | Index
 * -----------------------------------------------------------------------------
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC, b DESC
 * where('a', '==', 'a').where('b', '==', 'b')         | a ASC
 * where('a', '==', 'a').where('b', '==', 'b')         | b DESC
 * where('a', '>=', 'a').orderBy('a')                  | a ASC
 * where('a', '>=', 'a').orderBy('a', 'desc')          | a DESC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC, b ASC
 * where('a', '>=', 'a').orderBy('a').orderBy('b')     | a ASC
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS, b ASCENDING
 * where('a', 'array-contains', 'a').orderBy('b')      | a CONTAINS
 */ class hn{constructor(a){for(let c of(this.collectionId=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment(),this.Ue=a.orderBy,this.qe=[],a.filters)){let b=c;b.ht()?this.Ke=b:this.qe.push(b)}}Ge(d){let e=dW(d);if(void 0!==e&&!this.Qe(e))return!1;let b=dX(d),a=0,c=0;for(;a<b.length&&this.Qe(b[a]);++a);if(a===b.length)return!0;if(void 0!==this.Ke){let f=b[a];if(!this.je(this.Ke,f)||!this.We(this.Ue[c++],f))return!1;++a}for(;a<b.length;++a){let g=b[a];if(c>=this.Ue.length||!this.We(this.Ue[c++],g))return!1}return!0}Qe(a){for(let b of this.qe)if(this.je(b,a))return!0;return!1}je(a,b){if(void 0===a||!a.field.isEqual(b.fieldPath))return!1;let c="array-contains"===a.op||"array-contains-any"===a.op;return 2===b.kind===c}We(a,b){return!!a.field.isEqual(b.fieldPath)&&(0===b.kind&&"asc"===a.dir||1===b.kind&&"desc"===a.dir)}}class ho{constructor(){this.index={}}add(a){let b=a.lastSegment(),c=a.popLast(),d=this.index[b]||new _(dT.comparator),e=!d.has(c);return this.index[b]=d.add(c),e}has(a){let c=a.lastSegment(),d=a.popLast(),b=this.index[c];return b&&b.has(d)}getEntries(a){return(this.index[a]||new _(dT.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hp=new Uint8Array(0);class hq{constructor(a,b){this.user=a,this.databaseId=b,this.He=new ho,this.Je=new f0(a=>eY(a),(a,b)=>eZ(a,b)),this.uid=a.uid||""}addToCollectionParentIndex(b,a){if(!this.He.has(a)){let c=a.lastSegment(),d=a.popLast();b.addOnCommittedListener(()=>{this.He.add(a)});let e={collectionId:c,parent:gP(d)};return hr(b).put(e)}return d4.resolve()}getCollectionParents(b,a){var c;let e=[],d=IDBKeyRange.bound([a,""],[(c=a)+"\0",""],!1,!0);return hr(b).K(d).next(c=>{for(let b of c){if(b.collectionId!==a)break;e.push(gR(b.parent))}return e})}addFieldIndex(b,c){var a;let f=ht(b),d={indexId:(a=c).indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])};delete d.indexId;let e=f.add(d);if(c.indexState){let g=hu(b);return e.next(a=>{g.put(hc(a,this.user,c.indexState.sequenceNumber,c.indexState.offset))})}return e.next()}deleteFieldIndex(a,b){let c=ht(a),d=hu(a),e=hs(a);return c.delete(b.indexId).next(()=>d.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0))).next(()=>e.delete(IDBKeyRange.bound([b.indexId],[b.indexId+1],!1,!0)))}getDocumentsMatchingTarget(a,b){let c=hs(a),d=!0,e=new Map;return d4.forEach(this.Ye(b),b=>this.Xe(a,b).next(a=>{d&&(d=!!a),e.set(b,a)})).next(()=>{if(d){let a=ga(),f=[];return d4.forEach(e,(d,e)=>{var g;dz("IndexedDbIndexManager",`Using index ${(g=d,`id=${g.indexId}|cg=${g.collectionGroup}|f=${g.fields.map(a=>`${a.fieldPath}:${a.kind}`).join(",")}`)} to execute ${eY(b)}`);let j=function(c,d){let b=dW(d);if(void 0===b)return null;for(let a of e_(c,b.fieldPath))switch(a.op){case"array-contains-any":return a.value.arrayValue.values||[];case"array-contains":return[a.value]}return null}(e,d),k=function(d,e){let a=new Map;for(let b of dX(e))for(let c of e_(d,b.fieldPath))switch(c.op){case"==":case"in":a.set(b.fieldPath.canonicalString(),c.value);break;case"not-in":case"!=":return a.set(b.fieldPath.canonicalString(),c.value),Array.from(a.values())}return null}(e,d),h=function(a,f){let d=[],b=!0;for(let c of dX(f)){let e=0===c.kind?e0(a,c.fieldPath,a.startAt):e1(a,c.fieldPath,a.startAt);d.push(e.value),b&&(b=e.inclusive)}return new fa(d,b)}(e,d),i=function(a,f){let d=[],b=!0;for(let c of dX(f)){let e=0===c.kind?e1(a,c.fieldPath,a.endAt):e0(a,c.fieldPath,a.endAt);d.push(e.value),b&&(b=e.inclusive)}return new fa(d,b)}(e,d),l=this.Ze(d,e,h),m=this.Ze(d,e,i),n=this.tn(d,e,k),o=this.en(d.indexId,j,l,h.inclusive,m,i.inclusive,n);return d4.forEach(o,d=>c.j(d,b.limit).next(b=>{b.forEach(c=>{let b=y.fromSegments(c.documentKey);a.has(b)||(a=a.add(b),f.push(b))})}))}).next(()=>f)}return d4.resolve(null)})}Ye(b){let a=this.Je.get(b);return a||(a=[b],this.Je.set(b,a),a)}en(d,a,e,j,f,k,l){let g=(null!=a?a.length:1)*Math.max(e.length,f.length),c=g/(null!=a?a.length:1),h=[];for(let b=0;b<g;++b){let i=a?this.nn(a[b/c]):hp,m=this.sn(d,i,e[b%c],j),n=this.rn(d,i,f[b%c],k),o=l.map(a=>this.sn(d,i,a,!0));h.push(...this.createRange(m,n,o))}return h}sn(b,c,d,e){let a=new hk(b,y.empty(),c,d);return e?a:a.Le()}rn(b,c,d,e){let a=new hk(b,y.empty(),c,d);return e?a.Le():a}Xe(b,a){let d=new hn(a),c=null!=a.collectionGroup?a.collectionGroup:a.path.lastSegment();return this.getFieldIndexes(b,c).next(c=>{let a=null;for(let b of c)d.Ge(b)&&(!a||b.fields.length>a.fields.length)&&(a=b);return a})}getIndexType(b,a){let c=2;return d4.forEach(this.Ye(a),a=>this.Xe(b,a).next(b=>{b?0!==c&&b.fields.length<function(c){let a=new _(dV.comparator),d=!1;for(let f of c.filters){let b=f;b.field.isKeyField()||("array-contains"===b.op||"array-contains-any"===b.op?d=!0:a=a.add(b.field))}for(let e of c.orderBy)e.field.isKeyField()||(a=a.add(e.field));return a.size+(d?1:0)}(a)&&(c=1):c=0})).next(()=>c)}on(d,e){let a=new hj;for(let b of dX(d)){let c=e.data.field(b.fieldPath);if(null==c)return null;let f=a.Be(b.kind);ab.ye.re(c,f)}return a.Oe()}nn(b){let a=new hj;return ab.ye.re(b,a.Be(0)),a.Oe()}un(b,c){let a=new hj;return ab.ye.re(eH(this.databaseId,c),a.Be(function(b){let a=dX(b);return 0===a.length?0:a[a.length-1].kind}(b))),a.Oe()}tn(e,f,d){if(null===d)return[];let a=[];a.push(new hj);let g=0;for(let b of dX(e)){let c=d[g++];for(let h of a)if(this.cn(f,b.fieldPath)&&eJ(c))a=this.an(a,b,c);else{let i=h.Be(b.kind);ab.ye.re(c,i)}}return this.hn(a)}Ze(a,b,c){return this.tn(a,b,c.position)}hn(b){let c=[];for(let a=0;a<b.length;++a)c[a]=b[a].Oe();return c}an(c,d,e){let f=[...c],b=[];for(let g of e.arrayValue.values||[])for(let h of f){let a=new hj;a.seed(h.Oe()),ab.ye.re(g,a.Be(d.kind)),b.push(a)}return b}cn(a,b){return!!a.filters.find(a=>a instanceof n&&a.field.isEqual(b)&&("in"===a.op||"not-in"===a.op))}getFieldIndexes(b,a){let c=ht(b),d=hu(b);return(a?c.K("collectionGroupIndex",IDBKeyRange.bound(a,a)):c.K()).next(a=>{let b=[];return d4.forEach(a,a=>d.get([a.indexId,this.uid]).next(c=>{b.push(function(b,a){let c=a?new dZ(a.sequenceNumber,new d0(g5(a.readTime),new y(gR(a.documentKey)),a.largestBatchId)):dZ.empty(),d=b.fields.map(([a,b])=>new dY(dV.fromServerFormat(a),b));return new aE(b.indexId,b.collectionGroup,d,c)}(a,c))})).next(()=>b)})}getNextCollectionGroupToUpdate(a){return this.getFieldIndexes(a).next(a=>0===a.length?null:(a.sort((a,b)=>{let c=a.indexState.sequenceNumber-b.indexState.sequenceNumber;return 0!==c?c:aD(a.collectionGroup,b.collectionGroup)}),a[0].collectionGroup))}updateCollectionGroup(a,b,c){let d=ht(a),e=hu(a);return this.ln(a).next(a=>d.K("collectionGroupIndex",IDBKeyRange.bound(b,b)).next(b=>d4.forEach(b,b=>e.put(hc(b.indexId,this.user,a,c)))))}updateIndexEntries(b,a){let c=new Map;return d4.forEach(a,(a,e)=>{let d=c.get(a.collectionGroup);return(d?d4.resolve(d):this.getFieldIndexes(b,a.collectionGroup)).next(d=>(c.set(a.collectionGroup,d),d4.forEach(d,c=>this.fn(b,a,c).next(a=>{let d=this.dn(e,c);return a.isEqual(d)?d4.resolve():this._n(b,e,c,a,d)}))))})}wn(c,b,d,a){return hs(c).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.un(d,b.key),documentKey:b.key.path.toArray()})}mn(c,b,d,a){return hs(c).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.un(d,b.key),b.key.path.toArray()])}fn(b,c,a){let d=hs(b),e=new _(hl);return d.J({index:"documentKeyIndex",range:IDBKeyRange.only([a.indexId,this.uid,this.un(a,c)])},(d,b)=>{e=e.add(new hk(a.indexId,c,b.arrayValue,b.directionalValue))}).next(()=>e)}dn(b,c){let a=new _(hl),d=this.on(c,b);if(null==d)return a;let e=dW(c);if(null!=e){let f=b.data.field(e.fieldPath);if(eJ(f))for(let g of f.arrayValue.values||[])a=a.add(new hk(c.indexId,b.key,this.nn(g),d))}else a=a.add(new hk(c.indexId,b.key,hp,d));return a}_n(e,a,f,b,c){dz("IndexedDbIndexManager","Updating index entries for document '%s'",a.key);let d=[];return function(h,i,j,k,l){let c=h.getIterator(),d=i.getIterator(),a=el(c),b=el(d);for(;a||b;){let e=!1,f=!1;if(a&&b){let g=j(a,b);g<0?f=!0:g>0&&(e=!0)}else null!=a?f=!0:e=!0;e?(k(b),b=el(d)):f?(l(a),a=el(c)):(a=el(c),b=el(d))}}(b,c,hl,b=>{d.push(this.wn(e,a,f,b))},b=>{d.push(this.mn(e,a,f,b))}),d4.waitFor(d)}ln(a){let b=1;return hu(a).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(d,a,c)=>{c.done(),b=a.sequenceNumber+1}).next(()=>b)}createRange(d,f,e){e=e.sort((a,b)=>hl(a,b)).filter((b,a,c)=>!a||0!==hl(b,c[a-1]));let a=[];for(let c of(a.push(d),e)){let g=hl(c,d),h=hl(c,f);if(0===g)a[0]=d.Le();else if(g>0&&h<0)a.push(c),a.push(c.Le());else if(h>0)break}a.push(f);let i=[];for(let b=0;b<a.length;b+=2)i.push(IDBKeyRange.bound([a[b].indexId,this.uid,a[b].arrayValue,a[b].directionalValue,hp,[]],[a[b+1].indexId,this.uid,a[b+1].arrayValue,a[b+1].directionalValue,hp,[]]));return i}getMinOffsetFromCollectionGroup(a,b){return this.getFieldIndexes(a,b).next(hv)}getMinOffset(b,a){return d4.mapArray(this.Ye(a),a=>this.Xe(b,a).next(a=>a||dD())).next(hv)}}function hr(a){return gY(a,"collectionParents")}function hs(a){return gY(a,"indexEntries")}function ht(a){return gY(a,"indexConfiguration")}function hu(a){return gY(a,"indexState")}function hv(b){var f;(f=0!==b.length)||dD();let a=b[0].indexState.offset,d=a.largestBatchId;for(let e=1;e<b.length;e++){let c=b[e].indexState.offset;0>d1(c,a)&&(a=c),d<c.largestBatchId&&(d=c.largestBatchId)}return new d0(a.readTime,a.documentKey,d)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let hw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class l{constructor(a,b,c){this.cacheSizeCollectionThreshold=a,this.percentileToCollect=b,this.maximumSequenceNumbersToCollect=c}static withCacheSize(a){return new l(a,l.DEFAULT_COLLECTION_PERCENTILE,l.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */ function hx(c,e,a){let f=c.store("mutations"),g=c.store("documentMutations"),b=[],h=IDBKeyRange.only(a.batchId),l=0,i=f.J({range:h},(b,c,a)=>(l++,a.delete()));b.push(i.next(()=>{var a;(a=1===l)||dD()}));let j=[];for(let d of a.mutations){let k=gT(e,d.key.path,a.batchId);b.push(g.delete(k)),j.push(d.key)}return d4.waitFor(b).next(()=>j)}function hy(a){if(!a)return 0;let b;if(a.document)b=a.document;else if(a.unknownDocument)b=a.unknownDocument;else{if(!a.noDocument)throw dD();b=a.noDocument}return JSON.stringify(b).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** A mutation queue for a specific user, backed by IndexedDB. */ l.DEFAULT_COLLECTION_PERCENTILE=10,l.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,l.DEFAULT=new l(41943040,l.DEFAULT_COLLECTION_PERCENTILE,l.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),l.DISABLED=new l(-1,0,0);class hz{constructor(a,b,c,d){this.userId=a,this.wt=b,this.indexManager=c,this.referenceDelegate=d,this.gn={}}static se(a,b,c,d){var e;(e=""!==a.uid)||dD();let f=a.isAuthenticated()?a.uid:"";return new hz(f,b,c,d)}checkEmpty(a){let c=!0,b=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return hB(a).J({index:"userMutationsIndex",range:b},(b,d,a)=>{c=!1,a.done()}).next(()=>c)}addMutationBatch(a,c,d,e){let f=hC(a),b=hB(a);return b.add({}).next(g=>{var k;(k="number"==typeof g)||dD();let l=new gZ(g,c,d,e),m=function(e,b,a){let c=a.baseMutations.map(a=>gB(e.ne,a)),d=a.mutations.map(a=>gB(e.ne,a));return{userId:b,batchId:a.batchId,localWriteTimeMs:a.localWriteTime.toMillis(),baseMutations:c,mutations:d}}(this.wt,this.userId,l),h=[],i=new _((a,b)=>aD(a.canonicalString(),b.canonicalString()));for(let j of e){let n=gT(this.userId,j.key.path,g);i=i.add(j.key.path.popLast()),h.push(b.put(m)),h.push(f.put(n,gU))}return i.forEach(b=>{h.push(this.indexManager.addToCollectionParentIndex(a,b))}),a.addOnCommittedListener(()=>{this.gn[g]=l.keys()}),d4.waitFor(h).next(()=>l)})}lookupMutationBatch(a,b){return hB(a).get(b).next(a=>{var b;return a?(a.userId===this.userId||dD(),g6(this.wt,a)):null})}yn(b,a){return this.gn[a]?d4.resolve(this.gn[a]):this.lookupMutationBatch(b,a).next(b=>{if(b){let c=b.keys();return this.gn[a]=c,c}return null})}getNextMutationBatchAfterBatchId(a,b){let c=b+1,d=IDBKeyRange.lowerBound([this.userId,c]),e=null;return hB(a).J({index:"userMutationsIndex",range:d},(d,a,b)=>{var f;a.userId===this.userId&&(a.batchId>=c||dD(),e=g6(this.wt,a)),b.done()}).next(()=>e)}getHighestUnacknowledgedBatchId(a){let b=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),c=-1;return hB(a).J({index:"userMutationsIndex",range:b,reverse:!0},(d,a,b)=>{c=a.batchId,b.done()}).next(()=>c)}getAllMutationBatches(a){let b=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return hB(a).K("userMutationsIndex",b).next(a=>a.map(a=>g6(this.wt,a)))}getAllMutationBatchesAffectingDocumentKey(a,b){let c=gS(this.userId,b.path),d=IDBKeyRange.lowerBound(c),e=[];return hC(a).J({range:d},(c,j,d)=>{let[f,g,h]=c,i=gR(g);if(f===this.userId&&b.path.isEqual(i))return hB(a).get(h).next(a=>{var b;if(!a)throw dD();a.userId===this.userId||dD(),e.push(g6(this.wt,a))});d.done()}).next(()=>e)}getAllMutationBatchesAffectingDocumentKeys(c,a){let d=new _(aD),b=[];return a.forEach(a=>{let e=gS(this.userId,a.path),f=IDBKeyRange.lowerBound(e),g=hC(c).J({range:f},(b,i,c)=>{let[e,f,g]=b,h=gR(f);e===this.userId&&a.path.isEqual(h)?d=d.add(g):c.done()});b.push(g)}),d4.waitFor(b).next(()=>this.pn(c,d))}getAllMutationBatchesAffectingQuery(b,c){let a=c.path,f=a.length+1,d=gS(this.userId,a),e=IDBKeyRange.lowerBound(d),g=new _(aD);return hC(b).J({range:e},(c,j,d)=>{let[e,h,i]=c,b=gR(h);e===this.userId&&a.isPrefixOf(b)?b.length===f&&(g=g.add(i)):d.done()}).next(()=>this.pn(b,g))}pn(c,a){let d=[],b=[];return a.forEach(a=>{b.push(hB(c).get(a).next(a=>{var b;if(null===a)throw dD();a.userId===this.userId||dD(),d.push(g6(this.wt,a))}))}),d4.waitFor(b).next(()=>d)}removeMutationBatch(a,b){return hx(a.ee,this.userId,b).next(c=>(a.addOnCommittedListener(()=>{this.In(b.batchId)}),d4.forEach(c,b=>this.referenceDelegate.markPotentiallyOrphaned(a,b))))}In(a){delete this.gn[a]}performConsistencyCheck(a){return this.checkEmpty(a).next(b=>{if(!b)return d4.resolve();let c=IDBKeyRange.lowerBound([this.userId]),d=[];return hC(a).J({range:c},(a,e,b)=>{if(a[0]===this.userId){let c=gR(a[1]);d.push(c)}else b.done()}).next(()=>{var a;(a=0===d.length)||dD()})})}containsKey(a,b){return hA(a,this.userId,b)}Tn(a){return hD(a).get(this.userId).next(a=>a||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function hA(b,c,d){let a=gS(c,d.path),f=a[1],e=IDBKeyRange.lowerBound(a),g=!1;return hC(b).J({range:e,H:!0},(a,h,b)=>{let[d,e,i]=a;d===c&&e===f&&(g=!0),b.done()}).next(()=>g)}function hB(a){return gY(a,"mutations")}function hC(a){return gY(a,"documentMutations")}function hD(a){return gY(a,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Offset to ensure non-overlapping target ids. */ /**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ class hE{constructor(a){this.En=a}next(){return this.En+=2,this.En}static An(){return new hE(0)}static Rn(){return new hE(-1)}}function hF(a){return gY(a,"targets")}function hG(a){return gY(a,"targetGlobal")}function hH(a){return gY(a,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hI([b,c],[d,e]){let a=aD(b,d);return 0===a?aD(c,e):a}class hJ{constructor(a){this.Sn=a,this.buffer=new _(hI),this.Dn=0}Cn(){return++this.Dn}xn(c){let a=[c,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(a);else{let b=this.buffer.last();0>hI(a,b)&&(this.buffer=this.buffer.delete(b).add(a))}}get maxValue(){return this.buffer.last()[0]}}class hK{constructor(a,b,c){this.garbageCollector=a,this.asyncQueue=b,this.localStore=c,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(a){dz("LruGarbageCollector",`Garbage collection scheduled in ${a}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",a,async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(a){d9(a)?dz("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",a):await d3(a)}await this.kn(3e5)})}}function hL(a,d){var b,c;return hH(a).put((b=d,c=a.currentSequenceNumber,{targetId:0,path:gP(b.path),sequenceNumber:c}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */ class aK{constructor(){this.changes=new f0(a=>a.toString(),(a,b)=>a.isEqual(b)),this.changesApplied=!1}addEntry(a){this.assertNotApplied(),this.changes.set(a.key,a)}removeEntry(a,b){this.assertNotApplied(),this.changes.set(a,eV.newInvalidDocument(a).setReadTime(b))}getEntry(c,a){this.assertNotApplied();let b=this.changes.get(a);return void 0!==b?d4.resolve(b):this.getFromCache(c,a)}getEntries(a,b){return this.getAllFromCache(a,b)}apply(a){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(a)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ class hM{constructor(a){this.wt=a}setIndexManager(a){this.indexManager=a}addEntry(a,c,b){return hQ(a).put(b)}removeEntry(a,b,c){return hQ(a).delete(function(b,c){let a=b.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],g3(c),a[a.length-1]]}(b,c))}updateMetadata(a,b){return this.getMetadata(a).next(c=>(c.byteSize+=b,this.qn(a,c)))}getEntry(b,a){let c=eV.newInvalidDocument(a);return hQ(b).J({index:"documentKeyIndex",range:IDBKeyRange.only(hR(a))},(d,b)=>{c=this.Kn(a,b)}).next(()=>c)}Gn(b,a){let c={size:0,document:eV.newInvalidDocument(a)};return hQ(b).J({index:"documentKeyIndex",range:IDBKeyRange.only(hR(a))},(d,b)=>{c={document:this.Kn(a,b),size:hy(b)}}).next(()=>c)}getEntries(a,b){let c=f1;return this.Qn(a,b,(a,b)=>{let d=this.Kn(a,b);c=c.insert(a,d)}).next(()=>c)}jn(a,b){let c=f1,d=new L(y.comparator);return this.Qn(a,b,(a,b)=>{let e=this.Kn(a,b);c=c.insert(a,e),d=d.insert(a,hy(b))}).next(()=>({documents:c,Wn:d}))}Qn(c,b,f){if(b.isEmpty())return d4.resolve();let a=new _(hT);b.forEach(b=>a=a.add(b));let d=IDBKeyRange.bound(hR(a.first()),hR(a.last())),e=a.getIterator(),g=e.getNext();return hQ(c).J({index:"documentKeyIndex",range:d},(d,a,b)=>{let c=y.fromSegments([...a.prefixPath,a.collectionGroup,a.documentId]);for(;g&&0>hT(g,c);)f(g,null),g=e.getNext();g&&g.isEqual(c)&&(f(g,a),g=e.hasNext()?e.getNext():null),g?b.q(hR(g)):b.done()}).next(()=>{for(;g;)f(g,null),g=e.hasNext()?e.getNext():null})}getAllFromCollection(c,a,b){let d=[a.popLast().toArray(),a.lastSegment(),g3(b.readTime),b.documentKey.path.isEmpty()?"":b.documentKey.path.lastSegment()],e=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return hQ(c).K(IDBKeyRange.bound(d,e,!0)).next(d=>{let b=f1;for(let a of d){let c=this.Kn(y.fromSegments(a.prefixPath.concat(a.collectionGroup,a.documentId)),a);b=b.insert(c.key,c)}return b})}getAllFromCollectionGroup(b,a,c,f){let g=f1,d=hS(a,c),e=hS(a,d0.max());return hQ(b).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(d,e,!0)},(d,a,c)=>{let b=this.Kn(y.fromSegments(a.prefixPath.concat(a.collectionGroup,a.documentId)),a);(g=g.insert(b.key,b)).size===f&&c.done()}).next(()=>g)}newChangeBuffer(a){return new hO(this,!!a&&a.trackRemovals)}getSize(a){return this.getMetadata(a).next(a=>a.byteSize)}getMetadata(a){return hP(a).get("remoteDocumentGlobalKey").next(a=>{var b;return!a&&dD(),a})}qn(a,b){return hP(a).put("remoteDocumentGlobalKey",b)}Kn(c,b){if(b){let a=function(c,a){let b;if(a.document)b=gA(c.ne,a.document,!!a.hasCommittedMutations);else if(a.noDocument){let d=y.fromSegments(a.noDocument.path),e=g5(a.noDocument.readTime);b=eV.newNoDocument(d,e),a.hasCommittedMutations&&b.setHasCommittedMutations()}else{if(!a.unknownDocument)return dD();{let f=y.fromSegments(a.unknownDocument.path),g=g5(a.unknownDocument.version);b=eV.newUnknownDocument(f,g)}}return a.readTime&&b.setReadTime(function(a){let b=new dR(a[0],a[1]);return dS.fromTimestamp(b)}(a.readTime)),b}(this.wt,b);if(!(a.isNoDocument()&&a.version.isEqual(dS.min())))return a}return eV.newInvalidDocument(c)}}function hN(a){return new hM(a)}class hO extends null{constructor(a,b){super(),this.zn=a,this.trackRemovals=b,this.Hn=new f0(a=>a.toString(),(a,b)=>a.isEqual(b))}applyChanges(b){let a=[],c=0,d=new _((a,b)=>aD(a.canonicalString(),b.canonicalString()));return this.changes.forEach((e,f)=>{let g=this.Hn.get(e);if(a.push(this.zn.removeEntry(b,e,g.readTime)),f.isValidDocument()){let h=g2(this.zn.wt,f);d=d.add(e.path.popLast());let i=hy(h);c+=i-g.size,a.push(this.zn.addEntry(b,e,h))}else if(c-=g.size,this.trackRemovals){let j=g2(this.zn.wt,f.convertToNoDocument(dS.min()));a.push(this.zn.addEntry(b,e,j))}}),d.forEach(c=>{a.push(this.zn.indexManager.addToCollectionParentIndex(b,c))}),a.push(this.zn.updateMetadata(b,c)),d4.waitFor(a)}getFromCache(a,b){return this.zn.Gn(a,b).next(a=>(this.Hn.set(b,{size:a.size,readTime:a.document.readTime}),a.document))}getAllFromCache(a,b){return this.zn.jn(a,b).next(({documents:a,Wn:b})=>(b.forEach((b,c)=>{this.Hn.set(b,{size:c,readTime:a.get(b).readTime})}),a))}}function hP(a){return gY(a,"remoteDocumentGlobal")}function hQ(a){return gY(a,"remoteDocumentsV14")}function hR(b){let a=b.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],a[a.length-1]]}function hS(c,b){let a=b.documentKey.path.toArray();return[c,g3(b.readTime),a.slice(0,a.length-2),a.length>0?a[a.length-1]:""]}function hT(e,f){let a=e.path.toArray(),b=f.path.toArray(),d=0;for(let c=0;c<a.length-2&&c<b.length-2;++c)if(d=aD(a[c],b[c]))return d;return(d=aD(a.length,b.length))||(d=aD(a[a.length-2],b[b.length-2]))||aD(a[a.length-1],b[b.length-1])}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */ class hU{constructor(a,b){this.overlayedDocument=a,this.mutatedFields=b}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ class hV{constructor(a,b,c,d){this.remoteDocumentCache=a,this.mutationQueue=b,this.documentOverlayCache=c,this.indexManager=d}getDocument(a,b){let c=null;return this.documentOverlayCache.getOverlay(a,b).next(d=>(c=d,this.getBaseDocument(a,b,c))).next(a=>(null!==c&&fP(c.mutation,a,em.empty(),dR.now()),a))}getDocuments(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.getLocalViewOfDocuments(a,b,ga()).next(()=>b))}getLocalViewOfDocuments(a,b,d=ga()){let c=f5();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,d).next(a=>{let b=f3();return a.forEach((a,c)=>{b=b.insert(a,c.overlayedDocument)}),b}))}getOverlayedDocuments(a,b){let c=f5();return this.populateOverlays(a,c,b).next(()=>this.computeViews(a,b,c,ga()))}populateOverlays(a,d,b){let c=[];return b.forEach(a=>{d.has(a)||c.push(a)}),this.documentOverlayCache.getOverlays(a,c).next(a=>{a.forEach((a,b)=>{d.set(a,b)})})}computeViews(a,b,d,e){let c=f1,f=f7(),g=f7();return b.forEach((g,a)=>{let b=d.get(a.key);e.has(a.key)&&(void 0===b||b.mutation instanceof fT)?c=c.insert(a.key,a):void 0!==b&&(f.set(a.key,b.mutation.getFieldMask()),fP(b.mutation,a,b.mutation.getFieldMask(),dR.now()))}),this.recalculateAndSaveOverlays(a,c).next(a=>(a.forEach((a,b)=>f.set(a,b)),b.forEach((b,c)=>{var a;return g.set(b,new hU(c,null!==(a=f.get(b))&& void 0!==a?a:null))}),g))}recalculateAndSaveOverlays(a,b){let c=f7(),d=new L((a,b)=>a-b),e=ga();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(a,b).next(a=>{for(let e of a)e.keys().forEach(a=>{let g=b.get(a);if(null===g)return;let f=c.get(a)||em.empty();f=e.applyToLocalView(g,f),c.set(a,f);let h=(d.get(e.batchId)||ga()).add(a);d=d.insert(e.batchId,h)})}).next(()=>{let f=[],g=d.getReverseIterator();for(;g.hasNext();){let h=g.getNext(),i=h.key,j=h.value,k=f6();j.forEach(a=>{if(!e.has(a)){let d=fN(b.get(a),c.get(a));null!==d&&k.set(a,d),e=e.add(a)}}),f.push(this.documentOverlayCache.saveOverlays(a,i,k))}return d4.waitFor(f)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(a,b){return this.remoteDocumentCache.getEntries(a,b).next(b=>this.recalculateAndSaveOverlays(a,b))}getDocumentsMatchingQuery(c,a,d){var b;return(b=a,y.isDocumentKey(b.path)&&null===b.collectionGroup&&0===b.filters.length)?this.getDocumentsMatchingDocumentQuery(c,a.path):fk(a)?this.getDocumentsMatchingCollectionGroupQuery(c,a,d):this.getDocumentsMatchingCollectionQuery(c,a,d)}getNextDocuments(a,b,c,d){return this.remoteDocumentCache.getAllFromCollectionGroup(a,b,c,d).next(e=>{let f=d-e.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(a,b,c.largestBatchId,d-e.size):d4.resolve(f5()),g=-1,h=e;return f.next(b=>d4.forEach(b,(c,b)=>(g<b.largestBatchId&&(g=b.largestBatchId),e.get(c)?d4.resolve():this.getBaseDocument(a,c,b).next(a=>{h=h.insert(c,a)}))).next(()=>this.populateOverlays(a,b,e)).next(()=>this.computeViews(a,h,b,ga())).next(a=>({batchId:g,changes:f4(a)})))})}getDocumentsMatchingDocumentQuery(a,b){return this.getDocument(a,new y(b)).next(a=>{let b=f3();return a.isFoundDocument()&&(b=b.insert(a.key,a)),b})}getDocumentsMatchingCollectionGroupQuery(a,b,d){let c=b.collectionGroup,e=f3();return this.indexManager.getCollectionParents(a,c).next(f=>d4.forEach(f,h=>{var f,g;let i=(f=b,g=h.child(c),new ff(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt));return this.getDocumentsMatchingCollectionQuery(a,i,d).next(a=>{a.forEach((a,b)=>{e=e.insert(a,b)})})}).next(()=>e))}getDocumentsMatchingCollectionQuery(a,b,c){let d;return this.remoteDocumentCache.getAllFromCollection(a,b.path,c).next(e=>(d=e,this.documentOverlayCache.getOverlaysForCollection(a,b.path,c.largestBatchId))).next(a=>{a.forEach((c,b)=>{let a=b.getKey();null===d.get(a)&&(d=d.insert(a,eV.newInvalidDocument(a)))});let c=f3();return d.forEach((e,d)=>{let f=a.get(e);void 0!==f&&fP(f.mutation,d,em.empty(),dR.now()),fr(b,d)&&(c=c.insert(e,d))}),c})}getBaseDocument(c,a,b){return null===b||1===b.mutation.type?this.remoteDocumentCache.getEntry(c,a):d4.resolve(eV.newInvalidDocument(a))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of DocumentOverlayCache.
 */ class hW{constructor(){this.overlays=new L(y.comparator),this.Xn=new Map}getOverlay(b,a){return d4.resolve(this.overlays.get(a))}getOverlays(b,a){let c=f5();return d4.forEach(a,a=>this.getOverlay(b,a).next(b=>{null!==b&&c.set(a,b)})).next(()=>c)}saveOverlays(b,c,a){return a.forEach((d,a)=>{this.ie(b,c,a)}),d4.resolve()}removeOverlaysForBatchId(c,d,a){let b=this.Xn.get(a);return void 0!==b&&(b.forEach(a=>this.overlays=this.overlays.remove(a)),this.Xn.delete(a)),d4.resolve()}getOverlaysForCollection(i,b,f){let c=f5(),g=b.length+1,h=new y(b.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){let a=d.getNext().value,e=a.getKey();if(!b.isPrefixOf(e.path))break;e.path.length===g&&a.largestBatchId>f&&c.set(a.getKey(),a)}return d4.resolve(c)}getOverlaysForCollectionGroup(j,g,h,i){let b=new L((a,b)=>a-b),d=this.overlays.getIterator();for(;d.hasNext();){let a=d.getNext().value;if(a.getKey().getCollectionGroup()===g&&a.largestBatchId>h){let c=b.get(a.largestBatchId);null===c&&(c=f5(),b=b.insert(a.largestBatchId,c)),c.set(a.getKey(),a)}}let e=f5(),f=b.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((a,b)=>e.set(a,b)),!(e.size()>=i)););return d4.resolve(e)}ie(f,b,a){let d=this.overlays.get(a.key);if(null!==d){let e=this.Xn.get(d.largestBatchId).delete(a.key);this.Xn.set(d.largestBatchId,e)}this.overlays=this.overlays.insert(a.key,new g_(b,a));let c=this.Xn.get(b);void 0===c&&(c=ga(),this.Xn.set(b,c)),this.Xn.set(b,c.add(a.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ class hX{constructor(){this.Zn=new _(hY.ts),this.es=new _(hY.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(b,c){let a=new hY(b,c);this.Zn=this.Zn.add(a),this.es=this.es.add(a)}ss(a,b){a.forEach(a=>this.addReference(a,b))}removeReference(a,b){this.rs(new hY(a,b))}os(a,b){a.forEach(a=>this.removeReference(a,b))}us(a){let b=new y(new dT([])),c=new hY(b,a),d=new hY(b,a+1),e=[];return this.es.forEachInRange([c,d],a=>{this.rs(a),e.push(a.key)}),e}cs(){this.Zn.forEach(a=>this.rs(a))}rs(a){this.Zn=this.Zn.delete(a),this.es=this.es.delete(a)}hs(a){let b=new y(new dT([])),c=new hY(b,a),d=new hY(b,a+1),e=ga();return this.es.forEachInRange([c,d],a=>{e=e.add(a.key)}),e}containsKey(a){let c=new hY(a,0),b=this.Zn.firstAfterOrEqual(c);return null!==b&&a.isEqual(b.key)}}class hY{constructor(a,b){this.key=a,this.ls=b}static ts(a,b){return y.comparator(a.key,b.key)||aD(a.ls,b.ls)}static ns(a,b){return aD(a.ls,b.ls)||y.comparator(a.key,b.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hZ{constructor(a,b){this.indexManager=a,this.referenceDelegate=b,this.mutationQueue=[],this.fs=1,this.ds=new _(hY.ts)}checkEmpty(a){return d4.resolve(0===this.mutationQueue.length)}addMutationBatch(e,f,g,a){let b=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let c=new gZ(b,f,g,a);for(let d of(this.mutationQueue.push(c),a))this.ds=this.ds.add(new hY(d.key,b)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return d4.resolve(c)}lookupMutationBatch(b,a){return d4.resolve(this._s(a))}getNextMutationBatchAfterBatchId(d,c){let a=this.ws(c+1),b=a<0?0:a;return d4.resolve(this.mutationQueue.length>b?this.mutationQueue[b]:null)}getHighestUnacknowledgedBatchId(){return d4.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(a){return d4.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,a){let b=new hY(a,0),c=new hY(a,Number.POSITIVE_INFINITY),d=[];return this.ds.forEachInRange([b,c],a=>{let b=this._s(a.ls);d.push(b)}),d4.resolve(d)}getAllMutationBatchesAffectingDocumentKeys(c,a){let b=new _(aD);return a.forEach(a=>{let c=new hY(a,0),d=new hY(a,Number.POSITIVE_INFINITY);this.ds.forEachInRange([c,d],a=>{b=b.add(a.ls)})}),d4.resolve(this.gs(b))}getAllMutationBatchesAffectingQuery(f,c){let b=c.path,g=b.length+1,a=b;y.isDocumentKey(a)||(a=a.child(""));let d=new hY(new y(a),0),e=new _(aD);return this.ds.forEachWhile(a=>{let c=a.key.path;return!!b.isPrefixOf(c)&&(c.length===g&&(e=e.add(a.ls)),!0)},d),d4.resolve(this.gs(e))}gs(a){let b=[];return a.forEach(c=>{let a=this._s(c);null!==a&&b.push(a)}),b}removeMutationBatch(b,a){var c;0===this.ys(a.batchId,"removed")||dD(),this.mutationQueue.shift();let d=this.ds;return d4.forEach(a.mutations,c=>{let e=new hY(c.key,a.batchId);return d=d.delete(e),this.referenceDelegate.markPotentiallyOrphaned(b,c.key)}).next(()=>{this.ds=d})}In(a){}containsKey(d,a){let c=new hY(a,0),b=this.ds.firstAfterOrEqual(c);return d4.resolve(a.isEqual(b&&b.key))}performConsistencyCheck(a){return this.mutationQueue.length,d4.resolve()}ys(a,b){return this.ws(a)}ws(a){return 0===this.mutationQueue.length?0:a-this.mutationQueue[0].batchId}_s(b){let a=this.ws(b);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */ class h${constructor(a){this.ps=a,this.docs=new L(y.comparator),this.size=0}setIndexManager(a){this.indexManager=a}addEntry(e,a){let b=a.key,c=this.docs.get(b),f=c?c.size:0,d=this.ps(a);return this.docs=this.docs.insert(b,{document:a.mutableCopy(),size:d}),this.size+=d-f,this.indexManager.addToCollectionParentIndex(e,b.path.popLast())}removeEntry(a){let b=this.docs.get(a);b&&(this.docs=this.docs.remove(a),this.size-=b.size)}getEntry(c,a){let b=this.docs.get(a);return d4.resolve(b?b.document.mutableCopy():eV.newInvalidDocument(a))}getEntries(c,a){let b=f1;return a.forEach(a=>{let c=this.docs.get(a);b=b.insert(a,c?c.document.mutableCopy():eV.newInvalidDocument(a))}),d4.resolve(b)}getAllFromCollection(h,a,f){let b=f1,g=new y(a.child("")),d=this.docs.getIteratorFrom(g);for(;d.hasNext();){let{key:e,value:{document:c}}=d.getNext();if(!a.isPrefixOf(e.path))break;e.path.length>a.length+1||0>=d1(d_(c),f)||(b=b.insert(c.key,c.mutableCopy()))}return d4.resolve(b)}getAllFromCollectionGroup(a,b,c,d){dD()}Is(a,b){return d4.forEach(this.docs,a=>b(a))}newChangeBuffer(a){return new h_(this)}getSize(a){return d4.resolve(this.size)}}class h_ extends aK{constructor(a){super(),this.zn=a}applyChanges(b){let a=[];return this.changes.forEach((d,c)=>{c.isValidDocument()?a.push(this.zn.addEntry(b,c)):this.zn.removeEntry(d)}),d4.waitFor(a)}getFromCache(a,b){return this.zn.getEntry(a,b)}getAllFromCache(a,b){return this.zn.getEntries(a,b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */ class h0{constructor(a,b){this.bs={},this.overlays={},this.Ps=new aG(0),this.vs=!1,this.vs=!0,this.referenceDelegate=a(this),this.Vs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.persistence=a,this.Ts=new f0(a=>eY(a),eZ),this.lastRemoteSnapshotVersion=dS.min(),this.highestTargetId=0,this.Es=0,this.As=new hX,this.targetCount=0,this.Rs=hE.An()}forEachTarget(a,b){return this.Ts.forEach((c,a)=>b(a)),d4.resolve()}getLastRemoteSnapshotVersion(a){return d4.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(a){return d4.resolve(this.Es)}allocateTargetId(a){return this.highestTargetId=this.Rs.next(),d4.resolve(this.highestTargetId)}setTargetsMetadata(c,a,b){return b&&(this.lastRemoteSnapshotVersion=b),a>this.Es&&(this.Es=a),d4.resolve()}vn(a){this.Ts.set(a.target,a);let b=a.targetId;b>this.highestTargetId&&(this.Rs=new hE(b),this.highestTargetId=b),a.sequenceNumber>this.Es&&(this.Es=a.sequenceNumber)}addTargetData(b,a){return this.vn(a),this.targetCount+=1,d4.resolve()}updateTargetData(b,a){return this.vn(a),d4.resolve()}removeTargetData(b,a){return this.Ts.delete(a.target),this.As.us(a.targetId),this.targetCount-=1,d4.resolve()}removeTargets(b,c,d){let e=0,a=[];return this.Ts.forEach((g,f)=>{f.sequenceNumber<=c&&null===d.get(f.targetId)&&(this.Ts.delete(g),a.push(this.removeMatchingKeysForTargetId(b,f.targetId)),e++)}),d4.waitFor(a).next(()=>e)}getTargetCount(a){return d4.resolve(this.targetCount)}getTargetData(c,a){let b=this.Ts.get(a)||null;return d4.resolve(b)}addMatchingKeys(c,a,b){return this.As.ss(a,b),d4.resolve()}removeMatchingKeys(e,a,b){this.As.os(a,b);let c=this.persistence.referenceDelegate,d=[];return c&&a.forEach(a=>{d.push(c.markPotentiallyOrphaned(e,a))}),d4.waitFor(d)}removeMatchingKeysForTargetId(b,a){return this.As.us(a),d4.resolve()}getMatchingKeysForTargetId(c,a){let b=this.As.hs(a);return d4.resolve(b)}containsKey(b,a){return d4.resolve(this.As.containsKey(a))}}(this),this.indexManager=new /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory implementation of IndexManager.
 */ class{constructor(){this.ze=new ho}addToCollectionParentIndex(b,a){return this.ze.add(a),d4.resolve()}getCollectionParents(b,a){return d4.resolve(this.ze.getEntries(a))}addFieldIndex(a,b){return d4.resolve()}deleteFieldIndex(a,b){return d4.resolve()}getDocumentsMatchingTarget(a,b){return d4.resolve(null)}getIndexType(a,b){return d4.resolve(0)}getFieldIndexes(a,b){return d4.resolve([])}getNextCollectionGroupToUpdate(a){return d4.resolve(null)}getMinOffset(a,b){return d4.resolve(d0.min())}getMinOffsetFromCollectionGroup(a,b){return d4.resolve(d0.min())}updateCollectionGroup(a,b,c){return d4.resolve()}updateIndexEntries(a,b){return d4.resolve()}},this.remoteDocumentCache=function(a){return new h$(a)}(a=>this.referenceDelegate.Ss(a)),this.wt=new g1(b),this.Ds=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a){this.wt=a,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(b,a){return d4.resolve(this.Jn.get(a))}saveBundleMetadata(c,b){var a;return this.Jn.set(b.id,{id:(a=b).id,version:a.version,createTime:gq(a.createTime)}),d4.resolve()}getNamedQuery(b,a){return d4.resolve(this.Yn.get(a))}saveNamedQuery(c,b){var a;return this.Yn.set(b.name,{name:(a=b).name,query:g9(a.bundledQuery),readTime:gq(a.readTime)}),d4.resolve()}}(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(a){return this.indexManager}getDocumentOverlayCache(b){let a=this.overlays[b.toKey()];return a||(a=new hW,this.overlays[b.toKey()]=a),a}getMutationQueue(b,c){let a=this.bs[b.toKey()];return a||(a=new hZ(c,this.referenceDelegate),this.bs[b.toKey()]=a),a}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(a,d,b){dz("MemoryPersistence","Starting transaction:",a);let c=new h1(this.Ps.next());return this.referenceDelegate.Cs(),b(c).next(a=>this.referenceDelegate.xs(c).next(()=>a)).toPromise().then(a=>(c.raiseOnCommittedEvent(),a))}Ns(a,b){return d4.or(Object.values(this.bs).map(c=>()=>c.containsKey(a,b)))}}class h1 extends aF{constructor(a){super(),this.currentSequenceNumber=a}}class h2{constructor(a){this.persistence=a,this.ks=new hX,this.Os=null}static Ms(a){return new h2(a)}get Fs(){if(this.Os)return this.Os;throw dD()}addReference(c,b,a){return this.ks.addReference(a,b),this.Fs.delete(a.toString()),d4.resolve()}removeReference(c,b,a){return this.ks.removeReference(a,b),this.Fs.add(a.toString()),d4.resolve()}markPotentiallyOrphaned(b,a){return this.Fs.add(a.toString()),d4.resolve()}removeTarget(b,a){this.ks.us(a.targetId).forEach(a=>this.Fs.add(a.toString()));let c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(b,a.targetId).next(a=>{a.forEach(a=>this.Fs.add(a.toString()))}).next(()=>c.removeTargetData(b,a))}Cs(){this.Os=new Set}xs(a){let b=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d4.forEach(this.Fs,c=>{let d=y.fromPath(c);return this.$s(a,d).next(a=>{a||b.removeEntry(d,dS.min())})}).next(()=>(this.Os=null,b.apply(a)))}updateLimboDocument(a,b){return this.$s(a,b).next(a=>{a?this.Fs.delete(b.toString()):this.Fs.add(b.toString())})}Ss(a){return 0}$s(a,b){return d4.or([()=>d4.resolve(this.ks.containsKey(b)),()=>this.persistence.getTargetCache().containsKey(a,b),()=>this.persistence.Ns(a,b)])}}function h3(a){a.createObjectStore("targetDocuments",{keyPath:null}).createIndex("documentTargetsIndex",null,{unique:!0}),a.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",null,{unique:!0}),a.createObjectStore("targetGlobal")}let h4="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class h5{constructor(c,a,d,e,f,g,h,i,j,b,l=14){if(this.allowTabSynchronization=c,this.persistenceKey=a,this.clientId=d,this.js=f,this.window=g,this.document=h,this.Ws=j,this.zs=b,this.Hs=l,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=a=>Promise.resolve(),!h5.V())throw new dF(dE.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Provides LRU functionality for IndexedDB persistence. */ class{constructor(c,d){var a,b;this.db=c,this.garbageCollector=(a=this,b=d,new class a{constructor(a,b){this.On=a,this.params=b}calculateTargetCount(a,b){return this.On.Mn(a).next(a=>Math.floor(b/100*a))}nthSequenceNumber(b,a){if(0===a)return d4.resolve(aG.ot);let c=new hJ(a);return this.On.forEachTarget(b,a=>c.xn(a.sequenceNumber)).next(()=>this.On.Fn(b,a=>c.xn(a))).next(()=>c.maxValue)}removeTargets(a,b,c){return this.On.removeTargets(a,b,c)}removeOrphanedDocuments(a,b){return this.On.removeOrphanedDocuments(a,b)}collect(a,b){return -1===this.params.cacheSizeCollectionThreshold?(dz("LruGarbageCollector","Garbage collection skipped; disabled"),d4.resolve(hw)):this.getCacheSize(a).next(c=>c<this.params.cacheSizeCollectionThreshold?(dz("LruGarbageCollector",`Garbage collection skipped; Cache size ${c} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hw):this.$n(a,b))}getCacheSize(a){return this.On.getCacheSize(a)}$n(a,b){let c,d,e,f,g,h,i,j=Date.now();return this.calculateTargetCount(a,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(dz("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),d=this.params.maximumSequenceNumbersToCollect):d=b,f=Date.now(),this.nthSequenceNumber(a,d))).next(d=>(c=d,g=Date.now(),this.removeTargets(a,c,b))).next(b=>(e=b,h=Date.now(),this.removeOrphanedDocuments(a,c))).next(a=>(i=Date.now(),dy()<=LogLevel.DEBUG&&dz("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-j}ms
	Determined least recently used ${d} in `+(g-f)+"ms\n"+`	Removed ${e} targets in `+(h-g)+"ms\n"+`	Removed ${a} documents in `+(i-h)+"ms\n"+`Total Duration: ${i-j}ms`),d4.resolve({didRun:!0,sequenceNumbersCollected:d,targetsRemoved:e,documentsRemoved:a})))}}(a,b))}Mn(a){let b=this.Bn(a);return this.db.getTargetCache().getTargetCount(a).next(a=>b.next(b=>a+b))}Bn(a){let b=0;return this.Fn(a,a=>{b++}).next(()=>b)}forEachTarget(a,b){return this.db.getTargetCache().forEachTarget(a,b)}Fn(a,b){return this.Ln(a,(c,a)=>b(a))}addReference(a,c,b){return hL(a,b)}removeReference(a,c,b){return hL(a,b)}removeTargets(a,b,c){return this.db.getTargetCache().removeTargets(a,b,c)}markPotentiallyOrphaned(a,b){return hL(a,b)}Un(b,c){var a,d;let e;return a=b,d=c,e=!1,hD(a).Y(b=>hA(a,b,d).next(a=>(a&&(e=!0),d4.resolve(!a)))).next(()=>e)}removeOrphanedDocuments(a,b){let c=this.db.getRemoteDocumentCache().newChangeBuffer(),d=[],e=0;return this.Ln(a,(f,g)=>{if(g<=b){let h=this.Un(a,f).next(b=>{if(!b)return e++,c.getEntry(a,f).next(()=>(c.removeEntry(f,dS.min()),hH(a).delete([0,gP(f.path)])))});d.push(h)}}).next(()=>d4.waitFor(d)).next(()=>c.apply(a)).next(()=>e)}removeTarget(a,b){let c=b.withSequenceNumber(a.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(a,c)}updateLimboDocument(a,b){return hL(a,b)}Ln(a,c){let b=hH(a),d,e=aG.ot;return b.J({index:"documentTargetsIndex"},([a,g],{path:b,sequenceNumber:f})=>{0===a?(e!==aG.ot&&c(new y(gR(d)),e),e=f,d=b):e=aG.ot}).next(()=>{e!==aG.ot&&c(new y(gR(d)),e)})}getCacheSize(a){return this.db.getRemoteDocumentCache().getSize(a)}}(this,e),this.ei=a+"main",this.wt=new g1(i),this.ni=new d6(this.ei,this.Hs,new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Performs database creation and schema upgrades. */ class{constructor(a){this.wt=a}O(d,g,b,c){var e,f;let h=new d5("createOrUpgrade",g);b<1&&c>=1&&(function(a){a.createObjectStore("owner")}(d),(e=d).createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0}),e.createObjectStore("documentMutations"),h3(d),function(a){a.createObjectStore("remoteDocuments")}(d));let a=d4.resolve();return b<3&&c>=3&&(0!==b&&((f=d).deleteObjectStore("targetDocuments"),f.deleteObjectStore("targets"),f.deleteObjectStore("targetGlobal"),h3(d)),a=a.next(()=>(function(a){let b=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:dS.min().toTimestamp(),targetCount:0};return b.put("targetGlobalKey",c)})(h))),b<4&&c>=4&&(0!==b&&(a=a.next(()=>{var a,b;return a=d,(b=h).store("mutations").K().next(c=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",null,{unique:!0});let e=b.store("mutations"),d=c.map(a=>e.put(a));return d4.waitFor(d)})})),a=a.next(()=>{!function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})}(d)})),b<5&&c>=5&&(a=a.next(()=>this.Bs(h))),b<6&&c>=6&&(a=a.next(()=>((function(a){a.createObjectStore("remoteDocumentGlobal")})(d),this.Ls(h)))),b<7&&c>=7&&(a=a.next(()=>this.Us(h))),b<8&&c>=8&&(a=a.next(()=>this.qs(d,h))),b<9&&c>=9&&(a=a.next(()=>{var a;(a=d).objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})),b<10&&c>=10&&(a=a.next(()=>this.Ks(h))),b<11&&c>=11&&(a=a.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(d),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(d)})),b<12&&c>=12&&(a=a.next(()=>{!function(b){let a=b.createObjectStore("documentOverlays",{keyPath:null});a.createIndex("collectionPathOverlayIndex",null,{unique:!1}),a.createIndex("collectionGroupOverlayIndex",null,{unique:!1})}(d)})),b<13&&c>=13&&(a=a.next(()=>(function(b){let a=b.createObjectStore("remoteDocumentsV14",{keyPath:null});a.createIndex("documentKeyIndex",null),a.createIndex("collectionGroupIndex",null)})(d)).next(()=>this.Gs(d,h)).next(()=>d.deleteObjectStore("remoteDocuments"))),b<14&&c>=14&&(a=a.next(()=>this.Qs(d,h))),b<15&&c>=15&&(a=a.next(()=>{var a;(a=d).createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:null}).createIndex("sequenceNumberIndex",null,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:null}).createIndex("documentKeyIndex",null,{unique:!1})})),a}Ls(a){let b=0;return a.store("remoteDocuments").J((c,a)=>{b+=hy(a)}).next(()=>{let c={byteSize:b};return a.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",c)})}Bs(a){let b=a.store("mutationQueues"),c=a.store("mutations");return b.K().next(b=>d4.forEach(b,b=>{let d=IDBKeyRange.bound([b.userId,-1],[b.userId,b.lastAcknowledgedBatchId]);return c.K("userMutationsIndex",d).next(c=>d4.forEach(c,c=>{var d;(d=c.userId===b.userId)||dD();let e=g6(this.wt,c);return hx(a,b.userId,e).next(()=>{})}))}))}Us(a){let b=a.store("targetDocuments"),c=a.store("remoteDocuments");return a.store("targetGlobal").get("targetGlobalKey").next(a=>{let d=[];return c.J((c,h)=>{var e;let f=new dT(c),g=[0,gP(e=f)];d.push(b.get(g).next(d=>{var c;return d?d4.resolve():(c=f,b.put({targetId:0,path:gP(c),sequenceNumber:a.highestListenSequenceNumber}))}))}).next(()=>d4.waitFor(d))})}qs(b,a){b.createObjectStore("collectionParents",{keyPath:null});let c=a.store("collectionParents"),d=new ho,e=a=>{if(d.add(a)){let b=a.lastSegment(),e=a.popLast();return c.put({collectionId:b,parent:gP(e)})}};return a.store("remoteDocuments").J({H:!0},(a,c)=>{let b=new dT(a);return e(b.popLast())}).next(()=>a.store("documentMutations").J({H:!0},([c,a,d],f)=>{let b=gR(a);return e(b.popLast())}))}Ks(a){let b=a.store("targets");return b.J((e,a)=>{let c=g7(a),d=g8(this.wt,c);return b.put(d)})}Gs(c,a){let b=a.store("remoteDocuments"),d=[];return b.J((h,b)=>{var c;let f=a.store("remoteDocumentsV14"),e=((c=b).document?new y(dT.fromString(c.document.name).popFirst(5)):c.noDocument?y.fromSegments(c.noDocument.path):c.unknownDocument?y.fromSegments(c.unknownDocument.path):dD()).path.toArray(),g={prefixPath:e.slice(0,e.length-2),collectionGroup:e[e.length-2],documentId:e[e.length-1],readTime:b.readTime||[0,0],unknownDocument:b.unknownDocument,noDocument:b.noDocument,document:b.document,hasCommittedMutations:!!b.hasCommittedMutations};d.push(f.put(g))}).next(()=>d4.waitFor(d))}Qs(c,a){let b=a.store("mutations"),d=hN(this.wt),e=new h0(h2.Ms,this.wt.ne);return b.K().next(b=>{let c=new Map;return b.forEach(a=>{var b;let d=null!==(b=c.get(a.userId))&& void 0!==b?b:ga();g6(this.wt,a).keys().forEach(a=>d=d.add(a)),c.set(a.userId,d)}),d4.forEach(c,(f,g)=>{let b=new k(g),h=hf.se(this.wt,b),c=e.getIndexManager(b),i=hz.se(b,this.wt,c,e.referenceDelegate);return new hV(d,i,h,c).recalculateAndSaveOverlaysForDocumentKeys(new gX(a,aG.ot),f).next()})})}}(this.wt)),this.Vs=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(a,b){this.referenceDelegate=a,this.wt=b}allocateTargetId(a){return this.bn(a).next(b=>{let c=new hE(b.highestTargetId);return b.highestTargetId=c.next(),this.Pn(a,b).next(()=>b.highestTargetId)})}getLastRemoteSnapshotVersion(a){return this.bn(a).next(a=>dS.fromTimestamp(new dR(a.lastRemoteSnapshotVersion.seconds,a.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(a){return this.bn(a).next(a=>a.highestListenSequenceNumber)}setTargetsMetadata(a,b,c){return this.bn(a).next(d=>(d.highestListenSequenceNumber=b,c&&(d.lastRemoteSnapshotVersion=c.toTimestamp()),b>d.highestListenSequenceNumber&&(d.highestListenSequenceNumber=b),this.Pn(a,d)))}addTargetData(a,b){return this.vn(a,b).next(()=>this.bn(a).next(c=>(c.targetCount+=1,this.Vn(b,c),this.Pn(a,c))))}updateTargetData(a,b){return this.vn(a,b)}removeTargetData(a,b){return this.removeMatchingKeysForTargetId(a,b.targetId).next(()=>hF(a).delete(b.targetId)).next(()=>this.bn(a)).next(b=>{var c;return b.targetCount>0||dD(),b.targetCount-=1,this.Pn(a,b)})}removeTargets(a,b,c){let d=0,e=[];return hF(a).J((h,g)=>{let f=g7(g);f.sequenceNumber<=b&&null===c.get(f.targetId)&&(d++,e.push(this.removeTargetData(a,f)))}).next(()=>d4.waitFor(e)).next(()=>d)}forEachTarget(a,b){return hF(a).J((d,a)=>{let c=g7(a);b(c)})}bn(a){return hG(a).get("targetGlobalKey").next(a=>{var b;return null!==a||dD(),a})}Pn(a,b){return hG(a).put("targetGlobalKey",b)}vn(a,b){return hF(a).put(g8(this.wt,b))}Vn(a,b){let c=!1;return a.targetId>b.highestTargetId&&(b.highestTargetId=a.targetId,c=!0),a.sequenceNumber>b.highestListenSequenceNumber&&(b.highestListenSequenceNumber=a.sequenceNumber,c=!0),c}getTargetCount(a){return this.bn(a).next(a=>a.targetCount)}getTargetData(b,c){let a=eY(c),d=IDBKeyRange.bound([a,Number.NEGATIVE_INFINITY],[a,Number.POSITIVE_INFINITY]),e=null;return hF(b).J({range:d,index:"queryTargetsIndex"},(f,b,d)=>{let a=g7(b);eZ(c,a.target)&&(e=a,d.done())}).next(()=>e)}addMatchingKeys(a,b,d){let c=[],e=hH(a);return b.forEach(b=>{let f=gP(b.path);c.push(e.put({targetId:d,path:f})),c.push(this.referenceDelegate.addReference(a,d,b))}),d4.waitFor(c)}removeMatchingKeys(a,b,c){let d=hH(a);return d4.forEach(b,b=>{let e=gP(b.path);return d4.waitFor([d.delete([c,e]),this.referenceDelegate.removeReference(a,c,b)])})}removeMatchingKeysForTargetId(b,a){let c=hH(b),d=IDBKeyRange.bound([a],[a+1],!1,!0);return c.delete(d)}getMatchingKeysForTargetId(b,a){let c=IDBKeyRange.bound([a],[a+1],!1,!0),d=hH(b),e=ga();return d.J({range:c,H:!0},(a,d,f)=>{let b=gR(a[1]),c=new y(b);e=e.add(c)}).next(()=>e)}containsKey(b,c){var d;let a=gP(c.path),e=IDBKeyRange.bound([a],[(d=a)+"\0"],!1,!0),f=0;return hH(b).J({index:"documentTargetsIndex",H:!0,range:e},([a,c],d,b)=>{0!==a&&(f++,b.done())}).next(()=>f>0)}te(a,b){return hF(a).get(b).next(a=>a?g7(a):null)}}(this.referenceDelegate,this.wt),this.remoteDocumentCache=hN(this.wt),this.Ds=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{getBundleMetadata(a,b){return hd(a).get(b).next(b=>{var a;if(b)return{id:(a=b).bundleId,createTime:g5(a.createTime),version:a.version}})}saveBundleMetadata(b,c){var a;return hd(b).put({bundleId:(a=c).id,createTime:g4(gq(a.createTime)),version:a.version})}getNamedQuery(a,b){return he(a).get(b).next(b=>{var a;if(b)return{name:(a=b).name,query:g9(a.bundledQuery),readTime:g5(a.readTime)}})}saveNamedQuery(b,c){var a;return he(b).put({name:(a=c).name,readTime:g4(gq(a.readTime)),bundledQuery:a.bundledQuery})}},this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===b&&dA("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new dF(dE.FAILED_PRECONDITION,h4);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",a=>this.Vs.getHighestSequenceNumber(a))}).then(a=>{this.Ps=new aG(a,this.Ws)}).then(()=>{this.vs=!0}).catch(a=>(this.ni&&this.ni.close(),Promise.reject(a)))}ci(a){return this.ti=async b=>{if(this.started)return a(b)},a(this.isPrimary)}setDatabaseDeletedListener(a){this.ni.F(async b=>{null===b.newVersion&&await a()})}setNetworkEnabled(a){this.networkEnabled!==a&&(this.networkEnabled=a,this.js.enqueueAndForget(async()=>{this.started&&await this.ii()}))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",a=>h7(a).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ai(a).next(a=>{a||(this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)))})}).next(()=>this.hi(a)).next(b=>this.isPrimary&&!b?this.li(a).next(()=>!1):!!b&&this.fi(a).next(()=>!0))).catch(a=>{if(d9(a))return dz("IndexedDbPersistence","Failed to extend owner lease: ",a),this.isPrimary;if(!this.allowTabSynchronization)throw a;return dz("IndexedDbPersistence","Releasing owner lease after error during lease refresh",a),!1}).then(a=>{this.isPrimary!==a&&this.js.enqueueRetryable(()=>this.ti(a)),this.isPrimary=a})}ai(a){return h6(a).get("owner").next(a=>d4.resolve(this.di(a)))}_i(a){return h7(a).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();let a=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",a=>{let b=gY(a,"clientMetadata");return b.K().next(a=>{let d=this.gi(a,18e5),c=a.filter(a=>-1===d.indexOf(a));return d4.forEach(c,a=>b.delete(a.clientId)).next(()=>c)})}).catch(()=>[]);if(this.si)for(let b of a)this.si.removeItem(this.yi(b.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ii().then(()=>this.wi()).then(()=>this.ui()))}di(a){return!!a&&a.ownerId===this.clientId}hi(a){return this.zs?d4.resolve(!0):h6(a).get("owner").next(b=>{if(null!==b&&this.mi(b.leaseTimestampMs,5e3)&&!this.pi(b.ownerId)){if(this.di(b)&&this.networkEnabled)return!0;if(!this.di(b)){if(!b.allowTabSynchronization)throw new dF(dE.FAILED_PRECONDITION,h4);return!1}}return!(!this.networkEnabled||!this.inForeground)||h7(a).K().next(a=>void 0===this.gi(a,5e3).find(a=>{if(this.clientId!==a.clientId){let b=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(b||c&&d)return!0}return!1}))}).next(a=>(this.isPrimary!==a&&dz("IndexedDbPersistence",`Client ${a?"is":"is not"} eligible for a primary lease.`),a))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],a=>{let b=new gX(a,aG.ot);return this.li(b).next(()=>this._i(b))}),this.ni.close(),this.Ai()}gi(a,b){return a.filter(a=>this.mi(a.updateTimeMs,b)&&!this.pi(a.clientId))}Ri(){return this.runTransaction("getActiveClients","readonly",a=>h7(a).K().next(a=>this.gi(a,18e5).map(a=>a.clientId)))}get started(){return this.vs}getMutationQueue(a,b){return hz.se(a,this.wt,b,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(a){return new hq(a,this.wt.ne.databaseId)}getDocumentOverlayCache(a){return hf.se(this.wt,a)}getBundleCache(){return this.Ds}runTransaction(b,c,e){var a;dz("IndexedDbPersistence","Starting transaction:",b);let d=15===(a=this.Hs)?gW:14===a?aJ:13===a?aI:12===a?gV:11===a?aH:void dD(),f;return this.ni.runTransaction(b,"readonly"===c?"readonly":"readwrite",d,a=>(f=new gX(a,this.Ps?this.Ps.next():aG.ot),"readwrite-primary"===c?this.ai(f).next(a=>!!a||this.hi(f)).next(a=>{if(!a)throw dA(`Failed to obtain primary lease for action '${b}'.`),this.isPrimary=!1,this.js.enqueueRetryable(()=>this.ti(!1)),new dF(dE.FAILED_PRECONDITION,d2);return e(f)}).next(a=>this.fi(f).next(()=>a)):this.bi(f).next(()=>e(f)))).then(a=>(f.raiseOnCommittedEvent(),a))}bi(a){return h6(a).get("owner").next(a=>{if(null!==a&&this.mi(a.leaseTimestampMs,5e3)&&!this.pi(a.ownerId)&&!this.di(a)&&!(this.zs||this.allowTabSynchronization&&a.allowTabSynchronization))throw new dF(dE.FAILED_PRECONDITION,h4)})}fi(a){let b={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return h6(a).put("owner",b)}static V(){return d6.V()}li(a){let b=h6(a);return b.get("owner").next(a=>this.di(a)?(dz("IndexedDbPersistence","Releasing primary lease."),b.delete("owner")):d4.resolve())}mi(a,c){let b=Date.now();return!(a<b-c)&&(!(a>b)||(dA(`Detected an update time that is in the future: ${a} > ${b}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.ii()))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var a;"function"==typeof(null===(a=this.window)|| void 0===a?void 0:a.addEventListener)&&(this.Js=()=>{this.Ii(),isSafari()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(b){var a;try{let c=null!==(null===(a=this.si)|| void 0===a?void 0:a.getItem(this.yi(b)));return dz("IndexedDbPersistence",`Client '${b}' ${c?"is":"is not"} zombied in LocalStorage`),c}catch(d){return dA("IndexedDbPersistence","Failed to get zombied client id.",d),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(a){dA("Failed to set zombie client id.",a)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(a){}}yi(a){return`firestore_zombie_${this.persistenceKey}_${a}`}}function h6(a){return gY(a,"owner")}function h7(a){return gY(a,"clientMetadata")}function h8(a,c){let b=a.projectId;return a.isDefaultDatabase||(b+="."+a.database),"firestore/"+c+"/"+b+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */ class h9{constructor(a,b,c,d){this.targetId=a,this.fromCache=b,this.Pi=c,this.vi=d}static Vi(e,d){let a=ga(),b=ga();for(let c of d.docChanges)switch(c.type){case 0:a=a.add(c.doc.key);break;case 1:b=b.add(c.doc.key)}return new h9(e,d.fromCache,a,b)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */ class ia{constructor(){this.Si=!1}initialize(a,b){this.Di=a,this.indexManager=b,this.Si=!0}getDocumentsMatchingQuery(a,b,c,d){return this.Ci(a,b).next(e=>e||this.xi(a,b,d,c)).next(c=>c||this.Ni(a,b))}Ci(a,b){return d4.resolve(null)}xi(b,c,d,e){var a;return 0===(a=c).filters.length&&null===a.limit&&null==a.startAt&&null==a.endAt&&(0===a.explicitOrderBy.length||1===a.explicitOrderBy.length&&a.explicitOrderBy[0].field.isKeyField())||e.isEqual(dS.min())?this.Ni(b,c):this.Di.getDocuments(b,d).next(f=>{let a=this.ki(c,f);return this.Oi(c,a,d,e)?this.Ni(b,c):(dy()<=ah.in.DEBUG&&dz("QueryEngine","Re-using previous result from %s to execute query: %s",e.toString(),fq(c)),this.Mi(b,a,c,d$(e,-1)))})}ki(a,b){let c=new _(ft(a));return b.forEach((d,b)=>{fr(a,b)&&(c=c.add(b))}),c}Oi(c,a,d,e){if(null===c.limit)return!1;if(d.size!==a.size)return!0;let b="F"===c.limitType?a.last():a.first();return!!b&&(b.hasPendingWrites||b.version.compareTo(e)>0)}Ni(b,a){return dy()<=ah.in.DEBUG&&dz("QueryEngine","Using full collection scan to execute query:",fq(a)),this.Di.getDocumentsMatchingQuery(b,a,d0.min())}Mi(a,d,b,c){return this.Di.getDocumentsMatchingQuery(a,b,c).next(a=>(d.forEach(b=>{a=a.insert(b.key,b)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */ class ib{constructor(a,b,c,d){this.persistence=a,this.Fi=b,this.wt=d,this.$i=new L(aD),this.Bi=new f0(a=>eY(a),eZ),this.Li=new Map,this.Ui=a.getRemoteDocumentCache(),this.Vs=a.getTargetCache(),this.Ds=a.getBundleCache(),this.qi(c)}qi(a){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(a),this.indexManager=this.persistence.getIndexManager(a),this.mutationQueue=this.persistence.getMutationQueue(a,this.indexManager),this.localDocuments=new hV(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(a){return this.persistence.runTransaction("Collect garbage","readwrite-primary",b=>a.collect(b,this.$i))}}function ic(a,b,c,d){return new ib(a,b,c,d)}async function id(a,d){var b;let c=b=a;return await c.persistence.runTransaction("Handle user change","readonly",a=>{let b;return c.mutationQueue.getAllMutationBatches(a).next(e=>(b=e,c.qi(d),c.mutationQueue.getAllMutationBatches(a))).next(g=>{let h=[],i=[],d=ga();for(let e of b)for(let j of(h.push(e.batchId),e.mutations))d=d.add(j.key);for(let f of g)for(let k of(i.push(f.batchId),f.mutations))d=d.add(k.key);return c.localDocuments.getDocuments(a,d).next(a=>({Ki:a,removedBatchIds:h,addedBatchIds:i}))})})}function ie(a){var b;let c=b=a;return c.persistence.runTransaction("Get last remote snapshot version","readonly",a=>c.Vs.getLastRemoteSnapshotVersion(a))}function ig(a,b,c){let d=ga(),e=ga();return c.forEach(a=>d=d.add(a)),b.getEntries(a,d).next(d=>{let a=f1;return c.forEach((f,c)=>{let g=d.get(f);c.isFoundDocument()!==g.isFoundDocument()&&(e=e.add(f)),c.isNoDocument()&&c.version.isEqual(dS.min())?(b.removeEntry(f,c.readTime),a=a.insert(f,c)):!g.isValidDocument()||c.version.compareTo(g.version)>0||0===c.version.compareTo(g.version)&&g.hasPendingWrites?(b.addEntry(c),a=a.insert(f,c)):dz("LocalStore","Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",c.version)}),{Gi:a,Qi:e}})}function ih(a,d){var b;let c=b=a;return c.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===d&&(d=-1),c.mutationQueue.getNextMutationBatchAfterBatchId(a,d)))}function ii(a,d){var b;let c=b=a;return c.persistence.runTransaction("Allocate target","readwrite",a=>{let b;return c.Vs.getTargetData(a,d).next(e=>e?(b=e,d4.resolve(b)):c.Vs.allocateTargetId(a).next(e=>(b=new g0(d,e,0,a.currentSequenceNumber),c.Vs.addTargetData(a,b).next(()=>b))))}).then(a=>{let b=c.$i.get(a.targetId);return(null===b||a.snapshotVersion.compareTo(b.snapshotVersion)>0)&&(c.$i=c.$i.insert(a.targetId,a),c.Bi.set(d,a.targetId)),a})}async function ij(e,b,d){var f;let a=f=e,g=a.$i.get(b);try{d||await a.persistence.runTransaction("Release target",d?"readwrite":"readwrite-primary",b=>a.persistence.referenceDelegate.removeTarget(b,g))}catch(c){if(!d9(c))throw c;dz("LocalStore",`Failed to update sequence numbers for target ${b}: ${c}`)}a.$i=a.$i.remove(b),a.Bi.delete(g.target)}function ik(a,d,e){var b;let c=b=a,f=dS.min(),g=ga();return c.persistence.runTransaction("Execute query","readonly",a=>(function(d,e,b){var f;let a=f=d,c=a.Bi.get(b);return void 0!==c?d4.resolve(a.$i.get(c)):a.Vs.getTargetData(e,b)})(c,a,fm(d)).next(b=>{if(b)return f=b.lastLimboFreeSnapshotVersion,c.Vs.getMatchingKeysForTargetId(a,b.targetId).next(a=>{g=a})}).next(()=>c.Fi.getDocumentsMatchingQuery(a,d,e?f:dS.min(),e?g:ga())).next(a=>(io(c,fs(d),a),{documents:a,ji:g})))}function il(c,d){var e,f;let a=e=c,g=f=a.Vs,b=a.$i.get(d);return b?Promise.resolve(b.target):a.persistence.runTransaction("Get target data","readonly",a=>g.te(a,d).next(a=>a?a.target:null))}function im(b,c){var d;let a=d=b,e=a.Li.get(c)||dS.min();return a.persistence.runTransaction("Get new document changes","readonly",b=>a.Ui.getAllFromCollectionGroup(b,c,d$(e,-1),Number.MAX_SAFE_INTEGER)).then(b=>(io(a,c,b),b))}function io(a,b,c){let d=dS.min();c.forEach((b,a)=>{a.readTime.compareTo(d)>0&&(d=a.readTime)}),a.Li.set(b,d)}async function ip(i,b,j,k){var l,d;let c=l=i,e=ga(),f=f1;for(let a of j){let g=b.Wi(a.metadata.name);a.document&&(e=e.add(g));let h=b.zi(a);h.setReadTime(b.Hi(a.metadata.readTime)),f=f.insert(g,h)}let m=c.Ui.newChangeBuffer({trackRemovals:!0}),n=await ii(c,(d=k,fm(fh(dT.fromString(`__bundle__/docs/${d}`)))));return c.persistence.runTransaction("Apply bundle documents","readwrite",a=>ig(a,m,f).next(b=>(m.apply(a),b)).next(b=>c.Vs.removeMatchingKeysForTargetId(a,n.targetId).next(()=>c.Vs.addMatchingKeys(a,e,n.targetId)).next(()=>c.localDocuments.getLocalViewOfDocuments(a,b.Gi,b.Qi)).next(()=>b.Gi)))}async function iq(a,b,e=ga()){var c;let f=await ii(a,fm(g9(b.bundledQuery))),d=c=a;return d.persistence.runTransaction("Save named query","readwrite",c=>{let g=gq(b.readTime);if(f.snapshotVersion.compareTo(g)>=0)return d.Ds.saveNamedQuery(c,b);let a=f.withResumeToken(aa.EMPTY_BYTE_STRING,g);return d.$i=d.$i.insert(a.targetId,a),d.Vs.updateTargetData(c,a).next(()=>d.Vs.removeMatchingKeysForTargetId(c,f.targetId)).next(()=>d.Vs.addMatchingKeys(c,e,f.targetId)).next(()=>d.Ds.saveNamedQuery(c,b))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */ function ir(a,b){return`firestore_clients_${a}_${b}`}function is(c,a,d){let b=`firestore_mutations_${c}_${d}`;return a.isAuthenticated()&&(b+=`_${a.uid}`),b}function it(a,b){return`firestore_targets_${a}_${b}`}class iu{constructor(a,b,c,d){this.user=a,this.batchId=b,this.state=c,this.error=d}static Ji(f,c,d){let a=JSON.parse(d),e,b="object"==typeof a&& -1!==["pending","acknowledged","rejected"].indexOf(a.state)&&(void 0===a.error||"object"==typeof a.error);return b&&a.error&&(b="string"==typeof a.error.message&&"string"==typeof a.error.code)&&(e=new dF(a.error.code,a.error.message)),b?new iu(f,c,a.state,e):(dA("SharedClientState",`Failed to parse mutation state for ID '${c}': ${d}`),null)}Yi(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class iv{constructor(a,b,c){this.targetId=a,this.state=b,this.error=c}static Ji(c,d){let a=JSON.parse(d),e,b="object"==typeof a&& -1!==["not-current","current","rejected"].indexOf(a.state)&&(void 0===a.error||"object"==typeof a.error);return b&&a.error&&(b="string"==typeof a.error.message&&"string"==typeof a.error.code)&&(e=new dF(a.error.code,a.error.message)),b?new iv(c,a.state,e):(dA("SharedClientState",`Failed to parse target state for ID '${c}': ${d}`),null)}Yi(){let a={state:this.state,updateTimeMs:Date.now()};return this.error&&(a.error={code:this.error.code,message:this.error.message}),JSON.stringify(a)}}class iw{constructor(a,b){this.clientId=a,this.activeTargetIds=b}static Ji(e,f){let a=JSON.parse(f),c="object"==typeof a&&a.activeTargetIds instanceof Array,d=gb;for(let b=0;c&&b<a.activeTargetIds.length;++b)c=ex(a.activeTargetIds[b]),d=d.add(a.activeTargetIds[b]);return c?new iw(e,d):(dA("SharedClientState",`Failed to parse client data for instance '${e}': ${f}`),null)}}class ix{constructor(a,b){this.clientId=a,this.onlineState=b}static Ji(b){let a=JSON.parse(b);return"object"==typeof a&& -1!==["Unknown","Online","Offline"].indexOf(a.onlineState)&&"string"==typeof a.clientId?new ix(a.clientId,a.onlineState):(dA("SharedClientState",`Failed to parse online state: ${b}`),null)}}class iy{constructor(){this.activeTargetIds=gb}Xi(a){this.activeTargetIds=this.activeTargetIds.add(a)}Zi(a){this.activeTargetIds=this.activeTargetIds.delete(a)}Yi(){let a={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(a)}}class iz{constructor(c,d,b,e,f){var g,h,i;this.window=c,this.js=d,this.persistenceKey=b,this.tr=e,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new L(aD),this.started=!1,this.ir=[];let a=b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=f,this.rr=ir(this.persistenceKey,this.tr),this.ur=`firestore_sequence_number_${g=this.persistenceKey}`,this.sr=this.sr.insert(this.tr,new iy),this.cr=RegExp(`^firestore_clients_${a}_([^_]*)$`),this.ar=RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.hr=RegExp(`^firestore_targets_${a}_(\\d+)$`),this.lr=`firestore_online_state_${h=this.persistenceKey}`,this.dr=`firestore_bundle_loaded_v2_${i=this.persistenceKey}`,this.window.addEventListener("storage",this.er)}static V(a){return!(!a||!a.localStorage)}async start(){let f=await this.syncEngine.Ri();for(let a of f){if(a===this.tr)continue;let c=this.getItem(ir(this.persistenceKey,a));if(c){let b=iw.Ji(a,c);b&&(this.sr=this.sr.insert(b.clientId,b))}}this._r();let d=this.storage.getItem(this.lr);if(d){let e=this.wr(d);e&&this.mr(e)}for(let g of this.ir)this.nr(g);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(a){this.setItem(this.ur,JSON.stringify(a))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(b){let a=!1;return this.sr.forEach((d,c)=>{c.activeTargetIds.has(b)&&(a=!0)}),a}addPendingMutation(a){this.yr(a,"pending")}updateMutationState(a,b,c){this.yr(a,b,c),this.pr(a)}addLocalQueryTarget(a){let b="not-current";if(this.isActiveQueryTarget(a)){let c=this.storage.getItem(it(this.persistenceKey,a));if(c){let d=iv.Ji(a,c);d&&(b=d.state)}}return this.Ir.Xi(a),this._r(),b}removeLocalQueryTarget(a){this.Ir.Zi(a),this._r()}isLocalQueryTarget(a){return this.Ir.activeTargetIds.has(a)}clearQueryState(a){this.removeItem(it(this.persistenceKey,a))}updateQueryState(a,b,c){this.Tr(a,b,c)}handleUserChange(a,b,c){b.forEach(a=>{this.pr(a)}),this.currentUser=a,c.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(a){this.Er(a)}notifyBundleLoaded(a){this.Ar(a)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(a){let b=this.storage.getItem(a);return dz("SharedClientState","READ",a,b),b}setItem(a,b){dz("SharedClientState","SET",a,b),this.storage.setItem(a,b)}removeItem(a){dz("SharedClientState","REMOVE",a),this.storage.removeItem(a)}nr(b){let a=b;if(a.storageArea===this.storage){if(dz("SharedClientState","EVENT",a.key,a.newValue),a.key===this.rr)return void dA("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable(async()=>{if(this.started){if(null!==a.key){if(this.cr.test(a.key)){if(null==a.newValue){let g=this.Rr(a.key);return this.br(g,null)}{let b=this.Pr(a.key,a.newValue);if(b)return this.br(b.clientId,b)}}else if(this.ar.test(a.key)){if(null!==a.newValue){let c=this.vr(a.key,a.newValue);if(c)return this.Vr(c)}}else if(this.hr.test(a.key)){if(null!==a.newValue){let d=this.Sr(a.key,a.newValue);if(d)return this.Dr(d)}}else if(a.key===this.lr){if(null!==a.newValue){let e=this.wr(a.newValue);if(e)return this.mr(e)}}else if(a.key===this.ur){let f=function(a){let b=aG.ot;if(null!=a)try{var e;let c=JSON.parse(a);"number"==typeof c||dD(),b=c}catch(d){dA("SharedClientState","Failed to read sequence number from WebStorage",d)}return b}(a.newValue);f!==aG.ot&&this.sequenceNumberHandler(f)}else if(a.key===this.dr){let h=this.Cr(a.newValue);await Promise.all(h.map(a=>this.syncEngine.Nr(a)))}}}else this.ir.push(a)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(a,b,c){let d=new iu(this.currentUser,a,b,c),e=is(this.persistenceKey,this.currentUser,a);this.setItem(e,d.Yi())}pr(a){let b=is(this.persistenceKey,this.currentUser,a);this.removeItem(b)}Er(a){let b={clientId:this.tr,onlineState:a};this.storage.setItem(this.lr,JSON.stringify(b))}Tr(a,b,c){let d=it(this.persistenceKey,a),e=new iv(a,b,c);this.setItem(d,e.Yi())}Ar(a){let b=JSON.stringify(Array.from(a));this.setItem(this.dr,b)}Rr(b){let a=this.cr.exec(b);return a?a[1]:null}Pr(a,b){let c=this.Rr(a);return iw.Ji(c,b)}vr(b,c){let a=this.ar.exec(b),d=Number(a[1]),e=void 0!==a[2]?a[2]:null;return iu.Ji(new k(e),d,c)}Sr(a,b){let c=this.hr.exec(a),d=Number(c[1]);return iv.Ji(d,b)}wr(a){return ix.Ji(a)}Cr(a){return JSON.parse(a)}async Vr(a){if(a.user.uid===this.currentUser.uid)return this.syncEngine.kr(a.batchId,a.state,a.error);dz("SharedClientState",`Ignoring mutation for non-active user ${a.user.uid}`)}Dr(a){return this.syncEngine.Or(a.targetId,a.state,a.error)}br(a,b){let c=b?this.sr.insert(a,b):this.sr.remove(a),d=this.gr(this.sr),e=this.gr(c),f=[],g=[];return e.forEach(a=>{d.has(a)||f.push(a)}),d.forEach(a=>{e.has(a)||g.push(a)}),this.syncEngine.Mr(f,g).then(()=>{this.sr=c})}mr(a){this.sr.get(a.clientId)&&this.onlineStateHandler(a.onlineState)}gr(a){let b=gb;return a.forEach((c,a)=>{b=b.unionWith(a.activeTargetIds)}),b}}class iA{constructor(){this.Fr=new iy,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(a){}updateMutationState(a,b,c){}addLocalQueryTarget(a){return this.Fr.Xi(a),this.$r[a]||"not-current"}updateQueryState(a,b,c){this.$r[a]=b}removeLocalQueryTarget(a){this.Fr.Zi(a)}isLocalQueryTarget(a){return this.Fr.activeTargetIds.has(a)}clearQueryState(a){delete this.$r[a]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(a){return this.Fr.activeTargetIds.has(a)}start(){return this.Fr=new iy,Promise.resolve()}handleUserChange(a,b,c){}setOnlineState(a){}shutdown(){}writeSequenceNumber(a){}notifyBundleLoaded(a){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iB{Br(a){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals */ /**
 * Browser implementation of ConnectivityMonitor.
 */ class iC{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(a){this.Gr.push(a)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){for(let a of(dz("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Gr))a(0)}Kr(){for(let a of(dz("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Gr))a(1)}static V(){return"undefined"!=typeof window&& void 0!==window.addEventListener&& void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let iD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */ class iE{constructor(a){this.jr=a.jr,this.Wr=a.Wr}zr(a){this.Hr=a}Jr(a){this.Yr=a}onMessage(a){this.Xr=a}close(){this.Wr()}send(a){this.jr(a)}Zr(){this.Hr()}eo(a){this.Yr(a)}no(a){this.Xr(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iF extends class{constructor(a){this.databaseInfo=a,this.databaseId=a.databaseId;let b=a.ssl?"https":"http";this.so=b+"://"+a.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(a,e,b,f,g){let c=this.oo(a,e);dz("RestConnection","Sending: ",c,b);let d={};return this.uo(d,f,g),this.co(a,c,d,b).then(a=>(dz("RestConnection","Received: ",a),a),d=>{throw dB("RestConnection",`${a} failed with error: `,d,"url: ",c,"request:",b),d})}ao(a,b,c,d,e,f){return this.ro(a,b,c,d,e)}uo(a,b,c){a["X-Goog-Api-Client"]="gl-js/ fire/"+dw,a["Content-Type"]="text/plain",this.databaseInfo.appId&&(a["X-Firebase-GMPID"]=this.databaseInfo.appId),b&&b.headers.forEach((b,c)=>a[c]=b),c&&c.headers.forEach((b,c)=>a[c]=b)}oo(a,b){let c=iD[a];return`${this.so}/v1/${b}:${c}`}}{constructor(a){super(a),this.forceLongPolling=a.forceLongPolling,this.autoDetectLongPolling=a.autoDetectLongPolling,this.useFetchStreams=a.useFetchStreams}co(a,b,c,d){return new Promise((g,h)=>{let e=new dt;e.listenOnce(dn.COMPLETE,()=>{try{switch(e.getLastErrorCode()){case dm.NO_ERROR:let c=e.getResponseJson();dz("Connection","XHR received:",JSON.stringify(c)),g(c);break;case dm.TIMEOUT:dz("Connection",'RPC "'+a+'" timed out'),h(new dF(dE.DEADLINE_EXCEEDED,"Request time out"));break;case dm.HTTP_ERROR:let d=e.getStatus();if(dz("Connection",'RPC "'+a+'" failed with status:',d,"response text:",e.getResponseText()),d>0){let b=e.getResponseJson().error;if(b&&b.status&&b.message){let f=function(b){let a=b.toLowerCase().replace(/_/g,"-");return Object.values(dE).indexOf(a)>=0?a:dE.UNKNOWN}(b.status);h(new dF(f,b.message))}else h(new dF(dE.UNKNOWN,"Server responded with status "+e.getStatus()))}else h(new dF(dE.UNAVAILABLE,"Connection failed."));break;default:dD()}}finally{dz("Connection",'RPC "'+a+'" completed.')}});let f=JSON.stringify(d);e.send(b,"POST",f,c,15)})}ho(e,f,g){let h=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=dk(),j=dl(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new dr({})),this.uo(a.initMessageHeaders,f,g),(0,ai.uI)()||(0,ai.b$)()||(0,ai.d)()||(0,ai.w1)()||(0,ai.Mn)()||(0,ai.ru)()||(a.httpHeadersOverwriteParam="$httpHeaders");let d=h.join("");dz("Connection","Creating WebChannel: "+d,a);let c=i.createWebChannel(d,a),l=!1,m=!1,k=new iE({jr(a){m?dz("Connection","Not sending because WebChannel is closed:",a):(l||(dz("Connection","Opening WebChannel transport."),c.open(),l=!0),dz("Connection","WebChannel sending:",a),c.send(a))},Wr:()=>c.close()}),b=(a,b,c)=>{a.listen(b,a=>{try{c(a)}catch(b){setTimeout(()=>{throw b},0)}})};return b(c,ds.EventType.OPEN,()=>{m||dz("Connection","WebChannel transport opened.")}),b(c,ds.EventType.CLOSE,()=>{m||(m=!0,dz("Connection","WebChannel transport closed"),k.eo())}),b(c,ds.EventType.ERROR,a=>{m||(m=!0,dB("Connection","WebChannel transport errored:",a),k.eo(new dF(dE.UNAVAILABLE,"The operation could not be completed")))}),b(c,ds.EventType.MESSAGE,i=>{var d,j;if(!m){let b=i.data[0];(j=!!b)||dD();let f=b,a=f.error||(null===(d=f[0])|| void 0===d?void 0:d.error);if(a){dz("Connection","WebChannel received error:",a);let g=a.status,e=function(b){let a=M[b];if(void 0!==a)return f_(a)}(g),h=a.message;void 0===e&&(e=dE.INTERNAL,h="Unknown error status: "+g+" with message "+a.message),m=!0,k.eo(new dF(e,h)),c.close()}else dz("Connection","WebChannel received:",b),k.no(b)}}),b(j,dp.STAT_EVENT,a=>{a.stat===dq.PROXY?dz("Connection","Detected buffering proxy"):a.stat===dq.NOPROXY&&dz("Connection","Detected no buffering proxy")}),setTimeout(()=>{k.Zr()},0),k}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Initializes the WebChannelConnection for the browser. */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Platform's 'window' implementation or null if not available. */ function iG(){return"undefined"!=typeof window?window:null}function iH(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iI(a){return new gn(a,!0)}class iJ{constructor(a,b,c=1e3,d=1.5,e=6e4){this.js=a,this.timerId=b,this.lo=c,this.fo=d,this._o=e,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(d){this.cancel();let b=Math.floor(this.wo+this.To()),c=Math.max(0,Date.now()-this.yo),a=Math.max(0,b-c);a>0&&dz("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.wo} ms, delay with jitter: ${b} ms, last attempt: ${c} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,a,()=>(this.yo=Date.now(),d())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ class ac{constructor(a,b,c,d,e,f,g,h){this.js=a,this.Ao=c,this.Ro=d,this.bo=e,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=h,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new iJ(a,b)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(a){this.Fo(),this.stream.send(a)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(b,a){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==b?this.So.reset():a&&a.code===dE.RESOURCE_EXHAUSTED?(dA(a.toString()),dA("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):a&&a.code===dE.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=b,await this.listener.Jr(a)}Bo(){}auth(){this.state=1;let a=this.Lo(this.Po),b=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,c])=>{this.Po===b&&this.Uo(a,c)},b=>{a(()=>{let a=new dF(dE.UNKNOWN,"Fetching auth token failed: "+b.message);return this.qo(a)})})}Uo(a,b){let c=this.Lo(this.Po);this.stream=this.Ko(a,b),this.stream.zr(()=>{c(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(a=>{c(()=>this.qo(a))}),this.stream.onMessage(a=>{c(()=>this.onMessage(a))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(a){return dz("PersistentStream",`close with error: ${a}`),this.stream=null,this.close(4,a)}Lo(a){return b=>{this.js.enqueueAndForget(()=>this.Po===a?b():(dz("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iK extends ac{constructor(a,b,c,d,e,f){super(a,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",b,c,d,f),this.wt=e}Ko(a,b){return this.bo.ho("Listen",a,b)}onMessage(a){this.So.reset();let b=function(g,a){let d;if("targetChange"in a){var e,j,c,E,F;a.targetChange;let n="NO_CHANGE"===(e=a.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:dD(),o=a.targetChange.targetIds||[],p=(j=g,c=a.targetChange.resumeToken,j.dt?(void 0===c||"string"==typeof c||dD(),aa.fromBase64String(c||"")):(void 0===c||c instanceof Uint8Array||dD(),aa.fromUint8Array(c||new Uint8Array))),k=a.targetChange.cause,q=k&&function(a){let b=void 0===a.code?dE.UNKNOWN:f_(a.code);return new dF(b,a.message||"")}(k);d=new gg(n,o,p,q||null)}else if("documentChange"in a){a.documentChange;let b=a.documentChange;b.document,b.document.name,b.document.updateTime;let r=gu(g,b.document.name),s=gq(b.document.updateTime),t=new eT({mapValue:{fields:b.document.fields}}),l=eV.newFoundDocument(r,s,t),u=b.targetIds||[],v=b.removedTargetIds||[];d=new ge(u,v,l.key,l)}else if("documentDelete"in a){a.documentDelete;let f=a.documentDelete;f.document;let w=gu(g,f.document),x=f.readTime?gq(f.readTime):dS.min(),m=eV.newNoDocument(w,x),y=f.removedTargetIds||[];d=new ge([],y,m.key,m)}else if("documentRemove"in a){a.documentRemove;let h=a.documentRemove;h.document;let z=gu(g,h.document),A=h.removedTargetIds||[];d=new ge([],A,z,null)}else{if(!("filter"in a))return dD();{a.filter;let i=a.filter;i.targetId;let B=i.count||0,C=new fZ(B),D=i.targetId;d=new gf(D,C)}}return d}(this.wt,a),c=function(b){if(!("targetChange"in b))return dS.min();let a=b.targetChange;return a.targetIds&&a.targetIds.length?dS.min():a.readTime?gq(a.readTime):dS.min()}(a);return this.listener.Go(b,c)}Qo(b){let a={};a.database=gx(this.wt),a.addTarget=function(b,a){let c,d=a.target;return(c=e$(d)?{documents:gD(b,d)}:{query:gE(b,d)}).targetId=a.targetId,a.resumeToken.approximateByteSize()>0?c.resumeToken=gp(b,a.resumeToken):a.snapshotVersion.compareTo(dS.min())>0&&(c.readTime=go(b,a.snapshotVersion.toTimestamp())),c}(this.wt,b);let c=function(c,b){let a=function(b,a){switch(a){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return dD()}}(0,b.purpose);return null==a?null:{"goog-listen-tags":a}}(this.wt,b);c&&(a.labels=c),this.Mo(a)}jo(b){let a={};a.database=gx(this.wt),a.removeTarget=b,this.Mo(a)}}class iL extends ac{constructor(a,b,c,d,e,f){super(a,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",b,c,d,f),this.wt=e,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(a,b){return this.bo.ho("Write",a,b)}onMessage(a){var f,b,c,g,h;if(!a.streamToken&&dD(),this.lastStreamToken=a.streamToken,this.Wo){this.So.reset();let d=(b=a.writeResults,c=a.commitTime,b&&b.length>0?(void 0!==c||dD(),b.map(e=>{var a,b;let d;return a=e,b=c,(d=a.updateTime?gq(a.updateTime):gq(b)).isEqual(dS.min())&&(d=gq(b)),new fK(d,a.transformResults||[])})):[]),e=gq(a.commitTime);return this.listener.Jo(e,d)}return a.writeResults&&0!==a.writeResults.length&&dD(),this.Wo=!0,this.listener.Yo()}Xo(){let a={};a.database=gx(this.wt),this.Mo(a)}Ho(a){let b={streamToken:this.lastStreamToken,writes:a.map(a=>gB(this.wt,a))};this.Mo(b)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 */ /**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */ class iM extends class{}{constructor(a,b,c,d){super(),this.authCredentials=a,this.appCheckCredentials=b,this.bo=c,this.wt=d,this.Zo=!1}tu(){if(this.Zo)throw new dF(dE.FAILED_PRECONDITION,"The client has already been terminated.")}ro(a,b,c){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,e])=>this.bo.ro(a,b,c,d,e)).catch(a=>{throw"FirebaseError"===a.name?(a.code===dE.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new dF(dE.UNKNOWN,a.toString())})}ao(a,b,c,d){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([e,f])=>this.bo.ao(a,b,c,e,f,d)).catch(a=>{throw"FirebaseError"===a.name?(a.code===dE.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new dF(dE.UNKNOWN,a.toString())})}terminate(){this.Zo=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iN{constructor(b,c,a,d,e){this.localStore=b,this.datastore=c,this.asyncQueue=a,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=e,this.du.Br(b=>{a.enqueueAndForget(async()=>{iW(this)&&(dz("RemoteStore","Restarting streams for network reachability change."),await async function(b){var c;let a=c=b;a.lu.add(4),await iP(a),a._u.set("Unknown"),a.lu.delete(4),await iO(a)}(this))})}),this._u=new class{constructor(a,b){this.asyncQueue=a,this.onlineStateHandler=b,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(a){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${a.toString()}`),this.ru("Offline")))}set(a){this.cu(),this.eu=0,"Online"===a&&(this.su=!1),this.ru(a)}ru(a){a!==this.state&&(this.state=a,this.onlineStateHandler(a))}ou(b){let a=`Could not reach Cloud Firestore backend. ${b}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(dA(a),this.su=!1):dz("OnlineStateTracker",a)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}(a,d)}}async function iO(a){if(iW(a))for(let b of a.fu)await b(!0)}async function iP(a){for(let b of a.fu)await b(!1)}function iQ(c,b){var d;let a=d=c;a.hu.has(b.targetId)||(a.hu.set(b.targetId,b),iV(a)?iU(a):jc(a).Co()&&iS(a,b))}function iR(d,c){var e;let a=e=d,b=jc(a);a.hu.delete(c),b.Co()&&iT(a,c),0===a.hu.size&&(b.Co()?b.ko():iW(a)&&a._u.set("Unknown"))}function iS(a,b){a.wu.Nt(b.targetId),jc(a).Qo(b)}function iT(a,b){a.wu.Nt(b),jc(a).jo(b)}function iU(a){a.wu=new gi({getRemoteKeysForTarget:b=>a.remoteSyncer.getRemoteKeysForTarget(b),te:b=>a.hu.get(b)||null}),jc(a).start(),a._u.iu()}function iV(a){return iW(a)&&!jc(a).Do()&&a.hu.size>0}function iW(a){var b;return 0===(b=a).lu.size}function iX(a){a.wu=void 0}async function iY(a){a.hu.forEach((b,c)=>{iS(a,b)})}async function iZ(a,b){iX(a),iV(a)?(a._u.uu(b),iU(a)):a._u.set("Unknown")}async function i$(b,a,c){if(b._u.set("Online"),a instanceof gg&&2===a.state&&a.cause)try{await async function(a,c){let d=c.cause;for(let b of c.targetIds)a.hu.has(b)&&(await a.remoteSyncer.rejectListen(b,d),a.hu.delete(b),a.wu.removeTarget(b))}(b,a)}catch(d){dz("RemoteStore","Failed to remove targets %s: %s ",a.targetIds.join(","),d),await i_(b,d)}else if(a instanceof ge?b.wu.Ut(a):a instanceof gf?b.wu.zt(a):b.wu.Gt(a),!c.isEqual(dS.min()))try{let f=await ie(b.localStore);c.compareTo(f)>=0&&await function(b,c){let a=b.wu.Yt(c);return a.targetChanges.forEach((a,d)=>{if(a.resumeToken.approximateByteSize()>0){let e=b.hu.get(d);e&&b.hu.set(d,e.withResumeToken(a.resumeToken,c))}}),a.targetMismatches.forEach(c=>{let a=b.hu.get(c);if(!a)return;b.hu.set(c,a.withResumeToken(aa.EMPTY_BYTE_STRING,a.snapshotVersion)),iT(b,c);let d=new g0(a.target,c,1,a.sequenceNumber);iS(b,d)}),b.remoteSyncer.applyRemoteEvent(a)}(b,c)}catch(e){dz("RemoteStore","Failed to raise snapshot:",e),await i_(b,e)}}async function i_(a,b,c){if(!d9(b))throw b;a.lu.add(1),await iP(a),a._u.set("Offline"),c||(c=()=>ie(a.localStore)),a.asyncQueue.enqueueRetryable(async()=>{dz("RemoteStore","Retrying IndexedDB access"),await c(),a.lu.delete(1),await iO(a)})}function i0(b,a){return a().catch(c=>i_(b,c,a))}async function i1(d){var e;let a=e=d,f=jd(a),c=a.au.length>0?a.au[a.au.length-1].batchId:-1;for(;i2(a);)try{let b=await ih(a.localStore,c);if(null===b){0===a.au.length&&f.ko();break}c=b.batchId,i3(a,b)}catch(g){await i_(a,g)}i4(a)&&i5(a)}function i2(a){return iW(a)&&a.au.length<10}function i3(b,c){b.au.push(c);let a=jd(b);a.Co()&&a.zo&&a.Ho(c.mutations)}function i4(a){return iW(a)&&!jd(a).Do()&&a.au.length>0}function i5(a){jd(a).start()}async function i6(a){jd(a).Xo()}async function i7(a){let b=jd(a);for(let c of a.au)b.Ho(c.mutations)}async function i8(a,b,c){let d=a.au.shift(),e=g$.from(d,b,c);await i0(a,()=>a.remoteSyncer.applySuccessfulWrite(e)),await i1(a)}async function i9(a,b){b&&jd(a).zo&&await async function(a,c){var b;if(f$(b=c.code)&&b!==dE.ABORTED){let d=a.au.shift();jd(a).No(),await i0(a,()=>a.remoteSyncer.rejectFailedWrite(d.batchId,c)),await i1(a)}}(a,b),i4(a)&&i5(a)}async function ja(b,c){var d;let a=d=b;a.asyncQueue.verifyOperationInProgress(),dz("RemoteStore","RemoteStore received new credentials");let e=iW(a);a.lu.add(3),await iP(a),e&&a._u.set("Unknown"),await a.remoteSyncer.handleCredentialChange(c),a.lu.delete(3),await iO(a)}async function jb(c,b){var d;let a=d=c;b?(a.lu.delete(2),await iO(a)):b||(a.lu.add(2),await iP(a),a._u.set("Unknown"))}function jc(a){return a.mu||(a.mu=function(b,c,d){var e;let a=e=b;return a.tu(),new iK(c,a.bo,a.authCredentials,a.appCheckCredentials,a.wt,d)}(a.datastore,a.asyncQueue,{zr:iY.bind(null,a),Jr:iZ.bind(null,a),Go:i$.bind(null,a)}),a.fu.push(async b=>{b?(a.mu.No(),iV(a)?iU(a):a._u.set("Unknown")):(await a.mu.stop(),iX(a))})),a.mu}function jd(a){return a.gu||(a.gu=function(b,c,d){var e;let a=e=b;return a.tu(),new iL(c,a.bo,a.authCredentials,a.appCheckCredentials,a.wt,d)}(a.datastore,a.asyncQueue,{zr:i6.bind(null,a),Jr:i9.bind(null,a),Yo:i7.bind(null,a),Jo:i8.bind(null,a)}),a.fu.push(async b=>{b?(a.gu.No(),await i1(a)):(await a.gu.stop(),a.au.length>0&&(dz("RemoteStore",`Stopping write stream with ${a.au.length} pending writes`),a.au=[]))})),a.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ class je{constructor(a,b,c,d,e){this.asyncQueue=a,this.timerId=b,this.targetTimeMs=c,this.op=d,this.removalCallback=e,this.deferred=new dG,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(c,d,a,e,f){let g=Date.now()+a,b=new je(c,d,g,e,f);return b.start(a),b}start(a){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),a)}skipDelay(){return this.handleDelayElapsed()}cancel(a){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new dF(dE.CANCELLED,"Operation cancelled"+(a?": "+a:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(a=>this.deferred.resolve(a))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jf(a,b){if(dA("AsyncQueue",`${b}: ${a}`),d9(a))return new dF(dE.UNAVAILABLE,`${b}: ${a}`);throw a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ class jg{constructor(a){this.comparator=a?(b,c)=>a(b,c)||y.comparator(b.key,c.key):(a,b)=>y.comparator(a.key,b.key),this.keyedMap=f3(),this.sortedSet=new L(this.comparator)}static emptySet(a){return new jg(a.comparator)}has(a){return null!=this.keyedMap.get(a)}get(a){return this.keyedMap.get(a)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(b){let a=this.keyedMap.get(b);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(a){this.sortedSet.inorderTraversal((b,c)=>(a(b),!1))}add(a){let b=this.delete(a.key);return b.copy(b.keyedMap.insert(a.key,a),b.sortedSet.insert(a,null))}delete(a){let b=this.get(a);return b?this.copy(this.keyedMap.remove(a),this.sortedSet.remove(b)):this}isEqual(a){if(!(a instanceof jg)||this.size!==a.size)return!1;let b=this.sortedSet.getIterator(),c=a.sortedSet.getIterator();for(;b.hasNext();){let d=b.getNext().key,e=c.getNext().key;if(!d.isEqual(e))return!1}return!0}toString(){let a=[];return this.forEach(b=>{a.push(b.toString())}),0===a.length?"DocumentSet ()":"DocumentSet (\n  "+a.join("  \n")+"\n)"}copy(b,c){let a=new jg;return a.comparator=this.comparator,a.keyedMap=b,a.sortedSet=c,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ class jh{constructor(){this.yu=new L(y.comparator)}track(a){let c=a.doc.key,b=this.yu.get(c);b?0!==a.type&&3===b.type?this.yu=this.yu.insert(c,a):3===a.type&&1!==b.type?this.yu=this.yu.insert(c,{type:b.type,doc:a.doc}):2===a.type&&2===b.type?this.yu=this.yu.insert(c,{type:2,doc:a.doc}):2===a.type&&0===b.type?this.yu=this.yu.insert(c,{type:0,doc:a.doc}):1===a.type&&0===b.type?this.yu=this.yu.remove(c):1===a.type&&2===b.type?this.yu=this.yu.insert(c,{type:1,doc:b.doc}):0===a.type&&1===b.type?this.yu=this.yu.insert(c,{type:2,doc:a.doc}):dD():this.yu=this.yu.insert(c,a)}pu(){let a=[];return this.yu.inorderTraversal((c,b)=>{a.push(b)}),a}}class ji{constructor(a,b,c,d,e,f,g,h){this.query=a,this.docs=b,this.oldDocs=c,this.docChanges=d,this.mutatedKeys=e,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=h}static fromInitialDocuments(b,a,c,d){let e=[];return a.forEach(a=>{e.push({type:0,doc:a})}),new ji(b,a,jg.emptySet(a),e,c,d,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(a){if(!(this.fromCache===a.fromCache&&this.syncStateChanged===a.syncStateChanged&&this.mutatedKeys.isEqual(a.mutatedKeys)&&fo(this.query,a.query)&&this.docs.isEqual(a.docs)&&this.oldDocs.isEqual(a.oldDocs)))return!1;let c=this.docChanges,d=a.docChanges;if(c.length!==d.length)return!1;for(let b=0;b<c.length;b++)if(c[b].type!==d[b].type||!c[b].doc.isEqual(d[b].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */ class jj{constructor(){this.Iu=void 0,this.listeners=[]}}class jk{constructor(){this.queries=new f0(a=>fp(a),fo),this.onlineState="Unknown",this.Tu=new Set}}async function jl(f,b){var g;let c=g=f,d=b.query,e=!1,a=c.queries.get(d);if(a||(e=!0,a=new jj),e)try{a.Iu=await c.onListen(d)}catch(h){let i=jf(h,`Initialization of query '${fq(b.query)}' failed`);return void b.onError(i)}c.queries.set(d,a),a.listeners.push(b),b.Eu(c.onlineState),a.Iu&&b.Au(a.Iu)&&jp(c)}async function jm(g,d){var h;let b=h=g,c=d.query,e=!1,a=b.queries.get(c);if(a){let f=a.listeners.indexOf(d);f>=0&&(a.listeners.splice(f,1),e=0===a.listeners.length)}if(e)return b.queries.delete(c),b.onUnlisten(c)}function jn(e,f){var g;let c=g=e,d=!1;for(let a of f){let h=a.query,b=c.queries.get(h);if(b){for(let i of b.listeners)i.Au(a)&&(d=!0);b.Iu=a}}d&&jp(c)}function jo(d,a,e){var f;let b=f=d,c=b.queries.get(a);if(c)for(let g of c.listeners)g.onError(e);b.queries.delete(a)}function jp(a){a.Tu.forEach(a=>{a.next()})}class jq{constructor(a,b,c){this.query=a,this.Ru=b,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=c||{}}Au(a){if(!this.options.includeMetadataChanges){let c=[];for(let d of a.docChanges)3!==d.type&&c.push(d);a=new ji(a.query,a.docs,a.oldDocs,c,a.mutatedKeys,a.fromCache,a.syncStateChanged,!0)}let b=!1;return this.bu?this.vu(a)&&(this.Ru.next(a),b=!0):this.Vu(a,this.onlineState)&&(this.Su(a),b=!0),this.Pu=a,b}onError(a){this.Ru.error(a)}Eu(a){this.onlineState=a;let b=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,a)&&(this.Su(this.Pu),b=!0),b}Vu(a,b){if(!a.fromCache)return!0;let c="Offline"!==b;return(!this.options.Du||!c)&&(!a.docs.isEmpty()||"Offline"===b)}vu(a){if(a.docChanges.length>0)return!0;let b=this.Pu&&this.Pu.hasPendingWrites!==a.hasPendingWrites;return!(!a.syncStateChanged&&!b)&& !0===this.options.includeMetadataChanges}Su(a){a=ji.fromInitialDocuments(a.query,a.docs,a.mutatedKeys,a.fromCache),this.bu=!0,this.Ru.next(a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */ class jr{constructor(a,b){this.payload=a,this.byteLength=b}Cu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to convert objects from bundles to model objects in the SDK.
 */ class js{constructor(a){this.wt=a}Wi(a){return gu(this.wt,a)}zi(a){return a.metadata.exists?gA(this.wt,a.document,!1):eV.newNoDocument(this.Wi(a.metadata.name),this.Hi(a.metadata.readTime))}Hi(a){return gq(a)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jt{constructor(a){this.key=a}}class ju{constructor(a){this.key=a}}class jv{constructor(a,b){this.query=a,this.Fu=b,this.$u=null,this.current=!1,this.Bu=ga(),this.mutatedKeys=ga(),this.Lu=ft(a),this.Uu=new jg(this.Lu)}get qu(){return this.Fu}Ku(g,a){let f=a?a.Gu:new jh,c=a?a.Uu:this.Uu,d=a?a.mutatedKeys:this.mutatedKeys,b=c,h=!1,i="F"===this.query.limitType&&c.size===this.query.limit?c.last():null,j="L"===this.query.limitType&&c.size===this.query.limit?c.first():null;if(g.inorderTraversal((g,l)=>{let e=c.get(g),a=fr(this.query,l)?l:null,n=!!e&&this.mutatedKeys.has(e.key),m=!!a&&(a.hasLocalMutations||this.mutatedKeys.has(a.key)&&a.hasCommittedMutations),k=!1;e&&a?e.data.isEqual(a.data)?n!==m&&(f.track({type:3,doc:a}),k=!0):this.Qu(e,a)||(f.track({type:2,doc:a}),k=!0,(i&&this.Lu(a,i)>0||j&&0>this.Lu(a,j))&&(h=!0)):!e&&a?(f.track({type:0,doc:a}),k=!0):e&&!a&&(f.track({type:1,doc:e}),k=!0,(i||j)&&(h=!0)),k&&(a?(b=b.add(a),d=m?d.add(g):d.delete(g)):(b=b.delete(g),d=d.delete(g)))}),null!==this.query.limit)for(;b.size>this.query.limit;){let e="F"===this.query.limitType?b.last():b.first();b=b.delete(e.key),d=d.delete(e.key),f.track({type:1,doc:e})}return{Uu:b,Gu:f,Oi:h,mutatedKeys:d}}Qu(b,a){return b.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(a,f,g){let h=this.Uu;this.Uu=a.Uu,this.mutatedKeys=a.mutatedKeys;let b=a.Gu.pu();b.sort((a,b)=>(function(b,c){let a=a=>{switch(a){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return dD()}};return a(b)-a(c)})(a.type,b.type)||this.Lu(a.doc,b.doc)),this.ju(g);let d=f?this.Wu():[],c=0===this.Bu.size&&this.current?1:0,e=c!==this.$u;return(this.$u=c,0!==b.length||e)?{snapshot:new ji(this.query,a.Uu,h,b,a.mutatedKeys,0===c,e,!1),zu:d}:{zu:d}}Eu(a){return this.current&&"Offline"===a?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new jh,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(a){return!this.Fu.has(a)&&!!this.Uu.has(a)&&!this.Uu.get(a).hasLocalMutations}ju(a){a&&(a.addedDocuments.forEach(a=>this.Fu=this.Fu.add(a)),a.modifiedDocuments.forEach(a=>{}),a.removedDocuments.forEach(a=>this.Fu=this.Fu.delete(a)),this.current=a.current)}Wu(){if(!this.current)return[];let a=this.Bu;this.Bu=ga(),this.Uu.forEach(a=>{this.Hu(a.key)&&(this.Bu=this.Bu.add(a.key))});let b=[];return a.forEach(a=>{this.Bu.has(a)||b.push(new ju(a))}),this.Bu.forEach(c=>{a.has(c)||b.push(new jt(c))}),b}Ju(a){this.Fu=a.ji,this.Bu=ga();let b=this.Ku(a.documents);return this.applyChanges(b,!0)}Yu(){return ji.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class jw{constructor(a,b,c){this.query=a,this.targetId=b,this.view=c}}class jx{constructor(a){this.key=a,this.Xu=!1}}class jy{constructor(a,b,c,d,e,f){this.localStore=a,this.remoteStore=b,this.eventManager=c,this.sharedClientState=d,this.currentUser=e,this.maxConcurrentLimboResolutions=f,this.Zu={},this.tc=new f0(a=>fp(a),fo),this.ec=new Map,this.nc=new Set,this.sc=new L(y.comparator),this.ic=new Map,this.rc=new hX,this.oc={},this.uc=new Map,this.cc=hE.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function jz(g,b){let a=j_(g),c,d,e=a.tc.get(b);if(e)c=e.targetId,a.sharedClientState.addLocalQueryTarget(c),d=e.view.Yu();else{let f=await ii(a.localStore,fm(b));a.isPrimaryClient&&iQ(a.remoteStore,f);let h=a.sharedClientState.addLocalQueryTarget(f.targetId);d=await jA(a,b,c=f.targetId,"current"===h)}return d}async function jA(a,b,c,g){a.hc=(b,c,d)=>(async function(b,a,f,d){let c=a.view.Ku(f);c.Oi&&(c=await ik(b.localStore,a.query,!1).then(({documents:b})=>a.view.Ku(b,c)));let g=d&&d.targetChanges.get(a.targetId),e=a.view.applyChanges(c,b.isPrimaryClient,g);return jM(b,a.targetId,e.zu),e.snapshot})(a,b,c,d);let e=await ik(a.localStore,b,!0),d=new jv(b,e.ji),h=d.Ku(e.documents),i=gd.createSynthesizedTargetChangeForCurrentChange(c,g&&"Offline"!==a.onlineState),f=d.applyChanges(h,a.isPrimaryClient,i);jM(a,c,f.zu);let j=new jw(b,c,d);return a.tc.set(b,j),a.ec.has(c)?a.ec.get(c).push(b):a.ec.set(c,[b]),f.snapshot}async function jB(e,c){var f;let a=f=e,b=a.tc.get(c),d=a.ec.get(b.targetId);if(d.length>1)return a.ec.set(b.targetId,d.filter(a=>!fo(a,c))),void a.tc.delete(c);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(b.targetId),a.sharedClientState.isActiveQueryTarget(b.targetId)||await ij(a.localStore,b.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(b.targetId),iR(a.remoteStore,b.targetId),jK(a,b.targetId)}).catch(d3)):(jK(a,b.targetId),await ij(a.localStore,b.targetId,!0))}async function jC(h,i,e){let a=j0(h);try{var b,f,g;let d=await function(a,b){var c;let d=c=a,e=dR.now(),f=b.reduce((a,b)=>a.add(b.key),ga()),g,h;return d.persistence.runTransaction("Locally write mutations","readwrite",a=>{let c=f1,i=ga();return d.Ui.getEntries(a,f).next(a=>{(c=a).forEach((a,b)=>{b.isValidDocument()||(i=i.add(a))})}).next(()=>d.localDocuments.getOverlayedDocuments(a,c)).next(i=>{g=i;let h=[];for(let c of b){let f=fQ(c,g.get(c.key).overlayedDocument);null!=f&&h.push(new fT(c.key,f,eU(f.value.mapValue),fL.exists(!0)))}return d.mutationQueue.addMutationBatch(a,e,h,b)}).next(b=>{h=b;let c=b.applyToLocalDocumentSet(g,i);return d.documentOverlayCache.saveOverlays(a,b.batchId,c)})}).then(()=>({batchId:h.batchId,changes:f4(g)}))}(a.localStore,i),c;a.sharedClientState.addPendingMutation(d.batchId),b=a,f=d.batchId,g=e,(c=b.oc[b.currentUser.toKey()])||(c=new L(aD)),c=c.insert(f,g),b.oc[b.currentUser.toKey()]=c,await jP(a,d.changes),await i1(a.remoteStore)}catch(j){let k=jf(j,"Failed to persist write");e.reject(k)}}async function jD(c,a){var d;let b=d=c;try{let e=await function(b,c){var d;let a=d=b,e=c.snapshotVersion,f=a.$i;return a.persistence.runTransaction("Apply remote event","readwrite-primary",d=>{let g=a.Ui.newChangeBuffer({trackRemovals:!0});f=a.$i;let b=[];c.targetChanges.forEach((h,i)=>{var k,m,j;let l=f.get(i);if(!l)return;b.push(a.Vs.removeMatchingKeys(d,h.removedDocuments,i).next(()=>a.Vs.addMatchingKeys(d,h.addedDocuments,i)));let g=l.withSequenceNumber(d.currentSequenceNumber);c.targetMismatches.has(i)?g=g.withResumeToken(aa.EMPTY_BYTE_STRING,dS.min()).withLastLimboFreeSnapshotVersion(dS.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,e)),f=f.insert(i,g),k=l,m=g,j=h,(0===k.resumeToken.approximateByteSize()||m.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8||j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0)&&b.push(a.Vs.updateTargetData(d,g))});let i=f1,j=ga();if(c.documentUpdates.forEach(e=>{c.resolvedLimboDocuments.has(e)&&b.push(a.persistence.referenceDelegate.updateLimboDocument(d,e))}),b.push(ig(d,g,c.documentUpdates).next(a=>{i=a.Gi,j=a.Qi})),!e.isEqual(dS.min())){let h=a.Vs.getLastRemoteSnapshotVersion(d).next(b=>a.Vs.setTargetsMetadata(d,d.currentSequenceNumber,e));b.push(h)}return d4.waitFor(b).next(()=>g.apply(d)).next(()=>a.localDocuments.getLocalViewOfDocuments(d,i,j)).next(()=>i)}).then(b=>(a.$i=f,b))}(b.localStore,a);a.targetChanges.forEach((a,d)=>{var f,e,g;let c=b.ic.get(d);c&&(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1||dD(),a.addedDocuments.size>0?c.Xu=!0:a.modifiedDocuments.size>0?(e=c.Xu)||dD():a.removedDocuments.size>0&&(c.Xu||dD(),c.Xu=!1))}),await jP(b,e,a)}catch(f){await d3(f)}}function jE(e,b,c){var f;let a=f=e;if(a.isPrimaryClient&&0===c|| !a.isPrimaryClient&&1===c){let d=[];a.tc.forEach((e,c)=>{let a=c.view.Eu(b);a.snapshot&&d.push(a.snapshot)}),function(b,c){var d;let a=d=b;a.onlineState=c;let e=!1;a.queries.forEach((d,a)=>{for(let b of a.listeners)b.Eu(c)&&(e=!0)}),e&&jp(a)}(a.eventManager,b),d.length&&a.Zu.Go(d),a.onlineState=b,a.isPrimaryClient&&a.sharedClientState.setOnlineState(b)}}async function jF(f,c,g){var h;let a=h=f;a.sharedClientState.updateQueryState(c,"rejected",g);let e=a.ic.get(c),b=e&&e.key;if(b){let d=new L(y.comparator);d=d.insert(b,eV.newNoDocument(b,dS.min()));let i=ga().add(b),j=new gc(dS.min(),new Map,new _(aD),d,i);await jD(a,j),a.sc=a.sc.remove(b),a.ic.delete(c),jO(a)}else await ij(a.localStore,c,!1).then(()=>jK(a,c,g)).catch(d3)}async function jG(d,c){var e;let a=e=d,b=c.batch.batchId;try{let f=await function(a,d){var b;let c=b=a;return c.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{let e=d.batch.keys(),b=c.Ui.newChangeBuffer({trackRemovals:!0});return(function(e,f,a,g){let b=a.batch,c=b.keys(),d=d4.resolve();return c.forEach(c=>{d=d.next(()=>g.getEntry(f,c)).next(d=>{var f;let e=a.docVersions.get(c);null!==e||dD(),0>d.version.compareTo(e)&&(b.applyToRemoteDocument(d,a),d.isValidDocument()&&(d.setReadTime(a.commitVersion),g.addEntry(d)))})}),d.next(()=>e.mutationQueue.removeMutationBatch(f,b))})(c,a,d,b).next(()=>b.apply(a)).next(()=>c.mutationQueue.performConsistencyCheck(a)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(a,e,d.batch.batchId)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(b){let c=ga();for(let a=0;a<b.mutationResults.length;++a)b.mutationResults[a].transformResults.length>0&&(c=c.add(b.batch.mutations[a].key));return c}(d))).next(()=>c.localDocuments.getDocuments(a,e))})}(a.localStore,c);jJ(a,b,null),jI(a,b),a.sharedClientState.updateMutationState(b,"acknowledged"),await jP(a,f)}catch(g){await d3(g)}}async function jH(d,b,c){var e;let a=e=d;try{let f=await function(a,d){var b;let c=b=a;return c.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let b;return c.mutationQueue.lookupMutationBatch(a,d).next(d=>{var e;return null!==d||dD(),b=d.keys(),c.mutationQueue.removeMutationBatch(a,d)}).next(()=>c.mutationQueue.performConsistencyCheck(a)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(a,b,d)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,b)).next(()=>c.localDocuments.getDocuments(a,b))})}(a.localStore,b);jJ(a,b,c),jI(a,b),a.sharedClientState.updateMutationState(b,"rejected",c),await jP(a,f)}catch(g){await d3(g)}}function jI(a,b){(a.uc.get(b)||[]).forEach(a=>{a.resolve()}),a.uc.delete(b)}function jJ(f,d,e){var g;let b=g=f,a=b.oc[b.currentUser.toKey()];if(a){let c=a.get(d);c&&(e?c.reject(e):c.resolve(),a=a.remove(d)),b.oc[b.currentUser.toKey()]=a}}function jK(a,b,c=null){for(let d of(a.sharedClientState.removeLocalQueryTarget(b),a.ec.get(b)))a.tc.delete(d),c&&a.Zu.lc(d,c);a.ec.delete(b),a.isPrimaryClient&&a.rc.us(b).forEach(b=>{a.rc.containsKey(b)||jL(a,b)})}function jL(a,b){a.nc.delete(b.path.canonicalString());let c=a.sc.get(b);null!==c&&(iR(a.remoteStore,c),a.sc=a.sc.remove(b),a.ic.delete(c),jO(a))}function jM(b,c,d){for(let a of d)a instanceof jt?(b.rc.addReference(a.key,c),jN(b,a)):a instanceof ju?(dz("SyncEngine","Document no longer in limbo: "+a.key),b.rc.removeReference(a.key,c),b.rc.containsKey(a.key)||jL(b,a.key)):dD()}function jN(a,d){let b=d.key,c=b.path.canonicalString();a.sc.get(b)||a.nc.has(c)||(dz("SyncEngine","New document in limbo: "+b),a.nc.add(c),jO(a))}function jO(a){for(;a.nc.size>0&&a.sc.size<a.maxConcurrentLimboResolutions;){let d=a.nc.values().next().value;a.nc.delete(d);let b=new y(dT.fromString(d)),c=a.cc.next();a.ic.set(c,new jx(b)),a.sc=a.sc.insert(b,c),iQ(a.remoteStore,new g0(fm(fh(b.path)),c,2,aG.ot))}}async function jP(b,g,h){var c;let a=c=b,d=[],e=[],f=[];a.tc.isEmpty()||(a.tc.forEach((c,b)=>{f.push(a.hc(b,g,h).then(c=>{if(c){a.isPrimaryClient&&a.sharedClientState.updateQueryState(b.targetId,c.fromCache?"not-current":"current"),d.push(c);let f=h9.Vi(b.targetId,c);e.push(f)}}))}),await Promise.all(f),a.Zu.Go(d),await async function(f,g){var h;let a=h=f;try{await a.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>d4.forEach(g,c=>d4.forEach(c.Pi,d=>a.persistence.referenceDelegate.addReference(b,c.targetId,d)).next(()=>d4.forEach(c.vi,d=>a.persistence.referenceDelegate.removeReference(b,c.targetId,d)))))}catch(b){if(!d9(b))throw b;dz("LocalStore","Failed to update sequence numbers: "+b)}for(let c of g){let d=c.targetId;if(!c.fromCache){let e=a.$i.get(d),i=e.snapshotVersion,j=e.withLastLimboFreeSnapshotVersion(i);a.$i=a.$i.insert(d,j)}}}(a.localStore,e))}async function jQ(e,b){var f,d,g;let a=f=e;if(!a.currentUser.isEqual(b)){dz("SyncEngine","User change. New user:",b.toKey());let c=await id(a.localStore,b);a.currentUser=b,g="'waitForPendingWrites' promise is rejected due to a user change.",(d=a).uc.forEach(a=>{a.forEach(a=>{a.reject(new dF(dE.CANCELLED,g))})}),d.uc.clear(),a.sharedClientState.handleUserChange(b,c.removedBatchIds,c.addedBatchIds),await jP(a,c.Ki)}}function jR(f,d){var g;let b=g=f,c=b.ic.get(d);if(c&&c.Xu)return ga().add(c.key);{let a=ga(),e=b.ec.get(d);if(!e)return a;for(let h of e){let i=b.tc.get(h);a=a.unionWith(i.view.qu)}return a}}async function jS(d,a){var e;let b=e=d,f=await ik(b.localStore,a.query,!0),c=a.view.Ju(f);return b.isPrimaryClient&&jM(b,a.targetId,c.zu),c}async function jT(a,b){var c;let d=c=a;return im(d.localStore,b).then(a=>jP(d,a))}async function jU(e,b,c,f){var g;let a=g=e,d=await function(b,e){var c,d;let a=c=b,f=d=a.mutationQueue;return a.persistence.runTransaction("Lookup mutation documents","readonly",b=>f.yn(b,e).next(c=>c?a.localDocuments.getDocuments(b,c):d4.resolve(null)))}(a.localStore,b);null!==d?("pending"===c?await i1(a.remoteStore):"acknowledged"===c||"rejected"===c?(jJ(a,b,f||null),jI(a,b),function(a,b){var c,d;(d=(c=a).mutationQueue).In(b)}(a.localStore,b)):dD(),await jP(a,d)):dz("SyncEngine","Cannot apply mutation batch with id: "+b)}async function jV(c,b){var d;let a=d=c;if(j_(a),j0(a),!0===b&& !0!==a.ac){let e=a.sharedClientState.getAllActiveQueryTargets(),f=await jW(a,e.toArray());for(let g of(a.ac=!0,await jb(a.remoteStore,!0),f))iQ(a.remoteStore,g)}else if(!1===b&& !1!==a.ac){let h=[],i=Promise.resolve();a.ec.forEach((c,b)=>{a.sharedClientState.isLocalQueryTarget(b)?h.push(b):i=i.then(()=>(jK(a,b),ij(a.localStore,b,!0))),iR(a.remoteStore,b)}),await i,await jW(a,h),function(b){var c;let a=c=b;a.ic.forEach((c,b)=>{iR(a.remoteStore,b)}),a.rc.cs(),a.ic=new Map,a.sc=new L(y.comparator)}(a),a.ac=!1,await jb(a.remoteStore,!1)}}async function jW(i,j,n){var k;let a=k=i,e=[],f=[];for(let c of j){let d,b=a.ec.get(c);if(b&&0!==b.length)for(let l of(d=await ii(a.localStore,fm(b[0])),b)){let m=a.tc.get(l),g=await jS(a,m);g.snapshot&&f.push(g.snapshot)}else{let h=await il(a.localStore,c);d=await ii(a.localStore,h),await jA(a,jX(h),c,!1)}e.push(d)}return a.Zu.Go(f),e}function jX(a){return fg(a.path,a.collectionGroup,a.orderBy,a.filters,a.limit,"F",a.startAt,a.endAt)}function jY(a){var b,c,d;let e=b=a;return(d=(c=e.localStore).persistence).Ri()}async function jZ(e,b,d,f){var g;let a=g=e;if(a.ac)return void dz("SyncEngine","Ignoring unexpected query state notification.");let c=a.ec.get(b);if(c&&c.length>0)switch(d){case"current":case"not-current":{let h=await im(a.localStore,fs(c[0])),i=gc.createSynthesizedRemoteEventForCurrentChange(b,"current"===d);await jP(a,h,i);break}case"rejected":await ij(a.localStore,b,!0),jK(a,b,f);break;default:dD()}}async function j$(f,g,h){let a=j_(f);if(a.ac){for(let b of g){if(a.ec.has(b)){dz("SyncEngine","Adding an already active target "+b);continue}let c=await il(a.localStore,b),d=await ii(a.localStore,c);await jA(a,jX(c),d.targetId,!1),iQ(a.remoteStore,d)}for(let e of h)a.ec.has(e)&&await ij(a.localStore,e,!1).then(()=>{iR(a.remoteStore,e),jK(a,e)}).catch(d3)}}function j_(b){var c;let a=c=b;return a.remoteStore.remoteSyncer.applyRemoteEvent=jD.bind(null,a),a.remoteStore.remoteSyncer.getRemoteKeysForTarget=jR.bind(null,a),a.remoteStore.remoteSyncer.rejectListen=jF.bind(null,a),a.Zu.Go=jn.bind(null,a.eventManager),a.Zu.lc=jo.bind(null,a.eventManager),a}function j0(b){var c;let a=c=b;return a.remoteStore.remoteSyncer.applySuccessfulWrite=jG.bind(null,a),a.remoteStore.remoteSyncer.rejectFailedWrite=jH.bind(null,a),a}class j1{constructor(){this.synchronizeTabs=!1}async initialize(a){this.wt=iI(a.databaseInfo.databaseId),this.sharedClientState=this.dc(a),this.persistence=this._c(a),await this.persistence.start(),this.localStore=this.wc(a),this.gcScheduler=this.mc(a,this.localStore),this.indexBackfillerScheduler=this.gc(a,this.localStore)}mc(a,b){return null}gc(a,b){return null}wc(a){return ic(this.persistence,new ia,a.initialUser,this.wt)}_c(a){return new h0(h2.Ms,this.wt)}dc(a){return new iA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class j2{async initialize(b,a){this.localStore||(this.localStore=b.localStore,this.sharedClientState=b.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!b.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>jE(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=jQ.bind(null,this.syncEngine),await jb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(a){return new jk}createDatastore(a){var b,c,d,e,f;let g=iI(a.databaseInfo.databaseId),h=(b=a.databaseInfo,new iF(b));return c=a.authCredentials,d=a.appCheckCredentials,e=h,f=g,new iM(c,d,e,f)}createRemoteStore(f){var a,b,c,d,e;return a=this.localStore,b=this.datastore,c=f.asyncQueue,d=a=>jE(this.syncEngine,a,0),e=iC.V()?new iC:new iB,new iN(a,b,c,d,e)}createSyncEngine(a,b){return function(b,c,d,e,f,g,h){let a=new jy(b,c,d,e,f,g);return h&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,a.initialUser,a.maxConcurrentLimboResolutions,b)}terminate(){return async function(b){var c;let a=c=b;dz("RemoteStore","RemoteStore shutting down."),a.lu.add(5),await iP(a),a.du.shutdown(),a._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ class j3{constructor(a){this.observer=a,this.muted=!1}next(a){this.observer.next&&this.Ic(this.observer.next,a)}error(a){this.observer.error?this.Ic(this.observer.error,a):console.error("Uncaught Error in snapshot listener:",a)}Tc(){this.muted=!0}Ic(a,b){this.muted||setTimeout(()=>{this.muted||a(b)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ class j4{constructor(a){this.datastore=a,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(b){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new dF(dE.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");let a=await async function(c,a){var d;let b=d=c,e=gx(b.wt)+"/documents",f={documents:a.map(a=>gt(b.wt,a))},g=await b.ao("BatchGetDocuments",e,f,a.length),i=new Map;g.forEach(e=>{var c,a;let d=(c=b.wt,"found"in(a=e)?function(b,a){var f;a.found||dD(),a.found.name,a.found.updateTime;let c=gu(b,a.found.name),d=gq(a.found.updateTime),e=new eT({mapValue:{fields:a.found.fields}});return eV.newFoundDocument(c,d,e)}(c,a):"missing"in a?function(b,a){var e,f;a.missing||dD(),!a.readTime&&dD();let c=gu(b,a.missing),d=gq(a.readTime);return eV.newNoDocument(c,d)}(c,a):dD());i.set(d.key.toString(),d)});let h=[];return a.forEach(b=>{var c;let a=i.get(b.toString());a||dD(),h.push(a)}),h}(this.datastore,b);return a.forEach(a=>this.recordVersion(a)),a}set(a,b){this.write(b.toMutation(a,this.precondition(a))),this.writtenDocs.add(a.toString())}update(a,b){try{this.write(b.toMutation(a,this.preconditionForUpdate(a)))}catch(c){this.lastWriteError=c}this.writtenDocs.add(a.toString())}delete(a){this.write(new fX(a,this.precondition(a))),this.writtenDocs.add(a.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;let a=this.readVersions;this.mutations.forEach(b=>{a.delete(b.key.toString())}),a.forEach((c,b)=>{let a=y.fromPath(b);this.mutations.push(new fY(a,this.precondition(a)))}),await async function(b,c){var d;let a=d=b,e=gx(a.wt)+"/documents",f={writes:c.map(b=>gB(a.wt,b))};await a.ro("Commit",e,f)}(this.datastore,this.mutations),this.committed=!0}recordVersion(a){let b;if(a.isFoundDocument())b=a.version;else{if(!a.isNoDocument())throw dD();b=dS.min()}let c=this.readVersions.get(a.key.toString());if(c){if(!b.isEqual(c))throw new dF(dE.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(a.key.toString(),b)}precondition(a){let b=this.readVersions.get(a.toString());return!this.writtenDocs.has(a.toString())&&b?fL.updateTime(b):fL.none()}preconditionForUpdate(b){let a=this.readVersions.get(b.toString());if(!this.writtenDocs.has(b.toString())&&a){if(a.isEqual(dS.min()))throw new dF(dE.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return fL.updateTime(a)}return fL.exists(!0)}write(a){this.ensureCommitNotCalled(),this.mutations.push(a)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * FirestoreClient is a top-level class that constructs and owns all of the
 * pieces of the client SDK architecture. It is responsible for creating the
 * async queue that is shared by all of the other components in the system.
 */ class j5{constructor(b,c,a,d){this.authCredentials=b,this.appCheckCredentials=c,this.asyncQueue=a,this.databaseInfo=d,this.user=k.UNAUTHENTICATED,this.clientId=dP.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(a,async a=>{dz("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(a,a=>(dz("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(a){this.authCredentialListener=a}setAppCheckTokenChangeListener(a){this.appCheckCredentialListener=a}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new dF(dE.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let a=new dG;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),a.resolve()}catch(b){let c=jf(b,"Failed to shutdown persistence");a.reject(c)}}),a.promise}}async function j6(a,b){a.asyncQueue.verifyOperationInProgress(),dz("FirestoreClient","Initializing OfflineComponentProvider");let c=await a.getConfiguration();await b.initialize(c);let d=c.initialUser;a.setCredentialChangeListener(async a=>{d.isEqual(a)||(await id(b.localStore,a),d=a)}),b.persistence.setDatabaseDeletedListener(()=>a.terminate()),a.offlineComponents=b}async function j7(a,b){a.asyncQueue.verifyOperationInProgress();let c=await j8(a);dz("FirestoreClient","Initializing OnlineComponentProvider");let d=await a.getConfiguration();await b.initialize(c,d),a.setCredentialChangeListener(a=>ja(b.remoteStore,a)),a.setAppCheckTokenChangeListener((c,a)=>ja(b.remoteStore,a)),a.onlineComponents=b}async function j8(a){return a.offlineComponents||(dz("FirestoreClient","Using default OfflineComponentProvider"),await j6(a,new j1)),a.offlineComponents}async function j9(a){return a.onlineComponents||(dz("FirestoreClient","Using default OnlineComponentProvider"),await j7(a,new j2)),a.onlineComponents}async function ka(c){let a=await j9(c),b=a.eventManager;return b.onListen=jz.bind(null,a.syncEngine),b.onUnlisten=jB.bind(null,a.syncEngine),b}let kb=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kc(a,b,c){if(!c)throw new dF(dE.INVALID_ARGUMENT,`Function ${a}() cannot be called with an empty ${b}.`)}function kd(a){if(!y.isDocumentKey(a))throw new dF(dE.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${a} has ${a.length}.`)}function ke(a){if(y.isDocumentKey(a))throw new dF(dE.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${a} has ${a.length}.`)}function kf(a){if(void 0===a)return"undefined";if(null===a)return"null";if("string"==typeof a)return a.length>20&&(a=`${a.substring(0,20)}...`),JSON.stringify(a);if("number"==typeof a||"boolean"==typeof a)return""+a;if("object"==typeof a){if(a instanceof Array)return"an array";{var b;let c=(b=a).constructor?b.constructor.name:null;return c?`a custom ${c} object`:"an object"}}return"function"==typeof a?"a function":dD()}function kg(a,b){if("_delegate"in a&&(a=a._delegate),!(a instanceof b)){if(b.name===a.constructor.name)throw new dF(dE.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let c=kf(a);throw new dF(dE.INVALID_ARGUMENT,`Expected type '${b.name}', but it was: ${c}`)}}return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ class kh{constructor(a){var b;if(void 0===a.host){if(void 0!==a.ssl)throw new dF(dE.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=a.host,this.ssl=null===(b=a.ssl)|| void 0===b||b;if(this.credentials=a.credentials,this.ignoreUndefinedProperties=!!a.ignoreUndefinedProperties,void 0===a.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==a.cacheSizeBytes&&a.cacheSizeBytes<1048576)throw new dF(dE.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=a.cacheSizeBytes}this.experimentalForceLongPolling=!!a.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!a.experimentalAutoDetectLongPolling,this.useFetchStreams=!!a.useFetchStreams,function(a,b,c,d){if(!0===b&& !0===d)throw new dF(dE.INVALID_ARGUMENT,`${a} and ${c} cannot be used together.`)}("experimentalForceLongPolling",a.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",a.experimentalAutoDetectLongPolling)}isEqual(a){return this.host===a.host&&this.ssl===a.ssl&&this.credentials===a.credentials&&this.cacheSizeBytes===a.cacheSizeBytes&&this.experimentalForceLongPolling===a.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===a.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===a.ignoreUndefinedProperties&&this.useFetchStreams===a.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */ class aL{constructor(a,b,c){this._authCredentials=b,this._appCheckCredentials=c,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kh({}),this._settingsFrozen=!1,a instanceof ev?this._databaseId=a:(this._app=a,this._databaseId=function(a){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new dF(dE.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ev(a.options.projectId)}(a))}get app(){if(!this._app)throw new dF(dE.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(a){if(this._settingsFrozen)throw new dF(dE.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kh(a),void 0!==a.credentials&&(this._authCredentials=function(a){if(!a)return new dI;switch(a.type){case"gapi":var c;let b=a.client;return("object"!=typeof b||null===b||!b.auth||!b.auth.getAuthHeaderValueForFirstParty)&&dD(),new dL(b,a.sessionIndex||"0",a.iamToken||null);case"provider":return a.client;default:throw new dF(dE.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(a.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(a){let b=kb.get(a);b&&(dz("ComponentProvider","Removing Datastore"),kb.delete(a),b.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */ class ki{constructor(a,b,c){this.converter=b,this._key=c,this.type="document",this.firestore=a}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kj(this.firestore,this.converter,this._key.path.popLast())}withConverter(a){return new ki(this.firestore,a,this._key)}}class aM{constructor(a,b,c){this.converter=b,this._query=c,this.type="query",this.firestore=a}withConverter(a){return new aM(this.firestore,a,this._query)}}class kj extends aM{constructor(b,c,a){super(b,c,fh(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let a=this._path.popLast();return a.isEmpty()?null:new ki(this.firestore,null,new y(a))}withConverter(a){return new kj(this.firestore,a,this._path)}}function kk(a,b,...c){if(a=(0,ai.m9)(a),kc("collection","path",b),a instanceof aL){let d=dT.fromString(b,...c);return ke(d),new kj(a,null,d)}{if(!(a instanceof ki||a instanceof kj))throw new dF(dE.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dT.fromString(b,...c));return ke(e),new kj(a.firestore,null,e)}}function kl(a,b,...c){if(a=(0,ai.m9)(a),1===arguments.length&&(b=dP.I()),kc("doc","path",b),a instanceof aL){let d=dT.fromString(b,...c);return kd(d),new ki(a,null,new y(d))}{if(!(a instanceof ki||a instanceof kj))throw new dF(dE.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let e=a._path.child(dT.fromString(b,...c));return kd(e),new ki(a.firestore,a instanceof kj?a.converter:null,new y(e))}}class km extends aL{constructor(a,b,c){super(a,b,c),this.type="firestore",this._queue=new /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new iJ(this,"async_queue_retry"),this.Kc=()=>{let a=iH();a&&dz("AsyncQueue","Visibility state changed to "+a.visibilityState),this.So.Eo()};let a=iH();a&&"function"==typeof a.addEventListener&&a.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(a){this.enqueue(a)}enqueueAndForgetEvenWhileRestricted(a){this.Gc(),this.Qc(a)}enterRestrictedMode(b){if(!this.Fc){this.Fc=!0,this.Uc=b||!1;let a=iH();a&&"function"==typeof a.removeEventListener&&a.removeEventListener("visibilitychange",this.Kc)}}enqueue(a){if(this.Gc(),this.Fc)return new Promise(()=>{});let b=new dG;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(a().then(b.resolve,b.reject),b.promise)).then(()=>b.promise)}enqueueRetryable(a){this.enqueueAndForget(()=>(this.Mc.push(a),this.jc()))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(a){if(!d9(a))throw a;dz("AsyncQueue","Operation failed with retryable error: "+a)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(b){let a=this.Oc.then(()=>(this.Lc=!0,b().catch(b=>{var a;this.Bc=b,this.Lc=!1;let c,d=(c=(a=b).message||"",a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+"\n"+a.stack),c);throw dA("INTERNAL UNHANDLED ERROR: ",d),b}).then(a=>(this.Lc=!1,a))));return this.Oc=a,a}enqueueAfterDelay(a,b,d){this.Gc(),this.qc.indexOf(a)> -1&&(b=0);let c=je.createAndSchedule(this,a,b,d,a=>this.Wc(a));return this.$c.push(c),c}Gc(){this.Bc&&dD()}verifyOperationInProgress(){}async zc(){let a;do await (a=this.Oc);while(a!==this.Oc)}Hc(a){for(let b of this.$c)if(b.timerId===a)return!0;return!1}Jc(a){return this.zc().then(()=>{for(let b of(this.$c.sort((a,b)=>a.targetTimeMs-b.targetTimeMs),this.$c))if(b.skipDelay(),"all"!==a&&b.timerId===a)break;return this.zc()})}Yc(a){this.qc.push(a)}Wc(a){let b=this.$c.indexOf(a);this.$c.splice(b,1)}},this._persistenceKey="name"in a?a.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||kp(this),this._firestoreClient.terminate()}}function kn(a=(0,aT.Mq)()){return(0,aT.qX)(a,"firestore").getImmediate()}function ko(a){return a._firestoreClient||kp(a),a._firestoreClient.verifyNotTerminated(),a._firestoreClient}function kp(a){var c,d,e,f,b;let g=a._freezeSettings(),h=(d=a._databaseId,e=(null===(c=a._app)|| void 0===c?void 0:c.options.appId)||"",f=a._persistenceKey,b=g,new eu(d,e,f,b.host,b.ssl,b.experimentalForceLongPolling,b.experimentalAutoDetectLongPolling,b.useFetchStreams));a._firestoreClient=new j5(a._authCredentials,a._appCheckCredentials,a._queue,h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */ class kq{constructor(...a){for(let b=0;b<a.length;++b)if(0===a[b].length)throw new dF(dE.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dV(a)}isEqual(a){return this._internalPath.isEqual(a._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing an array of bytes.
 */ class kr{constructor(a){this._byteString=a}static fromBase64String(a){try{return new kr(aa.fromBase64String(a))}catch(b){throw new dF(dE.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+b)}}static fromUint8Array(a){return new kr(aa.fromUint8Array(a))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(a){return this._byteString.isEqual(a._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */ class aN{constructor(a){this._methodName=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */ class ks{constructor(a,b){if(!isFinite(a)||a< -90||a>90)throw new dF(dE.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+a);if(!isFinite(b)||b< -180||b>180)throw new dF(dE.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+b);this._lat=a,this._long=b}get latitude(){return this._lat}get longitude(){return this._long}isEqual(a){return this._lat===a._lat&&this._long===a._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(a){return aD(this._lat,a._lat)||aD(this._long,a._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let kt=/^__.*__$/;class ku{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return null!==this.fieldMask?new fT(a,this.data,this.fieldMask,b,this.fieldTransforms):new fS(a,this.data,b,this.fieldTransforms)}}class kv{constructor(a,b,c){this.data=a,this.fieldMask=b,this.fieldTransforms=c}toMutation(a,b){return new fT(a,this.data,this.fieldMask,b,this.fieldTransforms)}}function kw(a){switch(a){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw dD()}}class kx{constructor(b,c,d,e,a,f){this.settings=b,this.databaseId=c,this.wt=d,this.ignoreUndefinedProperties=e,void 0===a&&this.Xc(),this.fieldTransforms=a||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(a){return new kx(Object.assign(Object.assign({},this.settings),a),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(b){var a;let d=null===(a=this.path)|| void 0===a?void 0:a.child(b),c=this.ta({path:d,na:!1});return c.sa(b),c}ia(c){var a;let d=null===(a=this.path)|| void 0===a?void 0:a.child(c),b=this.ta({path:d,na:!1});return b.Xc(),b}ra(a){return this.ta({path:void 0,na:!0})}oa(a){return kO(a,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(a){return void 0!==this.fieldMask.find(b=>a.isPrefixOf(b))|| void 0!==this.fieldTransforms.find(b=>a.isPrefixOf(b.field))}Xc(){if(this.path)for(let a=0;a<this.path.length;a++)this.sa(this.path.get(a))}sa(a){if(0===a.length)throw this.oa("Document fields must not be empty");if(kw(this.Zc)&&kt.test(a))throw this.oa('Document fields cannot begin and end with "__"')}}class ky{constructor(a,b,c){this.databaseId=a,this.ignoreUndefinedProperties=b,this.wt=c||iI(a)}aa(a,b,c,d=!1){return new kx({Zc:a,methodName:b,ca:c,path:dV.emptyPath(),na:!1,ua:d},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function kz(a){let b=a._freezeSettings(),c=iI(a._databaseId);return new ky(a._databaseId,!!b.ignoreUndefinedProperties,c)}function kA(j,g,h,i,k,b={}){let a=j.aa(b.merge||b.mergeFields?2:0,g,h,k);kK("Data must be an object, but it was:",a,i);let l=kI(i,a),c,d;if(b.merge)c=new em(a.fieldMask),d=a.fieldTransforms;else if(b.mergeFields){let f=[];for(let m of b.mergeFields){let e=kL(g,m,h);if(!a.contains(e))throw new dF(dE.INVALID_ARGUMENT,`Field '${e}' is specified in your field mask but missing from your input data.`);kP(f,e)||f.push(e)}c=new em(f),d=a.fieldTransforms.filter(a=>c.covers(a.field))}else c=null,d=a.fieldTransforms;return new ku(new eT(l),c,d)}class kB extends aN{_toFieldTransform(a){if(2!==a.Zc)throw 1===a.Zc?a.oa(`${this._methodName}() can only appear at the top level of your update data`):a.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return a.fieldMask.push(a.path),null}isEqual(a){return a instanceof kB}}function kC(b,a,c){return new kx({Zc:3,ca:a.settings.ca,methodName:b._methodName,na:c},a.databaseId,a.wt,a.ignoreUndefinedProperties)}class kD extends null{_toFieldTransform(a){return new fJ(a.path,new fB)}isEqual(a){return a instanceof kD}}function kE(c,d,e,a){let b=c.aa(1,d,e);kK("Data must be an object, but it was:",b,a);let f=[],g=eT.empty();eh(a,(i,a)=>{let c=kN(d,i,e);a=(0,ai.m9)(a);let j=b.ia(c);if(a instanceof kB)f.push(c);else{let h=kH(a,j);null!=h&&(f.push(c),g.set(c,h))}});let h=new em(f);return new kv(g,h,b.fieldTransforms)}function kF(n,b,i,o,p,c){let j=n.aa(1,b,i),d=[kL(b,o,i)],k=[p];if(c.length%2!=0)throw new dF(dE.INVALID_ARGUMENT,`Function ${b}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<c.length;e+=2)d.push(kL(b,c[e])),k.push(c[e+1]);let f=[],l=eT.empty();for(let a=d.length-1;a>=0;--a)if(!kP(f,d[a])){let g=d[a],h=k[a];h=(0,ai.m9)(h);let q=j.ia(g);if(h instanceof kB)f.push(g);else{let m=kH(h,q);null!=m&&(f.push(g),l.set(g,m))}}let r=new em(f);return new kv(l,r,j.fieldTransforms)}function kG(a,b,c,d=!1){return kH(c,a.aa(d?4:3,b))}function kH(b,a){if(kJ(b=(0,ai.m9)(b)))return kK("Unsupported field value:",a,b),kI(b,a);if(b instanceof aN)return function(b,a){if(!kw(a.Zc))throw a.oa(`${b._methodName}() can only be used with update() and set()`);if(!a.path)throw a.oa(`${b._methodName}() is not currently supported inside arrays`);let c=b._toFieldTransform(a);c&&a.fieldTransforms.push(c)}(b,a),null;if(void 0===b&&a.ignoreUndefinedProperties)return null;if(a.path&&a.fieldMask.push(a.path),b instanceof Array){if(a.settings.na&&4!==a.Zc)throw a.oa("Nested arrays are not supported");return function(d,e){let b=[],c=0;for(let f of d){let a=kH(f,e.ra(c));null==a&&(a={nullValue:"NULL_VALUE"}),b.push(a),c++}return{arrayValue:{values:b}}}(b,a)}return function(a,b){if(null===(a=(0,ai.m9)(a)))return{nullValue:"NULL_VALUE"};if("number"==typeof a)return fx(b.wt,a);if("boolean"==typeof a)return{booleanValue:a};if("string"==typeof a)return{stringValue:a};if(a instanceof Date){let e=dR.fromDate(a);return{timestampValue:go(b.wt,e)}}if(a instanceof dR){let f=new dR(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:go(b.wt,f)}}if(a instanceof ks)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof kr)return{bytesValue:gp(b.wt,a._byteString)};if(a instanceof ki){let c=b.databaseId,d=a.firestore._databaseId;if(!d.isEqual(c))throw b.oa(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:gr(a.firestore._databaseId||b.databaseId,a._key.path)}}throw b.oa(`Unsupported field value: ${kf(a)}`)}(b,a)}function kI(b,a){let c={};return ei(b)?a.path&&a.path.length>0&&a.fieldMask.push(a.path):eh(b,(b,e)=>{let d=kH(e,a.ea(b));null!=d&&(c[b]=d)}),{mapValue:{fields:c}}}function kJ(a){return!("object"!=typeof a||null===a||a instanceof Array||a instanceof Date||a instanceof dR||a instanceof ks||a instanceof kr||a instanceof ki||a instanceof aN)}function kK(c,d,b){var a;if(!kJ(b)||"object"!=typeof(a=b)||null===a||Object.getPrototypeOf(a)!==Object.prototype&&null!==Object.getPrototypeOf(a)){let e=kf(b);throw"an object"===e?d.oa(c+" a custom object"):d.oa(c+" "+e)}}function kL(b,a,c){if((a=(0,ai.m9)(a))instanceof kq)return a._internalPath;if("string"==typeof a)return kN(b,a);throw kO("Field path arguments must be of type string or ",b,!1,void 0,c)}let kM=RegExp("[~\\*/\\[\\]]");function kN(b,a,c){if(a.search(kM)>=0)throw kO(`Invalid field path (${a}). Paths must not contain '~', '*', '/', '[', or ']'`,b,!1,void 0,c);try{return new kq(...a.split("."))._internalPath}catch(d){throw kO(`Invalid field path (${a}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,b,!1,void 0,c)}}function kO(g,h,i,b,d){let e=b&&!b.isEmpty(),f=void 0!==d,c=`Function ${h}() called with invalid data`;i&&(c+=" (via `toFirestore()`)"),c+=". ";let a="";return(e||f)&&(a+=" (found",e&&(a+=` in field ${b}`),f&&(a+=` in document ${d}`),a+=")"),new dF(dE.INVALID_ARGUMENT,c+g+a)}function kP(a,b){return a.some(a=>a.isEqual(b))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */ class ad{constructor(a,b,c,d,e){this._firestore=a,this._userDataWriter=b,this._key=c,this._document=d,this._converter=e}get id(){return this._key.path.lastSegment()}get ref(){return new ki(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let a=new kQ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(a)}return this._userDataWriter.convertValue(this._document.data.value)}}get(b){if(this._document){let a=this._document.data.field(kR("DocumentSnapshot.get",b));if(null!==a)return this._userDataWriter.convertValue(a)}}}class kQ extends ad{data(){return super.data()}}function kR(b,a){return"string"==typeof a?kN(b,a):a instanceof kq?a._internalPath:a._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ class kS{constructor(a,b){this.hasPendingWrites=a,this.fromCache=b}isEqual(a){return this.hasPendingWrites===a.hasPendingWrites&&this.fromCache===a.fromCache}}class aO extends ad{constructor(a,b,c,d,e,f){super(a,b,c,d,f),this._firestore=a,this._firestoreImpl=a,this.metadata=e}exists(){return super.exists()}data(a={}){if(this._document){if(this._converter){let b=new kT(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(b,a)}return this._userDataWriter.convertValue(this._document.data.value,a.serverTimestamps)}}get(b,c={}){if(this._document){let a=this._document.data.field(kR("DocumentSnapshot.get",b));if(null!==a)return this._userDataWriter.convertValue(a,c.serverTimestamps)}}}class kT extends aO{data(a={}){return super.data(a)}}function kU(a){switch(a){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return dD()}}function kV(a,c,b,d){if(b[0]=getModularInstance(b[0]),b[0]instanceof ad)return function(e,f,g,b,h){if(!b)throw new dF(dE.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${g}().`);let c=[];for(let a of fl(e))if(a.field.isKeyField())c.push(eH(f,b.key));else{let d=b.data.field(a.field);if(er(d))throw new dF(dE.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===d){let i=a.field.canonicalString();throw new dF(dE.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${i}' (used as the orderBy) does not exist.`)}c.push(d)}return new fa(c,h)}(a._query,a.firestore._databaseId,c,b[0]._document,d);{let e=kz(a.firestore);return function(d,i,j,b,e,k){let h=d.explicitOrderBy;if(e.length>h.length)throw new dF(dE.INVALID_ARGUMENT,`Too many arguments provided to ${b}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let f=[];for(let c=0;c<e.length;c++){let a=e[c];if(h[c].field.isKeyField()){if("string"!=typeof a)throw new dF(dE.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${b}(), but got a ${typeof a}`);if(!fk(d)&& -1!==a.indexOf("/"))throw new dF(dE.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${b}() must be a plain document ID, but '${a}' contains a slash.`);let g=d.path.child(dT.fromString(a));if(!y.isDocumentKey(g))throw new dF(dE.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${b}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);let l=new y(g);f.push(eH(i,l))}else{let m=kG(j,b,a);f.push(m)}}return new fa(f,k)}(a._query,a.firestore._databaseId,e,c,b,d)}}function kW(c,d,a){if("string"==typeof(a=getModularInstance(a))){if(""===a)throw new dF(dE.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fk(d)&& -1!==a.indexOf("/"))throw new dF(dE.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${a}' contains a '/' character.`);let b=d.path.child(dT.fromString(a));if(!y.isDocumentKey(b))throw new dF(dE.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${b}' is not because it has an odd number of segments (${b.length}).`);return eH(c,new y(b))}if(a instanceof ki)return eH(c,a._key);throw new dF(dE.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kf(a)}.`)}function kX(a,b){if(!Array.isArray(a)||0===a.length)throw new dF(dE.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${b.toString()}' filters.`);if(a.length>10)throw new dF(dE.INVALID_ARGUMENT,`Invalid Query. '${b.toString()}' filters support a maximum of 10 elements in the value array.`)}function kY(c,a,b){if(!b.isEqual(a))throw new dF(dE.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${a.toString()}' and so you must also use '${a.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${b.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */ class aP{convertValue(a,b="none"){switch(eA(a)){case 0:return null;case 1:return a.booleanValue;case 2:return ep(a.integerValue||a.doubleValue);case 3:return this.convertTimestamp(a.timestampValue);case 4:return this.convertServerTimestamp(a,b);case 5:return a.stringValue;case 6:return this.convertBytes(eq(a.bytesValue));case 7:return this.convertReference(a.referenceValue);case 8:return this.convertGeoPoint(a.geoPointValue);case 9:return this.convertArray(a.arrayValue,b);case 10:return this.convertObject(a.mapValue,b);default:throw dD()}}convertObject(a,c){let b={};return eh(a.fields,(a,d)=>{b[a]=this.convertValue(d,c)}),b}convertGeoPoint(a){return new ks(ep(a.latitude),ep(a.longitude))}convertArray(a,b){return(a.values||[]).map(a=>this.convertValue(a,b))}convertServerTimestamp(a,b){switch(b){case"previous":let c=es(a);return null==c?null:this.convertValue(c,b);case"estimate":return this.convertTimestamp(et(a));default:return null}}convertTimestamp(b){let a=eo(b);return new dR(a.seconds,a.nanos)}convertDocumentKey(e,b){var f;let a=dT.fromString(e);(f=gO(a))||dD();let c=new ev(a.get(1),a.get(3)),d=new y(a.popFirst(5));return c.isEqual(b)||dA(`Document ${d} contains a document reference within a different database (${c.projectId}/${c.database}) which is not supported. It will be treated as a reference in the current database (${b.projectId}/${b.database}) instead.`),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Converts custom model object of type T into `DocumentData` by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to `DocumentData`
 * because we want to provide the user with a more specific error message if
 * their `set()` or fails due to invalid data originating from a `toFirestore()`
 * call.
 */ function kZ(b,c,a){return b?a&&(a.merge||a.mergeFields)?b.toFirestore(c,a):b.toFirestore(c):c}function k$(a,b){if((a=getModularInstance(a)).firestore!==b)throw new dF(dE.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function k_(a){a=kg(a,ki);let b=kg(a.firestore,km);return(function c(a,d,e={}){let b=new dG;return a.asyncQueue.enqueueAndForget(async()=>(function(a,e,b,f,g){let c=new j3({next(c){e.enqueueAndForget(()=>jm(a,d));let h=c.docs.has(b);!h&&c.fromCache?g.reject(new dF(dE.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&c.fromCache&&f&&"server"===f.source?g.reject(new dF(dE.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(c)},error:a=>g.reject(a)}),d=new jq(fh(b.path),c,{includeMetadataChanges:!0,Du:!0});return jl(a,d)})(await ka(a),a.asyncQueue,d,e,b)),b.promise})(ko(b),a._key).then(c=>k4(b,a,c))}class k0 extends aP{constructor(a){super(),this.firestore=a}convertBytes(a){return new kr(a)}convertReference(a){let b=this.convertDocumentKey(a,this.firestore._databaseId);return new ki(this.firestore,null,b)}}function k1(a,d,b){a=kg(a,ki);let c=kg(a.firestore,km),e=kZ(a.converter,d,b);return k3(c,[kA(kz(c),"setDoc",a._key,e,null!==a.converter,b).toMutation(a._key,fL.none())])}function k2(a,b,f,...g){a=kg(a,ki);let c=kg(a.firestore,km),d=kz(c),e;return e="string"==typeof(b=(0,ai.m9)(b))||b instanceof kq?kF(d,"updateDoc",a._key,b,f,g):kE(d,"updateDoc",a._key,b),k3(c,[e.toMutation(a._key,fL.exists(!0))])}function k3(a,b){return function(a,c){let b=new dG;return a.asyncQueue.enqueueAndForget(async()=>{var d;return jC(await (d=a,j9(d).then(a=>a.syncEngine)),c,b)}),b.promise}(ko(a),b)}function k4(c,a,b){let d=b.docs.get(a._key),e=new k0(c);return new aO(c,e,a._key,d,new kS(b.hasPendingWrites,b.fromCache),a.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a sentinel for use with {@link @firebase/firestore/lite#(updateDoc:1)} or
 * {@link @firebase/firestore/lite#(setDoc:1)} with `{merge: true}` to mark a field for deletion.
 */ function k5(){return new kB("deleteField")}!function(a,b=!0){var c;dw=aT.Jn,(0,aT.Xd)(new aU.wA("firestore",(a,{options:c})=>{let e=a.getProvider("app").getImmediate(),d=new km(e,new dJ(a.getProvider("auth-internal")),new dN(a.getProvider("app-check-internal")));return c=Object.assign({useFetchStreams:b},c),d._setSettings(c),d},"PUBLIC")),(0,aT.KN)(dv,"3.4.12",void 0),(0,aT.KN)(dv,"3.4.12","esm2017")}()},3454:function(d,e,a){"use strict";var b,c;d.exports=(null==(b=a.g.process)?void 0:b.env)&&"object"==typeof(null==(c=a.g.process)?void 0:c.env)?a.g.process:a(7663)},1118:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(5876)}])},8468:function(d,b,a){"use strict";a.d(b,{"$":function(){return i},a:function(){return j}});var e=a(5893),c=a(7294),f=a(65),g=a(9863),h=(0,c.createContext)();function i(b){var d=b.children,a=(0,c.useState)({}),i=a[0],j=a[1];return(0,c.useEffect)(function(){var a=(0,f.Aj)(g.I,function(a){console.log("Auth",a),j(a)});return function(){a()}},[]),(0,e.jsx)(h.Provider,{value:{user:i,logIn:function(a,b){return(0,f.e5)(g.I,a,b)},signUp:function(a,b){return(0,f.Xb)(g.I,a,b)},logOut:function(){return j(null),(0,f.w7)(g.I)}},children:d})}function j(){return(0,c.useContext)(h)}},9863:function(p,j,b){"use strict";b.d(j,{I:function(){return aQ},F:function(){return aR}});var a=b(2238);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,a.KN)("firebase","9.9.0","app");var k=b(3333),e=b(4444),c=b(8463),q=b(6531);let f="@firebase/installations",d="0.5.12",r=`w:${d}`,s="FIS_v2",t=new e.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function u(a){return a instanceof e.ZR&&a.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function v({projectId:a}){return`https://firebaseinstallations.googleapis.com/v1/projects/${a}/installations`}function w(a){return{token:a.token,requestStatus:2,expiresIn:B(a.expiresIn),creationTime:Date.now()}}async function x(b,c){let d=await c.json(),a=d.error;return t.create("request-failed",{requestName:b,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function y({apiKey:a}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":a})}function z(b,{refreshToken:c}){let a=y(b);return a.append("Authorization",C(c)),a}async function A(b){let a=await b();return a.status>=500&&a.status<600?b():a}function B(a){return Number(a.replace("s","000"))}function C(a){return`${s} ${a}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function D({appConfig:a,heartbeatServiceProvider:h},{fid:d}){let k=v(a),e=y(a),f=h.getImmediate({optional:!0});if(f){let g=await f.getHeartbeatsHeader();g&&e.append("x-firebase-client",g)}let i={fid:d,authVersion:s,appId:a.appId,sdkVersion:r},l={method:"POST",headers:e,body:JSON.stringify(i)},b=await A(()=>fetch(k,l));if(b.ok){let c=await b.json(),j={fid:c.fid||d,registrationStatus:2,refreshToken:c.refreshToken,authToken:w(c.authToken)};return j}throw await x("Create Installation",b)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Returns a promise that resolves after given time passes. */ function E(a){return new Promise(b=>{setTimeout(b,a)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let F=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Returns a string key that can be used to identify the app. */ function G(a){return`${a.appName}!${a.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let H=new Map;function I(c,a){let b=G(c);J(b,a),K(b,a)}function J(b,c){let a=H.get(b);if(a)for(let d of a)d(c)}function K(b,c){let a=M();a&&a.postMessage({key:b,fid:c}),N()}let L=null;function M(){return!L&&"BroadcastChannel"in self&&((L=new BroadcastChannel("[Firebase] FID Change")).onmessage=a=>{J(a.data.key,a.data.fid)}),L}function N(){0===H.size&&L&&(L.close(),L=null)}let O="firebase-installations-store",P=null;function Q(){return P||(P=(0,q.X3)("firebase-installations-database",1,{upgrade(a,b){0===b&&a.createObjectStore(O)}})),P}async function R(b,a){let c=G(b),g=await Q(),d=g.transaction(O,"readwrite"),e=d.objectStore(O),f=await e.get(c);return await e.put(a,c),await d.done,f&&f.fid===a.fid||I(b,a.fid),a}async function S(b){let c=G(b),d=await Q(),a=d.transaction(O,"readwrite");await a.objectStore(O).delete(c),await a.done}async function T(e,g){let b=G(e),h=await Q(),f=h.transaction(O,"readwrite"),c=f.objectStore(O),d=await c.get(b),a=g(d);return void 0===a?await c.delete(b):await c.put(a,b),await f.done,a&&(!d||d.fid!==a.fid)&&I(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */ async function U(c){let a,b=await T(c.appConfig,d=>{let e=V(d),b=W(c,e);return a=b.registrationPromise,b.installationEntry});return""===b.fid?{installationEntry:await a}:{installationEntry:b,registrationPromise:a}}function V(a){let b=a||{fid:function(){try{let a=new Uint8Array(17),c=self.crypto||self.msCrypto;c.getRandomValues(a),a[0]=112+a[0]%16;let b=function c(a){let b=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(a){let b=btoa(String.fromCharCode(...a));return b.replace(/\+/g,"-").replace(/\//g,"_")}(a);return b.substr(0,22)}(a);return F.test(b)?b:""}catch(d){return""}}(),registrationStatus:0};return $(b)}function W(b,a){if(0===a.registrationStatus){if(!navigator.onLine){let d=Promise.reject(t.create("app-offline"));return{installationEntry:a,registrationPromise:d}}let c={fid:a.fid,registrationStatus:1,registrationTime:Date.now()},e=X(b,c);return{installationEntry:c,registrationPromise:e}}return 1===a.registrationStatus?{installationEntry:a,registrationPromise:Y(b)}:{installationEntry:a}}async function X(a,c){try{let d=await D(a,c);return R(a.appConfig,d)}catch(b){throw u(b)&&409===b.customData.serverCode?await S(a.appConfig):await R(a.appConfig,{fid:c.fid,registrationStatus:0}),b}}async function Y(b){let a=await Z(b.appConfig);for(;1===a.registrationStatus;)await E(100),a=await Z(b.appConfig);if(0===a.registrationStatus){let{installationEntry:c,registrationPromise:d}=await U(b);return d||c}return a}function Z(a){return T(a,a=>{if(!a)throw t.create("installation-not-found");return $(a)})}function $(a){return _(a)?{fid:a.fid,registrationStatus:0}:a}function _(a){return 1===a.registrationStatus&&a.registrationTime+1e4<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aa({appConfig:a,heartbeatServiceProvider:g},c){let k=ab(a,c),d=z(a,c),e=g.getImmediate({optional:!0});if(e){let f=await e.getHeartbeatsHeader();f&&d.append("x-firebase-client",f)}let h={installation:{sdkVersion:r,appId:a.appId}},l={method:"POST",headers:d,body:JSON.stringify(h)},b=await A(()=>fetch(k,l));if(b.ok){let i=await b.json(),j=w(i);return j}throw await x("Generate Auth Token",b)}function ab(a,{fid:b}){return`${v(a)}/${b}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */ async function ac(b,e=!1){let a,c=await T(b.appConfig,c=>{if(!ag(c))throw t.create("not-registered");let d=c.authToken;if(!e&&ah(d))return c;if(1===d.requestStatus)return a=ad(b,e),c;{if(!navigator.onLine)throw t.create("app-offline");let f=aj(c);return a=af(b,f),f}}),d=a?await a:c.authToken;return d}async function ad(a,d){let b=await ae(a.appConfig);for(;1===b.authToken.requestStatus;)await E(100),b=await ae(a.appConfig);let c=b.authToken;return 0===c.requestStatus?ac(a,d):c}function ae(a){return T(a,a=>{if(!ag(a))throw t.create("not-registered");let b=a.authToken;return ak(b)?Object.assign(Object.assign({},a),{authToken:{requestStatus:0}}):a})}async function af(a,c){try{let d=await aa(a,c),e=Object.assign(Object.assign({},c),{authToken:d});return await R(a.appConfig,e),d}catch(b){if(u(b)&&(401===b.customData.serverCode||404===b.customData.serverCode))await S(a.appConfig);else{let f=Object.assign(Object.assign({},c),{authToken:{requestStatus:0}});await R(a.appConfig,f)}throw b}}function ag(a){return void 0!==a&&2===a.registrationStatus}function ah(a){return 2===a.requestStatus&&!ai(a)}function ai(a){let b=Date.now();return b<a.creationTime||a.creationTime+a.expiresIn<b+36e5}function aj(a){let b={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},a),{authToken:b})}function ak(a){return 1===a.requestStatus&&a.requestTime+1e4<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */ async function al(c){let a=c,{installationEntry:d,registrationPromise:b}=await U(a);return b?b.catch(console.error):ac(a).catch(console.error),d.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */ async function am(b,c=!1){let a=b;await an(a);let d=await ac(a,c);return d.token}async function an(b){let{registrationPromise:a}=await U(b);a&&await a}function ao(a,{fid:b}){return`${v(a)}/${b}`}function ap(a){return t.create("missing-app-config-values",{valueName:a})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let l="installations";(0,a.Xd)(new c.wA(l,c=>{let b=c.getProvider("app").getImmediate(),d=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(a){if(!a||!a.options)throw ap("App Configuration");if(!a.name)throw ap("App Name");for(let b of["projectId","apiKey","appId"])if(!a.options[b])throw ap(b);return{appName:a.name,projectId:a.options.projectId,apiKey:a.options.apiKey,appId:a.options.appId}}(b),e=(0,a.qX)(b,"heartbeat");return{app:b,appConfig:d,heartbeatServiceProvider:e,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,a.Xd)(new c.wA("installations-internal",b=>{let c=b.getProvider("app").getImmediate(),d=(0,a.qX)(c,l).getImmediate();return{getId:()=>al(d),getToken:a=>am(d,a)}},"PRIVATE")),(0,a.KN)(f,d),(0,a.KN)(f,d,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Type constant for Firebase Analytics.
 */ let m="analytics",aq="https://www.googletagmanager.com/gtag/js",ar=new k.Yd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */ function as(a){return Promise.all(a.map(a=>a.catch(a=>a)))}async function at(e,a,f,g,b,h){let c=g[b];try{if(c)await a[c];else{let i=await as(f),d=i.find(a=>a.measurementId===b);d&&await a[d.appId]}}catch(j){ar.error(j)}e("config",b,h)}async function au(g,d,h,i,b){try{let a=[];if(b&&b.send_to){let c=b.send_to;Array.isArray(c)||(c=[c]);let j=await as(h);for(let l of c){let e=j.find(a=>a.measurementId===l),f=e&&d[e.appId];if(f)a.push(f);else{a=[];break}}}0===a.length&&(a=Object.values(d)),await Promise.all(a),g("event",i,b||{})}catch(k){ar.error(k)}}let av=new e.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),aw=new class{constructor(a={},b=1e3){this.throttleMetadata=a,this.intervalMillis=b}getThrottleMetadata(a){return this.throttleMetadata[a]}setThrottleMetadata(a,b){this.throttleMetadata[a]=b}deleteThrottleMetadata(a){delete this.throttleMetadata[a]}};async function ax(f){var b,c;let{appId:g,apiKey:h}=f,i={method:"GET",headers:(c=h,new Headers({Accept:"application/json","x-goog-api-key":c}))},j="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",g),a=await fetch(j,i);if(200!==a.status&&304!==a.status){let d="";try{let e=await a.json();(null===(b=e.error)|| void 0===b?void 0:b.message)&&(d=e.error.message)}catch(k){}throw av.create("config-fetch-failed",{httpStatus:a.status,responseMessage:d})}return a.json()}async function ay(f,c=aw,d){let{appId:a,apiKey:e,measurementId:b}=f.options;if(!a)throw av.create("no-app-id");if(!e){if(b)return{measurementId:b,appId:a};throw av.create("no-api-key")}let g=c.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new aC;return setTimeout(async()=>{h.abort()},void 0!==d?d:6e4),az({appId:a,apiKey:e,measurementId:b},g,h,c)}async function az(f,{throttleEndTimeMillis:o,backoffCount:g},j,a=aw){var h,i;let{appId:c,measurementId:b}=f;try{await aA(j,o)}catch(k){if(b)return ar.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${b} provided in the "measurementId" field in the local Firebase config. [${null===(h=k)|| void 0===h?void 0:h.message}]`),{appId:c,measurementId:b};throw k}try{let p=await ax(f);return a.deleteThrottleMetadata(c),p}catch(l){let d=l;if(!aB(d)){if(a.deleteThrottleMetadata(c),b)return ar.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${b} provided in the "measurementId" field in the local Firebase config. [${null==d?void 0:d.message}]`),{appId:c,measurementId:b};throw l}let m=503===Number(null===(i=null==d?void 0:d.customData)|| void 0===i?void 0:i.httpStatus)?(0,e.$s)(g,a.intervalMillis,30):(0,e.$s)(g,a.intervalMillis),n={throttleEndTimeMillis:Date.now()+m,backoffCount:g+1};return a.setThrottleMetadata(c,n),ar.debug(`Calling attemptFetch again in ${m} millis`),az(f,n,j,a)}}function aA(a,b){return new Promise((c,e)=>{let d=Math.max(b-Date.now(),0),f=setTimeout(c,d);a.addEventListener(()=>{clearTimeout(f),e(av.create("fetch-throttle",{throttleEndTimeMillis:b}))})})}function aB(b){if(!(b instanceof e.ZR)||!b.customData)return!1;let a=Number(b.customData.httpStatus);return 429===a||500===a||503===a||504===a}class aC{constructor(){this.listeners=[]}addEventListener(a){this.listeners.push(a)}abort(){this.listeners.forEach(a=>a())}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Event parameters to set on 'gtag' during initialization.
 */ let aD;async function aE(a,e,b,c,d){if(d&&d.global){a("event",b,c);return}{let f=await e,g=Object.assign(Object.assign({},c),{send_to:f});a("event",b,g)}}let aF;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function aG(){var a;if(!(0,e.hl)())return ar.warn(av.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,e.eu)()}catch(b){return ar.warn(av.create("indexeddb-unavailable",{errorInfo:null===(a=b)|| void 0===a?void 0:a.toString()}).message),!1}return!0}async function aH(h,i,n,o,a,j,f){var c,k,l;let d=ay(h);d.then(a=>{n[a.measurementId]=a.appId,h.options.measurementId&&a.measurementId!==h.options.measurementId&&ar.warn(`The measurement ID in the local Firebase config (${h.options.measurementId}) does not match the measurement ID fetched from the server (${a.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(a=>ar.error(a)),i.push(d);let m=aG().then(a=>a?o.getId():void 0),[e,g]=await Promise.all([d,m]);!function(){let b=window.document.getElementsByTagName("script");for(let a of Object.values(b))if(a.src&&a.src.includes(aq))return a;return null}()&&function(b,c){let a=document.createElement("script");a.src=`${aq}?l=${b}&id=${c}`,a.async=!0,document.head.appendChild(a)}(j,e.measurementId),aF&&(a("consent","default",aF),aF=k=void 0),a("js",new Date);let b=null!==(c=null==f?void 0:f.config)&& void 0!==c?c:{};return b.origin="firebase",b.update=!0,null!=g&&(b.firebase_id=g),a("config",e.measurementId,b),aD&&(a("set",aD),aD=l=void 0),e.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Analytics Service class.
 */ class aI{constructor(a){this.app=a}_delete(){return delete aJ[this.app.options.appId],Promise.resolve()}}let aJ={},aK=[],aL={},aM="dataLayer",aN,aO,aP=!1,g="@firebase/analytics",h="0.8.0";(0,a.Xd)(new c.wA(m,(a,{options:b})=>{let c=a.getProvider("app").getImmediate(),d=a.getProvider("installations-internal").getImmediate();return function(a,k,l){!function(){let a=[];if((0,e.ru)()&&a.push("This is a browser extension environment."),(0,e.zI)()||a.push("Cookies are not available."),a.length>0){let b=a.map((a,b)=>`(${b+1}) ${a}`).join(" "),c=av.create("invalid-analytics-context",{errorInfo:b});ar.warn(c.message)}}();let c=a.options.appId;if(!c)throw av.create("no-app-id");if(!a.options.apiKey){if(a.options.measurementId)ar.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${a.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw av.create("no-api-key")}if(null!=aJ[c])throw av.create("already-exists",{id:c});if(!aP){var d,h,i,j,m,b;let g;d=aM,g=[],Array.isArray(window[d])?g=window[d]:window[d]=g;let f,{wrappedGtag:n,gtagCore:o}=(h=aJ,i=aK,j=aL,m=aM,b="gtag",f=function(...a){window[m].push(arguments)},window[b]&&"function"==typeof window[b]&&(f=window[b]),window[b]=function(b,c,d,e){async function a(a,f,g){try{"event"===a?await au(b,c,d,f,g):"config"===a?await at(b,c,d,e,f,g):"consent"===a?b("consent","update",g):b("set",f)}catch(h){ar.error(h)}}return a}(f,h,i,j),{gtagCore:f,wrappedGtag:window[b]});aO=n,aN=o,aP=!0}aJ[c]=aH(a,aK,aL,k,aN,aM,l);let p=new aI(a);return p}(c,d,b)},"PUBLIC")),(0,a.Xd)(new c.wA("analytics-internal",function(a){try{let c=a.getProvider(m).getImmediate();return{logEvent:(a,b,d)=>(function(a,b,c,d){aE(aO,aJ[(a=(0,e.m9)(a)).app.options.appId],b,c,d).catch(a=>ar.error(a))})(c,a,b,d)}}catch(b){throw av.create("interop-component-reg-failed",{reason:b})}},"PRIVATE")),(0,a.KN)(g,h),(0,a.KN)(g,h,"esm2017");var n=b(5321),o=b(65),i=(0,a.ZF)({apiKey:"AIzaSyAZP-gvy7yEPKVImW7Ho047jeq6dvuX9Qc",authDomain:"makemelunch-d8d20.firebaseapp.com",databaseURL:"https://makemelunch-d8d20-default-rtdb.firebaseio.com",projectId:"makemelunch-d8d20",storageBucket:"your_storage_bucket",messagingSenderId:"makemelunch-d8d20.appspot.com",appId:"1:947794987440:web:738d022fae02723b836e75",measurementId:"G-0Q0DBY0N4E"}),aQ=(0,o.v0)(i),aR=(0,n.ad)(i)},5876:function(c,b,a){"use strict";a.r(b),a.d(b,{default:function(){return g}});var d=a(4924),e=a(5893);a(906);var f=a(8468),g=function(a){var b=a.Component,c=a.pageProps;return(0,e.jsx)(f.$,{children:(0,e.jsx)(b,function(e){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){(0,d.Z)(e,a,c[a])})}return e}({},c))})}},906:function(){},7663:function(a){!function(){var d={308:function(c){var e,f,g,a=c.exports={};function h(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function j(a){if(e===setTimeout)return setTimeout(a,0);if((e===h||!e)&&setTimeout)return e=setTimeout,setTimeout(a,0);try{return e(a,0)}catch(b){try{return e.call(null,a,0)}catch(c){return e.call(this,a,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:h}catch(a){e=h}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(b){f=i}}();var k=[],l=!1,m=-1;function n(){l&&g&&(l=!1,g.length?k=g.concat(k):m=-1,k.length&&o())}function o(){if(!l){var b=j(n);l=!0;for(var a=k.length;a;){for(g=k,k=[];++m<a;)g&&g[m].run();m=-1,a=k.length}g=null,l=!1,function(a){if(f===clearTimeout)return clearTimeout(a);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(a);try{f(a)}catch(b){try{return f.call(null,a)}catch(c){return f.call(this,a)}}}(b)}}function d(a,b){this.fun=a,this.array=b}function b(){}a.nextTick=function(c){var b=Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)b[a-1]=arguments[a];k.push(new d(c,b)),1!==k.length||l||j(o)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=b,a.addListener=b,a.once=b,a.off=b,a.removeListener=b,a.removeAllListeners=b,a.emit=b,a.prependListener=b,a.prependOnceListener=b,a.listeners=function(a){return[]},a.binding=function(a){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(a){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},e={};function b(a){var f=e[a];if(void 0!==f)return f.exports;var c=e[a]={exports:{}},g=!0;try{d[a](c,c.exports,b),g=!1}finally{g&&delete e[a]}return c.exports}b.ab="//";var c=b(308);a.exports=c}()},2238:function(j,g,a){"use strict";a.d(g,{Jn:function(){return x},KN:function(){return c},Mq:function(){return z},Xd:function(){return f},ZF:function(){return y},qX:function(){return u}});var k,d=a(8463),h=a(3333),i=a(4444),l=a(6531);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class m{constructor(a){this.container=a}getPlatformInfoString(){let a=this.container.getProviders();return a.map(a=>{if(!n(a))return null;{let b=a.getImmediate();return`${b.library}/${b.version}`}}).filter(a=>a).join(" ")}}function n(b){let a=b.getComponent();return(null==a?void 0:a.type)==="VERSION"}let b="@firebase/app",e="0.7.28",o=new h.Yd("@firebase/app"),p="[DEFAULT]",q={[b]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},r=new Map,s=new Map;function t(a,b){try{a.container.addComponent(b)}catch(c){o.debug(`Component ${b.name} failed to register with FirebaseApp ${a.name}`,c)}}function f(a){let b=a.name;if(s.has(b))return o.debug(`There were multiple attempts to register component ${b}.`),!1;for(let c of(s.set(b,a),r.values()))t(c,a);return!0}function u(a,c){let b=a.container.getProvider("heartbeat").getImmediate({optional:!0});return b&&b.triggerHeartbeat(),a.container.getProvider(c)}let v=new i.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w{constructor(b,a,c){this._isDeleted=!1,this._options=Object.assign({},b),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new d.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(a){this.checkDestroyed(),this._automaticDataCollectionEnabled=a}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(a){this._isDeleted=a}checkDestroyed(){if(this.isDeleted)throw v.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ let x="9.9.0";function y(f,b={}){if("object"!=typeof b){let j=b;b={name:j}}let e=Object.assign({name:p,automaticDataCollectionEnabled:!1},b),a=e.name;if("string"!=typeof a||!a)throw v.create("bad-app-name",{appName:String(a)});let c=r.get(a);if(c){if((0,i.vZ)(f,c.options)&&(0,i.vZ)(e,c.config))return c;throw v.create("duplicate-app",{appName:a})}let g=new d.H0(a);for(let k of s.values())g.addComponent(k);let h=new w(f,e,g);return r.set(a,h),h}function z(a=p){let b=r.get(a);if(!b)throw v.create("no-app",{appName:a});return b}function c(i,c,j){var e;let a=null!==(e=q[i])&& void 0!==e?e:i;j&&(a+=`-${j}`);let g=a.match(/\s|\//),h=c.match(/\s|\//);if(g||h){let b=[`Unable to register library "${a}" with version "${c}":`];g&&b.push(`library name "${a}" contains illegal characters (whitespace or "/")`),g&&h&&b.push("and"),h&&b.push(`version name "${c}" contains illegal characters (whitespace or "/")`),o.warn(b.join(" "));return}f(new d.wA(`${a}-version`,()=>({library:a,version:c}),"VERSION"))}let A="firebase-heartbeat-store",B=null;function C(){return B||(B=(0,l.X3)("firebase-heartbeat-database",1,{upgrade(a,b){0===b&&a.createObjectStore(A)}}).catch(a=>{throw v.create("storage-open",{originalErrorMessage:a.message})})),B}async function D(b){var a;try{let c=await C();return c.transaction(A).objectStore(A).get(F(b))}catch(d){throw v.create("storage-get",{originalErrorMessage:null===(a=d)|| void 0===a?void 0:a.message})}}async function E(c,d){var a;try{let e=await C(),b=e.transaction(A,"readwrite"),f=b.objectStore(A);return await f.put(d,F(c)),b.done}catch(g){throw v.create("storage-set",{originalErrorMessage:null===(a=g)|| void 0===a?void 0:a.message})}}function F(a){return`${a.name}!${a.options.appId}`}class G{constructor(a){this.container=a,this._heartbeatsCache=null;let b=this.container.getProvider("app").getImmediate();this._storage=new J(b),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){let b=this.container.getProvider("platform-logger").getImmediate(),c=b.getPlatformInfoString(),a=H();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(b=>b.date===a))?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:c}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{let b=new Date(a.date).valueOf(),c=Date.now();return c-b<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let b=H(),{heartbeatsToSend:c,unsentEntries:a}=I(this._heartbeatsCache.heartbeats),d=(0,i.L)(JSON.stringify({version:2,heartbeats:c}));return this._heartbeatsCache.lastSentHeartbeatDate=b,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),d}}function H(){let a=new Date;return a.toISOString().substring(0,10)}function I(e,f=1024){let a=[],b=e.slice();for(let c of e){let d=a.find(a=>a.agent===c.agent);if(d){if(d.dates.push(c.date),K(a)>f){d.dates.pop();break}}else if(a.push({agent:c.agent,dates:[c.date]}),K(a)>f){a.pop();break}b=b.slice(1)}return{heartbeatsToSend:a,unsentEntries:b}}class J{constructor(a){this.app=a,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then(()=>!0).catch(()=>!1)}async read(){let a=await this._canUseIndexedDBPromise;if(!a)return{heartbeats:[]};{let b=await D(this.app);return b||{heartbeats:[]}}}async overwrite(b){var a;let c=await this._canUseIndexedDBPromise;if(c){let d=await this.read();return E(this.app,{lastSentHeartbeatDate:null!==(a=b.lastSentHeartbeatDate)&& void 0!==a?a:d.lastSentHeartbeatDate,heartbeats:b.heartbeats})}}async add(b){var a;let d=await this._canUseIndexedDBPromise;if(d){let c=await this.read();return E(this.app,{lastSentHeartbeatDate:null!==(a=b.lastSentHeartbeatDate)&& void 0!==a?a:c.lastSentHeartbeatDate,heartbeats:[...c.heartbeats,...b.heartbeats]})}}}function K(a){return(0,i.L)(JSON.stringify({version:2,heartbeats:a})).length}f(new d.wA("platform-logger",a=>new m(a),"PRIVATE")),f(new d.wA("heartbeat",a=>new G(a),"PRIVATE")),c(b,e,""),c(b,e,"esm2017"),c("fire-js","")},8463:function(c,b,a){"use strict";a.d(b,{H0:function(){return j},wA:function(){return e}});var d=a(4444);class e{constructor(a,b,c){this.name=a,this.instanceFactory=b,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(a){return this.instantiationMode=a,this}setMultipleInstances(a){return this.multipleInstances=a,this}setServiceProps(a){return this.serviceProps=a,this}setInstanceCreatedCallback(a){return this.onInstanceCreated=a,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let f="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class g{constructor(a,b){this.name=a,this.container=b,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){let b=new d.BH;if(this.instancesDeferred.set(a,b),this.isInitialized(a)||this.shouldAutoInitialize())try{let c=this.getOrInitializeService({instanceIdentifier:a});c&&b.resolve(c)}catch(f){}}return this.instancesDeferred.get(a).promise}getImmediate(a){var b;let c=this.normalizeInstanceIdentifier(null==a?void 0:a.identifier),d=null!==(b=null==a?void 0:a.optional)&& void 0!==b&&b;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(e){if(d)return null;throw e}else{if(d)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(a){if(a.name!==this.name)throw Error(`Mismatching Component ${a.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=a,this.shouldAutoInitialize()){if(i(a))try{this.getOrInitializeService({instanceIdentifier:f})}catch(g){}for(let[b,c]of this.instancesDeferred.entries()){let d=this.normalizeInstanceIdentifier(b);try{let e=this.getOrInitializeService({instanceIdentifier:d});c.resolve(e)}catch(h){}}}}clearInstance(a=f){this.instancesDeferred.delete(a),this.instancesOptions.delete(a),this.instances.delete(a)}async delete(){let a=Array.from(this.instances.values());await Promise.all([...a.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...a.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return null!=this.component}isInitialized(a=f){return this.instances.has(a)}getOptions(a=f){return this.instancesOptions.get(a)||{}}initialize(b={}){let{options:d={}}=b,a=this.normalizeInstanceIdentifier(b.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let c=this.getOrInitializeService({instanceIdentifier:a,options:d});for(let[e,f]of this.instancesDeferred.entries()){let g=this.normalizeInstanceIdentifier(e);a===g&&f.resolve(c)}return c}onInit(c,f){var b;let a=this.normalizeInstanceIdentifier(f),d=null!==(b=this.onInitCallbacks.get(a))&& void 0!==b?b:new Set;d.add(c),this.onInitCallbacks.set(a,d);let e=this.instances.get(a);return e&&c(e,a),()=>{d.delete(c)}}invokeOnInitCallbacks(c,a){let b=this.onInitCallbacks.get(a);if(b)for(let d of b)try{d(c,a)}catch(e){}}getOrInitializeService({instanceIdentifier:a,options:c={}}){let b=this.instances.get(a);if(!b&&this.component&&(b=this.component.instanceFactory(this.container,{instanceIdentifier:h(a),options:c}),this.instances.set(a,b),this.instancesOptions.set(a,c),this.invokeOnInitCallbacks(b,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,b)}catch(d){}return b||null}normalizeInstanceIdentifier(a=f){return this.component?this.component.multipleInstances?a:f:a}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function h(a){return a===f?void 0:a}function i(a){return"EAGER"===a.instantiationMode}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class j{constructor(a){this.name=a,this.providers=new Map}addComponent(a){let b=this.getProvider(a.name);if(b.isComponentSet())throw Error(`Component ${a.name} has already been registered with ${this.name}`);b.setComponent(a)}addOrOverwriteComponent(a){let b=this.getProvider(a.name);b.isComponentSet()&&this.providers.delete(a.name),this.addComponent(a)}getProvider(a){if(this.providers.has(a))return this.providers.get(a);let b=new g(a,this);return this.providers.set(a,b),b}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,c,d){"use strict";var a,b;d.d(c,{Yd:function(){return i},in:function(){return a}});(b=a||(a={}))[b.DEBUG=0]="DEBUG",b[b.VERBOSE=1]="VERBOSE",b[b.INFO=2]="INFO",b[b.WARN=3]="WARN",b[b.ERROR=4]="ERROR",b[b.SILENT=5]="SILENT";let f={debug:a.DEBUG,verbose:a.VERBOSE,info:a.INFO,warn:a.WARN,error:a.ERROR,silent:a.SILENT},g=a.INFO,h={[a.DEBUG]:"log",[a.VERBOSE]:"log",[a.INFO]:"info",[a.WARN]:"warn",[a.ERROR]:"error"};class i{constructor(a){this.name=a,this._logLevel=g,this._logHandler=(b,a,...d)=>{if(a<b.logLevel)return;let e=new Date().toISOString(),c=h[a];if(c)console[c](`[${e}]  ${b.name}:`,...d);else throw Error(`Attempted to log a message with an invalid logType (value: ${a})`)},this._userLogHandler=null,[].push(this)}get logLevel(){return this._logLevel}set logLevel(b){if(!(b in a))throw TypeError(`Invalid value "${b}" assigned to \`logLevel\``);this._logLevel=b}setLogLevel(a){this._logLevel="string"==typeof a?f[a]:a}get logHandler(){return this._logHandler}set logHandler(a){if("function"!=typeof a)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=a}get userLogHandler(){return this._userLogHandler}set userLogHandler(a){this._userLogHandler=a}debug(...b){this._userLogHandler&&this._userLogHandler(this,a.DEBUG,...b),this._logHandler(this,a.DEBUG,...b)}log(...b){this._userLogHandler&&this._userLogHandler(this,a.VERBOSE,...b),this._logHandler(this,a.VERBOSE,...b)}info(...b){this._userLogHandler&&this._userLogHandler(this,a.INFO,...b),this._logHandler(this,a.INFO,...b)}warn(...b){this._userLogHandler&&this._userLogHandler(this,a.WARN,...b),this._logHandler(this,a.WARN,...b)}error(...b){this._userLogHandler&&this._userLogHandler(this,a.ERROR,...b),this._logHandler(this,a.ERROR,...b)}}},4924:function(c,a,b){"use strict";function d(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}b.d(a,{Z:function(){return d}})},6531:function(c,a,b){"use strict";b.d(a,{X3:function(){return o}});let d=(b,a)=>a.some(a=>b instanceof a),e,f,g=new WeakMap,h=new WeakMap,i=new WeakMap,j=new WeakMap,k=new WeakMap,l={get(a,b,c){if(a instanceof IDBTransaction){if("done"===b)return h.get(a);if("objectStoreNames"===b)return a.objectStoreNames||i.get(a);if("store"===b)return c.objectStoreNames[1]?void 0:c.objectStore(c.objectStoreNames[0])}return m(a[b])},set:(a,b,c)=>(a[b]=c,!0),has:(b,a)=>b instanceof IDBTransaction&&("done"===a||"store"===a)||a in b};function m(a){if(a instanceof IDBRequest)return function(b){let a=new Promise((d,e)=>{let f=()=>{b.removeEventListener("success",a),b.removeEventListener("error",c)},a=()=>{d(m(b.result)),f()},c=()=>{e(b.error),f()};b.addEventListener("success",a),b.addEventListener("error",c)});return a.then(a=>{a instanceof IDBCursor&&g.set(a,b)}).catch(()=>{}),k.set(a,b),a}(a);if(j.has(a))return j.get(a);let b=function(a){if("function"==typeof a){var b;return(b=a)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(f||(f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey,])).includes(b)?function(...a){return b.apply(n(this),a),m(g.get(this))}:function(...a){return m(b.apply(n(this),a))}:function(a,...d){let c=b.call(n(this),a,...d);return i.set(c,a.sort?a.sort():[a]),m(c)}}return(a instanceof IDBTransaction&&function(a){if(h.has(a))return;let b=new Promise((d,e)=>{let f=()=>{a.removeEventListener("complete",c),a.removeEventListener("error",b),a.removeEventListener("abort",b)},c=()=>{d(),f()},b=()=>{e(a.error||new DOMException("AbortError","AbortError")),f()};a.addEventListener("complete",c),a.addEventListener("error",b),a.addEventListener("abort",b)});h.set(a,b)}(a),d(a,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction,])))?new Proxy(a,l):a}(a);return b!==a&&(j.set(a,b),k.set(b,a)),b}let n=a=>k.get(a);function o(c,d,{blocked:e,upgrade:f,blocking:g,terminated:h}={}){let a=indexedDB.open(c,d),b=m(a);return f&&a.addEventListener("upgradeneeded",b=>{f(m(a.result),b.oldVersion,b.newVersion,m(a.transaction))}),e&&a.addEventListener("blocked",()=>e()),b.then(a=>{h&&a.addEventListener("close",()=>h()),g&&a.addEventListener("versionchange",()=>g())}).catch(()=>{}),b}let p=["get","getKey","getAll","getAllKeys","count"],q=["put","add","delete","clear"],r=new Map;function s(c,a){if(!(c instanceof IDBDatabase&&!(a in c)&&"string"==typeof a))return;if(r.get(a))return r.get(a);let b=a.replace(/FromIndex$/,""),e=a!==b,f=q.includes(b);if(!(b in(e?IDBIndex:IDBObjectStore).prototype)||!(f||p.includes(b)))return;let d=async function(g,...c){let d=this.transaction(g,f?"readwrite":"readonly"),a=d.store;return e&&(a=a.index(c.shift())),(await Promise.all([a[b](...c),f&&d.done,]))[0]};return r.set(a,d),d}!function(a){l=a(l)}(a=>({...a,get:(b,c,d)=>s(b,c)||a.get(b,c,d),has:(b,c)=>!!s(b,c)||a.has(b,c)}))}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(1118),b(387)}),_N_E=a.O()}])