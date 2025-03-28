alert("곽세희 월드에 오신 걸 화녕합니다~");

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("myButton");
    const message = document.getElementById("message");
    const input = document.getElementById("userInput");
    const submitButton = document.getElementById("submitButton");
    const clearButton = document.getElementById("clearButton");
    const output = document.getElementById("output");

    const savedText = localStorage.getItem("saveText");
    if (savedText) {
        output.textContent = savedText;
    }
    if (button) {
        button.addEventListener("click", function() {
            message.textContent = "버튼이 클릭되었습니다!🎉 위치바꾸는법 모름 ㅋㅋ";
        });
    }
    submitButton.addEventListener("click", function() {
        const userText = input.value.trim();
        if (userText !== "") {
            localStorage.setItem("saveText", userText);
            output.textContent = userText;
        } else {
            output.textContent = "내용을 입력해주세요!";
        }
    });
    clearButton.addEventListener("click", function() {
        localStorage.removeItem("saveText");
        output.textContent = "저장된 내용이 삭제됐어요.";
    });
});
