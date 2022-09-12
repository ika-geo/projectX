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


// fixed header

// let header = document.querySelector(".header")
//
// window.addEventListener("scroll", function (){
//     if (window.scrollY>50&&window.innerWidth>768){
//         header.classList.add("fixed")
//     }
//     else {
//         header.classList.remove("fixed")
//     }
// })


// burgerMenu

let burger = document.querySelector(".burger")
let menu = document.querySelector('.header__menu')

burger.addEventListener('click', function (){
    burger.classList.toggle("open")
    menu.classList.toggle('open')
})