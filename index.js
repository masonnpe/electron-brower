var app  = require('app')
var BrowserWindow = require('browser-window')

var mainWindow = null
var log=require('electron-log')
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})


app.on('ready', function () {
  log.error('start.......')
  var size = require('screen').getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({ width: size.width, height: size.height, frame: false })//设置全屏
  mainWindow.loadUrl('file://' + require('path').join(__dirname, 'browser.html'))
  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
