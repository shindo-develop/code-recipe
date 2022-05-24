// パスワードを表示、非表示を切り替えるチェックボックスを取得
const checkBox = document.getElementById('passwordClickCheck');

function passwordToggle(){
    // パスワード入力欄を取得
    const pass = document.getElementById("passwordClick");
    pass.type = pass.type === "password" ? "text" : "password";
};

// addEventListenerの第二引数は関数の形で渡してあげること
// () => {} or function(){}
// 関数名で渡すと関数を実行した結果の値が返ってきてしまう
// ここではあくまでもエベントハンドラーとして実行したい関数を関数の形で渡すことが重要
checkBox.addEventListener('click', () => {
    passwordToggle(passwordClick);
});

checkBox.addEventListener('click', function(){
    passwordToggle(passwordClick);
});
