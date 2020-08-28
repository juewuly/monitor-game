import Cookie from '../cookie';

const doc = document;
const nav = navigator;
const screen = window.screen;
const domain = document.domain.toLowerCase();
const ua = nav.userAgent.toLowerCase();
let guidCookieDomains = ['360.cn', 'so.com', 'leidian.com']; 


export default class guid {
  constructor() {

  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new guid();
    }

    return this._instance;
  }

  hash(s) {
    let h = 0;
    let g = 0;
    let i = s.length - 1;

    for(i; i>= 0; i--) {
      var code = parseInt(s.charCodeAt(i), 10);
      h = ((h << 6) & 0xfffffff) + code + (code << 14);
      if ((g = h & 0xfe00000) != 0) {
        h = (h ^ (g >> 21));
      }
    }
    return h;
  }

  guid() {
    let s = [nav.appName, nav.version, nav.language || nav.browserLanguage, nav.platform, nav.userAgent, screen.width, 'x', screen.height, screen.colorDepth, doc.referrer].join("");
    let sLen = s.length;
    let hLen = window.history.length;

    while(hLen) {
      s += (hLen--) ^ (sLen++);
    }

    return (Math.round(Math.random() * 2147483647) ^ this.hash(s)) * 2147483647;
  }

  getGuid() {
    let guidKey = '__guid';
    let id = Cookie.get(guidKey);

    if(!id) {
      id = [this.hash(isLocal ? '' : doc.domain), this.guid(), +new Date + Math.random() + Math.random() ].join('.');

      let config = { 
        expires : 24 * 3600 * 1000 * 300, 
        path : '/'
      };

      //如果是设置了guidCookieDomains，__guid放在guidCookieDomain域下
      if(guidCookieDomains.length) {
        for(let i = 0; i < guidCookieDomains.length; i++) {
          let guidCookieDomain = guidCookieDomains[i],
            gDomain = '.' + guidCookieDomain;

          if((domain.indexOf(gDomain) > 0 && domain.lastIndexOf(gDomain) == domain.length - gDomain.length) || domain == guidCookieDomain) {
            config.domain = gDomain;
            break;
          }
        }
      }

      Cookie.set(guidKey, id, config);
    }

    return id;
  }

  get guid() {
    if (!this._guid) {
      this._guid = this.getGuid();
    }

    return this._guid;
  }
}