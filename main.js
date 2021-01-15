const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
var request = require('request');// 用于发起下载请求
var fs = require('fs'); //用于扩展内置 fs 方法
// var tar = require('tar');  // 用于执行 tar 解压缩

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  console.log('本地版本号',app.getVersion())
  // Create the browser window.
  win = new BrowserWindow({width: 1200, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
  downloadFile("http://www.planwallpaper.com/static/images/butterfly-wallpaper.jpeg", "./butterfly-wallpaper.jpeg");
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

/**
 * 检测更新
 */
function downloadFile(file_url , targetPath){
  // Save variable to know progress
  var received_bytes = 0;
  var total_bytes = 0;

  var req = request({
    method: 'GET',
    uri: file_url
  });

  var out = fs.createWriteStream(targetPath);
  req.pipe(out);

  req.on('response', function ( data ) {
    // Change the total bytes value to get progress later.
    total_bytes = parseInt(data.headers['content-length' ]);
  });

  req.on('data', function(chunk) {
    // Update the received bytes
    received_bytes += chunk.length;

    showProgress(received_bytes, total_bytes);
  });

  req.on('end', function() {
    console.log(333333,"File succesfully downloaded")
    alert("File succesfully downloaded");
  });
}

function showProgress(received,total){
  var percentage = (received * 100) / total;
  console.log(percentage + "% | " + received + " bytes out of " + total + " bytes.");
}　　