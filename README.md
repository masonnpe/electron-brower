#### 使用步骤

```
git clone https://github.com/masonnpe/electron-browser
cd electron-browser
npm install -d
npm start
```
#### 配置

在config.js修改首页

![brower](http://wx3.sinaimg.cn/large/007iUdjSgy1g39tm4uk9zj31hc0sxhdt.jpg)

修复某些链接不能跳转的bug

```
    webview.removeEventListener('new-window',this.newWindowOpen)
    webview.addEventListener('new-window', this.newWindowOpen)

```

