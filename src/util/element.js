import config from '../config';
import StringH from './stringH';

const configInstance = config.Instance;

function getContainerId(el) {
  let areaStr;
  let name;
  let maxLength = 100;

  if(configInstance.areaIds) {
    areaStr = new RegExp('^(' + configInstance.areaIds.join('|') + ')$', 'ig');
  }

  const dataKey = configInstance.getDataKey();

  while (el) {
    //bk模式
    if (el.attributes && (dataKey in el.attributes || `data-${dataKey}` in el.attributes) ) {
      name = el.getAttribute(dataKey) || el.getAttribute(`data-${dataKey}`);

      if (name) {
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

function getText(el) {
  let str = "";

  if (el.tagName.toLowerCase() == 'input') {
    str = el.getAttribute('text') || el.getAttribute('data-text') || el.value || el.title || '';
  } else {
    str = el.getAttribute('text') || el.getAttribute('data-text') || el.innerText || el.textContent || el.title || '';
  }

  return StringH.trim(str).substr(0, 100);
}

export default {
  getContainerId,
  getText
}
