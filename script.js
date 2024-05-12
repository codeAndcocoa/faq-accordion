//Variables
let questions = document.querySelectorAll(".faq");
let answers = document.querySelectorAll(".ans");
let plusIcons = document.querySelectorAll(".plus");
let minusIcons = document.querySelectorAll(".minus");
let counter = 0;


//Function to check if answer contains showAnswer class remove it ,otherwise add it
const toggleAnswers = (x) => {
  let parentElement = x.parentElement;
  if (!parentElement.querySelector(".ans").classList.contains("showAnswer")) {
    parentElement.querySelector(".ans").classList.add("showAnswer");
    parentElement.querySelector(".plus").style.display = "none";
    parentElement.querySelector(".minus").style.display = "block";
  } else {
    parentElement.querySelector(".ans").classList.remove("showAnswer");
    parentElement.querySelector(".plus").style.display = "block";
    parentElement.querySelector(".minus").style.display = "none";
  }
};


//Function to loop through answers to hide/show them
const faqSlider = (n) => {
  for (let i = 0; i < questions.length; i++) {
    if (n > questions.length) {
      counter = 1;
    } else if (n < 1) {
      counter = questions.length;
    }
    questions[i].nextElementSibling.classList.remove("showAnswer");
    questions[i].querySelector(".plus").style.display = "block";
    questions[i].querySelector(".minus").style.display = "none";
    questions[counter - 1].nextElementSibling.classList.add("showAnswer");
    questions[counter - 1].querySelector(".plus").style.display = "none";
    questions[counter - 1].querySelector(".minus").style.display = "block";
  }
};
//Event handlers 
//click on question to show/hide its answer
[...questions].forEach((question) => {
  question.addEventListener("click", () => {
    toggleAnswers(question);
  });
});

//press Up arrow key to hide/show answers downward
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    faqSlider((counter += 1));
  }
});


//press Up arrow key to hide/show answers upward
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    faqSlider((counter -= 1));
  }
});


