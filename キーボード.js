const body = document.getElementsByTagName('body')[0];

body.addEventListener('keydown', (event) => {
    // 打ち込んだキーの値を取得 -> f
    console.log(event.key);
    // 打ち込んだキーの正式名称を取得 -> KeyF
    console.log(event.code);
});
