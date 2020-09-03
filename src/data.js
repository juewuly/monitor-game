import EventH from './util/eventH';
import elementHelper from './util/element';
import nodeHelper from './util/nodeHelper';

class data {
  static get Instance() {
    if (!this._instance) {
      this._instance = new data();
    }

    return this._instance;
  }

  constructor() {
    // 发送打点信息时传递的基础参数
    this._baseData = {};
  }

  setBaseData(params) {
    const type = typeof params;
    if (type !== 'function' && type !== 'object') {
      console.error('参数类型错误，应该对象或方法。');
    }

    this._baseData = params;
  }

  getBaseData() {
    if (typeof this._baseData === 'function') {
      return this._baseData();
    }

    return this._baseData;
  }

  getCurrentTime() {
    const dtCur = new Date();
    const yearCur = dtCur.getFullYear();
    const monCur = dtCur.getMonth() + 1;
    const dayCur = dtCur.getDate();
    const hCur = dtCur.getHours();
    const mCur = dtCur.getMinutes();
    const sCur = dtCur.getSeconds();
    const timeCur = yearCur + "-" + (monCur < 10 ? "0" + monCur : monCur) + "-"
        + (dayCur < 10 ? "0" + dayCur : dayCur) + " " + (hCur < 10 ? "0" + hCur : hCur)
        + ":" + (mCur < 10 ? "0" + mCur : mCur) + ":" + (sCur < 10 ? "0" + sCur : sCur);
    return timeCur;
  }

  getClickData(e) {
    e = EventH.fix(e || event);
    let target = e.target;
    let tagName = target.tagName;
    let containerId = elementHelper.getContainerId(target);

    if (target.type && (target.type == 'submit' || target.type == 'button')) {
      let form = nodeHelper.parentNode(target, 'FORM');
      let result = {};

      if (form) {
        let formId = form.id || '';
        let tId = target.id;

        result = {
          // f : form.action,
          // c : 'form:' + (form.name || formId),
          event_key : containerId
        };

        if ((formId == 'search-form' || formId == 'searchForm') && (tId == 'searchBtn' || tId == 'search-btn')) {
          let keywordEl = $('kw') || $('search-kw') || $('kw1');
          result.w = keywordEl ? keywordEl.value : '';
        }
      } else {
        result = {
          // f : util.getHref(target),
          // c : util.getText(target),
          event_key : containerId
        }
      }

      return result;
    } else if (tagName == 'AREA') {
      return {
        // f : util.getHref(target),
        // c : 'area:' + target.parentNode.name,
        event_key : containerId
      };
    } else {
      let img, text;
      if(tagName == 'IMG') {
        img = target;
      }

      target = nodeHelper.parentNode(target, 'A');
      if(!target) return false;

      text = elementHelper.getText(target);

      return {
        // f : util.getHref(target),
        // c : text ? text : (img ? img.src.match(/[^\/]+$/) : ''),
        event_key : containerId
      }; 
    }

    return false;
  }

  getKeydownData(e) {
    e = EventH.fix(e || event);
    if (e.keyCode != 13) return false;

    let target = e.target;
    let tagName = target.tagName;
    let containerId = elementHelper.getContainerId(target);

    if (tagName == 'INPUT') {
      let form = nodeHelper.parentNode(target, 'FORM');
      if (form) {
        let formId = form.id || '';
        let tId = target.id;
        let result = {
            // f : form.action,
            // c : 'form:' + (form.name || formId),
            event_key : containerId
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

export default data.Instance;