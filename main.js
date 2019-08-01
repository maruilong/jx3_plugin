const { app, BrowserWindow } = require('electron')

function createWindow () {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        transparent: true,
    })

    // 加载index.html文件
    const promise = win.loadFile('index.html');
    win.setAlwaysOnTop(true);
}

app.on('ready', createWindow);
