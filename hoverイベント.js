function passwordToggle(){
    const pass = document.getElementById("passwordClick");
    pass.type = pass.type === "password" ? "text" : "password";
}

function lockPass(){
    const pass = document.getElementById(`passwordClick`);
    const target = document.getElementById("lockedPassDiv");

    if(pass.value === "") return;

    pass.disabled = true;

    const p = document.createElement("p");
    p.innerHTML = pass.value;
    // マウスホバーの時は、addEventListener("mouseover", function())、それ以外の時は、addEventListener("mouseout", function())で実装できます。
    // ここからJavaScriptを記述してください。
    function hidePassword(){
        const hidePasswordString = '*';
        const hidepass = hidePasswordString.repeat(p.innerHTML.length);
        p.innerHTML = hidepass;
    };

    function showPassword(){
        p.innerHTML = pass.value;
    };
    // Lock Passwordを何回押しても何度も要素が表示されないように、appendをする前にtargetの中身を空にしてください。
    if(target.hasChildNodes())target.innerHTML = '';
    target.append(p);

    // ユーザーがマウスホバーした時
    p.addEventListener('mouseover', function(){
        hidePassword();
    });

    // ユーザーがマウスホバーしていない時
    p.addEventListener('mouseout', function(){
        showPassword();
    });
}
