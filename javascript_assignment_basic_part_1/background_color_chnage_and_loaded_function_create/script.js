function changeBackgroundColor () {
    document.body.style.backgroundColor = "blue";

    // call the function when the page loaded

    window.onload = changeBackgroundColor;
}