const buttonHandler = event => {
    div.style.backgroundColor = text.value;
}

const button = document.getElementById("submit-button");
const text = document.getElementById("mytext");
const div = document.getElementById("change");
button.addEventListener("click", buttonHandler);

// final commit