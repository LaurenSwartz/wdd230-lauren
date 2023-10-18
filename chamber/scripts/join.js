timeStamp = document.getElementById("timestamp");

timeStamp.value = Date.now();

document.getElementById("formmessage").addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "thankyou.html";
});