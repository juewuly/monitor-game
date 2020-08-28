import util from './util';
import EventH from './eventH';
import NodeH from './nodeH';
import Cookie from './cookie';

export default class data {
  constructor() {

  }

  static test() {
    return 'test data';
  }

  static getBase() {
    return {
      p : util.getProject(),
      u : util.getLocation(),
      id : util.getGuid(),
      guid : util.getGuid()
    };
  }

  static getTrack(cookies) {
    let obj = {
      b : util.getBrowser(), 
      c : util.getCount(),
      r : util.getReferrer(),
      fl : util.getFlashVer(),
      sd: util.getColorDepth(),
      sr: util.getScreenSize(),
      ul: util.getLanguage()
    };
    //自定义要获取的 cookie
    if (cookies) {
      cookies = cookies.split(',');
      let cdata = [];
      for (let i=0, length=cookies.length; i<length; i++) {
        let value = Cookie.get(cookies[i]);
        cdata.push(cookies[i] + '=' + encodeURIComponent(value));
      }
      obj.uc = encodeURIComponent(cdata.join('&'));
    }
    return obj;
  }

  static getClick(e) {
    e = EventH.fix(e || event);
    let target = e.target;
    let tagName = target.tagName;
    let containerId = util.getContainerId(target);

    if (target.type && (target.type == 'submit' || target.type == 'button')) {
      let form = NodeH.parentNode(target, 'FORM');
      let result = {};

      if (form) {
        let formId = form.id || '';
        let tId = target.id;

        result = {
          f : form.action,
          c : 'form:' + (form.name || formId),
          cId : containerId
        };

        if ((formId == 'search-form' || formId == 'searchForm') && (tId == 'searchBtn' || tId == 'search-btn')) {
          let keywordEl = $('kw') || $('search-kw') || $('kw1');
          result.w = keywordEl ? keywordEl.value : '';
        }
      } else {
        result = {
          f : util.getHref(target),
          c : util.getText(target),
          cId : containerId
        }
      }

      return result;
    } else if (tagName == 'AREA') {
      return {
        f : util.getHref(target),
        c : 'area:' + target.parentNode.name,
        cId : containerId
      };
    } else {
      let img, text;
      if(tagName == 'IMG') {
        img = target;
      }

      target = NodeH.parentNode(target, 'A');
      if(!target) return false;

      text = util.getText(target);

      return {
        f : util.getHref(target),
        c : text ? text : (img ? img.src.match(/[^\/]+$/) : ''),
        cId : containerId
      }; 
    }

    return false;
  }

  static getKeydown(e) {
    e = EventH.fix(e || event);
    if (e.keyCode != 13) return false;

    let target = e.target;
    let tagName = target.tagName;
    let containerId = util.getContainerId(target);

    if (tagName == 'INPUT') {
      let form = NodeH.parentNode(target, 'FORM');
      if (form) {
        let formId = form.id || '';
        let tId = target.id;
        let result = {
            f : form.action,
            c : 'form:' + (form.name || formId),
            cId : containerId
          };

        if (tId == 'kw' || tId == 'search-kw' || tId == 'kw1') {
          result.w = target.value;
        } 

        return result;
      }
    }
    return false;
  }
}