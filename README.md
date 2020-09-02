> 打点SDK

* [Features](#features)
* [Installing](#installing)
* [Usage](#usage)
* [API](#api)
* [License](#license)

## Features
页面打点信息采集

## Installing

**NPM**
```bash
$ npm i monitor-game --save
```

**SCRIPT**
```bash
  <script type="text/javascript" src="https://unpkg.com/monitor-game/dist/monitor-game.min.js"></script>
```

## Usage
1. sdk在全局下的变量名是`MonitorGame`。
2. 设置项目标识`setProjectId('testProject')`。
3. 设置打点信息发送到的服务地址`setServiceUrl('apiUrl')`。
4. 监听点击事件，并统计打点信息`getClickAndKeydown`。
5. 在需要收集数据的标签上设置相关`data-wk`属性，如`<a href="#" data-wk="1111">test1</a>`，sdk会收集`data-wk`里的数据。

### Example
```javascript
  MonitorGame
    .setProjectId('testProject')
    .setServiceUrl('apiUrl')
    .getClickAndKeydown();
```

## API

**设置项目id**
```javascript
  MonitorGame.setProjectId('testProject');
```

**设置打点发送到的服务端url**
```javascript
  MonitorGame.setServiceUrl('apiUrl');
```

**手动发送打点（可选）**
```javascript
  MonitorGame.send({event_key: 'test'});
```
**监听点击事件进行打点**
```javascript
  MonitorGame.getClickAndKeydown();
```

## License
MIT



