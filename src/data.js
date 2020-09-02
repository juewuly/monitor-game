import EventH from './util/eventH';
import NodeH from './util/nodeH';
import elementHelper from './util/element';
import config from './config';

export default class data {
  static get Instance() {
    if (!this._instance) {
      this._instance = new data();
    }

    return this._instance;
  }

  constructor() {
  }

  getBaseData() {
    return {
      case_key: config.getProjectId(),
      biz_plat: 'term',
      log_name: 'custom_event',
      log_src: 'client',
      time_str: this.getCurrentTime(),
    };
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
      let form = NodeH.parentNode(target, 'FORM');
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

      target = NodeH.parentNode(target, 'A');
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
      let form = NodeH.parentNode(target, 'FORM');
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