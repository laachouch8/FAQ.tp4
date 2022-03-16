let question = document.querySelectorAll(".text .question");
let answer = document.querySelectorAll(".text .answer");

question.forEach((ele) => {
    ele.addEventListener('click', openDiv);
})

function openDiv() {
    question.forEach((ele) => {
        ele.classList.remove("open");
        this.classList.add("open");
    });
}