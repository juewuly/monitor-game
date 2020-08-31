import config from '../config';
import StringH from '../stringH';


const configInstance = config.Instance;


const doc = document;
const nav = navigator;
const screen = window.screen;
const ua = nav.userAgent.toLowerCase();

export default class util {
  constructor() {

  }

  static getReferrer() {
    const ref =  doc.referrer || '';
    if(ref.indexOf('pass') > -1 || ref.indexOf('pwd') > -1) {
        return '403';
    }
    return ref;
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

  static getContainerId(el) {
    let areaStr;
    let name;
    let maxLength = 100;

    if(configInstance.areaIds) {
      areaStr = new RegExp('^(' + configInstance.areaIds.join('|') + ')$', 'ig');
    }

    const dataKey = configInstance.getDataKey();

    while(el) {
      //bk模式
      if (el.attributes && (dataKey in el.attributes || `data-${dataKey}` in el.attributes) ) {
        name = el.getAttribute(dataKey) || el.getAttribute(`data-${dataKey}`);

        if(name) {
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