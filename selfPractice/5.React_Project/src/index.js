// src/index.js 是js的入口文件

import ReactDOM from 'react-dom/client'  //在react 18 版本将react-dom分为两部分,
                                         //一部分是浏览器端渲染页面的库(client),另一部分是服务器端渲染页面的库(serve)
const App= <div>
<h1>这是一个react项目</h1>
<p>第一个项目!!!!</p>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(App)

//执行npx react-scripts build命令将自动调用webpack对react项目进行打包,生成一个build文件夹,但对内容进行修改后,不能实时更新,需重新打包
//npx react-scripts start 可对项目进行实时更新,此时注意安装live serve 插件,并在设置中打开autosave,实现对文档的实时保存