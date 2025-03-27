alert("안녕하세요! JavaScript를 배우고 있어요!");
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("myButton"); 
    const message = document.getElementById("message");
    button.addEventListener("click", function() {
        message.textContent = "버튼이 클릭되었습니다! 🎉";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("userInput");
    const button = document.getElementById("submitButton");
    const clearButton = document.getElementById("clearButton");
    const output = document.getElementById("output");
    
    const savedText = localStorage.getItem("userText");
    if (savedText) {
        output.textContent = "sage" + savedText;
        output.classList.add("show");
    }
    button.addEventListener("click", function() {
        const userText = input.value;
        if (userText.trim() === "") {
            output.textContent = "입력된 값이 없습니다"+ userText;
            output.classList.add("show");
        } else {
            output.textContent = userText; 
        }
});
clearButton.addEventListener("click", function() {
    localStorage.removeItem("userText");
    output.textContent = "저장된 값이 삭제됐습니다";
        setTimeout(() => {
        output.classList.remove("show");
        }, 500);
     });
});