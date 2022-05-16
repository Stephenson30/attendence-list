let inputEl = document.getElementById("input-el")
let subBtn = document.getElementById("sub-btn")
let ulEl = document.getElementById("ul-el")

subBtn.addEventListener("click", function(){
    if (inputEl.value === "") {
    return;
    }
    else {
        let Li = `<li> ${inputEl.value} is present </li>`;
        ulEl.innerHTML += Li;
        inputEl.value = "";
    }
})