const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const htmlDirectory = path.join(__dirname, 'HTML'); // 请替换为您的HTML文件夹路径

app.get('/list-html-files', (req, res) => {
    fs.readdir(htmlDirectory, (err, files) => {
        if (err) {
            return res.status(500).send('无法读取文件夹内容');
        }
        const htmlFiles = files.filter(file => file.endsWith('.html'));
        res.json(htmlFiles);
    });
});

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});