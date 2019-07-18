# MADP UI

## Docs

* [文档]：docs文件夹下 index.html

## Demo



## Installation

```shell

npm run dev 打包实时编译
npm run serve 启服务
npm run doc 生成API文档

浏览器输入
http://localhost:8088/dist/examples/
可看实例



WEEX中使用madp-ui时
npm i madp-ui -S

```

## Usage

```html
<template>
  <div>
    <mp-cell leftTxt="标题" title="这是具体内容" btnTxt="按钮" :cellStyle="cellStyle" hasTopBorder="1" hasBottomBorder="1" @cellClick="cellClick"></mp-cell>
  </div>
</template>

<script>
  import { MpCell } from 'madp-ui';

 export default {
    components: { MpCell},
    data() {
    return {
      cellStyle:{"background-color":"#fff"},
      };
    },
    methods: {
      cellClick() {
        alert("触发了");
      }
    }
  };
</script>
```
传入json数据，组件请求json
样式格式分类