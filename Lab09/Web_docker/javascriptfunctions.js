function changeTextColor() {
    const textR = document.getElementById("text_R").value;
    const textG = document.getElementById("text_G").value;
    const textB = document.getElementById("text_B").value;
    const paragraph = document.getElementById("paragraph");
    paragraph.style.color = `rgb(${textR},${textG},${textB})`;
}

function changeBorder() {
    const borderR = document.getElementById("border_R").value;
    const borderG = document.getElementById("border_G").value;
    const borderB = document.getElementById("border_B").value;
    const borderWidth = document.getElementById("border_width").value;
    const paragraph = document.getElementById("paragraph");        
    paragraph.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    paragraph.style.borderWidth = `${borderWidth}px`;
}

function changeBackgroundColor() {
    const bgR = document.getElementById("bg_R").value;
    const bgG = document.getElementById("bg_G").value;
    const bgB = document.getElementById("bg_B").value;
    const paragraph = document.getElementById("paragraph");
    paragraph.style.backgroundColor = `rgb(${bgR},${bgG},${bgB})`;
}

function verifyPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password.length < 8 || confirmPassword.length < 8) {
        alert("Both Passwords must be at least 8 characters long. Try Again!");
    } else if ((password.length >= 8 && confirmPassword.length >= 8) && password !== confirmPassword) {
        alert("Passwords do not match. Try Again!");
    } else {
	alert("Passwords Match!");
    }
}