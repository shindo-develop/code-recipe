// パスワードの入力欄を取得
const pass = document.getElementById("passwordClick");

// パスワードの表示非表示を切り替える
function passwordToggle(){
    pass.type = pass.type === "password" ? "text" : "password";
}

// ロックボタンを取得
const lockButton = document.getElementById('lock-password');

// passwordの入力をできなくする
function addDisabled(){
    pass.disabled = true;
};

// 現在入力されているパスワードを取得し、表示する
function outputPassword(){
    const container = document.getElementById('lockedPassDiv');
    const outputP = document.createElement('p');
    const inputPass = pass.value;
    outputP.innerText = inputPass;
    container.appendChild(outputP);
};

// ロックボタンがクリックされたら、パスワードの入力をできなくし、パスワードを下に表示させる
lockButton.addEventListener('click', function(){
    addDisabled();
    outputPassword();
})
