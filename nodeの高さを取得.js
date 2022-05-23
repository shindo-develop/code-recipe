// nodeの高さの数値を取得
ele.offsetHeight;

// nodeの高さを単位付きで取得
ele.style.height;

const body = document.getElementsByTagName('body')[0];

const containsHeight = (ele) => {
    return ele.offsetHeight;
};

const incrementHeight = (ele) => {
    ele.style.height = ele.offsetHeight + 10 + 'px';
};

const decrementHeight = (ele) => {
    ele.style.height = ele.offsetHeight - 10 + 'px';
};

body.addEventListener('keydown', (event) => {
    console.log(event.key);
    const pBlock = document.getElementById('pBlock');
    if(event.key === "u")incrementHeight(pBlock);
    if(event.key === "d")decrementHeight(pBlock);
});
