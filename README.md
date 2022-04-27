# ppfish
https://nsfi.github.io/ppfish-components/#/components/

# package.json说明
ts-loader: 支持 ts 和 tsx 文件的处理

chalk@4.1.2: 美化终端输出，安装特定版本是为了处理模块化包的问题

html-webpack-plugin: 将 /public/index.html 作为模板入口文件打包

progress-bar-webpack-plugin: 美化 webpack 编译时候的进度条

style-loader: 将 css 注入到 HTML 的内联样式

css-loader: 用于加载 CSS 文件，转化 CSS 为 CommonJS

postcss postcss-loader:  用于处理 CSS 兼容性

autoprefixer: 用于自动根据兼容需求增加 CSS 属性的前缀

mini-css-extract-plugin: 用于将 CSS 导出到单独文件

terser-webpack-plugin: 用于做源代码压缩

@babel/core babel-loader: babel 核心和加载器

core-js: core-js 中有各种各样的 pollyfill，用于提升兼容性

@babel/preset-env @babel/preset-react: 预制环境

@babel/plugin-transform-runtime: 统一的 pollyfill，打包时候加载到代码中，减少冗余代码

