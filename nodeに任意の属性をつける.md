## data-***属性は要素に任意のキーと値を付与する際に使用する
```html
<div id="div" data-secret="hello,world"></div>
```

## JavaScript上で受け取るには
```js
const div = document.getElementById('div');
// element.getAttribute('data-secret');で受け取る
div.getAttribute('data-secret');
```
