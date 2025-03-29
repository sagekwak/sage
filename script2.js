alert("곽세희 월드에 오신 걸 화녕합니다~");

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("myButton");
    const message = document.getElementById("message");
    const input = document.getElementById("userInput");
    const submitButton = document.getElementById("submitButton");
    const clearButton = document.getElementById("clearButton");
    const output = document.getElementById("output");
    const bgbutton = document.getElementById("bgButton");
    const savedText = localStorage.getItem("saveText");
    if (bgbutton) {
        bgbutton.addEventListener("click", function() {
            const currentBgColor = getComputedStyle(document.body).backgroundColor;
            if (currentBgColor === "rgb(35, 120, 217)") {
                document.body.style.backgroundColor = "rgb(173, 216, 230)";
                bgbutton.style.backgroundColor = "rgb(35, 120, 217)";
                bgbutton.style.color = "white";
                bgbutton.textContent = "배경색이 바뀌었어요! 신기하쥬~?🤗 다시 누르면 원래대로 돌아가요.";
            } else {
                document.body.style.backgroundColor = "rgb(35, 120, 217)";
                bgbutton.style.backgroundColor = "rgb(255, 255, 255)";
                bgbutton.style.color = "rgb(35, 120, 217)";
                bgbutton.textContent = "배경색 버튼";
            }
        });
    }
    if (savedText) {
        output.textContent = savedText;
    }
    if (button) {
        button.addEventListener("click", function() {
            message.textContent = "버튼이 클릭되었습니다!🎉 위치바꾸는법 모름 ㅋㅋ";
            if (button.style.backgroundColor === "white") {
                button.style.backgroundColor = "yellow";
                button.style.color = "rgb(35, 120, 217)";
                button.textContent = "버튼 색이 바껴용~신기하쥬?🤗";
            } else {
                button.style.backgroundColor = "white";
                button.style.color = "rgb(35, 120, 217)";
                button.textContent = "버튼 색이 바껴용~눌러봐유?🤗";
            }
        });
    }
    if (submitButton) {
        submitButton.addEventListener("click", function() {
            const userText = input.value.trim();
            if (userText !== "") {
                localStorage.setItem("saveText", userText);
                output.textContent = userText;
            } else {
                output.textContent = "내용을 입력해주세요!";
            }
        });
    }
    if(clearButton) {
        clearButton.addEventListener("click", function() {
            localStorage.removeItem("saveText");
            output.textContent = "저장된 내용이 삭제됐어요.";
    });
}
});
