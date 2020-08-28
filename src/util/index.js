import guid from './guid';
import count from './count';
import config from '../config';
import StringH from '../stringH';


const guidInstance = guid.Instance;
const countInstance = count.Instance;
const configInstance = config.Instance;


const doc = document;
const nav = navigator;
const screen = window.screen;
const domain = document.domain.toLowerCase();
const ua = nav.userAgent.toLowerCase();

export default class util {
  constructor() {

  }

  static test() {
    return 'test util';
  }

  static getColorDepth() {
    return screen.colorDepth + '-bit';
  }

  /**
   * 获取语言
   * @return {[type]} [description]
   */
  static getLanguage() {
    return (nav.language || nav.browserLanguage).toLowerCase();
  }

  /**
   * 获取屏幕大小
   * @return {[type]} [description]
   */
  static getScreenSize() {
    return screen.width + 'x' + screen.height;
  }

  static getProject() {
    return '';
  }

  static getReferrer() {
    const ref =  doc.referrer || '';
    if(ref.indexOf('pass') > -1 || ref.indexOf('pwd') > -1) {
        return '403';
    }
    return ref;
  }

  static getBrowser() {
    const browsers = {
      '360se-ua':'360se',
      'TT':'tencenttraveler',
      'Maxthon':'maxthon',
      'GreenBrowser':'greenbrowser',
      'Sogou':'se 1.x / se 2.x',
      'TheWorld':'theworld'
    };

    for (let i in browsers){
      if(ua.indexOf(browsers[i]) > -1) {
        return i;
      }
    }

    let is360se = false;
    try{
      if (+external.twGetVersion(external.twGetSecurityID(window)).replace(/\./g,"") > 1013) {
        is360se = true;
      }
    } catch (e) { 

    }

    if (is360se) {
      return "360se-noua";
    }

    let result = ua.match(/(msie|chrome|safari|firefox|opera|trident)/);
    result = result ? result[0] : '';
    
    if (result == 'msie') {
      result = ua.match(/msie[^;]+/) + '';
    } else if (result == 'trident') {
      ua.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/ig, function(a, c) {
        result = 'msie ' + c;
      });
    }

    return result;
  }

  static getLocation() {
    let url = '';

    //避免IE下设置domain后，读取location.href属性报权限错误
    try {
      url = location.href;
    } catch (e) {
      url = doc.createElement('a');
      url.href = '';
      url = url.href;
    }

    //去掉queryString和Hash
    url = url.replace(/[?#].*$/, ''); 

    //如果不是.html .htm .shtml .php结尾的url，补上/
    url = /\.(s?htm|php)/.test(url) ? url : (url.replace(/\/$/,'') + '/');

    return url;
  }

  static getGuid() {
    return guidInstance.guid;
  }

  static getCount() {
    return countInstance.count;
  }

  static getFlashVer() {
    let ver = -1;
    if (nav.plugins && nav.mimeTypes.length) {
      let plugin = nav.plugins["Shockwave Flash"];
      if (plugin && plugin.description) {
        ver = plugin.description
          .replace(/([a-zA-Z]|\s)+/, "")
          .replace(/(\s)+r/, ".") + ".0";
      }
    } else if (window.ActiveXObject && !window.opera) {
      try {
        let c = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (c) {
          let version = c.GetVariable("$version");
          ver =  version.replace(/WIN/g,'').replace(/,/g,'.');
        }
      } catch(e) {}
    }

    ver = parseInt(ver, 10);
    return ver;
  }

  static getContainerId(el) {
    let areaStr;
    let name;
    let maxLength = 100;

    if(configInstance.areaIds) {
      areaStr = new RegExp('^(' + configInstance.areaIds.join('|') + ')$', 'ig');
    }

    while(el) {
      //bk模式
      if (el.attributes && ('bk' in el.attributes || 'data-bk' in el.attributes) ) {
        name = el.getAttribute('bk') || el.getAttribute('data-bk');

        if(name) {
          name = 'bk:' + name;
          return name.substr(0, maxLength);
        }

        if (el.id) {
          name = el.getAttribute('data-desc') || el.id;
          return name.substr(0, maxLength);
        }
      } else if (areaStr) { //setId模式
        if (el.id && areaStr.test(el.id)) {
          name = el.getAttribute('data-desc') || el.id;
          return name.substr(0, maxLength);
        }
      }

      el = el.parentNode;
    }

    return '';
  }

  static getText(el) {
    let str = "";

    if(el.tagName.toLowerCase() == 'input') {
      str = el.getAttribute('text') || el.getAttribute('data-text') || el.value || el.title || '';
    } else {
      str = el.getAttribute('text') || el.getAttribute('data-text') || el.innerText || el.textContent || el.title || '';
    }

    return StringH.trim(str).substr(0, 100);
  }

  static getHref(el) {
    try {
      return el.getAttribute('data-href') || el.href || '';
    } catch(e) {
      return '';
    }
  }
}