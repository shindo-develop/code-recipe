const animateMain = (currentEle, nextEle, clickButton) => {
    switch (clickButton){
        case "right":
            // 後ろ（右）に置いている要素が出てくるようにする
            sliderShow.innerHTML = '';
            sliderShow.append(extra);
            sliderShow.append(main);
            extra.append(currentEle);
            main.append(nextEle);
            extra.classList.add('deplete-animation');
            main.classList.add('expand-animation');
            break;
        case "left":
    };
};

// css------------------------------------------------
// .deplete-animation{
//     animation: deplete 1s linear forwards;
// }

// .expand-animation{
    // forwards -> 最後の状態を保持する
    // reverse -> アニメーションの逆再生
//     animation: deplete 1s linear reverse forwards;
// }

// @keyframes  deplete {
//     0%{
//         width: 100%;
//         opacity: 1;
//     }
//     100%{
//         width: 0%;
//         opacity: 0;
//     }
// }
