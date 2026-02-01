function checkPassword(){
    const pwd = document.getElementById("passwordInput").value;
    const result = document.getElementById("strengthResult");
    let strength = "Weak ❌";

    if(pwd.length >=8 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd) && /[!@#$%^&*]/.test(pwd)){
        strength = "Strong ✅";
    }
    else if(pwd.length >=6){
        strength = "Medium ⚠️";
    }

    result.innerHTML = "Password Strength: " + strength;
}

/* Quiz 1 */
function quizAnswer1(ans){
    const result = document.getElementById("quizResult1");
    if(ans === "right"){
        result.innerHTML = "Correct ✅ This is a strong password!";
    } else {
        result.innerHTML = "Wrong ❌ Weak or guessable password.";
    }
}