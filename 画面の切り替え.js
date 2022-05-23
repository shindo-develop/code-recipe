// 引数に与えたnodeを非表示にする
const displayNone = (ele) => {
    ele.classList.add("d-none");
    ele.classList.remove("d-block");
};

// 引数に与えたnodeを表示する
const displayBlock = (ele) => {
    ele.classList.add("d-block");
    ele.classList.remove("d-none");
};

// 引数に与えたnodeの表示、非表示を切り替える
const displayToggle = (ele1, ele2) => {
    if(ele1.classList.contains("d-none")){
        displayBlock(ele1);
        displayNone(ele2);
    }else{
        displayBlock(ele2);
        displayNone(ele1);
    };
};
