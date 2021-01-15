const {app, BrowserWindow,dialog} = require('electron')
const path = require('path')
const url = require('url')
var request = require('request');// 用于发起下载请求
var fs = require('fs'); //用于扩展内置 fs 方法
var AdmZip = require('adm-zip');
// var tar = require('tar');  // 用于执行 tar 解压缩

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
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
/**
 * 检测更新
 */
const baseUrl = "./";
const fileUrl = "https://tianshan277.github.io/uniapp/";//这里需要修改为自己的资源外网
(function () {
  return new Promise((resolve, reject) => {
    request(
        {
          url: `${fileUrl}package.json`,//请求package.json，与本地对比版本号
        },
        (error, res, body) => {
          try {
            if (error || res.statusCode !== 200) {
              throw '更新版本号失败，请联系管理员';
            }
            const json = JSON.parse(body);
            const { version, description } = json;
            const localVersion = app.getVersion();
            console.log(version, localVersion)
            if (version != localVersion) {
              win.webContents.send('updating', '更新中')
              console.log('need update')
              dialog.showMessageBox({
                    type: 'info',
                    title: '发现新版本',
                    message: '请点击按钮进行更新，预计持续几分钟，期间请不要操作，更新后会自动重启',
                    buttons: ['马上更新']
                  })
              win.setProgressBar(0.5);
              downLoad().then(() => {
                    console.log('update success')
                    //重写版本号到本地
                    fs.readFile(`${baseUrl}package.json`, function (err, data) {
                      if (err) {
                        return console.error(err);
                      }
                      let newData = JSON.parse(data);
                      newData.version = version;
                      fs.writeFile(`${baseUrl}package.json`, JSON.stringify(newData), function (err) {
                        if (err) {
                          return console.error(err);
                        }
                        // 重启
                        app.relaunch({ args: process.argv.slice(1) });
                        app.exit(0);
                      });
                    });
                  })
            } else {
              console.log('no update')
            }
          } catch (err) {
            reject(err);
          }
        })
  })
})()
/**
 * 更新
 */
const downLoad = () => {
  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(`/MyApp.zip`);
    const url = `${fileUrl}MyApp.zip`;
    console.log("url",url)
    request(url).pipe(stream).on('close', () => {
      // const unzip = new AdmZip(`./MyApp.zip`);   //下载压缩更新包
      const unzip = new AdmZip(url);   //下载压缩更新包
      unzip.extractAllTo(`./`, /*overwrite*/true);   //解压替换本地文件
      resolve()
    });
  })
}