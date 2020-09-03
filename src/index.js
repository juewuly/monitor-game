/**
 * @author: liuyang9
 * @description: monitor的api
 */

import monitor from './monitor';
import data from './data';

export default {
  // 获取版本号
  version: monitor.version,
  // 设置项目标识
  setProjectId: monitor.setProjectId,
  // 设置服务端url
  setServiceUrl: monitor.setServiceUrl,
  // 监听单击事件的数据采集
  getClickAndKeydown: monitor.getClickAndKeydown,
  // 发送打点信息
  send: monitor.send,
  setBaseLogParams: monitor.setBaseLogParams,
  getCurrentTime: data.getCurrentTime
}