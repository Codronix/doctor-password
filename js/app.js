document.getElementById("btnGenerate").onclick = function() {
    document.getElementById("txtPassword").value = generatePassword();
};

document.getElementById("btnCopy").onclick = function() { 
    copyToClipboard(document.getElementById("txtPassword").value);
    Toastify({
        text: "Password copied to clipboard!",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}
