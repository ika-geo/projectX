

// hide/show answers

let parent = document.querySelectorAll(".faq__item")
let question = document.querySelectorAll(".faq__question")


for(let i=0; i<question.length; i++){
    question[i].addEventListener('click', function (){
        parent[i].classList.toggle('closed')
    })
}

// hide/show all questions

let seeAll = document.querySelector(".faq__showAll")
let questionsBlock = document.querySelector('.faq__items')
let questionsBlockArrow = document.querySelector('.faq__showAll img')

seeAll.addEventListener("click", function (){
    questionsBlock.classList.toggle('hiddenQuestions')
    questionsBlockArrow.classList.toggle("opened")

})