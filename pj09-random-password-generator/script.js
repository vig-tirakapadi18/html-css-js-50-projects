const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

const createPassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    input.value = password;
    alertContainer.innerText = password + " copied!"
};

const copyPassword = () => {
    input.select();
    input.setSelectionRange(0, 999);
    navigator.clipboard.writeText(input.value);
};

btn.addEventListener("click", () => {
    createPassword();
});

copyIcon.addEventListener("click", () => {
    copyPassword();
    if (input.value) {
        alertContainer.classList.remove("active");
        setTimeout(() => {
            alertContainer.classList.add("active");
        }, 2000)
    }
})