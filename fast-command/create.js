'use strict'
const { normal } = require('./normal');
const { component } = require('./component')
const path = require('path');
const yargs = require('yargs');
const fs = require('fs');
// 获取原本node指令的为键值对
const shellParams = yargs.argv;
const chalk = require('chalk');
const warning = chalk.keyword('orange');
const erroring = chalk.bold.red;
const successing = chalk.bold.green;


let mkdirPath;
let filePath;
let pageName;
let writeContain;
let createType;
let alertWord;
// 提示
function warn (type) {
    console.log(warning(
    `说明：create${type} 创建模块
    原命令:
    $ node fast-command/create.js
    npm指令:
    npm run create${type} [参数一] [参数二]
    参数:
        参数一: hookComponent 或 classComponent  
               **(必须) 创建模块风格类型选取
        参数二: 名称 
               **(必须) 模块名称 请采用驼峰命名法，否则首字母默认转换成大写
    指令每次仅创建一个模块
    `
    ))
    process.exit()
}
// 首字母转大写
function handlePagename (name) {
    let result;
    if(!name.match(/^[A-Z]/)) {
        name = name.split('')
        name[0] = name[0].toUpperCase()
        name = name.join('');
        result = name;
    } else {
        result = name;
    }
    return result;
}
// 参数校验
function check() {
    return new Promise((resolve,reject) => {
        console.log(shellParams)
        // 校验参数
        if(!shellParams._[0] || !shellParams._[1]) {
            shellParams.component ? alertWord = 'Component' : alertWord = '';
            reject({warning:'warning',data:alertWord})
        } 

        // 创建类型判断
        if(shellParams._[0].toLowerCase() === 'hookcomponent') {
            filePath = path.resolve(__dirname,'../template/template.hookComponent')
            pageName = handlePagename(shellParams._[1])
            shellParams.component ? createType='component' : createType = 'normal'
            resolve({filePath,pageName,createType})
            
        } else if(shellParams._[0].toLowerCase() === 'classcomponent') {
            filePath = path.resolve(__dirname,'../template/template.classComponent')
            pageName = handlePagename(shellParams._[1])
            shellParams.component ? createType='component' : createType = 'normal'
            resolve({filePath,pageName,createType})
    
        } else {
            reject({warning:'error',data:'请输入正确的组件风格选项'})
        }
    })
}
// 创建common方法
function common(targetPath,filePath,pageName) {
    mkdirPath = targetPath
    // 同步 文件内容读取处理
    writeContain = fs.readFileSync(filePath,'utf8').replace(/%name%/g,pageName)
    // 异步创建 创建文件夹
    fs.mkdir(mkdirPath,(err) => {
        if (err) {
            console.log(erroring(err));
            process.exit();
        }
        // 同步写入 index 样式文件
        fs.writeFileSync(`${mkdirPath}/index.js`,writeContain,'utf8');
        fs.writeFileSync(`${mkdirPath}/index.module.scss`,'','utf8');
        console.log(successing('模块创建成功！'))
    })
}
check()
.then(res => {
    if(res.createType === 'normal') common(normal(res.pageName),res.filePath,res.pageName)
    if(res.createType === 'component') common(component(res.pageName),res.filePath,res.pageName)
}).catch(error => {
    if(error.warning === 'warning') warn(error.data)
    if(error.warning === 'error') console.log(erroring(error.data))
    process.exit();
})

