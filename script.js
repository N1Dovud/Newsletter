const submitButton = document.getElementById("submit");
const input = document.getElementById("email");
const signUp = document.getElementById("sign-up");
const success = document.getElementById("success");
const error = document.getElementById("error");
const button = document.querySelector("button");
const validEmail = () => {
    const regex = /^.+@.+\..+$/;
    return regex.test(input.value);
}
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (validEmail()) {
        signUp.style.display = "none"; 
        success.style.display = "block";
    } else {
        error.style.display = "block";
        input.classList.add("error-input");
    }
})
button.addEventListener("click", () => {
    success.style.display = "none";
    signUp.style.display = "flex";
    input.classList.remove("error-input");
    error.style.display = "none";
    input.value = "";
})